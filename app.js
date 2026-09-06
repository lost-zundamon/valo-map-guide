const maps = [
 {id:"summit",name:"SUMMIT",jp:"サミット",sites:"2 SITE",lanes:"3レーン",desc:"可動式の巨大な壁がラウンド中の戦場を変える高低差のあるマップ。",accent:"#75b8ff",
  locations:["Base","A Site","B Site","Mid","Market","Courtyard","Tunnel","Training Hall"],roles:{controller:["Omen","Viper"],initiator:["Sova","Sova"],duelist:["Jett","Raze"],sentinel:["Killjoy","Cypher"]}},
 {id:"corrode",name:"CORRODE",jp:"カロード",sites:"2 SITE",lanes:"3レーン",desc:"中世の城下町と採掘施設が融合した、多層構造の3レーンマップ。",accent:"#e6b66d",
  locations:["A Site","B Site","Mid","Main","Courtyard","Tower","Market","Tunnel"],roles:{controller:["Omen","Viper"],initiator:["Sova","Fade"],duelist:["Raze","Jett"],sentinel:["Cypher","Killjoy"]}},
 {id:"abyss",name:"ABYSS",jp:"アビス",sites:"2 SITE",lanes:"3レーン / 落下",desc:"境界のない足場と落下ポイントを利用した、危険とリターンが大きいマップ。",accent:"#a77cff",
  locations:["A Site","B Site","A Main","B Main","Mid","Bridge","Canteen","Pit"],roles:{controller:["Omen","Viper"],initiator:["Sova","Gekko"],duelist:["Raze","Jett"],sentinel:["Cypher","Killjoy"]}},
 {id:"sunset",name:"SUNSET",jp:"サンセット",sites:"2 SITE",lanes:"3レーン",desc:"ロサンゼルスの街並みを舞台にした、中央の取り合いが重要なマップ。",accent:"#f29a63",
  locations:["A Site","B Site","A Main","B Main","Mid","Market","Boba","Courtyard"],roles:{controller:["Omen","Viper"],initiator:["Sova","Gekko"],duelist:["Raze","Neon"],sentinel:["Cypher","Killjoy"]}},
 {id:"lotus",name:"LOTUS",jp:"ロータス",sites:"3 SITE",lanes:"3レーン / 回転扉",desc:"3つのサイトと破壊可能な扉を持つ、ローテーションの判断が重要なマップ。",accent:"#9fd36b",
  locations:["A Site","B Site","C Site","A Main","B Main","C Main","Tree","Waterfall"],roles:{controller:["Omen","Viper"],initiator:["Fade","Gekko"],duelist:["Raze","Jett"],sentinel:["Killjoy","Cypher"]}},
 {id:"pearl",name:"PEARL",jp:"パール",sites:"2 SITE",lanes:"3レーン",desc:"海中都市を舞台にした、Midの支配と長い射線が特徴のマップ。",accent:"#58d9dc",
  locations:["A Site","B Site","A Main","B Main","Mid","Art","Flowers","B Link"],roles:{controller:["Omen","Viper"],initiator:["Fade","Sova"],duelist:["Jett","Raze"],sentinel:["Cypher","Killjoy"]}},
 {id:"fracture",name:"FRACTURE",jp:"フラクチャー",sites:"2 SITE",lanes:"4方向アクセス",desc:"両側から挟み込める独特の構造。攻撃・防衛ともに情報管理が重要。",accent:"#d2a36b",
  locations:["A Site","B Site","A Main","B Main","Dish","Arcade","Rope","Canteen"],roles:{controller:["Brimstone","Viper"],initiator:["Breach","Fade"],duelist:["Raze","Neon"],sentinel:["Killjoy","Cypher"]}},
 {id:"breeze",name:"BREEZE",jp:"ブリーズ",sites:"2 SITE",lanes:"広い射線",desc:"広い空間と長距離戦が特徴。カバーとフランク対策が重要。",accent:"#5fd4ba",
  locations:["A Site","B Site","A Main","B Main","Mid","Hall","Cave","Nest"],roles:{controller:["Viper","Harbor"],initiator:["Sova","KAY/O"],duelist:["Jett","Neon"],sentinel:["Cypher","Killjoy"]}},
 {id:"icebox",name:"ICEBOX",jp:"アイスボックス",sites:"2 SITE",lanes:"高低差 / ジップ",desc:"水平・垂直方向の移動を活かして戦う極寒の発掘施設。",accent:"#8ecff5",
  locations:["A Site","B Site","A Main","B Main","Mid","Kitchen","Tube","Yellow"],roles:{controller:["Viper","Harbor"],initiator:["Sova","KAY/O"],duelist:["Jett","Raze"],sentinel:["Killjoy","Sage"]}},
 {id:"ascent",name:"ASCENT",jp:"アセント",sites:"2 SITE",lanes:"中央制圧",desc:"中央エリアの支配とサイト周辺の防衛が勝敗を左右するクラシックなマップ。",accent:"#d9c78a",
  locations:["A Site","B Site","A Main","B Main","Mid","Market","Tree","Catwalk"],roles:{controller:["Omen","Astra"],initiator:["Sova","KAY/O"],duelist:["Jett","Raze"],sentinel:["Killjoy","Cypher"]}},
 {id:"split",name:"SPLIT",jp:"スプリット",sites:"2 SITE",lanes:"高所 / ロープ",desc:"高低差とチョークポイントを活かした、上下の制圧が重要なマップ。",accent:"#d48ae5",
  locations:["A Site","B Site","A Main","B Main","Mid","Vent","Heaven","Mail"],roles:{controller:["Omen","Viper"],initiator:["Breach","Gekko"],duelist:["Raze","Jett"],sentinel:["Cypher","Killjoy"]}},
 {id:"haven",name:"HAVEN",jp:"ヘイヴン",sites:"3 SITE",lanes:"3 SITE",desc:"3サイト構成により、防衛側のローテーション判断が問われるマップ。",accent:"#8ca9e9",
  locations:["A Site","B Site","C Site","A Long","B Main","C Long","Garage","Sewers"],roles:{controller:["Omen","Astra"],initiator:["Sova","Gekko"],duelist:["Jett","Raze"],sentinel:["Cypher","Killjoy"]}},
 {id:"bind",name:"BIND",jp:"バインド",sites:"2 SITE",lanes:"テレポーター",desc:"Midが存在せず、テレポーターによる大胆なローテーションが特徴。",accent:"#e6a16d",
  locations:["A Site","B Site","A Short","B Long","Hookah","Lamps","Showers","Garden"],roles:{controller:["Brimstone","Viper"],initiator:["Gekko","Sova"],duelist:["Raze","Jett"],sentinel:["Cypher","Killjoy"]}}
];

