import { useEffect, useRef, useState } from "react";
import { buildExtra, type Kit } from "@/components/sims/stage3d-extra";
import { legends, swatchColor } from "@/components/sims/stage3d-legend";

type Three = typeof import("three");
type Sprite = InstanceType<Three["Sprite"]>;
type Group = InstanceType<Three["Group"]>;
type Mesh = InstanceType<Three["Mesh"]>;

const CREAM = 0xf4efe6;
const GOLD = 0xf0c14a;
const CLAY = 0xc4623a;
const RUST = 0xb5461f;
const INK = 0x3a332c;

function smooth(u: number) {
  const x = Math.min(1, Math.max(0, u));
  return x * x * (3 - 2 * x);
}

function lambert(THREE: Three, color: number, opacity = 1) {
  return new THREE.MeshLambertMaterial({
    color,
    transparent: opacity < 1,
    opacity,
    depthWrite: opacity >= 1,
  });
}

function label(THREE: Three, text: string, width = 1.7): Sprite {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 160;
  const g = canvas.getContext("2d");
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ transparent: true }));
  if (!g) return sprite;
  g.clearRect(0, 0, 512, 160);
  g.textAlign = "center";
  g.textBaseline = "middle";
  let size = 64;
  g.font = `600 ${size}px Georgia, serif`;
  while (g.measureText(text).width > 470 && size > 28) {
    size -= 4;
    g.font = `600 ${size}px Georgia, serif`;
  }
  // Nền chỉ vừa khít chữ, để chữ ngắn vẫn đủ lớn mà không che hình.
  const bar = Math.min(504, g.measureText(text).width + 56);
  g.fillStyle = "rgba(20,17,14,0.9)";
  g.fillRect(256 - bar / 2, 28, bar, 104);
  g.fillStyle = "#f4efe6";
  g.fillText(text, 256, 80);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  const mat = sprite.material as InstanceType<Three["SpriteMaterial"]>;
  mat.map = tex;
  mat.depthTest = false;
  sprite.renderOrder = 10;
  const w = Math.max(width, 1.45);
  sprite.scale.set(w, w * 0.31, 1);
  return sprite;
}

function peg(THREE: Three, x: number, h: number, color: number, w = 0.28) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, 1, 0.28), lambert(THREE, color));
  mesh.scale.y = Math.max(0.05, h);
  mesh.position.set(x, -1.05 + mesh.scale.y / 2, 0);
  return mesh;
}

function show(list: Sprite[], index: number) {
  list.forEach((item, i) => {
    item.visible = i === index;
  });
}

type Update = (dt: number, t: number, say: (line: string) => void) => void;
type Lang = "vi" | "en";

let line: (vi: string, en: string) => string = (vi) => vi;

function L(vi: string, en: string) {
  return line(vi, en);
}

function build(THREE: Three, kind: string, world: Group): Update {
  const extra = buildExtra(THREE, kind, world, { L, label, peg, lambert, smooth, CREAM, GOLD, CLAY, RUST, INK } satisfies Kit);
  if (extra) return extra;
  if (kind === "field") return field(THREE, world);
  if (kind === "seats") return seats(THREE, world);
  if (kind === "group") return group(THREE, world);
  if (kind === "fraction") return fraction(THREE, world);
  if (kind === "meet") return meet(THREE, world);
  if (kind === "plus") return plus(THREE, world);
  if (kind === "times") return times(THREE, world);
  if (kind === "flip") return flip(THREE, world);
  if (kind === "cols" || kind === "cols-bin" || kind === "cols-ghost" || kind === "cols-cdf") return cols(THREE, world, kind);
  if (kind === "level") return level(THREE, world);
  if (kind === "bell" || kind === "bell-area") return bell(THREE, world, kind === "bell-area");
  if (kind === "ruler") return ruler(THREE, world);
  if (kind === "pile") return pile(THREE, world);
  if (kind === "covers") return covers(THREE, world);
  if (kind === "bias") return bias(THREE, world);
  if (kind === "divide") return divide(THREE, world);
  if (kind === "priorbar") return priorbar(THREE, world);
  if (kind === "jobs") return jobs(THREE, world);
  if (kind === "line" || kind === "line-fit" || kind === "line-resid") return fitLine(THREE, world, kind);
  if (kind === "r2") return r2(THREE, world);
  if (kind === "band") return band(THREE, world);
  if (kind === "zero") return zero(THREE, world);
  if (kind === "bowl" || kind === "bowl-fast") return bowl(THREE, world, kind === "bowl-fast");
  if (kind === "many") return many(THREE, world);
  if (kind === "held") return held(THREE, world);
  if (kind === "vif") return vif(THREE, world);
  if (kind === "dummy") return dummy(THREE, world);
  if (kind === "pick") return pick(THREE, world);
  if (kind === "escape") return escape(THREE, world);
  if (kind === "sig") return sig(THREE, world);
  if (kind === "odds") return odds(THREE, world);
  if (kind === "cm") return cm(THREE, world);
  if (kind === "pr") return pr(THREE, world);
  if (kind === "roc") return roc(THREE, world);
  if (kind === "rests") return rests(THREE, world);
  if (kind === "split") return split(THREE, world);
  if (kind === "gini") return gini(THREE, world);
  if (kind === "deep") return deep(THREE, world);
  if (kind === "raw") return raw(THREE, world);
  if (kind === "km") return km(THREE, world);
  if (kind === "elbow") return elbow(THREE, world);
  if (kind === "merge") return merge(THREE, world);
  if (kind === "tok") return tok(THREE, world);
  if (kind === "bow") return bow(THREE, world);
  if (kind === "tfidf") return tfidf(THREE, world);
  if (kind === "edit") return edit(THREE, world);
  if (kind === "steps") return steps(THREE, world);
  if (kind === "target") return target(THREE, world);
  return field(THREE, world);
}

function field(THREE: Three, world: Group): Update {
  const dots: Mesh[] = [];
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 6; c++) {
      const gold = (c * 3 + r) % 5 === 0;
      const dot = new THREE.Mesh(new THREE.SphereGeometry(0.09, 12, 12), lambert(THREE, gold ? GOLD : CREAM));
      dot.position.set((c - 2.5) * 0.58, (r - 1.5) * 0.5, 0);
      world.add(dot);
      dots.push(dot);
    }
  }
  const frame = new THREE.Group();
  const edge = new THREE.MeshBasicMaterial({ color: GOLD });
  const hw = 0.62;
  const hh = 0.52;
  const t = 0.045;
  [
    [0, hh, hw * 2 + t, t],
    [0, -hh, hw * 2 + t, t],
    [-hw, 0, t, hh * 2],
    [hw, 0, t, hh * 2],
  ].forEach(([x, y, w, h]) => {
    const bar = new THREE.Mesh(new THREE.BoxGeometry(w, h, 0.02), edge);
    bar.position.set(x, y, 0);
    frame.add(bar);
  });
  world.add(frame);
  const captions = ["3%", "2%", "4%"].map((text) => label(THREE, text, 1.15));
  captions.forEach((cap) => world.add(cap));
  const whole = label(THREE, L("cả nguồn", "whole source"), 1.5);
  whole.position.set(0, 1.45, 0);
  world.add(whole);
  const spots = [
    [1, 1],
    [4, 2],
    [2, 0],
  ];
  return (_dt, t, say) => {
    const i = Math.floor(t / 2.2) % spots.length;
    const [c, r] = spots[i];
    frame.position.set((c - 2.5) * 0.58, (r - 1.5) * 0.5, 0.05);
    captions.forEach((cap, index) => {
      cap.visible = index === i;
      cap.position.set(frame.position.x, frame.position.y - 0.95, 0.2);
    });
    say(i === 0 ? L("Khung là một tuần. Đám chấm là cả nguồn.", "The frame is one week. The dots are the whole source.") : L("Đổi khung, phần trăm đổi. Cả nguồn không đổi.", "Move the frame, the percent changes. The source does not."));
  };
}

function seats(THREE: Three, world: Group): Update {
  const slots = [-1.25, 0, 1.25];
  slots.forEach((x) => {
    const chair = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.08, 0.5), lambert(THREE, INK));
    chair.position.set(x, -0.85, 0);
    world.add(chair);
  });
  const colors = [GOLD, CLAY, CREAM];
  const names = ["A", "B", "C"];
  const balls = names.map((name, i) => {
    const ball = new THREE.Mesh(new THREE.SphereGeometry(0.28, 20, 20), lambert(THREE, colors[i]));
    const tag = label(THREE, name, 0.7);
    tag.position.set(0, 0.55, 0);
    ball.add(tag);
    world.add(ball);
    return ball;
  });
  const orders = [
    [0, 1, 2],
    [0, 2, 1],
    [2, 0, 1],
    [2, 1, 0],
    [1, 2, 0],
    [1, 0, 2],
  ];
  const captions = orders.map((order) => label(THREE, order.map((i) => names[i]).join("  "), 2.2));
  captions.forEach((cap) => {
    cap.position.set(0, 1.25, 0);
    world.add(cap);
  });
  let step = 0;
  let from = 0;
  const ang = slots.map((_, i) => i);
  return (_dt, t, say) => {
    const span = 1.6;
    const k = Math.floor(t / span);
    if (k !== step) {
      step = k;
      from = t;
    }
    const n = orders.length;
    const idx = ((k % n) + n) % n;
    const perm = orders[idx];
    const prev = orders[(idx + n - 1) % n];
    const u = smooth((t - from) / 0.7);
    balls.forEach((ball, i) => {
      const x = slots[prev[i]] + (slots[perm[i]] - slots[prev[i]]) * u;
      ball.position.set(x, -0.35, 0);
    });
    show(captions, idx);
    void ang;
    say(L("Đổi chỗ là một cách xếp khác.", "A new seat order is a new arrangement."));
  };
}

