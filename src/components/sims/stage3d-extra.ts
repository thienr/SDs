import { wideBeats } from "@/components/sims/stage3d-beats";

type Three = typeof import("three");
type Sprite = InstanceType<Three["Sprite"]>;
type Group = InstanceType<Three["Group"]>;
type Mesh = InstanceType<Three["Mesh"]>;
type Update = (dt: number, t: number, say: (line: string) => void) => void;

export type Kit = {
  L: (vi: string, en: string) => string;
  label: (THREE: Three, text: string, width?: number) => Sprite;
  peg: (THREE: Three, x: number, h: number, color: number, w?: number) => Mesh;
  lambert: (THREE: Three, color: number, opacity?: number) => InstanceType<Three["MeshLambertMaterial"]>;
  smooth: (u: number) => number;
  CREAM: number;
  GOLD: number;
  CLAY: number;
  RUST: number;
  INK: number;
};

function say(kit: Kit, vi: string, en: string, tell: (line: string) => void) {
  tell(kit.L(vi, en));
}

function chip(THREE: Three, world: Group, kit: Kit, vi: string, en: string, x: number, y: number, w = 1.3) {
  const s = kit.label(THREE, kit.L(vi, en), w);
  s.position.set(x, y, 0.35);
  world.add(s);
  return s;
}

function box(THREE: Three, world: Group, kit: Kit, x: number, y: number, w: number, h: number, color: number) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, 0.16), kit.lambert(THREE, color));
  mesh.position.set(x, y, 0);
  world.add(mesh);
  return mesh;
}

function dot(THREE: Three, world: Group, kit: Kit, x: number, y: number, color: number, r = 0.08) {
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(r, 12, 12), kit.lambert(THREE, color));
  mesh.position.set(x, y, 0);
  world.add(mesh);
  return mesh;
}

function bars(THREE: Three, world: Group, kit: Kit, rows: [string, string, number, number][], note: [string, string]): Update {
  const n = rows.length;
  const gap = n <= 2 ? 1.55 : n === 3 ? 1.2 : 0.92;
  const lw = n <= 2 ? 1.35 : n === 3 ? 1.05 : 0.82;
  const meshes = rows.map(([vi, en, h, color], i) => {
    const x = (i - (n - 1) / 2) * gap;
    const mesh = kit.peg(THREE, x, h, color, n <= 2 ? 0.42 : 0.34);
    const cap = chip(THREE, world, kit, vi, en, x, -1.28, lw);
    world.add(mesh);
    return { mesh, cap, x, h };
  });
  return (_dt, t, tell) => {
    const bob = 1 + Math.sin(t * 2) * 0.04;
    meshes[0].mesh.scale.y = meshes[0].h * bob;
    meshes[0].mesh.position.y = -1.05 + meshes[0].mesh.scale.y / 2;
    say(kit, note[0], note[1], tell);
  };
}

function toggle(THREE: Three, world: Group, kit: Kit, a: [string, string], b: [string, string], noteA: [string, string], noteB: [string, string]): Update {
  const left = chip(THREE, world, kit, a[0], a[1], 0, 0.15, 2.15);
  const right = chip(THREE, world, kit, b[0], b[1], 0, 0.15, 2.15);
  return (_dt, t, tell) => {
    const on = t % 6 > 3;
    left.visible = !on;
    right.visible = on;
    const note = on ? noteB : noteA;
    say(kit, note[0], note[1], tell);
  };
}

function gate(THREE: Three, world: Group, kit: Kit, mode: "rule" | "peek"): Update {
  const axis = new THREE.Mesh(new THREE.BoxGeometry(3.3, 0.04, 0.04), new THREE.MeshBasicMaterial({ color: kit.CREAM }));
  const mark = new THREE.Mesh(new THREE.BoxGeometry(0.05, 1.7, 0.05), new THREE.MeshBasicMaterial({ color: kit.GOLD }));
  const ball = new THREE.Mesh(new THREE.SphereGeometry(0.12, 14, 14), new THREE.MeshBasicMaterial({ color: kit.GOLD }));
  const tag = chip(THREE, world, kit, "5%", "5%", 1.05, 1.05, 0.7);
  world.add(axis, mark, ball);
  return (_dt, t, tell) => {
    const x = -1.45 + ((t * 0.45) % 2.9);
    ball.position.set(x, 0.22, 0.1);
    const cut = mode === "peek" && t % 8 > 4 ? 0.15 : 1.05;
    mark.position.set(cut, 0.15, 0);
    tag.position.x = cut;
    const past = x > cut;
    if (mode === "peek" && t % 8 > 4) {
      say(kit, past ? "Dời vạch sau khi nhìn. Viên vừa rơi vào vùng bác." : "Vạch bị kéo tới viên.", "Move the line after looking. The ball just fell into the reject zone.", tell);
    } else {
      say(kit, past ? "Vượt vạch: bác câu «không khác»." : "Chưa tới vạch. Câu «không khác» còn đứng.", past ? "Past the line: reject the “no difference” story." : "Not past the line. “No difference” still stands.", tell);
    }
  };
}

function clouds(THREE: Three, world: Group, kit: Kit, groups: { x: number; y: number; color: number; n: number }[], labels: [string, string, number, number, number][], note: [string, string]): Update {
  const dots: Mesh[] = [];
  groups.forEach((g) => {
    for (let i = 0; i < g.n; i++) {
      const ang = i * 2.2;
      dots.push(dot(THREE, world, kit, g.x + Math.cos(ang) * 0.28, g.y + Math.sin(ang) * 0.22, g.color, 0.08));
    }
  });
  labels.forEach(([vi, en, x, y, w]) => chip(THREE, world, kit, vi, en, x, y, w));
  return (_dt, t, tell) => {
    dots.forEach((d, i) => {
      d.position.y += Math.sin(t * 1.4 + i) * 0.002;
    });
    say(kit, note[0], note[1], tell);
  };
}

function cells(THREE: Three, world: Group, kit: Kit, items: [string, string, number, number, number][], note: [string, string]): Update {
  items.forEach(([vi, en, x, y, color]) => {
    box(THREE, world, kit, x, y, 1.25, 0.72, color);
    chip(THREE, world, kit, vi, en, x, y, 1.15);
  });
  return (_dt, _t, tell) => say(kit, note[0], note[1], tell);
}

function series(THREE: Three, world: Group, kit: Kit, ys: number[], cut: number, note: [string, string], future = true): Update {
  const dots = ys.map((y, i) => {
    const x = -1.7 + i * 0.34;
    const color = future && i >= cut ? kit.GOLD : kit.CREAM;
    return dot(THREE, world, kit, x, y, color, i >= cut ? 0.1 : 0.07);
  });
  const marker = new THREE.Mesh(new THREE.SphereGeometry(0.12, 12, 12), new THREE.MeshBasicMaterial({ color: kit.GOLD }));
  world.add(marker);
  return (_dt, t, tell) => {
    const i = Math.floor(t * 0.8) % Math.max(1, cut);
    marker.position.set(dots[i].position.x, dots[i].position.y, 0.15);
    say(kit, note[0], note[1], tell);
  };
}

function chain(THREE: Three, world: Group, kit: Kit, note: [string, string], side: boolean): Update {
  const nodes: Mesh[] = [];
  for (let i = 0; i < 4; i++) {
    const mesh = box(THREE, world, kit, -1.2 + i * 0.8, -0.25, 0.42, 0.42, i === 3 ? kit.GOLD : kit.CREAM);
    nodes.push(mesh);
  }
  chip(THREE, world, kit, "chính", "main", 0, -1.05, 1.1);
  let sideNodes: Mesh[] = [];
  if (side) {
    sideNodes = [0, 1].map((i) => box(THREE, world, kit, 0.4 + i * 0.8, 0.75, 0.42, 0.42, kit.CLAY));
    chip(THREE, world, kit, "thử", "try", 0.8, 1.2, 0.9);
  }
  return (_dt, t, tell) => {
    const k = Math.floor(t / 0.8) % 4;
    nodes.forEach((mesh, i) => {
      mesh.scale.setScalar(i === k ? 1.15 : 1);
    });
    sideNodes.forEach((mesh) => {
      mesh.visible = t % 7 > 2.5;
    });
    say(kit, note[0], note[1], tell);
  };
}