const content=document.getElementById("appContent"), sideMaps=document.getElementById("sideMaps"), crumb=document.getElementById("crumb");
const esc=s=>s.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));
function renderSide(){
 sideMaps.innerHTML=maps.map(m=>`<a href="#map/${m.id}" class="side-link" data-route="map/${m.id}">${m.jp} <small>${m.name}</small></a>`).join("");
}
function layout(){
 const route=location.hash.replace("#","")||"home";
 if(route==="home") renderHome(); else if(route.startsWith("map/")) renderMap(route.split("/")[1]); else renderHome();
 document.querySelectorAll(".side-link").forEach(a=>a.classList.toggle("active",a.dataset.route===route));
}
function renderHome(){
 crumb.textContent="HOME";
 content.innerHTML=`<div class="content">
  <section class="hero">
   <div class="hero-copy"><div class="eyebrow">TACTICAL MAP REFERENCE</div><h1>MAPS, <em>AT A GLANCE.</em></h1><p>VALORANTのマップ情報を、試合中でも迷わず引き出せるように整理したフィールドガイド。マップ名からエリア、役割別のおすすめエージェントまで、必要な情報へ最短でアクセスできます。</p><div class="quick"><a class="primary" href="#map/ascent">アセントを見る</a><a href="#map/summit">新マップを見る</a></div></div>
   <div class="hero-card"><div class="eyebrow">QUICK ACCESS</div><h2 style="font-size:28px;margin:10px 0">Choose a map.</h2><p style="color:#7e8794;font-size:11px;max-width:260px;line-height:1.6">左のサイドバー、または下のカードからマップを選択。</p><div class="big-v">V</div></div>
  </section>
  <div class="section-head"><h2>MAP SHORTCUTS</h2><span>${maps.length} MAPS</span></div>
  <div class="map-grid">${maps.map(card).join("")}</div>
 </div>`;
}
function card(m){return `<a href="#map/${m.id}" class="map-card" style="--accent:${m.accent}"><div class="map-art"></div><div class="map-card-content"><span class="tag">${m.sites} · ${m.lanes}</span><h3>${m.name}</h3><p>${m.jp} — ${m.desc}</p></div></a>`}
function renderMap(id){
 const m=maps.find(x=>x.id===id)||maps[0]; crumb.textContent=`MAPS / ${m.name}`;
 content.innerHTML=`<div class="content">
  <section class="detail-header" style="--accent:${m.accent}">
   <div class="detail-title"><div><div class="eyebrow">${m.jp}</div><h1>${m.name}</h1><p>${m.desc}</p></div><div class="map-meta"><span class="meta">${m.sites}</span><span class="meta">${m.lanes}</span><span class="meta">MAP GUIDE</span></div></div>
  </section>
  <div class="tabs"><button class="tab active" data-tab="overview">OVERVIEW</button><button class="tab" data-tab="locations">LOCATIONS</button><button class="tab" data-tab="agents">AGENTS</button><button class="tab" data-tab="tips">TIPS</button></div>
  <div id="tabContent"></div>
 </div>`;
 renderTab(m,"overview");
 document.querySelectorAll(".tab").forEach(t=>t.onclick=()=>{document.querySelectorAll(".tab").forEach(x=>x.classList.remove("active"));t.classList.add("active");renderTab(m,t.dataset.tab)});
}
function renderTab(m,tab){
 const el=document.getElementById("tabContent");
 if(tab==="overview") el.innerHTML=`<div class="detail-grid"><section class="panel"><h2>MAP AT A GLANCE</h2><div class="locations">${m.locations.slice(0,6).map((x,i)=>`<div class="location"><strong>${x}</strong><span>${i%2?"ROTATION / CONTROL":"KEY AREA"}</span></div>`).join("")}</div></section><section class="panel"><h2>QUICK NOTES</h2><div class="tip">まずは${m.locations[0]}周辺の基本的な射線と退路を覚える。次に${m.locations[2]}へのローテーションを確認すると、実戦で迷いにくい。</div><h3>おすすめの調べ方</h3><p style="font-size:11px;color:#87909d;line-height:1.7">「LOCATIONS」で名称を確認 → 「AGENTS」で役割ごとの候補を見る → 「TIPS」でラウンド中の判断材料を確認。</p></section></div>`;
 if(tab==="locations") el.innerHTML=`<section class="panel"><h2>CALLOUTS / LOCATIONS</h2><div class="locations">${m.locations.map((x,i)=>`<div class="location"><strong>${String(i+1).padStart(2,"0")} · ${x}</strong><span>${i%3===0?"SITE AREA":i%3===1?"CONNECTOR":"MID / CONTROL"}</span></div>`).join("")}</div></section>`;
 if(tab==="agents") el.innerHTML=`<div class="detail-grid">${Object.entries(m.roles).map(([role,agents])=>`<section class="panel"><h2>${role.toUpperCase()}</h2><div class="role-row"><div class="role-icon">${role[0].toUpperCase()}</div><div><strong>${role==="controller"?"視界・進行管理":role==="initiator"?"索敵・エリア確保":role==="duelist"?"エントリー・決定力":"防衛・情報管理"}</strong><span>このマップで検討しやすい候補</span></div></div><div class="agent-list">${agents.map(a=>`<span class="agent">${a}</span>`).join("")}</div></section>`).join("")}</div>`;
 if(tab==="tips") el.innerHTML=`<div class="detail-grid"><section class="panel"><h2>ROUND PLAN</h2><h3>ATTACK</h3><div class="tip">最初からサイトへ突っ込むのではなく、${m.locations[1]}付近の情報を取り、相手の守備配置を見てから人数を寄せる。</div><h3>DEFENSE</h3><div class="tip">序盤に無理なピークをせず、${m.locations[4]}周辺の情報を維持。味方の人数と敵のユーティリティを見てローテーションする。</div></section><section class="panel"><h2>REMEMBER</h2><div class="agent-list"><span class="agent">情報を取る</span><span class="agent">人数を数える</span><span class="agent">退路を残す</span><span class="agent">ローテーションを急がない</span></div></section></div>`;
}
renderSide(); layout(); window.addEventListener("hashchange",layout);
const sidebar=document.getElementById("sidebar"), overlay=document.getElementById("overlay");
document.getElementById("menuBtn").onclick=()=>{sidebar.classList.add("open");overlay.classList.add("open")};
document.getElementById("closeSidebar").onclick=()=>{sidebar.classList.remove("open");overlay.classList.remove("open")};
overlay.onclick=()=>{sidebar.classList.remove("open");overlay.classList.remove("open")};
document.getElementById("searchBtn").onclick=()=>document.getElementById("searchPanel").classList.toggle("open");
document.getElementById("searchInput").oninput=e=>{
 const q=e.target.value.toLowerCase().trim();
 document.querySelectorAll(".map-card").forEach(c=>c.style.display=c.textContent.toLowerCase().includes(q)?"":"none");
};