function group(THREE: Three, world: Group): Update {
  const cluster = new THREE.Group();
  world.add(cluster);
  [GOLD, CLAY, CREAM].forEach((color, i) => {
    const ball = new THREE.Mesh(new THREE.SphereGeometry(0.32, 18, 18), lambert(THREE, color));
    ball.position.set((i - 1) * 0.75, i === 1 ? 0.35 : -0.15, 0);
    cluster.add(ball);
  });
  const cap = label(THREE, L("vẫn là 1 bộ", "still 1 set"), 2);
  cap.position.set(0, 1.3, 0);
  world.add(cap);
  return (_dt, t, say) => {
    cluster.rotation.y = Math.sin(t * 0.7) * 0.6;
    cluster.position.y = Math.sin(t * 0.9) * 0.08;
    say(L("Xoay cả cụm không tạo thêm một bộ mới.", "Spinning the cluster does not make a new set."));
  };
}

function fraction(THREE: Three, world: Group): Update {
  for (let i = 0; i < 10; i++) {
    const gold = i < 2;
    const ball = new THREE.Mesh(new THREE.SphereGeometry(0.16, 14, 14), lambert(THREE, gold ? GOLD : CREAM));
    ball.position.set((i - 4.5) * 0.38, gold ? 0.15 : 0, 0);
    world.add(ball);
  }
  const cap = label(THREE, L("2 trong 10  =  0,2", "2 of 10 = 0.2"), 2.6);
  cap.position.set(0, 1.15, 0);
  const scale = label(THREE, L("0 không xảy ra  ·  1 chắc xảy ra", "0 never  ·  1 certain"), 3.1);
  scale.position.set(0, -1.15, 0);
  world.add(cap, scale);
  return (_dt, t, say) => {
    world.children.forEach((child, i) => {
      if (i < 2) child.position.y = 0.15 + Math.sin(t * 3 + i) * 0.06;
    });
    say(L("Đếm viên thuận, chia cho tất cả. Ra một số từ 0 đến 1.", "Count the favorable ones, divide by all. A number from 0 to 1."));
  };
}

function meet(THREE: Three, world: Group): Update {
  const a = new THREE.Mesh(new THREE.SphereGeometry(0.32, 16, 16), lambert(THREE, GOLD, 0.9));
  const b = new THREE.Mesh(new THREE.SphereGeometry(0.32, 16, 16), lambert(THREE, CLAY, 0.9));
  const tagA = label(THREE, L("gửi form", "sent form"), 1.35);
  const tagB = label(THREE, L("từ GDN", "from GDN"), 1.25);
  tagA.position.y = 0.55;
  tagB.position.y = 0.55;
  a.add(tagA);
  b.add(tagB);
  const yes = label(THREE, L("cùng được", "can meet"), 1.5);
  const c = new THREE.Mesh(new THREE.SphereGeometry(0.28, 16, 16), lambert(THREE, CREAM));
  const d = new THREE.Mesh(new THREE.SphereGeometry(0.28, 16, 16), lambert(THREE, INK));
  const tagC = label(THREE, L("gửi", "sent"), 0.9);
  const tagD = label(THREE, L("không gửi", "not sent"), 1.45);
  tagC.position.y = 0.5;
  tagD.position.y = 0.5;
  c.add(tagC);
  d.add(tagD);
  const no = label(THREE, L("không cùng được", "cannot meet"), 2);
  world.add(a, b, yes, c, d, no);
  return (_dt, t, say) => {
    const gap = 0.35 + (0.5 + 0.5 * Math.sin(t * 1.1)) * 0.7;
    a.position.set(-1.7 - gap, 0.15, 0);
    b.position.set(-1.7 + gap, 0.15, 0);
    yes.position.set(-1.7, -0.85, 0);
    yes.visible = gap < 0.7;
    c.position.set(1.35, 0.15, 0);
    d.position.set(2.15, 0.15, 0);
    no.position.set(1.75, -0.85, 0);
    say(L("Gửi form và từ GDN gặp được nhau. Gửi và không gửi thì không.", "Form and GDN can meet. Sent and not sent cannot."));
  };
}

function plus(THREE: Three, world: Group): Update {
  const left = new THREE.Mesh(new THREE.SphereGeometry(0.7, 24, 24), lambert(THREE, GOLD, 0.55));
  const right = new THREE.Mesh(new THREE.SphereGeometry(0.7, 24, 24), lambert(THREE, CLAY, 0.55));
  left.position.x = -0.45;
  right.position.x = 0.45;
  const raw = label(THREE, L("0,08 + 0,40 = 0,48", "0.08 + 0.40 = 0.48"), 2.7);
  const fix = label(THREE, L("0,48 − 0,05 = 0,43", "0.48 − 0.05 = 0.43"), 2.7);
  raw.position.set(0, 1.05, 0);
  fix.position.set(0, 1.05, 0);
  const mid = label(THREE, L("chỗ chồng", "overlap"), 1.4);
  mid.position.set(0, -0.15, 0.2);
  world.add(left, right, raw, fix, mid);
  return (_dt, t, say) => {
    const p = t % 5;
    const fixing = p > 2.3;
    raw.visible = !fixing;
    fix.visible = fixing;
    const gap = fixing ? 0.38 : 0.85;
    left.position.x = -gap;
    right.position.x = gap;
    say(fixing ? L("Trừ chỗ chồng 0,05. Còn 0,43.", "Subtract the overlap 0.05. Left with 0.43.") : L("Cộng thẳng ra 0,48, chỗ chồng bị tính hai lần.", "Adding straight gives 0.48. The overlap was counted twice."));
  };
}

function times(THREE: Three, world: Group): Update {
  const doorA = new THREE.Mesh(new THREE.BoxGeometry(0.12, 1.15, 0.12), lambert(THREE, GOLD));
  const doorB = new THREE.Mesh(new THREE.BoxGeometry(0.12, 1.15, 0.12), lambert(THREE, CLAY));
  doorA.position.set(-1.15, 0.2, 0);
  doorB.position.set(1.15, 0.2, 0);
  const tagA = label(THREE, L("cửa 1 · 0,40", "door 1 · 0.40"), 1.55);
  const tagB = label(THREE, L("cửa 2 · 0,10", "door 2 · 0.10"), 1.55);
  tagA.position.set(-1.15, -0.75, 0);
  tagB.position.set(1.15, -0.75, 0);
  const ball = new THREE.Mesh(new THREE.SphereGeometry(0.18, 16, 16), lambert(THREE, CREAM));
  const out = label(THREE, L("0,40 × 0,10 = 0,04", "0.40 × 0.10 = 0.04"), 2.6);
  out.position.set(0, 1.15, 0);
  world.add(doorA, doorB, tagA, tagB, ball, out);
  return (_dt, t, say) => {
    const cycle = t % 5.4;
    const travel = Math.min(cycle, 2.4) / 2.4;
    ball.position.set(-2.35 + travel * 3.7, 0.2, 0);
    const passed = cycle > 2.15;
    out.visible = passed;
    say(passed ? L("Qua cả hai cửa. 0,40 × 0,10 = 0,04.", "Through both doors. 0.40 × 0.10 = 0.04.") : L("Cửa 2 là form khi đã biết từ GDN.", "Door 2 is the form rate once you know it is GDN."));
  };
}

function flip(THREE: Three, world: Group): Update {
  const wordA = label(THREE, L("có form", "form"), 1.5);
  const numA = label(THREE, "1", 0.8);
  const wordB = label(THREE, L("không", "none"), 1.3);
  const numB = label(THREE, "0", 0.8);
  wordA.position.set(-0.9, 0.2, 0);
  numA.position.set(-0.9, 0.2, 0);
  wordB.position.set(0.9, 0.2, 0);
  numB.position.set(0.9, 0.2, 0);
  world.add(wordA, numA, wordB, numB);
  return (_dt, t, say) => {
    const showNum = Math.sin(t * 1.2) > 0;
    wordA.visible = !showNum;
    wordB.visible = !showNum;
    numA.visible = showNum;
    numB.visible = showNum;
    say(showNum ? L("Có số rồi mới tính trung bình được.", "Once it is a number, you can average it.") : L("Mỗi việc cần được gán một số.", "Each event needs a number."));
  };
}