const scenes: Record<string, (THREE: Three, world: Group, kit: Kit) => Update> = {
  "x-rule": (T, w, k) => gate(T, w, k, "rule"),
  "x-peek": (T, w, k) => gate(T, w, k, "peek"),
  "x-h0": (T, w, k) =>
    toggle(T, w, k, ["không khác", "no difference"], ["có khác", "there is a difference"], ["Câu nhàm viết trước. p tính khi câu này đúng.", "The dull sentence is written first. p is computed as if it is true."], ["Câu kia là điều bạn đang nghi. Kiểm định không chứng minh câu này.", "The other sentence is what you suspect. The test does not prove it."]),
  "x-rare": (T, w, k) => {
    const pts: Mesh[] = [];
    for (let i = 0; i < 18; i++) pts.push(dot(T, w, k, -0.2 + Math.sin(i * 1.7) * 0.7, Math.cos(i * 1.3) * 0.45, k.CREAM, 0.07));
    const gold = dot(T, w, k, 1.35, 0.15, k.GOLD, 0.13);
    chip(T, w, k, "mẫu này", "this sample", 1.35, -0.55, 1.3);
    return (_dt, t, tell) => {
      gold.position.y = 0.15 + Math.sin(t * 2) * 0.06;
      say(k, "Đám kem là những mẫu nếu câu nhàm đúng. Viên vàng là mẫu bạn có. p là độ hiếm của viên đó, không phải xác suất câu nhàm đúng.", "The cream dots are samples if the dull story is true. The gold one is yours. p is how rare it is, not the probability the dull story is true.", tell);
    };
  },
  "x-err": (T, w, k) =>
    toggle(T, w, k, ["báo động giả", "false alarm"], ["bỏ sót", "missed it"], ["α là tỷ lệ báo động giả khi câu nhàm đúng. Không phải xác suất bạn đã sai.", "α is the false-alarm rate when the dull story is true. Not the probability you were wrong."], ["Bỏ sót là câu nhàm sai mà bạn không bác. 1 − α không phải sức mạnh của cuộc kiểm.", "A miss is a false dull story you failed to reject. 1 − α is not the power of the test."]),
  "x-t": (T, w, k) => {
    for (let i = 0; i < 9; i++) {
      const x = (i - 4) * 0.28;
      dot(T, w, k, x, 0.15 - x * x * 0.12, k.CREAM, 0.06);
      dot(T, w, k, x * 1.25, -0.55 - x * x * 0.08, k.GOLD, 0.06);
    }
    chip(T, w, k, "biết độ rộng", "width known", 0, 1.15, 1.8);
    chip(T, w, k, "độ rộng từ mẫu", "width from the sample", 0, -1.2, 2.2);
    return (_dt, _t, tell) => say(k, "Hàng dưới nặng đuôi hơn. Vạch bác phải đứng xa hơn khi độ rộng lấy từ mẫu.", "The lower row has heavier tails. The reject line has to stand farther out when the width comes from the sample.", tell);
  },
  "x-means": (T, w, k) =>
    clouds(T, w, k, [{ x: -0.85, y: 0.1, color: k.CREAM, n: 7 }, { x: 0.9, y: 0.45, color: k.GOLD, n: 7 }], [["GDN", "GDN", -0.85, -0.85, 0.9], ["Facebook", "Facebook", 0.9, -0.85, 1.4]], ["Hai đám, hai mức. Câu hỏi là khoảng cách này có hiếm không nếu thật ra bằng nhau.", "Two clouds, two levels. The question is whether this gap is rare if they are really equal."]),
  "x-props": (T, w, k) =>
    bars(T, w, k, [["2,0%", "2.0%", 0.55, k.CREAM], ["2,6%", "2.6%", 0.72, k.GOLD]], ["Hai tỷ lệ nhìn khác. z ví dụ khoảng 1,3, chưa tới vạch 1,96 của mức 5% hai phía.", "The two rates look different. The example z is about 1.3, short of the 1.96 line for a 5% two-sided test."]),
  "x-chi": (T, w, k) =>
    cells(T, w, k, [["30 mua", "30 buy", -0.72, 0.42, k.GOLD], ["70 không", "70 no", 0.72, 0.42, k.CREAM], ["10 mua", "10 buy", -0.72, -0.5, k.CLAY], ["90 không", "90 no", 0.72, -0.5, k.CREAM]], ["Nếu kênh và mua không liên quan, ô GDN-mua kỳ vọng khoảng 20, không phải 30. χ² ví dụ = 12,5.", "If channel and purchase were unrelated, the GDN-buy cell would be about 20, not 30. Example χ² = 12.5."]),
  "x-anova": (T, w, k) =>
    clouds(T, w, k, [{ x: -1.15, y: -0.15, color: k.CREAM, n: 5 }, { x: 0, y: -0.05, color: k.CREAM, n: 5 }, { x: 1.15, y: 0.55, color: k.GOLD, n: 5 }], [["11", "11", -1.15, -0.95, 0.6], ["12", "12", 0, -0.95, 0.6], ["20", "20", 1.15, -0.95, 0.6]], ["Một cuộc cho cả ba mức. F lớn vì nhóm 20 đứng xa, không phải vì 11 khác 12.", "One test for all three levels. F is large because 20 sits far away, not because 11 differs from 12."]),
  "x-ask": (T, w, k) => {
    for (let i = 0; i < 12; i++) dot(T, w, k, -1.3 + (i % 4) * 0.28, -0.4 + Math.floor(i / 4) * 0.32, k.CREAM, 0.07);
    const q = chip(T, w, k, "tỷ lệ form?", "form rate?", 0.55, 0.85, 1.8);
    return (_dt, t, tell) => {
      q.position.y = 0.8 + Math.sin(t) * 0.05;
      say(k, "Câu hỏi đặt trước biểu đồ. Biểu đồ đẹp không phải là câu hỏi.", "The question comes before the chart. A pretty chart is not a question.", tell);
    };
  },
  "x-whose": (T, w, k) =>
    toggle(T, w, k, ["bảng của mình", "our table"], ["bảng công khai", "a public file"], ["Bạn biết ai được ghi. Câu kết luận đi được xa hơn.", "You know who was recorded. The claim can go further."], ["Bạn không chọn ai vào file. Đừng nói như thể đó là khách của bạn.", "You did not choose who is in the file. Do not talk as if they were your customers."]),
  "x-types": (T, w, k) =>
    bars(T, w, k, [["số", "number", 1.05, k.GOLD], ["chữ", "text", 0.45, k.CLAY], ["ngày", "date", 0.7, k.CREAM]], ["Trung bình một tên kênh không có nghĩa. Ngày không phải một số càng ngày càng «lớn hơn» theo cách bạn nghĩ.", "The average of a channel name means nothing. A date is not a number that simply gets “bigger”."]),
  "x-dup": (T, w, k) => {
    const a = box(T, w, k, -0.55, 0.1, 0.7, 0.45, k.CREAM);
    const b = box(T, w, k, 0.35, 0.1, 0.7, 0.45, k.GOLD);
    chip(T, w, k, "cùng một người", "same person", 0, -0.85, 2.2);
    return (_dt, t, tell) => {
      const hide = t % 6 > 3;
      b.visible = !hide;
      a.position.x = hide ? 0 : -0.55;
      say(k, hide ? "Gộp lại một dòng. Tổng chi tiêu không còn bị nhân đôi." : "Hai dòng, một người. SUM tính hai lần.", hide ? "Collapse to one row. Spend is no longer counted twice." : "Two rows, one person. SUM counts them twice.", tell);
    };
  },
  "x-hole": (T, w, k) =>
    toggle(T, w, k, ["ô trống", "blank"], ["điền số 0", "fill with 0"], ["Trống nghĩa là không biết. Để vậy và nói rõ.", "Blank means you do not know. Leave it and say so."], ["0 là một giá trị. Điền 0 khi bạn không có lý do thì kéo trung bình xuống.", "0 is a value. Filling 0 without a reason pulls the mean down."]),
  "x-far": (T, w, k) => {
    for (let i = 0; i < 8; i++) dot(T, w, k, -1.3 + i * 0.28, -0.1 + Math.sin(i) * 0.12, k.CREAM, 0.07);
    const far = dot(T, w, k, 1.25, 0.85, k.GOLD, 0.12);
    const tag = chip(T, w, k, "tuần lễ?", "a real peak?", 1.15, 1.25, 1.5);
    return (_dt, t, tell) => {
      const typo = t % 7 > 3.5;
      tag.visible = true;
      far.position.y = typo ? 0.85 : 0.55;
      say(k, typo ? "Có thể là gõ nhầm. Cũng có thể là tuần lễ thật. Hàng rào chỉ đánh dấu, chưa xóa." : "Nhìn rồi mới quyết. Xóa vì «xa» không phải lý do.", typo ? "It might be a typo. It might be a real festival week. A fence only flags it. It does not delete it." : "Look, then decide. “It is far” is not a reason to delete.", tell);
    };
  },
  "x-z": (T, w, k) =>
    toggle(T, w, k, ["triệu và giây", "millions and seconds"], ["cùng một thước", "one ruler"], ["Hai cột khác đơn vị. Cột to sẽ át cột nhỏ trong một khoảng cách.", "Two columns, different units. The big one drowns the small one in a distance."], ["z đưa về tâm 0, độ rộng 1. Nó không tạo ra quan hệ, và không biến đuôi thành hình chuông.", "z puts them at center 0 and width 1. It does not create a relationship, and it does not turn a tail into a bell."]),
  "x-bad": (T, w, k) => {
    const bad = chip(T, w, k, "200%", "200%", -0.8, 0.2, 1.2);
    const ok = chip(T, w, k, "1,1%", "1.1%", 0.7, 0.2, 1.1);
    return (_dt, t, tell) => {
      bad.position.y = t % 5 > 2.5 ? 1.15 : 0.2;
      bad.visible = t % 5 < 4.2;
      ok.visible = true;
      say(k, "200% không phải điểm xa của một tỷ lệ. Đó là giá trị không hợp lệ. Lọc là một quyết định, phải viết lại được.", "200% is not a far point of a rate. It is an impossible value. A filter is a decision you must be able to write down.", tell);
    };
  },
  "x-cat": (T, w, k) =>
    bars(T, w, k, [["GDN", "GDN", 0.8, k.GOLD], ["FB", "FB", 1.1, k.CREAM], ["TikTok", "TikTok", 0.5, k.CLAY]], ["Ba tên không có thứ tự. Đếm và lấy phần. Đừng kẻ một đường nối chúng.", "Three names, no order. Count them and take shares. Do not draw a line through them."]),
  "x-ord": (T, w, k) =>
    bars(T, w, k, [["1", "1", 0.35, k.CREAM], ["2", "2", 0.55, k.CREAM], ["3", "3", 0.8, k.GOLD], ["4", "4", 0.6, k.CREAM], ["5", "5", 0.4, k.CREAM]], ["1 đến 5 sao có thứ tự. Đừng xếp theo bảng chữ, đừng lấy trung bình như thể cách đều là chắc.", "1 to 5 stars have an order. Do not sort them alphabetically, and do not treat equal spacing as a fact."]),
  "x-num": (T, w, k) => {
    const ys = [0, 0.05, 0.08, 0.1, 0.12, 0.15, 0.2, 0.95];
    ys.forEach((y, i) => dot(T, w, k, -1.3 + i * 0.32, y - 0.2, i === 7 ? k.GOLD : k.CREAM, 0.08));
    chip(T, w, k, "trung vị", "median", -0.35, 0.7, 1.3);
    chip(T, w, k, "trung bình", "mean", 0.85, 1.15, 1.5);
    return (_dt, t, tell) => say(k, "Một điểm cao kéo trung bình. Trung vị ở giữa dãy. Khi hai số cách nhau, kể về cái đuôi.", "One high point pulls the mean. The median sits in the middle. When they disagree, talk about the tail.", tell);
  },
  "x-scat": (T, w, k) => {
    const pts: [number, number][] = [[-1.4, -0.4], [-1.0, -0.15], [-0.5, -0.25], [-0.1, 0.1], [0.4, 0.05], [0.9, 0.4], [1.3, 0.55]];
    pts.forEach(([x, y]) => dot(T, w, k, x, y, k.CREAM, 0.08));
    const line = new T.Mesh(new T.BoxGeometry(2.8, 0.03, 0.03), new T.MeshBasicMaterial({ color: k.GOLD }));
    line.position.set(0, 0.1, 0);
    line.rotation.z = 0.35;
    w.add(line);
    return (_dt, t, tell) => {
      line.scale.x = 0.96 + Math.sin(t) * 0.04;
      say(k, "r ví dụ 0,6 là độ đi cùng nhau. r = 0 không có nghĩa là không có hình. Một hình chữ U vẫn có r gần 0.", "An example r of 0.6 is how they move together. r = 0 does not mean there is no shape. A U can still have r near 0.", tell);
    };
  },
  "x-cause": (T, w, k) =>
    bars(T, w, k, [["form", "forms", 0.7, k.GOLD], ["kem", "ice cream", 0.75, k.CREAM], ["mùa lễ", "festival", 0.95, k.CLAY]], ["Form và kem cùng tăng. Cả hai có thể bị mùa lễ kéo. r không phải nút nhân quả.", "Forms and ice cream rise together. A festival can pull both. r is not a causal switch."]),
  "x-group": (T, w, k) =>
    clouds(T, w, k, [{ x: -1.1, y: 0.15, color: k.CREAM, n: 6 }, { x: 0.15, y: 0.45, color: k.GOLD, n: 6 }, { x: 1.2, y: -0.1, color: k.CLAY, n: 6 }], [["A", "A", -1.1, -0.8, 0.5], ["B", "B", 0.15, -0.8, 0.5], ["C", "C", 1.2, -0.8, 0.5]], ["Một số, một cột chữ. So từng nhóm. Đừng tính một r cho tên nhóm.", "A number and a text column. Compare the groups. Do not compute one r for the group names."]),
  "x-denom": (T, w, k) =>
    toggle(T, w, k, ["30% của GDN", "30% of GDN"], ["75% của người mua", "75% of buyers"], ["30 mua trên 100 dòng GDN. Mẫu số là GDN.", "30 buys out of 100 GDN rows. The denominator is GDN."], ["30 trên 40 người mua. Mẫu số là người mua. Hai câu khác nhau.", "30 out of 40 buyers. The denominator is buyers. Those are different sentences."]),
  "x-flip": (T, w, k) => {
    const top = [
      kitBars(T, w, k, -0.55, 0.35, 0.62, k.GOLD),
      kitBars(T, w, k, 0.55, 0.35, 0.32, k.CREAM),
    ];
    kitBars(T, w, k, -1.15, -0.55, 0.28, k.CREAM);
    kitBars(T, w, k, -0.45, -0.55, 0.55, k.GOLD);
    kitBars(T, w, k, 0.45, -0.55, 0.3, k.CREAM);
    kitBars(T, w, k, 1.15, -0.55, 0.58, k.GOLD);
    chip(T, w, k, "gộp: GDN cao", "pooled: GDN higher", 0, 1.15, 2.15);
    return (_dt, t, tell) => {
      void top;
      say(k, "Tách khách mới và khách cũ thì TikTok không thua. Gộp lại nói ngược vì GDN toàn khách cũ.", "Split new and returning and TikTok is not behind. Pooled, it looks behind because GDN is mostly returning customers.", tell);
    };
  },
  "x-wh": (T, w, k) =>
    toggle(T, w, k, ["đang ghi đơn", "taking orders"], ["18 tháng", "18 months"], ["Bảng này phục vụ đơn hôm nay. Đừng kể chuyện cả năm từ nó.", "This table serves today's orders. Do not tell a year-long story from it."], ["Kho giữ lịch sử để đọc. Đơn mới vẫn ghi ở bảng kia.", "The warehouse keeps history for reading. New orders still land in the other table."]),
  "x-star": (T, w, k) => {
    box(T, w, k, 0, 0, 1.15, 0.55, k.GOLD);
    chip(T, w, k, "1 sự kiện", "1 event", 0, 0, 1.2);
    const arms: [string, string, number, number][] = [["kênh", "channel", 0, 1.15], ["ngày", "date", -1.35, -0.85], ["cửa", "store", 1.35, -0.85]];
    arms.forEach(([vi, en, x, y]) => {
      box(T, w, k, Number(x), Number(y), 0.95, 0.42, k.CREAM);
      chip(T, w, k, vi, en, Number(x), Number(y), 0.95);
    });
    return (_dt, t, tell) => say(k, "Giữa là từng sự kiện, một hạt đúng. Quanh là tên. Đừng để một dòng vừa là một click vừa là một ngày.", "The middle is each event, one grain. Around it are names. Do not let one row be both a click and a day.", tell);
  },
  "x-key": (T, w, k) => {
    const row = chip(T, w, k, "form", "form", -0.9, 0.1, 1);
    const ok = chip(T, w, k, "chiến dịch có thật", "a real campaign", 0.85, 0.1, 2);
    return (_dt, t, tell) => {
      const bad = t % 6 > 3;
      ok.position.x = bad ? 1.6 : 0.75;
      say(k, bad ? "Trỏ vào mã không có. Khóa ngoại phải chặn dòng mồ côi." : "Form trỏ tới chiến dịch đang tồn tại.", bad ? "It points at an id that is not there. A foreign key should block the orphan." : "The form points at a campaign that exists.", tell);
    };
  },
  "x-ddl": (T, w, k) =>
    toggle(T, w, k, ["thêm một cột", "add a column"], ["sửa một dòng", "change a row"], ["DDL đổi khung bảng. CREATE, ALTER, DROP.", "DDL changes the table's shape. CREATE, ALTER, DROP."], ["DML đổi dòng. INSERT, UPDATE, DELETE. Không phải cùng một việc.", "DML changes rows. INSERT, UPDATE, DELETE. Not the same job."]),
  "x-run": (T, w, k) => {
    const names: [string, string][] = [["FROM", "FROM"], ["WHERE", "WHERE"], ["GROUP", "GROUP"], ["HAVING", "HAVING"], ["SELECT", "SELECT"], ["ORDER", "ORDER"]];
    const chips = names.map(([vi, en], i) => {
      const col = i % 3;
      const row = Math.floor(i / 3);
      return chip(T, w, k, vi, en, (col - 1) * 1.2, 0.55 - row * 0.95, 1.05);
    });
    return (_dt, t, tell) => {
      const on = Math.floor(t / 0.9) % chips.length;
      chips.forEach((c, i) => {
        c.position.z = i === on ? 0.2 : 0;
        c.scale.setScalar(i === on ? 1.08 : 1);
      });
      say(k, "Máy không bắt đầu ở chữ SELECT. FROM trước, SELECT gần cuối.", "The engine does not start at the word SELECT. FROM comes first. SELECT is near the end.", tell);
    };
  },
  "x-having": (T, w, k) =>
    toggle(T, w, k, ["WHERE lọc dòng", "WHERE filters rows"], ["HAVING lọc nhóm", "HAVING filters groups"], ["WHERE chạy trước khi cộng. Nó không thấy SUM.", "WHERE runs before the sum. It cannot see SUM."], ["HAVING thấy tổng của nhóm. TikTok dưới 15 form thì loại nhóm đó.", "HAVING sees the group's total. Drop TikTok if its forms are under 15."]),
  "x-count": (T, w, k) =>
    toggle(T, w, k, ["COUNT(*) = 4", "COUNT(*) = 4"], ["COUNT(form) = 3", "COUNT(form) = 3"], ["Bốn dòng, một ô form trống. COUNT(*) đếm dòng.", "Four rows, one blank form cell. COUNT(*) counts rows."], ["COUNT(form) bỏ ô trống. SUM cũng bỏ trống, không coi trống là 0.", "COUNT(form) skips the blank. SUM skips blanks too. It does not treat blank as 0."]),
  "x-join": (T, w, k) => {
    chip(T, w, k, "3 form", "3 forms", -1.15, 0.35, 1.2);
    chip(T, w, k, "2 dòng giá", "2 price rows", 1.15, 0.35, 1.5);
    const out = chip(T, w, k, "6 dòng", "6 rows", 0, -0.65, 1.2);
    return (_dt, t, tell) => {
      out.position.y = -0.65 + Math.sin(t * 2) * 0.06;
      say(k, "Khóa không duy nhất thì nối nhân dòng. Đếm trước và sau. Inner bỏ dòng không khớp.", "A key that is not unique multiplies rows. Count before and after. An inner join drops rows that do not match.", tell);
    };
  },
  "x-left": (T, w, k) =>
    toggle(T, w, k, ["cửa không có đơn", "a store with no orders"], ["null, không phải 0", "null, not 0"], ["Left giữ cửa đó. Bên đơn để trống.", "A left join keeps that store. The order side is blank."], ["Trống không phải doanh thu 0. WHERE bên phải = … sẽ biến left thành inner.", "Blank is not revenue 0. WHERE on the right side turns the left join into an inner join."]),
  "x-union": (T, w, k) =>
    toggle(T, w, k, ["UNION bỏ trùng", "UNION drops copies"], ["UNION ALL giữ", "UNION ALL keeps them"], ["Xếp dọc hai bảng cùng cột. UNION còn một dòng nếu hai bên giống hệt.", "Stack two tables with the same columns. UNION keeps one row when both sides match."], ["UNION ALL giữ cả hai. Dùng nó khi trùng vẫn là hai sự kiện.", "UNION ALL keeps both. Use it when a copy is still two events."]),
  "x-win": (T, w, k) =>
    toggle(T, w, k, ["GROUP BY còn 3 dòng", "GROUP BY leaves 3"], ["cửa sổ còn từng tuần", "a window keeps each week"], ["Cộng theo kênh thì mất từng tuần.", "Summing by channel loses the weeks."], ["Cửa sổ thêm hạng hoặc tổng chạy mà vẫn còn từng dòng.", "A window adds a rank or a running total and still keeps every row."]),
  "x-rank": (T, w, k) =>
    toggle(T, w, k, ["RANK 1, 1, 3", "RANK 1, 1, 3"], ["DENSE 1, 1, 2", "DENSE 1, 1, 2"], ["Hai tuần hòa hạng 1. RANK nhảy xuống 3.", "Two weeks tie for 1. RANK skips to 3."], ["DENSE_RANK không nhảy. ROW_NUMBER thì phá hòa bằng cách tùy ý, 1 rồi 2 rồi 3.", "DENSE_RANK does not skip. ROW_NUMBER breaks the tie arbitrarily: 1 then 2 then 3."]),
  "x-part": (T, w, k) =>
    bars(T, w, k, [["hạng 1", "rank 1", 1.0, k.GOLD], ["hạng 1", "rank 1", 0.85, k.GOLD], ["hạng 2", "rank 2", 0.55, k.CREAM]], ["Mỗi kênh đếm hạng lại từ 1. Hạng 1 của TikTok không phải hạng 1 của cả bảng.", "Each channel starts again at 1. TikTok's 1 is not number 1 of the whole table."]),
  "x-frame": (T, w, k) => {
    const ds = [0.4, 0.7, 0.5, 0.9, 0.6].map((h, i) => k.peg(T, (i - 2) * 0.55, h, k.CREAM, 0.28));
    ds.forEach((m) => w.add(m));
    return (_dt, t, tell) => {
      const on = Math.floor(t / 0.8) % 5;
      ds.forEach((m, i) => {
        const mat = m.material as InstanceType<Three["MeshLambertMaterial"]>;
        const inside = i <= on && i > on - 3;
        mat.color.setHex(inside ? k.GOLD : k.CREAM);
      });
      say(k, "Khung là vài dòng quanh dòng này, ví dụ 3 tuần. Không phải cả kênh. Thiếu tuần thì «3 dòng» không phải «3 tuần lịch».", "The frame is a few rows around this one, for example 3 weeks. Not the whole channel. If a week is missing, “3 rows” is not “3 calendar weeks”.", tell);
    };
  },
  "x-lag": (T, w, k) => {
    const today = chip(T, w, k, "hôm nay 40", "today 40", 0.7, 0.15, 1.6);
    const prev = chip(T, w, k, "hôm qua 32", "yesterday 32", -0.85, 0.15, 1.7);
    return (_dt, t, tell) => {
      today.position.x = 0.55 + Math.sin(t) * 0.05;
      say(k, "Lag lấy đúng một dòng trước theo thứ bạn sắp. Chỉ là hôm qua nếu sắp theo ngày và không thiếu ngày.", "Lag takes the one previous row in your sort. It is yesterday only if you sorted by date and no date is missing.", tell);
    };
  },
  "x-case": (T, w, k) =>
    bars(T, w, k, [["thấp", "low", 0.45, k.CREAM], ["vừa", "mid", 0.8, k.GOLD], ["cao", "high", 1.15, k.CLAY]], ["CASE viết bậc ngay trong câu. Luật thuế hay «chưa mua» đọc lại được, không nằm trong đầu người xuất file.", "CASE writes the bins in the query. A tax rule or “has not bought” stays readable. It does not live in someone's head."]),
  "x-cte": (T, w, k) =>
    toggle(T, w, k, ["đặt tên câu con", "name the inner query"], ["view không phải bản sao", "a view is not a copy"], ["CTE cho một câu lồng có tên. Dễ đọc. Đừng chắc máy chạy nó một lần.", "A CTE gives a nested query a name. Easier to read. Do not assume the engine runs it once."], ["View lưu câu hỏi đó. Mỗi lần gọi là chạy lại. Không phải bản backup của các dòng.", "A view stores that question. Each use runs it again. It is not a backup of the rows."]),
  "x-idx": (T, w, k) =>
    toggle(T, w, k, ["lật từng dòng", "scan every row"], ["tra đúng mã", "look up the id"], ["Không có chỉ mục thì máy đi qua cả bảng.", "With no index the engine walks the whole table."], ["Chỉ mục là mục lục cho cột bạn hay lọc. Nó không sửa một câu sai. Ghi thêm thì chậm hơn.", "An index is a lookup list for a column you filter on. It does not fix a wrong question. Extra writes get slower."]),
  "x-proj": (T, w, k) =>
    toggle(T, w, k, ["tuần tới, cùng kiểu", "next week, same kind"], ["gấp đôi ngân sách", "double the budget"], ["Dự đoán là dòng mới cùng kiểu với các dòng đã học, kèm độ trượt.", "A prediction is a new row of the same kind as the rows you learned from, with a miss-size."], ["Đẩy chi tiêu tới chỗ chưa thấy rồi đọc đường. Đó là giả định, không phải dự báo.", "Push spend somewhere you have not seen, then read the line. That is a what-if, not a forecast."]),
  "x-spec": (T, w, k) =>
    toggle(T, w, k, ["bắt được người rời", "caught the leavers"], ["để yên người ở", "left stayers alone"], ["Độ nhạy = người rời bị gọi / mọi người rời. Cùng là recall.", "Sensitivity = leavers you called / all leavers. That is recall."], ["Độ đặc hiệu = người ở mà bạn không gọi / mọi người ở. Không phải accuracy.", "Specificity = stayers you did not call / all stayers. Not accuracy."]),
  "x-who": (T, w, k) =>
    toggle(T, w, k, ["cả file", "the whole file"], ["chỉ người nghe máy", "only people who picked up"], ["Xác suất học trên cả file thì nói về cả file.", "A probability fit on the whole file talks about the whole file."], ["Chỉ học trên người nghe máy thì đừng gán số đó cho người không nghe.", "If you fit only on people who picked up, do not give that number to people who did not."]),
  "x-drift": (T, w, k) =>
    bars(T, w, k, [["tháng 3", "March", 0.5, k.CREAM], ["tháng 12", "December", 1.05, k.GOLD]], ["Cùng một mô hình. Tỷ lệ và kênh đã đổi. AUC tháng 3 không phải giấy phép cho tháng 12.", "Same model. The rate and the channels moved. March's AUC is not a permit for December."]),
  "x-treeline": (T, w, k) =>
    toggle(T, w, k, ["một đường", "one line"], ["bậc thang", "steps"], ["Đường thẳng là một độ dốc. Nó trượt nếu form nhảy cóc theo nhóm.", "A straight line is one slope. It misses if forms jump by group."], ["Cây cắt thành bậc. Ngoài khoảng đã thấy, bậc cuối chỉ là trung bình của lá mép.", "A tree cuts steps. Outside what it has seen, the last step is only the edge leaf's average."]),
  "x-imp": (T, w, k) =>
    bars(T, w, k, [["ghé", "visits", 1.15, k.GOLD], ["chi", "spend", 0.7, k.CREAM], ["tên thứ", "weekday", 0.4, k.CLAY]], ["Độ cao là phần làm nhóm sạch hơn khi cắt cột đó. Ví dụ, không phải «ghé gây ra form». Cột sao chép có thể cướp phần.", "The height is how much splits on that column cleaned the groups. An example, not “visits cause forms”. A copy column can steal the credit."]),
  "x-leaf": (T, w, k) => {
    const line = new T.Mesh(new T.BoxGeometry(1.1, 0.08, 0.08), new T.MeshBasicMaterial({ color: k.GOLD }));
    const line2 = line.clone();
    line.position.set(-0.7, -0.2, 0);
    line2.position.set(0.7, 0.45, 0);
    w.add(line, line2);
    chip(T, w, k, "trung bình lá", "leaf average", 0, 1.15, 1.8);
    return (_dt, t, tell) => {
      line2.position.y = 0.45 + Math.sin(t) * 0.03;
      say(k, "Lá cây hồi quy là trung bình các dòng rơi vào đó. Không phải một độ dốc. Ra ngoài vết cắt cuối, bạn vẫn nhận số của lá mép.", "A regression-tree leaf is the average of the rows that landed there. Not a slope. Past the last cut you still get the edge leaf's number.", tell);
    };
  },
  "x-kpp": (T, w, k) =>
    toggle(T, w, k, ["hai tâm cùng một đám", "two centers in one clump"], ["tâm cách xa", "centers spread out"], ["Khởi động ngẫu nhiên có thể đặt hai tâm vào một đám. Đám kia không có ai.", "A random start can drop two centers in one clump. The other clump has nobody."], ["K-means++ chọn tâm sau xa tâm trước. Vẫn nên chạy vài lần. Đó không phải bằng chứng k đúng.", "K-means++ picks the next center far from the ones it has. Still run a few starts. That is not proof that k is right."]),
  "x-link": (T, w, k) =>
    toggle(T, w, k, ["dính chỗ gần nhất", "glue the nearest"], ["dính chỗ xa nhất", "glue the farthest"], ["Single linkage lấy khoảng cách hai điểm gần nhất. Dễ nối thành một sợi dài.", "Single linkage uses the closest pair. It can chain into a long snake."], ["Complete lấy hai điểm xa nhất. Cụm chặt hơn. Average ở giữa. Không cái nào là đúng tuyệt đối.", "Complete uses the farthest pair. Tighter clumps. Average sits in between. None of them is the truth."]),
  "x-db": (T, w, k) => {
    for (let i = 0; i < 8; i++) dot(T, w, k, -0.6 + (i % 4) * 0.28, 0.15 + Math.floor(i / 4) * 0.28, k.GOLD, 0.08);
    dot(T, w, k, 1.2, 0.7, k.RUST, 0.1);
    dot(T, w, k, 1.45, -0.35, k.RUST, 0.1);
    chip(T, w, k, "nhiễu", "noise", 1.3, -1.0, 1);
    return (_dt, t, tell) => say(k, "Đám đặc là một cụm. Điểm thưa không bị ép vào cụm. Bạn chọn bán kính và số hàng xóm, không chọn k. Bán kính sai thì ra một đám, hoặc toàn nhiễu.", "A dense patch is a cluster. Sparse points are not forced in. You pick a radius and a neighbor count, not k. A bad radius is one blob, or all noise.", tell);
  },
  "x-gmm": (T, w, k) => {
    const mid = dot(T, w, k, 0.05, 0.1, k.GOLD, 0.12);
    for (let i = 0; i < 6; i++) {
      dot(T, w, k, -0.8 + Math.cos(i) * 0.3, Math.sin(i) * 0.25, k.CREAM, 0.07);
      dot(T, w, k, 0.85 + Math.cos(i * 1.3) * 0.3, Math.sin(i) * 0.25, k.CLAY, 0.07);
    }
    return (_dt, t, tell) => {
      const mat = mid.material as InstanceType<Three["MeshLambertMaterial"]>;
      mat.color.setHex(t % 4 > 2 ? k.GOLD : k.CLAY);
      say(k, "Điểm giữa thuộc cả hai đám một phần. Không bị gán cứng. Hình phải giống bầu dục. Đám hình vòng thì mô hình này kể sai.", "The middle point belongs partly to both clouds. It is not a hard label. The shape is meant to be a blob. A ring-shaped group is the wrong story for this model.", tell);
    };
  },
  "x-kmode": (T, w, k) =>
    bars(T, w, k, [["GDN", "GDN", 1.1, k.GOLD], ["FB", "FB", 0.55, k.CREAM], ["TikTok", "TikTok", 0.4, k.CLAY]], ["Không có trung bình của một tên kênh. Mode là tên gặp nhiều nhất. K-prototype mới trộn được cột số và cột chữ.", "There is no mean of a channel name. The mode is the name that shows up most. K-prototype is what mixes a number column and a text column."]),
  "x-stem": (T, w, k) =>
    toggle(T, w, k, ["studies → studi", "studies → studi"], ["studies → study", "studies → study"], ["Stem cắt đuôi. Nhanh, và có thể thành một từ không có trong từ điển.", "A stem chops the ending. Fast, and it can become a word that is not in the dictionary."], ["Lemma đưa về từ từ điển. Cả hai đều vứt hình thái. Chúng có thể dán hai nghĩa khác vào một chữ.", "A lemma returns the dictionary word. Both throw the form away. They can glue two meanings onto one token."]),
  "x-pmi": (T, w, k) =>
    bars(T, w, k, [["chờ lâu", "long wait", 1.15, k.GOLD], ["và spa", "and spa", 0.35, k.CREAM]], ["«chờ lâu» đi cùng nhiều hơn nếu hai từ độc lập. «và» đi với mọi thứ nên không được điểm. Đó không phải ngữ pháp.", "“Long wait” shows up together more than if the two words were independent. “And” goes with everything, so it scores low. This is not grammar."]),
  "x-git": (T, w, k) => chain(T, w, k, ["Mỗi ô là một ảnh của file, kèm một câu. Không phải nút Save trong đầu bạn.", "Each block is a snapshot of the files, plus a sentence. Not a Save button that lives in your head."], false),
  "x-branch": (T, w, k) => chain(T, w, k, ["Nhánh thử đi riêng. Nhánh chính đứng yên cho tới khi bạn nhập lại.", "The try-line goes off on its own. Main stays put until you merge."], true),
  "x-vote": (T, w, k) => {
    const votes = [1, 1, 0, 1, 1].map((v, i) => box(T, w, k, (i - 2) * 0.55, 0.35, 0.38, 0.38, v ? k.GOLD : k.CREAM));
    const out = chip(T, w, k, "4 trên 5", "4 of 5", 0, -0.7, 1.4);
    return (_dt, t, tell) => {
      const i = Math.floor(t / 0.7) % 5;
      votes.forEach((m, knd) => {
        m.position.y = knd === i ? 0.55 : 0.35;
      });
      out.visible = true;
      say(k, "Năm cây bỏ phiếu. Kết quả là số đông, không phải cây nào cũng đúng. Rừng giảm nhảy, không sửa một họ mô hình vốn đã lệch.", "Five trees vote. The result is the majority, not a claim that every tree is right. A forest calms the jump. It does not fix a family of models that was already biased.", tell);
    };
  },
  "x-boot": (T, w, k) => {
    const chips = [0, 1, 2, 3, 4].map((i) => dot(T, w, k, -1.2 + i * 0.45, 0.4, k.CREAM, 0.1));
    return (_dt, t, tell) => {
      const skip = Math.floor(t) % 5;
      chips.forEach((m, i) => {
        m.position.y = i === skip ? -0.4 : 0.45 + (i === (skip + 2) % 5 ? 0.25 : 0);
      });
      say(k, "Rút lại đủ số dòng, có hoàn lại. Có dòng vào hai lần, có dòng bị bỏ. Mỗi cây thấy một túi hơi khác.", "Draw the same number of rows, with replacement. Some rows enter twice. Some are left out. Each tree sees a slightly different bag.", tell);
    };
  },
  "x-rf": (T, w, k) =>
    toggle(T, w, k, ["mọi cột đều được xét", "every column is offered"], ["chỉ vài cột ngẫu nhiên", "only a few random columns"], ["Cây nào cũng cắt cột mạnh nhất. Các cây giống hệt nhau.", "Every tree cuts the strongest column. The trees are copies."], ["Mỗi nhát cắt chỉ được nhìn một nhóm cột rút ngẫu nhiên. Cây bớt giống nhau.", "Each cut may look only at a random handful of columns. The trees look less alike."]),
  "x-imb": (T, w, k) =>
    bars(T, w, k, [["ở 92", "stay 92", 1.2, k.CREAM], ["rời 8", "leave 8", 0.28, k.GOLD]], ["Gọi không ai rời thì đúng 92%. Bạn không giữ được ai. Accuracy không phải brief.", "Call nobody a leaver and you are 92% right. You kept nobody. Accuracy is not the brief."]),
  "x-weight": (T, w, k) =>
    toggle(T, w, k, ["nhân đôi dòng hiếm", "duplicate the rare rows"], ["tăng giá của dòng hiếm", "raise the cost of a rare row"], ["Nhân đôi không tạo khách mới. Làm trước khi chia tập thì cùng một người lọt cả hai phía.", "Duplicating does not create a new customer. Do it before the split and the same person lands on both sides."], ["Tăng trọng số đổi cái giá của một lần bỏ sót. Vẫn là những dòng cũ. Đổi ngưỡng thường là nút nên thử trước.", "A class weight changes the cost of a miss. The rows are the old rows. Moving the threshold is usually the lever to try first."]),
  "x-bv": (T, w, k) =>
    toggle(T, w, k, ["đường thẳng trên hình cong", "a line on a curve"], ["khớp từng điểm nhiễu", "a fit on each noisy point"], ["Lệch: họ mô hình không đủ hình. Cả tập học lẫn tập mới đều trượt.", "Bias: the family cannot make that shape. Both the training rows and new rows miss."], ["Nhảy: đổi mẫu là đổi đường. Tập học đẹp, tập mới xấu.", "Variance: change the sample and the line changes. Training looks good. New rows look bad."]),
  "x-ridge": (T, w, k) => {
    const a = k.peg(T, -0.7, 1.15, k.CREAM, 0.4);
    const b = k.peg(T, 0.7, 1.05, k.CREAM, 0.4);
    w.add(a, b);
    return (_dt, t, tell) => {
      const s = 0.55 + 0.45 * (0.5 + 0.5 * Math.sin(t * 0.8));
      a.scale.y = 1.15 * s;
      b.scale.y = 1.05 * s;
      a.position.y = -1.05 + a.scale.y / 2;
      b.position.y = -1.05 + b.scale.y / 2;
      say(k, "Ridge phạt tổng bình phương hệ số. Cột co về 0, ít khi thành đúng 0. Phải đưa cột về cùng thước trước. Đây không phải xếp hạng nguyên nhân.", "Ridge penalises the sum of squared coefficients. Columns shrink toward 0 and rarely become exactly 0. Put columns on one scale first. This is not a causal ranking.", tell);
    };
  },
  "x-lasso": (T, w, k) => {
    const a = k.peg(T, -0.7, 1.1, k.GOLD, 0.4);
    const b = k.peg(T, 0.7, 0.8, k.CLAY, 0.4);
    w.add(a, b);
    chip(T, w, k, "còn", "kept", -0.7, -1.25, 0.8);
    chip(T, w, k, "về 0", "to 0", 0.7, -1.25, 0.9);
    return (_dt, t, tell) => {
      const kill = t % 6 > 3;
      b.scale.y = kill ? 0.05 : 0.8;
      b.position.y = -1.05 + b.scale.y / 2;
      say(k, "Lasso phạt tổng trị tuyệt đối. Một cột có thể thành đúng 0. Số 0 phụ thuộc thước đo của cột. Không có nghĩa cột đó vô dụng ngoài đời.", "Lasso penalises the sum of absolute coefficients. A column can become exactly 0. The zero depends on the column's scale. It does not mean the column is useless in the world.", tell);
    };
  },
  "x-rmse": (T, w, k) =>
    bars(T, w, k, [["trượt 2", "miss 2", 0.4, k.CREAM], ["trượt 2", "miss 2", 0.4, k.CREAM], ["trượt 10", "miss 10", 1.2, k.GOLD]], ["RMSE bình phương rồi lấy căn, nên tuần trượt 10 form bị phạt nặng. MAE cộng đều. R² vẫn là phần phương sai, không phải phần tuần nằm trên đường.", "RMSE squares then takes a root, so a week that misses by 10 forms is punished hard. MAE adds them evenly. R² is still a share of variance, not the share of weeks on the line."]),
  "x-log": (T, w, k) =>
    toggle(T, w, k, ["một tuần rất to", "one huge week"], ["log kéo đuôi lại", "log pulls the tail in"], ["Chi tiêu vài tuần gấp chục lần tuần khác. Trung bình bị tuần đó chiếm.", "A few weeks of spend are tens of times the others. The mean is that week."], ["Log kéo đuôi. Log của 0 không có. Phải chọn log(1 + x) hoặc một luật khác, và nói lại đơn vị.", "Log pulls the tail in. Log of 0 does not exist. You must choose log(1 + x) or another rule, and translate the unit back."]),
  "x-hot": (T, w, k) =>
    bars(T, w, k, [["GDN", "GDN", 0.9, k.GOLD], ["FB", "FB", 0.3, k.CREAM], ["TikTok", "TikTok", 0.3, k.INK]], ["Mỗi kênh một cột 0/1. Mô hình có hệ số chặn thì bỏ một cột, nếu không là bẫy biến giả. Cây thì có thể giữ cả ba.", "One 0/1 column per channel. A model with an intercept drops one column, or it is the dummy trap. A tree can keep all three."]),
  "x-clock": (T, w, k) =>
    toggle(T, w, k, ["một số tăng dần", "one rising number"], ["thứ, giờ, tháng", "weekday, hour, month"], ["Một mốc thời gian để nguyên chủ yếu nói «muộn hơn».", "A raw timestamp mostly says “later”."], ["Tách cái bạn định dùng: thứ, giờ, tháng. Chủ nhật và thứ hai không phải hai bậc của một đường thẳng.", "Split out what you mean: weekday, hour, month. Sunday and Monday are not two steps on a straight line."]),
  "x-cv": (T, w, k) => {
    const folds = [0, 1, 2, 3].map((i) => box(T, w, k, (i - 1.5) * 0.7, 0, 0.55, 0.7, k.CREAM));
    return (_dt, t, tell) => {
      const on = Math.floor(t / 1.1) % 4;
      folds.forEach((m, i) => {
        const mat = m.material as InstanceType<Three["MeshLambertMaterial"]>;
        mat.color.setHex(i === on ? k.GOLD : k.CREAM);
      });
      say(k, "Mỗi lượt giấu một miếng, học phần còn lại. Điểm là trung bình các lần giấu. Chỉnh mô hình trên chính các lần đó thì điểm hơi đẹp hơn sự thật.", "Each round hides one slice and learns on the rest. The score is the average of those hides. Tune on those same rounds and the score is a bit prettier than the truth.", tell);
    };
  },
  "x-grid": (T, w, k) =>
    toggle(T, w, k, ["mọi ô bạn liệt kê", "every cell you listed"], ["rút vài ô trong khoảng", "draw a few cells in the range"], ["Lưới thử hết tổ hợp bạn viết. Độ sâu bạn không viết thì không được thử.", "A grid tries every combination you wrote down. A depth you left out is never tried."], ["Rút ngẫu nhiên đỡ tốn khi nhiều nút vô hại. Vẫn chỉ trong khoảng bạn đặt.", "A random draw wastes less when many knobs do nothing. It still stays inside the ranges you set."]),
  "x-order": (T, w, k) => series(T, w, k, [0.2, 0.15, 0.25, 0.1, 0.3, 0.55, 0.4, 0.7, 0.5], 9, ["Tuần đứng theo thứ tự. Xáo thì mất cái bạn định dự báo.", "The weeks stay in order. Shuffle them and you lose the thing you meant to forecast."], false),
  "x-dep": (T, w, k) =>
    toggle(T, w, k, ["mỗi tuần một phiếu độc lập", "each week an independent draw"], ["tuần này giống tuần trước", "this week looks like last week"], ["Hồi quy thường tính như các dòng không kéo nhau. Sai số chuẩn rồi sẽ tự tin quá mức.", "Regression usually counts rows as if they do not pull each other. The standard error then gets too confident."], ["Phần dư tuần này giống tuần trước. Đó là chuỗi thời gian, không phải một đống dòng.", "This week's miss looks like last week's. That is a time series, not a pile of rows."]),
  "x-decomp": (T, w, k) =>
    toggle(T, w, k, ["cộng thêm một mùa", "add a season"], ["nhân một mùa", "multiply a season"], ["Cộng: tháng lễ thêm khoảng 20 form, dù nền cao hay thấp.", "Additive: the festival month adds about 20 forms, whether the base is high or low."], ["Nhân: tháng lễ là ×1,4. Nền gấp đôi thì phần mùa cũng to hơn. Phải chọn, đừng đoán.", "Multiplicative: the festival month is ×1.4. Double the base and the seasonal swing grows. You have to choose. Do not guess."]),
  "x-naive": (T, w, k) => series(T, w, k, [-0.2, 0, 0.1, -0.1, 0.2, 0.15, 0.35, 0.35], 7, ["Chấm vàng là «bằng tuần trước». Mô hình nào không thắng được câu này thì chưa xong.", "The gold dot is “same as last week”. A model that cannot beat that sentence is not done."]),
  "x-sma": (T, w, k) => {
    const ds = [0.3, 0.8, 0.4, 0.9, 0.5, 1.1, 0.45].map((h, i) => k.peg(T, (i - 3) * 0.42, h, k.CREAM, 0.28));
    ds.forEach((m) => w.add(m));
    return (_dt, t, tell) => {
      const on = 3 + Math.floor((t * 0.5) % 2);
      ds.forEach((m, i) => {
        const mat = m.material as InstanceType<Three["MeshLambertMaterial"]>;
        mat.color.setHex(i > on - 3 && i <= on ? k.GOLD : k.CREAM);
      });
      say(k, "Trung bình 3 tuần gần nhất, mỗi tuần một suất. Khúc cua bị chậm. Tuần lễ và tuần thường bị cân như nhau.", "The average of the last 3 weeks, each week one share. Turns show up late. A festival week and an ordinary week are weighed the same.", tell);
    };
  },
  "x-ses": (T, w, k) =>
    bars(T, w, k, [["tuần cũ", "old week", 0.4, k.CREAM], ["tuần giữa", "middle", 0.7, k.CLAY], ["tuần này", "this week", 1.15, k.GOLD]], ["San bằng mũ: tuần này nặng hơn tuần cũ. Một hệ số α. Không có dốc, không có mùa. α gần 1 thì chạy theo nhiễu.", "Exponential smoothing: this week weighs more than an old week. One coefficient α. No slope, no season. α near 1 chases the noise."]),
  "x-holt": (T, w, k) => series(T, w, k, [-0.5, -0.35, -0.15, 0.05, 0.2, 0.45, 0.7, 0.95], 6, ["Holt cộng thêm một dốc. Đẩy xa thì dốc cứ chạy. Một tháng lễ không phải một dốc cả năm.", "Holt adds a slope. Push it far and the slope keeps running. One festival month is not a slope for the whole year."]),
  "x-hw": (T, w, k) => {
    const ys = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => Math.sin(i * 1.3) * 0.45 + i * 0.04);
    return series(T, w, k, ys, 8, ["Holt-Winters thêm mùa. Bạn phải đưa chu kỳ, 7 hoặc 52. Nó không tự tìm. Cần hơn một vòng mùa để thấy hình.", "Holt-Winters adds a season. You have to give the period, 7 or 52. It does not find it. You need more than one full cycle to see the shape."]);
  },
  "x-mape": (T, w, k) =>
    bars(T, w, k, [["10 form", "10 forms", 0.7, k.CREAM], ["0 form", "0 forms", 0.12, k.RUST], ["40 form", "40 forms", 1.15, k.GOLD]], ["MAPE chia cho số thật. Tuần 0 form thì gãy. MAE vẫn tính bằng form. RMSE phạt tuần lệch lớn.", "MAPE divides by the actual. A week with 0 forms breaks it. MAE is still in forms. RMSE punishes a large miss."]),
  "x-walk": (T, w, k) => {
    const folds = [0, 1, 2, 3, 4, 5].map((i) => box(T, w, k, (i - 2.5) * 0.48, 0, 0.38, 0.55, k.CREAM));
    return (_dt, t, tell) => {
      const cut = 3 + (Math.floor(t / 1.4) % 2);
      folds.forEach((m, i) => {
        const mat = m.material as InstanceType<Three["MeshLambertMaterial"]>;
        mat.color.setHex(i < cut ? k.CREAM : i === cut ? k.GOLD : k.INK);
      });
      say(k, "Học trên quá khứ, chấm trên đoạn sau, rồi cuốn tới. Xáo tuần vào các fold sẽ cho mô hình nhìn thấy tương lai.", "Learn on the past, score the next block, then roll forward. Shuffling weeks into folds lets the model see the future.", tell);
    };
  },
  "x-stat": (T, w, k) =>
    toggle(T, w, k, ["mức đứng yên", "the level stays"], ["mức trôi đi", "the level drifts"], ["Dừng: tâm và độ rộng không phụ thuộc lúc nào bạn nhìn.", "Stationary: the center and the width do not depend on when you look."], ["Có xu hướng thì chưa dừng. Lấy hiệu tuần này trừ tuần trước. Dự báo mức thì phải hoàn tác phép trừ đó.", "A trend is not stationary. Take this week minus last week. To forecast a level you have to undo that subtraction."]),
  "x-acf": (T, w, k) =>
    bars(T, w, k, [["lag 1", "lag 1", 1.15, k.GOLD], ["lag 2", "lag 2", 0.7, k.CREAM], ["lag 3", "lag 3", 0.4, k.CREAM], ["lag 4", "lag 4", 0.2, k.INK]], ["ACF là tương quan với tuần cách k bước. PACF là phần còn lại sau khi đã tính các bước gần hơn. Đây là gợi ý, không phải bằng chứng, và chuỗi ngắn hay nói dối.", "ACF is the correlation with the week k steps back. PACF is what is left after the nearer steps are accounted for. A hint, not a proof, and a short series often lies."]),
  "x-ar": (T, w, k) => series(T, w, k, [-0.2, 0.1, 0, 0.25, 0.15, 0.35, 0.3, 0.5], 8, ["AR đoán tuần này từ vài tuần trước đó. Không phải từ các cú sốc.", "An AR guesses this week from a few earlier weeks. Not from the shocks."], false),
  "x-mam": (T, w, k) =>
    toggle(T, w, k, ["trung bình trượt", "a moving average"], ["sốc của tuần trước", "last week's shock"], ["Trung bình trượt là làm mượt: cộng vài tuần rồi chia.", "A moving-average smoother evens things out: add a few weeks and divide."], ["MA trong ARIMA là cú sốc cũ còn vương lại. Cùng chữ, khác việc. Đừng trộn.", "The MA in ARIMA is an old shock still hanging around. Same word, different job. Do not mix them."]),
  "x-arima": (T, w, k) =>
    toggle(T, w, k, ["lấy hiệu, rồi ARMA", "difference, then ARMA"], ["thêm mùa và một cột", "add a season and a column"], ["ARIMA lấy hiệu d lần cho chuỗi chịu đứng yên, rồi mới AR và MA. d = 1 là đoán cái thay đổi.", "ARIMA differences d times until the series can sit still, then adds AR and MA. d = 1 means you forecast the change."], ["SARIMA thêm chu kỳ. SARIMAX thêm một cột như khuyến mãi. Cột đó ở tuần tới phải biết trước, nếu không bạn đang đoán luôn cả khuyến mãi.", "SARIMA adds a period. SARIMAX adds a column such as a promo. You must already know that column next week, or you are forecasting the promo too."]),
  "x-sys": (T, w, k) =>
    toggle(T, w, k, ["một điểm chung", "one shared point"], ["không có điểm nào", "no shared point"], ["Hai đường cắt nhau: một nghiệm. Ví dụ (2, 1).", "Two lines cross: one solution. Example (2, 1)."], ["Hai đường song song và mâu thuẫn: không có điểm nào thỏa cả hai. Đừng bịa một nghiệm.", "Parallel and contradictory: no point sits on both. Do not invent a solution."]),
  "x-vadd": (T, w, k) =>
    toggle(T, w, k, ["cộng từng ô", "add slot by slot"], ["nhân mọi ô", "multiply every slot"], ["(10, 80) + (2, 5) = (12, 85). Không cộng chéo.", "(10, 80) + (2, 5) = (12, 85). Do not add across."], ["Nhân 2 là (20, 160). Mọi ô cùng một hệ số. Đường không qua gốc thì nhân sẽ rời đường.", "Times 2 is (20, 160). Every slot shares one factor. A line that misses the origin leaves the line when you scale."]),
  "x-arrow": (T, w, k) => {
    const shaft = new T.Mesh(new T.BoxGeometry(1.6, 0.05, 0.05), new T.MeshBasicMaterial({ color: k.GOLD }));
    shaft.position.set(0.35, 0.15, 0);
    shaft.rotation.z = 0.45;
    w.add(shaft);
    chip(T, w, k, "10 triệu", "10 million", 1.15, -0.85, 1.4);
    chip(T, w, k, "80 form", "80 forms", -1.15, 0.85, 1.3);
    return (_dt, t, tell) => {
      shaft.scale.x = 0.92 + Math.sin(t * 1.4) * 0.08;
      say(k, "Một véctơ là một danh sách số có thứ tự. (10, 80) là chi và form, không phải một số «tốt hơn».", "A vector is an ordered list of numbers. (10, 80) is spend and forms, not one number that is “better”.", tell);
    };
  },
  "x-dot": (T, w, k) => {
    const a = new T.Mesh(new T.BoxGeometry(1.5, 0.05, 0.05), new T.MeshBasicMaterial({ color: k.GOLD }));
    const b = new T.Mesh(new T.BoxGeometry(1.3, 0.05, 0.05), new T.MeshBasicMaterial({ color: k.CREAM }));
    a.position.set(0.4, -0.15, 0);
    w.add(a, b);
    return (_dt, t, tell) => {
      const ang = (t % 8) / 8 * Math.PI;
      b.rotation.z = ang;
      b.position.set(Math.cos(ang) * 0.45, Math.sin(ang) * 0.45, 0);
      const flat = ang > 1.2 && ang < 1.9;
      say(k, flat ? "Gần vuông góc thì tích vô hướng gần 0. Không cùng hướng." : "Cùng hướng thì tích lớn. (2, 3)·(4, 1) = 11.", flat ? "Near a right angle, the dot product is near 0. They do not share a direction." : "Same direction, the product is large. (2, 3)·(4, 1) = 11.", tell);
    };
  },
  "x-mat": (T, w, k) => {
    const dots = [0, 1, 2, 3].map((i) => dot(T, w, k, (i % 2) * 0.7 - 0.2, Math.floor(i / 2) * 0.7 - 0.2, k.CREAM, 0.09));
    return (_dt, t, tell) => {
      const s = 1 + 0.7 * (0.5 + 0.5 * Math.sin(t));
      dots.forEach((d, i) => {
        const x0 = (i % 2) * 0.7 - 0.2;
        d.position.x = x0 * s;
      });
      say(k, "Ma trận ăn một véctơ và nhả véctơ khác. Ví dụ kéo trục chi gấp đôi, trục form giữ nguyên.", "A matrix eats a vector and returns another. Example: stretch the spend axis by two, leave the form axis as it is.", tell);
    };
  },
  "x-mul": (T, w, k) =>
    toggle(T, w, k, ["2×3 rồi 3×1", "2×3 then 3×1"], ["3×1 rồi 2×3", "3×1 then 2×3"], ["Hàng của ma trận trái gặp cột của ma trận phải. Khớp số ở giữa thì nhân được.", "A row of the left matrix meets a column of the right. If the middle sizes match, you can multiply."], ["Đảo thứ tự thì số ở giữa không khớp. Không phải nhân từng ô.", "Reverse the order and the middle sizes do not match. It is not cell-by-cell multiply."]),
  "x-det": (T, w, k) => {
    const quad = new T.Mesh(new T.BoxGeometry(1.1, 0.8, 0.08), k.lambert(T, k.GOLD));
    w.add(quad);
    const tag = chip(T, w, k, "diện tích ×2", "area ×2", 0, 1.15, 1.8);
    const flatTag = chip(T, w, k, "diện tích 0", "area 0", 0, 1.15, 1.6);
    return (_dt, t, tell) => {
      const flat = t % 7 > 3.5;
      quad.scale.y = flat ? 0.08 : 1;
      quad.rotation.z = flat ? 0.4 : 0.15 * Math.sin(t);
      tag.visible = !flat;
      flatTag.visible = flat;
      say(k, flat ? "Định thức 0: mặt phẳng bị ép thành một đường. Không hoàn tác được." : "Định thức là hệ số nhân diện tích. 2 nghĩa là diện tích gấp đôi. Âm thì lật mặt.", flat ? "Determinant 0: the plane is pressed into a line. You cannot undo it." : "The determinant is the area multiplier. 2 means areas double. Negative flips the face.", tell);
      void tag;
    };
  },
  "x-eigen": (T, w, k) =>
    toggle(T, w, k, ["chỉ dài ra", "it only gets longer"], ["bị quay đi", "it gets turned"], ["Vectơ riêng chỉ bị kéo hoặc lật. Av = λv. Ví dụ trục ngang, λ = 2.", "An eigenvector is only stretched or flipped. Av = λv. Example: the horizontal axis, λ = 2."], ["Vectơ (1, 1) bị ma trận kéo lệch hướng. Không phải vectơ riêng.", "The vector (1, 1) gets its direction changed. It is not an eigenvector."]),
  "x-slope": (T, w, k) => {
    const pts = [-1.4, -0.8, -0.2, 0.4, 1.0, 1.4].map((x) => dot(T, w, k, x, -0.15 + 0.35 * x - 0.22 * x * x, k.CREAM, 0.07));
    const tan = new T.Mesh(new T.BoxGeometry(1.1, 0.04, 0.04), new T.MeshBasicMaterial({ color: k.GOLD }));
    w.add(tan);
    return (_dt, t, tell) => {
      const x = -0.4 + Math.sin(t * 0.7) * 0.9;
      const y = -0.15 + 0.35 * x - 0.22 * x * x;
      const slope = 0.35 - 0.44 * x;
      tan.position.set(x, y, 0.1);
      tan.rotation.z = Math.atan(slope);
      void pts;
      say(k, "Đạo hàm là độ dốc của tiếp tuyến tại đúng chỗ đó. Không phải độ dốc của cả đường.", "The derivative is the slope of the tangent at that exact spot. Not the slope of the whole curve.", tell);
    };
  },
  "x-hess": (T, w, k) =>
    toggle(T, w, k, ["lòng bát", "a bowl"], ["yên ngựa", "a saddle"], ["Cong lên mọi phía thì đó là một đáy. Bước nhỏ nào cũng đi lên.", "Curving up in every direction is a bottom. Every small step goes up."], ["Lên một phía, xuống phía kia. Đạo hàm bậc hai một số không đủ khi có hai nút.", "Up on one side, down on the other. One second-derivative number is not enough when there are two knobs."]),
  "x-jac": (T, w, k) => {
    const inn = dot(T, w, k, -1.1, 0, k.GOLD, 0.12);
    const o1 = dot(T, w, k, 0.7, 0.45, k.CREAM, 0.1);
    const o2 = dot(T, w, k, 0.7, -0.45, k.CLAY, 0.1);
    chip(T, w, k, "một bước chi", "one spend step", -1.1, -0.85, 1.6);
    chip(T, w, k, "form", "forms", 0.7, 1.05, 0.9);
    chip(T, w, k, "giá", "cost", 0.7, -1.05, 0.8);
    return (_dt, t, tell) => {
      const s = 0.85 + Math.sin(t * 1.5) * 0.15;
      o1.position.x = 0.55 + s * 0.35;
      o2.position.x = 0.55 + s * 0.2;
      void inn;
      say(k, "Nhiều đầu ra thì đạo hàm là một bảng: một bước vào làm mỗi đầu ra nhích khác nhau. Đó là Jacobian.", "Several outputs means the derivative is a table: one input step moves each output by a different amount. That is the Jacobian.", tell);
    };
  },
  "x-taylor": (T, w, k) => {
    for (let i = 0; i < 8; i++) {
      const x = -1.5 + i * 0.42;
      dot(T, w, k, x, 0.2 * Math.sin(x * 1.4) + 0.15 * x, k.CREAM, 0.07);
    }
    const line = new T.Mesh(new T.BoxGeometry(1.3, 0.04, 0.04), new T.MeshBasicMaterial({ color: k.GOLD }));
    line.position.set(0, 0, 0);
    line.rotation.z = 0.25;
    w.add(line);
    return (_dt, t, tell) => {
      line.scale.x = 0.7 + (t % 5) * 0.12;
      say(k, "Gần một điểm, đường cong giống tiếp tuyến của nó. Đi xa thì đường thẳng nói dối.", "Near one point, the curve looks like its tangent. Far away, the straight line lies.", tell);
    };
  },
  "x-mode": (T, w, k) =>
    bars(T, w, k, [["2", "2", 0.35, k.CREAM], ["4", "4", 1.15, k.GOLD], ["5", "5", 0.7, k.CREAM], ["9", "9", 0.28, k.INK]], ["4 xuất hiện nhiều nhất. Mode là 4. Hai số cùng nhiều nhất thì có hai mode. Không có mode của một cái tên nếu bạn đang hỏi trung bình.", "4 shows up most. The mode is 4. Two numbers tied for most means two modes. A name has no mean."]),
  "x-q": (T, w, k) => {
    const axis = new T.Mesh(new T.BoxGeometry(3.1, 0.04, 0.04), new T.MeshBasicMaterial({ color: k.CREAM }));
    w.add(axis);
    const marks: [string, string, number][] = [["Q1", "Q1", -0.8], ["Q2", "Q2", 0], ["Q3", "Q3", 0.8]];
    marks.forEach(([vi, en, x]) => {
      const m = new T.Mesh(new T.BoxGeometry(0.05, 0.7, 0.05), new T.MeshBasicMaterial({ color: x === 0 ? k.GOLD : k.CREAM }));
      m.position.set(Number(x), 0.15, 0);
      w.add(m);
      chip(T, w, k, vi, en, Number(x), -0.7, 0.7);
    });
    return (_dt, t, tell) => say(k, "Sắp dãy rồi cắt bốn phần. Q2 là trung vị. IQR = Q3 − Q1. Phần mềm có thể cắt lệch một ô. Nêu cách cắt.", "Sort the list, then cut four shares. Q2 is the median. IQR = Q3 − Q1. Software can disagree by a point. Name the cut.", tell);
  },
  "x-var": (T, w, k) =>
    toggle(T, w, k, ["chia n − 1", "divide by n − 1"], ["chia n", "divide by n"], ["Mẫu: tổng bình phương lệch 32, chia 7, phương sai khoảng 4,57. Căn ra khoảng 2,14.", "A sample: squared gaps sum to 32, divide by 7, variance about 4.57. The root is about 2.14."], ["Cả nguồn thì chia n. Cùng dãy này ra 4, căn ra 2. Đừng trộn hai cách.", "The whole source divides by n. This same list gives 4, and the root is 2. Do not mix the two."]),
  "x-cov": (T, w, k) =>
    toggle(T, w, k, ["cùng phía trung bình", "same side of the mean"], ["khác phía", "opposite sides"], ["Cùng phía thì hiệp phương sai dương. Đơn vị là đơn vị của x nhân y. Đừng so với một cặp khác đơn vị.", "Same side means positive covariance. The unit is x’s unit times y’s unit. Do not compare it with a pair in other units."], ["Khác phía thì âm. Dấu là câu chuyện. Độ lớn phụ thuộc thước đo.", "Opposite sides means negative. The sign is the story. The size depends on the ruler."]),
};

function kitBars(THREE: Three, world: Group, kit: Kit, x: number, y: number, h: number, color: number) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(0.28, h, 0.16), kit.lambert(THREE, color));
  mesh.position.set(x, y, 0);
  world.add(mesh);
  return mesh;
}

export function buildExtra(THREE: Three, kind: string, world: Group, kit: Kit): Update | null {
  const scene = scenes[kind];
  if (scene) return scene(THREE, world, kit);
  const beat = wideBeats[kind];
  if (beat) return toggle(THREE, world, kit, beat.a, beat.b, beat.noteA, beat.noteB);
  return null;
}
