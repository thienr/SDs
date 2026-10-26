import{G as e,U as t,d as n,f as r,v as i}from"./catalog-CzRCyCPn.js";import{D as a,E as o,I as s,L as c,M as l,O as u,T as d,g as f,h as p,j as m,n as h,w as ee}from"./index-DtmQT1cM.js";import{r as g,t as te}from"./tex-zM5jcgVu.js";import{n as _,r as v,t as ne}from"./labs-CMzNi4Ye.js";import{r as re}from"./map-DnYBQVEv.js";import{t as y}from"./walk-CO-oO7pe.js";var b=e(t(),1),x=i(),S={vi:{step:`Bước`,of:`trên`,prev:`Lùi`,next:`Bước kế`,again:`Chạy lại`,auto:`Tự chạy`,stop:`Dừng`,legend:`Màu`,focus:`đang nói tới`,gone:`bị loại hoặc gộp`,fresh:`mới xuất hiện`,bad:`sai hoặc bị từ chối`,empty:`trống (NULL)`},en:{step:`Step`,of:`of`,prev:`Back`,next:`Next step`,again:`Run again`,auto:`Autoplay`,stop:`Stop`,legend:`Colors`,focus:`in focus`,gone:`dropped or merged`,fresh:`new`,bad:`wrong or rejected`,empty:`empty (NULL)`}};function ie(e){return e===null?(0,x.jsx)(`span`,{className:`italic text-muted`,children:`NULL`}):String(e)}function C({t:e}){let t=e.m??{},n=(e,n)=>{let r=[`border border-line px-2 py-1 text-sm whitespace-nowrap`];return t.cells?.some(([t,r])=>t===e&&r===n)?r.concat(`bg-[#f0c14a] text-[#14110e] font-semibold`).join(` `):(t.dim?.includes(e)&&r.push(`opacity-35 line-through`),t.bad?.includes(e)?r.push(`bg-[#b5461f]/30`):t.add?.includes(e)||t.addCols?.includes(n)?r.push(`bg-good/25`):(t.rows?.includes(e)||t.cols?.includes(n))&&r.push(`bg-[#f0c14a]/35`),r.join(` `))};return(0,x.jsxs)(`div`,{className:`min-w-0`,children:[e.name?(0,x.jsx)(`p`,{className:`mb-1 font-mono text-xs text-muted`,children:e.name}):null,(0,x.jsx)(`div`,{className:`overflow-x-auto rounded-card border border-line bg-card`,children:(0,x.jsxs)(`table`,{className:`w-full border-collapse`,children:[(0,x.jsx)(`thead`,{children:(0,x.jsx)(`tr`,{children:e.c.map((e,n)=>(0,x.jsx)(`th`,{className:`border border-line bg-paper px-2 py-1 text-left font-mono text-xs font-semibold ${t.addCols?.includes(n)?`bg-good/25`:``} ${t.cols?.includes(n)?`bg-[#f0c14a]/50`:``}`,children:e},e+n))})}),(0,x.jsx)(`tbody`,{children:e.r.map((e,t)=>(0,x.jsx)(`tr`,{children:e.map((e,r)=>(0,x.jsx)(`td`,{className:n(t,r),children:ie(e)},r))},t))})]})})]})}function ae({demo:e,lang:t}){let n=S[t],[r,i]=(0,b.useState)(0),[a,o]=(0,b.useState)(!1),s=e.length-1,c=e[Math.min(r,s)];(0,b.useEffect)(()=>{i(0),o(!1)},[e]),(0,b.useEffect)(()=>{if(!a)return;let e=window.setInterval(()=>{i(e=>e>=s?(o(!1),e):e+1)},3200);return()=>window.clearInterval(e)},[a,s]);let l=`inline-flex min-h-11 items-center rounded-full border border-line bg-card px-4 text-sm disabled:opacity-40`,u=new Set;c.t.forEach(e=>{let t=e.m;t&&((t.rows||t.cols||t.cells)&&u.add(`focus`),t.dim&&u.add(`gone`),(t.add||t.addCols)&&u.add(`fresh`),t.bad&&u.add(`bad`),e.r.some(e=>e.includes(null))&&u.add(`empty`))});let d={focus:`bg-[#f0c14a]`,gone:`bg-line`,fresh:`bg-good/60`,bad:`bg-[#b5461f]/60`,empty:`border border-line bg-card`};return(0,x.jsxs)(`div`,{className:`rounded-card border border-line bg-paper p-3`,children:[(0,x.jsxs)(`div`,{className:`flex items-center justify-between gap-2`,children:[(0,x.jsxs)(`p`,{className:`text-xs uppercase tracking-widest text-accent`,children:[n.step,` `,Math.min(r,s)+1,` `,n.of,` `,e.length]}),(0,x.jsx)(`div`,{className:`flex gap-1`,"aria-hidden":!0,children:e.map((e,t)=>(0,x.jsx)(`span`,{className:`h-2 w-6 rounded-full ${t<=r?`bg-accent`:`bg-line`}`},t))})]}),(0,x.jsx)(`p`,{className:`mt-2 text-base leading-snug`,children:t===`en`?c.en:c.vi}),c.code?(0,x.jsx)(g,{code:c.code,lang:t,children:(0,x.jsx)(`pre`,{className:`mt-3 overflow-x-auto rounded-card bg-[#14110e] px-3 py-2 font-mono text-sm leading-relaxed text-[#f4efe6]`,children:c.code})}):null,(0,x.jsx)(`div`,{className:`mt-3 grid gap-3 ${c.t.length>1?`md:grid-cols-2`:``}`,children:c.t.map((e,t)=>(0,x.jsx)(C,{t:e},t))}),u.size>0?(0,x.jsxs)(`p`,{className:`mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted`,children:[(0,x.jsxs)(`span`,{children:[n.legend,`:`]}),[...u].map(e=>(0,x.jsxs)(`span`,{className:`inline-flex items-center gap-1`,children:[(0,x.jsx)(`span`,{className:`inline-block size-3 rounded-sm ${d[e]}`}),n[e]]},e))]}):null,(0,x.jsxs)(`div`,{className:`mt-3 flex flex-wrap gap-2`,children:[(0,x.jsx)(`button`,{type:`button`,className:l,disabled:r===0,onClick:()=>i(Math.max(0,r-1)),children:n.prev}),(0,x.jsx)(`button`,{type:`button`,className:`${l} bg-ink text-paper`,disabled:r>=s,onClick:()=>i(Math.min(s,r+1)),children:n.next}),(0,x.jsx)(`button`,{type:`button`,className:l,onClick:()=>r>=s?(i(0),o(!0)):o(!a),children:a?n.stop:r>=s?n.again:n.auto})]})]})}var w={ink:`var(--ink)`,mute:`var(--muted)`,accent:`var(--accent)`,gold:`hsl(42 88% 52%)`,green:`hsl(150 48% 38%)`,blue:`hsl(210 62% 50%)`,red:`hsl(2 68% 52%)`,soft:`color-mix(in srgb, var(--ink) 7%, var(--card))`,card:`var(--card)`,none:`transparent`},T=[`x`,`y`,`w`,`h`,`r`,`x2`,`y2`,`o`,`s`],oe={x:0,y:0,w:0,h:0,r:0,x2:0,y2:0,o:1,s:3.4};function se(e){return e<.5?2*e*e:1-(-2*e+2)**2/2}function ce(e,t,n){let r=t??e;if(!r)return null;let i={...r},a=e??{...r,o:0},o=t??{...r,o:0};for(let e of T){let t=a[e]??oe[e];i[e]=t+((o[e]??oe[e])-t)*n}return e||(i.o=(t?.o??1)*n),t||(i.o=(e?.o??1)*(1-n)),i.t=n<.5&&e?.t!==void 0?e.t:r.t,i}function le(e,t,n){let r=e.split(`
`),i=Math.max(...r.map(e=>e.length),1),a=n>0?Math.min(t,n*.92/(i*.54)):t;return{parts:r,size:Math.max(2.3,a)}}function ue({a:e}){let t=e.o??1,n=w[e.c??`ink`],r={transition:`fill .4s, stroke .4s`};if(e.k===`box`){let i=e.w??20,a=e.h??8,{parts:o,size:s}=le(e.t??``,e.s??3.4,i);return(0,x.jsxs)(`g`,{opacity:t,children:[(0,x.jsx)(`rect`,{x:e.x-i/2,y:e.y-a/2,width:i,height:a,rx:1.6,fill:w[e.f??`soft`],stroke:n,strokeWidth:e.c?.45:.25,strokeDasharray:e.d?`1.4 1`:void 0,style:r}),o.map((t,n)=>(0,x.jsx)(`text`,{x:e.x,y:e.y+(n-(o.length-1)/2)*s*1.18+s*.36,textAnchor:`middle`,fontSize:s,fill:e.f&&e.f!==`soft`&&e.f!==`card`&&e.f!==`none`&&e.f!==`gold`?`#fff`:`var(--ink)`,stroke:`none`,style:{fontWeight:500},children:t},n))]})}if(e.k===`dot`)return(0,x.jsx)(`circle`,{cx:e.x,cy:e.y,r:Math.max(0,e.r??1.2),fill:w[e.c??`ink`],opacity:t,style:r});if(e.k===`ring`)return(0,x.jsx)(`circle`,{cx:e.x,cy:e.y,r:Math.max(0,e.r??4),fill:`none`,stroke:n,strokeWidth:.5,strokeDasharray:e.d?`1.4 1`:void 0,opacity:t,style:r});if(e.k===`bar`){let n=e.w??5,i=Math.max(0,e.h??10);return(0,x.jsxs)(`g`,{opacity:t,children:[(0,x.jsx)(`rect`,{x:e.x-n/2,y:e.y-i,width:n,height:i,rx:.6,fill:w[e.c??`accent`],style:r}),e.t?(0,x.jsx)(`text`,{x:e.x,y:e.y-i-1.2,textAnchor:`middle`,fontSize:e.s??2.8,fill:w.ink,style:{fontWeight:600},children:e.t}):null]})}if(e.k===`line`||e.k===`arrow`){let i=e.x2??e.x,a=e.y2??e.y,o=i-e.x,s=a-e.y,c=Math.hypot(o,s)||1,l=o/c,u=s/c,d=1.8,f=e.k===`arrow`&&c>2.5;return(0,x.jsxs)(`g`,{opacity:t,style:r,children:[(0,x.jsx)(`line`,{x1:e.x,y1:e.y,x2:f?i-l*d*.8:i,y2:f?a-u*d*.8:a,stroke:n,strokeWidth:e.w&&e.w>0?e.w:.6,strokeDasharray:e.d?`1.6 1.2`:void 0,strokeLinecap:`round`,style:r}),f?(0,x.jsx)(`polygon`,{points:`${i},${a} ${i-l*d-u*d*.55},${a-u*d+l*d*.55} ${i-l*d+u*d*.55},${a-u*d-l*d*.55}`,fill:n,style:r}):null,e.t?(0,x.jsx)(`text`,{x:(e.x+i)/2,y:(e.y+a)/2-1.2,textAnchor:`middle`,fontSize:e.s??2.8,fill:n,children:e.t}):null]})}let{parts:i,size:a}=le(e.t??``,e.s??3.4,0);return(0,x.jsx)(`text`,{x:e.x,y:e.y,textAnchor:e.a??`middle`,fontSize:a,fill:w[e.c??`ink`],opacity:t,style:{fontWeight:500,transition:`fill .4s`},children:i.map((t,n)=>(0,x.jsx)(`tspan`,{x:e.x,dy:n===0?0:a*1.2,children:t},n))})}var de={vi:{step:`Bước`,of:`trên`,play:`Chạy`,pause:`Dừng`,replay:`Chạy lại`,next:`Bước kế`,back:`Lùi`},en:{step:`Step`,of:`of`,play:`Play`,pause:`Pause`,replay:`Replay`,next:`Next`,back:`Back`}};function fe({motion:e,lang:t}){let n=de[t],r=e.frames.length,[i,a]=(0,b.useState)(0),[o,s]=(0,b.useState)(!1),[c,l]=(0,b.useState)(e.frames[0].a),u=(0,b.useRef)(e.frames[0].a),d=(0,b.useRef)(0),f=(0,b.useRef)(null),p=(0,b.useMemo)(()=>typeof window<`u`&&window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,[]);(0,b.useEffect)(()=>{let t=e.frames[i].a,n=u.current;if(p){l(t),u.current=t;return}let r=performance.now(),a=new Map(n.map(e=>[e.id,e])),o=new Map(t.map(e=>[e.id,e])),s=[...new Set([...n.map(e=>e.id),...t.map(e=>e.id)])];cancelAnimationFrame(d.current);let c=e=>{let n=Math.min(1,(e-r)/750),i=se(n),f=[];for(let e of s){let t=ce(a.get(e),o.get(e),i);t&&(t.o??1)>.01&&f.push(t)}l(f),n<1?d.current=requestAnimationFrame(c):u.current=t};return d.current=requestAnimationFrame(c),()=>cancelAnimationFrame(d.current)},[i,e,p]),(0,b.useEffect)(()=>{let e=f.current;if(!e||p||typeof IntersectionObserver>`u`)return;let t=new IntersectionObserver(e=>{e[0]?.isIntersecting&&(s(!0),t.disconnect())},{threshold:.6});return t.observe(e),()=>t.disconnect()},[p]),(0,b.useEffect)(()=>{if(!o)return;if(i>=r-1){s(!1);return}let e=window.setTimeout(()=>a(e=>Math.min(r-1,e+1)),4200);return()=>window.clearTimeout(e)},[o,i,r]);let m=e.frames[i],h=e.h??60;return(0,x.jsxs)(`div`,{ref:f,className:`rounded-card border border-line bg-card p-3`,children:[(0,x.jsx)(`svg`,{viewBox:`0 0 100 ${h}`,className:`block w-full`,role:`img`,"aria-label":t===`en`?m.en:m.vi,children:c.map(e=>(0,x.jsx)(ue,{a:e},e.id))}),(0,x.jsxs)(`p`,{className:`mt-2 min-h-[3.6rem] text-lg leading-relaxed`,"aria-live":`polite`,children:[(0,x.jsxs)(`span`,{className:`mr-2 text-xs uppercase tracking-widest text-accent`,children:[n.step,` `,i+1,` `,n.of,` `,r]}),t===`en`?m.en:m.vi]}),(0,x.jsxs)(`div`,{className:`mt-2 flex flex-wrap items-center gap-2`,children:[(0,x.jsx)(`button`,{type:`button`,className:`min-h-11 rounded-full border border-line px-4 text-sm disabled:opacity-40`,disabled:i===0,onClick:()=>{s(!1),a(i-1)},children:n.back}),(0,x.jsx)(`button`,{type:`button`,className:`min-h-11 rounded-full bg-ink px-4 text-sm text-paper disabled:opacity-40`,disabled:i>=r-1,onClick:()=>{s(!1),a(i+1)},children:n.next}),(0,x.jsx)(`button`,{type:`button`,className:`min-h-11 rounded-full border border-line px-4 text-sm`,onClick:()=>{i>=r-1?(a(0),s(!0)):s(e=>!e)},children:i>=r-1?n.replay:o?n.pause:n.play}),(0,x.jsx)(`span`,{className:`ml-auto flex gap-1.5`,"aria-hidden":!0,children:e.frames.map((e,t)=>(0,x.jsx)(`span`,{className:`h-2 rounded-full transition-all ${t===i?`w-5 bg-accent`:`w-2 bg-line`}`},t))})]})]})}var E=(e,t,n,r,i,a,o={})=>({id:e,k:`box`,x:t,y:n,w:r,h:i,t:a,...o}),D=(e,t,n,r=`ink`,i=1.3,a={})=>({id:e,k:`dot`,x:t,y:n,r:i,c:r,...a}),O=(e,t,n,r,i=`accent`,a={})=>({id:e,k:`ring`,x:t,y:n,r,c:i,...a}),pe=(e,t,n,r,i=`accent`,a=5,o,s={})=>({id:e,k:`bar`,x:t,y:n,w:a,h:r,c:i,t:o,...s}),k=(e,t,n,r,i={})=>({id:e,k:`text`,x:t,y:n,t:r,c:`ink`,...i}),A=(e,t,n,r,i,a=`mute`,o={})=>({id:e,k:`line`,x:t,y:n,x2:r,y2:i,c:a,...o}),j=(e,t,n,r,i,a=`mute`,o={})=>({id:e,k:`arrow`,x:t,y:n,x2:r,y2:i,c:a,...o}),M=(e,t,...n)=>({vi:e,en:t,a:n.flat()}),N=(e,t=60)=>({frames:e,h:t});function P(e,t,n={}){let r=t.length,i=n.x0??6,a=n.x1??94,o=n.y??30,s=n.h??12,c=r>1?3.6:0,l=(a-i-c*(r-1))/r,u=[];return t.forEach((t,a)=>{let d=i+l/2+a*(l+c),f=n.on??-1,p=a===f,m=f>=0&&a<f,h=f>=0&&a>f&&!n.all;u.push(E(`${e}${a}`,d,o,l,s,t,{f:p?`accent`:`soft`,c:m?`green`:p?`accent`:`ink`,o:h?.5:1})),n.sub?.[a]&&u.push(k(`${e}s${a}`,d,o+s/2+4.5,n.sub[a],{s:2.7,c:p?`accent`:`mute`,o:h?.5:1})),a<r-1&&u.push(j(`${e}a${a}`,d+l/2+.3,o,d+l/2+c-.3,o,m||p?`green`:`mute`,{o:h?.4:1}))}),u}function F(e,t,n,r={}){let i=t.length,a=r.x0??10,o=r.x1??90,s=r.base??46,c=r.h??32,l=r.max??Math.max(...t,1),u=(o-a)/i,d=Math.min(10,u*.62),f=[A(`${e}base`,a-2,s,o+2,s,`mute`,{w:.3})];return t.forEach((t,i)=>{let o=a+u*(i+.5),p=Array.isArray(r.c)?r.c[i]:r.c??`accent`,m=!r.hl||r.hl.includes(i);f.push(pe(`${e}b${i}`,o,s,t/l*c,m?p:`mute`,d,r.show===!1?void 0:`${t}${r.unit??``}`,{o:m?1:.45})),f.push(k(`${e}l${i}`,o,s+4.2,n[i],{s:2.8,c:`mute`}))}),f}function I(e,t,n,r={}){let i=r.y??40,a=r.x0??8,o=r.x1??92,s=[A(`${e}ax`,a,i,o,i,`mute`,{w:.4})];for(let c of r.ticks??[]){let r=a+(c-t)/(n-t)*(o-a);s.push(A(`${e}t${c}`,r,i-1,r,i+1,`mute`,{w:.3}),k(`${e}tl${c}`,r,i+5,String(c),{s:2.8,c:`mute`}))}return s}var L=(e,t,n,r=8,i=92)=>r+(e-t)/(n-t)*(i-r);function R(e,t,n,r={}){let i=r.y??26,a=r.h??16;return[E(`${e}a`,28,i,40,a,t,{c:r.ca??`blue`,f:r.fa,o:r.oa}),E(`${e}b`,72,i,40,a,n,{c:r.cb??`accent`,f:r.fb,o:r.ob,d:r.d})]}function z(e,t,n={}){let r=n.gap??10,i=n.h??8;return t.map((t,a)=>{let o=!n.on||n.on.includes(a),s=n.bad?.includes(a);return E(`${e}${a}`,n.x??50,(n.y0??10)+a*r,n.w??72,i,t,{c:s?`red`:o?n.c??`blue`:`mute`,f:o&&n.on?s?`red`:`blue`:void 0,o:o?1:.4,s:3})})}function B(e,t,n,r={}){let i=r.w??70,a=r.h??26,o=r.fat??0,s=[],c=e=>o?(1+e*e/(2+o))**-(1.2+o*.5):Math.exp(-(e*e)/2),l=0,u=0;for(let o=0;o<=28;o++){let d=-3+6*o/28,f=t+d/3*(i/2),p=n-c(d)*a;o>0&&s.push(A(`${e}${o}`,l,u,f,p,r.c??`blue`,{w:.7,o:r.op??1})),l=f,u=p}return s.push(A(`${e}ax`,t-i/2,n,t+i/2,n,`mute`,{w:.3})),s}var me={"crisp-biz":N([M(`Spa Lotus có một file form: ngày, kênh, số form. Đây chỉ là nguyên liệu.`,`Lotus Spa has a form file: date, channel, number of forms. It is only raw material.`,E(`f`,50,18,46,16,`file form
ngày · kênh · số form`,{f:`soft`})),M(`Câu hỏi nghiệp vụ đứng trước: «Tuần sau có nên tăng ngân sách TikTok không?»`,`The business question comes first: “Should next week's TikTok budget go up?”`,E(`f`,50,46,46,16,`file form
ngày · kênh · số form`,{o:.6}),E(`q`,50,14,80,16,`Tuần sau có nên tăng
ngân sách TikTok không?`,{f:`accent`,c:`accent`}),j(`a`,50,38,50,24,`accent`)),M(`File chỉ có ích khi nó trả lời được câu hỏi đó; không phải file nào có sẵn cũng đáng phân tích.`,`The file is useful only if it can answer that question; not every file you hold deserves analysis.`,E(`q`,50,14,80,16,`Tuần sau có nên tăng
ngân sách TikTok không?`,{f:`accent`,c:`accent`}),E(`f`,26,46,38,14,`form theo kênh
và theo tuần`,{c:`green`,f:`soft`}),E(`g`,74,46,38,14,`ảnh cảnh đẹp
của spa`,{o:.35}),j(`a`,26,38,40,24,`green`),j(`b`,74,38,60,24,`mute`,{d:!0,o:.4}))]),"crisp-data":N([M(`Dữ liệu có sẵn: cột «số tin nhắn».`,`The data you have: a “number of messages” column.`,E(`d`,28,22,40,14,`số tin nhắn
240 tuần này`,{f:`soft`})),M(`Quyết định cần: «khách có quay lại không?»`,`The decision needs: “will customers come back?”`,E(`d`,28,22,40,14,`số tin nhắn
240 tuần này`),E(`q`,72,22,40,14,`khách có
quay lại không?`,{f:`accent`,c:`accent`})),M(`Hai thứ khác nhau: 240 tin nhắn không cho biết ai quay lại. Phải đo đúng thứ cần quyết định.`,`These are different: 240 messages do not tell you who returned. Measure what the decision needs.`,E(`d`,28,22,40,14,`số tin nhắn
240 tuần này`),E(`q`,72,22,40,14,`khách có
quay lại không?`,{f:`accent`,c:`accent`}),A(`x`,50,22,50,22,`red`),k(`g`,50,40,`khoảng cách giữa cái đo và cái cần`,{c:`red`,s:3}),j(`a1`,48,22,52,22,`red`,{d:!0}),E(`fix`,50,50,70,8,`cần thêm: ngày quay lại của từng khách`,{c:`green`}))]),"crisp-prep":N([M(`100 khách: 92 ở lại, 8 rời đi.`,`100 customers: 92 stay, 8 leave.`,F(`b`,[92,8],[`ở lại`,`rời đi`],{c:[`blue`,`red`],max:100})),M(`Mô hình ngây thơ gọi mọi người là «ở lại»: đúng 92 trên 100 = 92%.`,`A naive model calls everyone “stays”: 92 out of 100 correct = 92%.`,F(`b`,[92,8],[`ở lại`,`rời đi`],{c:[`blue`,`red`],max:100}),E(`m`,50,8,60,8,`đoán: ai cũng ở lại → chính xác 92%`,{c:`gold`})),M(`Nhưng việc cần làm là giữ chân người sắp rời: mô hình đó bắt được 0 trong 8 người.`,`But the job is to keep people who are about to leave: that model catches 0 of the 8.`,F(`b`,[92,8],[`ở lại`,`rời đi`],{c:[`blue`,`red`],max:100,hl:[1]}),E(`m`,50,8,70,8,`bắt được 0 / 8 người rời đi`,{c:`red`,f:`red`}),O(`r`,70,40,7,`red`)),M(`Vì vậy làm sạch dữ liệu và chọn thước đo theo quyết định quan trọng hơn con số chính xác chung.`,`So preparing data and choosing a metric by the decision matters more than overall accuracy.`,P(`c`,[`làm sạch`,`chọn thước đo`,`mô hình`,`quyết định`],{on:1,y:28}))]),"crisp-ship":N([M(`Có một bản xuất file kết quả. Chưa phải triển khai.`,`You have an exported results file. That is not deployment yet.`,E(`x`,50,28,50,14,`file kết quả .csv`,{f:`soft`})),M(`Triển khai cần ba thứ: người phụ trách bấm điều chỉnh, ngày chạy lại, và lúc thay mô hình cũ.`,`Deployment needs three things: an owner who acts, a re-run date, and a moment to replace the old model.`,E(`x`,50,12,50,10,`file kết quả .csv`,{o:.5}),E(`a`,18,38,28,14,`người phụ
trách bấm`,{c:`green`}),E(`b`,50,38,28,14,`ngày
chạy lại`,{c:`green`}),E(`c`,82,38,28,14,`lúc thay
mô hình cũ`,{c:`green`})),M(`Ngân sách TikTok tuần sau được chỉnh theo ngưỡng đã viết sẵn: lúc đó kết quả mới đi vào quyết định thật.`,`Next week's TikTok budget is adjusted by a pre-written threshold: only then do results enter a real decision.`,P(`c`,[`kết quả`,`ngưỡng đã viết`,`chỉnh ngân sách`,`đo lại`],{on:2,y:28}))]),"ps-open":N([M(`«Form giảm» mới là một nỗi lo, chưa phải một vấn đề.`,`“Forms are down” is a worry, not yet a problem.`,E(`w`,50,28,40,14,`«Form giảm»`,{c:`mute`})),M(`Vấn đề phải là một quyết định: «Tuần sau có tắt kênh này không?»`,`A problem must be a decision: “Should we switch this channel off next week?”`,E(`w`,25,28,34,12,`«Form giảm»`,{o:.5}),j(`a`,43,28,56,28,`accent`),E(`p`,75,28,36,14,`Tuần sau có tắt
kênh này không?`,{f:`accent`,c:`accent`})),M(`Sáu bước sau chỉ phục vụ câu hỏi đó: định nghĩa → số liệu → nguyên nhân → phương án → làm → đo lại.`,`The six steps only serve that question: define → facts → causes → options → act → re-measure.`,P(`s`,[`định nghĩa`,`số liệu`,`nguyên nhân`,`phương án`,`làm`,`đo lại`],{on:0,y:26,h:14,x0:3,x1:97}),k(`q`,50,50,`mọi bước quay về câu hỏi: tắt kênh hay không?`,{s:3,c:`accent`})),M(`Bước 1 kiểm tra: câu hỏi đã có hạn chót và người quyết định chưa?`,`Step 1 checks: does the question have a deadline and a decision maker?`,P(`s`,[`định nghĩa`,`số liệu`,`nguyên nhân`,`phương án`,`làm`,`đo lại`],{on:0,y:26,h:14,x0:3,x1:97}),E(`c`,50,50,74,8,`hạn chót · người quyết định · ngân sách`,{c:`green`}))]),"ps-type":N([M(`Hai loại vấn đề trông giống nhau nhưng cần câu hỏi khác nhau.`,`Two kinds of problems look alike but need different questions.`,E(`a`,27,24,40,14,`Chọn gì?
(lựa chọn)`,{c:`blue`}),E(`b`,73,24,40,14,`Vì sao?
(nguyên nhân)`,{c:`gold`})),M(`Tắt một kênh là lựa chọn: có ngân sách và một ngày hạn, trả lời bằng «nên / không nên».`,`Switching a channel off is a choice: it has a budget and a deadline and is answered with “should / shouldn't”.`,E(`a`,27,24,40,14,`Chọn gì?
(lựa chọn)`,{f:`blue`,c:`blue`}),E(`b`,73,24,40,14,`Vì sao?
(nguyên nhân)`,{o:.4}),E(`x`,27,46,40,10,`nên tắt / không tắt`,{c:`blue`})),M(`Giải thích vì sao form giảm là câu chuyện nguyên nhân; nó không tự thành một nút để bấm.`,`Explaining why forms fell is a cause story; it does not turn into a button by itself.`,E(`a`,27,24,40,14,`Chọn gì?
(lựa chọn)`,{o:.4}),E(`b`,73,24,40,14,`Vì sao?
(nguyên nhân)`,{f:`gold`,c:`gold`}),E(`y`,73,46,40,10,`cần tìm → rồi mới chọn`,{c:`gold`}))]),"ps-fact":N([M(`Tuần này: 80 form trên 2.000 lượt bấm = 4%. Đây là sự thật đo được.`,`This week: 80 forms from 2,000 clicks = 4%. That is a measurable fact.`,E(`f`,50,20,56,16,`80 form / 2.000 click
= 4%`,{f:`green`,c:`green`})),M(`«Kênh này yếu» là một nhận xét: chưa nói yếu so với mức nào.`,`“This channel is weak” is an opinion: weak compared with what?`,E(`f`,27,20,40,14,`80 / 2.000 = 4%`,{c:`green`}),E(`o`,73,20,40,14,`«kênh này yếu»`,{c:`mute`,d:!0})),M(`Nhận xét chỉ kiểm tra được khi viết ngưỡng: «yếu = dưới 3%».`,`An opinion becomes testable once you write a threshold: “weak = below 3%”.`,F(`b`,[4,3],[`tuần này`,`ngưỡng yếu`],{c:[`green`,`red`],max:5,unit:`%`,x0:20,x1:80})),M(`4% cao hơn ngưỡng 3%, nên với định nghĩa đã viết, kênh này chưa yếu.`,`4% is above the 3% threshold, so by the written definition this channel is not weak yet.`,F(`b`,[4,3],[`tuần này`,`ngưỡng yếu`],{c:[`green`,`red`],max:5,unit:`%`,x0:20,x1:80}),A(`t`,20,22.4,80,22.4,`red`,{d:!0,w:.4}),k(`v`,50,8,`4% > 3% → chưa yếu`,{c:`green`,s:3.4}))]),"ps-smart":N([M(`Câu mục tiêu: «Đến 30/11, form từ TikTok tăng thêm 20 mỗi tuần so với mức 80 hiện tại.»`,`The goal sentence: “By 30 Nov, TikTok forms rise by 20 per week from the current 80.”`,E(`g`,50,20,84,16,`Đến 30/11, form TikTok tăng thêm 20/tuần
so với mức 80 hiện tại, cùng cách đếm`,{f:`soft`})),M(`Mỗi phần của câu trả lời một chữ cái: S cụ thể, M đo được, A khả thi, R liên quan, T có hạn.`,`Each part answers a letter: S specific, M measurable, A achievable, R relevant, T time-bound.`,E(`g`,50,10,84,12,`Đến 30/11, form TikTok +20/tuần so với 80`,{o:.8}),...[`S`,`M`,`A`,`R`,`T`].map((e,t)=>E(`l${t}`,12+t*19,34,15,12,e,{f:t===0?`accent`:`soft`,c:`accent`})),k(`w`,50,55,`kênh TikTok · form · khả thi · liên quan · 30/11`,{s:2.8,c:`mute`})),M(`Nhờ vậy anh Minh có căn cứ: đạt thì tăng ngân sách thêm 10%.`,`Mr Minh now has grounds: if it is met, raise the budget by another 10%.`,F(`b`,[80,100],[`hiện tại`,`mục tiêu 30/11`],{c:[`mute`,`green`],max:110,x0:20,x1:80}),j(`a`,34,12,66,12,`accent`),k(`t`,50,8,`đạt → tăng ngân sách 10%`,{c:`accent`}))]),"ps-rank":N([M(`Có nhiều việc cùng muốn làm, nhưng hạn 30/11 chỉ đủ nguồn lực cho một.`,`Many tasks compete, but the 30 Nov deadline fits resources for only one.`,E(`a`,22,22,36,11,`mục tiêu TikTok`,{c:`accent`}),E(`b`,62,22,36,11,`làm lại logo`,{c:`mute`}),E(`c`,22,40,36,11,`đổi font web`,{c:`mute`}),E(`d`,62,40,36,11,`chụp ảnh mới`,{c:`mute`})),M(`Giữ lại một việc; các việc còn lại ghi «để sau» có chủ đích.`,`Keep one; mark the rest “later” on purpose.`,E(`a`,22,22,36,11,`mục tiêu TikTok`,{f:`accent`,c:`accent`}),E(`b`,62,22,36,11,`làm lại logo
→ để sau`,{o:.45,d:!0}),E(`c`,22,40,36,11,`đổi font web
→ để sau`,{o:.45,d:!0}),E(`d`,62,40,36,11,`chụp ảnh mới
→ để sau`,{o:.45,d:!0})),M(`«Để sau» là một quyết định ghi lại có ngày xem lại, không phải việc bị quên.`,`“Later” is a recorded decision with a review date, not a forgotten task.`,E(`a`,24,22,40,12,`TikTok · làm ngay`,{f:`accent`,c:`accent`}),E(`b`,72,22,40,12,`sau 30/11: xem lại
logo, font, ảnh`,{c:`gold`}),j(`x`,46,22,50,22,`mute`),k(`t`,50,46,`ưu tiên = chọn bỏ bớt`,{c:`accent`,s:3.6}))]),"ps-cause":N([M(`Form từ TikTok giảm. Nhiều nguyên nhân có thể có.`,`TikTok forms fell. Many causes are possible.`,E(`e`,50,10,50,10,`form TikTok giảm`,{f:`soft`}),E(`a`,25,34,40,12,`người dùng chán
mạng xã hội`,{c:`mute`}),E(`b`,75,34,40,12,`trang đích lỗi 404
trên điện thoại`,{c:`mute`}),j(`x`,40,16,28,28,`mute`),j(`y`,60,16,72,28,`mute`)),M(`Hỏi: nguyên nhân nào thay đổi được trong hai tuần?`,`Ask: which cause can change within two weeks?`,E(`e`,50,10,50,10,`form TikTok giảm`),E(`a`,25,34,40,12,`người dùng chán
mạng xã hội`,{c:`mute`}),E(`b`,75,34,40,12,`trang đích lỗi 404
trên điện thoại`,{c:`mute`}),k(`q`,50,54,`thay đổi được trong 2 tuần?`,{c:`accent`,s:3.4})),M(`«Chán mạng xã hội» không sửa được; «lỗi 404» thì sửa được. Xử lý cái thứ hai.`,`“Bored of social media” can't be fixed; “404 error” can. Work on the second.`,E(`e`,50,10,50,10,`form TikTok giảm`),E(`a`,25,34,40,12,`người dùng chán
mạng xã hội
✗ không đổi được`,{o:.4,d:!0,s:2.8}),E(`b`,75,34,40,12,`trang đích lỗi 404
✓ sửa được`,{f:`green`,c:`green`}))]),"ps-opt":N([M(`Ba phương án cho vấn đề form giảm.`,`Three options for the falling forms.`,E(`o`,50,10,50,9,`form TikTok = 80`,{f:`soft`}),E(`a`,18,34,28,14,`sửa
lỗi 404`,{c:`green`}),E(`b`,50,34,28,14,`làm trang
đích mới`,{c:`gold`}),E(`c`,82,34,28,14,`không
làm gì`,{c:`mute`})),M(`Mỗi phương án kéo theo một hệ quả: 2 ngày công / 3 tuần / giữ nguyên.`,`Each option carries a consequence: 2 person-days / 3 weeks / unchanged.`,E(`o`,50,10,50,9,`form TikTok = 80`),E(`a`,18,30,28,12,`sửa lỗi 404`,{c:`green`}),E(`b`,50,30,28,12,`trang đích mới`,{c:`gold`}),E(`c`,82,30,28,12,`không làm gì`,{c:`mute`}),k(`ta`,18,46,`2 ngày của
1 người`,{s:2.8}),k(`tb`,50,46,`3 tuần
→ trễ 30/11`,{s:2.8,c:`red`}),k(`tc`,82,46,`form giữ
nguyên 80`,{s:2.8})),M(`Chọn phương án có hệ quả chấp nhận được trước hạn: sửa lỗi 404.`,`Choose the option whose consequence fits before the deadline: fix the 404.`,E(`o`,50,10,50,9,`form TikTok = 80`),E(`a`,18,30,28,12,`sửa lỗi 404`,{f:`green`,c:`green`}),E(`b`,50,30,28,12,`trang đích mới`,{o:.35}),E(`c`,82,30,28,12,`không làm gì`,{o:.35}),k(`ta`,18,46,`2 ngày · kịp hạn`,{s:2.8,c:`green`}))]),"ps-do":N([M(`Lỗi 404 được sửa ngày 20/11. Tuần trước đó: 80 form.`,`The 404 was fixed on 20 Nov. The week before: 80 forms.`,F(`b`,[80],[`tuần có 80 form`],{c:`mute`,max:100,x0:30,x1:70}),k(`t`,50,8,`sửa lỗi 20/11`,{c:`accent`})),M(`Đến 30/11 đếm lại bằng đúng cách đã dùng: cùng định nghĩa form, cùng khung tuần.`,`On 30 Nov count again the same way: same form definition, same week window.`,F(`b`,[80,0],[`trước`,`sau 30/11`],{c:[`mute`,`accent`],max:100,x0:20,x1:80}),E(`r`,50,8,60,8,`cùng cách đếm`,{c:`green`})),M(`Ra 90 hay ra 70 đều là kết quả; cách đếm không được đổi giữa chừng.`,`90 or 70 are both results; the counting method must not change midway.`,F(`b`,[80,90],[`trước`,`sau`],{c:[`mute`,`green`],max:100,x0:20,x1:80}),k(`t`,50,8,`90 → cải thiện · 70 → vẫn là kết quả`,{s:3}))])},V=[2,4,4,4,5,5,7,9],he={"py-plot":N([M(`GDN: 80 form trên 4.000 click. TikTok: 40 form trên 1.000 click.`,`GDN: 80 forms from 4,000 clicks. TikTok: 40 forms from 1,000 clicks.`,E(`g`,28,14,38,10,`GDN 80 / 4.000`,{c:`blue`}),E(`t`,72,14,38,10,`TikTok 40 / 1.000`,{c:`accent`})),M(`Câu hỏi «kênh nào nhiều form hơn?» → vẽ số form: GDN cao hơn.`,`Question “which channel has more forms?” → plot form counts: GDN is higher.`,E(`g`,28,8,38,8,`GDN 80 / 4.000`,{o:.5}),E(`t`,72,8,38,8,`TikTok 40 / 1.000`,{o:.5}),F(`n`,[80,40],[`GDN`,`TikTok`],{c:[`blue`,`accent`],max:90,x0:25,x1:75,base:50,h:32}),k(`y`,6,20,`form`,{s:2.8,c:`mute`,a:`start`})),M(`Câu hỏi «kênh nào hiệu quả hơn?» → vẽ tỷ lệ form/click: TikTok 4% cao gấp đôi GDN 2%.`,`Question “which channel converts better?” → plot forms per click: TikTok 4% is double GDN 2%.`,F(`n`,[2,4],[`GDN`,`TikTok`],{c:[`blue`,`accent`],max:5,unit:`%`,x0:25,x1:75,base:50,h:32}),k(`y`,6,20,`form/click (%)`,{s:2.8,c:`mute`,a:`start`})),M(`Hai biểu đồ đều đúng với hai câu hỏi khác nhau; hình không tự chia cho mẫu số, và trục phải ghi đơn vị.`,`Both charts are right for different questions; a plot never divides by the denominator for you, and axes need units.`,E(`a`,28,24,38,14,`số form
trả lời «nhiều hơn?»`,{c:`blue`}),E(`b`,72,24,38,14,`tỷ lệ form/click
trả lời «hiệu quả hơn?»`,{c:`accent`}),k(`t`,50,48,`chọn đơn vị trước, rồi mới vẽ`,{c:`accent`,s:3.6}))]),"py-g1":N([M(`Danh sách ['A','B','C','D']: mỗi ô có một chỉ số, bắt đầu từ 0.`,`List ['A','B','C','D']: each cell has an index that starts at 0.`,...[`A`,`B`,`C`,`D`].flatMap((e,t)=>[E(`c${t}`,16+t*22,28,18,14,e,{c:`blue`}),k(`i${t}`,16+t*22,42,String(t),{c:`accent`,s:3.8})])),M(`Câu hỏi «phần tử đầu tiên» → chỉ số 0, không phải 1.`,`Question “the first element” → index 0, not 1.`,...[`A`,`B`,`C`,`D`].flatMap((e,t)=>[E(`c${t}`,16+t*22,28,18,14,e,{c:t===0?`accent`:`blue`,f:t===0?`accent`:`soft`,o:t===0?1:.55}),k(`i${t}`,16+t*22,42,String(t),{c:`accent`,s:3.8})]),k(`q`,50,10,`lst[0] → 'A'`,{s:4,c:`accent`})),M(`Mẹo «đáp án là 2» không giúp gì: câu hỏi chấm điểm vẫn chỉ hỏi ý đã học, ở đây là chỉ số bắt đầu từ 0.`,`A memorised “answer is 2” does not help: graded questions only ask learned ideas; here, indexes start at 0.`,...[`A`,`B`,`C`,`D`].flatMap((e,t)=>[E(`c${t}`,16+t*22,28,18,14,e,{c:`blue`,o:.55}),k(`i${t}`,16+t*22,42,String(t),{c:`accent`,s:3.8})]),E(`n`,50,54,80,8,`nhớ ý (chỉ số từ 0), đừng nhớ đáp án`,{c:`green`}))]),"py-g2":N([M(`Một DataFrame có năm dòng, mỗi dòng có nhãn a…e và vị trí 0…4.`,`A DataFrame has five rows, each with a label a…e and a position 0…4.`,...[`a`,`b`,`c`,`d`,`e`].flatMap((e,t)=>[E(`r${t}`,40,10+t*9,36,7,`dòng ${e}`,{c:`blue`}),k(`p${t}`,66,10+t*9+1.2,`vị trí ${t}`,{s:2.8,c:`mute`,a:`start`})])),M(`df.loc['a':'c'] lấy theo nhãn và gồm cả điểm cuối: a, b, c.`,`df.loc['a':'c'] selects by label and includes the end: a, b, c.`,...[`a`,`b`,`c`,`d`,`e`].flatMap((e,t)=>[E(`r${t}`,40,10+t*9,36,7,`dòng ${e}`,{c:t<3?`green`:`mute`,f:t<3?`green`:`soft`,o:t<3?1:.4}),k(`p${t}`,66,10+t*9+1.2,`vị trí ${t}`,{s:2.8,c:`mute`,a:`start`})])),M(`df.iloc[0:3] lấy theo vị trí và không gồm điểm cuối: vị trí 0, 1, 2 → cũng a, b, c.`,`df.iloc[0:3] selects by position and excludes the end: positions 0, 1, 2 → also a, b, c.`,...[`a`,`b`,`c`,`d`,`e`].flatMap((e,t)=>[E(`r${t}`,40,10+t*9,36,7,`dòng ${e}`,{c:t<3?`accent`:`mute`,f:t<3?`accent`:`soft`,o:t<3?1:.4}),k(`p${t}`,66,10+t*9+1.2,`vị trí ${t}`,{s:2.8,c:t<3?`accent`:`mute`,a:`start`})])),M(`Cùng ba dòng nhưng hai quy tắc khác nhau: loc gồm điểm cuối, iloc thì không.`,`The same three rows under two different rules: loc includes the end, iloc does not.`,E(`a`,28,24,38,14,`loc['a':'c']
gồm c`,{c:`green`}),E(`b`,72,24,38,14,`iloc[0:3]
không gồm 3`,{c:`accent`}),k(`t`,50,46,`nhầm hai cái này là lỗi lệch một dòng`,{s:3.2,c:`red`}))]),"ds-pct":N([M(`Tám số đã sắp xếp: 2, 4, 4, 4, 5, 5, 7, 9.`,`Eight sorted numbers: 2, 4, 4, 4, 5, 5, 7, 9.`,F(`b`,V,V.map(String),{c:`blue`,max:9,show:!1,base:42,h:28})),M(`Trung vị là chỗ giữa, giữa ô thứ 4 và thứ 5: (4 + 5) / 2 = 4,5.`,`The median is the middle, between the 4th and 5th: (4 + 5) / 2 = 4.5.`,F(`b`,V,V.map(String),{c:`blue`,max:9,show:!1,base:42,h:28,hl:[3,4]}),A(`m`,L(4.5,0,8,10,90),10,L(4.5,0,8,10,90),44,`accent`,{d:!0}),k(`t`,50,6,`trung vị = 4,5`,{c:`accent`})),M(`Phân vị thứ 90: vị trí 1 + 0,9 × 7 = 7,3, nằm giữa số thứ 7 (là 7) và số thứ 8 (là 9).`,`The 90th percentile: position 1 + 0.9 × 7 = 7.3, between the 7th (7) and the 8th (9).`,F(`b`,V,V.map(String),{c:`blue`,max:9,show:!1,base:42,h:28,hl:[6,7]}),k(`t`,50,6,`vị trí 7,3 → giữa 7 và 9`,{c:`accent`})),M(`Nội suy (PERCENTILE.INC): 7 + 0,3 × (9 − 7) = 7,6. Lấy quan sát bậc gần nhất: 9. Phải ghi tên cách cắt.`,`Interpolation (PERCENTILE.INC): 7 + 0.3 × (9 − 7) = 7.6. Nearest-rank: 9. Name the method you used.`,E(`a`,28,20,38,16,`nội suy
7,6`,{f:`accent`,c:`accent`}),E(`b`,72,20,38,16,`bậc gần nhất
9`,{c:`blue`}),k(`t`,50,46,`cùng dữ liệu, hai đáp án`,{c:`red`,s:3.6}))]),"ds-range":N([M(`Tám tuần: số form lần lượt 2, 4, 4, 4, 5, 5, 7, 9.`,`Eight weeks of forms: 2, 4, 4, 4, 5, 5, 7, 9.`,F(`b`,V,V.map(String),{c:`blue`,max:9,show:!1,base:44,h:30})),M(`Range chỉ nhìn hai đầu: lớn nhất 9, nhỏ nhất 2 → 9 − 2 = 7 form.`,`Range looks only at the two ends: max 9, min 2 → 9 − 2 = 7 forms.`,F(`b`,V,V.map(String),{c:`blue`,max:9,show:!1,base:44,h:30,hl:[0,7]}),k(`t`,50,6,`range = 9 − 2 = 7`,{c:`accent`,s:3.8})),M(`Sáu tuần ở giữa nằm rất sát nhau (4–7), và range không cho biết điều đó.`,`The six middle weeks sit close together (4–7), which range cannot tell you.`,F(`b`,V,V.map(String),{c:`blue`,max:9,show:!1,base:44,h:30,hl:[1,2,3,4,5,6]}),k(`t`,50,6,`phần giữa chặt, range không thấy`,{c:`mute`})),M(`Một lỗi gõ 90 thay vì 9 làm range nhảy lên 88 trong khi các tuần khác không đổi.`,`A typo 90 instead of 9 makes range jump to 88 while the other weeks do not change.`,F(`b`,[2,4,4,4,5,5,7,90],[`2`,`4`,`4`,`4`,`5`,`5`,`7`,`90`],{c:[`blue`,`blue`,`blue`,`blue`,`blue`,`blue`,`blue`,`red`],max:90,show:!1,base:44,h:30}),k(`t`,50,6,`range = 90 − 2 = 88`,{c:`red`,s:3.8}))]),"ds-mad":N([M(`Dãy 2, 4, 4, 4, 5, 5, 7, 9 có trung bình 5.`,`The series 2, 4, 4, 4, 5, 5, 7, 9 has mean 5.`,F(`b`,V,V.map(String),{c:`blue`,max:9,show:!1,base:44,h:30}),A(`m`,6,44-5/9*30,94,44-5/9*30,`accent`,{d:!0}),k(`t`,50,6,`trung bình = 5`,{c:`accent`})),M(`Độ lệch tuyệt đối: 3, 1, 1, 1, 0, 0, 2, 4 → tổng 12.`,`Absolute deviations: 3, 1, 1, 1, 0, 0, 2, 4 → sum 12.`,F(`b`,[3,1,1,1,0,0,2,4],[`2`,`4`,`4`,`4`,`5`,`5`,`7`,`9`],{c:`gold`,max:4,base:44,h:28}),k(`t`,50,6,`|x − 5| cộng lại = 12`,{c:`accent`})),M(`MAD = 12 / 8 = 1,5 form: trung bình khoảng cách tới tâm, không bình phương.`,`MAD = 12 / 8 = 1.5 forms: the average distance to the centre, without squaring.`,E(`a`,50,26,64,18,`MAD = 12 / 8 = 1,5`,{f:`gold`,c:`gold`}),k(`t`,50,46,`chia n, lấy trị tuyệt đối`,{c:`mute`,s:3.2})),M(`Độ lệch chuẩn mẫu: bình phương (tổng 32), chia n − 1 = 7, rồi lấy căn ≈ 2,14. Hai số này không thay thế nhau.`,`Sample SD: square (sum 32), divide by n − 1 = 7, then root ≈ 2.14. The two numbers are not interchangeable.`,E(`a`,28,26,38,16,`MAD
1,5`,{c:`gold`}),E(`b`,72,26,38,16,`độ lệch chuẩn
≈ 2,14`,{c:`blue`}),k(`t`,50,48,`cùng dữ liệu, hai thước khác nhau`,{c:`red`}))]),"ens-oob":N([M(`Tập học có 1.000 khách. Mỗi cây rút một «túi» có hoàn lại.`,`The training set has 1,000 customers. Each tree draws a “bag” with replacement.`,E(`all`,50,24,84,14,`1.000 khách trong tập học`,{c:`blue`})),M(`Khoảng một phần ba số dòng không vào túi của cây đó: đó là dòng ngoài túi (OOB).`,`About a third of the rows are not in that tree's bag: those are out-of-bag (OOB).`,E(`bag`,33,24,56,14,`túi của cây
≈ 2/3 số dòng`,{f:`blue`,c:`blue`}),E(`oob`,79,24,28,14,`OOB
≈ 1/3`,{f:`gold`,c:`gold`})),M(`Cây đó được chấm bằng đúng phần OOB của nó; mỗi cây có một OOB khác nhau.`,`That tree is graded on its own OOB rows; every tree has a different OOB set.`,E(`bag`,33,24,56,14,`túi của cây
≈ 2/3 số dòng`,{o:.5}),E(`oob`,79,24,28,14,`OOB
≈ 1/3`,{f:`gold`,c:`gold`}),j(`a`,79,33,79,44,`gold`),E(`s`,79,50,36,9,`chấm cây này`,{c:`green`})),M(`Nhưng tuần sau không nằm trong 1.000 khách này, nên OOB không thay cho một tập kiểm tra theo thời gian.`,`But next week is not among these 1,000 customers, so OOB does not replace a time-based test set.`,E(`all`,32,24,56,14,`1.000 khách
(túi + OOB)`,{c:`blue`}),E(`n`,80,24,28,14,`tuần sau
(chưa có)`,{c:`red`,d:!0}),k(`t`,50,46,`OOB ≠ tương lai`,{c:`red`,s:3.8})),M(`Nhân đôi 8 khách rời đi trước khi chia làm cùng một người nằm cả trong túi lẫn OOB, khiến OOB nói dối.`,`Duplicating the 8 churners before splitting puts the same person in both bag and OOB, so OOB lies.`,E(`bag`,33,20,56,12,`bản gốc trong túi`,{o:.6}),E(`oob`,79,20,28,12,`bản sao trong OOB`,{c:`red`,f:`red`}),k(`t`,50,42,`cùng một khách ở cả hai phía → điểm đẹp giả`,{c:`red`,s:3.2}))]),"imb-smote":N([M(`Hai khách đã rời đi: một người chi 2 triệu, một người chi 4 triệu.`,`Two churners: one spends 2 million, one spends 4 million.`,I(`n`,0,6,{y:36,ticks:[0,2,3,4,6]}),D(`a`,L(2,0,6),36,`red`,2),D(`b`,L(4,0,6),36,`red`,2),k(`la`,L(2,0,6),28,`khách A`,{s:2.8}),k(`lb`,L(4,0,6),28,`khách B`,{s:2.8})),M(`SMOTE nối hai điểm bằng một đoạn thẳng rồi đặt điểm mới ở giữa.`,`SMOTE joins the two points with a line and puts a new point in between.`,I(`n`,0,6,{y:36,ticks:[0,2,3,4,6]}),D(`a`,L(2,0,6),36,`red`,2),D(`b`,L(4,0,6),36,`red`,2),A(`l`,L(2,0,6),36,L(4,0,6),36,`red`,{d:!0}),D(`n1`,L(3,0,6),36,`gold`,2.2)),M(`Điểm mới: 2 + 0,5 × (4 − 2) = 3 triệu. Không có khách nào chi đúng 3 triệu.`,`The new point: 2 + 0.5 × (4 − 2) = 3 million. No customer spends exactly 3 million.`,I(`n`,0,6,{y:36,ticks:[0,2,3,4,6]}),D(`a`,L(2,0,6),36,`red`,2),D(`b`,L(4,0,6),36,`red`,2),D(`n1`,L(3,0,6),36,`gold`,2.2),O(`r`,L(3,0,6),36,5,`gold`),k(`t`,L(3,0,6),22,`người này không có thật`,{c:`red`,s:3})),M(`Nếu điểm tổng hợp lọt sang tập chấm, mô hình được chấm bằng một người không tồn tại. Chỉ tạo mẫu trên tập học.`,`If a synthetic point leaks into the test set the model is graded on a person who does not exist. Synthesize only on the training set.`,E(`tr`,28,28,40,14,`tập học
+ điểm tổng hợp`,{c:`blue`}),E(`te`,72,28,40,14,`tập chấm
chỉ khách thật`,{c:`green`}),A(`x`,50,18,50,40,`red`,{d:!0}),k(`t`,50,50,`SMOTE chỉ đứng ở bên trái đường này`,{c:`red`,s:3}))]),"tb-why":N([M(`Câu hỏi: «tuần này kênh nào có nhiều form hơn?»`,`The question: “which channel had more forms this week?”`,E(`q`,50,24,70,14,`tuần này kênh nào
có nhiều form hơn?`,{f:`accent`,c:`accent`})),M(`Một biểu đồ cột trả lời thẳng câu hỏi đó: GDN 80, TikTok 40, Facebook 55.`,`A bar chart answers it directly: GDN 80, TikTok 40, Facebook 55.`,F(`b`,[80,40,55],[`GDN`,`TikTok`,`Facebook`],{c:[`blue`,`accent`,`gold`],max:90,base:50,h:36,x0:15,x1:85})),M(`Một bản đồ thế giới tô cùng dữ liệu không trả lời gì thêm: chỉ là trang trí.`,`A world map filled with the same data answers nothing more: it is decoration.`,E(`m`,50,26,66,26,`bản đồ thế giới
(không có địa điểm trong dữ liệu)`,{c:`red`,d:!0,o:.7}),k(`t`,50,50,`thêm hình ≠ thêm hiểu`,{c:`red`,s:3.6})),M(`Chọn hình theo câu hỏi; công cụ chỉ cộng những gì bạn thả vào, nên một phép nối nhân dòng vẫn làm sai mọi hình.`,`Choose the chart by the question; the tool only sums what you drop in, so a row-multiplying join still breaks every chart.`,P(`c`,[`câu hỏi`,`dữ liệu đúng dòng`,`biểu đồ`],{on:2,y:26}))]),"tb-bar":N([M(`Form của ba kênh trong một tuần: ba nhóm riêng biệt → ba cột.`,`Forms of three channels in one week: three separate groups → three bars.`,F(`b`,[80,40,55],[`GDN`,`TikTok`,`Facebook`],{c:[`blue`,`accent`,`gold`],max:90,base:46,h:30,x0:15,x1:85}),k(`t`,50,6,`so sánh nhóm → cột`,{c:`accent`,s:3.8})),M(`Form của một kênh qua tám tuần: trục là thời gian có thứ tự → một đường.`,`Forms of one channel over eight weeks: the axis is ordered time → a line.`,...[40,44,43,50,55,53,60,64].flatMap((e,t,n)=>[D(`p${t}`,10+t*11.4,46-e/70*34,`accent`,1.4),...t>0?[A(`s${t}`,10+(t-1)*11.4,46-n[t-1]/70*34,10+t*11.4,46-e/70*34,`accent`,{w:.7})]:[]]),k(`t`,50,6,`theo thời gian → đường`,{c:`accent`,s:3.8})),M(`Đổi hình giữa hai câu hỏi là đổi nghĩa: nối đường qua ba kênh nghĩa là kênh GDN «dẫn tới» TikTok, điều không có.`,`Swapping shapes changes meaning: a line through three channels implies GDN “leads to” TikTok, which is false.`,...[80,40,55].flatMap((e,t,n)=>[D(`p${t}`,20+t*30,46-e/90*34,`red`,1.6),...t>0?[A(`s${t}`,20+(t-1)*30,46-n[t-1]/90*34,20+t*30,46-e/90*34,`red`,{w:.7,d:!0})]:[]]),k(`t`,50,6,`đường qua nhóm rời nhau = sai nghĩa`,{c:`red`,s:3.4})),M(`Thứ tự cột là lựa chọn của bạn: xếp theo độ lớn để mắt so sánh được, đừng xếp theo mã vô nghĩa.`,`Bar order is your choice: sort by size so the eye can compare; do not order by a meaningless code.`,F(`b`,[80,55,40],[`GDN`,`Facebook`,`TikTok`],{c:[`blue`,`gold`,`accent`],max:90,base:46,h:30,x0:15,x1:85}),k(`t`,50,6,`xếp từ lớn đến nhỏ`,{c:`green`,s:3.8}))]),"tb-box":N([M(`Form của một kênh trong 40 tuần: mỗi chấm là một tuần.`,`One channel's forms over 40 weeks: each dot is one week.`,...[3,4,4,5,5,5,6,6,6,6,7,7,7,8,9,2].map((e,t)=>D(`d${t}`,20+e*8,14+t%4*5,`blue`,1.1)),...I(`n`,0,10,{y:44,x0:20,x1:100,ticks:[2,4,6,8]})),M(`Hộp gom phần giữa: vạch giữa là trung vị, cạnh hộp là tứ phân vị, râu kéo tới các tuần xa.`,`The box gathers the middle: the centre line is the median, edges are quartiles, whiskers reach far weeks.`,A(`w`,36,28,92,28,`ink`,{w:.5}),E(`bx`,66,28,28,16,``,{c:`blue`,f:`soft`}),A(`md`,66,20,66,36,`accent`,{w:.8}),k(`t1`,66,48,`trung vị`,{c:`accent`,s:3}),k(`t2`,44,20,`tuần cực thấp`,{s:2.8,c:`mute`}),k(`t3`,86,20,`tuần cực cao`,{s:2.8,c:`mute`})),M(`Hộp hẹp nghĩa là phần lớn các tuần ổn định; độ rộng là điều hộp cho thấy.`,`A narrow box means most weeks are steady; width is what a box plot shows.`,A(`w`,36,28,92,28,`ink`,{w:.5}),E(`bx`,66,28,12,16,``,{c:`blue`,f:`blue`}),A(`md`,66,20,66,36,`card`,{w:.8}),k(`t`,50,10,`phần giữa hẹp = ổn định`,{c:`blue`,s:3.6})),M(`Bản đồ chỉ khi có địa điểm thật; nếu file không có tỉnh hay thành phố thì không vẽ bản đồ.`,`A map only when places exist; if the file has no province or city, do not draw one.`,E(`f`,28,26,38,14,`file: tuần, kênh, form`,{c:`mute`}),E(`m`,74,26,38,14,`bản đồ
không có địa điểm`,{c:`red`,d:!0}),j(`a`,48,26,54,26,`red`,{d:!0}),k(`t`,50,48,`không có địa điểm → không có bản đồ`,{c:`red`,s:3.2}))]),"tb-part":N([M(`Một tuần có 100 form, chia 70 và 30: hai phần của một tổng.`,`One week has 100 forms, split 70 and 30: two parts of a total.`,E(`a`,38,28,56,14,`70`,{f:`blue`,c:`blue`}),E(`b`,87,28,42,14,`30`,{f:`accent`,c:`accent`}),A(`t`,10,40,90,40,`mute`,{w:.3}),k(`tl`,50,48,`100 form = 100%`,{s:3,c:`mute`})),M(`Hai phần thì biểu đồ tròn (hoặc thanh chồng) đọc được ngay: 70% và 30%.`,`With two parts a pie (or stacked bar) reads at once: 70% and 30%.`,E(`a`,35,28,50,14,`GDN 70%`,{f:`blue`,c:`blue`}),E(`b`,80,28,40,14,`TikTok 30%`,{f:`accent`,c:`accent`}),k(`t`,50,10,`ít phần → đọc được`,{c:`green`,s:3.8})),M(`Tám kênh mỗi kênh khoảng 12 form: các lát xấp xỉ nhau, mắt không phân biệt nổi. Dùng cột.`,`Eight channels of about 12 forms each: slices look alike and the eye cannot tell. Use bars.`,F(`b`,[14,13,12,12,12,12,11,14],[`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`],{c:`blue`,max:16,base:46,h:30,show:!0}),k(`t`,50,6,`nhiều phần ngang nhau → cột`,{c:`accent`,s:3.6})),M(`Tránh vẽ hai tuần bằng hai hình tròn để so sánh; hãy dùng cột cạnh nhau để so từng phần.`,`Avoid comparing two weeks with two pies; use side-by-side bars to compare each part.`,F(`b`,[70,30,55,45],[`GDN T1`,`TikTok T1`,`GDN T2`,`TikTok T2`],{c:[`blue`,`accent`,`blue`,`accent`],max:80,base:46,h:30}),k(`t`,50,6,`so sánh → cột cạnh nhau`,{c:`green`,s:3.6}))]),"tb-dual":N([M(`Quyết định: «có tăng ngân sách kênh này không?»`,`The decision: “should this channel's budget go up?”`,E(`q`,50,26,72,14,`Có tăng ngân sách
kênh này không?`,{f:`accent`,c:`accent`})),M(`Trang chỉ cần hai thứ: tỷ lệ form (%) và mức chi (triệu đồng).`,`The page needs only two things: form rate (%) and spend (million VND).`,E(`q`,50,8,60,8,`tăng ngân sách kênh này?`,{o:.7}),E(`a`,28,34,38,16,`tỷ lệ form
(%)`,{c:`green`}),E(`b`,72,34,38,16,`mức chi
(triệu đồng)`,{c:`blue`})),M(`Thêm tám bộ lọc biến trang thành màn hình tìm kiếm, không còn là một quyết định.`,`Adding eight filters turns the page into a search screen, not a decision.`,E(`a`,28,24,38,14,`tỷ lệ form (%)`,{c:`green`}),E(`b`,72,24,38,14,`mức chi (triệu)`,{c:`blue`}),...Array.from({length:8},(e,t)=>E(`f${t}`,14+t%4*24,44+Math.floor(t/4)*8,20,6,`lọc ${t+1}`,{c:`red`,d:!0,o:.7,s:2.8}))),M(`Hai trục phải ghi hai đơn vị; một đường cắt đường kia chỉ là hiệu ứng của thang, không phải một điểm có ý nghĩa.`,`Both axes must state their units; one line crossing another is a scale effect, not a meaningful point.`,A(`ax`,10,44,90,44,`mute`),A(`l1`,14,36,86,16,`green`,{w:.8}),A(`l2`,14,14,86,38,`blue`,{w:.8}),O(`x`,50,26,4,`red`),k(`t`,50,52,`giao điểm do thang, không do dữ liệu`,{c:`red`,s:3.2}),k(`u1`,6,10,`% form`,{c:`green`,s:2.8,a:`start`}),k(`u2`,94,10,`triệu đồng`,{c:`blue`,s:2.8,a:`end`}))]),"pb-page":N([M(`Quyết định của trang: ngân sách của tuần.`,`The page's decision: this week's budget.`,E(`q`,50,26,70,14,`ngân sách
của tuần`,{f:`accent`,c:`accent`})),M(`Trang chỉ có ba thành phần: tỷ lệ form, mức chi và một bộ lọc tuần.`,`The page has only three parts: form rate, spend and one week filter.`,E(`q`,50,8,60,8,`ngân sách của tuần`,{o:.7}),E(`a`,20,34,28,14,`tỷ lệ
form`,{c:`green`}),E(`b`,50,34,28,14,`mức chi`,{c:`blue`}),E(`c`,80,34,28,14,`lọc
tuần`,{c:`gold`})),M(`Bộ lọc theo màu logo không thuộc trang này; câu hỏi khác thì để ở một trang khác (drill-through).`,`A logo-colour filter does not belong here; a different question goes on a different page (drill-through).`,E(`a`,20,24,28,12,`tỷ lệ form`,{c:`green`}),E(`b`,50,24,28,12,`mức chi`,{c:`blue`}),E(`c`,80,24,28,12,`lọc tuần`,{c:`gold`}),E(`x`,30,46,40,10,`lọc màu logo`,{c:`red`,d:!0,o:.6}),j(`y`,54,46,70,46,`mute`),E(`p`,84,46,22,10,`trang khác`,{c:`mute`}))]),"fw-5why":N([M(`Hiện tượng: «form sai».`,`The symptom: “forms are wrong”.`,...P(`w`,[`form sai`],{y:26,x0:30,x1:70})),M(`Vì sao? Thiếu một trường. Vì sao? Mẫu cũ.`,`Why? A field is missing. Why? The template is old.`,...P(`w`,[`form sai`,`thiếu
một trường`,`mẫu cũ`],{y:26,on:2})),M(`Vì sao mẫu cũ? Không ai được giao việc cập nhật mẫu. Đây là điểm can thiệp.`,`Why is the template old? Nobody is assigned to update it. This is the intervention point.`,...P(`w`,[`form sai`,`thiếu trường`,`mẫu cũ`,`không ai
cập nhật`],{y:26,on:3,h:14})),M(`Giao một người cập nhật mẫu: dừng ở đây, không cần đủ năm câu nếu điểm can thiệp đã hiện.`,`Assign someone to update the template: stop here; you do not need five whys once the intervention point shows.`,...P(`w`,[`form sai`,`thiếu trường`,`mẫu cũ`,`không ai
cập nhật`],{y:22,on:3,h:14}),E(`fix`,50,46,70,10,`giao người cập nhật mẫu → đo lại`,{f:`green`,c:`green`}))]),"fw-spin":N([M(`SPIN: bốn loại câu hỏi đi theo thứ tự.`,`SPIN: four kinds of question in order.`,...[`S`,`P`,`I`,`N`].map((e,t)=>E(`l${t}`,16+t*22,28,18,18,e,{f:`soft`,c:`accent`,s:6}))),M(`Situation: «Mỗi tuần được bao nhiêu form?»`,`Situation: “How many forms do you get a week?”`,...[`S`,`P`,`I`,`N`].map((e,t)=>E(`l${t}`,16+t*22,22,18,14,e,{f:t===0?`accent`:`soft`,c:`accent`,s:5,o:t===0?1:.4})),k(`x`,50,46,`«Mỗi tuần được bao nhiêu form?»`,{s:3.6})),M(`Problem: «Không biết kênh nào đáng tiền.» Implication: «Ngân sách tháng sau chốt theo cảm giác.»`,`Problem: “We do not know which channel is worth it.” Implication: “Next month's budget is set by feel.”`,...[`S`,`P`,`I`,`N`].map((e,t)=>E(`l${t}`,16+t*22,22,18,14,e,{f:t===1||t===2?`accent`:`soft`,c:`accent`,s:5,o:t===1||t===2?1:.4})),k(`x`,50,44,`«Không biết kênh nào đáng tiền»`,{s:3.2}),k(`y`,50,52,`«Ngân sách tháng sau chốt theo cảm giác»`,{s:3.2})),M(`Need-payoff: «Có một thước đo để cắt một kênh.» Bốn câu hỏi, không câu nào là hợp đồng.`,`Need-payoff: “A metric that lets you cut one channel.” Four questions; none of them is a contract.`,...[`S`,`P`,`I`,`N`].map((e,t)=>E(`l${t}`,16+t*22,22,18,14,e,{f:t===3?`accent`:`soft`,c:`accent`,s:5,o:t===3?1:.4})),k(`x`,50,46,`«Có một thước đo để cắt một kênh»`,{s:3.4}))]),"fw-ask":N([M(`Câu hỏi: «Anh có thấy kênh này yếu không?»`,`Question: “Do you think this channel is weak?”`,E(`q`,50,26,72,14,`Anh có thấy kênh
này yếu không?`,{c:`blue`})),M(`Câu trả lời «yếu» mới chỉ là một ý kiến.`,`The answer “weak” is only an opinion.`,E(`q`,28,26,38,14,`Anh có thấy
kênh này yếu?`,{o:.6}),j(`a`,48,26,56,26,`mute`),E(`r`,76,26,32,14,`«yếu»
(ý kiến)`,{c:`gold`})),M(`Muốn thành kết luận cần một ngưỡng đã viết từ trước: «yếu = dưới 3%».`,`To become a conclusion you need a threshold written beforehand: “weak = below 3%”.`,E(`r`,28,26,38,14,`«yếu»
(ý kiến)`,{o:.6}),j(`a`,48,26,56,26,`green`),E(`t`,76,26,32,14,`dưới 3%
(ngưỡng)`,{f:`green`,c:`green`})),M(`Đo 2% < 3% thì mới được nói «yếu»; khi đó câu hỏi trở thành kết luận có căn cứ.`,`Only when the measured 2% < 3% may you say “weak”; then the question becomes a grounded conclusion.`,F(`b`,[2,3],[`đo được`,`ngưỡng`],{c:[`red`,`mute`],max:4,unit:`%`,base:46,h:28,x0:25,x1:75}),k(`t`,50,8,`2% < 3% → yếu theo định nghĩa đã viết`,{c:`red`,s:3.2}))]),"fw-bmc":N([M(`Business Model Canvas: chín ô mô tả một mô hình kinh doanh.`,`Business Model Canvas: nine boxes describe a business model.`,...[`đối tác`,`hoạt động`,`giá trị`,`quan hệ`,`khách hàng`,`nguồn lực`,`kênh`,`chi phí`,`doanh thu`].map((e,t)=>E(`c${t}`,20+t%3*30,14+Math.floor(t/3)*14,27,11,e,{c:`mute`,s:3}))),M(`Ô «kênh» ghi «TikTok». Đây mới là một giả thuyết, chưa phải bằng chứng.`,`The “channel” box says “TikTok”. This is a hypothesis, not yet evidence.`,...[`đối tác`,`hoạt động`,`giá trị`,`quan hệ`,`khách hàng`,`nguồn lực`,`kênh: TikTok`,`chi phí`,`doanh thu`].map((e,t)=>E(`c${t}`,20+t%3*30,14+Math.floor(t/3)*14,27,11,e,{c:t===6?`accent`:`mute`,f:t===6?`gold`:`soft`,s:3,o:t===6?1:.5}))),M(`Cách kiểm tra: tỷ lệ form trên click của kênh đó, cùng một đơn vị dòng.`,`How to test it: that channel's forms per click, at the same row unit.`,E(`h`,26,20,36,14,`giả thuyết
kênh: TikTok`,{c:`gold`}),j(`a`,46,20,56,20,`mute`),E(`t`,76,20,36,14,`form / click
cùng đơn vị dòng`,{c:`green`}),k(`x`,50,46,`kiểm tra được → mới là bằng chứng`,{c:`green`,s:3.4})),M(`Nếu không kiểm tra được thì ô đó vẫn chỉ là lời nói; chín ô không thay được một mục tiêu SMART.`,`If it cannot be tested the box is still just talk; nine boxes do not replace a SMART goal.`,E(`h`,28,26,38,14,`ô không
kiểm tra được`,{c:`red`,d:!0}),E(`g`,74,26,38,14,`mục tiêu SMART
có số và hạn`,{c:`green`}),k(`x`,50,46,`ô chữ ≠ bằng chứng`,{c:`red`,s:3.6}))]),"fw-mece":N([M(`Câu hỏi gốc: «form đến từ đâu?»`,`Root question: “where do forms come from?”`,E(`q`,50,14,50,11,`form đến từ đâu?`,{f:`accent`,c:`accent`})),M(`Cắt theo kênh: mỗi form thuộc đúng một kênh, các kênh cộng lại đủ 100% của tuần.`,`Split by channel: each form belongs to exactly one channel and the channels add up to 100% of the week.`,E(`q`,50,10,50,10,`form đến từ đâu?`,{f:`accent`,c:`accent`}),...[`GDN
50%`,`TikTok
30%`,`Facebook
20%`].flatMap((e,t)=>[E(`b${t}`,20+t*30,36,24,14,e,{c:`blue`}),j(`a${t}`,50,16,20+t*30,29,`mute`)]),k(`s`,50,52,`50 + 30 + 20 = 100% → MECE`,{c:`green`,s:3.4})),M(`Thêm nhánh «khách trẻ» là chồng một tiêu chí khác lên: một form vừa là TikTok vừa là khách trẻ.`,`Adding a “young customers” branch layers another criterion: one form is both TikTok and young.`,E(`q`,50,10,50,10,`form đến từ đâu?`,{o:.6}),...[`GDN
50%`,`TikTok
30%`,`Facebook
20%`].map((e,t)=>E(`b${t}`,20+t*30,30,24,14,e,{c:`blue`,o:.6})),E(`y`,72,40,34,14,`khách trẻ
(chồng lên)`,{c:`red`,d:!0}),k(`s`,50,54,`một form bị đếm hai lần → không còn MECE`,{c:`red`,s:3}))]),"fw-7p":N([M(`7P: danh sách bảy mục để kiểm tra một dịch vụ, ví dụ một spa.`,`7P: a seven-item checklist for a service, for example a spa.`,...[`Product`,`Price`,`Place`,`Promotion`,`People`,`Process`,`Physical
evidence`].map((e,t)=>E(`p${t}`,t<4?14+t*24:26+(t-4)*24,t<4?20:38,22,12,e,{c:`blue`,s:3}))),M(`Process: các bước của một lượt chăm sóc. Physical evidence: căn phòng và phiếu dịch vụ.`,`Process: the steps of one treatment. Physical evidence: the room and the service sheet.`,...[`Product`,`Price`,`Place`,`Promotion`,`People`,`Process`,`Physical
evidence`].map((e,t)=>E(`p${t}`,t<4?14+t*24:26+(t-4)*24,t<4?20:38,22,12,e,{c:t>=5?`accent`:`blue`,f:t>=5?`accent`:`soft`,s:3,o:t>=5?1:.45}))),M(`Mục nào còn thiếu thì ghi «thiếu»; đừng nhân điểm hay xếp hạng các P.`,`If an item is missing, write “missing”; do not multiply scores or rank the Ps.`,...[`Product`,`Price`,`Place`,`Promotion`,`People`,`Process`,`Physical
evidence`].map((e,t)=>E(`p${t}`,t<4?14+t*24:26+(t-4)*24,t<4?20:38,22,12,t===6?`Physical
evidence: thiếu`:e,{c:t===6?`red`:`blue`,d:t===6,s:3,o:t===6?1:.7})),k(`t`,50,54,`danh sách kiểm tra, không phải bảng xếp hạng`,{s:3,c:`mute`}))]),"fw-5c":N([M(`5C: năm phía cần nhìn trước khi chọn phương án.`,`5C: five sides to look at before choosing an option.`,E(`c`,50,30,24,12,`phương án`,{f:`accent`,c:`accent`}),...[`Customers`,`Competitors`,`Collaborators`,`Climate`,`Company`].map((e,t)=>{let n=t/5*Math.PI*2-Math.PI/2;return E(`c${t}`,50+Math.cos(n)*36,30+Math.sin(n)*22,24,9,e,{c:`blue`,s:2.8})})),M(`Customers: ai đang gửi form. Competitors: ai đang mua cùng kênh.`,`Customers: who is sending forms. Competitors: who is buying the same channel.`,E(`c`,50,30,24,12,`phương án`,{f:`accent`,c:`accent`,o:.5}),...[`Customers`,`Competitors`,`Collaborators`,`Climate`,`Company`].map((e,t)=>{let n=t/5*Math.PI*2-Math.PI/2;return E(`c${t}`,50+Math.cos(n)*36,30+Math.sin(n)*22,24,9,e,{c:t<2?`accent`:`blue`,f:t<2?`accent`:`soft`,s:2.8,o:t<2?1:.4})})),M(`Collaborators: đơn vị đo và đơn vị chạy quảng cáo. Climate: một quy định hoặc một mùa vụ. Company: năng lực thật có trong hạn.`,`Collaborators: the measurement and ad-running partners. Climate: a rule or a season. Company: real capability within the deadline.`,E(`c`,50,30,24,12,`phương án`,{f:`accent`,c:`accent`,o:.5}),...[`Customers`,`Competitors`,`Collaborators`,`Climate`,`Company`].map((e,t)=>{let n=t/5*Math.PI*2-Math.PI/2;return E(`c${t}`,50+Math.cos(n)*36,30+Math.sin(n)*22,24,9,e,{c:t>=2?`accent`:`blue`,f:t>=2?`accent`:`soft`,s:2.8,o:t>=2?1:.4})})),M(`Đối tác đo sai đơn vị dòng thì phía Collaborators làm hỏng cả năm phía; năm phía không xếp hạng nhau.`,`If the measuring partner counts the wrong row unit, Collaborators breaks all five sides; the five sides are not ranked.`,E(`c`,50,30,24,12,`phương án`,{c:`accent`,o:.5}),...[`Customers`,`Competitors`,`Collaborators`,`Climate`,`Company`].map((e,t)=>{let n=t/5*Math.PI*2-Math.PI/2;return E(`c${t}`,50+Math.cos(n)*36,30+Math.sin(n)*22,24,9,e,{c:t===2?`red`:`blue`,f:t===2?`red`:`soft`,s:2.8,o:t===2?1:.6})}))]),"st-shape":N([M(`Ba phần của một câu chuyện dữ liệu: tình huống bình thường, chỗ vướng, việc cần chốt.`,`Three parts of a data story: the normal situation, the conflict, the resolution.`,...P(`c`,[`bình thường`,`chỗ vướng`,`việc cần chốt`],{y:28})),M(`Bình thường: form trên click là 4%.`,`Normal: forms per click is 4%.`,...P(`c`,[`bình thường`,`chỗ vướng`,`việc cần chốt`],{y:12,on:0,all:!0,h:9}),F(`b`,[4,4,4,4],[`T1`,`T2`,`T3`,`T4`],{c:`blue`,max:5,unit:`%`,base:50,h:24,x0:20,x1:80})),M(`Chỗ vướng: tuần này một kênh chỉ còn 2%.`,`The conflict: this week one channel drops to 2%.`,...P(`c`,[`bình thường`,`chỗ vướng`,`việc cần chốt`],{y:12,on:1,all:!0,h:9}),F(`b`,[4,4,4,2],[`T1`,`T2`,`T3`,`T4`],{c:[`blue`,`blue`,`blue`,`red`],max:5,unit:`%`,base:50,h:24,x0:20,x1:80})),M(`Việc cần chốt: có cắt ngân sách kênh đó trong hạn đã viết hay không.`,`The resolution: cut that channel's budget within the stated deadline or not.`,...P(`c`,[`bình thường`,`chỗ vướng`,`việc cần chốt`],{y:12,on:2,all:!0,h:9}),E(`d`,50,40,74,14,`cắt hay giữ ngân sách kênh đó
trước 30/11?`,{f:`accent`,c:`accent`}))]),"st-who":N([M(`Người nghe: chốt ngân sách, có năm phút.`,`The listener: decides the budget, has five minutes.`,E(`p`,28,24,38,14,`người nghe
chốt ngân sách`,{c:`blue`}),E(`t`,72,24,38,14,`5 phút`,{c:`gold`,s:5})),M(`Họ đang tin rằng «TikTok rẻ».`,`They currently believe “TikTok is cheap”.`,E(`p`,28,24,38,14,`người nghe`,{o:.5}),E(`b`,72,24,38,14,`tin rằng
«TikTok rẻ»`,{c:`red`})),M(`Câu chuyện phải chạm vào niềm tin đó bằng một tỷ lệ: TikTok 2% so với GDN 4% trên cùng một cách đếm.`,`The story must hit that belief with one rate: TikTok 2% versus GDN 4% under the same counting.`,F(`b`,[2,4],[`TikTok`,`GDN`],{c:[`red`,`blue`],max:5,unit:`%`,base:46,h:28,x0:25,x1:75}),k(`t`,50,8,`một tỷ lệ chạm vào niềm tin`,{c:`accent`,s:3.6})),M(`Không dùng mười slide định nghĩa: năm phút chỉ đủ một thông điệp dẫn tới quyết định.`,`Do not use ten definition slides: five minutes only fits one message that leads to a decision.`,...Array.from({length:10},(e,t)=>E(`s${t}`,10+t%5*20,14+Math.floor(t/5)*12,16,9,`slide ${t+1}`,{c:`red`,d:!0,o:.35,s:2.6})),E(`o`,50,46,70,11,`1 thông điệp → 1 quyết định`,{f:`green`,c:`green`}))]),"st-insight":N([M(`Năm dạng nhận xét: xu hướng, khác biệt, phần của tổng, điểm lạ, đi cùng nhau.`,`Five kinds of insight: trend, difference, share, outlier, together.`,...[`xu hướng`,`khác biệt`,`phần của tổng`,`điểm lạ`,`đi cùng nhau`].map((e,t)=>E(`k${t}`,18+t%3*32,t<3?22:40,28,12,e,{c:`blue`,s:3}))),M(`Tám tuần của một kênh là xu hướng → đường. Ba kênh trong một tuần là khác biệt → cột.`,`Eight weeks of one channel is a trend → line. Three channels in one week is a difference → bars.`,...[20,24,23,30,34,33,40,44].flatMap((e,t,n)=>[D(`p${t}`,8+t*5,34-e/3,`accent`,1),...t>0?[A(`s${t}`,8+(t-1)*5,34-n[t-1]/3,8+t*5,34-e/3,`accent`,{w:.6})]:[]]),F(`b`,[80,40,55],[`A`,`B`,`C`],{c:`blue`,max:90,base:50,h:28,x0:56,x1:94,show:!1}),k(`t1`,26,8,`xu hướng`,{c:`accent`}),k(`t2`,75,8,`khác biệt`,{c:`blue`})),M(`Một tuần với đủ các kênh là phần của tổng; một tuần gấp mười các tuần còn lại là điểm lạ, cần đi kiểm tra chứ chưa kết luận.`,`One week with all channels is a share; one week ten times the rest is an outlier, to check not conclude.`,E(`a`,12,28,10,9,`50%`,{f:`blue`,c:`blue`,s:3}),E(`b`,24,28,14,9,`30%`,{f:`accent`,c:`accent`,s:3}),E(`c`,36,28,10,9,`20%`,{f:`gold`,c:`gold`,s:3}),k(`t1`,24,18,`phần của tổng`,{c:`blue`}),...[4,5,4,5,4,50].map((e,t)=>D(`o${t}`,56+t*7,46-Math.min(e,50)/2.2,t===5?`red`:`blue`,1.3)),O(`r`,91,46-50/2.2,4,`red`),k(`t2`,75,18,`điểm lạ → kiểm tra`,{c:`red`})),M(`Năm dạng giúp chọn biểu đồ; tương quan «đi cùng nhau» chỉ mô tả, không phải nhân quả.`,`The five kinds help pick a chart; “together” (correlation) only describes; it is not causation.`,...[1,2,3,4,5,6,7].map((e,t)=>D(`t${t}`,22+t*8,44-e*3.4-t%2*1.5,`green`,1.5)),k(`t`,50,10,`đi cùng nhau ≠ cái này gây ra cái kia`,{c:`red`,s:3.4}))]),"st-pyramid":N([M(`Câu cần chốt đứng trước: «Đề nghị không tăng ngân sách kênh này trong hạn 30/11.»`,`The point to settle goes first: “We recommend not raising this channel's budget by 30 Nov.”`,E(`a`,50,14,80,12,`Đề nghị: không tăng ngân sách
kênh này trong hạn 30/11`,{f:`accent`,c:`accent`})),M(`Rồi đến lý do: tỷ lệ 2% dưới ngưỡng 3%, và không kịp sửa trong hạn.`,`Then the reasons: 2% is below the 3% threshold, and it cannot be fixed in time.`,E(`a`,50,10,80,11,`Đề nghị: không tăng ngân sách`,{f:`accent`,c:`accent`}),E(`r1`,28,30,38,12,`2% < ngưỡng 3%`,{c:`blue`}),E(`r2`,72,30,38,12,`không kịp sửa
trong hạn`,{c:`blue`}),j(`x`,40,16,30,24,`mute`),j(`y`,60,16,70,24,`mute`)),M(`Cuối cùng là bằng chứng: cùng cách đếm với tuần nền.`,`Last comes the evidence: the same counting method as the baseline week.`,E(`a`,50,8,70,9,`Đề nghị: không tăng ngân sách`,{f:`accent`,c:`accent`,s:3}),E(`r1`,28,24,38,10,`2% < ngưỡng 3%`,{c:`blue`,s:3}),E(`r2`,72,24,38,10,`không kịp sửa`,{c:`blue`,s:3}),E(`e`,50,42,76,10,`bằng chứng: cùng cách đếm với tuần nền`,{c:`green`,s:3}),j(`x`,28,30,44,36,`mute`),j(`y`,72,30,56,36,`mute`)),M(`Thứ tự này sắp xếp lập luận, không tạo ra lập luận: nếu bằng chứng chỉ là ý kiến thì nó vẫn là ý kiến.`,`This order arranges an argument, it does not create one: if the evidence is only opinion, it stays opinion.`,E(`a`,50,14,70,11,`kết luận`,{c:`accent`}),E(`r`,50,30,70,11,`lý do`,{c:`blue`}),E(`e`,50,46,70,11,`bằng chứng (số, không phải ý kiến)`,{c:`green`,s:3}))]),"st-one":N([M(`Hai tiêu đề trong một trang là hai câu chuyện bị trộn.`,`Two headlines on one page are two stories mixed together.`,E(`p`,50,26,70,30,`ngân sách kênh trong hạn này
+ câu chuyện thương hiệu`,{c:`red`,d:!0})),M(`Tách thành hai trang: trang 1 chỉ nói ngân sách kênh trong hạn này.`,`Split into two pages: page 1 only says this period's channel budget.`,E(`p1`,28,28,38,26,`TRANG 1
ngân sách kênh
trong hạn này`,{f:`accent`,c:`accent`}),E(`p2`,72,28,38,26,`TRANG 2
thương hiệu
(nếu còn giờ)`,{o:.5,c:`mute`})),M(`Người nghe chỉ có năm phút thì chỉ nhận trang 1; trang 2 là phụ lục nếu còn giờ.`,`A listener with five minutes only takes page 1; page 2 is an appendix if time remains.`,E(`p1`,28,28,38,26,`TRANG 1
đã nghe`,{f:`green`,c:`green`}),E(`p2`,72,28,38,26,`TRANG 2
nếu còn giờ`,{o:.4,d:!0,c:`mute`}),k(`t`,50,52,`một thông điệp = một quyết định + lý do`,{c:`accent`,s:3.2}))])},ge=[`C0
đặt câu hỏi`,`C1
làm với máy`,`C2
suy diễn`,`C3
mô hình`],H=e=>P(`c`,ge,{y:22,on:e,all:!0,h:14}),_e={"c0-order":N([M(`Giáo trình có bốn khóa nối tiếp: C0 đặt câu hỏi, C1 làm việc với máy, C2 suy diễn, C3 mô hình.`,`The syllabus has four courses in sequence: C0 asking, C1 working with the machine, C2 inference, C3 models.`,...H(0)),M(`C3 cần một dòng dữ liệu để dự đoán; dòng đó chỉ có sau C1 và C2.`,`C3 needs a data row to predict from; that row only exists after C1 and C2.`,...H(3),j(`a`,50,34,50,44,`red`,{d:!0}),k(`t`,50,52,`nhảy tới C3 → chưa có gì để đếm`,{c:`red`,s:3.4})),M(`Đi đúng thứ tự: mỗi khóa dựa vào khóa trước.`,`Go in order: each course builds on the previous one.`,...H(2),k(`t`,50,46,`Toán và mô tả là bản ngắn, tùy chọn`,{c:`mute`,s:3}))]),"c0-read":N([M(`Một thẻ gồm bốn phần: lý do cần ý đó, nối với ý trước, hình minh họa, câu định nghĩa.`,`A card has four parts: why it matters, link to the previous idea, an illustration, a definition.`,...P(`c`,[`lý do`,`nối ý trước`,`hình`,`định nghĩa`],{y:26,on:0,all:!0,h:14})),M(`Bạn đọc lần lượt từng phần, không phải xem hết một video.`,`You read part by part, not watch a whole video.`,...P(`c`,[`lý do`,`nối ý trước`,`hình`,`định nghĩa`],{y:26,on:2,h:14})),M(`Dừng khi câu định nghĩa đã khớp với hình. Sổ không chấm điểm.`,`Stop when the definition matches the picture. The notebook does not grade.`,...P(`c`,[`lý do`,`nối ý trước`,`hình`,`định nghĩa`],{y:26,on:3,h:14}),k(`t`,50,46,`khớp hình = xong thẻ`,{c:`green`,s:3.6}))]),"or-obj":N([M(`Hai loại ô khác nhau: biến quyết định (bạn chọn) và hàm mục tiêu (công thức).`,`Two different cells: decision variables (you choose) and the objective (a formula).`,...R(`p`,`biến quyết định
số suất mỗi kênh`,`hàm mục tiêu
doanh thu = công thức`,{ca:`blue`,cb:`accent`})),M(`Bạn chỉ gõ số suất; doanh thu tự ra từ công thức của các suất đó.`,`You only type slots; revenue comes out of the formula of those slots.`,...R(`p`,`gõ: 10, 20, 5`,`doanh thu = tổng(suất × giá)`,{ca:`blue`,cb:`accent`,fb:`soft`}),j(`a`,48,26,52,26,`mute`)),M(`Nếu gõ cả doanh thu, bạn tự điền đáp án và không còn gì để giải.`,`If you type revenue too, you fill in the answer yourself and nothing is left to solve.`,...R(`p`,`gõ: 10, 20, 5`,`gõ cả doanh thu`,{ca:`blue`,cb:`red`,d:!0}),k(`t`,50,46,`tự điền đáp án = không còn bài toán`,{c:`red`,s:3.4}))]),"or-con":N([M(`Ngân sách là 100. Mỗi suất có đơn giá riêng.`,`The budget is 100. Each slot has its own unit cost.`,E(`b`,50,20,70,14,`ngân sách ≤ 100`,{f:`accent`,c:`accent`})),M(`Tổng số suất × đơn giá phải nhỏ hơn hoặc bằng 100.`,`Total slots × unit cost must be at most 100.`,E(`b`,50,12,70,10,`ngân sách ≤ 100`,{c:`accent`}),...z(`s`,[`kênh A: 10 × 3 = 30`,`kênh B: 20 × 2 = 40`,`kênh C: 5 × 6 = 30`],{y0:26,gap:10,w:60}),k(`t`,50,56,`tổng = 100 ≤ 100`,{c:`green`,s:3.4})),M(`Quên dòng này thì «tối ưu» cứ tăng số suất mãi; đổi ≤ thành ≥ thì có thể không còn phương án.`,`Forget the row and the “optimum” keeps adding slots; flip ≤ to ≥ and there may be no feasible plan.`,E(`b`,28,24,38,14,`quên giới hạn
→ tăng mãi`,{c:`red`}),E(`c`,72,24,38,14,`viết ≥ thay ≤
→ vô nghiệm`,{c:`red`,d:!0}),k(`t`,50,46,`mỗi nguồn lực: một bất đẳng thức`,{c:`mute`,s:3.2}))]),"or-solv":N([M(`Hai biến, ràng buộc là các đường thẳng: vùng khả thi là một đa giác.`,`Two variables with linear constraints: the feasible region is a polygon.`,A(`p1`,20,40,20,12,`blue`),A(`p2`,20,12,70,12,`blue`),A(`p3`,70,12,82,36,`blue`),A(`p4`,82,36,55,44,`blue`),A(`p5`,55,44,20,40,`blue`)),M(`Với mục tiêu tuyến tính, solver chỉ cần xét các đỉnh: nó dừng ở một đỉnh.`,`With a linear objective, the solver only needs to check the corners: it stops at a corner.`,A(`p1`,20,40,20,12,`blue`),A(`p2`,20,12,70,12,`blue`),A(`p3`,70,12,82,36,`blue`),A(`p4`,82,36,55,44,`blue`),A(`p5`,55,44,20,40,`blue`),...[[20,40],[20,12],[70,12],[82,36],[55,44]].map(([e,t],n)=>({id:`v${n}`,k:`dot`,x:e,y:t,r:n===3?2.2:1.2,c:n===3?`accent`:`blue`})),k(`t`,50,54,`tối ưu nằm ở một đỉnh`,{c:`accent`,s:3.4})),M(`Thêm một bình phương vào mục tiêu: đường đồng mức cong, tối ưu có thể nằm giữa, và solver có thể dừng ở cực trị cục bộ.`,`Add a square to the objective: contours curve, the optimum can be inside, and the solver may stop at a local extremum.`,A(`p1`,20,40,20,12,`blue`,{o:.5}),A(`p2`,20,12,70,12,`blue`,{o:.5}),A(`p3`,70,12,82,36,`blue`,{o:.5}),A(`p4`,82,36,55,44,`blue`,{o:.5}),A(`p5`,55,44,20,40,`blue`,{o:.5}),{id:`r`,k:`ring`,x:48,y:28,r:8,c:`red`},{id:`d`,k:`dot`,x:48,y:28,r:1.8,c:`red`},k(`t`,50,54,`bài cong: thử nhiều điểm xuất phát`,{c:`red`,s:3.2}))]),"or-sheet":N([M(`Trang tính: B2:B4 là biến, B6 là mục tiêu, B8 ≤ B9 là giới hạn.`,`Sheet: B2:B4 are variables, B6 the objective, B8 ≤ B9 the constraint.`,...z(`s`,[`B2:B4 — biến (Solver được sửa)`,`B6 — mục tiêu (công thức)`,`B8 ≤ B9 — giới hạn ngân sách`,`B12 — «nhớ kiểm tra giá»`],{y0:12,gap:11,w:76,on:[0,1,2]})),M(`Solver chỉ đọc ba vùng đã khai báo, không đọc B12.`,`Solver reads only the three declared ranges, not B12.`,...z(`s`,[`B2:B4 — biến (Solver được sửa)`,`B6 — mục tiêu (công thức)`,`B8 ≤ B9 — giới hạn ngân sách`,`B12 — «nhớ kiểm tra giá»`],{y0:12,gap:11,w:76,on:[0,1,2],bad:[]}),k(`t`,50,54,`B12 không tham gia bài toán`,{c:`mute`,s:3})),M(`Một giới hạn gõ thành ghi chú thì không phải giới hạn; phải là một ô công thức được khai báo.`,`A constraint typed as a note is not a constraint; it must be a declared formula cell.`,...z(`s`,[`B8 ≤ B9 — khai báo trong Solver`,`B12: «ngân sách tối đa 100» (chữ)`],{y0:18,gap:16,w:76,on:[0],bad:[1]}),k(`t`,50,54,`chữ ghi chú ≠ giới hạn`,{c:`red`,s:3.4}))]),"ga-next":N([M(`Prompt: «Giá gói spa là bao nhiêu?», không kèm bảng giá.`,`Prompt: “How much is the spa package?”, no price list attached.`,E(`p`,50,24,70,14,`Giá gói spa là bao nhiêu?
(không có bảng giá)`,{c:`blue`})),M(`Mô hình tính phân phối xác suất trên các mảnh chữ kế tiếp, rồi chọn một mảnh.`,`The model computes a probability over next text pieces and picks one.`,E(`p`,50,8,70,9,`Giá gói spa là...`,{o:.6,s:3}),...[`800.000`,`1.200.000`,`950.000`].map((e,t)=>E(`o${t}`,22+t*28,30,24,10,e,{c:`gold`,s:3})),k(`t`,50,48,`mỗi mảnh có một xác suất`,{c:`mute`,s:3})),M(`Một số được viết ra, nghe hợp lý; nó không được tra từ cơ sở dữ liệu của công ty.`,`A number gets written and sounds plausible; it was not looked up in the company's database.`,E(`p`,28,26,38,14,`«1.200.000»
(được sinh ra)`,{c:`gold`}),E(`d`,72,26,38,14,`bảng giá thật
(không có trong prompt)`,{c:`red`,d:!0}),k(`t`,50,48,`đừng báo con số này cho khách`,{c:`red`,s:3.4}))]),"ga-vs":N([M(`Hai việc khác nhau: đoán một cột và nối tiếp một đoạn chữ.`,`Two different jobs: predict a column and continue a text.`,...R(`p`,`học máy
đoán một cột`,`GenAI
nối tiếp đoạn chữ`)),M(`Học máy: «khách này có rời đi không?» — có nhãn, có tập chấm, có một ô đúng.`,`ML: “will this customer leave?” — labelled, with a test set and one right cell.`,E(`a`,50,16,80,12,`khách này có rời đi không?  →  có / không`,{c:`blue`}),E(`b`,50,36,80,12,`chấm bằng tập kiểm tra có nhãn`,{f:`blue`,c:`blue`})),M(`GenAI: «viết một tin nhắn» — không có một ô đúng duy nhất, nên thước đo của việc 1 không áp được.`,`GenAI: “write a message” — no single right cell, so the first job's metric does not apply.`,E(`a`,50,16,80,12,`viết một tin nhắn cho khách`,{c:`accent`}),E(`b`,50,36,80,12,`không có một ô đúng duy nhất`,{c:`red`,d:!0}),k(`t`,50,52,`gọi đúng tên việc trước khi chọn thước đo`,{c:`mute`,s:3.2}))]),"ga-stack":N([M(`Ba tầng: model, data, sản phẩm.`,`Three layers: model, data, product.`,...z(`l`,[`sản phẩm (nút, giao diện)`,`data (tài liệu trong lần gọi)`,`model (viết câu)`],{y0:14,gap:14,w:70,h:10})),M(`Cùng một model: lần gọi có dán chính sách đổi trả cho câu khác lần không dán. Đó là tầng data.`,`Same model: a call with the return policy pasted gives different text than one without. That is the data layer.`,...z(`l`,[`sản phẩm (nút, giao diện)`,`data (dán chính sách đổi trả)`,`model (viết câu)`],{y0:14,gap:14,w:70,h:10,on:[1]})),M(`Sản phẩm chưa có nút «đặt lịch» thì người dùng vẫn chỉ nhận được một đoạn chữ. Đó là tầng sản phẩm.`,`If the product has no “book” button, users still only get text. That is the product layer.`,...z(`l`,[`sản phẩm (chưa có nút đặt lịch)`,`data (dán chính sách đổi trả)`,`model (viết câu)`],{y0:14,gap:14,w:70,h:10,on:[0]}),k(`t`,50,56,`nói rõ bạn đang đụng tầng nào`,{c:`mute`,s:3}))]),"ga-use":N([M(`Hai việc cùng dùng một mô hình: nháp tiêu đề và gửi giá cho khách.`,`Two jobs, one model: drafting a headline and sending prices to a customer.`,...R(`p`,`nháp tiêu đề
(người sửa lại)`,`tự gửi giá
cho khách`)),M(`Giá của một lần sai: tiêu đề tệ thì sửa; giá sai gửi đi có thể thành một hợp đồng.`,`Cost of one error: a bad headline is edited; a wrong price sent can become a contract.`,...R(`p`,`sai → sửa
giá thấp`,`sai → hợp đồng
giá cao`,{ca:`green`,cb:`red`,fa:`soft`})),M(`Hai việc không dùng chung một nút: việc giá cao phải có người duyệt hoặc nguồn kiểm được.`,`The two jobs should not share a button: the high-cost one needs a reviewer or a checkable source.`,...R(`p`,`tự động
với người sửa`,`có người duyệt
+ nguồn kiểm được`,{ca:`green`,cb:`red`}))]),"ga-chat":N([M(`Một lần gọi gồm các message: system và user.`,`One call contains messages: system and user.`,E(`s`,50,14,76,10,`system: «chỉ dùng bảng giá đính kèm»`,{c:`blue`}),E(`u`,50,30,76,10,`user: dán bảng giá + câu hỏi`,{c:`accent`})),M(`Thiếu một trong hai thì lần gọi không đủ thông tin.`,`Missing either one means the call lacks information.`,E(`s`,50,14,76,10,`system: «chỉ dùng bảng giá đính kèm»`,{c:`blue`}),E(`u`,50,30,76,10,`user: (chưa dán bảng giá)`,{c:`red`,d:!0}),k(`t`,50,48,`không có bảng giá → không có nguồn`,{c:`red`,s:3.4})),M(`Mô hình không giữ hộ: lần gọi sau ứng dụng phải gửi lại cả hai.`,`The model keeps nothing: on the next call the app must send both again.`,E(`a`,28,22,38,14,`lần gọi 1
system + user`,{c:`blue`}),E(`b`,72,22,38,14,`lần gọi 2
gửi lại cả hai`,{c:`accent`}),j(`x`,48,22,52,22,`mute`),k(`t`,50,44,`system không phải khóa pháp lý`,{c:`mute`,s:3}))]),"ga-tok":N([M(`Cửa sổ ngữ cảnh có một trần token.`,`The context window has a token ceiling.`,E(`w`,50,24,80,18,``,{c:`blue`,f:`soft`}),k(`t`,50,10,`trần token`,{c:`blue`,s:3.2})),M(`Bảng giá dài một trang nằm trọn trong trần: lần gọi thấy được nó.`,`A one-page price list fits inside the ceiling: the call sees it.`,E(`w`,50,24,80,18,``,{c:`blue`,f:`soft`}),E(`p`,50,24,40,10,`bảng giá 1 trang`,{f:`green`,c:`green`})),M(`Chôn nó ở cuối một lần dán khổng lồ thì có thể không còn trong cửa sổ, nhưng hóa đơn vẫn tính phần đã gửi.`,`Bury it at the end of a giant paste and it may fall out of the window, yet the bill counts what was sent.`,E(`w`,36,24,52,18,``,{c:`blue`,f:`soft`}),E(`big`,58,24,56,12,`đoạn dán khổng lồ …………… bảng giá`,{c:`red`,o:.8,s:2.8}),k(`t`,50,50,`ngoài trần = không thấy, vẫn bị tính tiền`,{c:`red`,s:3.2}))]),"ga-prompt":N([M(`Một prompt gồm ba phần: việc cần làm, ngữ cảnh, dạng đầu ra.`,`A prompt has three parts: the task, the context, the output format.`,...P(`c`,[`việc cần làm`,`ngữ cảnh`,`dạng đầu ra`],{y:26,on:0,all:!0})),M(`Việc: trả lời có được hoàn tiền không. Ngữ cảnh: đoạn chính sách đính kèm, không bịa thêm.`,`Task: answer whether a refund is allowed. Context: the attached policy; no inventions.`,...P(`c`,[`trả lời có
hoàn tiền không`,`đoạn chính sách
đính kèm`,`dạng đầu ra`],{y:26,on:1,h:18})),M(`Dạng: một câu có dẫn đúng chỗ trong đoạn, hoặc nói «không thấy trong đoạn».`,`Format: one sentence citing the passage, or “not found in the passage”.`,...P(`c`,[`trả lời có
hoàn tiền không`,`đoạn chính sách
đính kèm`,`một câu có dẫn
hoặc «không thấy»`],{y:26,on:2,h:18}))]),"ga-few":N([M(`Muốn đầu ra là «có / không / không thấy trong đoạn».`,`You want the output to be “yes / no / not in the passage”.`,E(`g`,50,24,70,14,`đầu ra: có | không | không thấy`,{c:`accent`})),M(`Đưa ba mẫu đúng dạng đó vào prompt.`,`Put three examples of exactly that format into the prompt.`,...[`mẫu 1 → có`,`mẫu 2 → không`,`mẫu 3 → không thấy`].map((e,t)=>E(`e${t}`,50,12+t*12,60,9,e,{c:`blue`,s:3}))),M(`Mẫu cố định dạng câu, nhưng không làm đoạn chính sách đúng hơn: chúng chỉ giúp dễ kiểm.`,`Examples fix the sentence shape but do not make the policy any truer; they only make answers easier to check.`,...R(`p`,`ví dụ
cố định dạng`,`dữ liệu
vẫn phải đúng`,{ca:`blue`,cb:`red`,d:!0}))]),"ga-cot":N([M(`Context không có giá. Mô hình vẫn được bảo «viết từng bước».`,`The context has no price. The model is still told to “write step by step”.`,E(`c`,28,24,38,14,`context:
không có giá`,{c:`red`,d:!0}),E(`s`,72,24,38,14,`«hãy viết
từng bước»`,{c:`blue`})),M(`Chuỗi bước vẫn viết ra một mức giá và một lý do nghe hợp lý.`,`The chain still writes a price and a sensible-sounding reason.`,...z(`s`,[`bước 1: gói thường ~ 1 triệu`,`bước 2: cộng phụ phí`,`bước 3: giá = 1.200.000`],{y0:10,gap:11,w:70})),M(`Không bước nào trỏ về nguồn trong context, nên đó không phải bằng chứng: đừng thu tiền theo giá đó.`,`No step points to a source in the context, so it is not evidence: do not charge that price.`,...z(`s`,[`bước 1: gói thường ~ 1 triệu`,`bước 2: cộng phụ phí`,`bước 3: giá = 1.200.000`],{y0:10,gap:11,w:70,bad:[0,1,2],on:[0,1,2]}),k(`t`,50,50,`bước không trỏ nguồn → bỏ`,{c:`red`,s:3.4}))]),"sa-tune":N([M(`Chính sách đổi trả sửa một câu.`,`The return policy changes by one sentence.`,E(`p`,50,24,70,14,`chính sách: «7 ngày» → «14 ngày»`,{c:`accent`})),M(`RAG: đổi tài liệu được tìm; câu mới có ngay ở lần gọi sau.`,`RAG: change the searched document; the new sentence appears on the next call.`,...P(`c`,[`sửa tài liệu`,`xây lại index`,`câu trả lời mới`],{y:26,on:2})),M(`Fine-tune: huấn luyện lại cả mô hình vì một câu là nhầm tầng; nó đổi cách viết, không đổi sự thật như một bảng tra.`,`Fine-tune: retraining the whole model for one sentence is the wrong layer; it changes style, not facts like a lookup table.`,...R(`p`,`RAG
đổi tài liệu`,`fine-tune
đổi trọng số`,{ca:`green`,cb:`red`,fa:`green`,d:!0}),k(`t`,50,46,`sự thật thay đổi → RAG; giọng văn ổn định → xét fine-tune`,{c:`mute`,s:3}))]),"sa-react":N([M(`Khách hỏi: «còn hàng không?»`,`Customer asks: “is it in stock?”`,...P(`r`,[`suy nghĩ`,`gọi catalog`,`nhìn kết quả`],{y:26,on:0,all:!0})),M(`Bước act: gọi catalog theo mã. Bước observe: số catalog trả về.`,`Act: call the catalog by code. Observe: the number the catalog returns.`,...P(`r`,[`suy nghĩ`,`gọi catalog
theo mã A12`,`catalog trả:
còn 0`],{y:26,on:2,h:18})),M(`Không có bước đó thì phải nói «chưa tra», không được bịa «còn 3». Vòng lặp cần một trần số bước.`,`Without that step say “not checked yet”, never invent “3 left”. The loop needs a step ceiling.`,E(`a`,28,26,38,14,`không tra
→ «còn 3»`,{c:`red`,d:!0}),E(`b`,72,26,38,14,`không tra
→ «chưa tra»`,{c:`green`}))]),"sa-stage":N([M(`Ba chặng: nói theo prompt, gọi catalog, chấm các ca.`,`Three stages: talk from the prompt, call the catalog, score the cases.`,...P(`s`,[`1 nói theo
prompt`,`2 gọi
catalog`,`3 chấm
các ca`],{y:26,on:0,all:!0,h:18})),M(`Chặng 1 chưa có catalog nên chưa được nói giá. Chặng 2 mới có kết quả catalog.`,`Stage 1 has no catalog so it may not quote prices. Stage 2 has catalog results.`,...P(`s`,[`1 nói theo
prompt`,`2 gọi
catalog`,`3 chấm
các ca`],{y:26,on:1,h:18})),M(`Chặng 3 so các ca với thước đo viết trước; chặng nào chưa có log thì chưa xảy ra.`,`Stage 3 compares cases to a metric written beforehand; a stage without a log has not happened.`,...P(`s`,[`1 nói theo
prompt`,`2 gọi
catalog`,`3 chấm
các ca`],{y:26,on:2,h:18}),k(`t`,50,48,`không bịa một cuộc hội thoại`,{c:`red`,s:3.2}))]),"sa-tool":N([M(`Mã A12 gọi catalog: trả về giá và tồn kho.`,`Code A12 calls the catalog: it returns price and stock.`,E(`q`,28,26,38,14,`tra mã A12`,{c:`blue`}),E(`r`,72,26,38,14,`giá: 900.000
tồn: 4`,{f:`green`,c:`green`}),j(`a`,48,26,52,26,`mute`)),M(`Câu trả lời nhắc lại đúng các trường đó và không thêm gì.`,`The answer repeats exactly those fields and adds nothing.`,E(`r`,28,26,38,14,`giá: 900.000
tồn: 4`,{c:`green`}),E(`a`,72,26,38,14,`«A12: 900.000đ,
còn 4»`,{c:`accent`}),j(`x`,48,26,52,26,`green`)),M(`Gói không có mã: không có dòng thì không có số; trả «không thấy mã», đừng đoán giá gần đúng.`,`A package with no code: no row means no number; answer “code not found”, not a rough price.`,E(`q`,28,26,38,14,`tra mã ???`,{c:`blue`}),E(`r`,72,26,38,14,`không thấy mã`,{c:`green`}),j(`x`,48,26,52,26,`mute`),k(`t`,50,48,`không có dòng ≠ giá 0`,{c:`red`,s:3.4}))]),"sa-score":N([M(`Ca viết trước: mã A12, catalog trả «hết hàng».`,`Case written first: code A12, catalog says “out of stock”.`,E(`c`,50,24,70,14,`ca: mã A12 → catalog: hết hàng`,{c:`blue`})),M(`Mô hình nói «còn hàng», rất chắc. Ca này sai.`,`The model says “in stock”, very confidently. This case fails.`,E(`c`,28,24,38,14,`đúng:
hết hàng`,{c:`green`}),E(`m`,72,24,38,14,`mô hình:
còn hàng`,{c:`red`,f:`red`})),M(`Ba lần cùng nói «còn hàng» không làm nó đúng; thước đo là kết quả catalog, không phải số lần lặp lại.`,`Saying “in stock” three times does not make it right; the metric is the catalog result, not repetition.`,...[`còn hàng`,`còn hàng`,`còn hàng`].map((e,t)=>E(`m${t}`,18+t*32,22,26,10,e,{c:`red`,s:3})),E(`c`,50,42,70,10,`catalog: hết hàng → cả ba đều sai`,{c:`green`,s:3}))]),"rag-why":N([M(`Một file PDF nội bộ nằm ngoài mô hình.`,`An internal PDF lives outside the model.`,R(`p`,`file PDF nội bộ`,`mô hình`,{ca:`gold`,cb:`blue`})[0],R(`p`,`file PDF nội bộ`,`mô hình`,{ca:`gold`,cb:`blue`})[1]),M(`RAG thêm một bước tìm: lấy vài đoạn của file rồi đặt vào prompt.`,`RAG adds a search step: fetch a few passages of the file and put them in the prompt.`,...P(`r`,[`file PDF`,`tìm đoạn`,`đoạn vào prompt`,`mô hình`],{y:26,on:2,h:14})),M(`Không có đoạn nào vào prompt thì câu trả lời về file là câu không nguồn, dù bạn nói «RAG».`,`With no passage in the prompt the answer about the file has no source, however much you say “RAG”.`,...P(`r`,[`file PDF`,`tìm đoạn`,`(rỗng)`,`mô hình`],{y:26,on:3,h:14}),k(`t`,50,48,`phải thấy đoạn nào đã vào prompt`,{c:`red`,s:3.2}))]),"rag-chunk":N([M(`Một mục dài 8 dòng, trong đó dòng 1 là lời hứa và dòng 6 là điều kiện.`,`A section of 8 lines: line 1 is the promise, line 6 is the condition.`,...Array.from({length:8},(e,t)=>E(`l${t}`,50,6+t*7,70,6,t===0?`dòng 1: hoàn tiền`:t===5?`dòng 6: điều kiện`:`dòng ${t+1}`,{c:t===0||t===5?`accent`:`mute`,s:2.8}))),M(`Cắt mỗi mảnh 2 dòng: lời hứa và điều kiện nằm ở hai mảnh khác nhau.`,`Cut into 2-line chunks: the promise and the condition land in different chunks.`,...Array.from({length:8},(e,t)=>E(`l${t}`,(t%2,40),6+t*7,56,6,t===0?`dòng 1: hoàn tiền`:t===5?`dòng 6: điều kiện`:`dòng ${t+1}`,{c:Math.floor(t/2)===0?`blue`:Math.floor(t/2)===2?`red`:`mute`,s:2.8})),k(`m1`,82,9,`mảnh 1`,{s:2.8,c:`blue`}),k(`m3`,82,37,`mảnh 3`,{s:2.8,c:`red`})),M(`Hỏi về hoàn tiền có thể chỉ tìm thấy mảnh 1: lời hứa mà không có điều kiện.`,`A refund question may only find chunk 1: the promise without its condition.`,E(`m1`,50,20,70,14,`mảnh 1: «hoàn tiền»`,{f:`gold`,c:`gold`}),E(`m3`,50,40,70,12,`mảnh 3: «chỉ trong 7 ngày» (không được tìm)`,{c:`red`,d:!0,s:3}),k(`t`,50,56,`cắt đoạn là cắt nghĩa`,{c:`red`,s:3.4}))]),"rag-vec":N([M(`Kho có hai tài liệu: FAQ marketing và điều khoản.`,`The store holds two documents: a marketing FAQ and the terms.`,...R(`p`,`FAQ marketing`,`điều khoản`,{ca:`gold`,cb:`blue`})),M(`Câu hỏi dùng chữ của FAQ nên FAQ đứng thứ nhất, điều khoản thứ hai.`,`The question uses FAQ wording so the FAQ ranks first and the terms second.`,...z(`r`,[`1. FAQ marketing`,`2. điều khoản`],{y0:14,gap:14,w:60,h:10,on:[0]}),k(`t`,50,46,`gần nhất theo độ gần, chưa phải đúng nhất`,{c:`mute`,s:3})),M(`Trả lời theo top-1 là trả lời nhầm tài liệu: lấy vài đoạn, đọc, rồi mới viết.`,`Answering from top-1 uses the wrong document: take a few passages, read, then write.`,...z(`r`,[`1. FAQ marketing`,`2. điều khoản`],{y0:14,gap:14,w:60,h:10,on:[0,1],bad:[0]}),k(`t`,50,46,`top-1 không phải kết luận`,{c:`red`,s:3.4}))]),"rag-idx":N([M(`8 giờ: xây index khi điều khoản ghi «7 ngày».`,`8:00: the index is built when the policy says “7 days”.`,E(`i`,28,24,38,14,`8h: index
«7 ngày»`,{c:`blue`}),E(`f`,72,24,38,14,`file nguồn
«7 ngày»`,{c:`blue`})),M(`9 giờ: file sửa thành «14 ngày», nhưng index vẫn là bản 8 giờ.`,`9:00: the file becomes “14 days”, but the index is still the 8:00 version.`,E(`i`,28,24,38,14,`index (8h)
«7 ngày»`,{c:`red`}),E(`f`,72,24,38,14,`file nguồn (9h)
«14 ngày»`,{f:`green`,c:`green`})),M(`Cả buổi sáng bot nói 7 ngày: đó là chỉ mục cũ, không phải mô hình ngoan cố. Phải xây lại index khi nguồn đổi.`,`All morning the bot says 7 days: a stale index, not a stubborn model. Rebuild the index when the source changes.`,...P(`c`,[`file đổi`,`xây lại index`,`bot nói 14`],{y:26,on:2}))]),"rag-rank":N([M(`Có 20 đoạn xếp theo độ gần; điều khoản đúng đứng thứ 15.`,`20 passages ordered by similarity; the right clause is 15th.`,...Array.from({length:20},(e,t)=>E(`p${t}`,8+t%10*9.4,20+Math.floor(t/10)*12,8,8,String(t+1),{c:t===14?`accent`:`mute`,f:t===14?`accent`:`soft`,s:2.8}))),M(`Re-rank đọc lại cả danh sách và kéo điều khoản đó lên đầu.`,`Re-rank reads the list again and lifts that clause to the top.`,...Array.from({length:20},(e,t)=>E(`p${t}`,8+t%10*9.4,20+Math.floor(t/10)*12,8,8,String(t+1),{c:t===14?`green`:`mute`,f:t===14?`green`:`soft`,s:2.8})),E(`t`,50,52,70,8,`re-rank: đoạn 15 → hạng 1`,{c:`green`,s:3})),M(`Nhưng nếu bước tìm chỉ giữ 5 đoạn đầu thì đoạn 15 không bao giờ vào danh sách: re-rank không tìm hộ.`,`But if the search keeps only the top 5, passage 15 never enters the list: re-rank cannot find it for you.`,...Array.from({length:20},(e,t)=>E(`p${t}`,8+t%10*9.4,20+Math.floor(t/10)*12,8,8,String(t+1),{c:t<5?`blue`:t===14?`red`:`mute`,f:`soft`,o:t<5||t===14?1:.35,s:2.8})),k(`t`,50,52,`chỉ giữ 5 đoạn → đoạn 15 ngoài danh sách`,{c:`red`,s:3.2}))]),"rag-near":N([M(`Buổi demo chạy một câu hỏi và tìm được một đoạn.`,`The demo runs one question and finds one passage.`,E(`d`,50,24,60,14,`demo: 1 câu hỏi → 1 đoạn`,{c:`blue`})),M(`Đó chưa phải đánh giá: đánh giá cần một bộ ca, gồm cả ca mà độ gần sẽ phản bội.`,`That is not an evaluation: evaluation needs a set of cases, including ones where similarity betrays you.`,...[`ca 1 (demo)`,`ca 2`,`ca 3: độ gần sai`].map((e,t)=>E(`c${t}`,50,12+t*12,60,9,e,{c:t===2?`red`:`blue`,s:3,o:t===0?1:.9}))),M(`Giữ một bộ ca; demo chỉ là một câu trong bộ đó, nếu nó đáng nằm trong bộ.`,`Keep a case set; the demo is just one row in it, if it deserves to be.`,E(`s`,50,24,76,18,`bộ ca: demo là một dòng`,{c:`green`,f:`soft`}),k(`t`,50,46,`một lần chạy được ≠ một kết quả`,{c:`mute`,s:3.2}))]),"rag-store":N([M(`Hai collection trong Chroma: policy-2026-09 và policy-2026-10.`,`Two Chroma collections: policy-2026-09 and policy-2026-10.`,...R(`p`,`policy-2026-09`,`policy-2026-10`,{ca:`blue`,cb:`blue`})),M(`Lần gọi trỏ nhầm vào policy-2026-09 nên câu trả lời bám theo tháng 9.`,`The call points at policy-2026-09, so the answer follows September.`,...R(`p`,`policy-2026-09
← lần gọi trỏ vào`,`policy-2026-10`,{ca:`red`,fa:`red`,cb:`mute`,ob:.4})),M(`Đó không phải embedding hỏng: ghi tên kho trong log, đừng nói «đã tìm vector store» như thể chỉ có một kho.`,`Not a broken embedding: log the collection name; do not say “searched the vector store” as if there were one.`,...R(`p`,`log: tìm trong
policy-2026-10`,`tên kho phải
nằm trong log`,{ca:`green`,cb:`accent`}))]),"rag-demo":N([M(`Buổi RAG Demonstration chạy một câu và in ra một câu trả lời.`,`The RAG demonstration runs one question and prints one answer.`,...P(`r`,[`câu hỏi`,`đoạn đã tìm`,`câu đã viết`],{y:26,on:2,all:!0})),M(`Giữ đoạn đã tìm cạnh câu đã viết: có cặp đó mới có một ca.`,`Keep the retrieved passage next to the written answer: only that pair makes a case.`,...R(`p`,`đoạn đã tìm
«hoàn tiền: không nêu số»`,`câu đã viết
«hoàn 500.000đ»`,{ca:`blue`,cb:`red`})),M(`Kiểm tra: số tiền trong câu có nằm trong đoạn không? Không thì câu bịa số.`,`Check: is the amount in the answer inside the passage? If not, the answer invented it.`,...R(`p`,`đoạn: không có
số tiền`,`câu: có số
500.000đ`,{ca:`blue`,cb:`red`,d:!0}),k(`t`,50,46,`số không nằm trong đoạn → bịa`,{c:`red`,s:3.4}))])},ve={"im-grid":N([M(`Một bức ảnh biển hiệu chia thành lưới ô nhỏ.`,`A photo of a shop sign is divided into a grid of small cells.`,...Array.from({length:24},(e,t)=>E(`g${t}`,20+t%6*12,10+Math.floor(t/6)*9,11,8,``,{c:`mute`,f:`soft`}))),M(`Mỗi ô là một con số độ sáng, không phải «chữ» hay «đường phố».`,`Each cell is a brightness number, not “letters” or “a street”.`,...Array.from({length:24},(e,t)=>E(`g${t}`,20+t%6*12,10+Math.floor(t/6)*9,11,8,String(t*37%99),{c:`blue`,f:`soft`,s:2.8}))),M(`Prompt «một góc phố» cho ra một lưới số trông giống góc phố; nó không phải địa chỉ bạn có thể gửi khách đến.`,`A “street corner” prompt yields a number grid that looks like one; it is not an address you can send customers to.`,E(`a`,28,26,38,14,`lưới số
trông như góc phố`,{c:`blue`}),E(`b`,72,26,38,14,`địa chỉ thật
(không có)`,{c:`red`,d:!0}),k(`t`,50,48,`biển hiệu trông thật ≠ có thật`,{c:`red`,s:3.4}))]),"im-vae":N([M(`Ảnh biển hiệu có một chữ nhỏ ở góc.`,`The sign photo has a small word in the corner.`,E(`i`,50,22,60,24,`ảnh gốc: chữ nhỏ rõ nét`,{c:`blue`})),M(`VAE nén ảnh thành một mã ngắn, chỉ giữ phần chung.`,`A VAE compresses the image to a short code that keeps only the common parts.`,...P(`v`,[`ảnh gốc`,`mã ngắn`,`ảnh dựng lại`],{y:26,on:1})),M(`Chữ nhỏ là phần riêng, đã bị bỏ khi nén: sau khi dựng lại nó thành một vệt mờ.`,`The small word is a specific detail dropped in compression: after rebuilding it is a blur.`,...R(`p`,`ảnh gốc
chữ rõ`,`dựng lại
chữ thành vệt`,{ca:`blue`,cb:`red`,fb:`soft`}),k(`t`,50,48,`không phải «phông chữ nghệ thuật»`,{c:`red`,s:3.2}))]),"im-gan":N([M(`GAN có hai bên: kẻ làm giả viết ảnh, người chê phân biệt thật giả.`,`A GAN has two sides: a forger writes images and a critic tells real from fake.`,...R(`p`,`kẻ làm giả`,`người chê`,{ca:`accent`,cb:`blue`})),M(`Kẻ làm giả viết một đôi giày không có mã; người chê không bắt được và gật đầu.`,`The forger writes a shoe with no SKU; the critic cannot catch it and nods.`,E(`a`,24,22,32,12,`giày không mã`,{c:`accent`}),j(`x`,41,22,55,22,`mute`),E(`b`,76,22,32,12,`người chê: «ổn»`,{c:`green`})),M(`Người chê gật không có nghĩa là kho của bạn có đôi giày đó.`,`The critic's nod does not mean your stock has that shoe.`,E(`a`,28,24,38,14,`người chê
gật đầu`,{c:`green`}),E(`b`,72,24,38,14,`kho của bạn:
không có`,{c:`red`,d:!0}),k(`t`,50,46,`ảnh đẹp ≠ sản phẩm tồn tại`,{c:`red`,s:3.4}))]),"im-diff":N([M(`Diffusion bắt đầu từ ảnh toàn nhiễu.`,`Diffusion starts from an all-noise image.`,...Array.from({length:18},(e,t)=>D(`n${t}`,20+t%6*12,14+Math.floor(t/6)*10,`mute`,1.4))),M(`Mỗi bước gỡ bớt một ít nhiễu theo hướng prompt mô tả, dần hiện ra một bao bì.`,`Each step removes a little noise toward what the prompt describes, gradually revealing a package.`,...P(`d`,[`toàn nhiễu`,`bớt nhiễu`,`hiện hình`,`bao bì`],{y:26,on:2,h:14})),M(`Mã vạch trên bao bì chỉ là các ô nhiễu còn sót lại, không phải mã trong hệ thống; nó không tra từ một kho ảnh.`,`The barcode is leftover noise cells, not a code in your system; it was not looked up in an image store.`,...R(`p`,`mã vạch
trong ảnh`,`mã trong
hệ thống`,{ca:`red`,cb:`mute`,d:!0}),k(`t`,50,46,`chỉ là nhiễu còn sót`,{c:`red`,s:3.4}))]),"im-txt":N([M(`Prompt mô tả một bao bì, gửi vào mô hình sinh ảnh.`,`A prompt describes a package and goes into an image model.`,...P(`p`,[`prompt`,`mô hình ảnh`,`ảnh`],{y:26,on:2,all:!0})),M(`Ảnh ra chỉ là một hình minh họa, chưa phải một bao bì đã in.`,`The output is only an illustration, not a printed package.`,...R(`p`,`ảnh minh họa`,`bao bì đã in`,{ca:`blue`,cb:`mute`,d:!0,ob:.5})),M(`Prompt lái bức ảnh nhưng không chứng nhận nó: đừng bịa thông số cho sản phẩm trong ảnh.`,`A prompt steers the picture but does not certify it: do not invent specs for the product shown.`,E(`a`,28,26,38,14,`prompt lái ảnh`,{c:`blue`}),E(`b`,72,26,38,14,`chứng nhận
thông số (không có)`,{c:`red`,d:!0}),k(`t`,50,48,`chỉ ghi thông số lấy từ nguồn thật`,{c:`mute`,s:3}))]),"rag-job":N([M(`Bài yêu cầu RAG trên các văn bản được giao.`,`The assignment requires RAG over the assigned documents.`,E(`s`,50,24,70,16,`văn bản được giao
(phạm vi của bài)`,{c:`green`,f:`soft`})),M(`Câu trả lời dẫn một điều khoản nằm trong các văn bản đó là câu trong bài.`,`An answer quoting a clause that is inside those texts is in scope.`,E(`s`,50,20,70,16,`văn bản được giao`,{c:`green`,f:`soft`}),E(`c`,50,20,40,8,`điều khoản trong file`,{c:`green`,f:`green`})),M(`Một điều khoản không có trong đó là câu ngoài bài, dù ngoài đời nó có thật.`,`A clause not in them is out of scope, even if it is real in life.`,E(`s`,36,24,52,18,`văn bản được giao`,{c:`green`,f:`soft`}),E(`c`,82,24,30,12,`điều khoản lạ`,{c:`red`,d:!0}),k(`t`,50,48,`đúng ngoài đời ≠ đúng trong bài`,{c:`red`,s:3.4}))]),"lc-tpl":N([M(`Khuôn: «chỉ dùng đoạn sau: {passage}». Chỗ trống {passage} chờ được điền.`,`Template: “use only this passage: {passage}”. The {passage} slot waits to be filled.`,E(`t`,50,24,80,14,`chỉ dùng đoạn sau: {passage}`,{c:`blue`})),M(`Điền một đoạn tìm được vào chỗ trống: lần gọi bám theo nguồn.`,`Fill the slot with a retrieved passage: the call stays tied to a source.`,E(`t`,50,16,80,12,`chỉ dùng đoạn sau: «hoàn tiền trong 14 ngày»`,{c:`green`,s:3}),k(`n`,50,36,`có nguồn → còn trong RAG`,{c:`green`,s:3.4})),M(`Nếu passage rỗng mà vẫn gọi, mọi câu trả lời sau đó nằm ngoài RAG dù code dùng LangChain.`,`If passage is empty and you still call, every answer is outside RAG even if the code uses LangChain.`,E(`t`,50,16,80,12,`chỉ dùng đoạn sau: ( rỗng )`,{c:`red`,d:!0,s:3}),k(`n`,50,36,`tên thư viện không tạo ra nguồn`,{c:`red`,s:3.4}))]),"lc-parse":N([M(`Dạng yêu cầu: «có» hoặc «không», kèm đúng mã.`,`The required form: “yes” or “no”, with the exact code.`,E(`p`,50,24,70,14,`dạng: có|không + mã`,{c:`blue`})),M(`Mô hình viết: «tôi nghĩ là có, khoảng 2 triệu». Không đúng dạng.`,`The model writes: “I think yes, about 2 million”. Wrong shape.`,...P(`c`,[`mô hình viết
«tôi nghĩ là có…»`,`parser`],{y:26,on:1,h:18})),M(`Parser vỡ và báo lỗi dạng. Kết quả đúng của hệ thống là lỗi, không phải «có».`,`The parser breaks and reports a shape error. The system's right result is the error, not “yes”.`,E(`a`,28,24,38,14,`parser:
lỗi dạng`,{c:`red`,f:`red`}),E(`b`,72,24,38,14,`đừng đọc thành
«có»`,{c:`mute`,d:!0}),k(`t`,50,46,`không đoán ý mô hình`,{c:`red`,s:3.4}))]),"lc-agent":N([M(`Chain là đường đã vẽ sẵn: tra catalog rồi trả lời.`,`A chain is a pre-drawn path: query the catalog, then answer.`,...P(`c`,[`tra catalog`,`trả lời`],{y:26,on:1,x0:25,x1:75})),M(`Agent tự chọn bước sau: catalog hay chính sách tùy câu hỏi.`,`An agent picks the next step itself: catalog or policy depending on the question.`,E(`q`,20,26,22,12,`câu hỏi mở`,{c:`accent`}),E(`a`,62,12,30,10,`catalog`,{c:`blue`}),E(`b`,62,40,30,10,`chính sách`,{c:`blue`}),j(`x`,31,24,47,14,`mute`),j(`y`,31,28,47,38,`mute`)),M(`Cả hai đều cần trần: dừng sau vài bước dù chưa «hài lòng».`,`Both need a ceiling: stop after a few steps even if not “satisfied”.`,...P(`c`,[`bước 1`,`bước 2`,`bước 3`,`dừng`],{y:26,on:3,h:14}),k(`t`,50,48,`trần số bước = bắt buộc`,{c:`red`,s:3.4}))]),"cap-none":N([M(`Một capstone vẫn bắt đầu bằng câu: ai quyết định điều gì?`,`A capstone still starts with: who decides what?`,E(`q`,50,24,74,14,`ai quyết định điều gì?`,{f:`accent`,c:`accent`})),M(`Sau đó đi đúng các bước CRISP-DM quen thuộc.`,`Then follow the familiar CRISP-DM steps.`,...P(`c`,[`hiểu bài toán`,`hiểu dữ liệu`,`chuẩn bị`,`mô hình`,`đánh giá`],{y:26,on:0,h:14})),M(`Không có công thức mới nào tên là capstone: nó chỉ là một bài làm.`,`No new formula is named capstone: it is just an assignment.`,E(`a`,50,24,70,14,`capstone = bài làm
không có buổi dạy thêm`,{c:`mute`}))]),"ht-h0":N([M(`Hai bản quảng cáo A và B. Muốn biết B có khác A không.`,`Two ads A and B. We want to know whether B differs from A.`,...R(`p`,`bản A`,`bản B`,{ca:`blue`,cb:`accent`})),M(`H0 (giả thuyết không): tỷ lệ form của B bằng A. H1: hai tỷ lệ khác nhau.`,`H0 (null): B's form rate equals A's. H1: the two rates differ.`,E(`a`,28,24,38,16,`H0
B = A`,{c:`blue`}),E(`b`,72,24,38,16,`H1
B ≠ A`,{c:`accent`})),M(`«B thắng» chưa phải giả thuyết mà là kết luận, chỉ được nói sau khi có bằng chứng.`,`“B wins” is a conclusion, not a hypothesis, to be said only after evidence.`,E(`a`,28,24,38,14,`H0 / H1
(viết trước)`,{c:`green`}),E(`b`,72,24,38,14,`«B thắng»
(kết luận sau)`,{c:`red`,d:!0}),j(`x`,48,24,52,24,`mute`))]),"ht-p":N([M(`Giả sử H0 đúng: hai bản bằng nhau, và mẫu hay lệch quanh 0.`,`Assume H0 is true: the two ads are equal and samples scatter around 0.`,...B(`b`,50,46,{w:80,h:28}),k(`t`,50,52,`mức chênh giữa hai bản`,{s:2.8,c:`mute`})),M(`Mẫu của bạn lệch ở đây: phần đuôi từ chỗ đó ra ngoài là p-value.`,`Your sample sits here: the tail beyond it is the p-value.`,...B(`b`,50,46,{w:80,h:28}),A(`m`,74,46,74,20,`accent`,{w:.7}),k(`t`,80,18,`p ≈ 0,03`,{c:`accent`,s:3.6})),M(`p = 0,03: nếu H0 đúng, lệch như thế chỉ gặp khoảng 3 lần trong 100 lần làm lại. Đó không phải xác suất H0 đúng.`,`p = 0.03: if H0 is true you would see a gap this big about 3 times in 100 repeats. It is not the probability H0 is true.`,...B(`b`,50,46,{w:80,h:28,op:.5}),...Array.from({length:3},(e,t)=>D(`d${t}`,78+t*4,40,`accent`,1.2)),k(`t`,50,10,`độ hiếm của mẫu, không phải P(H0 đúng)`,{c:`red`,s:3.2}))]),"ht-err":N([M(`Hai thực tế có thể xảy ra, và hai cách bạn kết luận.`,`Two realities and two calls you can make.`,E(`a`,28,14,38,10,`thật sự bằng nhau`,{c:`blue`}),E(`b`,72,14,38,10,`thật sự khác`,{c:`accent`}),E(`c`,28,36,38,10,`bạn báo «khác»`,{c:`mute`}),E(`d`,72,36,38,10,`bạn báo «bằng»`,{c:`mute`})),M(`Thật sự bằng nhau mà bạn báo «khác»: báo động giả (loại I), cỡ α = 5%.`,`Truly equal but you call “different”: false alarm (type I), size α = 5%.`,E(`a`,28,14,38,10,`thật sự bằng nhau`,{c:`blue`}),E(`c`,28,36,38,10,`bạn báo «khác»`,{c:`red`,f:`red`}),j(`x`,28,20,28,31,`red`),k(`t`,70,28,`báo động giả (loại I)`,{c:`red`,s:3.2})),M(`Thật sự khác mà bạn báo «bằng»: bỏ sót (loại II). Với α = 5%, 100 lần làm đúng luật thì khoảng 5 lần vẫn báo sai ở trường hợp bằng nhau.`,`Truly different but you call “equal”: a miss (type II). With α = 5%, about 5 of 100 rule-following runs still shout wrong when truly equal.`,E(`b`,72,14,38,10,`thật sự khác`,{c:`accent`}),E(`d`,72,36,38,10,`bạn báo «bằng»`,{c:`red`,f:`red`}),j(`x`,72,20,72,31,`red`),k(`t`,28,28,`bỏ sót (loại II)`,{c:`red`,s:3.2}))]),"ht-t":N([M(`12 tuần dữ liệu, độ lệch chuẩn tính từ chính 12 tuần đó.`,`12 weeks of data, with the standard deviation estimated from those 12 weeks.`,F(`b`,[8,9,10,10,11,12,10,9,11,12,10,11],[``,``,``,``,``,``,``,``,``,``,``,``],{c:`blue`,max:14,show:!1,base:40,h:26,x0:10,x1:90}),k(`t`,50,50,`độ lệch chuẩn cũng là ước lượng`,{c:`mute`,s:3})),M(`Phân phối chuẩn có đuôi mỏng; vạch bác ở đây.`,`The normal curve has thin tails; its cutoff sits here.`,...B(`b`,50,44,{w:80,h:28,op:1}),A(`c1`,66,44,66,24,`red`,{w:.6,d:!0}),k(`t`,66,20,`vạch chuẩn`,{c:`red`,s:2.8})),M(`Phân phối t với 11 bậc tự do đuôi dày hơn, vạch đứng xa hơn: khó bác quá sớm.`,`The t curve with 11 degrees of freedom has fatter tails, its cutoff sits farther out: harder to reject too early.`,...B(`b`,50,44,{w:80,h:28,op:.35}),...B(`f`,50,44,{w:80,h:28,fat:4,c:`accent`}),A(`c1`,66,44,66,24,`red`,{w:.6,d:!0,o:.4}),A(`c2`,71,44,71,24,`accent`,{w:.7}),k(`t`,71,20,`vạch t`,{c:`accent`,s:2.8}))]),"ht-means":N([M(`GDN trung bình 120.000đ (độ lệch chuẩn 30.000đ, 36 form), Facebook 135.000đ (40.000đ, 36 form).`,`GDN averages 120,000 (SD 30,000, 36 forms), Facebook 135,000 (40,000, 36 forms).`,...I(`n`,100,160,{y:36,ticks:[100,120,135,160]}),D(`a`,L(120,100,160),36,`blue`,2),D(`b`,L(135,100,160),36,`accent`,2),k(`la`,L(120,100,160),26,`GDN 120`,{s:3,c:`blue`}),k(`lb`,L(135,100,160),26,`FB 135`,{s:3,c:`accent`})),M(`Khoảng cách giữa hai trung bình là 15.000đ, nhưng mỗi trung bình có sai số của nó.`,`The gap between the means is 15,000, but each mean has its own error.`,...I(`n`,100,160,{y:36,ticks:[100,120,135,160]}),O(`a`,L(120,100,160),36,6,`blue`),O(`b`,L(135,100,160),36,6.8,`accent`),D(`a2`,L(120,100,160),36,`blue`,2),D(`b2`,L(135,100,160),36,`accent`,2),k(`t`,50,12,`sai số ≈ 8.000đ; chênh 15.000đ`,{c:`mute`,s:3})),M(`So khoảng cách với sai số: khoảng 1,9 sai số, gần ngưỡng; phép kiểm định cho biết đó có thể chỉ là nhiễu.`,`Compare the gap with its error: about 1.9 errors, near the threshold; the test says whether it may be only noise.`,F(`b`,[1.9,2],[`chênh / sai số`,`ngưỡng ≈ 2`],{c:[`accent`,`mute`],max:3,base:46,h:28,x0:25,x1:75}))]),"ht-props":N([M(`Mỗi bản có 2.000 người xem. A: 40 form (2,0%). B: 52 form (2,6%).`,`Each ad has 2,000 viewers. A: 40 forms (2.0%). B: 52 forms (2.6%).`,F(`b`,[2,2.6],[`A 2,0%`,`B 2,6%`],{c:[`blue`,`accent`],max:3,base:46,h:30,x0:25,x1:75,unit:`%`})),M(`Chênh 0,6 điểm phần trăm. Câu hỏi: chênh đó có lớn hơn nhiễu do chọn mẫu không?`,`A gap of 0.6 percentage points. Question: is it bigger than sampling noise?`,F(`b`,[2,2.6],[`A 2,0%`,`B 2,6%`],{c:[`blue`,`accent`],max:3,base:46,h:30,x0:25,x1:75,unit:`%`}),A(`g`,62,14,62,22,`red`,{w:.7}),k(`t`,50,8,`chênh 0,6 điểm`,{c:`red`,s:3.2})),M(`Sai số ở cỡ mẫu này khoảng 0,45 điểm; chênh 0,6 chỉ ≈ 1,3 sai số, chưa đủ để kết luận.`,`At this sample size the error is about 0.45 points; the 0.6 gap is only ≈ 1.3 errors, not enough to conclude.`,F(`b`,[1.3,2],[`chênh / sai số`,`ngưỡng ≈ 2`],{c:[`accent`,`mute`],max:3,base:46,h:28,x0:25,x1:75}),k(`t`,50,8,`2,0% và 2,6% vẫn có thể là nhiễu`,{c:`red`,s:3.2}))]),"ht-peek":N([M(`Bạn xem p mỗi ngày và định dừng khi p < 5%.`,`You check p every day and plan to stop when p < 5%.`,...[.3,.12,.2,.07,.04,.09,.15].map((e,t)=>D(`d${t}`,12+t*12,44-e*100,e<.05?`green`:`mute`,1.4)),A(`l`,6,39,94,39,`red`,{d:!0,w:.4}),k(`t`,20,8,`p theo ngày`,{s:3,c:`mute`})),M(`Mỗi ngày là một lần được báo; chỉ cần một ngày chạm dưới 5% là bạn dừng.`,`Each day is another chance to call it; one day under 5% and you stop.`,...[.3,.12,.2,.07,.04,.09,.15].map((e,t)=>D(`d${t}`,12+t*12,44-e*100,e<.05?`red`:`mute`,1.6)),O(`r`,60,40,4,`red`),A(`l`,6,39,94,39,`red`,{d:!0,w:.4})),M(`Nhiều lần được báo thì tỷ lệ báo động giả thật cao hơn 5% đã viết. Phải định cỡ mẫu hoặc ngày dừng trước.`,`With many chances the real false-alarm rate exceeds the written 5%. Fix the sample size or stop day beforehand.`,F(`b`,[5,20],[`viết: 5%`,`thực tế: cao hơn`],{c:[`mute`,`red`],max:25,base:46,h:28,x0:25,x1:75,unit:`%`}),k(`t`,50,8,`nhìn trộm làm 5% không còn là 5%`,{c:`red`,s:3.2}))]),"ht-chi":N([M(`Bảng thực tế: GDN 30 mua / 70 không; TikTok 10 mua / 90 không.`,`Observed table: GDN 30 buy / 70 not; TikTok 10 buy / 90 not.`,F(`b`,[30,10],[`GDN mua`,`TikTok mua`],{c:[`blue`,`accent`],max:40,base:46,h:28,x0:25,x1:75})),M(`Nếu kênh và việc mua không liên quan, mỗi kênh kỳ vọng 20 người mua.`,`If channel and buying were unrelated, each channel would expect 20 buyers.`,F(`b`,[30,10],[`GDN mua`,`TikTok mua`],{c:[`blue`,`accent`],max:40,base:46,h:28,x0:25,x1:75}),A(`e1`,14,32,50,32,`mute`,{d:!0,w:.4}),A(`e2`,50,32,86,32,`mute`,{d:!0,w:.4}),k(`t`,50,8,`kỳ vọng = 20 mỗi ô`,{c:`mute`,s:3})),M(`Chi-bình phương cộng độ lệch của cả bảng: (30−20)²/20 + (10−20)²/20 + … nhìn cả bảng, không từng ô.`,`Chi-square adds the gaps of the whole table: (30−20)²/20 + (10−20)²/20 + … the whole table, not one cell.`,E(`a`,50,24,80,14,`χ² = Σ (quan sát − kỳ vọng)² / kỳ vọng
= 5 + 5 + 1,25 + 1,25 = 12,5`,{c:`accent`,s:3}),k(`t`,50,46,`một số cho cả bảng`,{c:`mute`,s:3}))]),"ht-anova":N([M(`Ba kênh với ba số đo giá mỗi form: 10–12, 11–13, 19–21 (nghìn đồng).`,`Three channels with three cost-per-form measures: 10–12, 11–13, 19–21 (thousand).`,...[[10,11,12],[11,12,13],[19,20,21]].flatMap((e,t)=>e.map((e,n)=>D(`d${t}${n}`,16+t*34,44-(e-8)*2.8,[`blue`,`gold`,`accent`][t],1.6)))),M(`Trung bình từng kênh: 11, 12, 20. Khoảng cách giữa các kênh lớn hơn khoảng cách trong từng kênh.`,`Channel means: 11, 12, 20. The gaps between channels exceed the spread within each channel.`,...[[10,11,12],[11,12,13],[19,20,21]].flatMap((e,t)=>e.map((e,n)=>D(`d${t}${n}`,16+t*34,44-(e-8)*2.8,[`blue`,`gold`,`accent`][t],1.6))),...[11,12,20].map((e,t)=>A(`m${t}`,8+t*34,44-(e-8)*2.8,26+t*34,44-(e-8)*2.8,`ink`,{w:.6}))),M(`ANOVA so hai phần đó trong một cuộc kiểm định (thay vì ba cuộc), rồi mới hỏi kênh nào khác kênh nào.`,`ANOVA compares those two parts in one test (not three), and only then asks which pairs differ.`,E(`a`,28,24,38,14,`giữa các kênh
(lớn)`,{c:`accent`}),E(`b`,72,24,38,14,`trong từng kênh
(nhỏ)`,{c:`blue`}),k(`t`,50,46,`tỷ số F lớn → có kênh khác`,{c:`green`,s:3.4}))]),"eda-ask":N([M(`«Làm EDA» chưa phải một câu hỏi.`,`“Do EDA” is not yet a question.`,E(`q`,50,24,60,14,`«làm EDA»`,{c:`red`,d:!0})),M(`Câu viết được: tỷ lệ form tháng này có khác tháng trước không, và khác bao nhiêu form?`,`A writable question: does this month's form rate differ from last month's, and by how many forms?`,E(`q`,50,24,84,16,`tỷ lệ form tháng này có khác tháng trước không,
và khác bao nhiêu form?`,{f:`accent`,c:`accent`,s:3})),M(`Câu hỏi quyết định cột nào cần nhìn và hình nào cần vẽ.`,`The question decides which columns to look at and which chart to draw.`,...P(`c`,[`câu hỏi`,`cột cần xem`,`hình cần vẽ`],{y:26,on:2}))]),"eda-src":N([M(`Hai file: chuyến taxi công khai và khách spa của bạn.`,`Two files: public taxi trips and your own spa customers.`,...R(`p`,`file chuyến taxi
công khai`,`khách spa
của bạn`,{ca:`mute`,cb:`accent`})),M(`Một tỷ lệ tính trên file taxi nói về chuyến taxi, không nói về cửa hàng của bạn.`,`A rate computed on the taxi file describes taxi trips, not your shop.`,E(`a`,28,24,38,14,`tỷ lệ trên
file taxi`,{c:`mute`}),E(`b`,72,24,38,14,`tỷ lệ đặt lịch
của bạn`,{c:`red`,d:!0}),k(`t`,50,46,`không thay thế nhau`,{c:`red`,s:3.4})),M(`Trước khi tính, hỏi: bảng này ghi ai?`,`Before computing, ask: who does this table record?`,E(`q`,50,24,70,14,`bảng này ghi ai?`,{f:`accent`,c:`accent`}))]),"eda-type":N([M(`Bốn cột, bốn kiểu: kênh (chữ), số sao (chữ có thứ tự), ngày form (ngày), chi tiêu (số).`,`Four columns, four types: channel (text), stars (ordered text), form date (date), spend (number).`,...[[`kênh`,`chữ`],[`số sao`,`chữ có
thứ tự`],[`ngày form`,`ngày`],[`chi tiêu`,`số`]].map(([e,t],n)=>E(`c${n}`,14+n*24,24,21,18,`${e}\n${t}`,{c:[`mute`,`gold`,`blue`,`accent`][n],s:3}))),M(`Mỗi kiểu cho phép phép tính khác nhau: số thì trung bình được, ngày thì khoảng cách, chữ thì đếm.`,`Each type allows different operations: numbers average, dates measure gaps, text is counted.`,...[[`kênh`,`đếm`],[`số sao`,`thứ hạng`],[`ngày form`,`khoảng
cách`],[`chi tiêu`,`trung bình`]].map(([e,t],n)=>E(`c${n}`,14+n*24,24,21,18,`${e}\n${t}`,{c:[`mute`,`gold`,`blue`,`accent`][n],s:3}))),M(`Trung bình của chữ «GDN» không tồn tại.`,`The mean of the text “GDN” does not exist.`,E(`a`,50,24,66,14,`trung bình(«GDN», «Facebook»)  →  không tồn tại`,{c:`red`,d:!0,s:3}))]),"eda-row":N([M(`Một khách để lại form hai lần vì tải lại trang: hai dòng.`,`One customer submitted twice because of a page reload: two rows.`,...z(`r`,[`Lan — 2.000.000đ`,`Lan — 2.000.000đ`,`Minh — 1.000.000đ`],{y0:10,gap:11,w:70,on:[0,1],c:`blue`})),M(`SUM chi tiêu tính Lan hai lần: 5.000.000 thay vì 3.000.000.`,`SUM counts Lan twice: 5,000,000 instead of 3,000,000.`,...z(`r`,[`Lan — 2.000.000đ`,`Lan — 2.000.000đ`,`Minh — 1.000.000đ`],{y0:10,gap:11,w:70,on:[0,1],bad:[1]}),k(`t`,50,46,`tổng bị nhân đôi`,{c:`red`,s:3.6})),M(`Mỗi dòng phải là một thứ bạn gọi tên được: một khách, một đơn, một lượt form.`,`Each row must be a thing you can name: a customer, an order, a form submission.`,E(`q`,50,24,70,14,`mỗi dòng = ?
một khách, hay một lần gửi?`,{f:`accent`,c:`accent`}))]),"eda-miss":N([M(`1.000 khách, cột tuổi có 100 ô trống; 900 người khai trung bình 35 tuổi.`,`1,000 customers; the age column has 100 blanks; the 900 who answered average 35.`,E(`a`,38,24,58,16,`900 người khai
trung bình 35`,{c:`blue`}),E(`b`,82,24,24,16,`100 ô
trống`,{c:`gold`,d:!0})),M(`Điền 0 cho 100 người đó thì trung bình tụt còn 31,5 và có «khách 0 tuổi».`,`Filling 0 for those 100 drops the mean to 31.5 and creates “0-year-old customers”.`,E(`a`,38,24,58,16,`900 người: 35`,{c:`blue`}),E(`b`,82,24,24,16,`100 ô = 0`,{c:`red`,f:`red`}),k(`t`,50,46,`trung bình mới = 31,5`,{c:`red`,s:3.6})),M(`Ô trống là «chưa biết», không phải số 0: bỏ riêng, hoặc điền có lý do và ghi lại.`,`A blank means “unknown”, not zero: set aside, or fill with a stated reason.`,E(`a`,28,24,38,14,`ô trống
= chưa biết`,{c:`green`}),E(`b`,72,24,38,14,`số 0
= đã biết là 0`,{c:`mute`}))]),"eda-scale":N([M(`Hai cột: chi tiêu tính bằng triệu đồng (khoảng 0–10), thời gian xem tính bằng giây (khoảng 0–600).`,`Two columns: spend in millions (about 0–10), watch time in seconds (about 0–600).`,...R(`p`,`chi tiêu
0 … 10`,`thời gian xem
0 … 600`,{ca:`blue`,cb:`accent`})),M(`Khi tính khoảng cách để gom cụm, cột có số lớn chiếm hết tiếng nói; chi tiêu gần như bị bỏ.`,`When measuring distances for clustering the big-number column dominates; spend is almost ignored.`,F(`b`,[10,600],[`chi tiêu`,`thời gian xem`],{c:[`blue`,`accent`],max:600,show:!1,base:46,h:30,x0:25,x1:75}),k(`t`,50,8,`khoảng cách do cột giây quyết định`,{c:`red`,s:3.2})),M(`Đổi sang điểm z: mỗi cột cùng thước, nên có trọng lượng như nhau.`,`Switch to z-scores: each column on the same scale carries equal weight.`,F(`b`,[1,1],[`chi tiêu (z)`,`thời gian (z)`],{c:[`blue`,`accent`],max:2,show:!1,base:46,h:30,x0:25,x1:75}),k(`t`,50,8,`cùng một thước`,{c:`green`,s:3.4}))]),"eda-bad":N([M(`Ba giá trị lạ: tỷ lệ form 200%, ngày hẹn năm sau, tuổi −3.`,`Three odd values: form rate 200%, appointment date next year, age −3.`,...z(`r`,[`tỷ lệ form = 200%`,`ngày hẹn: năm sau (file đã khóa)`,`tuổi = −3`],{y0:12,gap:12,w:70,c:`red`,bad:[0,1,2],on:[0,1,2]})),M(`Đó không phải khách lạ (điểm xa) mà là giá trị không được phép: lỗi nhập.`,`These are not unusual customers (outliers) but forbidden values: entry errors.`,E(`a`,28,24,38,14,`điểm xa
(hợp lệ, hiếm)`,{c:`blue`}),E(`b`,72,24,38,14,`không hợp lệ
(sai luật)`,{c:`red`})),M(`Lọc theo luật miền giá trị trước, rồi mới xét điểm xa.`,`Filter by domain rules first, then consider outliers.`,...P(`c`,[`luật miền giá trị`,`lọc giá trị sai`,`xét điểm xa`],{y:26,on:1}))]),"eda-cat":N([M(`Bảng có 400 dòng GDN, 550 Facebook, 250 TikTok: tổng 1.200.`,`The table has 400 GDN, 550 Facebook, 250 TikTok rows: 1,200 in all.`,F(`b`,[400,550,250],[`GDN`,`Facebook`,`TikTok`],{c:[`blue`,`gold`,`accent`],max:600,base:46,h:30,x0:15,x1:85})),M(`Phần của từng kênh: 33%, 46%, 21%.`,`Each channel's share: 33%, 46%, 21%.`,F(`b`,[33,46,21],[`GDN`,`Facebook`,`TikTok`],{c:[`blue`,`gold`,`accent`],max:55,unit:`%`,base:46,h:30,x0:15,x1:85})),M(`Chữ không có thứ tự thì thứ tự vẽ cột không mang nghĩa: đếm, đừng nối đường.`,`Unordered text means bar order carries no meaning: count, do not connect with a line.`,F(`b`,[46,33,21],[`Facebook`,`GDN`,`TikTok`],{c:[`gold`,`blue`,`accent`],max:55,unit:`%`,base:46,h:30,x0:15,x1:85}),k(`t`,50,6,`xếp từ lớn đến nhỏ cho dễ đọc`,{c:`mute`,s:3}))]),"eda-ord":N([M(`Đánh giá 1–5 sao: 40 người cho 5 sao, 30 cho 1 sao, 30 cho 3 sao.`,`Ratings 1–5: 40 give 5 stars, 30 give 1 star, 30 give 3 stars.`,F(`b`,[30,0,30,0,40],[`1★`,`2★`,`3★`,`4★`,`5★`],{c:`gold`,max:45,base:46,h:30,x0:15,x1:85})),M(`Trung bình 3,2 trông như «tạm ổn».`,`The mean 3.2 looks like “so-so”.`,F(`b`,[30,0,30,0,40],[`1★`,`2★`,`3★`,`4★`,`5★`],{c:`gold`,max:45,base:46,h:30,x0:15,x1:85}),A(`m`,L(3.2,1,5,15,85),12,L(3.2,1,5,15,85),46,`red`,{d:!0,w:.6}),k(`t`,L(3.2,1,5,15,85),8,`trung bình 3,2`,{c:`red`,s:3})),M(`Thật ra khách chia hai cực: giữ nguyên các bậc, đừng chỉ nhìn một con số.`,`In truth customers split into two poles: keep the levels, do not look at a single number.`,F(`b`,[30,0,30,0,40],[`1★`,`2★`,`3★`,`4★`,`5★`],{c:[`red`,`gold`,`gold`,`gold`,`green`],max:45,base:46,h:30,x0:15,x1:85}),k(`t`,50,8,`hai cực: 1★ và 5★`,{c:`red`,s:3.4}))]),"eda-num":N([M(`Tám tuần: 18, 19, 20, 20, 20, 21, 22 và 120.`,`Eight weeks: 18, 19, 20, 20, 20, 21, 22 and 120.`,F(`b`,[18,19,20,20,20,21,22,120],[`18`,`19`,`20`,`20`,`20`,`21`,`22`,`120`],{c:[`blue`,`blue`,`blue`,`blue`,`blue`,`blue`,`blue`,`red`],max:120,show:!1,base:46,h:32})),M(`Trung vị là 20: chỗ giữa của các tuần.`,`The median is 20: the middle of the weeks.`,F(`b`,[18,19,20,20,20,21,22,120],[`18`,`19`,`20`,`20`,`20`,`21`,`22`,`120`],{c:`blue`,max:120,show:!1,base:46,h:32}),A(`m`,6,46-20/120*32,94,46-20/120*32,`green`,{d:!0,w:.6}),k(`t`,50,6,`trung vị = 20`,{c:`green`,s:3.4})),M(`Trung bình bị tuần 120 kéo lên 30: hai số cách nhau xa là dấu hiệu có đuôi.`,`The mean is dragged to 30 by week 120: two numbers far apart signal a tail.`,F(`b`,[18,19,20,20,20,21,22,120],[`18`,`19`,`20`,`20`,`20`,`21`,`22`,`120`],{c:`blue`,max:120,show:!1,base:46,h:32}),A(`m`,6,46-20/120*32,94,46-20/120*32,`green`,{d:!0,w:.6}),A(`a`,6,38,94,38,`red`,{d:!0,w:.6}),k(`t`,50,6,`trung bình 30 ≠ trung vị 20`,{c:`red`,s:3.4}))]),"eda-r":N([M(`Các tuần của một tài khoản: chi tiêu càng cao, số form thường càng cao.`,`Weeks of one account: more spend usually means more forms.`,...[[2,6],[3,10],[4,9],[5,15],[6,14],[7,22],[8,16],[9,24]].map(([e,t],n)=>D(`d${n}`,12+e*8,48-t*1.5,`blue`,1.5))),M(`r = 0,6 nói hai cột đi cùng nhau, ở mức vừa.`,`r = 0.6 says the two columns move together, moderately.`,...[[2,6],[3,10],[4,9],[5,15],[6,14],[7,22],[8,16],[9,24]].map(([e,t],n)=>D(`d${n}`,12+e*8,48-t*1.5,`blue`,1.5)),A(`l`,24,40,90,12,`accent`,{w:.7}),k(`t`,30,8,`r = 0,6`,{c:`accent`,s:3.6})),M(`Một tuần cụ thể vẫn có thể lệch xa đường tóm tắt: r không phải một đường chắc chắn.`,`A specific week can still sit far from the summary line: r is not a certain line.`,...[[2,6],[3,10],[4,9],[5,15],[6,14],[7,22],[8,16],[9,24]].map(([e,t],n)=>D(`d${n}`,12+e*8,48-t*1.5,n===6?`red`:`blue`,1.5)),A(`l`,24,40,90,12,`accent`,{w:.7}),O(`r`,76,24,4,`red`))]),"eda-cause":N([M(`Tuần nào số form tăng thì đơn kem gần cửa hàng cũng tăng.`,`Weeks with more forms also have more cream orders near the shop.`,...[[1,2],[2,3],[3,3.5],[4,5],[5,6]].map(([e,t],n)=>D(`d${n}`,20+e*12,46-t*5,`green`,1.6)),k(`t`,50,8,`form ↑  kem ↑ (đi cùng nhau)`,{c:`green`,s:3.4})),M(`Tắt kem không phải kế hoạch media: hai thứ không kéo nhau.`,`Switching off cream is not a media plan: the two do not drag each other.`,E(`a`,28,24,38,14,`form ↑`,{c:`blue`}),E(`b`,72,24,38,14,`kem ↑`,{c:`gold`}),j(`x`,48,24,52,24,`red`,{d:!0}),k(`t`,50,46,`mũi tên nhân quả: chưa có`,{c:`red`,s:3.4})),M(`Cả hai cùng tăng theo mùa lễ: một nguyên nhân thứ ba.`,`Both rise with the holiday season: a third cause.`,E(`m`,50,10,40,10,`mùa lễ`,{f:`accent`,c:`accent`}),E(`a`,28,34,30,12,`form ↑`,{c:`blue`}),E(`b`,72,34,30,12,`kem ↑`,{c:`gold`}),j(`x`,42,16,30,28,`accent`),j(`y`,58,16,70,28,`accent`))]),"eda-group":N([M(`Số form mỗi tuần: GDN 38, 40, 42, 40 và Facebook 10, 20, 30, 100.`,`Weekly forms: GDN 38, 40, 42, 40 and Facebook 10, 20, 30, 100.`,...[38,40,42,40].map((e,t)=>D(`g${t}`,14+t*7,46-e/100*36,`blue`,1.6)),...[10,20,30,100].map((e,t)=>D(`f${t}`,62+t*7,46-e/100*36,`gold`,1.6))),M(`Cả hai kênh đều có trung bình 40.`,`Both channels have a mean of 40.`,...[38,40,42,40].map((e,t)=>D(`g${t}`,14+t*7,46-e/100*36,`blue`,1.6)),...[10,20,30,100].map((e,t)=>D(`f${t}`,62+t*7,46-e/100*36,`gold`,1.6)),A(`m1`,10,31.6,44,31.6,`blue`,{d:!0,w:.5}),A(`m2`,58,31.6,92,31.6,`gold`,{d:!0,w:.5}),k(`t`,50,6,`trung bình = 40 ở cả hai`,{c:`mute`,s:3.2})),M(`GDN khít, Facebook rất rộng: so nhóm phải nhìn cả độ rộng, không chỉ trung bình.`,`GDN is tight, Facebook very wide: comparing groups needs spread, not just means.`,...[38,40,42,40].map((e,t)=>D(`g${t}`,14+t*7,46-e/100*36,`blue`,1.6)),...[10,20,30,100].map((e,t)=>D(`f${t}`,62+t*7,46-e/100*36,`gold`,1.6)),E(`a`,28,8,30,8,`GDN: khít`,{c:`blue`,s:3}),E(`b`,76,8,30,8,`Facebook: rộng`,{c:`red`,s:3}))])},U=(e,t,n=`blue`,r=12,i=8,a=48,o=1.5)=>t.map(([t,s],c)=>D(`${e}${c}`,r+t*i,a-s*o,n,1.5)),ye={"eda-tab":N([M(`Bảng: GDN có 30 người mua trên 100 dòng; cả bảng có 40 người mua.`,`Table: GDN has 30 buyers out of 100 rows; the whole table has 40 buyers.`,E(`a`,28,24,38,14,`GDN: 100 dòng
30 mua`,{c:`blue`}),E(`b`,72,24,38,14,`cả bảng
40 mua`,{c:`mute`})),M(`30 / 100 = 30%: phần dòng GDN có mua (chia theo hàng).`,`30 / 100 = 30%: the share of GDN rows that buy (divide by the row).`,E(`a`,28,24,38,14,`30 mua
trên 100 dòng GDN`,{f:`blue`,c:`blue`}),E(`b`,72,24,38,14,`= 30%`,{c:`blue`,s:6}),j(`x`,48,24,52,24,`mute`)),M(`30 / 40 = 75%: phần người mua đến từ GDN (chia theo cột). Hai phần trăm khác nhau vì mẫu số khác nhau.`,`30 / 40 = 75%: the share of buyers that come from GDN (divide by the column). Different denominators, different percentages.`,E(`a`,28,24,38,14,`30 mua GDN
trên 40 mua cả bảng`,{f:`accent`,c:`accent`}),E(`b`,72,24,38,14,`= 75%`,{c:`accent`,s:6}),j(`x`,48,24,52,24,`mute`),k(`t`,50,46,`luôn nói «phần của cái gì»`,{c:`mute`,s:3.2}))]),"eda-flip":N([M(`Khách mới: TikTok 30%, GDN 20%. Khách cũ: cả hai 90%.`,`New customers: TikTok 30%, GDN 20%. Existing: both 90%.`,F(`b`,[30,20,90,90],[`TikTok mới`,`GDN mới`,`TikTok cũ`,`GDN cũ`],{c:[`accent`,`blue`,`accent`,`blue`],max:100,unit:`%`,base:46,h:30,x0:12,x1:88})),M(`Trong từng nhóm, TikTok không thua GDN.`,`Within each group TikTok is not behind GDN.`,F(`b`,[30,20,90,90],[`TikTok mới`,`GDN mới`,`TikTok cũ`,`GDN cũ`],{c:[`green`,`mute`,`mute`,`mute`],max:100,unit:`%`,base:46,h:30,x0:12,x1:88}),k(`t`,50,6,`mới: 30% > 20%; cũ: 90% = 90%`,{c:`green`,s:3.2})),M(`Gộp lại GDN 70% còn TikTok 40%: GDN thắng chỉ vì phần lớn khách của nó là khách cũ. Luôn xem theo nhóm.`,`Pooled, GDN is 70% and TikTok 40%: GDN wins only because most of its customers are existing ones. Always look by group.`,F(`b`,[40,70],[`TikTok gộp`,`GDN gộp`],{c:[`accent`,`blue`],max:100,unit:`%`,base:46,h:30,x0:25,x1:75}),k(`t`,50,6,`nghịch lý Simpson`,{c:`red`,s:3.6}))]),"pred-proj":N([M(`Đường học trên các tuần chi 2–12 triệu: form = 3 + 2,5 × chi.`,`A line learned on weeks spending 2–12 million: forms = 3 + 2.5 × spend.`,...U(`d`,[[2,8],[3,10],[4,13],[6,17],[8,22],[10,28],[12,33]],`blue`,6,5.5,46,.8),A(`l`,17,39.6,72,46-33*.8,`accent`,{w:.7})),M(`Chi 8 triệu → 23 form: nằm trong vùng đã học, là một dự đoán.`,`Spend 8 million → 23 forms: inside the learned range, a prediction.`,...U(`d`,[[2,8],[3,10],[4,13],[6,17],[8,22],[10,28],[12,33]],`blue`,6,5.5,46,.8),A(`l`,17,39.6,72,46-33*.8,`accent`,{w:.7}),O(`r`,50,46-23*.8,3,`green`),k(`t`,50,8,`8 triệu → 23 form (trong vùng đã học)`,{c:`green`,s:3})),M(`Chi 40 triệu → 103 form chỉ là một giả định: đường không hứa đúng ngoài vùng đã học.`,`Spend 40 million → 103 forms is only an assumption: the line makes no promise outside the learned range.`,...U(`d`,[[2,8],[3,10],[4,13],[6,17],[8,22],[10,28],[12,33]],`blue`,6,5.5,46,.8),A(`l`,17,39.6,72,46-33*.8,`accent`,{w:.7}),A(`e`,72,46-33*.8,94,12,`red`,{w:.7,d:!0}),O(`r`,94,12,3,`red`),k(`t`,60,6,`40 triệu → 103 form (ngoại suy)`,{c:`red`,s:3}))]),"logit-spec":N([M(`20 người rời, 80 người ở lại.`,`20 churners, 80 who stay.`,E(`a`,24,24,28,14,`20 người rời`,{c:`red`}),E(`b`,66,24,52,14,`80 người ở lại`,{c:`blue`})),M(`Gọi trúng 15 trên 20 người rời: độ nhạy = 15/20 = 75%.`,`Catching 15 of 20 churners: sensitivity = 15/20 = 75%.`,E(`a`,24,24,28,14,`rời: gọi trúng 15/20`,{f:`red`,c:`red`,s:3}),E(`b`,66,24,52,14,`80 người ở lại`,{c:`blue`,o:.5}),k(`t`,50,46,`độ nhạy = 75%`,{c:`red`,s:3.6})),M(`Gọi nhầm 8 trong 80 người ở lại: độ đặc hiệu = 72/80 = 90%. Accuracy 87% chủ yếu vì khách ở lại đông.`,`Wrongly flagging 8 of 80 who stay: specificity = 72/80 = 90%. Accuracy of 87% is mostly because stayers are many.`,E(`a`,24,24,28,14,`rời`,{c:`red`,o:.5}),E(`b`,66,24,52,14,`ở lại: gọi đúng 72/80`,{f:`blue`,c:`blue`,s:3}),k(`t`,50,46,`độ đặc hiệu = 90%`,{c:`blue`,s:3.6}))]),"logit-who":N([M(`Mô hình học trên những người nghe máy.`,`The model learned from people who answered the phone.`,E(`a`,28,24,38,16,`học trên:
người nghe máy`,{c:`green`,f:`soft`}),E(`b`,72,24,38,16,`chưa học:
người không nghe`,{c:`red`,d:!0})),M(`Gán xác suất đó cho người không nghe máy là một câu khác mà mô hình chưa được học.`,`Applying that probability to people who did not answer is a different claim the model has not learned.`,E(`a`,28,24,38,16,`học trên:
người nghe máy`,{c:`green`,o:.5}),E(`b`,72,24,38,16,`áp lên người
không nghe`,{c:`red`}),j(`x`,46,24,54,24,`red`)),M(`File chỉ có khách đã đặt lịch cũng không nói được gì về người chưa từng gọi: nói rõ mẫu là ai.`,`A file with only customers who booked says nothing about people who never called: state who the sample is.`,E(`a`,50,24,74,14,`mẫu = khách đã đặt lịch
→ chỉ nói về khách đã đặt lịch`,{c:`accent`,s:3}))]),"logit-drift":N([M(`Tháng 3: GDN chiếm phần lớn form; AUC = 0,82.`,`March: GDN dominates forms; AUC = 0.82.`,F(`b`,[70,20,10],[`GDN`,`TikTok`,`Facebook`],{c:[`blue`,`accent`,`gold`],max:80,unit:`%`,base:44,h:26,x0:15,x1:85}),k(`t`,50,6,`tháng 3 · AUC 0,82`,{c:`blue`,s:3.4})),M(`Tháng 12: TikTok chiếm phần lớn và tỷ lệ rời bỏ cũng đổi.`,`December: TikTok dominates and the churn rate also changes.`,F(`b`,[20,70,10],[`GDN`,`TikTok`,`Facebook`],{c:[`blue`,`accent`,`gold`],max:80,unit:`%`,base:44,h:26,x0:15,x1:85}),k(`t`,50,6,`tháng 12 · cơ cấu đã đổi`,{c:`accent`,s:3.4})),M(`AUC tháng 3 không cấp phép cho tháng 12: chấm lại trên dữ liệu tháng mới.`,`March's AUC does not license December: score again on the new month's data.`,...P(`c`,[`dữ liệu
mới`,`chấm lại`,`dùng hay không`],{y:26,on:1,h:18}))]),"tree-line":N([M(`Số form nhảy lên khi chi vượt 5 triệu, rồi đứng yên.`,`Forms jump when spend exceeds 5 million, then stay flat.`,...[1,2,3,4].map((e,t)=>D(`a${t}`,12+e*8,40,`blue`,1.5)),...[6,7,8,9,10].map((e,t)=>D(`b${t}`,12+e*8,20,`blue`,1.5)),A(`s`,52,8,52,46,`mute`,{d:!0,w:.4})),M(`Đường thẳng lấy một độ dốc và trượt cả hai phía.`,`A straight line takes one slope and slides across both sides.`,...[1,2,3,4].map((e,t)=>D(`a${t}`,12+e*8,40,`blue`,1.5)),...[6,7,8,9,10].map((e,t)=>D(`b${t}`,12+e*8,20,`blue`,1.5)),A(`l`,16,44,94,16,`red`,{w:.7}),A(`s`,52,8,52,46,`mute`,{d:!0,w:.4})),M(`Cây cắt một bậc ở 5 triệu: mỗi bên một mức, khớp hình bậc thang.`,`A tree cuts one step at 5 million: one level per side, matching the staircase.`,...[1,2,3,4].map((e,t)=>D(`a${t}`,12+e*8,40,`blue`,1.5)),...[6,7,8,9,10].map((e,t)=>D(`b${t}`,12+e*8,20,`blue`,1.5)),A(`c1`,14,40,52,40,`green`,{w:.8}),A(`c2`,52,20,94,20,`green`,{w:.8}),A(`c3`,52,40,52,20,`green`,{w:.8}),k(`t`,50,6,`ngoài vết cắt cuối, bậc chỉ là trung bình lá ở mép`,{c:`mute`,s:2.8}))]),"tree-imp":N([M(`«Số lần ghé» và «số lần xem» gần như là một cột viết hai lần.`,`“Visits” and “views” are almost one column written twice.`,...R(`p`,`số lần ghé`,`số lần xem`,{ca:`blue`,cb:`blue`})),M(`Cây có thể dồn hết điểm quan trọng cho một trong hai.`,`The tree may pile all importance on one of the two.`,F(`b`,[90,10],[`số lần ghé`,`số lần xem`],{c:[`accent`,`mute`],max:100,base:46,h:28,x0:25,x1:75})),M(`Điểm này nói cột nào làm nhóm sạch hơn, không nói «lần ghé gây ra form».`,`This score says which column made groups cleaner, not that “visits cause forms”.`,E(`a`,28,24,38,14,`làm nhóm
sạch hơn`,{c:`green`}),E(`b`,72,24,38,14,`gây ra form`,{c:`red`,d:!0}),k(`t`,50,46,`biểu đồ này không nói câu thứ hai`,{c:`red`,s:3.2}))]),"tree-num":N([M(`Cây số có hai lá: «chi dưới 5 triệu» trung bình 12 form, lá còn lại 28 form.`,`A numeric tree has two leaves: “spend under 5 million” averages 12 forms, the other 28.`,E(`a`,28,26,38,14,`lá 1: chi < 5
TB = 12`,{c:`blue`}),E(`b`,72,26,38,14,`lá 2: chi ≥ 5
TB = 28`,{c:`accent`})),M(`Tuần chi 4 triệu được gán đúng 12: không nội suy giữa 12 và 28.`,`A week spending 4 million gets exactly 12: no interpolation between 12 and 28.`,...I(`n`,0,10,{y:40,ticks:[0,5,10]}),A(`a`,L(0,0,10),28,L(5,0,10),28,`blue`,{w:.9}),A(`b`,L(5,0,10),14,L(10,0,10),14,`accent`,{w:.9}),D(`p`,L(4,0,10),28,`red`,2),k(`t`,L(4,0,10),20,`chi 4 → 12`,{c:`red`,s:3})),M(`Tuần chi 40 triệu vẫn nhận số của lá ở mép (28): cây không ngoại suy.`,`A week spending 40 million still receives the edge leaf's value (28): trees do not extrapolate.`,...I(`n`,0,45,{y:40,ticks:[0,5,40]}),A(`a`,L(0,0,45),28,L(5,0,45),28,`blue`,{w:.9}),A(`b`,L(5,0,45),14,L(45,0,45),14,`accent`,{w:.9}),D(`p`,L(40,0,45),14,`red`,2),k(`t`,L(40,0,45),8,`chi 40 → 28`,{c:`red`,s:3}))]),"km-start":N([M(`Hai đám khách, k = 2.`,`Two customer clusters, k = 2.`,...Array.from({length:8},(e,t)=>D(`a${t}`,14+t%4*5,16+Math.floor(t/4)*5,`blue`,1.2)),...Array.from({length:4},(e,t)=>D(`b${t}`,72+t%2*5,36+Math.floor(t/2)*5,`gold`,1.2))),M(`Khởi động ngẫu nhiên có thể thả cả hai tâm vào đám đông: đám kia không có tâm.`,`Random starts may drop both centres in the big cluster: the other has none.`,...Array.from({length:8},(e,t)=>D(`a${t}`,14+t%4*5,16+Math.floor(t/4)*5,`blue`,1.2)),...Array.from({length:4},(e,t)=>D(`b${t}`,72+t%2*5,36+Math.floor(t/2)*5,`gold`,1.2)),O(`c1`,20,19,8,`red`),O(`c2`,25,22,8,`red`)),M(`K-means++ chọn tâm sau ở xa tâm trước nên mỗi đám có một tâm. Vẫn nên chạy vài lần.`,`K-means++ picks the next centre far from the first so each cluster gets one. Still run it a few times.`,...Array.from({length:8},(e,t)=>D(`a${t}`,14+t%4*5,16+Math.floor(t/4)*5,`blue`,1.2)),...Array.from({length:4},(e,t)=>D(`b${t}`,72+t%2*5,36+Math.floor(t/2)*5,`gold`,1.2)),O(`c1`,20,19,8,`green`),O(`c2`,74,38,7,`green`))]),"link-how":N([M(`Khách spa xếp thành một dải theo giờ đến.`,`Spa customers form a strip by arrival hour.`,...Array.from({length:10},(e,t)=>D(`d${t}`,10+t*8.5,30+t%2*2,`blue`,1.6))),M(`Single linkage dính ở chỗ gần nhất nên nối cả dải thành một sợi.`,`Single linkage joins at the closest point so the whole strip becomes one chain.`,...Array.from({length:10},(e,t)=>D(`d${t}`,10+t*8.5,30+t%2*2,`blue`,1.6)),...Array.from({length:9},(e,t)=>A(`l${t}`,10+t*8.5,30+t%2*2,18.5+t*8.5,30+(t+1)%2*2,`red`,{w:.6})),k(`t`,50,12,`single: một sợi dài`,{c:`red`,s:3.4})),M(`Complete chỉ dính khi cả cụm còn chặt, nên dải bị chia thành nhiều cụm; average ở giữa. Không cách nào là sự thật.`,`Complete joins only while the whole cluster is tight, so the strip splits; average sits between. No method is the truth.`,...Array.from({length:10},(e,t)=>D(`d${t}`,10+t*8.5,30+t%2*2,t<5?`blue`:`gold`,1.6)),O(`r1`,27,31,18,`blue`),O(`r2`,69,31,18,`gold`),k(`t`,50,12,`complete: các cụm chặt`,{c:`green`,s:3.4}))]),"db-scan":N([M(`Đa số khách đến trong giờ vàng; vài người đến lúc 2 giờ sáng.`,`Most customers arrive in prime hours; a few come at 2 am.`,...Array.from({length:12},(e,t)=>D(`d${t}`,52+t%4*3.5,22+Math.floor(t/4)*4,`blue`,1.4)),D(`o1`,14,40,`mute`,1.4),D(`o2`,24,12,`mute`,1.4)),M(`Bạn chọn bán kính và số hàng xóm tối thiểu, không chọn k.`,`You choose a radius and a minimum neighbour count, not k.`,...Array.from({length:12},(e,t)=>D(`d${t}`,52+t%4*3.5,22+Math.floor(t/4)*4,`blue`,1.4)),D(`o1`,14,40,`mute`,1.4),D(`o2`,24,12,`mute`,1.4),O(`r`,57,27,4,`accent`),k(`t`,30,52,`bán kính + số hàng xóm tối thiểu`,{c:`accent`,s:3.2})),M(`Đám đặc là cụm; hai điểm thưa được để là nhiễu thay vì ép vào đám.`,`The dense blob is a cluster; the two sparse points stay as noise instead of being forced in.`,...Array.from({length:12},(e,t)=>D(`d${t}`,52+t%4*3.5,22+Math.floor(t/4)*4,`green`,1.4)),O(`cl`,57,27,12,`green`),D(`o1`,14,40,`red`,1.6),D(`o2`,24,12,`red`,1.6),k(`t`,22,50,`nhiễu`,{c:`red`,s:3.2}))]),"gmm-soft":N([M(`Hai nhóm: «gói lẻ» và «gói tháng». Một khách nằm giữa.`,`Two groups: “single sessions” and “monthly plan”. One customer sits between.`,...Array.from({length:6},(e,t)=>D(`a${t}`,14+t%3*4,22+Math.floor(t/3)*4,`blue`,1.4)),...Array.from({length:6},(e,t)=>D(`b${t}`,72+t%3*4,22+Math.floor(t/3)*4,`gold`,1.4)),D(`x`,46,25,`red`,2)),M(`K-means phải chọn một nhóm: khách đó bị xếp hoàn toàn vào một bên.`,`K-means must choose one group: the customer goes wholly to one side.`,...Array.from({length:6},(e,t)=>D(`a${t}`,14+t%3*4,22+Math.floor(t/3)*4,`blue`,1.4)),...Array.from({length:6},(e,t)=>D(`b${t}`,72+t%3*4,22+Math.floor(t/3)*4,`gold`,1.4)),D(`x`,46,25,`red`,2),j(`g`,46,25,30,25,`blue`),k(`t`,50,44,`k-means: 100% «gói lẻ»`,{c:`blue`,s:3.4})),M(`GMM cho hai phần: 0,6 gói lẻ và 0,4 gói tháng. Với đám hình vòng cung, bầu dục này sẽ mô tả sai.`,`GMM gives two shares: 0.6 single and 0.4 monthly. For arc-shaped clusters these ellipses describe them wrongly.`,...Array.from({length:6},(e,t)=>D(`a${t}`,14+t%3*4,22+Math.floor(t/3)*4,`blue`,1.4)),...Array.from({length:6},(e,t)=>D(`b${t}`,72+t%3*4,22+Math.floor(t/3)*4,`gold`,1.4)),D(`x`,46,25,`red`,2),E(`t`,50,44,60,10,`GMM: 0,6 gói lẻ · 0,4 gói tháng`,{c:`red`,s:3}))]),"k-mode":N([M(`Kênh của ba khách trong một cụm: GDN, GDN, Facebook.`,`The channels of three customers in a cluster: GDN, GDN, Facebook.`,...[`GDN`,`GDN`,`Facebook`].map((e,t)=>E(`c${t}`,20+t*30,24,26,12,e,{c:`blue`}))),M(`Mode (giá trị gặp nhiều nhất) là GDN; trung bình của mã kênh không có nghĩa.`,`The mode (most frequent value) is GDN; the mean of channel codes is meaningless.`,...[`GDN`,`GDN`,`Facebook`].map((e,t)=>E(`c${t}`,20+t*30,18,26,12,e,{c:t<2?`green`:`mute`,f:t<2?`green`:`soft`})),E(`m`,50,42,50,10,`mode = GDN`,{c:`green`})),M(`K-modes xử lý cột chữ. Chỉ K-prototype ghép được cột số (chi tiêu) với cột chữ (kênh).`,`K-modes handles text columns. Only K-prototype can mix numbers (spend) with text (channel).`,E(`a`,28,24,38,14,`K-modes
chỉ cột chữ`,{c:`blue`}),E(`b`,72,24,38,14,`K-prototype
số + chữ`,{c:`accent`}))]),"nlp-stem":N([M(`Review có «đã chờ», «chờ mãi» và «sự chờ».`,`Reviews contain “waited”, “waiting forever” and “the wait”.`,...[`đã chờ`,`chờ mãi`,`sự chờ`].map((e,t)=>E(`c${t}`,20+t*30,24,26,12,e,{c:`blue`}))),M(`Cắt đuôi dồn cả ba về một mảnh «chờ»; nhưng cũng có thể dồn hai nghĩa khác nhau vào một mảnh.`,`Stemming folds all three into one piece “wait”; it can also fold two different meanings into one.`,...[`đã chờ`,`chờ mãi`,`sự chờ`].map((e,t)=>E(`c${t}`,20+t*30,12,26,10,e,{c:`blue`,o:.6,s:3})),...[0,1,2].map(e=>j(`a${e}`,20+e*30,18,50,34,`mute`)),E(`s`,50,42,30,10,`mảnh: chờ`,{f:`accent`,c:`accent`})),M(`Lemmatisation thận trọng hơn vì dùng từ điển, nhưng vẫn bỏ đi hình thái như thì và mức độ.`,`Lemmatisation is more careful because it uses a dictionary, but it still drops forms like tense and degree.`,E(`a`,28,24,38,14,`cắt đuôi
thô, nhanh`,{c:`accent`}),E(`b`,72,24,38,14,`lemma
thận trọng hơn`,{c:`green`}))]),"nlp-pmi":N([M(`1.000 review: «chờ» có trong 50, «lâu» trong 100, cả hai cùng có trong 20.`,`1,000 reviews: “wait” in 50, “long” in 100, both together in 20.`,E(`a`,28,24,38,14,`«chờ»: 50
«lâu»: 100`,{c:`blue`}),E(`b`,72,24,38,14,`cả hai: 20`,{c:`accent`})),M(`Nếu độc lập: 50/1000 × 100/1000 × 1000 = 5 câu có cả hai.`,`If independent: 50/1000 × 100/1000 × 1000 = 5 reviews with both.`,F(`b`,[5,20],[`nếu độc lập`,`thực tế`],{c:[`mute`,`accent`],max:24,base:46,h:28,x0:25,x1:75}),k(`t`,30,12,`kỳ vọng 5`,{c:`mute`,s:3})),M(`Thực tế 20 gấp 4 lần kỳ vọng 5: PMI = log₂(4) = 2. Hai chữ đi cùng nhau nhiều hơn mức ngẫu nhiên.`,`Observed 20 is 4× the expected 5: PMI = log₂(4) = 2. The two words co-occur more than chance.`,E(`a`,50,24,74,16,`PMI = log₂(20 / 5) = 2`,{f:`accent`,c:`accent`}),k(`t`,50,46,`đi cùng nhau ≠ nguyên nhân`,{c:`mute`,s:3.2}))]),"git-commit":N([M(`Mỗi commit là một ảnh chụp của dự án.`,`Each commit is a snapshot of the project.`,...P(`c`,[`ảnh 1`,`ảnh 2`,`ảnh 3`],{y:26,on:2,all:!0})),M(`Câu mô tả tốt: «thêm cột kênh vào file form» cho biết ảnh này khác ảnh trước ở đâu.`,`A good message: “add channel column to form file” tells what differs from the previous snapshot.`,...P(`c`,[`ảnh 1`,`ảnh 2`,`ảnh 3`],{y:14,on:2,all:!0,h:9}),E(`m`,50,38,80,12,`«thêm cột kênh vào file form»`,{c:`green`,f:`soft`})),M(`Câu «update» thì không ai biết đổi gì.`,`A message “update” tells nobody what changed.`,...P(`c`,[`ảnh 1`,`ảnh 2`,`ảnh 3`],{y:14,on:2,all:!0,h:9}),E(`m`,50,38,80,12,`«update»`,{c:`red`,d:!0}))]),"git-branch":N([M(`Nhánh chính (main) đang chạy báo cáo.`,`The main branch is running the report.`,A(`m`,10,20,90,20,`blue`,{w:.9}),k(`t`,12,12,`main: báo cáo đang chạy`,{a:`start`,c:`blue`,s:3})),M(`Bạn thử đổi cách tính giá form trên một nhánh riêng; main đứng yên.`,`You try a new form-price formula on a separate branch; main stays still.`,A(`m`,10,20,90,20,`blue`,{w:.9}),A(`b1`,30,20,40,38,`accent`,{w:.9}),A(`b2`,40,38,66,38,`accent`,{w:.9}),k(`t`,52,46,`nhánh thử`,{c:`accent`,s:3})),M(`Chỉ nhập lại khi thử xong và đúng; nhập khi chưa xong, báo cáo sẽ gãy.`,`Merge back only when done and correct; merging early breaks the report.`,A(`m`,10,20,90,20,`blue`,{w:.9}),A(`b1`,30,20,40,38,`accent`,{w:.9}),A(`b2`,40,38,66,38,`accent`,{w:.9}),j(`b3`,66,38,76,22,`green`,{w:.9}),k(`t`,80,34,`nhập khi đã xong`,{c:`green`,s:3}))]),"ens-bag":N([M(`1.000 khách. Mỗi cây rút lại 1.000 dòng, có hoàn lại.`,`1,000 customers. Each tree redraws 1,000 rows with replacement.`,E(`a`,50,24,80,14,`1.000 khách`,{c:`blue`})),M(`Có khách vào túi hai lần, có khách không vào túi của cây này.`,`Some customers enter the bag twice, others do not enter this tree's bag.`,...[`Lan ×2`,`Minh ×1`,`An ×0`].map((e,t)=>E(`c${t}`,20+t*30,24,26,12,e,{c:t===0?`accent`:t===2?`mute`:`blue`,f:t===0?`accent`:`soft`,d:t===2}))),M(`Cây khác thấy một túi hơi khác nên các cây không chép lại nhau.`,`Other trees see a slightly different bag so the trees do not copy each other.`,...[`cây 1`,`cây 2`,`cây 3`].map((e,t)=>E(`c${t}`,20+t*30,20,26,10,e,{c:`green`})),...[`Lan ×2 · An ×0`,`Lan ×0 · An ×1`,`Lan ×1 · An ×3`].map((e,t)=>E(`d${t}`,20+t*30,36,28,10,e,{c:`blue`,s:2.6})))]),"rf-col":N([M(`Nếu cây nào cũng nhìn mọi cột, cột «số lần ghé» luôn thắng.`,`If every tree sees every column, “visits” always wins.`,...[`cây 1`,`cây 2`,`cây 3`].flatMap((e,t)=>[E(`t${t}`,20+t*30,12,24,9,e,{c:`blue`}),E(`c${t}`,20+t*30,34,24,9,`cắt theo ghé`,{c:`accent`,f:`accent`}),j(`a${t}`,20+t*30,17,20+t*30,29,`mute`)])),M(`Mọi cây cắt cùng một chỗ nên đều giống nhau và rừng thành một cây nhân bản.`,`All trees cut at the same place so they match, and the forest is one cloned tree.`,...[`cây 1`,`cây 2`,`cây 3`].flatMap((e,t)=>[E(`t${t}`,20+t*30,12,24,9,e,{c:`blue`}),E(`c${t}`,20+t*30,34,24,9,`cắt theo ghé`,{c:`red`,f:`red`}),j(`a${t}`,20+t*30,17,20+t*30,29,`mute`)]),k(`t`,50,52,`cây giống nhau → rừng vô ích`,{c:`red`,s:3.2})),M(`Mỗi nhát cắt chỉ được nhìn một nhóm cột ngẫu nhiên: có lúc cây phải cắt theo cột khác.`,`Each split sees only a random subset of columns: sometimes a tree must split on another column.`,...[`cây 1`,`cây 2`,`cây 3`].flatMap((e,t)=>[E(`t${t}`,20+t*30,12,24,9,e,{c:`blue`}),E(`c${t}`,20+t*30,34,24,9,[`theo ghé`,`theo chi`,`theo kênh`][t],{c:`green`,f:`green`}),j(`a${t}`,20+t*30,17,20+t*30,29,`mute`)]))]),"imb-trap":N([M(`100 khách: 92 ở lại và 8 rời đi.`,`100 customers: 92 stay and 8 leave.`,F(`b`,[92,8],[`ở lại`,`rời đi`],{c:[`blue`,`red`],max:100,base:46,h:30,x0:25,x1:75})),M(`Mô hình gọi mọi người là «ở lại»: accuracy = 92/100 = 92%.`,`A model that calls everyone “stays”: accuracy = 92/100 = 92%.`,E(`a`,50,24,74,14,`gọi tất cả «ở lại»
accuracy = 92%`,{c:`green`,s:3.4})),M(`Nhưng bạn không giữ được ai trong 8 người rời. Bài rời bỏ không phải bài toán accuracy.`,`But you retain none of the 8 who leave. Churn is not an accuracy problem.`,E(`a`,28,24,38,14,`accuracy 92%`,{c:`green`}),E(`b`,72,24,38,14,`giữ được
0 / 8 người rời`,{c:`red`,f:`red`}),k(`t`,50,46,`đẹp trên giấy, vô ích trên thực tế`,{c:`red`,s:3.2}))]),"imb-fix":N([M(`8 khách rời bị chép thành 16 dòng trước khi chia tập.`,`8 churners are copied into 16 rows before splitting.`,E(`a`,28,24,38,14,`8 người rời`,{c:`red`}),j(`x`,48,24,52,24,`mute`),E(`b`,72,24,38,14,`16 dòng
(8 người)`,{c:`red`,f:`red`})),M(`Cùng một người có thể vừa ở tập học vừa ở tập chấm: điểm đẹp giả.`,`The same person can sit in both train and test: inflated score.`,E(`a`,28,24,38,14,`tập học
Lan (bản 1)`,{c:`blue`}),E(`b`,72,24,38,14,`tập chấm
Lan (bản 2)`,{c:`green`}),k(`t`,50,46,`nhân bản trước khi chia = rò rỉ`,{c:`red`,s:3.2})),M(`Cách an toàn: đổi trọng số (vẫn 8 người nhưng bỏ sót đắt hơn) hoặc đổi ngưỡng; thường thử đổi ngưỡng trước.`,`Safer: change class weights (still 8 people but a miss costs more) or move the threshold; try the threshold first.`,...P(`c`,[`đổi ngưỡng`,`đổi trọng số`,`nhân bản (sau khi chia)`],{y:26,on:0,h:14}))]),"bv-bias":N([M(`Số form theo mức chi là một hình cong.`,`Forms versus spend is a curve.`,...[[1,6],[2,14],[3,22],[4,28],[5,31],[6,32],[7,31],[8,28]].map(([e,t],n)=>D(`d${n}`,10+e*9,46-t,`blue`,1.5))),M(`Đường thẳng trượt cả tập học lẫn tuần mới: đó là lệch (bias).`,`A straight line misses both the training and new weeks: that is bias.`,...[[1,6],[2,14],[3,22],[4,28],[5,31],[6,32],[7,31],[8,28]].map(([e,t],n)=>D(`d${n}`,10+e*9,46-t,`blue`,1.5)),A(`l`,16,40,90,26,`red`,{w:.7}),k(`t`,50,8,`quá thẳng → lệch`,{c:`red`,s:3.4})),M(`Cây rất sâu khớp từng tuần nhiễu: tập học đẹp nhưng tuần mới xấu. Đó là nhảy (variance).`,`A very deep tree fits every noisy week: pretty on training, ugly on new weeks. That is variance.`,...[[1,6],[2,14],[3,22],[4,28],[5,31],[6,32],[7,31],[8,28]].map(([e,t],n)=>D(`d${n}`,10+e*9,46-t,`blue`,1.5)),...[[1,6,2,14],[2,14,3,22],[3,22,4,28],[4,28,5,34],[5,34,6,29],[6,29,7,33],[7,33,8,28]].map(([e,t,n,r],i)=>A(`z${i}`,10+e*9,46-t,10+n*9,46-r,`accent`,{w:.7})),k(`t`,50,8,`khớp từng nhiễu → nhảy`,{c:`accent`,s:3.4}))]),"reg-ridge":N([M(`Chi tiêu tính bằng đồng và bằng triệu đồng cùng nằm trong mô hình.`,`Spend in VND and in millions of VND both sit in the model.`,...R(`p`,`chi (đồng)`,`chi (triệu)`,{ca:`blue`,cb:`blue`})),M(`Không co: hai hệ số giằng co nhau, ví dụ +50 và −48.`,`Without shrinking: the two coefficients fight, for example +50 and −48.`,F(`b`,[50,48],[`+50`,`−48`],{c:[`accent`,`red`],max:55,show:!1,base:46,h:28,x0:25,x1:75}),k(`t`,50,6,`giằng co`,{c:`red`,s:3.4})),M(`Ridge kéo cả hai về gần 0, ví dụ 1,0 và 0,9, và hiếm khi làm một cột thành đúng 0.`,`Ridge pulls both near 0, e.g. 1.0 and 0.9, and rarely makes a column exactly 0.`,F(`b`,[1,.9],[`1,0`,`0,9`],{c:[`green`,`green`],max:55,show:!1,base:46,h:28,x0:25,x1:75}),k(`t`,50,6,`co đều, không về đúng 0`,{c:`green`,s:3.4}))]),"reg-lasso":N([M(`Mô hình có mười cột kênh và hành vi.`,`The model has ten channel and behaviour columns.`,...Array.from({length:10},(e,t)=>E(`c${t}`,12+t%5*19,18+Math.floor(t/5)*14,16,9,`cột ${t+1}`,{c:`blue`,s:2.8}))),M(`Lasso có thể đưa hệ số của vài cột về đúng 0 và giữ lại những cột kia.`,`Lasso can set some coefficients to exactly 0 and keep the others.`,...Array.from({length:10},(e,t)=>E(`c${t}`,12+t%5*19,18+Math.floor(t/5)*14,16,9,`cột ${t+1}`,{c:[1,4,6,8].includes(t)?`mute`:`green`,d:[1,4,6,8].includes(t),o:[1,4,6,8].includes(t)?.4:1,s:2.8}))),M(`Cột về 0 không có nghĩa nó vô dụng ngoài đời, chỉ là mô hình này không cần nó.`,`A column set to 0 is not useless in real life; this model just does not need it.`,E(`a`,28,24,38,14,`hệ số = 0
trong mô hình này`,{c:`mute`,d:!0}),E(`b`,72,24,38,14,`vô dụng ngoài đời?
không nhất thiết`,{c:`red`}))]),"met-reg":N([M(`Ba tuần lệch 2, 2 và 10 form.`,`Three weeks off by 2, 2 and 10 forms.`,F(`b`,[2,2,10],[`tuần 1`,`tuần 2`,`tuần 3`],{c:[`blue`,`blue`,`red`],max:11,base:46,h:28,x0:20,x1:80})),M(`MAE = (2 + 2 + 10) / 3 ≈ 4,67 form: trung bình khoảng lệch.`,`MAE = (2 + 2 + 10) / 3 ≈ 4.67 forms: the average gap.`,F(`b`,[2,2,10],[`tuần 1`,`tuần 2`,`tuần 3`],{c:`blue`,max:11,base:46,h:28,x0:20,x1:80}),A(`m`,8,46-4.67/11*28,92,46-4.67/11*28,`green`,{d:!0,w:.6}),k(`t`,50,6,`MAE ≈ 4,67`,{c:`green`,s:3.4})),M(`RMSE = √((4 + 4 + 100) / 3) = 6,0 form: tuần lệch 10 bị phạt nặng hơn nên kéo RMSE cao hơn MAE.`,`RMSE = √((4 + 4 + 100) / 3) = 6.0 forms: the week off by 10 is penalised harder, pulling RMSE above MAE.`,F(`b`,[2,2,10],[`tuần 1`,`tuần 2`,`tuần 3`],{c:`blue`,max:11,base:46,h:28,x0:20,x1:80}),A(`m`,8,46-4.67/11*28,92,46-4.67/11*28,`green`,{d:!0,w:.5}),A(`r`,8,46-6/11*28,92,46-6/11*28,`red`,{d:!0,w:.7}),k(`t`,50,6,`RMSE 6,0 > MAE 4,67`,{c:`red`,s:3.4}))]),"fe-num":N([M(`Hầu hết tuần chi dưới 5 triệu, có một tuần chi 80 triệu.`,`Most weeks spend under 5 million; one week spends 80 million.`,F(`b`,[2,3,3,4,4,5,80],[``,``,``,``,``,``,`80`],{c:[`blue`,`blue`,`blue`,`blue`,`blue`,`blue`,`red`],max:80,show:!1,base:46,h:32})),M(`Log kéo cái đuôi về: tuần 80 không còn át cả cột.`,`Log pulls the tail in: week 80 no longer dwarfs the column.`,F(`b`,[.7,1.1,1.1,1.4,1.4,1.6,4.4],[``,``,``,``,``,``,`log 80`],{c:[`blue`,`blue`,`blue`,`blue`,`blue`,`blue`,`accent`],max:5,show:!1,base:46,h:32})),M(`Nhưng log(0) không tồn tại: tuần chi 0 phải dùng log(1 + x) hoặc một luật khác.`,`But log(0) does not exist: a zero-spend week needs log(1 + x) or another rule.`,E(`a`,28,24,38,14,`log(0)
không có nghĩa`,{c:`red`,d:!0}),E(`b`,72,24,38,14,`log(1 + x)
có nghĩa với 0`,{c:`green`}))]),"fe-cat":N([M(`Ba kênh: GDN, Facebook, TikTok.`,`Three channels: GDN, Facebook, TikTok.`,...[`GDN`,`Facebook`,`TikTok`].map((e,t)=>E(`c${t}`,20+t*30,24,26,12,e,{c:`blue`}))),M(`Ba cột 0/1 cộng với hệ số chặn: một cột là thừa vì biết hai cột là biết cột thứ ba.`,`Three 0/1 columns plus an intercept: one is redundant, since two columns imply the third.`,...[`GDN 1/0/0`,`FB 0/1/0`,`TikTok 0/0/1`].map((e,t)=>E(`c${t}`,20+t*30,24,26,12,e,{c:`blue`,s:3})),k(`t`,50,44,`cột 3 = 1 − cột 1 − cột 2`,{c:`red`,s:3.2})),M(`Bỏ một kênh làm mốc. Cây quyết định thì có thể giữ cả ba.`,`Drop one channel as the baseline. Decision trees can keep all three.`,...[`GDN (mốc)`,`FB 0/1`,`TikTok 0/1`].map((e,t)=>E(`c${t}`,20+t*30,24,26,12,e,{c:t===0?`mute`:`green`,d:t===0,s:3})))]),"fe-time":N([M(`Cột ngày để nguyên: đường đọc nó như «càng muộn càng nhiều form».`,`A raw date column: a line reads it as “later means more forms”.`,...[1,2,3,4,5,6,7].map((e,t)=>D(`d${t}`,14+e*10,44-e*4,`blue`,1.5)),A(`l`,24,40,84,16,`red`,{w:.7})),M(`Nhưng chủ nhật và thứ hai không phải hai bậc của đường thẳng đó: tuần có chu kỳ.`,`But Sunday and Monday are not two steps on that line: the week is cyclic.`,...[.5,1,.6,.55,.6,.9,1.2].map((e,t)=>E(`w${t}`,14+t*12,40-e*20,9,5,[`T2`,`T3`,`T4`,`T5`,`T6`,`T7`,`CN`][t],{c:`accent`,s:2.8}))),M(`Tách thứ, giờ, tháng nếu đó mới là câu bạn hỏi.`,`Split into weekday, hour, month if that is the question you ask.`,...P(`c`,[`ngày`,`thứ`,`giờ`,`tháng`],{y:26,on:1,h:14}))]),"cv-fold":N([M(`Chia khách thành bốn phần.`,`Split the customers into four folds.`,...[0,1,2,3].map(e=>E(`f${e}`,14+e*24,24,21,12,`phần ${e+1}`,{c:`blue`}))),M(`Mỗi lượt học trên ba phần và chấm phần bị giấu: lượt 1 giấu phần 1.`,`Each round trains on three folds and scores the hidden one: round 1 hides fold 1.`,...[0,1,2,3].map(e=>E(`f${e}`,14+e*24,24,21,12,e===0?`giấu`:`học`,{c:e===0?`accent`:`blue`,f:e===0?`accent`:`soft`}))),M(`RMSE bốn lượt: 5,8, 6,2, 6,0, 6,4 → trung bình 6,1. Chỉnh độ sâu trên chính bốn lần này thì điểm hơi đẹp hơn sự thật.`,`RMSE over four rounds: 5.8, 6.2, 6.0, 6.4 → mean 6.1. Tuning depth on these same four folds makes the score slightly rosier than the truth.`,F(`b`,[5.8,6.2,6,6.4],[`lượt 1`,`lượt 2`,`lượt 3`,`lượt 4`],{c:`blue`,max:7,base:46,h:26,x0:15,x1:85}),k(`t`,50,8,`trung bình = 6,1`,{c:`accent`,s:3.4}))]),"cv-grid":N([M(`Độ sâu thử 2, 4, 8; số cột mỗi nhát cắt thử 2, 4.`,`Depth tries 2, 4, 8; columns per split tries 2, 4.`,...[2,4,8].flatMap((e,t)=>[2,4].map((n,r)=>E(`g${t}${r}`,24+t*26,20+r*14,22,10,`${e} × ${n}`,{c:`blue`,s:3})))),M(`Lưới thử 3 × 2 = 6 cặp, mỗi cặp một điểm.`,`The grid tries 3 × 2 = 6 pairs, one score each.`,...[2,4,8].flatMap((e,t)=>[2,4].map((n,r)=>E(`g${t}${r}`,24+t*26,20+r*14,22,10,`${e} × ${n}`,{c:`green`,f:`green`,s:3})))),M(`Độ sâu 3 không được thử vì bạn không viết ra: lưới không ra khỏi khoảng bạn đặt.`,`Depth 3 is never tried because you did not write it: the grid never leaves your range.`,...[2,4,8].flatMap((e,t)=>[2,4].map((n,r)=>E(`g${t}${r}`,24+t*26,20+r*14,22,10,`${e} × ${n}`,{c:`mute`,o:.5,s:3}))),E(`x`,50,48,50,9,`độ sâu 3: không có trong lưới`,{c:`red`,d:!0,s:3}))]),"ts-order":N([M(`Số form tuần này giống tuần trước hơn là giống một tuần ngẫu nhiên.`,`This week's forms look more like last week's than like a random week.`,...[20,22,25,27,30,32,35,38].map((e,t)=>D(`d${t}`,12+t*10,46-e*.9,`blue`,1.5)),...[20,22,25,27,30,32,35].map((e,t)=>A(`l${t}`,12+t*10,46-e*.9,22+t*10,46-[22,25,27,30,32,35,38][t]*.9,`blue`,{w:.5}))),M(`Xáo các dòng rồi mới học: không còn «tuần tới» để dự báo.`,`Shuffle the rows and then learn: there is no “next week” left to forecast.`,...[30,20,38,25,35,22,32,27].map((e,t)=>D(`d${t}`,12+t*10,46-e*.9,`red`,1.5)),k(`t`,50,8,`đống số không thứ tự`,{c:`red`,s:3.4})),M(`Giữ nguyên thứ tự; học trên quá khứ và chấm trên tương lai của nó.`,`Keep the order; learn on the past and score on its future.`,...P(`c`,[`quá khứ
(học)`,`tương lai
(chấm)`],{y:26,on:1,h:18,x0:25,x1:75}))]),"ts-dep":N([M(`Phần dư của đường form theo mức chi: tuần này cùng dấu với tuần trước suốt một tháng.`,`Residuals of forms-on-spend: this week shares the sign of last week for a whole month.`,...[3,4,3.5,2,1,-1,-2,-3,-2.5,-1].map((e,t)=>D(`d${t}`,8+t*9,26-e*3.2,e>0?`accent`:`blue`,1.5)),A(`z`,6,26,94,26,`mute`,{w:.3})),M(`Các dòng không độc lập: mỗi tuần mang một phần tuần trước.`,`The rows are not independent: each week carries part of the previous week.`,...[3,4,3.5,2,1,-1,-2,-3,-2.5,-1].map((e,t)=>D(`d${t}`,8+t*9,26-e*3.2,e>0?`accent`:`blue`,1.5)),A(`z`,6,26,94,26,`mute`,{w:.3}),...[3,4,3.5,2,1,-1,-2,-3,-2.5].map((e,t)=>A(`l${t}`,8+t*9,26-e*3.2,17+t*9,26-[4,3.5,2,1,-1,-2,-3,-2.5,-1][t]*3.2,`mute`,{w:.4}))),M(`Sai số chuẩn của hệ số vì vậy quá tự tin: đây là một chuỗi, không phải một đống dòng độc lập.`,`So the coefficient's standard error is overconfident: this is a series, not a pile of independent rows.`,E(`a`,28,24,38,14,`sai số chuẩn
tính theo độc lập`,{c:`red`,d:!0}),E(`b`,72,24,38,14,`thực tế: chuỗi
phụ thuộc`,{c:`green`}),k(`t`,50,46,`quá tự tin`,{c:`red`,s:3.6}))])};function W(e,t,n={}){let r=n.x0??8,i=n.x1??92,a=n.base??46,o=n.h??32,s=n.max??Math.max(...t),c=n.min??0,l=e=>r+(e+(n.from??0))/Math.max(1,t.length-1+(n.from??0))*(i-r),u=e=>a-(e-c)/(s-c)*o,d=[];return t.forEach((r,i)=>{d.push(D(`${e}d${i}`,l(i),u(r),n.c??`blue`,1.3)),i>0&&d.push(A(`${e}l${i}`,l(i-1),u(t[i-1]),l(i),u(r),n.c??`blue`,{w:.6}))}),d}var G=(e,t,n,r=`blue`,i=20,a=46,o=3)=>j(e,i,a,i+t*o,a-n*o,r,{w:.8}),K=(e,t=20,n=46)=>[A(`${e}x`,t,n,90,n,`mute`,{w:.3}),A(`${e}y`,t,n,t,4,`mute`,{w:.3})],be={"ts-decomp":N([M(`Hai kiểu mùa: cộng thêm hay nhân lên.`,`Two kinds of season: additive or multiplicative.`,...R(`p`,`cộng
+20 form`,`nhân
×1,4`,{ca:`blue`,cb:`accent`})),M(`Kiểu cộng: tháng lễ luôn thêm khoảng 20 form dù nền cao hay thấp.`,`Additive: a holiday month always adds about 20 forms whether the baseline is high or low.`,F(`b`,[40,60,80,100],[`nền 40`,`lễ`,`nền 80`,`lễ`],{c:[`blue`,`accent`,`blue`,`accent`],max:110,base:46,h:28,x0:15,x1:85}),k(`t`,50,6,`+20 ở cả hai mức nền`,{c:`accent`,s:3.4})),M(`Kiểu nhân: lễ là ×1,4 nên nền gấp đôi thì phần mùa cũng gấp đôi. Chọn theo dữ liệu, đừng đoán từ một năm.`,`Multiplicative: a holiday is ×1.4, so a doubled baseline doubles the seasonal part. Choose from data, not from one year.`,F(`b`,[40,56,80,112],[`nền 40`,`lễ`,`nền 80`,`lễ`],{c:[`blue`,`accent`,`blue`,`accent`],max:115,base:46,h:28,x0:15,x1:85}),k(`t`,50,6,`+16 rồi +32: mùa lớn theo nền`,{c:`accent`,s:3.4}))]),"ts-naive":N([M(`Tuần trước 40 form, nên câu ngây nói tuần này cũng 40.`,`Last week 40 forms, so the naive forecast says this week 40 too.`,E(`a`,28,24,38,14,`tuần trước: 40`,{c:`blue`}),j(`x`,48,24,52,24,`mute`),E(`b`,72,24,38,14,`dự báo ngây: 40`,{c:`accent`})),M(`Mô hình RMSE 9, câu ngây RMSE 6: mô hình tệ hơn câu ngây.`,`Model RMSE 9, naive RMSE 6: the model is worse than the naive line.`,F(`b`,[9,6],[`mô hình`,`ngây`],{c:[`red`,`green`],max:10,base:46,h:28,x0:25,x1:75}),k(`t`,50,6,`chưa đáng dùng`,{c:`red`,s:3.6})),M(`Dữ liệu có mùa năm thì câu ngây có thể là «bằng tuần cùng kỳ năm trước».`,`With yearly seasonality the naive line may be “same as the same week last year”.`,...P(`c`,[`tuần cùng kỳ
năm trước`,`dự báo ngây
tuần này`],{y:26,on:1,h:18,x0:25,x1:75}))]),"ts-sma":N([M(`Ba tuần gần nhất: 20, 24 và 80 form (lễ).`,`The last three weeks: 20, 24 and 80 forms (holiday).`,F(`b`,[20,24,80],[`t−3`,`t−2`,`t−1`],{c:[`blue`,`blue`,`accent`],max:90,base:46,h:30,x0:20,x1:80})),M(`SMA = (20 + 24 + 80) / 3 ≈ 41,3: tuần lễ được cân như một tuần thường.`,`SMA = (20 + 24 + 80) / 3 ≈ 41.3: the holiday week weighs like an ordinary week.`,F(`b`,[20,24,80],[`t−3`,`t−2`,`t−1`],{c:[`blue`,`blue`,`accent`],max:90,base:46,h:30,x0:20,x1:80}),A(`m`,8,46-41.3/90*30,92,46-41.3/90*30,`red`,{d:!0,w:.6}),k(`t`,50,6,`SMA ≈ 41,3`,{c:`red`,s:3.4})),M(`Khi lễ đã qua, 80 vẫn nằm trong cửa sổ một lúc: dự báo phản ứng chậm.`,`After the holiday, 80 stays in the window for a while: the forecast reacts slowly.`,F(`b`,[24,80,22],[`t−3`,`t−2`,`t−1`],{c:[`blue`,`accent`,`blue`],max:90,base:46,h:30,x0:20,x1:80}),A(`m`,8,32,92,32,`red`,{d:!0,w:.6}),k(`t`,50,6,`vẫn cao dù tuần mới thấp`,{c:`red`,s:3.4}))]),"ts-holt":N([M(`Form tăng khoảng 3 mỗi tuần suốt một quý, mức hiện tại 40.`,`Forms rise about 3 per week all quarter; the current level is 40.`,...W(`s`,[28,31,34,37,40],{max:70,x1:50})),M(`Holt cộng độ dốc đó vào các tuần tới.`,`Holt adds that slope to the coming weeks.`,...W(`s`,[28,31,34,37,40],{max:70,x1:50}),A(`f`,50,46-40/70*32,66,23.6,`accent`,{d:!0,w:.7})),M(`Đẩy dự báo thật xa thì dốc vẫn chạy và có thể ra số vô lý; một tháng lễ nhảy một lần không phải dốc cả năm.`,`Push the forecast far out and the slope keeps running into a silly number; a one-off holiday jump is not a yearlong slope.`,...W(`s`,[28,31,34,37,40],{max:70,x1:50}),A(`f`,50,46-40/70*32,92,46-120/70*32,`red`,{d:!0,w:.7}),k(`t`,70,8,`dốc chạy mãi`,{c:`red`,s:3.2}))]),"ts-hw":N([M(`Form theo tuần có chu kỳ 7 (ngày).`,`Weekly-ish forms with a cycle of 7 (days).`,...W(`s`,[20,22,30,28,26,40,38,21,23,31,29,27,41,39],{max:45})),M(`Holt-Winters cần bạn nói 7: nó không tự quyết định là 7 hay 52.`,`Holt-Winters needs you to say 7: it does not decide between 7 and 52.`,...W(`s`,[20,22,30,28,26,40,38,21,23,31,29,27,41,39],{max:45}),A(`a`,8,50,52,50,`accent`,{w:.7}),k(`t`,30,56,`chu kỳ = 7 (do bạn khai)`,{c:`accent`,s:3})),M(`Cần hơn một vòng để thấy hình dạng; một năm dữ liệu tuần thì mùa năm chưa lặp lại lần nào.`,`You need more than one cycle to see the shape; a year of weekly data has not repeated its yearly season even once.`,E(`a`,50,24,76,14,`1 năm dữ liệu tuần
= mùa năm mới xuất hiện 1 lần`,{c:`red`,s:3}))]),"ts-mape":N([M(`Số thật 10, đoán 12: lệch tương đối 2 / 10 = 20%.`,`Actual 10, guess 12: relative error 2 / 10 = 20%.`,E(`a`,28,24,38,14,`thật 10
đoán 12`,{c:`blue`}),E(`b`,72,24,38,14,`2 / 10 = 20%`,{c:`green`,s:4})),M(`Số thật 0, đoán 3: không chia được cho 0, MAPE gãy.`,`Actual 0, guess 3: you cannot divide by 0, MAPE breaks.`,E(`a`,28,24,38,14,`thật 0
đoán 3`,{c:`blue`}),E(`b`,72,24,38,14,`3 / 0
= không có`,{c:`red`,d:!0})),M(`MAE vẫn là 3 form dùng được; RMSE thì phạt tuần lệch lớn hơn.`,`MAE is still a usable 3 forms; RMSE penalises large misses harder.`,...R(`p`,`MAE = 3 form
vẫn dùng được`,`RMSE
phạt lệch lớn`,{ca:`green`,cb:`accent`}))]),"ts-walk":N([M(`Học đến hết tháng 6, chấm tháng 7.`,`Learn through June, score July.`,...[`T1–6`,`T7`].map((e,t)=>E(`f${t}`,30+t*36,24,t===0?50:20,12,e,{c:t===0?`blue`:`accent`,f:t===1?`accent`:`soft`}))),M(`Rồi học đến hết tháng 7, chấm tháng 8: cuốn tới từng bước.`,`Then learn through July, score August: roll forward step by step.`,...[`T1–7`,`T8`].map((e,t)=>E(`f${t}`,30+t*36,24,t===0?50:20,12,e,{c:t===0?`blue`:`accent`,f:t===1?`accent`:`soft`}))),M(`Xáo tuần vào k-fold: mô hình thấy tuần 8 khi đang chấm tuần 7. Đó không còn là dự báo.`,`Shuffling weeks into k-fold: the model sees week 8 while scoring week 7. That is no longer forecasting.`,...[`tuần 8 (học)`,`tuần 7 (chấm)`].map((e,t)=>E(`f${t}`,28+t*44,24,36,12,e,{c:t===0?`red`:`accent`})),j(`x`,46,24,54,24,`red`),k(`t`,50,46,`nhìn thấy tương lai`,{c:`red`,s:3.4}))]),"ts-stat":N([M(`Form dao động quanh 40 suốt năm với độ rộng không đổi: tạm gọi là dừng.`,`Forms oscillate around 40 all year with constant width: call it stationary.`,...W(`s`,[40,44,38,42,37,43,39,41,36,42],{min:20,max:60,c:`green`})),M(`Form tăng đều thì chưa dừng: tâm đi theo thời gian.`,`A steadily rising series is not stationary: its centre moves with time.`,...W(`s`,[20,24,27,33,36,42,45,50,54,58],{min:15,max:60,c:`red`})),M(`Lấy tuần này trừ tuần trước cho các bước thay đổi, ổn định hơn; muốn dự báo mức phải cộng ngược lại.`,`Subtract last week from this week to get the changes, steadier; to forecast levels you add them back.`,...W(`s`,[4,3,6,3,6,3,5,4,4],{min:0,max:10,c:`accent`}),k(`t`,50,8,`phần thay đổi: tạm dừng`,{c:`accent`,s:3.2}))]),"ts-acf":N([M(`Form tuần này tương quan 0,6 với tuần trước và 0,3 với hai tuần trước (ACF).`,`This week's forms correlate 0.6 with last week and 0.3 with two weeks ago (ACF).`,F(`b`,[.6,.3],[`trễ 1`,`trễ 2`],{c:`blue`,max:1,base:46,h:28,x0:30,x1:70}),k(`t`,50,6,`ACF`,{c:`blue`,s:3.6})),M(`PACF hỏi phần còn lại sau khi đã tính các bước gần hơn: trễ 2 có thể còn rất ít.`,`PACF asks what remains after accounting for nearer lags: lag 2 may be tiny.`,F(`b`,[.6,.05],[`trễ 1`,`trễ 2`],{c:`accent`,max:1,base:46,h:28,x0:30,x1:70}),k(`t`,50,6,`PACF`,{c:`accent`,s:3.6})),M(`Chuỗi ngắn hay cho hình nói dối: đừng chọn bậc chỉ vì một cột vượt vạch.`,`Short series often draw a lying picture: do not pick an order just because one bar crosses the line.`,F(`b`,[.6,.3,.25,.1],[`1`,`2`,`3`,`4`],{c:`blue`,max:1,base:46,h:28,x0:20,x1:80}),A(`v`,8,46-.28*28,92,46-.28*28,`red`,{d:!0,w:.5}),k(`t`,50,6,`một cột vượt vạch ≠ một quy luật`,{c:`red`,s:3.2}))]),"ts-ar":N([M(`Giả sử tuần này ≈ 10 + 0,5 × tuần trước.`,`Suppose this week ≈ 10 + 0.5 × last week.`,E(`a`,50,24,74,14,`tuần này = 10 + 0,5 × tuần trước`,{c:`accent`})),M(`Tuần trước 40 form thì dự báo 10 + 0,5 × 40 = 30.`,`If last week was 40, the forecast is 10 + 0.5 × 40 = 30.`,...P(`c`,[`tuần trước
40`,`10 + 0,5 × 40`,`dự báo
30`],{y:26,on:2,h:16})),M(`Hệ số 0,5 không phải «một nửa nguyên nhân»: nó là mức bám trên một chuỗi đã được cho là dừng.`,`The 0.5 is not “half the cause”: it is the stickiness of a series assumed stationary.`,E(`a`,28,24,38,14,`0,5 = mức bám`,{c:`green`}),E(`b`,72,24,38,14,`một nửa nguyên nhân`,{c:`red`,d:!0}))]),"ts-ma":N([M(`Một tuần lỗi tracking làm form hụt 15.`,`One tracking-error week drops forms by 15.`,...W(`s`,[40,41,25,33,38,40,40],{min:15,max:45,c:`blue`}),O(`r`,L(2,0,6),46-10/30*32,4,`red`)),M(`Tuần sau còn vương lại một phần của cú sốc đó: đó là MA trong ARIMA.`,`The week after still carries part of that shock: that is the MA in ARIMA.`,...W(`s`,[40,41,25,33,38,40,40],{min:15,max:45,c:`blue`}),O(`r`,L(2,0,6),46-10/30*32,4,`red`),O(`q`,L(3,0,6),26.8,3,`accent`),k(`t`,50,8,`cú sốc cũ còn vương lại`,{c:`accent`,s:3.2})),M(`Trung bình của ba tuần gần nhất là một việc khác, dù cũng gọi «trung bình trượt». Đừng trộn hai thứ trong báo cáo.`,`The average of the last three weeks is a different thing, though also called “moving average”. Do not mix them in a report.`,...R(`p`,`MA trong ARIMA
cú sốc cũ`,`trung bình trượt
3 tuần gần nhất`,{ca:`accent`,cb:`blue`}))]),"ts-arima":N([M(`Form có hướng đi lên: lấy hiệu một lần (d = 1).`,`Forms trend up: difference once (d = 1).`,...P(`c`,[`chuỗi có hướng`,`lấy hiệu
d = 1`,`AR và MA`],{y:26,on:1,h:16})),M(`Rồi AR và MA chạy trên phần thay đổi: đó là ARIMA. Mùa tuần cần SARIMA với chu kỳ 7.`,`Then AR and MA run on the changes: that is ARIMA. A weekly season needs SARIMA with period 7.`,...P(`c`,[`lấy hiệu`,`AR + MA`,`mùa 7 → SARIMA`],{y:26,on:2,h:14})),M(`Thêm cột khuyến mãi là SARIMAX, và bạn phải biết khuyến mãi tuần tới; nếu chưa biết thì bạn đang đoán luôn cả khuyến mãi.`,`Adding a promo column makes SARIMAX, and you must know next week's promo; if not, you are guessing the promo too.`,E(`a`,28,24,38,14,`SARIMAX
cần cột khuyến mãi`,{c:`blue`}),E(`b`,72,24,38,14,`khuyến mãi tuần tới
chưa biết → đoán`,{c:`red`,d:!0}))]),"math-vec":N([M(`Một tuần: chi 10 triệu, thu 80 form, viết (10, 80).`,`One week: spend 10 million, 80 forms, written (10, 80).`,...K(`a`),G(`v`,10,20,`blue`,20,46,2.5),k(`t`,60,12,`(10, 80)`,{c:`blue`,s:3.6})),M(`Đổi chỗ thành (80, 10) là một tuần hoàn toàn khác: ô đầu là chi tiêu.`,`Swapping to (80, 10) is a totally different week: the first cell is spend.`,...K(`a`),G(`v`,10,20,`mute`,20,46,2.5),G(`w`,20,10/4,`red`,20,46,2.5),k(`t`,60,12,`(80, 10) ≠ (10, 80)`,{c:`red`,s:3.4})),M(`Véctơ là một danh sách số có thứ tự: vị trí mỗi số có nghĩa.`,`A vector is an ordered list of numbers: each position has a meaning.`,...R(`p`,`ô 1
chi tiêu`,`ô 2
số form`,{ca:`blue`,cb:`accent`}))]),"math-add":N([M(`Hai tuần: (10, 80) và (2, 5).`,`Two weeks: (10, 80) and (2, 5).`,...K(`a`),j(`u`,20,46,60,14,`blue`,{w:.8}),j(`v`,20,46,28,36,`accent`,{w:.8})),M(`Cộng từng ô: (10 + 2, 80 + 5) = (12, 85).`,`Add cell by cell: (10 + 2, 80 + 5) = (12, 85).`,E(`a`,50,24,74,14,`(10, 80) + (2, 5) = (12, 85)`,{c:`green`,s:3.6})),M(`Nhân với 2: (20, 160); cả chi tiêu lẫn form cùng gấp đôi, không phải chỉ một ô.`,`Multiply by 2: (20, 160); spend and forms both double, not just one cell.`,E(`a`,50,24,74,14,`2 × (10, 80) = (20, 160)`,{c:`accent`,s:3.6}),k(`t`,50,44,`mọi ô cùng nhân`,{c:`mute`,s:3.2}))]),"math-dot":N([M(`Tuần A là (2, 3) và tuần B là (4, 1).`,`Week A is (2, 3) and week B is (4, 1).`,...K(`a`),j(`u`,20,46,44,22,`blue`,{w:.8}),j(`v`,20,46,68,38,`accent`,{w:.8})),M(`Tích vô hướng = 2 × 4 + 3 × 1 = 11: nhân từng ô rồi cộng.`,`Dot product = 2 × 4 + 3 × 1 = 11: multiply cell by cell, then add.`,E(`a`,50,24,74,14,`2 × 4 + 3 × 1 = 11`,{f:`accent`,c:`accent`,s:4})),M(`Hai trục (1, 0) và (0, 1) cho 1 × 0 + 0 × 1 = 0: không cùng hướng chút nào.`,`The two axes (1, 0) and (0, 1) give 1 × 0 + 0 × 1 = 0: not aligned at all.`,...K(`a`),j(`u`,20,46,50,46,`blue`,{w:.8}),j(`v`,20,46,20,16,`accent`,{w:.8}),k(`t`,60,24,`1×0 + 0×1 = 0`,{c:`green`,s:3.4}))]),"math-mat":N([M(`Ma trận [[2, 0], [0, 1]] và tuần (3, 4).`,`Matrix [[2, 0], [0, 1]] and week (3, 4).`,...R(`p`,`ma trận
[[2,0],[0,1]]`,`tuần
(3, 4)`,{ca:`accent`,cb:`blue`})),M(`Hàng 1 tạo ô 1: 2×3 + 0×4 = 6. Hàng 2 tạo ô 2: 0×3 + 1×4 = 4.`,`Row 1 makes cell 1: 2×3 + 0×4 = 6. Row 2 makes cell 2: 0×3 + 1×4 = 4.`,E(`a`,50,16,74,10,`hàng 1: 2×3 + 0×4 = 6`,{c:`accent`}),E(`b`,50,32,74,10,`hàng 2: 0×3 + 1×4 = 4`,{c:`accent`})),M(`Kết quả (6, 4): chi tiêu được nhân đôi, số form giữ nguyên.`,`Result (6, 4): spend doubled, forms unchanged.`,...K(`a`),j(`u`,20,46,44,14,`mute`,{w:.6,d:!0}),j(`v`,20,46,68,14,`green`,{w:.9}))]),"math-mul":N([M(`A cỡ 2×3 nhân với cột B gồm 3 số: các cỡ khớp nhau (3 = 3).`,`A (2×3) times a column B of 3 numbers: sizes match (3 = 3).`,...R(`p`,`A: 2 hàng
× 3 cột`,`B: 3 số`,{ca:`blue`,cb:`accent`}),k(`t`,50,46,`3 cột = 3 số → làm được`,{c:`green`,s:3.4})),M(`Kết quả có 2 số: mỗi hàng của A gặp cột B ra một số.`,`The result has 2 numbers: each row of A meets column B once.`,...P(`c`,[`A (2×3)`,`× B (3)`,`= 2 số`],{y:26,on:2})),M(`Nhân A với một cột chỉ có 2 số thì không làm được; và AB thường khác BA.`,`Multiplying A by a column of only 2 numbers is impossible; and AB usually differs from BA.`,E(`a`,28,24,38,14,`A × (2 số)
không làm được`,{c:`red`,d:!0}),E(`b`,72,24,38,14,`AB ≠ BA
(thường)`,{c:`accent`}))]),"math-det":N([M(`Ma trận [[2, 0], [0, 1]] biến hình vuông 1×1 thành hình chữ nhật 2×1.`,`Matrix [[2, 0], [0, 1]] turns a 1×1 square into a 2×1 rectangle.`,E(`a`,28,26,14,14,`1×1`,{c:`mute`}),j(`x`,38,26,50,26,`mute`),E(`b`,70,26,28,14,`2×1`,{c:`blue`,f:`soft`})),M(`Định thức 2 × 1 − 0 × 0 = 2: diện tích gấp đôi.`,`Determinant 2 × 1 − 0 × 0 = 2: the area doubles.`,E(`a`,28,26,14,14,`diện tích 1`,{c:`mute`,s:2.8}),E(`b`,70,26,28,14,`diện tích 2`,{f:`green`,c:`green`}),k(`t`,50,46,`det = 2`,{c:`green`,s:3.6})),M(`[[1, 2], [2, 4]]: hàng dưới gấp hai hàng trên, định thức 1×4 − 2×2 = 0, mặt phẳng bị ép thành một đường.`,`[[1, 2], [2, 4]]: the bottom row is twice the top row, determinant 1×4 − 2×2 = 0, the plane is squashed to a line.`,E(`a`,28,26,14,14,`hình vuông`,{c:`mute`,s:2.8}),A(`l`,52,26,90,26,`red`,{w:1.2}),k(`t`,50,46,`det = 0 → ép thành một đường`,{c:`red`,s:3.4}))]),"math-sys":N([M(`Hai đường: x + y = 3 và x − y = 1.`,`Two lines: x + y = 3 and x − y = 1.`,...K(`a`,14,46),A(`l1`,20,12,70,46,`blue`,{w:.7}),A(`l2`,20,46,70,12,`accent`,{w:.7})),M(`Chúng gặp nhau tại (2, 1): nghiệm duy nhất nằm trên cả hai đường.`,`They meet at (2, 1): the unique solution lies on both lines.`,...K(`a`,14,46),A(`l1`,20,12,70,46,`blue`,{w:.7}),A(`l2`,20,46,70,12,`accent`,{w:.7}),O(`r`,45,29,3.5,`green`),k(`t`,45,8,`(2, 1)`,{c:`green`,s:3.6})),M(`Đổi điều kiện sau thành 2x + 2y = 5: hai đường song song, không có điểm nào thỏa cả hai.`,`Change the second to 2x + 2y = 5: the lines are parallel and no point satisfies both.`,...K(`a`,14,46),A(`l1`,20,12,70,46,`blue`,{w:.7}),A(`l2`,20,6,70,40,`red`,{w:.7}),k(`t`,50,54,`song song → vô nghiệm`,{c:`red`,s:3.4}))]),"math-eig":N([M(`Ma trận [[2, 0], [0, 1]] kéo giãn mặt phẳng.`,`The matrix [[2, 0], [0, 1]] stretches the plane.`,...K(`a`),j(`u`,20,46,42,46,`blue`,{w:.8}),j(`v`,20,46,20,24,`accent`,{w:.8})),M(`(1, 0) thành (2, 0): cùng hướng, dài gấp 2 → λ = 2. (0, 1) giữ nguyên → λ = 1.`,`(1, 0) becomes (2, 0): same direction, twice as long → λ = 2. (0, 1) stays → λ = 1.`,...K(`a`),j(`u`,20,46,42,46,`mute`,{w:.6,d:!0}),j(`u2`,20,46,64,46,`green`,{w:.9}),j(`v`,20,46,20,24,`accent`,{w:.9}),k(`t`,60,20,`λ = 2 và λ = 1`,{c:`green`,s:3.4})),M(`(1, 1) thành (2, 1): lệch hướng nên không phải vectơ riêng.`,`(1, 1) becomes (2, 1): the direction changes, so it is not an eigenvector.`,...K(`a`),j(`u`,20,46,42,24,`mute`,{w:.6,d:!0}),j(`u2`,20,46,64,24,`red`,{w:.9}),k(`t`,60,20,`bị quay → không phải`,{c:`red`,s:3.4}))]),"math-deriv":N([M(`form ≈ 20 + 6x − 0,1x², x là số triệu chi: đường cong dần.`,`forms ≈ 20 + 6x − 0.1x², x in millions of spend: a flattening curve.`,...W(`s`,[20,25.9,31.6,37.1,42.4,47.5,52.4,57.1,61.6,65.9,70],{min:15,max:75,c:`blue`})),M(`Độ dốc là 6 − 0,2x: tại x = 0 thêm 1 triệu được khoảng 6 form.`,`The slope is 6 − 0.2x: at x = 0 one more million gives about 6 forms.`,...W(`s`,[20,25.9,31.6,37.1,42.4,47.5,52.4,57.1,61.6,65.9,70],{min:15,max:75,c:`blue`}),A(`t`,8,46-5/60*32,30,46-5/60*32-5.4,`green`,{w:.8}),k(`x`,28,8,`x = 0: dốc 6`,{c:`green`,s:3.2})),M(`Tại x = 10 độ dốc chỉ còn 6 − 2 = 4: thêm một triệu chỉ được khoảng 4 form.`,`At x = 10 the slope is 6 − 2 = 4: one more million adds only about 4 forms.`,...W(`s`,[20,25.9,31.6,37.1,42.4,47.5,52.4,57.1,61.6,65.9,70],{min:15,max:75,c:`blue`}),A(`t`,72,46-55/60*32+2,92,46-55/60*32-8,`red`,{w:.8}),k(`x`,70,8,`x = 10: dốc 4`,{c:`red`,s:3.2}))]),"math-jac":N([M(`Hai nút (chi, email) và hai đầu ra (form, lead đủ điều kiện).`,`Two knobs (spend, email) and two outputs (forms, qualified leads).`,...R(`p`,`nút: chi, email`,`đầu ra: form, lead`,{ca:`blue`,cb:`accent`})),M(`Mỗi đầu ra có một đạo hàm riêng theo mỗi nút: bảng 2×2 gồm bốn ô.`,`Each output has a partial derivative for each knob: a 2×2 table of four cells.`,...[`∂form/∂chi`,`∂form/∂email`,`∂lead/∂chi`,`∂lead/∂email`].map((e,t)=>E(`c${t}`,30+t%2*40,16+Math.floor(t/2)*16,36,12,e,{c:`accent`,s:3}))),M(`Chỉ có một đầu ra thì bảng thu về một hàng: chính là gradient.`,`With a single output the table shrinks to one row: the gradient.`,...[`∂form/∂chi`,`∂form/∂email`].map((e,t)=>E(`c${t}`,30+t*40,24,36,12,e,{c:`green`,s:3})),...[`∂lead/∂chi`,`∂lead/∂email`].map((e,t)=>E(`d${t}`,30+t*40,40,36,12,e,{c:`mute`,d:!0,o:.3,s:3})))]),"math-hess":N([M(`Một nút: f(w) = (w − 2)² có đạo hàm bậc hai 2: cong lên, nên là một đáy.`,`One knob: f(w) = (w − 2)² has second derivative 2: curves up, so it is a bottom.`,...W(`s`,[9,4,1,0,1,4,9],{min:0,max:9,c:`green`,base:44}),k(`t`,50,8,`cong lên → đáy`,{c:`green`,s:3.4})),M(`Hai nút: x² − y² cong lên theo x và cong xuống theo y.`,`Two knobs: x² − y² curves up along x and down along y.`,...W(`a`,[9,4,1,0,1,4,9],{min:0,max:9,c:`blue`,base:36,h:24,x0:8,x1:46}),...W(`b`,[0,5,8,9,8,5,0],{min:0,max:9,c:`red`,base:36,h:24,x0:54,x1:92}),k(`t1`,27,8,`theo x: lên`,{c:`blue`,s:3}),k(`t2`,73,8,`theo y: xuống`,{c:`red`,s:3})),M(`Đạo hàm bậc nhất bằng 0 tại gốc, nhưng đó là một yên ngựa chứ không phải đáy.`,`The first derivative is 0 at the origin, but that is a saddle, not a bottom.`,E(`a`,28,24,38,14,`đạo hàm = 0
tại gốc`,{c:`blue`}),E(`b`,72,24,38,14,`yên ngựa
không phải đáy`,{c:`red`,f:`red`}))]),"math-taylor":N([M(`Tại mức chi 10 triệu, tiếp tuyến dùng độ dốc 4 form mỗi triệu.`,`At spend 10 million the tangent uses a slope of 4 forms per million.`,...W(`s`,[20,25.9,31.6,37.1,42.4,47.5,52.4,57.1,61.6,65.9,70],{min:15,max:100,c:`blue`})),M(`Thêm 0,2 triệu thì tiếp tuyến gần đúng sát đường cong.`,`Add 0.2 million and the tangent is close to the curve.`,...W(`s`,[20,25.9,31.6,37.1,42.4,47.5,52.4,57.1,61.6,65.9,70],{min:15,max:100,c:`blue`}),A(`t`,60,34.83764705882353,92,46-(65.9-15)/85*32-11,`green`,{w:.8}),O(`r`,60,46-(65.9-15)/85*32,3,`green`)),M(`Nhảy thêm 20 triệu thì đường bậc hai đã cong đi, và tiếp tuyến cho số lớn hơn nhiều so với thực tế.`,`Jump another 20 million and the quadratic has bent away; the tangent gives a much larger number than reality.`,...W(`s`,[20,25.9,31.6,37.1,42.4,47.5,52.4,57.1,61.6,65.9,70],{min:15,max:100,c:`blue`,x1:60}),A(`t`,40,32.83764705882353,94,8,`red`,{w:.8,d:!0}),k(`x`,70,54,`ở xa: tiếp tuyến lệch`,{c:`red`,s:3.2}))]),"ds-type":N([M(`Ba kiểu: số (chi tiêu), chữ (kênh), chữ có thứ bậc (số sao).`,`Three types: number (spend), text (channel), ordered text (stars).`,...[[`số`,`chi tiêu`],[`chữ`,`kênh`],[`chữ có
thứ bậc`,`1–5 sao`]].map(([e,t],n)=>E(`c${n}`,18+n*32,24,28,18,`${e}\n${t}`,{c:[`accent`,`blue`,`gold`][n],s:3}))),M(`Mã hóa Google, Meta, TikTok thành 1, 2, 3 thì thứ tự 1 < 2 < 3 là do bạn tự gán.`,`Encoding Google, Meta, TikTok as 1, 2, 3 makes 1 < 2 < 3 an order you invented.`,...[`Google = 1`,`Meta = 2`,`TikTok = 3`].map((e,t)=>E(`c${t}`,20+t*30,24,26,12,e,{c:`blue`,s:3}))),M(`«Trung bình mã kênh» là câu vô nghĩa: 2 không phải kênh nào cả.`,`“Mean channel code” is meaningless: 2 is not a channel.`,E(`a`,50,24,70,14,`TB(1, 2, 3) = 2 = ?`,{c:`red`,d:!0}))]),"ds-center":N([M(`Tám tuần: 2, 4, 4, 4, 5, 5, 7, 9.`,`Eight weeks: 2, 4, 4, 4, 5, 5, 7, 9.`,F(`b`,[2,4,4,4,5,5,7,9],[`2`,`4`,`4`,`4`,`5`,`5`,`7`,`9`],{c:`blue`,max:9,show:!1,base:44,h:28})),M(`Trung bình = 40 / 8 = 5; trung vị = (4 + 5) / 2 = 4,5.`,`Mean = 40 / 8 = 5; median = (4 + 5) / 2 = 4.5.`,F(`b`,[2,4,4,4,5,5,7,9],[`2`,`4`,`4`,`4`,`5`,`5`,`7`,`9`],{c:`blue`,max:9,show:!1,base:44,h:28}),A(`m`,8,44-5/9*28,92,44-5/9*28,`accent`,{d:!0,w:.6}),A(`d`,8,30,92,30,`green`,{d:!0,w:.6}),k(`t`,50,6,`TB 5 · trung vị 4,5: gần nhau`,{c:`mute`,s:3.2})),M(`Thêm một giá trị cực đoan 90: trung bình nhảy lên, trung vị gần như đứng yên.`,`Add an extreme value 90: the mean jumps, the median barely moves.`,F(`b`,[2,4,4,4,5,5,7,90],[`2`,`4`,`4`,`4`,`5`,`5`,`7`,`90`],{c:[`blue`,`blue`,`blue`,`blue`,`blue`,`blue`,`blue`,`red`],max:90,show:!1,base:44,h:28}),k(`t`,50,6,`TB 15,1 · trung vị 4,5`,{c:`red`,s:3.4}))]),"ds-mode":N([M(`Dãy 2, 4, 4, 4, 5, 5, 7, 9: đếm số lần mỗi giá trị xuất hiện.`,`The series 2, 4, 4, 4, 5, 5, 7, 9: count how often each value appears.`,F(`b`,[1,3,2,1,1],[`2`,`4`,`5`,`7`,`9`],{c:`blue`,max:4,base:46,h:28,x0:20,x1:80})),M(`Số 4 xuất hiện 3 lần, nhiều nhất: mode là 4.`,`The value 4 appears 3 times, most often: the mode is 4.`,F(`b`,[1,3,2,1,1],[`2`,`4`,`5`,`7`,`9`],{c:[`blue`,`accent`,`blue`,`blue`,`blue`],max:4,base:46,h:28,x0:20,x1:80}),k(`t`,50,6,`mode = 4`,{c:`accent`,s:3.6})),M(`Nếu 5 cũng xuất hiện 3 lần thì có hai mode. Với cột kênh, mode là kênh có nhiều khách nhất.`,`If 5 also appeared 3 times there would be two modes. For a channel column the mode is the channel with the most customers.`,F(`b`,[400,550,250],[`GDN`,`Facebook`,`TikTok`],{c:[`blue`,`accent`,`blue`],max:600,base:46,h:28,x0:20,x1:80}),k(`t`,50,6,`mode = Facebook`,{c:`accent`,s:3.4}))]),"ds-q":N([M(`Dãy đã sắp: 2, 4, 4, 4 | 5, 5, 7, 9; chia làm nửa dưới và nửa trên.`,`Sorted: 2, 4, 4, 4 | 5, 5, 7, 9; split into a lower and an upper half.`,F(`b`,[2,4,4,4,5,5,7,9],[`2`,`4`,`4`,`4`,`5`,`5`,`7`,`9`],{c:[`blue`,`blue`,`blue`,`blue`,`gold`,`gold`,`gold`,`gold`],max:9,show:!1,base:44,h:28})),M(`Trung vị mỗi nửa: Q1 = 4 và Q3 = 6; trung vị cả dãy Q2 = 4,5.`,`Median of each half: Q1 = 4 and Q3 = 6; the overall median Q2 = 4.5.`,F(`b`,[2,4,4,4,5,5,7,9],[`2`,`4`,`4`,`4`,`5`,`5`,`7`,`9`],{c:[`blue`,`blue`,`blue`,`blue`,`gold`,`gold`,`gold`,`gold`],max:9,show:!1,base:44,h:28}),k(`t`,50,6,`Q1 = 4 · Q2 = 4,5 · Q3 = 6`,{c:`accent`,s:3.4})),M(`IQR = Q3 − Q1 = 6 − 4 = 2. Phần mềm khác có thể cắt lệch một chút.`,`IQR = Q3 − Q1 = 6 − 4 = 2. Other software may cut slightly differently.`,E(`a`,50,24,74,14,`IQR = 6 − 4 = 2`,{f:`accent`,c:`accent`,s:4}),k(`t`,50,46,`ghi rõ cách cắt`,{c:`mute`,s:3.2}))]),"ds-var":N([M(`Dãy 2, 4, 4, 4, 5, 5, 7, 9 có trung bình 5.`,`The series has mean 5.`,F(`b`,[2,4,4,4,5,5,7,9],[`2`,`4`,`4`,`4`,`5`,`5`,`7`,`9`],{c:`blue`,max:9,show:!1,base:44,h:28}),A(`m`,8,44-5/9*28,92,44-5/9*28,`accent`,{d:!0,w:.6})),M(`Bình phương độ lệch: 9, 1, 1, 1, 0, 0, 4, 16 → tổng 32.`,`Squared deviations: 9, 1, 1, 1, 0, 0, 4, 16 → sum 32.`,F(`b`,[9,1,1,1,0,0,4,16],[`2`,`4`,`4`,`4`,`5`,`5`,`7`,`9`],{c:`gold`,max:16,base:44,h:28}),k(`t`,50,6,`tổng = 32`,{c:`accent`,s:3.6})),M(`Mẫu chia n − 1: 32 / 7 ≈ 4,57. Nếu có toàn bộ tổng thể, chia n: 32 / 8 = 4.`,`Sample divides by n − 1: 32 / 7 ≈ 4.57. With the whole population divide by n: 32 / 8 = 4.`,...R(`p`,`mẫu: 32 / 7
≈ 4,57`,`tổng thể: 32 / 8
= 4`,{ca:`blue`,cb:`accent`}))]),"ds-sd":N([M(`Phương sai mẫu là 4,57 form²: đơn vị là bình phương.`,`Sample variance is 4.57 forms²: the unit is squared.`,E(`a`,50,24,60,14,`phương sai = 4,57 form²`,{c:`gold`,s:3.6})),M(`Độ lệch chuẩn = √4,57 ≈ 2,14 form: về lại đơn vị gốc.`,`Standard deviation = √4.57 ≈ 2.14 forms: back to the original unit.`,...P(`c`,[`4,57 form²`,`căn bậc hai`,`2,14 form`],{y:26,on:2})),M(`Báo cáo «độ rộng là 4,57 form» là sai đơn vị: phải là 2,14 form.`,`Reporting “the spread is 4.57 forms” is the wrong unit: it should be 2.14 forms.`,E(`a`,28,24,38,14,`4,57 form
(sai đơn vị)`,{c:`red`,d:!0}),E(`b`,72,24,38,14,`2,14 form
(đúng)`,{c:`green`}))]),"ds-cov":N([M(`Ba tuần: chi 1, 2, 3 triệu; form 2, 2, 5. Trung bình chi 2, form 3.`,`Three weeks: spend 1, 2, 3 million; forms 2, 2, 5. Mean spend 2, forms 3.`,...[[1,2],[2,2],[3,5]].map(([e,t],n)=>D(`d${n}`,20+e*18,46-t*7,`blue`,1.8)),A(`mx`,56,8,56,46,`mute`,{d:!0,w:.3}),A(`my`,12,25,90,25,`mute`,{d:!0,w:.3})),M(`Tích hai độ lệch từng tuần: (−1)(−1) = 1, 0 × (−1) = 0, (1)(2) = 2 → tổng 3.`,`Product of the two deviations per week: (−1)(−1) = 1, 0 × (−1) = 0, (1)(2) = 2 → sum 3.`,...[[1,2],[2,2],[3,5]].map(([e,t],n)=>D(`d${n}`,20+e*18,46-t*7,`blue`,1.8)),E(`a`,50,8,70,9,`1 + 0 + 2 = 3`,{c:`accent`,s:3.4})),M(`Hiệp phương sai mẫu = 3 / 2 = 1,5 (triệu × form). Dương: cùng phía trung bình.`,`Sample covariance = 3 / 2 = 1.5 (million × forms). Positive: same side of the means.`,E(`a`,50,24,74,14,`cov = 3 / (n − 1) = 1,5`,{f:`accent`,c:`accent`,s:3.8}),k(`t`,50,46,`đơn vị: triệu × form`,{c:`mute`,s:3.2}))]),"ds-corr":N([M(`Với chi và form ở bài trước: cov = 1,5, độ lệch chuẩn chi = 1, form = √3.`,`With spend and forms from before: cov = 1.5, SD of spend = 1, of forms = √3.`,E(`a`,50,24,74,14,`cov = 1,5 · sd chi = 1 · sd form = √3`,{c:`blue`,s:3.2})),M(`r = 1,5 / (1 × √3) ≈ 0,87: không còn đơn vị.`,`r = 1.5 / (1 × √3) ≈ 0.87: unit-free.`,E(`a`,50,24,74,14,`r = 1,5 / √3 ≈ 0,87`,{f:`accent`,c:`accent`,s:4})),M(`Đổi chi sang đồng thì r vẫn là 0,87; nhưng ba điểm là quá ít, và r không phải nguyên nhân.`,`Switching spend to VND, r is still 0.87; but three points are too few, and r is not causation.`,...R(`p`,`triệu hay đồng
r = 0,87`,`3 điểm: quá ít
để báo cáo`,{ca:`green`,cb:`red`}))])},xe={...me,...he,..._e,...ve,...ye,...be};function q(e,t,n,r){return{name:e,c:t,r:n,m:r}}function J(e,t,n,r){return{vi:e,en:t,code:r,t:n}}var Y=(e,t={})=>q(`bộ nhớ`,[`tên`,`giá trị`],e,t),X=(e={})=>q(`df`,[``,`channel`,`spend`],[[`a`,`GDN`,8],[`b`,`Meta`,12],[`c`,`TikTok`,6]],e),Se={"py-run":[J(`Python đọc từ trên xuống. Dòng 1 dùng cpl khi chưa ai tạo nó nên báo lỗi.`,`Python reads top to bottom. Line 1 uses cpl before anyone created it, so it errors.`,[Y([[`cpl`,`chưa có`]],{bad:[0]})],`print(cpl)      # dòng 1: NameError
cpl = 8 / 24    # dòng 2`),J(`Đảo thứ tự: tạo cpl trước, dùng sau. Bộ nhớ có tên cpl nên dòng print chạy được.`,`Swap the order: create cpl first, use it after. The memory holds the name cpl, so print works.`,[Y([[`cpl`,.333]],{add:[0]})],`cpl = 8 / 24    # dòng 1: tạo tên
print(cpl)      # dòng 2: dùng tên`)],"py-type":[J(`Với số nguyên, + là cộng.`,`With integers, + adds.`,[q(`biểu thức`,[`biểu thức`,`kết quả`,`kiểu`],[[`3 + 4`,7,`int`]],{rows:[0]})]),J(`Với chuỗi, + là nối. «3» + «4» ra «34», không phải 7.`,`With strings, + joins. "3" + "4" gives "34", not 7.`,[q(`biểu thức`,[`biểu thức`,`kết quả`,`kiểu`],[[`3 + 4`,7,`int`],[`"3" + "4"`,`"34"`,`str`],[`"3" * 2`,`"33"`,`str`]],{rows:[1,2]})]),J(`Trộn số với chuỗi thì Python từ chối, vì kiểu quyết định phép nào hợp lệ.`,`Mix a number with a string and Python refuses, because the type decides which operation is valid.`,[q(`biểu thức`,[`biểu thức`,`kết quả`,`kiểu`],[[`3 + 4`,7,`int`],[`"3" + "4"`,`"34"`,`str`],[`3 + "4"`,`TypeError`,`—`]],{bad:[2]})])],"py-op":[J(`Một dấu = là gán: đặt tên x vào ô nhớ giá trị 5.`,`One = assigns: it puts the name x on a memory slot holding 5.`,[Y([[`x`,5]],{add:[0]})],`x = 5`),J(`Hai dấu == là so sánh: hỏi «x có bằng 5 không?» và trả về True. x không đổi.`,`Two == compare: they ask whether x equals 5 and return True. x does not change.`,[Y([[`x`,5],[`x == 5`,`True`]],{cells:[[1,1]]})],`x == 5`),J(`So sánh với 6 ra False, và x vẫn là 5. Chỉ dấu = mới làm bộ nhớ đổi.`,`Comparing with 6 gives False, and x is still 5. Only = changes memory.`,[Y([[`x`,5],[`x == 6`,`False`]],{cells:[[1,1]]})],`x == 6`)],"py-if":[J(`Với spend = 12, nhánh if đúng nên chạy. Các nhánh sau không được xét.`,`With spend = 12, the if branch is true so it runs. The later branches are not even checked.`,[q(`nhánh`,[`nhánh`,`điều kiện`,`chạy?`],[[`if`,`spend >= 10`,`chạy`],[`elif`,`spend >= 6`,`bỏ qua`],[`else`,`(còn lại)`,`bỏ qua`]],{rows:[0],dim:[1,2]})],`spend = 12
if spend >= 10: tier = 'cao'
elif spend >= 6: tier = 'vừa'
else: tier = 'thấp'`),J(`Với spend = 8, if sai nên xét tiếp: elif đúng và chạy. Else bỏ qua.`,`With spend = 8, if is false so it checks on: elif is true and runs. Else is skipped.`,[q(`nhánh`,[`nhánh`,`điều kiện`,`chạy?`],[[`if`,`spend >= 10`,`sai`],[`elif`,`spend >= 6`,`chạy`],[`else`,`(còn lại)`,`bỏ qua`]],{rows:[1],dim:[0,2]})],`spend = 8`),J(`Với spend = 4, hai điều kiện đều sai nên else chạy. Luôn đúng một nhánh.`,`With spend = 4, both conditions fail so else runs. Exactly one branch runs.`,[q(`nhánh`,[`nhánh`,`điều kiện`,`chạy?`],[[`if`,`spend >= 10`,`sai`],[`elif`,`spend >= 6`,`sai`],[`else`,`(còn lại)`,`chạy`]],{rows:[2],dim:[0,1]})],`spend = 4`)],"py-loop":[J(`for đi qua từng phần tử của danh sách, lần lượt một. Bắt đầu: total = 0.`,`for walks through each element of a list, one by one. Start: total = 0.`,[q(`vòng lặp`,[`vòng`,`spend`,`total`],[[`—`,`—`,0]])],`total = 0
for spend in [8, 10, 12]:
    total = total + spend`),J(`Vòng 1: spend = 8, total thành 8. Vòng 2: spend = 10, total thành 18.`,`Turn 1: spend = 8, total becomes 8. Turn 2: spend = 10, total becomes 18.`,[q(`vòng lặp`,[`vòng`,`spend`,`total`],[[1,8,8],[2,10,18]],{add:[0,1]})]),J(`Vòng 3: spend = 12, total thành 30. Hết phần tử thì for tự dừng.`,`Turn 3: spend = 12, total becomes 30. When the elements run out, for stops by itself.`,[q(`vòng lặp`,[`vòng`,`spend`,`total`],[[1,8,8],[2,10,18],[3,12,30]],{add:[2]})]),J(`while thì khác: nó lặp tới khi điều kiện sai. Quên đổi spend thì điều kiện mãi đúng và không bao giờ dừng.`,`while is different: it repeats until the condition is false. Forget to change spend and the condition stays true forever.`,[q(`vòng lặp`,[`vòng`,`spend < 10 ?`],[[1,`đúng`],[2,`đúng`],[3,`đúng`],[`…`,`đúng mãi`]],{bad:[3]})],`spend = 8
while spend < 10:
    print(spend)   # quên tăng spend`)],"py-fn":[J(`Hàm nhận hai số và trả về s / f. return là thứ người gọi nhận lại.`,`The function takes two numbers and returns s / f. return is what the caller gets back.`,[Y([[`cpl(8, 24)`,.333]],{cells:[[0,1]]})],`def cpl(s, f):
    return s / f

x = cpl(8, 24)`),J(`Thiếu return thì hàm vẫn chạy nhưng không trả gì: người gọi nhận None.`,`Without return the function still runs but hands nothing back: the caller gets None.`,[Y([[`cpl(8, 24)`,.333],[`cpl_bad(8, 24)`,`None`]],{bad:[1]})],`def cpl_bad(s, f):
    s / f           # tính xong rồi bỏ

y = cpl_bad(8, 24)   # y là None`)],"py-str":[J(`Một chuỗi s là «Tet Sale». Gọi .upper() trả về một chuỗi mới viết hoa.`,`A string s is Tet Sale. Calling .upper() returns a new uppercase string.`,[Y([[`s`,`Tet Sale`],[`s.upper()`,`TET SALE`]],{add:[1]})],`s = "Tet Sale"
s.upper()`),J(`Nhưng s vẫn là «Tet Sale». Chuỗi cũ không tự đổi.`,`But s is still Tet Sale. The old string does not change by itself.`,[Y([[`s`,`Tet Sale`]],{cells:[[0,1]]})],`print(s)   # Tet Sale`),J(`Muốn giữ kết quả thì gán lại tên.`,`To keep the result, assign it back to a name.`,[Y([[`s`,`TET SALE`]],{cells:[[0,1]]})],`s = s.upper()`)],"py-list":[J(`Danh sách có thứ tự. Chỉ số bắt đầu từ 0, không phải từ 1.`,`A list has an order. Indexes start at 0, not 1.`,[q(`spend = [8, 10, 12]`,[`chỉ số`,`giá trị`],[[0,8],[1,10],[2,12]])]),J(`spend[0] là phần tử đầu tiên: 8.`,`spend[0] is the first element: 8.`,[q(`spend = [8, 10, 12]`,[`chỉ số`,`giá trị`],[[0,8],[1,10],[2,12]],{cells:[[0,1]]})],`spend[0]   → 8`),J(`spend[-1] đếm từ cuối: 12. spend[3] không có nên báo IndexError.`,`spend[-1] counts from the end: 12. spend[3] does not exist so it raises IndexError.`,[q(`spend = [8, 10, 12]`,[`chỉ số`,`giá trị`],[[0,8],[1,10],[2,12],[3,`IndexError`]],{cells:[[2,1]],bad:[3]})],`spend[-1]  → 12
spend[3]   → IndexError`),J(`List sửa được: gán lại một ô, hoặc thêm vào cuối bằng append.`,`A list can be edited: assign a cell, or add to the end with append.`,[q(`spend`,[`chỉ số`,`giá trị`],[[0,8],[1,15],[2,12],[3,20]],{cells:[[1,1]],add:[3]})],`spend[1] = 15
spend.append(20)`)],"py-dict":[J(`Dictionary tra giá trị theo khóa: kênh GDN có chi tiêu 8.`,`A dictionary looks up a value by key: channel GDN has spend 8.`,[q(`d`,[`khóa`,`giá trị`],[[`GDN`,8],[`Meta`,12]],{cols:[0]})],`d = {"GDN": 8, "Meta": 12}
d["GDN"]   → 8`),J(`Hỏi khóa không có: d["TikTok"] báo KeyError.`,`Ask for a missing key: d["TikTok"] raises KeyError.`,[q(`d`,[`khóa`,`giá trị`],[[`GDN`,8],[`Meta`,12],[`TikTok`,`KeyError`]],{bad:[2]})],`d["TikTok"]   → KeyError`),J(`get thì chịu trả về giá trị mặc định thay vì lỗi: None, hoặc 0 nếu bạn nói.`,`get is willing to return a default instead of an error: None, or 0 if you say so.`,[q(`d`,[`biểu thức`,`kết quả`],[[`d.get("TikTok")`,`None`],[`d.get("TikTok", 0)`,0]],{rows:[1]})])],"py-tup":[J(`Tuple cũng có thứ tự, viết bằng ngoặc tròn.`,`A tuple also has an order, written with round brackets.`,[q(`t = ("GDN", 8)`,[`chỉ số`,`giá trị`],[[0,`GDN`],[1,8]])]),J(`Đọc t[1] thì được 8. Nhưng gán t[1] = 9 báo TypeError: tuple không cho sửa từng ô.`,`Reading t[1] gives 8. But assigning t[1] = 9 raises TypeError: a tuple does not allow editing a cell.`,[q(`t = ("GDN", 8)`,[`chỉ số`,`giá trị`],[[0,`GDN`],[1,8]],{bad:[1]})],`t[1]     → 8
t[1] = 9 → TypeError`),J(`Muốn đổi thì tạo tuple mới, hoặc dùng list nếu cần sửa.`,`To change it, build a new tuple, or use a list if you need to edit.`,[q(`t`,[`chỉ số`,`giá trị`],[[0,`GDN`],[1,9]],{add:[1]})],`t = (t[0], 9)`)],"py-set":[J(`Một danh sách có GDN hai lần.`,`A list with GDN twice.`,[q(`list`,[`vị trí`,`giá trị`],[[0,`GDN`],[1,`Meta`],[2,`GDN`]],{rows:[0,2]})],`ch = ["GDN", "Meta", "GDN"]`),J(`set(ch) giữ mỗi giá trị một lần. Còn hai phần tử.`,`set(ch) keeps each value once. Two elements remain.`,[q(`set`,[`giá trị`],[[`GDN`],[`Meta`]],{add:[0,1]})],`set(ch)   → {"GDN", "Meta"}`),J(`Set không có vị trí, nên không hứa thứ tự và không có s[0]. Dùng nó để hỏi «có hay không» và đếm giá trị khác nhau.`,`A set has no position, so no order promise and no s[0]. Use it to ask is it in there and to count distinct values.`,[q(`set`,[`biểu thức`,`kết quả`],[[`"GDN" in s`,`True`],[`len(s)`,2],[`s[0]`,`TypeError`]],{bad:[2]})])],"py-np":[J(`Mảng NumPy là một hình chữ nhật số, mọi ô cùng một kiểu. Đây là mảng 2 dòng 2 cột.`,`A NumPy array is a rectangle of numbers, every cell of one type. This is 2 rows by 2 columns.`,[q(`a`,[``,`cột 0`,`cột 1`],[[`dòng 0`,8,24],[`dòng 1`,6,12]])],`a = np.array([[8, 24], [6, 12]])`),J(`sum(axis=0) cộng theo từng cột, ra hai số.`,`sum(axis=0) adds down each column, giving two numbers.`,[q(`a`,[``,`cột 0`,`cột 1`],[[`dòng 0`,8,24],[`dòng 1`,6,12],[`a.sum(axis=0)`,14,36]],{cols:[1,2],rows:[2]})],`a.sum(axis=0)   → [14, 36]`),J(`Trộn số với chữ thì cả mảng bị ép thành chữ. Lúc đó không cộng được nữa.`,`Mix numbers with text and the whole array is forced to text. You can no longer add.`,[q(`np.array([8, "GDN"])`,[`phần tử`,`giá trị`,`kiểu`],[[0,`8`,`chữ`],[1,`GDN`,`chữ`]],{bad:[0,1]})])],"py-ser":[J(`Hai Series có nhãn (index) khác nhau: s1 có a, b, c; s2 có b, c, d.`,`Two Series with different labels (index): s1 has a, b, c; s2 has b, c, d.`,[q(`s1`,[`nhãn`,`giá trị`],[[`a`,1],[`b`,2],[`c`,3]]),q(`s2`,[`nhãn`,`giá trị`],[[`b`,10],[`c`,20],[`d`,30]])]),J(`s1 + s2 cộng theo nhãn, không theo vị trí mắt nhìn. b và c có ở cả hai nên cộng được. a và d chỉ có một bên nên ra NaN.`,`s1 + s2 adds by label, not by position. b and c are in both so they add. a and d are in only one so they give NaN.`,[q(`s1 + s2`,[`nhãn`,`kết quả`],[[`a`,`NaN`],[`b`,12],[`c`,23],[`d`,`NaN`]],{rows:[1,2],bad:[0,3]})],`s1 + s2`)],"py-frame":[J(`DataFrame có nhãn dòng (a, b, c) và có vị trí (0, 1, 2). Hai thứ này khác nhau.`,`A DataFrame has row labels (a, b, c) and positions (0, 1, 2). They are different things.`,[X()]),J(`loc dùng nhãn: df.loc["b"] là dòng có nhãn b.`,`loc uses labels: df.loc["b"] is the row labeled b.`,[X({rows:[1]})],`df.loc["b"]`),J(`iloc dùng vị trí: df.iloc[1] là dòng ở vị trí 1. Hôm nay trùng, nhưng sau khi lọc hay xếp lại thì không còn trùng.`,`iloc uses position: df.iloc[1] is the row at position 1. Same row today, but after filtering or sorting they no longer match.`,[X({rows:[1]})],`df.iloc[1]`),J(`Cắt bằng loc lấy cả điểm cuối: df.loc["a":"b"] có hai dòng.`,`Slicing with loc includes the end: df.loc["a":"b"] has two rows.`,[X({rows:[0,1]})],`df.loc["a":"b"]`),J(`Cắt bằng iloc bỏ điểm cuối: df.iloc[0:1] chỉ có một dòng.`,`Slicing with iloc excludes the end: df.iloc[0:1] has just one row.`,[X({rows:[0]})],`df.iloc[0:1]`)]},Z=(e={})=>q(`ads`,[`week`,`channel`,`spend`,`forms`],[[1,`GDN`,8,24],[1,`TikTok`,6,12],[2,`GDN`,10,35],[2,`TikTok`,4,9],[3,`GDN`,12,30],[3,`TikTok`,7,20]],e),Ce={"sql-wh":[J(`Bảng đang ghi đơn (nguồn). Hai đơn đang ở trạng thái new.`,`The table that takes orders (the source). Two orders are new.`,[q(`orders`,[`id`,`status`,`total`],[[1,`new`,200],[2,`new`,150]])]),J(`Khi đơn 2 được trả tiền, nguồn ghi đè. Trạng thái cũ mất.`,`When order 2 is paid, the source overwrites it. The old status is gone.`,[q(`orders`,[`id`,`status`,`total`],[[1,`new`,200],[2,`paid`,150]],{cells:[[1,1]]})],`UPDATE orders SET status = 'paid' WHERE id = 2;`),J(`Kho dữ liệu chụp lại mỗi ngày và chỉ thêm dòng, nên còn cả lịch sử.`,`The warehouse snapshots every day and only adds rows, so history stays.`,[q(`fact_order_daily`,[`day`,`id`,`status`],[[`Mon`,2,`new`],[`Tue`,2,`paid`]],{add:[1]})],`INSERT INTO fact_order_daily SELECT CURRENT_DATE, id, status FROM orders;`)],"sql-star":[J(`Ở giữa là bảng sự kiện: mỗi dòng là một lần có form. Nó chỉ giữ số và khóa.`,`In the middle is the fact table: one row per form. It holds only numbers and keys.`,[q(`fact_form`,[`form_id`,`campaign_id`,`channel_id`,`forms`],[[1,1,1,24],[2,1,2,12],[3,2,1,35]],{cols:[1,2]})]),J(`Xung quanh là các bảng mô tả: tên chiến dịch, tên kênh. Khóa trong bảng sự kiện trỏ tới chúng.`,`Around it are description tables: campaign name, channel name. Keys in the fact table point to them.`,[q(`dim_campaign`,[`campaign_id`,`name`],[[1,`Tết`],[2,`Hè`]],{cols:[0]}),q(`dim_channel`,[`channel_id`,`name`],[[1,`GDN`],[2,`TikTok`]],{cols:[0]})]),J(`Muốn đọc ra chữ thì nối ba bảng theo khóa.`,`To read words, join the three tables on the keys.`,[q(`kết quả`,[`form_id`,`campaign`,`channel`,`forms`],[[1,`Tết`,`GDN`,24],[2,`Tết`,`TikTok`,12],[3,`Hè`,`GDN`,35]],{add:[0,1,2]})],`SELECT f.form_id, c.name, ch.name, f.forms
FROM fact_form f
JOIN dim_campaign c ON c.campaign_id = f.campaign_id
JOIN dim_channel ch ON ch.channel_id = f.channel_id;`)],"sql-key":[J(`Khóa chính (id) nhận ra từng chiến dịch. Mỗi form có khóa ngoại campaign_id trỏ về đó.`,`The primary key (id) identifies each campaign. Each form carries a foreign key campaign_id pointing to it.`,[q(`campaigns`,[`id`,`name`],[[1,`Tết`],[2,`Hè`]],{cols:[0]}),q(`forms`,[`id`,`campaign_id`],[[1,1],[2,2]],{cols:[1]})]),J(`Thêm form trỏ tới chiến dịch 9 không có thật thì cơ sở dữ liệu từ chối.`,`A form pointing at campaign 9, which does not exist, is rejected by the database.`,[q(`forms`,[`id`,`campaign_id`],[[1,1],[2,2],[3,9]],{bad:[2]})],`INSERT INTO forms VALUES (3, 9);  -- lỗi: không có campaigns.id = 9`),J(`Trỏ tới chiến dịch 1 có thật thì được nhận.`,`Pointing at the real campaign 1 is accepted.`,[q(`forms`,[`id`,`campaign_id`],[[1,1],[2,2],[3,1]],{add:[2]})],`INSERT INTO forms VALUES (3, 1);`)],"sql-ddl":[J(`Bảng ads có hai cột. Đây là khung và các dòng dữ liệu.`,`The ads table has two columns. That is the frame and the rows.`,[q(`ads`,[`id`,`spend`],[[1,8],[2,10]])]),J(`DDL đổi khung: thêm một cột. Mọi dòng có sẵn ô trống ở cột mới.`,`DDL changes the frame: it adds a column. Every row gets an empty cell there.`,[q(`ads`,[`id`,`spend`,`note`],[[1,8,null],[2,10,null]],{addCols:[2]})],`ALTER TABLE ads ADD COLUMN note TEXT;`),J(`DML sửa dòng: chỉ một ô đổi, khung vẫn vậy.`,`DML edits rows: one cell changes, the frame stays.`,[q(`ads`,[`id`,`spend`,`note`],[[1,12,null],[2,10,null]],{cells:[[0,1]]})],`UPDATE ads SET spend = 12 WHERE id = 1;`)],"sql-run":[J(`Máy bắt đầu từ FROM: lấy cả bảng.`,`The engine starts at FROM: it takes the whole table.`,[Z()],`SELECT channel, SUM(spend) AS total
FROM ads                 -- 1. chạy trước
WHERE spend >= 6
GROUP BY channel
ORDER BY total;`),J(`WHERE lọc từng dòng, trước khi gộp. Dòng chi 4 bị loại.`,`WHERE filters single rows, before grouping. The row with spend 4 is dropped.`,[Z({dim:[3]})],`WHERE spend >= 6         -- 2.`),J(`GROUP BY gom các dòng còn lại theo kênh.`,`GROUP BY collects the remaining rows by channel.`,[q(`nhóm`,[`channel`,`spend của các dòng`],[[`GDN`,`8, 10, 12`],[`TikTok`,`6, 7`]])],`GROUP BY channel         -- 3.`),J(`Lúc này SELECT mới chạy: tính tổng cho từng nhóm và đặt tên total.`,`Only now does SELECT run: it computes the sum of each group and names it total.`,[q(`kết quả`,[`channel`,`total`],[[`GDN`,30],[`TikTok`,13]],{addCols:[1]})],`SELECT channel, SUM(spend) AS total   -- 4.`),J(`ORDER BY chạy cuối nên dùng được tên total vừa đặt. Xếp tăng dần.`,`ORDER BY runs last, so it can use the name total. Sorted ascending.`,[q(`kết quả`,[`channel`,`total`],[[`TikTok`,13],[`GDN`,30]],{rows:[0,1]})],`ORDER BY total           -- 5.`)],"sql-having":[J(`Bảng gốc, sáu dòng.`,`The base table, six rows.`,[Z()]),J(`WHERE lọc dòng trước khi gộp: dòng chi 4 bị loại.`,`WHERE filters rows before grouping: the row with spend 4 is dropped.`,[Z({dim:[3]})],`WHERE spend >= 6`),J(`Sau khi gộp, mỗi kênh còn một dòng tổng.`,`After grouping, each channel has one total row.`,[q(`nhóm`,[`channel`,`SUM(spend)`],[[`GDN`,30],[`TikTok`,13]])],`GROUP BY channel`),J(`HAVING lọc nhóm theo con số đã tính. TikTok có tổng 13 nên bị loại.`,`HAVING filters groups by the computed number. TikTok totals 13 and is dropped.`,[q(`nhóm`,[`channel`,`SUM(spend)`],[[`GDN`,30],[`TikTok`,13]],{dim:[1],rows:[0]})],`HAVING SUM(spend) > 20`)],"sql-count":[J(`Bốn người điền form. Hai người không để số điện thoại.`,`Four people filled the form. Two left no phone number.`,[q(`leads`,[`id`,`name`,`phone`],[[1,`An`,`0901`],[2,`Bình`,null],[3,`Chi`,`0933`],[4,`Dũng`,null]])]),J(`COUNT(*) đếm dòng, nên ra 4.`,`COUNT(*) counts rows, so it returns 4.`,[q(`leads`,[`id`,`name`,`phone`],[[1,`An`,`0901`],[2,`Bình`,null],[3,`Chi`,`0933`],[4,`Dũng`,null]],{rows:[0,1,2,3]})],`SELECT COUNT(*) FROM leads;   -- 4`),J(`COUNT(phone) chỉ đếm ô có giá trị, nên ra 2.`,`COUNT(phone) counts only cells that have a value, so it returns 2.`,[q(`leads`,[`id`,`name`,`phone`],[[1,`An`,`0901`],[2,`Bình`,null],[3,`Chi`,`0933`],[4,`Dũng`,null]],{cells:[[0,2],[2,2]]})],`SELECT COUNT(phone) FROM leads;   -- 2`)],"sql-join":[J(`Chiến dịch Tết có hai tuần chạy ở bảng weeks.`,`The Tết campaign has two running weeks in the weeks table.`,[q(`campaigns`,[`id`,`name`],[[1,`Tết`],[2,`Hè`]],{cols:[0]}),q(`weeks`,[`campaign_id`,`week`],[[1,`w1`],[1,`w2`],[2,`w1`]],{cols:[0]})]),J(`Nối theo khóa không duy nhất: Tết khớp hai dòng nên xuất hiện hai lần. Hai dòng thành ba dòng.`,`Joining on a key that is not unique: Tết matches two rows so it shows twice. Two rows become three.`,[q(`kết quả`,[`id`,`name`,`week`],[[1,`Tết`,`w1`],[1,`Tết`,`w2`],[2,`Hè`,`w1`]],{rows:[0,1]})],`SELECT c.id, c.name, w.week
FROM campaigns c JOIN weeks w ON w.campaign_id = c.id;`)],"sql-left":[J(`Ba chiến dịch, nhưng chỉ hai chiến dịch có form.`,`Three campaigns, but only two have forms.`,[q(`campaigns`,[`id`,`name`],[[1,`Tết`],[2,`Hè`],[3,`Noel`]]),q(`forms`,[`campaign_id`,`forms`],[[1,40],[2,25]])]),J(`LEFT JOIN giữ cả ba chiến dịch. Noel không có form nên ô trống, là NULL.`,`LEFT JOIN keeps all three campaigns. Noel has no forms, so its cell is empty, NULL.`,[q(`kết quả`,[`name`,`forms`],[[`Tết`,40],[`Hè`,25],[`Noel`,null]],{cells:[[2,1]]})],`SELECT c.name, f.forms
FROM campaigns c LEFT JOIN forms f ON f.campaign_id = c.id;`),J(`NULL là «không có dữ liệu», không phải 0. Chỉ khi bạn quyết định mới đổi nó thành 0.`,`NULL means no data, not 0. Only when you decide do you turn it into 0.`,[q(`kết quả`,[`name`,`forms`],[[`Tết`,40],[`Hè`,25],[`Noel`,0]],{cells:[[2,1]]})],`SELECT c.name, COALESCE(f.forms, 0) AS forms ...`)],"sql-union":[J(`Hai bảng cùng cột, đến từ hai nguồn. TikTok có mặt ở cả hai.`,`Two tables with the same columns, from two sources. TikTok is in both.`,[q(`a`,[`channel`,`forms`],[[`GDN`,24],[`TikTok`,12]]),q(`b`,[`channel`,`forms`],[[`TikTok`,12],[`Meta`,18]])]),J(`UNION ALL xếp bảng này nối xuống dưới bảng kia, giữ cả dòng trùng.`,`UNION ALL stacks one table under the other and keeps the duplicate.`,[q(`kết quả`,[`channel`,`forms`],[[`GDN`,24],[`TikTok`,12],[`TikTok`,12],[`Meta`,18]],{rows:[1,2]})],`SELECT * FROM a UNION ALL SELECT * FROM b;`),J(`UNION bỏ dòng trùng. Đây là xếp dọc, khác JOIN là ghép ngang thêm cột.`,`UNION removes the duplicate. It stacks down, unlike JOIN which adds columns across.`,[q(`kết quả`,[`channel`,`forms`],[[`GDN`,24],[`TikTok`,12],[`TikTok`,12],[`Meta`,18]],{dim:[2]})],`SELECT * FROM a UNION SELECT * FROM b;`)],"sql-win":[J(`Bốn dòng, hai kênh.`,`Four rows, two channels.`,[q(`ads`,[`channel`,`spend`],[[`GDN`,8],[`GDN`,10],[`TikTok`,6],[`TikTok`,4]])]),J(`GROUP BY gộp mỗi kênh thành một dòng. Từng dòng gốc biến mất.`,`GROUP BY folds each channel into one row. The original rows disappear.`,[q(`kết quả`,[`channel`,`total`],[[`GDN`,18],[`TikTok`,10]])],`SELECT channel, SUM(spend) AS total FROM ads GROUP BY channel;`),J(`Hàm cửa sổ thêm một cột tổng nhưng vẫn giữ cả bốn dòng.`,`A window function adds a total column but keeps all four rows.`,[q(`kết quả`,[`channel`,`spend`,`total`],[[`GDN`,8,18],[`GDN`,10,18],[`TikTok`,6,10],[`TikTok`,4,10]],{addCols:[2]})],`SELECT channel, spend,
  SUM(spend) OVER (PARTITION BY channel) AS total
FROM ads;`)],"sql-rank":[J(`Xếp hạng kênh theo form. Hai kênh hòa nhau ở 40.`,`Rank channels by forms. Two channels tie at 40.`,[q(`kênh`,[`channel`,`forms`],[[`GDN`,50],[`Meta`,40],[`TikTok`,40],[`Zalo`,30]],{rows:[1,2]})]),J(`ROW_NUMBER không quan tâm hòa: luôn 1, 2, 3, 4.`,`ROW_NUMBER ignores ties: always 1, 2, 3, 4.`,[q(`kênh`,[`channel`,`forms`,`row_number`],[[`GDN`,50,1],[`Meta`,40,2],[`TikTok`,40,3],[`Zalo`,30,4]],{addCols:[2]})],`ROW_NUMBER() OVER (ORDER BY forms DESC)`),J(`RANK cho hai kênh hòa cùng hạng 2 rồi nhảy số: kênh sau là hạng 4.`,`RANK gives the tied channels the same rank 2, then skips: the next is 4.`,[q(`kênh`,[`channel`,`forms`,`rank`],[[`GDN`,50,1],[`Meta`,40,2],[`TikTok`,40,2],[`Zalo`,30,4]],{addCols:[2],cells:[[3,2]]})],`RANK() OVER (ORDER BY forms DESC)`),J(`DENSE_RANK cũng hòa ở hạng 2 nhưng không nhảy số: kênh sau là hạng 3.`,`DENSE_RANK also ties at 2 but does not skip: the next is 3.`,[q(`kênh`,[`channel`,`forms`,`dense_rank`],[[`GDN`,50,1],[`Meta`,40,2],[`TikTok`,40,2],[`Zalo`,30,3]],{addCols:[2],cells:[[3,2]]})],`DENSE_RANK() OVER (ORDER BY forms DESC)`)],"sql-part":[J(`Hai kênh, hai tuần mỗi kênh.`,`Two channels, two weeks each.`,[q(`ads`,[`channel`,`week`,`forms`],[[`GDN`,1,24],[`GDN`,2,35],[`TikTok`,1,12],[`TikTok`,2,9]])]),J(`Xếp hạng chung cả bảng: TikTok bị đẩy xuống hạng 3 và 4.`,`Ranking the whole table: TikTok is pushed down to 3 and 4.`,[q(`ads`,[`channel`,`week`,`forms`,`rank`],[[`GDN`,1,24,2],[`GDN`,2,35,1],[`TikTok`,1,12,3],[`TikTok`,2,9,4]],{addCols:[3]})],`RANK() OVER (ORDER BY forms DESC)`),J(`PARTITION BY chia theo kênh. Mỗi kênh tự đếm hạng, bắt đầu từ 1.`,`PARTITION BY splits by channel. Each channel counts its own rank, starting from 1.`,[q(`ads`,[`channel`,`week`,`forms`,`rank`],[[`GDN`,1,24,2],[`GDN`,2,35,1],[`TikTok`,1,12,1],[`TikTok`,2,9,2]],{addCols:[3],cells:[[2,3]]})],`RANK() OVER (PARTITION BY channel ORDER BY forms DESC)`)],"sql-frame":[J(`Thiếu tuần 3: chỉ có tuần 1, 2, 4, 5. Muốn trung bình của «ba dòng gần nhất».`,`Week 3 is missing: only weeks 1, 2, 4, 5. We want the average of the last three rows.`,[q(`weeks`,[`week`,`spend`],[[1,10],[2,20],[4,40],[5,50]])],`AVG(spend) OVER (ORDER BY week
  ROWS BETWEEN 2 PRECEDING AND CURRENT ROW)`),J(`Ở tuần 4, khung lấy ba dòng: tuần 1, 2 và 4. Nó trải qua bốn tuần lịch, vì tuần 3 không có dòng.`,`At week 4 the frame takes three rows: weeks 1, 2 and 4. It spans four calendar weeks, because week 3 has no row.`,[q(`weeks`,[`week`,`spend`,`avg3`],[[1,10,10],[2,20,15],[4,40,23.3],[5,50,`…`]],{rows:[0,1,2],cells:[[2,2]]})]),J(`Ở tuần 5, khung là tuần 2, 4, 5. Khung đếm dòng, không đếm ngày.`,`At week 5 the frame is weeks 2, 4, 5. The frame counts rows, not days.`,[q(`weeks`,[`week`,`spend`,`avg3`],[[1,10,10],[2,20,15],[4,40,23.3],[5,50,36.7]],{rows:[1,2,3],cells:[[3,2]]})])],"sql-lag":[J(`Ba ngày có số liệu: ngày 1, 2 và 4. Ngày 3 thiếu.`,`Three days with data: days 1, 2 and 4. Day 3 is missing.`,[q(`daily`,[`day`,`forms`],[[1,10],[2,14],[4,9]])]),J(`LAG lấy giá trị của dòng ngay trước. Dòng đầu chưa có dòng trước nên là NULL.`,`LAG takes the value from the row right before. The first row has none, so NULL.`,[q(`daily`,[`day`,`forms`,`prev`],[[1,10,null],[2,14,10],[4,9,14]],{addCols:[2]})],`LAG(forms) OVER (ORDER BY day) AS prev`),J(`Ở ngày 4, «dòng trước» là ngày 2, không phải hôm qua. Thiếu ngày thì LAG vẫn nhảy qua.`,`On day 4 the previous row is day 2, not yesterday. With a missing day, LAG still jumps across.`,[q(`daily`,[`day`,`forms`,`prev`],[[1,10,null],[2,14,10],[4,9,14]],{cells:[[2,2]],rows:[1]})])],"sql-case":[J(`Bảng gốc chỉ có kênh và chi tiêu.`,`The base table has only channel and spend.`,[q(`ads`,[`channel`,`spend`],[[`GDN`,12],[`Meta`,8],[`TikTok`,4]])]),J(`CASE tạo một cột mới ngay trong kết quả, theo từng bậc.`,`CASE builds a new column right in the result, tier by tier.`,[q(`kết quả`,[`channel`,`spend`,`tier`],[[`GDN`,12,`cao`],[`Meta`,8,`vừa`],[`TikTok`,4,`thấp`]],{addCols:[2]})],`SELECT channel, spend,
  CASE WHEN spend >= 10 THEN 'cao'
       WHEN spend >= 6  THEN 'vừa'
       ELSE 'thấp' END AS tier
FROM ads;`),J(`Bảng gốc vẫn không có cột tier. Bậc chỉ sống trong câu truy vấn.`,`The base table still has no tier column. The tier lives only in the query.`,[q(`ads`,[`channel`,`spend`],[[`GDN`,12],[`Meta`,8],[`TikTok`,4]])],`SELECT * FROM ads;`)],"sql-cte":[J(`Bảng gốc ads.`,`The base table ads.`,[q(`ads`,[`id`,`channel`,`spend`],[[1,`GDN`,8],[2,`TikTok`,6],[3,`Meta`,12]])]),J(`Đặt tên cho một câu con: big là các dòng chi từ 8 trở lên. Nó chỉ là tên cho câu truy vấn.`,`Name a sub-query: big is the rows with spend of 8 or more. It is just a name for a query.`,[q(`big`,[`id`,`channel`,`spend`],[[1,`GDN`,8],[3,`Meta`,12]],{rows:[0,1]})],`CREATE VIEW big AS
  SELECT * FROM ads WHERE spend >= 8;`),J(`Sửa bảng gốc: TikTok từ 6 lên 9.`,`Edit the base table: TikTok goes from 6 to 9.`,[q(`ads`,[`id`,`channel`,`spend`],[[1,`GDN`,8],[2,`TikTok`,9],[3,`Meta`,12]],{cells:[[1,2]]})],`UPDATE ads SET spend = 9 WHERE id = 2;`),J(`Hỏi lại big: TikTok tự có mặt. View không phải bản sao, nó chạy lại câu truy vấn mỗi lần.`,`Ask big again: TikTok appears by itself. A view is not a copy, it reruns its query every time.`,[q(`big`,[`id`,`channel`,`spend`],[[1,`GDN`,8],[2,`TikTok`,9],[3,`Meta`,12]],{add:[1]})],`SELECT * FROM big;`)],"sql-idx":[J(`Tìm kênh Meta trong bảng sáu dòng, không có chỉ mục: máy đọc từng dòng từ đầu.`,`Finding Meta in a six-row table with no index: the engine reads every row from the top.`,[q(`ads`,[`id`,`channel`],[[1,`GDN`],[2,`Meta`],[3,`TikTok`],[4,`GDN`],[5,`Meta`],[6,`TikTok`]],{rows:[0,1,2,3,4,5]})],`SELECT * FROM ads WHERE channel = 'Meta';`),J(`Chỉ mục như mục lục: kênh nào nằm ở dòng nào. Máy tra mục lục rồi nhảy thẳng tới dòng 2 và 5.`,`An index is like a table of contents: which channel sits on which rows. The engine looks it up and jumps straight to rows 2 and 5.`,[q(`index trên channel`,[`channel`,`dòng`],[[`GDN`,`1, 4`],[`Meta`,`2, 5`],[`TikTok`,`3, 6`]],{rows:[1]}),q(`ads`,[`id`,`channel`],[[1,`GDN`],[2,`Meta`],[3,`TikTok`],[4,`GDN`],[5,`Meta`],[6,`TikTok`]],{rows:[1,4]})]),J(`Kết quả y hệt, chỉ nhanh hơn. Chỉ mục đổi tốc độ, không đổi câu trả lời.`,`The result is identical, only faster. An index changes speed, not the answer.`,[q(`kết quả`,[`id`,`channel`],[[2,`Meta`],[5,`Meta`]])])],"sql-like":[J(`Bốn tên chiến dịch. Ký tự % thay cho «bất kỳ chuỗi nào».`,`Four campaign names. The % sign stands for any string.`,[q(`campaigns`,[`name`],[[`Tet Sale`],[`Tet 2026`],[`Mid-Tet`],[`Back Tet`]])]),J(`'Tet%' khớp những tên bắt đầu bằng Tet.`,`'Tet%' matches names that start with Tet.`,[q(`campaigns`,[`name`],[[`Tet Sale`],[`Tet 2026`],[`Mid-Tet`],[`Back Tet`]],{rows:[0,1]})],`WHERE name LIKE 'Tet%'`),J(`'%Tet' khớp những tên kết thúc bằng Tet.`,`'%Tet' matches names that end with Tet.`,[q(`campaigns`,[`name`],[[`Tet Sale`],[`Tet 2026`],[`Mid-Tet`],[`Back Tet`]],{rows:[2,3]})],`WHERE name LIKE '%Tet'`),J(`'%Tet%' khớp tên có Tet ở bất kỳ đâu. LIKE chỉ có % và _. Luật phức tạp hơn là việc của regex.`,`'%Tet%' matches Tet anywhere. LIKE has only % and _. Richer rules are regex's job.`,[q(`campaigns`,[`name`],[[`Tet Sale`],[`Tet 2026`],[`Mid-Tet`],[`Back Tet`]],{rows:[0,1,2,3]})],`WHERE name LIKE '%Tet%'`)],"sql-date":[J(`Ba ngày được lưu thành chữ, không phải kiểu ngày.`,`Three dates stored as text, not as a date type.`,[q(`log`,[`d`],[[`5/1/2026`],[`10/1/2026`],[`9/1/2026`]])]),J(`Xếp theo chữ: «10/1» đứng trước «5/1» vì ký tự «1» nhỏ hơn «5». Thứ tự sai.`,`Sorting as text: "10/1" comes before "5/1" because the character "1" is smaller than "5". The order is wrong.`,[q(`log`,[`d`],[[`10/1/2026`],[`5/1/2026`],[`9/1/2026`]],{bad:[0,1,2]})],`SELECT d FROM log ORDER BY d;`),J(`Đổi sang kiểu ngày trước khi xếp: ngày 5, 9, rồi 10. Đúng thứ tự thời gian.`,`Convert to a date type before sorting: 5, 9, 10. The true time order.`,[q(`log`,[`d`],[[`5/1/2026`],[`9/1/2026`],[`10/1/2026`]],{add:[0,1,2]})],`SELECT d FROM log ORDER BY TO_DATE(d, 'DD/MM/YYYY');`)],"sql-nest":[J(`Muốn các kênh đã có form. Kênh 2 chưa có form nào.`,`We want channels that have forms. Channel 2 has none.`,[q(`channels`,[`id`,`name`],[[1,`GDN`],[2,`TikTok`],[3,`Meta`]]),q(`forms`,[`channel_id`],[[1],[1],[3]])]),J(`Cách 1, câu con: hỏi «id nào có trong forms».`,`Way 1, a subquery: ask which ids appear in forms.`,[q(`kết quả`,[`id`,`name`],[[1,`GDN`],[3,`Meta`]],{add:[0,1]})],`SELECT * FROM channels
WHERE id IN (SELECT channel_id FROM forms);`),J(`Cách 2, phép nối: ra đúng kết quả đó. Câu lồng không cao cấp hơn. Chọn cách dễ đọc.`,`Way 2, a join: the very same result. A nested query is not fancier. Pick the one that reads better.`,[q(`kết quả`,[`id`,`name`],[[1,`GDN`],[3,`Meta`]],{add:[0,1]})],`SELECT DISTINCT c.*
FROM channels c JOIN forms f ON f.channel_id = c.id;`)],"sql-nwin":[J(`Muốn cộng dồn form theo từng kênh qua các tuần.`,`We want a running total of forms per channel across weeks.`,[q(`ads`,[`channel`,`week`,`forms`],[[`GDN`,1,24],[`GDN`,2,35],[`TikTok`,1,12],[`TikTok`,2,9]])]),J(`Viết cửa sổ dài ngay trong hàm.`,`Spell the window out inside the function.`,[q(`kết quả`,[`channel`,`week`,`forms`,`run`],[[`GDN`,1,24,24],[`GDN`,2,35,59],[`TikTok`,1,12,12],[`TikTok`,2,9,21]],{addCols:[3]})],`SUM(forms) OVER (PARTITION BY channel ORDER BY week) AS run`),J(`Đặt tên cửa sổ là w rồi gọi w. Kết quả y hệt. Tên chỉ để viết ngắn và dùng lại.`,`Name the window w and call w. The result is identical. A name only shortens and reuses.`,[q(`kết quả`,[`channel`,`week`,`forms`,`run`],[[`GDN`,1,24,24],[`GDN`,2,35,59],[`TikTok`,1,12,12],[`TikTok`,2,9,21]],{addCols:[3]})],`SUM(forms) OVER w AS run
...
WINDOW w AS (PARTITION BY channel ORDER BY week)`)],"sql-proc":[J(`Bảng ads đang có ba tuần, bảng archive còn trống.`,`The ads table holds three weeks, the archive table is empty.`,[q(`ads`,[`id`,`week`,`spend`],[[1,`w1`,8],[2,`w2`,10],[3,`w3`,12]]),q(`archive`,[`id`,`week`,`spend`],[])]),J(`Gọi thủ tục một lần: nó chép tuần 1 sang archive rồi xóa khỏi ads. Hai việc trong một lệnh.`,`Call the procedure once: it copies week 1 to archive then deletes it from ads. Two jobs in one command.`,[q(`ads`,[`id`,`week`,`spend`],[[1,`w1`,8],[2,`w2`,10],[3,`w3`,12]],{dim:[0]}),q(`archive`,[`id`,`week`,`spend`],[[1,`w1`,8]],{add:[0]})],`CALL archive_week('w1');`),J(`Kết quả: một kịch bản đã lưu đã sửa hai bảng, và có thể gọi lại bất cứ lúc nào.`,`Result: one saved script edited two tables, and you can call it again any time.`,[q(`ads`,[`id`,`week`,`spend`],[[2,`w2`,10],[3,`w3`,12]]),q(`archive`,[`id`,`week`,`spend`],[[1,`w1`,8]])])],"sql-cur":[J(`Ba form cần chuyển từ new sang done.`,`Three forms need to go from new to done.`,[q(`forms`,[`id`,`status`],[[1,`new`],[2,`new`],[3,`new`]])]),J(`Con trỏ đi từng dòng một: dòng 1 xong, rồi mới tới dòng 2 và 3. Ba vòng lặp.`,`A cursor goes one row at a time: row 1 is done, then row 2 and 3. Three loop turns.`,[q(`forms`,[`id`,`status`],[[1,`done`],[2,`new`],[3,`new`]],{rows:[0]})],`FETCH NEXT FROM cur;  -- vòng 1
UPDATE forms SET status = 'done' WHERE id = 1;`),J(`Vòng 2 và vòng 3 cũng như vậy, từng dòng một.`,`Turns 2 and 3 do the same, one row each.`,[q(`forms`,[`id`,`status`],[[1,`done`],[2,`done`],[3,`done`]],{rows:[1,2]})],`-- vòng 2, vòng 3`),J(`Một câu UPDATE xử lý cả ba dòng cùng lúc, gọn hơn và thường nhanh hơn nhiều.`,`One UPDATE handles all three rows at once, shorter and usually much faster.`,[q(`forms`,[`id`,`status`],[[1,`done`],[2,`done`],[3,`done`]],{rows:[0,1,2]})],`UPDATE forms SET status = 'done' WHERE status = 'new';`)]},we={"tb-join":[J(`Bảng chiến dịch có ngân sách mỗi chiến dịch. Bảng weeks có từng tuần chạy.`,`The campaigns table has one budget per campaign. The weeks table has each running week.`,[q(`campaigns`,[`id`,`name`,`budget`],[[1,`Tết`,100],[2,`Hè`,100]]),q(`weeks`,[`campaign_id`,`week`],[[1,`w1`],[1,`w2`],[2,`w1`]])]),J(`Nối hai bảng: Tết có hai tuần nên dòng Tết nhân đôi, và ngân sách 100 lặp hai lần.`,`Join the tables: Tết has two weeks so its row doubles, and its budget 100 appears twice.`,[q(`sau khi nối`,[`name`,`budget`,`week`],[[`Tết`,100,`w1`],[`Tết`,100,`w2`],[`Hè`,100,`w1`]],{rows:[0,1]})]),J(`Kéo SUM(budget) lên biểu đồ ra 300, trong khi tổng thật là 200. Phép nối đã nhân dòng trước khi vẽ.`,`Drag SUM(budget) onto a chart and you get 300, while the truth is 200. The join multiplied rows before the drawing.`,[q(`biểu đồ`,[``,`tổng budget`],[[`đúng (trước khi nối)`,200],[`sau khi nối`,300]],{bad:[1]})])],"tb-calc":[J(`Dữ liệu gốc có chi tiêu và form theo kênh.`,`The source data has spend and forms by channel.`,[q(`ads`,[`channel`,`spend`,`forms`],[[`GDN`,30,89],[`TikTok`,17,41]])]),J(`Trường tính toán CPL là một công thức: tổng chi chia tổng form. Tableau chạy nó mỗi lần vẽ.`,`The calculated field CPL is a formula: total spend divided by total forms. Tableau runs it each time it draws.`,[q(`trong biểu đồ`,[`channel`,`CPL`],[[`GDN`,.337],[`TikTok`,.415]],{addCols:[1]})],`CPL = SUM([spend]) / SUM([forms])`),J(`Bảng dữ liệu gốc vẫn không có cột CPL. Công thức không tạo dữ liệu mới.`,`The source table still has no CPL column. A formula creates no new data.`,[q(`ads`,[`channel`,`spend`,`forms`],[[`GDN`,30,89],[`TikTok`,17,41]])])],"pb-model":[J(`Mô hình là các bảng và đường nối giữa chúng. Bảng chiến dịch (mô tả) nối với bảng form (sự kiện) qua campaign_id.`,`A model is tables and the lines between them. The campaign table (description) joins the form table (events) through campaign_id.`,[q(`campaign`,[`campaign_id`,`name`],[[1,`Tết`],[2,`Hè`]],{cols:[0]}),q(`forms`,[`form_id`,`campaign_id`],[[1,1],[2,1],[3,2]],{cols:[1]})]),J(`Chọn «Tết» ở bảng chiến dịch: bộ lọc chảy qua đường nối, chỉ còn các form của Tết.`,`Pick Tết in the campaign table: the filter flows along the line, leaving only Tết's forms.`,[q(`campaign`,[`campaign_id`,`name`],[[1,`Tết`],[2,`Hè`]],{rows:[0],dim:[1]}),q(`forms`,[`form_id`,`campaign_id`],[[1,1],[2,1],[3,2]],{rows:[0,1],dim:[2]})])],"pb-pq":[J(`Power Query là một danh sách bước. Mỗi bước là một công thức, chạy lần lượt trên dữ liệu thô.`,`Power Query is a list of steps. Each step is a formula, run in order on the raw data.`,[q(`applied steps`,[`#`,`bước`],[[1,`Source: đọc file`],[2,`Filter: bỏ dòng trống`],[3,`Change type: spend thành số`]])]),J(`Dữ liệu thô có một dòng trống và spend là chữ. Sau ba bước còn dữ liệu sạch.`,`Raw data has a blank row and spend as text. After three steps it is clean.`,[q(`thô`,[`channel`,`spend`],[[`GDN`,`8`],[null,null],[`Meta`,`12`]],{bad:[1]}),q(`sau 3 bước`,[`channel`,`spend`],[[`GDN`,8],[`Meta`,12]],{add:[0,1]})]),J(`Làm mới (refresh) là chạy lại cả ba công thức trên dữ liệu mới. Dòng TikTok mới tự đi qua các bước.`,`Refresh runs all three formulas again on the new data. The new TikTok row passes through the steps by itself.`,[q(`sau khi refresh`,[`channel`,`spend`],[[`GDN`,8],[`Meta`,12],[`TikTok`,6]],{add:[2]})])],"pb-grain":[J(`Mỗi dòng của bảng này là một dòng hàng trong đơn, không phải một đơn. Đó là grain (độ mịn).`,`Each row of this table is one order line, not one order. That is the grain.`,[q(`order_lines`,[`order_id`,`item`],[[1,`A`],[1,`B`],[2,`A`]])]),J(`Đếm dòng ra 3. Đây là số dòng hàng, không phải số đơn.`,`Counting rows gives 3. That is the number of lines, not of orders.`,[q(`order_lines`,[`order_id`,`item`],[[1,`A`],[1,`B`],[2,`A`]],{rows:[0,1,2]})],`COUNTROWS(order_lines)   → 3`),J(`Muốn số đơn thì đếm mã đơn khác nhau: ra 2.`,`For the number of orders, count distinct order ids: 2.`,[q(`order_lines`,[`order_id`,`item`],[[1,`A`],[1,`B`],[2,`A`]],{cols:[0]})],`DISTINCTCOUNT(order_lines[order_id])   → 2`)],"pb-dax":[J(`Bảng ads. Cột tính (calculated column) lưu một giá trị cho mỗi dòng, tính một lần lúc làm mới.`,`The ads table. A calculated column stores one value per row, computed once at refresh.`,[q(`ads`,[`channel`,`spend`,`forms`,`cpl`],[[`GDN`,8,24,.333],[`GDN`,10,35,.286],[`TikTok`,6,12,.5]],{addCols:[3]})],`cpl = [spend] / [forms]`),J(`Measure không lưu gì. Nó tính lại mỗi lần bộ lọc đổi. Không lọc: tổng chi chia tổng form.`,`A measure stores nothing. It recomputes each time the filter changes. No filter: total spend over total forms.`,[q(`measure CPL`,[`bộ lọc`,`CPL`],[[`không lọc`,.362]],{cells:[[0,1]]})],`CPL = DIVIDE(SUM(ads[spend]), SUM(ads[forms]))`),J(`Lọc kênh nào thì measure tính lại trên các dòng của kênh đó. Trung bình các cột cpl sẽ không cho đúng con số này.`,`Filter a channel and the measure recomputes over that channel's rows. Averaging the cpl column would not give these numbers.`,[q(`measure CPL`,[`bộ lọc`,`CPL`],[[`không lọc`,.362],[`channel = GDN`,.337],[`channel = TikTok`,.415]],{rows:[1,2]})])],"pb-rls":[J(`Bảng form, mỗi dòng có người phụ trách.`,`A form table, each row with an owner.`,[q(`forms`,[`form_id`,`owner`,`forms`],[[1,`An`,24],[2,`Bình`,12],[3,`An`,35],[4,`Bình`,9]])]),J(`Luật RLS (row-level security) áp lên người xem. Khi Bình mở báo cáo, dòng của An bị ẩn đi hoàn toàn.`,`An RLS (row-level security) rule is applied to the viewer. When Bình opens the report, An's rows are hidden entirely.`,[q(`Bình nhìn thấy`,[`form_id`,`owner`,`forms`],[[1,`An`,24],[2,`Bình`,12],[3,`An`,35],[4,`Bình`,9]],{dim:[0,2],rows:[1,3]})],`[owner] = USERNAME()`),J(`Slicer thì khác: người xem tự bấm và có thể bỏ chọn. RLS không cho người xem tự gỡ.`,`A slicer is different: the viewer clicks and can clear it. RLS cannot be removed by the viewer.`,[q(`so sánh`,[``,`ai quyết định`,`bỏ được?`],[[`slicer`,`người xem`,`được`],[`RLS`,`người quản trị`,`không`]],{rows:[1]})])],"pb-refresh":[J(`Nguồn có ba dòng. Báo cáo tính tổng form: 71.`,`The source has three rows. The report totals the forms: 71.`,[q(`nguồn`,[`form_id`,`forms`],[[1,24],[2,12],[3,35]]),q(`báo cáo`,[``,`tổng form`],[[`measure`,71]])]),J(`Nguồn có thêm một dòng mới. Báo cáo chưa làm mới nên vẫn hiện 71.`,`A new row lands in the source. The report has not refreshed, so it still shows 71.`,[q(`nguồn`,[`form_id`,`forms`],[[1,24],[2,12],[3,35],[4,9]],{add:[3]}),q(`báo cáo`,[``,`tổng form`],[[`measure`,71]],{bad:[0]})]),J(`Làm mới (refresh) kéo dòng mới về và chạy lại công thức: 80. Measure không giữ số cũ.`,`Refresh pulls the new row and reruns the formula: 80. A measure does not keep the old number.`,[q(`nguồn`,[`form_id`,`forms`],[[1,24],[2,12],[3,35],[4,9]]),q(`báo cáo`,[``,`tổng form`],[[`measure`,80]],{cells:[[0,1]]})])]},Te={"xl-cell":[J(`Một ô giữ ba loại thứ: số, chữ hoặc công thức. Bảng này cho thấy bạn gõ gì và ô hiện gì.`,`A cell holds one of three things: a number, text or a formula. This shows what you type and what the cell shows.`,[q(`sheet`,[`ô`,`bạn gõ`,`ô hiện`,`loại`],[[`A1`,`12`,`12`,`số`],[`A2`,`'12`,`12`,`chữ trông giống số`],[`A3`,`=A1*2`,`24`,`công thức`]])]),J(`SUM bỏ qua ô chữ. Tổng A1:A2 chỉ là 12, không phải 24.`,`SUM skips text cells. The total of A1:A2 is just 12, not 24.`,[q(`sheet`,[`ô`,`bạn gõ`,`ô hiện`,`loại`],[[`A1`,`12`,`12`,`số`],[`A2`,`'12`,`12`,`chữ trông giống số`],[`A3`,`=A1*2`,`24`,`công thức`]],{rows:[0],dim:[1]})],`=SUM(A1:A2)   → 12`)],"xl-lock":[J(`Công thức =B2*$E$1 nhân chi tiêu với tỷ lệ ở E1. Dấu $ khóa địa chỉ E1.`,`The formula =B2*$E$1 multiplies spend by the rate in E1. The $ signs lock E1.`,[q(`kéo xuống bốn dòng`,[`dòng`,`công thức`],[[2,`=B2*$E$1`],[3,`=B3*$E$1`],[4,`=B4*$E$1`]],{cols:[1]})],`=B2*$E$1`),J(`Không có $, địa chỉ trượt theo khi kéo: E1 thành E2, E3. Các ô đó trống nên ra 0.`,`Without $, the address slides as you drag: E1 becomes E2, E3. Those cells are empty so you get 0.`,[q(`kéo xuống bốn dòng`,[`dòng`,`công thức`],[[2,`=B2*E1`],[3,`=B3*E2`],[4,`=B4*E3`]],{bad:[1,2]})],`=B2*E1`)],"xl-if":[J(`IF chọn một nhánh: chi từ 10 trở lên là «cao», còn lại là «thấp».`,`IF picks one branch: spend of 10 or more is cao, otherwise thấp.`,[q(`tuần`,[`tuần`,`chi`,`tier`],[[`w1`,12,`cao`],[`w2`,8,`thấp`],[`w3`,`(trống)`,`thấp`]],{addCols:[2]})],`=IF(B2>=10, "cao", "thấp")`),J(`Tuần 3 chưa nhập số. Ô trống bị coi như 0 nên rơi vào «thấp», trông như tuần chi ít.`,`Week 3 has no number yet. A blank is treated as 0, so it lands in thấp, looking like a low-spend week.`,[q(`tuần`,[`tuần`,`chi`,`tier`],[[`w1`,12,`cao`],[`w2`,8,`thấp`],[`w3`,`(trống)`,`thấp`]],{cells:[[2,2]]})]),J(`Muốn tách trường hợp chưa có số thì kiểm tra ô trống trước.`,`To separate the not-entered case, test for blank first.`,[q(`tuần`,[`tuần`,`chi`,`tier`],[[`w1`,12,`cao`],[`w2`,8,`thấp`],[`w3`,`(trống)`,`chưa có`]],{cells:[[2,2]]})],`=IF(ISBLANK(B4), "chưa có", IF(B4>=10, "cao", "thấp"))`)],"xl-keep":[J(`Bảng có năm dòng.`,`A table with five rows.`,[q(`ads`,[`kênh`,`chi`],[[`GDN`,12],[`Meta`,8],[`TikTok`,4],[`Zalo`,3],[`Bing`,9]])]),J(`Lọc chi ≥ 8: dòng khác bị giấu đi, không bị xóa.`,`Filter spend ≥ 8: the other rows are hidden, not deleted.`,[q(`ads`,[`kênh`,`chi`],[[`GDN`,12],[`Meta`,8],[`TikTok`,4],[`Zalo`,3],[`Bing`,9]],{dim:[2,3]})]),J(`Bỏ bộ lọc thì mọi dòng quay lại như cũ.`,`Clear the filter and every row comes back.`,[q(`ads`,[`kênh`,`chi`],[[`GDN`,12],[`Meta`,8],[`TikTok`,4],[`Zalo`,3],[`Bing`,9]])]),J(`Xóa dòng mới làm mất dữ liệu thật. Lúc này không còn đường quay lại ngoài hoàn tác.`,`Deleting is what really loses data. Only undo gets it back.`,[q(`ads`,[`kênh`,`chi`],[[`GDN`,12],[`Meta`,8],[`Bing`,9]])])],"xl-chart":[J(`Muốn so các nhóm với nhau (kênh này với kênh kia): dùng biểu đồ cột. Mỗi nhóm một cột.`,`To compare groups (one channel with another): use a bar chart. One bar per group.`,[q(`so nhóm → biểu đồ cột`,[`kênh`,`form`],[[`GDN`,90],[`Meta`,55],[`TikTok`,41]],{cols:[1]})]),J(`Muốn xem một thứ đổi theo thời gian: dùng biểu đồ đường. Thứ tự tuần là có thật nên nối các điểm được.`,`To see one thing change over time: use a line chart. Week order is real, so joining the points makes sense.`,[q(`theo thời gian → biểu đồ đường`,[`tuần`,`form`],[[`w1`,41],[`w2`,55],[`w3`,90]],{cols:[1]})])],"xl-pivot":[J(`Sáu dòng gốc: mỗi dòng là một kênh trong một tuần.`,`Six raw rows: each is one channel in one week.`,[q(`ads`,[`week`,`channel`,`spend`],[[1,`GDN`,8],[1,`TikTok`,6],[2,`GDN`,10],[2,`TikTok`,4],[3,`GDN`,12],[3,`TikTok`,7]])]),J(`PivotTable nhóm các dòng theo kênh và cộng chi tiêu. Sáu dòng thành hai dòng.`,`A PivotTable groups rows by channel and sums spend. Six rows become two.`,[q(`pivot: hàng = channel, giá trị = tổng spend`,[`channel`,`tổng spend`],[[`GDN`,30],[`TikTok`,17]],{addCols:[1]})]),J(`Đưa tuần lên cột thì ra bảng chéo. Tổng vẫn là 47, như ở bảng gốc. Pivot chỉ sắp lại, không tạo thêm số.`,`Move week to columns for a cross-table. The total is still 47, as in the raw table. A pivot only rearranges, it creates no new numbers.`,[q(`pivot: hàng = channel, cột = week`,[`channel`,`w1`,`w2`,`w3`,`tổng`],[[`GDN`,8,10,12,30],[`TikTok`,6,4,7,17],[`tổng`,14,14,19,47]],{rows:[2]})])],"xl-look":[J(`Bảng tra: cột đầu là tên kênh, bên phải là mã và giá mỗi form.`,`A lookup table: the first column is the channel name, to the right are the code and cost per form.`,[q(`kênh`,[`name`,`id`,`cpl`],[[`GDN`,1,40],[`Meta`,2,55],[`TikTok`,3,32]],{cols:[0]})]),J(`VLOOKUP tìm «Meta» ở cột đầu rồi lấy ô ở cột thứ 3 của dòng đó. FALSE ở cuối nghĩa là chỉ lấy khớp đúng.`,`VLOOKUP finds Meta in the first column then takes the cell from the 3rd column of that row. The final FALSE means exact match only.`,[q(`kênh`,[`name`,`id`,`cpl`],[[`GDN`,1,40],[`Meta`,2,55],[`TikTok`,3,32]],{rows:[1],cells:[[1,2]]})],`=VLOOKUP("Meta", A:C, 3, FALSE)   → 55`),J(`Nó chỉ nhìn sang bên phải của cột tìm. Muốn lấy cột nằm bên trái cột tìm thì VLOOKUP không làm được. Bỏ FALSE thì nó tìm gần đúng và có thể trả về dòng sai.`,`It only looks to the right of the search column. A column to the left of it cannot be fetched. Drop FALSE and it matches approximately and may return the wrong row.`,[q(`kênh`,[`name`,`id`,`cpl`],[[`GDN`,1,40],[`Meta`,2,55],[`TikTok`,3,32]],{bad:[0,1,2]})],`=VLOOKUP(2, B:C, ...) không lấy được cột name ở bên trái`)],"xa-text":[J(`Hàm xử lý chuỗi trả về chữ. LEFT lấy bốn ký tự đầu của «2026-01».`,`String functions return text. LEFT takes the first four characters of 2026-01.`,[q(`công thức`,[`công thức`,`kết quả`,`loại`],[[`=LEFT("2026-01", 4)`,`2026`,`chữ`]],{cells:[[0,1]]})]),J(`Trông giống số nhưng vẫn là chữ nên SUM bỏ qua. Muốn thành số phải bọc VALUE.`,`It looks like a number but it is text, so SUM skips it. To make it a number, wrap it in VALUE.`,[q(`công thức`,[`công thức`,`kết quả`,`loại`],[[`=LEFT("2026-01", 4)`,`2026`,`chữ`],[`=VALUE(LEFT("2026-01", 4))`,2026,`số`]],{rows:[1]})])],"xa-count":[J(`Một cột có số, chữ «n/a» và một ô trống.`,`A column with numbers, the text n/a and a blank cell.`,[q(`cột B`,[`ô`,`giá trị`],[[`B1`,12],[`B2`,`n/a`],[`B3`,`(trống)`],[`B4`,7]])]),J(`COUNT chỉ đếm ô là số: B1 và B4, ra 2.`,`COUNT counts only numeric cells: B1 and B4, so 2.`,[q(`cột B`,[`ô`,`giá trị`],[[`B1`,12],[`B2`,`n/a`],[`B3`,`(trống)`],[`B4`,7]],{cells:[[0,1],[3,1]]})],`=COUNT(B1:B4)   → 2`),J(`COUNTA đếm mọi ô không trống, kể cả chữ: ra 3.`,`COUNTA counts every non-empty cell, text included: 3.`,[q(`cột B`,[`ô`,`giá trị`],[[`B1`,12],[`B2`,`n/a`],[`B3`,`(trống)`],[`B4`,7]],{cells:[[0,1],[1,1],[3,1]]})],`=COUNTA(B1:B4)   → 3`)],"xa-match":[J(`Bảng có tên kênh ở cột A và mã ở cột B. Cần tìm tên khi biết mã 2: tên nằm bên trái cột mã.`,`Names in column A and codes in column B. We need the name given code 2: the name is left of the code column.`,[q(`kênh`,[`A: name`,`B: id`],[[`GDN`,1],[`Meta`,2],[`TikTok`,3]],{cols:[1]})]),J(`MATCH tìm mã 2 trong cột B và báo vị trí: dòng thứ 2.`,`MATCH finds code 2 in column B and reports the position: the 2nd row.`,[q(`kênh`,[`A: name`,`B: id`],[[`GDN`,1],[`Meta`,2],[`TikTok`,3]],{cells:[[1,1]]})],`=MATCH(2, B:B, 0)   → 2`),J(`INDEX lấy ô thứ 2 của cột A. Nó nhìn được sang trái, điều VLOOKUP không làm được.`,`INDEX takes the 2nd cell of column A. It can look left, which VLOOKUP cannot.`,[q(`kênh`,[`A: name`,`B: id`],[[`GDN`,1],[`Meta`,2],[`TikTok`,3]],{cells:[[1,0]]})],`=INDEX(A:A, MATCH(2, B:B, 0))   → Meta`)],"xa-what":[J(`Mô hình nhỏ: số form = chi tiêu × tỷ lệ. Ô đầu vào là chi tiêu 8 và tỷ lệ 3.`,`A small model: forms = spend × rate. The input cells are spend 8 and rate 3.`,[q(`ô đầu vào`,[`ô`,`giá trị`],[[`spend`,8],[`rate`,3],[`forms = spend × rate`,24]],{rows:[0,1],cells:[[2,1]]})]),J(`Đổi tỷ lệ thành 4, số form tự tính lại ra 32. Đây là phép tính theo giả định bạn nhập, không phải dự báo.`,`Change rate to 4 and forms recalculates to 32. This is arithmetic on the assumption you typed, not a forecast.`,[q(`ô đầu vào`,[`ô`,`giá trị`],[[`spend`,8],[`rate`,4],[`forms = spend × rate`,32]],{cells:[[1,1],[2,1]]})])],"xa-macro":[J(`Macro ghi lại các thao tác bạn bấm theo thứ tự.`,`A macro records the steps you click, in order.`,[q(`macro đã ghi`,[`#`,`thao tác`],[[1,`chọn cột C`],[2,`xếp giảm dần`],[3,`tô vàng dòng đầu`]])]),J(`Chạy lại macro là bấm lại đúng các bước đó trên dữ liệu mới.`,`Running the macro replays exactly those clicks on new data.`,[q(`macro đã ghi`,[`#`,`thao tác`],[[1,`chọn cột C`],[2,`xếp giảm dần`],[3,`tô vàng dòng đầu`]],{rows:[0,1,2]})]),J(`Nó không biết bạn muốn gì. Nếu dữ liệu mới có thêm một cột thì «cột C» là cột khác, và macro vẫn bấm.`,`It does not know what you want. If the new data has an extra column, column C is a different column, and the macro still clicks.`,[q(`macro đã ghi`,[`#`,`thao tác`],[[1,`chọn cột C`],[2,`xếp giảm dần`],[3,`tô vàng dòng đầu`]],{bad:[0]})])]},Ee={...Ce,...Te,...Se,...we};function Q(e,t,n){return e===`en`?n:t}function De(e){let t=1;for(let n=2;n<=e;n+=1)t*=n;return t}function Oe({lang:e}){let[t,n]=(0,b.useState)(8),[r,i]=(0,b.useState)(3),a=De(t)/De(t-r),o=a/De(r);return(0,x.jsxs)(_,{title:Q(e,`Đếm bộ và thứ tự`,`Sets and order`),onReset:()=>{n(8),i(3)},children:[(0,x.jsx)(v,{label:Q(e,`n người có sẵn`,`n available`),min:3,max:10,step:1,value:t,display:String(t),onChange:e=>{n(e),r>e&&i(e)}}),(0,x.jsx)(v,{label:Q(e,`k người được chọn`,`k chosen`),min:1,max:t,step:1,value:r,display:String(r),onChange:i}),(0,x.jsxs)(`div`,{className:`mt-3 grid grid-cols-2 gap-3 text-sm`,children:[(0,x.jsxs)(`div`,{className:`rounded-xl border border-line p-3`,children:[(0,x.jsx)(`p`,{className:`text-muted`,children:Q(e,`Hoán vị P(n,k)`,`Permutation P(n,k)`)}),(0,x.jsx)(`p`,{className:`font-display text-3xl`,children:a})]}),(0,x.jsxs)(`div`,{className:`rounded-xl border border-line p-3`,children:[(0,x.jsx)(`p`,{className:`text-muted`,children:Q(e,`Tổ hợp C(n,k)`,`Combination C(n,k)`)}),(0,x.jsx)(`p`,{className:`font-display text-3xl`,children:o})]})]}),(0,x.jsx)(`p`,{className:`mt-2 text-sm text-muted`,children:Q(e,`Ví dụ minh họa. Tổ hợp = hoán vị / k!.`,`An example. Combination = permutation / k!.`)})]})}function ke({lang:e}){let[t,n]=(0,b.useState)(.08),[r,i]=(0,b.useState)(.4),[a,o]=(0,b.useState)(.05),s=Math.min(t,r),c=Math.min(a,s),l=t+r-c;return(0,x.jsxs)(_,{title:Q(e,`A hoặc B, trừ phần giao`,`A or B, minus the overlap`),onReset:()=>{n(.08),i(.4),o(.05)},children:[(0,x.jsx)(v,{label:Q(e,`P(A) form`,`P(A) form`),min:.02,max:.3,step:.01,value:t,display:t.toFixed(2),onChange:n}),(0,x.jsx)(v,{label:Q(e,`P(B) từ GDN`,`P(B) from GDN`),min:.1,max:.8,step:.01,value:r,display:r.toFixed(2),onChange:i}),(0,x.jsx)(v,{label:Q(e,`P(A và B)`,`P(A and B)`),min:0,max:s,step:.01,value:c,display:c.toFixed(2),onChange:o}),(0,x.jsx)(`p`,{className:`mt-3 font-display text-3xl`,children:l.toFixed(2)}),(0,x.jsxs)(`p`,{className:`text-sm text-muted`,children:[Q(e,`P(A hoặc B)`,`P(A or B)`),` = `,t.toFixed(2),` + `,r.toFixed(2),` − `,c.toFixed(2),`. `,Q(e,`Ví dụ minh họa.`,`An example.`)]})]})}function Ae({lang:e}){let[t,n]=(0,b.useState)(.4),[r,i]=(0,b.useState)(.1),a=t*r;return(0,x.jsxs)(_,{title:Q(e,`Cả hai: nhân xác suất có điều kiện`,`Both: multiply the conditional probability`),onReset:()=>{n(.4),i(.1)},children:[(0,x.jsx)(v,{label:`P(GDN)`,min:.1,max:.8,step:.01,value:t,display:t.toFixed(2),onChange:n}),(0,x.jsx)(v,{label:`P(form | GDN)`,min:.02,max:.4,step:.01,value:r,display:r.toFixed(2),onChange:i}),(0,x.jsx)(`p`,{className:`mt-3 font-display text-3xl`,children:a.toFixed(3)}),(0,x.jsxs)(`p`,{className:`text-sm text-muted`,children:[Q(e,`P(GDN và form)`,`P(GDN and form)`),` = `,t.toFixed(2),` × `,r.toFixed(2),`. `,Q(e,`Ví dụ minh họa.`,`An example.`)]})]})}function je({lang:e}){let[t,n]=(0,b.useState)(.25);return(0,x.jsxs)(_,{title:Q(e,`Kỳ vọng của một biến 0/1`,`Expectation of a 0/1 variable`),onReset:()=>n(.25),onExtreme:()=>n(t>.5?.1:.8),children:[(0,x.jsx)(v,{label:`P(X = 1)`,min:.05,max:.8,step:.05,value:t,display:t.toFixed(2),onChange:n}),(0,x.jsx)(`p`,{className:`mt-3 font-display text-3xl`,children:t.toFixed(2)}),(0,x.jsxs)(`p`,{className:`text-sm text-muted`,children:[`E[X] = 0×`,(1-t).toFixed(2),` + 1×`,t.toFixed(2),`. `,Q(e,`Trên 100 lead, kỳ vọng khoảng ${Math.round(t*100)} form. Ví dụ minh họa.`,`Over 100 leads, expect about ${Math.round(t*100)} forms. An example.`)]})]})}function Me({lang:e}){let[t,n]=(0,b.useState)(.2),[r,i]=(0,b.useState)(.8),[a,o]=(0,b.useState)(.1),s=r*t+a*(1-t),c=s===0?0:r*t/s;return(0,x.jsxs)(_,{title:Q(e,`Cập nhật sau một tín hiệu`,`Update after one signal`),onReset:()=>{n(.2),i(.8),o(.1)},children:[(0,x.jsx)(v,{label:Q(e,`Tỷ lệ đúng khách ban đầu`,`Starting rate of the right customer`),min:.05,max:.6,step:.05,value:t,display:t.toFixed(2),onChange:n}),(0,x.jsx)(v,{label:Q(e,`Thấy tín hiệu nếu đúng khách`,`See the signal if it is the right customer`),min:.4,max:.95,step:.05,value:r,display:r.toFixed(2),onChange:i}),(0,x.jsx)(v,{label:Q(e,`Thấy tín hiệu nếu không phải`,`See the signal if it is not`),min:.02,max:.4,step:.02,value:a,display:a.toFixed(2),onChange:o}),(0,x.jsx)(`p`,{className:`mt-3 font-display text-3xl`,children:c.toFixed(2)}),(0,x.jsx)(`p`,{className:`text-sm text-muted`,children:Q(e,`Xác suất đúng khách sau tín hiệu. Prior vẫn còn trọng lượng. Ví dụ minh họa.`,`Probability it is the right customer after the signal. The prior still has weight. An example.`)})]})}function Ne(e){return[{id:`random`,name:Q(e,`Ngẫu nhiên đơn`,`Simple random`),say:Q(e,`Mỗi phiên cùng cơ hội. Được phép suy ra nguồn, nếu danh sách nguồn đủ.`,`Every session has the same chance. You may infer to the source, if the source list is complete.`)},{id:`strata`,name:Q(e,`Phân tầng`,`Stratified`),say:Q(e,`Lấy trong từng kênh. Giữ được GDN, Facebook, TikTok. Đỡ bị một kênh nuốt mẫu.`,`Draw inside each channel. You keep GDN, Facebook, TikTok. One channel does not swallow the sample.`)},{id:`convenience`,name:Q(e,`Thuận tiện`,`Convenience`),say:Q(e,`Lấy người đã để lại số. Dễ. Không được kết luận về người không gửi form.`,`Take people who left a number. Easy. You cannot conclude about people who did not send a form.`)}]}function Pe({lang:e}){let[t,n]=(0,b.useState)(`random`),r=Ne(e),i=r.find(e=>e.id===t)??r[0];return(0,x.jsxs)(_,{title:Q(e,`Cách lấy mẫu đổi câu được nói`,`The draw changes what you may say`),onReset:()=>n(`random`),children:[(0,x.jsx)(`div`,{className:`flex flex-wrap gap-2`,children:r.map(e=>(0,x.jsx)(`button`,{type:`button`,className:`min-h-11 rounded-full px-3 text-sm ${t===e.id?`bg-accent text-accent-ink`:`border border-line`}`,onClick:()=>n(e.id),children:e.name},e.id))}),(0,x.jsx)(`p`,{className:`mt-3 text-lg leading-relaxed`,children:i.say}),(0,x.jsx)(`p`,{className:`mt-2 text-sm text-muted`,children:Q(e,`Ví dụ minh họa trên một danh sách phiên.`,`An example on a list of sessions.`)})]})}function Fe({id:e,lang:t}){return e===`count`?(0,x.jsx)(Oe,{lang:t}):e===`addrule`?(0,x.jsx)(ke,{lang:t}):e===`mulrule`?(0,x.jsx)(Ae,{lang:t}):e===`expect`?(0,x.jsx)(je,{lang:t}):e===`bayes`?(0,x.jsx)(Me,{lang:t}):e===`sample`?(0,x.jsx)(Pe,{lang:t}):null}function Ie({v:e,lang:t}){let n=+(t===`en`),r=t=>(0,x.jsxs)(`figure`,{className:`mt-4 rounded-xl border border-line bg-paper p-3`,children:[(0,x.jsx)(`figcaption`,{className:`text-xs uppercase tracking-widest text-muted`,children:e.title[n]}),(0,x.jsx)(`div`,{className:`mt-2 overflow-x-auto`,children:t}),e.note?(0,x.jsx)(`p`,{className:`mt-2 text-sm text-muted`,children:e.note[n]}):null]});if(e.kind===`table`){let t=new Set((e.mark??[]).map(([e,t])=>`${e},${t}`));return r((0,x.jsxs)(`table`,{className:`min-w-full border-collapse text-sm tabular-nums`,children:[(0,x.jsx)(`thead`,{children:(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`th`,{className:`w-8 border border-line bg-card`}),e.head.map((e,t)=>(0,x.jsxs)(`th`,{className:`border border-line bg-card px-2 py-1 text-left font-medium`,children:[(0,x.jsx)(`span`,{className:`mr-1 text-xs text-muted`,children:`ABCDEFGH`[t]}),e[n]]},t))]})}),(0,x.jsx)(`tbody`,{children:e.rows.map((e,n)=>(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`th`,{className:`border border-line bg-card px-2 py-1 text-xs font-normal text-muted`,children:n+1}),e.map((e,r)=>(0,x.jsx)(`td`,{className:`border border-line px-2 py-1 ${typeof e==`number`?`text-right`:``} ${t.has(`${n},${r}`)?`bg-accent font-medium text-accent-ink`:`bg-card`}`,children:e},r))]},n))})]}))}if(e.kind===`bars`){let t=Math.max(...e.items.map(e=>e.value))*1.15,i=264/e.items.length;return r((0,x.jsxs)(`svg`,{viewBox:`0 0 320 160`,className:`w-full max-w-md`,role:`img`,"aria-label":e.title[n],children:[(0,x.jsx)(`line`,{x1:28,y1:132,x2:292,y2:132,stroke:`currentColor`,opacity:.3}),e.items.map((r,a)=>{let o=104*r.value/t,s=28+a*i+i*.2;return(0,x.jsxs)(`g`,{children:[(0,x.jsx)(`rect`,{x:s,y:132-o,width:i*.6,height:o,rx:3,className:`fill-accent`}),(0,x.jsxs)(`text`,{x:s+i*.3,y:132-o-4,textAnchor:`middle`,fontSize:11,fill:`currentColor`,children:[r.value,e.unit??``]}),(0,x.jsx)(`text`,{x:s+i*.3,y:146,textAnchor:`middle`,fontSize:11,fill:`currentColor`,opacity:.7,children:r.label[n]})]},a)})]}))}let i=Math.min(...e.ys),a=Math.max(...e.ys),o=a-i||1,s=i-o*.3,c=a+o*.3-s,l=t=>28+t*264/Math.max(e.ys.length-1,1),u=e=>132-(e-s)/c*104;return r((0,x.jsxs)(`svg`,{viewBox:`0 0 320 160`,className:`w-full max-w-md`,role:`img`,"aria-label":e.title[n],children:[(0,x.jsx)(`line`,{x1:28,y1:132,x2:292,y2:132,stroke:`currentColor`,opacity:.3}),(0,x.jsx)(`polyline`,{fill:`none`,strokeWidth:2,className:`stroke-accent`,points:e.ys.map((e,t)=>`${l(t)},${u(e)}`).join(` `)}),e.ys.map((t,n)=>(0,x.jsxs)(`g`,{children:[(0,x.jsx)(`circle`,{cx:l(n),cy:u(t),r:3.5,className:`fill-accent`}),(0,x.jsxs)(`text`,{x:l(n),y:u(t)-8,textAnchor:`middle`,fontSize:11,fill:`currentColor`,children:[t,e.unit??``]}),(0,x.jsx)(`text`,{x:l(n),y:146,textAnchor:`middle`,fontSize:11,fill:`currentColor`,opacity:.7,children:e.xs[n]})]},n))]}))}var Le={vi:{starter:`Mã khởi đầu, giữ nguyên`,guide:`Hướng dẫn đi kèm`,think:`Nghĩ trước khi gõ`,steps:`Các bước`,code:`Khung code gợi ý`,result:`Kết quả chạy trên file của bạn`,ran:`Code đã chạy (xem thêm)`,read:`Cách đọc kết quả này`,remark:`Nhận xét mẫu`,howRemark:`Cách tự viết nhận xét`,lotus:`Ở Lotus Spa`,trap:`Dễ sai ở đâu`,rule:`Starter không bị đổi nội dung hay thứ tự. Khung bên dưới mỗi mục chỉ là phần đi kèm, nên mở lại file bài tập cũ vẫn khớp từng ô.`,show:`Mở hướng dẫn`,hide:`Gập hướng dẫn`,map:`Mục lục bài`},en:{starter:`Starter, unchanged`,guide:`Companion guide`,think:`Think before typing`,steps:`Steps`,code:`Suggested code skeleton`,result:`Result on your file`,ran:`Code that ran (optional)`,read:`How to read this result`,remark:`Sample remark`,howRemark:`How to write your own remark`,lotus:`At Lotus Spa`,trap:`Where it goes wrong`,rule:`The starter is never changed in content or order. The box under each task is only a companion, so reopening an old assignment file still matches cell by cell.`,show:`Open guide`,hide:`Fold guide`,map:`Contents`}};function $(e){return e.replace(/<br\s*\/?>/g,` `).replace(/<\/?font[^>]*>/g,``).replace(/<\/?(?:u|i|b)>/g,``).split(/(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g).map((e,t)=>{if(e.startsWith(`**`)&&e.endsWith(`**`))return(0,x.jsx)(`strong`,{children:e.slice(2,-2)},t);if(e.startsWith("`")&&e.endsWith("`"))return(0,x.jsx)(`code`,{className:`rounded bg-paper px-1 text-[0.9em]`,children:e.slice(1,-1)},t);let n=/^\[([^\]]+)\]\(([^)]+)\)$/.exec(e);return n?(0,x.jsx)(`a`,{href:n[2],target:`_blank`,rel:`noreferrer`,className:`text-accent underline`,children:n[1]},t):(0,x.jsx)(b.Fragment,{children:e},t)})}function Re({src:e}){let t=e.split(`
`),n=[],r=0,i=0;for(;r<t.length;){let e=t[r];if(!e.trim()){r++;continue}if(/^\s*```/.test(e)){let e=[];for(r++;r<t.length&&!/^\s*```/.test(t[r]);)e.push(t[r++]);r++;let a=e.join(`
`);n.push((0,x.jsx)(g,{code:a,children:(0,x.jsx)(`pre`,{className:`my-2 overflow-x-auto rounded-xl bg-paper p-3 text-sm`,children:a})},i++));continue}if(/^\s*\|/.test(e)){let e=[];for(;r<t.length&&/^\s*\|/.test(t[r]);)/^\s*\|[\s:|-]+\|?\s*$/.test(t[r])||e.push(t[r].trim().replace(/^\||\|$/g,``).split(`|`).map(e=>e.trim())),r++;n.push((0,x.jsx)(`div`,{className:`my-2 overflow-x-auto`,children:(0,x.jsxs)(`table`,{className:`w-full border-collapse text-sm`,children:[(0,x.jsx)(`thead`,{children:(0,x.jsx)(`tr`,{children:e[0].map((e,t)=>(0,x.jsx)(`th`,{className:`border border-line px-2 py-1 text-left`,children:$(e)},t))})}),(0,x.jsx)(`tbody`,{children:e.slice(1).map((e,t)=>(0,x.jsx)(`tr`,{children:e.map((e,t)=>(0,x.jsx)(`td`,{className:`border border-line px-2 py-1 align-top`,children:$(e)},t))},t))})]})},i++));continue}let a=/^(#{1,6})\s+(.*)$/.exec(e);if(a){let e=a[1].length,t=e<=2?`mt-6 font-display text-2xl`:e===3?`mt-4 text-lg font-medium`:`mt-3 font-medium`;n.push((0,x.jsx)(`p`,{className:t,children:$(a[2])},i++)),r++;continue}if(/^\s*([-*>]|\d+\.)\s+/.test(e)){let e=[];for(;r<t.length&&/^\s*([-*>]|\d+\.)\s+/.test(t[r]);)e.push(t[r++].replace(/^\s*([-*>]|\d+\.)\s+/,``));n.push((0,x.jsx)(`ul`,{className:`my-2 list-disc space-y-1 pl-6`,children:e.map((e,t)=>(0,x.jsx)(`li`,{children:$(e)},t))},i++));continue}if(/^\s*---+\s*$/.test(e)){n.push((0,x.jsx)(`hr`,{className:`my-4 border-line`},i++)),r++;continue}let o=[];for(;r<t.length&&t[r].trim()&&!/^(\s*\||#{1,6}\s|\s*```|\s*([-*>]|\d+\.)\s)/.test(t[r]);)o.push(t[r++]);n.push((0,x.jsx)(`p`,{className:`my-2 leading-relaxed`,children:$(o.join(` `))},i++))}return(0,x.jsx)(x.Fragment,{children:n})}function ze({g:e,r:t,t:n}){let[r,i]=(0,b.useState)(!0);return(0,x.jsxs)(`section`,{className:`my-3 rounded-card border border-line bg-card p-4`,children:[(0,x.jsxs)(`div`,{className:`flex items-center justify-between gap-3`,children:[(0,x.jsx)(`h3`,{className:`text-xs uppercase tracking-widest text-accent`,children:n.guide}),(0,x.jsx)(`button`,{type:`button`,className:`min-h-11 rounded-full border border-line px-4 text-sm`,onClick:()=>i(e=>!e),children:r?n.hide:n.show})]}),r?(0,x.jsxs)(`div`,{className:`mt-2`,children:[(0,x.jsx)(`h4`,{className:`text-sm font-medium`,children:n.think}),(0,x.jsx)(`p`,{className:`mt-1 leading-relaxed`,children:e.think}),(0,x.jsx)(`h4`,{className:`mt-4 text-sm font-medium`,children:n.steps}),(0,x.jsx)(`ol`,{className:`mt-2 space-y-2`,children:e.steps.map((e,t)=>(0,x.jsxs)(`li`,{className:`flex gap-3`,children:[(0,x.jsx)(`span`,{className:`font-display text-xl leading-none text-accent`,children:t+1}),(0,x.jsx)(`span`,{className:`leading-relaxed`,children:e})]},t))}),t?(0,x.jsxs)(`div`,{className:`mt-4`,children:[(0,x.jsx)(`h4`,{className:`text-sm font-medium`,children:n.result}),t.imgs.map(e=>(0,x.jsx)(`img`,{src:e,alt:``,loading:`lazy`,className:`mt-2 w-full rounded-xl border border-line bg-white`},e)),t.text?(0,x.jsx)(`pre`,{className:`mt-2 overflow-x-auto rounded-xl bg-paper p-3 text-sm`,children:t.text}):null,(0,x.jsxs)(`details`,{className:`mt-2`,children:[(0,x.jsx)(`summary`,{className:`min-h-11 cursor-pointer text-sm text-muted`,children:n.ran}),(0,x.jsx)(g,{code:t.code,children:(0,x.jsx)(`pre`,{className:`mt-1 overflow-x-auto rounded-xl bg-paper p-3 text-sm`,children:t.code})})]})]}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(`h4`,{className:`mt-4 text-sm font-medium`,children:n.code}),(0,x.jsx)(g,{code:e.code,children:(0,x.jsx)(`pre`,{className:`mt-1 overflow-x-auto rounded-xl bg-paper p-3 text-sm`,children:e.code})})]}),e.read?.length?(0,x.jsxs)(`div`,{className:`mt-4`,children:[(0,x.jsx)(`h4`,{className:`text-sm font-medium`,children:n.read}),(0,x.jsx)(`ul`,{className:`mt-2 list-disc space-y-1 pl-5`,children:e.read.map((e,t)=>(0,x.jsx)(`li`,{className:`leading-relaxed`,children:e},t))})]}):null,e.remark?(0,x.jsxs)(`div`,{className:`mt-4 rounded-xl border border-line p-3`,children:[(0,x.jsx)(`h4`,{className:`text-sm font-medium`,children:n.remark}),(0,x.jsx)(`p`,{className:`mt-1 leading-relaxed`,children:e.remark}),e.howRemark?.length?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(`h4`,{className:`mt-3 text-sm font-medium`,children:n.howRemark}),(0,x.jsx)(`ol`,{className:`mt-1 list-decimal space-y-1 pl-5`,children:e.howRemark.map((e,t)=>(0,x.jsx)(`li`,{className:`leading-relaxed`,children:e},t))})]}):null]}):null,(0,x.jsxs)(`div`,{className:`mt-4 rounded-xl border-l-4 border-accent bg-paper p-3`,children:[(0,x.jsx)(`p`,{className:`text-xs uppercase tracking-widest text-muted`,children:n.lotus}),(0,x.jsx)(`p`,{className:`mt-1 leading-relaxed`,children:e.lotus})]}),(0,x.jsxs)(`p`,{className:`mt-3 leading-relaxed`,children:[(0,x.jsxs)(`span`,{className:`font-medium`,children:[n.trap,`: `]}),e.trap]})]}):null]})}function Be({c:e,t}){return e.t===`code`?e.s.trim()?(0,x.jsx)(g,{code:e.s,children:(0,x.jsx)(`pre`,{className:`my-2 overflow-x-auto rounded-xl border border-line bg-paper p-3 text-sm`,"aria-label":t.starter,children:e.s})}):null:(0,x.jsx)(`div`,{className:`my-1`,children:(0,x.jsx)(Re,{src:e.s})})}function Ve({a:e}){let t=(0,b.useSyncExternalStore)(ee,p,f).lang,n=Le[t],r=e.cells.filter(e=>e.ref).map(e=>e.ref);return(0,x.jsxs)(`div`,{className:`mt-6`,children:[(0,x.jsxs)(`p`,{className:`text-xs tracking-widest text-muted`,children:[e.course,` · `,e.file]}),(0,x.jsx)(`p`,{className:`mt-3 rounded-xl border-l-4 border-accent bg-card p-3 leading-relaxed`,children:e.story[+(t===`en`)]}),(0,x.jsx)(`p`,{className:`mt-3 text-sm text-muted`,children:n.rule}),(0,x.jsxs)(`details`,{className:`mt-4 rounded-card border border-line p-3`,children:[(0,x.jsxs)(`summary`,{className:`min-h-11 cursor-pointer text-sm font-medium`,children:[n.map,` (`,r.length,`)`]}),(0,x.jsx)(`p`,{className:`mt-2 flex flex-wrap gap-2`,children:r.map(e=>(0,x.jsx)(`a`,{href:`#t-${e}`,className:`min-h-11 rounded-full border border-line px-3 py-2 text-sm`,children:e},e))})]}),(0,x.jsx)(`div`,{className:`mt-6`,children:e.cells.map((r,i)=>(0,x.jsxs)(b.Fragment,{children:[r.ref?(0,x.jsx)(`span`,{id:`t-${r.ref}`}):null,(0,x.jsx)(Be,{c:r,t:n}),r.ref&&e.guides[r.ref]?(0,x.jsx)(ze,{g:e.guides[r.ref][t],r:e.results?.[r.ref],t:n}):null]},i))})]})}function He({q:e,a:t,n}){let[r,i]=(0,b.useState)(!1);return(0,x.jsxs)(`li`,{className:`rounded-card border border-line bg-card p-4`,children:[(0,x.jsxs)(`p`,{className:`font-medium`,children:[(0,x.jsx)(`span`,{className:`mr-2 font-display text-xl text-accent`,children:n}),e]}),(0,x.jsx)(`button`,{type:`button`,className:`mt-2 min-h-11 rounded-full border border-line px-4 text-sm`,onClick:()=>i(e=>!e),children:r?`Ẩn đáp án mẫu`:`Tự trả lời trước, rồi xem đáp án mẫu`}),r?(0,x.jsx)(`p`,{className:`mt-3 rounded-xl bg-paper p-3 leading-relaxed`,children:t}):null]})}function Ue({ov:e,lang:t}){return(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`section`,{className:`mt-6 rounded-card border border-line bg-card p-4`,children:(0,x.jsx)(`p`,{className:`text-lg leading-relaxed`,children:e.lead})}),e.blocks.map((e,n)=>e.k===`h`?(0,x.jsx)(`h2`,{className:`mt-8 font-display text-2xl leading-snug`,children:e.x},n):e.k===`p`?(0,x.jsx)(`p`,{className:`mt-3 leading-relaxed`,children:e.x},n):e.k===`note`?(0,x.jsx)(`p`,{className:`mt-4 rounded-xl border-l-4 border-accent bg-paper p-3 leading-relaxed`,children:e.x},n):e.k===`code`?(0,x.jsx)(g,{code:e.x,lang:t,children:(0,x.jsx)(`pre`,{className:`mt-3 overflow-x-auto rounded-xl bg-paper p-3 text-sm leading-relaxed`,children:(0,x.jsx)(`code`,{children:e.x})})},n):e.k===`ul`?(0,x.jsx)(`ul`,{className:`mt-3 list-disc space-y-2 pl-5 leading-relaxed`,children:e.x.map(e=>(0,x.jsx)(`li`,{children:e},e))},n):e.k===`def`?(0,x.jsx)(`dl`,{className:`mt-3 space-y-3`,children:e.x.map(([e,t])=>(0,x.jsxs)(`div`,{className:`rounded-xl border border-line p-3`,children:[(0,x.jsx)(`dt`,{className:`font-medium`,children:e}),(0,x.jsx)(`dd`,{className:`mt-1 leading-relaxed text-muted`,children:t})]},e))},n):e.k===`qa`?(0,x.jsx)(`ol`,{className:`mt-4 space-y-3`,children:e.x.map(([e,t],n)=>(0,x.jsx)(He,{q:e,a:t,n:n+1},e))},n):(0,x.jsx)(`ul`,{className:`mt-3 space-y-2`,children:e.x.map(e=>(0,x.jsx)(`li`,{children:(0,x.jsx)(r,{to:`/khai-niem/$conceptId`,params:{conceptId:e},className:`font-medium text-accent underline`,children:a(e,t)})},e))},n))]})}var We=`https://www.upgrad.com/lxp/learner/program-detail/697d8895ff9c0627b932ccb2/study-plan`;function Ge({concept:e,lang:t}){let r=e.courseId,i=n.courses.find(e=>e.id===r),a=e.module,o=e.session;if(!i)return null;let s=[i.title,a,o].filter(Boolean).join(`  ›  `);return(0,x.jsxs)(`section`,{className:`mt-8 rounded-card border border-line bg-card p-4`,children:[(0,x.jsx)(`h2`,{className:`text-xs uppercase tracking-widest text-muted`,children:t===`en`?`Rewatch on upGrad`:`Xem lại bài học trên upGrad`}),(0,x.jsx)(`p`,{className:`mt-2 leading-relaxed`,children:s}),(0,x.jsx)(`a`,{href:We,target:`_blank`,rel:`noreferrer`,className:`mt-3 inline-flex min-h-11 items-center rounded-full bg-ink px-5 text-sm text-paper`,children:t===`en`?`Open upGrad Study Plan`:`Mở Study Plan trên upGrad`}),(0,x.jsx)(`p`,{className:`mt-2 text-xs text-muted`,children:t===`en`?`Opens your study plan; follow the path above to the session.`:`Mở Study Plan của chương trình; đi theo dòng chỉ đường ở trên để tới đúng buổi.`})]})}var Ke=[{id:`eda-taxi`,course:`C2`,concepts:[`d-bf9615ba3a8e`],title:[`EDA: Phân tích chuyến taxi NYC`,`EDA: NYC Taxi trip analysis`],file:`EDA_Assg_NYC_Taxi_Starter.ipynb`,story:[`Dữ liệu thật là taxi New York, nhưng bạn đọc nó bằng con mắt của Lotus Spa: «chuyến» là một lượt đặt lịch, «vùng» là một chi nhánh, «giờ đón» là giờ khách vào. Mỗi mục có một ví dụ nhỏ để thấy câu hỏi của bài này trông thế nào ở spa.`,`The real data is New York taxis, but you read it through Lotus Spa's eyes: a “trip” is a booking, a “zone” is a branch, a “pickup hour” is when the customer arrives. Each task has a small example to show what this task's question looks like at the spa.`],cells:[{t:`md`,s:`# **New York City Yellow Taxi Data**`},{t:`md`,s:`## Objective
In this case study you will be learning exploratory data analysis (EDA) with the help of a dataset on yellow taxi rides in New York City. This will enable you to understand why EDA is an important step in the process of data science and machine learning.`},{t:`md`,s:`## **Problem Statement**
As an analyst at an upcoming taxi operation in NYC, you are tasked to use the 2023 taxi trip data to uncover insights that could help optimise taxi operations. The goal is to analyse patterns in the data that can inform strategic decisions to improve service efficiency, maximise revenue, and enhance passenger experience.`},{t:`md`,s:`## Tasks
You need to perform the following steps for successfully completing this assignment:
1. Data Loading
2. Data Cleaning
3. Exploratory Analysis: Bivariate and Multivariate
4. Creating Visualisations to Support the Analysis
5. Deriving Insights and Stating Conclusions`},{t:`md`,s:`---`},{t:`md`,s:`**NOTE:** The marks given along with headings and sub-headings are cumulative marks for those particular headings/sub-headings.<br>

The actual marks for each task are specified within the tasks themselves.

For example, marks given with heading *2* or sub-heading *2.1* are the cumulative marks, for your reference only. <br>

The marks you will receive for completing tasks are given with the tasks.

Suppose the marks for two tasks are: 3 marks for 2.1.1 and 2 marks for 3.2.2, or
* 2.1.1 [3 marks]
* 3.2.2 [2 marks]

then, you will earn 3 marks for completing task 2.1.1 and 2 marks for completing task 3.2.2.
`},{t:`md`,s:`---`},{t:`md`,s:`## Data Understanding
The yellow taxi trip records include fields capturing pick-up and drop-off dates/times, pick-up and drop-off locations, trip distances, itemized fares, rate types, payment types, and driver-reported passenger counts.

The data is stored in Parquet format (*.parquet*). The dataset is from 2009 to 2024. However, for this assignment, we will only be using the data from 2023.

The data for each month is present in a different parquet file. You will get twelve files for each of the months in 2023.

The data was collected and provided to the NYC Taxi and Limousine Commission (TLC) by technology providers like vendors and taxi hailing apps. <br>

You can find the link to the TLC trip records page here: https://www.nyc.gov/site/tlc/about/tlc-trip-record-data.page`},{t:`md`,s:`###  Data Description
You can find the data description here: [Data Dictionary](https://www.nyc.gov/assets/tlc/downloads/pdf/data_dictionary_trip_records_yellow.pdf)`},{t:`md`,s:`**Trip Records**



|Field Name       |description |
|:----------------|:-----------|
| VendorID | A code indicating the TPEP provider that provided the record. <br> 1= Creative Mobile Technologies, LLC; <br> 2= VeriFone Inc. |
| tpep_pickup_datetime | The date and time when the meter was engaged.  |
| tpep_dropoff_datetime | The date and time when the meter was disengaged.   |
| Passenger_count | The number of passengers in the vehicle. <br> This is a driver-entered value. |
| Trip_distance | The elapsed trip distance in miles reported by the taximeter. |
| PULocationID | TLC Taxi Zone in which the taximeter was engaged |
| DOLocationID | TLC Taxi Zone in which the taximeter was disengaged |
|RateCodeID |The final rate code in effect at the end of the trip.<br> 1 = Standard rate <br> 2 = JFK <br> 3 = Newark <br>4 = Nassau or Westchester <br>5 = Negotiated fare <br>6 = Group ride |
|Store_and_fwd_flag |This flag indicates whether the trip record was held in vehicle memory before sending to the vendor, aka “store and forward,” because the vehicle did not have a connection to the server.  <br>Y= store and forward trip <br>N= not a store and forward trip |
|Payment_type| A numeric code signifying how the passenger paid for the trip. <br> 1 = Credit card <br>2 = Cash <br>3 = No charge <br>4 = Dispute <br>5 = Unknown <br>6 = Voided trip |
|Fare_amount| The time-and-distance fare calculated by the meter. <br>Extra Miscellaneous extras and surcharges.  Currently, this only includes the 0.50 and 1 USD rush hour and overnight charges. |
|MTA_tax |0.50 USD MTA tax that is automatically triggered based on the metered rate in use. |
|Improvement_surcharge | 0.30 USD improvement surcharge assessed trips at the flag drop. The improvement surcharge began being levied in 2015. |
|Tip_amount |Tip amount – This field is automatically populated for credit card tips. Cash tips are not included. |
| Tolls_amount | Total amount of all tolls paid in trip.  |
| total_amount | The total amount charged to passengers. Does not include cash tips. |
|Congestion_Surcharge |Total amount collected in trip for NYS congestion surcharge. |
| Airport_fee | 1.25 USD for pick up only at LaGuardia and John F. Kennedy Airports|

Although the amounts of extra charges and taxes applied are specified in the data dictionary, you will see that some cases have different values of these charges in the actual data.`},{t:`md`,s:`**Taxi Zones**

Each of the trip records contains a field corresponding to the location of the pickup or drop-off of the trip, populated by numbers ranging from 1-263.

These numbers correspond to taxi zones, which may be downloaded as a table or map/shapefile and matched to the trip records using a join.

This is covered in more detail in later sections.`},{t:`md`,s:`---`},{t:`md`,s:`## **1** Data Preparation

<font color = red>[5 marks]</font> <br>`},{t:`md`,s:`### Import Libraries`},{t:`code`,s:`# Import warnings

`},{t:`code`,s:`# Import the libraries you will be using for analysis

`},{t:`code`,s:`# Recommended versions
# numpy version: 1.26.4
# pandas version: 2.2.2
# matplotlib version: 3.10.0
# seaborn version: 0.13.2

# Check versions
print("numpy version:", np.__version__)
print("pandas version:", pd.__version__)
print("matplotlib version:", plt.matplotlib.__version__)
print("seaborn version:", sns.__version__)`},{t:`md`,s:`### **1.1** Load the dataset
<font color = red>[5 marks]</font> <br>`},{t:`md`,s:`You will see twelve files, one for each month.

To read parquet files with Pandas, you have to follow a similar syntax as that for CSV files.

\`df = pd.read_parquet('file.parquet')\``},{t:`code`,s:`# Try loading one file

# df = pd.read_parquet('2023-1.parquet')
# df.info()`},{t:`md`,s:`How many rows are there? Do you think handling such a large number of rows is computationally feasible when we have to combine the data for all twelve months into one?

To handle this, we need to sample a fraction of data from each of the files. How to go about that? Think of a way to select only some portion of the data from each month's file that accurately represents the trends.`},{t:`md`,s:`#### Sampling the Data
> One way is to take a small percentage of entries for pickup in every hour of a date. So, for all the days in a month, we can iterate through the hours and select 5% values randomly from those. Use \`tpep_pickup_datetime\` for this. Separate date and hour from the datetime values and then for each date, select some fraction of trips for each of the 24 hours.

To sample data, you can use the \`sample()\` method. Follow this syntax:

\`\`\`Python
# sampled_data is an empty DF to keep appending sampled data of each hour
# hour_data is the DF of entries for an hour 'X' on a date 'Y'

sample = hour_data.sample(frac = 0.05, random_state = 42)
# sample 0.05 of the hour_data
# random_state is just a seed for sampling, you can define it yourself

sampled_data = pd.concat([sampled_data, sample]) # adding data for this hour to the DF
\`\`\`

This *sampled_data* will contain 5% values selected at random from each hour.

Note that the code given above is only the part that will be used for sampling and not the complete code required for sampling and combining the data files.

Keep in mind that you sample by date AND hour, not just hour. (Why?)`},{t:`md`,s:`---`},{t:`md`,s:`**1.1.1** <font color = red>[5 marks]</font> <br>
Figure out how to sample and combine the files.`,ref:`1.1.1`},{t:`md`,s:`**Note:** It is not mandatory to use the method specified above. While sampling, you only need to make sure that your sampled data represents the overall data of all the months accurately.`},{t:`code`,s:`# Sample the data
# It is recommmended to not load all the files at once to avoid memory overload`},{t:`code`,s:`# from google.colab import drive
# drive.mount('/content/drive')`},{t:`code`,s:`# Take a small percentage of entries from each hour of every date.
# Iterating through the monthly data:
#   read a month file -> day -> hour: append sampled data -> move to next hour -> move to next day after 24 hours -> move to next month file
# Create a single dataframe for the year combining all the monthly data

# Select the folder having data files
import os

# Select the folder having data files
os.chdir('/content/Assignments/EDA/data_NYC_Taxi/trip_records')

# Create a list of all the twelve files to read
file_list = os.listdir()

# initialise an empty dataframe
df = pd.DataFrame()


# iterate through the list of files and sample one by one:
for file_name in file_list:
    try:
        # file path for the current file
        file_path = os.path.join(os.getcwd(), file_name)

        # Reading the current file



        # We will store the sampled data for the current date in this df by appending the sampled data from each hour to this
        # After completing iteration through each date, we will append this data to the final dataframe.
        sampled_data = pd.DataFrame()

        # Loop through dates and then loop through every hour of each date

            # Iterate through each hour of the selected date

                # Sample 5% of the hourly data randomly

                # add data of this hour to the dataframe

        # Concatenate the sampled data of all the dates to a single dataframe
        df = # we initialised this empty DF earlier

    except Exception as e:
        print(f"Error reading file {file_name}: {e}")`},{t:`md`,s:`After combining the data files into one DataFrame, convert the new DataFrame to a CSV or parquet file and store it to use directly.

Ideally, you can try keeping the total entries to around 250,000 to 300,000.`},{t:`code`,s:`# Store the df in csv/parquet
# df.to_parquet('')`},{t:`md`,s:`## **2** Data Cleaning
<font color = red>[30 marks]</font> <br>`},{t:`md`,s:`Now we can load the new data directly.`},{t:`code`,s:`# Load the new data file

`},{t:`code`,s:`# df.head()`},{t:`code`,s:`# df.info()`},{t:`md`,s:`#### **2.1** Fixing Columns
<font color = red>[10 marks]</font> <br>

Fix/drop any columns as you seem necessary in the below sections`},{t:`md`,s:`**2.1.1** <font color = red>[2 marks]</font> <br>

Fix the index and drop unnecessary columns`,ref:`2.1.1`},{t:`code`,s:`# Fix the index and drop any columns that are not needed

`},{t:`md`,s:`**2.1.2** <font color = red>[3 marks]</font> <br>
There are two airport fee columns. This is possibly an error in naming columns. Let's see whether these can be combined into a single column.`,ref:`2.1.2`},{t:`code`,s:`# Combine the two airport fee columns

`},{t:`md`,s:`**2.1.3** <font color = red>[5 marks]</font> <br>
Fix columns with negative (monetary) values`,ref:`2.1.3`},{t:`code`,s:`# check where values of fare amount are negative

`},{t:`md`,s:"Did you notice something different in the `RatecodeID` column for above records?"},{t:`code`,s:`# Analyse RatecodeID for the negative fare amounts

`},{t:`code`,s:`# Find which columns have negative values

`},{t:`code`,s:`# fix these negative values

`},{t:`md`,s:`### **2.2** Handling Missing Values
<font color = red>[10 marks]</font> <br>`},{t:`md`,s:`**2.2.1**  <font color = red>[2 marks]</font> <br>
Find the proportion of missing values in each column


`,ref:`2.2.1`},{t:`code`,s:`# Find the proportion of missing values in each column

`},{t:`md`,s:"**2.2.2**  <font color = red>[3 marks]</font> <br>\nHandling missing values in `passenger_count`",ref:`2.2.2`},{t:`code`,s:`# Display the rows with null values
# Impute NaN values in 'passenger_count'
`},{t:`md`,s:`Did you find zeroes in passenger_count? Handle these.`},{t:`md`,s:"**2.2.3**  <font color = red>[2 marks]</font> <br>\nHandle missing values in `RatecodeID`",ref:`2.2.3`},{t:`code`,s:`# Fix missing values in 'RatecodeID'
`},{t:`md`,s:"**2.2.4**  <font color = red>[3 marks]</font> <br>\nImpute NaN in `congestion_surcharge`",ref:`2.2.4`},{t:`code`,s:`# handle null values in congestion_surcharge


`},{t:`md`,s:`Are there missing values in other columns? Did you find NaN values in some other set of columns? Handle those missing values below.`},{t:`code`,s:`# Handle any remaining missing values

`},{t:`md`,s:`### **2.3** Handling Outliers
<font color = red>[10 marks]</font> <br>`},{t:`md`,s:`Before we start fixing outliers, let's perform outlier analysis.`},{t:`code`,s:`# Describe the data and check if there are any potential outliers present
# Check for potential out of place values in various columns

`},{t:`md`,s:"**2.3.1**  <font color = red>[10 marks]</font> <br>\nBased on the above analysis, it seems that some of the outliers are present due to errors in registering the trips. Fix the outliers.\n\nSome points you can look for:\n- Entries where `trip_distance` is nearly 0 and `fare_amount` is more than 300\n- Entries where `trip_distance` and `fare_amount` are 0 but the pickup and dropoff zones are different (both distance and fare should not be zero for different zones)\n- Entries where `trip_distance` is more than 250  miles.\n- Entries where `payment_type` is 0 (there is no payment_type 0 defined in the data dictionary)\n\nThese are just some suggestions. You can handle outliers in any way you wish, using the insights from above outlier analysis.",ref:`2.3.1`},{t:`md`,s:`How will you fix each of these values? Which ones will you drop and which ones will you replace?`},{t:`md`,s:`First, let us remove 7+ passenger counts as there are very less instances.`},{t:`code`,s:`# remove passenger_count > 6
`},{t:`code`,s:`# Continue with outlier handling

`},{t:`code`,s:`# Do any columns need standardising?

`},{t:`md`,s:`## **3** Exploratory Data Analysis
<font color = red>[90 marks]</font> <br>`},{t:`code`,s:`df.columns.tolist()`},{t:`md`,s:`#### **3.1** General EDA: Finding Patterns and Trends
<font color = red>[40 marks]</font> <br>`},{t:`md`,s:"**3.1.1** <font color = red>[3 marks]</font> <br>\nCategorise the varaibles into Numerical or Categorical.\n* `VendorID`:\n* `tpep_pickup_datetime`:\n* `tpep_dropoff_datetime`:\n* `passenger_count`:\n* `trip_distance`:\n* `RatecodeID`:\n* `PULocationID`:\n* `DOLocationID`:\n* `payment_type`:\n* `pickup_hour`:\n* `trip_duration`:\n\n\nThe following monetary parameters belong in the same category, is it categorical or numerical?\n\n\n* `fare_amount`\n* `extra`\n* `mta_tax`\n* `tip_amount`\n* `tolls_amount`\n* `improvement_surcharge`\n* `total_amount`\n* `congestion_surcharge`\n* `airport_fee`",ref:`3.1.1`},{t:`md`,s:`##### Temporal Analysis`},{t:`md`,s:`**3.1.2** <font color = red>[5 marks]</font> <br>
Analyse the distribution of taxi pickups by hours, days of the week, and months.`,ref:`3.1.2`},{t:`code`,s:`# Find and show the hourly trends in taxi pickups

`},{t:`code`,s:`# Find and show the daily trends in taxi pickups (days of the week)

`},{t:`code`,s:`# Show the monthly trends in pickups

`},{t:`md`,s:`##### Financial Analysis`},{t:`md`,s:"Take a look at the financial parameters like `fare_amount`, `tip_amount`, `total_amount`, and also `trip_distance`. Do these contain zero/negative values?"},{t:`code`,s:`# Analyse the above parameters

`},{t:`md`,s:`Do you think it is beneficial to create a copy DataFrame leaving out the zero values from these?`},{t:`md`,s:`**3.1.3** <font color = red>[2 marks]</font> <br>
Filter out the zero values from the above columns.

**Note:** The distance might be 0 in cases where pickup and drop is in the same zone. Do you think it is suitable to drop such cases of zero distance?`,ref:`3.1.3`},{t:`code`,s:`# Create a df with non zero entries for the selected parameters.

`},{t:`md`,s:"**3.1.4** <font color = red>[3 marks]</font> <br>\nAnalyse the monthly revenue (`total_amount`) trend",ref:`3.1.4`},{t:`code`,s:`# Group data by month and analyse monthly revenue

`},{t:`md`,s:`**3.1.5** <font color = red>[3 marks]</font> <br>
Show the proportion of each quarter of the year in the revenue`,ref:`3.1.5`},{t:`code`,s:`# Calculate proportion of each quarter

`},{t:`md`,s:"**3.1.6** <font color = red>[3 marks]</font> <br>\nVisualise the relationship between `trip_distance` and `fare_amount`. Also find the correlation value for these two.\n\n**Hint:** You can leave out the trips with trip_distance = 0",ref:`3.1.6`},{t:`code`,s:`# Show how trip fare is affected by distance

`},{t:`md`,s:"**3.1.7** <font color = red>[5 marks]</font> <br>\nFind and visualise the correlation between:\n1. `fare_amount` and trip duration (pickup time to dropoff time)\n2. `fare_amount` and `passenger_count`\n3. `tip_amount` and `trip_distance`",ref:`3.1.7`},{t:`code`,s:`# Show relationship between fare and trip duration

`},{t:`code`,s:`# Show relationship between fare and number of passengers

`},{t:`code`,s:`# Show relationship between tip and trip distance

`},{t:`md`,s:"**3.1.8** <font color = red>[3 marks]</font> <br>\nAnalyse the distribution of different payment types (`payment_type`)",ref:`3.1.8`},{t:`code`,s:`# Analyse the distribution of different payment types (payment_type).


`},{t:`md`,s:`- 1= Credit card
- 2= Cash
- 3= No charge
- 4= Dispute

`},{t:`md`,s:`##### Geographical Analysis`},{t:`md`,s:`For this, you have to use the *taxi_zones.shp* file from the *taxi_zones* folder.

There would be multiple files inside the folder (such as *.shx, .sbx, .sbn* etc). You do not need to import/read any of the files other than the shapefile, *taxi_zones.shp*.

Do not change any folder structure - all the files need to be present inside the folder for it to work.

The folder structure should look like this:
\`\`\`
Taxi Zones
|- taxi_zones.shp.xml
|- taxi_zones.prj
|- taxi_zones.sbn
|- taxi_zones.shp
|- taxi_zones.dbf
|- taxi_zones.shx
|- taxi_zones.sbx

 \`\`\`

 You only need to read the \`taxi_zones.shp\` file. The *shp* file will utilise the other files by itself.`},{t:`md`,s:`We will use the *GeoPandas* library for geopgraphical analysis
\`\`\`
import geopandas as gpd
\`\`\`

More about geopandas and shapefiles: [About](https://geopandas.org/en/stable/about.html)


Reading the shapefile is very similar to *Pandas*. Use \`gpd.read_file()\` function to load the data (*taxi_zones.shp*) as a GeoDataFrame. Documentation: [Reading and Writing Files](https://geopandas.org/en/stable/docs/user_guide/io.html)`},{t:`code`,s:`# !pip install geopandas`},{t:`md`,s:`**3.1.9** <font color = red>[2 marks]</font> <br>
Load the shapefile and display it.`,ref:`3.1.9`},{t:`code`,s:`# import geopandas as gpd


# Read the shapefile using geopandas
zones = # read the .shp file using gpd
zones.head()`},{t:`md`,s:"Now, if you look at the DataFrame created, you will see columns like: `OBJECTID`,`Shape_Leng`, `Shape_Area`, `zone`, `LocationID`, `borough`, `geometry`.\n<br><br>\n\nNow, the `locationID` here is also what we are using to mark pickup and drop zones in the trip records.\n\nThe geometric parameters like shape length, shape area and geometry are used to plot the zones on a map.\n\nThis can be easily done using the `plot()` method."},{t:`code`,s:`# print(zones.info())
# zones.plot()`},{t:`md`,s:`Now, you have to merge the trip records and zones data using the location IDs.

`},{t:`md`,s:"**3.1.10** <font color = red>[3 marks]</font> <br>\nMerge the zones data into trip data using the `locationID` and `PULocationID` columns.",ref:`3.1.10`},{t:`code`,s:`# Merge zones and trip records using locationID and PULocationID

`},{t:`md`,s:`**3.1.11** <font color = red>[3 marks]</font> <br>
Group data by location IDs to find the total number of trips per location ID`,ref:`3.1.11`},{t:`code`,s:`# Group data by location and calculate the number of trips

`},{t:`md`,s:`**3.1.12** <font color = red>[2 marks]</font> <br>
Now, use the grouped data to add number of trips to the GeoDataFrame.

We will use this to plot a map of zones showing total trips per zone.`,ref:`3.1.12`},{t:`code`,s:`# Merge trip counts back to the zones GeoDataFrame


`},{t:`md`,s:`The next step is creating a color map (choropleth map) showing zones by the number of trips taken.

Again, you can use the \`zones.plot()\` method for this. [Plot Method GPD](https://geopandas.org/en/stable/docs/reference/api/geopandas.GeoDataFrame.plot.html#geopandas.GeoDataFrame.plot)

But first, you need to define the figure and axis for the plot.

\`fig, ax = plt.subplots(1, 1, figsize = (12, 10))\`

This function creates a figure (fig) and a single subplot (ax)

---`},{t:`md`,s:`After setting up the figure and axis, we can proceed to plot the GeoDataFrame on this axis. This is done in the next step where we use the plot method of the GeoDataFrame.

You can define the following parameters in the \`zones.plot()\` method:
\`\`\`
column = '',
ax = ax,
legend = True,
legend_kwds = {'label': "label", 'orientation': "<horizontal/vertical>"}
\`\`\`

To display the plot, use \`plt.show()\`.`},{t:`md`,s:`**3.1.13** <font color = red>[3 marks]</font> <br>
Plot a color-coded map showing zone-wise trips`,ref:`3.1.13`},{t:`code`,s:`# Define figure and axis


# Plot the map and display it

`},{t:`code`,s:`# can you try displaying the zones DF sorted by the number of trips?

`},{t:`md`,s:`Here we have completed the temporal, financial and geographical analysis on the trip records.

**Compile your findings from general analysis below:**`},{t:`md`,s:`You can consider the following points:

* Busiest hours, days and months
* Trends in revenue collected
* Trends in quarterly revenue
* How fare depends on trip distance, trip duration and passenger counts
* How tip amount depends on trip distance
* Busiest zones
`},{t:`md`,s:`#### **3.2** Detailed EDA: Insights and Strategies
<font color = red>[50 marks]</font> <br>`},{t:`md`,s:`Having performed basic analyses for finding trends and patterns, we will now move on to some detailed analysis focussed on operational efficiency, pricing strategies, and customer experience.`},{t:`md`,s:`##### Operational Efficiency`},{t:`md`,s:`Analyze variations by time of day and location to identify bottlenecks or inefficiencies in routes`},{t:`md`,s:`**3.2.1** <font color = red>[3 marks]</font> <br>
Identify slow routes by calculating the average time taken by cabs to get from one zone to another at different hours of the day.`,ref:`3.2.1`},{t:`md`,s:`Speed on a route *X* for hour *Y* = (*distance of the route X / average trip duration for hour Y*)`},{t:`code`,s:`# Find routes which have the slowest speeds at different times of the day

`},{t:`md`,s:`How does identifying high-traffic, high-demand routes help us?`},{t:`md`,s:`**3.2.2** <font color = red>[3 marks]</font> <br>
Calculate the number of trips at each hour of the day and visualise them. Find the busiest hour and show the number of trips for that hour.`,ref:`3.2.2`},{t:`code`,s:`# Visualise the number of trips per hour and find the busiest hour

`},{t:`md`,s:`Remember, we took a fraction of trips. To find the actual number, you have to scale the number up by the sampling ratio.`},{t:`md`,s:`**3.2.3** <font color = red>[2 mark]</font> <br>
Find the actual number of trips in the five busiest hours`,ref:`3.2.3`},{t:`code`,s:`# Scale up the number of trips

# Fill in the value of your sampling fraction and use that to scale up the numbers
sample_fraction =

`},{t:`md`,s:`**3.2.4** <font color = red>[3 marks]</font> <br>
Compare hourly traffic pattern on weekdays. Also compare for weekend.`,ref:`3.2.4`},{t:`code`,s:`# Compare traffic trends for the week days and weekends

`},{t:`md`,s:`What can you infer from the above patterns? How will finding busy and quiet hours for each day help us?`},{t:`md`,s:`**3.2.5** <font color = red>[3 marks]</font> <br>
Identify top 10 zones with high hourly pickups. Do the same for hourly dropoffs. Show pickup and dropoff trends in these zones.`,ref:`3.2.5`},{t:`code`,s:`# Find top 10 pickup and dropoff zones

`},{t:`md`,s:`**3.2.6** <font color = red>[3 marks]</font> <br>
Find the ratio of pickups and dropoffs in each zone. Display the 10 highest (pickup/drop) and 10 lowest (pickup/drop) ratios.`,ref:`3.2.6`},{t:`code`,s:`# Find the top 10 and bottom 10 pickup/dropoff ratios

`},{t:`md`,s:`**3.2.7** <font color = red>[3 marks]</font> <br>
Identify zones with high pickup and dropoff traffic during night hours (11PM to 5AM)`,ref:`3.2.7`},{t:`code`,s:`# During night hours (11pm to 5am) find the top 10 pickup and dropoff zones
# Note that the top zones should be of night hours and not the overall top zones

`},{t:`md`,s:`Now, let us find the revenue share for the night time hours and the day time hours. After this, we will move to deciding a pricing strategy.

**3.2.8** <font color = red>[2 marks]</font> <br>
Find the revenue share for nighttime and daytime hours.`,ref:`3.2.8`},{t:`code`,s:`# Filter for night hours (11 PM to 5 AM)

`},{t:`md`,s:`##### Pricing Strategy`},{t:`md`,s:`**3.2.9** <font color = red>[2 marks]</font> <br>
For the different passenger counts, find the average fare per mile per passenger.

For instance, suppose the average fare per mile for trips with 3 passengers is 3 USD/mile, then the fare per mile per passenger will be 1 USD/mile.`,ref:`3.2.9`},{t:`code`,s:`# Analyse the fare per mile per passenger for different passenger counts


`},{t:`md`,s:`**3.2.10** <font color = red>[3 marks]</font> <br>
Find the average fare per mile by hours of the day and by days of the week`,ref:`3.2.10`},{t:`code`,s:`# Compare the average fare per mile for different days and for different times of the day

`},{t:`md`,s:`**3.2.11** <font color = red>[3 marks]</font> <br>
Analyse the average fare per mile for the different vendors for different hours of the day`,ref:`3.2.11`},{t:`code`,s:`# Compare fare per mile for different vendors

`},{t:`md`,s:`**3.2.12** <font color = red>[5 marks]</font> <br>
Compare the fare rates of the different vendors in a tiered fashion. Analyse the average fare per mile for distances upto 2 miles. Analyse the fare per mile for distances from 2 to 5 miles. And then for distances more than 5 miles.
`,ref:`3.2.12`},{t:`code`,s:`# Defining distance tiers

`},{t:`md`,s:`##### Customer Experience and Other Factors`},{t:`md`,s:`**3.2.13** <font color = red>[5 marks]</font> <br>
Analyse average tip percentages based on trip distances, passenger counts and time of pickup. What factors lead to low tip percentages?`,ref:`3.2.13`},{t:`code`,s:`#  Analyze tip percentages based on distances, passenger counts and pickup times

`},{t:`md`,s:`Additional analysis [optional]: Let's try comparing cases of low tips with cases of high tips to find out if we find a clear aspect that drives up the tipping behaviours`},{t:`code`,s:`# Compare trips with tip percentage < 10% to trips with tip percentage > 25%

`},{t:`md`,s:`**3.2.14** <font color = red>[3 marks]</font> <br>
Analyse the variation of passenger count across hours and days of the week.`,ref:`3.2.14`},{t:`code`,s:`# See how passenger count varies across hours and days


`},{t:`md`,s:`**3.2.15** <font color = red>[2 marks]</font> <br>
Analyse the variation of passenger counts across zones`,ref:`3.2.15`},{t:`code`,s:`# How does passenger count vary across zones

`},{t:`code`,s:`# For a more detailed analysis, we can use the zones_with_trips GeoDataFrame
# Create a new column for the average passenger count in each zone.

`},{t:`md`,s:`Find out how often surcharges/extra charges are applied to understand their prevalance`},{t:`md`,s:`**3.2.16** <font color = red>[5 marks]</font> <br>
Analyse the pickup/dropoff zones or times when extra charges are applied more frequently`,ref:`3.2.16`},{t:`code`,s:`# How often is each surcharge applied?

`},{t:`md`,s:`## **4** Conclusion
<font color = red>[15 marks]</font> <br>`},{t:`md`,s:`### **4.1** Final Insights and Recommendations
<font color = red>[15 marks]</font> <br>

Conclude your analyses here. Include all the outcomes you found based on the analysis.

Based on the insights, frame a concluding story explaining suitable parameters such as location, time of the day, day of the week etc. to be kept in mind while devising a strategy to meet customer demand and optimise supply.`},{t:`md`,s:`**4.1.1** <font color = red>[5 marks]</font> <br>
Recommendations to optimize routing and dispatching based on demand patterns and operational inefficiencies`,ref:`4.1.1`},{t:`code`,s:``},{t:`md`,s:`**4.1.2** <font color = red>[5 marks]</font> <br>

Suggestions on strategically positioning cabs across different zones to make best use of insights uncovered by analysing trip trends across time, days and months.`,ref:`4.1.2`},{t:`code`,s:``},{t:`md`,s:`**4.1.3** <font color = red>[5 marks]</font> <br>
Propose data-driven adjustments to the pricing strategy to maximize revenue while maintaining competitive rates with other vendors.`,ref:`4.1.3`},{t:`code`,s:``}],guides:{"1.1.1":{vi:{think:`Mỗi file tháng có hàng triệu dòng. Bạn không tải hết, bạn lấy 5% của từng giờ trong từng ngày để mẫu giữ nhịp thật của cả năm.`,steps:[`Đọc từng file một, không đọc cả 12 file cùng lúc.`,`Tạo cột ngày và giờ từ tpep_pickup_datetime.`,`Với mỗi ngày, mỗi giờ: lấy sample(frac=0.05, random_state=42).`,`Nối kết quả của các giờ rồi các ngày thành một bảng của tháng, rồi nối 12 tháng.`,`Lưu ra parquet và đếm số dòng. Với dữ liệu đầy đủ 38,3 triệu chuyến, 5% ra khoảng 1,9 triệu dòng; muốn còn 250.000 đến 300.000 như đề gợi ý thì lấy khoảng 0,7%. Nhớ dùng đúng tỷ lệ này ở bài 3.2.3.`],code:`df = pd.DataFrame()
for file_name in file_list:
    month = pd.read_parquet(file_path)
    month['date'] = month['tpep_pickup_datetime'].dt.date
    month['hour'] = month['tpep_pickup_datetime'].dt.hour
    parts = []
    for (d, h), grp in month.groupby(['date', 'hour']):
        parts.append(grp.sample(frac=0.05, random_state=42))
    df = pd.concat([df] + parts)
df = df.drop(columns=['date', 'hour'])`,lotus:`Sổ booking Lotus Spa có 12 tháng. Lấy 5% theo từng ngày và từng giờ giữ được cả giờ vắng lẫn giờ đông. Nếu chỉ lấy 5% theo giờ chung cho cả năm, giờ nào của ngày nào cũng bị trộn lẫn.`,trap:`Lấy mẫu theo giờ mà không theo ngày sẽ làm lệch các ngày ít xe. Ghi lại sample_fraction vì bài 3.2.3 cần nó để nhân lên.`,read:[`Mỗi dòng là một file tháng: số chuyến gốc → số chuyến trong mẫu 5%.`,`Dòng cuối là tổng cả năm và số dòng của mẫu.`],remark:`Cả năm 2023 có 38.310.226 chuyến; mẫu 5% mỗi giờ mỗi ngày lấy khoảng 1,9 triệu dòng, vẫn giữ nhịp theo từng tháng (mỗi tháng 141–176 nghìn dòng).`,howRemark:[`Nêu tổng chuyến cả năm và cỡ mẫu.`,`Kiểm tỷ lệ lấy mẫu ≈ 5% mỗi tháng.`,`Nói vì sao lấy mẫu theo giờ và ngày.`]},en:{think:`Each monthly file has millions of rows. You do not load everything; you take 5% of every hour of every day so the sample keeps the real rhythm of the whole year.`,steps:[`Read one file at a time, not all 12 at once.`,`Create a date and an hour column from tpep_pickup_datetime.`,`For each date and hour: take sample(frac=0.05, random_state=42).`,`Concatenate the hours, then the days, into one month table, then the 12 months.`,`Save to parquet and count rows. With the full 38.3 million trips, 5% gives about 1.9 million rows; to land at 250,000 to 300,000 as the brief suggests, sample about 0.7%. Use the same fraction in task 3.2.3.`],code:`df = pd.DataFrame()
for file_name in file_list:
    month = pd.read_parquet(file_path)
    month['date'] = month['tpep_pickup_datetime'].dt.date
    month['hour'] = month['tpep_pickup_datetime'].dt.hour
    parts = []
    for (d, h), grp in month.groupby(['date', 'hour']):
        parts.append(grp.sample(frac=0.05, random_state=42))
    df = pd.concat([df] + parts)
df = df.drop(columns=['date', 'hour'])`,lotus:`The Lotus Spa booking log covers 12 months. Taking 5% by each day and each hour keeps both quiet and busy hours. Taking 5% by hour across the whole year would blend every day together.`,trap:`Sampling by hour without the date skews quiet days. Record sample_fraction because task 3.2.3 needs it to scale up.`,read:[`Each line is a monthly file: original trips → trips in the 5% sample.`,`The last line is the yearly total and the sample size.`],remark:`2023 has 38,310,226 trips; the 5% per hour per day sample keeps about 1.9 million rows, preserving each month's rhythm (141–176 thousand rows per month).`,howRemark:[`State the yearly total and sample size.`,`Check the sampling rate ≈ 5% each month.`,`Say why sample by hour and day.`]}},"2.1.1":{vi:{think:`Sau khi nối và đọc lại, bảng có thể mang thêm cột chỉ số cũ. Bạn đặt lại chỉ số và bỏ cột không phục vụ câu hỏi.`,steps:[`df = df.reset_index(drop=True).`,`Xem df.columns và bỏ cột dư (ví dụ cột chỉ số cũ, hoặc cột mà bạn quyết định không dùng, như store_and_fwd_flag).`,`Ghi lý do bỏ mỗi cột trong một dòng chú thích.`],code:`df = df.reset_index(drop=True)
# drop columns you will not use, with a reason for each
df = df.drop(columns=['store_and_fwd_flag'])`,lotus:`Bảng booking có cột «mã in phiếu» không dùng cho câu hỏi nào. Bỏ nó đi và ghi lý do, để tháng sau mở lại không phải đoán.`,trap:`Đừng bỏ cột chỉ vì không hiểu nó. Bỏ vì biết mình không cần.`,read:[`Mỗi dòng là một cột: tên, kiểu dữ liệu.`,`Tổng 1.915.510 dòng và 20 cột sau khi nối 12 tháng.`,`datetime64 là thời điểm; float64 là số thập phân.`],remark:`Bảng gộp có 1.915.510 dòng × 20 cột; hai cột giờ đã đúng kiểu thời gian nên tính được thời lượng chuyến.`,howRemark:[`Báo hình dạng.`,`Kiểm kiểu dữ liệu cột giờ.`,`Nêu cột bỏ hoặc đổi.`]},en:{think:`After combining and re-reading, the table may carry a leftover index column. You reset the index and drop columns that do not serve the question.`,steps:[`df = df.reset_index(drop=True).`,`Look at df.columns and drop extras (for example an old index column, or a column you decide not to use, such as store_and_fwd_flag).`,`Write one comment line giving the reason for each drop.`],code:`df = df.reset_index(drop=True)
# drop columns you will not use, with a reason for each
df = df.drop(columns=['store_and_fwd_flag'])`,lotus:`The booking table has a “receipt print code” column no question uses. Drop it and note why, so reopening next month needs no guessing.`,trap:`Do not drop a column because you do not understand it. Drop it because you know you do not need it.`,read:[`Each row is a column: name and data type.`,`1,915,510 rows and 20 columns after joining 12 months.`,`datetime64 is a timestamp; float64 a decimal number.`],remark:`The merged table has 1,915,510 rows × 20 columns; the two time columns have the right type so trip duration can be computed.`,howRemark:[`Report the shape.`,`Check the time columns' types.`,`State columns dropped or converted.`]}},"2.1.2":{vi:{think:`Cùng một cột bị ghi hai kiểu chữ: Airport_fee và airport_fee. Tháng này dùng tên này, tháng kia dùng tên kia, nên nối lại sinh hai cột lấp nhau.`,steps:[`Đếm giá trị không rỗng của mỗi cột: df[['Airport_fee','airport_fee']].notna().sum().`,`Kiểm tra hai cột không cùng có giá trị trên một dòng.`,`Gộp: df['airport_fee'] = df['airport_fee'].combine_first(df['Airport_fee']).`,`Bỏ cột còn lại.`],code:`print(df[['Airport_fee', 'airport_fee']].notna().sum())
both = df['Airport_fee'].notna() & df['airport_fee'].notna()
print(both.sum())  # expect 0
df['airport_fee'] = df['airport_fee'].combine_first(df['Airport_fee'])
df = df.drop(columns=['Airport_fee'])`,lotus:`Chi nhánh Quận 1 ghi «Khu_vực», chi nhánh Thủ Đức ghi «khu_vuc». Nối hai sổ lại ra hai cột nửa rỗng. Gộp thành một cột trước khi đếm.`,trap:`Nếu hai cột cùng có giá trị trên một dòng thì không được gộp bằng combine_first mà không xem lại.`,read:[`Dòng đầu là hai tên cột trùng nghĩa: airport_fee và Airport_fee.`,`Bảng describe là cột đã gộp: min −1,75, max 1,75.`],remark:`Hai tên cột chỉ khác chữ hoa nhưng cùng một phí; đã gộp thành một cột airport_fee (trung bình 0,14, giá trị từ −1,75 đến 1,75).`,howRemark:[`Nêu hai tên và vì sao nên gộp.`,`Kiểm cột gộp có đủ dòng.`,`Nhắc giá trị âm xử lý ở 2.1.3.`]},en:{think:`The same column is spelled two ways: Airport_fee and airport_fee. One month uses one name, another month the other, so concatenation creates two complementary columns.`,steps:[`Count non-null values in each: df[['Airport_fee','airport_fee']].notna().sum().`,`Check the two never both hold a value on one row.`,`Merge: df['airport_fee'] = df['airport_fee'].combine_first(df['Airport_fee']).`,`Drop the leftover column.`],code:`print(df[['Airport_fee', 'airport_fee']].notna().sum())
both = df['Airport_fee'].notna() & df['airport_fee'].notna()
print(both.sum())  # expect 0
df['airport_fee'] = df['airport_fee'].combine_first(df['Airport_fee'])
df = df.drop(columns=['Airport_fee'])`,lotus:`District 1 writes “Khu_vuc”, Thu Duc writes “khu_vuc”. Joining the two logs gives two half-empty columns. Merge into one before counting.`,trap:`If both columns hold a value on one row, do not merge with combine_first without looking again.`,read:[`First line shows two same-meaning names: airport_fee and Airport_fee.`,`The describe table is the merged column: min −1.75, max 1.75.`],remark:`The two names differ only by case but are the same fee; merged into one airport_fee column (mean 0.14, values from −1.75 to 1.75).`,howRemark:[`State both names and why to merge.`,`Check the merged column has all rows.`,`Remind negatives are handled in 2.1.3.`]}},"2.1.3":{vi:{think:`Có dòng tiền âm. Trước khi sửa, hỏi nó là gì: thường là hoàn tiền hoặc tranh chấp, không phải giá âm thật.`,steps:[`Lọc df[df['fare_amount'] < 0] và đếm.`,`Xem RatecodeID và payment_type của các dòng đó (task hỏi cột RatecodeID khác thế nào).`,`Tìm mọi cột tiền có giá trị âm: (df[money_cols] < 0).sum().`,`Quyết định: lấy trị tuyệt đối nếu số âm là hoàn tiền ghi ngược dấu; bỏ nếu là lỗi.`],code:`money = ['fare_amount','extra','mta_tax','tip_amount','tolls_amount','improvement_surcharge','total_amount','congestion_surcharge','airport_fee']
print((df[money] < 0).sum())
neg = df[df['fare_amount'] < 0]
print(neg['RatecodeID'].value_counts(dropna=False))
print(neg['payment_type'].value_counts())
df[money] = df[money].abs()`,lotus:`Một dòng booking ghi -650 nghìn. Đó là hoàn tiền gói A12, không phải spa trả tiền cho khách. Hiểu nó là hoàn tiền thì mới chọn lấy trị tuyệt đối hoặc giữ riêng.`,trap:`Sửa dấu hàng loạt mà không nhìn các dòng đó là gì có thể che mất một nhóm giao dịch hoàn tiền.`,read:[`Bảng đầu: số dòng âm ở mỗi cột tiền; fare_amount có 19.059 dòng âm.`,`Bảng sau: số chuyến theo RatecodeID, mã 1 là giá chuẩn.`,`Dòng âm thường là hoàn tiền hoặc tranh chấp.`],remark:`Có hàng chục nghìn dòng tiền âm (fare_amount 19.059, total_amount 18.801), chủ yếu là hoàn tiền hoặc tranh chấp, nên xử lý bằng quy tắc rõ ràng thay vì sửa tùy ý.`,howRemark:[`Nêu cột có nhiều dòng âm.`,`Giải thích nguyên nhân có thể.`,`Nói quyết định: bỏ hay đổi dấu, và vì sao.`]},en:{think:`Some rows carry negative money. Before fixing, ask what they are: usually refunds or disputes, not truly negative prices.`,steps:[`Filter df[df['fare_amount'] < 0] and count.`,`Look at RatecodeID and payment_type for those rows (the task asks what is different in RatecodeID).`,`Find every money column with negatives: (df[money_cols] < 0).sum().`,`Decide: take the absolute value if negatives are refunds recorded with a flipped sign; drop if they are errors.`],code:`money = ['fare_amount','extra','mta_tax','tip_amount','tolls_amount','improvement_surcharge','total_amount','congestion_surcharge','airport_fee']
print((df[money] < 0).sum())
neg = df[df['fare_amount'] < 0]
print(neg['RatecodeID'].value_counts(dropna=False))
print(neg['payment_type'].value_counts())
df[money] = df[money].abs()`,lotus:`One booking row shows -650 thousand. It is a refund of package A12, not the spa paying the customer. Knowing it is a refund is what lets you choose absolute value or keeping it apart.`,trap:`Flipping signs in bulk without looking at what those rows are can hide a whole group of refund transactions.`,read:[`First table: negative rows per money column; fare_amount has 19,059.`,`Second table: trips per RatecodeID, code 1 is the standard fare.`,`Negative rows are usually refunds or disputes.`],remark:`There are tens of thousands of negative money rows (fare_amount 19,059, total_amount 18,801), mostly refunds or disputes, so handle them by a clear rule rather than ad hoc fixes.`,howRemark:[`Name the columns with many negatives.`,`Explain the likely cause.`,`State the decision: drop or flip sign, and why.`]}},"2.2.1":{vi:{think:`Trước khi điền chỗ trống, đếm chỗ trống: cột nào thiếu bao nhiêu phần trăm.`,steps:[`df.isnull().mean() * 100.`,`Sắp xếp giảm dần và chỉ xem cột có thiếu.`,`Nhìn xem các cột thiếu có thiếu cùng các dòng không.`],code:`miss = (df.isnull().mean() * 100).sort_values(ascending=False)
print(miss[miss > 0])
# do the same rows miss several columns?
cols = ['passenger_count','RatecodeID','congestion_surcharge','airport_fee']
print(df[cols].isnull().all(axis=1).mean())`,lotus:`Trong bảng booking, nếu «số khách», «mã gói» và «phụ phí» cùng trống trên cùng các dòng thì đó là một nguồn nhập thiếu, không phải ba lỗi riêng.`,trap:`Điền từng cột riêng lẻ trước khi biết chúng thiếu cùng nhau hay không là điền khi chưa hiểu.`,read:[`Mỗi dòng là % thiếu của một cột; cả năm cột cùng 3,43%.`,`Cùng tỷ lệ nghĩa là thiếu theo cả dòng, không rải rác.`],remark:`Năm cột cùng thiếu 3,43%: các dòng này thiếu nguyên một khối thông tin, nên có thể cùng một nguyên nhân và xử lý chung.`,howRemark:[`Báo % từng cột.`,`Nhận ra các tỷ lệ giống nhau.`,`Nêu cách xử lý chung.`]},en:{think:`Before filling blanks, count blanks: which column misses what percentage.`,steps:[`df.isnull().mean() * 100.`,`Sort descending and look only at columns with gaps.`,`Check whether the gappy columns miss the same rows.`],code:`miss = (df.isnull().mean() * 100).sort_values(ascending=False)
print(miss[miss > 0])
# do the same rows miss several columns?
cols = ['passenger_count','RatecodeID','congestion_surcharge','airport_fee']
print(df[cols].isnull().all(axis=1).mean())`,lotus:`In the booking table, if “guests”, “package code” and “surcharge” are blank on the same rows, that is one source of missing entry, not three separate faults.`,trap:`Filling each column on its own before knowing whether they are missing together is filling without understanding.`,read:[`Each line is a column's % missing; all five at 3.43%.`,`The same rate means whole rows are missing, not scattered cells.`],remark:`Five columns share the same 3.43% missing: those rows lack a whole block of info, likely one cause and handled together.`,howRemark:[`Report each column's %.`,`Notice the identical rates.`,`State a joint treatment.`]}},"2.2.2":{vi:{think:`passenger_count thiếu và có cả số 0. Số 0 khách không có nghĩa, nên coi như thiếu.`,steps:[`Xem các dòng NaN: df[df['passenger_count'].isnull()].head().`,`Đếm số 0: (df['passenger_count'] == 0).sum().`,`Đổi 0 thành NaN rồi điền bằng giá trị thường gặp nhất (mode), vì đây là số đếm nguyên.`],code:`print(df['passenger_count'].value_counts(dropna=False).sort_index())
df['passenger_count'] = df['passenger_count'].replace(0, np.nan)
df['passenger_count'] = df['passenger_count'].fillna(df['passenger_count'].mode()[0])`,lotus:`Một booking ghi 0 khách thì chắc chắn nhập thiếu. Điền bằng 1 (giá trị thường gặp nhất) tốt hơn điền bằng trung bình 1,4 vì khách là số nguyên.`,trap:`Điền trung bình sẽ ra 1,37 hành khách: một số không tồn tại ở đời thực.`,read:[`Bảng đếm số chuyến theo số khách; có 0 khách (28.990) và thiếu (65.735).`,`7, 8, 9 khách rất ít, có thể là lỗi.`],remark:`Đa số chuyến 1 khách (1.390.732); 28.990 dòng 0 khách là vô lý và 65.735 dòng thiếu, nên coi 0 như thiếu rồi xử lý chung.`,howRemark:[`Nêu giá trị bất thường.`,`Giải thích vì sao 0 là thiếu.`,`Chọn cách điền và lý do.`]},en:{think:`passenger_count has blanks and also zeros. Zero passengers has no meaning, so treat it as missing.`,steps:[`Look at the NaN rows: df[df['passenger_count'].isnull()].head().`,`Count zeros: (df['passenger_count'] == 0).sum().`,`Turn 0 into NaN, then fill with the most common value (mode), since it is an integer count.`],code:`print(df['passenger_count'].value_counts(dropna=False).sort_index())
df['passenger_count'] = df['passenger_count'].replace(0, np.nan)
df['passenger_count'] = df['passenger_count'].fillna(df['passenger_count'].mode()[0])`,lotus:`A booking with 0 guests was surely entered wrongly. Filling with 1 (the most common) beats filling with a mean of 1.4 because guests are whole numbers.`,trap:`Filling with the mean gives 1.37 passengers: a number that does not exist in real life.`,read:[`The table counts trips by passenger number; zero (28,990) and missing (65,735).`,`7, 8, 9 passengers are very few, maybe errors.`],remark:`Most trips carry 1 passenger (1,390,732); 28,990 zero-passenger rows are meaningless and 65,735 are missing, so treat 0 as missing and handle together.`,howRemark:[`Name the abnormal values.`,`Explain why 0 is missing.`,`Choose the fill and the reason.`]}},"2.2.3":{vi:{think:`RatecodeID là mã, không phải số để lấy trung bình. Điền bằng mã thường gặp nhất.`,steps:[`Xem phân bố: df['RatecodeID'].value_counts(dropna=False).`,`Điền bằng mode, thường là 1 (giá chuẩn).`,`Kiểm tra lại không còn NaN.`],code:`print(df['RatecodeID'].value_counts(dropna=False))
df['RatecodeID'] = df['RatecodeID'].fillna(df['RatecodeID'].mode()[0])`,lotus:`Mã gói là A12, B07, C03: không có «trung bình của A12 và B07». Chỉ điền bằng mã hay gặp nhất.`,trap:`Trung bình của một mã vô nghĩa. Dùng mode cho cột mã.`,read:[`Bảng đếm RatecodeID: mã 1 áp đảo (1.744.049), có mã 99 (10.649) và thiếu (65.735).`,`Mã 99 không có trong từ điển dữ liệu.`],remark:`RatecodeID mã 1 chiếm áp đảo nên điền chỗ thiếu bằng mã 1 (mốt); mã 99 là giá trị lạ cần chú ý.`,howRemark:[`Nêu mã phổ biến nhất.`,`Giải thích vì sao dùng mốt, không dùng trung bình.`,`Ghi chú mã 99.`]},en:{think:`RatecodeID is a code, not a number to average. Fill with the most common code.`,steps:[`Look at the distribution: df['RatecodeID'].value_counts(dropna=False).`,`Fill with the mode, usually 1 (standard rate).`,`Check that no NaN remains.`],code:`print(df['RatecodeID'].value_counts(dropna=False))
df['RatecodeID'] = df['RatecodeID'].fillna(df['RatecodeID'].mode()[0])`,lotus:`Package codes are A12, B07, C03: there is no “average of A12 and B07”. Fill only with the most common code.`,trap:`The average of a code is meaningless. Use the mode for code columns.`,read:[`Counts of RatecodeID: code 1 dominates (1,744,049), with 99 (10,649) and missing (65,735).`,`Code 99 is not in the data dictionary.`],remark:`RatecodeID code 1 dominates, so fill missing with 1 (the mode); code 99 is an odd value to note.`,howRemark:[`Name the most common code.`,`Explain why mode, not mean.`,`Note code 99.`]}},"2.2.4":{vi:{think:`congestion_surcharge thiếu. Phí này chỉ áp dụng ở một số chuyến, nên 0 là một giá trị có nghĩa, không phải thiếu bừa.`,steps:[`Xem phân bố: df['congestion_surcharge'].value_counts(dropna=False).`,`Xem các dòng NaN có phải cùng các dòng thiếu RatecodeID và passenger_count không.`,`Điền 0 nếu coi là «không áp dụng», hoặc điền mode (thường 2.5) nếu bạn lập luận chuyến đó thuộc vùng áp phí. Ghi quyết định.`],code:`print(df['congestion_surcharge'].value_counts(dropna=False))
df['congestion_surcharge'] = df['congestion_surcharge'].fillna(df['congestion_surcharge'].mode()[0])`,lotus:`Phụ phí ngoài giờ chỉ áp dụng ở vài khung giờ. Dòng thiếu phụ phí có thể là «không áp dụng» (0) hay «quên ghi» (mức thường). Hai cách điền cho ra hai tổng doanh thu khác nhau.`,trap:`Chọn mode hay 0 đổi tổng phụ phí. Nói rõ mình đã chọn gì và vì sao.`,read:[`Bảng đếm congestion_surcharge: 2,5 (1.705.676), 0 (144.099), thiếu (65.735).`,`Dòng cuối: 65.735 ô trống còn lại để xử lý.`],remark:`Phí chỉ có hai giá trị là 2,5 và 0; 0 là có nghĩa (chuyến không phải trả), nên chỗ thiếu được điền 0 và còn lại 65.735 ô trống cần quyết định.`,howRemark:[`Nêu các giá trị thật.`,`Giải thích 0 là giá trị hợp lệ.`,`Nêu số ô trống còn lại.`]},en:{think:`congestion_surcharge has gaps. This fee applies only to some trips, so 0 is a meaningful value, not a lazy fill.`,steps:[`Look at the distribution: df['congestion_surcharge'].value_counts(dropna=False).`,`Check whether the NaN rows are the same ones missing RatecodeID and passenger_count.`,`Fill with 0 if you treat it as “not applicable”, or with the mode (usually 2.5) if you argue the trip falls in a charged zone. Record the decision.`],code:`print(df['congestion_surcharge'].value_counts(dropna=False))
df['congestion_surcharge'] = df['congestion_surcharge'].fillna(df['congestion_surcharge'].mode()[0])`,lotus:`The off-peak surcharge applies in only a few time windows. A row missing it may mean “not applicable” (0) or “forgot to record” (the usual rate). The two fills give different total revenue.`,trap:`Choosing mode or 0 changes the surcharge total. State what you chose and why.`,read:[`Counts of congestion_surcharge: 2.5 (1,705,676), 0 (144,099), missing (65,735).`,`Last line: 65,735 blanks left to handle.`],remark:`The fee has only two values, 2.5 and 0; 0 is meaningful (trip not charged), so fill gaps with 0, leaving 65,735 blanks to decide.`,howRemark:[`Name the real values.`,`Explain why 0 is valid.`,`State the blanks left.`]}},"2.3.1":{vi:{think:`Phân tích phân phối trước, rồi mới xóa. Mỗi gợi ý trong đề là một quy tắc, và mỗi quy tắc cần một quyết định: bỏ dòng hay thay giá trị.`,steps:[`df.describe() và xem max, min của trip_distance, fare_amount, total_amount.`,`Quy tắc 1: trip_distance gần 0 mà fare trên 300: bỏ (không có chuyến thật như vậy).`,`Quy tắc 2: cả khoảng cách và tiền bằng 0 nhưng hai vùng khác nhau: bỏ.`,`Quy tắc 3: trip_distance trên 250 dặm: bỏ hoặc xem kỹ.`,`Quy tắc 4: payment_type bằng 0 không có trong từ điển: bỏ hoặc gộp vào 5 (Unknown).`,`Sau cùng bỏ passenger_count lớn hơn 6 (task nói rõ), và đếm số dòng đã bỏ ở mỗi bước.`],code:`print(df.describe().T)
n0 = len(df)
df = df[~((df['trip_distance'] < 0.1) & (df['fare_amount'] > 300))]
df = df[~((df['trip_distance'] == 0) & (df['fare_amount'] == 0) & (df['PULocationID'] != df['DOLocationID']))]
df = df[df['trip_distance'] <= 250]
df = df[df['payment_type'] != 0]
df = df[df['passenger_count'] <= 6]
print(n0 - len(df), 'rows removed')`,lotus:`Booking ghi giá 65.000 nghìn cho 5 phút ghế massage là lỗi nhập thêm hai số 0. Bỏ nó. Booking giá 0 nhưng chi nhánh vào và ra khác nhau cũng không hợp lệ.`,trap:`Bỏ quá tay làm mẫu mất thật. Ghi số dòng bỏ ở mỗi quy tắc để thấy quy tắc nào xóa nhiều.`,read:[`Bảng describe: trip_distance, fare_amount, tip_amount, total_amount, trip_duration.`,`Chú ý std rất lớn (199 cho quãng đường) và min âm của thời lượng (−58,6).`],remark:`Quãng đường trung bình 4,0 dặm nhưng độ lệch chuẩn 199 và thời lượng có giá trị âm (−58,6 phút): còn nhiều điểm xa và lỗi dữ liệu cần xử lý trước khi phân tích.`,howRemark:[`Nêu cột có std quá lớn hoặc giá trị âm.`,`Mỗi quy tắc lọc cần lý do.`,`Quyết định bỏ hay thay giá trị.`]},en:{think:`Analyse the distribution first, then remove. Each hint in the brief is a rule, and each rule needs a decision: drop the row or replace the value.`,steps:[`df.describe() and look at max and min of trip_distance, fare_amount, total_amount.`,`Rule 1: trip_distance near 0 but fare above 300: drop (no real trip is like that).`,`Rule 2: distance and fare both 0 but the two zones differ: drop.`,`Rule 3: trip_distance above 250 miles: drop or inspect closely.`,`Rule 4: payment_type 0 is not in the dictionary: drop or merge into 5 (Unknown).`,`Finally drop passenger_count above 6 (the task says so), and count the rows removed at each step.`],code:`print(df.describe().T)
n0 = len(df)
df = df[~((df['trip_distance'] < 0.1) & (df['fare_amount'] > 300))]
df = df[~((df['trip_distance'] == 0) & (df['fare_amount'] == 0) & (df['PULocationID'] != df['DOLocationID']))]
df = df[df['trip_distance'] <= 250]
df = df[df['payment_type'] != 0]
df = df[df['passenger_count'] <= 6]
print(n0 - len(df), 'rows removed')`,lotus:`A booking priced 65,000 thousand for 5 minutes of massage chair is a typing slip with two extra zeros. Drop it. A booking priced 0 whose start and end branch differ is also invalid.`,trap:`Over-removing loses real data. Record rows removed at each rule to see which rule deletes the most.`,read:[`describe table: trip_distance, fare_amount, tip_amount, total_amount, trip_duration.`,`Note the huge std (199 for distance) and the negative duration min (−58.6).`],remark:`Mean distance is 4.0 miles but std is 199 and duration has negatives (−58.6 min): many outliers and data errors need handling before analysis.`,howRemark:[`Name the columns with huge std or negatives.`,`Each filter rule needs a reason.`,`Decide drop or replace.`]}},"3.1.1":{vi:{think:`Phân loại biến trước khi vẽ: số (đo được, có khoảng cách) hay nhóm (nhãn). Mã số như VendorID trông như số nhưng là nhóm.`,steps:[`Hỏi: cộng hoặc lấy trung bình của cột này có nghĩa không?`,`Mã (VendorID, RatecodeID, PULocationID, DOLocationID, payment_type) là nhóm dù là số.`,`Số lượng đo được (passenger_count, trip_distance, trip_duration, pickup_hour) là số. pickup_hour có tính chu kỳ nhưng vẫn xếp là số theo đề.`,`Cột tiền: là số, vì cộng và trung bình có nghĩa.`],code:`numerical = ['passenger_count','trip_distance','pickup_hour','trip_duration']
categorical = ['VendorID','RatecodeID','PULocationID','DOLocationID','payment_type']
# money columns: numerical`,lotus:`Mã gói A12 hay mã chi nhánh 1, 2, 3 là nhóm. Giá 650 nghìn là số. Lấy trung bình của «mã chi nhánh» không cho ra điều gì có nghĩa.`,trap:`Một cột chứa số không tự động là biến số. Hỏi xem trung bình có nghĩa không.`,read:[`Hai danh sách: categorical (VendorID, RatecodeID, PULocationID, DOLocationID, payment_type) và numerical.`,`Mã trông như số nhưng là nhóm.`],remark:`VendorID, RatecodeID, mã vùng và payment_type là nhóm dù là số; passenger_count, quãng đường, thời lượng và các cột tiền là số.`,howRemark:[`Giải thích các mã là nhóm.`,`Chia hai danh sách.`,`Nhắc không tính trung bình mã.`]},en:{think:`Classify variables before plotting: numerical (measurable, with distances) or categorical (labels). Code numbers like VendorID look numeric but are categories.`,steps:[`Ask: do sums or averages of this column mean anything?`,`Codes (VendorID, RatecodeID, PULocationID, DOLocationID, payment_type) are categorical even though numeric.`,`Measured quantities (passenger_count, trip_distance, trip_duration, pickup_hour) are numerical. pickup_hour is cyclic but still numerical per the brief.`,`Money columns: numerical, since sums and means are meaningful.`],code:`numerical = ['passenger_count','trip_distance','pickup_hour','trip_duration']
categorical = ['VendorID','RatecodeID','PULocationID','DOLocationID','payment_type']
# money columns: numerical`,lotus:`Package code A12 or branch code 1, 2, 3 are categories. A price of 650 thousand is numerical. The average of a “branch code” means nothing.`,trap:`A column holding numbers is not automatically a numerical variable. Ask whether the average means something.`,read:[`Two lists: categorical (VendorID, RatecodeID, PULocationID, DOLocationID, payment_type) and numerical.`,`Codes look numeric but are categories.`],remark:`VendorID, RatecodeID, zone ids and payment_type are categories though numeric; passenger_count, distance, duration and money columns are numerical.`,howRemark:[`Explain why the codes are categories.`,`Split the two lists.`,`Remind not to average codes.`]}},"3.1.2":{vi:{think:`Ba lát cắt thời gian: theo giờ, theo thứ trong tuần, theo tháng. Mỗi lát cắt là một cột mới và một groupby.`,steps:[`Tạo pickup_hour, pickup_day (tên thứ), pickup_month từ tpep_pickup_datetime.`,`Đếm số chuyến theo mỗi cột và vẽ cột (bar).`,`Đặt thứ tự thứ trong tuần từ Monday đến Sunday, không để tự sắp theo chữ.`],code:`df['pickup_hour'] = df['tpep_pickup_datetime'].dt.hour
df['pickup_day'] = df['tpep_pickup_datetime'].dt.day_name()
df['pickup_month'] = df['tpep_pickup_datetime'].dt.month
days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
df.groupby('pickup_hour').size().plot(kind='bar')
df['pickup_day'].value_counts().reindex(days).plot(kind='bar')
df.groupby('pickup_month').size().plot(kind='bar')`,lotus:`Đếm booking Lotus Spa theo giờ cho thấy đỉnh ở 18:00 đến 20:00. Theo thứ cho thấy cuối tuần đông. Theo tháng cho thấy tháng 12 xuống (180 form so với 220), một câu hỏi để đào tiếp, không phải kết luận.`,trap:`Thứ trong tuần mà không đặt thứ tự sẽ xếp theo bảng chữ cái: Friday đứng đầu.`,read:[`Dòng chữ: giờ, thứ và tháng đông nhất.`,`Biểu đồ: ba lát cắt thời gian cạnh nhau.`],remark:`Đông nhất lúc 18h, vào thứ Năm và tháng 5: nhu cầu cao nhất là giờ tan tầm cuối tuần làm việc và mùa xuân.`,howRemark:[`Nêu ba đỉnh.`,`Giải thích bằng nhịp sinh hoạt.`,`Nhắc mẫu 5% giữ hình dạng, không giữ số tuyệt đối.`]},en:{think:`Three time cuts: by hour, by weekday, by month. Each cut is a new column and a groupby.`,steps:[`Create pickup_hour, pickup_day (day name), pickup_month from tpep_pickup_datetime.`,`Count trips by each column and draw bars.`,`Order weekdays Monday to Sunday, do not let them sort alphabetically.`],code:`df['pickup_hour'] = df['tpep_pickup_datetime'].dt.hour
df['pickup_day'] = df['tpep_pickup_datetime'].dt.day_name()
df['pickup_month'] = df['tpep_pickup_datetime'].dt.month
days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
df.groupby('pickup_hour').size().plot(kind='bar')
df['pickup_day'].value_counts().reindex(days).plot(kind='bar')
df.groupby('pickup_month').size().plot(kind='bar')`,lotus:`Counting Lotus Spa bookings by hour shows a peak at 18:00 to 20:00. By weekday it shows busy weekends. By month it shows December down (180 forms versus 220), a question to dig into, not a conclusion.`,trap:`Weekdays without an order sort alphabetically: Friday comes first.`,read:[`Text: the busiest hour, weekday and month.`,`Chart: three time slices side by side.`],remark:`Busiest at 18h, on Thursdays and in May: peak demand is the evening rush of a working weekday in spring.`,howRemark:[`Name the three peaks.`,`Explain with daily rhythm.`,`Remind the 5% sample keeps shape, not absolute counts.`]}},"3.1.3":{vi:{think:`Trước khi lọc số 0, nhìn xem có bao nhiêu và chúng là gì. Khoảng cách 0 có thể là chuyến trong cùng một vùng, không phải lỗi.`,steps:[`Đếm số 0 và số âm trong fare_amount, tip_amount, total_amount, trip_distance.`,`Lọc fare_amount > 0, total_amount > 0 (tiền thật).`,`Với trip_distance 0, kiểm tra PULocationID có bằng DOLocationID không rồi mới quyết định giữ hay bỏ.`,`Tạo một bảng sao df_nz, đừng ghi đè df.`],code:`cols = ['fare_amount','tip_amount','total_amount','trip_distance']
print((df[cols] <= 0).sum())
df_nz = df[(df['fare_amount'] > 0) & (df['total_amount'] > 0)].copy()
# trip_distance == 0 may be same-zone trips: inspect before dropping
print(((df['trip_distance'] == 0) & (df['PULocationID'] == df['DOLocationID'])).sum())`,lotus:`Booking giá 0 là tặng thử, không phải lỗi. Booking thời lượng 0 phút ở một chi nhánh có thể là hủy. Xem rồi mới quyết định bỏ hay giữ.`,trap:`Bỏ mọi số 0 thì mất cả chuyến cùng vùng, một nhóm chuyến thật.`,read:[`Bảng đếm số dòng bằng 0 ở từng cột: quãng đường 0 có 23.540 dòng.`,`Dòng cuối: 1.848.971 → 1.848.395, tức bỏ 576 dòng fare bằng 0.`],remark:`23.540 chuyến cách 0 dặm (có thể là đón và trả cùng vùng, không hẳn lỗi), còn 576 chuyến cước 0 bị bỏ vì vô nghĩa.`,howRemark:[`Nêu số dòng 0 mỗi cột.`,`Phân biệt 0 hợp lệ và 0 là lỗi.`,`Báo số dòng đã bỏ.`]},en:{think:`Before filtering zeros, look at how many there are and what they are. Distance 0 may be a trip within one zone, not an error.`,steps:[`Count zeros and negatives in fare_amount, tip_amount, total_amount, trip_distance.`,`Filter fare_amount > 0, total_amount > 0 (real money).`,`For trip_distance 0, check whether PULocationID equals DOLocationID before deciding to keep or drop.`,`Create a copy df_nz, do not overwrite df.`],code:`cols = ['fare_amount','tip_amount','total_amount','trip_distance']
print((df[cols] <= 0).sum())
df_nz = df[(df['fare_amount'] > 0) & (df['total_amount'] > 0)].copy()
# trip_distance == 0 may be same-zone trips: inspect before dropping
print(((df['trip_distance'] == 0) & (df['PULocationID'] == df['DOLocationID'])).sum())`,lotus:`A booking priced 0 is a free trial, not an error. A 0-minute booking at one branch may be a cancellation. Look, then decide to drop or keep.`,trap:`Dropping every zero loses same-zone trips, a real group.`,read:[`Table counts rows equal to 0 per column: distance 0 has 23,540 rows.`,`Last line: 1,848,971 → 1,848,395, i.e. 576 zero-fare rows dropped.`],remark:`23,540 trips have 0 miles (maybe pickup and drop in the same zone, not always an error), while 576 zero-fare trips are dropped as meaningless.`,howRemark:[`State the zero counts per column.`,`Distinguish valid zero from error.`,`Report rows dropped.`]}},"3.1.4":{vi:{think:`Doanh thu theo tháng là tổng total_amount theo tháng. Nhớ rằng đây là mẫu 5%, nên số tuyệt đối thấp; xu hướng mới là điều cần đọc.`,steps:[`Tạo cột tháng từ tpep_pickup_datetime.`,`df.groupby('pickup_month')['total_amount'].sum().`,`Vẽ đường hoặc cột, ghi tháng cao nhất và thấp nhất.`],code:`monthly = df.groupby('pickup_month')['total_amount'].sum()
monthly.plot(kind='line', marker='o')
print(monthly.idxmax(), monthly.idxmin())`,lotus:`Doanh thu Lotus Spa theo tháng cho thấy tháng 12 thấp hơn tháng 11. Hỏi trước khi kết luận: tháng 12 có đủ ngày không, có đợt khuyến mãi nào không.`,trap:`Đọc doanh thu mẫu như doanh thu thật. Mẫu 5% chỉ cho xu hướng, và con số thật cần nhân lên ở bài 3.2.3.`,read:[`Bảng: doanh thu từng tháng (số tương đối vì là mẫu 5%).`,`Đọc xu hướng: tháng 5 và 10 cao nhất (100,2), tháng 2 thấp nhất (77,4).`],remark:`Doanh thu đỉnh ở tháng 5 và 10 (100,2) và thấp nhất tháng 2 (77,4) và tháng 8 (79,9). Số tuyệt đối thấp vì là mẫu; nên đọc xu hướng.`,howRemark:[`Nêu tháng cao nhất và thấp nhất.`,`Tính chênh phần trăm.`,`Nhắc mẫu 5%.`]},en:{think:`Monthly revenue is the sum of total_amount by month. Remember this is a 5% sample, so absolute numbers are low; the trend is what you read.`,steps:[`Create the month column from tpep_pickup_datetime.`,`df.groupby('pickup_month')['total_amount'].sum().`,`Draw a line or bars, note the highest and lowest months.`],code:`monthly = df.groupby('pickup_month')['total_amount'].sum()
monthly.plot(kind='line', marker='o')
print(monthly.idxmax(), monthly.idxmin())`,lotus:`Lotus Spa monthly revenue shows December below November. Ask before concluding: does December have all its days, was there a promotion.`,trap:`Reading sample revenue as real revenue. A 5% sample gives only the trend, and the real figure needs scaling in task 3.2.3.`,read:[`Table: revenue per month (relative since a 5% sample).`,`Read the trend: May and October highest (100.2), February lowest (77.4).`],remark:`Revenue peaks in May and October (100.2) and is lowest in February (77.4) and August (79.9). Absolute numbers are small because of the sample; read the trend.`,howRemark:[`Name the highest and lowest months.`,`Compute the percentage gap.`,`Remind the 5% sample.`]}},"3.1.5":{vi:{think:`Tỷ trọng mỗi quý là doanh thu quý chia cho doanh thu cả năm. Bốn số cộng lại bằng 100%.`,steps:[`Tạo cột quý: dt.quarter.`,`Cộng total_amount theo quý.`,`Chia cho tổng cả năm để ra tỷ trọng và vẽ biểu đồ tròn hoặc cột.`],code:`df['quarter'] = df['tpep_pickup_datetime'].dt.quarter
q = df.groupby('quarter')['total_amount'].sum()
share = q / q.sum()
print(share.round(3), share.sum())
share.plot(kind='bar')`,lotus:`Doanh thu quý 1 là 80, quý 2 là 100, quý 3 là 90, quý 4 là 130 (triệu): tổng 400, tỷ trọng 20%, 25%, 22,5%, 32,5%. Cộng lại luôn 100%.`,trap:`Quên kiểm tra tổng các tỷ trọng bằng 1 là cách dễ để chia nhầm mẫu số.`,read:[`Bốn số là tỷ trọng doanh thu của bốn quý, cộng lại 100%.`],remark:`Quý 4 (26,8%) và quý 2 (26,7%) dẫn đầu, quý 3 thấp nhất (22,8%): chênh chỉ 4 điểm phần trăm nên doanh thu khá đều quanh năm.`,howRemark:[`Nêu quý cao nhất và thấp nhất.`,`Đo chênh bằng điểm phần trăm.`,`Kết luận về tính mùa vụ.`]},en:{think:`Each quarter's share is quarter revenue divided by whole-year revenue. The four numbers sum to 100%.`,steps:[`Create the quarter column: dt.quarter.`,`Sum total_amount by quarter.`,`Divide by the yearly total to get shares and draw a pie or bars.`],code:`df['quarter'] = df['tpep_pickup_datetime'].dt.quarter
q = df.groupby('quarter')['total_amount'].sum()
share = q / q.sum()
print(share.round(3), share.sum())
share.plot(kind='bar')`,lotus:`Quarterly revenue is 80, 100, 90, 130 (million): total 400, shares 20%, 25%, 22.5%, 32.5%. They always add up to 100%.`,trap:`Forgetting to check that shares sum to 1 is an easy way to divide by the wrong denominator.`,read:[`Four numbers are the revenue shares of the four quarters, summing to 100%.`],remark:`Q4 (26.8%) and Q2 (26.7%) lead, Q3 is lowest (22.8%): only 4 points apart, so revenue is fairly even through the year.`,howRemark:[`Name the highest and lowest quarters.`,`Measure the gap in points.`,`Conclude on seasonality.`]}},"3.1.6":{vi:{think:`Quan hệ giữa quãng đường và giá cước: vẽ điểm và đo tương quan. Bỏ các chuyến cách 0 dặm theo gợi ý.`,steps:[`Lọc trip_distance > 0.`,`Vẽ scatter (lấy mẫu vài nghìn điểm cho nhẹ).`,`Tính df[['trip_distance','fare_amount']].corr().`],code:`d = df[df['trip_distance'] > 0]
sns.scatterplot(data=d.sample(5000, random_state=42), x='trip_distance', y='fare_amount', alpha=0.3)
print(d[['trip_distance','fare_amount']].corr())`,lotus:`Thời lượng liệu trình và giá: 60 phút 650 nghìn, 90 phút 950 nghìn. Các điểm gần một đường thẳng nên tương quan cao, nhưng không có nghĩa thời lượng là nguyên nhân của giá, vì giá được đặt theo bảng giá.`,trap:`Tương quan cao không phải nguyên nhân. Giá cước tính theo quãng đường theo công thức, nên tương quan ở đây là hệ quả của công thức.`,read:[`Dòng chữ: tương quan 0,944.`,`Biểu đồ phân tán: đám điểm dốc lên gần một đường thẳng.`],remark:`Tương quan quãng đường – cước là 0,944, rất mạnh: đi xa hơn thì cước tăng gần như tuyến tính, nên quãng đường là biến giải thích chính.`,howRemark:[`Báo hệ số.`,`Nói mạnh hay yếu.`,`Chỉ ra điểm lệch khỏi đường nếu có.`]},en:{think:`Relationship between distance and fare: plot points and measure correlation. Drop 0-mile trips as hinted.`,steps:[`Filter trip_distance > 0.`,`Draw a scatter (sample a few thousand points to keep it light).`,`Compute df[['trip_distance','fare_amount']].corr().`],code:`d = df[df['trip_distance'] > 0]
sns.scatterplot(data=d.sample(5000, random_state=42), x='trip_distance', y='fare_amount', alpha=0.3)
print(d[['trip_distance','fare_amount']].corr())`,lotus:`Session length and price: 60 minutes 650 thousand, 90 minutes 950 thousand. The points sit near a line so correlation is high, but length does not cause price, because price is set from a price list.`,trap:`High correlation is not cause. Fares are computed from distance by a formula, so correlation here is a consequence of the formula.`,read:[`Text: correlation 0.944.`,`Scatter: the cloud rises close to a straight line.`],remark:`Distance–fare correlation is 0.944, very strong: longer trips cost almost linearly more, so distance is the main driver.`,howRemark:[`Report the coefficient.`,`Say strong or weak.`,`Point out departures from the line if any.`]}},"3.1.7":{vi:{think:`Ba quan hệ cần tương quan và hình: giá với thời lượng chuyến, giá với số khách, tiền boa với quãng đường.`,steps:[`Tạo trip_duration = (dropoff − pickup) tính bằng phút.`,`Lọc thời lượng hợp lý (lớn hơn 0 và nhỏ hơn vài giờ).`,`Vẽ từng cặp và in hệ số tương quan.`,`Nhớ tiền boa tiền mặt không được ghi.`],code:`df['trip_duration'] = (df['tpep_dropoff_datetime'] - df['tpep_pickup_datetime']).dt.total_seconds() / 60
d = df[(df['trip_duration'] > 0) & (df['trip_duration'] < 180)]
print(d[['fare_amount','trip_duration']].corr())
print(d[['fare_amount','passenger_count']].corr())
print(d[['tip_amount','trip_distance']].corr())`,lotus:`Giá liệu trình theo số khách trong một booking: hai khách không trả gấp đôi. Tương quan thấp ở đây nói rằng số khách không quyết định giá, không nói rằng số khách vô nghĩa.`,trap:`Trip_duration âm hoặc quá lớn là lỗi giờ. Lọc trước khi tính tương quan.`,read:[`Ba hệ số: cước–thời lượng 0,271; cước–số khách 0,047; boa–quãng đường 0,568.`,`Gần 0 là không liên quan.`],remark:`Cước chỉ liên quan yếu đến thời lượng (0,271) và gần như không liên quan đến số khách (0,047); tiền boa tăng theo quãng đường (0,568).`,howRemark:[`Xếp ba quan hệ theo độ mạnh.`,`Diễn giải từng cái bằng một câu.`,`Nhớ tương quan chưa là nhân quả.`]},en:{think:`Three relationships need correlation and a picture: fare with trip duration, fare with passenger count, tip with distance.`,steps:[`Create trip_duration = (dropoff − pickup) in minutes.`,`Filter plausible durations (above 0 and below a few hours).`,`Plot each pair and print the correlation coefficient.`,`Remember cash tips are not recorded.`],code:`df['trip_duration'] = (df['tpep_dropoff_datetime'] - df['tpep_pickup_datetime']).dt.total_seconds() / 60
d = df[(df['trip_duration'] > 0) & (df['trip_duration'] < 180)]
print(d[['fare_amount','trip_duration']].corr())
print(d[['fare_amount','passenger_count']].corr())
print(d[['tip_amount','trip_distance']].corr())`,lotus:`Session price by number of guests in one booking: two guests do not pay double. Low correlation here says guest count does not set price, not that guest count is meaningless.`,trap:`A negative or huge trip_duration is a time error. Filter before computing correlation.`,read:[`Three coefficients: fare–duration 0.271; fare–passengers 0.047; tip–distance 0.568.`,`Near 0 means unrelated.`],remark:`Fare relates only weakly to duration (0.271) and hardly to passengers (0.047); tips rise with distance (0.568).`,howRemark:[`Rank the three relationships by strength.`,`Interpret each in one sentence.`,`Remember correlation is not causation.`]}},"3.1.8":{vi:{think:`Phân bố loại thanh toán là đếm từng loại và chia cho tổng. Mã 1 thẻ, 2 tiền mặt, 3 miễn phí, 4 tranh chấp.`,steps:[`df['payment_type'].value_counts(normalize=True).`,`Vẽ cột hoặc tròn, gắn nhãn chữ thay cho mã.`,`Ghi chú: tiền boa chỉ có ở thanh toán thẻ.`],code:`labels = {1:'Credit card', 2:'Cash', 3:'No charge', 4:'Dispute'}
pt = df['payment_type'].map(labels).value_counts(normalize=True)
print(pt.round(3))
pt.plot(kind='bar')`,lotus:`Lotus Spa: 70% thanh toán thẻ, 25% chuyển khoản, 5% tiền mặt. Cột tiền boa chỉ phản ánh phần thẻ và chuyển khoản.`,trap:`Quên rằng cột boa không tính tiền mặt sẽ làm tỷ lệ boa thật bị thấp đi.`,read:[`Bảng % theo loại thanh toán, cộng lại 100%.`],remark:`Thẻ tín dụng chiếm 80,7%, tiền mặt 17,3%, tranh chấp 1,3% và miễn phí 0,7%: gần như mọi chuyến thanh toán bằng thẻ.`,howRemark:[`Nêu loại dẫn đầu và cuối.`,`Chú ý tỷ lệ tranh chấp.`,`Nói hệ quả cho phân tích tiền boa (chỉ thẻ ghi được).`]},en:{think:`The payment-type distribution is counting each type and dividing by the total. Code 1 card, 2 cash, 3 no charge, 4 dispute.`,steps:[`df['payment_type'].value_counts(normalize=True).`,`Draw bars or a pie, with text labels instead of codes.`,`Note: tips exist only for card payments.`],code:`labels = {1:'Credit card', 2:'Cash', 3:'No charge', 4:'Dispute'}
pt = df['payment_type'].map(labels).value_counts(normalize=True)
print(pt.round(3))
pt.plot(kind='bar')`,lotus:`Lotus Spa: 70% card, 25% transfer, 5% cash. The tip column reflects only the card and transfer share.`,trap:`Forgetting that the tip column omits cash makes the real tip rate look lower.`,read:[`A table of % by payment type, summing to 100%.`],remark:`Credit card is 80.7%, cash 17.3%, disputes 1.3% and free 0.7%: almost every trip is paid by card.`,howRemark:[`Name the top and bottom type.`,`Note the dispute rate.`,`State the effect on tip analysis (only cards are recorded).`]}},"3.1.9":{vi:{think:`Bản đồ vùng nằm trong file shapefile. Đọc bằng geopandas và để nguyên cấu trúc thư mục taxi_zones.`,steps:[`pip install geopandas nếu thiếu.`,`zones = gpd.read_file('taxi_zones/taxi_zones.shp').`,`zones.head() rồi zones.plot() để xem bản đồ.`],code:`import geopandas as gpd
zones = gpd.read_file('taxi_zones/taxi_zones.shp')
zones.head()
zones.plot()`,lotus:`Ba chi nhánh Quận 1, Quận 3 và Thủ Đức là ba vùng trên một bản đồ. Bảng vùng cho tên và mã, còn hình dạng nằm trong cột geometry.`,trap:`Chuyển file .shp ra khỏi thư mục sẽ làm hỏng, vì các file đi kèm (.shx, .dbf) phải nằm cùng chỗ.`,read:[`Bảng mẫu bảng vùng: mỗi dòng là một vùng với tên, quận và mã LocationID.`,`Biểu đồ là bản đồ các vùng taxi.`],remark:`File shapefile có các vùng taxi của New York kèm tên và quận, ví dụ Newark Airport (mã 1) và Jamaica Bay (mã 2); mã LocationID dùng để nối với bảng chuyến.`,howRemark:[`Nêu cột quan trọng (LocationID, zone, borough).`,`Nói mục đích nối bảng.`]},en:{think:`The zone map lives in a shapefile. Read it with geopandas and keep the taxi_zones folder structure unchanged.`,steps:[`pip install geopandas if missing.`,`zones = gpd.read_file('taxi_zones/taxi_zones.shp').`,`zones.head() then zones.plot() to see the map.`],code:`import geopandas as gpd
zones = gpd.read_file('taxi_zones/taxi_zones.shp')
zones.head()
zones.plot()`,lotus:`The three branches District 1, District 3 and Thu Duc are three zones on one map. The zone table gives names and codes, and the shape sits in the geometry column.`,trap:`Moving the .shp out of its folder breaks it, since the companion files (.shx, .dbf) must sit alongside.`,read:[`Sample of the zone table: each row is a zone with name, borough and LocationID.`,`The chart is the map of taxi zones.`],remark:`The shapefile holds New York's taxi zones with names and boroughs, e.g. Newark Airport (id 1) and Jamaica Bay (id 2); LocationID is the key to join to trips.`,howRemark:[`Name the key columns (LocationID, zone, borough).`,`State the purpose of joining.`]}},"3.1.10":{vi:{think:`Nối bảng vùng vào bảng chuyến bằng mã vùng: LocationID bên bảng vùng, PULocationID bên bảng chuyến.`,steps:[`Dùng merge với left_on và right_on.`,`how='left' để giữ mọi chuyến.`,`Đếm số dòng trước và sau: phải bằng nhau.`],code:`n = len(df)
df = df.merge(zones[['LocationID','zone','borough']], left_on='PULocationID', right_on='LocationID', how='left')
print(n, len(df))  # must match`,lotus:`Bảng booking có mã chi nhánh 1 đến 3. Bảng chi nhánh cho tên đầy đủ. Nối theo mã, giữ mọi booking.`,trap:`Nếu số dòng sau nối khác số dòng trước, mã vùng trong bảng vùng bị trùng và bạn đã nhân bản chuyến.`,read:[`Bảng mẫu sau khi nối: mã vùng đón kèm tên vùng và quận.`],remark:`Sau khi nối, mỗi chuyến có tên vùng và quận đón (ví dụ 68 là East Chelsea, Manhattan), nên có thể đọc kết quả theo tên thay vì theo mã.`,howRemark:[`Kiểm tên đã khớp mã.`,`Kiểm số dòng không đổi.`]},en:{think:`Join the zone table to the trip table by zone code: LocationID on the zone side, PULocationID on the trip side.`,steps:[`Use merge with left_on and right_on.`,`how='left' to keep every trip.`,`Count rows before and after: they must match.`],code:`n = len(df)
df = df.merge(zones[['LocationID','zone','borough']], left_on='PULocationID', right_on='LocationID', how='left')
print(n, len(df))  # must match`,lotus:`The booking table has branch codes 1 to 3. The branch table gives full names. Join on the code, keep every booking.`,trap:`If the row count differs after the join, a zone code is duplicated in the zone table and you cloned trips.`,read:[`Sample after the join: pickup zone code with zone name and borough.`],remark:`After the join each trip has a pickup zone name and borough (e.g. 68 is East Chelsea, Manhattan), so results read by name instead of code.`,howRemark:[`Check names match the codes.`,`Check the row count is unchanged.`]}},"3.1.11":{vi:{think:`Số chuyến theo mã vùng là một groupby đếm dòng.`,steps:[`df.groupby('PULocationID').size().`,`Đặt tên cột kết quả là trips.`,`Sắp xếp giảm dần để xem vùng đông nhất.`],code:`trips = df.groupby('PULocationID').size().reset_index(name='trips')
trips.sort_values('trips', ascending=False).head(10)`,lotus:`Quận 1: 480 lượt, Quận 3: 300, Thủ Đức: 220 trong một tuần. Chi nhánh đông nhất không nhất thiết đem lại doanh thu cao nhất.`,trap:`Đếm số chuyến khác với cộng doanh thu. Chọn đúng thứ bạn muốn đo.`,read:[`Bảng đếm số chuyến theo mã vùng, sắp giảm dần.`,`Mã 132 đứng đầu với 99.363 chuyến.`],remark:`Mã vùng 132 có nhiều chuyến đón nhất (99.363), kế đến 237 (87.916) và 161 (86.783); đây là mã, chưa phải tên.`,howRemark:[`Nêu ba mã đầu kèm số.`,`Nhắc cần đổi sang tên ở bước sau.`]},en:{think:`Trips per zone code is one groupby that counts rows.`,steps:[`df.groupby('PULocationID').size().`,`Name the result column trips.`,`Sort descending to see the busiest zones.`],code:`trips = df.groupby('PULocationID').size().reset_index(name='trips')
trips.sort_values('trips', ascending=False).head(10)`,lotus:`District 1: 480 visits, District 3: 300, Thu Duc: 220 in one week. The busiest branch does not necessarily bring the highest revenue.`,trap:`Counting trips differs from summing revenue. Choose exactly what you want to measure.`,read:[`Table of trips per zone code, sorted descending.`,`Code 132 leads with 99,363 trips.`],remark:`Zone code 132 has the most pickups (99,363), then 237 (87,916) and 161 (86,783); these are codes, not yet names.`,howRemark:[`Name the top three codes with numbers.`,`Remind to convert to names next.`]}},"3.1.12":{vi:{think:`Ghép số chuyến vào bảng vùng để vẽ. Vùng không có chuyến nào phải có 0, không được để trống.`,steps:[`zones.merge(trips, left_on='LocationID', right_on='PULocationID', how='left').`,`Điền 0 cho vùng không có chuyến.`,`Kiểm tra bảng kết quả vẫn là GeoDataFrame.`],code:`zones_with_trips = zones.merge(trips, left_on='LocationID', right_on='PULocationID', how='left')
zones_with_trips['trips'] = zones_with_trips['trips'].fillna(0)
print(type(zones_with_trips))`,lotus:`Một chi nhánh mới chưa có booking phải hiện 0, không phải biến mất khỏi bản đồ.`,trap:`Trộn theo thứ tự ngược (trips.merge(zones)) có thể trả về DataFrame thường, mất khả năng vẽ bản đồ.`,read:[`Bảng top vùng với tên, quận và số chuyến.`,`JFK Airport đứng đầu.`],remark:`JFK Airport (99.363 chuyến) đứng đầu, sau đó Upper East Side South (87.916) và Midtown Center (86.783): sân bay và các khu trung tâm Manhattan là điểm đón chính.`,howRemark:[`Nêu ba vùng đầu.`,`Nhận xét kiểu vùng (sân bay, trung tâm).`,`Nhắc vùng không có chuyến phải ghi 0.`]},en:{think:`Attach trip counts to the zone table so you can plot. Zones with no trips must show 0, not be left blank.`,steps:[`zones.merge(trips, left_on='LocationID', right_on='PULocationID', how='left').`,`Fill 0 for zones with no trips.`,`Check the result is still a GeoDataFrame.`],code:`zones_with_trips = zones.merge(trips, left_on='LocationID', right_on='PULocationID', how='left')
zones_with_trips['trips'] = zones_with_trips['trips'].fillna(0)
print(type(zones_with_trips))`,lotus:`A new branch with no bookings should show 0, not vanish from the map.`,trap:`Merging in the reverse order (trips.merge(zones)) can return a plain DataFrame, losing the ability to draw the map.`,read:[`Table of top zones with name, borough and trips.`,`JFK Airport leads.`],remark:`JFK Airport (99,363 trips) leads, then Upper East Side South (87,916) and Midtown Center (86,783): airports and central Manhattan areas are the main pickup points.`,howRemark:[`Name the top three zones.`,`Comment on the zone types (airport, centre).`,`Remind zones with no trips must show 0.`]}},"3.1.13":{vi:{think:`Bản đồ màu: tô vùng theo số chuyến. Đặt khung hình trước rồi vẽ lên khung đó.`,steps:[`fig, ax = plt.subplots(1, 1, figsize=(12, 10)).`,`zones_with_trips.plot(column='trips', ax=ax, legend=True, legend_kwds={...}).`,`plt.show().`,`Sau đó sắp bảng theo số chuyến giảm dần để đọc tên vùng.`],code:`fig, ax = plt.subplots(1, 1, figsize=(12, 10))
zones_with_trips.plot(column='trips', ax=ax, legend=True,
                      legend_kwds={'label': 'Number of trips', 'orientation': 'horizontal'})
plt.show()
zones_with_trips.sort_values('trips', ascending=False)[['zone','trips']].head(10)`,lotus:`Ba chi nhánh Lotus Spa tô theo số lượt: Quận 1 đậm nhất. Bản đồ cho thấy vị trí, còn bảng đứng sau cho tên và số.`,trap:`Bản đồ chỉ cho thấy thứ tự lớn nhỏ bằng màu. Số chính xác phải đọc từ bảng.`,read:[`Bản đồ màu: vùng đậm là nhiều chuyến đón; vùng nhạt là ít.`,`Tìm cụm vùng đậm.`],remark:`Bản đồ cho thấy các chuyến đón tập trung ở Manhattan và hai sân bay, còn các vùng ngoại ô nhạt màu.`,howRemark:[`Mô tả vùng đậm.`,`Nối với bảng top vùng ở 3.1.12.`,`Nêu ý nghĩa khi bố trí xe.`]},en:{think:`Choropleth map: colour zones by trip count. Set the figure first, then draw onto it.`,steps:[`fig, ax = plt.subplots(1, 1, figsize=(12, 10)).`,`zones_with_trips.plot(column='trips', ax=ax, legend=True, legend_kwds={...}).`,`plt.show().`,`Then sort the table by trips descending to read zone names.`],code:`fig, ax = plt.subplots(1, 1, figsize=(12, 10))
zones_with_trips.plot(column='trips', ax=ax, legend=True,
                      legend_kwds={'label': 'Number of trips', 'orientation': 'horizontal'})
plt.show()
zones_with_trips.sort_values('trips', ascending=False)[['zone','trips']].head(10)`,lotus:`The three Lotus Spa branches coloured by visits: District 1 darkest. The map shows position, and the table behind it gives names and numbers.`,trap:`A map shows only rank order by colour. Read exact numbers from the table.`,read:[`Colour map: dark zones have many pickups; light zones few.`,`Look for dark clusters.`],remark:`The map shows pickups concentrated in Manhattan and the two airports while outer zones are pale.`,howRemark:[`Describe the dark areas.`,`Tie to the top-zone table in 3.1.12.`,`State the meaning for fleet placement.`]}},"3.2.1":{vi:{think:`Tốc độ của một tuyến = quãng đường chia cho thời gian trung bình. Làm theo từng cặp vùng đi, vùng đến và theo từng giờ, rồi tìm tuyến chậm nhất.`,steps:[`Tạo cột trip_duration (phút) nếu chưa có.`,`Nhóm theo PULocationID, DOLocationID, pickup_hour: trung bình trip_distance và trip_duration.`,`speed = distance / (duration / 60) dặm mỗi giờ.`,`Chỉ giữ các nhóm có đủ chuyến (ví dụ ít nhất 30), vì nhóm ít chuyến cho tốc độ nhiễu.`,`Sắp tăng dần để thấy các tuyến chậm nhất.`],code:`g = df.groupby(['PULocationID','DOLocationID','pickup_hour']).agg(
    dist=('trip_distance','mean'), dur=('trip_duration','mean'), n=('trip_distance','size')).reset_index()
g['speed_mph'] = g['dist'] / (g['dur'] / 60)
slow = g[g['n'] >= 30].sort_values('speed_mph').head(10)
print(slow)`,lotus:`Hai chi nhánh Quận 1 và Quận 3: một khách đi từ chi nhánh này sang chi nhánh kia mất bao lâu lúc 18:00 so với 10:00. Tuyến nào luôn chậm lúc 18:00 là chỗ nên dời lịch hẹn.`,trap:`Một tuyến chỉ có 2 chuyến có thể đứng đầu danh sách chậm nhất chỉ vì nhiễu. Đặt ngưỡng số chuyến.`,read:[`Bảng đầu: tốc độ trung bình theo giờ (dặm/giờ): thấp nhất 9,5 lúc 15h, cao nhất 20,5 lúc 5h.`,`Bảng sau: các tuyến chậm với số chuyến và tốc độ.`],remark:`Xe chậm nhất ban ngày (khoảng 9,5–10 dặm/giờ từ 12h đến 18h) và nhanh nhất lúc 5h (20,5), nên giờ cao điểm là lúc đường kẹt. Một số tuyến nội vùng chỉ đạt khoảng 3,7 dặm/giờ.`,howRemark:[`Nêu giờ nhanh nhất và chậm nhất kèm số.`,`Nối với giờ đông xe.`,`Nêu tuyến chậm và ý nghĩa.`]},en:{think:`A route's speed is distance divided by average time. Do it per pickup-and-dropoff zone pair and per hour, then find the slowest routes.`,steps:[`Create trip_duration (minutes) if not already there.`,`Group by PULocationID, DOLocationID, pickup_hour: mean trip_distance and trip_duration.`,`speed = distance / (duration / 60) miles per hour.`,`Keep only groups with enough trips (say at least 30), since small groups give noisy speeds.`,`Sort ascending to see the slowest routes.`],code:`g = df.groupby(['PULocationID','DOLocationID','pickup_hour']).agg(
    dist=('trip_distance','mean'), dur=('trip_duration','mean'), n=('trip_distance','size')).reset_index()
g['speed_mph'] = g['dist'] / (g['dur'] / 60)
slow = g[g['n'] >= 30].sort_values('speed_mph').head(10)
print(slow)`,lotus:`Two branches, District 1 and District 3: how long a customer takes from one branch to the other at 18:00 versus 10:00. A route that is always slow at 18:00 is where to shift appointments.`,trap:`A route with only 2 trips can top the slowest list purely from noise. Set a trip-count threshold.`,read:[`First table: mean speed by hour (miles/hour): slowest 9.5 at 15h, fastest 20.5 at 5h.`,`Second table: slow routes with trips and speed.`],remark:`Cars are slowest in daytime (about 9.5–10 mph from 12h to 18h) and fastest at 5h (20.5), so peak hours are when roads clog. Some within-zone routes reach only about 3.7 mph.`,howRemark:[`Name the fastest and slowest hours with numbers.`,`Tie to busy hours.`,`State slow routes and their meaning.`]}},"3.2.2":{vi:{think:`Đếm số chuyến theo từng giờ, vẽ, và nêu giờ đông nhất cùng số chuyến của giờ đó.`,steps:[`hourly = df.groupby('pickup_hour').size().`,`hourly.plot(kind='bar').`,`hourly.idxmax() và hourly.max().`],code:`hourly = df.groupby('pickup_hour').size()
hourly.plot(kind='bar')
print(hourly.idxmax(), hourly.max())`,lotus:`Giờ đông nhất của Lotus Spa là 19:00 với 62 lượt trong mẫu. Con số này là số trong mẫu, chưa phải số thật.`,trap:`Báo số trong mẫu như số thật. Bài 3.2.3 nhân lên.`,read:[`Dòng chữ: giờ đông nhất 18 và số chuyến của giờ đó (130.555 trong mẫu).`,`Biểu đồ: số chuyến theo 24 giờ.`],remark:`Đỉnh nhu cầu lúc 18h với 130.555 chuyến trong mẫu; thấp nhất khoảng rạng sáng.`,howRemark:[`Nêu giờ đỉnh kèm số.`,`Mô tả hình dạng đường theo giờ.`]},en:{think:`Count trips per hour, draw it, and state the busiest hour with its trip count.`,steps:[`hourly = df.groupby('pickup_hour').size().`,`hourly.plot(kind='bar').`,`hourly.idxmax() and hourly.max().`],code:`hourly = df.groupby('pickup_hour').size()
hourly.plot(kind='bar')
print(hourly.idxmax(), hourly.max())`,lotus:`Lotus Spa's busiest hour is 19:00 with 62 visits in the sample. That is a sample number, not the real one.`,trap:`Reporting a sample number as the real one. Task 3.2.3 scales up.`,read:[`Text: the busiest hour 18 and its trips (130,555 in the sample).`,`Chart: trips across 24 hours.`],remark:`Demand peaks at 18h with 130,555 trips in the sample; lowest around dawn.`,howRemark:[`Name the peak hour with the number.`,`Describe the shape of the hourly line.`]}},"3.2.3":{vi:{think:`Mẫu chỉ có 5% số chuyến. Số thật = số trong mẫu chia cho tỷ lệ lấy mẫu.`,steps:[`sample_fraction = 0.05, đúng với tỷ lệ bạn đã dùng ở 1.1.1.`,`scaled = hourly / sample_fraction.`,`Lấy 5 giờ đông nhất: scaled.nlargest(5).`],code:`sample_fraction = 0.05
scaled = hourly / sample_fraction
print(scaled.nlargest(5).round(0))`,lotus:`Nếu mẫu có 62 lượt lúc 19:00 và tỷ lệ lấy mẫu là 5%, số thật xấp xỉ 62 ÷ 0,05 = 1.240 lượt.`,trap:`Nhân với 5 thay vì chia cho 0,05 (nhân 20) là lỗi thường gặp.`,read:[`Bảng: số chuyến ước tính thật theo giờ = số trong mẫu chia 0,05.`,`18h có 2.611.100 chuyến.`],remark:`Quy ra số thật, 18h có khoảng 2,61 triệu chuyến cả năm, 17h 2,50 triệu và 19h 2,34 triệu.`,howRemark:[`Nêu công thức nhân 20.`,`Báo ba giờ đầu theo số thật.`,`Nhắc đây là ước tính.`]},en:{think:`The sample holds only 5% of trips. Real count = sample count divided by the sampling fraction.`,steps:[`sample_fraction = 0.05, matching what you used in 1.1.1.`,`scaled = hourly / sample_fraction.`,`Take the five busiest hours: scaled.nlargest(5).`],code:`sample_fraction = 0.05
scaled = hourly / sample_fraction
print(scaled.nlargest(5).round(0))`,lotus:`If the sample has 62 visits at 19:00 and the sampling fraction is 5%, the real count is about 62 ÷ 0.05 = 1,240 visits.`,trap:`Multiplying by 5 instead of dividing by 0.05 (multiplying by 20) is a common slip.`,read:[`Table: estimated real trips per hour = sample count / 0.05.`,`18h has 2,611,100 trips.`],remark:`Scaled up, 18h has about 2.61 million trips in the year, 17h 2.50 million and 19h 2.34 million.`,howRemark:[`State the ×20 formula.`,`Report the top three hours at real scale.`,`Remind these are estimates.`]}},"3.2.4":{vi:{think:`So sánh hình dạng theo giờ giữa ngày thường và cuối tuần. Hai đường cùng trên một biểu đồ.`,steps:[`Tạo cột is_weekend: dayofweek >= 5.`,`Đếm theo giờ cho từng nhóm, chia cho số ngày của nhóm để so sánh công bằng.`,`Vẽ hai đường.`],code:`df['is_weekend'] = df['tpep_pickup_datetime'].dt.dayofweek >= 5
days = df.groupby('is_weekend')['tpep_pickup_datetime'].apply(lambda s: s.dt.date.nunique())
by = df.groupby(['is_weekend','pickup_hour']).size().unstack(0)
(by / days).plot()`,lotus:`Lotus Spa ngày thường đông vào 18:00 đến 20:00 sau giờ làm. Cuối tuần đông vào 10:00 đến 14:00. Hai nhóm khác ngày nên phải chia cho số ngày.`,trap:`So sánh số chuyến thô giữa 5 ngày thường và 2 ngày cuối tuần mà không chia cho số ngày là so lệch.`,read:[`Hai đường trên một biểu đồ: ngày thường và cuối tuần.`,`So giờ đỉnh và độ cao của hai đường.`],remark:`Ngày thường có đỉnh rõ lúc chiều tối, còn cuối tuần phẳng hơn và kéo dài hơn về đêm; hai nhịp khác nhau nên cần điều phối riêng.`,howRemark:[`Mô tả mỗi đường một câu.`,`Nêu điểm khác chính.`,`Nói hệ quả điều phối.`]},en:{think:`Compare the hourly shape between weekdays and weekends. Two lines on one chart.`,steps:[`Create is_weekend: dayofweek >= 5.`,`Count per hour for each group, divide by the group's number of days for a fair comparison.`,`Draw two lines.`],code:`df['is_weekend'] = df['tpep_pickup_datetime'].dt.dayofweek >= 5
days = df.groupby('is_weekend')['tpep_pickup_datetime'].apply(lambda s: s.dt.date.nunique())
by = df.groupby(['is_weekend','pickup_hour']).size().unstack(0)
(by / days).plot()`,lotus:`Lotus Spa weekdays peak 18:00 to 20:00 after work. Weekends peak 10:00 to 14:00. The two groups have different numbers of days so divide by days.`,trap:`Comparing raw counts between 5 weekdays and 2 weekend days without dividing by days is a lopsided comparison.`,read:[`Two lines on one chart: weekdays and weekends.`,`Compare peak hours and heights.`],remark:`Weekdays peak sharply in the early evening while weekends are flatter and run later into the night; the two rhythms need separate dispatch.`,howRemark:[`Describe each line in one sentence.`,`State the main difference.`,`State the dispatch consequence.`]}},"3.2.5":{vi:{think:`Mười vùng đón nhiều nhất và mười vùng trả nhiều nhất, rồi xem nhịp theo giờ của các vùng đó.`,steps:[`top_pu = df['PULocationID'].value_counts().head(10).index.`,`top_do = df['DOLocationID'].value_counts().head(10).index.`,`Với mỗi nhóm vùng, đếm theo giờ và vẽ.`],code:`top_pu = df['PULocationID'].value_counts().head(10).index
top_do = df['DOLocationID'].value_counts().head(10).index
hp = df[df['PULocationID'].isin(top_pu)].groupby(['pickup_hour','PULocationID']).size().unstack()
hp.plot(figsize=(12,5))`,lotus:`Với ba chi nhánh, xem chi nhánh nào đón khách nhiều nhất và đông vào giờ nào. Chi nhánh nhiều khách đến chưa chắc là chi nhánh nhiều khách đi.`,trap:`Dùng mã vùng mà không đổi sang tên vùng làm biểu đồ khó đọc. Ghép tên từ bảng zones.`,read:[`Hai bảng top 10: điểm đón và điểm trả; kèm biểu đồ nhịp theo giờ.`,`So hai danh sách để thấy vùng nào xuất hiện cả hai.`],remark:`Top đón: JFK Airport (99.363), Upper East Side South (87.916), Midtown Center (86.783); các vùng trung tâm Manhattan và hai sân bay chiếm gần hết top 10.`,howRemark:[`Nêu 3 vùng đầu mỗi danh sách.`,`So hai danh sách.`,`Nhận xét nhịp theo giờ.`]},en:{think:`Top ten pickup zones and top ten dropoff zones, then look at the hourly rhythm of those zones.`,steps:[`top_pu = df['PULocationID'].value_counts().head(10).index.`,`top_do = df['DOLocationID'].value_counts().head(10).index.`,`For each group of zones, count per hour and draw.`],code:`top_pu = df['PULocationID'].value_counts().head(10).index
top_do = df['DOLocationID'].value_counts().head(10).index
hp = df[df['PULocationID'].isin(top_pu)].groupby(['pickup_hour','PULocationID']).size().unstack()
hp.plot(figsize=(12,5))`,lotus:`With three branches, see which branch receives the most customers and at what hour. The branch customers arrive at most is not necessarily where they leave from most.`,trap:`Using zone codes without switching to zone names makes the chart hard to read. Join names from the zones table.`,read:[`Two top-10 tables: pickups and dropoffs; plus hourly rhythm charts.`,`Compare the two lists to see zones in both.`],remark:`Top pickups: JFK Airport (99,363), Upper East Side South (87,916), Midtown Center (86,783); central Manhattan zones and the two airports fill most of the top 10.`,howRemark:[`Name the top 3 of each list.`,`Compare the two lists.`,`Comment on the hourly rhythm.`]}},"3.2.6":{vi:{think:`Tỷ lệ đón trên trả của mỗi vùng. Lớn hơn 1 là vùng xuất phát nhiều hơn điểm đến; nhỏ hơn 1 ngược lại.`,steps:[`pu = df['PULocationID'].value_counts(); do = df['DOLocationID'].value_counts().`,`ratio = (pu / do).dropna().`,`Chú ý vùng không có chuyến trả sẽ chia cho 0: dùng dropna và kiểm tra vô cực.`,`Hiển thị 10 tỷ lệ cao nhất và 10 thấp nhất.`],code:`pu = df['PULocationID'].value_counts()
do = df['DOLocationID'].value_counts()
ratio = (pu / do).replace([np.inf, -np.inf], np.nan).dropna()
print(ratio.nlargest(10)); print(ratio.nsmallest(10))`,lotus:`Chi nhánh có 300 khách đi và 150 khách đến cho tỷ lệ 2: nhiều người rời đi hơn đến. Chi nhánh tỷ lệ 0,5 thì ngược lại.`,trap:`Vùng chỉ có 1 đón và 0 trả cho tỷ lệ vô cực. Lọc số chuyến tối thiểu trước khi xếp hạng.`,read:[`Bảng: tỷ lệ đón/trả mỗi vùng; trên 1 là vùng đón nhiều hơn trả.`,`East Elmhurst 7,83, JFK 4,48 và LaGuardia 2,88 đứng đầu.`],remark:`Các vùng sân bay có tỷ lệ đón/trả rất cao (East Elmhurst 7,83; JFK 4,48; LaGuardia 2,88): khách rời sân bay nhiều hơn khách đến, nên xe cần được chuyển từ nơi khác về bù.`,howRemark:[`Nêu vùng có tỷ lệ cao nhất.`,`Giải thích ý nghĩa tỷ lệ trên và dưới 1.`,`Gợi ý hành động điều phối.`]},en:{think:`Pickup-to-dropoff ratio of each zone. Above 1 means more departures than arrivals; below 1 the opposite.`,steps:[`pu = df['PULocationID'].value_counts(); do = df['DOLocationID'].value_counts().`,`ratio = (pu / do).dropna().`,`Mind zones with no dropoffs dividing by 0: use dropna and check for infinity.`,`Show the 10 highest and 10 lowest ratios.`],code:`pu = df['PULocationID'].value_counts()
do = df['DOLocationID'].value_counts()
ratio = (pu / do).replace([np.inf, -np.inf], np.nan).dropna()
print(ratio.nlargest(10)); print(ratio.nsmallest(10))`,lotus:`A branch with 300 customers leaving and 150 arriving gives a ratio of 2: more people leave than arrive. A branch with ratio 0.5 is the opposite.`,trap:`A zone with 1 pickup and 0 dropoffs gives infinity. Filter a minimum trip count before ranking.`,read:[`Table: pickup/dropoff ratio per zone; above 1 means more pickups than dropoffs.`,`East Elmhurst 7.83, JFK 4.48 and LaGuardia 2.88 lead.`],remark:`Airport zones have very high pickup/dropoff ratios (East Elmhurst 7.83; JFK 4.48; LaGuardia 2.88): more people leave airports than arrive, so cars must be repositioned in.`,howRemark:[`Name the zones with the highest ratio.`,`Explain the meaning above and below 1.`,`Suggest a dispatch action.`]}},"3.2.7":{vi:{think:`Giờ đêm từ 23 giờ đến 5 giờ sáng. Lọc chuyến theo giờ đêm rồi tìm top vùng đón và trả trong chính tập đó.`,steps:[`Định nghĩa đêm rõ ràng: pickup_hour >= 23 hoặc pickup_hour < 5 (ghi lại bạn chọn có gồm cả 5:00 hay không).`,`night = df[mask].`,`Top 10 vùng đón và trả chỉ trong night, không phải trong cả năm.`],code:`night = df[(df['pickup_hour'] >= 23) | (df['pickup_hour'] < 5)]
print(night['PULocationID'].value_counts().head(10))
print(night['DOLocationID'].value_counts().head(10))`,lotus:`Ở khung 21:00 đến 23:00, giả sử chi nhánh Quận 1 vẫn đông còn Thủ Đức thưa. Top vùng của giờ đêm thường khác top vùng cả ngày.`,trap:`Lấy top của cả năm rồi lọc giờ đêm cho kết quả khác. Lọc giờ đêm trước rồi mới xếp hạng.`,read:[`Hai bảng: top vùng đón đêm và top vùng trả đêm (23h–5h).`,`So với top ban ngày để thấy khác biệt.`],remark:`Đêm đón nhiều nhất ở East Village (15.416), JFK Airport (13.870) và West Village (12.498): ban đêm nhu cầu chuyển sang các khu giải trí thay vì các khu văn phòng.`,howRemark:[`Nêu 3 vùng đầu.`,`So với top ban ngày.`,`Giải thích khác biệt.`]},en:{think:`Night hours run 11 PM to 5 AM. Filter trips by night hour, then find top pickup and dropoff zones within that subset.`,steps:[`Define night clearly: pickup_hour >= 23 or pickup_hour < 5 (record whether you include 5:00).`,`night = df[mask].`,`Top 10 pickup and dropoff zones within night only, not across the year.`],code:`night = df[(df['pickup_hour'] >= 23) | (df['pickup_hour'] < 5)]
print(night['PULocationID'].value_counts().head(10))
print(night['DOLocationID'].value_counts().head(10))`,lotus:`In the 21:00 to 23:00 window, suppose District 1 is still busy while Thu Duc is quiet. Late-hour top zones are often not the all-day top zones.`,trap:`Taking the yearly top then filtering to night gives a different result. Filter to night first, then rank.`,read:[`Two tables: top night pickup zones and top night dropoff zones (23h–5h).`,`Compare with the daytime top.`],remark:`At night pickups lead in East Village (15,416), JFK Airport (13,870) and West Village (12,498): night demand shifts to entertainment areas rather than office districts.`,howRemark:[`Name the top 3.`,`Compare with the daytime top.`,`Explain the difference.`]}},"3.2.8":{vi:{think:`Tỷ trọng doanh thu giữa đêm và ngày là doanh thu mỗi nhóm chia cho tổng.`,steps:[`Tạo cột is_night theo định nghĩa ở 3.2.7.`,`rev = df.groupby('is_night')['total_amount'].sum().`,`share = rev / rev.sum().`],code:`df['is_night'] = (df['pickup_hour'] >= 23) | (df['pickup_hour'] < 5)
rev = df.groupby('is_night')['total_amount'].sum()
print((rev / rev.sum()).round(3))`,lotus:`Nếu giờ đêm cho 12 phần doanh thu trên 100, tỷ trọng đêm là 12%. Một khung giờ vắng khách vẫn có thể có giá bán cao hơn.`,trap:`Dùng cùng định nghĩa đêm xuyên suốt. Đổi định nghĩa giữa các bài làm các con số không so được.`,read:[`Dòng chữ: ban ngày 88,6% và ban đêm (23h–5h) 11,4% doanh thu.`,`Biểu đồ: tỷ trọng hai nhóm.`],remark:`Ban đêm (23h–5h) chiếm 11,4% doanh thu so với 88,6% ban ngày: doanh thu chủ yếu đến từ ban ngày.`,howRemark:[`Báo hai tỷ trọng.`,`Nhắc đêm chỉ 6 giờ trong 24.`,`Kết luận.`]},en:{think:`Night versus day revenue share is each group's revenue divided by the total.`,steps:[`Create is_night using the definition from 3.2.7.`,`rev = df.groupby('is_night')['total_amount'].sum().`,`share = rev / rev.sum().`],code:`df['is_night'] = (df['pickup_hour'] >= 23) | (df['pickup_hour'] < 5)
rev = df.groupby('is_night')['total_amount'].sum()
print((rev / rev.sum()).round(3))`,lotus:`If night hours bring 12 parts of revenue per 100, the night share is 12%. A quiet window can still carry a higher price.`,trap:`Use one definition of night throughout. Changing it between tasks makes the numbers incomparable.`,read:[`Text: daytime 88.6% and night (23h–5h) 11.4% of revenue.`,`Chart: share of the two groups.`],remark:`Night (23h–5h) brings 11.4% of revenue versus 88.6% by day: revenue is mostly daytime.`,howRemark:[`Report both shares.`,`Remind night is only 6 of 24 hours.`,`Conclude.`]}},"3.2.9":{vi:{think:`Giá trên dặm trên hành khách: lấy giá trên dặm của chuyến, rồi chia cho số hành khách. Hai người đi chung cùng một chuyến mỗi người trả một nửa.`,steps:[`Chỉ giữ trip_distance > 0.`,`fare_per_mile = fare_amount / trip_distance.`,`per_passenger = fare_per_mile / passenger_count.`,`Trung bình theo passenger_count.`],code:`d = df[df['trip_distance'] > 0].copy()
d['fare_per_mile'] = d['fare_amount'] / d['trip_distance']
d['fpm_pp'] = d['fare_per_mile'] / d['passenger_count']
print(d.groupby('passenger_count')['fpm_pp'].mean())`,lotus:`Gói đôi 1.200 nghìn cho hai người nghĩa là mỗi người 600 nghìn. Giá chia cho đầu người cho thấy gói đôi rẻ hơn gói lẻ bao nhiêu.`,trap:`Chia cho 0 hành khách hoặc 0 dặm làm ra vô cực. Lọc trước.`,read:[`Bảng: giá trên dặm và giá trên dặm trên người, theo số khách.`,`Giá mỗi dặm gần như không đổi (7,3–7,5); chia theo người thì giảm.`],remark:`Giá trên dặm của chuyến ổn định khoảng 7,4 dù có bao nhiêu khách, nên đi chung rẻ hơn mỗi người: 6 khách chỉ còn 1,24 mỗi người so với 7,49 khi đi một mình.`,howRemark:[`Nêu giá trên dặm và trên người.`,`Giải thích vì sao chia theo người.`,`Nói ý nghĩa với chính sách giá.`]},en:{think:`Fare per mile per passenger: take the trip's fare per mile, then divide by passenger count. Two people sharing one trip each pay half.`,steps:[`Keep only trip_distance > 0.`,`fare_per_mile = fare_amount / trip_distance.`,`per_passenger = fare_per_mile / passenger_count.`,`Average by passenger_count.`],code:`d = df[df['trip_distance'] > 0].copy()
d['fare_per_mile'] = d['fare_amount'] / d['trip_distance']
d['fpm_pp'] = d['fare_per_mile'] / d['passenger_count']
print(d.groupby('passenger_count')['fpm_pp'].mean())`,lotus:`A couple package at 1,200 thousand for two people means 600 thousand each. Dividing by head shows how much cheaper the couple package is than single ones.`,trap:`Dividing by 0 passengers or 0 miles gives infinity. Filter first.`,read:[`Table: fare per mile and fare per mile per person by passenger count.`,`Per-mile price barely changes (7.3–7.5); per person it drops.`],remark:`The trip's price per mile stays about 7.4 whatever the passenger count, so sharing is cheaper per person: 6 passengers pay only 1.24 each vs 7.49 alone.`,howRemark:[`State price per mile and per person.`,`Explain why divide by passengers.`,`State the pricing implication.`]}},"3.2.10":{vi:{think:`Giá trung bình trên dặm theo giờ trong ngày và theo thứ trong tuần.`,steps:[`Dùng fare_per_mile từ 3.2.9.`,`d.groupby('pickup_hour')['fare_per_mile'].mean() và theo pickup_day.`,`Vẽ hai biểu đồ.`],code:`d.groupby('pickup_hour')['fare_per_mile'].mean().plot()
d.groupby('pickup_day')['fare_per_mile'].mean().reindex(days).plot(kind='bar')`,lotus:`Giá bình quân mỗi phút liệu trình theo giờ: giờ vàng 18:00 đến 20:00 đắt hơn giờ trưa. Thấy rồi mới hỏi có nên giảm giá giờ thấp điểm không.`,trap:`Chuyến rất ngắn làm giá trên dặm vọt lên vì cước mở cửa cố định. Cân nhắc lọc ngưỡng quãng đường.`,read:[`Bảng giá trung bình mỗi dặm theo giờ: thấp nhất 5,66 lúc 5h, cao nhất 8,16 lúc 12h.`,`Biểu đồ còn có theo thứ trong tuần.`],remark:`Giá mỗi dặm thấp ban đêm và rạng sáng (5,66 lúc 5h) và cao nhất quanh trưa (8,16 lúc 12h) vì ban ngày chuyến ngắn và kẹt xe nên tính theo dặm đắt hơn.`,howRemark:[`Nêu giờ thấp và cao nhất kèm số.`,`Đưa một lý do có thể.`,`Nhắc chỉ là tương quan.`]},en:{think:`Average fare per mile by hour of day and by day of week.`,steps:[`Use fare_per_mile from 3.2.9.`,`d.groupby('pickup_hour')['fare_per_mile'].mean() and by pickup_day.`,`Draw two charts.`],code:`d.groupby('pickup_hour')['fare_per_mile'].mean().plot()
d.groupby('pickup_day')['fare_per_mile'].mean().reindex(days).plot(kind='bar')`,lotus:`Average price per session minute by hour: the 18:00 to 20:00 golden window costs more than lunch. After seeing it, ask whether to discount quiet hours.`,trap:`Very short trips push fare per mile up because of the fixed flag-down fee. Consider a distance threshold.`,read:[`Table of mean price per mile by hour: lowest 5.66 at 5h, highest 8.16 at 12h.`,`The chart also shows weekdays.`],remark:`Price per mile is low at night and dawn (5.66 at 5h) and highest around noon (8.16 at 12h), as daytime trips are shorter and slower so cost more per mile.`,howRemark:[`State the low and high hours with numbers.`,`Give a possible reason.`,`Remind it is only correlation.`]}},"3.2.11":{vi:{think:`So giá trên dặm giữa hai nhà cung cấp (VendorID) theo từng giờ.`,steps:[`pivot: hàng là giờ, cột là VendorID, giá trị là trung bình fare_per_mile.`,`Vẽ hai đường.`,`Nhớ VendorID 1 và 2 là hai nhà cung cấp dữ liệu, không phải hai hãng taxi.`],code:`d.pivot_table(index='pickup_hour', columns='VendorID', values='fare_per_mile', aggfunc='mean').plot()`,lotus:`Hai kênh đặt lịch (web và điện thoại) bán cùng gói với giá hiển thị khác nhau. So theo giờ để xem chênh lệch có cố định hay thay đổi.`,trap:`Hai nhà cung cấp có thể phục vụ các nhóm chuyến khác nhau, nên chênh lệch không chỉ là chênh lệch giá.`,read:[`Hai số: giá trên dặm của nhà cung cấp 1 (7,42) và 2 (7,47).`,`Biểu đồ chi tiết theo giờ.`],remark:`Hai nhà cung cấp gần như giống nhau về giá trên dặm (7,42 và 7,47), chỉ chênh khoảng 0,05.`,howRemark:[`So hai số.`,`Nói chênh có đáng kể không.`,`Nhắc xem biểu đồ theo giờ.`]},en:{think:`Compare fare per mile between the two vendors (VendorID) for each hour.`,steps:[`pivot: rows are hours, columns are VendorID, values are mean fare_per_mile.`,`Draw two lines.`,`Remember VendorID 1 and 2 are two data providers, not two taxi firms.`],code:`d.pivot_table(index='pickup_hour', columns='VendorID', values='fare_per_mile', aggfunc='mean').plot()`,lotus:`Two booking channels (web and phone) sell the same package at different shown prices. Compare by hour to see whether the gap is fixed or changing.`,trap:`The two vendors may serve different mixes of trips, so a gap is not only a price gap.`,read:[`Two numbers: price per mile of vendor 1 (7.42) and 2 (7.47).`,`The chart details it by hour.`],remark:`The two vendors are nearly identical on price per mile (7.42 vs 7.47), only about 0.05 apart.`,howRemark:[`Compare the two numbers.`,`Say whether the gap matters.`,`Point to the hourly chart.`]}},"3.2.12":{vi:{think:`Phân các chuyến thành ba bậc quãng đường rồi so giá trên dặm giữa hai nhà cung cấp ở mỗi bậc.`,steps:[`Bậc: đến 2 dặm, từ 2 đến 5 dặm, trên 5 dặm.`,`pd.cut với bins=[0, 2, 5, np.inf], right=True, và đặt nhãn.`,`Trung bình fare_per_mile theo (bậc, VendorID).`],code:`d['tier'] = pd.cut(d['trip_distance'], bins=[0, 2, 5, np.inf], labels=['<=2','2-5','>5'])
print(d.groupby(['tier','VendorID'], observed=True)['fare_per_mile'].mean().unstack())`,lotus:`Gói ngắn, vừa, dài: nhà cung cấp rẻ hơn ở bậc ngắn có thể đắt hơn ở bậc dài. Chia bậc cho thấy điều mà một con số trung bình che đi.`,trap:`Biên bậc phải rõ: 2 dặm thuộc bậc nào. Với right=True thì 2 thuộc bậc đầu.`,read:[`Bảng: giá trên dặm theo bậc quãng đường (hàng) và nhà cung cấp (cột).`,`Bậc càng dài, giá mỗi dặm càng thấp.`],remark:`Chuyến ngắn đắt nhất mỗi dặm (khoảng 8,9–9,0 dưới 2 dặm) và rẻ dần theo quãng đường (khoảng 4,4–4,5 trên 5 dặm); nhà cung cấp 2 nhỉnh hơn một chút ở mọi bậc.`,howRemark:[`Nêu xu hướng theo bậc.`,`So hai nhà cung cấp ở mỗi bậc.`,`Giải thích vì sao chuyến ngắn đắt mỗi dặm (phí mở cửa).`]},en:{think:`Split trips into three distance tiers, then compare fare per mile between vendors in each tier.`,steps:[`Tiers: up to 2 miles, 2 to 5 miles, above 5 miles.`,`pd.cut with bins=[0, 2, 5, np.inf], right=True, and set labels.`,`Mean fare_per_mile by (tier, VendorID).`],code:`d['tier'] = pd.cut(d['trip_distance'], bins=[0, 2, 5, np.inf], labels=['<=2','2-5','>5'])
print(d.groupby(['tier','VendorID'], observed=True)['fare_per_mile'].mean().unstack())`,lotus:`Short, medium, long packages: the vendor cheaper on short ones may be dearer on long ones. Tiers reveal what one average hides.`,trap:`The tier edges must be clear: which tier does 2 miles belong to. With right=True it belongs to the first.`,read:[`Table: price per mile by distance tier (rows) and vendor (columns).`,`The longer the tier, the lower the per-mile price.`],remark:`Short trips cost most per mile (about 8.9–9.0 under 2 miles) and fall with distance (about 4.4–4.5 over 5 miles); vendor 2 is slightly higher at every tier.`,howRemark:[`State the trend by tier.`,`Compare the two vendors per tier.`,`Explain why short trips cost more per mile.`]}},"3.2.13":{vi:{think:`Phần trăm tiền boa là tiền boa chia cho tiền cước. Chỉ tính chuyến trả bằng thẻ vì tiền boa tiền mặt không được ghi.`,steps:[`Lọc payment_type == 1 và fare_amount > 0.`,`tip_pct = tip_amount / fare_amount * 100.`,`Trung bình theo bậc quãng đường, số hành khách, giờ đón.`,`Nêu các yếu tố khiến tip_pct thấp.`],code:`c = d[(d['payment_type'] == 1) & (d['fare_amount'] > 0)].copy()
c['tip_pct'] = c['tip_amount'] / c['fare_amount'] * 100
print(c.groupby('tier', observed=True)['tip_pct'].mean())
print(c.groupby('passenger_count')['tip_pct'].mean())
print(c.groupby('pickup_hour')['tip_pct'].mean())`,lotus:`Boa 50 nghìn trên giá 650 nghìn là 7,7%. Chỉ tính khách thanh toán thẻ hoặc chuyển khoản, vì tiền mặt không có trong sổ.`,trap:`Tính boa cho cả chuyến tiền mặt làm tỷ lệ boa thấp giả.`,read:[`Dòng chữ: tiền boa trung bình của khách trả thẻ là 24,6% cước.`,`Biểu đồ phân phối % boa.`],remark:`Khách trả thẻ boa trung bình 24,6% cước. Chỉ tính thẻ vì tiền boa tiền mặt không được ghi lại nên thiếu.`,howRemark:[`Báo %.`,`Nói vì sao chỉ lấy thẻ.`,`Nhắc giới hạn của số liệu.`]},en:{think:`Tip percentage is tip divided by fare. Count card trips only because cash tips are not recorded.`,steps:[`Filter payment_type == 1 and fare_amount > 0.`,`tip_pct = tip_amount / fare_amount * 100.`,`Average by distance tier, passenger count, pickup hour.`,`State which factors lead to low tip_pct.`],code:`c = d[(d['payment_type'] == 1) & (d['fare_amount'] > 0)].copy()
c['tip_pct'] = c['tip_amount'] / c['fare_amount'] * 100
print(c.groupby('tier', observed=True)['tip_pct'].mean())
print(c.groupby('passenger_count')['tip_pct'].mean())
print(c.groupby('pickup_hour')['tip_pct'].mean())`,lotus:`A tip of 50 thousand on a 650 thousand price is 7.7%. Count only card or transfer customers, since cash is not in the log.`,trap:`Counting cash trips makes the tip rate falsely low.`,read:[`Text: card customers tip 24.6% of the fare on average.`,`Chart: distribution of tip %.`],remark:`Card customers tip 24.6% of the fare on average. Only cards are counted because cash tips are not recorded.`,howRemark:[`Report the %.`,`Say why only card.`,`Remind the data limit.`]}},"3.2.14":{vi:{think:`Số hành khách thay đổi thế nào theo giờ và theo thứ trong tuần. Một bảng giờ nhân thứ cho thấy cả hai cùng lúc.`,steps:[`pivot_table với hàng là giờ, cột là thứ, giá trị là trung bình passenger_count.`,`Vẽ bản đồ nhiệt (heatmap).`,`Đọc ô đậm nhất.`],code:`pt = df.pivot_table(index='pickup_hour', columns='pickup_day', values='passenger_count', aggfunc='mean')[days]
sns.heatmap(pt, cmap='YlOrRd')`,lotus:`Số khách mỗi lượt đặt ở Lotus Spa: tối cuối tuần thường đi đôi nhiều hơn sáng thứ hai. Bản đồ nhiệt cho thấy điều đó trong một hình.`,trap:`Trung bình số khách chênh nhau rất ít giữa các ô. Đừng đọc chênh lệch nhỏ như một mẫu hình.`,read:[`Bảng giờ × thứ: số hành khách trung bình mỗi chuyến.`,`Đọc theo hàng (một giờ qua các thứ) và theo cột.`],remark:`Số hành khách trung bình chỉ dao động khoảng 1,2–1,5 mỗi chuyến; cao hơn vào cuối tuần và ban đêm (khoảng 1,45–1,51), thấp nhất sáng sớm ngày thường (1,21–1,26).`,howRemark:[`Nêu thấp nhất và cao nhất kèm số.`,`Nhận xét cuối tuần và ban đêm.`,`Kết luận về độ dao động.`]},en:{think:`How passenger count varies by hour and by day of week. An hour-by-day table shows both at once.`,steps:[`pivot_table with hour as rows, day as columns, mean passenger_count as values.`,`Draw a heatmap.`,`Read the darkest cell.`],code:`pt = df.pivot_table(index='pickup_hour', columns='pickup_day', values='passenger_count', aggfunc='mean')[days]
sns.heatmap(pt, cmap='YlOrRd')`,lotus:`Guests per Lotus Spa booking: weekend evenings tend to carry more pairs than Monday mornings. A heatmap shows that in one picture.`,trap:`Average guest counts differ very little between cells. Do not read a tiny difference as a pattern.`,read:[`Hour × weekday table: mean passengers per trip.`,`Read across a row (one hour over weekdays) and down a column.`],remark:`Mean passengers only range about 1.2–1.5 per trip; higher on weekends and at night (about 1.45–1.51), lowest on weekday early mornings (1.21–1.26).`,howRemark:[`State the lowest and highest with numbers.`,`Comment on weekend and night.`,`Conclude on the small variation.`]}},"3.2.15":{vi:{think:`Số hành khách trung bình ở từng vùng. Vẽ cột cho top và thêm cột vào bảng bản đồ.`,steps:[`avg = df.groupby('PULocationID')['passenger_count'].mean().`,`Gắn vào zones_with_trips theo LocationID.`,`Vẽ bản đồ màu theo avg_passengers.`],code:`avg = df.groupby('PULocationID')['passenger_count'].mean().rename('avg_passengers')
zones_with_trips = zones_with_trips.merge(avg, left_on='LocationID', right_index=True, how='left')
zones_with_trips.plot(column='avg_passengers', legend=True, figsize=(12,10))`,lotus:`Chi nhánh có nhiều nhóm đi chung có số khách trung bình cao hơn. Biết điều đó thì chọn gói đôi hay gói nhóm cho chi nhánh nào.`,trap:`Vùng ít chuyến có trung bình nhiễu. Lọc số chuyến tối thiểu hoặc ghi chú.`,read:[`Bảng: vùng, số khách trung bình và số chuyến.`,`Chỉ nên so vùng có đủ chuyến (cột n).`],remark:`Battery Park có số khách trung bình cao nhất (1,82 với 837 chuyến), tiếp theo Red Hook (1,71) và DUMBO (1,69); các vùng du lịch hay đi nhóm.`,howRemark:[`Nêu top vùng kèm số khách.`,`Kiểm cột n để chắc đủ mẫu.`,`Giải thích có thể.`]},en:{think:`Average passenger count per zone. Draw bars for the top and add a column to the map table.`,steps:[`avg = df.groupby('PULocationID')['passenger_count'].mean().`,`Attach to zones_with_trips by LocationID.`,`Draw a colour map by avg_passengers.`],code:`avg = df.groupby('PULocationID')['passenger_count'].mean().rename('avg_passengers')
zones_with_trips = zones_with_trips.merge(avg, left_on='LocationID', right_index=True, how='left')
zones_with_trips.plot(column='avg_passengers', legend=True, figsize=(12,10))`,lotus:`A branch with many group visits has a higher average guest count. Knowing that, choose couple or group packages for which branch.`,trap:`Zones with few trips have noisy averages. Filter a minimum count or add a note.`,read:[`Table: zone, mean passengers and trips.`,`Compare only zones with enough trips (column n).`],remark:`Battery Park has the highest mean passengers (1.82 over 837 trips), then Red Hook (1.71) and DUMBO (1.69); tourist areas often travel in groups.`,howRemark:[`Name the top zones with passenger means.`,`Check column n for enough sample.`,`Give a possible explanation.`]}},"3.2.16":{vi:{think:`Mức độ thường xuyên của các loại phụ phí và nơi hoặc lúc chúng được áp dụng nhiều hơn.`,steps:[`Với mỗi cột phụ phí (extra, mta_tax, tolls_amount, improvement_surcharge, congestion_surcharge, airport_fee): tỷ lệ chuyến có giá trị lớn hơn 0.`,`Nhóm theo giờ và theo vùng đón để xem phụ phí nào tập trung ở đâu.`,`Phụ phí sân bay chỉ có ở vùng sân bay.`],code:`surch = ['extra','mta_tax','tolls_amount','improvement_surcharge','congestion_surcharge','airport_fee']
print((df[surch] > 0).mean().round(3))
for col in ['extra','congestion_surcharge','airport_fee']:
    df.assign(flag=df[col] > 0).groupby('pickup_hour')['flag'].mean().plot(label=col)`,lotus:`Phụ phí giờ vàng áp dụng 18:00 đến 20:00. Đếm tỷ lệ booking có phụ phí theo giờ cho thấy phụ phí tập trung ở đâu và có đang làm khách rời đi không.`,trap:`Đừng nhầm tần suất với doanh thu: một phụ phí hiếm nhưng lớn có thể quan trọng hơn một phụ phí thường xuyên nhưng nhỏ.`,read:[`Bốn số: % chuyến có từng loại phụ phí: extra 61,6%, congestion 92,2%, airport 8,9%, tolls 8,2%.`,`Biểu đồ chi tiết theo giờ hoặc vùng.`],remark:`Phí ùn tắc áp dụng cho 92,2% chuyến và phụ thu extra cho 61,6%; phí sân bay (8,9%) và cầu đường (8,2%) chỉ ở số ít chuyến, nên chỉ phí ùn tắc là phụ phí phổ biến.`,howRemark:[`Xếp phụ phí theo mức thường gặp.`,`Nêu phí nào đặc thù theo nơi.`,`Nói ý nghĩa tính tổng cước.`]},en:{think:`How often each surcharge applies and where or when it applies more.`,steps:[`For each surcharge column (extra, mta_tax, tolls_amount, improvement_surcharge, congestion_surcharge, airport_fee): share of trips with a value above 0.`,`Group by hour and by pickup zone to see where each surcharge concentrates.`,`The airport fee exists only in airport zones.`],code:`surch = ['extra','mta_tax','tolls_amount','improvement_surcharge','congestion_surcharge','airport_fee']
print((df[surch] > 0).mean().round(3))
for col in ['extra','congestion_surcharge','airport_fee']:
    df.assign(flag=df[col] > 0).groupby('pickup_hour')['flag'].mean().plot(label=col)`,lotus:`The golden-hour surcharge applies 18:00 to 20:00. Counting the share of bookings with a surcharge by hour shows where it concentrates and whether it pushes customers away.`,trap:`Do not confuse frequency with revenue: a rare but large surcharge can matter more than a frequent but small one.`,read:[`Four numbers: % of trips with each surcharge: extra 61.6%, congestion 92.2%, airport 8.9%, tolls 8.2%.`,`The chart details by hour or zone.`],remark:`The congestion surcharge applies to 92.2% of trips and extra to 61.6%; airport (8.9%) and tolls (8.2%) hit few trips, so only congestion is a widespread surcharge.`,howRemark:[`Rank surcharges by frequency.`,`Name which are location-specific.`,`State the meaning for total fare.`]}},"4.1.1":{vi:{think:`Khuyến nghị về điều phối: dựa vào mẫu hình nhu cầu và các tuyến chậm. Mỗi khuyến nghị phải trỏ về một kết quả bạn đã tính.`,steps:[`Nêu giờ đông (3.2.2) và các tuyến chậm (3.2.1).`,`Đề xuất: điều xe đến vùng và giờ nào, tránh tuyến chậm lúc nào.`,`Mỗi câu đi kèm một con số từ phân tích của bạn.`],code:`# Write your recommendations here as markdown or print statements,
# each citing a number from your analysis, e.g.
# print(f'Busiest hour {hourly.idxmax()}: {scaled.max():,.0f} trips -> dispatch more cabs before this hour')`,lotus:`Giờ đông là 19:00 và tuyến Quận 1 sang Quận 3 chậm nhất lúc 18:00: dời một nhân viên về chi nhánh Quận 1 trước 18:00 và đẩy lịch hẹn giữa hai chi nhánh sang 16:00.`,trap:`Một khuyến nghị không có con số đi kèm chỉ là ý kiến. Dẫn con số.`,read:[`Mục này là bài viết khuyến nghị, không có số mới; hãy dựa vào các kết quả ở mục 3.`],remark:`Khuyến nghị điều phối phải trỏ về số đã tính: ví dụ đỉnh lúc 18h (3.2.2), tốc độ chỉ khoảng 10 dặm/giờ buổi chiều (3.2.1), tỷ lệ đón/trả sân bay cao (3.2.6).`,howRemark:[`Chọn một kết quả cụ thể làm bằng chứng.`,`Nêu số liệu kèm mục tham chiếu.`,`Đưa hành động cụ thể, đo được.`,`Nêu giới hạn (mẫu 5%, không có dữ liệu chi phí).`]},en:{think:`Dispatch recommendations: based on demand patterns and slow routes. Each recommendation must point back to a result you computed.`,steps:[`State the busy hours (3.2.2) and slow routes (3.2.1).`,`Propose: which zones and hours to send cabs to, when to avoid slow routes.`,`Attach a number from your analysis to every sentence.`],code:`# Write your recommendations here as markdown or print statements,
# each citing a number from your analysis, e.g.
# print(f'Busiest hour {hourly.idxmax()}: {scaled.max():,.0f} trips -> dispatch more cabs before this hour')`,lotus:`The busy hour is 19:00 and the District 1 to District 3 route is slowest at 18:00: move one staff member to District 1 before 18:00 and shift inter-branch appointments to 16:00.`,trap:`A recommendation with no number is only an opinion. Cite the number.`,read:[`This task is a written recommendation with no new numbers; rely on the results in part 3.`],remark:`Dispatch recommendations must cite computed numbers: e.g. the 18h peak (3.2.2), only about 10 mph in the afternoon (3.2.1), high airport pickup/dropoff ratios (3.2.6).`,howRemark:[`Pick a concrete result as evidence.`,`Quote the number with the task reference.`,`Give a specific, measurable action.`,`State the limits (5% sample, no cost data).`]}},"4.1.2":{vi:{think:`Đặt xe ở đâu và lúc nào dựa vào nhu cầu theo vùng, giờ, thứ và tháng. Dùng tỷ lệ đón trên trả (3.2.6) để biết vùng nào cần bù xe.`,steps:[`Vùng có tỷ lệ đón cao hơn trả nhiều: xe rời đi hết, cần đưa xe về.`,`Vùng đêm đông (3.2.7): giữ một số xe trực.`,`Theo tháng và thứ: tăng hoặc giảm đội xe theo mùa.`],code:`# Write positioning suggestions here, citing the ratio table (3.2.6),
# the night-hours table (3.2.7) and the monthly trend (3.1.4)`,lotus:`Chi nhánh Quận 1 có tỷ lệ đi trên đến là 2: đưa thêm một nhân viên về sau 18:00. Thủ Đức vắng vào tháng 12: giảm ca ở đó.`,trap:`Đề xuất đặt xe ở vùng có nhiều chuyến mà không xét tỷ lệ đón trên trả sẽ làm vùng đó thừa xe.`,read:[`Mục này là bài viết khuyến nghị, không có số mới; hãy dựa vào các kết quả ở mục 3.`],remark:`Đặt xe theo vùng, giờ và thứ: tăng xe quanh 18h và ở JFK/LaGuardia (tỷ lệ đón/trả 4,48 và 2,88), chuyển xe từ các vùng có tỷ lệ dưới 1 về bù.`,howRemark:[`Chọn một kết quả cụ thể làm bằng chứng.`,`Nêu số liệu kèm mục tham chiếu.`,`Đưa hành động cụ thể, đo được.`,`Nêu giới hạn (mẫu 5%, không có dữ liệu chi phí).`]},en:{think:`Where and when to position cabs based on demand by zone, hour, weekday and month. Use the pickup-to-dropoff ratio (3.2.6) to know which zones need top-ups.`,steps:[`A zone with pickups well above dropoffs: cabs leave and do not return, so send cabs back.`,`Busy night zones (3.2.7): keep some cabs on standby.`,`By month and weekday: grow or shrink the fleet seasonally.`],code:`# Write positioning suggestions here, citing the ratio table (3.2.6),
# the night-hours table (3.2.7) and the monthly trend (3.1.4)`,lotus:`District 1 has a leave-to-arrive ratio of 2: bring in one more staff member after 18:00. Thu Duc is quiet in December: cut shifts there.`,trap:`Positioning cabs where there are many trips without checking the pickup-to-dropoff ratio leaves that zone with too many cabs.`,read:[`This task is a written recommendation with no new numbers; rely on the results in part 3.`],remark:`Place cars by zone, hour and weekday: add cars around 18h and at JFK/LaGuardia (pickup/dropoff ratio 4.48 and 2.88), moving cars in from zones below 1.`,howRemark:[`Pick a concrete result as evidence.`,`Quote the number with the task reference.`,`Give a specific, measurable action.`,`State the limits (5% sample, no cost data).`]}},"4.1.3":{vi:{think:`Điều chỉnh giá dựa trên dữ liệu: tăng doanh thu mà vẫn cạnh tranh với nhà cung cấp khác.`,steps:[`Dùng giá trên dặm theo giờ (3.2.10) và theo bậc quãng đường (3.2.12).`,`Đề xuất giá cao hơn ở giờ đông và ở bậc nơi bạn đang rẻ hơn đối thủ.`,`Giữ nguyên hoặc giảm ở giờ vắng để kéo nhu cầu.`,`Nêu rủi ro: giá tăng có thể làm giảm số chuyến.`],code:`# Write pricing adjustments here, citing fare per mile by hour (3.2.10),
# the tier comparison (3.2.12) and the surcharge shares (3.2.16)`,lotus:`Giờ vàng 18:00 đến 20:00 đông nhưng giá ngang giờ trưa: thử tăng giá ở khung đó, giữ giá giờ vắng. Theo dõi tuần sau xem số lượt đặt có giảm quá mức bạn chấp nhận không.`,trap:`Tăng giá mà không đặt mức chấp nhận được cho sự sụt giảm số lượt là đánh cược.`,read:[`Mục này là bài viết khuyến nghị, không có số mới; hãy dựa vào các kết quả ở mục 3.`],remark:`Điều chỉnh giá: chuyến ngắn đắt mỗi dặm (8,9–9,0) trong khi hai nhà cung cấp gần như bằng giá (7,42 và 7,47); tăng giá vừa phải ở giờ cao điểm nhưng giữ cạnh tranh.`,howRemark:[`Chọn một kết quả cụ thể làm bằng chứng.`,`Nêu số liệu kèm mục tham chiếu.`,`Đưa hành động cụ thể, đo được.`,`Nêu giới hạn (mẫu 5%, không có dữ liệu chi phí).`]},en:{think:`Data-driven pricing adjustments: raise revenue while staying competitive with other vendors.`,steps:[`Use fare per mile by hour (3.2.10) and by distance tier (3.2.12).`,`Propose higher prices at busy hours and in tiers where you are cheaper than rivals.`,`Hold or cut at quiet hours to lift demand.`,`State the risk: a higher price may reduce trips.`],code:`# Write pricing adjustments here, citing fare per mile by hour (3.2.10),
# the tier comparison (3.2.12) and the surcharge shares (3.2.16)`,lotus:`The golden window 18:00 to 20:00 is busy but priced like lunch: try raising it, keep quiet-hour prices. Watch next week to see whether bookings drop by more than you accept.`,trap:`Raising prices without setting an acceptable drop in bookings is a gamble.`,read:[`This task is a written recommendation with no new numbers; rely on the results in part 3.`],remark:`Pricing: short trips cost most per mile (8.9–9.0) while the two vendors are nearly equal (7.42 vs 7.47); raise prices modestly at peak while staying competitive.`,howRemark:[`Pick a concrete result as evidence.`,`Quote the number with the task reference.`,`Give a specific, measurable action.`,`State the limits (5% sample, no cost data).`]}}},results:{"1.1.1":{code:`import pandas as pd, numpy as np, matplotlib.pyplot as plt, seaborn as sns, geopandas as gpd, glob
frames = []
total_rows = 0
for f in sorted(glob.glob('/tmp/asg/taxi/yellow_tripdata_2023-*.parquet')):
    m = pd.read_parquet(f)
    total_rows += len(m)
    m['date'] = m['tpep_pickup_datetime'].dt.date
    m['hour'] = m['tpep_pickup_datetime'].dt.hour
    s = m.groupby(['date', 'hour'], group_keys=False).sample(frac=0.05, random_state=42)
    frames.append(s.drop(columns=['date', 'hour']))
    print(f.split('_')[-1], len(m), '->', len(s))
df = pd.concat(frames, ignore_index=True)
sample_fraction = len(df) / total_rows
print('tổng số chuyến cả năm:', total_rows, '| mẫu:', len(df), '| tỷ lệ lấy mẫu:', round(sample_fraction, 4))`,text:`2023-01.parquet 3066766 -> 153336
2023-02.parquet 2913955 -> 145690
2023-03.parquet 3403766 -> 170184
2023-04.parquet 3288250 -> 164410
2023-05.parquet 3513649 -> 175683
2023-06.parquet 3307234 -> 165362
2023-07.parquet 2907108 -> 145348
2023-08.parquet 2824209 -> 141219
2023-09.parquet 2846722 -> 142340
2023-10.parquet 3522285 -> 176117
2023-11.parquet 3339715 -> 166986
2023-12.parquet 3376567 -> 168836
tổng số chuyến cả năm: 38310226 | mẫu: 1915511 | tỷ lệ lấy mẫu: 0.05`,imgs:[]},"2.1.1":{code:`df = df[(df['tpep_pickup_datetime'].dt.year == 2023)].reset_index(drop=True)
df.info()`,text:`<class 'pandas.DataFrame'>
RangeIndex: 1915510 entries, 0 to 1915509
Data columns (total 20 columns):
 #   Column                 Dtype         
---  ------                 -----         
 0   VendorID               int64         
 1   tpep_pickup_datetime   datetime64[us]
 2   tpep_dropoff_datetime  datetime64[us]
 3   passenger_count        float64       
 4   trip_distance          float64       
 5   RatecodeID             float64       
 6   store_and_fwd_flag     str           
 7   PULocationID           int64         
 8   DOLocationID           int64         
 9   payment_type           int64         
 10  fare_amount            float64       
 11  extra                  float64       
 12  mta_tax                float64       
 13  tip_amount             float64       
 14  tolls_amount           float64       
 15  improvement_surcharge  float64       
 16  total_amount           float64       
 17  congestion_surcharge   float64       
 18  airport_fee            float64       
 19  Airport_fee            float64       
dtypes: datetime64[us](2), float64(13), int64(4), str(1)
memory usage: 294.3 MB`,imgs:[]},"2.1.2":{code:`print([c for c in df.columns if 'irport' in c])
df['airport_fee'] = df['airport_fee'].fillna(df['Airport_fee']) if 'Airport_fee' in df.columns else df['airport_fee']
df = df.drop(columns=[c for c in ['Airport_fee'] if c in df.columns])
print(df['airport_fee'].describe().round(2))`,text:`['airport_fee', 'Airport_fee']
count    1849775.00
mean           0.14
std            0.47
min           -1.75
25%            0.00
50%            0.00
75%            0.00
max            1.75
Name: airport_fee, dtype: float64`,imgs:[]},"2.1.3":{code:`money = ['fare_amount', 'extra', 'mta_tax', 'tip_amount', 'tolls_amount', 'improvement_surcharge', 'total_amount', 'congestion_surcharge', 'airport_fee']
neg = df[money].lt(0).sum()
print(neg[neg > 0])
print(df.loc[df['fare_amount'] < 0, 'RatecodeID'].value_counts(dropna=False).head())
for c in money: df[c] = df[c].abs()`,text:`fare_amount              19059
extra                     9527
mta_tax                  18251
tip_amount                  94
tolls_amount              1250
improvement_surcharge    18790
total_amount             18801
congestion_surcharge     15156
airport_fee               2490
dtype: int64
RatecodeID
1.0    16695
2.0     1344
5.0      359
NaN      358
3.0      198
Name: count, dtype: int64`,imgs:[]},"2.2.1":{code:`print((df.isnull().mean() * 100).round(2)[df.isnull().sum() > 0])`,text:`passenger_count         3.43
RatecodeID              3.43
store_and_fwd_flag      3.43
congestion_surcharge    3.43
airport_fee             3.43
dtype: float64`,imgs:[]},"2.2.2":{code:`print(df['passenger_count'].value_counts(dropna=False).sort_index())
df['passenger_count'] = df['passenger_count'].fillna(df['passenger_count'].median())
df.loc[df['passenger_count'] == 0, 'passenger_count'] = df['passenger_count'].median()`,text:`passenger_count
0.0      28990
1.0    1390732
2.0     280855
3.0      69463
4.0      39502
5.0      24376
6.0      15829
7.0          8
8.0         17
9.0          3
NaN      65735
Name: count, dtype: int64`,imgs:[]},"2.2.3":{code:`print(df['RatecodeID'].value_counts(dropna=False))
df['RatecodeID'] = df['RatecodeID'].fillna(df['RatecodeID'].mode()[0])`,text:`RatecodeID
1.0     1744049
2.0       73959
NaN       65735
5.0       10846
99.0      10649
3.0        6391
4.0        3880
6.0           1
Name: count, dtype: int64`,imgs:[]},"2.2.4":{code:`print(df['congestion_surcharge'].value_counts(dropna=False))
df['congestion_surcharge'] = df['congestion_surcharge'].fillna(df['congestion_surcharge'].mode()[0])
df['airport_fee'] = df['airport_fee'].fillna(0)
print(df.isnull().sum().sum(), 'ô trống còn lại')`,text:`congestion_surcharge
2.5    1705676
0.0     144099
NaN      65735
Name: count, dtype: int64
65735 ô trống còn lại`,imgs:[]},"2.3.1":{code:`df['trip_duration'] = (df['tpep_dropoff_datetime'] - df['tpep_pickup_datetime']).dt.total_seconds() / 60
print(df[['trip_distance','fare_amount','tip_amount','total_amount','trip_duration']].describe().round(1).to_string())
n0 = len(df)
df = df[df['passenger_count'] <= 6]
df = df[~((df['trip_distance'] < 0.1) & (df['fare_amount'] > 300))]
df = df[~((df['trip_distance'] == 0) & (df['fare_amount'] == 0) & (df['PULocationID'] != df['DOLocationID']))]
df = df[(df['trip_duration'] > 0) & (df['trip_duration'] < 24 * 60)]
df = df[df['trip_distance'] < 100]
df = df[df['fare_amount'] < 500]
df = df[df['payment_type'] != 0]
df = df.reset_index(drop=True)
print('bỏ', n0 - len(df), 'dòng lỗi, còn', len(df))`,text:`       trip_distance  fare_amount  tip_amount  total_amount  trip_duration
count      1915510.0    1915510.0   1915510.0     1915510.0      1915510.0
mean             4.0         20.0         3.5          29.0           17.4
std            199.0        105.1         4.1         105.9           40.6
min              0.0          0.0         0.0           0.0          -58.6
25%              1.0          9.3         1.0          16.0            7.6
50%              1.8         13.5         2.8          21.0           12.7
75%              3.4         22.6         4.4          31.0           20.7
max         191945.0     143163.4       444.0      143167.4         7352.1
bỏ 66539 dòng lỗi, còn 1848971`,imgs:[]},"3.1.1":{code:`df['pickup_hour'] = df['tpep_pickup_datetime'].dt.hour
df['pickup_day'] = df['tpep_pickup_datetime'].dt.day_name()
df['pickup_month'] = df['tpep_pickup_datetime'].dt.month
cats = ['VendorID', 'RatecodeID', 'PULocationID', 'DOLocationID', 'payment_type']
print('Phân loại: categorical =', cats, '| numerical = passenger_count, trip_distance, trip_duration, các cột tiền')`,text:`Phân loại: categorical = ['VendorID', 'RatecodeID', 'PULocationID', 'DOLocationID', 'payment_type'] | numerical = passenger_count, trip_distance, trip_duration, các cột tiền`,imgs:[]},"3.1.2":{code:`fig, ax = plt.subplots(1, 3, figsize=(17, 4))
df['pickup_hour'].value_counts().sort_index().plot(kind='bar', ax=ax[0], title='Chuyến theo giờ')
order = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
df['pickup_day'].value_counts().reindex(order).plot(kind='bar', ax=ax[1], title='Chuyến theo thứ')
df['pickup_month'].value_counts().sort_index().plot(kind='bar', ax=ax[2], title='Chuyến theo tháng')
plt.tight_layout()
print('giờ đông nhất:', df['pickup_hour'].value_counts().idxmax(), '| thứ đông nhất:', df['pickup_day'].value_counts().idxmax(), '| tháng đông nhất:', df['pickup_month'].value_counts().idxmax())`,text:`giờ đông nhất: 18 | thứ đông nhất: Thursday | tháng đông nhất: 5`,imgs:[`/assign/eda-taxi/3_1_2-1.png`]},"3.1.3":{code:`cols = ['fare_amount', 'tip_amount', 'total_amount', 'trip_distance']
print((df[cols] == 0).sum())
nz = df[(df[['fare_amount', 'total_amount']] > 0).all(axis=1)].copy()
print(len(df), '->', len(nz))`,text:`fare_amount         576
tip_amount       426710
total_amount        251
trip_distance     23540
dtype: int64
1848971 -> 1848395`,imgs:[]},"3.1.4":{code:`monthly = nz.groupby('pickup_month')['total_amount'].sum() * (1 / sample_fraction)
(monthly / 1e6).plot(kind='bar', title='Doanh thu theo tháng (triệu USD, đã nhân ngược tỷ lệ mẫu)')
print((monthly / 1e6).round(1).to_string())`,text:`pickup_month
1      81.9
2      77.4
3      93.3
4      91.7
5     100.2
6      93.7
7      82.4
8      79.9
9      81.7
10    100.2
11     93.6
12     93.0`,imgs:[`/assign/eda-taxi/3_1_4-1.png`]},"3.1.5":{code:`nz['quarter'] = nz['tpep_pickup_datetime'].dt.quarter
q = nz.groupby('quarter')['total_amount'].sum()
print((q / q.sum() * 100).round(1).to_string())
(q / q.sum()).plot(kind='pie', autopct='%1.1f%%', title='Tỷ trọng doanh thu theo quý')`,text:`quarter
1    23.6
2    26.7
3    22.8
4    26.8`,imgs:[`/assign/eda-taxi/3_1_5-1.png`]},"3.1.6":{code:`d = nz[nz['trip_distance'] > 0]
d2 = d.sample(8000, random_state=1)
sns.scatterplot(data=d2, x='trip_distance', y='fare_amount', alpha=0.3)
print('tương quan distance - fare:', round(d['trip_distance'].corr(d['fare_amount']), 3))`,text:`tương quan distance - fare: 0.944`,imgs:[`/assign/eda-taxi/3_1_6-1.png`]},"3.1.7":{code:`s = nz.sample(8000, random_state=2)
fig, ax = plt.subplots(1, 3, figsize=(17, 4))
sns.scatterplot(data=s, x='trip_duration', y='fare_amount', alpha=0.3, ax=ax[0])
sns.boxplot(data=s, x='passenger_count', y='fare_amount', ax=ax[1])
sns.scatterplot(data=s, x='trip_distance', y='tip_amount', alpha=0.3, ax=ax[2])
print('fare ~ duration', round(nz['fare_amount'].corr(nz['trip_duration']), 3))
print('fare ~ passengers', round(nz['fare_amount'].corr(nz['passenger_count']), 3))
print('tip ~ distance', round(nz['tip_amount'].corr(nz['trip_distance']), 3))`,text:`fare ~ duration 0.271
fare ~ passengers 0.047
tip ~ distance 0.568`,imgs:[`/assign/eda-taxi/3_1_7-1.png`]},"3.1.8":{code:`pt = df['payment_type'].map({1: 'Thẻ tín dụng', 2: 'Tiền mặt', 3: 'Miễn phí', 4: 'Tranh chấp'}).value_counts()
print((pt / pt.sum() * 100).round(1).to_string())
pt.plot(kind='bar', title='Hình thức thanh toán')`,text:`payment_type
Thẻ tín dụng    80.7
Tiền mặt        17.3
Tranh chấp       1.3
Miễn phí         0.7`,imgs:[`/assign/eda-taxi/3_1_8-1.png`]},"3.1.9":{code:`import zipfile
zipfile.ZipFile('/tmp/asg/taxi/taxi_zones.zip').extractall('/tmp/asg/taxi/zones')
zones = gpd.read_file(glob.glob('/tmp/asg/taxi/zones/**/taxi_zones.shp', recursive=True)[0])
print(zones.head(3).drop(columns='geometry').to_string())
zones.plot(figsize=(6, 6))`,text:`   OBJECTID  Shape_Leng  Shape_Area                     zone  LocationID borough
0         1    0.116357    0.000782           Newark Airport           1     EWR
1         2    0.433470    0.004866              Jamaica Bay           2  Queens
2         3    0.084341    0.000314  Allerton/Pelham Gardens           3   Bronx`,imgs:[`/assign/eda-taxi/3_1_9-1.png`]},"3.1.10":{code:`merged = df.merge(zones[['LocationID', 'zone', 'borough']], left_on='PULocationID', right_on='LocationID', how='left')
print(merged[['PULocationID', 'zone', 'borough']].head())`,text:`   PULocationID             zone    borough
0            68     East Chelsea  Manhattan
1           170      Murray Hill  Manhattan
2            79     East Village  Manhattan
3           148  Lower East Side  Manhattan
4           161   Midtown Center  Manhattan`,imgs:[]},"3.1.11":{code:`trips_per_zone = merged.groupby('PULocationID').size().rename('trips')
print(trips_per_zone.sort_values(ascending=False).head(8))`,text:`PULocationID
132    99363
237    87916
161    86783
236    77704
162    66773
138    64839
186    64517
230    62028
Name: trips, dtype: int64`,imgs:[]},"3.1.12":{code:`zones_with_trips = zones.merge(trips_per_zone, left_on='LocationID', right_index=True, how='left').fillna({'trips': 0})
print(zones_with_trips[['zone', 'borough', 'trips']].sort_values('trips', ascending=False).head(8).to_string(index=False))`,text:`                        zone   borough   trips
                 JFK Airport    Queens 99363.0
       Upper East Side South Manhattan 87916.0
              Midtown Center Manhattan 86783.0
       Upper East Side North Manhattan 77704.0
                Midtown East Manhattan 66773.0
           LaGuardia Airport    Queens 64839.0
Penn Station/Madison Sq West Manhattan 64517.0
   Times Sq/Theatre District Manhattan 62028.0`,imgs:[]},"3.1.13":{code:`fig, ax = plt.subplots(1, 1, figsize=(10, 10))
zones_with_trips.plot(column='trips', ax=ax, legend=True, cmap='YlOrRd', legend_kwds={'label': 'Số chuyến đón (mẫu)', 'orientation': 'horizontal'})
ax.set_axis_off()`,text:``,imgs:[`/assign/eda-taxi/3_1_13-1.png`]},"3.2.1":{code:`d = nz[nz['trip_distance'] > 0].copy()
d['speed'] = d['trip_distance'] / (d['trip_duration'] / 60)
d = d[d['speed'] < 80]
sp = d.groupby('pickup_hour')['speed'].mean()
sp.plot(marker='o', title='Tốc độ trung bình (dặm/giờ) theo giờ')
route = d.groupby(['PULocationID', 'DOLocationID', 'pickup_hour']).agg(n=('speed', 'size'), speed=('speed', 'mean')).reset_index()
route = route[route['n'] >= 30].sort_values('speed').head(8)
print(sp.round(1).to_string())
print(route.round(1).to_string(index=False))`,text:`pickup_hour
0     14.7
1     14.6
2     14.7
3     15.6
4     18.6
5     20.5
6     16.9
7     13.3
8     11.3
9     11.0
10    10.6
11    10.1
12    10.0
13    10.0
14     9.8
15     9.5
16     9.7
17     9.6
18    10.1
19    11.2
20    12.3
21    12.8
22    13.2
23    14.3
 PULocationID  DOLocationID  pickup_hour   n  speed
          186           186           11  30    3.7
          186           186           13  38    3.7
          100           100           19  30    3.7
          186           100           16  71    3.8
          186           186           15  32    3.8
          186           100           13  91    3.9
          186           230           13 312    3.9
          230           230           17 145    3.9`,imgs:[`/assign/eda-taxi/3_2_1-1.png`]},"3.2.2":{code:`h = df['pickup_hour'].value_counts().sort_index()
h.plot(kind='bar', title='Số chuyến mỗi giờ (mẫu)')
print('giờ đông nhất:', h.idxmax(), 'với', h.max(), 'chuyến trong mẫu')`,text:`giờ đông nhất: 18 với 130555 chuyến trong mẫu`,imgs:[`/assign/eda-taxi/3_2_2-1.png`]},"3.2.3":{code:`top5 = (h.sort_values(ascending=False).head(5) / sample_fraction).round(0)
print(top5.astype(int).to_string())`,text:`pickup_hour
18    2611100
17    2497340
19    2339440
16    2307620
15    2306240`,imgs:[]},"3.2.4":{code:`df['is_weekend'] = df['tpep_pickup_datetime'].dt.dayofweek >= 5
t = df.groupby(['pickup_hour', 'is_weekend']).size().unstack()
t.columns = ['Ngày thường', 'Cuối tuần']
(t / t.sum()).plot(title='Tỷ trọng chuyến theo giờ: ngày thường và cuối tuần')`,text:``,imgs:[`/assign/eda-taxi/3_2_4-1.png`]},"3.2.5":{code:`pu = merged.groupby('PULocationID').size().sort_values(ascending=False).head(10)
do = df.groupby('DOLocationID').size().sort_values(ascending=False).head(10)
names = zones.set_index('LocationID')['zone']
print('Top 10 điểm đón:'); print(pd.DataFrame({'zone': names[pu.index].values, 'trips': pu.values}).to_string(index=False))
print('Top 10 điểm trả:'); print(pd.DataFrame({'zone': names[do.index].values, 'trips': do.values}).to_string(index=False))
hp = df[df['PULocationID'].isin(pu.index[:5])].groupby(['pickup_hour', 'PULocationID']).size().unstack()
hp.columns = [names.get(c, c) for c in hp.columns]
hp.plot(figsize=(11, 4), title='Giờ đón tại 5 khu đông nhất')`,text:`Top 10 điểm đón:
                        zone  trips
                 JFK Airport  99363
       Upper East Side South  87916
              Midtown Center  86783
       Upper East Side North  77704
                Midtown East  66773
           LaGuardia Airport  64839
Penn Station/Madison Sq West  64517
   Times Sq/Theatre District  62028
         Lincoln Square East  60845
                 Murray Hill  55076
Top 10 điểm trả:
                     zone  trips
    Upper East Side North  81437
    Upper East Side South  78448
           Midtown Center  72124
Times Sq/Theatre District  57357
              Murray Hill  54985
             Midtown East  52590
      Lincoln Square East  51779
    Upper West Side South  51481
          Lenox Hill West  48877
             East Chelsea  46791`,imgs:[`/assign/eda-taxi/3_2_5-1.png`]},"3.2.6":{code:`pc = df.groupby('PULocationID').size(); dc = df.groupby('DOLocationID').size()
r = (pc / dc).dropna(); r = r[(pc.reindex(r.index) >= 50) & (dc.reindex(r.index) >= 50)]
tab = pd.DataFrame({'zone': names.reindex(r.index).fillna('Unknown').values, 'pickup/dropoff': r.values}, index=r.index)
print('Cao nhất:'); print(tab.sort_values('pickup/dropoff', ascending=False).head(10).round(2).to_string(index=False))
print('Thấp nhất:'); print(tab.sort_values('pickup/dropoff').head(10).round(2).to_string(index=False))`,text:`Cao nhất:
                        zone  pickup/dropoff
               East Elmhurst            7.83
                 JFK Airport            4.48
           LaGuardia Airport            2.88
Penn Station/Madison Sq West            1.57
     Greenwich Village South            1.39
                Central Park            1.35
                West Village            1.32
                Midtown East            1.27
            Garment District            1.21
              Midtown Center            1.20
Thấp nhất:
                    zone  pickup/dropoff
          Newark Airport            0.05
              Greenpoint            0.06
                Flushing            0.06
Washington Heights North            0.06
            Clinton Hill            0.07
          Bushwick South            0.07
                  Inwood            0.07
        Roosevelt Island            0.08
      South Williamsburg            0.08
          Bushwick North            0.08`,imgs:[]},"3.2.7":{code:`night = df[(df['pickup_hour'] >= 23) | (df['pickup_hour'] < 5)]
npu = night.groupby('PULocationID').size().sort_values(ascending=False).head(10)
ndo = night.groupby('DOLocationID').size().sort_values(ascending=False).head(10)
print('Đón đêm:'); print(pd.DataFrame({'zone': names[npu.index].values, 'trips': npu.values}).to_string(index=False))
print('Trả đêm:'); print(pd.DataFrame({'zone': names[ndo.index].values, 'trips': ndo.values}).to_string(index=False))`,text:`Đón đêm:
                        zone  trips
                East Village  15416
                 JFK Airport  13870
                West Village  12498
                Clinton East   9721
             Lower East Side   9665
     Greenwich Village South   9016
   Times Sq/Theatre District   7929
Penn Station/Madison Sq West   6355
           LaGuardia Airport   6090
               Midtown South   6046
Trả đêm:
                     zone  trips
             East Village   8360
             Clinton East   6813
              Murray Hill   6152
             East Chelsea   5667
                 Gramercy   5517
          Lenox Hill West   5129
             West Village   4995
           Yorkville West   4970
Times Sq/Theatre District   4426
          Lower East Side   4399`,imgs:[]},"3.2.8":{code:`nh = (nz['pickup_hour'] >= 23) | (nz['pickup_hour'] < 5)
share = nz.groupby(nh)['total_amount'].sum(); share = share / share.sum() * 100
print('Doanh thu ban ngày:', round(share[False], 1), '% | ban đêm (23h-5h):', round(share[True], 1), '%')
share.rename({False: 'Ban ngày', True: 'Ban đêm'}).plot(kind='bar', title='Tỷ trọng doanh thu (%)')`,text:`Doanh thu ban ngày: 88.6 % | ban đêm (23h-5h): 11.4 %`,imgs:[`/assign/eda-taxi/3_2_8-1.png`]},"3.2.9":{code:`d = nz[nz['trip_distance'] > 0.5].copy()
d['fare_per_mile'] = d['fare_amount'] / d['trip_distance']
d = d[d['fare_per_mile'] < 100]
g = d.groupby('passenger_count')['fare_per_mile'].mean()
out = pd.DataFrame({'fare/mile': g, 'fare/mile/người': g / g.index})
print(out.round(2).to_string())
out['fare/mile/người'].plot(kind='bar', title='Giá mỗi dặm mỗi hành khách')`,text:`                 fare/mile  fare/mile/người
passenger_count                            
1.0                   7.49             7.49
2.0                   7.33             3.66
3.0                   7.47             2.49
4.0                   7.48             1.87
5.0                   7.36             1.47
6.0                   7.47             1.24`,imgs:[`/assign/eda-taxi/3_2_9-1.png`]},"3.2.10":{code:`fig, ax = plt.subplots(1, 2, figsize=(14, 4))
d.groupby('pickup_hour')['fare_per_mile'].mean().plot(marker='o', ax=ax[0], title='Giá/dặm theo giờ')
d.groupby('pickup_day')['fare_per_mile'].mean().reindex(order).plot(kind='bar', ax=ax[1], title='Giá/dặm theo thứ')
print(d.groupby('pickup_hour')['fare_per_mile'].mean().round(2).to_string())`,text:`pickup_hour
0     6.30
1     6.24
2     6.16
3     6.02
4     5.75
5     5.66
6     6.02
7     6.71
8     7.41
9     7.68
10    7.80
11    8.06
12    8.16
13    8.07
14    8.04
15    8.07
16    8.00
17    8.01
18    7.83
19    7.45
20    6.97
21    6.79
22    6.64
23    6.41`,imgs:[`/assign/eda-taxi/3_2_10-1.png`]},"3.2.11":{code:`v = d.groupby(['pickup_hour', 'VendorID'])['fare_per_mile'].mean().unstack()
v.plot(title='Giá/dặm theo giờ của từng hãng (VendorID)')
print(d.groupby('VendorID')['fare_per_mile'].mean().round(2))`,text:`VendorID
1    7.42
2    7.47
Name: fare_per_mile, dtype: float64`,imgs:[`/assign/eda-taxi/3_2_11-1.png`]},"3.2.12":{code:`d['tier'] = pd.cut(d['trip_distance'], [0, 2, 5, 1000], labels=['đến 2 dặm', '2 đến 5 dặm', 'trên 5 dặm'])
t = d.groupby(['tier', 'VendorID'], observed=True)['fare_per_mile'].mean().unstack()
print(t.round(2).to_string())
t.plot(kind='bar', title='Giá/dặm theo cự ly và hãng')`,text:`VendorID        1     2
tier                   
đến 2 dặm    8.85  9.02
2 đến 5 dặm  6.39  6.55
trên 5 dặm   4.42  4.50`,imgs:[`/assign/eda-taxi/3_2_12-1.png`]},"3.2.13":{code:`x = nz[(nz['payment_type'] == 1) & (nz['fare_amount'] > 0)].copy()
x['tip_pct'] = x['tip_amount'] / x['fare_amount'] * 100
x = x[x['tip_pct'] < 100]
fig, ax = plt.subplots(1, 3, figsize=(17, 4))
x.groupby(pd.cut(x['trip_distance'], [0, 1, 2, 5, 10, 100]), observed=True)['tip_pct'].mean().plot(kind='bar', ax=ax[0], title='Tip % theo cự ly')
x.groupby('passenger_count')['tip_pct'].mean().plot(kind='bar', ax=ax[1], title='Tip % theo số khách')
x.groupby('pickup_hour')['tip_pct'].mean().plot(marker='o', ax=ax[2], title='Tip % theo giờ')
print('tip trung bình (khách trả thẻ):', round(x['tip_pct'].mean(), 1), '%')`,text:`tip trung bình (khách trả thẻ): 24.6 %`,imgs:[`/assign/eda-taxi/3_2_13-1.png`]},"3.2.14":{code:`pv = df.pivot_table(index='pickup_hour', columns='pickup_day', values='passenger_count', aggfunc='mean')[order]
sns.heatmap(pv, cmap='YlGnBu', annot=False)
print(pv.round(2).iloc[[0, 6, 12, 18, 23]].to_string())`,text:`pickup_day   Monday  Tuesday  Wednesday  Thursday  Friday  Saturday  Sunday
pickup_hour                                                                
0              1.41     1.35       1.34      1.36    1.39      1.45    1.48
6              1.26     1.26       1.21      1.24    1.24      1.31    1.36
12             1.37     1.33       1.33      1.34    1.37      1.45    1.47
18             1.35     1.33       1.33      1.35    1.42      1.51    1.46
23             1.38     1.38       1.37      1.38    1.47      1.53    1.40`,imgs:[`/assign/eda-taxi/3_2_14-1.png`]},"3.2.15":{code:`pz = df.groupby('PULocationID').agg(avg=('passenger_count', 'mean'), n=('passenger_count', 'size'))
pz = pz[pz['n'] >= 100]
print(pz.sort_values('avg', ascending=False).head(5).assign(zone=lambda t: names.reindex(t.index).fillna('Unknown').values).round(2).to_string())
zz = zones.merge(pz['avg'], left_on='LocationID', right_index=True, how='left')
fig, ax = plt.subplots(figsize=(8, 8)); zz.plot(column='avg', ax=ax, legend=True, cmap='PuBu', missing_kwds={'color': '#eeeeee'}); ax.set_axis_off()`,text:`               avg     n                zone
PULocationID                                
12            1.82   837        Battery Park
195           1.71   196            Red Hook
66            1.69   481  DUMBO/Vinegar Hill
1             1.69   284      Newark Airport
265           1.56  1018             Unknown`,imgs:[`/assign/eda-taxi/3_2_15-1.png`]},"3.2.16":{code:`ex = {'extra': df['extra'] > 0, 'congestion_surcharge': df['congestion_surcharge'] > 0, 'airport_fee': df['airport_fee'] > 0, 'tolls': df['tolls_amount'] > 0}
rate = pd.Series({k: v.mean() * 100 for k, v in ex.items()})
print(rate.round(1).to_string())
fig, ax = plt.subplots(1, 2, figsize=(14, 4))
rate.plot(kind='bar', ax=ax[0], title='% chuyến có phụ phí')
df.groupby('pickup_hour').apply(lambda t: (t['extra'] > 0).mean() * 100).plot(ax=ax[1], title='% chuyến có phụ phí extra theo giờ')`,text:`extra                   61.6
congestion_surcharge    92.2
airport_fee              8.9
tolls                    8.2`,imgs:[`/assign/eda-taxi/3_2_16-1.png`]}}},{id:`delivery-time`,course:`C3 · Hồi quy tuyến tính`,title:[`Bài tập: Dự đoán thời gian giao`,`Assignment: Delivery Time Prediction`],file:`LR_Delivery_Time_Estimation_Starter.ipynb`,story:[`Starter gốc là dữ liệu đơn giao Porter. Trong Lotus Spa: «đơn» = lượt đặt lịch, «giao hàng» = khách vào phòng, «thời gian giao» = số phút khách chờ từ lúc đặt đến lúc vào phòng. Bạn dự đoán thời gian chờ để chị Lan báo trước cho khách. Các con số «file của bạn» là số thật tính từ porter_data_1.csv.`,`The original starter is Porter delivery data. In Lotus Spa: an order is a booking, delivery is the customer entering the room, delivery time is the minutes from booking to entering. You predict the wait so chị Lan can tell customers in advance. The “your file” numbers are real figures computed from porter_data_1.csv.`],concepts:[`d-19f8df89941b`],cells:[{t:`md`,s:`# Order Delivery Time Prediction`},{t:`md`,s:`## Objectives
The objective of this assignment is to build a regression model that predicts the delivery time for orders placed through Porter. The model will use various features such as the items ordered, the restaurant location, the order protocol, and the availability of delivery partners.

The key goals are:
- Predict the delivery time for an order based on multiple input features
- Improve delivery time predictions to optimiae operational efficiency
- Understand the key factors influencing delivery time to enhance the model's accuracy`},{t:`md`,s:`## Data Pipeline
The data pipeline for this assignment will involve the following steps:
1. **Data Loading**
2. **Data Preprocessing and Feature Engineering**
3. **Exploratory Data Analysis**
4. **Model Building**
5. **Model Inference**`},{t:`md`,s:`## Data Understanding
The dataset contains information on orders placed through Porter, with the following columns:

| Field                     | Description                                                                                 |
|---------------------------|---------------------------------------------------------------------------------------------|
| market_id                 | Integer ID representing the market where the restaurant is located.                         |
| created_at                | Timestamp when the order was placed.                                                        |
| actual_delivery_time      | Timestamp when the order was delivered.                                                     |
| store_primary_category    | Category of the restaurant (e.g., fast food, dine-in).                                      |
| order_protocol            | Integer representing how the order was placed (e.g., via Porter, call to restaurant, etc.). |
| total_items               | Total number of items in the order.                                                         |
| subtotal                  | Final price of the order.                                                                   |
| num_distinct_items        | Number of distinct items in the order.                                                      |
| min_item_price            | Price of the cheapest item in the order.                                                    |
| max_item_price            | Price of the most expensive item in the order.                                              |
| total_onshift_dashers     | Number of delivery partners on duty when the order was placed.                              |
| total_busy_dashers        | Number of delivery partners already occupied with other orders.                             |
| total_outstanding_orders  | Number of orders pending fulfillment at the time of the order.                              |
| distance                  | Total distance from the restaurant to the customer.                                         |
`},{t:`md`,s:`## **Importing Necessary Libraries**`},{t:`code`,s:`# Import essential libraries for data manipulation and analysis

`},{t:`md`,s:`## **1. Loading the data**
Load 'porter_data_1.csv' as a DataFrame`},{t:`code`,s:`# Importing the file porter_data_1.csv
`},{t:`md`,s:`## **2. Data Preprocessing and Feature Engineering** <font color = red>[15 marks]</font> <br>`},{t:`md`,s:`#### **2.1 Fixing the Datatypes**  <font color = red>[5 marks]</font> <br>
The current timestamps are in object format and need conversion to datetime format for easier handling and intended functionality`},{t:`md`,s:`##### **2.1.1** <font color = red>[2 marks]</font> <br>
Convert date and time fields to appropriate data type`,ref:`2.1.1`},{t:`code`,s:`# Convert 'created_at' and 'actual_delivery_time' columns to datetime format

`},{t:`md`,s:`##### **2.1.2**  <font color = red>[3 marks]</font> <br>
Convert categorical fields to appropriate data type`,ref:`2.1.2`},{t:`code`,s:`# Convert categorical features to category type

`},{t:`md`,s:`#### **2.2 Feature Engineering** <font color = red>[5 marks]</font> <br>
Calculate the time taken to execute the delivery as well as extract the hour and day at which the order was placed`},{t:`md`,s:"##### **2.2.1** <font color = red>[2 marks]</font> <br>\nCalculate the time taken using the features `actual_delivery_time` and `created_at`",ref:`2.2.1`},{t:`code`,s:`# Calculate time taken in minutes
`},{t:`md`,s:`##### **2.2.2** <font color = red>[3 marks]</font> <br>
Extract the hour at which the order was placed and which day of the week it was. Drop the unnecessary columns.`,ref:`2.2.2`},{t:`code`,s:`# Extract the hour and day of week from the 'created_at' timestamp


# Create a categorical feature 'isWeekend'

`},{t:`code`,s:`# Drop unnecessary columns
`},{t:`md`,s:`#### **2.3 Creating training and validation sets** <font color = red>[5 marks]</font> <br>`},{t:`md`,s:`##### **2.3.1** <font color = red>[2 marks]</font> <br>
 Define target and input features`,ref:`2.3.1`},{t:`code`,s:`# Define target variable (y) and features (X)

`},{t:`md`,s:`##### **2.3.2** <font color = red>[3 marks]</font> <br>
 Split the data into training and test sets`,ref:`2.3.2`},{t:`code`,s:`# Split data into training and testing sets

`},{t:`md`,s:`## **3. Exploratory Data Analysis on Training Data** <font color = red>[20 marks]</font> <br>
1. Analyzing the correlation between variables to identify patterns and relationships
2. Identifying and addressing outliers to ensure the integrity of the analysis
3. Exploring the relationships between variables and examining the distribution of the data for better insights`},{t:`md`,s:`#### **3.1 Feature Distributions** <font color = red> [7 marks]</font> <br>
`},{t:`code`,s:`# Define numerical and categorical columns for easy EDA and data manipulation

`},{t:`md`,s:`##### **3.1.1** <font color = red>[3 marks]</font> <br>
Plot distributions for numerical columns in the training set to understand their spread and any skewness`,ref:`3.1.1`},{t:`code`,s:`# Plot distributions for all numerical columns

`},{t:`md`,s:`##### **3.1.2** <font color = red>[2 marks]</font> <br>
Check the distribution of categorical features`,ref:`3.1.2`},{t:`code`,s:`# Distribution of categorical columns

`},{t:`md`,s:`##### **3.1.3** <font color = red>[2 mark]</font> <br>
Visualise the distribution of the target variable to understand its spread and any skewness`,ref:`3.1.3`},{t:`code`,s:`# Distribution of time_taken

`},{t:`md`,s:`#### **3.2 Relationships Between Features** <font color = red>[3 marks]</font> <br>`},{t:`md`,s:"##### **3.2.1** <font color = red>[3 marks]</font> <br>\nScatter plots for important numerical and categorical features to observe how they relate to `time_taken`",ref:`3.2.1`},{t:`code`,s:`# Scatter plot to visualise the relationship between time_taken and other features

`},{t:`code`,s:`# Show the distribution of time_taken for different hours

`},{t:`md`,s:"#### **3.3 Correlation Analysis** <font color = red>[5 marks]</font> <br>\nCheck correlations between numerical features to identify which variables are strongly related to `time_taken`"},{t:`md`,s:`##### **3.3.1** <font color = red>[3 marks]</font> <br>
Plot a heatmap to display correlations`,ref:`3.3.1`},{t:`code`,s:`# Plot the heatmap of the correlation matrix

`},{t:`md`,s:`##### **3.3.2** <font color = red>[2 marks]</font> <br>
Drop the columns with weak correlations with the target variable`,ref:`3.3.2`},{t:`code`,s:`# Drop 3-5 weakly correlated columns from training dataset

`},{t:`md`,s:`#### **3.4 Handling the Outliers** <font color = red>[5 marks]</font> <br>

`},{t:`md`,s:`##### **3.4.1** <font color = red>[2 marks]</font> <br>
Visualise potential outliers for the target variable and other numerical features using boxplots`,ref:`3.4.1`},{t:`code`,s:`# Boxplot for time_taken

`},{t:`md`,s:`##### **3.4.2** <font color = red>[3 marks]</font> <br>
Handle outliers present in all columns`,ref:`3.4.2`},{t:`code`,s:`# Handle outliers

`},{t:`md`,s:`## **4. Exploratory Data Analysis on Validation Data** <font color = red>[optional]</font> <br>
Optionally, perform EDA on test data to see if the distribution match with the training data`},{t:`code`,s:`# Define numerical and categorical columns for easy EDA and data manipulation

`},{t:`md`,s:`#### **4.1 Feature Distributions**
`},{t:`md`,s:`##### **4.1.1**
Plot distributions for numerical columns in the validation set to understand their spread and any skewness`,ref:`4.1.1`},{t:`code`,s:`# Plot distributions for all numerical columns

`},{t:`md`,s:`##### **4.1.2**
Check the distribution of categorical features`,ref:`4.1.2`},{t:`code`,s:`# Distribution of categorical columns

`},{t:`md`,s:`##### **4.1.3**
Visualise the distribution of the target variable to understand its spread and any skewness`,ref:`4.1.3`},{t:`code`,s:`# Distribution of time_taken

`},{t:`md`,s:"#### **4.2 Relationships Between Features**\nScatter plots for numerical features to observe how they relate to each other, especially to `time_taken`",ref:`4.2`},{t:`code`,s:`# Scatter plot to visualise the relationship between time_taken and other features

`},{t:`md`,s:`#### **4.3** Drop the columns with weak correlations with the target variable`,ref:`4.3`},{t:`code`,s:`# Drop the weakly correlated columns from training dataset

`},{t:`md`,s:`## **5. Model Building** <font color = red>[15 marks]</font> <br>`},{t:`md`,s:`#### **Import Necessary Libraries**`},{t:`code`,s:`# Import libraries

`},{t:`md`,s:`#### **5.1 Feature Scaling** <font color = red>[3 marks]</font> <br>`,ref:`5.1`},{t:`code`,s:`# Apply scaling to the numerical columns

`},{t:`md`,s:`Note that linear regression is agnostic to feature scaling. However, with feature scaling, we get the coefficients to be somewhat on the same scale so that it becomes easier to compare them.`},{t:`md`,s:`#### **5.2 Build a linear regression model** <font color = red>[5 marks]</font> <br>`,ref:`5.2`},{t:`md`,s:`You can choose from the libraries *statsmodels* and *scikit-learn* to build the model.`},{t:`code`,s:`# Create/Initialise the model
`},{t:`code`,s:`# Train the model using the training data
`},{t:`code`,s:`# Make predictions
`},{t:`code`,s:`# Find results for evaluation metrics

`},{t:`md`,s:`Note that we have 12 (depending on how you select features) training features. However, not all of them would be useful. Let's say we want to take the most relevant 8 features.

We will use Recursive Feature Elimination (RFE) here.

For this, you can look at the coefficients / p-values of features from the model summary and perform feature elimination, or you can use the RFE module provided with *scikit-learn*.`},{t:`md`,s:`#### **5.3 Build the model and fit RFE to select the most important features** <font color = red>[7 marks]</font> <br>`,ref:`5.3`},{t:`md`,s:`For RFE, we will start with all features and use
the RFE method to recursively reduce the number of features one-by-one.

After analysing the results of these iterations, we select the one that has a good balance between performance and number of features.`},{t:`code`,s:`# Loop through the number of features and test the model

`},{t:`code`,s:`# Build the final model with selected number of features

`},{t:`md`,s:`## **6. Results and Inference** <font color = red>[5 marks]</font> <br>`},{t:`md`,s:`#### **6.1 Perform Residual Analysis** <font color = red>[3 marks]</font> <br>`,ref:`6.1`},{t:`code`,s:`# Perform residual analysis using plots like residuals vs predicted values, Q-Q plot and residual histogram

`},{t:`md`,s:`[Your inferences here:]

`},{t:`md`,s:`#### **6.2 Perform Coefficient Analysis** <font color = red>[2 marks]</font> <br>`,ref:`6.2`},{t:`md`,s:`Perform coefficient analysis to find how changes in features affect the target.
Also, the features were scaled, so interpret the scaled and unscaled coefficients to understand the impact of feature changes on delivery time.
`},{t:`code`,s:`# Compare the scaled vs unscaled features used in the final model

`},{t:`md`,s:`Additionally, we can analyse the effect of a unit change in a feature. In other words, because we have scaled the features, a unit change in the features will not translate directly to the model. Use scaled and unscaled coefficients to find how will a unit change in a feature affect the target.`},{t:`code`,s:`# Analyze the effect of a unit change in a feature, say 'total_items'

`},{t:`md`,s:`Note:
The coefficients on the original scale might differ greatly in magnitude from the scaled coefficients, but they both describe the same relationships between variables.

Interpretation is key: Focus on the direction and magnitude of the coefficients on the original scale to understand the impact of each variable on the response variable in the original units.`},{t:`md`,s:`Include conclusions in your report document.`},{t:`md`,s:`## Subjective Questions <font color = red>[20 marks]</font>`},{t:`md`,s:`Answer the following questions only in the notebook. Include the visualisations/methodologies/insights/outcomes from all the above steps in your report.`},{t:`md`,s:`#### Subjective Questions based on Assignment`},{t:`md`,s:`##### **Question 1.** <font color = red>[2 marks]</font> <br>

Are there any categorical variables in the data? From your analysis of the categorical variables from the dataset, what could you infer about their effect on the dependent variable?`,ref:`Q1`},{t:`md`,s:`**Answer:**
>`},{t:`md`,s:`

---

`},{t:`md`,s:"##### **Question 2.** <font color = red>[1 marks]</font> <br>\nWhat does `test_size = 0.2` refer to during splitting the data into training and test sets?",ref:`Q2`},{t:`md`,s:`**Answer:**
>`},{t:`md`,s:`

---

`},{t:`md`,s:`##### **Question 3.** <font color = red>[1 marks]</font> <br>
Looking at the heatmap, which one has the highest correlation with the target variable?  `,ref:`Q3`},{t:`md`,s:`**Answer:**
>`},{t:`md`,s:`

---

`},{t:`md`,s:`##### **Question 4.** <font color = red>[2 marks]</font> <br>
What was your approach to detect the outliers? How did you address them?`,ref:`Q4`},{t:`md`,s:`**Answer:**

>`},{t:`md`,s:`

---

`},{t:`md`,s:`##### **Question 5.** <font color = red>[2 marks]</font> <br>
Based on the final model, which are the top 3 features significantly affecting the delivery time?`,ref:`Q5`},{t:`md`,s:`**Answer:**
>`},{t:`md`,s:`

---

`},{t:`md`,s:`#### General Subjective Questions`},{t:`md`,s:`##### **Question 6.** <font color = red>[3 marks]</font> <br>
Explain the linear regression algorithm in detail`,ref:`Q6`},{t:`md`,s:`**Answer:**
>
`},{t:`md`,s:`

---

`},{t:`md`,s:`##### **Question 7.** <font color = red>[2 marks]</font> <br>
Explain the difference between simple linear regression and multiple linear regression`,ref:`Q7`},{t:`md`,s:`**Answer:**
>`},{t:`md`,s:`

---

`},{t:`md`,s:`##### **Question 8.** <font color = red>[2 marks]</font> <br>
What is the role of the cost function in linear regression, and how is it minimized?`,ref:`Q8`},{t:`md`,s:`**Answer:**
>
`},{t:`md`,s:`

---

`},{t:`md`,s:`##### **Question 9.** <font color = red>[2 marks]</font> <br>
Explain the difference between overfitting and underfitting.

`,ref:`Q9`},{t:`md`,s:`**Answer:**

>`},{t:`md`,s:`

---

`},{t:`md`,s:`##### **Question 10.** <font color = red>[3 marks]</font> <br>
How do residual plots help in diagnosing a linear regression model?`,ref:`Q10`},{t:`md`,s:`**Answer:**
>`}],guides:{"2.1.1":{vi:{think:`Hai cột thời gian đang là chữ. Muốn trừ được hai mốc giờ, phải đổi sang datetime.`,steps:[`pd.to_datetime cho created_at và actual_delivery_time.`,`Kiểm tra df.dtypes: hai cột phải là datetime64.`,`Đếm số giá trị lỗi bằng errors='coerce' nếu nghi có dòng sai định dạng.`],code:`df['created_at'] = pd.to_datetime(df['created_at'])
df['actual_delivery_time'] = pd.to_datetime(df['actual_delivery_time'])
print(df[['created_at','actual_delivery_time']].dtypes)`,lotus:`Sổ booking ghi giờ đặt là chữ «2026-11-03 19:05». Phải đổi thành giờ thật thì mới tính được khách chờ bao lâu.`,trap:`Trừ hai cột chữ sẽ báo lỗi hoặc ra kết quả vô nghĩa.`,read:[`Dòng dtype: datetime64 nghĩa là Python đã hiểu hai cột là thời điểm thật, không còn là chữ.`,`Bảng mẫu: so created_at và actual_delivery_time; mốc giao luôn sau mốc đặt.`],remark:`Hai cột đã thành datetime; ví dụ đơn đầu đặt 22:24 và giao 23:11, tức 47 phút, nên giờ có thể trừ cho nhau.`,howRemark:[`Kiểm kiểu dữ liệu trước và sau khi đổi.`,`Tự trừ tay một dòng mẫu để kiểm tra.`,`Ghi một câu: vì sao phải đổi kiểu.`]},en:{think:`Both time columns are text. To subtract two timestamps they must become datetime.`,steps:[`pd.to_datetime for created_at and actual_delivery_time.`,`Check df.dtypes: both must be datetime64.`,`Use errors='coerce' and count failures if some rows may be malformed.`],code:`df['created_at'] = pd.to_datetime(df['created_at'])
df['actual_delivery_time'] = pd.to_datetime(df['actual_delivery_time'])
print(df[['created_at','actual_delivery_time']].dtypes)`,lotus:`The booking log stores the order time as text “2026-11-03 19:05”. It must become a real time before you can compute how long the customer waited.`,trap:`Subtracting two text columns errors out or gives nonsense.`,read:[`The dtype line: datetime64 means Python now reads the columns as real timestamps, not text.`,`Sample table: compare created_at and actual_delivery_time; delivery always follows creation.`],remark:`Both columns are now datetime; e.g. the first order was placed 22:24 and delivered 23:11, i.e. 47 minutes, so times can be subtracted.`,howRemark:[`Check the dtype before and after.`,`Subtract one sample row by hand to verify.`,`Write one sentence: why the type had to change.`]}},"2.1.2":{vi:{think:`market_id, order_protocol, store_primary_category là mã, không phải số để cộng trừ. Đổi sang kiểu category để mô hình và biểu đồ coi chúng là nhóm.`,steps:[`Liệt kê cột mã: market_id, order_protocol, store_primary_category.`,`Đổi bằng astype('category').`,`Trong file của bạn: market_id có 6 giá trị, order_protocol có 7, store_primary_category có 73.`],code:`cat_cols = ['market_id', 'order_protocol', 'store_primary_category']
df[cat_cols] = df[cat_cols].astype('category')
print(df[cat_cols].nunique())`,lotus:`Mã chi nhánh 1, 2, 3 không có «hơn kém». Mã gói A12, B07, C03 cũng vậy. Đổi sang nhóm để máy không tự coi 3 là gấp 3 lần 1.`,trap:`Để mã ở kiểu số thì hồi quy sẽ gán một hệ số chung cho mã, như thể mã 6 gấp 6 lần mã 1.`,read:[`Mỗi dòng là số giá trị khác nhau của một cột mã: market_id 6, order_protocol 7, store_primary_category 73.`,`Cột có ít giá trị (6, 7) thành nhóm dễ; cột có 73 giá trị phải thận trọng vì nhiều nhóm sẽ rất ít đơn.`],remark:`Ba cột mã được xem là nhóm (6, 7 và 73 giá trị). store_primary_category có 73 nhóm nên khi mã hóa sẽ sinh rất nhiều cột và nhiều nhóm có ít đơn.`,howRemark:[`Nêu số nhóm của từng cột.`,`Phân biệt mã với số đo được.`,`Dự báo hệ quả khi mã hóa cột có nhiều nhóm.`]},en:{think:`market_id, order_protocol, store_primary_category are codes, not numbers to add or subtract. Convert to category so models and charts treat them as groups.`,steps:[`List the code columns: market_id, order_protocol, store_primary_category.`,`Convert with astype('category').`,`In your file: market_id has 6 values, order_protocol 7, store_primary_category 73.`],code:`cat_cols = ['market_id', 'order_protocol', 'store_primary_category']
df[cat_cols] = df[cat_cols].astype('category')
print(df[cat_cols].nunique())`,lotus:`Branch codes 1, 2, 3 have no “more or less”. Package codes A12, B07, C03 likewise. Convert to category so the machine does not treat 3 as three times 1.`,trap:`Leaving codes numeric makes regression assign one coefficient to the code, as if code 6 were six times code 1.`,read:[`Each line is the number of distinct values of a code column: market_id 6, order_protocol 7, store_primary_category 73.`,`Few values (6, 7) make easy groups; 73 values call for care because many groups will have very few orders.`],remark:`Three code columns are treated as categories (6, 7 and 73 values). store_primary_category has 73, so encoding creates many columns and many thin groups.`,howRemark:[`State each column's number of groups.`,`Distinguish codes from measurable numbers.`,`Predict the consequence of encoding a column with many groups.`]}},"2.2.1":{vi:{think:`Thời gian giao là hiệu hai mốc giờ, tính bằng phút. Đây là biến mục tiêu của cả bài.`,steps:[`(actual_delivery_time − created_at).dt.total_seconds() / 60.`,`Xem describe(): trong file của bạn trung bình khoảng 46,2 phút, trung vị 45, từ 32 đến 110.`,`Kiểm tra không có giá trị âm.`],code:`df['time_taken'] = (df['actual_delivery_time'] - df['created_at']).dt.total_seconds() / 60
print(df['time_taken'].describe().round(1))`,lotus:`Khách đặt lúc 19:05 và vào phòng lúc 19:50 là 45 phút chờ. Đây là con số mô hình sẽ cố đoán trước.`,trap:`Dùng .dt.seconds thay vì total_seconds làm mất phần ngày khi chênh qua nửa đêm.`,read:[`count là số đơn (175.777), mean là trung bình, 50% là trung vị.`,`So mean 46,2 với trung vị 45: gần nhau là phân phối cân; max 110 xa hẳn 75% (52) là đuôi dài bên phải.`],remark:`Một đơn mất trung bình 46,2 phút (độ lệch chuẩn 9,3), nửa số đơn giao trong 45 phút. Có vài đơn rất lâu (tối đa 110 phút), nên phân phối có đuôi phải.`,howRemark:[`Báo trung bình và trung vị.`,`Dùng độ lệch chuẩn để nói mức dao động.`,`So max với 75% để nói về đuôi.`,`Nêu biến này là mục tiêu của cả bài.`]},en:{think:`Delivery time is the difference of the two timestamps, in minutes. It is the target of the whole assignment.`,steps:[`(actual_delivery_time − created_at).dt.total_seconds() / 60.`,`Check describe(): in your file the mean is about 46.2 minutes, median 45, from 32 to 110.`,`Check there are no negative values.`],code:`df['time_taken'] = (df['actual_delivery_time'] - df['created_at']).dt.total_seconds() / 60
print(df['time_taken'].describe().round(1))`,lotus:`A customer books at 19:05 and enters the room at 19:50: a 45-minute wait. That is the number the model will try to predict ahead of time.`,trap:`Using .dt.seconds instead of total_seconds drops the day part when the gap crosses midnight.`,read:[`count is the number of orders (175,777), mean the average, 50% the median.`,`Mean 46.2 vs median 45 close means balanced; max 110 far above the 75% value (52) is a long right tail.`],remark:`An order takes 46.2 minutes on average (std 9.3); half are delivered within 45. A few take very long (max 110), so the distribution has a right tail.`,howRemark:[`Report the mean and median.`,`Use std to describe spread.`,`Compare max with 75% to describe the tail.`,`State this is the target of the whole assignment.`]}},"2.2.2":{vi:{think:`Giờ đặt và thứ trong tuần là hai tín hiệu về nhịp nhu cầu. Thêm cờ cuối tuần, rồi bỏ cột không còn cần.`,steps:[`hour = created_at.dt.hour; day = created_at.dt.dayofweek.`,`isWeekend = day >= 5 (kiểu category).`,`Bỏ created_at, actual_delivery_time vì thông tin đã chuyển vào time_taken, hour, day.`],code:`df['hour'] = df['created_at'].dt.hour
df['day'] = df['created_at'].dt.dayofweek
df['isWeekend'] = (df['day'] >= 5).astype('category')
df = df.drop(columns=['created_at', 'actual_delivery_time'])`,lotus:`Giờ đặt 19:00 và thứ bảy cho biết khách đông hay vắng. Trong file của bạn, đơn đặt lúc 2 đến 3 giờ sáng chờ lâu nhất (khoảng 50 phút), còn buổi tối khoảng 40 đến 42 phút.`,trap:`Giữ lại actual_delivery_time khi dự đoán là rò rỉ đáp án: bạn đã biết kết quả trước khi đoán.`,read:[`Bảng là thời gian giao trung bình theo giờ đặt; mỗi dòng là một giờ.`,`Nhìn hai đầu của bảng: giờ 2 khoảng 50,7 phút, giờ 21 khoảng 40,1 phút.`,`Biểu đồ là cùng dữ liệu để xem hình dạng.`],remark:`Giao chậm nhất đơn đặt khoảng 2h sáng (~50,7 phút) và nhanh nhất khoảng 21h (~40,1 phút). Giờ đặt có ảnh hưởng, nên giữ hour làm biến vào mô hình.`,howRemark:[`Nêu giờ cao nhất và thấp nhất kèm số.`,`Tính chênh (khoảng 10 phút).`,`Kết luận: có giữ biến hay không.`]},en:{think:`Order hour and weekday are signals of demand rhythm. Add a weekend flag, then drop columns no longer needed.`,steps:[`hour = created_at.dt.hour; day = created_at.dt.dayofweek.`,`isWeekend = day >= 5 (category type).`,`Drop created_at and actual_delivery_time since their information moved into time_taken, hour, day.`],code:`df['hour'] = df['created_at'].dt.hour
df['day'] = df['created_at'].dt.dayofweek
df['isWeekend'] = (df['day'] >= 5).astype('category')
df = df.drop(columns=['created_at', 'actual_delivery_time'])`,lotus:`Order hour 19:00 and Saturday tell you whether customers are many or few. In your file, orders at 2 to 3 AM wait longest (about 50 minutes), evenings about 40 to 42.`,trap:`Keeping actual_delivery_time when predicting leaks the answer: you already know the result before guessing.`,read:[`The table is mean delivery time by order hour; each row is one hour.`,`Look at both ends: hour 2 about 50.7 min, hour 21 about 40.1 min.`,`The chart shows the same data as a shape.`],remark:`Slowest for orders around 2am (~50.7 min), fastest around 9pm (~40.1 min). Hour matters, so keep hour as a model input.`,howRemark:[`Name the highest and lowest hours with numbers.`,`Compute the gap (about 10 minutes).`,`Conclude whether to keep the variable.`]}},"2.3.1":{vi:{think:`Tách biến mục tiêu y (time_taken) khỏi các biến đầu vào X. Mọi thứ còn lại là X.`,steps:[`y = df['time_taken'].`,`X = df.drop(columns=['time_taken']).`,`Kiểm tra X không còn time_taken, và cả hai cùng số dòng.`],code:`y = df['time_taken']
X = df.drop(columns=['time_taken'])
print(X.shape, y.shape)`,lotus:`Câu hỏi là «chờ bao lâu». Đáp án (y) đi một bên, mọi thông tin biết trước lúc đặt (X) đi một bên.`,trap:`Để time_taken lọt vào X làm mô hình đạt điểm gần tuyệt đối, một kết quả giả.`,read:[`Hai bộ số là hình dạng: X có 175.777 dòng và 15 cột, y có 175.777 giá trị.`,`Số dòng X và y phải bằng nhau.`],remark:`X có 175.777 dòng × 15 cột và y có 175.777 giá trị: khớp nhau, sẵn sàng chia train/test.`,howRemark:[`Kiểm số dòng hai bên bằng nhau.`,`Nói cột nào là y và vì sao tách.`]},en:{think:`Separate the target y (time_taken) from the input features X. Everything else is X.`,steps:[`y = df['time_taken'].`,`X = df.drop(columns=['time_taken']).`,`Check X no longer has time_taken and both have the same row count.`],code:`y = df['time_taken']
X = df.drop(columns=['time_taken'])
print(X.shape, y.shape)`,lotus:`The question is “how long to wait”. The answer (y) goes one side, everything known before booking (X) the other.`,trap:`Letting time_taken slip into X gives a near-perfect score, a fake result.`,read:[`Two shapes: X has 175,777 rows and 15 columns, y has 175,777 values.`,`Row counts of X and y must be equal.`],remark:`X is 175,777 rows × 15 columns and y has 175,777 values: they match, ready to split.`,howRemark:[`Check both row counts match.`,`Say which column is y and why it is split off.`]}},"2.3.2":{vi:{think:`Chia train và test trước khi khám phá, để phần test thật sự là dữ liệu chưa từng thấy.`,steps:[`train_test_split(X, y, test_size=0.2, random_state=42).`,`Kiểm tra kích thước: file của bạn có 175.777 dòng, 80% là khoảng 140.600 dòng train.`,`Mọi EDA ở bước 3 chỉ làm trên tập train.`],code:`from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
print(len(X_train), len(X_test))`,lotus:`Giống như bạn nhìn sổ booking quý 1 để rút quy luật, rồi thử đoán quý 2 mà chưa xem. Nếu xem cả hai trước, phép đoán không còn là phép đoán.`,trap:`Khám phá trên toàn bộ dữ liệu rồi mới chia làm lộ thông tin của test vào các quyết định của bạn.`,read:[`Hai số: 140.621 dòng cho train và 35.156 dòng cho test.`,`Chia tỷ lệ: 140.621 / 175.777 ≈ 80%.`],remark:`Chia 80/20: train 140.621 đơn, test 35.156 đơn; test được giữ riêng chưa nhìn vào.`,howRemark:[`Tính lại tỷ lệ chia.`,`Nhắc random_state để lặp lại được.`,`Giải thích vì sao chia trước khi khám phá.`]},en:{think:`Split train and test before exploring so the test set is genuinely unseen.`,steps:[`train_test_split(X, y, test_size=0.2, random_state=42).`,`Check sizes: your file has 175,777 rows, 80% is about 140,600 training rows.`,`All EDA in step 3 uses the training set only.`],code:`from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
print(len(X_train), len(X_test))`,lotus:`Like studying Q1's booking log to find a rule, then predicting Q2 without looking. If you looked at both first, the prediction is no longer a prediction.`,trap:`Exploring all the data before splitting leaks test information into your decisions.`,read:[`Two numbers: 140,621 rows for train and 35,156 for test.`,`The split ratio: 140,621 / 175,777 ≈ 80%.`],remark:`An 80/20 split: 140,621 train orders and 35,156 test orders; the test part is kept unseen.`,howRemark:[`Recompute the split ratio.`,`Mention random_state for repeatability.`,`Explain why you split before exploring.`]}},"3.1.1":{vi:{think:`Vẽ phân phối từng cột số trên tập train để thấy độ lệch và các giá trị lạ.`,steps:[`Tách numerical_cols và categorical_cols.`,`Vẽ histogram từng cột số (hoặc lưới subplot).`,`Ghi chú cột nào lệch phải (total_items, subtotal, distance) và có giá trị âm vô lý (min_item_price, total_onshift_dashers, total_busy_dashers, total_outstanding_orders).`],code:`num_cols = X_train.select_dtypes(include='number').columns
X_train[num_cols].hist(bins=40, figsize=(14, 10))`,lotus:`Nếu số khách mỗi booking lệch phải (đa số 1 đến 2 người, vài nhóm 15 người) thì biết trước rằng vài điểm rất xa sẽ kéo đường hồi quy.`,trap:`Trong file của bạn có số nhân viên trực âm, một lỗi nhập, không phải dữ liệu thật. Hình phân phối là chỗ thấy nó.`,read:[`Bảng đếm giá trị trống mỗi cột; đa số bằng 0.`,`Các cột có trống: total_outstanding_orders (34), total_onshift_dashers (20), total_busy_dashers (16), min_item_price (11).`,`Biểu đồ: mỗi ô là phân phối một cột; xem cột nào lệch hẳn một bên.`],remark:`Chỉ vài chục dòng thiếu dữ liệu ở 4 cột, rất ít so với 140.621 dòng nên có thể bỏ hoặc điền dễ dàng. Phân phối của số lượng món và tiền đơn lệch phải, có đuôi dài.`,howRemark:[`Nêu cột nào thiếu và bao nhiêu.`,`So với tổng số dòng để kết luận mức nghiêm trọng.`,`Mô tả hình dạng từng phân phối.`,`Quyết định xử lý và nói lý do.`]},en:{think:`Plot each numeric column's distribution on the training set to see skewness and odd values.`,steps:[`Separate numerical_cols and categorical_cols.`,`Draw a histogram per numeric column (or a subplot grid).`,`Note columns skewed right (total_items, subtotal, distance) and nonsensical negatives (min_item_price, total_onshift_dashers, total_busy_dashers, total_outstanding_orders).`],code:`num_cols = X_train.select_dtypes(include='number').columns
X_train[num_cols].hist(bins=40, figsize=(14, 10))`,lotus:`If guests per booking are right-skewed (most 1 to 2, a few groups of 15), you know in advance a few far points will pull the regression line.`,trap:`Your file has a negative count of staff on shift, an entry error, not real data. The distribution plot is where you see it.`,read:[`The table counts blanks per column; most are 0.`,`Columns with blanks: total_outstanding_orders (34), total_onshift_dashers (20), total_busy_dashers (16), min_item_price (11).`,`Charts: each panel is one column's distribution; see which are clearly skewed.`],remark:`Only a few dozen rows are missing in 4 columns, tiny against 140,621 rows, so they can be dropped or filled easily. Item count and subtotal are right-skewed with long tails.`,howRemark:[`Name which columns are missing and how many.`,`Compare with total rows to judge severity.`,`Describe each distribution's shape.`,`Decide the treatment and say why.`]}},"3.1.2":{vi:{think:`Phân phối các cột nhóm: mỗi nhóm có bao nhiêu đơn. Nhóm quá ít đơn sẽ cho hệ số không ổn định.`,steps:[`value_counts() hoặc countplot cho market_id, order_protocol, isWeekend.`,`store_primary_category có 73 nhóm: chỉ vẽ top 15 hoặc nhìn bảng đếm.`,`Ghi nhóm chiếm quá ít.`],code:`for c in ['market_id', 'order_protocol', 'isWeekend']:
    X_train[c].value_counts().sort_index().plot(kind='bar', title=c)
    plt.show()
X_train['store_primary_category'].value_counts().head(15)`,lotus:`Ba chi nhánh mà một chi nhánh chỉ có 20 booking thì hệ số của chi nhánh đó là số của 20 người.`,trap:`Vẽ 73 cột của store_primary_category vào một biểu đồ cho ra một khối chữ không đọc được.`,read:[`Mỗi biểu đồ cột là một cột nhóm; chiều cao là số đơn của nhóm.`,`Tìm nhóm quá thấp: market 6 chỉ ~0,4% đơn.`],remark:`Phần lớn đơn nằm ở vài nhóm lớn; market_id 6 gần như không có đơn (~0,4%) nên hệ số của nhóm này sẽ không ổn định.`,howRemark:[`Nêu nhóm lớn nhất và nhỏ nhất.`,`Nói nhóm nhỏ ảnh hưởng thế nào đến hệ số.`,`Đề xuất gộp hoặc để nguyên.`]},en:{think:`Distribution of categorical columns: how many orders per group. Groups with very few orders give unstable coefficients.`,steps:[`value_counts() or countplot for market_id, order_protocol, isWeekend.`,`store_primary_category has 73 groups: plot only the top 15 or read the count table.`,`Note groups that are too small.`],code:`for c in ['market_id', 'order_protocol', 'isWeekend']:
    X_train[c].value_counts().sort_index().plot(kind='bar', title=c)
    plt.show()
X_train['store_primary_category'].value_counts().head(15)`,lotus:`Of three branches, if one has only 20 bookings, that branch's coefficient is the number of 20 people.`,trap:`Drawing all 73 bars of store_primary_category in one chart gives an unreadable block of text.`,read:[`Each bar chart is a categorical column; height is the order count per group.`,`Find tiny groups: market 6 is only ~0.4% of orders.`],remark:`Most orders sit in a few big groups; market_id 6 has almost none (~0.4%) so its coefficient will be unstable.`,howRemark:[`Name the biggest and smallest groups.`,`Say how a small group affects coefficients.`,`Suggest merging or leaving as is.`]}},"3.1.3":{vi:{think:`Phân phối biến mục tiêu: nó lệch không, có đuôi dài không.`,steps:[`Histogram và boxplot của y_train (hoặc time_taken).`,`Trong file của bạn: trung bình 46,2, trung vị 45, độ lệch chuẩn 9,3, từ 32 đến 110 phút: lệch phải nhẹ, đuôi dài đến 110.`,`Cân nhắc điều đó ảnh hưởng thế nào đến giả định phần dư.`],code:`sns.histplot(y_train, bins=40, kde=True)
plt.show()
print(y_train.describe().round(1))`,lotus:`Phần lớn khách chờ 40 đến 50 phút, vài người chờ 110. Vài người chờ rất lâu kéo trung bình lên cao hơn trung vị.`,trap:`Trung bình cao hơn trung vị là dấu hiệu lệch phải. Đừng chỉ nhìn trung bình.`,read:[`Hình là phân phối time_taken; dòng chữ là các số tóm tắt.`,`Trung bình 46,2 và trung vị 45 gần nhau; đuôi bên phải kéo đến 110.`],remark:`time_taken tập trung quanh 39–52 phút (từ 25% đến 75%) và có đuôi phải đến 110 phút; không đối xứng hoàn hảo nhưng đủ gần để hồi quy tuyến tính dùng được.`,howRemark:[`Mô tả đỉnh và độ rộng.`,`Nói có lệch không và về phía nào.`,`Kết luận: có cần đổi dạng biến hay không.`]},en:{think:`Distribution of the target: is it skewed, does it have a long tail.`,steps:[`Histogram and boxplot of y_train (or time_taken).`,`In your file: mean 46.2, median 45, standard deviation 9.3, from 32 to 110 minutes: mild right skew with a tail to 110.`,`Consider how this affects the residual assumptions.`],code:`sns.histplot(y_train, bins=40, kde=True)
plt.show()
print(y_train.describe().round(1))`,lotus:`Most customers wait 40 to 50 minutes, a few wait 110. A few very long waits pull the mean above the median.`,trap:`A mean above the median signals right skew. Do not look at the mean alone.`,read:[`The chart is the distribution of time_taken; the text gives summary numbers.`,`Mean 46.2 and median 45 are close; the right tail stretches to 110.`],remark:`time_taken concentrates around 39–52 minutes (25% to 75%) with a right tail to 110; not perfectly symmetric but close enough for linear regression.`,howRemark:[`Describe the peak and width.`,`Say whether it is skewed and which way.`,`Conclude whether the variable needs transforming.`]}},"3.2.1":{vi:{think:`Biểu đồ phân tán giữa time_taken và các biến số quan trọng, cùng phân phối time_taken theo giờ.`,steps:[`Ghép X_train và y_train thành một bảng train.`,`scatter time_taken theo distance, subtotal, total_outstanding_orders (lấy mẫu vài nghìn điểm).`,`boxplot time_taken theo hour để thấy nhịp theo giờ.`],code:`train = X_train.copy(); train['time_taken'] = y_train
sample = train.sample(5000, random_state=42)
sns.scatterplot(data=sample, x='distance', y='time_taken', alpha=0.3)
plt.show()
sns.boxplot(data=train, x='hour', y='time_taken')`,lotus:`Càng nhiều đơn đang chờ xử lý, khách càng chờ lâu: ở file của bạn, tương quan giữa total_outstanding_orders và time_taken khoảng 0,39 và distance khoảng 0,46.`,trap:`Scatter hơn 100.000 điểm thành một khối đen. Lấy mẫu hoặc dùng alpha.`,read:[`Mỗi biểu đồ phân tán: trục ngang là một biến, trục dọc là time_taken; xem đám điểm đi lên, đi xuống hay nằm ngang.`,`Đường dốc rõ nghĩa là biến có liên quan; đám tròn nghĩa là không.`],remark:`Đám điểm của distance và subtotal dốc lên nhẹ so với time_taken, còn giờ trong ngày cho thấy chênh nhau giữa các giờ. Các biến này đáng đưa vào mô hình.`,howRemark:[`Mỗi biểu đồ nói xu hướng một câu.`,`Dùng từ «dốc lên/ngang/xuống».`,`Nhớ rằng nhìn bằng mắt cần được xác nhận bằng số ở 3.3.1.`]},en:{think:`Scatter plots between time_taken and the important numeric features, and the distribution of time_taken by hour.`,steps:[`Join X_train and y_train into one training table.`,`Scatter time_taken against distance, subtotal, total_outstanding_orders (sample a few thousand points).`,`Boxplot time_taken by hour to see the hourly rhythm.`],code:`train = X_train.copy(); train['time_taken'] = y_train
sample = train.sample(5000, random_state=42)
sns.scatterplot(data=sample, x='distance', y='time_taken', alpha=0.3)
plt.show()
sns.boxplot(data=train, x='hour', y='time_taken')`,lotus:`The more orders pending, the longer the customer waits: in your file, correlation of total_outstanding_orders with time_taken is about 0.39 and of distance about 0.46.`,trap:`Scattering over 100,000 points makes a black block. Sample or use alpha.`,read:[`Each scatter: x is a variable, y is time_taken; see if the cloud rises, falls or stays flat.`,`A clear slope means related; a round blob means unrelated.`],remark:`The distance and subtotal clouds slope slightly upward against time_taken, and hour shows differences across hours. These are worth including in the model.`,howRemark:[`One sentence per chart on the trend.`,`Use words like rising/flat/falling.`,`Remember eyeballing needs confirming with numbers in 3.3.1.`]}},"3.3.1":{vi:{think:`Bản đồ nhiệt tương quan cho thấy biến số nào đi cùng time_taken mạnh nhất.`,steps:[`corr = train.select_dtypes('number').corr().`,`sns.heatmap(corr, annot=True, cmap='coolwarm', center=0).`,`Đọc hàng time_taken. Trong file của bạn mạnh nhất là distance (khoảng 0,46), subtotal (khoảng 0,41), total_outstanding_orders (khoảng 0,39).`],code:`corr = train.select_dtypes(include='number').corr()
plt.figure(figsize=(12, 9))
sns.heatmap(corr, annot=True, fmt='.2f', cmap='coolwarm', center=0)
print(corr['time_taken'].sort_values())`,lotus:`Các số ở hàng thời gian chờ cho biết yếu tố nào đáng đưa vào mô hình trước: khoảng cách, giá trị đơn, số đơn đang chờ.`,trap:`Hệ số tương quan giữa hai biến đầu vào cao (ví dụ subtotal và total_items) là tín hiệu đa cộng tuyến, không phải một phát hiện.`,read:[`Dòng chữ là tương quan của từng biến với time_taken, từ −1 đến 1.`,`Dương là đi cùng chiều, âm là ngược chiều; càng gần 1 hoặc −1 càng mạnh.`,`Bản đồ nhiệt: màu đậm là tương quan mạnh.`],remark:`distance có tương quan cao nhất (0,461), kế đến subtotal (0,413) và total_outstanding_orders (0,385). hour âm (−0,346): đặt càng muộn trong ngày thì giao càng nhanh. min_item_price (0,021) gần như không liên quan.`,howRemark:[`Xếp biến theo độ lớn tuyệt đối.`,`Nói dấu âm hay dương nghĩa là gì.`,`Chỉ ra biến yếu cần xem lại.`,`Nhớ tương quan chưa phải nhân quả.`]},en:{think:`A correlation heatmap shows which numeric features move most with time_taken.`,steps:[`corr = train.select_dtypes('number').corr().`,`sns.heatmap(corr, annot=True, cmap='coolwarm', center=0).`,`Read the time_taken row. In your file the strongest are distance (about 0.46), subtotal (about 0.41), total_outstanding_orders (about 0.39).`],code:`corr = train.select_dtypes(include='number').corr()
plt.figure(figsize=(12, 9))
sns.heatmap(corr, annot=True, fmt='.2f', cmap='coolwarm', center=0)
print(corr['time_taken'].sort_values())`,lotus:`The numbers in the wait-time row tell you which factors deserve the model first: distance, order value, pending orders.`,trap:`High correlation between two input features (for example subtotal and total_items) signals multicollinearity, not a discovery.`,read:[`The text lists each variable's correlation with time_taken, from −1 to 1.`,`Positive means same direction, negative the opposite; closer to 1 or −1 is stronger.`,`Heatmap: darker is stronger.`],remark:`distance has the highest correlation (0.461), then subtotal (0.413) and total_outstanding_orders (0.385). hour is negative (−0.346): later in the day, faster delivery. min_item_price (0.021) is almost unrelated.`,howRemark:[`Rank variables by absolute value.`,`Say what a negative or positive sign means.`,`Point out weak variables to review.`,`Remember correlation is not causation.`]}},"3.3.2":{vi:{think:`Bỏ vài cột tương quan yếu với y để mô hình gọn hơn. Ghi lý do cho từng cột.`,steps:[`Chọn 3 đến 5 cột có |tương quan| nhỏ với time_taken, trong file của bạn như min_item_price (khoảng 0,02) và day (khoảng 0,05); store_primary_category có 73 nhóm nên cũng bỏ cho gọn.`,`Chỉ bỏ ở tập train, rồi bỏ đúng các cột đó ở validation (bài 4.3).`,`Tương quan thấp theo đường thẳng chưa chắc là vô dụng: ghi chú điều đó.`],code:`weak = ['min_item_price', 'store_primary_category']  # pick 3-5 and justify
X_train = X_train.drop(columns=weak)
X_test = X_test.drop(columns=weak)`,lotus:`Mã in phiếu không liên quan thời gian chờ thì bỏ. Nhưng nếu cột có quan hệ cong hay theo nhóm, tương quan đường thẳng thấp có thể đánh lừa.`,trap:`Bỏ cột ở train mà quên bỏ ở test làm số cột hai bên khác nhau và mô hình báo lỗi khi dự đoán.`,read:[`Danh sách là các cột được giữ lại (13 cột) sau khi bỏ cột yếu.`,`So với 3.3.1: cột bị bỏ là những cột có tương quan gần 0.`],remark:`Giữ 13 cột; bỏ các cột tương quan yếu như min_item_price để mô hình gọn hơn mà không mất tín hiệu chính.`,howRemark:[`Liệt kê cột bỏ và lý do từng cột.`,`Kiểm cột giữ có đủ biến mạnh ở 3.3.1.`,`Áp dụng đúng danh sách này cho validation.`]},en:{think:`Drop a few weakly correlated columns for a leaner model. Write down the reason for each.`,steps:[`Pick 3 to 5 columns with small |correlation| with time_taken, in your file such as min_item_price (about 0.02) and day (about 0.05); store_primary_category has 73 groups so it is dropped for leanness too.`,`Drop on train, then drop exactly the same columns on validation (task 4.3).`,`Low linear correlation does not mean useless: note that.`],code:`weak = ['min_item_price', 'store_primary_category']  # pick 3-5 and justify
X_train = X_train.drop(columns=weak)
X_test = X_test.drop(columns=weak)`,lotus:`A receipt print code unrelated to wait time gets dropped. But if a column relates by curve or by group, a low linear correlation can mislead.`,trap:`Dropping on train but forgetting on test leaves different column counts and the model errors at prediction.`,read:[`The list shows the 13 kept columns after dropping weak ones.`,`Compare with 3.3.1: dropped columns are the near-zero correlations.`],remark:`Keep 13 columns; drop weak ones like min_item_price so the model is leaner without losing the main signals.`,howRemark:[`List dropped columns with a reason each.`,`Check the kept columns include the strong ones from 3.3.1.`,`Apply exactly this list to validation.`]}},"3.4.1":{vi:{think:`Boxplot để nhìn thấy các điểm xa của time_taken và các biến số.`,steps:[`sns.boxplot cho time_taken.`,`Boxplot các cột số khác (total_items, subtotal, distance, các cột nhân viên).`,`Ghi các điểm xa: trong file của bạn total_items tới 411 và distance tới 83,52.`],code:`sns.boxplot(x=y_train)
plt.show()
for c in ['total_items', 'subtotal', 'distance']:
    sns.boxplot(x=X_train[c]); plt.show()`,lotus:`Một booking 411 gói hay 83 km là một điểm xa. Nó có thể là một khách hàng doanh nghiệp thật hoặc một lỗi nhập, và bạn cần biết nó là cái nào trước khi bỏ.`,trap:`Boxplot chỉ gắn cờ điểm xa. Nó không nói điểm đó là lỗi.`,read:[`Số liệu là giá trị lớn nhất của vài cột: total_items 411, subtotal 26.800, distance 83,52.`,`Boxplot: các chấm nằm ngoài râu là điểm xa.`],remark:`Có đơn 411 món, 26.800 tiền đơn và khoảng cách 83,5: quá xa so với mức thường nên là điểm xa đáng nghi, cần xử lý trước khi huấn luyện.`,howRemark:[`Nêu giá trị lớn nhất và so với mức thường.`,`Phân biệt điểm xa thật và lỗi nhập.`,`Nói cách xử lý ở 3.4.2.`]},en:{think:`Boxplots to see outliers in time_taken and the numeric features.`,steps:[`sns.boxplot for time_taken.`,`Boxplots for the other numeric columns (total_items, subtotal, distance, the staff columns).`,`Note outliers: in your file total_items reaches 411 and distance reaches 83.52.`],code:`sns.boxplot(x=y_train)
plt.show()
for c in ['total_items', 'subtotal', 'distance']:
    sns.boxplot(x=X_train[c]); plt.show()`,lotus:`A booking of 411 packages or 83 km is an outlier. It may be a real corporate customer or an entry error, and you need to know which before dropping it.`,trap:`A boxplot only flags outliers. It does not say the point is an error.`,read:[`The numbers are the maxima of a few columns: total_items 411, subtotal 26,800, distance 83.52.`,`Boxplot: dots beyond the whiskers are outliers.`],remark:`There are orders with 411 items, 26,800 subtotal and 83.5 distance: far beyond normal, suspicious outliers to handle before training.`,howRemark:[`Quote the max and compare with normal.`,`Separate genuine extremes from entry errors.`,`Point to the treatment in 3.4.2.`]}},"3.4.2":{vi:{think:`Xử lý điểm xa: mỗi quy tắc cần một lý do, và phải áp dụng cùng cách cho validation.`,steps:[`Giá trị không thể có (số nhân viên âm, giá âm): lỗi, bỏ dòng hoặc sửa.`,`Điểm xa thật nhưng hiếm (total_items 411): cân nhắc giới hạn bằng IQR hoặc phân vị 99.`,`Ghi số dòng bị bỏ ở mỗi quy tắc.`,`Chỉ tính ngưỡng trên train, rồi dùng cùng ngưỡng ở validation.`],code:`train = X_train.copy(); train['time_taken'] = y_train
n0 = len(train)
neg = ['total_onshift_dashers', 'total_busy_dashers', 'total_outstanding_orders']
train = train[(train[neg] >= 0).all(axis=1)]
for c in ['total_items', 'subtotal', 'distance']:
    hi = train[c].quantile(0.99)
    train = train[train[c] <= hi]
print(n0 - len(train), 'rows removed')`,lotus:`Số nhân viên âm bỏ hẳn. Một booking 411 gói giữ lại thì kéo hệ số, bỏ đi thì mô hình không còn thấy khách doanh nghiệp. Quyết định nào cũng phải ghi lý do.`,trap:`Tính ngưỡng trên cả train và validation cùng lúc rò rỉ thông tin. Tính trên train rồi mang sang.`,read:[`Dòng chữ: bỏ 65 dòng vì giá trị âm, bỏ 4.124 dòng điểm xa (phân vị 99), còn 136.432 dòng.`,`Tổng đã bỏ ≈ 3% (4.189 trên 140.621).`],remark:`Bỏ 65 dòng giá trị âm và 4.124 dòng điểm xa (trên phân vị 99): còn 136.432 dòng, mất khoảng 3% dữ liệu để mô hình không bị kéo bởi vài đơn bất thường.`,howRemark:[`Báo số dòng bỏ theo từng quy tắc.`,`Tính % mất.`,`Nêu lý do cho từng quy tắc.`,`Áp dụng cùng ngưỡng cho validation.`]},en:{think:`Handling outliers: each rule needs a reason and must be applied the same way to validation.`,steps:[`Impossible values (negative staff counts, negative prices): errors, drop rows or fix.`,`Real but rare outliers (total_items 411): consider capping by IQR or the 99th percentile.`,`Record rows removed at each rule.`,`Compute thresholds on train only, then reuse them on validation.`],code:`train = X_train.copy(); train['time_taken'] = y_train
n0 = len(train)
neg = ['total_onshift_dashers', 'total_busy_dashers', 'total_outstanding_orders']
train = train[(train[neg] >= 0).all(axis=1)]
for c in ['total_items', 'subtotal', 'distance']:
    hi = train[c].quantile(0.99)
    train = train[train[c] <= hi]
print(n0 - len(train), 'rows removed')`,lotus:`A negative staff count is dropped outright. A 411-package booking kept pulls the coefficient, dropped means the model no longer sees corporate customers. Either decision needs a recorded reason.`,trap:`Computing thresholds on train and validation together leaks information. Compute on train and carry over.`,read:[`Text: 65 rows dropped for negatives, 4,124 as outliers (99th percentile), leaving 136,432.`,`Total dropped ≈ 3% (4,189 of 140,621).`],remark:`Dropped 65 negative rows and 4,124 outlier rows (above the 99th percentile): 136,432 remain, losing about 3% so a few odd orders do not pull the model.`,howRemark:[`Report rows dropped per rule.`,`Compute the % lost.`,`Justify each rule.`,`Apply the same thresholds to validation.`]}},"4.1.1":{vi:{think:`Phần 4 là tùy chọn: lặp lại EDA trên validation để xem hình dạng dữ liệu có giống train không.`,steps:[`Làm đúng các bước 3.1 trên tập validation (vẽ lại phân phối số).`,`So sánh bằng mắt với biểu đồ ở train.`,`Nếu khác nhiều, chia chưa ngẫu nhiên hoặc dữ liệu có thay đổi theo thời gian.`],code:`num_cols_v = X_test.select_dtypes(include='number').columns
X_test[num_cols_v].hist(bins=40, figsize=(14, 10))`,lotus:`Sổ booking tháng 11 và tháng 12 nên có hình dạng giống nhau. Nếu giờ đông của tháng 12 khác hẳn thì một mô hình luyện từ tháng 11 sẽ đoán sai.`,trap:`Ở phần này chỉ nhìn, không điều chỉnh train theo những gì thấy ở validation.`,read:[`Hình lặp lại phân phối cột số nhưng trên validation.`,`So hình dạng với 3.1.1: giống nhau là tốt.`],remark:`Hình dạng các phân phối ở validation giống train, nên mô hình học từ train có cơ sở áp dụng cho validation.`,howRemark:[`Đặt hai bộ biểu đồ cạnh nhau.`,`Nói điểm giống và khác.`,`Kết luận về độ tương đồng.`]},en:{think:`Part 4 is optional: repeat EDA on validation to see whether the data's shape matches train.`,steps:[`Repeat the 3.1 steps on the validation set (redraw numeric distributions).`,`Compare by eye with the train charts.`,`If very different, the split was not random or the data drifts over time.`],code:`num_cols_v = X_test.select_dtypes(include='number').columns
X_test[num_cols_v].hist(bins=40, figsize=(14, 10))`,lotus:`The November and December booking logs should look alike. If December's busy hours differ a lot, a model trained on November will guess wrong.`,trap:`In this part only look; do not adjust train based on what you see in validation.`,read:[`The chart repeats the numeric distributions on validation.`,`Compare the shapes with 3.1.1: similar is good.`],remark:`Validation distributions look like train's, so a model trained on train has grounds to work on validation.`,howRemark:[`Put the two chart sets side by side.`,`State similarities and differences.`,`Conclude on similarity.`]}},"4.1.2":{vi:{think:`Phân phối các cột nhóm ở validation, so với train.`,steps:[`value_counts(normalize=True) ở cả hai tập.`,`So tỷ lệ từng nhóm: lệch vài điểm phần trăm là bình thường.`,`Nhóm xuất hiện ở validation mà không có ở train sẽ gây lỗi khi dự đoán.`],code:`pd.concat([X_train['market_id'].value_counts(normalize=True), X_test['market_id'].value_counts(normalize=True)], axis=1, keys=['train','valid'])`,lotus:`Tỷ lệ chi nhánh trong train và validation phải gần nhau. Nếu Thủ Đức chỉ có ở validation, mô hình chưa từng thấy nó.`,trap:`Một nhóm mới ở validation làm get_dummies sinh cột khác nhau giữa hai tập.`,read:[`Mỗi dòng là một market, hai cột là tỷ lệ ở train và valid.`,`Hai cột gần bằng nhau (ví dụ 0,306 và 0,306) là tốt.`],remark:`Tỷ lệ các market ở validation gần như trùng train (ví dụ market 2 chiếm 30,6% ở cả hai), nên việc chia không làm lệch cơ cấu.`,howRemark:[`So từng cặp số.`,`Nêu chênh lớn nhất.`,`Kết luận.`]},en:{think:`Distribution of categorical columns in validation versus train.`,steps:[`value_counts(normalize=True) on both sets.`,`Compare each group's share: a few percentage points apart is normal.`,`A group present in validation but absent in train will break prediction.`],code:`pd.concat([X_train['market_id'].value_counts(normalize=True), X_test['market_id'].value_counts(normalize=True)], axis=1, keys=['train','valid'])`,lotus:`Branch shares in train and validation should be close. If Thu Duc exists only in validation, the model has never seen it.`,trap:`A new group in validation makes get_dummies produce different columns between the two sets.`,read:[`Each row is a market, the two columns are shares in train and valid.`,`Two columns close to each other (e.g. 0.306 and 0.306) is good.`],remark:`Market shares in validation almost equal train's (e.g. market 2 is 30.6% in both), so the split did not distort the mix.`,howRemark:[`Compare each pair of numbers.`,`State the largest difference.`,`Conclude.`]}},"4.1.3":{vi:{think:`Phân phối biến mục tiêu ở validation: so với train.`,steps:[`Vẽ histogram y_test, đặt cạnh y_train.`,`So trung bình và độ lệch chuẩn: file của bạn có train gần trung bình 46,2 phút.`,`Hai số này gần nhau thì chia ngẫu nhiên là hợp lý.`],code:`print(y_train.describe().round(1)); print(y_test.describe().round(1))`,lotus:`Thời gian chờ trung bình của tháng 11 và tháng 12 mà khác nhau nhiều thì có chuyện gì đó khác ngoài ngẫu nhiên.`,trap:`Hai trung bình lệch vài phút là bình thường với mẫu lớn, nhưng lệch nhiều là dấu hiệu chia chưa tốt.`,read:[`Hai bảng tóm tắt time_taken: bảng đầu là train, bảng sau là validation.`,`So mean, std và các phân vị của hai bảng.`],remark:`Trung bình 45,9 ở train và 46,2 ở validation, độ lệch chuẩn 9,1 so với 9,4, phân vị gần nhau: hai tập có cùng phân phối.`,howRemark:[`Đặt các số cạnh nhau.`,`Tính chênh trung bình (0,3 phút).`,`Kết luận hai tập có giống nhau không.`]},en:{think:`Target distribution in validation versus train.`,steps:[`Draw a histogram of y_test next to y_train.`,`Compare mean and standard deviation: your train mean is near 46.2 minutes.`,`If close, the random split is reasonable.`],code:`print(y_train.describe().round(1)); print(y_test.describe().round(1))`,lotus:`If average wait differs a lot between November and December, something other than chance is going on.`,trap:`A few minutes' gap is normal in a large sample, but a big one signals a poor split.`,read:[`Two summaries of time_taken: first is train, second is validation.`,`Compare mean, std and percentiles.`],remark:`Mean is 45.9 in train and 46.2 in validation, std 9.1 vs 9.4, percentiles close: the two sets share the same distribution.`,howRemark:[`Put the numbers side by side.`,`Compute the mean difference (0.3 min).`,`Conclude whether they match.`]}},"4.2":{vi:{think:`Phân tán giữa time_taken và các biến số ở validation, để so với train.`,steps:[`Ghép X_test và y_test.`,`Vẽ scatter distance và subtotal với time_taken.`,`So hình dạng với train.`],code:`val = X_test.copy(); val['time_taken'] = y_test
sns.scatterplot(data=val.sample(5000, random_state=42), x='distance', y='time_taken', alpha=0.3)`,lotus:`Quan hệ giữa khoảng cách và thời gian chờ ở validation phải đi cùng chiều với train.`,trap:`Nếu chiều quan hệ đảo ngược giữa train và validation thì mô hình sẽ không khái quát hóa.`,read:[`Hình giống 3.2.1 nhưng trên validation.`,`Kiểm tra độ dốc và hình đám điểm có khớp train không.`],remark:`Quan hệ giữa time_taken và các biến ở validation cùng xu hướng với train, nên mối liên hệ học được không phải ngẫu nhiên của một tập.`,howRemark:[`So từng biểu đồ với 3.2.1.`,`Nói xu hướng nào giữ nguyên.`,`Kết luận.`]},en:{think:`Scatter time_taken against numeric features on validation, to compare with train.`,steps:[`Join X_test and y_test.`,`Scatter distance and subtotal against time_taken.`,`Compare shape with train.`],code:`val = X_test.copy(); val['time_taken'] = y_test
sns.scatterplot(data=val.sample(5000, random_state=42), x='distance', y='time_taken', alpha=0.3)`,lotus:`The relation between distance and wait on validation should run the same direction as train.`,trap:`If the relation direction reverses between train and validation, the model will not generalise.`,read:[`The chart mirrors 3.2.1 but on validation.`,`Check whether slopes and cloud shapes match train.`],remark:`The relationships between time_taken and the variables on validation follow train's trends, so what was learned is not a quirk of one set.`,howRemark:[`Compare each chart with 3.2.1.`,`State which trends hold.`,`Conclude.`]}},"4.3":{vi:{think:`Bỏ đúng những cột đã bỏ ở train (bài 3.3.2) khỏi validation.`,steps:[`Dùng cùng danh sách weak đã chọn.`,`X_test = X_test.drop(columns=weak).`,`Kiểm tra X_train.columns bằng X_test.columns.`],code:`X_test = X_test.drop(columns=weak, errors='ignore')
print(list(X_train.columns) == list(X_test.columns))`,lotus:`Hai sổ phải có cùng các cột theo cùng thứ tự, nếu không phép so sánh táo với cam.`,trap:`Thứ tự cột khác nhau làm sai kết quả dự đoán mà không báo lỗi.`,read:[`Dòng «True 35143» cho biết cột còn lại giống train (True) và số dòng validation sau xử lý (35.143).`,`So với 35.156 dòng ban đầu: mất 13 dòng.`],remark:`Validation đã bỏ đúng các cột của train (True) và còn 35.143 dòng sau khi áp cùng quy tắc, mất 13 dòng so với 35.156.`,howRemark:[`Kiểm cột trùng train.`,`Báo số dòng còn lại.`,`Nói đã áp cùng quy tắc.`]},en:{think:`Drop exactly the columns dropped on train (task 3.3.2) from validation.`,steps:[`Use the same weak list.`,`X_test = X_test.drop(columns=weak).`,`Check X_train.columns equals X_test.columns.`],code:`X_test = X_test.drop(columns=weak, errors='ignore')
print(list(X_train.columns) == list(X_test.columns))`,lotus:`The two logs must have the same columns in the same order, or the comparison is apples to oranges.`,trap:`A different column order corrupts predictions without raising an error.`,read:[`The line “True 35143” says the columns match train (True) and validation has 35,143 rows after processing.`,`Versus the original 35,156: 13 rows lost.`],remark:`Validation dropped exactly train's columns (True) and has 35,143 rows after the same rules, 13 fewer than 35,156.`,howRemark:[`Check columns match train.`,`Report remaining rows.`,`State the same rules were applied.`]}},"5.1":{vi:{think:`Chuẩn hóa thang đo để các hệ số so sánh được với nhau. Hồi quy tuyến tính không cần chuẩn hóa, nhưng hệ số sẽ dễ đọc hơn.`,steps:[`Dùng StandardScaler hoặc MinMaxScaler cho các cột số.`,`fit trên train, rồi transform cả train và validation (không fit lại trên validation).`,`Giữ lại bộ scaler để quy đổi hệ số về thang gốc ở 6.2.`],code:`from sklearn.preprocessing import StandardScaler
num = X_train.select_dtypes(include='number').columns
scaler = StandardScaler()
X_train[num] = scaler.fit_transform(X_train[num])
X_test[num] = scaler.transform(X_test[num])`,lotus:`Khoảng cách tính bằng km (0 đến 83) và giá trị đơn tính bằng nghìn (0 đến 26.800) có thang rất khác. Chuẩn hóa để hệ số của hai biến đặt cạnh nhau được.`,trap:`fit scaler trên cả train và validation làm lộ trung bình và độ lệch chuẩn của validation.`,read:[`Bảng mô tả sau chuẩn hóa: hàng mean gần 0, hàng std bằng 1.`,`Đó là dấu hiệu chuẩn hóa đúng.`],remark:`Sau chuẩn hóa, mỗi cột có trung bình 0 và độ lệch chuẩn 1, nên các hệ số về sau so sánh được trực tiếp với nhau.`,howRemark:[`Kiểm mean ≈ 0 và std = 1.`,`Nói chuẩn hóa fit trên train rồi áp lên validation.`,`Nêu lý do cần chuẩn hóa.`]},en:{think:`Put features on a common scale so coefficients are comparable. Linear regression does not need scaling, but coefficients become easier to read.`,steps:[`Use StandardScaler or MinMaxScaler on numeric columns.`,`fit on train, then transform both train and validation (do not refit on validation).`,`Keep the scaler to convert coefficients back to the original scale in 6.2.`],code:`from sklearn.preprocessing import StandardScaler
num = X_train.select_dtypes(include='number').columns
scaler = StandardScaler()
X_train[num] = scaler.fit_transform(X_train[num])
X_test[num] = scaler.transform(X_test[num])`,lotus:`Distance in km (0 to 83) and order value in thousands (0 to 26,800) have very different scales. Scale so their coefficients sit side by side.`,trap:`Fitting the scaler on train and validation together leaks validation's mean and standard deviation.`,read:[`The describe table after scaling: mean row near 0, std row 1.`,`That is the sign of correct scaling.`],remark:`After scaling each column has mean 0 and std 1, so later coefficients can be compared directly.`,howRemark:[`Check mean ≈ 0 and std = 1.`,`Say the scaler is fit on train and applied to validation.`,`State why scaling helps.`]}},"5.2":{vi:{think:`Dựng hồi quy tuyến tính bằng statsmodels hoặc scikit-learn, huấn luyện, dự đoán, rồi đo.`,steps:[`Chuyển cột nhóm thành dummy (get_dummies, drop_first=True) trước khi fit.`,`LinearRegression().fit(X_train, y_train).`,`Dự đoán trên cả train và validation.`,`Đo R², RMSE (và MAE nếu muốn) trên cả hai tập.`],code:`from sklearn.linear_model import LinearRegression
from sklearn.metrics import r2_score, mean_squared_error
lr = LinearRegression().fit(X_train, y_train)
for name, X, y in [('train', X_train, y_train), ('valid', X_test, y_test)]:
    p = lr.predict(X)
    print(name, 'R2', round(r2_score(y, p), 3), 'RMSE', round(mean_squared_error(y, p) ** 0.5, 2))`,lotus:`Mô hình đoán khách chờ 47 phút trong khi thực tế là 45. RMSE là cỡ sai lệch trung bình của những lần đoán như vậy, tính bằng phút.`,trap:`R² cao ở train mà thấp ở validation là quá khớp. Luôn nhìn cả hai.`,read:[`Hai dòng: R2 và RMSE trên train, rồi trên validation.`,`R2 gần 1 là mô hình giải thích tốt; RMSE là sai số trung bình tính bằng phút.`],remark:`R2 0,900 ở train và 0,903 ở validation, RMSE khoảng 2,9 phút: mô hình giải thích khoảng 90% biến thiên thời gian giao, và hai tập gần nhau nên không quá khớp.`,howRemark:[`Báo R2 và RMSE cả hai tập.`,`So train với validation để nói quá khớp hay không.`,`Diễn giải RMSE bằng phút.`,`Nêu giới hạn.`]},en:{think:`Build a linear regression with statsmodels or scikit-learn, train, predict, then measure.`,steps:[`Turn categorical columns into dummies (get_dummies, drop_first=True) before fitting.`,`LinearRegression().fit(X_train, y_train).`,`Predict on both train and validation.`,`Measure R² and RMSE (and MAE if you like) on both sets.`],code:`from sklearn.linear_model import LinearRegression
from sklearn.metrics import r2_score, mean_squared_error
lr = LinearRegression().fit(X_train, y_train)
for name, X, y in [('train', X_train, y_train), ('valid', X_test, y_test)]:
    p = lr.predict(X)
    print(name, 'R2', round(r2_score(y, p), 3), 'RMSE', round(mean_squared_error(y, p) ** 0.5, 2))`,lotus:`The model guesses a 47-minute wait when the real one is 45. RMSE is the typical size of such misses, in minutes.`,trap:`High R² on train and low on validation is overfitting. Always look at both.`,read:[`Two lines: R2 and RMSE on train, then validation.`,`R2 near 1 means a good fit; RMSE is the typical error in minutes.`],remark:`R2 is 0.900 on train and 0.903 on validation, RMSE about 2.9 minutes: the model explains about 90% of delivery-time variation, and the sets are close so no overfitting.`,howRemark:[`Report R2 and RMSE for both sets.`,`Compare train and validation to judge overfitting.`,`Read RMSE in minutes.`,`State the limits.`]}},"5.3":{vi:{think:`RFE bỏ dần từng biến yếu nhất. Chọn số biến mà thêm nữa cũng không cải thiện đáng kể.`,steps:[`Vòng lặp n_features_to_select từ 1 đến số cột; mỗi lần fit RFE rồi tính điểm trên validation.`,`Vẽ điểm theo số biến và chọn khuỷu (nơi đường bắt đầu phẳng). Đề gợi ý 8 biến, nhưng khi tính cả cột dummy thì đường cong phẳng ở khoảng 12 biến (R² trên validation ≈ 0,89).`,`Dựng mô hình cuối với số biến đó và liệt kê các biến được giữ.`],code:`from sklearn.feature_selection import RFE
scores = {}
for k in range(1, X_train.shape[1] + 1):
    rfe = RFE(LinearRegression(), n_features_to_select=k).fit(X_train, y_train)
    cols = X_train.columns[rfe.support_]
    m = LinearRegression().fit(X_train[cols], y_train)
    scores[k] = r2_score(y_test, m.predict(X_test[cols]))
pd.Series(scores).plot(marker='o')`,lotus:`Giống chọn bao nhiêu hạng mục để đưa vào bảng khảo sát: sau mức nào đó thêm câu hỏi không làm thông tin tăng thêm bao nhiêu.`,trap:`Chọn số biến theo điểm trên train luôn chọn nhiều nhất. Dùng điểm trên validation.`,read:[`Bảng là R2 theo số biến giữ lại (1 đến 22).`,`Tìm chỗ đường cong ngừng tăng: sau 12 biến R2 chỉ nhích từ 0,8925 lên 0,90.`],remark:`R2 tăng nhanh đến 12 biến (0,8925) rồi gần như phẳng (0,9031 ở 22 biến), nên chọn 12 biến là gọn mà vẫn tốt.`,howRemark:[`Chỉ chỗ khuỷu của đường cong.`,`So R2 ở khuỷu với R2 đầy đủ.`,`Chốt số biến và lý do.`]},en:{think:`RFE drops the weakest feature one at a time. Choose the number of features beyond which adding more barely helps.`,steps:[`Loop n_features_to_select from 1 to the column count; for each, fit RFE and score on validation.`,`Plot the score against the number of features and choose the elbow (where the line flattens). The brief hints at 8 features, but counting dummy columns the curve flattens around 12 (validation R² ≈ 0.89).`,`Build the final model with that many features and list the kept ones.`],code:`from sklearn.feature_selection import RFE
scores = {}
for k in range(1, X_train.shape[1] + 1):
    rfe = RFE(LinearRegression(), n_features_to_select=k).fit(X_train, y_train)
    cols = X_train.columns[rfe.support_]
    m = LinearRegression().fit(X_train[cols], y_train)
    scores[k] = r2_score(y_test, m.predict(X_test[cols]))
pd.Series(scores).plot(marker='o')`,lotus:`Like choosing how many items to put on a survey: beyond some level, extra questions add little information.`,trap:`Choosing the number by train score always picks the most. Use validation score.`,read:[`The table is R2 by number of features kept (1 to 22).`,`Find where the curve stops rising: after 12 features R2 only moves from 0.8925 to 0.90.`],remark:`R2 rises fast up to 12 features (0.8925) then flattens (0.9031 at 22), so 12 features is lean and still good.`,howRemark:[`Point out the elbow of the curve.`,`Compare R2 at the elbow with the full R2.`,`Fix the count and the reason.`]}},"6.1":{vi:{think:`Phân tích phần dư: vẽ phần dư theo giá trị dự đoán, Q-Q plot và histogram phần dư để kiểm tra các giả định của hồi quy.`,steps:[`residual = y_test − dự đoán.`,`Phần dư theo dự đoán: phải rải quanh 0 không có hình dạng (nếu loe hình phễu là phương sai không đều).`,`Q-Q plot và histogram: gần chuông chuẩn thì giả định chuẩn hợp lý.`,`Viết nhận xét vào ô [Your inferences here:].`],code:`pred = final_model.predict(X_test[cols])
res = y_test - pred
plt.scatter(pred, res, alpha=0.2); plt.axhline(0, color='r'); plt.show()
import statsmodels.api as sm
sm.qqplot(res, line='45', fit=True); plt.show()
sns.histplot(res, bins=40, kde=True)`,lotus:`Nếu mô hình luôn đoán thấp cho khách chờ rất lâu (phần dư dương lớn ở bên phải) thì có một nhóm đơn mà mô hình chưa hiểu.`,trap:`Chỉ nhìn R² mà bỏ qua phần dư bỏ lỡ các mẫu hình cho thấy mô hình sai ở đâu.`,read:[`Dòng đầu là 12 biến được giữ; dòng sau là R2 validation 0,892.`,`Ba biểu đồ phần dư: phần dư theo dự đoán nên tản đều quanh 0; Q-Q plot nên gần đường thẳng; histogram nên hình chuông.`],remark:`Mô hình 12 biến đạt R2 0,892 trên validation, chỉ thấp hơn mô hình đầy đủ khoảng 0,01. Phần dư quanh 0 nên giả định cơ bản chấp nhận được.`,howRemark:[`Báo R2 của mô hình cuối.`,`Mô tả từng biểu đồ phần dư.`,`Nói giả định nào đạt, chưa đạt.`,`Kết luận có dùng được không.`]},en:{think:`Residual analysis: plot residuals against predictions, a Q-Q plot and a residual histogram to check regression assumptions.`,steps:[`residual = y_test − prediction.`,`Residuals vs predicted: should scatter around 0 with no shape (a funnel means uneven variance).`,`Q-Q plot and histogram: near a bell shape means the normality assumption is reasonable.`,`Write your findings in the [Your inferences here:] cell.`],code:`pred = final_model.predict(X_test[cols])
res = y_test - pred
plt.scatter(pred, res, alpha=0.2); plt.axhline(0, color='r'); plt.show()
import statsmodels.api as sm
sm.qqplot(res, line='45', fit=True); plt.show()
sns.histplot(res, bins=40, kde=True)`,lotus:`If the model always underguesses for very long waits (large positive residuals on the right) there is a group of orders the model does not understand.`,trap:`Looking at R² only and skipping residuals misses patterns that show where the model is wrong.`,read:[`First line: the 12 kept features; next: validation R2 0.892.`,`Three residual charts: residual vs prediction should scatter evenly around 0; Q-Q plot near the line; histogram bell-shaped.`],remark:`The 12-feature model reaches R2 0.892 on validation, only about 0.01 below the full model. Residuals centre on 0 so basic assumptions are acceptable.`,howRemark:[`Report the final model's R2.`,`Describe each residual chart.`,`Say which assumptions hold or not.`,`Conclude whether it is usable.`]}},"6.2":{vi:{think:`Phân tích hệ số: so sánh hệ số trên dữ liệu đã chuẩn hóa và hệ số quy đổi về thang gốc, rồi nói một đơn vị thay đổi của một biến làm time_taken đổi bao nhiêu phút.`,steps:[`Hệ số chuẩn hóa: so độ mạnh giữa các biến (đơn vị là độ lệch chuẩn).`,`Hệ số gốc = hệ số chuẩn hóa chia cho độ lệch chuẩn của biến đó (scaler.scale_).`,`Diễn giải theo đơn vị gốc: tăng 1 đơn vị (ví dụ distance) thì thời gian chờ đổi bao nhiêu phút, giữ các biến khác cố định.`,`Chú ý dấu và độ lớn.`],code:`coef_scaled = pd.Series(final_model.coef_, index=cols)
scale = pd.Series(scaler.scale_, index=num)
coef_orig = coef_scaled[cols.intersection(num)] / scale[cols.intersection(num)]
print(pd.DataFrame({'scaled': coef_scaled, 'original': coef_orig}))
# effect of +1 distance on time_taken: coef_orig['distance'] minutes`,lotus:`Nếu hệ số gốc của số đơn đang chờ là 0,1 thì thêm 10 đơn đang chờ làm khách chờ thêm khoảng 1 phút, giữ mọi thứ khác không đổi.`,trap:`Hệ số chuẩn hóa so được độ mạnh, nhưng muốn nói «thêm 1 đơn thì mấy phút» phải dùng hệ số thang gốc.`,read:[`Hai cột: scaled là hệ số trên dữ liệu chuẩn hóa (so sánh mạnh yếu), original là hệ số trên thang gốc (đọc ý nghĩa).`,`Dòng cuối: +1 đơn vị distance làm thời gian giao tăng 0,483 phút.`],remark:`Trên thang chuẩn hóa, total_outstanding_orders (+18,2) và total_onshift_dashers (−11,9) có ảnh hưởng mạnh nhất. Ở thang gốc, mỗi đơn đang chờ thêm làm chậm 0,34 phút, mỗi tài xế trực thêm nhanh hơn 0,34 phút, và mỗi đơn vị distance thêm 0,48 phút.`,howRemark:[`Dùng cột scaled để xếp mức ảnh hưởng.`,`Dùng cột original để nói bằng đơn vị thật.`,`Nói dấu hệ số nghĩa là gì.`,`Nhớ chỉ giữ các biến khác cố định.`]},en:{think:`Coefficient analysis: compare coefficients on standardised data with coefficients converted to the original scale, then say how much one unit of a feature changes time_taken in minutes.`,steps:[`Scaled coefficients: compare strength across features (unit is standard deviations).`,`Original coefficient = scaled coefficient divided by the feature's standard deviation (scaler.scale_).`,`Interpret in original units: one more unit (for example distance) changes the wait by how many minutes, holding other features fixed.`,`Mind sign and size.`],code:`coef_scaled = pd.Series(final_model.coef_, index=cols)
scale = pd.Series(scaler.scale_, index=num)
coef_orig = coef_scaled[cols.intersection(num)] / scale[cols.intersection(num)]
print(pd.DataFrame({'scaled': coef_scaled, 'original': coef_orig}))
# effect of +1 distance on time_taken: coef_orig['distance'] minutes`,lotus:`If the original coefficient for pending orders is 0.1, then 10 more pending orders add about 1 minute to the wait, holding everything else constant.`,trap:`Scaled coefficients compare strength, but to say “one more order is how many minutes” you need the original-scale coefficient.`,read:[`Two columns: scaled is the coefficient on standardized data (compare strength), original is on the raw scale (read meaning).`,`Last line: +1 unit of distance adds 0.483 minutes.`],remark:`On the scaled axis total_outstanding_orders (+18.2) and total_onshift_dashers (−11.9) matter most. On the raw scale each extra waiting order slows delivery by 0.34 min, each extra on-shift dasher speeds it by 0.34, and each distance unit adds 0.48.`,howRemark:[`Use the scaled column to rank influence.`,`Use the original column to speak in real units.`,`Say what each sign means.`,`Remember it holds other variables fixed.`]}},Q1:{vi:{think:`Có cột nhóm nào, và từ các biểu đồ của bạn có thể nói gì về ảnh hưởng lên thời gian giao?`,steps:[`Liệt kê các cột nhóm: market_id, order_protocol, store_primary_category, isWeekend (và hour nếu coi là nhóm).`,`Dựa vào biểu đồ 3.1.2 và boxplot theo nhóm: nhóm nào có time_taken trung bình khác rõ.`,`Nói chắc chắn hay dè dặt tùy mức khác biệt.`],code:`# Câu trả lời viết bằng chữ trong ô Answer của notebook`,lotus:`Chi nhánh nào có thời gian chờ trung bình cao hơn rõ rệt thì chi nhánh là một yếu tố, không chỉ là nhãn.`,trap:`Nói «ảnh hưởng» chỉ từ một biểu đồ đếm số đơn mà không so time_taken theo nhóm là chưa trả lời câu hỏi.`,remark:`Có các cột nhóm như market_id, order_protocol, store_primary_category. Nhìn biểu đồ nhóm (3.1.2) và tương quan, market và loại cửa hàng cho thời gian giao khác nhau, nên chúng ảnh hưởng nhưng cần mã hóa trước khi đưa vào hồi quy.`,howRemark:[`Liệt kê cột nhóm trước.`,`Nói biểu đồ nào bạn dựa vào.`,`Kết luận ảnh hưởng và cách xử lý.`]},en:{think:`Which categorical columns exist, and what can your charts say about their effect on delivery time?`,steps:[`List the categorical columns: market_id, order_protocol, store_primary_category, isWeekend (and hour if you treat it as a group).`,`Use the 3.1.2 charts and per-group boxplots: which groups have a clearly different mean time_taken.`,`State firmly or cautiously depending on the size of the gap.`],code:`# Write the answer in words in the notebook's Answer cell`,lotus:`A branch with a clearly higher average wait means branch is a factor, not just a label.`,trap:`Claiming “effect” from a count chart alone, without comparing time_taken by group, does not answer the question.`,remark:`There are categorical columns such as market_id, order_protocol, store_primary_category. From the group charts (3.1.2) and correlations, markets and store types show different delivery times, so they matter but must be encoded before regression.`,howRemark:[`List the categorical columns first.`,`Say which chart you rely on.`,`Conclude on the effect and the treatment.`]}},Q2:{vi:{think:`test_size = 0.2 nghĩa là gì?`,steps:[`20% số dòng dành cho tập kiểm tra, 80% còn lại để huấn luyện.`,`Với file của bạn: 175.777 dòng, khoảng 35.100 dòng cho test.`,`Vai trò: đo mô hình trên dữ liệu chưa từng thấy.`],code:`# Câu trả lời viết bằng chữ trong ô Answer của notebook`,lotus:`Giống để một phần sổ booking sang một bên để thử đoán sau khi đã rút quy luật từ phần còn lại.`,trap:`Nhầm 0,2 là 2 hoặc 20 dòng thay vì 20% số dòng.`,remark:`test_size = 0.2 nghĩa là 20% dữ liệu được giữ làm tập kiểm tra và 80% để huấn luyện; ở bài này là 35.156 và 140.621 dòng.`,howRemark:[`Nêu ý nghĩa tỷ lệ.`,`Dẫn số dòng thật.`,`Nói mục đích (đo trên dữ liệu chưa thấy).`]},en:{think:`What does test_size = 0.2 mean?`,steps:[`20% of rows are held out for testing, the other 80% for training.`,`In your file: 175,777 rows, about 35,100 for test.`,`Role: measure the model on data it has never seen.`],code:`# Write the answer in words in the notebook's Answer cell`,lotus:`Like setting part of the booking log aside to test guesses after learning the rule from the rest.`,trap:`Mistaking 0.2 for 2 or 20 rows instead of 20% of rows.`,remark:`test_size = 0.2 means 20% of data is held out for testing and 80% for training; here 35,156 and 140,621 rows.`,howRemark:[`State what the ratio means.`,`Quote the real row counts.`,`Say the purpose (measure on unseen data).`]}},Q3:{vi:{think:`Trên bản đồ nhiệt, biến nào có tương quan cao nhất với biến mục tiêu?`,steps:[`Đọc hàng time_taken của heatmap.`,`Trong file của bạn, mạnh nhất là distance (khoảng 0,46), rồi subtotal (khoảng 0,41).`,`Nêu cả số và dấu. Nhớ kết quả của bạn phụ thuộc vào các bước làm sạch bạn đã chọn.`],code:`# Câu trả lời viết bằng chữ trong ô Answer của notebook`,lotus:`Yếu tố đi cùng thời gian chờ mạnh nhất cho bạn biết nên đưa vào mô hình trước.`,trap:`Trả lời bằng tên biến mà không nêu số hệ số. Dẫn cả hai.`,remark:`Trên bản đồ nhiệt, distance có tương quan cao nhất với time_taken (0,461), rồi subtotal (0,413) và total_outstanding_orders (0,385).`,howRemark:[`Lấy biến cao nhất theo trị tuyệt đối.`,`Nêu thêm 2 biến kế.`,`Nhắc đây là tương quan, chưa phải nhân quả.`]},en:{think:`On the heatmap, which feature has the highest correlation with the target?`,steps:[`Read the time_taken row of the heatmap.`,`In your file the strongest is distance (about 0.46), then subtotal (about 0.41).`,`Give both number and sign. Remember your result depends on the cleaning choices you made.`],code:`# Write the answer in words in the notebook's Answer cell`,lotus:`The factor that moves most with wait time tells you what to put in the model first.`,trap:`Answering with the feature name but no coefficient. Cite both.`,remark:`On the heatmap, distance has the highest correlation with time_taken (0.461), then subtotal (0.413) and total_outstanding_orders (0.385).`,howRemark:[`Take the highest by absolute value.`,`Add the next two.`,`Remind it is correlation, not causation.`]}},Q4:{vi:{think:`Bạn phát hiện điểm xa bằng cách nào và xử lý ra sao?`,steps:[`Nêu phương pháp: boxplot, IQR hoặc phân vị 99, kiểm tra giá trị không thể có (âm).`,`Nêu quy tắc cho từng loại: bỏ lỗi nhập, giới hạn điểm xa hiếm.`,`Ghi số dòng bị bỏ và vì sao chọn vậy.`],code:`# Câu trả lời viết bằng chữ trong ô Answer của notebook`,lotus:`Số nhân viên âm bỏ hẳn, booking 411 gói giới hạn ở mức phân vị 99. Hai quy tắc khác nhau vì hai nguyên nhân khác nhau.`,trap:`Nói «tôi bỏ điểm xa» chung chung mà không nói bỏ theo quy tắc nào.`,remark:`Phát hiện điểm xa bằng boxplot và ngưỡng phân vị 99, thấy các đơn với 411 món hay khoảng cách 83,5. Xử lý bằng cách bỏ giá trị âm (65 dòng) và điểm xa (4.124 dòng), áp cùng quy tắc cho validation.`,howRemark:[`Nêu công cụ phát hiện.`,`Nêu quy tắc cắt và số dòng.`,`Nói áp cho validation thế nào.`]},en:{think:`How did you detect outliers and how did you handle them?`,steps:[`State the method: boxplot, IQR or 99th percentile, checking impossible (negative) values.`,`State the rule per type: drop entry errors, cap rare extremes.`,`Record rows removed and why you chose so.`],code:`# Write the answer in words in the notebook's Answer cell`,lotus:`A negative staff count is dropped, a 411-package booking is capped at the 99th percentile. Two rules because two different causes.`,trap:`Saying “I removed outliers” without saying by what rule.`,remark:`Spot outliers with a boxplot and the 99th percentile, seeing orders with 411 items or 83.5 distance. Treat by dropping negatives (65 rows) and outliers (4,124 rows), applying the same rules to validation.`,howRemark:[`Name the detection tool.`,`State the cut rule and rows.`,`Say how it applies to validation.`]}},Q5:{vi:{think:`Dựa trên mô hình cuối, ba biến nào ảnh hưởng đáng kể nhất đến thời gian giao?`,steps:[`Lấy hệ số đã chuẩn hóa của mô hình cuối (6.2).`,`Xếp theo trị tuyệt đối, lấy ba biến đầu.`,`Nêu dấu và ý nghĩa của từng biến.`],code:`# Câu trả lời viết bằng chữ trong ô Answer của notebook`,lotus:`Ba yếu tố đầu bảng cho bạn biết nên can thiệp vào đâu để rút ngắn thời gian chờ.`,trap:`Xếp theo hệ số chưa chuẩn hóa so sánh táo với cam, vì thang đo khác nhau.`,remark:`Theo hệ số chuẩn hóa ở 6.2, ba biến ảnh hưởng nhất là total_outstanding_orders (+18,2), total_onshift_dashers (−11,9) và total_busy_dashers (−4,2); distance (+4,1) đứng ngay sau.`,howRemark:[`Xếp theo trị tuyệt đối hệ số chuẩn hóa.`,`Nêu dấu và ý nghĩa.`,`Nhắc giữ các biến khác cố định.`]},en:{think:`Based on the final model, which three features most significantly affect delivery time?`,steps:[`Take the final model's standardised coefficients (6.2).`,`Rank by absolute value and take the top three.`,`State sign and meaning for each.`],code:`# Write the answer in words in the notebook's Answer cell`,lotus:`The top three factors tell you where to intervene to shorten the wait.`,trap:`Ranking by unscaled coefficients compares apples with oranges, since scales differ.`,remark:`By the scaled coefficients in 6.2, the top three are total_outstanding_orders (+18.2), total_onshift_dashers (−11.9) and total_busy_dashers (−4.2); distance (+4.1) follows closely.`,howRemark:[`Rank by absolute scaled coefficient.`,`State sign and meaning.`,`Remind others are held fixed.`]}},Q6:{vi:{think:`Giải thích chi tiết thuật toán hồi quy tuyến tính.`,steps:[`Mô hình: y = β0 + β1x1 + … + ε.`,`Tìm β sao cho tổng bình phương sai số nhỏ nhất (bình phương tối thiểu).`,`Các giả định: tuyến tính, sai số độc lập, phương sai đều, sai số xấp xỉ chuẩn, không đa cộng tuyến mạnh.`,`Đầu ra: hệ số và dự đoán.`],code:`# Câu trả lời viết bằng chữ trong ô Answer của notebook`,lotus:`Đường thẳng nối khoảng cách và thời gian chờ sao cho các khoảng cách dọc từ điểm đến đường nhỏ nhất.`,trap:`Chỉ nói «vẽ đường thẳng qua các điểm» mà bỏ phần tối thiểu hóa sai số và các giả định.`,remark:`Hồi quy tuyến tính tìm đường thẳng (hoặc mặt phẳng) y = b0 + b1x1 + ... sao cho tổng bình phương sai số giữa dự đoán và thực tế nhỏ nhất. Hệ số cho biết khi một biến tăng một đơn vị, y đổi bao nhiêu.`,howRemark:[`Viết công thức.`,`Nói tiêu chí tối ưu.`,`Giải thích ý nghĩa hệ số.`]},en:{think:`Explain the linear regression algorithm in detail.`,steps:[`Model: y = β0 + β1x1 + … + ε.`,`Find β minimising the sum of squared errors (least squares).`,`Assumptions: linearity, independent errors, equal variance, roughly normal errors, no strong multicollinearity.`,`Output: coefficients and predictions.`],code:`# Write the answer in words in the notebook's Answer cell`,lotus:`A line linking distance and wait so that vertical gaps from points to the line are smallest.`,trap:`Saying only “draw a line through the points” and skipping error minimisation and assumptions.`,remark:`Linear regression finds a line (or plane) y = b0 + b1x1 + ... minimizing the sum of squared errors between predictions and actuals. A coefficient says how much y changes per one-unit rise in a variable.`,howRemark:[`Write the formula.`,`State the optimisation criterion.`,`Explain the meaning of a coefficient.`]}},Q7:{vi:{think:`Khác nhau giữa hồi quy tuyến tính đơn và đa biến?`,steps:[`Đơn: một biến đầu vào, y = β0 + β1x.`,`Đa biến: nhiều biến đầu vào, mỗi hệ số được hiểu giữ các biến khác cố định.`,`Đa biến cần chú ý đa cộng tuyến và chọn biến.`],code:`# Câu trả lời viết bằng chữ trong ô Answer của notebook`,lotus:`Dự đoán thời gian chờ chỉ từ khoảng cách (đơn) so với từ khoảng cách, số đơn đang chờ và giờ đặt (đa).`,trap:`Quên rằng hệ số của đa biến chỉ có nghĩa «giữ các biến khác cố định».`,remark:`Đơn biến dùng một biến vào (ví dụ chỉ distance), đa biến dùng nhiều biến cùng lúc (ở đây 12 biến) và mỗi hệ số đọc khi các biến khác cố định. Đa biến thường giải thích tốt hơn: R2 0,89 so với 0,21 nếu chỉ dùng distance.`,howRemark:[`Nêu khác biệt cơ bản.`,`Cho ví dụ có số.`,`Nói khi nào chọn cái nào.`]},en:{think:`What is the difference between simple and multiple linear regression?`,steps:[`Simple: one input, y = β0 + β1x.`,`Multiple: several inputs, each coefficient read holding the others fixed.`,`Multiple needs attention to multicollinearity and feature selection.`],code:`# Write the answer in words in the notebook's Answer cell`,lotus:`Predicting wait from distance alone (simple) versus from distance, pending orders and order hour (multiple).`,trap:`Forgetting that a multiple-regression coefficient means “holding the others fixed”.`,remark:`Simple uses one input (e.g. only distance), multiple uses many at once (12 here) and each coefficient is read holding the others fixed. Multiple usually explains more: R2 0.89 vs about 0.21 with distance alone.`,howRemark:[`State the basic difference.`,`Give a numeric example.`,`Say when to choose which.`]}},Q8:{vi:{think:`Hàm chi phí trong hồi quy tuyến tính có vai trò gì và được tối thiểu hóa thế nào?`,steps:[`Hàm chi phí đo độ sai của mô hình: trung bình bình phương sai số (MSE).`,`Mục tiêu là chọn hệ số làm nó nhỏ nhất.`,`Cách tối thiểu hóa: nghiệm đóng (phương trình chuẩn) hoặc hạ gradient lặp lại.`],code:`# Câu trả lời viết bằng chữ trong ô Answer của notebook`,lotus:`Hàm chi phí là điểm số của một cách vẽ đường: đường nào cho tổng sai lệch nhỏ hơn thì tốt hơn.`,trap:`Nhầm hàm chi phí với R²: R² là thước đo sau khi huấn luyện, chi phí là thứ được tối thiểu hóa lúc huấn luyện.`,remark:`Hàm chi phí đo mô hình sai bao nhiêu, thường là trung bình bình phương sai số (MSE). Mục tiêu là tìm hệ số làm MSE nhỏ nhất, bằng công thức nghiệm đóng hoặc gradient descent.`,howRemark:[`Nêu hàm chi phí là gì.`,`Nêu cách tối thiểu hóa.`,`Liên hệ với RMSE 2,9 phút ở 5.2.`]},en:{think:`What is the role of the cost function in linear regression and how is it minimised?`,steps:[`The cost function measures model error: mean squared error (MSE).`,`The goal is to choose coefficients that make it smallest.`,`Minimised by the closed form (normal equation) or by iterative gradient descent.`],code:`# Write the answer in words in the notebook's Answer cell`,lotus:`The cost function is the score of a way of drawing the line: the line with smaller total miss is better.`,trap:`Confusing cost with R²: R² is a measure after training, cost is what is minimised during training.`,remark:`The cost function measures how wrong the model is, usually mean squared error (MSE). The goal is the coefficients minimizing MSE, by the closed-form solution or gradient descent.`,howRemark:[`State what the cost function is.`,`State how it is minimized.`,`Relate to the 2.9-minute RMSE in 5.2.`]}},Q9:{vi:{think:`Khác nhau giữa quá khớp và chưa khớp?`,steps:[`Quá khớp: tốt ở train nhưng kém ở dữ liệu mới, mô hình học cả nhiễu.`,`Chưa khớp: kém ở cả hai, mô hình quá đơn giản.`,`Dấu hiệu: khoảng cách giữa điểm train và điểm validation.`,`Cách xử lý: bớt hoặc thêm biến, chọn mô hình khác.`],code:`# Câu trả lời viết bằng chữ trong ô Answer của notebook`,lotus:`Một mô hình nhớ từng booking của tháng 11 (quá khớp) so với một mô hình chỉ đoán 45 phút cho mọi người (chưa khớp).`,trap:`Chỉ nhìn điểm ở train rồi kết luận mô hình tốt.`,remark:`Quá khớp là mô hình tốt trên train nhưng kém trên validation; chưa khớp là kém ở cả hai. Ở bài này R2 train 0,900 và valid 0,903 nên không quá khớp, R2 cao nên không chưa khớp.`,howRemark:[`Định nghĩa hai khái niệm.`,`Dùng số train và valid.`,`Kết luận cho mô hình này.`]},en:{think:`What is the difference between overfitting and underfitting?`,steps:[`Overfitting: good on train but poor on new data, the model learned noise too.`,`Underfitting: poor on both, the model is too simple.`,`Sign: the gap between train and validation scores.`,`Fixes: drop or add features, choose another model.`],code:`# Write the answer in words in the notebook's Answer cell`,lotus:`A model memorising each November booking (overfit) versus one that guesses 45 minutes for everyone (underfit).`,trap:`Judging a model good from its train score alone.`,remark:`Overfitting is good on train but poor on validation; underfitting is poor on both. Here R2 is 0.900 on train and 0.903 on validation, so neither overfit nor underfit.`,howRemark:[`Define both concepts.`,`Use train and valid numbers.`,`Conclude for this model.`]}},Q10:{vi:{think:`Biểu đồ phần dư giúp chẩn đoán mô hình thế nào?`,steps:[`Phần dư theo dự đoán: có hình dạng hay hình phễu thì giả định bị vi phạm.`,`Q-Q plot và histogram: kiểm tra phần dư có gần chuẩn.`,`Phần dư theo thứ tự thời gian: phát hiện tự tương quan.`,`Điểm phần dư lớn bất thường chỉ ra đơn cần xem lại.`],code:`# Câu trả lời viết bằng chữ trong ô Answer của notebook`,lotus:`Nếu mô hình đoán thấp mọi lúc ở giờ cao điểm thì phần dư theo giờ có hình dạng, và bạn thiếu một biến liên quan đến giờ.`,trap:`Chỉ nói «phần dư nên quanh 0» mà không nói hình dạng nào là dấu hiệu xấu.`,remark:`Biểu đồ phần dư cho thấy mô hình sai ở đâu: phần dư tản đều quanh 0 là tốt, hình cong hoặc loe ra là mô hình bỏ sót quan hệ hay phương sai không đều; Q-Q plot kiểm tra phần dư có gần chuẩn không.`,howRemark:[`Nói phần dư tốt trông thế nào.`,`Nêu dấu hiệu xấu và ý nghĩa.`,`Nêu vai trò Q-Q plot.`]},en:{think:`How do residual plots help in diagnosing a linear regression model?`,steps:[`Residuals vs predicted: a pattern or funnel means assumptions are violated.`,`Q-Q plot and histogram: check whether residuals are near normal.`,`Residuals over time: detect autocorrelation.`,`Unusually large residuals point to orders worth reviewing.`],code:`# Write the answer in words in the notebook's Answer cell`,lotus:`If the model underguesses at every peak hour, residuals by hour show a shape and you are missing an hour-related feature.`,trap:`Saying only “residuals should be around 0” without saying which shapes are bad signs.`,remark:`Residual plots show where the model errs: even scatter around 0 is good, curves or fans mean a missed relationship or uneven variance; the Q-Q plot checks whether residuals are near normal.`,howRemark:[`Say what good residuals look like.`,`State bad signs and their meaning.`,`State the Q-Q plot's role.`]}}},results:{"2.1.1":{code:`import pandas as pd, numpy as np, matplotlib.pyplot as plt, seaborn as sns
df = pd.read_csv('/tmp/asg/all/1/Delivery_Starter/porter_data_1.csv')
df['created_at'] = pd.to_datetime(df['created_at'])
df['actual_delivery_time'] = pd.to_datetime(df['actual_delivery_time'])
print(df[['created_at','actual_delivery_time']].dtypes)
print(df[['created_at','actual_delivery_time']].head(3))`,text:`created_at              datetime64[us]
actual_delivery_time    datetime64[us]
dtype: object
           created_at actual_delivery_time
0 2015-02-06 22:24:17  2015-02-06 23:11:17
1 2015-02-10 21:49:25  2015-02-10 22:33:25
2 2015-02-16 00:11:35  2015-02-16 01:06:35`,imgs:[]},"2.1.2":{code:`cat_cols = ['market_id', 'order_protocol', 'store_primary_category']
df[cat_cols] = df[cat_cols].astype('category')
print(df[cat_cols].nunique())`,text:`market_id                  6
order_protocol             7
store_primary_category    73
dtype: int64`,imgs:[]},"2.2.1":{code:`df['time_taken'] = (df['actual_delivery_time'] - df['created_at']).dt.total_seconds() / 60
print(df['time_taken'].describe().round(1))`,text:`count    175777.0
mean         46.2
std           9.3
min          32.0
25%          39.0
50%          45.0
75%          52.0
max         110.0
Name: time_taken, dtype: float64`,imgs:[]},"2.2.2":{code:`df['hour'] = df['created_at'].dt.hour
df['day'] = df['created_at'].dt.dayofweek
df['isWeekend'] = (df['day'] >= 5).astype('category')
print(df.groupby('hour')['time_taken'].mean().round(1).to_string())
df = df.drop(columns=['created_at', 'actual_delivery_time'])
df.groupby('hour')['time_taken'].mean().plot(marker='o', title='Thời gian giao trung bình theo giờ (phút)')`,text:`hour
0     46.4
1     47.7
2     50.7
3     50.2
4     46.0
5     44.4
6     45.0
7     44.7
8     46.5
14    46.3
15    45.3
16    44.2
17    43.6
18    42.4
19    43.5
20    41.7
21    40.1
22    40.7
23    41.3`,imgs:[`/assign/delivery-time/2_2_2-1.png`]},"2.3.1":{code:`y = df['time_taken']
X = df.drop(columns=['time_taken'])
print(X.shape, y.shape)`,text:`(175777, 15) (175777,)`,imgs:[]},"2.3.2":{code:`from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
print(len(X_train), len(X_test))`,text:`140621 35156`,imgs:[]},"3.1.1":{code:`num_cols = X_train.select_dtypes(include='number').columns.drop(['hour','day'])
X_train[num_cols].hist(bins=40, figsize=(14, 9))
plt.tight_layout()
print((X_train[num_cols] < 0).sum())`,text:`total_items                  0
subtotal                     0
num_distinct_items           0
min_item_price              11
max_item_price               0
total_onshift_dashers       20
total_busy_dashers          16
total_outstanding_orders    34
distance                     0
dtype: int64`,imgs:[`/assign/delivery-time/3_1_1-1.png`]},"3.1.2":{code:`fig, ax = plt.subplots(1, 4, figsize=(16, 3.5))
for a, c in zip(ax, ['market_id', 'order_protocol', 'isWeekend']):
    X_train[c].value_counts().sort_index().plot(kind='bar', ax=a, title=c)
X_train['store_primary_category'].value_counts().head(15).plot(kind='bar', ax=ax[3], title='top 15 store_primary_category')
plt.tight_layout()`,text:``,imgs:[`/assign/delivery-time/3_1_2-1.png`]},"3.1.3":{code:`sns.histplot(y_train, bins=40, kde=True)
print(y_train.describe().round(1))`,text:`count    140621.0
mean         46.2
std           9.3
min          32.0
25%          39.0
50%          45.0
75%          52.0
max         110.0
Name: time_taken, dtype: float64`,imgs:[`/assign/delivery-time/3_1_3-1.png`]},"3.2.1":{code:`train = X_train.copy(); train['time_taken'] = y_train
sample = train.sample(5000, random_state=42)
fig, ax = plt.subplots(1, 3, figsize=(16, 4))
for a, c in zip(ax, ['distance', 'subtotal', 'total_outstanding_orders']):
    sns.scatterplot(data=sample, x=c, y='time_taken', alpha=0.3, ax=a)
plt.figure(figsize=(10, 4)); sns.boxplot(data=train, x='hour', y='time_taken')`,text:``,imgs:[`/assign/delivery-time/3_2_1-1.png`,`/assign/delivery-time/3_2_1-2.png`]},"3.3.1":{code:`corr = train.select_dtypes(include='number').corr()
plt.figure(figsize=(11, 8))
sns.heatmap(corr, annot=True, fmt='.2f', cmap='coolwarm', center=0)
print(corr['time_taken'].sort_values().round(3).to_string())`,text:`hour                       -0.346
min_item_price              0.021
day                         0.045
total_onshift_dashers       0.172
total_busy_dashers          0.207
total_items                 0.221
max_item_price              0.255
num_distinct_items          0.313
total_outstanding_orders    0.385
subtotal                    0.413
distance                    0.461
time_taken                  1.000`,imgs:[`/assign/delivery-time/3_3_1-1.png`]},"3.3.2":{code:`weak = ['min_item_price', 'store_primary_category']
X_train = X_train.drop(columns=weak)
X_test = X_test.drop(columns=weak)
print(list(X_train.columns))`,text:`['market_id', 'order_protocol', 'total_items', 'subtotal', 'num_distinct_items', 'max_item_price', 'total_onshift_dashers', 'total_busy_dashers', 'total_outstanding_orders', 'distance', 'hour', 'day', 'isWeekend']`,imgs:[]},"3.4.1":{code:`train = X_train.copy(); train['time_taken'] = y_train
fig, ax = plt.subplots(1, 4, figsize=(16, 3))
for a, c in zip(ax, ['time_taken', 'total_items', 'subtotal', 'distance']):
    sns.boxplot(x=train[c], ax=a)
print(train[['total_items','subtotal','distance']].max())`,text:`total_items      411.00
subtotal       26800.00
distance          83.52
dtype: float64`,imgs:[`/assign/delivery-time/3_4_1-1.png`]},"3.4.2":{code:`n0 = len(train)
neg = ['total_onshift_dashers', 'total_busy_dashers', 'total_outstanding_orders']
train = train[(train[neg] >= 0).all(axis=1)]
n1 = len(train)
for c in ['total_items', 'subtotal', 'distance']:
    hi = train[c].quantile(0.99)
    train = train[train[c] <= hi]
print('bỏ vì giá trị âm:', n0 - n1, '| bỏ vì điểm xa (phân vị 99):', n1 - len(train), '| còn lại:', len(train))
caps = {c: X_train[c].quantile(0.99) for c in ['total_items', 'subtotal', 'distance']}
y_train = train['time_taken']; X_train = train.drop(columns=['time_taken'])`,text:`bỏ vì giá trị âm: 65 | bỏ vì điểm xa (phân vị 99): 4124 | còn lại: 136432`,imgs:[]},"4.1.1":{code:`X_test[['total_items','subtotal','distance','total_outstanding_orders']].hist(bins=40, figsize=(12, 6))
plt.tight_layout()`,text:``,imgs:[`/assign/delivery-time/4_1_1-1.png`]},"4.1.2":{code:`print(pd.concat([X_train['market_id'].value_counts(normalize=True), X_test['market_id'].value_counts(normalize=True)], axis=1, keys=['train','valid']).round(3))`,text:`           train  valid
market_id              
2.0        0.306  0.306
4.0        0.261  0.263
1.0        0.209  0.212
3.0        0.121  0.118
5.0        0.099  0.097
6.0        0.004  0.004`,imgs:[]},"4.1.3":{code:`print(y_train.describe().round(1)); print(y_test.describe().round(1))`,text:`count    136432.0
mean         45.9
std           9.1
min          32.0
25%          39.0
50%          45.0
75%          51.0
max         105.0
Name: time_taken, dtype: float64
count    35156.0
mean        46.2
std          9.4
min         32.0
25%         39.0
50%         45.0
75%         52.0
max        103.0
Name: time_taken, dtype: float64`,imgs:[]},"4.2":{code:`val = X_test.copy(); val['time_taken'] = y_test
sns.scatterplot(data=val.sample(5000, random_state=42), x='distance', y='time_taken', alpha=0.3)`,text:``,imgs:[`/assign/delivery-time/4_2-1.png`]},"4.3":{code:`neg = ['total_onshift_dashers', 'total_busy_dashers', 'total_outstanding_orders']
mask = (X_test[neg] >= 0).all(axis=1)
X_test, y_test = X_test[mask], y_test[mask]
print(list(X_train.columns) == list(X_test.columns), len(X_test))`,text:`True 35143`,imgs:[]},"5.1":{code:`from sklearn.preprocessing import StandardScaler
num = X_train.select_dtypes(include='number').columns
scaler = StandardScaler()
Xtr = X_train.copy(); Xte = X_test.copy()
Xtr[num] = scaler.fit_transform(X_train[num]); Xte[num] = scaler.transform(X_test[num])
Xtr = pd.get_dummies(Xtr, drop_first=True).astype(float); Xte = pd.get_dummies(Xte, drop_first=True).astype(float)
Xte = Xte.reindex(columns=Xtr.columns, fill_value=0)
print(Xtr[num].describe().loc[['mean','std']].round(2))`,text:`      total_items  subtotal  num_distinct_items  ...  distance  hour  day
mean         -0.0       0.0                 0.0  ...      -0.0  -0.0 -0.0
std           1.0       1.0                 1.0  ...       1.0   1.0  1.0

[2 rows x 10 columns]`,imgs:[]},"5.2":{code:`from sklearn.linear_model import LinearRegression
from sklearn.metrics import r2_score, mean_squared_error
lr = LinearRegression().fit(Xtr, y_train)
for name, X_, y_ in [('train', Xtr, y_train), ('valid', Xte, y_test)]:
    p = lr.predict(X_)
    print(name, 'R2', round(r2_score(y_, p), 3), 'RMSE', round(mean_squared_error(y_, p) ** 0.5, 2))`,text:`train R2 0.9 RMSE 2.87
valid R2 0.903 RMSE 2.91`,imgs:[]},"5.3":{code:`from sklearn.feature_selection import RFE
scores = {}
for k in range(1, Xtr.shape[1] + 1):
    rfe = RFE(LinearRegression(), n_features_to_select=k).fit(Xtr, y_train)
    cols = Xtr.columns[rfe.support_]
    m = LinearRegression().fit(Xtr[cols], y_train)
    scores[k] = r2_score(y_test, m.predict(Xte[cols]))
s = pd.Series(scores)
s.plot(marker='o', title='R2 trên validation theo số biến (RFE)'); plt.xlabel('số biến')
print(s.round(4).to_string())`,text:`1     0.1469
2     0.4415
3     0.4652
4     0.6732
5     0.6921
6     0.7083
7     0.7162
8     0.7165
9     0.7272
10    0.8499
11    0.8580
12    0.8925
13    0.8961
14    0.8961
15    0.8961
16    0.8971
17    0.8994
18    0.8999
19    0.9018
20    0.9026
21    0.9031
22    0.9031`,imgs:[`/assign/delivery-time/5_3-1.png`]},"6.1":{code:`k = 12
rfe = RFE(LinearRegression(), n_features_to_select=k).fit(Xtr, y_train)
cols = Xtr.columns[rfe.support_]
final_model = LinearRegression().fit(Xtr[cols], y_train)
pred = final_model.predict(Xte[cols]); res = y_test - pred
print('12 biến được giữ:', list(cols))
print('R2 valid', round(r2_score(y_test, pred), 3))
import statsmodels.api as sm
fig, ax = plt.subplots(1, 3, figsize=(16, 4))
ax[0].scatter(pred, res, alpha=0.1); ax[0].axhline(0, color='r'); ax[0].set_title('Phần dư theo dự đoán')
sm.qqplot(res, line='45', fit=True, ax=ax[1]); ax[1].set_title('Q-Q plot')
sns.histplot(res, bins=40, kde=True, ax=ax[2]); ax[2].set_title('Histogram phần dư')`,text:`12 biến được giữ: ['subtotal', 'total_onshift_dashers', 'total_busy_dashers', 'total_outstanding_orders', 'distance', 'hour', 'market_id_2.0', 'market_id_3.0', 'market_id_4.0', 'market_id_5.0', 'market_id_6.0', 'order_protocol_5.0']
R2 valid 0.892`,imgs:[`/assign/delivery-time/6_1-1.png`]},"6.2":{code:`num_in = [c for c in cols if c in num]
coef_scaled = pd.Series(final_model.coef_, index=cols)
scale = pd.Series(scaler.scale_, index=num)
orig = coef_scaled[num_in] / scale[num_in]
print(pd.DataFrame({'scaled': coef_scaled[num_in], 'original': orig}).round(4).to_string())
print()
for c in ['total_items', 'distance']:
    if c in orig.index: print(f'+1 đơn vị {c} -> thời gian giao đổi {orig[c]:+.3f} phút')`,text:`                           scaled  original
subtotal                   2.6932    0.0017
total_onshift_dashers    -11.9243   -0.3448
total_busy_dashers        -4.2311   -0.1314
total_outstanding_orders  18.1520    0.3440
distance                   4.0891    0.4827
hour                      -1.9116   -0.2202

+1 đơn vị distance -> thời gian giao đổi +0.483 phút`,imgs:[]}}},{id:`employee-retention`,course:`C3 · Hồi quy logistic`,title:[`Bài tập: Dự đoán nhân viên ở lại hay nghỉ`,`Assignment: Predicting Employee Retention`],file:`Predicting_Employee_Retention_Starter.ipynb`,story:[`Starter gốc là dữ liệu nhân sự một công ty công nghệ. Trong Lotus Spa: mỗi dòng là một nhân viên của chuỗi, Attrition = nghỉ việc hay ở lại. Bạn dự đoán ai có nguy cơ nghỉ để chị Lan kịp giữ. Các con số «file của bạn» là số thật tính từ Employee_data.csv (74.610 dòng).`,`The original starter is a tech company's HR data. In Lotus Spa: each row is a staff member of the chain, Attrition = left or stayed. You predict who is at risk of leaving so chị Lan can retain them. The “your file” numbers are real figures computed from Employee_data.csv (74,610 rows).`],concepts:[`d-8a351794bf2d`],cells:[{t:`md`,s:`# **Predicting Employee Retention**`},{t:`md`,s:`### Objective

The objective of this assignment is to develop a Logistic Regression model. You will be using this model to analyse and predict binary outcomes based on the input data. This assignment aims to enhance understanding of logistic regression, including its assumptions, implementation, and evaluation, to effectively classify and interpret data.
`},{t:`md`,s:`### Business Objective

A mid-sized technology company wants to improve its understanding of employee retention to foster a loyal and committed workforce. While the organization has traditionally focused on addressing turnover, it recognises the value of proactively identifying employees likely to stay and understanding the factors contributing to their loyalty.


In this assignment you’ll be building a logistic regression model to predict the likelihood of employee retention based on the data such as demographic details, job satisfaction scores, performance metrics, and tenure. The aim is to provide the HR department with actionable insights to strengthen retention strategies, create a supportive work environment, and increase the overall stability and satisfaction of the workforce.`},{t:`md`,s:`## Assignment Tasks

You need to perform the following steps to complete this assignment:
1. Data Understanding
2. Data Cleaning
3. Train Validation Split
4. EDA on training data
5. EDA on validation data [Optional]
6. Feature Engineering
7. Model Building
8. Prediction and Model Evaluation


`},{t:`md`,s:`## Data Dictionary

The data has 24 Columns and 74610 Rows. Following data dictionary provides the description for each column present in dataset:<br>

<table>
  <thead>
    <tr>
      <th>Column Name</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Employee ID</td>
      <td>A unique identifier assigned to each employee.</td>
    </tr>
    <tr>
      <td>Age</td>
      <td>The age of the employee, ranging from 18 to 60 years.</td>
    </tr>
    <tr>
      <td>Gender</td>
      <td>The gender of the employee.</td>
    </tr>
    <tr>
      <td>Years at Company</td>
      <td>The number of years the employee has been working at the company.</td>
    </tr>
    <tr>
      <td>Monthly Income</td>
      <td>The monthly salary of the employee, in dollars.</td>
    </tr>
    <tr>
      <td>Job Role</td>
      <td>The department or role the employee works in, encoded into categories such as Finance, Healthcare, Technology, Education, and Media.</td>
    </tr>
    <tr>
      <td>Work-Life Balance</td>
      <td>The employee's perceived balance between work and personal life (Poor, Below Average, Good, Excellent).</td>
    </tr>
    <tr>
      <td>Job Satisfaction</td>
      <td>The employee's satisfaction with their job (Very Low, Low, Medium, High).</td>
    </tr>
    <tr>
      <td>Performance Rating</td>
      <td>The employee's performance rating (Low, Below Average, Average, High).</td>
    </tr>
    <tr>
      <td>Number of Promotions</td>
      <td>The total number of promotions the employee has received.</td>
    </tr>
     </tr>
     <tr>
      <td>Overtime</td>
      <td>Number of overtime hours.</td>
    </tr>
    <tr>
      <td>Distance from Home</td>
      <td>The distance between the employee's home and workplace, in miles.</td>
    </tr>
    <tr>
      <td>Education Level</td>
      <td>The highest education level attained by the employee (High School, Associate Degree, Bachelor’s Degree, Master’s Degree, PhD).</td>
    </tr>
    <tr>
      <td>Marital Status</td>
      <td>The marital status of the employee (Divorced, Married, Single).</td>
    </tr>
     <tr>
      <td>Number of Dependents</td>
      <td>Number of dependents the employee has.</td>
    </tr>
    <tr>
      <td>Job Level</td>
      <td>The job level of the employee (Entry, Mid, Senior).</td>
    </tr>
    <tr>
      <td>Company Size</td>
      <td>The size of the company the employee works for (Small, Medium, Large).</td>
    </tr>
    <tr>
      <td>Company Tenure (In Months)</td>
      <td>The total number of years the employee has been working in the industry.</td>
    </tr>
    <tr>
      <td>Remote Work</td>
      <td>Whether the employee works remotely (Yes or No).</td>
    </tr>
    <tr>
      <td>Leadership Opportunities</td>
      <td>Whether the employee has leadership opportunities (Yes or No).</td>
    </tr>
    <tr>
      <td>Innovation Opportunities</td>
      <td>Whether the employee has opportunities for innovation (Yes or No).</td>
    </tr>
    <tr>
      <td>Company Reputation</td>
      <td>The employee's perception of the company's reputation (Very Poor, Poor, Good, Excellent).</td>
    </tr>
    <tr>
      <td>Employee Recognition</td>
      <td>The level of recognition the employee receives(Very Low, Low, Medium, High).</td>
    </tr>
    <tr>
      <td>Attrition</td>
      <td>Whether the employee has left the company.</td>
    </tr>
  </tbody>
</table>
`},{t:`md`,s:`## **1. Data Understanding**

In this step, load the dataset and check basic statistics of the data, including preview of data, dimension of data, column descriptions and data types.`},{t:`md`,s:`### **1.0 Import Libraries**`},{t:`code`,s:`# Supress unnecessary warnings
import warnings
warnings.filterwarnings('ignore')`},{t:`code`,s:`# Import the libraries
import numpy as np
import pandas as pd`},{t:`md`,s:`### **1.1 Load the Data**`,ref:`1.1`},{t:`code`,s:`# Load the dataset
`},{t:`code`,s:`# Check the first few entries
`},{t:`code`,s:`# Inspect the shape of the dataset
`},{t:`code`,s:`# Inspect the different columns in the dataset
`},{t:`md`,s:`### **1.2 Check the basic statistics**`,ref:`1.2`},{t:`code`,s:`# Check the summary of the dataset
`},{t:`md`,s:`### **1.3 Check the data type of columns**`,ref:`1.3`},{t:`code`,s:`# Check the info to see the types of the feature variables and the null values present
`},{t:`md`,s:`## **2. Data Cleaning** <font color = red>[15 marks]</font>`},{t:`md`,s:`### **2.1 Handle the missing values** <font color = red>[10 marks]</font>`},{t:`md`,s:`2.1.1 Check the number of missing values <font color="red">[2 Mark]</font>`,ref:`2.1.1`},{t:`code`,s:`# Check the number of missing values in each column
`},{t:`md`,s:`2.1.2 Check the percentage of missing values <font color="red">[2 Marks]</font>`,ref:`2.1.2`},{t:`code`,s:`# Check the percentage of missing values in each column
`},{t:`md`,s:`2.1.3 Handle rows with missing values <font color="red">[4 Marks]</font>`,ref:`2.1.3`},{t:`code`,s:`# Handle the missing value rows in the column
`},{t:`md`,s:`2.1.4 Check percentage of remaning data after missing values are removed <font color="red">[2 Mark]</font>`,ref:`2.1.4`},{t:`code`,s:`# Check the percentage of remaining data after missing values are removed
`},{t:`md`,s:`### **2.2 Identify and handle redundant values within categorical columns (if any)** <font color = red>[3 marks]</font>`,ref:`2.2`},{t:`md`,s:`Examine the categorical columns to determine if any value or column needs to be treated`},{t:`code`,s:`# Write a function to display the categorical columns with their unique values and check for redundant values
`},{t:`code`,s:`# Check the data
`},{t:`md`,s:`### **2.3 Drop redundant columns** <font color = red>[2 marks]</font>`,ref:`2.3`},{t:`code`,s:`# Drop redundant columns which are not required for modelling
`},{t:`code`,s:`# Check first few rows of data
`},{t:`md`,s:`## **3. Train-Validation Split** <font color = red>[5 marks]</font>`},{t:`md`,s:`### **3.1 Import required libraries**`,ref:`3.1`},{t:`code`,s:`# Import Train Test Split
`},{t:`md`,s:`### **3.2 Define feature and target variables** <font color = red>[2 Mark]</font>`,ref:`3.2`},{t:`code`,s:`# Put all the feature variables in X

# Put the target variable in y
`},{t:`md`,s:`### **3.3 Split the data** <font color="red">[3 Marks]</font>`,ref:`3.3`},{t:`code`,s:`# Split the data into 70% train data and 30% validation data
`},{t:`md`,s:`## **4. EDA on training data** <font color = red>[20 marks]</font>`},{t:`md`,s:`### **4.1 Perform univariate analysis** <font color = red>[6 marks]</font>`},{t:`md`,s:`Perform univariate analysis on training data for all the numerical columns.


`},{t:`md`,s:`4.1.1 Select numerical columns from training data <font color = "red">[1 Mark]</font>`,ref:`4.1.1`},{t:`code`,s:`# Select numerical columns
`},{t:`md`,s:`4.1.2 Plot distribution of numerical columns <font color = "red">[5 Marks]</font>`,ref:`4.1.2`},{t:`code`,s:`# Plot all the numerical columns to understand their distribution

# Import necessary libraries
import seaborn as sns
import matplotlib.pyplot as plt
`},{t:`md`,s:`### **4.2 Perform correlation analysis** <font color="red">[4 Marks]</font>`,ref:`4.2`},{t:`md`,s:`Check the correlation among different numerical variables.`},{t:`code`,s:`# Create correlation matrix for numerical columns

# Plot Heatmap of the correlation matrix
`},{t:`md`,s:`### **4.3 Check class balance** <font color="red">[2 Marks]</font>`,ref:`4.3`},{t:`md`,s:`Check the distribution of target variable in training set to check class balance.`},{t:`code`,s:`# Plot a bar chart to check class balance
`},{t:`md`,s:`### **4.4 Perform bivariate analysis** <font color="red">[8 Marks]</font>`,ref:`4.4`},{t:`md`,s:`Perform bivariate analysis on training data between all the categorical columns and target variable to  analyse how the categorical variables influence the target variable.`},{t:`code`,s:`# Plot distribution for each categorical column with target variable
`},{t:`md`,s:`## **5. EDA on validation data** <font color = red>[OPTIONAL]</font>`},{t:`md`,s:`### **5.1 Perform univariate analysis**`},{t:`md`,s:`Perform univariate analysis on validation data for all the numerical columns.
`},{t:`md`,s:`5.1.1 Select numerical columns from validation data`,ref:`5.1.1`},{t:`code`,s:`# Select numerical columns
`},{t:`md`,s:`5.1.2 Plot distribution of numerical columns`,ref:`5.1.2`},{t:`code`,s:`# Plot all the numerical columns to understand their distribution
`},{t:`md`,s:`### **5.2 Perform correlation analysis**`,ref:`5.2`},{t:`md`,s:`Check the correlation among different numerical variables.`},{t:`code`,s:`# Create correlation matrix for numerical columns

# Plot Heatmap of the correlation matrix
`},{t:`md`,s:`### **5.3 Check class balance**`,ref:`5.3`},{t:`md`,s:`Check the distribution of target variable in validation data to check class balance.`},{t:`code`,s:`# Plot a bar chart to check class balance
`},{t:`md`,s:`### **5.4 Perform bivariate analysis**`,ref:`5.4`},{t:`md`,s:`Perform bivariate analysis on validation data between all the categorical columns and target variable to analyse how the categorical variables influence the target variable.`},{t:`code`,s:`# Plot distribution for each categorical column with target variable
`},{t:`md`,s:`## **6. Feature Engineering** <font color = red>[20 marks]</font>`},{t:`md`,s:`### **6.1 Dummy variable creation** <font color = red>[15 marks]</font>


The next step is to deal with the categorical variables present in the data.`},{t:`md`,s:`6.1.1 Identify categorical columns where dummy variables are required <font color="red">[1 Mark]</font>`,ref:`6.1.1`},{t:`code`,s:`# Check the categorical columns
`},{t:`md`,s:`6.1.2 Create dummy variables for independent columns in training set <font color="red">[3 Marks]</font>`,ref:`6.1.2`},{t:`code`,s:`# Create dummy variables using the 'get_dummies' for independent columns

# Add the results to the master DataFrame
`},{t:`md`,s:`Now, drop the original categorical columns and check the DataFrame`},{t:`code`,s:`# Drop the original categorical columns and check the DataFrame
`},{t:`md`,s:`6.1.3 Create dummy variables for independent columns in validation set <font color="red">[3 Marks]</font>`,ref:`6.1.3`},{t:`code`,s:`# Create dummy variables using the 'get_dummies' for independent columns

# Add the results to the master DataFrame
`},{t:`md`,s:`Now, drop the original categorical columns and check the DataFrame`},{t:`code`,s:`# Drop categorical columns and check the DataFrame
`},{t:`md`,s:`6.1.4 Create DataFrame for dependent column in both training and validation set <font color = "red">[1 Mark]</font>`,ref:`6.1.4`},{t:`code`,s:`# Convert y_train and y_validation to DataFrame to create dummy variables
`},{t:`md`,s:`6.1.5 Create dummy variables for dependent column in training set <font color="red">[3 Marks]</font>`,ref:`6.1.5`},{t:`code`,s:`# Create dummy variables using the 'get_dummies' for dependent column
`},{t:`md`,s:`6.1.6 Create dummy variable for dependent column in validation set <font color = "red">[3 Marks]</font>`,ref:`6.1.6`},{t:`code`,s:`# Create dummy variables using the 'get_dummies' for dependent column
`},{t:`md`,s:`6.1.7 Drop redundant columns <font color="red">[1 Mark]</font>`,ref:`6.1.7`},{t:`code`,s:`# Drop redundant columns from both train and validation
`},{t:`md`,s:`### **6.2 Feature scaling** <font color = red>[5 marks]</font>

Apply feature scaling to the numeric columns to bring them to a common range and ensure consistent scaling.`},{t:`md`,s:`6.2.1 Import required libraries <font color="red">[1 Mark]</font>`,ref:`6.2.1`},{t:`code`,s:`# Import the necessary scaling tool from scikit-learn
`},{t:`md`,s:`6.2.2 Scale the numerical features <font color="red">[4 Marks]</font>`,ref:`6.2.2`},{t:`code`,s:`# Scale the numeric features present in the training set

# Scale the numerical features present in the validation set
`},{t:`md`,s:`## **7. Model Building** <font color = red>[40 marks]</font>`},{t:`md`,s:`### **7.1 Feature selection** <font color = red>[5 marks]</font>

As there are a lot of variables present in the data, Recursive Feature Elimination (RFE) will be used to select the most influential features for building the model.`},{t:`md`,s:`7.1.1 Import required libraries <font color="red">[1 Mark]</font>`,ref:`7.1.1`},{t:`code`,s:`# Import 'LogisticRegression' and create a LogisticRegression object
`},{t:`md`,s:`7.1.2 Import RFE  and select 15 variables <font color="red">[3 Mark]</font>`,ref:`7.1.2`},{t:`code`,s:`# Import RFE and select 15 variables
`},{t:`code`,s:`# Display the features selected by RFE
`},{t:`md`,s:`7.1.3 Store the selected features <font color="red">[1 Mark]</font>


`,ref:`7.1.3`},{t:`code`,s:`# Put columns selected by RFE into variable 'col'
`},{t:`md`,s:`### **7.2 Building Logistic Regression Model** <font color = red>[20 marks]</font>

Now that you have selected the variables through RFE, use these features to build a logistic regression model with statsmodels. This will allow you to assess the statistical aspects, such as p-values and VIFs, which are important for checking multicollinearity and ensuring that the predictors are not highly correlated with each other, as this could distort the model's coefficients.`},{t:`md`,s:`7.2.1 Select relevant columns on training set <font color="red">[1 Mark]</font>`,ref:`7.2.1`},{t:`code`,s:`# Select only the columns selected by RFE
`},{t:`code`,s:`# View the training data
`},{t:`md`,s:`7.2.2 Add constant to training set <font color = "red">[1 Mark]</font>`,ref:`7.2.2`},{t:`code`,s:`# Import statsmodels and add constant to training set
`},{t:`md`,s:`7.2.3 Fit logistic regression model <font color="red">[3 Marks]</font>`,ref:`7.2.3`},{t:`code`,s:`# Fit a logistic regression model on X_train after adding a constant and output the summary
`},{t:`md`,s:`**Model Interpretation**

The output summary table  will provide the features used for building model along with coefficient of each of the feature and their p-value. The p-value in a logistic regression model is used to assess the statistical significance of each coefficient. Lesser the p-value, more significant the feature is in the model.

A positive coefficient will indicate that an increase in the value of feature would increase the odds of the event occurring. On the other hand, a negative coefficient means the opposite, i.e,  an increase in the value of feature would decrease the odds of the event occurring.

`},{t:`md`,s:`7.2.4 Evaluate VIF of features <font color="red">[3 Marks]</font>`,ref:`7.2.4`},{t:`code`,s:`# Import 'variance_inflation_factor'
from statsmodels.stats.outliers_influence import variance_inflation_factor`},{t:`code`,s:`# Make a VIF DataFrame for all the variables present
`},{t:`md`,s:`Proceed to the next step if p-values and VIFs are within acceptable ranges.  If you observe high p-values or VIFs, create new cells to drop the features and retrain the model.`},{t:`md`,s:`7.2.5 Make predictions on training set <font color = "red">[2 Marks]</font>`,ref:`7.2.5`},{t:`code`,s:`# Predict the probabilities on the training set
`},{t:`md`,s:`7.2.6 Format the prediction output <font color="red">[1 Mark]</font>`,ref:`7.2.6`},{t:`code`,s:`# Reshape it into an array
`},{t:`md`,s:`7.2.7 Create a DataFrame with the actual stayed flag and the predicted probabilities <font color="red">[1 Mark]</font>`,ref:`7.2.7`},{t:`code`,s:`# Create a new DataFrame containing the actual stayed flag and the probabilities predicted by the model
`},{t:`md`,s:`7.2.8 Create a new column 'Predicted' with 1 if predicted probabilities are greater than 0.5 else 0 <font color = "red">[1 Mark]</font>`,ref:`7.2.8`},{t:`code`,s:`# Create a new column 'Predicted' with 1 if predicted probabilities are greater than 0.5 else 0
`},{t:`md`,s:`**Evaluation of performance of Model**

Evaluate the performance of the model based on the predictions made on the training set.
`},{t:`md`,s:`7.2.9 Check the accuracy of the model based on the predictions made on the training set <font color = "red">[1 Mark]</font>`,ref:`7.2.9`},{t:`code`,s:`# Import metrics from sklearn for evaluation
from sklearn import metrics

# Check the overall accuracy
`},{t:`md`,s:`7.2.10 Create a confusion matrix based on the predictions made on the training set <font color="red">[1 mark]</font>`,ref:`7.2.10`},{t:`code`,s:`# Create confusion matrix
`},{t:`md`,s:`7.2.11 Create variables for true positive, true negative, false positive and false negative <font color="red">[1 Mark]</font>`,ref:`7.2.11`},{t:`code`,s:`# Create variables for true positive, true negative, false positive and false negative
`},{t:`md`,s:`7.2.12 Calculate sensitivity and specificity of model  <font color="red">[2 Marks]</font>`,ref:`7.2.12`},{t:`code`,s:`# Calculate sensitivity
`},{t:`code`,s:`# Calculate specificity`},{t:`md`,s:`7.2.13 Calculate precision and recall of model <font color="red">[2 Marks]</font>`,ref:`7.2.13`},{t:`code`,s:`# Calculate precision
`},{t:`code`,s:`# Calculate recall
`},{t:`md`,s:`### **7.3 Find the optimal cutoff** <font color = red>[15 marks]</font>

Find the optimal cutoff to improve model performance. While a default threshold of 0.5 was used for initial evaluation, optimising this threshold can enhance the model's performance.

First, plot the ROC curve and check AUC.

`},{t:`md`,s:`7.3.1 Plot ROC curve <font color="red">[3 Marks]</font>`,ref:`7.3.1`},{t:`code`,s:`# Define ROC function
`},{t:`code`,s:`# Call the ROC function
`},{t:`md`,s:`**Sensitivity and Specificity tradeoff**

Check sensitivity and specificity tradeoff to find the optimal cutoff point.`},{t:`md`,s:`7.3.2 Predict on training set at various probability cutoffs <font color="red">[1 Mark]</font>`,ref:`7.3.2`},{t:`code`,s:`# Predict on training data by creating columns with different probability cutoffs to explore the impact of cutoff on model performance
`},{t:`md`,s:`7.3.3 Plot for accuracy, sensitivity, specificity at different probability cutoffs <font color="red">[2 Marks]</font>`,ref:`7.3.3`},{t:`code`,s:`# Create a DataFrame to see the values of accuracy, sensitivity, and specificity at different values of probability cutoffs
`},{t:`code`,s:`# Plot accuracy, sensitivity, and specificity at different values of probability cutoffs
`},{t:`md`,s:`7.3.4 Create a column for final prediction based on the optimal cutoff <font color="red">[2 Marks]</font>`,ref:`7.3.4`},{t:`code`,s:`# Create a column for final prediction based on the optimal cutoff
`},{t:`md`,s:`7.3.5 Calculate model's accuracy <font color="red">[1Mark]</font>`,ref:`7.3.5`},{t:`code`,s:`# Calculate the accuracy
`},{t:`md`,s:`7.3.6 Create confusion matrix <font color="red">[1Mark]</font>`,ref:`7.3.6`},{t:`code`,s:`# Create the confusion matrix once again
`},{t:`md`,s:`7.3.7 Create variables for true positive, true negative, false positive and false negative <font color="red">[1Mark]</font>`,ref:`7.3.7`},{t:`code`,s:`# Create variables for true positive, true negative, false positive and false negative
`},{t:`md`,s:`7.3.8 Calculate sensitivity and specificity of the model <font color="red">[1Mark]</font>`,ref:`7.3.8`},{t:`code`,s:`# Calculate Sensitivity
`},{t:`code`,s:`# Calculate Specificity
`},{t:`md`,s:`7.3.9 Calculate precision and recall of the model <font color="red">[1Mark]</font>`,ref:`7.3.9`},{t:`code`,s:`# Calculate Precision
`},{t:`code`,s:`# Calculate Recall
`},{t:`md`,s:`**Precision and Recall tradeoff**

Check optimal cutoff value by plotting precision-recall curve, and adjust the cutoff based on the precision and recall tradeoff if required.`},{t:`code`,s:`# Import precision-recall curve function
from sklearn.metrics import precision_recall_curve`},{t:`code`,s:`# Check actual and predicted values from initial model
`},{t:`md`,s:`7.3.10 Plot precision-recall curve <font color="red">[2 Marks]</font>`,ref:`7.3.10`},{t:`code`,s:`# Plot precision-recall curve
`},{t:`md`,s:`## **8. Prediction and Model Evaluation** <font color = red>[30 marks]</font>

Use the model from the previous step to make predictions on the validation set with the optimal cutoff. Then evaluate the model's performance using metrics such as accuracy, sensitivity, specificity, precision, and recall.`},{t:`md`,s:`### **8.1 Make predictions over validation set** <font color = red>[15 marks]</font>`},{t:`md`,s:`8.1.1 Select relevant features for validation set <font color="red">[2 Marks]</font>

`,ref:`8.1.1`},{t:`code`,s:`# Select the relevant features for validation set
`},{t:`md`,s:`8.1.2 Add constant to X_validation <font color="red">[2 Marks]</font>`,ref:`8.1.2`},{t:`code`,s:`# Add constant to X_validation
`},{t:`md`,s:`8.1.3 Make predictions over validation set <font color="red">[3 Marks]</font>`,ref:`8.1.3`},{t:`code`,s:`# Make predictions on the validation set and store it in the variable 'y_validation_pred'

# View predictions
`},{t:`md`,s:`8.1.4 Create DataFrame with actual values and predicted values for validation set <font color="red">[5 Marks]</font>`,ref:`8.1.4`},{t:`code`,s:`# Convert 'y_validation_pred' to a DataFrame 'predicted_probability'

# Convert 'y_validation' to DataFrame 'actual'

# Remove index from both DataFrames 'actual' and 'predicted_probability' to append them side by side
`},{t:`md`,s:`8.1.5 Predict final prediction based on the cutoff value <font color="red">[3 Marks]</font>`,ref:`8.1.5`},{t:`code`,s:`# Make predictions on the validation set using the optimal cutoff and store it in a column 'final_prediction'

# Check the DataFrame
`},{t:`md`,s:`### **8.2 Calculate accuracy of the model** <font color = red>[2 marks]</font>`,ref:`8.2`},{t:`code`,s:`# Calculate the overall accuracy
`},{t:`md`,s:`### **8.3 Create confusion matrix and create variables for true positive, true negative, false positive and false negative** <font color = red>[5 marks]</font>`,ref:`8.3`},{t:`code`,s:`# Create confusion matrix
`},{t:`code`,s:`# Create variables for true positive, true negative, false positive and false negative
`},{t:`md`,s:`### **8.4 Calculate sensitivity and specificity** <font color = red>[4 marks]</font>`,ref:`8.4`},{t:`code`,s:`# Calculate sensitivity
`},{t:`code`,s:`# Calculate specificity
`},{t:`md`,s:`### **8.5 Calculate precision and recall** <font color = red>[4 marks]</font>`,ref:`8.5`},{t:`code`,s:`# Calculate precision
`},{t:`code`,s:`# Calculate recall
`},{t:`md`,s:`## Conclusion

`}],guides:{"1.1":{vi:{think:`Đọc file CSV vào DataFrame, in vài dòng và kích thước để biết mình đang có gì.`,steps:[`pd.read_csv đường dẫn Employee_data.csv.`,`head() xem vài dòng đầu, shape xem số dòng và cột.`,`File của bạn có 74.610 dòng và 24 cột.`],code:`df = pd.read_csv('Employee_data.csv')
print(df.shape)
df.head()`,lotus:`Mỗi dòng là một nhân viên của chuỗi Lotus Spa (kỹ thuật viên, lễ tân, quản lý), mỗi cột là một thông tin hồ sơ về họ. Cột cuối Attrition cho biết họ ở lại hay nghỉ.`,trap:`Đường dẫn file sai thì read_csv báo FileNotFoundError. Kiểm tra file nằm cạnh notebook.`,read:[`(74610, 24) là số dòng và số cột.`,`Bảng mẫu ba nhân viên: mỗi cột của bảng gốc nằm ở một hàng của bảng này (đã xoay để dễ đọc).`],remark:`Có 74.610 nhân viên và 24 cột gồm thông tin cá nhân, công việc và cột mục tiêu Attrition.`,howRemark:[`Báo số dòng, số cột.`,`Nói cột nào là mục tiêu.`,`Nói qua nhóm cột chính.`]},en:{think:`Read the CSV into a DataFrame, print a few rows and the size to see what you have.`,steps:[`pd.read_csv on Employee_data.csv.`,`head() for the first rows, shape for rows and columns.`,`Your file has 74,610 rows and 24 columns.`],code:`df = pd.read_csv('Employee_data.csv')
print(df.shape)
df.head()`,lotus:`Each row is a Lotus Spa staff member (therapist, receptionist, manager), each column a piece of their record. The last column Attrition says whether they stayed or left.`,trap:`A wrong path raises FileNotFoundError. Check the file sits next to the notebook.`,read:[`(74610, 24) is rows and columns.`,`The sample table shows three employees: each column of the original sits on a row here (transposed for readability).`],remark:`There are 74,610 employees and 24 columns covering personal info, job info and the Attrition target.`,howRemark:[`Report rows and columns.`,`Say which column is the target.`,`Summarise the main column groups.`]}},"1.2":{vi:{think:`Xem thống kê mô tả để biết thang đo từng cột số và có giá trị lạ không.`,steps:[`df.describe() cho cột số.`,`Nhìn count: nếu nhỏ hơn 74.610 là cột có ô trống.`,`Nhìn max/min xem có giá trị phi lý không.`],code:`df.describe()`,lotus:`Trong file của bạn Distance from Home chỉ có 72.698 giá trị (thiếu 1.912) và Company Tenure có 72.197 (thiếu 2.413). Tuổi từ 18 đến 59, lương tháng trung bình khoảng 7.345.`,trap:`describe() mặc định chỉ hiển thị cột số, cột chữ không xuất hiện.`,read:[`Mỗi hàng là một cột số; đọc count, mean, min, max.`,`Age từ 18 đến 59, trung bình 38,5; Years at Company từ 1 đến 51.`,`Xem min và max có hợp lý không.`],remark:`Tuổi 18–59 (trung bình 38,5), thâm niên 1–51 năm (trung bình 15,7): các giá trị hợp lý, không thấy số vô lý ở thống kê tổng quan.`,howRemark:[`Nêu khoảng giá trị từng cột chính.`,`Kiểm có giá trị vô lý không.`,`Chú ý cột có count thấp hơn các cột khác.`]},en:{think:`Look at summary statistics to see each numeric column's scale and any odd values.`,steps:[`df.describe() for numeric columns.`,`Look at count: smaller than 74,610 means blanks.`,`Look at max/min for impossible values.`],code:`df.describe()`,lotus:`In your file Distance from Home has only 72,698 values (1,912 missing) and Company Tenure 72,197 (2,413 missing). Age runs 18 to 59, mean monthly income about 7,345.`,trap:`describe() shows numeric columns only by default; text columns do not appear.`,read:[`Each row is a numeric column; read count, mean, min, max.`,`Age runs 18 to 59, mean 38.5; Years at Company 1 to 51.`,`Check min and max are plausible.`],remark:`Age 18–59 (mean 38.5), tenure 1–51 years (mean 15.7): values are plausible, no absurd numbers in the overview.`,howRemark:[`State ranges of the main columns.`,`Check for absurd values.`,`Watch for columns with a lower count.`]}},"1.3":{vi:{think:`Xem kiểu dữ liệu từng cột để biết cột nào là số, cột nào là chữ.`,steps:[`df.info().`,`Đếm số cột object/str: đó là các cột nhóm sẽ cần dummy ở bước 6.`,`Chú ý cột nào đúng ra là nhóm nhưng đang là số.`],code:`df.info()`,lotus:`Giới tính, vị trí công việc, mức hài lòng, làm thêm giờ... là chữ. Tuổi, lương, số lần thăng chức là số.`,trap:`Mã nhân viên là số nhưng không có ý nghĩa tính toán: đừng đưa nó vào mô hình.`,read:[`Cột Non-Null Count cho biết số ô có dữ liệu mỗi cột.`,`Dtype: int64 là số nguyên, float64 là số thập phân, str là chữ.`,`Cột có Non-Null nhỏ hơn 74.610 là cột thiếu dữ liệu.`],remark:`Hầu hết cột đủ 74.610 ô; chữ là các cột nhóm (Gender, Job Role...), số là Age, Monthly Income...; hai cột thiếu dữ liệu sẽ xử lý ở 2.1.`,howRemark:[`Chia cột thành chữ và số.`,`Tìm cột có Non-Null thấp hơn.`,`Báo trước bước xử lý tiếp theo.`]},en:{think:`Check each column's data type to know which are numeric and which text.`,steps:[`df.info().`,`Count object/str columns: those are categorical and will need dummies in step 6.`,`Notice any column that should be categorical but is numeric.`],code:`df.info()`,lotus:`Gender, job role, satisfaction, overtime... are text. Age, income, promotions are numbers.`,trap:`Employee ID is numeric but meaningless for calculation: do not feed it to the model.`,read:[`Non-Null Count is how many cells have data per column.`,`Dtype: int64 integer, float64 decimal, str text.`,`A column with Non-Null below 74,610 is missing data.`],remark:`Most columns have all 74,610 cells; text columns are categories (Gender, Job Role...), numbers are Age, Monthly Income...; two columns with gaps are handled in 2.1.`,howRemark:[`Split columns into text and numeric.`,`Find columns with lower Non-Null.`,`Foreshadow the next step.`]}},"2.1.1":{vi:{think:`Đếm ô trống ở mỗi cột.`,steps:[`df.isnull().sum().`,`Chỉ hai cột có thiếu: Distance from Home (1.912) và Company Tenure (2.413).`],code:`df.isnull().sum()`,lotus:`Hồ sơ nhân viên thiếu khoảng cách từ nhà đến chi nhánh và thâm niên: chị Lan chưa nhập đủ.`,trap:`isnull().sum() không đếm ô chứa chữ như «N/A». Với file này không có, nhưng hãy nhớ kiểm tra.`,read:[`Chỉ hiện các cột có ô trống: Distance from Home và Company Tenure (In Months).`,`Con số là số ô trống.`],remark:`Chỉ hai cột thiếu: Distance from Home 1.912 ô và Company Tenure 2.413 ô; các cột khác đầy đủ.`,howRemark:[`Nêu cột thiếu và số ô.`,`Chưa kết luận mức nghiêm trọng khi chưa có %.`]},en:{think:`Count blanks in each column.`,steps:[`df.isnull().sum().`,`Only two columns have gaps: Distance from Home (1,912) and Company Tenure (2,413).`],code:`df.isnull().sum()`,lotus:`Staff records miss the distance from home to the branch and tenure: chị Lan did not fill them all in.`,trap:`isnull().sum() does not count text like “N/A”. This file has none, but remember to check.`,read:[`Only columns with blanks appear: Distance from Home and Company Tenure (In Months).`,`Numbers are blank cell counts.`],remark:`Only two columns are missing data: Distance from Home 1,912 and Company Tenure 2,413; all others are complete.`,howRemark:[`Name the columns and blank counts.`,`Do not judge severity without the %.`]}},"2.1.2":{vi:{think:`Đổi số ô trống thành phần trăm để quyết định xử lý.`,steps:[`df.isnull().mean() * 100.`,`File của bạn: Distance 2,56%, Tenure 3,23%.`],code:`(df.isnull().mean() * 100).round(2)`,lotus:`Thiếu 2 đến 3% là ít. Bỏ các dòng này không làm hao đáng kể số nhân viên.`,trap:`Nhìn số đếm 1.912 mà không so với tổng 74.610 dễ đánh giá sai mức độ.`,read:[`Số là % ô trống: 2,56% và 3,23%.`,`Quy ước thường dùng: dưới 5% thì bỏ dòng cũng chấp nhận được.`],remark:`Thiếu 2,56% và 3,23%, đều dưới 5% nên bỏ các dòng thiếu ít làm lệch kết quả.`,howRemark:[`Báo % từng cột.`,`So với ngưỡng 5%.`,`Chọn cách xử lý và lý do.`]},en:{think:`Turn the blank counts into percentages to decide how to handle them.`,steps:[`df.isnull().mean() * 100.`,`Your file: Distance 2.56%, Tenure 3.23%.`],code:`(df.isnull().mean() * 100).round(2)`,lotus:`2 to 3% missing is little. Dropping those rows does not lose many staff.`,trap:`Looking at 1,912 without comparing to the 74,610 total makes it easy to misjudge the scale.`,read:[`Numbers are the % blank: 2.56% and 3.23%.`,`Common rule: under 5%, dropping rows is acceptable.`],remark:`Missing 2.56% and 3.23%, both under 5%, so dropping those rows barely biases results.`,howRemark:[`State the % per column.`,`Compare with the 5% threshold.`,`Choose the treatment and reason.`]}},"2.1.3":{vi:{think:`Xử lý dòng thiếu. Vì tỷ lệ nhỏ, cách đơn giản và an toàn là bỏ các dòng đó.`,steps:[`df = df.dropna().`,`Ghi rõ lý do: thiếu ít, không có mẫu hình lệch.`,`Phương án khác là điền trung bình/trung vị, nhưng bài này cần bỏ.`],code:`df = df.dropna()
df.shape`,lotus:`Bỏ những nhân viên thiếu thông tin thay vì đoán khoảng cách nhà của họ.`,trap:`Gọi dropna() mà không gán lại df thì bảng không đổi.`,read:[`«74610 -> 70635» là số dòng trước và sau khi bỏ.`,`Hiệu: 3.975 dòng bị bỏ.`],remark:`Bỏ 3.975 dòng thiếu dữ liệu, còn 70.635 dòng.`,howRemark:[`Báo trước/sau.`,`Tính số dòng đã bỏ.`,`Nhắc rằng bỏ dòng là việc không đảo ngược.`]},en:{think:`Handle the rows with gaps. Since the share is small, the simple and safe way is to drop them.`,steps:[`df = df.dropna().`,`State the reason: few missing, no skewed pattern.`,`The alternative is imputing mean/median, but here dropping is expected.`],code:`df = df.dropna()
df.shape`,lotus:`Drop staff with missing info instead of guessing their distance from home.`,trap:`Calling dropna() without assigning back leaves the table unchanged.`,read:[`“74610 -> 70635” is row count before and after.`,`Difference: 3,975 rows dropped.`],remark:`Dropped 3,975 rows with missing values, leaving 70,635.`,howRemark:[`Report before/after.`,`Compute rows dropped.`,`Remind that dropping is irreversible.`]}},"2.1.4":{vi:{think:`Tính lại phần dữ liệu còn lại sau khi bỏ dòng thiếu.`,steps:[`len(df) / 74610 * 100.`,`File của bạn còn 70.635 dòng, khoảng 94,7%.`],code:`print(len(df), round(len(df) / 74610 * 100, 2))`,lotus:`Còn gần 95% nhân viên, đủ nhiều để mô hình tin cậy.`,trap:`Dùng số 74.610 cố định thay vì kích thước ban đầu đã lưu làm sai khi dữ liệu thay đổi. Lưu n_ban_dau trước.`,read:[`Số đầu là số dòng còn lại; số sau là % so với dữ liệu gốc.`],remark:`Còn 70.635 dòng, bằng 94,67% dữ liệu gốc: giữ được gần hết, đủ lớn để huấn luyện.`,howRemark:[`Báo % giữ lại.`,`Kết luận có đủ dữ liệu không.`]},en:{think:`Compute how much data remains after dropping the rows with gaps.`,steps:[`len(df) / 74610 * 100.`,`Your file keeps 70,635 rows, about 94.7%.`],code:`print(len(df), round(len(df) / 74610 * 100, 2))`,lotus:`Nearly 95% of staff remain, plenty for a reliable model.`,trap:`Hard-coding 74,610 breaks if the data changes. Save the original size first.`,read:[`First number is rows left; second is the % of the original.`],remark:`70,635 rows remain, 94.67% of the original: nearly all kept and plenty to train on.`,howRemark:[`Report the % kept.`,`Conclude whether enough data remains.`]}},"2.2":{vi:{think:`Tìm giá trị thừa hoặc lỗi trong cột nhóm: cùng một thứ viết hai kiểu, ký tự lỗi.`,steps:[`Với mỗi cột chữ, in unique() hoặc value_counts().`,`File của bạn: Education Level có chữ lỗi «Bachelorâ€™s Degree», «Masterâ€™s Degree» do mã hóa ký tự (dấu ’ bị vỡ).`,`Sửa bằng replace, hoặc ghi chú nếu bạn giữ nguyên (miễn nhất quán).`],code:`for c in df.select_dtypes(include='object').columns:
    print(c, df[c].unique())
df['Education Level'] = df['Education Level'].str.replace('â€™', "'")`,lotus:`Giống bảng chấm công nơi «Cử nhân» có chỗ viết có dấu, chỗ lỗi font: máy coi là hai loại khác nhau.`,trap:`Nếu sửa ở train mà quên sửa ở validation thì get_dummies tạo hai bộ cột khác nhau.`,read:[`Mỗi dòng là một cột nhóm và các giá trị khác nhau của nó.`,`Tìm giá trị trông lạ hoặc cùng ý hai cách viết.`,`Education Level có ký tự lỗi: Masterâ€™s, Bachelorâ€™s.`],remark:`Các cột nhóm sạch, chỉ trừ lỗi mã hóa ký tự ở Education Level (Masterâ€™s Degree, Bachelorâ€™s Degree). Lỗi chỉ ở nhãn nên không ảnh hưởng mô hình nhưng nên biết khi đọc kết quả.`,howRemark:[`Duyệt từng cột nhóm tìm nhãn bất thường.`,`Nêu lỗi và ảnh hưởng.`,`Nói đã sửa hay giữ.`]},en:{think:`Find redundant or wrong values in categorical columns: the same thing written two ways, broken characters.`,steps:[`For each text column, print unique() or value_counts().`,`Your file: Education Level has garbled text like “Bachelorâ€™s Degree” and “Masterâ€™s Degree” from a character encoding error.`,`Fix with replace, or note it if you keep it as is (as long as it is consistent).`],code:`for c in df.select_dtypes(include='object').columns:
    print(c, df[c].unique())
df['Education Level'] = df['Education Level'].str.replace('â€™', "'")`,lotus:`Like a timesheet where “Bachelor” is written with the right accent in one place and a broken font in another: the machine sees two different groups.`,trap:`Fixing train but not validation makes get_dummies create two different column sets.`,read:[`Each line is a categorical column and its distinct values.`,`Look for odd labels or the same thing written two ways.`,`Education Level has encoding glitches: Masterâ€™s, Bachelorâ€™s.`],remark:`Categorical columns are clean except a character-encoding glitch in Education Level (Masterâ€™s Degree, Bachelorâ€™s Degree). Only the label is affected, so the model is fine, but know it when reading results.`,howRemark:[`Scan each categorical column for odd labels.`,`State the glitch and its effect.`,`Say whether fixed or kept.`]}},"2.3":{vi:{think:`Bỏ cột không giúp dự đoán, ví dụ mã nhân viên.`,steps:[`Employee ID là mã định danh duy nhất, không mang thông tin.`,`df = df.drop(columns=['Employee ID']).`,`Ghi lý do cho từng cột bỏ.`],code:`df = df.drop(columns=['Employee ID'])
df.head()`,lotus:`Số thẻ nhân viên không nói gì về việc họ nghỉ hay ở. Giữ lại chỉ làm mô hình nhớ từng người.`,trap:`Để mã duy nhất trong X làm mô hình học thuộc lòng, nhìn tốt trên train nhưng sai trên dữ liệu mới.`,read:[`(70635, 23) là hình dạng sau khi bỏ Employee ID: số dòng giữ, số cột giảm từ 24 xuống 23.`],remark:`Bỏ cột Employee ID vì nó chỉ là nhãn, không có thông tin để dự đoán; còn 23 cột.`,howRemark:[`Kiểm số cột giảm đúng 1.`,`Nói vì sao bỏ.`]},en:{think:`Drop columns that do not help prediction, such as the employee ID.`,steps:[`Employee ID is a unique identifier carrying no information.`,`df = df.drop(columns=['Employee ID']).`,`Write a reason for each column dropped.`],code:`df = df.drop(columns=['Employee ID'])
df.head()`,lotus:`A staff card number says nothing about whether they leave. Keeping it only lets the model memorise individuals.`,trap:`Leaving a unique ID in X lets the model memorise: good on train, wrong on new data.`,read:[`(70635, 23) is the shape after dropping Employee ID: rows kept, columns 24 → 23.`],remark:`Employee ID dropped because it is only a label with no predictive info; 23 columns remain.`,howRemark:[`Check columns fell by exactly 1.`,`Say why it was dropped.`]}},"3.1":{vi:{think:`Nạp thư viện chia dữ liệu.`,steps:[`from sklearn.model_selection import train_test_split.`],code:`from sklearn.model_selection import train_test_split`,lotus:`Chuẩn bị công cụ để để riêng một phần nhân viên cho việc kiểm tra.`,trap:`Không có.`,read:[`Ô này không in kết quả; việc cần xem là chạy không báo lỗi.`],remark:`Đã nạp công cụ chia dữ liệu train/validation.`,howRemark:[`Nói bước này chuẩn bị gì cho bước sau.`,`Ghi tên biến/đối tượng mới được tạo.`]},en:{think:`Import the split helper.`,steps:[`from sklearn.model_selection import train_test_split.`],code:`from sklearn.model_selection import train_test_split`,lotus:`Get the tool ready to set aside some staff for testing.`,trap:`None.`,read:[`This cell prints nothing; just check it ran without error.`],remark:`The train/validation split tool is loaded.`,howRemark:[`Say what this step prepares for the next.`,`Note the new variable/object created.`]}},"3.2":{vi:{think:`Tách X (các cột đầu vào) và y (Attrition, thứ cần đoán).`,steps:[`y = df['Attrition'].`,`X = df.drop(columns=['Attrition']).`,`Kiểm tra X không còn cột Attrition.`],code:`y = df['Attrition']
X = df.drop(columns=['Attrition'])
print(X.shape, y.shape)`,lotus:`Câu hỏi: nhân viên này sẽ ở lại hay nghỉ? Đáp án đi riêng một bên.`,trap:`Để Attrition lọt vào X làm mô hình đạt độ chính xác gần 100% giả tạo.`,read:[`Hai hình dạng: X (70.635, 22) và y (70.635,).`,`Số dòng hai bên phải bằng nhau.`],remark:`X có 22 cột đầu vào và y là cột Attrition, cùng 70.635 dòng.`,howRemark:[`Kiểm số dòng bằng nhau.`,`Nói y là gì.`]},en:{think:`Separate X (input columns) and y (Attrition, the thing to predict).`,steps:[`y = df['Attrition'].`,`X = df.drop(columns=['Attrition']).`,`Check X no longer has Attrition.`],code:`y = df['Attrition']
X = df.drop(columns=['Attrition'])
print(X.shape, y.shape)`,lotus:`The question: will this staff member stay or leave? The answer goes separately.`,trap:`Letting Attrition slip into X gives a fake near-100% accuracy.`,read:[`Two shapes: X (70,635, 22) and y (70,635,).`,`Row counts must match.`],remark:`X has 22 input columns and y is the Attrition column, both 70,635 rows.`,howRemark:[`Check row counts match.`,`Say what y is.`]}},"3.3":{vi:{think:`Chia 70% train và 30% validation, có random_state để lặp lại được.`,steps:[`train_test_split(X, y, train_size=0.7, random_state=100).`,`Bạn có thể thêm stratify=y để giữ tỷ lệ ở/nghỉ.`,`File của bạn sau khi bỏ dòng thiếu: khoảng 49.400 dòng train và 21.200 validation.`],code:`X_train, X_validation, y_train, y_validation = train_test_split(X, y, train_size=0.7, random_state=100)
print(len(X_train), len(X_validation))`,lotus:`Như để riêng 30% hồ sơ nhân viên để thử dự đoán sau khi học quy luật từ 70% còn lại.`,trap:`Chia xong mới làm EDA và làm sạch tiếp. Làm trước thì thông tin validation đã lọt vào quyết định.`,read:[`Hai số: 49.444 dòng train và 21.191 dòng validation.`,`49.444 / 70.635 ≈ 70%.`],remark:`Chia 70/30: train 49.444 và validation 21.191 dòng.`,howRemark:[`Tính lại tỷ lệ.`,`Nhắc random_state.`]},en:{think:`Split 70% train and 30% validation, with random_state so it is repeatable.`,steps:[`train_test_split(X, y, train_size=0.7, random_state=100).`,`You may add stratify=y to keep the stay/leave ratio.`,`Your file after dropping gaps: about 49,400 train rows and 21,200 validation.`],code:`X_train, X_validation, y_train, y_validation = train_test_split(X, y, train_size=0.7, random_state=100)
print(len(X_train), len(X_validation))`,lotus:`Like keeping 30% of staff records aside to test predictions after learning the rule from the other 70%.`,trap:`Split first, then do EDA and further cleaning. Doing it before lets validation information leak into your decisions.`,read:[`Two numbers: 49,444 train rows and 21,191 validation rows.`,`49,444 / 70,635 ≈ 70%.`],remark:`A 70/30 split: 49,444 train and 21,191 validation rows.`,howRemark:[`Recompute the ratio.`,`Mention random_state.`]}},"4.1.1":{vi:{think:`Chọn các cột số của tập train.`,steps:[`X_train.select_dtypes(include='number').columns.`],code:`num_cols = X_train.select_dtypes(include=['int64', 'float64']).columns
num_cols`,lotus:`Tuổi, lương, thâm niên, số lần thăng chức, số người phụ thuộc, khoảng cách từ nhà.`,trap:`Đừng lấy cột số từ toàn bộ df, hãy lấy từ X_train.`,read:[`Danh sách 7 cột số của tập train.`],remark:`Có 7 cột số: Age, Years at Company, Monthly Income, Number of Promotions, Distance from Home, Number of Dependents, Company Tenure.`,howRemark:[`Đếm cột số.`,`Phân biệt với cột nhóm.`]},en:{think:`Select the numeric columns of the training set.`,steps:[`X_train.select_dtypes(include='number').columns.`],code:`num_cols = X_train.select_dtypes(include=['int64', 'float64']).columns
num_cols`,lotus:`Age, income, tenure, promotions, dependents, distance from home.`,trap:`Do not take numeric columns from the whole df; take them from X_train.`,read:[`The list of 7 numeric columns in train.`],remark:`There are 7 numeric columns: Age, Years at Company, Monthly Income, Number of Promotions, Distance from Home, Number of Dependents, Company Tenure.`,howRemark:[`Count the numeric columns.`,`Distinguish from categorical.`]}},"4.1.2":{vi:{think:`Vẽ phân phối từng cột số để thấy hình dạng và điểm xa.`,steps:[`Histogram từng cột, có thể dùng lưới subplot.`,`Ghi chú cột nào lệch (Monthly Income có max tới 50.030 trong khi trung bình khoảng 7.345; Number of Dependents tới 15).`,`Những đỉnh bất thường gợi ý điểm xa hoặc lỗi nhập.`],code:`X_train[num_cols].hist(bins=30, figsize=(14, 10))
plt.show()`,lotus:`Lương của hầu hết nhân viên quanh 7.000, nhưng vài người cao gấp bảy lần: có thể là quản lý cấp cao hoặc lỗi nhập.`,trap:`Nhìn một biểu đồ không đủ để kết luận lỗi. Đối chiếu với các cột khác như Job Level.`,read:[`Mỗi ô là phân phối của một cột số: thân cao là nhiều nhân viên ở mức đó.`,`Xem cột nào lệch hoặc có đuôi.`],remark:`Các phân phối cho thấy hình dạng từng cột; xem độ lệch và điểm xa để quyết định có cần xử lý không.`,howRemark:[`Mô tả hình dạng từng cột chính.`,`Chỉ ra cột lệch hoặc có điểm xa.`,`Quyết định xử lý.`]},en:{think:`Plot each numeric column's distribution to see shape and outliers.`,steps:[`A histogram per column, using a subplot grid if you like.`,`Note skewed columns (Monthly Income peaks at 50,030 against a mean near 7,345; Number of Dependents reaches 15).`,`Odd spikes suggest outliers or entry errors.`],code:`X_train[num_cols].hist(bins=30, figsize=(14, 10))
plt.show()`,lotus:`Most staff earn around 7,000, but a few earn seven times more: maybe senior managers or entry errors.`,trap:`One chart is not enough to call it an error. Cross-check with other columns like Job Level.`,read:[`Each panel is the distribution of a numeric column: a tall body means many employees at that level.`,`See which columns are skewed or have tails.`],remark:`The distributions show each column's shape; look at skew and outliers to decide if treatment is needed.`,howRemark:[`Describe each main column's shape.`,`Point out skewed columns or outliers.`,`Decide on treatment.`]}},"4.2":{vi:{think:`Tương quan giữa các cột số, để tìm cặp đi cùng nhau mạnh.`,steps:[`corr = X_train[num_cols].corr().`,`sns.heatmap(corr, annot=True, cmap='coolwarm').`,`Cặp có |tương quan| cao (ví dụ Age với Years at Company) cho thấy thông tin trùng nhau, cần nhớ khi chọn biến.`],code:`plt.figure(figsize=(9, 7))
sns.heatmap(X_train[num_cols].corr(), annot=True, fmt='.2f', cmap='coolwarm', center=0)
plt.show()`,lotus:`Tuổi và số năm làm ở Lotus Spa thường tăng cùng nhau: nói gần như cùng một điều.`,trap:`Tương quan chỉ đo quan hệ đường thẳng giữa hai cột số, không nói lên quan hệ với Attrition.`,read:[`Bản đồ nhiệt: mỗi ô là tương quan hai cột số, từ −1 đến 1; đường chéo luôn bằng 1.`,`Tìm ô đậm ngoài đường chéo: cặp đi cùng nhau mạnh.`,`Phần lớn ô gần 0 nghĩa là hai cột gần như độc lập.`],remark:`Chỉ có hai cặp đáng kể: Age – Years at Company (0,54) và Years at Company – Company Tenure (0,44); các cặp còn lại gần 0. Nên chú ý biến chồng lấn khi dựng mô hình (kiểm VIF ở 7.2.4).`,howRemark:[`Nêu cặp tương quan mạnh nhất kèm số.`,`Nói phần lớn cặp độc lập.`,`Nói hệ quả với mô hình (đa cộng tuyến).`]},en:{think:`Correlation among numeric columns, to find strongly related pairs.`,steps:[`corr = X_train[num_cols].corr().`,`sns.heatmap(corr, annot=True, cmap='coolwarm').`,`Pairs with high |correlation| (for example Age and Years at Company) carry overlapping information; remember it when selecting features.`],code:`plt.figure(figsize=(9, 7))
sns.heatmap(X_train[num_cols].corr(), annot=True, fmt='.2f', cmap='coolwarm', center=0)
plt.show()`,lotus:`Age and years at Lotus Spa tend to rise together: saying nearly the same thing.`,trap:`Correlation measures only the straight-line relation between two numeric columns, not the link to Attrition.`,read:[`Heatmap: each cell is a correlation of two numeric columns, −1 to 1; the diagonal is always 1.`,`Find dark off-diagonal cells: strongly related pairs.`,`Most cells near 0 mean the columns are nearly independent.`],remark:`Only two pairs matter: Age – Years at Company (0.54) and Years at Company – Company Tenure (0.44); the rest are near 0. Watch for overlapping variables when modelling (check VIF in 7.2.4).`,howRemark:[`Name the strongest pair with numbers.`,`Say most pairs are independent.`,`State the effect on the model (multicollinearity).`]}},"4.3":{vi:{think:`Kiểm tra cân bằng lớp của biến mục tiêu.`,steps:[`y_train.value_counts(normalize=True).`,`Vẽ bar chart.`,`File của bạn gần cân bằng: ở lại khoảng 52%, nghỉ khoảng 48%.`],code:`print(y_train.value_counts(normalize=True).round(3))
y_train.value_counts().plot(kind='bar')`,lotus:`Gần một nửa nhân viên nghỉ: số rất cao, nhưng đủ cân để dùng độ chính xác mà không sợ mô hình chỉ đoán «ở lại» cho mọi người.`,trap:`Với tập mất cân bằng (95/5) độ chính xác đánh lừa. Ở đây thì không, nhưng vẫn nên xem thêm sensitivity và specificity.`,read:[`Hai số tỷ lệ: Stayed 0,521 và Left 0,479.`,`Gần 50/50 là cân bằng.`],remark:`52,1% ở lại và 47,9% nghỉ: lớp gần cân bằng nên độ chính xác là thước đo hợp lý và không cần xử lý mất cân bằng.`,howRemark:[`Báo tỷ lệ hai lớp.`,`Kết luận cân bằng hay không.`,`Nói hệ quả với cách đo.`]},en:{think:`Check class balance of the target.`,steps:[`y_train.value_counts(normalize=True).`,`Draw a bar chart.`,`Your file is near balanced: about 52% stayed, 48% left.`],code:`print(y_train.value_counts(normalize=True).round(3))
y_train.value_counts().plot(kind='bar')`,lotus:`Almost half of staff leave: a very high number, but balanced enough to use accuracy without fearing the model simply says “stay” for everyone.`,trap:`With an imbalanced set (95/5) accuracy misleads. Not here, but still look at sensitivity and specificity.`,read:[`Two proportions: Stayed 0.521 and Left 0.479.`,`Near 50/50 is balanced.`],remark:`52.1% stayed and 47.9% left: classes are near balanced so accuracy is a fair measure and no imbalance fix is needed.`,howRemark:[`Report both class shares.`,`Conclude balanced or not.`,`State the effect on metrics.`]}},"4.4":{vi:{think:`Phân tích hai biến: mỗi cột nhóm ảnh hưởng thế nào đến Attrition.`,steps:[`Với mỗi cột nhóm vẽ countplot với hue=y_train.`,`Tìm nhóm có tỷ lệ nghỉ khác hẳn mức chung.`,`Ghi vài nhận xét: nhóm nào nghỉ nhiều, nhóm nào ở lại.`],code:`cat_cols = X_train.select_dtypes(include='object').columns
for c in cat_cols:
    sns.countplot(data=X_train.assign(Attrition=y_train), x=c, hue='Attrition')
    plt.xticks(rotation=45); plt.show()`,lotus:`Nếu nhân viên làm thêm giờ nghỉ nhiều hơn rõ rệt so với người không làm thêm, đó là yếu tố chị Lan có thể can thiệp.`,trap:`Đếm số lượng thô dễ đánh lừa khi nhóm có kích thước khác nhau. So tỷ lệ phần trăm trong từng nhóm.`,read:[`Mỗi dòng là một cột nhóm và TỶ LỆ NGHỈ của từng giá trị; đường đỏ trên biểu đồ là mức chung 0,479.`,`Giá trị cao hơn 0,479 là nhóm nghỉ nhiều; thấp hơn là nhóm ở lại nhiều.`,`Chênh càng lớn trong một cột thì cột đó càng quan trọng.`],remark:`Nghỉ nhiều nhất ở nhóm Single (0,671), Entry (0,639) và Work-Life Balance Poor (0,608); nghỉ ít nhất ở Senior (0,202) và Remote Work Yes (0,247). Chênh lớn nhất ở Job Level và Marital Status nên đó là biến đáng giữ.`,howRemark:[`Với mỗi cột chọn giá trị cao nhất và thấp nhất.`,`Nhớ giá trị là tỷ lệ NGHỈ.`,`So với mức chung 0,479.`,`Xếp cột theo độ chênh rồi đối chiếu biến RFE chọn ở 7.1.2.`]},en:{think:`Bivariate analysis: how each categorical column affects Attrition.`,steps:[`For each categorical column draw a countplot with hue=y_train.`,`Find groups whose leave rate differs clearly from the overall rate.`,`Write a few observations: which groups leave more, which stay.`],code:`cat_cols = X_train.select_dtypes(include='object').columns
for c in cat_cols:
    sns.countplot(data=X_train.assign(Attrition=y_train), x=c, hue='Attrition')
    plt.xticks(rotation=45); plt.show()`,lotus:`If staff who work overtime leave clearly more than those who do not, that is a factor chị Lan can act on.`,trap:`Raw counts mislead when groups differ in size. Compare percentages within each group.`,read:[`Each line is a categorical column and the LEAVE RATE of each value; the red line on the chart is the overall 0.479.`,`Above 0.479 is a high-leaving group; below is a staying group.`,`The larger the gap within a column, the more important that column.`],remark:`Highest leaving in Single (0.671), Entry (0.639) and Work-Life Balance Poor (0.608); lowest in Senior (0.202) and Remote Work Yes (0.247). The largest gaps are in Job Level and Marital Status, so those variables are worth keeping.`,howRemark:[`For each column pick the highest and lowest value.`,`Remember the value is the LEAVE rate.`,`Compare with the overall 0.479.`,`Rank columns by gap and cross-check the RFE picks in 7.1.2.`]}},"5.1.1":{vi:{think:`(Tùy chọn) Chọn cột số của validation.`,steps:[`X_validation.select_dtypes(include='number').columns.`],code:`num_cols_v = X_validation.select_dtypes(include=['int64', 'float64']).columns`,lotus:`Cùng danh sách cột số như train.`,trap:`Không dùng validation để chọn cột; chỉ để so sánh.`,read:[`Ô này không in kết quả hoặc hiển thị hình giống train: so với bước tương ứng ở phần 4.`],remark:`Phần tùy chọn: lặp lại bước khám phá trên validation để chắc hai tập giống nhau; nếu hình và số gần train thì chia dữ liệu hợp lý.`,howRemark:[`Nói bước này chuẩn bị gì cho bước sau.`,`Ghi tên biến/đối tượng mới được tạo.`]},en:{think:`(Optional) select numeric columns of validation.`,steps:[`X_validation.select_dtypes(include='number').columns.`],code:`num_cols_v = X_validation.select_dtypes(include=['int64', 'float64']).columns`,lotus:`The same numeric list as train.`,trap:`Do not use validation to choose columns; only to compare.`,read:[`This cell prints nothing or a train-like chart: compare with the matching step in part 4.`],remark:`Optional part: repeats the exploration on validation to confirm the two sets match; if shapes and numbers are close to train, the split is sound.`,howRemark:[`Say what this step prepares for the next.`,`Note the new variable/object created.`]}},"5.1.2":{vi:{think:`(Tùy chọn) Vẽ phân phối cột số ở validation, so với train.`,steps:[`Histogram từng cột.`,`So hình dạng với bước 4.1.2.`],code:`X_validation[num_cols_v].hist(bins=30, figsize=(14, 10))
plt.show()`,lotus:`Hai tập nên có hình dạng gần nhau.`,trap:`Hình khác nhiều giữa hai tập là dấu hiệu chia chưa tốt.`,read:[`Ô này không in kết quả hoặc hiển thị hình giống train: so với bước tương ứng ở phần 4.`],remark:`Phần tùy chọn: lặp lại bước khám phá trên validation để chắc hai tập giống nhau; nếu hình và số gần train thì chia dữ liệu hợp lý.`,howRemark:[`Nói bước này chuẩn bị gì cho bước sau.`,`Ghi tên biến/đối tượng mới được tạo.`]},en:{think:`(Optional) plot numeric distributions in validation, compared to train.`,steps:[`A histogram per column.`,`Compare shape with step 4.1.2.`],code:`X_validation[num_cols_v].hist(bins=30, figsize=(14, 10))
plt.show()`,lotus:`The two sets should look alike.`,trap:`Very different shapes between the two sets signal a poor split.`,read:[`This cell prints nothing or a train-like chart: compare with the matching step in part 4.`],remark:`Optional part: repeats the exploration on validation to confirm the two sets match; if shapes and numbers are close to train, the split is sound.`,howRemark:[`Say what this step prepares for the next.`,`Note the new variable/object created.`]}},"5.2":{vi:{think:`(Tùy chọn) Tương quan cột số ở validation.`,steps:[`Làm giống 4.2 trên validation.`],code:`sns.heatmap(X_validation[num_cols_v].corr(), annot=True, fmt='.2f', cmap='coolwarm', center=0)`,lotus:`Mẫu tương quan nên giống train.`,trap:`Tương quan khác hẳn là dấu hiệu dữ liệu không đồng nhất.`,read:[`Ô này không in kết quả hoặc hiển thị hình giống train: so với bước tương ứng ở phần 4.`],remark:`Phần tùy chọn: lặp lại bước khám phá trên validation để chắc hai tập giống nhau; nếu hình và số gần train thì chia dữ liệu hợp lý.`,howRemark:[`Nói bước này chuẩn bị gì cho bước sau.`,`Ghi tên biến/đối tượng mới được tạo.`]},en:{think:`(Optional) numeric correlation in validation.`,steps:[`Repeat 4.2 on validation.`],code:`sns.heatmap(X_validation[num_cols_v].corr(), annot=True, fmt='.2f', cmap='coolwarm', center=0)`,lotus:`The correlation pattern should resemble train.`,trap:`A very different pattern means inhomogeneous data.`,read:[`This cell prints nothing or a train-like chart: compare with the matching step in part 4.`],remark:`Optional part: repeats the exploration on validation to confirm the two sets match; if shapes and numbers are close to train, the split is sound.`,howRemark:[`Say what this step prepares for the next.`,`Note the new variable/object created.`]}},"5.3":{vi:{think:`(Tùy chọn) Cân bằng lớp ở validation.`,steps:[`y_validation.value_counts(normalize=True).`],code:`print(y_validation.value_counts(normalize=True).round(3))`,lotus:`Tỷ lệ ở/nghỉ ở validation phải gần 52/48 của train.`,trap:`Lệch vài điểm phần trăm là bình thường.`,read:[`Ô này không in kết quả hoặc hiển thị hình giống train: so với bước tương ứng ở phần 4.`],remark:`Phần tùy chọn: lặp lại bước khám phá trên validation để chắc hai tập giống nhau; nếu hình và số gần train thì chia dữ liệu hợp lý.`,howRemark:[`Nói bước này chuẩn bị gì cho bước sau.`,`Ghi tên biến/đối tượng mới được tạo.`]},en:{think:`(Optional) class balance in validation.`,steps:[`y_validation.value_counts(normalize=True).`],code:`print(y_validation.value_counts(normalize=True).round(3))`,lotus:`The stay/leave ratio in validation should be close to train's 52/48.`,trap:`A few percentage points of gap is normal.`,read:[`This cell prints nothing or a train-like chart: compare with the matching step in part 4.`],remark:`Optional part: repeats the exploration on validation to confirm the two sets match; if shapes and numbers are close to train, the split is sound.`,howRemark:[`Say what this step prepares for the next.`,`Note the new variable/object created.`]}},"5.4":{vi:{think:`(Tùy chọn) Phân tích hai biến ở validation.`,steps:[`Làm giống 4.4 trên validation.`],code:`cat_cols = X_validation.select_dtypes(include='object').columns
for c in cat_cols:
    sns.countplot(data=X_validation.assign(Attrition=y_validation), x=c, hue='Attrition')
    plt.xticks(rotation=45); plt.show()`,lotus:`Nhóm nghỉ nhiều ở train cũng nên nghỉ nhiều ở validation.`,trap:`Nếu chiều ngược nhau, mô hình sẽ không khái quát hóa.`,read:[`Ô này không in kết quả hoặc hiển thị hình giống train: so với bước tương ứng ở phần 4.`],remark:`Phần tùy chọn: lặp lại bước khám phá trên validation để chắc hai tập giống nhau; nếu hình và số gần train thì chia dữ liệu hợp lý.`,howRemark:[`Nói bước này chuẩn bị gì cho bước sau.`,`Ghi tên biến/đối tượng mới được tạo.`]},en:{think:`(Optional) bivariate analysis in validation.`,steps:[`Repeat 4.4 on validation.`],code:`cat_cols = X_validation.select_dtypes(include='object').columns
for c in cat_cols:
    sns.countplot(data=X_validation.assign(Attrition=y_validation), x=c, hue='Attrition')
    plt.xticks(rotation=45); plt.show()`,lotus:`Groups that leave a lot in train should also leave a lot in validation.`,trap:`If the direction reverses, the model will not generalise.`,read:[`This cell prints nothing or a train-like chart: compare with the matching step in part 4.`],remark:`Optional part: repeats the exploration on validation to confirm the two sets match; if shapes and numbers are close to train, the split is sound.`,howRemark:[`Say what this step prepares for the next.`,`Note the new variable/object created.`]}},"6.1.1":{vi:{think:`Xác định cột nhóm cần tạo biến giả (dummy).`,steps:[`Lấy các cột kiểu chữ của X_train.`,`Gồm Gender, Job Role, Work-Life Balance, Job Satisfaction, Performance Rating, Overtime, Education Level, Marital Status, Job Level, Company Size, Remote Work, Leadership/Innovation Opportunities, Company Reputation, Employee Recognition.`],code:`cat_cols = X_train.select_dtypes(include=['object']).columns
print(list(cat_cols))`,lotus:`Mọi thông tin chữ trong hồ sơ nhân viên đều phải đổi thành số 0/1 để mô hình dùng được.`,trap:`Cột chữ nhưng có thứ tự (mức hài lòng) vẫn có thể dùng dummy, chỉ là mất thông tin thứ tự.`,read:[`Danh sách 15 cột nhóm cần tạo biến giả.`],remark:`Có 15 cột chữ cần chuyển thành số 0/1 (biến giả) vì mô hình chỉ đọc số.`,howRemark:[`Đếm cột nhóm.`,`Nói vì sao cần biến giả.`]},en:{think:`Identify the categorical columns that need dummy variables.`,steps:[`Take the text-type columns of X_train.`,`They include Gender, Job Role, Work-Life Balance, Job Satisfaction, Performance Rating, Overtime, Education Level, Marital Status, Job Level, Company Size, Remote Work, Leadership/Innovation Opportunities, Company Reputation, Employee Recognition.`],code:`cat_cols = X_train.select_dtypes(include=['object']).columns
print(list(cat_cols))`,lotus:`Every text field in a staff record must become 0/1 numbers before the model can use it.`,trap:`Ordered text columns (satisfaction level) can still use dummies, but the order information is lost.`,read:[`The list of 15 categorical columns needing dummies.`],remark:`There are 15 text columns to convert to 0/1 dummies since the model reads only numbers.`,howRemark:[`Count the categorical columns.`,`Say why dummies are needed.`]}},"6.1.2":{vi:{think:`Tạo biến giả cho X_train.`,steps:[`pd.get_dummies(X_train[cat_cols], drop_first=True).`,`drop_first=True bỏ một mức để tránh trùng lặp (đa cộng tuyến hoàn hảo).`,`Dùng dtype=int để có 0/1 thay vì True/False.`],code:`dummy_train = pd.get_dummies(X_train[cat_cols], drop_first=True, dtype=int)
dummy_train.head()`,lotus:`«Overtime = Yes» thành một cột Overtime_Yes bằng 1 nếu có làm thêm giờ, bằng 0 nếu không.`,trap:`Không có drop_first thì các cột cộng lại luôn bằng 1: mô hình bị trùng lặp.`,read:[`(49444, 34): 34 cột sau khi tạo biến giả cho các cột nhóm.`,`Bảng mẫu là các cột 0/1; ví dụ Gender_Male = 1 là nam.`],remark:`Sau khi tạo biến giả, X_train có 34 cột; mỗi cột 0/1 là một lựa chọn của một nhóm (bỏ một nhóm làm mốc).`,howRemark:[`Báo hình dạng mới.`,`Đọc một cột mẫu.`,`Nêu ý nghĩa nhóm mốc.`]},en:{think:`Create dummy variables for X_train.`,steps:[`pd.get_dummies(X_train[cat_cols], drop_first=True).`,`drop_first=True drops one level to avoid duplication (perfect multicollinearity).`,`Use dtype=int to get 0/1 instead of True/False.`],code:`dummy_train = pd.get_dummies(X_train[cat_cols], drop_first=True, dtype=int)
dummy_train.head()`,lotus:`“Overtime = Yes” becomes a column Overtime_Yes equal to 1 if they work overtime, 0 otherwise.`,trap:`Without drop_first the columns always sum to 1: the model is redundant.`,read:[`(49444, 34): 34 columns after creating dummies.`,`The sample table shows 0/1 columns; e.g. Gender_Male = 1 means male.`],remark:`After dummies X_train has 34 columns; each 0/1 column is one level of a category (one level dropped as baseline).`,howRemark:[`Report the new shape.`,`Read a sample column.`,`State the baseline level idea.`]}},"6.1.3":{vi:{think:`Tạo biến giả cho X_validation, cùng cách với train.`,steps:[`Dùng đúng cat_cols và drop_first như train.`,`Kiểm tra số cột và tên cột bằng nhau, nếu thiếu thì reindex theo cột train.`],code:`dummy_val = pd.get_dummies(X_validation[cat_cols], drop_first=True, dtype=int)
dummy_val = dummy_val.reindex(columns=dummy_train.columns, fill_value=0)`,lotus:`Hai sổ nhân viên phải có cùng bộ cột 0/1.`,trap:`Một mức chỉ xuất hiện ở một tập làm hai bảng khác cột. reindex xử lý việc đó.`,read:[`(21191, 34): cùng số cột với train, nghĩa là biến giả được tạo khớp.`],remark:`Validation có 34 cột giống train, nên mô hình áp dụng được trực tiếp.`,howRemark:[`Kiểm số cột bằng train.`]},en:{think:`Create dummy variables for X_validation the same way as train.`,steps:[`Use exactly the same cat_cols and drop_first as train.`,`Check the column count and names match; if not, reindex to train's columns.`],code:`dummy_val = pd.get_dummies(X_validation[cat_cols], drop_first=True, dtype=int)
dummy_val = dummy_val.reindex(columns=dummy_train.columns, fill_value=0)`,lotus:`The two staff logs must have the same 0/1 columns.`,trap:`A level present in only one set gives mismatched columns. reindex fixes it.`,read:[`(21191, 34): same column count as train, so dummies line up.`],remark:`Validation has the same 34 columns as train, so the model applies directly.`,howRemark:[`Check column count equals train.`]}},"6.1.4":{vi:{think:`Chuyển y_train và y_validation thành DataFrame để tạo dummy cho biến mục tiêu.`,steps:[`y_train.to_frame() hoặc pd.DataFrame(y_train).`,`Làm tương tự cho y_validation.`],code:`y_train_df = pd.DataFrame(y_train)
y_val_df = pd.DataFrame(y_validation)`,lotus:`Cột Attrition chữ «Stayed/Left» cũng cần đổi thành 0/1.`,trap:`Quên chuyển Series thành DataFrame thì get_dummies trả cột sai tên.`,read:[`Ô này không in kết quả; việc cần xem là chạy không báo lỗi.`],remark:`Biến mục tiêu đã chuyển thành bảng để tạo biến giả.`,howRemark:[`Nói bước này chuẩn bị gì cho bước sau.`,`Ghi tên biến/đối tượng mới được tạo.`]},en:{think:`Convert y_train and y_validation to DataFrames to create target dummies.`,steps:[`y_train.to_frame() or pd.DataFrame(y_train).`,`Do the same for y_validation.`],code:`y_train_df = pd.DataFrame(y_train)
y_val_df = pd.DataFrame(y_validation)`,lotus:`The text column Attrition “Stayed/Left” must become 0/1 too.`,trap:`Forgetting to make the Series a DataFrame gives get_dummies wrongly named columns.`,read:[`This cell prints nothing; just check it ran without error.`],remark:`The target is turned into a table to build dummies.`,howRemark:[`Say what this step prepares for the next.`,`Note the new variable/object created.`]}},"6.1.5":{vi:{think:`Tạo biến giả cho biến mục tiêu ở train.`,steps:[`pd.get_dummies(y_train_df, drop_first=True).`,`Cột ra là Attrition_Stayed: 1 = ở lại, 0 = nghỉ.`,`Chú ý ý nghĩa: mô hình sẽ đoán xác suất ở lại.`],code:`y_train_d = pd.get_dummies(y_train_df, drop_first=True, dtype=int)
y_train_d.head()`,lotus:`Mô hình đo xác suất một nhân viên ở lại, nên 1 là ở lại.`,trap:`Nhầm 1 là nghỉ làm đảo nghĩa mọi hệ số.`,read:[`Cột Attrition_Stayed với giá trị trung bình 0,521 là tỷ lệ ở lại, khớp 4.3.`],remark:`Biến mục tiêu thành 0/1 (1 = ở lại), trung bình 0,521 khớp tỷ lệ 52,1% ở 4.3.`,howRemark:[`Đối chiếu với 4.3.`]},en:{think:`Create dummy variables for the target in train.`,steps:[`pd.get_dummies(y_train_df, drop_first=True).`,`The resulting column is Attrition_Stayed: 1 = stayed, 0 = left.`,`Mind the meaning: the model predicts the probability of staying.`],code:`y_train_d = pd.get_dummies(y_train_df, drop_first=True, dtype=int)
y_train_d.head()`,lotus:`The model measures the probability a staff member stays, so 1 means stayed.`,trap:`Mistaking 1 for left flips the meaning of every coefficient.`,read:[`Attrition_Stayed with mean 0.521 is the stayed rate, matching 4.3.`],remark:`The target becomes 0/1 (1 = stayed), mean 0.521 matching the 52.1% in 4.3.`,howRemark:[`Cross-check with 4.3.`]}},"6.1.6":{vi:{think:`Tạo biến giả cho biến mục tiêu ở validation.`,steps:[`Làm như 6.1.5 trên y_val_df.`],code:`y_val_d = pd.get_dummies(y_val_df, drop_first=True, dtype=int)`,lotus:`Cùng cách mã hóa với train.`,trap:`Mã hóa ngược với train làm điểm đánh giá vô nghĩa.`,read:[`Ô này không in kết quả; việc cần xem là chạy không báo lỗi.`],remark:`Tạo biến giả cho biến mục tiêu ở validation, cùng cách với train.`,howRemark:[`Nói bước này chuẩn bị gì cho bước sau.`,`Ghi tên biến/đối tượng mới được tạo.`]},en:{think:`Create dummy variables for the target in validation.`,steps:[`Do as 6.1.5 on y_val_df.`],code:`y_val_d = pd.get_dummies(y_val_df, drop_first=True, dtype=int)`,lotus:`Same encoding as train.`,trap:`Encoding opposite to train makes evaluation meaningless.`,read:[`This cell prints nothing; just check it ran without error.`],remark:`Dummy for the target on validation, same way as train.`,howRemark:[`Say what this step prepares for the next.`,`Note the new variable/object created.`]}},"6.1.7":{vi:{think:`Gộp biến giả vào X và bỏ cột chữ gốc.`,steps:[`pd.concat([X_train, dummy_train], axis=1).`,`drop(columns=cat_cols).`,`Làm cùng cách cho validation. Kiểm tra cùng cột.`],code:`X_train = pd.concat([X_train.drop(columns=cat_cols), dummy_train], axis=1)
X_validation = pd.concat([X_validation.drop(columns=cat_cols), dummy_val], axis=1)
print(X_train.shape, X_validation.shape)`,lotus:`File của bạn có khoảng 41 cột sau bước này.`,trap:`Bỏ cột gốc rồi mới concat thì thiếu cột số.`,read:[`Hai hình dạng: train (49444, 41) và validation (21191, 41).`,`41 cột = 34 biến giả + 7 cột số.`],remark:`Sau khi gộp, cả hai tập có 41 cột (34 biến giả và 7 cột số): sẵn sàng chuẩn hóa và huấn luyện.`,howRemark:[`Kiểm hai tập cùng số cột.`,`Giải thích 41 = 34 + 7.`]},en:{think:`Merge dummies into X and drop the original text columns.`,steps:[`pd.concat([X_train, dummy_train], axis=1).`,`drop(columns=cat_cols).`,`Do the same for validation. Check the columns match.`],code:`X_train = pd.concat([X_train.drop(columns=cat_cols), dummy_train], axis=1)
X_validation = pd.concat([X_validation.drop(columns=cat_cols), dummy_val], axis=1)
print(X_train.shape, X_validation.shape)`,lotus:`Your file has about 41 columns after this step.`,trap:`Dropping the originals before concatenating loses the numeric columns.`,read:[`Two shapes: train (49444, 41) and validation (21191, 41).`,`41 columns = 34 dummies + 7 numeric.`],remark:`After merging both sets have 41 columns (34 dummies + 7 numeric): ready to scale and train.`,howRemark:[`Check both sets have the same columns.`,`Explain 41 = 34 + 7.`]}},"6.2.1":{vi:{think:`Nạp công cụ chuẩn hóa.`,steps:[`from sklearn.preprocessing import StandardScaler.`],code:`from sklearn.preprocessing import StandardScaler`,lotus:`Chuẩn bị đưa tuổi, lương, khoảng cách về cùng thang.`,trap:`Không có.`,read:[`Ô này không in kết quả; việc cần xem là chạy không báo lỗi.`],remark:`Đã nạp công cụ chuẩn hóa.`,howRemark:[`Nói bước này chuẩn bị gì cho bước sau.`,`Ghi tên biến/đối tượng mới được tạo.`]},en:{think:`Import the scaling tool.`,steps:[`from sklearn.preprocessing import StandardScaler.`],code:`from sklearn.preprocessing import StandardScaler`,lotus:`Prepare to bring age, income and distance to one scale.`,trap:`None.`,read:[`This cell prints nothing; just check it ran without error.`],remark:`The scaler is loaded.`,howRemark:[`Say what this step prepares for the next.`,`Note the new variable/object created.`]}},"6.2.2":{vi:{think:`Chuẩn hóa cột số: fit trên train, transform trên cả hai.`,steps:[`scaler = StandardScaler().`,`X_train[num_cols] = scaler.fit_transform(X_train[num_cols]).`,`X_validation[num_cols] = scaler.transform(X_validation[num_cols]) (không fit lại).`],code:`scaler = StandardScaler()
X_train[num_cols] = scaler.fit_transform(X_train[num_cols])
X_validation[num_cols] = scaler.transform(X_validation[num_cols])`,lotus:`Lương tính theo hàng nghìn, số người phụ thuộc tính theo đơn vị: phải về cùng thang thì hệ số so được.`,trap:`fit scaler trên validation làm lộ trung bình và độ lệch chuẩn của validation.`,read:[`Hàng mean gần 0 và hàng std bằng 1 cho cả 7 cột số.`,`Chuẩn hóa fit trên train rồi áp cùng tham số lên validation.`],remark:`Cả 7 cột số có trung bình 0 và độ lệch chuẩn 1 trên train, nên các hệ số về sau so sánh được.`,howRemark:[`Kiểm mean ≈ 0 và std = 1.`,`Nói fit chỉ trên train.`]},en:{think:`Scale numeric columns: fit on train, transform both.`,steps:[`scaler = StandardScaler().`,`X_train[num_cols] = scaler.fit_transform(X_train[num_cols]).`,`X_validation[num_cols] = scaler.transform(X_validation[num_cols]) (do not refit).`],code:`scaler = StandardScaler()
X_train[num_cols] = scaler.fit_transform(X_train[num_cols])
X_validation[num_cols] = scaler.transform(X_validation[num_cols])`,lotus:`Income runs in thousands and dependents in single units: they must share one scale for coefficients to be comparable.`,trap:`Fitting the scaler on validation leaks validation's mean and standard deviation.`,read:[`The mean row near 0 and std row 1 for all 7 numeric columns.`,`Scaler fit on train, same parameters applied to validation.`],remark:`All 7 numeric columns have mean 0 and std 1 on train, so later coefficients are comparable.`,howRemark:[`Check mean ≈ 0 and std = 1.`,`Say fit only on train.`]}},"7.1.1":{vi:{think:`Nạp LogisticRegression và tạo đối tượng.`,steps:[`from sklearn.linear_model import LogisticRegression.`,`logreg = LogisticRegression().`],code:`from sklearn.linear_model import LogisticRegression
logreg = LogisticRegression(max_iter=1000)`,lotus:`Mô hình sẽ đoán xác suất một nhân viên ở lại.`,trap:`Quên max_iter có thể gặp cảnh báo chưa hội tụ.`,read:[`Ô này không in kết quả; việc cần xem là chạy không báo lỗi.`],remark:`Đã tạo đối tượng LogisticRegression để RFE dùng.`,howRemark:[`Nói bước này chuẩn bị gì cho bước sau.`,`Ghi tên biến/đối tượng mới được tạo.`]},en:{think:`Import LogisticRegression and create the object.`,steps:[`from sklearn.linear_model import LogisticRegression.`,`logreg = LogisticRegression().`],code:`from sklearn.linear_model import LogisticRegression
logreg = LogisticRegression(max_iter=1000)`,lotus:`The model will predict the probability a staff member stays.`,trap:`Forgetting max_iter may produce a not-converged warning.`,read:[`This cell prints nothing; just check it ran without error.`],remark:`The LogisticRegression object is created for RFE to use.`,howRemark:[`Say what this step prepares for the next.`,`Note the new variable/object created.`]}},"7.1.2":{vi:{think:`Dùng RFE chọn 15 biến quan trọng nhất.`,steps:[`from sklearn.feature_selection import RFE.`,`rfe = RFE(estimator=logreg, n_features_to_select=15).`,`rfe.fit(X_train, y_train_d.values.ravel()).`,`In biến được chọn bằng rfe.support_.`],code:`from sklearn.feature_selection import RFE
rfe = RFE(estimator=logreg, n_features_to_select=15)
rfe = rfe.fit(X_train, y_train_d.values.ravel())
X_train.columns[rfe.support_]`,lotus:`Từ 41 cột còn 15. Với file của bạn, các biến thường được chọn gồm Job Level, Marital Status_Single, Remote Work_Yes, Work-Life Balance, Education Level_PhD, Job Satisfaction, Overtime_Yes.`,trap:`y phải là mảng một chiều (ravel); đưa vào DataFrame cột báo cảnh báo hình dạng.`,read:[`Danh sách 15 biến RFE giữ lại, đều là cột 0/1.`,`Đây là những biến được cho là hữu ích nhất để dự đoán.`],remark:`RFE chọn 15 biến gồm Overtime_Yes, Remote Work_Yes, Marital Status_Single, Job Level (Mid, Senior), Work-Life Balance (Fair, Poor)...; khớp các nhóm có chênh lớn ở 4.4.`,howRemark:[`Nhóm các biến theo chủ đề.`,`Đối chiếu với 4.4.`,`Nói biến nào bất ngờ.`]},en:{think:`Use RFE to choose the 15 most important features.`,steps:[`from sklearn.feature_selection import RFE.`,`rfe = RFE(estimator=logreg, n_features_to_select=15).`,`rfe.fit(X_train, y_train_d.values.ravel()).`,`Print the chosen features via rfe.support_.`],code:`from sklearn.feature_selection import RFE
rfe = RFE(estimator=logreg, n_features_to_select=15)
rfe = rfe.fit(X_train, y_train_d.values.ravel())
X_train.columns[rfe.support_]`,lotus:`From 41 columns down to 15. In your file the usual picks include Job Level, Marital Status_Single, Remote Work_Yes, Work-Life Balance, Education Level_PhD, Job Satisfaction, Overtime_Yes.`,trap:`y must be one-dimensional (ravel); passing a single-column DataFrame raises a shape warning.`,read:[`The list of 15 variables RFE kept, all 0/1 columns.`,`These are judged most useful for prediction.`],remark:`RFE picked 15 variables including Overtime_Yes, Remote Work_Yes, Marital Status_Single, Job Level (Mid, Senior), Work-Life Balance (Fair, Poor)...; consistent with the big gaps in 4.4.`,howRemark:[`Group the variables by theme.`,`Cross-check with 4.4.`,`Say which are surprising.`]}},"7.1.3":{vi:{think:`Lưu danh sách biến được chọn vào col.`,steps:[`col = X_train.columns[rfe.support_].`],code:`col = X_train.columns[rfe.support_]
list(col)`,lotus:`Đây là 15 yếu tố mô hình sẽ dùng để đoán nhân viên ở hay nghỉ.`,trap:`Không có.`,read:[`Ô này không in kết quả; việc cần xem là chạy không báo lỗi.`],remark:`Danh sách 15 biến đã được lưu vào col để dùng ở các bước sau.`,howRemark:[`Nói bước này chuẩn bị gì cho bước sau.`,`Ghi tên biến/đối tượng mới được tạo.`]},en:{think:`Store the selected features in col.`,steps:[`col = X_train.columns[rfe.support_].`],code:`col = X_train.columns[rfe.support_]
list(col)`,lotus:`These are the 15 factors the model will use to guess stay or leave.`,trap:`None.`,read:[`This cell prints nothing; just check it ran without error.`],remark:`The 15 variables are saved in col for later steps.`,howRemark:[`Say what this step prepares for the next.`,`Note the new variable/object created.`]}},"7.2.1":{vi:{think:`Lấy đúng 15 cột đã chọn ở train.`,steps:[`X_train_sm = X_train[col].`],code:`X_train_rfe = X_train[col]
X_train_rfe.head()`,lotus:`Chỉ giữ 15 yếu tố đã được chọn.`,trap:`Chọn nhầm cột (từ validation) làm mô hình lệch.`,read:[`Ô này không in kết quả; việc cần xem là chạy không báo lỗi.`],remark:`Lấy đúng 15 cột đã chọn của train.`,howRemark:[`Nói bước này chuẩn bị gì cho bước sau.`,`Ghi tên biến/đối tượng mới được tạo.`]},en:{think:`Take exactly the 15 selected columns from train.`,steps:[`X_train_sm = X_train[col].`],code:`X_train_rfe = X_train[col]
X_train_rfe.head()`,lotus:`Keep only the 15 chosen factors.`,trap:`Selecting from validation by mistake skews the model.`,read:[`This cell prints nothing; just check it ran without error.`],remark:`Take exactly the 15 chosen columns of train.`,howRemark:[`Say what this step prepares for the next.`,`Note the new variable/object created.`]}},"7.2.2":{vi:{think:`Thêm hằng số (intercept) vì statsmodels không tự thêm.`,steps:[`import statsmodels.api as sm.`,`X_train_sm = sm.add_constant(X_train_rfe).`],code:`import statsmodels.api as sm
X_train_sm = sm.add_constant(X_train_rfe)`,lotus:`Hằng số là xác suất cơ bản khi mọi yếu tố ở mức gốc.`,trap:`Quên add_constant ép đường qua gốc, hệ số sai.`,read:[`Ô này không in kết quả; việc cần xem là chạy không báo lỗi.`],remark:`Đã thêm hằng số (intercept) vì statsmodels không tự thêm.`,howRemark:[`Nói bước này chuẩn bị gì cho bước sau.`,`Ghi tên biến/đối tượng mới được tạo.`]},en:{think:`Add the constant (intercept) since statsmodels does not.`,steps:[`import statsmodels.api as sm.`,`X_train_sm = sm.add_constant(X_train_rfe).`],code:`import statsmodels.api as sm
X_train_sm = sm.add_constant(X_train_rfe)`,lotus:`The constant is the baseline probability when every factor is at its reference.`,trap:`Forgetting add_constant forces the line through the origin, wrong coefficients.`,read:[`This cell prints nothing; just check it ran without error.`],remark:`Added the constant (intercept) since statsmodels does not.`,howRemark:[`Say what this step prepares for the next.`,`Note the new variable/object created.`]}},"7.2.3":{vi:{think:`Huấn luyện hồi quy logistic bằng statsmodels GLM và đọc bảng kết quả.`,steps:[`sm.GLM(y_train_d, X_train_sm, family=sm.families.Binomial()).fit().`,`print(model.summary()).`,`Đọc cột coef (dấu và độ lớn) và P>|z| (nhỏ hơn 0,05 là có ý nghĩa).`],code:`logm = sm.GLM(y_train_d, X_train_sm, family=sm.families.Binomial())
res = logm.fit()
print(res.summary())`,lotus:`Hệ số dương làm tăng khả năng ở lại, âm làm giảm. Ví dụ Overtime_Yes âm: làm thêm giờ làm nhân viên dễ nghỉ hơn.`,trap:`Đọc coef mà bỏ qua p-value: biến p cao có thể chỉ là nhiễu.`,read:[`Mỗi hàng là một biến: coef là hệ số, P>|z| là mức ý nghĩa.`,`coef dương làm tăng xác suất ở lại, coef âm làm giảm.`,`P nhỏ hơn 0,05 là biến có ý nghĩa thống kê.`],remark:`Hệ số cho biết biến nào đẩy khả năng ở lại lên hoặc xuống; những biến có P < 0,05 giữ lại. Hệ số của Marital Status_Single, Job Level_Senior hay Remote Work_Yes cho biết biến đó tăng hay giảm khả năng ở lại; đọc dấu rồi đối chiếu với 4.4.`,howRemark:[`Chọn 3 biến có |coef| lớn nhất.`,`Nói dấu nghĩa là gì.`,`Kiểm P < 0,05.`,`Dịch sang ngôn ngữ kinh doanh.`]},en:{think:`Train the logistic regression with statsmodels GLM and read the summary.`,steps:[`sm.GLM(y_train_d, X_train_sm, family=sm.families.Binomial()).fit().`,`print(model.summary()).`,`Read coef (sign and size) and P>|z| (below 0.05 is significant).`],code:`logm = sm.GLM(y_train_d, X_train_sm, family=sm.families.Binomial())
res = logm.fit()
print(res.summary())`,lotus:`A positive coefficient raises the chance of staying, a negative one lowers it. For example a negative Overtime_Yes: overtime makes staff more likely to leave.`,trap:`Reading coef but skipping p-values: a high-p feature may just be noise.`,read:[`Each row is a variable: coef is the coefficient, P>|z| the significance.`,`Positive coef raises the chance of staying, negative lowers it.`,`P below 0.05 means statistically significant.`],remark:`Coefficients show which variables push staying up or down; keep those with P < 0.05. E.g. Overtime_Yes and Marital Status_Single push people toward leaving.`,howRemark:[`Pick the 3 variables with largest |coef|.`,`Say what the sign means.`,`Check P < 0.05.`,`Translate to business language.`]}},"7.2.4":{vi:{think:`Tính VIF để phát hiện biến chồng lấn.`,steps:[`from statsmodels.stats.outliers_influence import variance_inflation_factor.`,`VIF cho từng cột của X_train_rfe.`,`VIF dưới 5 là ổn; cao hơn thì cân nhắc bỏ một trong hai biến chồng nhau.`],code:`from statsmodels.stats.outliers_influence import variance_inflation_factor
vif = pd.DataFrame({'Feature': X_train_rfe.columns,
    'VIF': [variance_inflation_factor(X_train_rfe.values, i) for i in range(X_train_rfe.shape[1])]})
vif.sort_values('VIF', ascending=False)`,lotus:`VIF cao nghĩa hai yếu tố nói gần như cùng một điều, như tuổi và số năm làm.`,trap:`Tính VIF trên X_train_sm có hằng số cho VIF của hằng số rất lớn. Dùng bảng không có hằng số.`,read:[`Mỗi dòng là VIF của một biến.`,`VIF gần 1 là không chồng lấn; trên 5 là đáng lo.`],remark:`VIF cao nhất là 1,20 (Job Level), tất cả gần 1 nên các biến không chồng lấn đáng kể và hệ số đáng tin.`,howRemark:[`Nêu VIF lớn nhất.`,`So với ngưỡng 5.`,`Kết luận.`]},en:{think:`Compute VIF to detect overlapping features.`,steps:[`from statsmodels.stats.outliers_influence import variance_inflation_factor.`,`VIF for each column of X_train_rfe.`,`VIF below 5 is fine; higher means consider dropping one of two overlapping features.`],code:`from statsmodels.stats.outliers_influence import variance_inflation_factor
vif = pd.DataFrame({'Feature': X_train_rfe.columns,
    'VIF': [variance_inflation_factor(X_train_rfe.values, i) for i in range(X_train_rfe.shape[1])]})
vif.sort_values('VIF', ascending=False)`,lotus:`A high VIF means two factors say almost the same thing, like age and years of service.`,trap:`Computing VIF on X_train_sm with the constant gives a huge VIF for the constant. Use the table without it.`,read:[`Each line is a variable's VIF.`,`VIF near 1 means no overlap; above 5 is worrying.`],remark:`The highest VIF is 1.20 (Job Level), all near 1, so variables do not overlap much and coefficients are trustworthy.`,howRemark:[`State the largest VIF.`,`Compare with the threshold 5.`,`Conclude.`]}},"7.2.5":{vi:{think:`Dự đoán xác suất ở lại trên tập train.`,steps:[`res.predict(X_train_sm).`],code:`y_train_pred = res.predict(X_train_sm)
y_train_pred.head()`,lotus:`Mỗi nhân viên có một xác suất ở lại giữa 0 và 1.`,trap:`Đưa vào X thiếu hằng số báo lỗi kích thước.`,read:[`Ô này không in kết quả; việc cần xem là chạy không báo lỗi.`],remark:`Đã dự đoán xác suất ở lại cho từng nhân viên train.`,howRemark:[`Nói bước này chuẩn bị gì cho bước sau.`,`Ghi tên biến/đối tượng mới được tạo.`]},en:{think:`Predict the probability of staying on the training set.`,steps:[`res.predict(X_train_sm).`],code:`y_train_pred = res.predict(X_train_sm)
y_train_pred.head()`,lotus:`Each staff member gets a stay probability between 0 and 1.`,trap:`Passing X without the constant raises a size error.`,read:[`This cell prints nothing; just check it ran without error.`],remark:`Predicted stay probability for each train employee.`,howRemark:[`Say what this step prepares for the next.`,`Note the new variable/object created.`]}},"7.2.6":{vi:{think:`Đổi kết quả dự đoán thành mảng phẳng.`,steps:[`y_train_pred.values.reshape(-1).`],code:`y_train_pred_final = y_train_pred.values.reshape(-1)`,lotus:`Chỉ là định dạng lại.`,trap:`Mảng 2 chiều khi tạo DataFrame báo lỗi.`,read:[`Ô này không in kết quả; việc cần xem là chạy không báo lỗi.`],remark:`Đổi dự đoán thành mảng phẳng cho dễ ghép bảng.`,howRemark:[`Nói bước này chuẩn bị gì cho bước sau.`,`Ghi tên biến/đối tượng mới được tạo.`]},en:{think:`Flatten the prediction into an array.`,steps:[`y_train_pred.values.reshape(-1).`],code:`y_train_pred_final = y_train_pred.values.reshape(-1)`,lotus:`Just a reshape.`,trap:`A 2D array raises an error when building the DataFrame.`,read:[`This cell prints nothing; just check it ran without error.`],remark:`Flattened the predictions to build a table.`,howRemark:[`Say what this step prepares for the next.`,`Note the new variable/object created.`]}},"7.2.7":{vi:{think:`Tạo bảng gồm giá trị thực và xác suất dự đoán.`,steps:[`DataFrame có cột Stayed (thực) và Stayed_Prob (dự đoán).`],code:`y_train_pred_df = pd.DataFrame({'Stayed': y_train_d.values.reshape(-1), 'Stayed_Prob': y_train_pred_final})
y_train_pred_df.head()`,lotus:`Mỗi dòng: người đó thực ra ở hay nghỉ, và mô hình cho bao nhiêu phần trăm ở.`,trap:`Hai mảng khác độ dài báo lỗi.`,read:[`Ô này không in kết quả; việc cần xem là chạy không báo lỗi.`],remark:`Đã tạo bảng đặt giá trị thực cạnh xác suất dự đoán.`,howRemark:[`Nói bước này chuẩn bị gì cho bước sau.`,`Ghi tên biến/đối tượng mới được tạo.`]},en:{think:`Build a table of actual values and predicted probabilities.`,steps:[`A DataFrame with Stayed (actual) and Stayed_Prob (predicted).`],code:`y_train_pred_df = pd.DataFrame({'Stayed': y_train_d.values.reshape(-1), 'Stayed_Prob': y_train_pred_final})
y_train_pred_df.head()`,lotus:`Each row: whether the person actually stayed or left, and the percentage the model gave to staying.`,trap:`Arrays of different length raise an error.`,read:[`This cell prints nothing; just check it ran without error.`],remark:`Built a table with actual values beside predicted probabilities.`,howRemark:[`Say what this step prepares for the next.`,`Note the new variable/object created.`]}},"7.2.8":{vi:{think:`Tạo cột Predicted: 1 nếu xác suất lớn hơn 0,5.`,steps:[`np.where(xác suất > 0.5, 1, 0).`],code:`y_train_pred_df['Predicted'] = y_train_pred_df['Stayed_Prob'].map(lambda x: 1 if x > 0.5 else 0)
y_train_pred_df.head()`,lotus:`Ngưỡng 0,5: trên 50% thì đoán là ở lại.`,trap:`0,5 chỉ là mặc định, bước 7.3 sẽ tìm ngưỡng tốt hơn.`,read:[`Cột Stayed là thực tế, Stayed_Prob là xác suất, Predicted là đoán 1 nếu xác suất > 0,5.`,`So Stayed với Predicted để thấy dòng nào đoán đúng.`],remark:`Ví dụ dòng 1 có xác suất 0,943 và đoán đúng ở lại; dòng 2 thực tế nghỉ nhưng xác suất 0,768 nên đoán sai. Đây là cách mô hình ra quyết định theo ngưỡng 0,5.`,howRemark:[`Chọn 2 dòng: một đúng, một sai.`,`Nói vì sao sai (xác suất qua ngưỡng).`,`Nhắc ngưỡng chỉnh được.`]},en:{think:`Create Predicted: 1 if probability is above 0.5.`,steps:[`np.where(probability > 0.5, 1, 0).`],code:`y_train_pred_df['Predicted'] = y_train_pred_df['Stayed_Prob'].map(lambda x: 1 if x > 0.5 else 0)
y_train_pred_df.head()`,lotus:`Threshold 0.5: above 50% predict stay.`,trap:`0.5 is only a default; step 7.3 finds a better one.`,read:[`Stayed is actual, Stayed_Prob is probability, Predicted is 1 if probability > 0.5.`,`Compare Stayed with Predicted to see which rows were right.`],remark:`E.g. row 1 has probability 0.943 and correctly predicts stay; row 2 actually left but probability 0.768 so it is wrong. This is how the model decides by a 0.5 threshold.`,howRemark:[`Pick 2 rows: one right, one wrong.`,`Say why wrong (probability crossed the threshold).`,`Remind the threshold is adjustable.`]}},"7.2.9":{vi:{think:`Tính độ chính xác trên train.`,steps:[`metrics.accuracy_score(Stayed, Predicted).`],code:`from sklearn import metrics
metrics.accuracy_score(y_train_pred_df['Stayed'], y_train_pred_df['Predicted'])`,lotus:`Với file của bạn kết quả khoảng 74%: ba trong bốn lần đoán đúng.`,trap:`Độ chính xác đơn độc không nói kiểu sai nào. Xem bước tiếp.`,read:[`Một con số: tỷ lệ dự đoán đúng trên train.`],remark:`Độ chính xác train là 0,7387: đúng khoảng 74% nhân viên.`,howRemark:[`Báo số.`,`So với đoán bừa 52% (lớp lớn nhất).`]},en:{think:`Compute accuracy on train.`,steps:[`metrics.accuracy_score(Stayed, Predicted).`],code:`from sklearn import metrics
metrics.accuracy_score(y_train_pred_df['Stayed'], y_train_pred_df['Predicted'])`,lotus:`With your file the result is about 74%: three in four guesses are right.`,trap:`Accuracy alone does not say which errors. See the next step.`,read:[`One number: share predicted correctly on train.`],remark:`Train accuracy is 0.7387: about 74% of employees are right.`,howRemark:[`Report the number.`,`Compare with guessing at 52% (the biggest class).`]}},"7.2.10":{vi:{think:`Lập ma trận nhầm lẫn (confusion matrix).`,steps:[`metrics.confusion_matrix(Stayed, Predicted).`],code:`confusion = metrics.confusion_matrix(y_train_pred_df['Stayed'], y_train_pred_df['Predicted'])
print(confusion)`,lotus:`Với file của bạn khoảng 17.100 nghỉ đoán đúng, 19.400 ở đoán đúng, 6.600 nghỉ bị đoán thành ở, 6.400 ở bị đoán thành nghỉ.`,trap:`Thứ tự hàng và cột: hàng là thực tế, cột là dự đoán.`,read:[`Hàng là thực tế, cột là dự đoán.`,`Đường chéo (17.104 và 19.422) là đoán đúng; hai ô còn lại (6.559 và 6.359) là đoán sai.`],remark:`Đoán đúng 36.526 trên 49.444, sai 12.918. Hai loại sai gần bằng nhau (6.559 và 6.359) nên mô hình không nghiêng hẳn về một phía.`,howRemark:[`Cộng đường chéo và ô sai.`,`Nói loại sai nào nặng hơn trong bài toán này.`,`Liên hệ độ chính xác 0,7387.`]},en:{think:`Build the confusion matrix.`,steps:[`metrics.confusion_matrix(Stayed, Predicted).`],code:`confusion = metrics.confusion_matrix(y_train_pred_df['Stayed'], y_train_pred_df['Predicted'])
print(confusion)`,lotus:`In your file roughly 17,100 leavers correct, 19,400 stayers correct, 6,600 leavers guessed as staying, 6,400 stayers guessed as leaving.`,trap:`Order: rows are actual, columns are predicted.`,read:[`Rows are actual, columns predicted.`,`The diagonal (17,104 and 19,422) is right; the other two (6,559 and 6,359) wrong.`],remark:`Right on 36,526 of 49,444, wrong on 12,918. The two error types are similar (6,559 and 6,359), so the model does not lean one way.`,howRemark:[`Add the diagonal and the error cells.`,`Say which error is worse here.`,`Tie to the 0.7387 accuracy.`]}},"7.2.11":{vi:{think:`Đặt tên cho bốn ô: TP, TN, FP, FN.`,steps:[`TP: thực ở, đoán ở. TN: thực nghỉ, đoán nghỉ.`,`FP: thực nghỉ, đoán ở. FN: thực ở, đoán nghỉ.`,`Lấy từ confusion[hàng, cột].`],code:`TN, FP, FN, TP = confusion.ravel()
print(TP, TN, FP, FN)`,lotus:`FP là nguy hiểm nhất: nhân viên sắp nghỉ mà mô hình nói sẽ ở, chị Lan không kịp giữ.`,trap:`Nhầm ô nào là FP, FN đảo ngược mọi chỉ số.`,read:[`Bốn số TP, TN, FP, FN lấy từ ma trận nhầm lẫn.`],remark:`TP 19.422 (đoán ở và đúng), TN 17.104 (đoán nghỉ và đúng), FP 6.559, FN 6.359.`,howRemark:[`Gọi tên bốn ô.`,`Định nghĩa Positive (ở đây là ở lại).`]},en:{think:`Name the four cells: TP, TN, FP, FN.`,steps:[`TP: actually stayed, guessed stayed. TN: actually left, guessed left.`,`FP: actually left, guessed stayed. FN: actually stayed, guessed left.`,`Read from confusion[row, col].`],code:`TN, FP, FN, TP = confusion.ravel()
print(TP, TN, FP, FN)`,lotus:`FP is the most dangerous: a staff member about to leave but the model says stay, chị Lan has no time to keep them.`,trap:`Confusing which cell is FP or FN reverses every metric.`,read:[`Four numbers TP, TN, FP, FN from the confusion matrix.`],remark:`TP 19,422 (predict stay and right), TN 17,104 (predict leave and right), FP 6,559, FN 6,359.`,howRemark:[`Name the four cells.`,`Define Positive (here: stayed).`]}},"7.2.12":{vi:{think:`Tính sensitivity (độ nhạy) và specificity (độ đặc hiệu).`,steps:[`Sensitivity = TP / (TP + FN): trong số người ở lại thật, đoán đúng bao nhiêu.`,`Specificity = TN / (TN + FP): trong số người nghỉ thật, đoán đúng bao nhiêu.`],code:`sensitivity = TP / (TP + FN)
specificity = TN / (TN + FP)
print(round(sensitivity, 3), round(specificity, 3))`,lotus:`Specificity cho biết mô hình bắt được bao nhiêu phần người sắp nghỉ.`,trap:`Đổi chỗ công thức hai chỉ số cho kết quả đảo.`,read:[`sensitivity là tỷ lệ người ở lại được đoán đúng; specificity là tỷ lệ người nghỉ được đoán đúng.`],remark:`Sensitivity 0,753 và specificity 0,723: mô hình bắt người ở lại tốt hơn một chút so với người nghỉ.`,howRemark:[`Báo hai số và định nghĩa.`,`So hai số.`,`Nói hệ quả.`]},en:{think:`Compute sensitivity and specificity.`,steps:[`Sensitivity = TP / (TP + FN): of those who really stay, how many are caught.`,`Specificity = TN / (TN + FP): of those who really leave, how many are caught.`],code:`sensitivity = TP / (TP + FN)
specificity = TN / (TN + FP)
print(round(sensitivity, 3), round(specificity, 3))`,lotus:`Specificity tells how much of those about to leave the model catches.`,trap:`Swapping the two formulas inverts the result.`,read:[`sensitivity is the share of stayers predicted right; specificity the share of leavers predicted right.`],remark:`Sensitivity 0.753 and specificity 0.723: the model catches stayers slightly better than leavers.`,howRemark:[`Report both with definitions.`,`Compare them.`,`State the consequence.`]}},"7.2.13":{vi:{think:`Tính precision và recall.`,steps:[`Precision = TP / (TP + FP): trong số đoán ở, bao nhiêu thật sự ở.`,`Recall = TP / (TP + FN), bằng sensitivity.`],code:`precision = TP / (TP + FP)
recall = TP / (TP + FN)
print(round(precision, 3), round(recall, 3))`,lotus:`Precision cho biết khi mô hình nói «người này sẽ ở», đúng bao nhiêu phần.`,trap:`Recall và sensitivity là một thứ, đừng tính hai kết quả khác nhau.`,read:[`precision là trong số đoán «ở lại», bao nhiêu thật sự ở lại; recall bằng sensitivity.`],remark:`Precision 0,748 và recall 0,753: khi mô hình nói «ở lại», đúng khoảng 75%.`,howRemark:[`Báo hai số.`,`Giải thích bằng câu thường.`]},en:{think:`Compute precision and recall.`,steps:[`Precision = TP / (TP + FP): of those guessed to stay, how many really stay.`,`Recall = TP / (TP + FN), equal to sensitivity.`],code:`precision = TP / (TP + FP)
recall = TP / (TP + FN)
print(round(precision, 3), round(recall, 3))`,lotus:`Precision tells how often “this person will stay” is right.`,trap:`Recall and sensitivity are the same thing; do not compute two different results.`,read:[`precision is among predicted “stay”, how many truly stayed; recall equals sensitivity.`],remark:`Precision 0.748 and recall 0.753: when the model says “stay”, it is right about 75% of the time.`,howRemark:[`Report both numbers.`,`Explain in plain words.`]}},"7.3.1":{vi:{think:`Vẽ đường ROC và tính AUC.`,steps:[`metrics.roc_curve(Stayed, Stayed_Prob, drop_intermediate=False).`,`Vẽ FPR theo TPR, thêm đường chéo.`,`AUC càng gần 1 càng tốt, 0,5 là đoán bừa.`],code:`def draw_roc(actual, probs):
    fpr, tpr, thr = metrics.roc_curve(actual, probs, drop_intermediate=False)
    auc = metrics.roc_auc_score(actual, probs)
    plt.plot(fpr, tpr, label=f'AUC = {auc:.2f}'); plt.plot([0, 1], [0, 1], 'k--')
    plt.xlabel('FPR'); plt.ylabel('TPR'); plt.legend(); plt.show()
draw_roc(y_train_pred_df['Stayed'], y_train_pred_df['Stayed_Prob'])`,lotus:`Đường càng sát góc trên trái thì mô hình càng phân biệt tốt người ở và người nghỉ.`,trap:`Đường sát đường chéo thì không tốt hơn đoán bằng đồng xu.`,read:[`Đường ROC: trục ngang là tỉ lệ báo nhầm, trục dọc là tỉ lệ bắt đúng; đường càng ôm góc trên trái càng tốt.`,`AUC là diện tích dưới đường: 0,5 là đoán bừa, 1 là hoàn hảo.`],remark:`Đường ROC nằm hẳn trên đường chéo, nghĩa là mô hình tốt hơn đoán bừa; AUC cho một con số tóm tắt khả năng phân biệt.`,howRemark:[`Mô tả hình đường ROC.`,`Báo AUC.`,`So với 0,5.`]},en:{think:`Plot the ROC curve and compute AUC.`,steps:[`metrics.roc_curve(Stayed, Stayed_Prob, drop_intermediate=False).`,`Plot FPR against TPR, add the diagonal.`,`AUC closer to 1 is better, 0.5 is guessing.`],code:`def draw_roc(actual, probs):
    fpr, tpr, thr = metrics.roc_curve(actual, probs, drop_intermediate=False)
    auc = metrics.roc_auc_score(actual, probs)
    plt.plot(fpr, tpr, label=f'AUC = {auc:.2f}'); plt.plot([0, 1], [0, 1], 'k--')
    plt.xlabel('FPR'); plt.ylabel('TPR'); plt.legend(); plt.show()
draw_roc(y_train_pred_df['Stayed'], y_train_pred_df['Stayed_Prob'])`,lotus:`The closer the curve hugs the top-left, the better the model separates stayers from leavers.`,trap:`A curve near the diagonal is no better than a coin flip.`,read:[`ROC curve: x axis is false-alarm rate, y axis is true-catch rate; the closer to the top-left corner the better.`,`AUC is the area under it: 0.5 is guessing, 1 is perfect.`],remark:`The ROC curve sits well above the diagonal, so the model beats guessing; AUC summarises its discrimination in one number.`,howRemark:[`Describe the ROC shape.`,`Report AUC.`,`Compare with 0.5.`]}},"7.3.2":{vi:{think:`Dự đoán ở nhiều ngưỡng xác suất từ 0,0 đến 0,9.`,steps:[`Vòng lặp i trong [0.0, 0.1, ..., 0.9].`,`Mỗi lần tạo một cột Stayed_Prob > i.`],code:`numbers = [float(x) / 10 for x in range(10)]
for i in numbers:
    y_train_pred_df[i] = y_train_pred_df['Stayed_Prob'].map(lambda x: 1 if x > i else 0)
y_train_pred_df.head()`,lotus:`Thử từng ngưỡng: đoán «ở» khi trên 10%, 20%, ... để xem ngưỡng nào hợp lý.`,trap:`Không có.`,read:[`Ô này không in kết quả; việc cần xem là chạy không báo lỗi.`],remark:`Đã dự đoán ở nhiều ngưỡng từ 0,0 đến 0,9.`,howRemark:[`Nói bước này chuẩn bị gì cho bước sau.`,`Ghi tên biến/đối tượng mới được tạo.`]},en:{think:`Predict at several probability cutoffs from 0.0 to 0.9.`,steps:[`Loop i over [0.0, 0.1, ..., 0.9].`,`Each time create a column Stayed_Prob > i.`],code:`numbers = [float(x) / 10 for x in range(10)]
for i in numbers:
    y_train_pred_df[i] = y_train_pred_df['Stayed_Prob'].map(lambda x: 1 if x > i else 0)
y_train_pred_df.head()`,lotus:`Try each threshold: predict “stay” when above 10%, 20%, ... to see which is sensible.`,trap:`None.`,read:[`This cell prints nothing; just check it ran without error.`],remark:`Predicted at many thresholds from 0.0 to 0.9.`,howRemark:[`Say what this step prepares for the next.`,`Note the new variable/object created.`]}},"7.3.3":{vi:{think:`Vẽ độ chính xác, sensitivity, specificity theo từng ngưỡng để chọn ngưỡng tối ưu.`,steps:[`Tính ba chỉ số cho từng cột ngưỡng.`,`Vẽ ba đường theo ngưỡng.`,`Ngưỡng tối ưu nằm nơi các đường cắt nhau (cân bằng sensitivity và specificity).`],code:`cutoff_df = pd.DataFrame(columns=['prob', 'accuracy', 'sensi', 'speci'])
for i in numbers:
    cm = metrics.confusion_matrix(y_train_pred_df['Stayed'], y_train_pred_df[i])
    tn, fp, fn, tp = cm.ravel()
    cutoff_df.loc[i] = [i, (tp + tn) / cm.sum(), tp / (tp + fn), tn / (tn + fp)]
cutoff_df.plot.line(x='prob', y=['accuracy', 'sensi', 'speci'])
plt.show()`,lotus:`Ngưỡng 0,5 không nhất thiết là tốt nhất; với file của bạn ngưỡng tối ưu thường quanh 0,5 vì hai lớp gần cân bằng.`,trap:`Chọn ngưỡng chỉ theo độ chính xác bỏ qua sensitivity và specificity.`,read:[`Mỗi dòng là một ngưỡng; ba cột accuracy, sensitivity, specificity.`,`Tăng ngưỡng thì sensitivity giảm và specificity tăng.`,`Điểm tốt thường là chỗ accuracy cao nhất hoặc sensitivity gần specificity.`],remark:`Ngưỡng 0,5 cho accuracy cao nhất (0,739) và sensitivity (0,753) gần specificity (0,723), nên chọn 0,5.`,howRemark:[`Tìm ngưỡng có accuracy cao nhất.`,`Nêu sự đánh đổi sensitivity và specificity.`,`Chốt ngưỡng và lý do.`]},en:{think:`Plot accuracy, sensitivity and specificity per threshold to choose the optimal cutoff.`,steps:[`Compute the three metrics for each threshold column.`,`Plot three lines against the threshold.`,`The optimal cutoff sits where the lines cross (balanced sensitivity and specificity).`],code:`cutoff_df = pd.DataFrame(columns=['prob', 'accuracy', 'sensi', 'speci'])
for i in numbers:
    cm = metrics.confusion_matrix(y_train_pred_df['Stayed'], y_train_pred_df[i])
    tn, fp, fn, tp = cm.ravel()
    cutoff_df.loc[i] = [i, (tp + tn) / cm.sum(), tp / (tp + fn), tn / (tn + fp)]
cutoff_df.plot.line(x='prob', y=['accuracy', 'sensi', 'speci'])
plt.show()`,lotus:`0.5 is not necessarily best; with your file the optimum is usually near 0.5 because the two classes are near balanced.`,trap:`Choosing the threshold by accuracy only ignores sensitivity and specificity.`,read:[`Each row is a threshold; columns accuracy, sensitivity, specificity.`,`Raising the threshold lowers sensitivity and raises specificity.`,`A good point is the highest accuracy or where sensitivity ≈ specificity.`],remark:`A 0.5 threshold gives the highest accuracy (0.739) and sensitivity (0.753) near specificity (0.723), so choose 0.5.`,howRemark:[`Find the threshold with the highest accuracy.`,`State the sensitivity–specificity trade-off.`,`Fix the threshold and the reason.`]}},"7.3.4":{vi:{think:`Tạo cột dự đoán cuối theo ngưỡng tối ưu.`,steps:[`Chọn ngưỡng (ví dụ 0,5) rồi tạo cột final_predicted.`],code:`cutoff = 0.5  # use the value you read from the plot
y_train_pred_df['final_predicted'] = y_train_pred_df['Stayed_Prob'].map(lambda x: 1 if x > cutoff else 0)`,lotus:`Từ giờ, mô hình nói «ở» khi xác suất vượt ngưỡng này.`,trap:`Hard-code ngưỡng rồi quên đổi sau khi đổi mô hình.`,read:[`Một dòng cho biết ngưỡng được chọn: 0,5.`],remark:`Ngưỡng cuối là 0,5, từ bảng ở 7.3.3.`,howRemark:[`Nêu ngưỡng.`,`Dẫn chứng từ 7.3.3.`]},en:{think:`Create the final prediction column using the optimal cutoff.`,steps:[`Choose the cutoff (for example 0.5) then create final_predicted.`],code:`cutoff = 0.5  # use the value you read from the plot
y_train_pred_df['final_predicted'] = y_train_pred_df['Stayed_Prob'].map(lambda x: 1 if x > cutoff else 0)`,lotus:`From now on the model says “stay” when probability exceeds this threshold.`,trap:`Hard-coding the cutoff and forgetting to update it after changing the model.`,read:[`One line shows the chosen threshold: 0.5.`],remark:`The final cutoff is 0.5, from the table in 7.3.3.`,howRemark:[`State the cutoff.`,`Cite 7.3.3.`]}},"7.3.5":{vi:{think:`Độ chính xác với ngưỡng mới.`,steps:[`accuracy_score(Stayed, final_predicted).`],code:`metrics.accuracy_score(y_train_pred_df['Stayed'], y_train_pred_df['final_predicted'])`,lotus:`So với 7.2.9: ngưỡng tối ưu có thể không đổi nhiều nếu 0,5 đã gần tối ưu.`,trap:`Không có.`,read:[`Ô này không in kết quả; việc cần xem là chạy không báo lỗi.`],remark:`Độ chính xác với ngưỡng mới, vì ngưỡng vẫn 0,5 nên trùng 0,7387.`,howRemark:[`Nói bước này chuẩn bị gì cho bước sau.`,`Ghi tên biến/đối tượng mới được tạo.`]},en:{think:`Accuracy with the new cutoff.`,steps:[`accuracy_score(Stayed, final_predicted).`],code:`metrics.accuracy_score(y_train_pred_df['Stayed'], y_train_pred_df['final_predicted'])`,lotus:`Compare with 7.2.9: the optimal cutoff may barely change if 0.5 was already near optimal.`,trap:`None.`,read:[`This cell prints nothing; just check it ran without error.`],remark:`Accuracy with the new threshold; still 0.5 so it equals 0.7387.`,howRemark:[`Say what this step prepares for the next.`,`Note the new variable/object created.`]}},"7.3.6":{vi:{think:`Ma trận nhầm lẫn với ngưỡng mới.`,steps:[`confusion_matrix(Stayed, final_predicted).`],code:`confusion2 = metrics.confusion_matrix(y_train_pred_df['Stayed'], y_train_pred_df['final_predicted'])
print(confusion2)`,lotus:`Số người nghỉ bị bỏ sót (FP) thay đổi thế nào khi đổi ngưỡng.`,trap:`Không có.`,read:[`Độ chính xác và ma trận nhầm lẫn ở ngưỡng đã chọn.`,`Giống 7.2.10 vì ngưỡng không đổi.`],remark:`Với ngưỡng 0,5, độ chính xác 0,7387 và ma trận giống 7.2.10, nên việc chọn ngưỡng xác nhận mặc định 0,5 là hợp lý.`,howRemark:[`Đối chiếu với 7.2.10.`,`Nói ngưỡng không đổi nên kết quả không đổi.`]},en:{think:`Confusion matrix with the new cutoff.`,steps:[`confusion_matrix(Stayed, final_predicted).`],code:`confusion2 = metrics.confusion_matrix(y_train_pred_df['Stayed'], y_train_pred_df['final_predicted'])
print(confusion2)`,lotus:`How the number of missed leavers (FP) changes when the threshold changes.`,trap:`None.`,read:[`Accuracy and confusion matrix at the chosen threshold.`,`Same as 7.2.10 since the threshold is unchanged.`],remark:`At 0.5, accuracy is 0.7387 and the matrix equals 7.2.10, so the threshold search confirms the 0.5 default.`,howRemark:[`Cross-check with 7.2.10.`,`Say unchanged threshold means unchanged result.`]}},"7.3.7":{vi:{think:`TP, TN, FP, FN cho ngưỡng mới.`,steps:[`ravel() ma trận mới.`],code:`TN, FP, FN, TP = confusion2.ravel()`,lotus:`Như 7.2.11.`,trap:`Nhớ cập nhật biến, đừng dùng biến cũ.`,read:[`Đối chiếu số với bước tương ứng ở 7.2.`],remark:`Cùng số với 7.2.11–7.2.13 vì ngưỡng vẫn 0,5 (TP 19.422, TN 17.104, sensitivity 0,753, specificity 0,723, precision 0,748).`,howRemark:[`Nói bước này chuẩn bị gì cho bước sau.`,`Ghi tên biến/đối tượng mới được tạo.`]},en:{think:`TP, TN, FP, FN for the new cutoff.`,steps:[`ravel() the new matrix.`],code:`TN, FP, FN, TP = confusion2.ravel()`,lotus:`As in 7.2.11.`,trap:`Remember to update the variables; do not reuse the old ones.`,read:[`Cross-check numbers with the matching step in 7.2.`],remark:`Same numbers as 7.2.11–7.2.13 because the threshold stays 0.5 (TP 19,422, TN 17,104, sensitivity 0.753, specificity 0.723, precision 0.748).`,howRemark:[`Say what this step prepares for the next.`,`Note the new variable/object created.`]}},"7.3.8":{vi:{think:`Sensitivity và specificity cho ngưỡng mới.`,steps:[`Dùng công thức như 7.2.12.`],code:`sensitivity = TP / (TP + FN)
specificity = TN / (TN + FP)
print(round(sensitivity, 3), round(specificity, 3))`,lotus:`Cân bằng hơn giữa bắt người sắp nghỉ và đoán đúng người ở lại.`,trap:`Không có.`,read:[`Đối chiếu số với bước tương ứng ở 7.2.`],remark:`Cùng số với 7.2.11–7.2.13 vì ngưỡng vẫn 0,5 (TP 19.422, TN 17.104, sensitivity 0,753, specificity 0,723, precision 0,748).`,howRemark:[`Nói bước này chuẩn bị gì cho bước sau.`,`Ghi tên biến/đối tượng mới được tạo.`]},en:{think:`Sensitivity and specificity for the new cutoff.`,steps:[`Use the formulas from 7.2.12.`],code:`sensitivity = TP / (TP + FN)
specificity = TN / (TN + FP)
print(round(sensitivity, 3), round(specificity, 3))`,lotus:`More balance between catching leavers and correctly guessing stayers.`,trap:`None.`,read:[`Cross-check numbers with the matching step in 7.2.`],remark:`Same numbers as 7.2.11–7.2.13 because the threshold stays 0.5 (TP 19,422, TN 17,104, sensitivity 0.753, specificity 0.723, precision 0.748).`,howRemark:[`Say what this step prepares for the next.`,`Note the new variable/object created.`]}},"7.3.9":{vi:{think:`Precision và recall cho ngưỡng mới.`,steps:[`Dùng công thức như 7.2.13.`],code:`precision = TP / (TP + FP)
recall = TP / (TP + FN)
print(round(precision, 3), round(recall, 3))`,lotus:`Khi nâng ngưỡng precision thường tăng còn recall giảm.`,trap:`Không có.`,read:[`Đối chiếu số với bước tương ứng ở 7.2.`],remark:`Cùng số với 7.2.11–7.2.13 vì ngưỡng vẫn 0,5 (TP 19.422, TN 17.104, sensitivity 0,753, specificity 0,723, precision 0,748).`,howRemark:[`Nói bước này chuẩn bị gì cho bước sau.`,`Ghi tên biến/đối tượng mới được tạo.`]},en:{think:`Precision and recall for the new cutoff.`,steps:[`Use the formulas from 7.2.13.`],code:`precision = TP / (TP + FP)
recall = TP / (TP + FN)
print(round(precision, 3), round(recall, 3))`,lotus:`Raising the threshold usually lifts precision and lowers recall.`,trap:`None.`,read:[`Cross-check numbers with the matching step in 7.2.`],remark:`Same numbers as 7.2.11–7.2.13 because the threshold stays 0.5 (TP 19,422, TN 17,104, sensitivity 0.753, specificity 0.723, precision 0.748).`,howRemark:[`Say what this step prepares for the next.`,`Note the new variable/object created.`]}},"7.3.10":{vi:{think:`Vẽ đường precision-recall và chọn lại ngưỡng nếu cần.`,steps:[`precision_recall_curve(Stayed, Stayed_Prob).`,`Vẽ precision và recall theo ngưỡng.`,`Điểm cắt nhau là ngưỡng cân bằng hai chỉ số.`],code:`from sklearn.metrics import precision_recall_curve
p, r, t = precision_recall_curve(y_train_pred_df['Stayed'], y_train_pred_df['Stayed_Prob'])
plt.plot(t, p[:-1], 'g', label='precision'); plt.plot(t, r[:-1], 'r', label='recall'); plt.legend(); plt.show()`,lotus:`Nếu chị Lan cần bắt nhiều người sắp nghỉ hơn (chấp nhận báo động nhầm) thì chỉnh ngưỡng theo hướng đó.`,trap:`p và r dài hơn t một phần tử; dùng p[:-1], r[:-1].`,read:[`Đường precision-recall: trục ngang recall, trục dọc precision.`,`Tăng recall thì precision thường giảm.`,`Chọn điểm cân bằng theo mục tiêu kinh doanh.`],remark:`Đường precision-recall cho thấy sự đánh đổi; ở ngưỡng 0,5 precision 0,748 và recall 0,753 cân bằng nên giữ ngưỡng này.`,howRemark:[`Mô tả sự đánh đổi.`,`Chỉ điểm của ngưỡng đã chọn.`,`Nói khi nào ưu tiên precision hay recall.`]},en:{think:`Plot the precision-recall curve and re-pick the cutoff if needed.`,steps:[`precision_recall_curve(Stayed, Stayed_Prob).`,`Plot precision and recall against the threshold.`,`Where they cross is the balanced threshold.`],code:`from sklearn.metrics import precision_recall_curve
p, r, t = precision_recall_curve(y_train_pred_df['Stayed'], y_train_pred_df['Stayed_Prob'])
plt.plot(t, p[:-1], 'g', label='precision'); plt.plot(t, r[:-1], 'r', label='recall'); plt.legend(); plt.show()`,lotus:`If chị Lan needs to catch more leavers (accepting false alarms) shift the threshold that way.`,trap:`p and r are one element longer than t; use p[:-1], r[:-1].`,read:[`Precision-recall curve: x axis recall, y axis precision.`,`Raising recall usually lowers precision.`,`Pick a balance point by business goal.`],remark:`The precision-recall curve shows the trade-off; at 0.5 precision 0.748 and recall 0.753 are balanced, so keep it.`,howRemark:[`Describe the trade-off.`,`Mark the chosen threshold's point.`,`Say when to favour precision or recall.`]}},"8.1.1":{vi:{think:`Chọn đúng 15 cột cho validation.`,steps:[`X_validation[col].`],code:`X_validation_rfe = X_validation[col]`,lotus:`Cùng 15 yếu tố như train.`,trap:`Chọn cột khác train làm dự đoán sai.`,read:[`Ô này không in kết quả; việc cần xem là chạy không báo lỗi.`],remark:`Chuẩn bị dự đoán trên validation bằng đúng cách đã làm ở train (cùng 15 cột, cùng hằng số).`,howRemark:[`Nói bước này chuẩn bị gì cho bước sau.`,`Ghi tên biến/đối tượng mới được tạo.`]},en:{think:`Select the same 15 columns for validation.`,steps:[`X_validation[col].`],code:`X_validation_rfe = X_validation[col]`,lotus:`The same 15 factors as train.`,trap:`Selecting different columns than train makes predictions wrong.`,read:[`This cell prints nothing; just check it ran without error.`],remark:`Prepare predictions on validation exactly as done on train (same 15 columns, same constant).`,howRemark:[`Say what this step prepares for the next.`,`Note the new variable/object created.`]}},"8.1.2":{vi:{think:`Thêm hằng số vào validation.`,steps:[`sm.add_constant(X_validation_rfe).`],code:`X_validation_sm = sm.add_constant(X_validation_rfe)`,lotus:`Cùng cấu trúc như train.`,trap:`Thiếu hằng số báo lỗi kích thước.`,read:[`Ô này không in kết quả; việc cần xem là chạy không báo lỗi.`],remark:`Chuẩn bị dự đoán trên validation bằng đúng cách đã làm ở train (cùng 15 cột, cùng hằng số).`,howRemark:[`Nói bước này chuẩn bị gì cho bước sau.`,`Ghi tên biến/đối tượng mới được tạo.`]},en:{think:`Add the constant to validation.`,steps:[`sm.add_constant(X_validation_rfe).`],code:`X_validation_sm = sm.add_constant(X_validation_rfe)`,lotus:`Same structure as train.`,trap:`Missing the constant raises a size error.`,read:[`This cell prints nothing; just check it ran without error.`],remark:`Prepare predictions on validation exactly as done on train (same 15 columns, same constant).`,howRemark:[`Say what this step prepares for the next.`,`Note the new variable/object created.`]}},"8.1.3":{vi:{think:`Dự đoán xác suất trên validation.`,steps:[`res.predict(X_validation_sm).`],code:`y_validation_pred = res.predict(X_validation_sm)`,lotus:`Mô hình đoán người nhân viên chưa từng thấy.`,trap:`Dùng mô hình đã huấn luyện lại bằng validation là gian lận.`,read:[`Ô này không in kết quả; việc cần xem là chạy không báo lỗi.`],remark:`Chuẩn bị dự đoán trên validation bằng đúng cách đã làm ở train (cùng 15 cột, cùng hằng số).`,howRemark:[`Nói bước này chuẩn bị gì cho bước sau.`,`Ghi tên biến/đối tượng mới được tạo.`]},en:{think:`Predict probabilities on validation.`,steps:[`res.predict(X_validation_sm).`],code:`y_validation_pred = res.predict(X_validation_sm)`,lotus:`The model guesses staff it has never seen.`,trap:`Retraining on validation is cheating.`,read:[`This cell prints nothing; just check it ran without error.`],remark:`Prepare predictions on validation exactly as done on train (same 15 columns, same constant).`,howRemark:[`Say what this step prepares for the next.`,`Note the new variable/object created.`]}},"8.1.4":{vi:{think:`Tạo bảng thực tế và dự đoán cho validation.`,steps:[`Giống 7.2.7 cho validation.`],code:`y_validation_pred_df = pd.DataFrame({'Stayed': y_val_d.values.reshape(-1), 'Stayed_Prob': y_validation_pred.values.reshape(-1)})
y_validation_pred_df.head()`,lotus:`Mỗi nhân viên có xác suất ở lại dự đoán.`,trap:`Hai mảng khác độ dài báo lỗi.`,read:[`Ô này không in kết quả; việc cần xem là chạy không báo lỗi.`],remark:`Chuẩn bị dự đoán trên validation bằng đúng cách đã làm ở train (cùng 15 cột, cùng hằng số).`,howRemark:[`Nói bước này chuẩn bị gì cho bước sau.`,`Ghi tên biến/đối tượng mới được tạo.`]},en:{think:`Build the actual-vs-predicted table for validation.`,steps:[`As 7.2.7 for validation.`],code:`y_validation_pred_df = pd.DataFrame({'Stayed': y_val_d.values.reshape(-1), 'Stayed_Prob': y_validation_pred.values.reshape(-1)})
y_validation_pred_df.head()`,lotus:`Each staff member has a predicted stay probability.`,trap:`Arrays of different length raise an error.`,read:[`This cell prints nothing; just check it ran without error.`],remark:`Prepare predictions on validation exactly as done on train (same 15 columns, same constant).`,howRemark:[`Say what this step prepares for the next.`,`Note the new variable/object created.`]}},"8.1.5":{vi:{think:`Dự đoán cuối theo ngưỡng đã chọn trên train.`,steps:[`Dùng cùng cutoff như 7.3.4.`],code:`y_validation_pred_df['final_predicted'] = y_validation_pred_df['Stayed_Prob'].map(lambda x: 1 if x > cutoff else 0)`,lotus:`Dùng cùng ngưỡng, không chọn lại ngưỡng trên validation.`,trap:`Chọn ngưỡng trên validation là rò rỉ thông tin.`,read:[`Cột final_predicted là dự đoán cuối theo ngưỡng chọn từ train (0,5).`,`So Stayed với final_predicted từng dòng.`],remark:`Trên validation, ngưỡng 0,5 từ train được dùng nguyên; ví dụ dòng 2 có xác suất 0,237 nên đoán nghỉ nhưng thực tế ở lại, một dự đoán sai.`,howRemark:[`Áp ngưỡng của train, không chọn lại.`,`Chọn một dòng đúng và một dòng sai.`]},en:{think:`Final prediction using the cutoff chosen on train.`,steps:[`Use the same cutoff as 7.3.4.`],code:`y_validation_pred_df['final_predicted'] = y_validation_pred_df['Stayed_Prob'].map(lambda x: 1 if x > cutoff else 0)`,lotus:`Use the same cutoff, do not re-choose it on validation.`,trap:`Choosing the cutoff on validation leaks information.`,read:[`final_predicted is the final prediction at the threshold from train (0.5).`,`Compare Stayed with final_predicted row by row.`],remark:`On validation the train threshold 0.5 is used unchanged; e.g. row 2 has probability 0.237 so it predicts leave but the person stayed, a wrong prediction.`,howRemark:[`Apply train's threshold, do not re-pick.`,`Choose one right and one wrong row.`]}},"8.2":{vi:{think:`Độ chính xác trên validation.`,steps:[`accuracy_score trên validation.`],code:`metrics.accuracy_score(y_validation_pred_df['Stayed'], y_validation_pred_df['final_predicted'])`,lotus:`Gần với độ chính xác train (khoảng 74%) thì mô hình không quá khớp.`,trap:`Chênh nhiều giữa train và validation là quá khớp.`,read:[`Hai số: accuracy validation 0,7357 và train 0,7387.`],remark:`Độ chính xác 0,7357 ở validation so với 0,7387 ở train, chênh chỉ 0,003 nên mô hình không quá khớp.`,howRemark:[`So hai số.`,`Nói quá khớp hay không.`]},en:{think:`Accuracy on validation.`,steps:[`accuracy_score on validation.`],code:`metrics.accuracy_score(y_validation_pred_df['Stayed'], y_validation_pred_df['final_predicted'])`,lotus:`Close to train accuracy (about 74%) means no overfitting.`,trap:`A big train-validation gap signals overfitting.`,read:[`Two numbers: validation accuracy 0.7357 and train 0.7387.`],remark:`Accuracy is 0.7357 on validation vs 0.7387 on train, only 0.003 apart, so no overfitting.`,howRemark:[`Compare the two numbers.`,`Say overfit or not.`]}},"8.3":{vi:{think:`Ma trận nhầm lẫn và TP, TN, FP, FN trên validation.`,steps:[`confusion_matrix và ravel().`],code:`cm_val = metrics.confusion_matrix(y_validation_pred_df['Stayed'], y_validation_pred_df['final_predicted'])
TN, FP, FN, TP = cm_val.ravel()
print(cm_val)`,lotus:`Số liệu tương tự train nhưng với 21.200 nhân viên chưa từng thấy.`,trap:`Không có.`,read:[`Ma trận nhầm lẫn của validation: đường chéo 7.357 và 8.233 là đúng.`,`So tỷ lệ với train: các ô cùng cỡ.`],remark:`Validation đoán đúng 15.590 trên 21.191, nhầm 2.805 và 2.796 ở hai phía; cơ cấu giống train.`,howRemark:[`Cộng đường chéo.`,`So tỷ lệ các ô với train.`,`Nói về hai loại sai.`]},en:{think:`Confusion matrix and TP, TN, FP, FN on validation.`,steps:[`confusion_matrix and ravel().`],code:`cm_val = metrics.confusion_matrix(y_validation_pred_df['Stayed'], y_validation_pred_df['final_predicted'])
TN, FP, FN, TP = cm_val.ravel()
print(cm_val)`,lotus:`Numbers like train but for 21,200 unseen staff.`,trap:`None.`,read:[`Validation confusion matrix: diagonal 7,357 and 8,233 is right.`,`Compare proportions with train.`],remark:`Validation is right on 15,590 of 21,191 with 2,805 and 2,796 errors each side; same pattern as train.`,howRemark:[`Add the diagonal.`,`Compare cell proportions with train.`,`Talk about the two error types.`]}},"8.4":{vi:{think:`Sensitivity và specificity trên validation.`,steps:[`Công thức như 7.2.12.`],code:`sensitivity = TP / (TP + FN)
specificity = TN / (TN + FP)
print(round(sensitivity, 3), round(specificity, 3))`,lotus:`So với train để thấy mô hình giữ vững không.`,trap:`Không có.`,read:[`Hai số trên validation: sensitivity 0,746, specificity 0,724.`],remark:`Sensitivity 0,746 và specificity 0,724, gần với train (0,753 và 0,723): mô hình ổn định.`,howRemark:[`So với train.`,`Kết luận ổn định.`]},en:{think:`Sensitivity and specificity on validation.`,steps:[`Formulas as 7.2.12.`],code:`sensitivity = TP / (TP + FN)
specificity = TN / (TN + FP)
print(round(sensitivity, 3), round(specificity, 3))`,lotus:`Compare with train to see whether the model holds up.`,trap:`None.`,read:[`Two numbers on validation: sensitivity 0.746, specificity 0.724.`],remark:`Sensitivity 0.746 and specificity 0.724, near train's (0.753 and 0.723): the model is stable.`,howRemark:[`Compare with train.`,`Conclude stable.`]}},"8.5":{vi:{think:`Precision và recall trên validation.`,steps:[`Công thức như 7.2.13.`],code:`precision = TP / (TP + FP)
recall = TP / (TP + FN)
print(round(precision, 3), round(recall, 3))`,lotus:`Kết luận ở ô cuối: mô hình có đủ tốt để chị Lan dùng báo trước nhân viên có nguy cơ nghỉ không.`,trap:`Kết luận chỉ bằng một chỉ số.`,read:[`Hai số trên validation: precision 0,746 và recall 0,746.`],remark:`Precision và recall cùng 0,746, gần train (0,748 và 0,753), nên có thể tin vào mô hình khi áp cho nhân viên mới.`,howRemark:[`So với train.`,`Nêu kết luận về độ tin cậy.`]},en:{think:`Precision and recall on validation.`,steps:[`Formulas as 7.2.13.`],code:`precision = TP / (TP + FP)
recall = TP / (TP + FN)
print(round(precision, 3), round(recall, 3))`,lotus:`Conclude in the last cell: is the model good enough for chị Lan to flag staff at risk of leaving.`,trap:`Concluding from a single metric.`,read:[`Two numbers on validation: precision 0.746 and recall 0.746.`],remark:`Precision and recall are both 0.746, close to train (0.748 and 0.753), so the model can be trusted on new employees.`,howRemark:[`Compare with train.`,`State the conclusion on reliability.`]}}},results:{"1.1":{code:`import pandas as pd, numpy as np, matplotlib.pyplot as plt, seaborn as sns
df = pd.read_csv('/tmp/asg/all/3/Employee_data.csv')
print(df.shape)
print(df.head(3).T.to_string())`,text:`(74610, 24)
                                           0                  1                    2
Employee ID                             8410              64756                30257
Age                                       31                 59                   24
Gender                                  Male             Female               Female
Years at Company                          19                  4                   10
Job Role                           Education              Media           Healthcare
Monthly Income                          5390               5534                 8159
Work-Life Balance                  Excellent               Poor                 Good
Job Satisfaction                      Medium               High                 High
Performance Rating                   Average                Low                  Low
Number of Promotions                       2                  3                    0
Overtime                                  No                 No                   No
Distance from Home                      22.0               21.0                 11.0
Education Level             Associate Degree  Masterâ€™s Degree  Bachelorâ€™s Degree
Marital Status                       Married           Divorced              Married
Number of Dependents                       0                  3                    3
Job Level                                Mid                Mid                  Mid
Company Size                          Medium             Medium               Medium
Company Tenure (In Months)              89.0               21.0                 74.0
Remote Work                               No                 No                   No
Leadership Opportunities                  No                 No                   No
Innovation Opportunities                  No                 No                   No
Company Reputation                 Excellent               Fair                 Poor
Employee Recognition                  Medium                Low                  Low
Attrition                             Stayed             Stayed               Stayed`,imgs:[]},"1.2":{code:`print(df.describe().round(1).T.to_string())`,text:`                              count     mean      std     min      25%      50%      75%      max
Employee ID                 74610.0  37246.0  21505.8     1.0  18624.2  37239.5  55871.8  74498.0
Age                         74610.0     38.5     12.1    18.0     28.0     39.0     49.0     59.0
Years at Company            74610.0     15.7     11.2     1.0      7.0     13.0     23.0     51.0
Monthly Income              74610.0   7344.9   2596.4  1226.0   5652.0   7348.5   8876.0  50030.0
Number of Promotions        74610.0      0.8      1.0     0.0      0.0      1.0      2.0      4.0
Distance from Home          72698.0     50.0     28.5     1.0     25.0     50.0     75.0     99.0
Number of Dependents        74610.0      1.7      1.6     0.0      0.0      1.0      3.0     15.0
Company Tenure (In Months)  72197.0     55.7     25.4     2.0     36.0     56.0     76.0    128.0`,imgs:[]},"1.3":{code:`df.info()`,text:`<class 'pandas.DataFrame'>
RangeIndex: 74610 entries, 0 to 74609
Data columns (total 24 columns):
 #   Column                      Non-Null Count  Dtype  
---  ------                      --------------  -----  
 0   Employee ID                 74610 non-null  int64  
 1   Age                         74610 non-null  int64  
 2   Gender                      74610 non-null  str    
 3   Years at Company            74610 non-null  int64  
 4   Job Role                    74610 non-null  str    
 5   Monthly Income              74610 non-null  int64  
 6   Work-Life Balance           74610 non-null  str    
 7   Job Satisfaction            74610 non-null  str    
 8   Performance Rating          74610 non-null  str    
 9   Number of Promotions        74610 non-null  int64  
 10  Overtime                    74610 non-null  str    
 11  Distance from Home          72698 non-null  float64
 12  Education Level             74610 non-null  str    
 13  Marital Status              74610 non-null  str    
 14  Number of Dependents        74610 non-null  int64  
 15  Job Level                   74610 non-null  str    
 16  Company Size                74610 non-null  str    
 17  Company Tenure (In Months)  72197 non-null  float64
 18  Remote Work                 74610 non-null  str    
 19  Leadership Opportunities    74610 non-null  str    
 20  Innovation Opportunities    74610 non-null  str    
 21  Company Reputation          74610 non-null  str    
 22  Employee Recognition        74610 non-null  str    
 23  Attrition                   74610 non-null  str    
dtypes: float64(2), int64(6), str(16)
memory usage: 13.7 MB`,imgs:[]},"2.1.1":{code:`print(df.isnull().sum()[df.isnull().sum() > 0])`,text:`Distance from Home            1912
Company Tenure (In Months)    2413
dtype: int64`,imgs:[]},"2.1.2":{code:`print((df.isnull().mean() * 100).round(2)[df.isnull().sum() > 0])`,text:`Distance from Home            2.56
Company Tenure (In Months)    3.23
dtype: float64`,imgs:[]},"2.1.3":{code:`n0 = len(df)
df = df.dropna()
print(n0, '->', len(df))`,text:`74610 -> 70635`,imgs:[]},"2.1.4":{code:`print(len(df), round(len(df) / n0 * 100, 2), '%')`,text:`70635 94.67 %`,imgs:[]},"2.2":{code:`for c in df.select_dtypes(include='object').columns:
    print(c, list(df[c].unique()))
df['Education Level'] = df['Education Level'].str.replace('â€™', "'")
print()
print(df['Education Level'].unique())`,text:`Gender ['Male', 'Female']
Job Role ['Education', 'Media', 'Healthcare', 'Technology', 'Finance']
Work-Life Balance ['Excellent', 'Poor', 'Good', 'Fair']
Job Satisfaction ['Medium', 'High', 'Very High', 'Low']
Performance Rating ['Average', 'Low', 'High', 'Below Average']
Overtime ['No', 'Yes']
Education Level ['Associate Degree', 'Masterâ€™s Degree', 'Bachelorâ€™s Degree', 'High School', 'PhD']
Marital Status ['Married', 'Divorced', 'Single']
Job Level ['Mid', 'Senior', 'Entry']
Company Size ['Medium', 'Small', 'Large']
Remote Work ['No', 'Yes']
Leadership Opportunities ['No', 'Yes']
Innovation Opportunities ['No', 'Yes']
Company Reputation ['Excellent', 'Fair', 'Poor', 'Good']
Employee Recognition ['Medium', 'Low', 'High', 'Very High']
Attrition ['Stayed', 'Left']

<StringArray>
[ 'Associate Degree',   'Master's Degree', 'Bachelor's Degree',
       'High School',               'PhD']
Length: 5, dtype: str`,imgs:[]},"2.3":{code:`df = df.drop(columns=['Employee ID'])
print(df.shape)`,text:`(70635, 23)`,imgs:[]},"3.2":{code:`y = df['Attrition']
X = df.drop(columns=['Attrition'])
print(X.shape, y.shape)`,text:`(70635, 22) (70635,)`,imgs:[]},"3.3":{code:`from sklearn.model_selection import train_test_split
X_train, X_validation, y_train, y_validation = train_test_split(X, y, train_size=0.7, random_state=100)
print(len(X_train), len(X_validation))`,text:`49444 21191`,imgs:[]},"4.1.1":{code:`num_cols = X_train.select_dtypes(include=['int64', 'float64']).columns
print(list(num_cols))`,text:`['Age', 'Years at Company', 'Monthly Income', 'Number of Promotions', 'Distance from Home', 'Number of Dependents', 'Company Tenure (In Months)']`,imgs:[]},"4.1.2":{code:`X_train[num_cols].hist(bins=30, figsize=(14, 8)); plt.tight_layout()`,text:``,imgs:[`/assign/employee-retention/4_1_2-1.png`]},"4.2":{code:`plt.figure(figsize=(8, 6))
sns.heatmap(X_train[num_cols].corr(), annot=True, fmt='.2f', cmap='coolwarm', center=0)`,text:``,imgs:[`/assign/employee-retention/4_2-1.png`]},"4.3":{code:`print(y_train.value_counts(normalize=True).round(3))
y_train.value_counts().plot(kind='bar', color=['#2f6f5e', '#b5543c'])`,text:`Attrition
Stayed    0.521
Left      0.479
Name: proportion, dtype: float64`,imgs:[`/assign/employee-retention/4_3-1.png`]},"4.4":{code:`cat_cols = X_train.select_dtypes(include='object').columns
t = X_train.assign(Attrition=y_train)
rate = {c: t.groupby(c)['Attrition'].apply(lambda s: (s == 'Left').mean()).round(3) for c in cat_cols}
top = ['Overtime', 'Marital Status', 'Job Level', 'Remote Work', 'Work-Life Balance', 'Job Satisfaction']
fig, ax = plt.subplots(2, 3, figsize=(15, 8))
for a, c in zip(ax.ravel(), top):
    rate[c].plot(kind='bar', ax=a, title=f'Tỷ lệ nghỉ theo {c}'); a.set_ylim(0, 1); a.axhline(0.479, color='r', ls='--')
plt.tight_layout()
for c in top: print(c, rate[c].to_dict())`,text:`Overtime {'No': 0.459, 'Yes': 0.52}
Marital Status {'Divorced': 0.411, 'Married': 0.364, 'Single': 0.671}
Job Level {'Entry': 0.639, 'Mid': 0.458, 'Senior': 0.202}
Remote Work {'No': 0.528, 'Yes': 0.247}
Work-Life Balance {'Excellent': 0.362, 'Fair': 0.577, 'Good': 0.408, 'Poor': 0.608}
Job Satisfaction {'High': 0.454, 'Low': 0.533, 'Medium': 0.454, 'Very High': 0.535}`,imgs:[`/assign/employee-retention/4_4-1.png`]},"6.1.1":{code:`cat_cols = X_train.select_dtypes(include=['object']).columns
print(list(cat_cols))`,text:`['Gender', 'Job Role', 'Work-Life Balance', 'Job Satisfaction', 'Performance Rating', 'Overtime', 'Education Level', 'Marital Status', 'Job Level', 'Company Size', 'Remote Work', 'Leadership Opportunities', 'Innovation Opportunities', 'Company Reputation', 'Employee Recognition']`,imgs:[]},"6.1.2":{code:`dummy_train = pd.get_dummies(X_train[cat_cols], drop_first=True, dtype=int)
print(dummy_train.shape)
print(dummy_train.head(3).T.head(12).to_string())`,text:`(49444, 34)
                                  1516   3352   59196
Gender_Male                           0      1      0
Job Role_Finance                      0      0      0
Job Role_Healthcare                   0      0      0
Job Role_Media                        1      0      1
Job Role_Technology                   0      1      0
Work-Life Balance_Fair                0      0      0
Work-Life Balance_Good                0      1      1
Work-Life Balance_Poor                0      0      0
Job Satisfaction_Low                  0      0      0
Job Satisfaction_Medium               1      0      0
Job Satisfaction_Very High            0      0      0
Performance Rating_Below Average      0      0      0`,imgs:[]},"6.1.3":{code:`dummy_val = pd.get_dummies(X_validation[cat_cols], drop_first=True, dtype=int)
dummy_val = dummy_val.reindex(columns=dummy_train.columns, fill_value=0)
print(dummy_val.shape)`,text:`(21191, 34)`,imgs:[]},"6.1.5":{code:`y_train_d = pd.get_dummies(pd.DataFrame(y_train), drop_first=True, dtype=int)
y_val_d = pd.get_dummies(pd.DataFrame(y_validation), drop_first=True, dtype=int)
print(y_train_d.columns.tolist(), y_train_d.mean().round(3).tolist())`,text:`['Attrition_Stayed'] [0.521]`,imgs:[]},"6.1.7":{code:`X_train = pd.concat([X_train.drop(columns=cat_cols), dummy_train], axis=1)
X_validation = pd.concat([X_validation.drop(columns=cat_cols), dummy_val], axis=1)
print(X_train.shape, X_validation.shape)`,text:`(49444, 41) (21191, 41)`,imgs:[]},"6.2.2":{code:`from sklearn.preprocessing import StandardScaler
scaler = StandardScaler()
X_train[num_cols] = scaler.fit_transform(X_train[num_cols])
X_validation[num_cols] = scaler.transform(X_validation[num_cols])
print(X_train[num_cols].describe().loc[['mean', 'std']].round(2).to_string())`,text:`      Age  Years at Company  Monthly Income  Number of Promotions  Distance from Home  Number of Dependents  Company Tenure (In Months)
mean  0.0              -0.0            -0.0                  -0.0                -0.0                   0.0                         0.0
std   1.0               1.0             1.0                   1.0                 1.0                   1.0                         1.0`,imgs:[]},"7.1.2":{code:`from sklearn.linear_model import LogisticRegression
from sklearn.feature_selection import RFE
logreg = LogisticRegression(max_iter=1000)
rfe = RFE(estimator=logreg, n_features_to_select=15).fit(X_train, y_train_d.values.ravel())
col = X_train.columns[rfe.support_]
for c in col: print(c)`,text:`Gender_Male
Work-Life Balance_Fair
Work-Life Balance_Poor
Job Satisfaction_Low
Job Satisfaction_Very High
Performance Rating_Below Average
Performance Rating_Low
Overtime_Yes
Education Level_PhD
Marital Status_Single
Job Level_Mid
Job Level_Senior
Remote Work_Yes
Company Reputation_Fair
Company Reputation_Poor`,imgs:[]},"7.2.3":{code:`import statsmodels.api as sm
X_train_rfe = X_train[col]
X_train_sm = sm.add_constant(X_train_rfe)
res = sm.GLM(y_train_d, X_train_sm, family=sm.families.Binomial()).fit()
print(res.summary().tables[1])`,text:`====================================================================================================
                                       coef    std err          z      P>|z|      [0.025      0.975]
----------------------------------------------------------------------------------------------------
const                                0.2356      0.028      8.336      0.000       0.180       0.291
Gender_Male                          0.5738      0.022     25.875      0.000       0.530       0.617
Work-Life Balance_Fair              -1.0572      0.025    -41.957      0.000      -1.107      -1.008
Work-Life Balance_Poor              -1.2489      0.034    -37.262      0.000      -1.315      -1.183
Job Satisfaction_Low                -0.4914      0.037    -13.282      0.000      -0.564      -0.419
Job Satisfaction_Very High          -0.4829      0.028    -17.462      0.000      -0.537      -0.429
Performance Rating_Below Average    -0.3079      0.031    -10.012      0.000      -0.368      -0.248
Performance Rating_Low              -0.5673      0.051    -11.058      0.000      -0.668      -0.467
Overtime_Yes                        -0.3286      0.023    -14.053      0.000      -0.374      -0.283
Education Level_PhD                  1.4826      0.055     27.084      0.000       1.375       1.590
Marital Status_Single               -1.6887      0.025    -68.644      0.000      -1.737      -1.640
Job Level_Mid                        0.9611      0.024     39.780      0.000       0.914       1.008
Job Level_Senior                     2.5326      0.035     73.125      0.000       2.465       2.600
Remote Work_Yes                      1.7154      0.032     53.379      0.000       1.652       1.778
Company Reputation_Fair             -0.5296      0.028    -18.633      0.000      -0.585      -0.474
Company Reputation_Poor             -0.7359      0.029    -25.758      0.000      -0.792      -0.680
====================================================================================================`,imgs:[]},"7.2.4":{code:`from statsmodels.stats.outliers_influence import variance_inflation_factor
vif = pd.DataFrame({'Feature': X_train_rfe.columns, 'VIF': [variance_inflation_factor(X_train_rfe.values, i) for i in range(X_train_rfe.shape[1])]})
print(vif.sort_values('VIF', ascending=False).round(2).to_string(index=False))`,text:`                         Feature  VIF
                Job Level_Senior 1.20
                   Job Level_Mid 1.20
          Work-Life Balance_Poor 1.08
          Work-Life Balance_Fair 1.08
         Company Reputation_Fair 1.07
         Company Reputation_Poor 1.07
            Job Satisfaction_Low 1.03
      Job Satisfaction_Very High 1.03
          Performance Rating_Low 1.01
Performance Rating_Below Average 1.01
                    Overtime_Yes 1.00
                     Gender_Male 1.00
                 Remote Work_Yes 1.00
           Marital Status_Single 1.00
             Education Level_PhD 1.00`,imgs:[]},"7.2.8":{code:`from sklearn import metrics
yp = res.predict(X_train_sm)
tr = pd.DataFrame({'Stayed': y_train_d.values.reshape(-1), 'Stayed_Prob': yp.values.reshape(-1)})
tr['Predicted'] = tr['Stayed_Prob'].map(lambda x: 1 if x > 0.5 else 0)
print(tr.head(8).round(3).to_string())`,text:`   Stayed  Stayed_Prob  Predicted
0       1        0.377          0
1       1        0.943          1
2       0        0.768          1
3       0        0.437          0
4       0        0.803          1
5       0        0.021          0
6       0        0.581          1
7       1        0.806          1`,imgs:[]},"7.2.9":{code:`print('accuracy', round(metrics.accuracy_score(tr['Stayed'], tr['Predicted']), 4))`,text:`accuracy 0.7387`,imgs:[]},"7.2.10":{code:`confusion = metrics.confusion_matrix(tr['Stayed'], tr['Predicted'])
print(pd.DataFrame(confusion, index=['thực: nghỉ', 'thực: ở'], columns=['đoán: nghỉ', 'đoán: ở']))`,text:`            đoán: nghỉ  đoán: ở
thực: nghỉ       17104     6559
thực: ở           6359    19422`,imgs:[]},"7.2.11":{code:`TN, FP, FN, TP = confusion.ravel()
print('TP', TP, 'TN', TN, 'FP', FP, 'FN', FN)`,text:`TP 19422 TN 17104 FP 6559 FN 6359`,imgs:[]},"7.2.12":{code:`sensitivity = TP / (TP + FN); specificity = TN / (TN + FP)
print('sensitivity', round(sensitivity, 3), '| specificity', round(specificity, 3))`,text:`sensitivity 0.753 | specificity 0.723`,imgs:[]},"7.2.13":{code:`precision = TP / (TP + FP); recall = TP / (TP + FN)
print('precision', round(precision, 3), '| recall', round(recall, 3))`,text:`precision 0.748 | recall 0.753`,imgs:[]},"7.3.1":{code:`fpr, tpr, thr = metrics.roc_curve(tr['Stayed'], tr['Stayed_Prob'], drop_intermediate=False)
auc = metrics.roc_auc_score(tr['Stayed'], tr['Stayed_Prob'])
plt.plot(fpr, tpr, label=f'AUC = {auc:.3f}'); plt.plot([0, 1], [0, 1], 'k--')
plt.xlabel('FPR'); plt.ylabel('TPR'); plt.legend(); plt.title('ROC (train)')`,text:``,imgs:[`/assign/employee-retention/7_3_1-1.png`]},"7.3.3":{code:`numbers = [x / 10 for x in range(10)]
for i in numbers: tr[i] = tr['Stayed_Prob'].map(lambda x: 1 if x > i else 0)
rows = []
for i in numbers:
    tn, fp, fn, tp = metrics.confusion_matrix(tr['Stayed'], tr[i]).ravel()
    rows.append([i, (tp + tn) / (tp + tn + fp + fn), tp / (tp + fn), tn / (tn + fp)])
cutoff_df = pd.DataFrame(rows, columns=['prob', 'accuracy', 'sensi', 'speci'])
cutoff_df.plot.line(x='prob', y=['accuracy', 'sensi', 'speci'])
print(cutoff_df.round(3).to_string(index=False))`,text:` prob  accuracy  sensi  speci
  0.0     0.521  1.000  0.000
  0.1     0.587  0.995  0.144
  0.2     0.659  0.961  0.330
  0.3     0.704  0.910  0.480
  0.4     0.731  0.839  0.613
  0.5     0.739  0.753  0.723
  0.6     0.729  0.644  0.822
  0.7     0.705  0.528  0.898
  0.8     0.660  0.388  0.958
  0.9     0.588  0.216  0.993`,imgs:[`/assign/employee-retention/7_3_3-1.png`]},"7.3.4":{code:`cutoff = 0.5
tr['final_predicted'] = tr['Stayed_Prob'].map(lambda x: 1 if x > cutoff else 0)
print('cutoff', cutoff)`,text:`cutoff 0.5`,imgs:[]},"7.3.6":{code:`c2 = metrics.confusion_matrix(tr['Stayed'], tr['final_predicted'])
print('accuracy', round(metrics.accuracy_score(tr['Stayed'], tr['final_predicted']), 4))
print(c2)`,text:`accuracy 0.7387
[[17104  6559]
 [ 6359 19422]]`,imgs:[]},"7.3.10":{code:`from sklearn.metrics import precision_recall_curve
p, r, t = precision_recall_curve(tr['Stayed'], tr['Stayed_Prob'])
plt.plot(t, p[:-1], 'g', label='precision'); plt.plot(t, r[:-1], 'r', label='recall'); plt.legend(); plt.xlabel('ngưỡng')`,text:``,imgs:[`/assign/employee-retention/7_3_10-1.png`]},"8.1.5":{code:`X_validation_sm = sm.add_constant(X_validation[col])
pv = res.predict(X_validation_sm)
va = pd.DataFrame({'Stayed': y_val_d.values.reshape(-1), 'Stayed_Prob': pv.values.reshape(-1)})
va['final_predicted'] = va['Stayed_Prob'].map(lambda x: 1 if x > cutoff else 0)
print(va.head(6).round(3).to_string())`,text:`   Stayed  Stayed_Prob  final_predicted
0       1        0.908                1
1       1        0.941                1
2       1        0.237                0
3       1        0.570                1
4       0        0.126                0
5       1        0.555                1`,imgs:[]},"8.2":{code:`print('accuracy validation', round(metrics.accuracy_score(va['Stayed'], va['final_predicted']), 4), '| train', round(metrics.accuracy_score(tr['Stayed'], tr['final_predicted']), 4))`,text:`accuracy validation 0.7357 | train 0.7387`,imgs:[]},"8.3":{code:`cm_val = metrics.confusion_matrix(va['Stayed'], va['final_predicted'])
TN, FP, FN, TP = cm_val.ravel()
print(pd.DataFrame(cm_val, index=['thực: nghỉ', 'thực: ở'], columns=['đoán: nghỉ', 'đoán: ở']))`,text:`            đoán: nghỉ  đoán: ở
thực: nghỉ        7357     2805
thực: ở           2796     8233`,imgs:[]},"8.4":{code:`print('sensitivity', round(TP / (TP + FN), 3), '| specificity', round(TN / (TN + FP), 3))`,text:`sensitivity 0.746 | specificity 0.724`,imgs:[]},"8.5":{code:`print('precision', round(TP / (TP + FP), 3), '| recall', round(TP / (TP + FN), 3))`,text:`precision 0.746 | recall 0.746`,imgs:[]}}},{id:`fraud-claim`,course:`C4 · Học máy nâng cao`,title:[`Bài tập: Phát hiện hồ sơ bồi hoàn gian lận`,`Assignment: Fraudulent Claim Detection`],file:`Fraudulent_Claim_Detection_Starter.ipynb`,story:[`Starter gốc là hồ sơ bồi hoàn bảo hiểm xe. Trong Lotus Spa: mỗi dòng là một yêu cầu hoàn tiền của khách, fraud_reported = Y nếu hồ sơ gian lận. Bạn dựng hai mô hình (hồi quy logistic và random forest) để chị Lan biết nên kiểm tra kỹ hồ sơ nào. Các con số là kết quả chạy thật trên insurance_claims.csv (1.000 dòng, 24,7% gian lận).`,`The original starter is vehicle insurance claims. In Lotus Spa: each row is a customer refund request, fraud_reported = Y when the claim is fraudulent. You build two models (logistic regression and random forest) so chị Lan knows which claims to check closely. The numbers are real results on insurance_claims.csv (1,000 rows, 24.7% fraud).`],concepts:[`d-17c98c091798`],cells:[{t:`md`,s:`## **Fraudulent Claim Detection**`},{t:`md`,s:`## Problem Statement
Global Insure, a leading insurance company, processes thousands of claims annually. However, a significant percentage of these claims turn out to be fraudulent, resulting in considerable financial losses. The company’s current process for identifying fraudulent claims involves manual inspections, which is time-consuming and inefficient. Fraudulent claims are often detected too late in the process, after the company has already paid out significant amounts. Global Insure wants to improve its fraud detection process using data-driven insights to classify claims as fraudulent or legitimate early in the approval process. This would minimise financial losses and optimise the overall claims handling process.

## Business Objective
Global Insure wants to build a model to classify insurance claims as either fraudulent or legitimate based on historical claim details and customer profiles. By using features like claim amounts, customer profiles and claim types, the company aims to predict which claims are likely to be fraudulent before they are approved.


Based on this assignment, you have to answer the following questions:<br>

● How can we analyse historical claim data to detect patterns that indicate fraudulent claims?<br>
● Which features are most predictive of fraudulent behaviour?<br>
● Can we predict the likelihood of fraud for an incoming claim, based on past data?<br>
● What insights can be drawn from the model that can help in improving the fraud detection process?<br>`},{t:`md`,s:`## Assignment Tasks
You need to perform the following steps for successfully completing this assignment:
1. Data Preparation
2. Data Cleaning
3. Train Validation Split 70-30
4. EDA on Training Data
5. EDA on Validation Data (optional)
6. Feature Engineering
7. Model Building
8. Predicting and Model Evaluation`},{t:`md`,s:`## Data Dictionary
The insurance claims data has 40 Columns and 1000 Rows. Following data dictionary provides the description for each column present in dataset:<br>

<table>
  <thead>
    <tr>
      <th>Column Name</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>months_as_customer</td>
      <td>Represents the duration in months that a customer has been associated with the insurance company.</td>
    </tr>
    <tr>
      <td>age</td>
      <td>Represents the age of the insured person.</td>
    </tr>
    <tr>
      <td>policy_number</td>
      <td>Represents a unique identifier for each insurance policy.</td>
    </tr>
    <tr>
      <td>policy_bind_date</td>
      <td>Represents the date when the insurance policy was initiated.</td>
    </tr>
    <tr>
      <td>policy_state</td>
      <td>Represents the state where the insurance policy is applicable.</td>
    </tr>
    <tr>
      <td>policy_csl</td>
      <td>Represents the combined single limit for the insurance policy.</td>
    </tr>
    <tr>
      <td>policy_deductable</td>
      <td>Represents the amount that the insured person needs to pay before the insurance coverage kicks in.</td>
    </tr>
    <tr>
      <td>policy_annual_premium</td>
      <td>Represents the yearly cost of the insurance policy.</td>
    </tr>
    <tr>
      <td>umbrella_limit</td>
      <td>Represents an additional layer of liability coverage provided beyond the limits of the primary insurance policy.</td>
    </tr>
    <tr>
      <td>insured_zip</td>
      <td>Represents the zip code of the insured person.</td>
    </tr>
    <tr>
      <td>insured_sex</td>
      <td>Represents the gender of the insured person.</td>
    </tr>
    <tr>
      <td>insured_education_level</td>
      <td>Represents the highest educational qualification of the insured person.</td>
    </tr>
    <tr>
      <td>insured_occupation</td>
      <td>Represents the profession or job of the insured person.</td>
    </tr>
    <tr>
      <td>insured_hobbies</td>
      <td>Represents the hobbies or leisure activities of the insured person.</td>
    </tr>
    <tr>
      <td>insured_relationship</td>
      <td>Represents the relationship of the insured person to the policyholder.</td>
    </tr>
    <tr>
      <td>capital-gains</td>
      <td>Represents the profit earned from the sale of assets such as stocks, bonds, or real estate.</td>
    </tr>
    <tr>
      <td>capital-loss</td>
      <td>Represents the loss incurred from the sale of assets such as stocks, bonds, or real estate.</td>
    </tr>
    <tr>
      <td>incident_date</td>
      <td>Represents the date when the incident or accident occurred.</td>
    </tr>
    <tr>
      <td>incident_type</td>
      <td>Represents the category or type of incident that led to the claim.</td>
    </tr>
    <tr>
      <td>collision_type</td>
      <td>Represents the type of collision that occurred in an accident.</td>
    </tr>
    <tr>
      <td>incident_severity</td>
      <td>Represents the extent of damage or injury caused by the incident.</td>
    </tr>
    <tr>
      <td>authorities_contacted</td>
      <td>Represents the authorities or agencies that were contacted after the incident.</td>
    </tr>
    <tr>
      <td>incident_state</td>
      <td>Represents the state where the incident occurred.</td>
    </tr>
    <tr>
      <td>incident_city</td>
      <td>Represents the city where the incident occurred.</td>
    </tr>
    <tr>
      <td>incident_location</td>
      <td>Represents the specific location or address where the incident occurred.</td>
    </tr>
    <tr>
      <td>incident_hour_of_the_day</td>
      <td>Represents the hour of the day when the incident occurred.</td>
    </tr>
    <tr>
      <td>number_of_vehicles_involved</td>
      <td>Represents the total number of vehicles involved in the incident.</td>
    </tr>
    <tr>
      <td>property_damage</td>
      <td>Represents whether there was any damage to property in the incident.</td>
    </tr>
    <tr>
      <td>bodily_injuries</td>
      <td>Represents the number of bodily injuries resulting from the incident.</td>
    </tr>
    <tr>
      <td>witnesses</td>
      <td>Represents the number of witnesses present at the scene of the incident.</td>
    </tr>
    <tr>
      <td>police_report_available</td>
      <td>Represents whether a police report is available for the incident.</td>
    </tr>
    <tr>
      <td>total_claim_amount</td>
      <td>Represents the total amount claimed by the insured person for the incident.</td>
    </tr>
    <tr>
      <td>injury_claim</td>
      <td>Represents the amount claimed for injuries sustained in the incident.</td>
    </tr>
    <tr>
      <td>property_claim</td>
      <td>Represents the amount claimed for property damage in the incident.</td>
    </tr>
    <tr>
      <td>vehicle_claim</td>
      <td>Represents the amount claimed for vehicle damage in the incident.</td>
    </tr>
    <tr>
      <td>auto_make</td>
      <td>Represents the manufacturer of the insured vehicle.</td>
    </tr>
    <tr>
      <td>auto_model</td>
      <td>Represents the specific model of the insured vehicle.</td>
    </tr>
    <tr>
      <td>auto_year</td>
      <td>Represents the year of manufacture of the insured vehicle.</td>
    </tr>
    <tr>
      <td>fraud_reported</td>
      <td>Represents whether the claim was reported as fraudulent or not.</td>
    </tr>
    <tr>
      <td>_c39</td>
      <td>Represents an unknown or unspecified variable.</td>
    </tr>
  </tbody>
</table>`},{t:`md`,s:`## **1. Data Preparation**
In this step, read the dataset provided in CSV format and look at basic statistics of the data, including preview of data, dimension of data, column descriptions and data types.`},{t:`md`,s:`### **1.0 Import Libraries**`},{t:`code`,s:`# Supress unnecessary warnings
import warnings
warnings.filterwarnings("ignore")`},{t:`code`,s:`# Import necessary libraries
import numpy as np
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt`},{t:`md`,s:`### **1.1 Load the Data**`,ref:`1.1`},{t:`code`,s:`# Load the dataset
`},{t:`code`,s:`# Check at the first few entries
`},{t:`code`,s:`# Inspect the shape of the dataset
`},{t:`code`,s:`# Inspect the features in the dataset
`},{t:`md`,s:`## **2. Data Cleaning** <font color = red>[10 marks]</font>`},{t:`md`,s:`### **2.1 Handle null values** <font color = red>[2 marks]</font>`},{t:`md`,s:`#### **2.1.1** Examine the columns to determine if any value or column needs to be treated <font color="red">[1 Mark]</font>`,ref:`2.1.1`},{t:`code`,s:`# Check the number of missing values in each column
`},{t:`md`,s:`#### **2.1.2** Handle rows containing null values <font color="red">[1 Mark]</font>`,ref:`2.1.2`},{t:`code`,s:`# Handle the rows containing null values
`},{t:`md`,s:`### **2.2 Identify and handle redundant values and columns** <font color = red>[5 marks]</font>`},{t:`md`,s:`#### **2.2.1** Examine the columns to determine if any value or column needs to be treated <font color="red">[2 Mark]</font>`,ref:`2.2.1`},{t:`code`,s:`# Write code to display all the columns with their unique values and counts and check for redundant values
`},{t:`md`,s:`#### **2.2.2** Identify and drop any columns that are completely empty <font color="red">[1 Mark]</font>`,ref:`2.2.2`},{t:`code`,s:`# Identify and drop any columns that are completely empty
`},{t:`md`,s:`#### **2.2.3** Identify and drop rows where features have illogical or invalid values, such as negative values for features that should only have positive values <font color="red">[1 Mark]</font>`,ref:`2.2.3`},{t:`code`,s:`# Identify and drop rows where features have illogical or invalid values, such as negative values for features that should only have positive values
`},{t:`md`,s:`#### **2.2.4** Identify and remove columns where a large proportion of the values are unique or near-unique, as these columns are likely to be identifiers or have very limited predictive power <font color="red">[1 Mark]</font>`,ref:`2.2.4`},{t:`code`,s:`# Identify and remove columns that are likely to be identifiers or have very limited predictive power
`},{t:`code`,s:`# Check the dataset
`},{t:`md`,s:`### **2.3 Fix Data Types** <font color = red>[3 marks]</font>
Carefully examine the dataset and identify columns that contain date or time information but are not stored as the appropriate data type. Convert these columns to the correct datetime data type to enable proper analysis and manipulation of temporal information.`,ref:`2.3`},{t:`code`,s:`# Fix the data types of the columns with incorrect data types
`},{t:`code`,s:`# Check the features of the data again
`},{t:`md`,s:`## **3. Train-Validation Split** <font color = red>[5 marks]</font>`},{t:`md`,s:`### **3.1 Import required libraries**  `},{t:`code`,s:`# Import train-test-split
from sklearn.model_selection import train_test_split`},{t:`md`,s:`### **3.2 Define feature and target variables** <font color = red>[2 Marks]</font>`,ref:`3.2`},{t:`code`,s:`# Put all the feature variables in X

# Put the target variable in y
`},{t:`md`,s:`### **3.3 Split the data** <font color="red">[3 Marks]</font>`,ref:`3.3`},{t:`code`,s:`# Split the dataset into 70% train and 30% validation and use stratification on the target variable

# Reset index for all train and test sets
`},{t:`md`,s:`## **4. EDA on training data** <font color = red>[20 marks]</font>`},{t:`md`,s:`### **4.1 Perform univariate analysis** <font color = red>[5 marks]</font>`},{t:`md`,s:`#### **4.1.1** Identify and select numerical columns from training data for univariate analysis <font color = "red">[1 Mark]</font>`,ref:`4.1.1`},{t:`code`,s:`# Select numerical columns
`},{t:`md`,s:`#### **4.1.2** Visualise the distribution of selected numerical features using appropriate plots to understand their characteristics <font color = "red">[4 Marks]</font>`,ref:`4.1.2`},{t:`code`,s:`# Plot all the numerical columns to understand their distribution
`},{t:`md`,s:`### **4.2 Perform correlation analysis** <font color="red">[3 Marks]</font>`,ref:`4.2`},{t:`md`,s:` Investigate the relationships between numerical features to identify potential multicollinearity or dependencies. Visualise the correlation structure using an appropriate method to gain insights into feature relationships.`},{t:`code`,s:`# Create correlation matrix for numerical columns

# Plot Heatmap of the correlation matrix
`},{t:`md`,s:`### **4.3 Check class balance** <font color="red">[2 Marks]</font>`,ref:`4.3`},{t:`md`,s:`Examine the distribution of the target variable to identify potential class imbalances using visualisation for better understanding.`},{t:`code`,s:`# Plot a bar chart to check class balance
`},{t:`md`,s:`### **4.4 Perform bivariate analysis** <font color="red">[10 Marks]</font>`},{t:`md`,s:`#### **4.4.1** Target likelihood analysis for categorical variables. <font color="red">[5 Marks]</font>
Investigate the relationships between categorical features and the target variable by analysing the target event likelihood (for the \`'Y'\` event) for each level of every relevant categorical feature. Through this analysis, identify categorical features that do not contribute much in explaining the variation in the target variable.`,ref:`4.4.1`},{t:`code`,s:`# Write a function to calculate and analyse the target variable likelihood for categorical features
`},{t:`md`,s:`#### **4.4.2** Explore the relationships between numerical features and the target variable to understand their impact on the target outcome using appropriate visualisation techniques to identify trends and potential interactions. <font color="red">[5 Marks]</font>`,ref:`4.4.2`},{t:`code`,s:`# Visualise the relationship between numerical features and the target variable to understand their impact on the target outcome
`},{t:`md`,s:`## **5. EDA on validation data** <font color = red>[OPTIONAL]</font>`},{t:`md`,s:`### **5.1 Perform univariate analysis**`},{t:`md`,s:`#### **5.1.1** Identify and select numerical columns from training data for univariate analysis.`,ref:`5.1.1`},{t:`code`,s:`# Select numerical columns
`},{t:`md`,s:`#### **5.1.2** Visualise the distribution of selected numerical features using appropriate plots to understand their characteristics.`,ref:`5.1.2`},{t:`code`,s:`# Plot all the numerical columns to understand their distribution
`},{t:`md`,s:`### **5.2 Perform correlation analysis**`,ref:`5.2`},{t:`md`,s:` Investigate the relationships between numerical features to identify potential multicollinearity or dependencies. Visualise the correlation structure using an appropriate method to gain insights into feature relationships.`},{t:`code`,s:`# Create correlation matrix for numerical columns

# Plot Heatmap of the correlation matrix
`},{t:`md`,s:`### **5.3 Check class balance**`,ref:`5.3`},{t:`md`,s:`Examine the distribution of the target variable to identify potential class imbalances. Visualise the distribution for better understanding.`},{t:`code`,s:`# Plot a bar chart to check class balance
`},{t:`md`,s:`### **5.4 Perform bivariate analysis**`},{t:`md`,s:"#### **5.4.1** Target likelihood analysis for categorical variables.\nInvestigate the relationships between categorical features and the target variable by analysing the target event likelihood (for the `'Y'` event) for each level of every relevant categorical feature. Through this analysis, identify categorical features that do not contribute much in explaining the variation in the target variable.",ref:`5.4.1`},{t:`code`,s:`# Write a function to calculate and analyse the target variable likelihood for categorical features
`},{t:`md`,s:`#### **5.4.2** Explore the relationships between numerical features and the target variable to understand their impact on the target outcome. Utilise appropriate visualisation techniques to identify trends and potential interactions.`,ref:`5.4.2`},{t:`code`,s:`# Visualise the relationship between numerical features and the target variable to understand their impact on the target outcome
`},{t:`md`,s:`## **6. Feature Engineering** <font color = red>[25 marks]</font>`},{t:`md`,s:`### **6.1 Perform resampling** <font color="red">[3 Marks]</font>`,ref:`6.1`},{t:`md`,s:`Handle class imbalance in the training data by applying resampling technique.

Use the **RandomOverSampler** technique to balance the data and handle class imbalance. This method increases the number of samples in the minority class by randomly duplicating them, creating synthetic data points with similar characteristics. This helps prevent the model from being biased toward the majority class and improves its ability to predict the minority class more accurately.

**Note:** You can try other resampling techniques to handle class imbalance`},{t:`code`,s:`# Import RandomOverSampler from imblearn library
from imblearn.over_sampling import RandomOverSampler

# Perform resampling on training data
`},{t:`md`,s:`### **6.2 Feature Creation** <font color="red">[4 marks]</font>`,ref:`6.2`},{t:`md`,s:`Create new features from existing ones to enhance the model's ability to capture patterns in the data. This may involve deriving features from date/time columns, combining features, or creating interaction terms.`},{t:`code`,s:`# Create new features based on your understanding for both training and validation data
`},{t:`md`,s:`### **6.3 Handle redundant columns** <font color="red">[3 marks]</font>`,ref:`6.3`},{t:`md`,s:`Analyse the data to identify features that may be redundant or contribute minimal information toward predicting the target variable and drop them.

- You can consider features that exhibit high correlation with other variables, which you may have observed during the EDA phase.
- Features that don't strongly influence the prediction, which you may have observed during the EDA phase.
- Categorical columns with low value counts for some levels can be remapped to reduce number of unique levels, and features with very high counts for just one level may be removed, as they resemble unique identifier columns and do not provide substantial predictive value.
- Additionally, eliminate any columns from which the necessary features have already been extracted in the preceding step.`},{t:`code`,s:`# Drop redundant columns from training and validation data
`},{t:`code`,s:`# Check the data
`},{t:`md`,s:`### **6.4 Combine values in Categorical Columns** <font color="red">[6 Marks]</font>
During the EDA process, categorical columns with multiple unique values may be identified. To enhance model performance, it is essential to refine these categorical features by grouping values that have low frequency or provide limited predictive information.

Combine categories that occur infrequently or exhibit similar behavior to reduce sparsity and improve model generalisation.`,ref:`6.4`},{t:`code`,s:`# Combine categories that have low frequency or provide limited predictive information
`},{t:`md`,s:`### **6.5 Dummy variable creation** <font color="red">[6 Marks]</font>
Transform categorical variables into numerical representations using dummy variables. Ensure consistent encoding between training and validation data.`},{t:`md`,s:`#### **6.5.1** Identify categorical columns for dummy variable creation <font color="red">[1 Mark]</font>`,ref:`6.5.1`},{t:`code`,s:`# Identify the categorical columns for creating dummy variables
`},{t:`md`,s:`#### **6.5.2** Create dummy variables for categorical columns in training data <font color="red">[2 Marks]</font>`,ref:`6.5.2`},{t:`code`,s:`# Create dummy variables using the 'get_dummies' for categorical columns in training data
`},{t:`md`,s:`#### **6.5.3** Create dummy variables for categorical columns in validation data <font color="red">[2 Marks]</font>`,ref:`6.5.3`},{t:`code`,s:`# Create dummy variables using the 'get_dummies' for categorical columns in validation data
`},{t:`md`,s:`#### **6.5.4** Create dummy variable for dependent feature in training and validation data <font color = "red">[1 Mark]</font>`,ref:`6.5.4`},{t:`code`,s:`# Create dummy variable for dependent feature in training data

# Create dummy variable for dependent feature in validation data
`},{t:`md`,s:`### **6.6 Feature scaling** <font color = red>[3 marks]</font>
Scale numerical features to a common range to prevent features with larger values from dominating the model.  Choose a scaling method appropriate for the data and the chosen model. Apply the same scaling to both training and validation data.`,ref:`6.6`},{t:`code`,s:`# Import the necessary scaling tool from scikit-learn

# Scale the numeric features present in the training data

# Scale the numeric features present in the validation data
`},{t:`md`,s:`## **7. Model Building** <font color = red>[50 marks]</font>`},{t:`md`,s:`In this task, you will be building two machine learning models: Logistic Regression and Random Forest. Each model will go through a structured process to ensure optimal performance. The key steps for each model are outlined below:

**Logistic Regression Model**
- Feature Selection using RFECV – Identify the most relevant features using Recursive Feature Elimination with Cross-Validation.
- Model Building and Multicollinearity Assessment – Build the logistic regression model and analyse statistical aspects such as p-values and VIFs to detect multicollinearity.
- Model Training and Evaluation on Training Data – Fit the model on the training data and assess initial performance.
- Finding the Optimal Cutoff – Determine the best probability threshold by analysing the sensitivity-specificity tradeoff and precision-recall tradeoff.
- FInal Prediction and Evaluation on Training Data using the Optimal Cutoff – Generate final predictions using the selected cutoff and evaluate model performance.

**Random Forest Model**
- Get Feature Importances - Obtain the importance scores for each feature and select the important features to train the model.
- Model Evaluation on Training Data – Assess performance metrics on the training data.
- Check Model Overfitting using Cross-Validation – Evaluate generalisation by performing cross-validation.
- Hyperparameter Tuning using Grid Search – Optimise model performance by fine-tuning hyperparameters.
- Final Model and Evaluation on Training Data – Train the final model using the best parameters and assess its performance.`},{t:`md`,s:`### **7.1 Feature selection** <font color = red>[4 marks]</font>
Identify and select the most relevant features for building a logistic regression model using Recursive Feature Elimination with Cross-Validation (RFECV).`},{t:`md`,s:`#### **7.1.1** Import necessary libraries <font color="red">[1 Mark]</font>`,ref:`7.1.1`},{t:`code`,s:`# Import necessary libraries
`},{t:`md`,s:`#### **7.1.2** Perform feature selection <font color="red">[2 Mark]</font>`,ref:`7.1.2`},{t:`code`,s:`# Apply RFECV to identify the most relevant features
`},{t:`code`,s:`# Display the features ranking by RFECV in a DataFrame
`},{t:`md`,s:`#### **7.1.2** Retain the selected features <font color="red">[1 Mark]</font>`,ref:`7.1.2b`},{t:`code`,s:`# Put columns selected by RFECV into variable 'col'
`},{t:`md`,s:`### **7.2 Build Logistic Regression Model** <font color = red>[12 marks]</font>
After selecting the optimal features using RFECV, utilise these features to build a logistic regression model with Statsmodels. This approach enables a detailed statistical analysis of the model, including the assessment of p-values and Variance Inflation Factors (VIFs). Evaluating these metrics is crucial for detecting multicollinearity and ensuring that the selected predictors are not highly correlated.`},{t:`md`,s:`#### **7.2.1** Select relevant features and add constant in training data <font color="red">[1 Mark]</font>`,ref:`7.2.1`},{t:`code`,s:`# Select only the columns selected by RFECV
`},{t:`code`,s:`# Import statsmodels and add constant

# Check the data
`},{t:`md`,s:`#### **7.2.2** Fit logistic regression model <font color="red">[2 Marks]</font>`,ref:`7.2.2`},{t:`code`,s:`# Fit a logistic Regression model on X_train after adding a constant and output the summary
`},{t:`md`,s:`**Model Interpretation**

The output summary table will provide the features used for building model along with coefficient of each of the feature and their p-value. The p-value in a logistic regression model is used to assess the statistical significance of each coefficient. Lesser the p-value, more significant the feature is in the model.

A positive coefficient will indicate that an increase in the value of feature would increase the odds of the event occurring. On the other hand, a negative coefficient means the opposite, i.e, an increase in the value of feature would decrease the odds of the event occurring.`},{t:`md`,s:`Now check VIFs for presence of multicollinearity in the model.`},{t:`md`,s:`#### **7.2.3** Evaluate VIF of features to assess multicollinearity <font color="red">[2 Marks]</font>`,ref:`7.2.3`},{t:`code`,s:`# Import 'variance_inflation_factor'
from statsmodels.stats.outliers_influence import variance_inflation_factor`},{t:`code`,s:`# Make a VIF DataFrame for all the variables present
`},{t:`md`,s:`Proceed to the next step if p-values and VIFs are within acceptable ranges. If you observe high p-values or VIFs, drop the features and retrain the model. <font color="red">[THIS IS OPTIONAL]</font>`},{t:`md`,s:`#### **7.2.4** Make predictions on training data <font color = "red">[1 Mark]</font>`,ref:`7.2.4`},{t:`code`,s:`# Predict the probabilities on the training data

# Reshape it into an array
`},{t:`md`,s:`#### **7.2.5** Create a DataFrame that includes actual fraud reported flags, predicted probabilities, and a column indicating predicted classifications based on a cutoff value of 0.5 <font color="red">[1 Mark]</font>

`,ref:`7.2.5`},{t:`code`,s:`# Create a new DataFrame containing the actual fraud reported flag and the probabilities predicted by the model

# Create new column indicating predicted classifications based on a cutoff value of 0.5
`},{t:`md`,s:`**Model performance evaluation**

Evaluate the performance of the model based on predictions made on the training data.`},{t:`md`,s:`#### **7.2.6** Check the accuracy of the model <font color = "red">[1 Mark]</font>`,ref:`7.2.6`},{t:`code`,s:`# Import metrics from sklearn for evaluation
from sklearn import metrics

# Check the accuracy of the model
`},{t:`md`,s:`#### **7.2.7** Create a confusion matrix based on the predictions made on the training data <font color="red">[1 Mark]</font>`,ref:`7.2.7`},{t:`code`,s:`# Create confusion matrix
`},{t:`md`,s:`#### **7.2.8** Create variables for true positive, true negative, false positive and false negative <font color="red">[1 Mark]</font>`,ref:`7.2.8`},{t:`code`,s:`# Create variables for true positive, true negative, false positive and false negative
`},{t:`md`,s:`#### **7.2.9** Calculate sensitivity, specificity, precision, recall and F1-score <font color="red">[2 Marks]</font>`,ref:`7.2.9`},{t:`code`,s:`# Calculate the sensitivity


# Calculate the specificity


# Calculate Precision


# Calculate Recall


# Calculate F1 Score
`},{t:`md`,s:`### **7.3 Find the Optimal Cutoff** <font color = red>[12 marks]</font>
Find the optimal cutoff to improve model performance by evaluating various cutoff values and their impact on relevant metrics.`},{t:`md`,s:`#### **7.3.1** Plot ROC Curve  to visualise the trade-off between true positive rate and false positive rate across different classification thresholds <font color="red">[2 Marks]</font>`,ref:`7.3.1`},{t:`code`,s:`# Import libraries or function to plot the ROC curve


# Define ROC function
`},{t:`code`,s:`# Call the ROC function
`},{t:`md`,s:`**Sensitivity and Specificity tradeoff**

After analysing the area under the curve of the ROC, check the sensitivity and specificity tradeoff to find the optimal cutoff point.`},{t:`md`,s:`#### **7.3.2** Predict on training data at various probability cutoffs <font color="red">[1 Mark]</font>`,ref:`7.3.2`},{t:`code`,s:`# Create columns with different probability cutoffs to explore the impact of cutoff on model performance
`},{t:`md`,s:`#### **7.3.3** Plot accuracy, sensitivity, specificity at different values of probability cutoffs <font color="red">[2 Marks]</font>`,ref:`7.3.3`},{t:`code`,s:`# Create a DataFrame to see the values of accuracy, sensitivity, and specificity at different values of probability cutoffs
`},{t:`code`,s:`# Plot accuracy, sensitivity, and specificity at different values of probability cutoffs
`},{t:`md`,s:`#### **7.3.4** Create a column for final prediction based on optimal cutoff <font color="red">[1 Mark]</font>`,ref:`7.3.4`},{t:`code`,s:`# Create a column for final prediction based on the optimal cutoff
`},{t:`md`,s:`#### **7.3.5** Calculate the accuracy <font color="red">[1 Mark]</font>`,ref:`7.3.5`},{t:`code`,s:`# Check the accuracy now
`},{t:`md`,s:`#### **7.3.6** Create confusion matrix <font color="red">[1 Mark]</font>`,ref:`7.3.6`},{t:`code`,s:`# Create the confusion matrix once again
`},{t:`md`,s:`#### **7.3.7** Create variables for true positive, true negative, false positive and false negative <font color="red">[1 Mark]</font>`,ref:`7.3.7`},{t:`code`,s:`# Create variables for true positive, true negative, false positive and false negative
`},{t:`md`,s:`#### **7.3.8** Calculate sensitivity, specificity, precision, recall and F1-score of the model <font color="red">[2 Mark]</font>`,ref:`7.3.8`},{t:`code`,s:`# Calculate the sensitivity


# Calculate the specificity


# Calculate Precision


# Calculate Recall


# Calculate F1 Score
`},{t:`md`,s:`**Precision and Recall tradeoff**

Check optimal cutoff value by plotting precision-recall curve, and adjust the cutoff based on precision and recall tradeoff if required.`},{t:`code`,s:`# Import precision-recall curve function
from sklearn.metrics import precision_recall_curve`},{t:`md`,s:`#### **7.3.9** Plot precision-recall curve <font color="red">[1 Mark]</font>`,ref:`7.3.9`},{t:`code`,s:`# Plot precision-recall curve
`},{t:`md`,s:`### **7.4 Build Random Forest Model** <font color = red>[12 marks]</font>
Now that you have built a logistic regression model, let's move on to building a random forest model.`},{t:`md`,s:`#### **7.4.1** Import necessary libraries`,ref:`7.4.1`},{t:`code`,s:`# Import necessary libraries
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report
from sklearn.model_selection import cross_val_score, GridSearchCV`},{t:`md`,s:`#### **7.4.2** Build the random forest model <font color="red">[1 Mark]</font>`,ref:`7.4.2`},{t:`code`,s:`# Build a base random forest model
`},{t:`md`,s:`#### **7.4.3** Get feature importance scores and select important features <font color="red">[2 Marks]</font>`,ref:`7.4.3`},{t:`code`,s:`# Get feature importance scores from the trained model

# Create a DataFrame to visualise the importance scores
`},{t:`code`,s:`# Select features with high importance scores

# Create a new training data with only the selected features
`},{t:`md`,s:`#### **7.4.4** Train the model with selected features <font color="red">[1 Mark]</font>`,ref:`7.4.4`},{t:`code`,s:`# Fit the model on the training data with selected features
`},{t:`md`,s:`#### **7.4.5** Generate predictions on the training data <font color="red">[1 Mark]</font>`,ref:`7.4.5`},{t:`code`,s:`# Generate predictions on training data
`},{t:`md`,s:`#### **7.4.6** Check accuracy of the model <font color="red">[1 Mark]</font>`,ref:`7.4.6`},{t:`code`,s:`# Check accuracy of the model
`},{t:`md`,s:`#### **7.4.7** Create confusion matrix <font color="red">[1 Mark]</font>`,ref:`7.4.7`},{t:`code`,s:`# Create the confusion matrix to visualise the performance
`},{t:`md`,s:`#### **7.4.8** Create variables for true positive, true negative, false positive and false negative <font color="red">[1 Mark]</font>`,ref:`7.4.8`},{t:`code`,s:`# Create variables for true positive, true negative, false positive and false negative
`},{t:`md`,s:`#### **7.4.9** Calculate sensitivity, specificity, precision, recall and F1-score of the model <font color="red">[2 Marks]</font>`,ref:`7.4.9`},{t:`code`,s:`# Calculate the sensitivity


# Calculate the specificity


# Calculate Precision


# Calculate Recall


# Calculate F1 Score
`},{t:`md`,s:`#### **7.4.10** Check if the model is overfitting training data using cross validation <font color = "red">[2 marks]</font>`,ref:`7.4.10`},{t:`code`,s:`# Use cross validation to check if the model is overfitting
`},{t:`md`,s:`### **7.5 Hyperparameter Tuning** <font color = red>[10 Marks]</font>
 Enhance the performance of the random forest model by systematically exploring and selecting optimal hyperparameter values using grid search.`},{t:`md`,s:`#### **7.5.1** Use grid search to find the best hyperparameter values <font color = red>[2 Marks]</font>`,ref:`7.5.1`},{t:`code`,s:`# Use grid search to find the best hyperparamter values

# Best Hyperparameters
`},{t:`md`,s:`#### **7.5.2** Build a random forest model based on hyperparameter tuning results <font color = red>[1 Mark]</font>`,ref:`7.5.2`},{t:`code`,s:`# Building random forest model based on results of hyperparameter tuning
`},{t:`md`,s:`#### **7.5.3** Make predictions on training data <font color = red>[1 Mark]</font>`,ref:`7.5.3`},{t:`code`,s:`# Make predictions on training data
`},{t:`md`,s:`#### **7.5.4** Check accuracy of Random Forest Model <font color = red>[1 Mark]</font>`,ref:`7.5.4`},{t:`code`,s:`# Check the accuracy
`},{t:`md`,s:`#### **7.5.5** Create confusion matrix <font color = red>[1 Mark]</font>`,ref:`7.5.5`},{t:`code`,s:`# Create the confusion matrix
`},{t:`md`,s:`#### **7.5.6** Create variables for true positive, true negative, false positive and false negative <font color = red>[1 Mark]</font>`,ref:`7.5.6`},{t:`code`,s:`# Create variables for true positive, true negative, false positive and false negative
`},{t:`md`,s:`#### **7.5.7** Calculate sensitivity, specificity, precision, recall and F1-score of the model <font color = red>[3 Marks]</font>`,ref:`7.5.7`},{t:`code`,s:`# Calculate the sensitivity


# Calculate the specificity


# Calculate Precision


# Calculate Recall


# Calculate F1-Score
`},{t:`md`,s:`## **8. Prediction and Model Evaluation** <font color = red>[20 marks]</font>
Use the model from the previous step to make predictions on the validation data with the optimal cutoff. Then evaluate the model's performance using metrics such as accuracy, sensitivity, specificity, precision, and recall.`},{t:`md`,s:`### **8.1 Make predictions over validation data using logistic regression model** <font color = red>[10 marks]</font>`},{t:`md`,s:`#### **8.1.1** Select relevant features for validation data and add constant <font color="red">[1 Mark]</font>`,ref:`8.1.1`},{t:`code`,s:`# Select the relevant features for validation data

# Add constant to X_validation
`},{t:`md`,s:`#### **8.1.2** Make predictions over validation data <font color="red">[1 Mark]</font>`,ref:`8.1.2`},{t:`code`,s:`# Make predictions on the validation data and store it in the variable 'y_validation_pred'
`},{t:`md`,s:`#### **8.1.3** Create DataFrame with actual values and predicted values for validation data <font color="red">[2 Marks]</font>`,ref:`8.1.3`},{t:`code`,s:`#  Create DataFrame with actual values and predicted values for validation data
`},{t:`md`,s:`#### **8.1.4** Make final prediction based on cutoff value <font color="red">[1 Mark]</font>`,ref:`8.1.4`},{t:`code`,s:`# Make final predictions on the validation data using the optimal cutoff
`},{t:`md`,s:`#### **8.1.5** Check the accuracy of logistic regression model on validation data <font color="red">[1 Mark]</font>`,ref:`8.1.5`},{t:`code`,s:`# Check the accuracy
`},{t:`md`,s:`#### **8.1.6** Create confusion matrix <font color="red">[1 Mark]</font>`,ref:`8.1.6`},{t:`code`,s:`# Create the confusion matrix
`},{t:`md`,s:`#### **8.1.7** Create variables for true positive, true negative, false positive and false negative <font color="red">[1 Mark]</font>`,ref:`8.1.7`},{t:`code`,s:`# Create variables for true positive, true negative, false positive and false negative
`},{t:`md`,s:`#### **8.1.8** Calculate sensitivity, specificity, precision, recall and f1 score of the model <font color="red">[2 Marks]</font>`,ref:`8.1.8`},{t:`code`,s:`# Calculate the sensitivity


# Calculate the specificity


# Calculate Precision


# Calculate Recall


# Calculate F1 Score
`},{t:`md`,s:`### **8.2 Make predictions over validation data using random forest model** <font color = red>[10 marks]</font>`},{t:`md`,s:`#### **8.2.1** Select the important features and make predictions over validation data <font color="red">[2 Marks]</font>`,ref:`8.2.1`},{t:`code`,s:`# Select the relevant features for validation data

# Make predictions on the validation data
`},{t:`md`,s:`#### **8.2.2** Check accuracy of random forest model <font color="red">[1 Mark]</font>`,ref:`8.2.2`},{t:`code`,s:`# Check accuracy
`},{t:`md`,s:`#### **8.2.3** Create confusion matrix <font color="red">[1 Mark]</font>`,ref:`8.2.3`},{t:`code`,s:`# Create the confusion matrix
`},{t:`md`,s:`#### **8.2.4** Create variables for true positive, true negative, false positive and false negative <font color="red">[1 Mark]</font>`,ref:`8.2.4`},{t:`code`,s:`# Create variables for true positive, true negative, false positive and false negative
`},{t:`md`,s:`#### **8.2.5** Calculate sensitivity, specificity, precision, recall and F1-score of the model <font color="red">[5 Marks]</font>`,ref:`8.2.5`},{t:`code`,s:`# Calculate Sensitivity


# Calculate Specificity


# Calculate Precision


# Calculate Recall


# Calculate F1-score
`},{t:`md`,s:`## **Evaluation and Conclusion**
Write the conclusion.`}],guides:{"1.1":{vi:{think:`Đọc file claims vào DataFrame, in vài dòng và kích thước.`,steps:[`pd.read_csv('insurance_claims.csv').`,`head() và shape: file có 1.000 dòng, 40 cột.`],code:`import pandas as pd, numpy as np, matplotlib.pyplot as plt, seaborn as sns
df = pd.read_csv('/tmp/asg/all/2/Starter Notebook + Data/insurance_claims.csv')
print(df.shape)
print(df.iloc[:3, :12].to_string())`,lotus:`Mỗi dòng là một yêu cầu bồi hoàn của khách Lotus Spa (ví dụ khách đòi hoàn tiền gói liệu trình sau sự cố). Cột cuối fraud_reported = Y nếu hồ sơ bị xác định gian lận.`,trap:`Dữ liệu chỉ 1.000 dòng, nhỏ: kết quả dao động nhiều theo cách chia, đừng tin một con số duy nhất.`,read:[`(1000, 40) là số dòng và số cột.`,`Bảng mẫu cho thấy các cột hợp đồng (months_as_customer, policy_state...) và cột cuối fraud_reported.`],remark:`Có 1.000 hồ sơ bồi thường với 40 cột; mỗi hàng là một hồ sơ gồm thông tin hợp đồng, người được bảo hiểm và sự cố.`,howRemark:[`Báo số dòng và cột.`,`Nói cột mục tiêu là fraud_reported.`,`Nhóm các cột chính.`]},en:{think:`Read the claims file, print a few rows and the size.`,steps:[`pd.read_csv('insurance_claims.csv').`,`head() and shape: the file has 1,000 rows, 40 columns.`],code:`import pandas as pd, numpy as np, matplotlib.pyplot as plt, seaborn as sns
df = pd.read_csv('/tmp/asg/all/2/Starter Notebook + Data/insurance_claims.csv')
print(df.shape)
print(df.iloc[:3, :12].to_string())`,lotus:`Each row is a Lotus Spa customer refund claim (for example a customer demanding a refund of a treatment package after an incident). The last column fraud_reported = Y when the claim was found fraudulent.`,trap:`Only 1,000 rows, small: results swing with the split, so do not trust a single number.`,read:[`(1000, 40) is rows and columns.`,`The sample table shows policy columns (months_as_customer, policy_state...) and the last column fraud_reported.`],remark:`There are 1,000 claim records with 40 columns; each row is a claim with policy, insured person and incident details.`,howRemark:[`Report rows and columns.`,`Say the target is fraud_reported.`,`Group the main columns.`]}},"2.1.1":{vi:{think:`Đếm ô trống từng cột.`,steps:[`df.isnull().sum().`,`Hai cột có vấn đề: authorities_contacted thiếu 91 ô, và _c39 trống hoàn toàn (1.000 ô).`],code:`print(df.isnull().sum()[df.isnull().sum() > 0])`,lotus:`Hồ sơ không ghi cơ quan nào được liên hệ: có thể là chưa liên hệ ai, không phải thiếu thông tin.`,trap:`Vội dropna() sẽ bỏ 91 hồ sơ có ý nghĩa và cả cột _c39 làm bảng rỗng.`,read:[`Chỉ hiện cột có ô trống: authorities_contacted (91) và _c39 (1.000).`],remark:`authorities_contacted thiếu 91 ô và _c39 trống hoàn toàn (1.000 ô); các cột khác đầy đủ.`,howRemark:[`Nêu cột thiếu và số ô.`,`Phân biệt thiếu một phần và rỗng cả cột.`]},en:{think:`Count blanks per column.`,steps:[`df.isnull().sum().`,`Two columns matter: authorities_contacted misses 91 cells, and _c39 is entirely empty (1,000 cells).`],code:`print(df.isnull().sum()[df.isnull().sum() > 0])`,lotus:`A record with no authority listed may mean none was contacted, not missing information.`,trap:`Rushing dropna() would drop 91 meaningful records, and _c39 would empty the whole table.`,read:[`Only columns with blanks appear: authorities_contacted (91) and _c39 (1,000).`],remark:`authorities_contacted misses 91 cells and _c39 is entirely empty (1,000 cells); all other columns are complete.`,howRemark:[`Name the columns and blank counts.`,`Distinguish partly missing from entirely empty.`]}},"2.1.2":{vi:{think:`Xử lý ô trống: ở đây trống nghĩa là «không liên hệ ai», nên điền 'None' thay vì bỏ dòng.`,steps:[`Điền fillna('None') cho authorities_contacted.`,`Cột _c39 xử lý ở 2.2.2.`],code:`# authorities_contacted trống = chưa liên hệ cơ quan nào
df['authorities_contacted'] = df['authorities_contacted'].fillna('None')
print(df['authorities_contacted'].value_counts())`,lotus:`Một yêu cầu hoàn tiền mà không có công an hay xe cứu thương nào được gọi là một tín hiệu đáng xem, không phải ô hỏng.`,trap:`Điền bằng nhóm phổ biến nhất (Police) làm mất tín hiệu đó.`,read:[`Bảng đếm giá trị authorities_contacted sau khi điền: Police 292, Fire 223, Other 198, Ambulance 196, None 91.`],remark:`Ô trống nghĩa là «không liên hệ ai», nên điền None (91 hồ sơ) thay vì bỏ dòng; không mất hồ sơ nào.`,howRemark:[`Giải thích ý nghĩa của trống.`,`Báo số hồ sơ được giữ.`,`Nêu lý do không bỏ dòng.`]},en:{think:`Handle blanks: here blank means “no one contacted”, so fill with 'None' rather than drop rows.`,steps:[`fillna('None') for authorities_contacted.`,`Column _c39 is handled in 2.2.2.`],code:`# authorities_contacted trống = chưa liên hệ cơ quan nào
df['authorities_contacted'] = df['authorities_contacted'].fillna('None')
print(df['authorities_contacted'].value_counts())`,lotus:`A refund claim with no police or ambulance called is a signal worth seeing, not a broken cell.`,trap:`Filling with the most common group (Police) erases that signal.`,read:[`Counts of authorities_contacted after filling: Police 292, Fire 223, Other 198, Ambulance 196, None 91.`],remark:`A blank means “no one contacted”, so fill with None (91 records) instead of dropping rows; no record is lost.`,howRemark:[`Explain what blank means.`,`Report records kept.`,`State why rows were not dropped.`]}},"2.2.1":{vi:{think:`Xem các cột nhóm để tìm giá trị lạ hay thừa.`,steps:[`In value_counts từng cột có ít nhóm.`,`Chú ý dấu '?': collision_type 178, property_damage 360, police_report_available 343 dòng.`],code:`for c in df.select_dtypes(include=['object', 'str']).columns:
    if df[c].nunique() < 12: print(c, df[c].value_counts().to_dict())
print((df == '?').sum()[lambda s: s > 0])`,lotus:`Dấu '?' là «không biết», không phải một nhóm có thật. Nhưng ở đây nó chiếm tới một phần ba, nên giữ như một nhóm riêng «Unknown» thường hợp lý hơn bỏ dòng.`,trap:`Bỏ mọi dòng có '?' sẽ mất hơn một nửa dữ liệu.`,read:[`Mỗi dòng là một cột nhóm và số hồ sơ mỗi giá trị.`,`Tìm giá trị lạ, nhãn trùng nghĩa, hoặc nhóm quá nhỏ.`],remark:`Các cột nhóm sạch (ví dụ policy_state: OH 352, IL 338, IN 310; insured_sex: 537 nữ, 463 nam), không có nhãn lạ; chỉ cần chú ý nhóm nhỏ ở bước 6.4.`,howRemark:[`Duyệt từng cột tìm nhãn bất thường.`,`Nêu phân bố vài cột chính.`,`Báo nhóm quá nhỏ.`]},en:{think:`Inspect categorical columns for odd or redundant values.`,steps:[`Print value_counts for each low-cardinality column.`,`Notice '?': collision_type 178, property_damage 360, police_report_available 343 rows.`],code:`for c in df.select_dtypes(include=['object', 'str']).columns:
    if df[c].nunique() < 12: print(c, df[c].value_counts().to_dict())
print((df == '?').sum()[lambda s: s > 0])`,lotus:`'?' means “unknown”, not a real group. But it covers up to a third, so keeping it as its own “Unknown” group usually beats dropping rows.`,trap:`Dropping every row with '?' would lose over half the data.`,read:[`Each line is a categorical column and the count per value.`,`Look for odd labels, same-meaning labels or tiny groups.`],remark:`Categorical columns are clean (e.g. policy_state: OH 352, IL 338, IN 310; insured_sex: 537 female, 463 male), no odd labels; just watch small groups in 6.4.`,howRemark:[`Scan each column for abnormal labels.`,`State the spread of a few main columns.`,`Flag tiny groups.`]}},"2.2.2":{vi:{think:`Bỏ cột trống hoàn toàn.`,steps:[`Tìm cột mà isnull().all() là True: _c39.`,`drop(columns=...).`],code:`empty = [c for c in df.columns if df[c].isnull().all()]
print('cột rỗng hoàn toàn:', empty)
df = df.drop(columns=empty)`,lotus:`Cột chưa từng có dữ liệu thì không giúp gì.`,trap:`Dùng dropna(axis=1) mặc định chỉ bỏ cột có bất kỳ ô trống, bỏ nhầm cả authorities_contacted.`,read:[`Dòng chữ liệt kê cột rỗng hoàn toàn: _c39.`],remark:`_c39 chỉ chứa ô trống nên bị bỏ vì không có thông tin.`,howRemark:[`Nêu cột bỏ và lý do.`]},en:{think:`Drop entirely empty columns.`,steps:[`Find columns where isnull().all() is True: _c39.`,`drop(columns=...).`],code:`empty = [c for c in df.columns if df[c].isnull().all()]
print('cột rỗng hoàn toàn:', empty)
df = df.drop(columns=empty)`,lotus:`A column that never had data helps nothing.`,trap:`Default dropna(axis=1) drops any column with a blank, wrongly removing authorities_contacted too.`,read:[`The text lists entirely empty columns: _c39.`],remark:`_c39 holds only blanks so it is dropped; it carries no information.`,howRemark:[`Name the dropped column and reason.`]}},"2.2.3":{vi:{think:`Tìm và bỏ giá trị phi lý như số âm ở cột chỉ có thể dương.`,steps:[`Đếm số âm từng cột số.`,`umbrella_limit có một dòng -1.000.000: vô lý, bỏ dòng.`,`capital-loss âm 525 dòng là hợp lệ (lỗ vốn được ghi là số âm), không bỏ.`],code:`num = df.select_dtypes(include='number')
print((num < 0).sum()[lambda s: s > 0])
print(df[['umbrella_limit']].query('umbrella_limit < 0'))
df = df[df['umbrella_limit'] >= 0]
print(len(df))`,lotus:`Hạn mức bảo hiểm bổ sung không thể âm: dòng đó là lỗi nhập. Nhưng khoản lỗ vốn âm là ghi sổ bình thường.`,trap:`Thấy số âm là bỏ ngay làm mất 525 dòng hợp lệ của capital-loss.`,read:[`Bảng đầu: số giá trị phi lý ở mỗi cột (umbrella_limit có 1 giá trị âm).`,`Dòng mẫu: umbrella_limit = −1.000.000, một hồ sơ; 999 là số dòng còn lại.`],remark:`Một hồ sơ có umbrella_limit âm (−1.000.000) vì hạn mức không thể âm; bỏ hồ sơ này còn 999 dòng. capital-loss mang dấu âm theo quy ước nên giữ.`,howRemark:[`Phân biệt âm bất hợp lý và âm hợp lệ.`,`Báo số dòng còn lại.`,`Nói quyết định và lý do.`]},en:{think:`Find and drop impossible values such as negatives in columns that can only be positive.`,steps:[`Count negatives per numeric column.`,`umbrella_limit has one row of -1,000,000: impossible, drop the row.`,`capital-loss is negative on 525 rows, which is valid (losses are booked as negatives), keep.`],code:`num = df.select_dtypes(include='number')
print((num < 0).sum()[lambda s: s > 0])
print(df[['umbrella_limit']].query('umbrella_limit < 0'))
df = df[df['umbrella_limit'] >= 0]
print(len(df))`,lotus:`A supplementary coverage limit cannot be negative: that row is an entry error. But a capital loss as a negative is ordinary bookkeeping.`,trap:`Dropping every negative loses 525 valid capital-loss rows.`,read:[`First table: absurd values per column (umbrella_limit has 1 negative).`,`The sample row: umbrella_limit = −1,000,000, one record; 999 rows remain.`],remark:`One record has a negative umbrella_limit (−1,000,000), impossible for a limit; drop it leaving 999 rows. capital-loss is negative by convention so it stays.`,howRemark:[`Distinguish invalid from valid negatives.`,`Report rows remaining.`,`State the decision and reason.`]}},"2.2.4":{vi:{think:`Bỏ cột gần như mỗi dòng một giá trị (mã định danh), vì không giúp dự đoán.`,steps:[`Tính nunique()/len cho từng cột.`,`policy_number và incident_location có tỷ lệ 1,0; insured_zip 0,995.`,`Bỏ ba cột này.`],code:`ratio = (df.nunique() / len(df)).sort_values(ascending=False)
print(ratio.head(6).round(3))
ids = ['policy_number', 'incident_location', 'insured_zip']
df = df.drop(columns=ids)
print(df.shape)`,lotus:`Số hợp đồng và địa chỉ sự cố giống số thẻ nhân viên: mỗi người một số, mô hình sẽ học thuộc lòng.`,trap:`Giữ cột mã giúp train đạt điểm cao giả và tệ trên validation.`,read:[`Bảng tỷ lệ giá trị khác nhau trên số dòng: 1,000 nghĩa là mỗi dòng một giá trị (mã định danh).`,`(999, 36) là hình dạng sau khi bỏ các cột mã.`],remark:`policy_number và incident_location có mỗi dòng một giá trị (tỷ lệ 1,000) nên là mã định danh, bỏ đi còn 36 cột cho 999 dòng.`,howRemark:[`Nêu cột có tỷ lệ ≈ 1.`,`Giải thích vì sao mã không dự đoán được.`,`Báo hình dạng mới.`]},en:{think:`Drop near-unique columns (identifiers) because they do not help prediction.`,steps:[`nunique()/len for each column.`,`policy_number and incident_location have ratio 1.0; insured_zip 0.995.`,`Drop these three.`],code:`ratio = (df.nunique() / len(df)).sort_values(ascending=False)
print(ratio.head(6).round(3))
ids = ['policy_number', 'incident_location', 'insured_zip']
df = df.drop(columns=ids)
print(df.shape)`,lotus:`Policy numbers and incident addresses are like staff card numbers: one per person, the model would memorise.`,trap:`Keeping ID columns gives a falsely high train score and a poor validation score.`,read:[`Table of distinct values over rows: 1.000 means every row is unique (an identifier).`,`(999, 36) is the shape after dropping identifier columns.`],remark:`policy_number and incident_location are unique per row (ratio 1.000), so identifiers, dropped leaving 36 columns for 999 rows.`,howRemark:[`Name columns with ratio ≈ 1.`,`Explain why identifiers cannot predict.`,`Report the new shape.`]}},"2.3":{vi:{think:`Đổi cột ngày dạng chữ thành datetime.`,steps:[`to_datetime cho policy_bind_date và incident_date.`,`Kiểm tra dtypes.`],code:`df['policy_bind_date'] = pd.to_datetime(df['policy_bind_date'])
df['incident_date'] = pd.to_datetime(df['incident_date'])
print(df[['policy_bind_date', 'incident_date']].dtypes)`,lotus:`Ngày mua hợp đồng và ngày sự cố đổi thành ngày thật để tính được hợp đồng đã tồn tại bao lâu khi xảy ra sự cố (dùng ở 6.2).`,trap:`Trừ hai cột chữ thì lỗi.`,read:[`Hai dòng kiểu dữ liệu: policy_bind_date và incident_date đều là datetime64.`],remark:`Hai cột ngày đã đổi sang datetime nên tính được tuổi hợp đồng và tháng, thứ của sự cố ở bước 6.2.`,howRemark:[`Kiểm kiểu sau khi đổi.`,`Nói mục đích.`]},en:{think:`Convert text date columns to datetime.`,steps:[`to_datetime for policy_bind_date and incident_date.`,`Check dtypes.`],code:`df['policy_bind_date'] = pd.to_datetime(df['policy_bind_date'])
df['incident_date'] = pd.to_datetime(df['incident_date'])
print(df[['policy_bind_date', 'incident_date']].dtypes)`,lotus:`Policy purchase date and incident date become real dates so you can compute how long the policy existed at the incident (used in 6.2).`,trap:`Subtracting two text columns errors.`,read:[`Two dtype lines: policy_bind_date and incident_date are datetime64.`],remark:`Both date columns are now datetime so contract age and incident month/weekday can be computed in 6.2.`,howRemark:[`Check the type after conversion.`,`State the purpose.`]}},"3.2":{vi:{think:`Tách X và y (fraud_reported).`,steps:[`y = df['fraud_reported'].`,`X = df.drop(columns=['fraud_reported']).`],code:`y = df['fraud_reported']
X = df.drop(columns=['fraud_reported'])
print(X.shape, y.shape)`,lotus:`Câu hỏi: hồ sơ này có gian lận không? Đáp án (Y/N) đi riêng.`,trap:`Để fraud_reported lọt vào X cho điểm gần tuyệt đối giả tạo.`,read:[`Hai hình dạng: X (999, 35) và y (999,).`],remark:`X có 35 cột đầu vào, y là fraud_reported; cùng 999 dòng.`,howRemark:[`Kiểm số dòng hai bên.`]},en:{think:`Split X and y (fraud_reported).`,steps:[`y = df['fraud_reported'].`,`X = df.drop(columns=['fraud_reported']).`],code:`y = df['fraud_reported']
X = df.drop(columns=['fraud_reported'])
print(X.shape, y.shape)`,lotus:`The question: is this claim fraudulent? The answer (Y/N) goes separately.`,trap:`Letting fraud_reported slip into X gives a fake near-perfect score.`,read:[`Two shapes: X (999, 35) and y (999,).`],remark:`X has 35 input columns, y is fraud_reported; both 999 rows.`,howRemark:[`Check both row counts.`]}},"3.3":{vi:{think:`Chia 70/30 có stratify để hai tập có cùng tỷ lệ gian lận.`,steps:[`train_test_split(..., train_size=0.7, stratify=y, random_state=42).`,`Kiểm tra: train 699 dòng, validation 300, tỷ lệ gian lận cả hai đều 24,7%.`,`reset_index cho các tập.`],code:`from sklearn.model_selection import train_test_split
X_train, X_validation, y_train, y_validation = train_test_split(X, y, train_size=0.7, stratify=y, random_state=42)
for t in (X_train, X_validation, y_train, y_validation): t.reset_index(drop=True, inplace=True)
print(len(X_train), len(X_validation), y_train.value_counts(normalize=True).round(3).to_dict(), y_validation.value_counts(normalize=True).round(3).to_dict())`,lotus:`Chỉ 247 hồ sơ gian lận trên 1.000: nếu chia ngẫu nhiên không stratify, một tập có thể may mắn nhiều hơn hẳn.`,trap:`Quên stratify với dữ liệu mất cân bằng làm hai tập lệch tỷ lệ.`,read:[`Bộ ba: 699 dòng train, 300 dòng validation, và hai tỷ lệ gian lận (train và validation đều Y = 0,247).`],remark:`Chia 70/30 có stratify: cả hai tập đều có 24,7% hồ sơ gian lận nên so sánh công bằng.`,howRemark:[`Báo cỡ hai tập.`,`So tỷ lệ gian lận hai tập.`,`Giải thích stratify.`]},en:{think:`Split 70/30 with stratify so both sets share the same fraud rate.`,steps:[`train_test_split(..., train_size=0.7, stratify=y, random_state=42).`,`Check: train 699 rows, validation 300, fraud rate 24.7% in both.`,`reset_index on the sets.`],code:`from sklearn.model_selection import train_test_split
X_train, X_validation, y_train, y_validation = train_test_split(X, y, train_size=0.7, stratify=y, random_state=42)
for t in (X_train, X_validation, y_train, y_validation): t.reset_index(drop=True, inplace=True)
print(len(X_train), len(X_validation), y_train.value_counts(normalize=True).round(3).to_dict(), y_validation.value_counts(normalize=True).round(3).to_dict())`,lotus:`Only 247 fraud claims in 1,000: without stratify one set could get noticeably more by luck.`,trap:`Forgetting stratify on imbalanced data skews the rates between the sets.`,read:[`The trio: 699 train rows, 300 validation rows, and two fraud shares (both Y = 0.247).`],remark:`A stratified 70/30 split: both sets have 24.7% fraud so comparison is fair.`,howRemark:[`Report both sizes.`,`Compare the fraud share.`,`Explain stratify.`]}},"4.1.1":{vi:{think:`Chọn cột số của tập train.`,steps:[`select_dtypes(include='number').`],code:`num_cols = X_train.select_dtypes(include='number').columns
print(list(num_cols))`,lotus:`Tuổi, số tháng là khách, phí bảo hiểm, các khoản bồi hoàn...`,trap:`Không lấy từ toàn bộ df.`,read:[`Danh sách 16 cột số của train.`],remark:`Có 16 cột số, gồm tuổi, phí, các khoản đòi bồi thường và năm xe.`,howRemark:[`Đếm cột số.`,`Nhóm theo chủ đề.`]},en:{think:`Select numeric columns of the training set.`,steps:[`select_dtypes(include='number').`],code:`num_cols = X_train.select_dtypes(include='number').columns
print(list(num_cols))`,lotus:`Age, months as customer, premium, claim amounts...`,trap:`Do not take them from the whole df.`,read:[`The list of 16 numeric columns in train.`],remark:`There are 16 numeric columns, covering age, premium, claim amounts and vehicle year.`,howRemark:[`Count numeric columns.`,`Group by theme.`]}},"4.1.2":{vi:{think:`Vẽ phân phối từng cột số.`,steps:[`Histogram từng cột.`,`Chú ý cột lệch, nhiều số 0 (capital-gains, umbrella_limit) và nhóm giá trị rời rạc.`],code:`X_train[num_cols].hist(bins=25, figsize=(15, 11)); plt.tight_layout()`,lotus:`Phần lớn khoản bồi hoàn tập trung ở khoảng giữa, vài khoản rất lớn kéo đuôi.`,trap:`Cột như số tháng làm khách và tuổi tương quan mạnh nhau, sẽ thấy ở bước kế tiếp.`,read:[`Mỗi ô là phân phối một cột số: nhìn hình dạng, độ lệch và điểm xa.`],remark:`Các phân phối cho thấy hình dạng từng cột số; những cột tiền (total_claim_amount, claim) thường lệch phải.`,howRemark:[`Mô tả hình dạng cột chính.`,`Chỉ cột lệch hoặc có điểm xa.`]},en:{think:`Plot each numeric column's distribution.`,steps:[`A histogram per column.`,`Notice skewed columns, many zeros (capital-gains, umbrella_limit) and discrete value groups.`],code:`X_train[num_cols].hist(bins=25, figsize=(15, 11)); plt.tight_layout()`,lotus:`Most claim amounts sit mid-range, a few huge ones stretch the tail.`,trap:`Columns like months as customer and age correlate strongly, seen in the next step.`,read:[`Each panel is a numeric column's distribution: look at shape, skew and outliers.`],remark:`The distributions show each numeric column's shape; money columns (total_claim_amount, claims) tend to skew right.`,howRemark:[`Describe the main columns' shapes.`,`Point out skewed columns or outliers.`]}},"4.2":{vi:{think:`Tương quan giữa các cột số để thấy biến chồng lấn.`,steps:[`corr() và heatmap.`,`Cặp mạnh nhất: total_claim_amount với vehicle_claim (0,98), months_as_customer với age (0,92), total với injury/property claim (0,82).`],code:`plt.figure(figsize=(11, 8)); sns.heatmap(X_train[num_cols].corr(), annot=True, fmt='.2f', cmap='coolwarm', center=0, annot_kws={'size': 7})
c = X_train[num_cols].corr().abs().where(np.triu(np.ones((len(num_cols),)*2), 1).astype(bool)).stack().sort_values(ascending=False)
print(c.head(6).round(2))`,lotus:`Tổng bồi hoàn là tổng của ba khoản nhỏ, nên đương nhiên đi cùng nhau: giữ cả bốn cột là lặp lại cùng một thông tin.`,trap:`Giữ mọi biến tương quan cao làm hệ số logistic không ổn định (đa cộng tuyến).`,read:[`Danh sách cặp cột tương quan cao nhất.`,`total_claim_amount – vehicle_claim 0,98; months_as_customer – age 0,92.`],remark:`total_claim_amount gần như bằng vehicle_claim (0,98) vì tổng gồm các phần; tuổi và thời gian làm khách cũng đi cùng nhau (0,92). Cần bỏ bớt cột trùng thông tin ở 6.3.`,howRemark:[`Nêu cặp mạnh nhất kèm số.`,`Giải thích vì sao chồng lấn.`,`Nói hệ quả (đa cộng tuyến) và xử lý.`]},en:{think:`Correlation among numeric columns to see overlapping features.`,steps:[`corr() and a heatmap.`,`Strongest pairs: total_claim_amount with vehicle_claim (0.98), months_as_customer with age (0.92), total with injury/property claim (0.82).`],code:`plt.figure(figsize=(11, 8)); sns.heatmap(X_train[num_cols].corr(), annot=True, fmt='.2f', cmap='coolwarm', center=0, annot_kws={'size': 7})
c = X_train[num_cols].corr().abs().where(np.triu(np.ones((len(num_cols),)*2), 1).astype(bool)).stack().sort_values(ascending=False)
print(c.head(6).round(2))`,lotus:`Total claim is the sum of three smaller amounts so they naturally move together: keeping all four repeats the same information.`,trap:`Keeping every highly correlated feature makes logistic coefficients unstable (multicollinearity).`,read:[`The list of most correlated pairs.`,`total_claim_amount – vehicle_claim 0.98; months_as_customer – age 0.92.`],remark:`total_claim_amount nearly equals vehicle_claim (0.98) because the total is made of parts; age and customer tenure also move together (0.92). Drop duplicate-information columns in 6.3.`,howRemark:[`Name the strongest pair with numbers.`,`Explain the overlap.`,`State the consequence (multicollinearity) and fix.`]}},"4.3":{vi:{think:`Kiểm tra cân bằng lớp.`,steps:[`value_counts(normalize=True) và bar chart.`,`24,7% gian lận, 75,3% sạch: mất cân bằng vừa.`],code:`print(y_train.value_counts(normalize=True).round(3))
y_train.value_counts().plot(kind='bar', color=['#2f6f5e', '#b5543c'], title='Cân bằng lớp (train)')`,lotus:`Cứ 4 yêu cầu có 1 gian lận. Mô hình đoán «sạch» cho tất cả vẫn đúng 75%, nên độ chính xác đơn độc đánh lừa.`,trap:`Chỉ nhìn accuracy khi lớp mất cân bằng: 75% mà bắt được 0 vụ gian lận.`,read:[`Hai tỷ lệ: N (sạch) 0,753 và Y (gian lận) 0,247.`],remark:`24,7% hồ sơ gian lận so với 75,3% sạch: lớp mất cân bằng nên độ chính xác đơn thuần dễ đánh lừa và cần cân bằng ở 6.1.`,howRemark:[`Báo tỷ lệ hai lớp.`,`Nói mất cân bằng ảnh hưởng thế nào đến cách đo.`]},en:{think:`Check class balance.`,steps:[`value_counts(normalize=True) and a bar chart.`,`24.7% fraud, 75.3% clean: moderately imbalanced.`],code:`print(y_train.value_counts(normalize=True).round(3))
y_train.value_counts().plot(kind='bar', color=['#2f6f5e', '#b5543c'], title='Cân bằng lớp (train)')`,lotus:`One claim in four is fraud. A model saying “clean” for all is still 75% right, so accuracy alone misleads.`,trap:`Looking only at accuracy on imbalanced classes: 75% while catching zero fraud cases.`,read:[`Two shares: N (clean) 0.753 and Y (fraud) 0.247.`],remark:`24.7% fraud vs 75.3% clean: classes are imbalanced so plain accuracy can mislead and balancing is needed in 6.1.`,howRemark:[`Report both class shares.`,`State how imbalance affects measurement.`]}},"4.4.1":{vi:{think:`Phân tích khả năng gian lận theo từng nhóm của mỗi cột nhóm.`,steps:[`Viết hàm: groupby(cột) trung bình của cờ fraud (Y=1).`,`So với mức chung 24,7%.`,`Các cột nổi bật: insured_hobbies (chess 90,6%), incident_severity (Major Damage 60,9%), incident_state (OH 42,1%).`],code:`cat_cols = X_train.select_dtypes(include=['object', 'str']).columns
t = X_train.assign(fraud=(y_train == 'Y').astype(int))
def likelihood(col):
    return t.groupby(col)['fraud'].mean().sort_values(ascending=False)
overall = t['fraud'].mean()
rows = []
for c in cat_cols:
    s = likelihood(c)
    rows.append((c, s.index[0], round(s.iloc[0], 3), round(s.iloc[-1] - 0, 3), round(s.iloc[0] - s.iloc[-1], 3)))
tab = pd.DataFrame(rows, columns=['cột', 'nhóm có tỷ lệ gian lận cao nhất', 'tỷ lệ cao nhất', 'tỷ lệ thấp nhất', 'khoảng cách']).sort_values('khoảng cách', ascending=False)
print('tỷ lệ gian lận chung:', round(overall, 3)); print(tab.head(8).to_string(index=False))
fig, ax = plt.subplots(1, 3, figsize=(16, 4))
for a, c in zip(ax, ['incident_severity', 'insured_hobbies', 'collision_type']):
    likelihood(c).plot(kind='bar', ax=a, title=f'Tỷ lệ gian lận theo {c}'); a.axhline(overall, color='r', ls='--')
plt.tight_layout()`,lotus:`Nhóm khách có sở thích cờ vua có tỷ lệ gian lận tới 90%: đây là mẫu hình của bộ dữ liệu, cần xem lại để biết là tín hiệu thật hay do mẫu nhỏ.`,trap:`Nhóm hiếm (ít hồ sơ) cho tỷ lệ cao thất thường. Kiểm tra số lượng của nhóm trước khi tin.`,read:[`Bảng: mỗi dòng là một cột nhóm với nhóm có tỷ lệ gian lận cao nhất, cao nhất, thấp nhất và khoảng cách.`,`Khoảng cách lớn là cột có sức phân biệt mạnh.`,`Tỷ lệ chung 0,247 là mốc so sánh.`],remark:`insured_hobbies có khoảng cách lớn nhất: chess 0,906 so với thấp nhất 0,075 (chênh 0,831); incident_severity: Major Damage 0,609 so với 0,066. Hai cột này phân biệt gian lận rất mạnh.`,howRemark:[`Xếp cột theo khoảng cách.`,`Nêu nhóm cao nhất và thấp nhất.`,`So với tỷ lệ chung 0,247.`,`Nối với biến mô hình chọn sau.`]},en:{think:`Analyse fraud likelihood for each group of every categorical column.`,steps:[`Write a function: groupby(column) mean of the fraud flag (Y=1).`,`Compare to the overall 24.7%.`,`Standouts: insured_hobbies (chess 90.6%), incident_severity (Major Damage 60.9%), incident_state (OH 42.1%).`],code:`cat_cols = X_train.select_dtypes(include=['object', 'str']).columns
t = X_train.assign(fraud=(y_train == 'Y').astype(int))
def likelihood(col):
    return t.groupby(col)['fraud'].mean().sort_values(ascending=False)
overall = t['fraud'].mean()
rows = []
for c in cat_cols:
    s = likelihood(c)
    rows.append((c, s.index[0], round(s.iloc[0], 3), round(s.iloc[-1] - 0, 3), round(s.iloc[0] - s.iloc[-1], 3)))
tab = pd.DataFrame(rows, columns=['cột', 'nhóm có tỷ lệ gian lận cao nhất', 'tỷ lệ cao nhất', 'tỷ lệ thấp nhất', 'khoảng cách']).sort_values('khoảng cách', ascending=False)
print('tỷ lệ gian lận chung:', round(overall, 3)); print(tab.head(8).to_string(index=False))
fig, ax = plt.subplots(1, 3, figsize=(16, 4))
for a, c in zip(ax, ['incident_severity', 'insured_hobbies', 'collision_type']):
    likelihood(c).plot(kind='bar', ax=a, title=f'Tỷ lệ gian lận theo {c}'); a.axhline(overall, color='r', ls='--')
plt.tight_layout()`,lotus:`Customers with the chess hobby show 90% fraud: a pattern of this dataset, worth checking whether it is a real signal or a small-sample effect.`,trap:`Rare groups (few records) give odd high rates. Check a group's count before trusting it.`,read:[`Table: each row is a categorical column with its highest-fraud group, highest and lowest rates and the gap.`,`A large gap means strong discriminating power.`,`The overall 0.247 is the benchmark.`],remark:`insured_hobbies has the largest gap: chess 0.906 vs lowest 0.075 (gap 0.831); incident_severity: Major Damage 0.609 vs 0.066. These two columns separate fraud very strongly.`,howRemark:[`Rank columns by gap.`,`State the highest and lowest groups.`,`Compare with the overall 0.247.`,`Link to the variables the model picks later.`]}},"4.4.2":{vi:{think:`Quan hệ giữa cột số và gian lận: boxplot theo nhóm Y/N.`,steps:[`Boxplot cột số theo fraud.`,`Bồi hoàn trung bình: total_claim_amount 60.921 (gian lận) so với 50.293 (sạch).`],code:`tn = X_train.assign(fraud=y_train)
fig, ax = plt.subplots(1, 4, figsize=(17, 4))
for a, c in zip(ax, ['total_claim_amount', 'vehicle_claim', 'months_as_customer', 'policy_annual_premium']):
    sns.boxplot(data=tn, x='fraud', y=c, ax=a)
plt.tight_layout()
print(tn.groupby('fraud')[['total_claim_amount', 'vehicle_claim', 'injury_claim', 'property_claim']].mean().round(0).to_string())`,lotus:`Hồ sơ gian lận có khoản đòi cao hơn khoảng 21%, nhưng hai hộp chồng nhau nhiều: cột này mạnh một nửa, không đủ một mình.`,trap:`Dùng trung bình mà bỏ qua độ chồng của hai hộp làm tin quá mức vào khác biệt.`,read:[`Bảng trung bình theo nhóm N và Y cho các khoản đòi bồi thường.`],remark:`Hồ sơ gian lận đòi trung bình 60.921 so với 50.293 ở hồ sơ sạch (cao hơn khoảng 21%); khoản đòi xe 43.812 so với 36.109.`,howRemark:[`So trung bình hai nhóm cho từng cột.`,`Tính chênh phần trăm.`,`Nói chênh có đủ lớn để dự đoán không.`]},en:{think:`Numeric columns versus fraud: boxplots by Y/N.`,steps:[`Boxplot numeric columns by fraud.`,`Mean claim: total_claim_amount 60,921 (fraud) vs 50,293 (clean).`],code:`tn = X_train.assign(fraud=y_train)
fig, ax = plt.subplots(1, 4, figsize=(17, 4))
for a, c in zip(ax, ['total_claim_amount', 'vehicle_claim', 'months_as_customer', 'policy_annual_premium']):
    sns.boxplot(data=tn, x='fraud', y=c, ax=a)
plt.tight_layout()
print(tn.groupby('fraud')[['total_claim_amount', 'vehicle_claim', 'injury_claim', 'property_claim']].mean().round(0).to_string())`,lotus:`Fraud claims ask about 21% more, but the two boxes overlap a lot: the feature is half strong, not enough alone.`,trap:`Using the mean and ignoring the overlap of the two boxes overstates the difference.`,read:[`Table of means for groups N and Y across claim amounts.`],remark:`Fraud claims average 60,921 vs 50,293 for clean ones (about 21% higher); vehicle claims 43,812 vs 36,109.`,howRemark:[`Compare the two groups' means per column.`,`Compute the percentage gap.`,`Say whether it is big enough to predict.`]}},"5.1.1":{vi:{think:`Chọn cột số của validation (tùy chọn).`,steps:[`Làm giống bước tương ứng ở train.`,`So hình dạng hai tập.`],code:`# Làm theo ô starter, xem kết quả ở trên`,lotus:`Hai tập nên giống nhau; khác nhiều thì chia chưa tốt.`,trap:`Không dùng validation để chọn đặc trưng.`,read:[`Ô này không in kết quả hoặc hình giống train: so với bước tương ứng ở phần 4.`],remark:`Phần tùy chọn: lặp lại bước khám phá trên validation để chắc hai tập tương đồng với train.`,howRemark:[`Nói bước này chuẩn bị gì cho bước sau.`,`Ghi tên biến/đối tượng mới được tạo.`]},en:{think:`Select validation numeric columns (optional).`,steps:[`Do the same as the matching train step.`,`Compare the shapes of the two sets.`],code:`# Làm theo ô starter, xem kết quả ở trên`,lotus:`The two sets should look alike; very different means a poor split.`,trap:`Do not use validation to choose features.`,read:[`This cell prints nothing or a train-like chart: compare with the matching step in part 4.`],remark:`Optional part: repeats exploration on validation to confirm it resembles train.`,howRemark:[`Say what this step prepares for the next.`,`Note the new variable/object created.`]}},"5.1.2":{vi:{think:`Vẽ phân phối cột số ở validation, so với train.`,steps:[`Làm giống bước tương ứng ở train.`,`So hình dạng hai tập.`],code:`num_v = X_validation.select_dtypes(include='number').columns
X_validation[num_v].hist(bins=25, figsize=(15, 11)); plt.tight_layout()`,lotus:`Hai tập nên giống nhau; khác nhiều thì chia chưa tốt.`,trap:`Không dùng validation để chọn đặc trưng.`,read:[`Hình giống 4.1.2 nhưng trên validation.`],remark:`Phân phối các cột số ở validation có hình dạng tương tự train nên hai tập cùng nguồn.`,howRemark:[`So hai bộ biểu đồ.`,`Kết luận độ tương đồng.`]},en:{think:`Plot validation numeric distributions, compared with train.`,steps:[`Do the same as the matching train step.`,`Compare the shapes of the two sets.`],code:`num_v = X_validation.select_dtypes(include='number').columns
X_validation[num_v].hist(bins=25, figsize=(15, 11)); plt.tight_layout()`,lotus:`The two sets should look alike; very different means a poor split.`,trap:`Do not use validation to choose features.`,read:[`The chart mirrors 4.1.2 but on validation.`],remark:`Numeric distributions on validation look like train's, so both sets share the same source.`,howRemark:[`Compare the two chart sets.`,`Conclude similarity.`]}},"5.2":{vi:{think:`Tương quan cột số ở validation.`,steps:[`Làm giống bước tương ứng ở train.`,`So hình dạng hai tập.`],code:`# Làm theo ô starter, xem kết quả ở trên`,lotus:`Hai tập nên giống nhau; khác nhiều thì chia chưa tốt.`,trap:`Không dùng validation để chọn đặc trưng.`,read:[`Ô này không in kết quả hoặc hình giống train: so với bước tương ứng ở phần 4.`],remark:`Phần tùy chọn: lặp lại bước khám phá trên validation để chắc hai tập tương đồng với train.`,howRemark:[`Nói bước này chuẩn bị gì cho bước sau.`,`Ghi tên biến/đối tượng mới được tạo.`]},en:{think:`Numeric correlation in validation.`,steps:[`Do the same as the matching train step.`,`Compare the shapes of the two sets.`],code:`# Làm theo ô starter, xem kết quả ở trên`,lotus:`The two sets should look alike; very different means a poor split.`,trap:`Do not use validation to choose features.`,read:[`This cell prints nothing or a train-like chart: compare with the matching step in part 4.`],remark:`Optional part: repeats exploration on validation to confirm it resembles train.`,howRemark:[`Say what this step prepares for the next.`,`Note the new variable/object created.`]}},"5.3":{vi:{think:`Cân bằng lớp ở validation: 24,7% gian lận, như train nhờ stratify.`,steps:[`Làm giống bước tương ứng ở train.`,`So hình dạng hai tập.`],code:`print(y_validation.value_counts(normalize=True).round(3))`,lotus:`Hai tập nên giống nhau; khác nhiều thì chia chưa tốt.`,trap:`Không dùng validation để chọn đặc trưng.`,read:[`Hai tỷ lệ ở validation: N 0,753 và Y 0,247.`],remark:`Validation cũng 24,7% gian lận, đúng như train nhờ stratify.`,howRemark:[`So với 4.3.`]},en:{think:`Class balance in validation: 24.7% fraud, same as train thanks to stratify.`,steps:[`Do the same as the matching train step.`,`Compare the shapes of the two sets.`],code:`print(y_validation.value_counts(normalize=True).round(3))`,lotus:`The two sets should look alike; very different means a poor split.`,trap:`Do not use validation to choose features.`,read:[`Two shares on validation: N 0.753 and Y 0.247.`],remark:`Validation is also 24.7% fraud, exactly like train thanks to stratify.`,howRemark:[`Compare with 4.3.`]}},"5.4.1":{vi:{think:`Khả năng gian lận theo nhóm ở validation, so với train.`,steps:[`Làm giống bước tương ứng ở train.`,`So hình dạng hai tập.`],code:`# Làm theo ô starter, xem kết quả ở trên`,lotus:`Hai tập nên giống nhau; khác nhiều thì chia chưa tốt.`,trap:`Không dùng validation để chọn đặc trưng.`,read:[`Ô này không in kết quả; việc cần xem là chạy không báo lỗi.`],remark:`Lặp lại 4.4.1 trên validation; kỳ vọng các cột như insured_hobbies và incident_severity vẫn có khoảng cách lớn.`,howRemark:[`Nói bước này chuẩn bị gì cho bước sau.`,`Ghi tên biến/đối tượng mới được tạo.`]},en:{think:`Fraud likelihood by group in validation, compared to train.`,steps:[`Do the same as the matching train step.`,`Compare the shapes of the two sets.`],code:`# Làm theo ô starter, xem kết quả ở trên`,lotus:`The two sets should look alike; very different means a poor split.`,trap:`Do not use validation to choose features.`,read:[`This cell prints nothing; just check it ran without error.`],remark:`Repeats 4.4.1 on validation; expect columns like insured_hobbies and incident_severity to keep large gaps.`,howRemark:[`Say what this step prepares for the next.`,`Note the new variable/object created.`]}},"5.4.2":{vi:{think:`Cột số theo gian lận ở validation, so với train.`,steps:[`Làm giống bước tương ứng ở train.`,`So hình dạng hai tập.`],code:`# Làm theo ô starter, xem kết quả ở trên`,lotus:`Hai tập nên giống nhau; khác nhiều thì chia chưa tốt.`,trap:`Không dùng validation để chọn đặc trưng.`,read:[`Ô này không in kết quả hoặc hình giống train: so với bước tương ứng ở phần 4.`],remark:`Phần tùy chọn: lặp lại bước khám phá trên validation để chắc hai tập tương đồng với train.`,howRemark:[`Nói bước này chuẩn bị gì cho bước sau.`,`Ghi tên biến/đối tượng mới được tạo.`]},en:{think:`Numeric columns by fraud in validation, compared to train.`,steps:[`Do the same as the matching train step.`,`Compare the shapes of the two sets.`],code:`# Làm theo ô starter, xem kết quả ở trên`,lotus:`The two sets should look alike; very different means a poor split.`,trap:`Do not use validation to choose features.`,read:[`This cell prints nothing or a train-like chart: compare with the matching step in part 4.`],remark:`Optional part: repeats exploration on validation to confirm it resembles train.`,howRemark:[`Say what this step prepares for the next.`,`Note the new variable/object created.`]}},"6.1":{vi:{think:`Cân bằng lớp bằng RandomOverSampler: nhân bản ngẫu nhiên hồ sơ gian lận ở TRAIN cho bằng số hồ sơ sạch.`,steps:[`from imblearn.over_sampling import RandomOverSampler.`,`fit_resample(X_train, y_train) chỉ ở train.`,`Train từ 699 thành 1.052 dòng, mỗi lớp 526.`],code:`from imblearn.over_sampling import RandomOverSampler
ros = RandomOverSampler(random_state=42)
X_train, y_train = ros.fit_resample(X_train, y_train)
print(y_train.value_counts(), len(X_train))`,lotus:`Nhân bản các vụ gian lận để mô hình thấy đủ ví dụ, giống chép thêm các hồ sơ hiếm vào sổ luyện tập.`,trap:`Resample cả validation làm điểm đánh giá giả. Validation giữ tỷ lệ thật 24,7%.`,read:[`Bảng đếm lớp sau khi cân bằng: N 526 và Y 526, tổng 1.052.`],remark:`Cân bằng bằng cách nhân bản ngẫu nhiên hồ sơ gian lận ở TRAIN: 526 sạch và 526 gian lận (tổng 1.052). Validation giữ nguyên để đo trung thực.`,howRemark:[`Báo số hồ sơ mỗi lớp.`,`Nói chỉ cân bằng train.`,`Nêu rủi ro (nhân bản gây quá khớp).`]},en:{think:`Balance classes with RandomOverSampler: randomly duplicate fraud rows in TRAIN until they match clean rows.`,steps:[`from imblearn.over_sampling import RandomOverSampler.`,`fit_resample(X_train, y_train) on train only.`,`Train grows from 699 to 1,052 rows, 526 per class.`],code:`from imblearn.over_sampling import RandomOverSampler
ros = RandomOverSampler(random_state=42)
X_train, y_train = ros.fit_resample(X_train, y_train)
print(y_train.value_counts(), len(X_train))`,lotus:`Duplicate fraud cases so the model sees enough examples, like copying rare records into the practice log.`,trap:`Resampling validation too makes evaluation fake. Validation keeps the real 24.7%.`,read:[`Class counts after balancing: N 526 and Y 526, total 1,052.`],remark:`Balanced by randomly duplicating fraud records in TRAIN: 526 clean and 526 fraud (1,052 total). Validation is left as is for an honest measure.`,howRemark:[`Report records per class.`,`Say only train is balanced.`,`State the risk (duplication can cause overfitting).`]}},"6.2":{vi:{think:`Tạo đặc trưng mới từ cột cũ.`,steps:[`Số ngày từ lúc mua hợp đồng đến sự cố: policy_age_days.`,`Tháng và thứ trong tuần của sự cố.`,`Bồi hoàn mỗi xe: total_claim_amount / number_of_vehicles_involved.`,`Làm cùng cách cho train và validation.`],code:`for d in (X_train, X_validation):
    d['policy_age_days'] = (d['incident_date'] - d['policy_bind_date']).dt.days
    d['incident_month'] = d['incident_date'].dt.month
    d['incident_dow'] = d['incident_date'].dt.dayofweek
    d['claim_per_vehicle'] = d['total_claim_amount'] / d['number_of_vehicles_involved']
print(X_train[['policy_age_days', 'incident_month', 'incident_dow', 'claim_per_vehicle']].describe().round(1).to_string())`,lotus:`Một hợp đồng mới mua vài ngày đã có sự cố là tín hiệu đáng ngờ hơn ngày mua tuyệt đối.`,trap:`Một dòng có policy_age_days âm (-20) cho thấy ngày sự cố trước ngày mua: kiểm tra lại. Chỉ tạo đặc trưng bằng cách chia bằng các cột đã có, không dùng y.`,read:[`Bảng describe cho 4 đặc trưng mới: policy_age_days, incident_month, incident_dow, claim_per_vehicle.`,`Chú ý min của policy_age_days là −20.`],remark:`Đặc trưng mới gồm tuổi hợp đồng (trung bình 4.654 ngày), tháng, thứ và đòi bồi thường trên mỗi xe (trung bình 37.040); min −20 ngày cho thấy một số sự cố xảy ra trước ngày ký hợp đồng, đáng nghi.`,howRemark:[`Nêu đặc trưng mới và công thức.`,`Kiểm giá trị bất thường.`,`Nói giá trị của đặc trưng.`]},en:{think:`Create new features from existing columns.`,steps:[`Days from policy purchase to incident: policy_age_days.`,`Month and weekday of the incident.`,`Claim per vehicle: total_claim_amount / number_of_vehicles_involved.`,`Do the same for train and validation.`],code:`for d in (X_train, X_validation):
    d['policy_age_days'] = (d['incident_date'] - d['policy_bind_date']).dt.days
    d['incident_month'] = d['incident_date'].dt.month
    d['incident_dow'] = d['incident_date'].dt.dayofweek
    d['claim_per_vehicle'] = d['total_claim_amount'] / d['number_of_vehicles_involved']
print(X_train[['policy_age_days', 'incident_month', 'incident_dow', 'claim_per_vehicle']].describe().round(1).to_string())`,lotus:`A policy bought only days before the incident is more suspicious than the absolute purchase date.`,trap:`A row with negative policy_age_days (-20) shows the incident before purchase: recheck. Build features only from existing columns, never from y.`,read:[`describe table for 4 new features: policy_age_days, incident_month, incident_dow, claim_per_vehicle.`,`Note policy_age_days min is −20.`],remark:`New features: contract age (mean 4,654 days), month, weekday and claim per vehicle (mean 37,040); the −20-day minimum shows some incidents happened before the contract date, which is suspicious.`,howRemark:[`Name the new features and formulas.`,`Check unusual values.`,`State the value of the features.`]}},"6.3":{vi:{think:`Bỏ cột thừa: tương quan cao hoặc ít thông tin.`,steps:[`Bỏ injury/property/vehicle claim vì tổng đã có total_claim_amount (4.2).`,`Bỏ age vì giống months_as_customer; bỏ hai cột ngày gốc vì đã có policy_age_days.`,`Làm cùng cách cho train và validation.`],code:`drop = ['policy_bind_date', 'incident_date', 'injury_claim', 'property_claim', 'vehicle_claim', 'auto_model', 'age']
for d in (X_train, X_validation): d.drop(columns=drop, inplace=True)
print(X_train.shape)`,lotus:`Giữ tổng, bỏ ba khoản thành phần: cùng thông tin, ít cột hơn.`,trap:`Bỏ ở train mà quên bỏ ở validation làm số cột lệch.`,read:[`(1052, 32) là hình dạng sau khi bỏ cột thừa.`],remark:`Bỏ các cột tương quan cao hoặc ít thông tin (ví dụ khoản đòi con của total_claim_amount), còn 32 cột.`,howRemark:[`Báo số cột sau khi bỏ.`,`Nêu lý do bỏ.`]},en:{think:`Drop redundant columns: highly correlated or low in information.`,steps:[`Drop injury/property/vehicle claim since total_claim_amount holds the sum (4.2).`,`Drop age because it matches months_as_customer; drop the two raw dates since policy_age_days exists.`,`Do the same for train and validation.`],code:`drop = ['policy_bind_date', 'incident_date', 'injury_claim', 'property_claim', 'vehicle_claim', 'auto_model', 'age']
for d in (X_train, X_validation): d.drop(columns=drop, inplace=True)
print(X_train.shape)`,lotus:`Keep the total, drop the three parts: same information, fewer columns.`,trap:`Dropping on train but forgetting validation leaves mismatched column counts.`,read:[`(1052, 32) is the shape after dropping redundant columns.`],remark:`Dropped highly correlated or low-information columns (e.g. components of total_claim_amount), leaving 32 columns.`,howRemark:[`Report columns after dropping.`,`State the reasons.`]}},"6.4":{vi:{think:`Gộp nhóm hiếm trong cột nhóm để mô hình khỏe hơn.`,steps:[`Với incident_state gộp bang ít hồ sơ (PA, OH) thành 'Other'.`,`Với insured_hobbies giữ chess và cross-fit riêng, gộp còn lại thành 'other'.`,`Dùng cùng quy tắc cho validation.`],code:`# gộp nhóm hiếm: bang xảy ra sự cố và sở thích
rare_states = X_train['incident_state'].value_counts()[lambda s: s < 60].index
hobby_top = ['chess', 'cross-fit']
for d in (X_train, X_validation):
    d['incident_state'] = d['incident_state'].replace({s: 'Other' for s in rare_states})
    d['insured_hobbies'] = d['insured_hobbies'].where(d['insured_hobbies'].isin(hobby_top), 'other')
print(X_train['incident_state'].value_counts().to_dict()); print(X_train['insured_hobbies'].value_counts().to_dict())`,lotus:`Hai nhóm cờ vua và cross-fit đủ khác biệt nên giữ riêng; mười một sở thích còn lại gộp một nhóm.`,trap:`Gộp theo kết quả y trên toàn bộ dữ liệu làm rò rỉ. Chọn nhóm giữ riêng theo EDA ở train.`,read:[`Hai bảng đếm: policy_state gộp nhóm hiếm thành Other; insured_hobbies thành chess, cross-fit, other.`],remark:`Gộp nhóm hiếm: bang còn SC 283, NY 257, WV 194, NC 135, VA 109 và Other 74; sở thích còn other 902, chess 101, cross-fit 49. Ít nhóm hơn thì mô hình ổn định hơn.`,howRemark:[`Nêu nhóm sau khi gộp.`,`Giải thích vì sao gộp.`,`Nhớ chess và cross-fit là hai sở thích nổi bật ở 4.4.1.`]},en:{think:`Combine rare groups in categorical columns for a sturdier model.`,steps:[`For incident_state combine low-count states (PA, OH) into 'Other'.`,`For insured_hobbies keep chess and cross-fit separate, merge the rest into 'other'.`,`Apply the same rule to validation.`],code:`# gộp nhóm hiếm: bang xảy ra sự cố và sở thích
rare_states = X_train['incident_state'].value_counts()[lambda s: s < 60].index
hobby_top = ['chess', 'cross-fit']
for d in (X_train, X_validation):
    d['incident_state'] = d['incident_state'].replace({s: 'Other' for s in rare_states})
    d['insured_hobbies'] = d['insured_hobbies'].where(d['insured_hobbies'].isin(hobby_top), 'other')
print(X_train['incident_state'].value_counts().to_dict()); print(X_train['insured_hobbies'].value_counts().to_dict())`,lotus:`The chess and cross-fit groups differ enough to keep separate; the other eleven hobbies merge into one.`,trap:`Merging by y results on the full data leaks. Choose the groups to keep from train EDA.`,read:[`Two count tables: policy_state with rare groups merged to Other; insured_hobbies to chess, cross-fit, other.`],remark:`Rare groups merged: states left SC 283, NY 257, WV 194, NC 135, VA 109 and Other 74; hobbies left other 902, chess 101, cross-fit 49. Fewer groups make the model steadier.`,howRemark:[`Name the groups after merging.`,`Explain why merge.`,`Remember chess and cross-fit stood out in 4.4.1.`]}},"6.5.1":{vi:{think:`Xác định cột nhóm cần dummy.`,steps:[`select_dtypes(include=['object','str']).`],code:`cat_cols = X_train.select_dtypes(include=['object', 'str']).columns
print(list(cat_cols))`,lotus:`Mọi cột chữ còn lại.`,trap:`Quên cột vừa gộp ở 6.4.`,read:[`Danh sách 16 cột nhóm cần dummy.`],remark:`16 cột chữ cần chuyển thành 0/1 vì mô hình chỉ đọc số.`,howRemark:[`Đếm cột.`,`Nói vì sao cần dummy.`]},en:{think:`Identify categorical columns needing dummies.`,steps:[`select_dtypes(include=['object','str']).`],code:`cat_cols = X_train.select_dtypes(include=['object', 'str']).columns
print(list(cat_cols))`,lotus:`Every remaining text column.`,trap:`Forgetting the columns just merged in 6.4.`,read:[`The list of 16 categorical columns needing dummies.`],remark:`16 text columns must become 0/1 since the model reads only numbers.`,howRemark:[`Count columns.`,`Say why dummies.`]}},"6.5.2":{vi:{think:`Tạo dummy cho train.`,steps:[`get_dummies(drop_first=True, dtype=int).`,`Ghép vào X_train, bỏ cột gốc.`,`Train có 88 cột sau bước này.`],code:`dt = pd.get_dummies(X_train[cat_cols], drop_first=True, dtype=int)
X_train = pd.concat([X_train.drop(columns=cat_cols), dt], axis=1)
print(X_train.shape)`,lotus:`Mỗi nhóm thành một cột 0/1.`,trap:`Không drop_first sinh cột trùng lặp.`,read:[`(1052, 88): số cột của train sau khi tạo dummy.`],remark:`Sau dummy, train có 88 cột; mỗi nhóm của một cột chữ thành một cột 0/1.`,howRemark:[`Báo hình dạng mới.`,`Giải thích vì sao tăng cột.`]},en:{think:`Create dummies for train.`,steps:[`get_dummies(drop_first=True, dtype=int).`,`Concatenate to X_train, drop originals.`,`Train has 88 columns after this step.`],code:`dt = pd.get_dummies(X_train[cat_cols], drop_first=True, dtype=int)
X_train = pd.concat([X_train.drop(columns=cat_cols), dt], axis=1)
print(X_train.shape)`,lotus:`Each group becomes a 0/1 column.`,trap:`Without drop_first you get duplicate columns.`,read:[`(1052, 88): train's column count after dummies.`],remark:`After dummies train has 88 columns; each level of a text column becomes a 0/1 column.`,howRemark:[`Report the new shape.`,`Explain why columns grew.`]}},"6.5.3":{vi:{think:`Tạo dummy cho validation, đúng bộ cột của train.`,steps:[`get_dummies rồi reindex(columns=X_train.columns, fill_value=0).`],code:`dv = pd.get_dummies(X_validation[cat_cols], drop_first=True, dtype=int)
X_validation = pd.concat([X_validation.drop(columns=cat_cols), dv], axis=1).reindex(columns=X_train.columns, fill_value=0)
print(X_validation.shape)`,lotus:`Hai sổ phải có cùng bộ cột.`,trap:`Một nhóm có ở train mà không có ở validation làm lệch cột: reindex xử lý.`,read:[`(300, 88): validation có đúng 88 cột như train.`],remark:`Validation có 88 cột trùng bộ cột của train nên mô hình áp dụng trực tiếp.`,howRemark:[`Kiểm cùng số cột với train.`]},en:{think:`Create dummies for validation with exactly train's columns.`,steps:[`get_dummies then reindex(columns=X_train.columns, fill_value=0).`],code:`dv = pd.get_dummies(X_validation[cat_cols], drop_first=True, dtype=int)
X_validation = pd.concat([X_validation.drop(columns=cat_cols), dv], axis=1).reindex(columns=X_train.columns, fill_value=0)
print(X_validation.shape)`,lotus:`Both logs must have the same columns.`,trap:`A group present in train but absent in validation misaligns columns: reindex fixes it.`,read:[`(300, 88): validation has exactly 88 columns like train.`],remark:`Validation has the same 88 columns as train so the model applies directly.`,howRemark:[`Check same columns as train.`]}},"6.5.4":{vi:{think:`Mã hóa biến mục tiêu: Y thành 1, N thành 0.`,steps:[`(y == 'Y').astype(int) cho cả hai tập.`,`Kiểm tra: train 0,5 (sau resample), validation 0,247.`],code:`y_train = (y_train == 'Y').astype(int); y_validation = (y_validation == 'Y').astype(int)
print(y_train.mean().round(3), y_validation.mean().round(3))`,lotus:`1 nghĩa là hồ sơ gian lận: mô hình đoán xác suất gian lận.`,trap:`Mã hóa ngược làm đảo mọi chỉ số.`,read:[`Hai số: 0,5 và 0,247 là tỷ lệ gian lận của train đã cân bằng và của validation.`],remark:`Sau khi mã hóa Y = 1 và N = 0, train cân bằng có 50% gian lận còn validation giữ 24,7%.`,howRemark:[`Giải thích hai tỷ lệ khác nhau.`,`Nhắc không cân bằng validation.`]},en:{think:`Encode the target: Y to 1, N to 0.`,steps:[`(y == 'Y').astype(int) for both sets.`,`Check: train 0.5 (after resampling), validation 0.247.`],code:`y_train = (y_train == 'Y').astype(int); y_validation = (y_validation == 'Y').astype(int)
print(y_train.mean().round(3), y_validation.mean().round(3))`,lotus:`1 means a fraud claim: the model predicts the probability of fraud.`,trap:`Reversed encoding flips every metric.`,read:[`Two numbers: 0.5 and 0.247 are the fraud share of the balanced train and of validation.`],remark:`After encoding Y = 1 and N = 0, balanced train has 50% fraud while validation stays at 24.7%.`,howRemark:[`Explain why the two rates differ.`,`Remind not to balance validation.`]}},"6.6":{vi:{think:`Chuẩn hóa cột số: fit trên train, transform trên cả hai.`,steps:[`StandardScaler.`,`fit_transform trên train, transform trên validation.`,`16 cột số được chuẩn hóa; các cột dummy 0/1 giữ nguyên.`],code:`from sklearn.preprocessing import StandardScaler
sc_cols = [c for c in X_train.columns if X_train[c].nunique() > 2]
scaler = StandardScaler()
X_train[sc_cols] = scaler.fit_transform(X_train[sc_cols]); X_validation[sc_cols] = scaler.transform(X_validation[sc_cols])
print(len(sc_cols), 'cột số được chuẩn hóa')`,lotus:`Số tiền hàng chục nghìn và số xe một hai đơn vị phải cùng thang.`,trap:`fit scaler trên validation làm lộ thông tin.`,read:[`Dòng chữ: 16 cột số được chuẩn hóa.`],remark:`Chuẩn hóa 16 cột số (fit trên train, áp lên validation) để hệ số so sánh được.`,howRemark:[`Nói chuẩn hóa fit chỉ trên train.`]},en:{think:`Scale numeric columns: fit on train, transform both.`,steps:[`StandardScaler.`,`fit_transform on train, transform on validation.`,`16 numeric columns scaled; 0/1 dummy columns left as is.`],code:`from sklearn.preprocessing import StandardScaler
sc_cols = [c for c in X_train.columns if X_train[c].nunique() > 2]
scaler = StandardScaler()
X_train[sc_cols] = scaler.fit_transform(X_train[sc_cols]); X_validation[sc_cols] = scaler.transform(X_validation[sc_cols])
print(len(sc_cols), 'cột số được chuẩn hóa')`,lotus:`Amounts in tens of thousands and vehicle counts of one or two must share a scale.`,trap:`Fitting the scaler on validation leaks information.`,read:[`Text: 16 numeric columns scaled.`],remark:`Scaled 16 numeric columns (fit on train, applied to validation) so coefficients are comparable.`,howRemark:[`Say scaling is fit only on train.`]}},"7.1.1":{vi:{think:`Nạp thư viện để chọn biến (RFECV).`,steps:[`LogisticRegression và RFECV.`],code:`# Làm theo ô starter, xem kết quả ở trên`,lotus:`Chuẩn bị chọn các biến đáng giữ.`,trap:`Không có.`,read:[`Ô này không in kết quả; việc cần xem là chạy không báo lỗi.`],remark:`Đã nạp công cụ RFECV.`,howRemark:[`Nói bước này chuẩn bị gì cho bước sau.`,`Ghi tên biến/đối tượng mới được tạo.`]},en:{think:`Import libraries for feature selection (RFECV).`,steps:[`LogisticRegression and RFECV.`],code:`# Làm theo ô starter, xem kết quả ở trên`,lotus:`Get ready to choose which features to keep.`,trap:`None.`,read:[`This cell prints nothing; just check it ran without error.`],remark:`RFECV is loaded.`,howRemark:[`Say what this step prepares for the next.`,`Note the new variable/object created.`]}},"7.1.2":{vi:{think:`Dùng RFECV: bỏ dần biến yếu nhất và dùng cross-validation để chọn số biến tốt nhất.`,steps:[`RFECV(LogisticRegression(), cv=5, scoring='accuracy').`,`Biểu đồ accuracy theo số biến, chọn đỉnh.`,`Với dữ liệu này, số biến tối ưu là 9.`],code:`from sklearn.linear_model import LogisticRegression
from sklearn.feature_selection import RFECV
rfecv = RFECV(LogisticRegression(max_iter=2000), step=1, cv=5, scoring='accuracy', min_features_to_select=5).fit(X_train, y_train)
print('số biến tối ưu:', rfecv.n_features_)
plt.plot(range(5, 5 + len(rfecv.cv_results_['mean_test_score'])), rfecv.cv_results_['mean_test_score']); plt.xlabel('số biến'); plt.ylabel('accuracy CV')
rank = pd.DataFrame({'feature': X_train.columns, 'rank': rfecv.ranking_}).sort_values('rank')
print(rank.head(12).to_string(index=False))`,lotus:`Chín yếu tố đủ để đoán gian lận: nghề, sở thích, mức độ hư hại, hãng xe.`,trap:`Không có cross-validation thì chọn số biến theo điểm train luôn nghiêng về nhiều biến nhất.`,read:[`Dòng đầu: số biến tối ưu 9.`,`Bảng xếp hạng: rank 1 là biến được giữ.`,`Biểu đồ: accuracy theo số biến, tìm đỉnh.`],remark:`RFECV với cross-validation chọn 9 biến, gồm incident_severity (Minor, Trivial, Total Loss), insured_hobbies, insured_occupation và auto_make; đúng với hai cột mạnh nhất ở 4.4.1.`,howRemark:[`Nêu số biến tối ưu.`,`Nhóm biến theo chủ đề.`,`Đối chiếu với 4.4.1.`]},en:{think:`Use RFECV: drop the weakest feature step by step and use cross-validation to pick the best count.`,steps:[`RFECV(LogisticRegression(), cv=5, scoring='accuracy').`,`Plot accuracy against feature count, choose the peak.`,`For this data the optimal count is 9.`],code:`from sklearn.linear_model import LogisticRegression
from sklearn.feature_selection import RFECV
rfecv = RFECV(LogisticRegression(max_iter=2000), step=1, cv=5, scoring='accuracy', min_features_to_select=5).fit(X_train, y_train)
print('số biến tối ưu:', rfecv.n_features_)
plt.plot(range(5, 5 + len(rfecv.cv_results_['mean_test_score'])), rfecv.cv_results_['mean_test_score']); plt.xlabel('số biến'); plt.ylabel('accuracy CV')
rank = pd.DataFrame({'feature': X_train.columns, 'rank': rfecv.ranking_}).sort_values('rank')
print(rank.head(12).to_string(index=False))`,lotus:`Nine factors suffice to predict fraud: occupation, hobby, damage severity, car make.`,trap:`Without cross-validation, choosing by train score always leans toward the most features.`,read:[`First line: optimal number of features 9.`,`Ranking table: rank 1 are kept.`,`Chart: accuracy by number of features, find the peak.`],remark:`RFECV with cross-validation picks 9 features, including incident_severity (Minor, Trivial, Total Loss), insured_hobbies, insured_occupation and auto_make; matching the strongest columns in 4.4.1.`,howRemark:[`State the optimal count.`,`Group features by theme.`,`Cross-check with 4.4.1.`]}},"7.1.2b":{vi:{think:`Giữ lại các biến RFECV chọn.`,steps:[`col = X_train.columns[rfecv.support_].`],code:`col = X_train.columns[rfecv.support_]
print(len(col), list(col)[:20])`,lotus:`Đây là 9 biến mô hình sẽ dùng.`,trap:`Không có.`,read:[`Dòng đầu là số biến giữ (9) và danh sách tên biến.`],remark:`Giữ 9 biến: handlers-cleaners, priv-house-serv, hobbies cross-fit/other, incident severity Minor/Total Loss/Trivial, auto_make Audi/Honda.`,howRemark:[`Liệt kê biến giữ.`,`Kiểm khớp với 7.1.2.`]},en:{think:`Retain the features selected by RFECV.`,steps:[`col = X_train.columns[rfecv.support_].`],code:`col = X_train.columns[rfecv.support_]
print(len(col), list(col)[:20])`,lotus:`These are the 9 features the model will use.`,trap:`None.`,read:[`First line is the kept count (9) and the feature names.`],remark:`Kept 9 variables: handlers-cleaners, priv-house-serv, hobbies cross-fit/other, incident severity Minor/Total Loss/Trivial, auto_make Audi/Honda.`,howRemark:[`List the kept variables.`,`Check they match 7.1.2.`]}},"7.2.1":{vi:{think:`Lấy đúng các cột đã chọn và thêm hằng số.`,steps:[`X_train[col].`,`sm.add_constant.`],code:`# Làm theo ô starter, xem kết quả ở trên`,lotus:`Chỉ giữ chín yếu tố đã chọn.`,trap:`Quên hằng số thì hệ số sai.`,read:[`Ô này không in kết quả; việc cần xem là chạy không báo lỗi.`],remark:`Lấy đúng các cột đã chọn và thêm hằng số.`,howRemark:[`Nói bước này chuẩn bị gì cho bước sau.`,`Ghi tên biến/đối tượng mới được tạo.`]},en:{think:`Select the chosen columns and add the constant.`,steps:[`X_train[col].`,`sm.add_constant.`],code:`# Làm theo ô starter, xem kết quả ở trên`,lotus:`Keep only the nine chosen factors.`,trap:`Forgetting the constant gives wrong coefficients.`,read:[`This cell prints nothing; just check it ran without error.`],remark:`Take exactly the chosen columns and add the constant.`,howRemark:[`Say what this step prepares for the next.`,`Note the new variable/object created.`]}},"7.2.2":{vi:{think:`Huấn luyện hồi quy logistic bằng statsmodels và đọc bảng hệ số.`,steps:[`sm.GLM(y_train, X_train_sm, family=Binomial()).fit().`,`Đọc coef và P>|z|.`],code:`import statsmodels.api as sm
X_train_sm = sm.add_constant(X_train[col].astype(float))
res = sm.GLM(y_train, X_train_sm, family=sm.families.Binomial()).fit()
print(res.summary().tables[1])`,lotus:`Hệ số âm ở incident_severity_Minor Damage nghĩa là hư hại nhẹ làm giảm xác suất gian lận so với nhóm gốc Major Damage. Dấu và p-value cho biết yếu tố nào đáng tin.`,trap:`Đọc hệ số mà bỏ qua p-value: biến p cao (như priv-house-serv, p ≈ 0,04 sát ngưỡng) có thể chỉ là nhiễu.`,read:[`Mỗi hàng là một biến: coef là hệ số, P>|z| là mức ý nghĩa.`,`coef dương làm tăng khả năng gian lận, âm làm giảm.`,`P < 0,05 là biến có ý nghĩa thống kê.`],remark:`Hệ số cho biết biến nào đẩy xác suất gian lận lên hoặc xuống; giữ biến có P < 0,05. Đọc dấu để nói hướng, độ lớn để nói mạnh yếu.`,howRemark:[`Chọn 3 biến |coef| lớn nhất.`,`Nói dấu nghĩa là gì.`,`Kiểm P < 0,05.`,`Dịch sang ngôn ngữ kinh doanh.`]},en:{think:`Train logistic regression with statsmodels and read the coefficient table.`,steps:[`sm.GLM(y_train, X_train_sm, family=Binomial()).fit().`,`Read coef and P>|z|.`],code:`import statsmodels.api as sm
X_train_sm = sm.add_constant(X_train[col].astype(float))
res = sm.GLM(y_train, X_train_sm, family=sm.families.Binomial()).fit()
print(res.summary().tables[1])`,lotus:`A negative coefficient on incident_severity_Minor Damage means minor damage lowers the fraud probability relative to the Major Damage baseline. Sign and p-value say which factors are trustworthy.`,trap:`Reading coefficients but skipping p-values: a high-p feature (like priv-house-serv, p ≈ 0.04 near the threshold) may just be noise.`,read:[`Each row is a variable: coef is the coefficient, P>|z| the significance.`,`Positive coef raises fraud probability, negative lowers it.`,`P < 0.05 means statistically significant.`],remark:`Coefficients show which variables push fraud probability up or down; keep those with P < 0.05. Read the sign for direction and the size for strength.`,howRemark:[`Pick the 3 variables with largest |coef|.`,`Say what the sign means.`,`Check P < 0.05.`,`Translate to business language.`]}},"7.2.3":{vi:{think:`Tính VIF để kiểm tra chồng lấn giữa các biến.`,steps:[`variance_inflation_factor cho từng cột.`,`Tất cả VIF dưới 1,5: không đa cộng tuyến.`],code:`from statsmodels.stats.outliers_influence import variance_inflation_factor
Xv = X_train[col].astype(float)
vif = pd.DataFrame({'feature': col, 'VIF': [variance_inflation_factor(Xv.values, i) for i in range(Xv.shape[1])]}).sort_values('VIF', ascending=False)
print(vif.head(8).round(2).to_string(index=False))`,lotus:`VIF thấp nghĩa mỗi biến mang thông tin riêng.`,trap:`Tính VIF kèm hằng số cho số rất lớn.`,read:[`Mỗi dòng là VIF của một biến; gần 1 là không chồng lấn.`],remark:`VIF lớn nhất chỉ 1,48 (insured_hobbies_other), tất cả gần 1 nên các biến độc lập và hệ số đáng tin.`,howRemark:[`Nêu VIF lớn nhất.`,`So với ngưỡng 5.`,`Kết luận.`]},en:{think:`Compute VIF to check overlap among features.`,steps:[`variance_inflation_factor per column.`,`All VIF below 1.5: no multicollinearity.`],code:`from statsmodels.stats.outliers_influence import variance_inflation_factor
Xv = X_train[col].astype(float)
vif = pd.DataFrame({'feature': col, 'VIF': [variance_inflation_factor(Xv.values, i) for i in range(Xv.shape[1])]}).sort_values('VIF', ascending=False)
print(vif.head(8).round(2).to_string(index=False))`,lotus:`Low VIF means each feature carries its own information.`,trap:`Computing VIF with the constant gives a huge number.`,read:[`Each line is a variable's VIF; near 1 means no overlap.`],remark:`The highest VIF is only 1.48 (insured_hobbies_other), all near 1, so variables are independent and coefficients trustworthy.`,howRemark:[`State the largest VIF.`,`Compare with the threshold 5.`,`Conclude.`]}},"7.2.4":{vi:{think:`Dự đoán xác suất gian lận trên train.`,steps:[`res.predict(X_train_sm).`],code:`# Làm theo ô starter, xem kết quả ở trên`,lotus:`Mỗi hồ sơ có xác suất gian lận từ 0 đến 1.`,trap:`Thiếu hằng số báo lỗi.`,read:[`Ô này không in kết quả; việc cần xem là chạy không báo lỗi.`],remark:`Đã dự đoán xác suất gian lận trên train.`,howRemark:[`Nói bước này chuẩn bị gì cho bước sau.`,`Ghi tên biến/đối tượng mới được tạo.`]},en:{think:`Predict fraud probabilities on train.`,steps:[`res.predict(X_train_sm).`],code:`# Làm theo ô starter, xem kết quả ở trên`,lotus:`Each claim gets a fraud probability from 0 to 1.`,trap:`A missing constant raises an error.`,read:[`This cell prints nothing; just check it ran without error.`],remark:`Predicted fraud probability on train.`,howRemark:[`Say what this step prepares for the next.`,`Note the new variable/object created.`]}},"7.2.5":{vi:{think:`Tạo bảng thực tế, xác suất, và dự đoán theo ngưỡng 0,5.`,steps:[`DataFrame có Fraud, Prob, Predicted (Prob > 0,5).`],code:`from sklearn import metrics
tr = pd.DataFrame({'Fraud': y_train.values, 'Prob': res.predict(X_train_sm).values})
tr['Predicted'] = (tr['Prob'] > 0.5).astype(int)
print(tr.head(6).round(3).to_string())`,lotus:`Mỗi dòng: hồ sơ thực sự gian lận hay không, mô hình cho bao nhiêu phần trăm.`,trap:`0,5 chỉ là mặc định, 7.3 tìm ngưỡng tốt hơn.`,read:[`Cột Fraud là thực tế, Prob là xác suất, Predicted là đoán 1 nếu xác suất > 0,5.`],remark:`Dòng 0 thực tế sạch nhưng xác suất 0,816 nên bị đoán là gian lận (báo nhầm); các dòng 1–4 xác suất thấp nên đoán đúng sạch.`,howRemark:[`Chọn một dòng đúng, một dòng sai.`,`Giải thích vì sao sai (xác suất vượt ngưỡng).`]},en:{think:`Build a table of actual, probability and the 0.5-cutoff prediction.`,steps:[`A DataFrame with Fraud, Prob, Predicted (Prob > 0.5).`],code:`from sklearn import metrics
tr = pd.DataFrame({'Fraud': y_train.values, 'Prob': res.predict(X_train_sm).values})
tr['Predicted'] = (tr['Prob'] > 0.5).astype(int)
print(tr.head(6).round(3).to_string())`,lotus:`Each row: whether the claim was really fraud and the percentage the model gave.`,trap:`0.5 is only a default; 7.3 finds a better cutoff.`,read:[`Fraud is actual, Prob is probability, Predicted is 1 if probability > 0.5.`],remark:`Row 0 is actually clean but probability 0.816 predicts fraud (a false alarm); rows 1–4 have low probability and are correctly predicted clean.`,howRemark:[`Choose one right row and one wrong row.`,`Explain why wrong (probability crossed the threshold).`]}},"7.2.6":{vi:{think:`Độ chính xác trên train.`,steps:[`accuracy_score.`],code:`print('accuracy', round(metrics.accuracy_score(tr['Fraud'], tr['Predicted']), 4))`,lotus:`Khoảng 87%.`,trap:`Độ chính xác đơn độc không nói kiểu sai nào.`,read:[`Một con số: độ chính xác train.`],remark:`Độ chính xác train 0,8726: đúng khoảng 87% (train đã cân bằng 50/50 nên mốc đoán bừa là 50%).`,howRemark:[`Báo số.`,`So với mốc 50%.`]},en:{think:`Accuracy on train.`,steps:[`accuracy_score.`],code:`print('accuracy', round(metrics.accuracy_score(tr['Fraud'], tr['Predicted']), 4))`,lotus:`About 87%.`,trap:`Accuracy alone does not say which errors.`,read:[`One number: train accuracy.`],remark:`Train accuracy is 0.8726: about 87% right (train is balanced 50/50 so the guessing baseline is 50%).`,howRemark:[`Report the number.`,`Compare with the 50% baseline.`]}},"7.2.7":{vi:{think:`Ma trận nhầm lẫn trên train.`,steps:[`confusion_matrix(thực, dự đoán).`],code:`cm = metrics.confusion_matrix(tr['Fraud'], tr['Predicted'])
print(pd.DataFrame(cm, index=['thực: sạch', 'thực: gian lận'], columns=['đoán: sạch', 'đoán: gian lận']))`,lotus:`Trên train: 453 sạch đoán đúng, 465 gian lận đoán đúng, 73 sạch bị báo gian lận, 61 gian lận bị bỏ sót.`,trap:`Hàng là thực tế, cột là dự đoán.`,read:[`Hàng là thực tế, cột là đoán.`,`Đường chéo 453 và 465 là đoán đúng; 73 và 61 là sai.`],remark:`Đúng 918 trên 1.052; báo nhầm gian lận 73, bỏ sót 61. Hai loại sai gần nhau.`,howRemark:[`Cộng đường chéo và ô sai.`,`Nói loại sai nào nặng hơn khi điều tra gian lận (bỏ sót).`]},en:{think:`Confusion matrix on train.`,steps:[`confusion_matrix(actual, predicted).`],code:`cm = metrics.confusion_matrix(tr['Fraud'], tr['Predicted'])
print(pd.DataFrame(cm, index=['thực: sạch', 'thực: gian lận'], columns=['đoán: sạch', 'đoán: gian lận']))`,lotus:`On train: 453 clean correct, 465 fraud correct, 73 clean flagged as fraud, 61 fraud missed.`,trap:`Rows are actual, columns are predicted.`,read:[`Rows are actual, columns predicted.`,`Diagonal 453 and 465 is right; 73 and 61 wrong.`],remark:`Right on 918 of 1,052; 73 false alarms and 61 misses. The two error types are close.`,howRemark:[`Add the diagonal and error cells.`,`Say which error is worse in fraud work (misses).`]}},"7.2.8":{vi:{think:`Đặt tên bốn ô: TP, TN, FP, FN.`,steps:[`TN, FP, FN, TP = cm.ravel().`,`Ở đây dương = gian lận.`],code:`# Làm theo ô starter, xem kết quả ở trên`,lotus:`FN (bỏ sót gian lận) làm công ty mất tiền; FP (báo nhầm) làm khách thật bị làm phiền.`,trap:`Nhầm ô nào là FP hay FN đảo ngược chỉ số.`,read:[`Ô này không in kết quả; việc cần xem là chạy không báo lỗi.`],remark:`Bốn ô: TP 465, TN 453, FP 73, FN 61 (Positive là gian lận).`,howRemark:[`Nói bước này chuẩn bị gì cho bước sau.`,`Ghi tên biến/đối tượng mới được tạo.`]},en:{think:`Name the four cells: TP, TN, FP, FN.`,steps:[`TN, FP, FN, TP = cm.ravel().`,`Here positive = fraud.`],code:`# Làm theo ô starter, xem kết quả ở trên`,lotus:`FN (missed fraud) costs the company money; FP (false alarm) bothers honest customers.`,trap:`Mixing up FP and FN inverts the metrics.`,read:[`This cell prints nothing; just check it ran without error.`],remark:`Four cells: TP 465, TN 453, FP 73, FN 61 (Positive is fraud).`,howRemark:[`Say what this step prepares for the next.`,`Note the new variable/object created.`]}},"7.2.9":{vi:{think:`Tính sensitivity, specificity, precision, recall, F1.`,steps:[`Sensitivity = recall = TP/(TP+FN).`,`Specificity = TN/(TN+FP); precision = TP/(TP+FP); F1 = trung bình điều hòa của precision và recall.`],code:`TN, FP, FN, TP = cm.ravel()
def rep(TN, FP, FN, TP):
    se = TP / (TP + FN); sp = TN / (TN + FP); pr = TP / (TP + FP); f1 = 2 * pr * se / (pr + se)
    return f'sensitivity(recall) {se:.3f} | specificity {sp:.3f} | precision {pr:.3f} | F1 {f1:.3f}'
print(rep(TN, FP, FN, TP))`,lotus:`Trên train: sensitivity 0,884 (bắt được 88% vụ gian lận), specificity 0,861, precision 0,864, F1 0,874.`,trap:`Dữ liệu train đã được cân bằng nên các số này đẹp hơn thực tế, chờ xem validation.`,read:[`Năm chỉ số: sensitivity 0,884, specificity 0,861, precision 0,864, F1 0,874.`],remark:`Bắt được 88,4% hồ sơ gian lận (sensitivity); khi báo gian lận thì đúng 86,4% (precision); F1 0,874 là điểm cân bằng hai thước đo.`,howRemark:[`Báo từng chỉ số bằng câu thường.`,`Nói chỉ số nào quan trọng nhất cho việc điều tra.`]},en:{think:`Compute sensitivity, specificity, precision, recall and F1.`,steps:[`Sensitivity = recall = TP/(TP+FN).`,`Specificity = TN/(TN+FP); precision = TP/(TP+FP); F1 = harmonic mean of precision and recall.`],code:`TN, FP, FN, TP = cm.ravel()
def rep(TN, FP, FN, TP):
    se = TP / (TP + FN); sp = TN / (TN + FP); pr = TP / (TP + FP); f1 = 2 * pr * se / (pr + se)
    return f'sensitivity(recall) {se:.3f} | specificity {sp:.3f} | precision {pr:.3f} | F1 {f1:.3f}'
print(rep(TN, FP, FN, TP))`,lotus:`On train: sensitivity 0.884 (catches 88% of fraud), specificity 0.861, precision 0.864, F1 0.874.`,trap:`Train was balanced, so these look better than reality; wait for validation.`,read:[`Five metrics: sensitivity 0.884, specificity 0.861, precision 0.864, F1 0.874.`],remark:`Catches 88.4% of fraud claims (sensitivity); when it flags fraud it is right 86.4% of the time (precision); F1 0.874 balances the two.`,howRemark:[`State each metric in plain words.`,`Say which metric matters most for investigation.`]}},"7.3.1":{vi:{think:`Vẽ đường ROC và AUC.`,steps:[`roc_curve và roc_auc_score.`,`Đường càng sát góc trên trái càng tốt.`],code:`fpr, tpr, _ = metrics.roc_curve(tr['Fraud'], tr['Prob'], drop_intermediate=False)
auc = metrics.roc_auc_score(tr['Fraud'], tr['Prob'])
plt.plot(fpr, tpr, label=f'AUC = {auc:.3f}'); plt.plot([0, 1], [0, 1], 'k--'); plt.legend(); plt.xlabel('FPR'); plt.ylabel('TPR')`,lotus:`AUC cho biết khả năng xếp hồ sơ gian lận cao hơn hồ sơ sạch.`,trap:`Đường sát đường chéo là đoán bừa.`,read:[`Đường ROC: trục ngang tỉ lệ báo nhầm, trục dọc tỉ lệ bắt đúng; càng ôm góc trên trái càng tốt.`,`AUC là diện tích dưới đường: 0,5 là đoán bừa.`],remark:`Đường ROC nằm hẳn trên đường chéo, nghĩa là mô hình phân biệt tốt hơn đoán bừa; AUC tóm tắt trong một con số.`,howRemark:[`Mô tả hình ROC.`,`Báo AUC.`,`So với 0,5.`]},en:{think:`Plot the ROC curve and AUC.`,steps:[`roc_curve and roc_auc_score.`,`The closer to the top-left the better.`],code:`fpr, tpr, _ = metrics.roc_curve(tr['Fraud'], tr['Prob'], drop_intermediate=False)
auc = metrics.roc_auc_score(tr['Fraud'], tr['Prob'])
plt.plot(fpr, tpr, label=f'AUC = {auc:.3f}'); plt.plot([0, 1], [0, 1], 'k--'); plt.legend(); plt.xlabel('FPR'); plt.ylabel('TPR')`,lotus:`AUC measures how well it ranks fraud claims above clean ones.`,trap:`A curve near the diagonal is guessing.`,read:[`ROC curve: x axis false-alarm rate, y axis true-catch rate; closer to top-left is better.`,`AUC is the area under it: 0.5 is guessing.`],remark:`The ROC curve sits well above the diagonal, so the model discriminates better than guessing; AUC summarises it in one number.`,howRemark:[`Describe the ROC shape.`,`Report AUC.`,`Compare with 0.5.`]}},"7.3.2":{vi:{think:`Dự đoán ở nhiều ngưỡng từ 0,0 đến 0,9.`,steps:[`Vòng lặp tạo cột cho mỗi ngưỡng.`],code:`# Làm theo ô starter, xem kết quả ở trên`,lotus:`Thử từng ngưỡng: báo gian lận khi xác suất trên 10%, 20%, ...`,trap:`Không có.`,read:[`Ô này không in kết quả; việc cần xem là chạy không báo lỗi.`],remark:`Đã dự đoán ở nhiều ngưỡng từ 0,0 đến 0,9.`,howRemark:[`Nói bước này chuẩn bị gì cho bước sau.`,`Ghi tên biến/đối tượng mới được tạo.`]},en:{think:`Predict at cutoffs from 0.0 to 0.9.`,steps:[`A loop creating a column per cutoff.`],code:`# Làm theo ô starter, xem kết quả ở trên`,lotus:`Try each threshold: flag fraud when probability exceeds 10%, 20%, ...`,trap:`None.`,read:[`This cell prints nothing; just check it ran without error.`],remark:`Predicted at many thresholds from 0.0 to 0.9.`,howRemark:[`Say what this step prepares for the next.`,`Note the new variable/object created.`]}},"7.3.3":{vi:{think:`Vẽ accuracy, sensitivity, specificity theo ngưỡng để chọn ngưỡng tối ưu.`,steps:[`Tính ba chỉ số ở mỗi ngưỡng.`,`Chọn nơi sensitivity và specificity gần nhau và accuracy cao: khoảng 0,5 đến 0,7.`],code:`rows = []
for i in [x / 10 for x in range(10)]:
    p = (tr['Prob'] > i).astype(int)
    tn, fp, fn, tp = metrics.confusion_matrix(tr['Fraud'], p).ravel()
    rows.append([i, (tp + tn) / len(tr), tp / (tp + fn), tn / (tn + fp)])
cdf = pd.DataFrame(rows, columns=['cutoff', 'accuracy', 'sensitivity', 'specificity'])
cdf.plot(x='cutoff', y=['accuracy', 'sensitivity', 'specificity'])
print(cdf.round(3).to_string(index=False))`,lotus:`Hạ ngưỡng xuống 0,2 bắt thêm vụ gian lận (sensitivity 0,90) nhưng báo nhầm nhiều hơn (specificity 0,81).`,trap:`Chọn ngưỡng chỉ theo accuracy bỏ qua chi phí của từng kiểu sai.`,read:[`Mỗi dòng là một ngưỡng; ba cột accuracy, sensitivity, specificity.`,`Tăng ngưỡng thì sensitivity giảm và specificity tăng.`],remark:`Accuracy cao nhất ở ngưỡng 0,4 (0,875) và 0,5 (0,873); ngưỡng 0,5 có sensitivity 0,884 gần specificity 0,861 nên chọn 0,5.`,howRemark:[`Tìm ngưỡng accuracy cao nhất.`,`Nêu đánh đổi sensitivity và specificity.`,`Chốt ngưỡng và lý do.`]},en:{think:`Plot accuracy, sensitivity, specificity by cutoff and pick the optimal one.`,steps:[`Compute the three metrics at each cutoff.`,`Choose where sensitivity and specificity are close and accuracy high: about 0.5 to 0.7.`],code:`rows = []
for i in [x / 10 for x in range(10)]:
    p = (tr['Prob'] > i).astype(int)
    tn, fp, fn, tp = metrics.confusion_matrix(tr['Fraud'], p).ravel()
    rows.append([i, (tp + tn) / len(tr), tp / (tp + fn), tn / (tn + fp)])
cdf = pd.DataFrame(rows, columns=['cutoff', 'accuracy', 'sensitivity', 'specificity'])
cdf.plot(x='cutoff', y=['accuracy', 'sensitivity', 'specificity'])
print(cdf.round(3).to_string(index=False))`,lotus:`Lowering the cutoff to 0.2 catches more fraud (sensitivity 0.90) but raises false alarms (specificity 0.81).`,trap:`Choosing the cutoff by accuracy alone ignores the cost of each error type.`,read:[`Each row is a threshold; columns accuracy, sensitivity, specificity.`,`Raising the threshold lowers sensitivity and raises specificity.`],remark:`Accuracy peaks at thresholds 0.4 (0.875) and 0.5 (0.873); at 0.5 sensitivity 0.884 is close to specificity 0.861 so choose 0.5.`,howRemark:[`Find the highest-accuracy threshold.`,`State the sensitivity–specificity trade-off.`,`Fix the threshold and reason.`]}},"7.3.4":{vi:{think:`Tạo dự đoán cuối theo ngưỡng chọn.`,steps:[`Chọn cutoff (ở đây 0,5) và tạo cột final.`],code:`cutoff = 0.5
tr['final'] = (tr['Prob'] > cutoff).astype(int)
print('cutoff chọn:', cutoff)`,lotus:`Từ giờ mô hình báo gian lận khi xác suất vượt ngưỡng này.`,trap:`Hard-code rồi quên cập nhật.`,read:[`Một dòng: ngưỡng chọn 0,5.`],remark:`Ngưỡng cuối là 0,5, từ bảng ở 7.3.3.`,howRemark:[`Nêu ngưỡng và dẫn 7.3.3.`]},en:{think:`Create the final prediction using the chosen cutoff.`,steps:[`Choose the cutoff (here 0.5) and create a final column.`],code:`cutoff = 0.5
tr['final'] = (tr['Prob'] > cutoff).astype(int)
print('cutoff chọn:', cutoff)`,lotus:`From now on the model flags fraud above this threshold.`,trap:`Hard-coding and forgetting to update.`,read:[`One line: chosen cutoff 0.5.`],remark:`The final cutoff is 0.5, from the table in 7.3.3.`,howRemark:[`State the cutoff and cite 7.3.3.`]}},"7.3.5":{vi:{think:`Độ chính xác với ngưỡng mới.`,steps:[`Làm giống bước tương ứng ở 7.2.`],code:`# Làm theo ô starter, xem kết quả ở trên`,lotus:`Cùng 0,873 vì ngưỡng 0,5 đã gần tối ưu.`,trap:`Nhớ cập nhật biến.`,read:[`Đối chiếu với bước tương ứng ở 7.2.`],remark:`Cùng kết quả với 7.2.6–7.2.8 vì ngưỡng vẫn 0,5 (accuracy 0,8726; TP 465, TN 453, FP 73, FN 61).`,howRemark:[`Nói bước này chuẩn bị gì cho bước sau.`,`Ghi tên biến/đối tượng mới được tạo.`]},en:{think:`Accuracy with the new cutoff.`,steps:[`Do as the matching step in 7.2.`],code:`# Làm theo ô starter, xem kết quả ở trên`,lotus:`Same 0.873 because 0.5 was already near optimal.`,trap:`Remember to update the variables.`,read:[`Cross-check with the matching step in 7.2.`],remark:`Same results as 7.2.6–7.2.8 since the threshold stays 0.5 (accuracy 0.8726; TP 465, TN 453, FP 73, FN 61).`,howRemark:[`Say what this step prepares for the next.`,`Note the new variable/object created.`]}},"7.3.6":{vi:{think:`Ma trận nhầm lẫn với ngưỡng mới.`,steps:[`Làm giống bước tương ứng ở 7.2.`],code:`# Làm theo ô starter, xem kết quả ở trên`,lotus:`Cùng ma trận như 7.2.7.`,trap:`Nhớ cập nhật biến.`,read:[`Đối chiếu với bước tương ứng ở 7.2.`],remark:`Cùng kết quả với 7.2.6–7.2.8 vì ngưỡng vẫn 0,5 (accuracy 0,8726; TP 465, TN 453, FP 73, FN 61).`,howRemark:[`Nói bước này chuẩn bị gì cho bước sau.`,`Ghi tên biến/đối tượng mới được tạo.`]},en:{think:`Confusion matrix with the new cutoff.`,steps:[`Do as the matching step in 7.2.`],code:`# Làm theo ô starter, xem kết quả ở trên`,lotus:`Same matrix as 7.2.7.`,trap:`Remember to update the variables.`,read:[`Cross-check with the matching step in 7.2.`],remark:`Same results as 7.2.6–7.2.8 since the threshold stays 0.5 (accuracy 0.8726; TP 465, TN 453, FP 73, FN 61).`,howRemark:[`Say what this step prepares for the next.`,`Note the new variable/object created.`]}},"7.3.7":{vi:{think:`TP, TN, FP, FN cho ngưỡng mới.`,steps:[`Làm giống bước tương ứng ở 7.2.`],code:`# Làm theo ô starter, xem kết quả ở trên`,lotus:`Như 7.2.8.`,trap:`Nhớ cập nhật biến.`,read:[`Đối chiếu với bước tương ứng ở 7.2.`],remark:`Cùng kết quả với 7.2.6–7.2.8 vì ngưỡng vẫn 0,5 (accuracy 0,8726; TP 465, TN 453, FP 73, FN 61).`,howRemark:[`Nói bước này chuẩn bị gì cho bước sau.`,`Ghi tên biến/đối tượng mới được tạo.`]},en:{think:`TP, TN, FP, FN for the new cutoff.`,steps:[`Do as the matching step in 7.2.`],code:`# Làm theo ô starter, xem kết quả ở trên`,lotus:`As 7.2.8.`,trap:`Remember to update the variables.`,read:[`Cross-check with the matching step in 7.2.`],remark:`Same results as 7.2.6–7.2.8 since the threshold stays 0.5 (accuracy 0.8726; TP 465, TN 453, FP 73, FN 61).`,howRemark:[`Say what this step prepares for the next.`,`Note the new variable/object created.`]}},"7.3.8":{vi:{think:`Sensitivity, specificity, precision, recall, F1 ở ngưỡng mới.`,steps:[`Làm giống bước tương ứng ở 7.2.`],code:`cm2 = metrics.confusion_matrix(tr['Fraud'], tr['final']); TN, FP, FN, TP = cm2.ravel()
print(cm2); print(rep(TN, FP, FN, TP))`,lotus:`Với 0,5 các số giống 7.2.9; nếu bạn chọn ngưỡng khác, các số sẽ đổi.`,trap:`Nhớ cập nhật biến.`,read:[`Ma trận và năm chỉ số ở ngưỡng 0,5, giống 7.2.9.`],remark:`Ở ngưỡng 0,5: sensitivity 0,884, specificity 0,861, precision 0,864, F1 0,874; ngưỡng không đổi nên kết quả không đổi.`,howRemark:[`Đối chiếu 7.2.9.`,`Nói ngưỡng không đổi nên không đổi.`]},en:{think:`Sensitivity, specificity, precision, recall, F1 at the new cutoff.`,steps:[`Do as the matching step in 7.2.`],code:`cm2 = metrics.confusion_matrix(tr['Fraud'], tr['final']); TN, FP, FN, TP = cm2.ravel()
print(cm2); print(rep(TN, FP, FN, TP))`,lotus:`With 0.5 the numbers match 7.2.9; if you choose another cutoff they change.`,trap:`Remember to update the variables.`,read:[`Matrix and five metrics at 0.5, same as 7.2.9.`],remark:`At 0.5: sensitivity 0.884, specificity 0.861, precision 0.864, F1 0.874; unchanged threshold, unchanged result.`,howRemark:[`Cross-check 7.2.9.`,`Say unchanged threshold means unchanged result.`]}},"7.3.9":{vi:{think:`Vẽ đường precision-recall.`,steps:[`precision_recall_curve.`,`Vẽ precision và recall theo ngưỡng, điểm cắt là cân bằng.`],code:`from sklearn.metrics import precision_recall_curve
p, r, t = precision_recall_curve(tr['Fraud'], tr['Prob'])
plt.plot(t, p[:-1], 'g', label='precision'); plt.plot(t, r[:-1], 'r', label='recall'); plt.legend(); plt.xlabel('ngưỡng')`,lotus:`Nếu công ty chấp nhận báo nhầm để bắt thêm gian lận thì hạ ngưỡng, ngược lại nâng ngưỡng.`,trap:`p và r dài hơn t một phần tử.`,read:[`Đường precision-recall: trục ngang recall, trục dọc precision; tăng recall thường làm giảm precision.`],remark:`Đường cho thấy đánh đổi giữa bắt thêm gian lận và báo nhầm; ở ngưỡng 0,5 precision 0,864 và recall 0,884 cân bằng nên giữ.`,howRemark:[`Mô tả đánh đổi.`,`Chỉ điểm ngưỡng đã chọn.`,`Nói khi nào ưu tiên recall (không bỏ sót gian lận).`]},en:{think:`Plot the precision-recall curve.`,steps:[`precision_recall_curve.`,`Plot precision and recall by cutoff; the crossing is the balance.`],code:`from sklearn.metrics import precision_recall_curve
p, r, t = precision_recall_curve(tr['Fraud'], tr['Prob'])
plt.plot(t, p[:-1], 'g', label='precision'); plt.plot(t, r[:-1], 'r', label='recall'); plt.legend(); plt.xlabel('ngưỡng')`,lotus:`If the company accepts false alarms to catch more fraud, lower the cutoff, otherwise raise it.`,trap:`p and r are one element longer than t.`,read:[`Precision-recall curve: x axis recall, y axis precision; raising recall usually lowers precision.`],remark:`The curve shows the trade-off between catching more fraud and false alarms; at 0.5 precision 0.864 and recall 0.884 are balanced so keep it.`,howRemark:[`Describe the trade-off.`,`Mark the chosen threshold.`,`Say when to favour recall (not missing fraud).`]}},"7.4.1":{vi:{think:`Nạp thư viện cho random forest.`,steps:[`RandomForestClassifier, GridSearchCV, cross_val_score.`],code:`# Làm theo ô starter, xem kết quả ở trên`,lotus:`Chuyển từ mô hình tuyến tính sang rừng cây.`,trap:`Không có.`,read:[`Ô này không in kết quả; việc cần xem là chạy không báo lỗi.`],remark:`Đã nạp thư viện random forest.`,howRemark:[`Nói bước này chuẩn bị gì cho bước sau.`,`Ghi tên biến/đối tượng mới được tạo.`]},en:{think:`Import libraries for random forest.`,steps:[`RandomForestClassifier, GridSearchCV, cross_val_score.`],code:`# Làm theo ô starter, xem kết quả ở trên`,lotus:`Move from the linear model to a forest of trees.`,trap:`None.`,read:[`This cell prints nothing; just check it ran without error.`],remark:`Random forest libraries are loaded.`,howRemark:[`Say what this step prepares for the next.`,`Note the new variable/object created.`]}},"7.4.2":{vi:{think:`Huấn luyện random forest cơ bản.`,steps:[`RandomForestClassifier(n_estimators=100, random_state=42).fit.`],code:`from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report
from sklearn.model_selection import cross_val_score, GridSearchCV
rf = RandomForestClassifier(random_state=42, n_estimators=100).fit(X_train, y_train)
print('đã huấn luyện rừng', rf.n_estimators, 'cây')`,lotus:`100 cây quyết định bỏ phiếu để đoán gian lận.`,trap:`Quên random_state làm kết quả đổi mỗi lần chạy.`,read:[`Dòng chữ: đã huấn luyện rừng 100 cây.`],remark:`Rừng 100 cây cơ bản đã huấn luyện; chưa chỉnh tham số.`,howRemark:[`Nói số cây và việc chưa tinh chỉnh.`]},en:{think:`Train a base random forest.`,steps:[`RandomForestClassifier(n_estimators=100, random_state=42).fit.`],code:`from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report
from sklearn.model_selection import cross_val_score, GridSearchCV
rf = RandomForestClassifier(random_state=42, n_estimators=100).fit(X_train, y_train)
print('đã huấn luyện rừng', rf.n_estimators, 'cây')`,lotus:`100 decision trees vote to predict fraud.`,trap:`Forgetting random_state makes results change on each run.`,read:[`Text: a forest of 100 trees trained.`],remark:`A basic 100-tree forest is trained; parameters not yet tuned.`,howRemark:[`State the tree count and that it is untuned.`]}},"7.4.3":{vi:{think:`Xem mức quan trọng của biến và chọn biến quan trọng.`,steps:[`rf.feature_importances_ thành Series và sắp xếp.`,`Giữ biến vượt mức trung bình: 17 biến.`],code:`imp = pd.Series(rf.feature_importances_, index=X_train.columns).sort_values(ascending=False)
imp.head(12).iloc[::-1].plot(kind='barh', title='Mức quan trọng của biến (random forest)')
sel = imp[imp > imp.mean()].index
print(len(sel), 'biến vượt mức trung bình'); print(imp.head(10).round(3).to_string())`,lotus:`Mức hư hại nhẹ và sở thích là hai biến quan trọng nhất, giống kết quả hồi quy logistic: hai mô hình đồng ý nhau.`,trap:`Mức quan trọng của rừng không nói chiều ảnh hưởng, chỉ nói mức.`,read:[`Dòng đầu: 17 biến vượt mức quan trọng trung bình.`,`Bảng: biến và độ quan trọng; càng lớn càng được rừng dùng nhiều.`,`Biểu đồ: cột độ quan trọng.`],remark:`17 biến vượt mức trung bình; quan trọng nhất là incident_severity_Minor Damage (0,090), insured_hobbies_other (0,075) và incident_severity_Total Loss (0,058), rồi total_claim_amount (0,054): rừng cũng chọn các biến mà hồi quy đã chọn.`,howRemark:[`Nêu 3 biến đầu kèm số.`,`So với biến RFECV ở 7.1.2.`,`Giải thích độ quan trọng là gì.`]},en:{think:`See feature importance and select the important ones.`,steps:[`rf.feature_importances_ into a Series, sorted.`,`Keep features above the mean: 17 features.`],code:`imp = pd.Series(rf.feature_importances_, index=X_train.columns).sort_values(ascending=False)
imp.head(12).iloc[::-1].plot(kind='barh', title='Mức quan trọng của biến (random forest)')
sel = imp[imp > imp.mean()].index
print(len(sel), 'biến vượt mức trung bình'); print(imp.head(10).round(3).to_string())`,lotus:`Minor damage and hobby are the two most important features, matching the logistic result: both models agree.`,trap:`Forest importance gives no direction, only size.`,read:[`First line: 17 variables above average importance.`,`Table: variable and importance; larger means used more by the forest.`,`Chart: importance bars.`],remark:`17 variables exceed the average; most important are incident_severity_Minor Damage (0.090), insured_hobbies_other (0.075) and incident_severity_Total Loss (0.058), then total_claim_amount (0.054): the forest picks the same variables regression did.`,howRemark:[`Name the top 3 with numbers.`,`Compare with the RFECV features in 7.1.2.`,`Explain what importance is.`]}},"7.4.4":{vi:{think:`Huấn luyện lại với biến đã chọn.`,steps:[`fit trên X_train[sel].`],code:`rf2 = RandomForestClassifier(random_state=42, n_estimators=100).fit(X_train[sel], y_train)
print('train với', len(sel), 'biến')`,lotus:`Mô hình gọn hơn: 17 biến.`,trap:`Chọn biến theo validation là rò rỉ.`,read:[`Dòng chữ: huấn luyện lại với 17 biến.`],remark:`Rừng huấn luyện lại chỉ với 17 biến quan trọng để giảm nhiễu.`,howRemark:[`Nêu số biến.`]},en:{think:`Retrain with the selected features.`,steps:[`fit on X_train[sel].`],code:`rf2 = RandomForestClassifier(random_state=42, n_estimators=100).fit(X_train[sel], y_train)
print('train với', len(sel), 'biến')`,lotus:`A leaner model: 17 features.`,trap:`Choosing features by validation leaks.`,read:[`Text: retrained with 17 variables.`],remark:`The forest is retrained on only the 17 important variables to cut noise.`,howRemark:[`State the variable count.`]}},"7.4.5":{vi:{think:`Dự đoán trên train.`,steps:[`rf2.predict(X_train[sel]).`],code:`# Làm theo ô starter, xem kết quả ở trên`,lotus:`Dự đoán các hồ sơ đã học.`,trap:`Không có.`,read:[`Ô này không in kết quả; việc cần xem là chạy không báo lỗi.`],remark:`Đã dự đoán trên train bằng rừng.`,howRemark:[`Nói bước này chuẩn bị gì cho bước sau.`,`Ghi tên biến/đối tượng mới được tạo.`]},en:{think:`Predict on train.`,steps:[`rf2.predict(X_train[sel]).`],code:`# Làm theo ô starter, xem kết quả ở trên`,lotus:`Predict the claims it learned from.`,trap:`None.`,read:[`This cell prints nothing; just check it ran without error.`],remark:`Predicted on train with the forest.`,howRemark:[`Say what this step prepares for the next.`,`Note the new variable/object created.`]}},"7.4.6":{vi:{think:`Độ chính xác của rừng trên train.`,steps:[`accuracy_score.`],code:`p = rf2.predict(X_train[sel])
print('accuracy train', round(metrics.accuracy_score(y_train, p), 4))`,lotus:`Đạt 100% trên train: quá hoàn hảo, rừng cây đã nhớ thuộc lòng, dấu hiệu quá khớp.`,trap:`Tin điểm 100% là sai: phải kiểm tra bằng cross-validation (7.4.10).`,read:[`Một số: accuracy train 1,0.`],remark:`Độ chính xác train 1,0 (đúng 100%): quá hoàn hảo, dấu hiệu rừng học thuộc train (quá khớp), cần kiểm bằng validation.`,howRemark:[`Báo số.`,`Nói vì sao 100% đáng nghi.`,`Nhắc kiểm tra trên dữ liệu mới.`]},en:{think:`Random forest accuracy on train.`,steps:[`accuracy_score.`],code:`p = rf2.predict(X_train[sel])
print('accuracy train', round(metrics.accuracy_score(y_train, p), 4))`,lotus:`It hits 100% on train: too perfect, the forest memorised, a sign of overfitting.`,trap:`Trusting the 100% is wrong: check with cross-validation (7.4.10).`,read:[`One number: train accuracy 1.0.`],remark:`Train accuracy 1.0 (100% right): too perfect, a sign the forest memorised train (overfitting), to be checked on validation.`,howRemark:[`Report the number.`,`Say why 100% is suspicious.`,`Remind to test on new data.`]}},"7.4.7":{vi:{think:`Ma trận nhầm lẫn của rừng trên train.`,steps:[`confusion_matrix.`],code:`cmr = metrics.confusion_matrix(y_train, p)
print(pd.DataFrame(cmr, index=['thực: sạch', 'thực: gian lận'], columns=['đoán: sạch', 'đoán: gian lận']))`,lotus:`Không có sai số nào: 526 sạch và 526 gian lận đều đúng.`,trap:`Ma trận hoàn hảo trên train không chứng minh gì.`,read:[`Ma trận train: toàn bộ trên đường chéo (526 và 526), hai ô sai bằng 0.`],remark:`Rừng không nhầm hồ sơ nào trên train (0 báo nhầm, 0 bỏ sót), nghĩa là học thuộc dữ liệu train.`,howRemark:[`Chỉ ra hai ô sai bằng 0.`,`Liên hệ quá khớp.`]},en:{think:`Confusion matrix of the forest on train.`,steps:[`confusion_matrix.`],code:`cmr = metrics.confusion_matrix(y_train, p)
print(pd.DataFrame(cmr, index=['thực: sạch', 'thực: gian lận'], columns=['đoán: sạch', 'đoán: gian lận']))`,lotus:`Zero errors: all 526 clean and 526 fraud correct.`,trap:`A perfect matrix on train proves nothing.`,read:[`Train matrix: everything on the diagonal (526 and 526), both error cells 0.`],remark:`The forest misclassifies nothing on train (0 false alarms, 0 misses), meaning it memorised train data.`,howRemark:[`Point out the two error cells at 0.`,`Tie to overfitting.`]}},"7.4.8":{vi:{think:`TP, TN, FP, FN của rừng.`,steps:[`ravel() ma trận.`],code:`# Làm theo ô starter, xem kết quả ở trên`,lotus:`Như 7.2.8.`,trap:`Không có.`,read:[`Ô này không in kết quả; việc cần xem là chạy không báo lỗi.`],remark:`TP 526, TN 526, FP 0, FN 0 trên train.`,howRemark:[`Nói bước này chuẩn bị gì cho bước sau.`,`Ghi tên biến/đối tượng mới được tạo.`]},en:{think:`TP, TN, FP, FN of the forest.`,steps:[`ravel() the matrix.`],code:`# Làm theo ô starter, xem kết quả ở trên`,lotus:`As 7.2.8.`,trap:`None.`,read:[`This cell prints nothing; just check it ran without error.`],remark:`TP 526, TN 526, FP 0, FN 0 on train.`,howRemark:[`Say what this step prepares for the next.`,`Note the new variable/object created.`]}},"7.4.9":{vi:{think:`Sensitivity, specificity, precision, recall, F1 của rừng trên train.`,steps:[`Công thức như 7.2.9.`],code:`TN, FP, FN, TP = cmr.ravel(); print(rep(TN, FP, FN, TP))`,lotus:`Tất cả đều 1,0 trên train.`,trap:`Điểm tuyệt đối là cảnh báo, không phải chiến thắng.`,read:[`Năm chỉ số đều 1,000.`],remark:`Mọi chỉ số bằng 1,000 trên train: không phản ánh chất lượng thật, chỉ cho thấy rừng đã thuộc dữ liệu train.`,howRemark:[`Nói mọi số bằng 1 nghĩa là gì.`,`Nhắc phải dùng validation.`]},en:{think:`Forest metrics on train.`,steps:[`Formulas as 7.2.9.`],code:`TN, FP, FN, TP = cmr.ravel(); print(rep(TN, FP, FN, TP))`,lotus:`All are 1.0 on train.`,trap:`A perfect score is a warning, not a win.`,read:[`All five metrics are 1.000.`],remark:`Every metric is 1.000 on train: not real quality, only showing the forest memorised train.`,howRemark:[`Say what all-ones means.`,`Remind to use validation.`]}},"7.4.10":{vi:{think:`Kiểm tra quá khớp bằng cross-validation.`,steps:[`cross_val_score(rf2, X, y, cv=5).`,`So điểm CV với điểm train.`],code:`cv = cross_val_score(rf2, X_train[sel], y_train, cv=5, scoring='accuracy')
print('accuracy 5 lần CV:', cv.round(3), '| trung bình', cv.mean().round(3))`,lotus:`CV trung bình 0,921 so với 1,0 ở train: có quá khớp nhưng vẫn chấp nhận được. Lưu ý: vì đã nhân bản mẫu ở 6.1, các fold CV có thể chứa bản sao của cùng hồ sơ, nên 0,921 hơi lạc quan.`,trap:`Resample trước khi cross-validation làm điểm CV đẹp giả.`,read:[`Năm số accuracy của 5 lần cross-validation và trung bình.`],remark:`CV cho 0,891–0,938, trung bình 0,921: thấp hơn 1,0 của train, cho thấy hiệu năng thật khoảng 92% (có thể cao do hồ sơ nhân bản trải qua các fold).`,howRemark:[`Nêu khoảng và trung bình.`,`So với 1,0 ở train.`,`Nêu giới hạn.`]},en:{think:`Check overfitting with cross-validation.`,steps:[`cross_val_score(rf2, X, y, cv=5).`,`Compare the CV score with the train score.`],code:`cv = cross_val_score(rf2, X_train[sel], y_train, cv=5, scoring='accuracy')
print('accuracy 5 lần CV:', cv.round(3), '| trung bình', cv.mean().round(3))`,lotus:`Mean CV 0.921 against 1.0 on train: some overfitting but acceptable. Note that because rows were duplicated in 6.1, CV folds may contain copies of the same claim, so 0.921 is slightly optimistic.`,trap:`Resampling before cross-validation inflates the CV score.`,read:[`Five accuracy numbers from 5-fold cross-validation and the mean.`],remark:`CV gives 0.891–0.938, mean 0.921: below train's 1.0, so real performance is about 92% (possibly high because duplicated records spread across folds).`,howRemark:[`State the range and the mean.`,`Compare with the 1.0 on train.`,`State the limit.`]}},"7.5.1":{vi:{think:`Tìm tham số tốt nhất bằng grid search.`,steps:[`GridSearchCV với n_estimators, max_depth, min_samples_leaf.`,`cv=5, scoring='accuracy'.`,`Kết quả: max_depth 10, min_samples_leaf 1, n_estimators 100, CV 0,926.`],code:`grid = GridSearchCV(RandomForestClassifier(random_state=42), {'n_estimators': [100, 200], 'max_depth': [5, 10, None], 'min_samples_leaf': [1, 5, 10]}, cv=5, scoring='accuracy', n_jobs=-1).fit(X_train[sel], y_train)
print('tham số tốt nhất:', grid.best_params_, '| CV accuracy', round(grid.best_score_, 3))`,lotus:`Giới hạn độ sâu cây ngăn việc học thuộc lòng.`,trap:`Lưới quá lớn chạy rất lâu.`,read:[`Dòng chữ: bộ tham số tốt nhất và CV accuracy 0,926.`],remark:`Grid search chọn max_depth 10, min_samples_leaf 1, n_estimators 100 với CV accuracy 0,926, cải thiện nhẹ so với 0,921; giới hạn độ sâu để giảm học thuộc.`,howRemark:[`Nêu tham số chọn.`,`So CV với 7.4.10.`,`Giải thích vì sao giới hạn độ sâu.`]},en:{think:`Find the best parameters with grid search.`,steps:[`GridSearchCV with n_estimators, max_depth, min_samples_leaf.`,`cv=5, scoring='accuracy'.`,`Result: max_depth 10, min_samples_leaf 1, n_estimators 100, CV 0.926.`],code:`grid = GridSearchCV(RandomForestClassifier(random_state=42), {'n_estimators': [100, 200], 'max_depth': [5, 10, None], 'min_samples_leaf': [1, 5, 10]}, cv=5, scoring='accuracy', n_jobs=-1).fit(X_train[sel], y_train)
print('tham số tốt nhất:', grid.best_params_, '| CV accuracy', round(grid.best_score_, 3))`,lotus:`Limiting tree depth prevents memorising.`,trap:`An oversized grid runs very long.`,read:[`Text: best parameters and CV accuracy 0.926.`],remark:`Grid search picks max_depth 10, min_samples_leaf 1, n_estimators 100 with CV accuracy 0.926, slightly above 0.921; limiting depth reduces memorising.`,howRemark:[`State the chosen parameters.`,`Compare CV with 7.4.10.`,`Explain why limit depth.`]}},"7.5.2":{vi:{think:`Dựng rừng với tham số đã tìm.`,steps:[`RandomForestClassifier(**best_params_).fit.`],code:`rf3 = RandomForestClassifier(random_state=42, **grid.best_params_).fit(X_train[sel], y_train)
print(rf3)`,lotus:`Rừng giờ có độ sâu giới hạn 10.`,trap:`Không có.`,read:[`Dòng chữ là đối tượng RandomForestClassifier(max_depth=10, random_state=42).`],remark:`Đã dựng rừng với tham số vừa tìm.`,howRemark:[`Kiểm tham số khớp 7.5.1.`]},en:{think:`Build the forest with the tuned parameters.`,steps:[`RandomForestClassifier(**best_params_).fit.`],code:`rf3 = RandomForestClassifier(random_state=42, **grid.best_params_).fit(X_train[sel], y_train)
print(rf3)`,lotus:`The forest now has depth capped at 10.`,trap:`None.`,read:[`The text is the RandomForestClassifier(max_depth=10, random_state=42) object.`],remark:`Built the forest with the parameters just found.`,howRemark:[`Check parameters match 7.5.1.`]}},"7.5.3":{vi:{think:`Dự đoán trên train với rừng đã chỉnh.`,steps:[`predict.`],code:`# Làm theo ô starter, xem kết quả ở trên`,lotus:`Như 7.4.5.`,trap:`Không có.`,read:[`Ô này không in kết quả; việc cần xem là chạy không báo lỗi.`],remark:`Đã dự đoán trên train với rừng đã chỉnh.`,howRemark:[`Nói bước này chuẩn bị gì cho bước sau.`,`Ghi tên biến/đối tượng mới được tạo.`]},en:{think:`Predict on train with the tuned forest.`,steps:[`predict.`],code:`# Làm theo ô starter, xem kết quả ở trên`,lotus:`As 7.4.5.`,trap:`None.`,read:[`This cell prints nothing; just check it ran without error.`],remark:`Predicted on train with the tuned forest.`,howRemark:[`Say what this step prepares for the next.`,`Note the new variable/object created.`]}},"7.5.4":{vi:{think:`Độ chính xác của rừng đã chỉnh.`,steps:[`accuracy_score.`],code:`p3 = rf3.predict(X_train[sel]); print('accuracy train', round(metrics.accuracy_score(y_train, p3), 4))`,lotus:`Còn 97,9% trên train thay vì 100%: bớt học thuộc.`,trap:`Không có.`,read:[`Một số: accuracy train 0,9791.`],remark:`Train 0,9791, thấp hơn 1,0 nên rừng đã chỉnh bớt học thuộc.`,howRemark:[`So với 1,0 ở 7.4.6.`]},en:{think:`Accuracy of the tuned forest.`,steps:[`accuracy_score.`],code:`p3 = rf3.predict(X_train[sel]); print('accuracy train', round(metrics.accuracy_score(y_train, p3), 4))`,lotus:`97.9% on train instead of 100%: less memorising.`,trap:`None.`,read:[`One number: train accuracy 0.9791.`],remark:`Train 0.9791, below 1.0 so the tuned forest memorises less.`,howRemark:[`Compare with 1.0 in 7.4.6.`]}},"7.5.5":{vi:{think:`Ma trận nhầm lẫn của rừng đã chỉnh.`,steps:[`confusion_matrix.`],code:`cm3 = metrics.confusion_matrix(y_train, p3)
print(pd.DataFrame(cm3, index=['thực: sạch', 'thực: gian lận'], columns=['đoán: sạch', 'đoán: gian lận']))`,lotus:`Chỉ 1 vụ gian lận bị bỏ sót, 21 hồ sơ sạch bị báo nhầm trên train.`,trap:`Không có.`,read:[`Ma trận train: sai chỉ ở hai ô (21 báo nhầm, 1 bỏ sót).`],remark:`Rừng đã chỉnh sai 22 trên 1.052: báo nhầm 21 và bỏ sót 1; gần như không bỏ sót gian lận trên train.`,howRemark:[`Cộng ô sai.`,`Nêu loại sai chiếm ưu thế.`]},en:{think:`Confusion matrix of the tuned forest.`,steps:[`confusion_matrix.`],code:`cm3 = metrics.confusion_matrix(y_train, p3)
print(pd.DataFrame(cm3, index=['thực: sạch', 'thực: gian lận'], columns=['đoán: sạch', 'đoán: gian lận']))`,lotus:`Only 1 fraud missed and 21 clean claims flagged on train.`,trap:`None.`,read:[`Train matrix: errors only in two cells (21 false alarms, 1 miss).`],remark:`The tuned forest is wrong on 22 of 1,052: 21 false alarms and 1 miss; almost no missed fraud on train.`,howRemark:[`Add the error cells.`,`State the dominant error type.`]}},"7.5.6":{vi:{think:`TP, TN, FP, FN của rừng đã chỉnh.`,steps:[`ravel() ma trận.`],code:`# Làm theo ô starter, xem kết quả ở trên`,lotus:`Như 7.2.8.`,trap:`Không có.`,read:[`Ô này không in kết quả; việc cần xem là chạy không báo lỗi.`],remark:`TP 525, TN 505, FP 21, FN 1.`,howRemark:[`Nói bước này chuẩn bị gì cho bước sau.`,`Ghi tên biến/đối tượng mới được tạo.`]},en:{think:`TP, TN, FP, FN of the tuned forest.`,steps:[`ravel() the matrix.`],code:`# Làm theo ô starter, xem kết quả ở trên`,lotus:`As 7.2.8.`,trap:`None.`,read:[`This cell prints nothing; just check it ran without error.`],remark:`TP 525, TN 505, FP 21, FN 1.`,howRemark:[`Say what this step prepares for the next.`,`Note the new variable/object created.`]}},"7.5.7":{vi:{think:`Các chỉ số của rừng đã chỉnh trên train.`,steps:[`Công thức như 7.2.9.`],code:`TN, FP, FN, TP = cm3.ravel(); print(rep(TN, FP, FN, TP))`,lotus:`Sensitivity 0,998, specificity 0,960, F1 0,979.`,trap:`Số trên train vẫn quá đẹp: quyết định ở validation.`,read:[`Năm chỉ số: sensitivity 0,998, specificity 0,960, precision 0,962, F1 0,979.`],remark:`Trên train sensitivity 0,998 và F1 0,979 rất cao; chưa đáng tin cho đến khi kiểm validation.`,howRemark:[`Báo chỉ số.`,`Nhắc train không phải bằng chứng cuối.`]},en:{think:`Metrics of the tuned forest on train.`,steps:[`Formulas as 7.2.9.`],code:`TN, FP, FN, TP = cm3.ravel(); print(rep(TN, FP, FN, TP))`,lotus:`Sensitivity 0.998, specificity 0.960, F1 0.979.`,trap:`Train numbers are still too pretty: decide on validation.`,read:[`Five metrics: sensitivity 0.998, specificity 0.960, precision 0.962, F1 0.979.`],remark:`On train sensitivity 0.998 and F1 0.979 are very high; not trustworthy until checked on validation.`,howRemark:[`Report the metrics.`,`Remind train is not the final proof.`]}},"8.1.1":{vi:{think:`Chọn đúng các biến cho validation và thêm hằng số.`,steps:[`X_validation[col], add_constant(has_constant='add').`],code:`# Làm theo ô starter, xem kết quả ở trên`,lotus:`Cùng biến như train.`,trap:`Thiếu hằng số báo lỗi.`,read:[`Ô này không in kết quả; việc cần xem là chạy không báo lỗi.`],remark:`Chuẩn bị dự đoán trên validation theo đúng cách đã làm ở train (cùng biến, cùng hằng số).`,howRemark:[`Nói bước này chuẩn bị gì cho bước sau.`,`Ghi tên biến/đối tượng mới được tạo.`]},en:{think:`Select the same features for validation and add the constant.`,steps:[`X_validation[col], add_constant(has_constant='add').`],code:`# Làm theo ô starter, xem kết quả ở trên`,lotus:`Same features as train.`,trap:`A missing constant raises an error.`,read:[`This cell prints nothing; just check it ran without error.`],remark:`Prepare validation predictions exactly as done on train (same variables, same constant).`,howRemark:[`Say what this step prepares for the next.`,`Note the new variable/object created.`]}},"8.1.2":{vi:{think:`Dự đoán xác suất trên validation.`,steps:[`res.predict.`],code:`# Làm theo ô starter, xem kết quả ở trên`,lotus:`Mô hình đoán hồ sơ chưa từng thấy.`,trap:`Không huấn luyện lại bằng validation.`,read:[`Ô này không in kết quả; việc cần xem là chạy không báo lỗi.`],remark:`Chuẩn bị dự đoán trên validation theo đúng cách đã làm ở train (cùng biến, cùng hằng số).`,howRemark:[`Nói bước này chuẩn bị gì cho bước sau.`,`Ghi tên biến/đối tượng mới được tạo.`]},en:{think:`Predict probabilities on validation.`,steps:[`res.predict.`],code:`# Làm theo ô starter, xem kết quả ở trên`,lotus:`The model guesses claims it has never seen.`,trap:`Do not retrain on validation.`,read:[`This cell prints nothing; just check it ran without error.`],remark:`Prepare validation predictions exactly as done on train (same variables, same constant).`,howRemark:[`Say what this step prepares for the next.`,`Note the new variable/object created.`]}},"8.1.3":{vi:{think:`Tạo bảng thực tế và dự đoán cho validation.`,steps:[`Giống 7.2.5.`],code:`# Làm theo ô starter, xem kết quả ở trên`,lotus:`Mỗi hồ sơ validation có xác suất gian lận.`,trap:`Hai mảng khác độ dài báo lỗi.`,read:[`Ô này không in kết quả; việc cần xem là chạy không báo lỗi.`],remark:`Chuẩn bị dự đoán trên validation theo đúng cách đã làm ở train (cùng biến, cùng hằng số).`,howRemark:[`Nói bước này chuẩn bị gì cho bước sau.`,`Ghi tên biến/đối tượng mới được tạo.`]},en:{think:`Build the actual-vs-predicted table for validation.`,steps:[`As 7.2.5.`],code:`# Làm theo ô starter, xem kết quả ở trên`,lotus:`Each validation claim has a fraud probability.`,trap:`Arrays of different length raise an error.`,read:[`This cell prints nothing; just check it ran without error.`],remark:`Prepare validation predictions exactly as done on train (same variables, same constant).`,howRemark:[`Say what this step prepares for the next.`,`Note the new variable/object created.`]}},"8.1.4":{vi:{think:`Dự đoán cuối theo ngưỡng đã chọn trên train.`,steps:[`Dùng cùng cutoff 0,5.`],code:`Xv_sm = sm.add_constant(X_validation[col].astype(float), has_constant='add')
va = pd.DataFrame({'Fraud': y_validation.values, 'Prob': res.predict(Xv_sm).values})
va['final'] = (va['Prob'] > cutoff).astype(int)
print(va.head(6).round(3).to_string())`,lotus:`Dùng đúng ngưỡng chọn ở train.`,trap:`Chọn lại ngưỡng trên validation là rò rỉ.`,read:[`Cột final là dự đoán cuối theo ngưỡng chọn từ train.`],remark:`Áp ngưỡng 0,5 của train lên validation; hồ sơ có xác suất 0,964 được đoán gian lận đúng như thực tế.`,howRemark:[`Áp ngưỡng của train, không chọn lại.`]},en:{think:`Final prediction using the cutoff chosen on train.`,steps:[`Use the same cutoff 0.5.`],code:`Xv_sm = sm.add_constant(X_validation[col].astype(float), has_constant='add')
va = pd.DataFrame({'Fraud': y_validation.values, 'Prob': res.predict(Xv_sm).values})
va['final'] = (va['Prob'] > cutoff).astype(int)
print(va.head(6).round(3).to_string())`,lotus:`Use exactly the cutoff chosen on train.`,trap:`Re-choosing the cutoff on validation leaks.`,read:[`final is the final prediction at the threshold chosen on train.`],remark:`Applied train's 0.5 threshold to validation; the record with probability 0.964 is correctly predicted as fraud.`,howRemark:[`Apply train's threshold, do not re-pick.`]}},"8.1.5":{vi:{think:`Độ chính xác của hồi quy logistic trên validation.`,steps:[`accuracy_score.`],code:`print('accuracy validation', round(metrics.accuracy_score(va['Fraud'], va['final']), 4), '| train', round(metrics.accuracy_score(tr['Fraud'], tr['final']), 4))`,lotus:`84,3% trên validation so với 87,3% trên train: giảm một chút, chấp nhận được.`,trap:`Chênh nhiều là quá khớp.`,read:[`Hai số: accuracy validation 0,8433 và train 0,8726.`],remark:`Độ chính xác validation 0,8433 thấp hơn train 0,8726 khoảng 3 điểm: chênh nhỏ nên hồi quy logistic không quá khớp.`,howRemark:[`So hai số.`,`Nói quá khớp hay không.`]},en:{think:`Logistic regression accuracy on validation.`,steps:[`accuracy_score.`],code:`print('accuracy validation', round(metrics.accuracy_score(va['Fraud'], va['final']), 4), '| train', round(metrics.accuracy_score(tr['Fraud'], tr['final']), 4))`,lotus:`84.3% on validation versus 87.3% on train: a small drop, acceptable.`,trap:`A big gap means overfitting.`,read:[`Two numbers: validation accuracy 0.8433 and train 0.8726.`],remark:`Validation accuracy 0.8433 is about 3 points below train's 0.8726: a small gap so logistic regression is not overfit.`,howRemark:[`Compare the two numbers.`,`Say overfit or not.`]}},"8.1.6":{vi:{think:`Ma trận nhầm lẫn trên validation.`,steps:[`confusion_matrix.`],code:`cmv = metrics.confusion_matrix(va['Fraud'], va['final'])
print(pd.DataFrame(cmv, index=['thực: sạch', 'thực: gian lận'], columns=['đoán: sạch', 'đoán: gian lận']))`,lotus:`Trên 300 hồ sơ chưa thấy: bắt 62 vụ gian lận, bỏ sót 12, báo nhầm 35 hồ sơ sạch.`,trap:`Không có.`,read:[`Ma trận validation: đoán đúng 191 sạch và 62 gian lận; sai 35 và 12.`],remark:`Bắt được 62 trong 74 hồ sơ gian lận (bỏ sót 12) nhưng báo nhầm 35 hồ sơ sạch; ít bỏ sót nhưng nhiều báo nhầm.`,howRemark:[`Cộng đúng và sai.`,`Nêu loại sai nhiều hơn.`,`Nói hệ quả.`]},en:{think:`Confusion matrix on validation.`,steps:[`confusion_matrix.`],code:`cmv = metrics.confusion_matrix(va['Fraud'], va['final'])
print(pd.DataFrame(cmv, index=['thực: sạch', 'thực: gian lận'], columns=['đoán: sạch', 'đoán: gian lận']))`,lotus:`On 300 unseen claims: catches 62 frauds, misses 12, falsely flags 35 clean ones.`,trap:`None.`,read:[`Validation matrix: 191 clean and 62 fraud right; 35 and 12 wrong.`],remark:`Caught 62 of 74 fraud records (12 missed) but falsely flagged 35 clean ones; few misses but many false alarms.`,howRemark:[`Add right and wrong.`,`State the more frequent error.`,`State the consequence.`]}},"8.1.7":{vi:{think:`TP, TN, FP, FN trên validation.`,steps:[`ravel() ma trận.`],code:`# Làm theo ô starter, xem kết quả ở trên`,lotus:`Như 7.2.8.`,trap:`Không có.`,read:[`Ô này không in kết quả; việc cần xem là chạy không báo lỗi.`],remark:`TP 62, TN 191, FP 35, FN 12 trên validation.`,howRemark:[`Nói bước này chuẩn bị gì cho bước sau.`,`Ghi tên biến/đối tượng mới được tạo.`]},en:{think:`TP, TN, FP, FN on validation.`,steps:[`ravel() the matrix.`],code:`# Làm theo ô starter, xem kết quả ở trên`,lotus:`As 7.2.8.`,trap:`None.`,read:[`This cell prints nothing; just check it ran without error.`],remark:`TP 62, TN 191, FP 35, FN 12 on validation.`,howRemark:[`Say what this step prepares for the next.`,`Note the new variable/object created.`]}},"8.1.8":{vi:{think:`Sensitivity, specificity, precision, recall, F1 trên validation.`,steps:[`Công thức như 7.2.9.`],code:`TN, FP, FN, TP = cmv.ravel(); print(rep(TN, FP, FN, TP))`,lotus:`Sensitivity 0,838, specificity 0,845, precision 0,639, F1 0,725. Precision chỉ 64%: cứ ba hồ sơ bị báo thì một là báo nhầm.`,trap:`So với train, precision tụt mạnh vì validation giữ tỷ lệ gian lận thật (ít hơn).`,read:[`Năm chỉ số validation: sensitivity 0,838, specificity 0,845, precision 0,639, F1 0,725.`],remark:`Bắt được 83,8% gian lận nhưng precision chỉ 0,639: trong số hồ sơ bị báo gian lận chỉ khoảng 64% thật sự gian lận, vì gian lận chỉ chiếm 24,7%. F1 0,725.`,howRemark:[`Báo từng chỉ số.`,`Giải thích precision thấp.`,`Nói đánh đổi cho việc điều tra.`]},en:{think:`Metrics on validation.`,steps:[`Formulas as 7.2.9.`],code:`TN, FP, FN, TP = cmv.ravel(); print(rep(TN, FP, FN, TP))`,lotus:`Sensitivity 0.838, specificity 0.845, precision 0.639, F1 0.725. Precision is only 64%: of three flagged claims one is a false alarm.`,trap:`Precision drops against train because validation keeps the real (lower) fraud rate.`,read:[`Five validation metrics: sensitivity 0.838, specificity 0.845, precision 0.639, F1 0.725.`],remark:`Catches 83.8% of fraud but precision is only 0.639: of records flagged only about 64% are truly fraud, since fraud is just 24.7%. F1 0.725.`,howRemark:[`Report each metric.`,`Explain the low precision.`,`State the trade-off for investigation.`]}},"8.2.1":{vi:{think:`Chọn biến quan trọng và dự đoán trên validation bằng random forest.`,steps:[`rf3.predict(X_validation[sel]).`],code:`pv = rf3.predict(X_validation[sel]); print('dự đoán', len(pv), 'hồ sơ validation; dự đoán gian lận:', int(pv.sum()))`,lotus:`Rừng báo gian lận 92 trên 300 hồ sơ.`,trap:`Dùng đúng danh sách biến sel của train.`,read:[`Dòng chữ: dự đoán 300 hồ sơ validation, 92 hồ sơ bị đoán gian lận.`],remark:`Rừng đánh dấu 92 hồ sơ gian lận trong 300 (thực tế 74), tức báo nhiều hơn thực tế.`,howRemark:[`So số báo với số thật (74).`]},en:{think:`Select the important features and predict on validation with the random forest.`,steps:[`rf3.predict(X_validation[sel]).`],code:`pv = rf3.predict(X_validation[sel]); print('dự đoán', len(pv), 'hồ sơ validation; dự đoán gian lận:', int(pv.sum()))`,lotus:`The forest flags 92 of 300 claims as fraud.`,trap:`Use exactly the sel list from train.`,read:[`Text: predicted 300 validation records, 92 flagged as fraud.`],remark:`The forest flags 92 of 300 as fraud (actual 74), i.e. more than reality.`,howRemark:[`Compare flagged with actual (74).`]}},"8.2.2":{vi:{think:`Độ chính xác của rừng trên validation.`,steps:[`accuracy_score.`],code:`print('accuracy RF validation', round(metrics.accuracy_score(y_validation, pv), 4))`,lotus:`82,0% trên validation so với 97,9% trên train: khoảng cách lớn, rừng quá khớp hơn hồi quy logistic.`,trap:`Chọn rừng chỉ vì điểm train cao.`,read:[`Một số: accuracy rừng validation 0,82.`],remark:`Rừng đạt 0,82 trên validation, thấp hơn 0,9791 ở train nhiều nên còn quá khớp.`,howRemark:[`So với train.`,`Nói quá khớp hay không.`]},en:{think:`Random forest accuracy on validation.`,steps:[`accuracy_score.`],code:`print('accuracy RF validation', round(metrics.accuracy_score(y_validation, pv), 4))`,lotus:`82.0% on validation versus 97.9% on train: a large gap, the forest overfits more than logistic regression.`,trap:`Choosing the forest just because of a high train score.`,read:[`One number: forest validation accuracy 0.82.`],remark:`The forest scores 0.82 on validation, far below 0.9791 on train, so still overfit.`,howRemark:[`Compare with train.`,`Say overfit or not.`]}},"8.2.3":{vi:{think:`Ma trận nhầm lẫn của rừng trên validation.`,steps:[`confusion_matrix.`],code:`cmrf = metrics.confusion_matrix(y_validation, pv)
print(pd.DataFrame(cmrf, index=['thực: sạch', 'thực: gian lận'], columns=['đoán: sạch', 'đoán: gian lận']))`,lotus:`Bắt 56 vụ gian lận, bỏ sót 18, báo nhầm 36.`,trap:`Không có.`,read:[`Ma trận validation của rừng: đúng 190 sạch và 56 gian lận; sai 36 và 18.`],remark:`Rừng bắt được 56 trên 74 gian lận (bỏ sót 18) và báo nhầm 36; kém hồi quy ở cả hai loại sai.`,howRemark:[`So từng ô với 8.1.6.`,`Nêu mô hình nào ít sai hơn.`]},en:{think:`Confusion matrix of the forest on validation.`,steps:[`confusion_matrix.`],code:`cmrf = metrics.confusion_matrix(y_validation, pv)
print(pd.DataFrame(cmrf, index=['thực: sạch', 'thực: gian lận'], columns=['đoán: sạch', 'đoán: gian lận']))`,lotus:`Catches 56 frauds, misses 18, falsely flags 36.`,trap:`None.`,read:[`Forest validation matrix: 190 clean and 56 fraud right; 36 and 18 wrong.`],remark:`The forest catches 56 of 74 fraud (18 missed) and falsely flags 36; worse than regression on both error types.`,howRemark:[`Compare each cell with 8.1.6.`,`State which model errs less.`]}},"8.2.4":{vi:{think:`TP, TN, FP, FN của rừng trên validation.`,steps:[`ravel() ma trận.`],code:`# Làm theo ô starter, xem kết quả ở trên`,lotus:`Như 7.2.8.`,trap:`Không có.`,read:[`Ô này không in kết quả; việc cần xem là chạy không báo lỗi.`],remark:`TP 56, TN 190, FP 36, FN 18 trên validation.`,howRemark:[`Nói bước này chuẩn bị gì cho bước sau.`,`Ghi tên biến/đối tượng mới được tạo.`]},en:{think:`TP, TN, FP, FN of the forest on validation.`,steps:[`ravel() the matrix.`],code:`# Làm theo ô starter, xem kết quả ở trên`,lotus:`As 7.2.8.`,trap:`None.`,read:[`This cell prints nothing; just check it ran without error.`],remark:`TP 56, TN 190, FP 36, FN 18 on validation.`,howRemark:[`Say what this step prepares for the next.`,`Note the new variable/object created.`]}},"8.2.5":{vi:{think:`Các chỉ số của rừng trên validation và so sánh hai mô hình.`,steps:[`Công thức như 7.2.9 hoặc classification_report.`,`So với hồi quy logistic.`],code:`TN, FP, FN, TP = cmrf.ravel(); print(rep(TN, FP, FN, TP))
print(classification_report(y_validation, pv, target_names=['sạch', 'gian lận']))`,lotus:`Rừng: sensitivity 0,757, precision 0,609, F1 0,675. Hồi quy logistic: 0,838, 0,639, 0,725. Với dữ liệu nhỏ này hồi quy logistic bắt được nhiều gian lận hơn và ổn định hơn: chọn nó và viết lý do vào phần kết luận.`,trap:`So sánh hai mô hình chỉ bằng train.`,read:[`Năm chỉ số của rừng: sensitivity 0,757, specificity 0,841, precision 0,609, F1 0,675.`,`Bảng cuối là báo cáo phân loại cho cả hai lớp.`],remark:`So hai mô hình trên validation: hồi quy logistic có accuracy 0,843, sensitivity 0,838, F1 0,725; rừng 0,82, 0,757 và 0,675. Hồi quy tốt hơn ở mọi thước đo nên chọn hồi quy logistic.`,howRemark:[`Đặt hai mô hình cạnh nhau.`,`Chọn mô hình theo thước đo ưu tiên (bắt gian lận).`,`Nêu lý do (rừng quá khớp).`]},en:{think:`Forest metrics on validation and comparison of the two models.`,steps:[`Formulas as 7.2.9 or classification_report.`,`Compare with logistic regression.`],code:`TN, FP, FN, TP = cmrf.ravel(); print(rep(TN, FP, FN, TP))
print(classification_report(y_validation, pv, target_names=['sạch', 'gian lận']))`,lotus:`Forest: sensitivity 0.757, precision 0.609, F1 0.675. Logistic: 0.838, 0.639, 0.725. On this small dataset logistic regression catches more fraud and is more stable: choose it and write the reason in the conclusion.`,trap:`Comparing the two models on train only.`,read:[`Five forest metrics: sensitivity 0.757, specificity 0.841, precision 0.609, F1 0.675.`,`The last table is the classification report for both classes.`],remark:`Comparing the two on validation: logistic regression has accuracy 0.843, sensitivity 0.838, F1 0.725; the forest 0.82, 0.757 and 0.675. Regression wins on every measure so choose logistic regression.`,howRemark:[`Put the two models side by side.`,`Choose by the priority metric (catching fraud).`,`State the reason (forest overfits).`]}}},results:{"1.1":{code:`import pandas as pd, numpy as np, matplotlib.pyplot as plt, seaborn as sns
df = pd.read_csv('/tmp/asg/all/2/Starter Notebook + Data/insurance_claims.csv')
print(df.shape)
print(df.iloc[:3, :12].to_string())`,text:`(1000, 40)
   months_as_customer  age  policy_number policy_bind_date policy_state policy_csl  policy_deductable  policy_annual_premium  umbrella_limit  insured_zip insured_sex insured_education_level
0                 328   48         521585       2014-10-17           OH    250/500               1000                1406.91               0       466132        MALE                      MD
1                 228   42         342868       2006-06-27           IN    250/500               2000                1197.22         5000000       468176        MALE                      MD
2                 134   29         687698       2000-09-06           OH    100/300               2000                1413.14         5000000       430632      FEMALE                     PhD`,imgs:[]},"2.1.1":{code:`print(df.isnull().sum()[df.isnull().sum() > 0])`,text:`authorities_contacted      91
_c39                     1000
dtype: int64`,imgs:[]},"2.1.2":{code:`# authorities_contacted trống = chưa liên hệ cơ quan nào
df['authorities_contacted'] = df['authorities_contacted'].fillna('None')
print(df['authorities_contacted'].value_counts())`,text:`authorities_contacted
Police       292
Fire         223
Other        198
Ambulance    196
None          91
Name: count, dtype: int64`,imgs:[]},"2.2.1":{code:`for c in df.select_dtypes(include=['object', 'str']).columns:
    if df[c].nunique() < 12: print(c, df[c].value_counts().to_dict())
print((df == '?').sum()[lambda s: s > 0])`,text:`policy_state {'OH': 352, 'IL': 338, 'IN': 310}
policy_csl {'250/500': 351, '100/300': 349, '500/1000': 300}
insured_sex {'FEMALE': 537, 'MALE': 463}
insured_education_level {'JD': 161, 'High School': 160, 'Associate': 145, 'MD': 144, 'Masters': 143, 'PhD': 125, 'College': 122}
insured_relationship {'own-child': 183, 'other-relative': 177, 'not-in-family': 174, 'husband': 170, 'wife': 155, 'unmarried': 141}
incident_type {'Multi-vehicle Collision': 419, 'Single Vehicle Collision': 403, 'Vehicle Theft': 94, 'Parked Car': 84}
collision_type {'Rear Collision': 292, 'Side Collision': 276, 'Front Collision': 254, '?': 178}
incident_severity {'Minor Damage': 354, 'Total Loss': 280, 'Major Damage': 276, 'Trivial Damage': 90}
authorities_contacted {'Police': 292, 'Fire': 223, 'Other': 198, 'Ambulance': 196, 'None': 91}
incident_state {'NY': 262, 'SC': 248, 'WV': 217, 'VA': 110, 'NC': 110, 'PA': 30, 'OH': 23}
incident_city {'Springfield': 157, 'Arlington': 152, 'Columbus': 149, 'Northbend': 145, 'Hillsdale': 141, 'Riverwood': 134, 'Northbrook': 122}
property_damage {'?': 360, 'NO': 338, 'YES': 302}
police_report_available {'?': 343, 'NO': 343, 'YES': 314}
fraud_reported {'N': 753, 'Y': 247}
collision_type             178
property_damage            360
police_report_available    343
dtype: int64`,imgs:[]},"2.2.2":{code:`empty = [c for c in df.columns if df[c].isnull().all()]
print('cột rỗng hoàn toàn:', empty)
df = df.drop(columns=empty)`,text:`cột rỗng hoàn toàn: ['_c39']`,imgs:[]},"2.2.3":{code:`num = df.select_dtypes(include='number')
print((num < 0).sum()[lambda s: s > 0])
print(df[['umbrella_limit']].query('umbrella_limit < 0'))
df = df[df['umbrella_limit'] >= 0]
print(len(df))`,text:`umbrella_limit      1
capital-loss      525
dtype: int64
     umbrella_limit
290        -1000000
999`,imgs:[]},"2.2.4":{code:`ratio = (df.nunique() / len(df)).sort_values(ascending=False)
print(ratio.head(6).round(3))
ids = ['policy_number', 'incident_location', 'insured_zip']
df = df.drop(columns=ids)
print(df.shape)`,text:`policy_number            1.000
incident_location        1.000
insured_zip              0.995
policy_annual_premium    0.991
policy_bind_date         0.951
total_claim_amount       0.763
dtype: float64
(999, 36)`,imgs:[]},"2.3":{code:`df['policy_bind_date'] = pd.to_datetime(df['policy_bind_date'])
df['incident_date'] = pd.to_datetime(df['incident_date'])
print(df[['policy_bind_date', 'incident_date']].dtypes)`,text:`policy_bind_date    datetime64[us]
incident_date       datetime64[us]
dtype: object`,imgs:[]},"3.2":{code:`y = df['fraud_reported']
X = df.drop(columns=['fraud_reported'])
print(X.shape, y.shape)`,text:`(999, 35) (999,)`,imgs:[]},"3.3":{code:`from sklearn.model_selection import train_test_split
X_train, X_validation, y_train, y_validation = train_test_split(X, y, train_size=0.7, stratify=y, random_state=42)
for t in (X_train, X_validation, y_train, y_validation): t.reset_index(drop=True, inplace=True)
print(len(X_train), len(X_validation), y_train.value_counts(normalize=True).round(3).to_dict(), y_validation.value_counts(normalize=True).round(3).to_dict())`,text:`699 300 {'N': 0.753, 'Y': 0.247} {'N': 0.753, 'Y': 0.247}`,imgs:[]},"4.1.1":{code:`num_cols = X_train.select_dtypes(include='number').columns
print(list(num_cols))`,text:`['months_as_customer', 'age', 'policy_deductable', 'policy_annual_premium', 'umbrella_limit', 'capital-gains', 'capital-loss', 'incident_hour_of_the_day', 'number_of_vehicles_involved', 'bodily_injuries', 'witnesses', 'total_claim_amount', 'injury_claim', 'property_claim', 'vehicle_claim', 'auto_year']`,imgs:[]},"4.1.2":{code:`X_train[num_cols].hist(bins=25, figsize=(15, 11)); plt.tight_layout()`,text:``,imgs:[`/assign/fraud-claim/4_1_2-1.png`]},"4.2":{code:`plt.figure(figsize=(11, 8)); sns.heatmap(X_train[num_cols].corr(), annot=True, fmt='.2f', cmap='coolwarm', center=0, annot_kws={'size': 7})
c = X_train[num_cols].corr().abs().where(np.triu(np.ones((len(num_cols),)*2), 1).astype(bool)).stack().sort_values(ascending=False)
print(c.head(6).round(2))`,text:`total_claim_amount  vehicle_claim     0.98
months_as_customer  age               0.92
total_claim_amount  injury_claim      0.82
                    property_claim    0.82
injury_claim        vehicle_claim     0.74
property_claim      vehicle_claim     0.74
dtype: float64`,imgs:[`/assign/fraud-claim/4_2-1.png`]},"4.3":{code:`print(y_train.value_counts(normalize=True).round(3))
y_train.value_counts().plot(kind='bar', color=['#2f6f5e', '#b5543c'], title='Cân bằng lớp (train)')`,text:`fraud_reported
N    0.753
Y    0.247
Name: proportion, dtype: float64`,imgs:[`/assign/fraud-claim/4_3-1.png`]},"4.4.1":{code:`cat_cols = X_train.select_dtypes(include=['object', 'str']).columns
t = X_train.assign(fraud=(y_train == 'Y').astype(int))
def likelihood(col):
    return t.groupby(col)['fraud'].mean().sort_values(ascending=False)
overall = t['fraud'].mean()
rows = []
for c in cat_cols:
    s = likelihood(c)
    rows.append((c, s.index[0], round(s.iloc[0], 3), round(s.iloc[-1] - 0, 3), round(s.iloc[0] - s.iloc[-1], 3)))
tab = pd.DataFrame(rows, columns=['cột', 'nhóm có tỷ lệ gian lận cao nhất', 'tỷ lệ cao nhất', 'tỷ lệ thấp nhất', 'khoảng cách']).sort_values('khoảng cách', ascending=False)
print('tỷ lệ gian lận chung:', round(overall, 3)); print(tab.head(8).to_string(index=False))
fig, ax = plt.subplots(1, 3, figsize=(16, 4))
for a, c in zip(ax, ['incident_severity', 'insured_hobbies', 'collision_type']):
    likelihood(c).plot(kind='bar', ax=a, title=f'Tỷ lệ gian lận theo {c}'); a.axhline(overall, color='r', ls='--')
plt.tight_layout()`,text:`tỷ lệ gian lận chung: 0.247
                  cột nhóm có tỷ lệ gian lận cao nhất  tỷ lệ cao nhất  tỷ lệ thấp nhất  khoảng cách
      insured_hobbies                           chess           0.906            0.075        0.831
    incident_severity                    Major Damage           0.609            0.066        0.544
           auto_model                           Civic           0.500            0.000        0.500
       incident_state                              OH           0.421            0.151        0.270
authorities_contacted                       Ambulance           0.316            0.088        0.228
       collision_type                  Rear Collision           0.297            0.087        0.210
        incident_type        Single Vehicle Collision           0.287            0.082        0.205
   insured_occupation                transport-moving           0.345            0.143        0.202`,imgs:[`/assign/fraud-claim/4_4_1-1.png`]},"4.4.2":{code:`tn = X_train.assign(fraud=y_train)
fig, ax = plt.subplots(1, 4, figsize=(17, 4))
for a, c in zip(ax, ['total_claim_amount', 'vehicle_claim', 'months_as_customer', 'policy_annual_premium']):
    sns.boxplot(data=tn, x='fraud', y=c, ax=a)
plt.tight_layout()
print(tn.groupby('fraud')[['total_claim_amount', 'vehicle_claim', 'injury_claim', 'property_claim']].mean().round(0).to_string())`,text:`       total_claim_amount  vehicle_claim  injury_claim  property_claim
fraud                                                                 
N                 50293.0        36109.0        7203.0          6981.0
Y                 60921.0        43812.0        8439.0          8670.0`,imgs:[`/assign/fraud-claim/4_4_2-1.png`]},"5.1.2":{code:`num_v = X_validation.select_dtypes(include='number').columns
X_validation[num_v].hist(bins=25, figsize=(15, 11)); plt.tight_layout()`,text:``,imgs:[`/assign/fraud-claim/5_1_2-1.png`]},"5.3":{code:`print(y_validation.value_counts(normalize=True).round(3))`,text:`fraud_reported
N    0.753
Y    0.247
Name: proportion, dtype: float64`,imgs:[]},"6.1":{code:`from imblearn.over_sampling import RandomOverSampler
ros = RandomOverSampler(random_state=42)
X_train, y_train = ros.fit_resample(X_train, y_train)
print(y_train.value_counts(), len(X_train))`,text:`fraud_reported
N    526
Y    526
Name: count, dtype: int64 1052`,imgs:[]},"6.2":{code:`for d in (X_train, X_validation):
    d['policy_age_days'] = (d['incident_date'] - d['policy_bind_date']).dt.days
    d['incident_month'] = d['incident_date'].dt.month
    d['incident_dow'] = d['incident_date'].dt.dayofweek
    d['claim_per_vehicle'] = d['total_claim_amount'] / d['number_of_vehicles_involved']
print(X_train[['policy_age_days', 'incident_month', 'incident_dow', 'claim_per_vehicle']].describe().round(1).to_string())`,text:`       policy_age_days  incident_month  incident_dow  claim_per_vehicle
count           1052.0          1052.0        1052.0             1052.0
mean            4654.5             1.5           3.0            37039.9
std             2679.4             0.5           2.0            26688.0
min              -20.0             1.0           0.0              100.0
25%             2434.0             1.0           1.0            17102.5
50%             4556.0             1.0           3.0            26200.0
75%             7016.0             2.0           5.0            58225.0
max             9172.0             3.0           6.0           112320.0`,imgs:[]},"6.3":{code:`drop = ['policy_bind_date', 'incident_date', 'injury_claim', 'property_claim', 'vehicle_claim', 'auto_model', 'age']
for d in (X_train, X_validation): d.drop(columns=drop, inplace=True)
print(X_train.shape)`,text:`(1052, 32)`,imgs:[]},"6.4":{code:`# gộp nhóm hiếm: bang xảy ra sự cố và sở thích
rare_states = X_train['incident_state'].value_counts()[lambda s: s < 60].index
hobby_top = ['chess', 'cross-fit']
for d in (X_train, X_validation):
    d['incident_state'] = d['incident_state'].replace({s: 'Other' for s in rare_states})
    d['insured_hobbies'] = d['insured_hobbies'].where(d['insured_hobbies'].isin(hobby_top), 'other')
print(X_train['incident_state'].value_counts().to_dict()); print(X_train['insured_hobbies'].value_counts().to_dict())`,text:`{'SC': 283, 'NY': 257, 'WV': 194, 'NC': 135, 'VA': 109, 'Other': 74}
{'other': 902, 'chess': 101, 'cross-fit': 49}`,imgs:[]},"6.5.1":{code:`cat_cols = X_train.select_dtypes(include=['object', 'str']).columns
print(list(cat_cols))`,text:`['policy_state', 'policy_csl', 'insured_sex', 'insured_education_level', 'insured_occupation', 'insured_hobbies', 'insured_relationship', 'incident_type', 'collision_type', 'incident_severity', 'authorities_contacted', 'incident_state', 'incident_city', 'property_damage', 'police_report_available', 'auto_make']`,imgs:[]},"6.5.2":{code:`dt = pd.get_dummies(X_train[cat_cols], drop_first=True, dtype=int)
X_train = pd.concat([X_train.drop(columns=cat_cols), dt], axis=1)
print(X_train.shape)`,text:`(1052, 88)`,imgs:[]},"6.5.3":{code:`dv = pd.get_dummies(X_validation[cat_cols], drop_first=True, dtype=int)
X_validation = pd.concat([X_validation.drop(columns=cat_cols), dv], axis=1).reindex(columns=X_train.columns, fill_value=0)
print(X_validation.shape)`,text:`(300, 88)`,imgs:[]},"6.5.4":{code:`y_train = (y_train == 'Y').astype(int); y_validation = (y_validation == 'Y').astype(int)
print(y_train.mean().round(3), y_validation.mean().round(3))`,text:`0.5 0.247`,imgs:[]},"6.6":{code:`from sklearn.preprocessing import StandardScaler
sc_cols = [c for c in X_train.columns if X_train[c].nunique() > 2]
scaler = StandardScaler()
X_train[sc_cols] = scaler.fit_transform(X_train[sc_cols]); X_validation[sc_cols] = scaler.transform(X_validation[sc_cols])
print(len(sc_cols), 'cột số được chuẩn hóa')`,text:`16 cột số được chuẩn hóa`,imgs:[]},"7.1.2":{code:`from sklearn.linear_model import LogisticRegression
from sklearn.feature_selection import RFECV
rfecv = RFECV(LogisticRegression(max_iter=2000), step=1, cv=5, scoring='accuracy', min_features_to_select=5).fit(X_train, y_train)
print('số biến tối ưu:', rfecv.n_features_)
plt.plot(range(5, 5 + len(rfecv.cv_results_['mean_test_score'])), rfecv.cv_results_['mean_test_score']); plt.xlabel('số biến'); plt.ylabel('accuracy CV')
rank = pd.DataFrame({'feature': X_train.columns, 'rank': rfecv.ranking_}).sort_values('rank')
print(rank.head(12).to_string(index=False))`,text:`số biến tối ưu: 9
                             feature  rank
insured_occupation_handlers-cleaners     1
               insured_hobbies_other     1
      incident_severity_Minor Damage     1
    incident_severity_Trivial Damage     1
        incident_severity_Total Loss     1
  insured_occupation_priv-house-serv     1
           insured_hobbies_cross-fit     1
                      auto_make_Audi     1
                     auto_make_Honda     1
      insured_relationship_own-child     2
    insured_occupation_other-service     3
       collision_type_Side Collision     4`,imgs:[`/assign/fraud-claim/7_1_2-1.png`]},"7.2.2":{code:`import statsmodels.api as sm
X_train_sm = sm.add_constant(X_train[col].astype(float))
res = sm.GLM(y_train, X_train_sm, family=sm.families.Binomial()).fit()
print(res.summary().tables[1])`,text:`========================================================================================================
                                           coef    std err          z      P>|z|      [0.025      0.975]
--------------------------------------------------------------------------------------------------------
const                                    7.1240      0.633     11.251      0.000       5.883       8.365
insured_occupation_handlers-cleaners    -1.5323      0.455     -3.367      0.001      -2.424      -0.640
insured_occupation_priv-house-serv      -0.8680      0.431     -2.016      0.044      -1.712      -0.024
insured_hobbies_cross-fit               -2.1123      0.751     -2.812      0.005      -3.584      -0.640
insured_hobbies_other                   -5.6353      0.616     -9.154      0.000      -6.842      -4.429
incident_severity_Minor Damage          -3.8430      0.253    -15.196      0.000      -4.339      -3.347
incident_severity_Total Loss            -3.2218      0.239    -13.472      0.000      -3.691      -2.753
incident_severity_Trivial Damage        -4.1867      0.514     -8.152      0.000      -5.193      -3.180
auto_make_Audi                           0.9110      0.328      2.774      0.006       0.267       1.555
auto_make_Honda                          0.9615      0.438      2.195      0.028       0.103       1.820
========================================================================================================`,imgs:[]},"7.2.3":{code:`from statsmodels.stats.outliers_influence import variance_inflation_factor
Xv = X_train[col].astype(float)
vif = pd.DataFrame({'feature': col, 'VIF': [variance_inflation_factor(Xv.values, i) for i in range(Xv.shape[1])]}).sort_values('VIF', ascending=False)
print(vif.head(8).round(2).to_string(index=False))`,text:`                           feature  VIF
             insured_hobbies_other 1.48
         insured_hobbies_cross-fit 1.43
      incident_severity_Total Loss 1.26
    incident_severity_Minor Damage 1.24
  incident_severity_Trivial Damage 1.09
                    auto_make_Audi 1.03
insured_occupation_priv-house-serv 1.02
                   auto_make_Honda 1.01`,imgs:[]},"7.2.5":{code:`from sklearn import metrics
tr = pd.DataFrame({'Fraud': y_train.values, 'Prob': res.predict(X_train_sm).values})
tr['Predicted'] = (tr['Prob'] > 0.5).astype(int)
print(tr.head(6).round(3).to_string())`,text:`   Fraud   Prob  Predicted
0      0  0.816          1
1      0  0.150          0
2      0  0.063          0
3      0  0.087          0
4      0  0.150          0
5      0  0.816          1`,imgs:[]},"7.2.6":{code:`print('accuracy', round(metrics.accuracy_score(tr['Fraud'], tr['Predicted']), 4))`,text:`accuracy 0.8726`,imgs:[]},"7.2.7":{code:`cm = metrics.confusion_matrix(tr['Fraud'], tr['Predicted'])
print(pd.DataFrame(cm, index=['thực: sạch', 'thực: gian lận'], columns=['đoán: sạch', 'đoán: gian lận']))`,text:`                đoán: sạch  đoán: gian lận
thực: sạch             453              73
thực: gian lận          61             465`,imgs:[]},"7.2.9":{code:`TN, FP, FN, TP = cm.ravel()
def rep(TN, FP, FN, TP):
    se = TP / (TP + FN); sp = TN / (TN + FP); pr = TP / (TP + FP); f1 = 2 * pr * se / (pr + se)
    return f'sensitivity(recall) {se:.3f} | specificity {sp:.3f} | precision {pr:.3f} | F1 {f1:.3f}'
print(rep(TN, FP, FN, TP))`,text:`sensitivity(recall) 0.884 | specificity 0.861 | precision 0.864 | F1 0.874`,imgs:[]},"7.3.1":{code:`fpr, tpr, _ = metrics.roc_curve(tr['Fraud'], tr['Prob'], drop_intermediate=False)
auc = metrics.roc_auc_score(tr['Fraud'], tr['Prob'])
plt.plot(fpr, tpr, label=f'AUC = {auc:.3f}'); plt.plot([0, 1], [0, 1], 'k--'); plt.legend(); plt.xlabel('FPR'); plt.ylabel('TPR')`,text:``,imgs:[`/assign/fraud-claim/7_3_1-1.png`]},"7.3.3":{code:`rows = []
for i in [x / 10 for x in range(10)]:
    p = (tr['Prob'] > i).astype(int)
    tn, fp, fn, tp = metrics.confusion_matrix(tr['Fraud'], p).ravel()
    rows.append([i, (tp + tn) / len(tr), tp / (tp + fn), tn / (tn + fp)])
cdf = pd.DataFrame(rows, columns=['cutoff', 'accuracy', 'sensitivity', 'specificity'])
cdf.plot(x='cutoff', y=['accuracy', 'sensitivity', 'specificity'])
print(cdf.round(3).to_string(index=False))`,text:` cutoff  accuracy  sensitivity  specificity
    0.0     0.500        1.000        0.000
    0.1     0.757        0.973        0.540
    0.2     0.857        0.901        0.814
    0.3     0.857        0.901        0.814
    0.4     0.875        0.901        0.850
    0.5     0.873        0.884        0.861
    0.6     0.873        0.884        0.861
    0.7     0.874        0.875        0.873
    0.8     0.862        0.848        0.876
    0.9     0.654        0.325        0.983`,imgs:[`/assign/fraud-claim/7_3_3-1.png`]},"7.3.4":{code:`cutoff = 0.5
tr['final'] = (tr['Prob'] > cutoff).astype(int)
print('cutoff chọn:', cutoff)`,text:`cutoff chọn: 0.5`,imgs:[]},"7.3.8":{code:`cm2 = metrics.confusion_matrix(tr['Fraud'], tr['final']); TN, FP, FN, TP = cm2.ravel()
print(cm2); print(rep(TN, FP, FN, TP))`,text:`[[453  73]
 [ 61 465]]
sensitivity(recall) 0.884 | specificity 0.861 | precision 0.864 | F1 0.874`,imgs:[]},"7.3.9":{code:`from sklearn.metrics import precision_recall_curve
p, r, t = precision_recall_curve(tr['Fraud'], tr['Prob'])
plt.plot(t, p[:-1], 'g', label='precision'); plt.plot(t, r[:-1], 'r', label='recall'); plt.legend(); plt.xlabel('ngưỡng')`,text:``,imgs:[`/assign/fraud-claim/7_3_9-1.png`]},"7.4.2":{code:`from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report
from sklearn.model_selection import cross_val_score, GridSearchCV
rf = RandomForestClassifier(random_state=42, n_estimators=100).fit(X_train, y_train)
print('đã huấn luyện rừng', rf.n_estimators, 'cây')`,text:`đã huấn luyện rừng 100 cây`,imgs:[]},"7.4.3":{code:`imp = pd.Series(rf.feature_importances_, index=X_train.columns).sort_values(ascending=False)
imp.head(12).iloc[::-1].plot(kind='barh', title='Mức quan trọng của biến (random forest)')
sel = imp[imp > imp.mean()].index
print(len(sel), 'biến vượt mức trung bình'); print(imp.head(10).round(3).to_string())`,text:`17 biến vượt mức trung bình
incident_severity_Minor Damage    0.090
insured_hobbies_other             0.075
incident_severity_Total Loss      0.058
total_claim_amount                0.054
claim_per_vehicle                 0.053
months_as_customer                0.043
policy_annual_premium             0.037
policy_age_days                   0.035
incident_hour_of_the_day          0.032
auto_year                         0.031`,imgs:[`/assign/fraud-claim/7_4_3-1.png`]},"7.4.4":{code:`rf2 = RandomForestClassifier(random_state=42, n_estimators=100).fit(X_train[sel], y_train)
print('train với', len(sel), 'biến')`,text:`train với 17 biến`,imgs:[]},"7.4.6":{code:`p = rf2.predict(X_train[sel])
print('accuracy train', round(metrics.accuracy_score(y_train, p), 4))`,text:`accuracy train 1.0`,imgs:[]},"7.4.7":{code:`cmr = metrics.confusion_matrix(y_train, p)
print(pd.DataFrame(cmr, index=['thực: sạch', 'thực: gian lận'], columns=['đoán: sạch', 'đoán: gian lận']))`,text:`                đoán: sạch  đoán: gian lận
thực: sạch             526               0
thực: gian lận           0             526`,imgs:[]},"7.4.9":{code:`TN, FP, FN, TP = cmr.ravel(); print(rep(TN, FP, FN, TP))`,text:`sensitivity(recall) 1.000 | specificity 1.000 | precision 1.000 | F1 1.000`,imgs:[]},"7.4.10":{code:`cv = cross_val_score(rf2, X_train[sel], y_train, cv=5, scoring='accuracy')
print('accuracy 5 lần CV:', cv.round(3), '| trung bình', cv.mean().round(3))`,text:`accuracy 5 lần CV: [0.891 0.915 0.933 0.929 0.938] | trung bình 0.921`,imgs:[]},"7.5.1":{code:`grid = GridSearchCV(RandomForestClassifier(random_state=42), {'n_estimators': [100, 200], 'max_depth': [5, 10, None], 'min_samples_leaf': [1, 5, 10]}, cv=5, scoring='accuracy', n_jobs=-1).fit(X_train[sel], y_train)
print('tham số tốt nhất:', grid.best_params_, '| CV accuracy', round(grid.best_score_, 3))`,text:`tham số tốt nhất: {'max_depth': 10, 'min_samples_leaf': 1, 'n_estimators': 100} | CV accuracy 0.926`,imgs:[]},"7.5.2":{code:`rf3 = RandomForestClassifier(random_state=42, **grid.best_params_).fit(X_train[sel], y_train)
print(rf3)`,text:`RandomForestClassifier(max_depth=10, random_state=42)`,imgs:[]},"7.5.4":{code:`p3 = rf3.predict(X_train[sel]); print('accuracy train', round(metrics.accuracy_score(y_train, p3), 4))`,text:`accuracy train 0.9791`,imgs:[]},"7.5.5":{code:`cm3 = metrics.confusion_matrix(y_train, p3)
print(pd.DataFrame(cm3, index=['thực: sạch', 'thực: gian lận'], columns=['đoán: sạch', 'đoán: gian lận']))`,text:`                đoán: sạch  đoán: gian lận
thực: sạch             505              21
thực: gian lận           1             525`,imgs:[]},"7.5.7":{code:`TN, FP, FN, TP = cm3.ravel(); print(rep(TN, FP, FN, TP))`,text:`sensitivity(recall) 0.998 | specificity 0.960 | precision 0.962 | F1 0.979`,imgs:[]},"8.1.4":{code:`Xv_sm = sm.add_constant(X_validation[col].astype(float), has_constant='add')
va = pd.DataFrame({'Fraud': y_validation.values, 'Prob': res.predict(Xv_sm).values})
va['final'] = (va['Prob'] > cutoff).astype(int)
print(va.head(6).round(3).to_string())`,text:`   Fraud   Prob  final
0      0  0.150      0
1      0  0.150      0
2      0  0.150      0
3      0  0.087      0
4      0  0.150      0
5      1  0.964      1`,imgs:[]},"8.1.5":{code:`print('accuracy validation', round(metrics.accuracy_score(va['Fraud'], va['final']), 4), '| train', round(metrics.accuracy_score(tr['Fraud'], tr['final']), 4))`,text:`accuracy validation 0.8433 | train 0.8726`,imgs:[]},"8.1.6":{code:`cmv = metrics.confusion_matrix(va['Fraud'], va['final'])
print(pd.DataFrame(cmv, index=['thực: sạch', 'thực: gian lận'], columns=['đoán: sạch', 'đoán: gian lận']))`,text:`                đoán: sạch  đoán: gian lận
thực: sạch             191              35
thực: gian lận          12              62`,imgs:[]},"8.1.8":{code:`TN, FP, FN, TP = cmv.ravel(); print(rep(TN, FP, FN, TP))`,text:`sensitivity(recall) 0.838 | specificity 0.845 | precision 0.639 | F1 0.725`,imgs:[]},"8.2.1":{code:`pv = rf3.predict(X_validation[sel]); print('dự đoán', len(pv), 'hồ sơ validation; dự đoán gian lận:', int(pv.sum()))`,text:`dự đoán 300 hồ sơ validation; dự đoán gian lận: 92`,imgs:[]},"8.2.2":{code:`print('accuracy RF validation', round(metrics.accuracy_score(y_validation, pv), 4))`,text:`accuracy RF validation 0.82`,imgs:[]},"8.2.3":{code:`cmrf = metrics.confusion_matrix(y_validation, pv)
print(pd.DataFrame(cmrf, index=['thực: sạch', 'thực: gian lận'], columns=['đoán: sạch', 'đoán: gian lận']))`,text:`                đoán: sạch  đoán: gian lận
thực: sạch             190              36
thực: gian lận          18              56`,imgs:[]},"8.2.5":{code:`TN, FP, FN, TP = cmrf.ravel(); print(rep(TN, FP, FN, TP))
print(classification_report(y_validation, pv, target_names=['sạch', 'gian lận']))`,text:`sensitivity(recall) 0.757 | specificity 0.841 | precision 0.609 | F1 0.675
              precision    recall  f1-score   support

        sạch       0.91      0.84      0.88       226
    gian lận       0.61      0.76      0.67        74

    accuracy                           0.82       300
   macro avg       0.76      0.80      0.78       300
weighted avg       0.84      0.82      0.83       300`,imgs:[]},"7.1.2b":{code:`col = X_train.columns[rfecv.support_]
print(len(col), list(col)[:20])`,text:`9 ['insured_occupation_handlers-cleaners', 'insured_occupation_priv-house-serv', 'insured_hobbies_cross-fit', 'insured_hobbies_other', 'incident_severity_Minor Damage', 'incident_severity_Total Loss', 'incident_severity_Trivial Damage', 'auto_make_Audi', 'auto_make_Honda']`,imgs:[]}}},{id:`sql-pmfby`,course:`C2 · SQL`,title:[`Bài tập: SQL với dữ liệu bảo hiểm cây trồng PMFBY`,`Assignment: SQL on PMFBY crop insurance data`],file:`SQL_Assg_Farmers_Insurance_Questions_Starter.sql`,story:[`Starter gốc là dữ liệu bảo hiểm nông nghiệp PMFBY (1.870 dòng, 27 bang). Trong Lotus Spa: bảng là sổ booking của chuỗi, «bang» = chi nhánh, «huyện» = phòng/khu vực, «nông dân được bảo hiểm» = số khách. Mỗi câu hỏi có lời giải, kết quả thật và lưu ý đơn vị (số tiền lưu theo lakh, 1 crore = 100 lakh). Kết quả chạy thử trên SQLite với cùng dữ liệu; câu lệnh dùng cú pháp chung với MySQL.`,`The original starter is PMFBY agricultural insurance data (1,870 rows, 27 states). In Lotus Spa: the table is the chain's booking log, “state” = branch, “district” = room/area, “farmers insured” = customers. Each question has a solution, a real result and a unit note (amounts are stored in lakh, 1 crore = 100 lakh). Results were run on SQLite with the same data; statements use syntax shared with MySQL.`],concepts:[`d-7cf7bfeb24eb`],cells:[{t:`code`,s:`use ndap;`},{t:`code`,s:`

-- ----------------------------------------------------------------------------------------------
-- SECTION 1. 
-- SELECT Queries [5 Marks]

-- 	Q1.	Retrieve the names of all states (srcStateName) from the dataset.
-- ###
-- 	[2 Marks]
-- ###
-- TYPE YOUR CODE BELOW >
-- <write your answers in the empty spaces given, the length of solution queries (and the solution writing space) can vary>


###`,ref:`Q1`},{t:`code`,s:`
-- 	Q2.	Retrieve the total number of farmers covered (TotalFarmersCovered) 
-- 		and the sum insured (SumInsured) for each state (srcStateName), ordered by TotalFarmersCovered in descending order.
-- ###
-- 	[3 Marks]
-- ###
-- TYPE YOUR CODE BELOW >


-- ###`,ref:`Q2`},{t:`code`,s:`
-- --------------------------------------------------------------------------------------
-- SECTION 2. 
-- Filtering Data (WHERE) [15 Marks]

-- 	Q3.	Retrieve all records where Year is '2020'.
-- ###
-- 	[2 Marks]
-- ###
-- TYPE YOUR CODE BELOW >


-- ###`,ref:`Q3`},{t:`code`,s:`
-- 	Q4.	Retrieve all rows where the TotalPopulationRural is greater than 1 million and the srcStateName is 'HIMACHAL PRADESH'.
-- ###
-- 	[3 Marks]
-- ###
-- TYPE YOUR CODE BELOW >


-- ###`,ref:`Q4`},{t:`code`,s:`
-- 	Q5.	Retrieve the srcStateName, srcDistrictName, and the sum of FarmersPremiumAmount for each district in the year 2018, 
-- 		and display the results ordered by FarmersPremiumAmount in ascending order.
-- ###
-- 	[5 Marks]
-- ###
-- TYPE YOUR CODE BELOW >


-- ###`,ref:`Q5`},{t:`code`,s:`
-- 	Q6.	Retrieve the total number of farmers covered (TotalFarmersCovered) and the sum of premiums (GrossPremiumAmountToBePaid) for each state (srcStateName) 
-- 		where the insured land area (InsuredLandArea) is greater than 5.0 and the Year is 2018.
-- ###
-- 	[5 Marks]
-- ###
-- TYPE YOUR CODE BELOW >


	  
-- ###`,ref:`Q6`},{t:`code`,s:`-- ------------------------------------------------------------------------------------------------

-- SECTION 3.
-- Aggregation (GROUP BY) [10 marks]

-- 	Q7. 	Calculate the average insured land area (InsuredLandArea) for each year (srcYear).
-- ###
-- 	[3 Marks]
-- ###
-- TYPE YOUR CODE BELOW >



-- ###`,ref:`Q7`},{t:`code`,s:`
-- 	Q8. 	Calculate the total number of farmers covered (TotalFarmersCovered) for each district (srcDistrictName) where Insurance units is greater than 0.
-- ###
-- 	[3 Marks]
-- ###
-- TYPE YOUR CODE BELOW >



-- ###`,ref:`Q8`},{t:`code`,s:`
-- 	Q9.	For each state (srcStateName), calculate the total premium amounts (FarmersPremiumAmount, StatePremiumAmount, GOVPremiumAmount) 
-- 		and the total number of farmers covered (TotalFarmersCovered). Only include records where the sum insured (SumInsured) is greater than 500,000 (remember to check for scaling).
-- ###
-- 	[4 Marks]
-- ###
-- TYPE YOUR CODE BELOW >




-- ###`,ref:`Q9`},{t:`code`,s:`
-- -------------------------------------------------------------------------------------------------
-- SECTION 4.
-- Sorting Data (ORDER BY) [10 Marks]

-- 	Q10.	Retrieve the top 5 districts (srcDistrictName) with the highest TotalPopulation in the year 2020.
-- ###
-- 	[2 Marks]
-- ###
-- TYPE YOUR CODE BELOW >




-- ###`,ref:`Q10`},{t:`code`,s:`
-- 	Q11.	Retrieve the srcStateName, srcDistrictName, and SumInsured for the 10 districts with the lowest non-zero FarmersPremiumAmount, 
-- 		ordered by insured sum and then the FarmersPremiumAmount.
-- ###
-- 	[3 Marks]
-- ###
-- TYPE YOUR CODE BELOW >



###`,ref:`Q11`},{t:`code`,s:`
-- 	Q12. 	Retrieve the top 3 states (srcStateName) along with the year (srcYear) where the ratio of insured farmers (TotalFarmersCovered) to the total population (TotalPopulation) is highest. 
-- 		Sort the results by the ratio in descending order.
-- ###
-- 	[5 Marks]
-- ###
-- TYPE YOUR CODE BELOW >



-- ###`,ref:`Q12`},{t:`code`,s:`
-- -------------------------------------------------------------------------------------------------

-- SECTION 5.
-- String Functions [6 Marks]

-- 	Q13. 	Create StateShortName by retrieving the first 3 characters of the srcStateName for each unique state.
-- ###
-- 	[2 Marks]
-- ###
-- TYPE YOUR CODE BELOW >



-- ###`,ref:`Q13`},{t:`code`,s:`
-- 	Q14. 	Retrieve the srcDistrictName where the district name starts with 'B'.
-- ###
-- 	[2 Marks]
-- ###
-- TYPE YOUR CODE BELOW >



-- ###`,ref:`Q14`},{t:`code`,s:`
-- 	Q15. 	Retrieve the srcStateName and srcDistrictName where the district name contains the word 'pur' at the end.
-- ###
-- 	[2 Marks]
-- ###
-- TYPE YOUR CODE BELOW >


-- ###`,ref:`Q15`},{t:`code`,s:`
-- -------------------------------------------------------------------------------------------------

-- SECTION 6.
-- Joins [14 Marks]

-- 	Q16. 	Perform an INNER JOIN between the srcStateName and srcDistrictName columns to retrieve the aggregated FarmersPremiumAmount for districts where the district’s Insurance units for an individual year are greater than 10.
-- ###
-- 	[4 Marks]
-- ###
-- TYPE YOUR CODE BELOW >



-- ###`,ref:`Q16`},{t:`code`,s:`
-- 	Q17.	Write a query that retrieves srcStateName, srcDistrictName, Year, TotalPopulation for each district and the the highest recorded FarmersPremiumAmount for that district over all available years
-- 		Return only those districts where the highest FarmersPremiumAmount exceeds 20 crores.
-- ###
-- 	[5 Marks]
-- ###
-- TYPE YOUR CODE BELOW >



-- ###`,ref:`Q17`},{t:`code`,s:`
-- 	Q18.	Perform a LEFT JOIN to combine the total population statistics with the farmers’ data (TotalFarmersCovered, SumInsured) for each district and state. 
-- 		Return the total premium amount (FarmersPremiumAmount) and the average population count for each district aggregated over the years, where the total FarmersPremiumAmount is greater than 100 crores.
-- 		Sort the results by total farmers' premium amount, highest first.
-- ###
-- 	[5 Marks]
-- ###
-- TYPE YOUR CODE BELOW >




-- ###`,ref:`Q18`},{t:`code`,s:`
-- -------------------------------------------------------------------------------------------------

-- SECTION 7.
-- Subqueries [10 Marks]

-- 	Q19.	Write a query to find the districts (srcDistrictName) where the TotalFarmersCovered is greater than the average TotalFarmersCovered across all records.
-- ###
-- 	[2 Marks]
-- ###
-- TYPE YOUR CODE BELOW >




-- ###`,ref:`Q19`},{t:`code`,s:`
-- 	Q20.	Write a query to find the srcStateName where the SumInsured is higher than the SumInsured of the district with the highest FarmersPremiumAmount.
-- ###
-- 	[3 Marks]
-- ###
-- TYPE YOUR CODE BELOW >




-- ###`,ref:`Q20`},{t:`code`,s:`
-- 	Q21.	Write a query to find the srcDistrictName where the FarmersPremiumAmount is higher than the average FarmersPremiumAmount of the state that has the highest TotalPopulation.
-- ###
-- 	[5 Marks]
-- ###
-- TYPE YOUR CODE BELOW >




-- ###`,ref:`Q21`},{t:`code`,s:`
-- -------------------------------------------------------------------------------------------------

-- SECTION 8.
-- Advanced SQL Functions (Window Functions) [10 Marks]

-- 	Q22.	Use the ROW_NUMBER() function to assign a row number to each record in the dataset ordered by total farmers covered in descending order.
-- ###
-- 	[3 Marks]
-- ###
-- TYPE YOUR CODE BELOW >




-- ###`,ref:`Q22`},{t:`code`,s:`
-- 	Q23.	Use the RANK() function to rank the districts (srcDistrictName) based on the SumInsured (descending) and partition by alphabetical srcStateName.
-- ###
-- 	[3 Marks]
-- ###
-- TYPE YOUR CODE BELOW >



-- ###`,ref:`Q23`},{t:`code`,s:`
-- 	Q24.	Use the SUM() window function to calculate a cumulative sum of FarmersPremiumAmount for each district (srcDistrictName), ordered ascending by the srcYear, partitioned by srcStateName.
-- ###
-- 	[4 Marks]
-- ###
-- TYPE YOUR CODE BELOW >




-- ###`,ref:`Q24`},{t:`code`,s:`
-- -------------------------------------------------------------------------------------------------

-- SECTION 9.
-- Data Integrity (Constraints, Foreign Keys) [4 Marks]

-- 	Q25.	Create a table 'districts' with DistrictCode as the primary key and columns for DistrictName and StateCode. 
-- 		Create another table 'states' with StateCode as primary key and column for StateName.
-- ###
-- 	[2 Marks]
-- ###
-- TYPE YOUR CODE BELOW >




-- ###`,ref:`Q25`},{t:`code`,s:`
-- 	Q26.	Add a foreign key constraint to the districts table that references the StateCode column from a states table.
-- ###
-- 	[2 Marks]
-- ###
-- TYPE YOUR CODE BELOW >




-- ###`,ref:`Q26`},{t:`code`,s:`
-- -------------------------------------------------------------------------------------------------

-- SECTION 10.
-- UPDATE and DELETE [6 Marks]

-- 	Q27.	Update the FarmersPremiumAmount to 500.0 for the record where rowID is 1.
-- ###
-- 	[2 Marks]
-- ###
-- TYPE YOUR CODE BELOW >




-- ###`,ref:`Q27`},{t:`code`,s:`
-- 	Q28.	Update the Year to '2021' for all records where srcStateName is 'HIMACHAL PRADESH'.
-- ###
-- 	[2 Marks]
-- ###
-- TYPE YOUR CODE BELOW >



-- ###`,ref:`Q28`},{t:`code`,s:`
-- 	Q29.	Delete all records where the TotalFarmersCovered is less than 10000 and Year is 2020.
-- ###
-- 	[2 Marks]
-- ###
-- TYPE YOUR CODE BELOW >



-- ###`,ref:`Q29`}],guides:{Q1:{vi:{think:`Lấy danh sách tên các bang, mỗi bang một lần.`,steps:[`SELECT srcStateName FROM farmersinsurancedata.`,`Thêm DISTINCT để bỏ trùng (mỗi bang xuất hiện nhiều lần vì nhiều huyện, nhiều năm).`,`Dữ liệu có 27 bang.`],code:`SELECT DISTINCT srcStateName FROM farmersinsurancedata ORDER BY srcStateName;`,lotus:`Giống liệt kê tên các chi nhánh của Lotus Spa từ sổ booking: mỗi chi nhánh xuất hiện trăm lần, bạn chỉ muốn ba tên.`,trap:`Quên DISTINCT sẽ ra hơn 1.800 dòng, mỗi dòng một bản ghi.`,read:[`Dòng đầu cho số dòng (27); các dòng sau là tên bang.`],remark:`Có 27 bang trong dữ liệu, mỗi bang một dòng nhờ DISTINCT.`,howRemark:[`Nêu số dòng và giá trị nổi bật nhất của kết quả.`,`So một dòng với dòng khác hoặc với mức chung.`,`Nói kết quả trả lời câu hỏi thế nào, và lưu ý đơn vị (lakh) hoặc điều kiện lọc.`]},en:{think:`List the names of all states, once each.`,steps:[`SELECT srcStateName FROM farmersinsurancedata.`,`Add DISTINCT to remove repeats (each state appears many times across districts and years).`,`The data has 27 states.`],code:`SELECT DISTINCT srcStateName FROM farmersinsurancedata ORDER BY srcStateName;`,lotus:`Like listing Lotus Spa's branch names from the booking log: each appears a hundred times, you want three names.`,trap:`Forgetting DISTINCT returns over 1,800 rows, one per record.`,read:[`The first line gives the row count (27); the rest are state names.`],remark:`There are 27 states in the data, one row each thanks to DISTINCT.`,howRemark:[`State the row count and the most notable value.`,`Compare one row with another or with the overall level.`,`Say how it answers the question, noting the unit (lakh) or filter.`]}},Q2:{vi:{think:`Tổng số nông dân được bảo hiểm và tổng số tiền bảo hiểm theo từng bang, xếp từ nhiều đến ít nông dân.`,steps:[`GROUP BY srcStateName.`,`SUM(TotalFarmersCovered) và SUM(SumInsured).`,`ORDER BY TotalFarmersCovered DESC.`],code:`SELECT srcStateName, SUM(TotalFarmersCovered) AS TotalFarmersCovered, SUM(SumInsured) AS SumInsured
FROM farmersinsurancedata
GROUP BY srcStateName
ORDER BY TotalFarmersCovered DESC;`,lotus:`Như cộng số khách và doanh thu của từng chi nhánh rồi xếp chi nhánh đông nhất lên đầu.`,trap:`Dùng cột SumInsured mà quên đơn vị: dữ liệu lưu theo lakh (100.000 INR), không phải rupee.`,read:[`Mỗi dòng là một bang: tổng nông dân và tổng số tiền bảo hiểm (đơn vị lakh).`,`Bảng đã sắp giảm dần theo số nông dân.`],remark:`Madhya Pradesh dẫn đầu với 9,15 triệu nông dân, tiếp theo Maharashtra (8,94 triệu) và Uttar Pradesh (7,24 triệu). Rajasthan ít nông dân hơn Uttar Pradesh nhưng tổng bảo hiểm cao hơn, nên nhiều khách chưa chắc nhiều tiền.`,howRemark:[`Nêu số dòng và giá trị nổi bật nhất của kết quả.`,`So một dòng với dòng khác hoặc với mức chung.`,`Nói kết quả trả lời câu hỏi thế nào, và lưu ý đơn vị (lakh) hoặc điều kiện lọc.`]},en:{think:`Total farmers covered and total sum insured per state, ordered from most to fewest farmers.`,steps:[`GROUP BY srcStateName.`,`SUM(TotalFarmersCovered) and SUM(SumInsured).`,`ORDER BY TotalFarmersCovered DESC.`],code:`SELECT srcStateName, SUM(TotalFarmersCovered) AS TotalFarmersCovered, SUM(SumInsured) AS SumInsured
FROM farmersinsurancedata
GROUP BY srcStateName
ORDER BY TotalFarmersCovered DESC;`,lotus:`Like adding up customers and revenue per branch and listing the busiest first.`,trap:`Using SumInsured while forgetting the unit: data is stored in lakh (100,000 INR), not rupees.`,read:[`Each row is a state: total farmers and total sum insured (lakh).`,`Sorted descending by farmers.`],remark:`Madhya Pradesh leads with 9.15 million farmers, then Maharashtra (8.94 million) and Uttar Pradesh (7.24 million). Rajasthan has fewer farmers than Uttar Pradesh but a higher sum insured, so more customers is not always more money.`,howRemark:[`State the row count and the most notable value.`,`Compare one row with another or with the overall level.`,`Say how it answers the question, noting the unit (lakh) or filter.`]}},Q3:{vi:{think:`Lọc các bản ghi của năm 2020.`,steps:[`WHERE srcYear = 2020.`,`Cột Year_ là chữ dài «Calendar Year (Jan - Dec), 2020» nên dùng srcYear (số) cho dễ.`,`Kết quả: 429 dòng.`],code:`SELECT rowID, srcStateName, srcDistrictName, TotalFarmersCovered FROM farmersinsurancedata WHERE srcYear = 2020 LIMIT 10;
-- đếm: SELECT COUNT(*) FROM farmersinsurancedata WHERE srcYear = 2020;`,lotus:`Như lọc sổ booking riêng của tháng 11.`,trap:`So sánh Year_ = '2020' sẽ không ra dòng nào vì Year_ là chữ dài.`,read:[`Dòng đầu: có 429 dòng của năm 2020; bảng chỉ hiển thị 10 dòng đầu.`],remark:`Năm 2020 có 429 bản ghi; vài huyện Karnataka có số nông dân bằng 0, nên đừng kết luận chỉ từ những dòng đầu.`,howRemark:[`Nêu số dòng và giá trị nổi bật nhất của kết quả.`,`So một dòng với dòng khác hoặc với mức chung.`,`Nói kết quả trả lời câu hỏi thế nào, và lưu ý đơn vị (lakh) hoặc điều kiện lọc.`]},en:{think:`Retrieve the records of year 2020.`,steps:[`WHERE srcYear = 2020.`,`Year_ is the long text “Calendar Year (Jan - Dec), 2020” so use srcYear (number) for simplicity.`,`Result: 429 rows.`],code:`SELECT rowID, srcStateName, srcDistrictName, TotalFarmersCovered FROM farmersinsurancedata WHERE srcYear = 2020 LIMIT 10;
-- đếm: SELECT COUNT(*) FROM farmersinsurancedata WHERE srcYear = 2020;`,lotus:`Like filtering the booking log for November only.`,trap:`Comparing Year_ = '2020' returns nothing because Year_ is the long text.`,read:[`First line: 429 rows for 2020; the table shows only the first 10.`],remark:`2020 has 429 records; some Karnataka districts show 0 farmers, so do not conclude from the first rows alone.`,howRemark:[`State the row count and the most notable value.`,`Compare one row with another or with the overall level.`,`Say how it answers the question, noting the unit (lakh) or filter.`]}},Q4:{vi:{think:`Lọc các dòng ở Himachal Pradesh có dân số nông thôn trên 1 triệu.`,steps:[`WHERE TotalPopulationRural > 1000000 AND srcStateName = 'HIMACHAL PRADESH'.`,`Kết quả: 4 dòng, đều là huyện Kangra (1.423.794 dân nông thôn) ở bốn năm.`],code:`SELECT rowID, srcStateName, srcDistrictName, TotalPopulationRural
FROM farmersinsurancedata
WHERE TotalPopulationRural > 1000000 AND srcStateName = 'HIMACHAL PRADESH';`,lotus:`Hai điều kiện cùng đúng mới giữ dòng, như chỉ lấy khách vừa ở Quận 3 vừa dùng gói VIP.`,trap:`Chữ hoa chữ thường: tên bang trong dữ liệu viết hoa toàn bộ.`,read:[`4 dòng, đều là Kangra, dân số nông thôn 1.423.794.`],remark:`Chỉ huyện Kangra của Himachal Pradesh vượt 1 triệu dân nông thôn (1.423.794), và xuất hiện 4 lần vì mỗi năm một dòng.`,howRemark:[`Nêu số dòng và giá trị nổi bật nhất của kết quả.`,`So một dòng với dòng khác hoặc với mức chung.`,`Nói kết quả trả lời câu hỏi thế nào, và lưu ý đơn vị (lakh) hoặc điều kiện lọc.`]},en:{think:`Filter rows in Himachal Pradesh with rural population above 1 million.`,steps:[`WHERE TotalPopulationRural > 1000000 AND srcStateName = 'HIMACHAL PRADESH'.`,`Result: 4 rows, all Kangra district (1,423,794 rural population) across four years.`],code:`SELECT rowID, srcStateName, srcDistrictName, TotalPopulationRural
FROM farmersinsurancedata
WHERE TotalPopulationRural > 1000000 AND srcStateName = 'HIMACHAL PRADESH';`,lotus:`Both conditions must hold to keep a row, like only taking customers in District 3 who also use the VIP package.`,trap:`Case: state names in the data are fully uppercase.`,read:[`4 rows, all Kangra, rural population 1,423,794.`],remark:`Only Kangra in Himachal Pradesh exceeds 1 million rural people (1,423,794), appearing 4 times because there is one row per year.`,howRemark:[`State the row count and the most notable value.`,`Compare one row with another or with the overall level.`,`Say how it answers the question, noting the unit (lakh) or filter.`]}},Q5:{vi:{think:`Tổng phí bảo hiểm nông dân phải đóng theo từng huyện năm 2018, xếp tăng dần.`,steps:[`WHERE srcYear = 2018.`,`GROUP BY srcStateName, srcDistrictName.`,`SUM(FarmersPremiumAmount) rồi ORDER BY tăng dần.`],code:`SELECT srcStateName, srcDistrictName, SUM(FarmersPremiumAmount) AS FarmersPremiumAmount
FROM farmersinsurancedata
WHERE srcYear = 2018
GROUP BY srcStateName, srcDistrictName
ORDER BY FarmersPremiumAmount ASC;`,lotus:`Như doanh thu từng chi nhánh trong một tháng, xếp từ thấp lên cao.`,trap:`Dòng đầu đều là 0: nhiều huyện Karnataka chưa có phí, nên xem trước khi kết luận «huyện này thấp nhất».`,read:[`525 dòng; xếp tăng dần nên đầu bảng là các huyện có phí bằng 0.`],remark:`Nhiều huyện Karnataka có tổng phí nông dân bằng 0 năm 2018 (525 huyện trong bảng), nghĩa là chưa có dữ liệu hoặc không thu phí, không phải miễn phí thật.`,howRemark:[`Nêu số dòng và giá trị nổi bật nhất của kết quả.`,`So một dòng với dòng khác hoặc với mức chung.`,`Nói kết quả trả lời câu hỏi thế nào, và lưu ý đơn vị (lakh) hoặc điều kiện lọc.`]},en:{think:`Total premium farmers paid per district in 2018, ordered ascending.`,steps:[`WHERE srcYear = 2018.`,`GROUP BY srcStateName, srcDistrictName.`,`SUM(FarmersPremiumAmount) then ORDER BY ascending.`],code:`SELECT srcStateName, srcDistrictName, SUM(FarmersPremiumAmount) AS FarmersPremiumAmount
FROM farmersinsurancedata
WHERE srcYear = 2018
GROUP BY srcStateName, srcDistrictName
ORDER BY FarmersPremiumAmount ASC;`,lotus:`Like branch revenue for one month, sorted low to high.`,trap:`The first rows are all 0: many Karnataka districts have no premium yet, so check before concluding “this district is lowest”.`,read:[`525 rows; sorted ascending, so the top shows districts with zero premium.`],remark:`Many Karnataka districts show a farmers premium of 0 for 2018 (525 districts in the table), meaning missing data or no charge, not truly free.`,howRemark:[`State the row count and the most notable value.`,`Compare one row with another or with the overall level.`,`Say how it answers the question, noting the unit (lakh) or filter.`]}},Q6:{vi:{think:`Số nông dân và tổng phí gộp theo bang, chỉ các bản ghi có diện tích bảo hiểm trên 5,0 trong năm 2018.`,steps:[`WHERE InsuredLandArea > 5.0 AND srcYear = 2018.`,`GROUP BY srcStateName.`,`SUM(TotalFarmersCovered), SUM(GrossPremiumAmountToBePaid).`],code:`SELECT srcStateName, SUM(TotalFarmersCovered) AS TotalFarmersCovered, SUM(GrossPremiumAmountToBePaid) AS GrossPremium
FROM farmersinsurancedata
WHERE InsuredLandArea > 5.0 AND srcYear = 2018
GROUP BY srcStateName
ORDER BY TotalFarmersCovered DESC;`,lotus:`Lọc trước rồi mới cộng theo nhóm: WHERE chạy trước GROUP BY.`,trap:`Đặt điều kiện trên tổng (SUM) vào WHERE thì lỗi: điều kiện trên tổng phải dùng HAVING.`,read:[`17 dòng: bang, tổng nông dân và tổng phí gộp (lakh).`,`Chỉ gồm bản ghi có diện tích bảo hiểm trên 5.`],remark:`Uttar Pradesh có nhiều nông dân nhất (2,61 triệu) nhưng phí gộp (70.173) thấp hơn Madhya Pradesh (155.228) hay Tamil Nadu (157.822) với ít nông dân hơn; phí trên đầu người rất khác nhau giữa các bang.`,howRemark:[`Nêu số dòng và giá trị nổi bật nhất của kết quả.`,`So một dòng với dòng khác hoặc với mức chung.`,`Nói kết quả trả lời câu hỏi thế nào, và lưu ý đơn vị (lakh) hoặc điều kiện lọc.`]},en:{think:`Farmers and gross premium by state, only records with insured land area above 5.0 in 2018.`,steps:[`WHERE InsuredLandArea > 5.0 AND srcYear = 2018.`,`GROUP BY srcStateName.`,`SUM(TotalFarmersCovered), SUM(GrossPremiumAmountToBePaid).`],code:`SELECT srcStateName, SUM(TotalFarmersCovered) AS TotalFarmersCovered, SUM(GrossPremiumAmountToBePaid) AS GrossPremium
FROM farmersinsurancedata
WHERE InsuredLandArea > 5.0 AND srcYear = 2018
GROUP BY srcStateName
ORDER BY TotalFarmersCovered DESC;`,lotus:`Filter first, then sum per group: WHERE runs before GROUP BY.`,trap:`Putting a condition on a sum (SUM) in WHERE errors: conditions on sums need HAVING.`,read:[`17 rows: state, total farmers and gross premium (lakh).`,`Only records with insured area above 5.`],remark:`Uttar Pradesh has the most farmers (2.61 million) but a gross premium (70,173) below Madhya Pradesh (155,228) or Tamil Nadu (157,822) with fewer farmers; premium per head differs a lot across states.`,howRemark:[`State the row count and the most notable value.`,`Compare one row with another or with the overall level.`,`Say how it answers the question, noting the unit (lakh) or filter.`]}},Q7:{vi:{think:`Diện tích bảo hiểm trung bình theo từng năm.`,steps:[`GROUP BY srcYear.`,`AVG(InsuredLandArea).`],code:`SELECT srcYear, AVG(InsuredLandArea) AS AvgInsuredLandArea
FROM farmersinsurancedata
GROUP BY srcYear
ORDER BY srcYear;`,lotus:`Như số khách trung bình mỗi ngày theo từng tháng.`,trap:`Đơn vị diện tích là nghìn ha (hệ số 1.000), nên 37,9 nghĩa là khoảng 37.900 ha mỗi bản ghi.`,read:[`4 dòng, mỗi năm một giá trị trung bình diện tích.`],remark:`Diện tích bảo hiểm trung bình khoảng 38 mỗi năm, riêng 2020 nhảy lên 46,9; cần xem 2020 có bản ghi bất thường không trước khi kết luận xu hướng.`,howRemark:[`Nêu số dòng và giá trị nổi bật nhất của kết quả.`,`So một dòng với dòng khác hoặc với mức chung.`,`Nói kết quả trả lời câu hỏi thế nào, và lưu ý đơn vị (lakh) hoặc điều kiện lọc.`]},en:{think:`Average insured land area per year.`,steps:[`GROUP BY srcYear.`,`AVG(InsuredLandArea).`],code:`SELECT srcYear, AVG(InsuredLandArea) AS AvgInsuredLandArea
FROM farmersinsurancedata
GROUP BY srcYear
ORDER BY srcYear;`,lotus:`Like average customers per day for each month.`,trap:`Area unit is thousand ha (factor 1,000), so 37.9 means about 37,900 ha per record.`,read:[`4 rows, one average area per year.`],remark:`Average insured area is about 38 each year, but 2020 jumps to 46.9; check 2020 for unusual records before concluding a trend.`,howRemark:[`State the row count and the most notable value.`,`Compare one row with another or with the overall level.`,`Say how it answers the question, noting the unit (lakh) or filter.`]}},Q8:{vi:{think:`Tổng số nông dân theo huyện, chỉ các bản ghi có Insurance units lớn hơn 0.`,steps:[`WHERE InsuranceUnits > 0.`,`GROUP BY srcDistrictName, SUM(TotalFarmersCovered).`,`Sắp giảm dần để thấy huyện đông nhất (Bid, hơn 1,4 triệu).`],code:`SELECT srcDistrictName, SUM(TotalFarmersCovered) AS TotalFarmersCovered
FROM farmersinsurancedata
WHERE InsuranceUnits > 0
GROUP BY srcDistrictName
ORDER BY TotalFarmersCovered DESC;`,lotus:`Chỉ tính những ca đã thực sự diễn ra (đơn vị > 0).`,trap:`Nhiều huyện trùng tên ở các bang khác nhau: nên GROUP BY cả srcStateName nếu cần chính xác.`,read:[`558 dòng; mỗi dòng là một huyện với tổng nông dân, giảm dần.`],remark:`Bid (1,43 triệu), Latur (1,18 triệu) và Nanded (739.712), đều ở Maharashtra, dẫn đầu; số nông dân tập trung ở vài huyện.`,howRemark:[`Nêu số dòng và giá trị nổi bật nhất của kết quả.`,`So một dòng với dòng khác hoặc với mức chung.`,`Nói kết quả trả lời câu hỏi thế nào, và lưu ý đơn vị (lakh) hoặc điều kiện lọc.`]},en:{think:`Total farmers per district, only records where Insurance units is above 0.`,steps:[`WHERE InsuranceUnits > 0.`,`GROUP BY srcDistrictName, SUM(TotalFarmersCovered).`,`Sort descending to see the biggest district (Bid, over 1.4 million).`],code:`SELECT srcDistrictName, SUM(TotalFarmersCovered) AS TotalFarmersCovered
FROM farmersinsurancedata
WHERE InsuranceUnits > 0
GROUP BY srcDistrictName
ORDER BY TotalFarmersCovered DESC;`,lotus:`Count only cases that really happened (units > 0).`,trap:`Several districts share a name across states: GROUP BY srcStateName too if you need exactness.`,read:[`558 rows; each row is a district with total farmers, descending.`],remark:`Bid (1.43 million), Latur (1.18 million) and Nanded (739,712), all in Maharashtra, lead; farmers are concentrated in a few districts.`,howRemark:[`State the row count and the most notable value.`,`Compare one row with another or with the overall level.`,`Say how it answers the question, noting the unit (lakh) or filter.`]}},Q9:{vi:{think:`Tổng phí theo bang, chỉ bản ghi có SumInsured trên 500.000. Nhớ hệ số đơn vị.`,steps:[`Dữ liệu lưu theo lakh: 500.000 INR = 5 lakh, nên dùng SumInsured > 5.`,`GROUP BY srcStateName.`,`SUM ba loại phí và SUM nông dân.`],code:`SELECT srcStateName,
       SUM(FarmersPremiumAmount) AS FarmersPremium, SUM(StatePremiumAmount) AS StatePremium, SUM(GOVPremiumAmount) AS GovPremium,
       SUM(TotalFarmersCovered) AS TotalFarmersCovered
FROM farmersinsurancedata
WHERE SumInsured > 5   -- 500,000 INR = 5 lakh, dữ liệu lưu theo đơn vị lakh
GROUP BY srcStateName
ORDER BY TotalFarmersCovered DESC;`,lotus:`Như giá hiển thị theo nghìn đồng: 500 nghĩa là 500.000 đồng, phải đổi đơn vị trước khi so.`,trap:`Viết SumInsured > 500000 mà quên hệ số 100.000 sẽ gần như loại hết dữ liệu.`,read:[`26 dòng: phí nông dân, phí bang, phí chính phủ và tổng nông dân theo bang (lakh).`,`Lọc SumInsured > 5 vì 500.000 rupee = 5 lakh.`],remark:`Madhya Pradesh có phí lớn nhất (nông dân 139.861, bang 399.901, chính phủ 399.901); phần nông dân tự trả nhỏ hơn nhiều so với bang và chính phủ cộng lại, nên hệ thống được trợ cấp nặng.`,howRemark:[`Nêu số dòng và giá trị nổi bật nhất của kết quả.`,`So một dòng với dòng khác hoặc với mức chung.`,`Nói kết quả trả lời câu hỏi thế nào, và lưu ý đơn vị (lakh) hoặc điều kiện lọc.`]},en:{think:`Total premiums per state, only records with SumInsured above 500,000. Mind the scaling factor.`,steps:[`Data is stored in lakh: 500,000 INR = 5 lakh, so use SumInsured > 5.`,`GROUP BY srcStateName.`,`SUM the three premiums and SUM farmers.`],code:`SELECT srcStateName,
       SUM(FarmersPremiumAmount) AS FarmersPremium, SUM(StatePremiumAmount) AS StatePremium, SUM(GOVPremiumAmount) AS GovPremium,
       SUM(TotalFarmersCovered) AS TotalFarmersCovered
FROM farmersinsurancedata
WHERE SumInsured > 5   -- 500,000 INR = 5 lakh, dữ liệu lưu theo đơn vị lakh
GROUP BY srcStateName
ORDER BY TotalFarmersCovered DESC;`,lotus:`Like prices shown in thousands: 500 means 500,000 dong, convert before comparing.`,trap:`Writing SumInsured > 500000 and forgetting the 100,000 factor drops nearly all the data.`,read:[`26 rows: farmers premium, state premium, government premium and total farmers per state (lakh).`,`Filter SumInsured > 5 since 500,000 rupees = 5 lakh.`],remark:`Madhya Pradesh has the largest premiums (farmers 139,861, state 399,901, government 399,901); the farmers' share is far below the state and government combined, so the scheme is heavily subsidised.`,howRemark:[`State the row count and the most notable value.`,`Compare one row with another or with the overall level.`,`Say how it answers the question, noting the unit (lakh) or filter.`]}},Q10:{vi:{think:`Năm huyện có dân số cao nhất năm 2020.`,steps:[`WHERE srcYear = 2020.`,`ORDER BY TotalPopulation DESC.`,`LIMIT 5.`,`Kết quả: Bengaluru Urban, Pune, Thane, Jaipur, Nashik.`],code:`SELECT srcDistrictName, TotalPopulation
FROM farmersinsurancedata
WHERE srcYear = 2020
ORDER BY TotalPopulation DESC
LIMIT 5;`,lotus:`Như năm chi nhánh có nhiều khách nhất trong tháng.`,trap:`Quên WHERE sẽ trộn bốn năm và cùng một huyện xuất hiện nhiều lần.`,read:[`5 dòng: huyện và dân số năm 2020.`],remark:`Bengaluru Urban (9,62 triệu) và Pune (9,43 triệu) đông dân nhất, rồi Thane (8,07 triệu); toàn là các huyện đô thị lớn.`,howRemark:[`Nêu số dòng và giá trị nổi bật nhất của kết quả.`,`So một dòng với dòng khác hoặc với mức chung.`,`Nói kết quả trả lời câu hỏi thế nào, và lưu ý đơn vị (lakh) hoặc điều kiện lọc.`]},en:{think:`The five districts with the highest population in 2020.`,steps:[`WHERE srcYear = 2020.`,`ORDER BY TotalPopulation DESC.`,`LIMIT 5.`,`Result: Bengaluru Urban, Pune, Thane, Jaipur, Nashik.`],code:`SELECT srcDistrictName, TotalPopulation
FROM farmersinsurancedata
WHERE srcYear = 2020
ORDER BY TotalPopulation DESC
LIMIT 5;`,lotus:`Like the five branches with the most customers in a month.`,trap:`Forgetting WHERE mixes four years and the same district appears several times.`,read:[`5 rows: district and population for 2020.`],remark:`Bengaluru Urban (9.62 million) and Pune (9.43 million) are most populous, then Thane (8.07 million); all large urban districts.`,howRemark:[`State the row count and the most notable value.`,`Compare one row with another or with the overall level.`,`Say how it answers the question, noting the unit (lakh) or filter.`]}},Q11:{vi:{think:`Mười huyện có phí nông dân thấp nhất nhưng khác 0, sắp theo số tiền bảo hiểm rồi phí.`,steps:[`WHERE FarmersPremiumAmount > 0.`,`ORDER BY FarmersPremiumAmount ASC, SumInsured ASC.`,`LIMIT 10.`],code:`SELECT srcStateName, srcDistrictName, SumInsured, FarmersPremiumAmount
FROM farmersinsurancedata
WHERE FarmersPremiumAmount > 0
ORDER BY FarmersPremiumAmount ASC, SumInsured ASC
LIMIT 10;`,lotus:`Bỏ những gói chưa phát sinh doanh thu, rồi lấy những gói nhỏ nhất.`,trap:`Câu hỏi nói «sắp theo SumInsured rồi phí» nhưng ý chính là phí thấp nhất: đọc kỹ thứ tự ưu tiên.`,read:[`10 dòng: huyện có phí nhỏ nhưng khác 0, xếp theo SumInsured rồi phí.`],remark:`Các huyện Karnataka như Kalaburgi, Kolar và Davangere có SumInsured chỉ 0,004–0,006 lakh: giá trị cực nhỏ, có thể là dữ liệu chưa đầy đủ hơn là bảo hiểm thật.`,howRemark:[`Nêu số dòng và giá trị nổi bật nhất của kết quả.`,`So một dòng với dòng khác hoặc với mức chung.`,`Nói kết quả trả lời câu hỏi thế nào, và lưu ý đơn vị (lakh) hoặc điều kiện lọc.`]},en:{think:`Ten districts with the lowest nonzero farmers' premium, ordered by sum insured then premium.`,steps:[`WHERE FarmersPremiumAmount > 0.`,`ORDER BY FarmersPremiumAmount ASC, SumInsured ASC.`,`LIMIT 10.`],code:`SELECT srcStateName, srcDistrictName, SumInsured, FarmersPremiumAmount
FROM farmersinsurancedata
WHERE FarmersPremiumAmount > 0
ORDER BY FarmersPremiumAmount ASC, SumInsured ASC
LIMIT 10;`,lotus:`Skip packages with no revenue yet, then take the smallest.`,trap:`The question says “ordered by SumInsured then premium” but the main idea is lowest premium: read the order of priority carefully.`,read:[`10 rows: districts with small but non-zero premium, ordered by SumInsured then premium.`],remark:`Karnataka districts such as Kalaburgi, Kolar and Davangere have SumInsured of only 0.004–0.006 lakh: tiny values, more likely incomplete data than real insurance.`,howRemark:[`State the row count and the most notable value.`,`Compare one row with another or with the overall level.`,`Say how it answers the question, noting the unit (lakh) or filter.`]}},Q12:{vi:{think:`Ba cặp bang-năm có tỷ lệ nông dân được bảo hiểm trên dân số cao nhất.`,steps:[`Tổng nông dân chia tổng dân số theo từng bang và năm.`,`Nhân 1.0 để chia ra số thập phân.`,`ORDER BY ratio DESC, LIMIT 3.`],code:`SELECT srcStateName, srcYear,
       SUM(TotalFarmersCovered) * 1.0 / SUM(TotalPopulation) AS ratio
FROM farmersinsurancedata
GROUP BY srcStateName, srcYear
ORDER BY ratio DESC
LIMIT 3;`,lotus:`Như tỷ lệ khách mua gói trên tổng số khách đi qua từng chi nhánh.`,trap:`Chia hai số nguyên trong một số hệ SQL cho kết quả nguyên (0). Nhân 1.0 trước.`,read:[`3 dòng: bang, năm và tỷ lệ nông dân được bảo hiểm trên dân số.`],remark:`Chhattisgarh năm 2021 cao nhất (5,0% dân số), rồi Tripura 2020 (4,7%) và 2021 (4,6%): ngay cả bang cao nhất cũng chỉ bảo hiểm khoảng 5% dân số.`,howRemark:[`Nêu số dòng và giá trị nổi bật nhất của kết quả.`,`So một dòng với dòng khác hoặc với mức chung.`,`Nói kết quả trả lời câu hỏi thế nào, và lưu ý đơn vị (lakh) hoặc điều kiện lọc.`]},en:{think:`The three state-year pairs with the highest ratio of insured farmers to population.`,steps:[`Total farmers divided by total population per state and year.`,`Multiply by 1.0 to get a decimal.`,`ORDER BY ratio DESC, LIMIT 3.`],code:`SELECT srcStateName, srcYear,
       SUM(TotalFarmersCovered) * 1.0 / SUM(TotalPopulation) AS ratio
FROM farmersinsurancedata
GROUP BY srcStateName, srcYear
ORDER BY ratio DESC
LIMIT 3;`,lotus:`Like the share of visitors who buy a package out of all who pass each branch.`,trap:`Integer division in some SQL engines gives 0. Multiply by 1.0 first.`,read:[`3 rows: state, year and ratio of insured farmers to population.`],remark:`Chhattisgarh in 2021 is highest (5.0% of population), then Tripura 2020 (4.7%) and 2021 (4.6%): even the top state insures only about 5% of its population.`,howRemark:[`State the row count and the most notable value.`,`Compare one row with another or with the overall level.`,`Say how it answers the question, noting the unit (lakh) or filter.`]}},Q13:{vi:{think:`Tạo tên viết tắt từ 3 chữ cái đầu của mỗi bang.`,steps:[`SUBSTR (hoặc SUBSTRING) srcStateName từ vị trí 1, dài 3.`,`DISTINCT để mỗi bang một dòng.`,`Chú ý: ANDAMAN và ANDHRA cùng ra AND.`],code:`SELECT DISTINCT srcStateName, SUBSTR(srcStateName, 1, 3) AS StateShortName
FROM farmersinsurancedata
ORDER BY srcStateName;`,lotus:`Như tạo mã chi nhánh từ ba chữ đầu: hai tên có thể trùng mã.`,trap:`Hai bang cho cùng mã «AND»: mã rút gọn không đảm bảo duy nhất.`,read:[`27 dòng: bang và tên viết tắt 3 chữ cái đầu.`],remark:`Có trùng tên viết tắt: Andaman and Nicobar Islands và Andhra Pradesh đều là AND, nên 3 chữ cái đầu không đủ làm mã duy nhất.`,howRemark:[`Nêu số dòng và giá trị nổi bật nhất của kết quả.`,`So một dòng với dòng khác hoặc với mức chung.`,`Nói kết quả trả lời câu hỏi thế nào, và lưu ý đơn vị (lakh) hoặc điều kiện lọc.`]},en:{think:`Build a short name from the first 3 characters of each state.`,steps:[`SUBSTR (or SUBSTRING) srcStateName from position 1, length 3.`,`DISTINCT so each state gets one row.`,`Note: ANDAMAN and ANDHRA both give AND.`],code:`SELECT DISTINCT srcStateName, SUBSTR(srcStateName, 1, 3) AS StateShortName
FROM farmersinsurancedata
ORDER BY srcStateName;`,lotus:`Like building branch codes from the first three letters: two names can collide.`,trap:`Two states share the code “AND”: a shortened code is not guaranteed unique.`,read:[`27 rows: state and 3-letter short name.`],remark:`Short names collide: Andaman and Nicobar Islands and Andhra Pradesh are both AND, so the first 3 letters are not unique.`,howRemark:[`State the row count and the most notable value.`,`Compare one row with another or with the overall level.`,`Say how it answers the question, noting the unit (lakh) or filter.`]}},Q14:{vi:{think:`Các huyện có tên bắt đầu bằng B.`,steps:[`WHERE srcDistrictName LIKE 'B%'.`,`DISTINCT và ORDER BY.`,`Kết quả: 60 huyện.`],code:`SELECT DISTINCT srcDistrictName FROM farmersinsurancedata WHERE srcDistrictName LIKE 'B%' ORDER BY srcDistrictName;`,lotus:`Như lọc khách có tên bắt đầu bằng B.`,trap:`LIKE 'B%' trong MySQL không phân biệt hoa thường.`,read:[`60 dòng: tên huyện bắt đầu bằng B.`],remark:`Có 60 huyện bắt đầu bằng B (Bagalkot, Bageshwar, Baghpat...): phép lọc bằng LIKE 'B%' hoạt động đúng.`,howRemark:[`Nêu số dòng và giá trị nổi bật nhất của kết quả.`,`So một dòng với dòng khác hoặc với mức chung.`,`Nói kết quả trả lời câu hỏi thế nào, và lưu ý đơn vị (lakh) hoặc điều kiện lọc.`]},en:{think:`Districts whose names start with B.`,steps:[`WHERE srcDistrictName LIKE 'B%'.`,`DISTINCT and ORDER BY.`,`Result: 60 districts.`],code:`SELECT DISTINCT srcDistrictName FROM farmersinsurancedata WHERE srcDistrictName LIKE 'B%' ORDER BY srcDistrictName;`,lotus:`Like filtering customers whose names start with B.`,trap:`LIKE 'B%' in MySQL is case-insensitive.`,read:[`60 rows: district names starting with B.`],remark:`60 districts start with B (Bagalkot, Bageshwar, Baghpat...): the LIKE 'B%' filter works.`,howRemark:[`State the row count and the most notable value.`,`Compare one row with another or with the overall level.`,`Say how it answers the question, noting the unit (lakh) or filter.`]}},Q15:{vi:{think:`Bang và huyện mà tên huyện kết thúc bằng «pur».`,steps:[`LIKE '%pur'.`,`DISTINCT srcStateName, srcDistrictName.`,`Kết quả: 59 cặp (ví dụ Raipur, Bilaspur).`],code:`SELECT DISTINCT srcStateName, srcDistrictName FROM farmersinsurancedata WHERE srcDistrictName LIKE '%pur' ORDER BY srcStateName, srcDistrictName;`,lotus:`Dấu % đứng trước nghĩa là «bất kỳ gì rồi kết thúc bằng pur».`,trap:`'%pur%' sẽ khớp cả tên chứa «pur» ở giữa. Câu hỏi chỉ muốn ở cuối.`,read:[`59 dòng: bang và huyện có tên kết thúc bằng pur.`],remark:`Có 59 huyện kết thúc bằng «pur» (Anantapur, Lakhimpur, Raipur...), rải trên nhiều bang như Chhattisgarh và Assam.`,howRemark:[`Nêu số dòng và giá trị nổi bật nhất của kết quả.`,`So một dòng với dòng khác hoặc với mức chung.`,`Nói kết quả trả lời câu hỏi thế nào, và lưu ý đơn vị (lakh) hoặc điều kiện lọc.`]},en:{think:`State and district where the district name ends with “pur”.`,steps:[`LIKE '%pur'.`,`DISTINCT srcStateName, srcDistrictName.`,`Result: 59 pairs (for example Raipur, Bilaspur).`],code:`SELECT DISTINCT srcStateName, srcDistrictName FROM farmersinsurancedata WHERE srcDistrictName LIKE '%pur' ORDER BY srcStateName, srcDistrictName;`,lotus:`A leading % means “anything, ending in pur”.`,trap:`'%pur%' also matches “pur” in the middle. The question wants only the end.`,read:[`59 rows: states and districts whose names end in pur.`],remark:`59 districts end in “pur” (Anantapur, Lakhimpur, Raipur...), spread across states like Chhattisgarh and Assam.`,howRemark:[`State the row count and the most notable value.`,`Compare one row with another or with the overall level.`,`Say how it answers the question, noting the unit (lakh) or filter.`]}},Q16:{vi:{think:`INNER JOIN để gộp phí nông dân của các huyện có Insurance units trên 10 trong một năm.`,steps:[`Tìm các huyện có InsuranceUnits > 10 ở bất kỳ năm nào (bảng con).`,`INNER JOIN với bảng gốc theo bang và huyện.`,`SUM(FarmersPremiumAmount) theo huyện.`],code:`SELECT a.srcStateName, a.srcDistrictName, SUM(a.FarmersPremiumAmount) AS FarmersPremiumAmount
FROM farmersinsurancedata a
INNER JOIN (SELECT srcStateName, srcDistrictName FROM farmersinsurancedata WHERE InsuranceUnits > 10
            GROUP BY srcStateName, srcDistrictName) b
  ON a.srcStateName = b.srcStateName AND a.srcDistrictName = b.srcDistrictName
GROUP BY a.srcStateName, a.srcDistrictName
ORDER BY FarmersPremiumAmount DESC;`,lotus:`Như chọn danh sách chi nhánh có ngày nào đó vượt 10 ca, rồi cộng doanh thu cả năm của những chi nhánh đó.`,trap:`Join chỉ theo tên huyện bỏ qua bang sẽ ghép nhầm huyện trùng tên.`,read:[`491 dòng: huyện và phí nông dân của những huyện có Insurance units trên 10.`],remark:`Bid (14.529), Ujjain (12.385) và Latur (11.700) có phí nông dân lớn nhất trong 491 dòng thỏa điều kiện.`,howRemark:[`Nêu số dòng và giá trị nổi bật nhất của kết quả.`,`So một dòng với dòng khác hoặc với mức chung.`,`Nói kết quả trả lời câu hỏi thế nào, và lưu ý đơn vị (lakh) hoặc điều kiện lọc.`]},en:{think:`INNER JOIN to total farmers' premium for districts with Insurance units above 10 in some year.`,steps:[`Find districts with InsuranceUnits > 10 in any year (subquery).`,`INNER JOIN with the base table on state and district.`,`SUM(FarmersPremiumAmount) per district.`],code:`SELECT a.srcStateName, a.srcDistrictName, SUM(a.FarmersPremiumAmount) AS FarmersPremiumAmount
FROM farmersinsurancedata a
INNER JOIN (SELECT srcStateName, srcDistrictName FROM farmersinsurancedata WHERE InsuranceUnits > 10
            GROUP BY srcStateName, srcDistrictName) b
  ON a.srcStateName = b.srcStateName AND a.srcDistrictName = b.srcDistrictName
GROUP BY a.srcStateName, a.srcDistrictName
ORDER BY FarmersPremiumAmount DESC;`,lotus:`Like picking branches that exceeded 10 cases on some day, then summing those branches' revenue for the whole year.`,trap:`Joining on district name only, ignoring state, mismatches districts sharing a name.`,read:[`491 rows: districts and farmers premium for those with Insurance units above 10.`],remark:`Bid (14,529), Ujjain (12,385) and Latur (11,700) have the largest farmers premium among the 491 rows meeting the condition.`,howRemark:[`State the row count and the most notable value.`,`Compare one row with another or with the overall level.`,`Say how it answers the question, noting the unit (lakh) or filter.`]}},Q17:{vi:{think:`Mỗi huyện: tên, năm, dân số và mức phí nông dân cao nhất mọi năm; chỉ huyện có mức cao nhất trên 20 crore.`,steps:[`20 crore = 20 × 10.000.000 INR = 2000 lakh.`,`Bảng con: MAX(FarmersPremiumAmount) theo huyện, HAVING > 2000.`,`JOIN lại bảng gốc để lấy năm và dân số.`],code:`SELECT f.srcStateName, f.srcDistrictName, f.Year_, f.TotalPopulation, m.MaxPremium
FROM farmersinsurancedata f
JOIN (SELECT srcStateName, srcDistrictName, MAX(FarmersPremiumAmount) AS MaxPremium
      FROM farmersinsurancedata GROUP BY srcStateName, srcDistrictName
      HAVING MAX(FarmersPremiumAmount) > 2000) m   -- 20 crore = 2000 lakh
  ON f.srcStateName = m.srcStateName AND f.srcDistrictName = m.srcDistrictName
ORDER BY m.MaxPremium DESC;`,lotus:`Như tìm tháng doanh thu cao nhất của mỗi chi nhánh rồi chỉ giữ chi nhánh có đỉnh vượt một ngưỡng.`,trap:`Đổi crore thành lakh sai: 1 crore = 100 lakh, nên 20 crore là 2000 lakh, không phải 20.`,read:[`132 dòng: huyện, năm, dân số và mức phí cao nhất mọi năm của huyện.`,`Cột Year_ là chữ dài nên mỗi huyện lặp qua các năm.`],remark:`Bid có mức phí cao nhất 7.244 và dân số 2.583.421, lặp lại mỗi năm vì MaxPremium tính trên mọi năm; điều kiện trên 20 crore tương đương trên 2.000 lakh.`,howRemark:[`Nêu số dòng và giá trị nổi bật nhất của kết quả.`,`So một dòng với dòng khác hoặc với mức chung.`,`Nói kết quả trả lời câu hỏi thế nào, và lưu ý đơn vị (lakh) hoặc điều kiện lọc.`]},en:{think:`For each district: name, year, population and the highest farmers' premium over all years; only districts whose peak exceeds 20 crore.`,steps:[`20 crore = 20 × 10,000,000 INR = 2,000 lakh.`,`Subquery: MAX(FarmersPremiumAmount) per district, HAVING > 2000.`,`JOIN back to the base table to get year and population.`],code:`SELECT f.srcStateName, f.srcDistrictName, f.Year_, f.TotalPopulation, m.MaxPremium
FROM farmersinsurancedata f
JOIN (SELECT srcStateName, srcDistrictName, MAX(FarmersPremiumAmount) AS MaxPremium
      FROM farmersinsurancedata GROUP BY srcStateName, srcDistrictName
      HAVING MAX(FarmersPremiumAmount) > 2000) m   -- 20 crore = 2000 lakh
  ON f.srcStateName = m.srcStateName AND f.srcDistrictName = m.srcDistrictName
ORDER BY m.MaxPremium DESC;`,lotus:`Like finding each branch's best revenue month, then keeping only branches whose peak exceeds a threshold.`,trap:`Converting crore to lakh wrongly: 1 crore = 100 lakh, so 20 crore is 2,000 lakh, not 20.`,read:[`132 rows: district, year, population and the district's maximum premium over all years.`,`Year_ is long text so each district repeats across years.`],remark:`Bid has a maximum premium of 7,244 and population 2,583,421, repeated each year because MaxPremium spans all years; the 20 crore condition equals 2,000 lakh.`,howRemark:[`State the row count and the most notable value.`,`Compare one row with another or with the overall level.`,`Say how it answers the question, noting the unit (lakh) or filter.`]}},Q18:{vi:{think:`LEFT JOIN gộp dân số với dữ liệu nông dân; trả tổng phí và dân số trung bình theo huyện, chỉ huyện có tổng trên 100 crore, xếp giảm dần.`,steps:[`100 crore = 10.000 lakh.`,`GROUP BY bang, huyện; SUM(FarmersPremiumAmount), AVG(TotalPopulation).`,`HAVING SUM(...) > 10000; ORDER BY giảm dần.`,`Kết quả: chỉ 3 huyện (Bid, Ujjain, Latur).`],code:`SELECT srcStateName, srcDistrictName,
       SUM(FarmersPremiumAmount) AS TotalFarmersPremium, AVG(TotalPopulation) AS AvgPopulation
FROM farmersinsurancedata
GROUP BY srcStateName, srcDistrictName
HAVING SUM(FarmersPremiumAmount) > 10000   -- 100 crore = 10000 lakh
ORDER BY TotalFarmersPremium DESC;`,lotus:`Như chỉ giữ chi nhánh có tổng doanh thu cả bốn năm vượt mốc 100 crore.`,trap:`Điều kiện trên tổng phải đặt ở HAVING, không phải WHERE.`,read:[`3 dòng: huyện có tổng phí trên 100 crore (10.000 lakh) kèm dân số trung bình.`],remark:`Chỉ ba huyện vượt 100 crore: Bid (14.529), Ujjain (12.385) và Latur (11.700), đều là huyện đông dân (2–2,6 triệu).`,howRemark:[`Nêu số dòng và giá trị nổi bật nhất của kết quả.`,`So một dòng với dòng khác hoặc với mức chung.`,`Nói kết quả trả lời câu hỏi thế nào, và lưu ý đơn vị (lakh) hoặc điều kiện lọc.`]},en:{think:`LEFT JOIN population with farmer data; return total premium and average population per district, only districts above 100 crore total, sorted descending.`,steps:[`100 crore = 10,000 lakh.`,`GROUP BY state, district; SUM(FarmersPremiumAmount), AVG(TotalPopulation).`,`HAVING SUM(...) > 10000; ORDER BY descending.`,`Result: only 3 districts (Bid, Ujjain, Latur).`],code:`SELECT srcStateName, srcDistrictName,
       SUM(FarmersPremiumAmount) AS TotalFarmersPremium, AVG(TotalPopulation) AS AvgPopulation
FROM farmersinsurancedata
GROUP BY srcStateName, srcDistrictName
HAVING SUM(FarmersPremiumAmount) > 10000   -- 100 crore = 10000 lakh
ORDER BY TotalFarmersPremium DESC;`,lotus:`Like keeping only branches whose four-year total revenue exceeds 100 crore.`,trap:`A condition on a total goes in HAVING, not WHERE.`,read:[`3 rows: districts with total premium above 100 crore (10,000 lakh) with average population.`],remark:`Only three districts exceed 100 crore: Bid (14,529), Ujjain (12,385) and Latur (11,700), all populous (2–2.6 million).`,howRemark:[`State the row count and the most notable value.`,`Compare one row with another or with the overall level.`,`Say how it answers the question, noting the unit (lakh) or filter.`]}},Q19:{vi:{think:`Các huyện có số nông dân lớn hơn mức trung bình của toàn bộ bản ghi.`,steps:[`Bảng con: SELECT AVG(TotalFarmersCovered).`,`WHERE TotalFarmersCovered > (bảng con).`,`DISTINCT để bỏ tên lặp.`],code:`SELECT DISTINCT srcDistrictName
FROM farmersinsurancedata
WHERE TotalFarmersCovered > (SELECT AVG(TotalFarmersCovered) FROM farmersinsurancedata)
ORDER BY srcDistrictName;`,lotus:`Như tìm chi nhánh có số khách trên trung bình toàn chuỗi.`,trap:`Trung bình tính trên mọi bản ghi, không theo từng huyện: đọc kỹ đề.`,read:[`251 dòng: huyện có số nông dân lớn hơn mức trung bình toàn bộ bản ghi.`],remark:`251 huyện trên trung bình, tức một phần đáng kể huyện nằm trên mức chung; tên mẫu gồm Agra, Ajmer, Alwar.`,howRemark:[`Nêu số dòng và giá trị nổi bật nhất của kết quả.`,`So một dòng với dòng khác hoặc với mức chung.`,`Nói kết quả trả lời câu hỏi thế nào, và lưu ý đơn vị (lakh) hoặc điều kiện lọc.`]},en:{think:`Districts whose farmers covered exceed the average over all records.`,steps:[`Subquery: SELECT AVG(TotalFarmersCovered).`,`WHERE TotalFarmersCovered > (subquery).`,`DISTINCT to drop repeated names.`],code:`SELECT DISTINCT srcDistrictName
FROM farmersinsurancedata
WHERE TotalFarmersCovered > (SELECT AVG(TotalFarmersCovered) FROM farmersinsurancedata)
ORDER BY srcDistrictName;`,lotus:`Like finding branches with above-chain-average customers.`,trap:`The average is over all records, not per district: read the question carefully.`,read:[`251 rows: districts with farmers above the average of all records.`],remark:`251 districts are above average, a sizeable share; sample names include Agra, Ajmer, Alwar.`,howRemark:[`State the row count and the most notable value.`,`Compare one row with another or with the overall level.`,`Say how it answers the question, noting the unit (lakh) or filter.`]}},Q20:{vi:{think:`Các bang có SumInsured cao hơn SumInsured của bản ghi có phí nông dân cao nhất.`,steps:[`Bảng con: SumInsured của dòng có FarmersPremiumAmount lớn nhất (ORDER BY ... DESC LIMIT 1).`,`So sánh trong WHERE.`,`Kết quả thật: 0 dòng, vì dòng có phí cao nhất cũng là dòng có SumInsured lớn nhất.`],code:`SELECT DISTINCT srcStateName
FROM farmersinsurancedata
WHERE SumInsured > (SELECT SumInsured FROM farmersinsurancedata ORDER BY FarmersPremiumAmount DESC LIMIT 1);`,lotus:`Nếu gói đắt nhất cũng là gói có giá trị cao nhất thì không gói nào vượt nó.`,trap:`Kết quả trống không phải lỗi: kiểm tra dữ liệu để hiểu vì sao.`,read:[`Kết quả 0 dòng: bảng rỗng.`],remark:`Không có bang nào có SumInsured cao hơn bản ghi có phí nông dân cao nhất, vì bản ghi đó đã có SumInsured lớn nhất; kết quả rỗng là đúng, không phải lỗi.`,howRemark:[`Nói rõ 0 dòng và vì sao.`,`Kiểm điều kiện so sánh.`,`Phân biệt rỗng đúng với lỗi truy vấn.`]},en:{think:`States with SumInsured above that of the record with the highest farmers' premium.`,steps:[`Subquery: SumInsured of the row with the highest FarmersPremiumAmount (ORDER BY ... DESC LIMIT 1).`,`Compare in WHERE.`,`Real result: 0 rows, because the highest-premium row also has the largest SumInsured.`],code:`SELECT DISTINCT srcStateName
FROM farmersinsurancedata
WHERE SumInsured > (SELECT SumInsured FROM farmersinsurancedata ORDER BY FarmersPremiumAmount DESC LIMIT 1);`,lotus:`If the priciest package also has the highest value, nothing exceeds it.`,trap:`An empty result is not an error: inspect the data to see why.`,read:[`Result is 0 rows: an empty table.`],remark:`No state has a SumInsured above that of the record with the highest farmers premium, since that record already has the largest SumInsured; the empty result is correct, not an error.`,howRemark:[`Say clearly it is 0 rows and why.`,`Check the comparison condition.`,`Distinguish a correct empty result from a query bug.`]}},Q21:{vi:{think:`Các huyện có phí nông dân cao hơn mức trung bình của bang đông dân nhất.`,steps:[`Bảng con 1: bang có SUM(TotalPopulation) lớn nhất.`,`Bảng con 2: AVG(FarmersPremiumAmount) của bang đó.`,`WHERE FarmersPremiumAmount > (bảng con 2).`],code:`SELECT DISTINCT srcDistrictName
FROM farmersinsurancedata
WHERE FarmersPremiumAmount > (
    SELECT AVG(FarmersPremiumAmount) FROM farmersinsurancedata
    WHERE srcStateName = (SELECT srcStateName FROM farmersinsurancedata
                          GROUP BY srcStateName ORDER BY SUM(TotalPopulation) DESC LIMIT 1))
ORDER BY srcDistrictName;`,lotus:`Như so doanh thu từng chi nhánh với trung bình của khu vực đông khách nhất.`,trap:`Hai tầng bảng con lồng nhau: viết từng tầng riêng, chạy thử rồi mới ghép.`,read:[`246 dòng: huyện có phí nông dân cao hơn mức trung bình của bang đông dân nhất.`],remark:`246 huyện vượt mức trung bình của bang đông dân nhất; so với Q19 (251) con số gần nhau.`,howRemark:[`Nêu số dòng và giá trị nổi bật nhất của kết quả.`,`So một dòng với dòng khác hoặc với mức chung.`,`Nói kết quả trả lời câu hỏi thế nào, và lưu ý đơn vị (lakh) hoặc điều kiện lọc.`]},en:{think:`Districts whose farmers' premium exceeds the average of the most populous state.`,steps:[`Subquery 1: the state with the largest SUM(TotalPopulation).`,`Subquery 2: AVG(FarmersPremiumAmount) of that state.`,`WHERE FarmersPremiumAmount > (subquery 2).`],code:`SELECT DISTINCT srcDistrictName
FROM farmersinsurancedata
WHERE FarmersPremiumAmount > (
    SELECT AVG(FarmersPremiumAmount) FROM farmersinsurancedata
    WHERE srcStateName = (SELECT srcStateName FROM farmersinsurancedata
                          GROUP BY srcStateName ORDER BY SUM(TotalPopulation) DESC LIMIT 1))
ORDER BY srcDistrictName;`,lotus:`Like comparing each branch's revenue with the average of the area with the most customers.`,trap:`Two nested subquery levels: write each separately, test, then combine.`,read:[`246 rows: districts whose farmers premium exceeds the average of the most populous state.`],remark:`246 districts exceed the most populous state's average; close to Q19's 251.`,howRemark:[`State the row count and the most notable value.`,`Compare one row with another or with the overall level.`,`Say how it answers the question, noting the unit (lakh) or filter.`]}},Q22:{vi:{think:`Đánh số thứ tự mỗi dòng theo số nông dân giảm dần.`,steps:[`ROW_NUMBER() OVER (ORDER BY TotalFarmersCovered DESC).`,`Mỗi dòng nhận một số duy nhất, kể cả khi bằng nhau.`],code:`SELECT srcStateName, srcDistrictName, TotalFarmersCovered,
       ROW_NUMBER() OVER (ORDER BY TotalFarmersCovered DESC) AS row_num
FROM farmersinsurancedata
LIMIT 10;`,lotus:`Như đánh số thứ tự các ngày theo số khách từ đông nhất.`,trap:`ROW_NUMBER không cho hai dòng cùng số dù giá trị bằng nhau, khác RANK.`,read:[`10 dòng: mỗi dòng có row_num theo số nông dân giảm dần.`],remark:`Bản ghi số 1 là Bid (548.572 nông dân), 2 là Nanded (426.801), 3 là Latur (407.452); row_num đánh số duy nhất kể cả khi lặp huyện (Bid lại ở hạng 4).`,howRemark:[`Nêu số dòng và giá trị nổi bật nhất của kết quả.`,`So một dòng với dòng khác hoặc với mức chung.`,`Nói kết quả trả lời câu hỏi thế nào, và lưu ý đơn vị (lakh) hoặc điều kiện lọc.`]},en:{think:`Number each row by farmers covered descending.`,steps:[`ROW_NUMBER() OVER (ORDER BY TotalFarmersCovered DESC).`,`Each row gets a unique number, even on ties.`],code:`SELECT srcStateName, srcDistrictName, TotalFarmersCovered,
       ROW_NUMBER() OVER (ORDER BY TotalFarmersCovered DESC) AS row_num
FROM farmersinsurancedata
LIMIT 10;`,lotus:`Like numbering days by customers, busiest first.`,trap:`ROW_NUMBER never gives two rows the same number even on ties, unlike RANK.`,read:[`10 rows: each row has row_num by farmers descending.`],remark:`Rank 1 is Bid (548,572 farmers), 2 is Nanded (426,801), 3 is Latur (407,452); row_num numbers uniquely even when a district repeats (Bid again at 4).`,howRemark:[`State the row count and the most notable value.`,`Compare one row with another or with the overall level.`,`Say how it answers the question, noting the unit (lakh) or filter.`]}},Q23:{vi:{think:`Xếp hạng huyện theo SumInsured giảm dần trong từng bang.`,steps:[`RANK() OVER (PARTITION BY srcStateName ORDER BY SumInsured DESC).`,`PARTITION BY chia nhóm theo bang, hạng tính lại từ 1 trong mỗi bang.`],code:`SELECT srcStateName, srcDistrictName, SumInsured,
       RANK() OVER (PARTITION BY srcStateName ORDER BY SumInsured DESC) AS rnk
FROM farmersinsurancedata
ORDER BY srcStateName, rnk
LIMIT 12;`,lotus:`Như xếp hạng chi nhánh theo doanh thu bên trong từng quận.`,trap:`Quên PARTITION BY sẽ xếp một bảng hạng chung cho cả nước.`,read:[`12 dòng đầu: rnk là hạng SumInsured trong từng bang, bắt đầu lại từ 1 ở mỗi bang.`],remark:`Trong Andaman and Nicobar, North and Middle Andaman hạng 1 (180,54) và South Andaman hạng 2 (12,02); hạng được tính riêng trong mỗi bang.`,howRemark:[`Nêu số dòng và giá trị nổi bật nhất của kết quả.`,`So một dòng với dòng khác hoặc với mức chung.`,`Nói kết quả trả lời câu hỏi thế nào, và lưu ý đơn vị (lakh) hoặc điều kiện lọc.`]},en:{think:`Rank districts by SumInsured descending within each state.`,steps:[`RANK() OVER (PARTITION BY srcStateName ORDER BY SumInsured DESC).`,`PARTITION BY groups by state; the rank restarts from 1 in each state.`],code:`SELECT srcStateName, srcDistrictName, SumInsured,
       RANK() OVER (PARTITION BY srcStateName ORDER BY SumInsured DESC) AS rnk
FROM farmersinsurancedata
ORDER BY srcStateName, rnk
LIMIT 12;`,lotus:`Like ranking branches by revenue inside each district.`,trap:`Forgetting PARTITION BY gives one national ranking.`,read:[`First 12 rows: rnk is the SumInsured rank within each state, restarting at 1 per state.`],remark:`In Andaman and Nicobar, North and Middle Andaman ranks 1 (180.54) and South Andaman 2 (12.02); ranks are computed within each state.`,howRemark:[`State the row count and the most notable value.`,`Compare one row with another or with the overall level.`,`Say how it answers the question, noting the unit (lakh) or filter.`]}},Q24:{vi:{think:`Tổng cộng dồn phí nông dân theo huyện, theo năm tăng dần, trong từng bang.`,steps:[`SUM(FarmersPremiumAmount) OVER (PARTITION BY srcStateName, srcDistrictName ORDER BY srcYear).`,`ORDER BY trong OVER tạo tổng dồn.`],code:`SELECT srcStateName, srcDistrictName, srcYear, FarmersPremiumAmount,
       SUM(FarmersPremiumAmount) OVER (PARTITION BY srcStateName, srcDistrictName ORDER BY srcYear) AS cumulative_premium
FROM farmersinsurancedata
ORDER BY srcStateName, srcDistrictName, srcYear
LIMIT 12;`,lotus:`Như doanh thu cộng dồn từng tháng của một chi nhánh: tháng 3 = tháng 1 + 2 + 3.`,trap:`Không có ORDER BY trong OVER thì ra tổng cả nhóm cho mọi dòng, không phải cộng dồn.`,read:[`12 dòng: phí theo năm và cột cumulative_premium là tổng cộng dồn.`],remark:`Nicobars: 0,003 năm 2020 rồi 0,014 năm 2021, cộng dồn thành 0,017; cột cộng dồn luôn tăng hoặc giữ nguyên theo năm.`,howRemark:[`Nêu số dòng và giá trị nổi bật nhất của kết quả.`,`So một dòng với dòng khác hoặc với mức chung.`,`Nói kết quả trả lời câu hỏi thế nào, và lưu ý đơn vị (lakh) hoặc điều kiện lọc.`]},en:{think:`Cumulative sum of farmers' premium per district, ascending by year, within each state.`,steps:[`SUM(FarmersPremiumAmount) OVER (PARTITION BY srcStateName, srcDistrictName ORDER BY srcYear).`,`ORDER BY inside OVER creates the running total.`],code:`SELECT srcStateName, srcDistrictName, srcYear, FarmersPremiumAmount,
       SUM(FarmersPremiumAmount) OVER (PARTITION BY srcStateName, srcDistrictName ORDER BY srcYear) AS cumulative_premium
FROM farmersinsurancedata
ORDER BY srcStateName, srcDistrictName, srcYear
LIMIT 12;`,lotus:`Like a branch's running revenue by month: month 3 = months 1 + 2 + 3.`,trap:`Without ORDER BY in OVER you get the whole group's total on every row, not a running one.`,read:[`12 rows: premium by year and cumulative_premium is the running total.`],remark:`Nicobars: 0.003 in 2020 then 0.014 in 2021, accumulating to 0.017; the cumulative column never falls with year.`,howRemark:[`State the row count and the most notable value.`,`Compare one row with another or with the overall level.`,`Say how it answers the question, noting the unit (lakh) or filter.`]}},Q25:{vi:{think:`Tạo hai bảng: districts (khoá chính DistrictCode) và states (khoá chính StateCode).`,steps:[`CREATE TABLE states (StateCode INT PRIMARY KEY, StateName VARCHAR(255)).`,`CREATE TABLE districts (DistrictCode INT PRIMARY KEY, DistrictName VARCHAR(255), StateCode INT).`,`Tạo states trước để districts tham chiếu được (Q26).`],code:`CREATE TABLE states (
    StateCode INT PRIMARY KEY,
    StateName VARCHAR(255)
);
CREATE TABLE districts (
    DistrictCode INT PRIMARY KEY,
    DistrictName VARCHAR(255),
    StateCode INT
);`,lotus:`Như lập danh mục chi nhánh và danh mục quận riêng, mỗi cái có mã duy nhất.`,trap:`Khoá chính không được trùng: hai dòng cùng DistrictCode sẽ bị từ chối.`,read:[`Danh sách tên bảng mới tạo: states và districts.`],remark:`Đã tạo hai bảng states và districts, mỗi bảng có khoá chính riêng.`,howRemark:[`Nêu số dòng và giá trị nổi bật nhất của kết quả.`,`So một dòng với dòng khác hoặc với mức chung.`,`Nói kết quả trả lời câu hỏi thế nào, và lưu ý đơn vị (lakh) hoặc điều kiện lọc.`]},en:{think:`Create two tables: districts (primary key DistrictCode) and states (primary key StateCode).`,steps:[`CREATE TABLE states (StateCode INT PRIMARY KEY, StateName VARCHAR(255)).`,`CREATE TABLE districts (DistrictCode INT PRIMARY KEY, DistrictName VARCHAR(255), StateCode INT).`,`Create states first so districts can reference it (Q26).`],code:`CREATE TABLE states (
    StateCode INT PRIMARY KEY,
    StateName VARCHAR(255)
);
CREATE TABLE districts (
    DistrictCode INT PRIMARY KEY,
    DistrictName VARCHAR(255),
    StateCode INT
);`,lotus:`Like making a separate branch directory and district directory, each with a unique code.`,trap:`A primary key cannot repeat: two rows with the same DistrictCode are rejected.`,read:[`The list of newly created tables: states and districts.`],remark:`Two tables states and districts were created, each with its own primary key.`,howRemark:[`State the row count and the most notable value.`,`Compare one row with another or with the overall level.`,`Say how it answers the question, noting the unit (lakh) or filter.`]}},Q26:{vi:{think:`Thêm khoá ngoại để districts.StateCode tham chiếu states.StateCode.`,steps:[`ALTER TABLE districts ADD CONSTRAINT fk_districts_state FOREIGN KEY (StateCode) REFERENCES states(StateCode).`,`Ghi chú: SQLite không cho ALTER ADD FOREIGN KEY; ở đây kết quả kiểm tra bằng bảng tạo sẵn khoá ngoại. MySQL chạy đúng câu ALTER.`],code:`-- MySQL
ALTER TABLE districts
ADD CONSTRAINT fk_districts_state FOREIGN KEY (StateCode) REFERENCES states(StateCode);`,lotus:`Mỗi quận phải thuộc một chi nhánh có thật: không thể gán quận cho chi nhánh chưa tồn tại.`,trap:`Chèn dòng vào districts với StateCode chưa có trong states sẽ bị từ chối.`,read:[`Bảng kiểm tra khoá ngoại: districts.StateCode tham chiếu states.StateCode.`],remark:`Khoá ngoại đã gắn: cột StateCode của districts trỏ về StateCode của states, nên không thể thêm huyện thuộc bang không tồn tại.`,howRemark:[`Nêu số dòng và giá trị nổi bật nhất của kết quả.`,`So một dòng với dòng khác hoặc với mức chung.`,`Nói kết quả trả lời câu hỏi thế nào, và lưu ý đơn vị (lakh) hoặc điều kiện lọc.`]},en:{think:`Add a foreign key so districts.StateCode references states.StateCode.`,steps:[`ALTER TABLE districts ADD CONSTRAINT fk_districts_state FOREIGN KEY (StateCode) REFERENCES states(StateCode).`,`Note: SQLite does not allow ALTER ADD FOREIGN KEY; the check here uses a table created with the key. MySQL runs the ALTER as written.`],code:`-- MySQL
ALTER TABLE districts
ADD CONSTRAINT fk_districts_state FOREIGN KEY (StateCode) REFERENCES states(StateCode);`,lotus:`Every district must belong to a real branch: you cannot assign a district to a branch that does not exist.`,trap:`Inserting into districts a StateCode absent from states is rejected.`,read:[`Foreign-key check table: districts.StateCode references states.StateCode.`],remark:`The foreign key is in place: districts.StateCode points to states.StateCode, so a district of a non-existent state cannot be added.`,howRemark:[`State the row count and the most notable value.`,`Compare one row with another or with the overall level.`,`Say how it answers the question, noting the unit (lakh) or filter.`]}},Q27:{vi:{think:`Cập nhật phí nông dân của dòng rowID = 1 thành 500,0.`,steps:[`UPDATE ... SET FarmersPremiumAmount = 500.0 WHERE rowID = 1.`,`Luôn có WHERE, rồi SELECT lại để kiểm tra.`],code:`UPDATE farmersinsurancedata SET FarmersPremiumAmount = 500.0 WHERE rowID = 1;`,lotus:`Như sửa một booking cụ thể bằng mã booking của nó.`,trap:`UPDATE không có WHERE sửa mọi dòng của bảng.`,read:[`Dòng «1 dòng bị ảnh hưởng» và bảng kiểm tra giá trị mới.`],remark:`Cập nhật đúng 1 dòng (rowID 1), phí nông dân thành 500,0.`,howRemark:[`Nêu số dòng bị ảnh hưởng.`,`Đối chiếu giá trị mới.`,`Nhắc kiểm WHERE trước khi UPDATE.`]},en:{think:`Update the farmers' premium of the row with rowID = 1 to 500.0.`,steps:[`UPDATE ... SET FarmersPremiumAmount = 500.0 WHERE rowID = 1.`,`Always include WHERE, then SELECT again to check.`],code:`UPDATE farmersinsurancedata SET FarmersPremiumAmount = 500.0 WHERE rowID = 1;`,lotus:`Like editing one specific booking by its booking ID.`,trap:`UPDATE without WHERE changes every row of the table.`,read:[`The line “1 row affected” and a check table of the new value.`],remark:`Exactly 1 row updated (rowID 1), farmers premium now 500.0.`,howRemark:[`State the rows affected.`,`Check the new value.`,`Remind to check WHERE before UPDATE.`]}},Q28:{vi:{think:`Đổi năm thành 2021 cho mọi dòng của Himachal Pradesh.`,steps:[`UPDATE ... SET srcYear = 2021 WHERE srcStateName = 'HIMACHAL PRADESH'.`,`Kiểm tra bằng GROUP BY năm.`],code:`UPDATE farmersinsurancedata SET srcYear = 2021 WHERE srcStateName = 'HIMACHAL PRADESH';`,lotus:`Như đổi ngày cho cả lô booking của một chi nhánh.`,trap:`Cập nhật hàng loạt khó hoàn tác: SELECT với cùng WHERE trước để đếm số dòng.`,read:[`«40 dòng bị ảnh hưởng» và bảng đếm cho thấy cả 40 dòng Himachal Pradesh đã sang 2021.`],remark:`40 dòng của Himachal Pradesh đều được đổi sang năm 2021; bảng kiểm tra xác nhận không còn năm khác.`,howRemark:[`Nêu số dòng bị ảnh hưởng.`,`Đối chiếu bằng truy vấn kiểm tra.`,`Nói dữ liệu gốc đã đổi.`]},en:{think:`Change the year to 2021 for all Himachal Pradesh rows.`,steps:[`UPDATE ... SET srcYear = 2021 WHERE srcStateName = 'HIMACHAL PRADESH'.`,`Check with GROUP BY year.`],code:`UPDATE farmersinsurancedata SET srcYear = 2021 WHERE srcStateName = 'HIMACHAL PRADESH';`,lotus:`Like changing the date for a whole batch of one branch's bookings.`,trap:`Bulk updates are hard to undo: SELECT with the same WHERE first to count rows.`,read:[`“40 rows affected” and a count table showing all 40 Himachal Pradesh rows now at 2021.`],remark:`All 40 Himachal Pradesh rows were changed to 2021; the check table confirms no other year remains.`,howRemark:[`State the rows affected.`,`Verify with a check query.`,`Say the data has changed.`]}},Q29:{vi:{think:`Xóa các dòng có số nông dân dưới 10.000 trong năm 2020.`,steps:[`DELETE FROM ... WHERE TotalFarmersCovered < 10000 AND srcYear = 2020.`,`Chạy SELECT COUNT với cùng WHERE trước để biết sẽ xóa bao nhiêu.`],code:`DELETE FROM farmersinsurancedata WHERE TotalFarmersCovered < 10000 AND srcYear = 2020;`,lotus:`Như xóa các booking nhỏ của một tháng: phải chắc chắn trước khi xóa.`,trap:`DELETE không có WHERE xóa sạch bảng. Dùng cùng WHERE với SELECT để xem trước.`,read:[`«184 dòng bị ảnh hưởng» và rows_left còn 1.686 dòng.`],remark:`Xoá 184 dòng có dưới 10.000 nông dân năm 2020; bảng còn 1.686 dòng. Xoá không đảo ngược nên luôn SELECT trước bằng cùng điều kiện.`,howRemark:[`Nêu số dòng xoá và còn lại.`,`Đối chiếu tổng trước và sau.`,`Nhắc SELECT thử trước khi DELETE.`]},en:{think:`Delete rows with fewer than 10,000 farmers in 2020.`,steps:[`DELETE FROM ... WHERE TotalFarmersCovered < 10000 AND srcYear = 2020.`,`Run SELECT COUNT with the same WHERE first to know how many will go.`],code:`DELETE FROM farmersinsurancedata WHERE TotalFarmersCovered < 10000 AND srcYear = 2020;`,lotus:`Like deleting a month's small bookings: be sure before deleting.`,trap:`DELETE without WHERE wipes the table. Preview with SELECT using the same WHERE.`,read:[`“184 rows affected” and rows_left shows 1,686 rows.`],remark:`Deleted 184 rows with under 10,000 farmers in 2020; 1,686 rows remain. Delete is irreversible so always SELECT first with the same condition.`,howRemark:[`State rows deleted and remaining.`,`Reconcile totals before and after.`,`Remind to SELECT first before DELETE.`]}}},results:{Q1:{code:`SELECT DISTINCT srcStateName FROM farmersinsurancedata ORDER BY srcStateName;`,text:`27 dòng
               srcStateName
ANDAMAN AND NICOBAR ISLANDS
             ANDHRA PRADESH
                      ASSAM
               CHHATTISGARH
                        GOA
                    GUJARAT
                    HARYANA
           HIMACHAL PRADESH
          JAMMU AND KASHMIR
                  JHARKHAND
                  KARNATAKA
                     KERALA
             MADHYA PRADESH
                MAHARASHTRA
                    MANIPUR
                  MEGHALAYA
                     ODISHA
                 PUDUCHERRY
                     PUNJAB
                  RAJASTHAN
                     SIKKIM
                 TAMIL NADU
                  TELANGANA
                    TRIPURA
              UTTAR PRADESH
                UTTARAKHAND
                WEST BENGAL`,imgs:[]},Q2:{code:`SELECT srcStateName, SUM(TotalFarmersCovered) AS TotalFarmersCovered, SUM(SumInsured) AS SumInsured
FROM farmersinsurancedata
GROUP BY srcStateName
ORDER BY TotalFarmersCovered DESC;`,text:`27 dòng
  srcStateName  TotalFarmersCovered  SumInsured
MADHYA PRADESH              9149678 8413198.330
   MAHARASHTRA              8939015 4005734.659
 UTTAR PRADESH              7239576 3298970.934
     RAJASTHAN              6822958 5363500.721
    TAMIL NADU              3962760 3025519.440
        ODISHA              2586332 1375248.579
       HARYANA              2081990 2268958.581
   WEST BENGAL              2054414  842893.120
  CHHATTISGARH              1858973 1118190.176
ANDHRA PRADESH              1810317 1631182.110
         ASSAM              1590716  813139.263
     KARNATAKA               736375       3.177`,imgs:[]},Q3:{code:`SELECT rowID, srcStateName, srcDistrictName, TotalFarmersCovered FROM farmersinsurancedata WHERE srcYear = 2020 LIMIT 10;
-- đếm: SELECT COUNT(*) FROM farmersinsurancedata WHERE srcYear = 2020;`,text:`429 dòng có srcYear = 2020 (hiển thị 10 dòng đầu)
 rowID srcStateName srcDistrictName  TotalFarmersCovered
     0    KARNATAKA DakshinaKannada                    0
     1    KARNATAKA Bengaluru Urban                    0
  1188    KARNATAKA  Chikkaballapur                   20
  1316    KARNATAKA  Chikkamagaluru                    7
  2063       ODISHA      Mayurbhanj                   19
  2064       ODISHA    Nabarangapur                   80
  2065       ODISHA        Nayagarh                   57
  2066       ODISHA         Nuapada                  980
  2067       ODISHA            Puri                 9588
  2068       ODISHA        Rayagada                  562`,imgs:[]},Q4:{code:`SELECT rowID, srcStateName, srcDistrictName, TotalPopulationRural
FROM farmersinsurancedata
WHERE TotalPopulationRural > 1000000 AND srcStateName = 'HIMACHAL PRADESH';`,text:`4 dòng
 rowID     srcStateName srcDistrictName  TotalPopulationRural
     8 HIMACHAL PRADESH          Kangra               1423794
  1073 HIMACHAL PRADESH          Kangra               1423794
  2263 HIMACHAL PRADESH          Kangra               1423794
  3144 HIMACHAL PRADESH          Kangra               1423794`,imgs:[]},Q5:{code:`SELECT srcStateName, srcDistrictName, SUM(FarmersPremiumAmount) AS FarmersPremiumAmount
FROM farmersinsurancedata
WHERE srcYear = 2018
GROUP BY srcStateName, srcDistrictName
ORDER BY FarmersPremiumAmount ASC;`,text:`525 dòng
srcStateName srcDistrictName  FarmersPremiumAmount
   KARNATAKA Bengaluru Rural                   0.0
   KARNATAKA Bengaluru Urban                   0.0
   KARNATAKA  Chikkaballapur                   0.0
   KARNATAKA  Chikkamagaluru                   0.0
   KARNATAKA DakshinaKannada                   0.0
   KARNATAKA          Kodagu                   0.0
   KARNATAKA          Mysuru                   0.0
   KARNATAKA      Ramanagara                   0.0
   KARNATAKA      Shivamogga                   0.0
   KARNATAKA        Tumakuru                   0.0
   KARNATAKA           Udupi                   0.0
   KARNATAKA    UttarKannada                   0.0`,imgs:[]},Q6:{code:`SELECT srcStateName, SUM(TotalFarmersCovered) AS TotalFarmersCovered, SUM(GrossPremiumAmountToBePaid) AS GrossPremium
FROM farmersinsurancedata
WHERE InsuredLandArea > 5.0 AND srcYear = 2018
GROUP BY srcStateName
ORDER BY TotalFarmersCovered DESC;`,text:`17 dòng
    srcStateName  TotalFarmersCovered  GrossPremium
   UTTAR PRADESH              2614548      70172.93
  MADHYA PRADESH              2523882     155228.19
     MAHARASHTRA              2425998      90419.20
     WEST BENGAL              2038418      49236.05
       RAJASTHAN              1666703     114021.21
      TAMIL NADU              1134011     157822.26
         HARYANA               665511      26875.56
  ANDHRA PRADESH               473849      36850.88
    CHHATTISGARH               151742       6863.97
       TELANGANA               150069       4464.03
HIMACHAL PRADESH                64766        530.09
          ODISHA                58010        833.58`,imgs:[]},Q7:{code:`SELECT srcYear, AVG(InsuredLandArea) AS AvgInsuredLandArea
FROM farmersinsurancedata
GROUP BY srcYear
ORDER BY srcYear;`,text:`4 dòng
 srcYear  AvgInsuredLandArea
    2018              37.879
    2019              38.265
    2020              46.924
    2021              38.546`,imgs:[]},Q8:{code:`SELECT srcDistrictName, SUM(TotalFarmersCovered) AS TotalFarmersCovered
FROM farmersinsurancedata
WHERE InsuranceUnits > 0
GROUP BY srcDistrictName
ORDER BY TotalFarmersCovered DESC;`,text:`558 dòng
srcDistrictName  TotalFarmersCovered
            Bid              1430532
          Latur              1184066
         Nanded               739712
      Osmanabad               700623
          Jalna               666086
         Ujjain               630787
        Solapur               563903
        Rajgarh               557778
          Dewas               549528
       Parbhani               544741
         Sehore               529484
     Ahmadnagar               489329`,imgs:[]},Q9:{code:`SELECT srcStateName,
       SUM(FarmersPremiumAmount) AS FarmersPremium, SUM(StatePremiumAmount) AS StatePremium, SUM(GOVPremiumAmount) AS GovPremium,
       SUM(TotalFarmersCovered) AS TotalFarmersCovered
FROM farmersinsurancedata
WHERE SumInsured > 5   -- 500,000 INR = 5 lakh, dữ liệu lưu theo đơn vị lakh
GROUP BY srcStateName
ORDER BY TotalFarmersCovered DESC;`,text:`26 dòng
  srcStateName  FarmersPremium  StatePremium  GovPremium  TotalFarmersCovered
MADHYA PRADESH      139861.350    399901.493  399901.493              9149678
   MAHARASHTRA       84293.080    376643.749  356388.469              8938932
 UTTAR PRADESH       60333.696     88796.800   88694.100              7239538
     RAJASTHAN      104352.383    290076.310  276115.130              6822946
    TAMIL NADU       51184.489    427455.427  306309.328              3962751
        ODISHA       26987.247    112098.316  112098.316              2586219
       HARYANA       49234.840     60606.442   60596.525              2081961
   WEST BENGAL        8727.984     25480.180   15393.360              2054414
  CHHATTISGARH       20947.272     68042.011   68042.011              1858549
ANDHRA PRADESH        5555.081     94441.740   57365.220              1810317
         ASSAM         849.892     19693.115   13291.385              1590701
     TELANGANA        5722.630      4008.280    4008.280               407890`,imgs:[]},Q10:{code:`SELECT srcDistrictName, TotalPopulation
FROM farmersinsurancedata
WHERE srcYear = 2020
ORDER BY TotalPopulation DESC
LIMIT 5;`,text:`5 dòng
srcDistrictName  TotalPopulation
Bengaluru Urban          9621551
           Pune          9429408
          Thane          8070032
         Jaipur          6626178
         Nashik          6107187`,imgs:[]},Q11:{code:`SELECT srcStateName, srcDistrictName, SumInsured, FarmersPremiumAmount
FROM farmersinsurancedata
WHERE FarmersPremiumAmount > 0
ORDER BY FarmersPremiumAmount ASC, SumInsured ASC
LIMIT 10;`,text:`10 dòng
srcStateName srcDistrictName  SumInsured  FarmersPremiumAmount
   KARNATAKA       Kalaburgi       0.004                   0.0
   KARNATAKA           Kolar       0.005                   0.0
   KARNATAKA       Davangere       0.005                   0.0
   KARNATAKA         Ballari       0.005                   0.0
   KARNATAKA          Mandya       0.006                   0.0
   KARNATAKA         YADGIRI       0.009                   0.0
   KARNATAKA           Bidar       0.010                   0.0
   KARNATAKA         Ballari       0.011                   0.0
   KARNATAKA       Davangere       0.012                   0.0
   KARNATAKA          Koppal       0.014                   0.0`,imgs:[]},Q12:{code:`SELECT srcStateName, srcYear,
       SUM(TotalFarmersCovered) * 1.0 / SUM(TotalPopulation) AS ratio
FROM farmersinsurancedata
GROUP BY srcStateName, srcYear
ORDER BY ratio DESC
LIMIT 3;`,text:`3 dòng
srcStateName  srcYear  ratio
CHHATTISGARH     2021  0.050
     TRIPURA     2020  0.047
     TRIPURA     2021  0.046`,imgs:[]},Q13:{code:`SELECT DISTINCT srcStateName, SUBSTR(srcStateName, 1, 3) AS StateShortName
FROM farmersinsurancedata
ORDER BY srcStateName;`,text:`27 dòng
               srcStateName StateShortName
ANDAMAN AND NICOBAR ISLANDS            AND
             ANDHRA PRADESH            AND
                      ASSAM            ASS
               CHHATTISGARH            CHH
                        GOA            GOA
                    GUJARAT            GUJ
                    HARYANA            HAR
           HIMACHAL PRADESH            HIM
          JAMMU AND KASHMIR            JAM
                  JHARKHAND            JHA
                  KARNATAKA            KAR
                     KERALA            KER
             MADHYA PRADESH            MAD
                MAHARASHTRA            MAH
                    MANIPUR            MAN
                  MEGHALAYA            MEG
                     ODISHA            ODI
                 PUDUCHERRY            PUD
                     PUNJAB            PUN
                  RAJASTHAN            RAJ
                     SIKKIM            SIK
                 TAMIL NADU            TAM
                  TELANGANA            TEL
                    TRIPURA            TRI
              UTTAR PRADESH            UTT
                UTTARAKHAND            UTT
                WEST BENGAL            WES`,imgs:[]},Q14:{code:`SELECT DISTINCT srcDistrictName FROM farmersinsurancedata WHERE srcDistrictName LIKE 'B%' ORDER BY srcDistrictName;`,text:`60 dòng
srcDistrictName
       Bagalkot
      Bageshwar
        Baghpat
       Bahraich
          Baksa
       Balaghat
       Balangir
      Baleshwar
        Ballari
         Ballia
          Balod
   Baloda Bazar
      Balrampur
   Banas Kantha
          Banda
        Bankura
       Banswara
     Bara Banki
          Baran
       Bareilly
        Bargarh
         Barmer
        Barnala
        Barpeta
        Barwani
         Bastar
          Basti
       Bathinda
          Baudh
       Belagavi`,imgs:[]},Q15:{code:`SELECT DISTINCT srcStateName, srcDistrictName FROM farmersinsurancedata WHERE srcDistrictName LIKE '%pur' ORDER BY srcStateName, srcDistrictName;`,text:`59 dòng
     srcStateName srcDistrictName
   ANDHRA PRADESH       Anantapur
            ASSAM       Lakhimpur
            ASSAM        Sonitpur
     CHHATTISGARH       Balrampur
     CHHATTISGARH         Bijapur
     CHHATTISGARH        Bilaspur
     CHHATTISGARH         Jashpur
     CHHATTISGARH      Narayanpur
     CHHATTISGARH          Raipur
     CHHATTISGARH        Surajpur
 HIMACHAL PRADESH        Bilaspur
 HIMACHAL PRADESH        Hamirpur
JAMMU AND KASHMIR        Udhampur
        KARNATAKA  Chikkaballapur
   MADHYA PRADESH       Alirajpur`,imgs:[]},Q16:{code:`SELECT a.srcStateName, a.srcDistrictName, SUM(a.FarmersPremiumAmount) AS FarmersPremiumAmount
FROM farmersinsurancedata a
INNER JOIN (SELECT srcStateName, srcDistrictName FROM farmersinsurancedata WHERE InsuranceUnits > 10
            GROUP BY srcStateName, srcDistrictName) b
  ON a.srcStateName = b.srcStateName AND a.srcDistrictName = b.srcDistrictName
GROUP BY a.srcStateName, a.srcDistrictName
ORDER BY FarmersPremiumAmount DESC;`,text:`491 dòng
  srcStateName srcDistrictName  FarmersPremiumAmount
   MAHARASHTRA             Bid             14528.860
MADHYA PRADESH          Ujjain             12385.230
   MAHARASHTRA           Latur             11700.320
MADHYA PRADESH         Rajgarh              9469.960
       HARYANA           Sirsa              9313.889
MADHYA PRADESH          Sehore              9253.490
MADHYA PRADESH         Vidisha              9235.370
MADHYA PRADESH           Dewas              8385.200
     RAJASTHAN         Jodhpur              7862.443
     RAJASTHAN     Hanumangarh              7572.810
MADHYA PRADESH        Shajapur              7444.080
       HARYANA           Hisar              7406.100`,imgs:[]},Q17:{code:`SELECT f.srcStateName, f.srcDistrictName, f.Year_, f.TotalPopulation, m.MaxPremium
FROM farmersinsurancedata f
JOIN (SELECT srcStateName, srcDistrictName, MAX(FarmersPremiumAmount) AS MaxPremium
      FROM farmersinsurancedata GROUP BY srcStateName, srcDistrictName
      HAVING MAX(FarmersPremiumAmount) > 2000) m   -- 20 crore = 2000 lakh
  ON f.srcStateName = m.srcStateName AND f.srcDistrictName = m.srcDistrictName
ORDER BY m.MaxPremium DESC;`,text:`132 dòng
srcStateName srcDistrictName                           Year_  TotalPopulation  MaxPremium
 MAHARASHTRA             Bid Calendar Year (Jan - Dec), 2018          2583421     7244.42
 MAHARASHTRA             Bid Calendar Year (Jan - Dec), 2019          2583421     7244.42
 MAHARASHTRA             Bid Calendar Year (Jan - Dec), 2020          2583421     7244.42
 MAHARASHTRA             Bid Calendar Year (Jan - Dec), 2021          2583421     7244.42
     HARYANA           Sirsa Calendar Year (Jan - Dec), 2018          1295189     5805.97
     HARYANA           Sirsa Calendar Year (Jan - Dec), 2019          1295189     5805.97
     HARYANA           Sirsa Calendar Year (Jan - Dec), 2020          1295189     5805.97
     HARYANA           Sirsa Calendar Year (Jan - Dec), 2021          1295189     5805.97
 MAHARASHTRA           Latur Calendar Year (Jan - Dec), 2018          2454196     4860.57
 MAHARASHTRA           Latur Calendar Year (Jan - Dec), 2019          2454196     4860.57
 MAHARASHTRA           Latur Calendar Year (Jan - Dec), 2020          2454196     4860.57
 MAHARASHTRA           Latur Calendar Year (Jan - Dec), 2021          2454196     4860.57`,imgs:[]},Q18:{code:`SELECT srcStateName, srcDistrictName,
       SUM(FarmersPremiumAmount) AS TotalFarmersPremium, AVG(TotalPopulation) AS AvgPopulation
FROM farmersinsurancedata
GROUP BY srcStateName, srcDistrictName
HAVING SUM(FarmersPremiumAmount) > 10000   -- 100 crore = 10000 lakh
ORDER BY TotalFarmersPremium DESC;`,text:`3 dòng
  srcStateName srcDistrictName  TotalFarmersPremium  AvgPopulation
   MAHARASHTRA             Bid             14528.86      2583421.0
MADHYA PRADESH          Ujjain             12385.23      1986864.0
   MAHARASHTRA           Latur             11700.32      2454196.0`,imgs:[]},Q19:{code:`SELECT DISTINCT srcDistrictName
FROM farmersinsurancedata
WHERE TotalFarmersCovered > (SELECT AVG(TotalFarmersCovered) FROM farmersinsurancedata)
ORDER BY srcDistrictName;`,text:`251 dòng
srcDistrictName
     Agar Malwa
           Agra
     Ahmadnagar
          Ajmer
          Akola
        Aligarh
      Allahabad
          Alwar
 Ambedkar Nagar
         Amethi`,imgs:[]},Q20:{code:`SELECT DISTINCT srcStateName
FROM farmersinsurancedata
WHERE SumInsured > (SELECT SumInsured FROM farmersinsurancedata ORDER BY FarmersPremiumAmount DESC LIMIT 1);`,text:`0 dòng
Empty DataFrame
Columns: [srcStateName]
Index: []`,imgs:[]},Q21:{code:`SELECT DISTINCT srcDistrictName
FROM farmersinsurancedata
WHERE FarmersPremiumAmount > (
    SELECT AVG(FarmersPremiumAmount) FROM farmersinsurancedata
    WHERE srcStateName = (SELECT srcStateName FROM farmersinsurancedata
                          GROUP BY srcStateName ORDER BY SUM(TotalPopulation) DESC LIMIT 1))
ORDER BY srcDistrictName;`,text:`246 dòng
srcDistrictName
     Agar Malwa
           Agra
     Ahmadnagar
          Ajmer
          Akola
        Aligarh
     Alipurduar
      Allahabad
          Alwar
         Ambala`,imgs:[]},Q22:{code:`SELECT srcStateName, srcDistrictName, TotalFarmersCovered,
       ROW_NUMBER() OVER (ORDER BY TotalFarmersCovered DESC) AS row_num
FROM farmersinsurancedata
LIMIT 10;`,text:`10 dòng
srcStateName   srcDistrictName  TotalFarmersCovered  row_num
 MAHARASHTRA               Bid               548572        1
 MAHARASHTRA            Nanded               426801        2
 MAHARASHTRA             Latur               407452        3
 MAHARASHTRA               Bid               387806        4
 MAHARASHTRA             Latur               367746        5
 MAHARASHTRA               Bid               363412        6
 MAHARASHTRA             Latur               308841        7
 MAHARASHTRA         Osmanabad               286245        8
 WEST BENGAL   Purba Medinipur               283591        9
 WEST BENGAL Paschim Medinipur               283245       10`,imgs:[]},Q23:{code:`SELECT srcStateName, srcDistrictName, SumInsured,
       RANK() OVER (PARTITION BY srcStateName ORDER BY SumInsured DESC) AS rnk
FROM farmersinsurancedata
ORDER BY srcStateName, rnk
LIMIT 12;`,text:`12 dòng
               srcStateName          srcDistrictName  SumInsured  rnk
ANDAMAN AND NICOBAR ISLANDS North and Middle Andaman     180.540    1
ANDAMAN AND NICOBAR ISLANDS            South Andaman      12.020    2
ANDAMAN AND NICOBAR ISLANDS North and Middle Andaman      11.620    3
ANDAMAN AND NICOBAR ISLANDS            South Andaman       8.180    4
ANDAMAN AND NICOBAR ISLANDS                 Nicobars       2.800    5
ANDAMAN AND NICOBAR ISLANDS                 Nicobars       0.679    6
             ANDHRA PRADESH                  Kurnool  191968.810    1
             ANDHRA PRADESH                   Y.S.R.  177442.110    2
             ANDHRA PRADESH               Srikakulam  149882.040    3
             ANDHRA PRADESH                 Prakasam  115234.930    4
             ANDHRA PRADESH                  Krishna  110284.720    5
             ANDHRA PRADESH                   Y.S.R.  107310.710    6`,imgs:[]},Q24:{code:`SELECT srcStateName, srcDistrictName, srcYear, FarmersPremiumAmount,
       SUM(FarmersPremiumAmount) OVER (PARTITION BY srcStateName, srcDistrictName ORDER BY srcYear) AS cumulative_premium
FROM farmersinsurancedata
ORDER BY srcStateName, srcDistrictName, srcYear
LIMIT 12;`,text:`12 dòng
               srcStateName          srcDistrictName  srcYear  FarmersPremiumAmount  cumulative_premium
ANDAMAN AND NICOBAR ISLANDS                 Nicobars     2020                 0.003               0.003
ANDAMAN AND NICOBAR ISLANDS                 Nicobars     2021                 0.014               0.017
ANDAMAN AND NICOBAR ISLANDS North and Middle Andaman     2020                 0.058               0.058
ANDAMAN AND NICOBAR ISLANDS North and Middle Andaman     2021                 0.903               0.961
ANDAMAN AND NICOBAR ISLANDS            South Andaman     2020                 0.041               0.041
ANDAMAN AND NICOBAR ISLANDS            South Andaman     2021                 0.060               0.101
             ANDHRA PRADESH                Anantapur     2018               541.830             541.830
             ANDHRA PRADESH                Anantapur     2019                 0.189             542.019
             ANDHRA PRADESH                 Chittoor     2018                99.650              99.650
             ANDHRA PRADESH                 Chittoor     2019                 0.441             100.091
             ANDHRA PRADESH            East Godavari     2018               102.600             102.600
             ANDHRA PRADESH            East Godavari     2019                 1.830             104.430`,imgs:[]},Q25:{code:`CREATE TABLE states (
    StateCode INT PRIMARY KEY,
    StateName VARCHAR(255)
);
CREATE TABLE districts (
    DistrictCode INT PRIMARY KEY,
    DistrictName VARCHAR(255),
    StateCode INT
);`,text:`     name
   states
districts`,imgs:[]},Q26:{code:`-- MySQL
ALTER TABLE districts
ADD CONSTRAINT fk_districts_state FOREIGN KEY (StateCode) REFERENCES states(StateCode);`,text:`Bảng districts sau khi thêm khoá ngoại (kiểm tra trên SQLite):
 table      from        to
states StateCode StateCode`,imgs:[]},Q27:{code:`UPDATE farmersinsurancedata SET FarmersPremiumAmount = 500.0 WHERE rowID = 1;`,text:`1 dòng bị ảnh hưởng
 rowID  FarmersPremiumAmount
     1                 500.0`,imgs:[]},Q28:{code:`UPDATE farmersinsurancedata SET srcYear = 2021 WHERE srcStateName = 'HIMACHAL PRADESH';`,text:`40 dòng bị ảnh hưởng
    srcStateName  srcYear  rows_
HIMACHAL PRADESH     2021     40`,imgs:[]},Q29:{code:`DELETE FROM farmersinsurancedata WHERE TotalFarmersCovered < 10000 AND srcYear = 2020;`,text:`184 dòng bị ảnh hưởng
 rows_left
      1686`,imgs:[]}}},{id:`namma-yatri`,course:`C5 · Data Visualisation`,title:[`Bài tập: Trực quan hoá dữ liệu Namma Yatri`,`Assignment: Visualising Namma Yatri data`],file:`Starter Methodology Report ADV Namma Yatri.docx`,story:[`Starter gốc là báo cáo trực quan hoá dữ liệu gọi xe Namma Yatri ở Bangalore (2.161 yêu cầu, 983 chuyến hoàn thành). Đề dùng Tableau/Power BI, ở đây mỗi mục đều có kết quả thật chạy bằng Python trên đúng file nammayatri.xlsx để bạn so với báo cáo của mình. Trong Lotus Spa: chuyến = lượt đặt lịch, khu = chi nhánh/khu vực, huỷ chuyến = khách bỏ lịch, fare = hoá đơn.`,`The original starter is a visualisation report on Namma Yatri ride-hailing data from Bangalore (2,161 requests, 983 completed). The brief uses Tableau/Power BI; here every task has real results run in Python on the actual nammayatri.xlsx so you can compare with your own report. In Lotus Spa: a ride = a booking, a zone = a branch/area, a cancellation = a customer no-show, fare = the bill.`],concepts:[`d-c471822424f5`],cells:[{t:`md`,s:`Methodology Report:

Visualisation & Analysis on Namma Yatri Data

Include your visualisations, analysis, results, insights, and outcomes.

Explain your methodology and approach to the tasks. Add your conclusions to the sections.

Table 1: Data Description

| Table Name | Column Name | Description |
|---|---|---|
| Assembly | Assembly_ID | Unique identifier |
| Assembly | Assembly | Specific assembly zone name |
| Duration | duration_id | Unique identifier of time periods |
| Duration | duration | Hour of trip (e.g., "0-1" for 12 AM to 1 AM) |
| Payment | id | Unique identifier |
| Payment | method | Payment method (e.g., Cash, UPI, Credit Card) |
| Trip Details | tripid | Unique identifier of trips |
| Trip Details | loc_from | Source Location code |
| Trip Details | searches | Trip request count |
| Trip Details | searches_got_estimate | Got an estimated price (1 = user gets an estimate, 0 = does not get an estimate) |
| Trip Details | searches_for_quotes | Searched for drivers after estimate (1 - searched, 0 - not searched) |
| Trip Details | searches_got_quotes | Got quotes (1 = Driver allotted, 0 = not allotted) |
| Trip Details | customer_not_cancelled | Whether customer cancelled or not (1 = Not cancelled) |
| Trip Details | driver_not_cancelled | Whether driver cancelled or not (1 = Not cancelled) |
| Trip Details | otp_entered | (1 = OTP entered, 0 = not entered) |
| Trip Details | end_ride | Whether ride was completed (1 = Completed) |
| Trips | tripid | Links to Trip Details |
| Trips | faremethod | Payment method ID, links to Payment table |
| Trips | fare | Fare amount |
| Trips | loc_from | Location ID of source |
| Trips | loc_to | Location ID of destination, links to Assembly table |
| Trips | driverid | Driver ID |
| Trips | custid | Customer ID |
| Trips | distance | Distance in KM from source to destination |
| Trips | duration | Unique identifier of time periods like duration_id |

#### Points to Note:

Without this methodology document, the other parts of your case study will not be evaluated.

This assignment is different from the ones you have solved before. 
Make sure that you treat this case study as a storytelling exercise and not an analysis/visualisation one. This will help you be better prepared for the presentations.

Once you are done with the analysis and visualisations, there will be many insights at your hand. 
Make sure that you map the right visuals and takeaways with the right audience since some of these insights might be relevant to one group but not to the other group.

DO NOT change the text or numbering of any task, as it may cause problems with grading. Write your solutions to a task in the space provided below the respective task.

#### Tasks to be performed

Present the overall approach of the analysis.

Mention the problem statement and the analysis approach briefly.

To solve a task, you have to create relevant visualisations and derive appropriate insights from the visualisations.

Add all the plots, insights, calculated field commands, results and outcomes for a task with proper numbering and sequence in the report.

The scores for all tasks (except conclusions) comprise both analysis work in the visualisation tool and its outcome in the report.

You will be awarded a score for a task only if the Tableau/PowerBI analysis is correct and is included in the report along with the subsequent insights.

Finally, draw conclusions based on the analysis.

#### Scoring:

Report Total Marks: 70

Sections: 3 sections (10 marks + 40 marks + 20 marks)

#### Analysis and Visualisation

#### 1. Data Preparation							[10 Marks]

**1.1** Import and Join Tables Correctly [5 Mark]

Import the Namma Yatri dataset into Tableau/Power BI.

Ensure that you correctly join all tables to create a unified dataset for analysis.

Verify the relationships between different tables and confirm that data from various sources is properly aligned for accurate insights.

Solution:`,ref:`1.1`},{t:`md`,s:`<your answer here, include all analysis, graphs, results etc> (the length of the solution is not fixed, ie, this box can vary in size)

**1.2** Find and Resolve Inconsistencies [5 Marks]

Identify and resolve any inconsistencies or issues in the dataset that might affect the analysis.

Clean the data to ensure it is structured properly for analysis, removing any irrelevant, duplicate, or erroneous entries.

While performing the analysis, create calculated fields as needed to ensure the accuracy and relevance of the insights.

Solution:`,ref:`1.2`},{t:`md`,s:`#### 2. Exploratory Data Analysis					[40 Marks]

**2.1** Classify Variables into Categorical and Numerical [2 Marks]

Classify all the variables in the dataset into numerical and categorical types.

Solution:`,ref:`2.1`},{t:`md`,s:`**2.2** Analyse Ride Demand Over Time [3 Marks]

Explore the distribution of ride demand over time, including trends across different periods.

Identify the peak demand periods. Choose an appropriate parameter for demand based on your own understanding.

Solution:`,ref:`2.2`},{t:`md`,s:`**2.3** Proportion of Total Revenue from Different Time Periods   [3 Marks]

Calculate the proportion of revenue generated during different time periods and visualise how it contributes to total revenue.

Solution:`,ref:`2.3`},{t:`md`,s:`**2.4** Explore the Relationship Between Trip Hour and Revenue   [3 Marks]

Investigate the correlation between trip hour and total fare.

Explain any trends or patterns that emerge.

Solution:`,ref:`2.4`},{t:`md`,s:`**2.5** Examine the Popularity of Different Payment Methods    [3 Marks]

Analyse the distribution of various payment methods used by customers.

Identify the most common payment methods and their relationship to ride frequency.

Solution:`,ref:`2.5`},{t:`md`,s:`**2.6** Identify High-Performing Zones   [6 Marks] Identify zones with the highest number of rides and revenue generation. Analyse factors contributing to their performance:

**2.6.1** Rides: Identify pickup zones with the highest number of trip requests. [3 marks]

Solution:`,ref:`2.6.1`},{t:`md`,s:`**2.6.2** Revenue: Identify pickup zones generating the highest revenue. [3 marks]

Solution:`,ref:`2.6.2`},{t:`md`,s:`**2.7** Analyse Ride Time Periods Across Zones [4 Marks]

Compare the trip trends for different time periods across pickup zones.

Solution:`,ref:`2.7`},{t:`md`,s:`**2.8** Top Zones with Highest Trip Volume [3 Marks]

Identify the top 5 pickup zones with the highest total number of completed trips.

Analyse factors contributing to the higher number of trips.

Solution:`,ref:`2.8`},{t:`md`,s:`**2.9** Basic Analytical Tasks [8 Marks]

**2.9.1** What are the percentages of cancellations and successful rides by both driver and customer? [3 marks]

Solution:`,ref:`2.9.1`},{t:`md`,s:`**2.9.2** Analyse the percentage of people who completed trips after searching for quotes. Visualise the variation of this ratio by time periods. [5 marks]

Solution:`,ref:`2.9.2`},{t:`md`,s:`**2.10** Create a Parameter and Use Filters [5 Marks]

Create a parameter and use it as a filter on an appropriate subset of the data to interactively analyse and visualise different subsets of the data.

Explain your choice of filter and insights drawn from this step.

Solution:`,ref:`2.10`},{t:`md`,s:`#### 3. Conclusion 							[20 Marks]

**3.1** Recommendations for Operational Efficiency    [10 Marks]

Based on your findings from the analysis, provide recommendations on how Namma Yatri can optimise its operations.

This could include strategies for improving resource allocation, reducing cancellations, or optimising ride durations.

Add supporting dashboards.

Solution:`,ref:`3.1`},{t:`md`,s:`**3.2** Marketing and Operational Strategy Improvements    [10 Marks]

Suggest improvements to Namma Yatri’s marketing or operational strategies based on your analysis.

Recommendations could involve promotional efforts, driver incentives, or regional targeting to increase customer satisfaction and service efficiency.

Add supporting dashboards.

Solution:`,ref:`3.2`}],guides:{"1.1":{vi:{think:`Gộp 5 bảng thành một bảng phẳng để mọi câu sau chỉ phải đọc một nơi.`,steps:[`Trip_Details (2.161 yêu cầu) là bảng gốc, vì nó chứa cả chuyến bị huỷ.`,`Nối Trips (983 chuyến hoàn thành) vào theo tripid, dùng left join để không mất yêu cầu bị huỷ.`,`Đổi các mã số thành chữ: Duration → khung giờ, Payment → hình thức thanh toán, Assembly → tên khu (nối hai lần: khu đón và khu trả).`,`Kết quả: 2.161 dòng × 21 cột, ví dụ chuyến 1 từ Gandhi Nagar đi Byatarayanapura, trả bằng UPI, 776 rupee.`],code:`import pandas as pd, numpy as np, matplotlib.pyplot as plt, seaborn as sns
x = pd.read_excel('/tmp/asg/all/4/Dataset and Starter Resources/nammayatri.xlsx', sheet_name=None)
td, tr, du, asm, pay = x['Trip_Details'], x['Trips'], x['Duration'], x['Assembly'], x['Payment']
for k, v in x.items(): print(f'{k:13s}', v.shape)
# nối: Trips (983 chuyến hoàn thành) <- Trip_Details theo tripid; mã giờ, mã thanh toán, mã khu
df = (td.merge(tr.drop(columns='loc_from'), on='tripid', how='left')
        .merge(du.rename(columns={'id': 'duration', 'duration': 'hour_slot'}), on='duration', how='left')
        .merge(pay.rename(columns={'id': 'faremethod', 'method': 'payment'}), on='faremethod', how='left')
        .merge(asm.rename(columns={'ID': 'loc_from', 'Assembly': 'pickup_zone'}), on='loc_from', how='left')
        .merge(asm.rename(columns={'ID': 'loc_to', 'Assembly': 'drop_zone'}), on='loc_to', how='left'))
print(df.shape)
print(df.loc[df['end_ride'] == 1, ['tripid', 'pickup_zone', 'drop_zone', 'payment', 'fare', 'distance', 'hour_slot']].head(5).to_string(index=False))`,lotus:`Như ghép sổ booking (mọi yêu cầu đặt lịch) với sổ hoá đơn (chỉ những lượt đã làm xong), rồi thay mã chi nhánh/phương thức thanh toán bằng tên cho dễ đọc.`,trap:`Dùng inner join: bạn mất hơn 1.100 yêu cầu bị huỷ và mọi tỷ lệ huỷ sau đó sai.`,read:[`Dòng đầu in kích thước từng bảng: Trip_Details 2.161 dòng, Trips 983 dòng, ba bảng mã nhỏ (24, 37, 4 dòng).`,`Dòng «(2161, 21)» là bảng sau khi nối: số dòng không đổi nghĩa là left join không làm mất hay nhân đôi yêu cầu nào.`,`Năm dòng mẫu cho thấy mã đã thành chữ: nhìn cột pickup_zone, drop_zone, payment thay vì số.`],remark:`Sau khi nối còn nguyên 2.161 dòng nên không mất yêu cầu nào; 21 cột gồm cả thông tin tìm kiếm lẫn thông tin chuyến, và các mã đã đổi thành tên khu, giờ, cách thanh toán.`,howRemark:[`Số dòng sau nối phải bằng số dòng bảng gốc (2.161).`,`Mở vài dòng mẫu và kiểm tra tên đã thay mã đúng chưa.`,`Viết một câu: nối theo khoá nào, kiểu join gì, vì sao.`]},en:{think:`Merge five tables into one flat table so every later task reads from a single place.`,steps:[`Trip_Details (2,161 requests) is the base because it includes cancelled ones.`,`Join Trips (983 completed rides) by tripid with a left join so cancelled requests stay.`,`Turn codes into words: Duration → time slot, Payment → method, Assembly → zone name (joined twice: pickup and drop).`,`Result: 2,161 rows × 21 columns, e.g. trip 1 from Gandhi Nagar to Byatarayanapura, paid by UPI, 776 rupees.`],code:`import pandas as pd, numpy as np, matplotlib.pyplot as plt, seaborn as sns
x = pd.read_excel('/tmp/asg/all/4/Dataset and Starter Resources/nammayatri.xlsx', sheet_name=None)
td, tr, du, asm, pay = x['Trip_Details'], x['Trips'], x['Duration'], x['Assembly'], x['Payment']
for k, v in x.items(): print(f'{k:13s}', v.shape)
# nối: Trips (983 chuyến hoàn thành) <- Trip_Details theo tripid; mã giờ, mã thanh toán, mã khu
df = (td.merge(tr.drop(columns='loc_from'), on='tripid', how='left')
        .merge(du.rename(columns={'id': 'duration', 'duration': 'hour_slot'}), on='duration', how='left')
        .merge(pay.rename(columns={'id': 'faremethod', 'method': 'payment'}), on='faremethod', how='left')
        .merge(asm.rename(columns={'ID': 'loc_from', 'Assembly': 'pickup_zone'}), on='loc_from', how='left')
        .merge(asm.rename(columns={'ID': 'loc_to', 'Assembly': 'drop_zone'}), on='loc_to', how='left'))
print(df.shape)
print(df.loc[df['end_ride'] == 1, ['tripid', 'pickup_zone', 'drop_zone', 'payment', 'fare', 'distance', 'hour_slot']].head(5).to_string(index=False))`,lotus:`Like joining the booking log (every request) with the invoice log (only finished sessions), then replacing branch/payment codes with names.`,trap:`An inner join drops 1,100+ cancelled requests and every cancellation rate afterwards is wrong.`,read:[`The first lines print each table's shape: Trip_Details 2,161 rows, Trips 983, three small code tables (24, 37, 4 rows).`,`“(2161, 21)” is the joined table: same row count means the left join lost or duplicated no request.`,`Five sample rows show codes turned into words: look at pickup_zone, drop_zone, payment instead of numbers.`],remark:`After the join all 2,161 rows remain, so no request was lost; the 21 columns hold both search and trip info, with codes replaced by zone, hour and payment names.`,howRemark:[`Row count after the join must equal the base table (2,161).`,`Open a few sample rows and check names replaced the codes correctly.`,`Write one sentence: which key, which join type, why.`]}},"1.2":{vi:{think:`Kiểm tra dữ liệu có sạch và logic không trước khi phân tích.`,steps:[`Đếm ô trống và dòng trùng ở từng bảng: đều bằng 0.`,`tripid duy nhất, và mọi chuyến trong Trips đều có trong Trip_Details.`,`Đối chiếu logic: 983 chuyến hoàn thành = đúng số dòng Trips; không có chuyến hoàn thành nào bị huỷ; chuyến chưa xong không có fare.`,`Còn một điểm cần nhớ: 70 yêu cầu đón ở «Other Assemblies» (gom nhóm), khi xếp hạng khu nên bỏ dòng này.`,`Tạo cột mới: hour = mã khung giờ − 1, và period gồm 4 khung (đêm, sáng, chiều, tối, mỗi khung gần 250 chuyến).`],code:`print('ô trống từng bảng:', {k: int(v.isna().sum().sum()) for k, v in x.items()}, '| dòng trùng:', {k: int(v.duplicated().sum()) for k, v in x.items()})
print('tripid là duy nhất:', td.tripid.is_unique, tr.tripid.is_unique, '| mọi chuyến của Trips có trong Trip_Details:', set(tr.tripid) <= set(td.tripid))
print('chuyến hoàn thành (end_ride=1):', int(td.end_ride.sum()), '= số dòng Trips:', len(tr))
# kiểm tra logic: chuyến hoàn thành mà bị huỷ?
done = df[df.end_ride == 1]
print('hoàn thành nhưng khách huỷ:', int((done.customer_not_cancelled == 0).sum()), '| tài xế huỷ:', int((done.driver_not_cancelled == 0).sum()))
print('chuyến chưa hoàn thành có fare:', int(df[df.end_ride == 0].fare.notna().sum()))
print('khu xuất phát = Other Assemblies:', int((df.pickup_zone == 'Other Assemblies').sum()))
df['hour'] = df['duration'] - 1
df['period'] = pd.cut(df['hour'], [-1, 5, 11, 17, 23], labels=['Đêm 0-6h', 'Sáng 6-12h', 'Chiều 12-18h', 'Tối 18-24h'])
print(df.loc[df.end_ride == 1, 'period'].value_counts().sort_index().to_string())`,lotus:`Như đối chiếu sổ trước khi chốt tháng: không dòng trống, không hoá đơn trùng, mọi hoá đơn đều có booking tương ứng.`,trap:`Giữ «Other Assemblies» trong bảng xếp hạng khu rồi kết luận đó là khu tốt nhất.`,read:[`Hai dòng đầu: toàn bộ giá trị 0 nghĩa là không ô trống, không dòng trùng.`,`«983 = 983» là phép đối chiếu: số chuyến hoàn thành khớp số dòng Trips.`,`Các số 0 ở «hoàn thành nhưng bị huỷ» là bằng chứng dữ liệu không mâu thuẫn.`,`Bảng cuối là số chuyến của 4 khung giờ, gần bằng nhau.`],remark:`Dữ liệu sạch: không trống, không trùng, các cờ nhất quán (983 chuyến hoàn thành đều không bị huỷ). Chỉ cần lưu ý nhóm «Other Assemblies» gồm 70 yêu cầu, và mỗi khung giờ có 231–258 chuyến.`,howRemark:[`Báo từng loại kiểm tra và kết quả (số dòng trống, trùng, mâu thuẫn).`,`Nếu có điểm cần xử lý, nói bạn đã xử lý thế nào và vì sao.`,`Nếu không có lỗi, vẫn viết rõ đã kiểm tra những gì.`]},en:{think:`Check that the data is clean and logical before analysing.`,steps:[`Count blanks and duplicates in every table: all zero.`,`tripid is unique and every Trips row exists in Trip_Details.`,`Logic checks: 983 completed = exactly the Trips row count; no completed ride was cancelled; unfinished rides have no fare.`,`One thing to remember: 70 requests are from “Other Assemblies” (a bucket), so drop it when ranking zones.`,`Create new columns: hour = slot id − 1 and a 4-part period (night, morning, afternoon, evening, about 250 rides each).`],code:`print('ô trống từng bảng:', {k: int(v.isna().sum().sum()) for k, v in x.items()}, '| dòng trùng:', {k: int(v.duplicated().sum()) for k, v in x.items()})
print('tripid là duy nhất:', td.tripid.is_unique, tr.tripid.is_unique, '| mọi chuyến của Trips có trong Trip_Details:', set(tr.tripid) <= set(td.tripid))
print('chuyến hoàn thành (end_ride=1):', int(td.end_ride.sum()), '= số dòng Trips:', len(tr))
# kiểm tra logic: chuyến hoàn thành mà bị huỷ?
done = df[df.end_ride == 1]
print('hoàn thành nhưng khách huỷ:', int((done.customer_not_cancelled == 0).sum()), '| tài xế huỷ:', int((done.driver_not_cancelled == 0).sum()))
print('chuyến chưa hoàn thành có fare:', int(df[df.end_ride == 0].fare.notna().sum()))
print('khu xuất phát = Other Assemblies:', int((df.pickup_zone == 'Other Assemblies').sum()))
df['hour'] = df['duration'] - 1
df['period'] = pd.cut(df['hour'], [-1, 5, 11, 17, 23], labels=['Đêm 0-6h', 'Sáng 6-12h', 'Chiều 12-18h', 'Tối 18-24h'])
print(df.loc[df.end_ride == 1, 'period'].value_counts().sort_index().to_string())`,lotus:`Like reconciling the books before month end: no blank lines, no duplicate invoices, every invoice has a booking.`,trap:`Leaving “Other Assemblies” in a zone ranking and calling it the best zone.`,read:[`The first two lines: all zeros mean no blanks and no duplicates.`,`“983 = 983” is a reconciliation: completed rides match the Trips row count.`,`Zeros under “completed but cancelled” prove the data does not contradict itself.`,`The last table is ride counts for the 4 periods, close to each other.`],remark:`Data is clean: no blanks, no duplicates, flags consistent (all 983 completed rides were uncancelled). One note: “Other Assemblies” bundles 70 requests, and each period has 231–258 rides.`,howRemark:[`Report each check and its result (blank, duplicate, contradiction counts).`,`If something needed fixing, say how you fixed it and why.`,`If no errors, still state what you checked.`]}},"2.1":{vi:{think:`Chia cột thành loại chữ/nhóm (categorical) và loại số đo được (numerical).`,steps:[`Categorical: khu đón, khu trả, hình thức thanh toán, khung giờ, mã tài xế, mã khách, mã chuyến.`,`Numerical: fare, distance và các cột đếm/cờ 0-1 như searches, end_ride.`,`Mã tài xế, mã khách, tripid là số nhưng thực chất là nhãn, không cộng trừ được nên xếp categorical.`,`describe(): fare trung bình 764, distance trung bình 14,4 km, fare tối đa 1.500.`],code:`cat = ['pickup_zone', 'drop_zone', 'payment', 'hour_slot', 'driverid', 'custid', 'tripid']
num = ['fare', 'distance', 'searches', 'searches_got_estimate', 'searches_for_quotes', 'searches_got_quotes', 'customer_not_cancelled', 'driver_not_cancelled', 'otp_entered', 'end_ride']
print('Phân loại (categorical):', cat); print('Số (numerical):', num)
print(df[['fare', 'distance']].describe().round(1).to_string())`,lotus:`Mã khách hàng giống số thẻ thành viên: là số nhưng không ai đi tính trung bình thẻ thành viên.`,trap:`Thấy cột là số nên cho là numerical, rồi tính trung bình mã tài xế.`,read:[`Hai dòng đầu liệt kê các cột theo loại; kiểm tra mỗi cột nằm đúng một nhóm.`,`Bảng describe chỉ có ý nghĩa với cột số: đọc count, mean, min, max.`,`fare chạy 44–1.500 và distance 2–27 km, nên không có giá trị âm hay phi lý.`],remark:`Có 7 cột phân loại và 10 cột số. Cước trung bình 764, quãng đường trung bình 14,4 km, trung vị gần bằng trung bình nên phân bố khá cân.`,howRemark:[`Giải thích lý do cho các cột dễ nhầm (mã tài xế, mã khách là số nhưng là nhãn).`,`Dùng mean và median để nói phân bố lệch hay cân.`,`Dùng min, max để xác nhận không có giá trị vô lý.`]},en:{think:`Split columns into categorical (labels) and numerical (measurable).`,steps:[`Categorical: pickup zone, drop zone, payment method, time slot, driver id, customer id, trip id.`,`Numerical: fare, distance and the 0/1 count columns like searches, end_ride.`,`Driver id, customer id, tripid are numbers but really labels, so categorical.`,`describe(): mean fare 764, mean distance 14.4 km, max fare 1,500.`],code:`cat = ['pickup_zone', 'drop_zone', 'payment', 'hour_slot', 'driverid', 'custid', 'tripid']
num = ['fare', 'distance', 'searches', 'searches_got_estimate', 'searches_for_quotes', 'searches_got_quotes', 'customer_not_cancelled', 'driver_not_cancelled', 'otp_entered', 'end_ride']
print('Phân loại (categorical):', cat); print('Số (numerical):', num)
print(df[['fare', 'distance']].describe().round(1).to_string())`,lotus:`A customer id is like a membership card number: numeric, but nobody averages card numbers.`,trap:`Treating any numeric-looking column as numerical and averaging driver ids.`,read:[`The first two lines list columns by type; check each sits in exactly one group.`,`describe() only makes sense for numeric columns: read count, mean, min, max.`,`fare spans 44–1,500 and distance 2–27 km, so no negative or absurd values.`],remark:`There are 7 categorical and 10 numerical columns. Mean fare is 764 and mean distance 14.4 km; median is close to mean so the distribution is fairly balanced.`,howRemark:[`Justify the tricky columns (driver id, customer id are numbers but labels).`,`Use mean vs median to say whether the distribution is skewed.`,`Use min and max to confirm there are no absurd values.`]}},"2.2":{vi:{think:`Nhìn lượng chuyến theo giờ để tìm giờ cao điểm. Chọn «số chuyến hoàn thành» làm thước đo cầu.`,steps:[`Đếm chuyến hoàn thành theo hour.`,`Vẽ cột theo 24 giờ.`,`Top 3: 0h (53 chuyến), 13h (52), 11h (48). Vắng nhất 20h (32).`,`Đường cầu khá phẳng, không có hai đỉnh sáng/chiều như taxi thành phố thường thấy: nên báo là «không có giờ cao điểm rõ rệt».`],code:`done = df[df.end_ride == 1]
demand = done.groupby('hour').size()
fig, ax = plt.subplots(1, 2, figsize=(14, 4))
demand.plot(kind='bar', ax=ax[0], title='Số chuyến hoàn thành theo giờ')
pd.Series(td.merge(tr[['tripid', 'duration']], on='tripid', how='left').groupby('duration').size()).reindex(range(1, 25)).plot(ax=ax[1], title='Số chuyến hoàn thành theo mã giờ (Trips.duration)')
plt.tight_layout()
print('3 giờ đông nhất:'); print(demand.sort_values(ascending=False).head(3).to_string())
print('giờ vắng nhất:', demand.idxmin(), demand.min(), 'chuyến')`,lotus:`Như xem spa đông nhất mấy giờ: ở đây là 0h và 13h, nhưng chênh với giờ khác không quá lớn.`,trap:`Kể ra 3 giờ cao điểm như thể chúng vượt trội, trong khi 53 so với 32 là chênh nhẹ.`,read:[`Biểu đồ trái: trục ngang là giờ trong ngày (0–23), trục dọc là số chuyến hoàn thành.`,`Tìm cột cao nhất và thấp nhất, rồi xem các cột còn lại có sát chúng không.`,`Biểu đồ phải là cách đếm theo mã khung giờ để đối chiếu, hình dạng phải giống biểu đồ trái.`,`Dòng chữ: ba giờ đông nhất và giờ vắng nhất.`],remark:`Đông nhất lúc 0h (53 chuyến), 13h (52) và 11h (48); vắng nhất 20h (32). Chênh nhẹ, không có hai đỉnh sáng và chiều rõ rệt.`,howRemark:[`Chọn thước đo cầu và nói rõ (ở đây: chuyến hoàn thành).`,`Nêu giờ cao nhất và thấp nhất kèm số.`,`Nhận xét độ chênh: lớn hay nhỏ so với mức thường.`,`Đề xuất: không cần tăng người đột biến theo giờ.`]},en:{think:`Look at ride counts by hour to find peaks. Use completed rides as the demand measure.`,steps:[`Count completed rides by hour.`,`Bar chart over 24 hours.`,`Top 3: 00h (53 rides), 13h (52), 11h (48). Quietest 20h (32).`,`The curve is fairly flat, no clear morning/evening double peak: say “no sharp peak”.`],code:`done = df[df.end_ride == 1]
demand = done.groupby('hour').size()
fig, ax = plt.subplots(1, 2, figsize=(14, 4))
demand.plot(kind='bar', ax=ax[0], title='Số chuyến hoàn thành theo giờ')
pd.Series(td.merge(tr[['tripid', 'duration']], on='tripid', how='left').groupby('duration').size()).reindex(range(1, 25)).plot(ax=ax[1], title='Số chuyến hoàn thành theo mã giờ (Trips.duration)')
plt.tight_layout()
print('3 giờ đông nhất:'); print(demand.sort_values(ascending=False).head(3).to_string())
print('giờ vắng nhất:', demand.idxmin(), demand.min(), 'chuyến')`,lotus:`Like asking when the spa is busiest: 00h and 13h here, but not by a lot.`,trap:`Calling out three peak hours as if they stand far above the rest when 53 vs 32 is modest.`,read:[`Left chart: x axis is hour of day (0–23), y axis is completed rides.`,`Find the tallest and shortest bars, then see how close the rest are.`,`Right chart counts by the slot code as a cross-check; its shape should match the left.`,`Text: the three busiest hours and the quietest.`],remark:`Busiest at 00h (53 rides), 13h (52) and 11h (48); quietest at 20h (32). The gap is mild, with no clear morning and evening double peak.`,howRemark:[`Choose the demand measure and say so (here: completed rides).`,`Quote the highest and lowest hours with numbers.`,`Judge the spread: large or small versus the usual level.`,`Suggest: no need for sharp hourly staffing surges.`]}},"2.3":{vi:{think:`Tính mỗi khung giờ đóng góp bao nhiêu phần trăm tổng doanh thu.`,steps:[`Gộp 24 giờ thành 4 khung.`,`Cộng fare theo khung, chia cho tổng.`,`Kết quả: đêm 25,2%, sáng 24,9%, chiều 26,6%, tối 23,4%.`,`Biểu đồ tròn gần như bốn phần bằng nhau: doanh thu không phụ thuộc khung giờ.`],code:`rev = done.groupby('period', observed=True)['fare'].sum()
share = rev / rev.sum() * 100
print(pd.DataFrame({'doanh thu': rev, '% tổng': share.round(1)}).to_string())
rev.plot(kind='pie', autopct='%1.1f%%', title='Tỷ trọng doanh thu theo khung giờ')`,lotus:`Như xem doanh thu spa chia thế nào giữa sáng, trưa, chiều, tối: gần như đều.`,trap:`Kết luận «chiều là khung vàng» chỉ vì 26,6% so với 23,4%.`,read:[`Bảng: cột «doanh thu» là tiền mỗi khung, cột «% tổng» cộng lại thành 100.`,`Biểu đồ tròn: so độ lớn bốn miếng với 25% mỗi miếng.`,`Tìm miếng lớn nhất và nhỏ nhất và xem chênh bao nhiêu điểm phần trăm.`],remark:`Chiều đóng góp nhiều nhất (26,6%) và tối ít nhất (23,4%); chênh chỉ 3,2 điểm phần trăm nên doanh thu gần như chia đều bốn khung.`,howRemark:[`Nêu tỷ trọng của khung cao nhất và thấp nhất.`,`Đo chênh bằng điểm phần trăm, không bằng cảm giác.`,`Kết luận: có hay không khung nào nổi trội.`]},en:{think:`Compute each time period's share of total revenue.`,steps:[`Group 24 hours into 4 periods.`,`Sum fare per period, divide by the total.`,`Result: night 25.2%, morning 24.9%, afternoon 26.6%, evening 23.4%.`,`The pie is almost four equal slices: revenue does not depend on time of day.`],code:`rev = done.groupby('period', observed=True)['fare'].sum()
share = rev / rev.sum() * 100
print(pd.DataFrame({'doanh thu': rev, '% tổng': share.round(1)}).to_string())
rev.plot(kind='pie', autopct='%1.1f%%', title='Tỷ trọng doanh thu theo khung giờ')`,lotus:`Like splitting spa revenue across morning, noon, afternoon, evening: nearly even.`,trap:`Declaring afternoon the golden slot over a 26.6% vs 23.4% gap.`,read:[`Table: “doanh thu” is money per period, “% tổng” sums to 100.`,`Pie chart: compare each slice with 25%.`,`Find the biggest and smallest slice and how many points apart they are.`],remark:`Afternoon contributes most (26.6%) and evening least (23.4%); only a 3.2-point gap, so revenue splits almost evenly across the four periods.`,howRemark:[`State the share of the top and bottom period.`,`Measure the gap in percentage points, not by feel.`,`Conclude whether any period stands out.`]}},"2.4":{vi:{think:`Kiểm tra giờ đi có liên quan đến tiền cước không.`,steps:[`Tính tương quan giờ – fare từng chuyến: −0,01, tức là không có.`,`Tính tổng doanh thu và fare trung bình theo giờ để xem hình dạng.`,`Giờ doanh thu cao nhất là 0h (45.019 rupee, 53 chuyến), nhưng do có nhiều chuyến chứ không phải cước cao.`,`Kết luận: cước phụ thuộc quãng đường, không phụ thuộc giờ.`],code:`h = done.groupby('hour')['fare'].agg(['sum', 'mean', 'count'])
print('tương quan giờ - fare (từng chuyến):', round(done['hour'].corr(done['fare']), 3))
print('tương quan giờ - tổng doanh thu theo giờ:', round(h.reset_index()['hour'].corr(h['sum']), 3))
fig, ax = plt.subplots(1, 2, figsize=(14, 4))
h['sum'].plot(marker='o', ax=ax[0], title='Tổng doanh thu theo giờ'); h['mean'].plot(marker='o', ax=ax[1], title='Fare trung bình theo giờ')
print(h.round(0).sort_values('sum', ascending=False).head(4).to_string())`,lotus:`Như hỏi «đặt lúc nào thì hoá đơn cao hơn?»: không, hoá đơn tuỳ dịch vụ khách chọn.`,trap:`Nhìn đường doanh thu lên xuống rồi nói «giờ ảnh hưởng cước», trong khi đó chỉ là số chuyến.`,read:[`Hai số tương quan đầu: gần 0 nghĩa là gần như không có quan hệ (thang −1 đến 1).`,`Biểu đồ trái là tổng doanh thu theo giờ, phải là cước trung bình theo giờ: so hai hình dạng.`,`Bảng cuối là 4 giờ có doanh thu cao nhất kèm cước trung bình và số chuyến.`],remark:`Tương quan giờ – cước là −0,01 nên giờ không ảnh hưởng cước. Giờ 0h có doanh thu cao nhất (45.019) chủ yếu vì có 53 chuyến, không vì cước cao.`,howRemark:[`Báo hệ số tương quan và nói nó mạnh hay yếu.`,`Tách hai thứ dễ nhầm: doanh thu theo giờ (số chuyến) và cước mỗi chuyến.`,`Kết luận về cách định giá.`]},en:{think:`Check whether trip hour relates to the fare.`,steps:[`Per-ride hour–fare correlation: −0.01, meaning none.`,`Total revenue and mean fare by hour to see the shape.`,`Top revenue hour is 00h (45,019 rupees, 53 rides): driven by volume, not price.`,`Conclusion: fare depends on distance, not on hour.`],code:`h = done.groupby('hour')['fare'].agg(['sum', 'mean', 'count'])
print('tương quan giờ - fare (từng chuyến):', round(done['hour'].corr(done['fare']), 3))
print('tương quan giờ - tổng doanh thu theo giờ:', round(h.reset_index()['hour'].corr(h['sum']), 3))
fig, ax = plt.subplots(1, 2, figsize=(14, 4))
h['sum'].plot(marker='o', ax=ax[0], title='Tổng doanh thu theo giờ'); h['mean'].plot(marker='o', ax=ax[1], title='Fare trung bình theo giờ')
print(h.round(0).sort_values('sum', ascending=False).head(4).to_string())`,lotus:`Like asking “does booking time change the bill?”: no, the bill depends on the service chosen.`,trap:`Reading ups and downs of the revenue line as “hour affects fare” when it is just ride count.`,read:[`The first correlation numbers: near 0 means almost no relationship (scale −1 to 1).`,`Left chart is total revenue by hour, right is mean fare by hour: compare the shapes.`,`The last table shows the 4 top-revenue hours with mean fare and ride count.`],remark:`Hour–fare correlation is −0.01, so hour does not affect fare. 00h has the top revenue (45,019) mainly because of 53 rides, not high fares.`,howRemark:[`Quote the correlation and say if it is strong or weak.`,`Separate two easily confused things: revenue by hour (ride count) and fare per ride.`,`Conclude about pricing.`]}},"2.5":{vi:{think:`Xem khách trả bằng cách nào và có kiểu thanh toán nào vượt trội không.`,steps:[`Đếm chuyến theo hình thức thanh toán.`,`Chia %: thẻ tín dụng 26,7%, UPI 24,7%, thẻ ghi nợ 24,7%, tiền mặt 23,9%.`,`Biểu đồ cột chồng theo khung giờ để xem có giờ nào chuộng tiền mặt hơn không.`,`Bốn cách trả gần như bằng nhau.`],code:`pm = done['payment'].value_counts()
print((pm / pm.sum() * 100).round(1).to_string())
fig, ax = plt.subplots(1, 2, figsize=(13, 4))
pm.plot(kind='bar', ax=ax[0], title='Số chuyến theo hình thức thanh toán')
done.pivot_table(index='period', columns='payment', values='tripid', aggfunc='count', observed=True).plot(kind='bar', stacked=True, ax=ax[1], title='Hình thức thanh toán theo khung giờ')
plt.tight_layout()`,lotus:`Như thống kê khách Lotus Spa trả tiền mặt, chuyển khoản hay quẹt thẻ: ở đây chia đều bốn phần.`,trap:`Nói «thẻ tín dụng phổ biến nhất» mà không nói chênh chỉ 3 điểm phần trăm.`,read:[`Danh sách %: bốn hình thức cộng lại 100%.`,`Cột trái: số chuyến mỗi hình thức; so độ cao các cột.`,`Cột chồng phải: mỗi cột là một khung giờ, các màu là cách trả; xem tỷ lệ màu có đổi theo khung không.`],remark:`Thẻ tín dụng 26,7%, UPI và thẻ ghi nợ 24,7%, tiền mặt 23,9%: chênh chỉ ~3 điểm, không có cách trả nào áp đảo, và tỷ lệ gần như giống nhau ở mọi khung giờ.`,howRemark:[`Nêu hình thức đứng đầu và cuối kèm %.`,`Đo chênh bằng điểm phần trăm.`,`Kiểm tra theo khung giờ xem có khác không.`,`Kết luận cho khuyến mãi thanh toán.`]},en:{think:`See how customers pay and whether any method dominates.`,steps:[`Count rides per payment method.`,`Percentages: credit card 26.7%, UPI 24.7%, debit card 24.7%, cash 23.9%.`,`Stacked bars by time period to see if any slot favours cash.`,`All four methods are almost equal.`],code:`pm = done['payment'].value_counts()
print((pm / pm.sum() * 100).round(1).to_string())
fig, ax = plt.subplots(1, 2, figsize=(13, 4))
pm.plot(kind='bar', ax=ax[0], title='Số chuyến theo hình thức thanh toán')
done.pivot_table(index='period', columns='payment', values='tripid', aggfunc='count', observed=True).plot(kind='bar', stacked=True, ax=ax[1], title='Hình thức thanh toán theo khung giờ')
plt.tight_layout()`,lotus:`Like counting Lotus Spa customers who pay cash, transfer or card: four equal quarters.`,trap:`Saying “credit card is most popular” without noting the gap is only 3 points.`,read:[`The % list: four methods sum to 100%.`,`Left bars: rides per method; compare heights.`,`Right stacked bars: each bar is a period, colours are methods; see if colour proportions change by period.`],remark:`Credit card 26.7%, UPI and debit card 24.7%, cash 23.9%: only ~3 points apart, no method dominates, and the mix is similar in every period.`,howRemark:[`Name the top and bottom method with %.`,`Measure the gap in percentage points.`,`Check by period whether it differs.`,`Conclude for payment promotions.`]}},"2.6.1":{vi:{think:`Tìm khu có nhiều yêu cầu chuyến nhất. Dùng Trip_Details (mọi yêu cầu), không chỉ chuyến hoàn thành.`,steps:[`Đếm yêu cầu theo loc_from, nối tên khu.`,`Sắp giảm dần, vẽ cột ngang 10 khu đầu.`,`Top: Mahadevapura 75, Ramanagaram 74, Gandhi Nagar 71, Yeshwantpur 69.`],code:`z = td.groupby('loc_from').size().rename('requests').reset_index().merge(asm.rename(columns={'ID': 'loc_from'}), on='loc_from').sort_values('requests', ascending=False)
z.head(10).set_index('Assembly')['requests'].iloc[::-1].plot(kind='barh', title='10 khu có nhiều yêu cầu chuyến nhất')
print(z.head(8)[['Assembly', 'requests']].to_string(index=False))`,lotus:`Như chi nhánh nhận nhiều lượt đặt lịch nhất, kể cả lịch sau đó bị huỷ.`,trap:`Đếm trên bảng Trips: bạn sẽ xếp hạng theo chuyến hoàn thành, là một câu hỏi khác (xem 2.8).`,read:[`Biểu đồ ngang: mỗi thanh là một khu, thanh dài hơn là nhiều yêu cầu hơn; khu trên cùng là cao nhất.`,`Bảng 8 khu đầu cho số chính xác.`,`Nhìn khoảng cách giữa khu thứ nhất và thứ tám để biết top có nổi bật không.`],remark:`Mahadevapura (75), Ramanagaram (74), Gandhi Nagar (71) và Yeshwantpur (69) dẫn đầu; khoảng cách từ khu 1 đến khu 8 chỉ khoảng 10 yêu cầu nên nhu cầu phân tán, không dồn vào một khu.`,howRemark:[`Nêu tên 3–5 khu đầu kèm số.`,`Nhận xét khoảng cách giữa các khu.`,`Nhắc đây là số yêu cầu, chưa phải chuyến hoàn thành.`,`Nhớ bỏ «Other Assemblies» khi nói tên khu.`]},en:{think:`Find the zones with the most trip requests. Use Trip_Details (all requests), not just completed.`,steps:[`Count requests by loc_from and join the zone names.`,`Sort descending, horizontal bar of the top 10.`,`Top: Mahadevapura 75, Ramanagaram 74, Gandhi Nagar 71, Yeshwantpur 69.`],code:`z = td.groupby('loc_from').size().rename('requests').reset_index().merge(asm.rename(columns={'ID': 'loc_from'}), on='loc_from').sort_values('requests', ascending=False)
z.head(10).set_index('Assembly')['requests'].iloc[::-1].plot(kind='barh', title='10 khu có nhiều yêu cầu chuyến nhất')
print(z.head(8)[['Assembly', 'requests']].to_string(index=False))`,lotus:`Like the branch with the most booking requests, including ones later cancelled.`,trap:`Counting on the Trips table: you would rank by completed rides, a different question (see 2.8).`,read:[`Horizontal bars: each bar is a zone, longer = more requests; the top bar is the highest.`,`The 8-zone table gives exact numbers.`,`Look at the gap between 1st and 8th to see if the top stands out.`],remark:`Mahadevapura (75), Ramanagaram (74), Gandhi Nagar (71) and Yeshwantpur (69) lead; the gap from 1st to 8th is only about 10 requests, so demand is spread out rather than concentrated.`,howRemark:[`Name the top 3–5 zones with numbers.`,`Comment on the gaps between zones.`,`Remind that this counts requests, not completed rides.`,`Remember to exclude “Other Assemblies” when naming zones.`]}},"2.6.2":{vi:{think:`Tìm khu đón mang lại doanh thu cao nhất.`,steps:[`Trên các chuyến hoàn thành, cộng fare theo khu đón.`,`Sắp giảm dần: Bangalore South 30.295, Yeshwantpur 29.035, Hebbal 28.097.`,`Thứ hạng khác với 2.6.1: khu nhiều yêu cầu chưa chắc nhiều tiền, vì cước trung bình mỗi khu khác nhau (Bangalore South 918, Ramanagaram chỉ 672).`],code:`r = done.groupby('pickup_zone')['fare'].agg(['sum', 'count', 'mean']).sort_values('sum', ascending=False)
r.head(10)['sum'].iloc[::-1].plot(kind='barh', title='10 khu có doanh thu cao nhất')
print(r.head(8).round(0).to_string())`,lotus:`Chi nhánh đông khách nhất chưa chắc thu nhiều nhất, nếu khách ở đó làm dịch vụ rẻ.`,trap:`Gán «đông = nhiều tiền».`,read:[`Thanh dài là doanh thu cao; bảng bên dưới có tổng (sum), số chuyến (count) và cước trung bình (mean).`,`So thứ hạng với biểu đồ 2.6.1: khu nào lên hoặc xuống.`,`Cột mean cho biết doanh thu cao vì đông chuyến hay vì cước cao.`],remark:`Bangalore South dẫn đầu với 30.295 (33 chuyến, cước trung bình 918); Ramanagaram có nhiều chuyến hơn (39) nhưng cước trung bình chỉ 672 nên doanh thu thấp hơn. Khu đông chưa chắc là khu nhiều tiền.`,howRemark:[`Nêu khu doanh thu cao nhất kèm số.`,`Dùng count và mean để giải thích nguồn doanh thu.`,`So với thứ hạng theo số yêu cầu và chỉ ra chỗ khác.`,`Gợi ý hành động theo từng loại khu.`]},en:{think:`Find the pickup zones with the highest revenue.`,steps:[`On completed rides, sum fare by pickup zone.`,`Sorted: Bangalore South 30,295, Yeshwantpur 29,035, Hebbal 28,097.`,`The ranking differs from 2.6.1: busy is not always rich, since mean fare varies (Bangalore South 918, Ramanagaram just 672).`],code:`r = done.groupby('pickup_zone')['fare'].agg(['sum', 'count', 'mean']).sort_values('sum', ascending=False)
r.head(10)['sum'].iloc[::-1].plot(kind='barh', title='10 khu có doanh thu cao nhất')
print(r.head(8).round(0).to_string())`,lotus:`The busiest branch need not earn the most if its customers pick cheaper services.`,trap:`Assuming busy = high revenue.`,read:[`Long bar = high revenue; the table gives total (sum), rides (count) and mean fare (mean).`,`Compare the order with chart 2.6.1: which zones moved up or down.`,`The mean column shows whether revenue comes from many rides or high fares.`],remark:`Bangalore South leads with 30,295 (33 rides, mean fare 918); Ramanagaram has more rides (39) but a mean of only 672, hence lower revenue. A busy zone is not necessarily a rich one.`,howRemark:[`Name the top revenue zone with its figure.`,`Use count and mean to explain the source of revenue.`,`Compare with the request ranking and point out differences.`,`Suggest actions per type of zone.`]}},"2.7":{vi:{think:`So sánh các khung giờ giữa các khu đón.`,steps:[`Bảng chéo khu × khung giờ, đếm chuyến hoàn thành.`,`Lấy 12 khu nhiều chuyến nhất, vẽ heatmap.`,`Ví dụ: Ramanagaram đông nhất buổi tối (14), Bangalore South đông nhất buổi chiều (13), Dasarahalli đông nhất buổi sáng (11).`,`Mỗi khu có khung giờ mạnh riêng, nên lịch tài xế nên chia theo khu.`],code:`pv = done.pivot_table(index='pickup_zone', columns='period', values='tripid', aggfunc='count', observed=True).fillna(0)
top = pv.sum(axis=1).sort_values(ascending=False).head(12).index
sns.heatmap(pv.loc[top], annot=True, fmt='.0f', cmap='YlOrRd')
print(pv.loc[top[:6]].astype(int).to_string())`,lotus:`Như xem chi nhánh nào đông vào buổi nào để xếp nhân viên.`,trap:`Mỗi ô chỉ có vài chuyến, nên chênh 1–2 chuyến chỉ là ngẫu nhiên.`,read:[`Mỗi hàng là một khu, mỗi cột là một khung giờ, mỗi ô là số chuyến; màu đậm là nhiều.`,`Đọc theo hàng để biết khung mạnh của một khu, theo cột để biết khu nào mạnh vào khung đó.`,`Bảng chữ liệt kê 6 khu đầu để bạn kiểm số trong ô.`],remark:`Mỗi khu có khung mạnh riêng: Ramanagaram buổi tối (14), Bangalore South buổi chiều (13), Dasarahalli buổi sáng (11). Nhưng mỗi ô chỉ vài chuyến nên chỉ nên kết luận ở chỗ chênh rõ.`,howRemark:[`Chọn 2–3 khu và nêu khung mạnh nhất của từng khu kèm số.`,`Nhắc cỡ mẫu nhỏ mỗi ô.`,`Đề xuất xếp tài xế theo khu và khung giờ.`]},en:{think:`Compare time periods across pickup zones.`,steps:[`Cross-tab zone × period of completed rides.`,`Take the 12 busiest zones and draw a heatmap.`,`E.g. Ramanagaram peaks in the evening (14), Bangalore South in the afternoon (13), Dasarahalli in the morning (11).`,`Each zone has its own strong slot, so schedule drivers per zone.`],code:`pv = done.pivot_table(index='pickup_zone', columns='period', values='tripid', aggfunc='count', observed=True).fillna(0)
top = pv.sum(axis=1).sort_values(ascending=False).head(12).index
sns.heatmap(pv.loc[top], annot=True, fmt='.0f', cmap='YlOrRd')
print(pv.loc[top[:6]].astype(int).to_string())`,lotus:`Like seeing which branch is busy at which time to roster staff.`,trap:`Each cell holds only a few rides, so 1–2 differences are noise.`,read:[`Each row is a zone, each column a period, each cell a ride count; darker = more.`,`Read across a row for a zone's strong period, down a column for the zones strong in that period.`,`The text table lists 6 zones so you can check the cell numbers.`],remark:`Each zone has its own strong period: Ramanagaram in the evening (14), Bangalore South in the afternoon (13), Dasarahalli in the morning (11). But each cell holds only a few rides, so conclude only where the gap is clear.`,howRemark:[`Pick 2–3 zones and name each one's strongest period with numbers.`,`Note the small sample per cell.`,`Suggest rostering drivers by zone and period.`]}},"2.8":{vi:{think:`Chọn 5 khu có nhiều chuyến hoàn thành nhất rồi tìm lý do.`,steps:[`Đếm chuyến hoàn thành theo khu, lấy 5 khu đầu: Ramanagaram 39, Yeshwantpur 36, Dasarahalli 33, Bangalore South 33, Gandhi Nagar 32.`,`Bảng so sánh doanh thu, quãng đường và cước trung bình.`,`Tính % yêu cầu của khu được hoàn thành: Bangalore South 57,9%, Ramanagaram 52,7%, Gandhi Nagar chỉ 45,1%.`,`Lý do: 4 trong 5 khu top vừa có nhiều yêu cầu vừa hoàn thành cao hơn mức chung 45,5% (Gandhi Nagar chỉ nhỉnh vì có rất nhiều yêu cầu).`],code:`t5 = done.groupby('pickup_zone').agg(trips=('tripid', 'count'), revenue=('fare', 'sum'), avg_distance=('distance', 'mean'), avg_fare=('fare', 'mean')).sort_values('trips', ascending=False).head(5)
print(t5.round(1).to_string())
t5['trips'].plot(kind='bar', title='5 khu có nhiều chuyến hoàn thành nhất')
# so sánh với tỷ lệ hoàn thành của chính khu đó
rate = td.groupby('loc_from').agg(req=('tripid', 'count'), done=('end_ride', 'sum')).merge(asm.rename(columns={'ID': 'loc_from'}), on='loc_from').set_index('Assembly')
print((rate.loc[t5.index, 'done'] / rate.loc[t5.index, 'req'] * 100).round(1).rename('% yêu cầu hoàn thành').to_string())`,lotus:`Như chi nhánh có nhiều lượt làm xong nhất vì vừa đông đặt lịch, vừa ít bị huỷ.`,trap:`Giải thích bằng «khu đó đông dân» khi dữ liệu không có dân số.`,read:[`Bảng đầu: 5 khu top với chuyến, doanh thu, quãng đường và cước trung bình.`,`Bảng thứ hai: % yêu cầu của khu được hoàn thành, so với mức chung 45,5%.`,`Biểu đồ cột: độ cao 5 khu.`],remark:`Ramanagaram dẫn đầu (39 chuyến), tiếp theo Yeshwantpur (36). Bốn trong năm khu hoàn thành trên mức chung 45,5% (Bangalore South 57,9%); Gandhi Nagar chỉ 45,1% nên nằm trong top nhờ lượng yêu cầu lớn.`,howRemark:[`Nêu top 5 kèm số chuyến.`,`Tìm yếu tố giải thích trong dữ liệu có sẵn (tỷ lệ hoàn thành, cước, quãng đường).`,`Nhắc điều dữ liệu không nói được (dân số, đối thủ).`,`Gợi ý học từ khu hoàn thành tốt.`]},en:{think:`Pick the top 5 zones by completed rides and find out why.`,steps:[`Count completed rides by zone, top 5: Ramanagaram 39, Yeshwantpur 36, Dasarahalli 33, Bangalore South 33, Gandhi Nagar 32.`,`Comparison table of revenue, distance and mean fare.`,`Completion rate per zone: Bangalore South 57.9%, Ramanagaram 52.7%, Gandhi Nagar only 45.1%.`,`Reason: 4 of the 5 top zones have many requests and complete above the 45.5% average (Gandhi Nagar is there on sheer request volume).`],code:`t5 = done.groupby('pickup_zone').agg(trips=('tripid', 'count'), revenue=('fare', 'sum'), avg_distance=('distance', 'mean'), avg_fare=('fare', 'mean')).sort_values('trips', ascending=False).head(5)
print(t5.round(1).to_string())
t5['trips'].plot(kind='bar', title='5 khu có nhiều chuyến hoàn thành nhất')
# so sánh với tỷ lệ hoàn thành của chính khu đó
rate = td.groupby('loc_from').agg(req=('tripid', 'count'), done=('end_ride', 'sum')).merge(asm.rename(columns={'ID': 'loc_from'}), on='loc_from').set_index('Assembly')
print((rate.loc[t5.index, 'done'] / rate.loc[t5.index, 'req'] * 100).round(1).rename('% yêu cầu hoàn thành').to_string())`,lotus:`Like the branch with the most finished sessions because many bookings and few cancellations.`,trap:`Explaining with “it is a populous area” when the data has no population.`,read:[`First table: 5 top zones with rides, revenue, distance and mean fare.`,`Second table: share of the zone's requests completed, vs the overall 45.5%.`,`Bar chart: heights of the 5 zones.`],remark:`Ramanagaram leads (39 rides), then Yeshwantpur (36). Four of five zones complete above the 45.5% average (Bangalore South 57.9%); Gandhi Nagar is only 45.1% and ranks on sheer request volume.`,howRemark:[`Name the top 5 with ride counts.`,`Find explanations in available data (completion rate, fare, distance).`,`State what the data cannot say (population, competition).`,`Suggest learning from the best-completing zone.`]}},"2.9.1":{vi:{think:`Tính % yêu cầu bị khách huỷ, bị tài xế huỷ và được hoàn thành.`,steps:[`Mẫu số là toàn bộ 2.161 yêu cầu.`,`Khách huỷ 48,2%, tài xế huỷ 47,2%, hoàn thành 45,5%.`,`Ba số cộng hơn 100% vì các cờ này chồng nhau (một yêu cầu có thể bị cả hai huỷ ở các bước khác nhau), nên đừng đặt chung một biểu đồ tròn.`,`Nghĩa là gần một nửa yêu cầu mất đi vì mỗi bên.`],code:`n = len(td)
cust = (td.customer_not_cancelled == 0).sum(); drv = (td.driver_not_cancelled == 0).sum(); ok = td.end_ride.sum()
out = pd.Series({'Khách huỷ': cust / n * 100, 'Tài xế huỷ': drv / n * 100, 'Hoàn thành': ok / n * 100}).round(1)
print(out.to_string(), '\\n(tổng yêu cầu:', n, ')')
out.plot(kind='bar', color=['#b5543c', '#d99a3e', '#2f6f5e'], title='% yêu cầu: huỷ và hoàn thành')`,lotus:`Như tỷ lệ khách tự huỷ lịch, spa huỷ lịch và lượt làm xong.`,trap:`Vẽ biểu đồ tròn ba phần cho tổng 100%: các cờ chồng nhau nên sai.`,read:[`Ba dòng %: mẫu số là mọi yêu cầu (2.161).`,`Cộng ba số được hơn 100%, đó là dấu hiệu các nhóm chồng nhau.`,`Biểu đồ cột có 3 cột; đừng đọc như phần của một cái bánh.`],remark:`Khách huỷ 48,2%, tài xế huỷ 47,2%, hoàn thành 45,5%. Gần một nửa yêu cầu bị mỗi bên huỷ nên huỷ chuyến là chỗ rò rỉ lớn nhất của dịch vụ.`,howRemark:[`Nêu từng tỷ lệ kèm mẫu số.`,`Giải thích vì sao tổng vượt 100% (cờ chồng nhau).`,`Nói tác động: mất bao nhiêu yêu cầu.`,`Đề xuất giảm huỷ từ cả hai phía.`]},en:{think:`Compute the % of requests cancelled by customer, by driver and completed.`,steps:[`The denominator is all 2,161 requests.`,`Customer cancelled 48.2%, driver cancelled 47.2%, completed 45.5%.`,`They add to more than 100% because the flags overlap, so do not put them in one pie.`,`Roughly half of requests are lost to each side.`],code:`n = len(td)
cust = (td.customer_not_cancelled == 0).sum(); drv = (td.driver_not_cancelled == 0).sum(); ok = td.end_ride.sum()
out = pd.Series({'Khách huỷ': cust / n * 100, 'Tài xế huỷ': drv / n * 100, 'Hoàn thành': ok / n * 100}).round(1)
print(out.to_string(), '\\n(tổng yêu cầu:', n, ')')
out.plot(kind='bar', color=['#b5543c', '#d99a3e', '#2f6f5e'], title='% yêu cầu: huỷ và hoàn thành')`,lotus:`Like the share of bookings cancelled by customers, by the spa, and sessions completed.`,trap:`Drawing a three-slice pie that must sum to 100%: the flags overlap.`,read:[`Three % lines: the denominator is all requests (2,161).`,`They sum to more than 100%, a sign the groups overlap.`,`The bar chart has 3 bars; do not read it as slices of one pie.`],remark:`Customers cancelled 48.2%, drivers 47.2%, completed 45.5%. Nearly half of requests are cancelled by each side, so cancellations are the service's biggest leak.`,howRemark:[`State each rate with its denominator.`,`Explain why the total exceeds 100% (overlapping flags).`,`State the impact: how many requests are lost.`,`Propose reducing cancellations on both sides.`]}},"2.9.2":{vi:{think:`Trong số người đã hỏi báo giá, bao nhiêu % hoàn thành chuyến, và biến động ra sao.`,steps:[`Lọc searches_for_quotes = 1: 1.455 yêu cầu, 983 hoàn thành, tức 67,6%.`,`Giờ chỉ có ở bảng Trips (chuyến hoàn thành), nên chuyến huỷ không có giờ để chia khung. Vì vậy ta chia theo khu đón.`,`Tỷ lệ theo khu dao động từ 47,5% (Anekal) đến 85,7% (Yeshwantpur).`,`Khi làm trên Tableau/Power BI, hãy ghi rõ giới hạn dữ liệu này trong báo cáo.`],code:`q = td[td.searches_for_quotes == 1]
print('Tìm báo giá:', len(q), '| hoàn thành:', int(q.end_ride.sum()), '|', round(q.end_ride.mean() * 100, 1), '%')
print('Lưu ý: giờ chỉ có ở bảng Trips (chuyến hoàn thành), nên chuyến huỷ không có giờ để chia khung giờ.')
# thay vào đó chia theo khu xuất phát (có đủ cho mọi yêu cầu)
zr = (q.groupby('loc_from')['end_ride'].mean() * 100).rename('pct').reset_index().merge(asm.rename(columns={'ID': 'loc_from'}), on='loc_from').set_index('Assembly')['pct'].sort_values()
print(zr.round(1).tail(3).to_string(), '\\n...', '\\n', zr.round(1).head(3).to_string())
fig, ax = plt.subplots(1, 2, figsize=(13, 4))
pd.Series({'Tìm báo giá': len(q), 'Hoàn thành': int(q.end_ride.sum())}).plot(kind='bar', ax=ax[0], title='Tìm báo giá -> hoàn thành')
zr.plot(kind='hist', bins=10, ax=ax[1], title='% hoàn thành sau khi tìm báo giá, theo khu')
plt.tight_layout()`,lotus:`Như trong số khách đã hỏi giá liệu trình, bao nhiêu người cuối cùng làm.`,trap:`Chia theo khung giờ rồi bỏ qua việc chuyến huỷ không có giờ, ra tỷ lệ 100% giả.`,read:[`Dòng đầu: 1.455 người hỏi báo giá, 983 hoàn thành, 67,6%.`,`Biểu đồ trái: hai cột, cột «hoàn thành» thấp hơn cột «tìm báo giá».`,`Biểu đồ phải: mỗi cột là số khu có tỷ lệ hoàn thành trong khoảng đó; xem hình dạng tập trung ở đâu.`,`Dòng cuối bảng cho khu thấp nhất và cao nhất.`],remark:`Trong số người hỏi báo giá, 67,6% hoàn thành. Tỷ lệ giữa các khu rộng, từ 47,5% (Anekal) đến 85,7% (Yeshwantpur), phần lớn quanh 65–75%. Chuyến huỷ không có giờ nên không chia theo khung giờ được.`,howRemark:[`Nêu tỷ lệ chung kèm hai số tạo ra nó.`,`Nêu khu thấp nhất và cao nhất.`,`Nói rõ giới hạn dữ liệu (không có giờ cho chuyến huỷ).`,`Gợi ý tìm hiểu nguyên nhân ở khu thấp.`]},en:{think:`Of people who asked for quotes, what % completed a ride, and how does it vary.`,steps:[`Filter searches_for_quotes = 1: 1,455 requests, 983 completed, i.e. 67.6%.`,`Hour exists only in Trips (completed rides), so cancelled ones have no time slot. Hence we split by pickup zone.`,`The rate by zone ranges from 47.5% (Anekal) to 85.7% (Yeshwantpur).`,`In Tableau/Power BI, state this data limit in the report.`],code:`q = td[td.searches_for_quotes == 1]
print('Tìm báo giá:', len(q), '| hoàn thành:', int(q.end_ride.sum()), '|', round(q.end_ride.mean() * 100, 1), '%')
print('Lưu ý: giờ chỉ có ở bảng Trips (chuyến hoàn thành), nên chuyến huỷ không có giờ để chia khung giờ.')
# thay vào đó chia theo khu xuất phát (có đủ cho mọi yêu cầu)
zr = (q.groupby('loc_from')['end_ride'].mean() * 100).rename('pct').reset_index().merge(asm.rename(columns={'ID': 'loc_from'}), on='loc_from').set_index('Assembly')['pct'].sort_values()
print(zr.round(1).tail(3).to_string(), '\\n...', '\\n', zr.round(1).head(3).to_string())
fig, ax = plt.subplots(1, 2, figsize=(13, 4))
pd.Series({'Tìm báo giá': len(q), 'Hoàn thành': int(q.end_ride.sum())}).plot(kind='bar', ax=ax[0], title='Tìm báo giá -> hoàn thành')
zr.plot(kind='hist', bins=10, ax=ax[1], title='% hoàn thành sau khi tìm báo giá, theo khu')
plt.tight_layout()`,lotus:`Like how many people who asked the price of a treatment finally booked it.`,trap:`Splitting by hour while ignoring that cancelled rides have no hour: a fake 100%.`,read:[`First line: 1,455 asked for quotes, 983 completed, 67.6%.`,`Left chart: two bars, “completed” lower than “asked for quote”.`,`Right chart: each bar counts zones with a completion rate in that range; see where it clusters.`,`The last table lines give the lowest and highest zones.`],remark:`Among those who asked for quotes, 67.6% completed. Rates vary widely by zone, from 47.5% (Anekal) to 85.7% (Yeshwantpur), mostly around 65–75%. Cancelled rides have no hour, so a split by hour is impossible.`,howRemark:[`State the overall rate with the two numbers behind it.`,`Name the lowest and highest zones.`,`State the data limit (no hour for cancelled rides).`,`Suggest investigating the low zones.`]}},"2.10":{vi:{think:`Tạo một tham số để lọc, ví dụ chọn một khu và xem riêng khu đó.`,steps:[`Đặt tham số khu = Hebbal (đổi được).`,`Lọc chuyến hoàn thành theo tham số.`,`Hebbal có 31 chuyến, doanh thu 28.097, cước trung bình 906, cao hơn mức chung 764.`,`Theo khung giờ: nhiều nhất buổi chiều (11 chuyến, 9.433).`],code:`zone_pick = 'Hebbal'   # tham số: chọn khu để lọc
sub = done[done.pickup_zone == zone_pick]
print(f'Khu {zone_pick}:', len(sub), 'chuyến hoàn thành, doanh thu', int(sub.fare.sum()), ', fare trung bình', round(sub.fare.mean(), 0))
sub.groupby('period', observed=True)['fare'].agg(['count', 'sum']).plot(kind='bar', title=f'{zone_pick}: chuyến và doanh thu theo khung giờ')
print(sub.groupby('period', observed=True)['fare'].agg(['count', 'sum']).to_string())`,lotus:`Như một công tắc «chọn chi nhánh» trên báo cáo của chị Lan, chọn Quận 3 thì cả bảng đổi theo.`,trap:`Lọc xong mà quên ghi lý do chọn khu đó (đề bài yêu cầu giải thích).`,read:[`Dòng đầu: số chuyến, doanh thu và cước trung bình của khu được chọn.`,`Biểu đồ: cột theo khung giờ cho khu đó.`,`Đổi tên khu trong code rồi chạy lại để xem khu khác.`],remark:`Hebbal có 31 chuyến, doanh thu 28.097 và cước trung bình 906, cao hơn mức chung 764; đông nhất buổi chiều (11 chuyến, 9.433). Chọn Hebbal vì nằm trong top doanh thu của 2.6.2.`,howRemark:[`Giải thích vì sao chọn khu (đề bài yêu cầu).`,`So các số của khu với mức chung.`,`Chỉ ra khung giờ mạnh của khu.`,`Nói lọc này giúp quyết định gì.`]},en:{think:`Create a parameter and use it as a filter, e.g. pick a zone and view only that zone.`,steps:[`Set zone = Hebbal (changeable).`,`Filter completed rides by the parameter.`,`Hebbal: 31 rides, revenue 28,097, mean fare 906, higher than the overall 764.`,`By period: afternoon is highest (11 rides, 9,433).`],code:`zone_pick = 'Hebbal'   # tham số: chọn khu để lọc
sub = done[done.pickup_zone == zone_pick]
print(f'Khu {zone_pick}:', len(sub), 'chuyến hoàn thành, doanh thu', int(sub.fare.sum()), ', fare trung bình', round(sub.fare.mean(), 0))
sub.groupby('period', observed=True)['fare'].agg(['count', 'sum']).plot(kind='bar', title=f'{zone_pick}: chuyến và doanh thu theo khung giờ')
print(sub.groupby('period', observed=True)['fare'].agg(['count', 'sum']).to_string())`,lotus:`Like a “choose branch” switch on Lan's report: pick District 3 and the whole table follows.`,trap:`Filtering and forgetting to explain why that zone was chosen (the task asks for it).`,read:[`First line: rides, revenue and mean fare of the chosen zone.`,`Chart: bars by period for that zone.`,`Change the zone name in code and rerun to see another zone.`],remark:`Hebbal has 31 rides, revenue 28,097 and mean fare 906, above the overall 764; busiest in the afternoon (11 rides, 9,433). Hebbal was chosen because it is in the top revenue of 2.6.2.`,howRemark:[`Explain why you chose the zone (the task asks).`,`Compare the zone's numbers with the overall.`,`Point out the zone's strong period.`,`Say what decision this filter supports.`]}},"3.1":{vi:{think:`Viết khuyến nghị vận hành dựa trên số thật vừa tìm được.`,steps:[`Phễu: tìm kiếm 100% → có ước tính 81,4% → hỏi báo giá 67,3% → có báo giá 59,1% → nhập OTP 45,5% → hoàn thành 45,5%.`,`Mất lớn nhất ở hai chỗ: sau báo giá (59,1% → 45,5%) và huỷ từ cả hai phía (~48%).`,`Khuyến nghị: giảm huỷ (phạt/thưởng tài xế, rút ngắn thời gian chờ); điều tài xế theo khu và khung giờ mạnh (2.7); không tăng giá theo giờ vì cước không phụ thuộc giờ (2.4).`],code:`funnel = td[['searches', 'searches_got_estimate', 'searches_for_quotes', 'searches_got_quotes', 'otp_entered', 'end_ride']].sum()
print((funnel / funnel['searches'] * 100).round(1).to_string())
print('rơi nhiều nhất ở bước: tìm báo giá -> có báo giá, huỷ bởi khách', round((td.customer_not_cancelled == 0).mean() * 100, 1), '%, huỷ bởi tài xế', round((td.driver_not_cancelled == 0).mean() * 100, 1), '%')
(funnel / funnel['searches'] * 100).plot(kind='bar', title='Phễu chuyển đổi (% so với số tìm kiếm)')`,lotus:`Như chị Lan đọc phễu từ khách hỏi đến khách làm xong và chọn chỗ rò rỉ nhiều nhất để sửa trước.`,trap:`Khuyến nghị chung chung không gắn số nào.`,read:[`Danh sách %: mỗi bước so với 100% là số tìm kiếm; đọc từ trên xuống.`,`Tìm bước tụt mạnh nhất: 59,1% → 45,5% (sau khi có báo giá).`,`Biểu đồ cột là cùng dữ liệu theo hình phễu.`],remark:`Phễu mất nhiều nhất sau bước có báo giá (59,1% xuống 45,5%) và vì huỷ ở cả hai phía (~48%). Khuyến nghị: giảm huỷ bằng ưu đãi và phạt tài xế, rút ngắn thời gian chờ; xếp tài xế theo khu và khung giờ mạnh; không tăng giá theo giờ vì cước không phụ thuộc giờ.`,howRemark:[`Chỉ ra bước tụt mạnh nhất trong phễu kèm số.`,`Liên kết với phát hiện khác (2.4, 2.7, 2.9.1).`,`Mỗi khuyến nghị phải gắn với một con số.`,`Sắp khuyến nghị theo tác động.`]},en:{think:`Write operational recommendations from the real numbers found.`,steps:[`Funnel: searches 100% → estimate 81.4% → quote requested 67.3% → got quote 59.1% → OTP 45.5% → completed 45.5%.`,`Biggest losses: after the quote (59.1% → 45.5%) and cancellations from both sides (~48%).`,`Recommend: cut cancellations (driver incentives/penalties, shorter waits); allocate drivers by zone and strong period (2.7); do not use hourly surge since fare does not depend on hour (2.4).`],code:`funnel = td[['searches', 'searches_got_estimate', 'searches_for_quotes', 'searches_got_quotes', 'otp_entered', 'end_ride']].sum()
print((funnel / funnel['searches'] * 100).round(1).to_string())
print('rơi nhiều nhất ở bước: tìm báo giá -> có báo giá, huỷ bởi khách', round((td.customer_not_cancelled == 0).mean() * 100, 1), '%, huỷ bởi tài xế', round((td.driver_not_cancelled == 0).mean() * 100, 1), '%')
(funnel / funnel['searches'] * 100).plot(kind='bar', title='Phễu chuyển đổi (% so với số tìm kiếm)')`,lotus:`Like Lan reading the funnel from enquiry to completed session and fixing the biggest leak first.`,trap:`Generic advice not tied to any number.`,read:[`The % list: each step vs 100% = searches; read top to bottom.`,`Find the steepest drop: 59.1% → 45.5% (after the quote).`,`The bar chart is the same data as a funnel.`],remark:`The funnel loses most after the quote step (59.1% to 45.5%) and through two-sided cancellations (~48%). Recommend: cut cancellations with incentives and driver penalties, shorten waits; roster drivers by zone and strong period; no hourly surge since fare ignores hour.`,howRemark:[`Point to the steepest drop in the funnel with numbers.`,`Tie in other findings (2.4, 2.7, 2.9.1).`,`Every recommendation must hang on a number.`,`Order recommendations by impact.`]}},"3.2":{vi:{think:`Đề xuất marketing và chiến lược dựa trên khu, giờ và thanh toán.`,steps:[`5 khu đầu chiếm 18,7% doanh thu, 10 khu đầu 34,8%: doanh thu khá phân tán, không có khu nào quá lớn.`,`Giờ cao điểm 0h, 13h, 11h; thanh toán chia đều bốn kiểu, nên không cần khuyến mãi riêng cho một kiểu.`,`Gợi ý: khuyến mãi tập trung vào khu có tỷ lệ hoàn thành thấp (Gandhi Nagar, Anekal); thưởng tài xế ở các khu có doanh thu/chuyến cao như Bangalore South.`,`Nhớ kèm dashboard hỗ trợ như đề bài yêu cầu.`],code:`peak = done.groupby('hour').size().sort_values(ascending=False).head(3).index.tolist()
upi = (done.payment == 'upi').mean() * 100
print('Giờ cao điểm:', peak, '| UPI chiếm', round(upi, 1), '% chuyến')
share = done.groupby('pickup_zone')['fare'].sum().sort_values(ascending=False); share = share / share.sum() * 100
print('5 khu đầu chiếm', round(share.head(5).sum(), 1), '% doanh thu; 10 khu đầu', round(share.head(10).sum(), 1), '%')
share.head(10).iloc[::-1].plot(kind='barh', title='% doanh thu của 10 khu hàng đầu')`,lotus:`Như chọn chi nhánh có tỷ lệ khách bỏ lịch cao để chạy ưu đãi, thay vì giảm giá đại trà.`,trap:`Đề xuất giảm giá cho tất cả: dữ liệu cho thấy vấn đề ở huỷ chuyến chứ không ở giá.`,read:[`Dòng đầu: giờ cao điểm và tỷ lệ UPI.`,`Dòng hai: 5 khu đầu và 10 khu đầu chiếm bao nhiêu % doanh thu.`,`Biểu đồ: tỷ trọng doanh thu từng khu trong top 10.`],remark:`5 khu đầu chỉ chiếm 18,7% doanh thu, 10 khu đầu 34,8%: doanh thu phân tán. Đề xuất ưu đãi nhắm khu hoàn thành thấp (Gandhi Nagar, Anekal), thưởng tài xế ở khu cước cao như Bangalore South, không cần khuyến mãi riêng cho một cách thanh toán.`,howRemark:[`Dùng tỷ trọng để nói mức tập trung.`,`Đề xuất nhắm vào khu hoặc nhóm cụ thể thay vì đại trà.`,`Gắn đề xuất với số từ các mục trước.`,`Nhắc đính kèm dashboard hỗ trợ.`]},en:{think:`Suggest marketing and strategy improvements from zone, hour and payment findings.`,steps:[`Top 5 zones are 18.7% of revenue, top 10 are 34.8%: revenue is spread out, no dominant zone.`,`Peak hours 00h, 13h, 11h; payments split evenly, so no method-specific promo is needed.`,`Ideas: target promos at low-completion zones (Gandhi Nagar, Anekal); reward drivers in high-fare zones like Bangalore South.`,`Remember to attach supporting dashboards as the task asks.`],code:`peak = done.groupby('hour').size().sort_values(ascending=False).head(3).index.tolist()
upi = (done.payment == 'upi').mean() * 100
print('Giờ cao điểm:', peak, '| UPI chiếm', round(upi, 1), '% chuyến')
share = done.groupby('pickup_zone')['fare'].sum().sort_values(ascending=False); share = share / share.sum() * 100
print('5 khu đầu chiếm', round(share.head(5).sum(), 1), '% doanh thu; 10 khu đầu', round(share.head(10).sum(), 1), '%')
share.head(10).iloc[::-1].plot(kind='barh', title='% doanh thu của 10 khu hàng đầu')`,lotus:`Like running offers at branches with a high no-show rate instead of discounting everywhere.`,trap:`Proposing blanket discounts: the data says the problem is cancellations, not price.`,read:[`First line: peak hours and the UPI share.`,`Second line: what % of revenue the top 5 and top 10 zones hold.`,`Chart: revenue share of each top-10 zone.`],remark:`The top 5 zones hold only 18.7% of revenue and the top 10 hold 34.8%: revenue is dispersed. Target offers at low-completion zones (Gandhi Nagar, Anekal), reward drivers in high-fare zones like Bangalore South, no payment-specific promo needed.`,howRemark:[`Use shares to describe concentration.`,`Target specific zones or groups instead of blanket offers.`,`Tie each proposal to numbers from earlier tasks.`,`Remember to attach supporting dashboards.`]}}},results:{"1.1":{code:`import pandas as pd, numpy as np, matplotlib.pyplot as plt, seaborn as sns
x = pd.read_excel('/tmp/asg/all/4/Dataset and Starter Resources/nammayatri.xlsx', sheet_name=None)
td, tr, du, asm, pay = x['Trip_Details'], x['Trips'], x['Duration'], x['Assembly'], x['Payment']
for k, v in x.items(): print(f'{k:13s}', v.shape)
# nối: Trips (983 chuyến hoàn thành) <- Trip_Details theo tripid; mã giờ, mã thanh toán, mã khu
df = (td.merge(tr.drop(columns='loc_from'), on='tripid', how='left')
        .merge(du.rename(columns={'id': 'duration', 'duration': 'hour_slot'}), on='duration', how='left')
        .merge(pay.rename(columns={'id': 'faremethod', 'method': 'payment'}), on='faremethod', how='left')
        .merge(asm.rename(columns={'ID': 'loc_from', 'Assembly': 'pickup_zone'}), on='loc_from', how='left')
        .merge(asm.rename(columns={'ID': 'loc_to', 'Assembly': 'drop_zone'}), on='loc_to', how='left'))
print(df.shape)
print(df.loc[df['end_ride'] == 1, ['tripid', 'pickup_zone', 'drop_zone', 'payment', 'fare', 'distance', 'hour_slot']].head(5).to_string(index=False))`,text:`Duration      (24, 2)
Assembly      (37, 2)
Payment       (4, 2)
Trip_Details  (2161, 10)
Trips         (983, 9)
(2161, 21)
 tripid  pickup_zone       drop_zone     payment   fare  distance hour_slot
      1 Gandhi Nagar Byatarayanapura         upi  776.0      23.0     19-20
      2  Vijay Nagar          Magadi         upi 1479.0      26.0     14-15
      3  Yeshwantpur     Devanahalli credit card  152.0       3.0     23-24
      4   Chamrajpet    Malleshwaram  debit card  153.0       5.0       3-4
      5 Basavanagudi          Anekal         upi  366.0       5.0       1-2`,imgs:[]},"1.2":{code:`print('ô trống từng bảng:', {k: int(v.isna().sum().sum()) for k, v in x.items()}, '| dòng trùng:', {k: int(v.duplicated().sum()) for k, v in x.items()})
print('tripid là duy nhất:', td.tripid.is_unique, tr.tripid.is_unique, '| mọi chuyến của Trips có trong Trip_Details:', set(tr.tripid) <= set(td.tripid))
print('chuyến hoàn thành (end_ride=1):', int(td.end_ride.sum()), '= số dòng Trips:', len(tr))
# kiểm tra logic: chuyến hoàn thành mà bị huỷ?
done = df[df.end_ride == 1]
print('hoàn thành nhưng khách huỷ:', int((done.customer_not_cancelled == 0).sum()), '| tài xế huỷ:', int((done.driver_not_cancelled == 0).sum()))
print('chuyến chưa hoàn thành có fare:', int(df[df.end_ride == 0].fare.notna().sum()))
print('khu xuất phát = Other Assemblies:', int((df.pickup_zone == 'Other Assemblies').sum()))
df['hour'] = df['duration'] - 1
df['period'] = pd.cut(df['hour'], [-1, 5, 11, 17, 23], labels=['Đêm 0-6h', 'Sáng 6-12h', 'Chiều 12-18h', 'Tối 18-24h'])
print(df.loc[df.end_ride == 1, 'period'].value_counts().sort_index().to_string())`,text:`ô trống từng bảng: {'Duration': 0, 'Assembly': 0, 'Payment': 0, 'Trip_Details': 0, 'Trips': 0} | dòng trùng: {'Duration': 0, 'Assembly': 0, 'Payment': 0, 'Trip_Details': 0, 'Trips': 0}
tripid là duy nhất: True True | mọi chuyến của Trips có trong Trip_Details: True
chuyến hoàn thành (end_ride=1): 983 = số dòng Trips: 983
hoàn thành nhưng khách huỷ: 0 | tài xế huỷ: 0
chuyến chưa hoàn thành có fare: 0
khu xuất phát = Other Assemblies: 70
period
Đêm 0-6h        244
Sáng 6-12h      250
Chiều 12-18h    258
Tối 18-24h      231`,imgs:[]},"2.1":{code:`cat = ['pickup_zone', 'drop_zone', 'payment', 'hour_slot', 'driverid', 'custid', 'tripid']
num = ['fare', 'distance', 'searches', 'searches_got_estimate', 'searches_for_quotes', 'searches_got_quotes', 'customer_not_cancelled', 'driver_not_cancelled', 'otp_entered', 'end_ride']
print('Phân loại (categorical):', cat); print('Số (numerical):', num)
print(df[['fare', 'distance']].describe().round(1).to_string())`,text:`Phân loại (categorical): ['pickup_zone', 'drop_zone', 'payment', 'hour_slot', 'driverid', 'custid', 'tripid']
Số (numerical): ['fare', 'distance', 'searches', 'searches_got_estimate', 'searches_for_quotes', 'searches_got_quotes', 'customer_not_cancelled', 'driver_not_cancelled', 'otp_entered', 'end_ride']
         fare  distance
count   983.0     983.0
mean    764.3      14.4
std     423.8       7.4
min      44.0       2.0
25%     401.5       8.0
50%     740.0      14.0
75%    1138.0      21.0
max    1500.0      27.0`,imgs:[]},"2.2":{code:`done = df[df.end_ride == 1]
demand = done.groupby('hour').size()
fig, ax = plt.subplots(1, 2, figsize=(14, 4))
demand.plot(kind='bar', ax=ax[0], title='Số chuyến hoàn thành theo giờ')
pd.Series(td.merge(tr[['tripid', 'duration']], on='tripid', how='left').groupby('duration').size()).reindex(range(1, 25)).plot(ax=ax[1], title='Số chuyến hoàn thành theo mã giờ (Trips.duration)')
plt.tight_layout()
print('3 giờ đông nhất:'); print(demand.sort_values(ascending=False).head(3).to_string())
print('giờ vắng nhất:', demand.idxmin(), demand.min(), 'chuyến')`,text:`3 giờ đông nhất:
hour
0.0     53
13.0    52
11.0    48
giờ vắng nhất: 20.0 32 chuyến`,imgs:[`/assign/namma-yatri/2_2-1.png`]},"2.3":{code:`rev = done.groupby('period', observed=True)['fare'].sum()
share = rev / rev.sum() * 100
print(pd.DataFrame({'doanh thu': rev, '% tổng': share.round(1)}).to_string())
rev.plot(kind='pie', autopct='%1.1f%%', title='Tỷ trọng doanh thu theo khung giờ')`,text:`              doanh thu  % tổng
period                         
Đêm 0-6h       189234.0    25.2
Sáng 6-12h     186808.0    24.9
Chiều 12-18h   199506.0    26.6
Tối 18-24h     175795.0    23.4`,imgs:[`/assign/namma-yatri/2_3-1.png`]},"2.4":{code:`h = done.groupby('hour')['fare'].agg(['sum', 'mean', 'count'])
print('tương quan giờ - fare (từng chuyến):', round(done['hour'].corr(done['fare']), 3))
print('tương quan giờ - tổng doanh thu theo giờ:', round(h.reset_index()['hour'].corr(h['sum']), 3))
fig, ax = plt.subplots(1, 2, figsize=(14, 4))
h['sum'].plot(marker='o', ax=ax[0], title='Tổng doanh thu theo giờ'); h['mean'].plot(marker='o', ax=ax[1], title='Fare trung bình theo giờ')
print(h.round(0).sort_values('sum', ascending=False).head(4).to_string())`,text:`tương quan giờ - fare (từng chuyến): -0.01
tương quan giờ - tổng doanh thu theo giờ: -0.155
          sum   mean  count
hour                       
0.0   45019.0  849.0     53
6.0   39624.0  826.0     48
22.0  38880.0  810.0     48
13.0  37897.0  729.0     52`,imgs:[`/assign/namma-yatri/2_4-1.png`]},"2.5":{code:`pm = done['payment'].value_counts()
print((pm / pm.sum() * 100).round(1).to_string())
fig, ax = plt.subplots(1, 2, figsize=(13, 4))
pm.plot(kind='bar', ax=ax[0], title='Số chuyến theo hình thức thanh toán')
done.pivot_table(index='period', columns='payment', values='tripid', aggfunc='count', observed=True).plot(kind='bar', stacked=True, ax=ax[1], title='Hình thức thanh toán theo khung giờ')
plt.tight_layout()`,text:`payment
credit card    26.7
upi            24.7
debit card     24.7
cash           23.9`,imgs:[`/assign/namma-yatri/2_5-1.png`]},"2.6.1":{code:`z = td.groupby('loc_from').size().rename('requests').reset_index().merge(asm.rename(columns={'ID': 'loc_from'}), on='loc_from').sort_values('requests', ascending=False)
z.head(10).set_index('Assembly')['requests'].iloc[::-1].plot(kind='barh', title='10 khu có nhiều yêu cầu chuyến nhất')
print(z.head(8)[['Assembly', 'requests']].to_string(index=False))`,text:`           Assembly  requests
       Mahadevapura        75
        Ramanagaram        74
       Gandhi Nagar        71
   Other Assemblies        70
        Yeshwantpur        69
        Dasarahalli        66
          Jayanagar        65
Rajarajeshwarinagar        64`,imgs:[`/assign/namma-yatri/2_6_1-1.png`]},"2.6.2":{code:`r = done.groupby('pickup_zone')['fare'].agg(['sum', 'count', 'mean']).sort_values('sum', ascending=False)
r.head(10)['sum'].iloc[::-1].plot(kind='barh', title='10 khu có doanh thu cao nhất')
print(r.head(8).round(0).to_string())`,text:`                         sum  count   mean
pickup_zone                               
Bangalore South      30295.0     33  918.0
Yeshwantpur          29035.0     36  807.0
Hebbal               28097.0     31  906.0
Rajarajeshwarinagar  26509.0     32  828.0
Ramanagaram          26225.0     39  672.0
Channapatna          25656.0     30  855.0
Other Assemblies     24642.0     30  821.0
Chickpet             24026.0     28  858.0`,imgs:[`/assign/namma-yatri/2_6_2-1.png`]},"2.7":{code:`pv = done.pivot_table(index='pickup_zone', columns='period', values='tripid', aggfunc='count', observed=True).fillna(0)
top = pv.sum(axis=1).sort_values(ascending=False).head(12).index
sns.heatmap(pv.loc[top], annot=True, fmt='.0f', cmap='YlOrRd')
print(pv.loc[top[:6]].astype(int).to_string())`,text:`period               Đêm 0-6h  Sáng 6-12h  Chiều 12-18h  Tối 18-24h
pickup_zone                                                        
Ramanagaram                10           9             6          14
Yeshwantpur                 7           9             8          12
Dasarahalli                 8          11            10           4
Bangalore South             4           7            13           9
Gandhi Nagar                7           7            11           7
Rajarajeshwarinagar         9           5             9           9`,imgs:[`/assign/namma-yatri/2_7-1.png`]},"2.8":{code:`t5 = done.groupby('pickup_zone').agg(trips=('tripid', 'count'), revenue=('fare', 'sum'), avg_distance=('distance', 'mean'), avg_fare=('fare', 'mean')).sort_values('trips', ascending=False).head(5)
print(t5.round(1).to_string())
t5['trips'].plot(kind='bar', title='5 khu có nhiều chuyến hoàn thành nhất')
# so sánh với tỷ lệ hoàn thành của chính khu đó
rate = td.groupby('loc_from').agg(req=('tripid', 'count'), done=('end_ride', 'sum')).merge(asm.rename(columns={'ID': 'loc_from'}), on='loc_from').set_index('Assembly')
print((rate.loc[t5.index, 'done'] / rate.loc[t5.index, 'req'] * 100).round(1).rename('% yêu cầu hoàn thành').to_string())`,text:`                 trips  revenue  avg_distance  avg_fare
pickup_zone                                            
Ramanagaram         39  26225.0          14.5     672.4
Yeshwantpur         36  29035.0          13.8     806.5
Dasarahalli         33  23624.0          13.6     715.9
Bangalore South     33  30295.0          13.7     918.0
Gandhi Nagar        32  23065.0          16.2     720.8
pickup_zone
Ramanagaram        52.7
Yeshwantpur        52.2
Dasarahalli        50.0
Bangalore South    57.9
Gandhi Nagar       45.1`,imgs:[`/assign/namma-yatri/2_8-1.png`]},"2.9.1":{code:`n = len(td)
cust = (td.customer_not_cancelled == 0).sum(); drv = (td.driver_not_cancelled == 0).sum(); ok = td.end_ride.sum()
out = pd.Series({'Khách huỷ': cust / n * 100, 'Tài xế huỷ': drv / n * 100, 'Hoàn thành': ok / n * 100}).round(1)
print(out.to_string(), '\\n(tổng yêu cầu:', n, ')')
out.plot(kind='bar', color=['#b5543c', '#d99a3e', '#2f6f5e'], title='% yêu cầu: huỷ và hoàn thành')`,text:`Khách huỷ     48.2
Tài xế huỷ    47.2
Hoàn thành    45.5 
(tổng yêu cầu: 2161 )`,imgs:[`/assign/namma-yatri/2_9_1-1.png`]},"2.9.2":{code:`q = td[td.searches_for_quotes == 1]
print('Tìm báo giá:', len(q), '| hoàn thành:', int(q.end_ride.sum()), '|', round(q.end_ride.mean() * 100, 1), '%')
print('Lưu ý: giờ chỉ có ở bảng Trips (chuyến hoàn thành), nên chuyến huỷ không có giờ để chia khung giờ.')
# thay vào đó chia theo khu xuất phát (có đủ cho mọi yêu cầu)
zr = (q.groupby('loc_from')['end_ride'].mean() * 100).rename('pct').reset_index().merge(asm.rename(columns={'ID': 'loc_from'}), on='loc_from').set_index('Assembly')['pct'].sort_values()
print(zr.round(1).tail(3).to_string(), '\\n...', '\\n', zr.round(1).head(3).to_string())
fig, ax = plt.subplots(1, 2, figsize=(13, 4))
pd.Series({'Tìm báo giá': len(q), 'Hoàn thành': int(q.end_ride.sum())}).plot(kind='bar', ax=ax[0], title='Tìm báo giá -> hoàn thành')
zr.plot(kind='hist', bins=10, ax=ax[1], title='% hoàn thành sau khi tìm báo giá, theo khu')
plt.tight_layout()`,text:`Tìm báo giá: 1455 | hoàn thành: 983 | 67.6 %
Lưu ý: giờ chỉ có ở bảng Trips (chuyến hoàn thành), nên chuyến huỷ không có giờ để chia khung giờ.
Assembly
Chickpet               80.0
Rajarajeshwarinagar    82.1
Yeshwantpur            85.7 
... 
 Assembly
Anekal               47.5
C. V. Raman Nagar    50.0
Mahadevapura         53.1`,imgs:[`/assign/namma-yatri/2_9_2-1.png`]},"2.10":{code:`zone_pick = 'Hebbal'   # tham số: chọn khu để lọc
sub = done[done.pickup_zone == zone_pick]
print(f'Khu {zone_pick}:', len(sub), 'chuyến hoàn thành, doanh thu', int(sub.fare.sum()), ', fare trung bình', round(sub.fare.mean(), 0))
sub.groupby('period', observed=True)['fare'].agg(['count', 'sum']).plot(kind='bar', title=f'{zone_pick}: chuyến và doanh thu theo khung giờ')
print(sub.groupby('period', observed=True)['fare'].agg(['count', 'sum']).to_string())`,text:`Khu Hebbal: 31 chuyến hoàn thành, doanh thu 28097 , fare trung bình 906.0
              count     sum
period                     
Đêm 0-6h          5  4524.0
Sáng 6-12h        6  6367.0
Chiều 12-18h     11  9433.0
Tối 18-24h        9  7773.0`,imgs:[`/assign/namma-yatri/2_10-1.png`]},"3.1":{code:`funnel = td[['searches', 'searches_got_estimate', 'searches_for_quotes', 'searches_got_quotes', 'otp_entered', 'end_ride']].sum()
print((funnel / funnel['searches'] * 100).round(1).to_string())
print('rơi nhiều nhất ở bước: tìm báo giá -> có báo giá, huỷ bởi khách', round((td.customer_not_cancelled == 0).mean() * 100, 1), '%, huỷ bởi tài xế', round((td.driver_not_cancelled == 0).mean() * 100, 1), '%')
(funnel / funnel['searches'] * 100).plot(kind='bar', title='Phễu chuyển đổi (% so với số tìm kiếm)')`,text:`searches                 100.0
searches_got_estimate     81.4
searches_for_quotes       67.3
searches_got_quotes       59.1
otp_entered               45.5
end_ride                  45.5
rơi nhiều nhất ở bước: tìm báo giá -> có báo giá, huỷ bởi khách 48.2 %, huỷ bởi tài xế 47.2 %`,imgs:[`/assign/namma-yatri/3_1-1.png`]},"3.2":{code:`peak = done.groupby('hour').size().sort_values(ascending=False).head(3).index.tolist()
upi = (done.payment == 'upi').mean() * 100
print('Giờ cao điểm:', peak, '| UPI chiếm', round(upi, 1), '% chuyến')
share = done.groupby('pickup_zone')['fare'].sum().sort_values(ascending=False); share = share / share.sum() * 100
print('5 khu đầu chiếm', round(share.head(5).sum(), 1), '% doanh thu; 10 khu đầu', round(share.head(10).sum(), 1), '%')
share.head(10).iloc[::-1].plot(kind='barh', title='% doanh thu của 10 khu hàng đầu')`,text:`Giờ cao điểm: [0.0, 13.0, 11.0] | UPI chiếm 24.7 % chuyến
5 khu đầu chiếm 18.7 % doanh thu; 10 khu đầu 34.8 %`,imgs:[`/assign/namma-yatri/3_2-1.png`]}}}],qe=e=>Ke.find(t=>t.concepts.includes(e)),Je={vi:{why:`Vì sao cần biết`,prior:`Liên hệ với bài trước`,see:`Quan sát`,plain:`Hiểu nhanh`,example:`Tình huống minh họa (số liệu giả định)`,use:`Cách áp dụng`,precise:`Định nghĩa chính xác`,more:`Tự thử điều chỉnh`,prev:`Từ trước`,next:`Tiếp theo`,links:`Khái niệm liên quan`,onMap:`Xem trên sơ đồ tư duy`,onFormula:`Xem trong bảng công thức`,onGlossary:`Mở từ điển`,v2d:`Đồ thị kéo được`,v3d:`Cảnh 3D`,walk:`Làm từng bước với số liệu thật`,words:`Từ cần biết`,problem:`Bài toán`,steps:`Từng bước`,say:`Kết luận bằng lời`,check:`Tự kiểm tra`,reveal:`Hiện đáp án`,story:`Câu chuyện Lotus Spa`},en:{why:`What you use it for`,prior:`How it links`,see:`Watch it`,plain:`In plain words`,example:`Illustrative situation (made-up numbers)`,use:`When to use it`,precise:`The precise version`,more:`Try it`,prev:`Previous`,next:`Next`,links:`Connections`,onMap:`See on the map`,onFormula:`See in the formula sheet`,onGlossary:`Open the glossary`,v2d:`Interactive chart`,v3d:`3D scene`,walk:`Worked step by step with real numbers`,words:`Words you need`,problem:`The problem`,steps:`Step by step`,say:`The conclusion in words`,check:`Check yourself`,reveal:`Show answer`,story:`The Lotus Spa story`}};function Ye({id:e,head:t,formula:n}){let i=`inline-flex min-h-11 items-center rounded-full border border-line px-3 text-sm`;return(0,x.jsxs)(`div`,{className:`mt-3 flex flex-wrap gap-2`,children:[(0,x.jsx)(r,{to:`/ban-do`,hash:e,className:i,children:t.onMap}),n?(0,x.jsx)(r,{to:`/cong-thuc`,hash:e,className:i,children:t.onFormula}):null,(0,x.jsx)(r,{to:`/tu-dien`,className:i,children:t.onGlossary})]})}function Xe({walk:e,head:t,visual:n,lang:i}){let[a,o]=(0,b.useState)(!1);return(0,x.jsxs)(`section`,{className:`mt-8 rounded-card border border-line bg-card p-4`,children:[(0,x.jsx)(`h2`,{className:`text-xs uppercase tracking-widest text-muted`,children:t.walk}),e.story?(0,x.jsxs)(`div`,{className:`mt-3 rounded-xl border-l-4 border-accent bg-paper p-3`,children:[(0,x.jsx)(`p`,{className:`text-xs uppercase tracking-widest text-muted`,children:t.story}),(0,x.jsx)(`p`,{className:`mt-1 leading-relaxed`,children:e.story})]}):null,(0,x.jsx)(`h3`,{className:`mt-3 text-sm font-medium`,children:t.words}),(0,x.jsx)(`dl`,{className:`mt-1 space-y-2`,children:e.words.map(([e,t])=>(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`dt`,{className:`font-medium`,children:(0,x.jsx)(r,{to:`/tu-dien`,hash:e.replace(/\s+/g,` `).trim().toLowerCase(),className:`underline decoration-dotted underline-offset-4`,children:e})}),(0,x.jsx)(`dd`,{className:`leading-relaxed text-muted`,children:t})]},e))}),(0,x.jsx)(`h3`,{className:`mt-5 text-sm font-medium`,children:t.problem}),(0,x.jsx)(`p`,{className:`mt-1 leading-relaxed`,children:e.problem}),n?(0,x.jsx)(Ie,{v:n,lang:i}):null,(0,x.jsx)(`h3`,{className:`mt-5 text-sm font-medium`,children:t.steps}),(0,x.jsx)(`ol`,{className:`mt-2 space-y-3`,children:e.steps.map(([e,t],n)=>(0,x.jsxs)(`li`,{className:`flex gap-3`,children:[(0,x.jsx)(`span`,{className:`font-display text-2xl leading-none text-accent`,children:n+1}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`p`,{className:`font-medium`,children:e}),(0,x.jsx)(`p`,{className:`leading-relaxed`,children:t})]})]},e))}),(0,x.jsx)(`h3`,{className:`mt-5 text-sm font-medium`,children:t.say}),(0,x.jsx)(`p`,{className:`mt-1 leading-relaxed`,children:e.say}),(0,x.jsx)(`h3`,{className:`mt-5 text-sm font-medium`,children:t.check}),(0,x.jsx)(`p`,{className:`mt-1 leading-relaxed`,children:e.check[0]}),(0,x.jsx)(`button`,{type:`button`,className:`mt-2 min-h-11 rounded-full border border-line px-4 text-sm`,onClick:()=>o(e=>!e),children:a?`−`:t.reveal}),a?(0,x.jsx)(`p`,{className:`mt-2 rounded-xl bg-paper p-3 leading-relaxed`,children:e.check[1]}):null]})}function Ze({concept:e}){let t=(0,b.useSyncExternalStore)(ee,p,f);(0,b.useSyncExternalStore)(s,m,l);let n=t.lang,i=Je[n],d=o(e,n),h=u(e.id),g=h.prev?o(h.prev,n):null,_=h.next?o(h.next,n):null,v=re(e.id),S=!!Ee[e.id],ie=!!e.sim&&!S,C=qe(e.id),w=c[e.id],T=S?(0,x.jsx)(ae,{demo:Ee[e.id],lang:n}):xe[e.id]?(0,x.jsx)(fe,{motion:xe[e.id],lang:n}):ie?(0,x.jsx)(ne,{id:e.sim}):null;return(0,x.jsxs)(`article`,{className:`reading mx-auto`,children:[(0,x.jsxs)(`p`,{className:`text-xs uppercase tracking-widest text-muted`,children:[e.eyebrow,` · `,e.session]}),(0,x.jsxs)(`p`,{className:`mt-2 text-sm text-muted`,children:[h.index+1,`/`,h.total,` · `,e.video]}),(0,x.jsx)(`h1`,{className:`mt-3 font-display text-4xl leading-tight`,children:C?C.title[+(n===`en`)]:d.title}),(0,x.jsx)(r,{to:`/goc`,hash:e.id,className:`mt-3 inline-block text-sm text-accent underline`,children:n===`en`?`Edit the raw text`:`Sửa chữ gốc`}),C?(0,x.jsx)(Ve,{a:C}):w?(0,x.jsx)(Ue,{ov:w,lang:n}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(`section`,{className:`mt-6 rounded-card border border-line bg-card p-4`,children:[(0,x.jsx)(`h2`,{className:`text-xs uppercase tracking-widest text-accent`,children:i.why}),(0,x.jsx)(`p`,{className:`mt-2 text-lg leading-relaxed`,children:d.why})]}),d.prior?(0,x.jsxs)(`section`,{className:`mt-6`,children:[(0,x.jsx)(`h2`,{className:`text-xs uppercase tracking-widest text-muted`,children:i.prior}),(0,x.jsx)(`p`,{className:`mt-2 leading-relaxed`,children:d.prior})]}):null,T?(0,x.jsxs)(`section`,{className:`mt-6`,children:[(0,x.jsx)(`h2`,{className:`text-xs uppercase tracking-widest text-muted`,children:i.see}),(0,x.jsx)(`div`,{className:`mt-3`,children:T})]}):null,(0,x.jsxs)(`section`,{className:`mt-8`,children:[(0,x.jsx)(`h2`,{className:`text-xs uppercase tracking-widest text-muted`,children:i.plain}),(0,x.jsx)(`p`,{className:`mt-2 text-lg leading-relaxed`,children:d.plain})]}),(0,x.jsxs)(`section`,{className:`mt-8`,children:[(0,x.jsx)(`h2`,{className:`text-xs uppercase tracking-widest text-muted`,children:i.example}),(0,x.jsx)(`p`,{className:`mt-2 leading-relaxed`,children:d.situation})]}),y[e.id]?(0,x.jsx)(Xe,{walk:y[e.id][n],head:i,visual:y[e.id].visual,lang:n}):null,(0,x.jsxs)(`section`,{className:`mt-8`,children:[(0,x.jsx)(`h2`,{className:`text-xs uppercase tracking-widest text-muted`,children:i.use}),(0,x.jsx)(`ol`,{className:`mt-3 space-y-3`,children:d.use.map((e,t)=>(0,x.jsxs)(`li`,{className:`flex gap-3`,children:[(0,x.jsx)(`span`,{className:`font-display text-2xl leading-none text-accent`,children:t+1}),(0,x.jsx)(`p`,{className:`leading-relaxed`,children:e})]},e))})]}),(0,x.jsxs)(`section`,{className:`mt-8`,children:[(0,x.jsx)(`h2`,{className:`text-xs uppercase tracking-widest text-muted`,children:i.precise}),(0,x.jsx)(`p`,{className:`mt-2 leading-relaxed`,children:d.precise}),d.formula?(0,x.jsx)(`div`,{className:`mt-4 rounded-card border border-line bg-card px-3 py-2`,children:(0,x.jsx)(te,{tex:d.formula,block:!0})}):null,d.symbols.length>0?(0,x.jsx)(`ul`,{className:`mt-3 space-y-2 text-sm`,children:d.symbols.map(e=>(0,x.jsxs)(`li`,{className:`flex gap-3`,children:[(0,x.jsx)(`span`,{className:`shrink-0`,children:(0,x.jsx)(te,{tex:e.sym})}),(0,x.jsx)(`span`,{className:`text-muted`,children:e.meaning})]},e.sym))}):null]}),(0,x.jsx)(`blockquote`,{className:`mt-8 border-l-4 border-accent pl-4 font-display text-2xl leading-snug`,children:d.insight}),v.length>0?(0,x.jsxs)(`section`,{className:`mt-8`,children:[(0,x.jsx)(`h2`,{className:`text-xs uppercase tracking-widest text-muted`,children:i.links}),(0,x.jsx)(`ul`,{className:`mt-3 space-y-3`,children:v.map(e=>(0,x.jsxs)(`li`,{children:[(0,x.jsx)(r,{to:`/khai-niem/$conceptId`,params:{conceptId:e.id},className:`font-medium underline`,children:a(e.id,n)}),(0,x.jsx)(`p`,{className:`mt-1 text-sm text-muted`,children:n===`en`?e.en:e.vi})]},e.id))}),(0,x.jsx)(Ye,{id:e.id,head:i,formula:!!d.formula})]}):(0,x.jsx)(`section`,{className:`mt-6`,children:(0,x.jsx)(Ye,{id:e.id,head:i,formula:!!d.formula})}),e.sim&&S||e.widget?(0,x.jsxs)(`section`,{className:`mt-8`,children:[(0,x.jsx)(`h2`,{className:`text-xs uppercase tracking-widest text-muted`,children:i.more}),(0,x.jsxs)(`div`,{className:`mt-3`,children:[e.widget?(0,x.jsx)(Fe,{id:e.widget,lang:n}):null,e.sim&&S?(0,x.jsx)(ne,{id:e.sim}):null]})]}):null]}),(0,x.jsx)(Ge,{concept:e,lang:n}),(0,x.jsxs)(`div`,{className:`mt-8 grid gap-3 sm:grid-cols-2`,children:[h.prev&&g?(0,x.jsxs)(r,{to:`/khai-niem/$conceptId`,params:{conceptId:h.prev.id},className:`rounded-card border border-line p-4`,children:[(0,x.jsx)(`span`,{className:`text-xs tracking-widest text-muted`,children:i.prev}),(0,x.jsx)(`span`,{className:`mt-1 block font-medium`,children:g.title})]}):(0,x.jsx)(`span`,{}),h.next&&_?(0,x.jsxs)(r,{to:`/khai-niem/$conceptId`,params:{conceptId:h.next.id},className:`rounded-card border border-line p-4 sm:text-right`,children:[(0,x.jsx)(`span`,{className:`text-xs tracking-widest text-muted`,children:i.next}),(0,x.jsx)(`span`,{className:`mt-1 block font-medium`,children:_.title})]}):null]})]})}function Qe(){let{conceptId:e}=h.useParams(),t=d(e);return t?(0,x.jsx)(Ze,{concept:t}):(0,x.jsxs)(`div`,{className:`reading mx-auto`,children:[(0,x.jsx)(`h1`,{className:`font-display text-4xl`,children:`Không thấy khái niệm này`}),(0,x.jsx)(r,{to:`/`,className:`mt-4 inline-block underline`,children:`Về trang đầu`})]})}export{Qe as component};