function cols(THREE: Three, world: Group, kind: string): Update {
  const heights = kind === "cols-bin" ? [0.35, 0.7, 1.15, 1.6, 1.35, 0.8, 0.4, 0.2] : [0.4, 0.7, 1.2, 1.7, 1.45, 0.85, 0.45, 0.25];
  const bars = heights.map((h, i) => {
    const hot = kind === "cols-bin" ? i === 3 : i === 3;
    const mesh = peg(THREE, (i - 3.5) * 0.42, h, hot ? GOLD : CREAM);
    world.add(mesh);
    return mesh;
  });
  const slab = new THREE.Mesh(new THREE.BoxGeometry(0.9, 1.9, 0.45), lambert(THREE, GOLD, 0.35));
  slab.visible = kind === "cols-cdf";
  world.add(slab);
  const cap =
    kind === "cols-cdf"
      ? label(THREE, L("ít hơn 2 = cột 0 + cột 1", "under 2 = bar 0 + bar 1"), 3)
      : kind === "cols-bin"
        ? label(THREE, L("cột vàng gần n × p", "gold bar near n × p"), 2.4)
        : kind === "cols-ghost"
          ? label(THREE, L("chưa có số liệu", "no data yet"), 2.1)
          : label(THREE, L("mỗi số một cột", "one bar per number"), 2);
  cap.position.set(0, 1.35, 0);
  world.add(cap);
  return (_dt, t, say) => {
    const appear = kind === "cols-ghost" ? 0.2 + 0.8 * smooth(((t % 4) - 0.2) / 1.5) : 1;
    bars.forEach((mesh, i) => {
      const h = heights[i] * (kind === "cols-ghost" ? appear : smooth(Math.min(1, t * 0.8 - i * 0.03)));
      mesh.scale.y = Math.max(0.04, h);
      mesh.position.y = -1.05 + mesh.scale.y / 2;
      const mat = mesh.material as InstanceType<Three["MeshLambertMaterial"]>;
      mat.transparent = kind === "cols-ghost";
      mat.opacity = kind === "cols-ghost" ? appear : 1;
    });
    if (kind === "cols-cdf") {
      const w = 0.2 + smooth(Math.min(1, Math.max(0, (t % 5) / 1.6))) * 1.5;
      slab.scale.x = w;
      slab.position.set(-1.55 + w * 0.42, 0, 0);
    }
    say(
      kind === "cols-cdf"
        ? L("Câu «ít hơn» là cộng các cột bên trái.", "\"Less than\" adds the bars on the left.")
        : kind === "cols-ghost"
          ? L("Hình hiện ra từ giả định, trước khi chạy tuần đó.", "The shape comes from assumptions, before that week runs.")
          : kind === "cols-bin"
            ? L("Cột cao là số lần trúng hay gặp. Tâm là n × p.", "The tall bar is the common hit count. The center is n × p.")
            : L("Đọc cả hàng cột, không chỉ một cột.", "Read the whole row, not one bar."),
    );
  };
}

function level(THREE: Three, world: Group): Update {
  const track = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.06, 0.06), lambert(THREE, INK));
  const needle = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.45, 0.08), new THREE.MeshBasicMaterial({ color: GOLD }));
  const mark = label(THREE, L("0,25", "0.25"), 0.9);
  const zero = label(THREE, "0", 0.5);
  const one = label(THREE, "1", 0.5);
  zero.position.set(-1.6, -0.55, 0);
  one.position.set(1.6, -0.55, 0);
  world.add(track, needle, mark, zero, one);
  for (let i = 0; i < 8; i++) {
    const coin = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.04, 12), lambert(THREE, i % 4 === 0 ? GOLD : CREAM));
    coin.position.set((i % 4) - 1.5, 0.8 + Math.floor(i / 4) * 0.35, 0);
    coin.userData.speed = 1.2 + (i % 3) * 0.4;
    world.add(coin);
  }
  return (dt, t, say) => {
    world.children.forEach((child) => {
      if (child.userData.speed) child.rotation.x += dt * (child.userData.speed as number);
    });
    const settle = 1 - Math.exp(-t * 0.45);
    const x = -1.6 + 3.2 * 0.25 * settle + Math.sin(t * 3) * 0.12 * (1 - settle);
    needle.position.set(x, 0.28, 0);
    mark.position.set(x, 0.75, 0);
    say(L("0,25 là mức nhiều lần. Một lần vẫn có thể ra 0.", "0.25 is the level over many tries. One try can still be 0."));
  };
}

function bell(THREE: Three, world: Group, area: boolean): Update {
  const heights = [0.2, 0.45, 0.85, 1.35, 1.7, 1.35, 0.85, 0.45, 0.2];
  heights.forEach((h, i) => world.add(peg(THREE, (i - 4) * 0.38, h, CREAM, 0.3)));
  const mid = new THREE.Mesh(new THREE.BoxGeometry(0.04, 2, 0.04), new THREE.MeshBasicMaterial({ color: GOLD }));
  mid.position.y = 0;
  const left = mid.clone();
  const right = mid.clone();
  left.position.x = -0.38 * 2;
  right.position.x = 0.38 * 2;
  const zone = new THREE.Mesh(new THREE.BoxGeometry(1.15, 1.5, 0.4), lambert(THREE, GOLD, 0.35));
  zone.position.set(-1.15, -0.2, 0);
  zone.visible = area;
  const cap = label(THREE, area ? L("vùng vàng = một khoảng", "gold region = a range") : L("vạch vàng = tâm", "gold line = center"), 2.5);
  cap.position.set(0, 1.4, 0);
  world.add(mid, left, right, zone, cap);
  return (_dt, t, say) => {
    if (area) zone.scale.y = 0.65 + 0.35 * (0.5 + 0.5 * Math.sin(t));
    say(area ? L("Hỏi một khoảng. Diện tích khoảng đó là xác suất.", "Ask for a range. The area of that range is the probability.") : L("Tâm và một độ rộng mỗi bên. Phần giữa là hầu hết phiên.", "Center, and one width on each side. The middle is most sessions."));
  };
}

function ruler(THREE: Three, world: Group): Update {
  const line = new THREE.Mesh(new THREE.BoxGeometry(3.4, 0.05, 0.05), lambert(THREE, CREAM));
  world.add(line);
  const ticks = ["-2", "-1", "0", "1", "2"].map((_, i) => {
    const tick = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.28, 0.04), lambert(THREE, GOLD));
    tick.position.set((i - 2) * 0.8, 0.14, 0);
    world.add(tick);
    return tick;
  });
  const scale = label(THREE, "-2      -1      0      1      2", 3.2);
  scale.position.set(0, -0.48, 0);
  world.add(scale);
  const seconds = label(THREE, L("30 giây", "30 sec"), 1.35);
  const money = label(THREE, L("90.000đ", "90,000đ"), 1.4);
  world.add(seconds, money);
  return (_dt, t, say) => {
    const u = smooth(Math.min(1, Math.max(0, (t % 6) / 2.4)));
    seconds.position.set(-2.15 + u * 0.95, 1.15 - u * 0.55, 0);
    money.position.set(2.2 - u * 1.4, 1.15 - u * 0.55, 0);
    void ticks;
    say(u > 0.92 ? L("30 giây đậu ở -1,5. Tiền cũng nằm trên thước này.", "30 seconds lands at -1.5. The money sits on this same ruler.") : L("Giây và tiền khác đơn vị. Kéo về thước rồi mới so.", "Seconds and money use different units. Pull them onto the ruler, then compare."));
  };
}

function pile(THREE: Three, world: Group): Update {
  [1.3, 0.35, 1.05, 0.22, 0.9, 0.28].forEach((h, i) => {
    const stick = peg(THREE, -2.15 + i * 0.22, h * 0.75, CLAY, 0.16);
    world.add(stick);
  });
  const src = label(THREE, L("từng phiên", "each session"), 1.4);
  src.position.set(-1.6, 1.2, 0);
  const means = label(THREE, L("trung bình mỗi mẫu", "mean of each sample"), 2.15);
  means.position.set(0.85, 1.2, 0);
  const truth = new THREE.Mesh(new THREE.BoxGeometry(0.045, 1.35, 0.045), new THREE.MeshBasicMaterial({ color: GOLD }));
  truth.position.set(0.9, -0.25, 0);
  const truthTag = label(THREE, L("số thật", "true value"), 1.2);
  truthTag.position.set(0.9, 0.62, 0);
  world.add(src, means, truth, truthTag);
  const beads: Mesh[] = [];
  const geo = new THREE.SphereGeometry(0.07, 10, 10);
  const mat = lambert(THREE, CREAM);
  let acc = 0;
  let wasBig = false;
  const counts = Array.from({ length: 7 }, () => 0);
  return (dt, t, say) => {
    const big = t % 12 >= 5.5;
    if (big !== wasBig) {
      wasBig = big;
      beads.forEach((bead) => world.remove(bead));
      beads.length = 0;
      counts.fill(0);
      acc = 0;
    }
    acc += dt;
    if (acc > (big ? 0.14 : 0.32) && beads.length < 36) {
      acc = 0;
      const jitter = ((beads.length * 3 + (big ? 1 : 4)) % 7) - 3;
      const col = Math.max(-3, Math.min(3, Math.round(jitter * (big ? 0.4 : 1))));
      const bead = new THREE.Mesh(geo, mat);
      bead.position.set(0.9 + col * 0.22, -0.9 + counts[col + 3] * 0.16, 0);
      counts[col + 3] += 1;
      world.add(bead);
      beads.push(bead);
    }
    say(big ? L("Mẫu lớn: trung bình khít vào số thật, thành một ụ.", "Large sample: means hug the true value and make a mound.") : L("Mẫu nhỏ: trung bình còn nhảy.", "Small sample: the means still jump."));
  };
}

function covers(THREE: Three, world: Group): Update {
  const line = new THREE.Mesh(new THREE.BoxGeometry(0.05, 2.5, 0.05), new THREE.MeshBasicMaterial({ color: GOLD }));
  const cap = label(THREE, L("số thật", "true value"), 1.2);
  cap.position.set(0, 1.4, 0);
  world.add(line, cap);
  const bars: Mesh[] = [];
  let spawned = -1;
  return (_dt, t, say) => {
    const p = t % 8;
    const want = Math.min(6, Math.floor(p / 0.7));
    if (p < 0.3 && spawned > 0) {
      bars.forEach((bar) => world.remove(bar));
      bars.length = 0;
      spawned = -1;
    }
    while (spawned < want) {
      spawned += 1;
      const miss = spawned === 4;
      const center = miss ? 1.15 : Math.sin(spawned * 1.7) * 0.35;
      const half = miss ? 0.45 : 0.85;
      const bar = new THREE.Mesh(
        new THREE.BoxGeometry(half * 2, 0.1, 0.1),
        miss ? new THREE.MeshBasicMaterial({ color: RUST }) : lambert(THREE, CREAM),
      );
      bar.position.set(center, 0.95 - spawned * 0.32, 0);
      world.add(bar);
      bars.push(bar);
    }
    say(spawned >= 4 ? L("Thanh đỏ không chạm số thật. 95% nói về nhiều thanh, không về một thanh.", "The red bar misses the true value. 95% is about many bars, not one bar.") : L("Mỗi thanh là một khoảng tính từ một mẫu.", "Each bar is a range from one sample."));
  };
}

function bias(THREE: Three, world: Group): Update {
  const chips: { mesh: Mesh; gold: boolean; home: [number, number] }[] = [];
  for (let r = 0; r < 2; r++) {
    for (let c = 0; c < 4; c++) {
      const gold = r === 0;
      const mesh = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 0.06, 14), lambert(THREE, gold ? GOLD : CREAM));
      const home: [number, number] = [(c - 1.5) * 0.48 - 0.7, (r - 0.5) * 0.5];
      mesh.position.set(home[0], home[1], 0);
      world.add(mesh);
      chips.push({ mesh, gold, home });
    }
  }
  const cap = label(THREE, L("khay", "tray"), 0.9);
  cap.position.set(1.7, 1.15, 0);
  world.add(cap);
  let wasFair = false;
  return (_dt, t, say) => {
    const fair = t % 8 >= 4;
    if (fair !== wasFair) wasFair = fair;
    chips.forEach((chip, i) => {
      const take = fair || chip.gold;
      const tx = take ? 1.55 : chip.home[0];
      const ty = take ? -0.7 + (fair ? i : i) * 0.16 : chip.home[1];
      chip.mesh.position.x += (tx - chip.mesh.position.x) * 0.08;
      chip.mesh.position.y += (ty - chip.mesh.position.y) * 0.08;
    });
    say(fair ? L("Nhặt cả hai màu. Khay giống đám.", "Pick both colors. The tray looks like the pile.") : L("Chỉ nhặt viên vàng. Khay lệch.", "Pick only the gold chips. The tray is biased."));
  };
}

function divide(THREE: Three, world: Group): Update {
  const both = label(THREE, L("cả hai: 0,04", "both: 0.04"), 2.2);
  const op = label(THREE, L("chia cho 0,40", "divide by 0.40"), 2.2);
  const cond = label(THREE, L("khi đã biết GDN: 0,10", "given GDN: 0.10"), 2.8);
  both.position.set(0, 0.85, 0);
  op.position.set(0, 0.05, 0);
  cond.position.set(0, -0.8, 0);
  world.add(both, op, cond);
  return (_dt, t, say) => {
    const on = t % 4 > 1.3;
    cond.visible = on;
    op.position.y = on ? 0.15 : 0.35;
    say(on ? L("0,04 / 0,40 = 0,10. Đây là form của riêng kênh GDN.", "0.04 / 0.40 = 0.10. That is the form rate of the GDN channel.") : L("0,04 là vừa form vừa GDN, chưa phải form của kênh.", "0.04 is form and GDN together, not yet the channel's form rate."));
  };
}

function priorbar(THREE: Three, world: Group): Update {
  const track = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.18, 0.12), lambert(THREE, INK));
  const fill = new THREE.Mesh(new THREE.BoxGeometry(1, 0.18, 0.14), new THREE.MeshBasicMaterial({ color: GOLD }));
  const news = label(THREE, L("tin mới", "news"), 1.3);
  const cap = label(THREE, "20%", 0.9);
  world.add(track, fill, news, cap);
  return (_dt, t, say) => {
    const p = t % 7;
    const grown = p > 2.6;
    const width = grown ? 0.7 + smooth(Math.min(1, (p - 2.6) / 1.2)) * 0.9 : 0.7;
    fill.scale.x = width;
    fill.position.set(-1.6 + width / 2, 0, 0);
    news.position.set(1.3, grown ? 0.7 : 1.15, 0);
    cap.position.set(-1.6 + width + 0.45, -0.55, 0);
    say(grown ? L("Tin mới nới thanh. Không nhảy lên 100%.", "The news stretches the bar. It does not jump to 100%.") : L("20% là đoán ban đầu. Chưa xóa.", "20% is the starting guess. It is not erased."));
  };
}

function jobs(THREE: Three, world: Group): Update {
  const left = label(THREE, L("đoán số", "guess a number"), 1.7);
  const right = label(THREE, L("đoán có/không", "guess yes/no"), 1.9);
  left.position.set(-1.15, 1.15, 0);
  right.position.set(1.2, 1.15, 0);
  const line = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.04, 0.04), new THREE.MeshBasicMaterial({ color: GOLD }));
  line.position.set(-1.15, 0.15, 0);
  line.rotation.z = 0.4;
  const yes = label(THREE, "1", 0.7);
  const no = label(THREE, "0", 0.7);
  yes.position.set(1.2, 0.2, 0);
  no.position.set(1.2, 0.2, 0);
  world.add(left, right, line, yes, no);
  return (_dt, t, say) => {
    const on = Math.sin(t * 1.4) > 0;
    yes.visible = on;
    no.visible = !on;
    say(L("Số là hồi quy. Có/không là phân loại.", "A number is regression. Yes/no is classification."));
  };
}

function fitLine(THREE: Three, world: Group, kind: string): Update {
  const pts: [number, number][] = [[-1.7, -0.35], [-1.15, 0.05], [-0.55, -0.15], [0.05, 0.25], [0.6, 0.15], [1.15, 0.55], [1.65, 0.7]];
  const yOn = (x: number) => 0.32 * x + 0.15;
  pts.forEach(([x, y]) => {
    const dot = new THREE.Mesh(new THREE.SphereGeometry(0.09, 12, 12), lambert(THREE, CREAM));
    dot.position.set(x, y, 0);
    world.add(dot);
  });
  const bar = new THREE.Mesh(new THREE.BoxGeometry(3.5, 0.035, 0.035), new THREE.MeshBasicMaterial({ color: GOLD }));
  bar.position.set(0, 0.15, 0);
  bar.rotation.z = Math.atan2(0.32, 1);
  world.add(bar);
  const stick = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.4, 0.035), new THREE.MeshBasicMaterial({ color: CLAY }));
  const gap = label(THREE, L("dư", "miss"), 0.7);
  stick.position.set(pts[2][0], (pts[2][1] + yOn(pts[2][0])) / 2, 0);
  stick.scale.y = Math.abs(pts[2][1] - yOn(pts[2][0])) / 0.4;
  gap.position.set(pts[2][0] - 0.45, (pts[2][1] + yOn(pts[2][0])) / 2, 0);
  stick.visible = kind !== "line";
  gap.visible = kind === "line-resid";
  world.add(stick, gap);
  const cap = label(THREE, kind === "line-fit" ? L("RSS nhỏ nhất", "smallest RSS") : kind === "line-resid" ? L("thật trừ đường", "real minus line") : L("+6 form / 1 triệu", "+6 forms / 1 million"), 2.3);
  cap.position.set(0, 1.25, 0);
  world.add(cap);
  return (_dt, t, say) => {
    bar.scale.x = kind === "line-fit" ? 0.92 + 0.08 * Math.sin(t * 1.5) : 1;
    say(kind === "line-fit" ? L("Chọn đường làm tổng bình phương phần trượt nhỏ nhất.", "Pick the line that makes the squared misses smallest.") : kind === "line-resid" ? L("Que là phần đường trượt. Đọc các que.", "The stick is what the line missed. Read the sticks.") : L("Đường vàng là câu đoán. Chấm là tuần thật.", "The gold line is the guess. A dot is a real week."));
  };
}

function r2(THREE: Three, world: Group): Update {
  const held = peg(THREE, -0.7, 1.5, GOLD, 0.7);
  const left = peg(THREE, 0.7, 0.65, CREAM, 0.7);
  const a = label(THREE, L("đường nắm 70%", "line holds 70%"), 2);
  const b = label(THREE, L("còn lại", "left over"), 1.3);
  a.position.set(-0.7, 1.15, 0);
  b.position.set(0.7, 0.15, 0);
  world.add(held, left, a, b);
  return (_dt, t, say) => {
    const u = 0.85 + 0.15 * Math.sin(t);
    held.scale.y = 1.5 * u;
    held.position.y = -1.05 + held.scale.y / 2;
    say(L("70% là phần phương sai, không phải 70% tuần nằm trên đường.", "70% is a share of variance, not 70% of weeks sitting on the line."));
  };
}

function band(THREE: Three, world: Group): Update {
  const dots: Mesh[] = [];
  for (let i = 0; i < 16; i++) {
    const dot = new THREE.Mesh(new THREE.SphereGeometry(0.07, 10, 10), lambert(THREE, i % 5 === 0 ? CLAY : CREAM));
    world.add(dot);
    dots.push(dot);
  }
  const flat = label(THREE, L("dải phẳng", "flat band"), 1.6);
  const horn = label(THREE, L("hình kèn", "funnel"), 1.5);
  flat.position.set(0, 1.25, 0);
  horn.position.set(0, 1.25, 0);
  world.add(flat, horn);
  return (_dt, t, say) => {
    const bad = t % 8 > 4;
    flat.visible = !bad;
    horn.visible = bad;
    dots.forEach((dot, i) => {
      const x = (i - 7.5) * 0.2;
      const spread = bad ? 0.06 + Math.abs(x) * 0.72 : 0.22;
      const y = Math.sin(i * 1.7) * spread;
      dot.position.set(x, y, 0);
    });
    say(bad ? L("Hình kèn: tuần chi mạnh trượt rộng hơn.", "A funnel: big-spend weeks miss by more.") : L("Dải phẳng: phần trượt đều. Mới đọc kiểm định.", "A flat band: the misses stay even. Then you may read the test."));
  };
}

function zero(THREE: Three, world: Group): Update {
  const mark = new THREE.Mesh(new THREE.BoxGeometry(0.04, 2.2, 0.04), new THREE.MeshBasicMaterial({ color: CREAM }));
  mark.position.x = -0.9;
  const tag = label(THREE, "0", 0.55);
  tag.position.set(-0.9, 1.25, 0);
  const range = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.12, 0.12), lambert(THREE, GOLD));
  range.position.set(0.35, 0, 0);
  const cap = label(THREE, L("độ dốc 6", "slope 6"), 1.5);
  cap.position.set(0.35, -0.7, 0);
  world.add(mark, tag, range, cap);
  return (_dt, t, say) => {
    range.position.x = 0.25 + Math.sin(t * 0.8) * 0.08;
    say(L("Thanh không chạm 0. Độ dốc 0 là một câu khó với mẫu này.", "The bar misses 0. A slope of 0 is a hard story for this sample."));
  };
}

function bowl(THREE: Three, world: Group, fast: boolean): Update {
  for (let i = 0; i <= 12; i++) {
    const x = (i - 6) * 0.28;
    world.add(peg(THREE, x, 0.18 + x * x * 0.85, CREAM, 0.18));
  }
  const ball = new THREE.Mesh(new THREE.SphereGeometry(0.14, 16, 16), new THREE.MeshBasicMaterial({ color: GOLD }));
  const cap = label(THREE, fast ? L("bước quá dài", "step too long") : L("chi phí", "cost"), 1.7);
  cap.position.set(0, 1.3, 0);
  world.add(ball, cap);
  return (_dt, t, say) => {
    const x = fast ? Math.sin(t * 2.6) * 1.45 : -1.55 * Math.exp(-t * 0.45);
    const y = -0.95 + (0.18 + x * x * 0.85);
    ball.position.set(x, y + 0.2, 0.2);
    say(fast ? L("Bước dài thì vọt qua đáy, chi phí tăng.", "A long step shoots past the bottom and the cost rises.") : L("Viên đi xuống đáy. Đáy là bộ hệ số đỡ tệ nhất.", "The ball walks to the bottom. The bottom is the least-bad coefficients."));
  };
}

function many(THREE: Three, world: Group): Update {
  const names = [L("chi tiêu", "spend"), L("email", "email"), L("khuyến mãi", "promo")];
  const heights = [1.1, 0.7, 1.3];
  names.forEach((name, i) => {
    const x = (i - 1) * 1.15;
    world.add(peg(THREE, x, heights[i], i === 1 ? CLAY : GOLD, 0.4));
    const cap = label(THREE, name, 1.3);
    cap.position.set(x, -1.15, 0);
    world.add(cap);
  });
  return (_dt, t, say) => {
    say(L("Cả ba cùng nằm trong tuần. Một cột không kể hết.", "All three sit in the same week. One column does not tell it."));
    void t;
  };
}

function held(THREE: Three, world: Group): Update {
  const names = [L("chi tiêu", "spend"), L("email khóa", "email locked"), L("km khóa", "promo locked")];
  names.forEach((name, i) => {
    const x = (i - 1) * 1.25;
    const bar = peg(THREE, x, i === 0 ? 1.35 : 0.85, i === 0 ? GOLD : INK, 0.36);
    world.add(bar);
    const cap = label(THREE, name, 1.15);
    cap.position.set(x, -1.22, 0);
    world.add(cap);
  });
  const plus = label(THREE, "+6", 0.7);
  plus.position.set(-1.25, 0.05, 0.3);
  world.add(plus);
  return (_dt, t, say) => {
    plus.position.y = 0.02 + Math.sin(t * 2) * 0.08;
    say(L("Chỉ cột vàng nhích. +6 là khi các cột kia đứng yên.", "Only the gold column moves. +6 is while the others stay still."));
  };
}

function vif(THREE: Three, world: Group): Update {
  const a = peg(THREE, -0.45, 0.4, GOLD, 0.35);
  const b = peg(THREE, 0.45, 0.4, CLAY, 0.35);
  const tag = label(THREE, L("độ dốc +6", "slope +6"), 1.6);
  const bad = label(THREE, L("độ dốc −2", "slope −2"), 1.6);
  tag.position.set(0, 1.2, 0);
  bad.position.set(0, 1.2, 0);
  world.add(a, b, tag, bad);
  return (_dt, t, say) => {
    const h = 0.45 + (0.5 + 0.5 * Math.sin(t * 1.3)) * 0.9;
    a.scale.y = h;
    b.scale.y = h * 0.92;
    a.position.y = -1.05 + h / 2;
    b.position.y = -1.05 + (h * 0.92) / 2;
    const flip = Math.sin(t * 0.7) > 0.2;
    tag.visible = !flip;
    bad.visible = flip;
    say(flip ? L("Hai cột cùng tăng. Độ dốc có thể đảo dấu. Kênh không thành có hại.", "The two columns rise together. The slope can flip sign. The channel did not become harmful.") : L("Chúng đi như một. Đừng brief từng độ dốc.", "They move as one. Do not brief either slope alone."));
  };
}

function dummy(THREE: Three, world: Group): Update {
  const names = ["GDN", "Facebook", "TikTok"];
  names.forEach((name, i) => {
    const x = (i - 1) * 1.25;
    const box = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.7, 0.2), lambert(THREE, i === 2 ? INK : i === 0 ? GOLD : CLAY));
    box.position.set(x, 0, 0);
    const cap = label(THREE, i === 2 ? L("mốc, bỏ", "baseline, drop") : name, 1.45);
    cap.position.set(x, -0.85, 0);
    world.add(box, cap);
  });
  return (_dt, _t, say) => {
    say(L("Hệ số GDN là so với TikTok, không phải so với không có kênh.", "The GDN coefficient is versus TikTok, not versus no channel."));
  };
}

function pick(THREE: Three, world: Group): Update {
  const bars = [1.2, 0.8, 0.55, 0.35].map((h, i) => {
    const mesh = peg(THREE, (i - 1.5) * 0.7, h, i === 3 ? CLAY : CREAM, 0.4);
    world.add(mesh);
    return mesh;
  });
  const cap = label(THREE, L("bỏ cột nhiễu", "drop the noise"), 2);
  cap.position.set(0, 1.25, 0);
  world.add(cap);
  return (_dt, t, say) => {
    const fade = 0.15 + 0.85 * (0.5 + 0.5 * Math.sin(t));
    const mat = bars[3].material as InstanceType<Three["MeshLambertMaterial"]>;
    mat.transparent = true;
    mat.opacity = fade;
    say(L("R² không giảm khi thêm cột. Cột không đổi quyết định thì bỏ.", "R² does not fall when you add a column. Drop a column that does not change the decision."));
  };
}

function escape(THREE: Three, world: Group): Update {
  const floor = new THREE.Mesh(new THREE.BoxGeometry(3.3, 0.045, 0.04), lambert(THREE, CREAM));
  const ceil = floor.clone();
  floor.position.y = -0.72;
  ceil.position.y = 0.72;
  const z0 = label(THREE, "0", 0.48);
  const z1 = label(THREE, "1", 0.48);
  z0.position.set(-1.85, -0.72, 0);
  z1.position.set(-1.85, 0.72, 0);
  const line = new THREE.Mesh(new THREE.BoxGeometry(3.7, 0.045, 0.045), new THREE.MeshBasicMaterial({ color: GOLD }));
  line.rotation.z = Math.atan2(2.5, 3.1);
  const low = new THREE.Mesh(new THREE.SphereGeometry(0.12, 14, 14), new THREE.MeshBasicMaterial({ color: RUST }));
  const high = low.clone();
  low.position.set(-1.44, -1.16, 0.05);
  high.position.set(1.44, 1.16, 0.05);
  const cap = label(THREE, L("ra ngoài", "outside"), 1.25);
  cap.position.set(-0.15, 1.28, 0);
  world.add(floor, ceil, z0, z1, line, low, high, cap);
  return (_dt, _t, say) => {
    say(L("Đường thẳng chui ra ngoài 0 và 1. Xác suất thì không được.", "A straight line leaves 0 and 1. A probability cannot."));
  };
}

function sig(THREE: Three, world: Group): Update {
  for (let i = 0; i <= 16; i++) {
    const z = (i - 8) * 0.42;
    const p = 1 / (1 + Math.exp(-z));
    const dot = new THREE.Mesh(new THREE.SphereGeometry(0.065, 12, 12), lambert(THREE, CREAM));
    dot.position.set(z * 0.42, -1.05 + p * 1.9, 0);
    world.add(dot);
  }
  const z = Math.log(0.35 / 0.65);
  const gold = new THREE.Mesh(new THREE.SphereGeometry(0.13, 16, 16), new THREE.MeshBasicMaterial({ color: GOLD }));
  gold.position.set(z * 0.42, -1.05 + 0.35 * 1.9, 0.08);
  const cap = label(THREE, L("0,35", "0.35"), 0.85);
  cap.position.set(gold.position.x + 0.7, gold.position.y, 0.1);
  const lo = label(THREE, "0", 0.45);
  const hi = label(THREE, "1", 0.45);
  lo.position.set(-1.85, -1.05, 0);
  hi.position.set(-1.85, 0.85, 0);
  world.add(gold, cap, lo, hi);
  return (_dt, t, say) => {
    cap.position.y = gold.position.y + Math.sin(t) * 0.04;
    say(L("Đường chữ S nằm giữa 0 và 1. Chấm vàng là xác suất 0,35.", "The S curve stays between 0 and 1. The gold dot is the probability 0.35."));
  };
}

function odds(THREE: Three, world: Group): Update {
  const bar = new THREE.Mesh(new THREE.BoxGeometry(1, 0.28, 0.12), lambert(THREE, GOLD));
  const cap = label(THREE, L("odds × 1,04", "odds × 1.04"), 2);
  cap.position.set(0, 0.8, 0);
  world.add(bar, cap);
  return (_dt, t, say) => {
    const w = 1.1 + (0.5 + 0.5 * Math.sin(t * 1.2)) * 0.5;
    bar.scale.x = w;
    bar.position.x = -1.3 + w / 2;
    say(L("Thêm một ngày nhân odds khoảng 1,04. Không cộng 4 điểm phần trăm.", "One extra day multiplies the odds by about 1.04. It does not add 4 percentage points."));
  };
}

function cm(THREE: Three, world: Group): Update {
  const cells = [
    [L("30 đúng", "30 right"), -0.82, 0.38, GOLD],
    [L("10 nhầm", "10 false"), 0.82, 0.38, CREAM],
    [L("20 sót", "20 missed"), -0.82, -0.58, RUST],
    [L("140 ổn", "140 ok"), 0.82, -0.58, CREAM],
  ] as const;
  cells.forEach(([text, x, y, color]) => {
    const box = new THREE.Mesh(new THREE.BoxGeometry(1.35, 0.78, 0.1), lambert(THREE, color));
    box.position.set(x, y, 0);
    const cap = label(THREE, text, 1.2);
    cap.position.set(x, y, 0.12);
    world.add(box, cap);
  });
  return (_dt, _t, say) => {
    say(L("170/200 = 0,85. Vẫn có 20 người rời bị bỏ sót.", "170/200 = 0.85. Twenty leavers are still missed."));
  };
}

function pr(THREE: Three, world: Group): Update {
  const clean = label(THREE, L("danh sách sạch", "clean list"), 2);
  const wide = label(THREE, L("lưới rộng", "wide net"), 1.7);
  clean.position.set(0, 0.4, 0);
  wide.position.set(0, 0.4, 0);
  world.add(clean, wide);
  return (_dt, t, say) => {
    const wideOn = t % 6 > 3;
    clean.visible = !wideOn;
    wide.visible = wideOn;
    say(wideOn ? L("Hạ ngưỡng: bắt thêm người rời, gọi nhầm cũng thêm.", "Lower the threshold: catch more leavers, and more false alarms.") : L("Precision 0,75. Recall 0,60. Ví dụ trên 200 người.", "Precision 0.75. Recall 0.60. An example on 200 people."));
  };
}

function roc(THREE: Three, world: Group): Update {
  const ax = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.02, 0.02), lambert(THREE, CREAM));
  const ay = new THREE.Mesh(new THREE.BoxGeometry(0.02, 2.2, 0.02), lambert(THREE, CREAM));
  ax.position.set(0.2, -1, 0);
  ay.position.set(-1, 0.1, 0);
  world.add(ax, ay);
  for (let i = 0; i <= 8; i++) {
    const x = i / 8;
    const y = 1 - (1 - x) * (1 - x);
    const dot = new THREE.Mesh(new THREE.SphereGeometry(0.07, 10, 10), lambert(THREE, CREAM));
    dot.position.set(-1 + x * 2.2, -1 + y * 1.9, 0);
    world.add(dot);
  }
  const marker = new THREE.Mesh(new THREE.SphereGeometry(0.12, 14, 14), new THREE.MeshBasicMaterial({ color: GOLD }));
  const cap = label(THREE, L("một ngưỡng", "one threshold"), 1.6);
  cap.position.set(0.4, 1.25, 0);
  world.add(marker, cap);
  return (_dt, t, say) => {
    const x = (0.5 + 0.5 * Math.sin(t * 0.8)) * 0.9;
    const y = 1 - (1 - x) * (1 - x);
    marker.position.set(-1 + x * 2.2, -1 + y * 1.9, 0.1);
    say(L("Mỗi chấm là một ngưỡng. 0,5 chỉ là một chấm.", "Each dot is a threshold. 0.5 is only one dot."));
  };
}

function rests(THREE: Three, world: Group): Update {
  ["A", "B", "C"].forEach((name, k) => {
    const x0 = (k - 1) * 1.15;
    for (let i = 0; i <= 6; i++) {
      const z = (i - 3) * 0.7;
      const p = 1 / (1 + Math.exp(-z));
      const dot = new THREE.Mesh(new THREE.SphereGeometry(0.045, 8, 8), lambert(THREE, k === 1 ? GOLD : CREAM));
      dot.position.set(x0 + (i - 3) * 0.12, -0.7 + p * 1.2, 0);
      world.add(dot);
    }
    const cap = label(THREE, name, 0.5);
    cap.position.set(x0, 1.15, 0);
    world.add(cap);
  });
  return (_dt, _t, say) => {
    say(L("Mỗi nhãn một đường. Bạn vẫn phải viết luật chọn hành động.", "One curve per label. You still write the rule that picks the action."));
  };
}

function split(THREE: Three, world: Group): Update {
  const cut = new THREE.Mesh(new THREE.BoxGeometry(0.04, 2.2, 0.04), new THREE.MeshBasicMaterial({ color: GOLD }));
  const q = label(THREE, L("ghé < 2?", "visits < 2?"), 1.6);
  q.position.set(0, 1.25, 0);
  world.add(cut, q);
  for (let i = 0; i < 8; i++) {
    const left = i < 4;
    const dot = new THREE.Mesh(new THREE.SphereGeometry(0.1, 12, 12), lambert(THREE, left ? CLAY : GOLD));
    dot.position.set(left ? -0.9 - (i % 2) * 0.4 : 0.7 + (i % 2) * 0.45, -0.6 + Math.floor(i / 2) * 0.45, 0);
    world.add(dot);
  }
  return (_dt, _t, say) => {
    say(L("Một câu đúng/sai đẩy người sang hai phía.", "One yes/no question sends people to two sides."));
  };
}

function gini(THREE: Three, world: Group): Update {
  const cap = label(THREE, "0,48", 0.9);
  cap.position.set(-1.15, 1.15, 0);
  const after = label(THREE, L("sạch hơn", "purer"), 1.4);
  after.position.set(1.05, 1.15, 0);
  world.add(cap, after);
  for (let i = 0; i < 8; i++) {
    const dot = new THREE.Mesh(new THREE.SphereGeometry(0.09, 10, 10), lambert(THREE, i % 3 === 0 ? GOLD : CLAY));
    dot.position.set(-1.5 + (i % 4) * 0.28, -0.2 + Math.floor(i / 4) * 0.35, 0);
    world.add(dot);
  }
  for (let i = 0; i < 4; i++) {
    const dot = new THREE.Mesh(new THREE.SphereGeometry(0.09, 10, 10), lambert(THREE, i < 3 ? GOLD : CLAY));
    dot.position.set(0.55 + (i % 2) * 0.32, 0.15 - Math.floor(i / 2) * 0.4, 0);
    world.add(dot);
  }
  return (_dt, _t, say) => {
    say(L("0,48 là độ lẫn. Nhát cắt tốt làm hai phía sạch hơn.", "0.48 is the mix. A good cut makes both sides purer."));
  };
}

function deep(THREE: Three, world: Group): Update {
  const root = label(THREE, L("ghé < 2?", "visits < 2?"), 1.45);
  const mid = label(THREE, L("chi < 500?", "spend < 500?"), 1.5);
  const leaf = label(THREE, L("một người", "one person"), 1.35);
  root.position.set(0, 1.05, 0);
  mid.position.set(0.35, -0.05, 0);
  leaf.position.set(0.85, -1.15, 0);
  const a = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.7, 0.04), new THREE.MeshBasicMaterial({ color: GOLD }));
  const b = a.clone();
  a.position.set(0.16, 0.5, 0);
  a.rotation.z = 0.35;
  b.position.set(0.58, -0.58, 0);
  b.rotation.z = 0.4;
  world.add(root, mid, leaf, a, b);
  return (_dt, t, say) => {
    const show = t % 6 > 2.2;
    leaf.visible = show;
    b.visible = show;
    say(show ? L("Tách đến một người là học thuộc, không phải luật dùng lại.", "Cutting down to one person is memorizing, not a reusable rule.") : L("Cây ngắn nói được. Cây sâu khớp cả nhiễu.", "A short tree can be said aloud. A deep tree fits the noise too."));
  };
}

function raw(THREE: Three, world: Group): Update {
  for (let i = 0; i < 18; i++) {
    const dot = new THREE.Mesh(new THREE.SphereGeometry(0.09, 10, 10), lambert(THREE, CREAM));
    const ang = i * 2.3;
    const rad = 0.35 + (i % 5) * 0.22;
    dot.position.set(Math.cos(ang) * rad, Math.sin(ang * 1.3) * rad * 0.8, 0);
    world.add(dot);
  }
  const cap = label(THREE, L("không nhãn", "no labels"), 1.6);
  cap.position.set(0, 1.3, 0);
  world.add(cap);
  return (_dt, _t, say) => {
    say(L("Không có cột câu trả lời. Chưa hỏi logistic hay cây được.", "There is no answer column. Logistic and a tree have nothing to learn."));
  };
}

function km(THREE: Three, world: Group): Update {
  const pts = [
    [-1.3, 0.4], [-0.9, 0.8], [-1.1, 0.1], [-0.6, 0.45],
    [0.8, -0.2], [1.2, -0.55], [0.7, -0.7], [1.15, 0.05],
  ];
  const dots = pts.map(([x, y]) => {
    const dot = new THREE.Mesh(new THREE.SphereGeometry(0.09, 10, 10), lambert(THREE, CREAM));
    dot.position.set(x, y, 0);
    world.add(dot);
    return dot;
  });
  const c1 = new THREE.Mesh(new THREE.SphereGeometry(0.14, 14, 14), new THREE.MeshBasicMaterial({ color: GOLD }));
  const c2 = new THREE.Mesh(new THREE.SphereGeometry(0.14, 14, 14), new THREE.MeshBasicMaterial({ color: CLAY }));
  world.add(c1, c2);
  return (_dt, t, say) => {
    const u = 0.5 + 0.5 * Math.sin(t * 0.9);
    c1.position.set(-1.4 + u * 0.5, 0.9 - u * 0.4, 0.1);
    c2.position.set(1.4 - u * 0.4, -0.9 + u * 0.35, 0.1);
    dots.forEach((dot) => {
      const d1 = dot.position.distanceTo(c1.position);
      const d2 = dot.position.distanceTo(c2.position);
      const mat = dot.material as InstanceType<Three["MeshLambertMaterial"]>;
      mat.color.setHex(d1 < d2 ? GOLD : CLAY);
    });
    say(u > 0.65 ? L("Tâm dời vào giữa các chấm của nó.", "The center moves to the middle of its dots.") : L("Mỗi chấm về tâm gần nhất.", "Each dot joins the nearest center."));
  };
}

function elbow(THREE: Three, world: Group): Update {
  [1.55, 1.05, 0.62, 0.5, 0.44, 0.4].forEach((h, i) => world.add(peg(THREE, (i - 2.5) * 0.48, h, i === 2 ? GOLD : CREAM, 0.32)));
  const cap = label(THREE, L("chỗ gập", "the bend"), 1.4);
  cap.position.set(-0.05, 1.25, 0);
  world.add(cap);
  return (_dt, _t, say) => {
    say(L("Cột giảm nhanh rồi bẹt. Chỗ gập không chứng minh K đúng.", "The bars drop, then flatten. The bend does not prove K."));
  };
}

function merge(THREE: Three, world: Group): Update {
  const dots: Mesh[] = [];
  [-1.2, -0.4, 0.45, 1.2].forEach((x) => {
    const dot = new THREE.Mesh(new THREE.SphereGeometry(0.12, 12, 12), lambert(THREE, CREAM));
    dot.position.set(x, -0.8, 0);
    world.add(dot);
    dots.push(dot);
  });
  const cap = label(THREE, L("dán cái gần", "glue the closest"), 1.8);
  cap.position.set(0, 1.2, 0);
  world.add(cap);
  return (_dt, t, say) => {
    const u = smooth((t % 5) / 2.2);
    dots[0].position.x = -1.2 + u * 0.35;
    dots[1].position.x = -0.4 - u * 0.35;
    dots[2].position.x = 0.45 + u * 0.3;
    dots[3].position.x = 1.2 - u * 0.3;
    dots.forEach((dot) => {
      dot.position.y = -0.8 + u * 0.7;
    });
    say(u > 0.8 ? L("Cắt ngang để chọn số nhóm. Rồi đặt tên.", "Cut across to choose how many groups. Then name them.") : L("Cái gần nhau dán trước.", "The closest ones glue first."));
  };
}

function tok(THREE: Three, world: Group): Update {
  const words = [
    [L("và", "and"), true],
    [L("của", "of"), true],
    [L("đau", "hurt"), false],
    [L("chờ", "wait"), false],
  ] as const;
  const chips = words.map(([text, stop], i) => {
    const cap = label(THREE, text, 0.78);
    cap.position.set((i - 1.5) * 1.05, 0.1, 0);
    world.add(cap);
    return { cap, stop };
  });
  return (_dt, t, say) => {
    const fade = t % 6 > 2.5;
    chips.forEach((chip) => {
      chip.cap.visible = !(fade && chip.stop);
    });
    say(fade ? L("Từ hư mờ. «đau» và «chờ» ở lại để đếm.", "Filler fades. \"hurt\" and \"wait\" stay so you can count them.") : L("Cắt câu thành mảnh trước khi đếm.", "Cut the sentence into pieces before you count."));
  };
}

function bow(THREE: Three, world: Group): Update {
  const words = [L("chờ", "wait"), "40", L("phút", "min")];
  const chips = words.map((text) => {
    const cap = label(THREE, text, 0.85);
    world.add(cap);
    return cap;
  });
  [0.9, 0.45, 0.7].forEach((h, i) => {
    world.add(peg(THREE, (i - 1) * 1.15, h, GOLD, 0.32));
  });
  return (_dt, t, say) => {
    const spin = Math.floor(t / 1.6) % 3;
    chips.forEach((cap, i) => {
      const slot = (i + spin) % 3;
      cap.position.set((slot - 1) * 1.15, 1.15, 0);
    });
    say(L("Từ đổi chỗ, độ cao không đổi. Thứ tự đã mất.", "The words swap places. The heights stay. Order is gone."));
  };
}

function tfidf(THREE: Three, world: Group): Update {
  world.add(peg(THREE, -0.6, 0.4, INK, 0.45));
  world.add(peg(THREE, 0.6, 1.45, GOLD, 0.45));
  const a = label(THREE, "spa", 0.9);
  const b = label(THREE, L("chờ", "waited"), 1.1);
  a.position.set(-0.6, 0.55, 0);
  b.position.set(0.6, 1.15, 0);
  world.add(a, b);
  return (_dt, _t, say) => {
    say(L("«spa» ở mọi bài nên bị hạ. «chờ» hiếm nên được giữ.", "\"spa\" is in every review, so it shrinks. \"waited\" is rare, so it stays."));
  };
}

function edit(THREE: Three, world: Group): Update {
  const letters = ["S", "P", "A", "A"].map((ch, i) => {
    const cap = label(THREE, ch, 0.7);
    cap.position.set((i - 1.5) * 0.6, 0.1, 0);
    world.add(cap);
    return cap;
  });
  const cap = label(THREE, L("sửa 1 lần", "1 edit"), 1.5);
  cap.position.set(0, -0.9, 0);
  world.add(cap);
  return (_dt, t, say) => {
    const drop = t % 5 > 2.4;
    letters[3].visible = !drop;
    letters.forEach((letter, i) => {
      const slot = drop && i > 2 ? i - 1 : i;
      letter.position.x = (slot - (drop ? 1 : 1.5)) * 0.6;
    });
    say(drop ? L("Mất một chữ A. «spaa» thành «spa».", "One A drops. \"spaa\" becomes \"spa\".") : L("Đếm số lần sửa một ký tự.", "Count the single-character edits."));
  };
}

function steps(THREE: Three, world: Group): Update {
  const names = [L("quyết định", "decision"), L("giả thuyết", "guess"), L("dữ liệu", "data"), L("mô hình", "model")];
  const chips = names.map((name, i) => {
    const cap = label(THREE, name, 1.5);
    cap.position.set(0, 0.95 - i * 0.55, 0);
    world.add(cap);
    return cap;
  });
  return (_dt, t, say) => {
    const on = Math.floor(t / 1.3) % 4;
    chips.forEach((cap, i) => {
      cap.position.x = i === on ? 0.15 : 0;
    });
    say(L("Quyết định trước. Mô hình là bước sau.", "The decision comes first. The model is a later step."));
  };
}

function target(THREE: Three, world: Group): Update {
  const now = label(THREE, "1,1%", 1.2);
  const goal = label(THREE, "1,6%", 1.3);
  const guard = label(THREE, L("giá form ≤ +15%", "cost per form ≤ +15%"), 2.6);
  now.position.set(-0.9, 0.2, 0);
  goal.position.set(0.9, 0.2, 0);
  guard.position.set(0, -0.8, 0);
  const arrow = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.05, 0.05), new THREE.MeshBasicMaterial({ color: GOLD }));
  world.add(now, goal, guard, arrow);
  return (_dt, t, say) => {
    arrow.position.set(Math.sin(t) * 0.15, 0.2, 0);
    say(L("Đích là tỷ lệ form. Accuracy đẹp mà không nhích đích thì chưa xong.", "The target is the form rate. A pretty accuracy that does not move it is not done."));
  };
}

type Orbit = InstanceType<typeof import("three/examples/jsm/controls/OrbitControls.js").OrbitControls>;

export type StageApi = {
  stop: () => void;
  setPaused: (paused: boolean) => void;
  setTouch: (on: boolean) => void;
  resetView: () => void;
};

const HOME = { x: 0, y: 0.15, z: 6.1 };

function start(
  THREE: Three,
  Orbit: new (camera: InstanceType<Three["Camera"]>, el: HTMLElement) => Orbit,
  host: HTMLElement,
  canvas: HTMLCanvasElement,
  kind: string,
  say: (note: string) => void,
  lang: Lang,
  touchOn: boolean,
): StageApi {
  const none: StageApi = { stop: () => {}, setPaused: () => {}, setTouch: () => {}, resetView: () => {} };
  line = (vi, en) => (lang === "en" ? en : vi);
  let renderer: InstanceType<Three["WebGLRenderer"]>;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, failIfMajorPerformanceCaveat: false });
  } catch {
    return none;
  }
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 40);
  camera.position.set(HOME.x, HOME.y, HOME.z);
  const controls = new Orbit(camera, canvas);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.enablePan = false;
  controls.minDistance = 3;
  controls.maxDistance = 11;
  controls.minPolarAngle = 0.15;
  controls.maxPolarAngle = Math.PI - 0.35;
  controls.target.set(0, 0, 0);
  controls.enabled = touchOn;
  let paused = false;
  scene.add(new THREE.HemisphereLight(0xfff6ea, 0x3a2c26, 2.5));
  const key = new THREE.DirectionalLight(0xfff8ef, 2);
  key.position.set(3, 5, 4);
  scene.add(key);
  const world = new THREE.Group();
  scene.add(world);
  // Sàn lưới và tấm nền mờ giúp thấy chiều sâu khi xoay hình.
  const floor = new THREE.GridHelper(9, 18, 0x6b5c4d, 0x3a2f27);
  floor.position.y = -1.55;
  (floor.material as InstanceType<Three["Material"]>).transparent = true;
  (floor.material as InstanceType<Three["Material"]>).opacity = 0.55;
  scene.add(floor);
  const wall = new THREE.Mesh(new THREE.PlaneGeometry(7.4, 3.9), new THREE.MeshBasicMaterial({ color: 0x2c241e, transparent: true, opacity: 0.35, side: THREE.DoubleSide, depthWrite: false }));
  wall.position.set(0, 0.2, -0.45);
  scene.add(wall);
  const update = build(THREE, kind, world);
  const slow = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let last = performance.now();
  let elapsed = 0;
  let frame = 0;
  let visible = true;
  let lastLine = "";
  const io = new IntersectionObserver(([entry]) => {
    visible = entry?.isIntersecting ?? true;
  });
  io.observe(host);
  const resize = () => {
    const w = host.clientWidth || 320;
    const h = host.clientHeight || 280;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(w, h, false);
    camera.aspect = w / Math.max(1, h);
    camera.updateProjectionMatrix();
  };
  const ro = new ResizeObserver(resize);
  ro.observe(host);
  resize();
  const loop = (now: number) => {
    frame = requestAnimationFrame(loop);
    if (!visible) return;
    const dt = paused ? 0 : Math.min(0.05, Math.max(0, (now - last) / 1000)) * (slow ? 0.35 : 1);
    last = now;
    elapsed += dt;
    update(dt, elapsed, (note) => {
      if (note !== lastLine) {
        lastLine = note;
        say(note);
      }
    });
    controls.update();
    renderer.render(scene, camera);
  };
  frame = requestAnimationFrame(loop);
  const stop = () => {
    cancelAnimationFrame(frame);
    controls.dispose();
    ro.disconnect();
    io.disconnect();
    scene.traverse((obj) => {
      const mesh = obj as Mesh;
      mesh.geometry?.dispose();
      const material = mesh.material as InstanceType<Three["Material"]> | InstanceType<Three["Material"]>[] | undefined;
      if (!material) return;
      const list = Array.isArray(material) ? material : [material];
      list.forEach((item) => {
        const mapped = item as InstanceType<Three["MeshLambertMaterial"]>;
        mapped.map?.dispose();
        item.dispose();
      });
    });
    renderer.dispose();
  };
  return {
    stop,
    setPaused: (value) => {
      paused = value;
    },
    setTouch: (on) => {
      controls.enabled = on;
    },
    resetView: () => {
      camera.position.set(HOME.x, HOME.y, HOME.z);
      controls.target.set(0, 0, 0);
      controls.update();
    },
  };
}

const ui = {
  vi: {
    now: "Đang xảy ra",
    legend: "Cách đọc hình",
    hint: "Kéo để xoay · cuộn hoặc chụm hai ngón để zoom",
    hintOff: "Bấm «Xoay hình» để xoay bằng ngón tay. Đang tắt để bạn cuộn trang.",
    rotate: "Xoay hình",
    rotating: "Đang xoay",
    pause: "Dừng",
    play: "Chạy",
    replay: "Tua lại",
    home: "Về góc đầu",
  },
  en: {
    now: "What is happening",
    legend: "How to read the picture",
    hint: "Drag to rotate · scroll or pinch to zoom",
    hintOff: "Tap “Rotate” to turn the scene with your finger. It is off so the page can scroll.",
    rotate: "Rotate",
    rotating: "Rotating",
    pause: "Pause",
    play: "Play",
    replay: "Replay",
    home: "Reset view",
  },
} as const;

function fineHover() {
  try {
    return window.matchMedia("(pointer: fine)").matches;
  } catch {
    return true;
  }
}

export function Stage3D({ scene, lang }: { scene: string; lang: Lang }) {
  const hostRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const apiRef = useRef<StageApi | null>(null);
  const [note, setNote] = useState("");
  const [paused, setPaused] = useState(false);
  const [run, setRun] = useState(0);
  const [touch, setTouch] = useState<boolean | null>(null);
  const t = ui[lang === "en" ? "en" : "vi"];
  const legend = legends[scene];

  useEffect(() => {
    setTouch(fineHover());
  }, []);

  const touchRef = useRef(true);
  touchRef.current = touch ?? true;

  useEffect(() => {
    const host = hostRef.current;
    const canvas = canvasRef.current;
    if (!host || !canvas) return;
    let dead = false;
    setNote("");
    Promise.all([import("three"), import("three/examples/jsm/controls/OrbitControls.js")]).then(([THREE, mod]) => {
      if (dead) return;
      apiRef.current = start(THREE, mod.OrbitControls as never, host, canvas, scene, setNote, lang, touchRef.current);
    });
    return () => {
      dead = true;
      apiRef.current?.stop();
      apiRef.current = null;
    };
  }, [scene, lang, run]);

  useEffect(() => {
    apiRef.current?.setPaused(paused);
  }, [paused, run]);

  useEffect(() => {
    apiRef.current?.setTouch(touch ?? true);
  }, [touch, run]);

  const btn = "inline-flex min-h-11 items-center rounded-full border border-line bg-card px-4 text-sm";

  return (
    <div>
      <div ref={hostRef} className="relative h-80 overflow-hidden rounded-card bg-[#14110e] sm:h-96">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,#2c241e_0%,#14110e_72%)]" />
        <canvas ref={canvasRef} className="relative h-full w-full" style={{ touchAction: touch === false ? "pan-y" : "none", cursor: touch === false ? "default" : "grab" }} />
        <p className="pointer-events-none absolute bottom-2 left-3 right-3 text-xs text-[#d8cdbd]">{touch === false ? t.hintOff : t.hint}</p>
      </div>
      <div className="mt-2 flex flex-wrap gap-2">
        <button type="button" className={btn} onClick={() => setPaused(!paused)}>
          {paused ? t.play : t.pause}
        </button>
        <button
          type="button"
          className={btn}
          onClick={() => {
            setPaused(false);
            setRun(run + 1);
          }}
        >
          {t.replay}
        </button>
        <button type="button" className={btn} onClick={() => apiRef.current?.resetView()}>
          {t.home}
        </button>
        {touch === false || (touch === true && !fineHover()) ? (
          <button type="button" className={`${btn} ${touch ? "bg-ink text-paper" : ""}`} onClick={() => setTouch(!touch)}>
            {touch ? t.rotating : t.rotate}
          </button>
        ) : null}
      </div>
      {legend ? (
        <div className="mt-3 rounded-card border border-line bg-card px-4 py-3">
          <p className="text-xs uppercase tracking-widest text-muted">{t.legend}</p>
          <ul className="mt-2 space-y-2">
            {legend.map(([swatch, vi, en]) => (
              <li key={vi} className="flex items-start gap-3 text-sm leading-snug">
                <span
                  className="mt-1 inline-block size-3.5 shrink-0 rounded-full border border-line"
                  style={{ background: swatchColor[swatch] }}
                  aria-hidden
                />
                <span>{lang === "en" ? en : vi}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {note ? (
        <div className="mt-3 rounded-card border border-line bg-card px-4 py-3">
          <p className="text-xs uppercase tracking-widest text-accent">{t.now}</p>
          <p className="mt-1 text-base leading-snug">{note}</p>
        </div>
      ) : null}
    </div>
  );
}
