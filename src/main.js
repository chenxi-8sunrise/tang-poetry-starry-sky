import React,{useCallback,useEffect,useMemo,useState}from"react";
import{createRoot}from"react-dom/client";
import"./styles.css";

const h=React.createElement;
const WENGER_START_YEAR=1996;
const CURRENT_YEAR=2026;
const WIKI_BASE="https://en.wikipedia.org/wiki/";
const SOURCE_PAGES=[
{title:"List_of_Arsenal_F.C._players",label:"100+ appearances",url:"https://en.wikipedia.org/wiki/List_of_Arsenal_F.C._players"},
{title:"List_of_Arsenal_F.C._players_(25%E2%80%9399_appearances)",label:"25-99 appearances",url:"https://en.wikipedia.org/wiki/List_of_Arsenal_F.C._players_(25%E2%80%9399_appearances)"},
{title:"List_of_Arsenal_F.C._players_(1%E2%80%9324_appearances)",label:"1-24 appearances",url:"https://en.wikipedia.org/wiki/List_of_Arsenal_F.C._players_(1%E2%80%9324_appearances)"}
];

function slot(id,role,x,y){return{id,role,x,y};}
function trophy(label,year,weight){return{label,year,weight};}
function clamp(value,min,max){return Math.max(min,Math.min(max,value));}

const FORMATIONS={
"4-3-3":[slot("GK","GK",50,90),slot("LB","LB",18,70),slot("LCB","CB",38,74),slot("RCB","CB",62,74),slot("RB","RB",82,70),slot("DM","DM",50,56),slot("LCM","CM",33,46),slot("RCM","CM",67,46),slot("LW","LW",22,24),slot("ST","ST",50,18),slot("RW","RW",78,24)],
"4-2-3-1":[slot("GK","GK",50,90),slot("LB","LB",18,70),slot("LCB","CB",38,74),slot("RCB","CB",62,74),slot("RB","RB",82,70),slot("LDM","DM",40,55),slot("RDM","DM",60,55),slot("CAM","AM",50,40),slot("LW","LW",24,29),slot("RW","RW",76,29),slot("ST","ST",50,17)],
"3-4-3":[slot("GK","GK",50,90),slot("LCB","CB",30,72),slot("CB","CB",50,76),slot("RCB","CB",70,72),slot("LM","LM",18,51),slot("LCM","CM",40,48),slot("RCM","CM",60,48),slot("RM","RM",82,51),slot("LW","LW",24,25),slot("ST","ST",50,17),slot("RW","RW",76,25)],
"4-4-2":[slot("GK","GK",50,90),slot("LB","LB",18,70),slot("LCB","CB",38,74),slot("RCB","CB",62,74),slot("RB","RB",82,70),slot("LM","LM",18,47),slot("LCM","CM",40,48),slot("RCM","CM",60,48),slot("RM","RM",82,47),slot("LS","ST",42,20),slot("RS","ST",58,20)]
};

const POSITION_ROLES={GK:["GK"],DF:["CB","LB","RB","LWB","RWB"],MF:["CM","DM","AM","LM","RM"],FW:["ST","LW","RW"]};
const ROLE_OVERRIDES={"Tony Adams":["CB"],"David Seaman":["GK"],"Ian Wright":["ST"],"Dennis Bergkamp":["ST","AM"],"Patrick Vieira":["CM","DM"],"Marc Overmars":["LW","RW"],"Emmanuel Petit":["DM","CM"],"Freddie Ljungberg":["RM","RW","AM"],"Ashley Cole":["LB","LWB"],"Thierry Henry":["ST","LW"],Kanu:["ST","AM"],"Robert Pires":["LW","AM"],Lauren:["RB","RM"],"Sol Campbell":["CB"],Edu:["CM","DM"],Gilberto:["DM","CM"],"Kolo Toure":["CB","RB"],"Jens Lehmann":["GK"],"Cesc Fabregas":["CM","AM"],"Robin van Persie":["ST","RW"],"Emmanuel Eboue":["RB","RM"],"Alexander Hleb":["RW","AM","LW"],"Alex Song":["DM","CB"],"Emmanuel Adebayor":["ST"],"Tomas Rosicky":["AM","CM","LW"],"Theo Walcott":["RW","ST"],"Bacary Sagna":["RB"],"Kieran Gibbs":["LB","LWB"],"Aaron Ramsey":["CM","AM"],"Samir Nasri":["AM","LW","RW"],"Jack Wilshere":["CM","AM"],"Andrey Arshavin":["LW","AM"],"Thomas Vermaelen":["CB","LB"],"Wojciech Szczesny":["GK"],"Alex Oxlade-Chamberlain":["RW","CM","RM"],"Per Mertesacker":["CB"],"Mikel Arteta":["CM","DM"],"Olivier Giroud":["ST"],"Santi Cazorla":["CM","AM","LW"],"Nacho Monreal":["LB","CB"],"Mesut Ozil":["AM","RW"],"Hector Bellerin":["RB","RWB"],"Alexis Sanchez":["LW","ST","RW"],"Ainsley Maitland-Niles":["RB","CM","RWB"],"Petr Cech":["GK"],"Alex Iwobi":["LW","AM","RW"],"Granit Xhaka":["CM","DM","LB"],"Pierre-Emerick Aubameyang":["ST","LW"],"Emile Smith Rowe":["AM","LW"],"Bukayo Saka":["RW","LW","LB"],"Gabriel Martinelli":["LW","ST"],"Kieran Tierney":["LB","LWB","CB"],Gabriel:["CB"],"Thomas Partey":["DM","CM","RB"],"Martin Odegaard":["AM","CM"],"Ben White":["RB","CB"],"Gabriel Jesus":["ST","RW"],"William Saliba":["CB"],"Leandro Trossard":["LW","ST","AM"],"Kai Havertz":["AM","ST","CM"],"Declan Rice":["DM","CM"],"David Raya":["GK"],Jorginho:["DM","CM"],"Jurrien Timber":["RB","CB","LB"],"Riccardo Calafiori":["LB","CB"],"Myles Lewis-Skelly":["LB","CM"],"Ethan Nwaneri":["AM","RW"],"Raheem Sterling":["LW","RW"],"Gabriel Magalhaes":["CB"],"Takehiro Tomiyasu":["RB","CB","LB"],"Oleksandr Zinchenko":["LB","CM"],"Fabio Vieira":["AM","CM","RW"],"Jakub Kiwior":["CB","LB"]};
const RATING_OVERRIDES={"Thierry Henry":99,"Dennis Bergkamp":96,"Patrick Vieira":96,"Tony Adams":95,"Ian Wright":94,"David Seaman":94,"Robert Pires":94,"Cesc Fabregas":93,"Sol Campbell":93,"Ashley Cole":92,"Mesut Ozil":92,"Alexis Sanchez":92,"Robin van Persie":91,"Bukayo Saka":91,"Freddie Ljungberg":91,Gilberto:90,"Martin Odegaard":90,"Declan Rice":90,"Santi Cazorla":90,"Kolo Toure":89,"Jens Lehmann":89,"Olivier Giroud":88,"Pierre-Emerick Aubameyang":88,Lauren:88,"David Raya":88,"William Saliba":88,"Gabriel Martinelli":87,"Gabriel Jesus":87,Gabriel:87,"Ben White":87,"Granit Xhaka":86,"Aaron Ramsey":86,"Mikel Arteta":86,"Emmanuel Petit":86,"Marc Overmars":86};
const SPECIAL_HONOURS={"Thierry Henry":["Arsenal all-time top scorer","Premier League Golden Boot"],"Dennis Bergkamp":["PFA Players' Player of the Year","Premier League Hall of Fame"],"Patrick Vieira":["Invincibles captain","Premier League Hall of Fame"],"Tony Adams":["Arsenal captain","Statue outside Emirates Stadium"],"Ian Wright":["Former Arsenal all-time top scorer","Statue outside Emirates Stadium"],"David Seaman":["Premier League Golden Glove"],"Robert Pires":["FWA Footballer of the Year"],"Cesc Fabregas":["PFA Young Player of the Year"],"Robin van Persie":["PFA Players' Player of the Year"],"Bukayo Saka":["England Player of the Year","Arsenal Player of the Season"],"Mesut Ozil":["Arsenal Player of the Season"],"Alexis Sanchez":["Arsenal Player of the Season"],"Pierre-Emerick Aubameyang":["Premier League Golden Boot"],"Martin Odegaard":["Arsenal captain"],"Declan Rice":["Arsenal record signing at arrival"]};
const TROPHIES=[trophy("Premier League 1997-98",1998,4),trophy("FA Cup 1997-98",1998,3),trophy("FA Community Shield 1998",1998,1.5),trophy("FA Community Shield 1999",1999,1.5),trophy("Premier League 2001-02",2002,4),trophy("FA Cup 2001-02",2002,3),trophy("FA Community Shield 2002",2002,1.5),trophy("FA Cup 2002-03",2003,3),trophy("Premier League 2003-04",2004,4),trophy("FA Community Shield 2004",2004,1.5),trophy("FA Cup 2004-05",2005,3),trophy("FA Cup 2013-14",2014,3),trophy("FA Community Shield 2014",2014,1.5),trophy("FA Cup 2014-15",2015,3),trophy("FA Community Shield 2015",2015,1.5),trophy("FA Cup 2016-17",2017,3),trophy("FA Community Shield 2017",2017,1.5),trophy("FA Cup 2019-20",2020,3),trophy("FA Community Shield 2020",2020,1.5),trophy("FA Community Shield 2023",2023,1.5)];
const FALLBACK_ROWS=`
Thierry Henry|France|FW|1999-2007, 2012|369|7|376|228
Dennis Bergkamp|Netherlands|FW|1995-2006|402|21|423|120
Patrick Vieira|France|MF|1996-2005|379|26|405|34
Tony Adams|England|DF|1983-2002|621|51|672|48
Ian Wright|England|FW|1991-1998|248|40|288|185
David Seaman|England|GK|1990-2003|532|32|564|0
Robert Pires|France|MF|2000-2006|252|32|284|84
Cesc Fabregas|Spain|MF|2003-2011|262|41|303|57
Ashley Cole|England|DF|1999-2006|207|21|228|9
Sol Campbell|England|DF|2001-2006, 2010|196|15|211|12
Freddie Ljungberg|Sweden|MF|1998-2007|279|49|328|72
Gilberto|Brazil|MF|2002-2008|222|22|244|24
Kolo Toure|Ivory Coast|DF|2002-2009|304|22|326|14
Jens Lehmann|Germany|GK|2003-2008, 2011|197|3|200|0
Robin van Persie|Netherlands|FW|2004-2012|238|40|278|132
Theo Walcott|England|FW|2006-2018|270|127|397|108
Mesut Ozil|Germany|MF|2013-2021|216|38|254|44
Alexis Sanchez|Chile|FW|2014-2018|145|21|166|80
Olivier Giroud|France|FW|2012-2018|180|73|253|105
Santi Cazorla|Spain|MF|2012-2018|166|14|180|29
Aaron Ramsey|Wales|MF|2008-2019|262|107|369|64
Laurent Koscielny|France|DF|2010-2019|324|29|353|27
Hector Bellerin|Spain|DF|2013-2022|211|28|239|9
Pierre-Emerick Aubameyang|Gabon|FW|2018-2022|138|25|163|92
Bukayo Saka|England|FW|2018-|242|22|264|71
Gabriel Martinelli|Brazil|FW|2019-|184|54|238|51
Martin Odegaard|Norway|MF|2021-|203|13|216|38
Declan Rice|England|MF|2023-|104|4|108|15
William Saliba|France|DF|2022-|134|0|134|7
Gabriel|Brazil|DF|2020-|231|4|235|21
Ben White|England|DF|2021-|168|2|170|6
David Raya|Spain|GK|2023-|104|0|104|0
Kai Havertz|Germany|MF|2023-|103|18|121|30
Leandro Trossard|Belgium|FW|2023-|89|31|120|28
Gabriel Jesus|Brazil|FW|2022-|84|29|113|26
`;
const imageCache=new Map();
function cleanText(value){return String(value||"").replace(/\[[^\]]*\]/g,"").replace(/\s+/g," ").replace(/\u00a0/g," ").trim();}
function parseNumber(value){const match=cleanText(value).replace(/,/g,"").match(/\d+/);return match?Number(match[0]):0;}
function parseCareerYears(value){const years=cleanText(value).match(/(?:19|20)\d{2}/g)||[];const start=years[0]?Number(years[0]):WENGER_START_YEAR;const end=years.length>1?Number(years[years.length-1]):CURRENT_YEAR;return{raw:cleanText(value),start,end};}
function wikiTitleFromHref(href){if(!href||!href.includes("/wiki/"))return"";return decodeURIComponent(href.split("/wiki/")[1]||"").replace(/_/g," ");}
function normalizePositionGroups(value){const text=cleanText(value).toUpperCase();if(/GK|GOALKEEPER/.test(text))return["GK"];if(/DF|DEFENDER|FULL.?BACK|CENTRE.?BACK|CENTER.?BACK/.test(text))return["DF"];if(/MF|MIDFIELDER|WINGER/.test(text))return["MF"];if(/FW|FORWARD|STRIKER/.test(text))return["FW"];return["MF"];}
function roleFamily(role){if(role==="GK")return"GK";if(["CB","LB","RB","LWB","RWB"].includes(role))return"DF";if(["CM","DM","AM","LM","RM"].includes(role))return"MF";return"FW";}
function roleSide(role){if(["LB","LWB","LM","LW"].includes(role))return"left";if(["RB","RWB","RM","RW"].includes(role))return"right";return"central";}
function getRoles(name,groups){if(ROLE_OVERRIDES[name])return ROLE_OVERRIDES[name];const roles=groups.flatMap(group=>POSITION_ROLES[group]||[]);return roles.length?[...new Set(roles)]:["CM"];}
function normalizeName(name){return cleanText(name).replace(/\s*\(footballer.*?\)/i,"").replace(/\s*Jr\.?$/i," Jr.").trim();}
function playerFromRow(row,source){const[name,nationality,position,years,starts,subs,total,goals]=row;const cleanName=normalizeName(name);const groups=normalizePositionGroups(position);const career=parseCareerYears(years);const appearances={starts:parseNumber(starts),subs:parseNumber(subs),total:parseNumber(total)};const player={id:cleanName.toLowerCase().replace(/[^a-z0-9]+/g,"-"),name:cleanName,nationality:cleanText(nationality)||"Unknown",positionGroup:groups,positions:getRoles(cleanName,groups),sourcePosition:cleanText(position),years:career.raw,career,appearances,goals:parseNumber(goals),assists:null,image:"",wikiTitle:cleanName,source,ratingBase:70,honours:[],bio:""};player.honours=inferHonours(player);player.ratingBase=inferRatingBase(player);player.bio=makeBio(player);return player;}
function inferHonours(player){const clubHonours=TROPHIES.filter(item=>player.career.start<=item.year&&player.career.end>=item.year&&player.appearances.total>=5).map(item=>item.label);return[...clubHonours,...(SPECIAL_HONOURS[player.name]||[])];}
function inferRatingBase(player){if(RATING_OVERRIDES[player.name])return RATING_OVERRIDES[player.name];const apps=player.appearances.total;const goals=player.goals;const goalFactor=player.positionGroup.includes("FW")?0.14:player.positionGroup.includes("MF")?0.1:0.06;const base=51+Math.sqrt(apps)*1.65+Math.sqrt(goals)*goalFactor*8+Math.min(8,player.honours.length*0.75);return clamp(Math.round(base),apps>=100?73:58,91);}
function makeBio(player){const goalText=player.goals===1?"1 goal":`${player.goals} goals`;return`${player.name} is listed as a ${player.positions.join("/")} for Arsenal from ${player.years}, with ${player.appearances.total} competitive appearances and ${goalText}.`;}
function parseWikiTable(html,source){const doc=new DOMParser().parseFromString(html,"text/html");const rows=[];doc.querySelectorAll("table.wikitable tbody tr").forEach(row=>{const cells=[...row.querySelectorAll("td")];if(cells.length<8)return;const playerCell=cells[0];const nameLink=[...playerCell.querySelectorAll("a")].find(link=>link.getAttribute("href")?.includes("/wiki/")&&cleanText(link.textContent));const name=cleanText(nameLink?.textContent||playerCell.textContent);if(!name||/player/i.test(name))return;const nationality=cleanText(cells[1].textContent)||cleanText(cells[1].querySelector("img")?.getAttribute("alt"))||cleanText(cells[1].querySelector("a")?.getAttribute("title"))||"Unknown";const player=playerFromRow([name,nationality,cells[2].textContent,cells[3].textContent,cells[4].textContent,cells[5].textContent,cells[6].textContent,cells[7].textContent],source);player.wikiTitle=wikiTitleFromHref(nameLink?.getAttribute("href"))||player.name;rows.push(player);});return rows;}
function parseFallbackPlayers(){return FALLBACK_ROWS.trim().split("\n").map(line=>playerFromRow(line.split("|"),{label:"Offline seed data",url:"local fallback",sourcePage:"Fallback"}));}
async function fetchWikiPage(page,signal){const url=`https://en.wikipedia.org/w/api.php?action=parse&page=${page.title}&prop=text&format=json&origin=*`;const response=await fetch(url,{signal});if(!response.ok)throw new Error(`${page.label}: ${response.status}`);const payload=await response.json();if(!payload.parse?.text?.["*"])throw new Error(`${page.label}: missing parse HTML`);return parseWikiTable(payload.parse.text["*"],{label:page.label,url:page.url,sourcePage:page.title});}
function dedupePlayers(players){const byName=new Map();players.forEach(player=>{if(player.career.end<WENGER_START_YEAR)return;const existing=byName.get(player.name);if(!existing||player.appearances.total>existing.appearances.total)byName.set(player.name,player);});return[...byName.values()].sort((a,b)=>b.appearances.total-a.appearances.total||a.name.localeCompare(b.name));}
function usePlayers(){const players=useMemo(()=>parseFallbackPlayers(),[]);return{players,loading:false,sourceMode:"seed",error:"",loadedPages:0};}
function getPositionFit(player,slotRole){if(player.positions.includes(slotRole))return 15;const slotFamily=roleFamily(slotRole);const playerFamilies=new Set(player.positions.map(roleFamily));if(playerFamilies.has(slotFamily))return player.positions.some(role=>roleSide(role)===roleSide(slotRole))?13:11;if(["LW","RW","LM","RM"].includes(slotRole)&&player.positions.some(role=>["LW","RW","LM","RM"].includes(role)))return 9;if(slotFamily==="MF"&&playerFamilies.has("FW")&&player.positions.some(role=>["AM","LW","RW"].includes(role)))return 8;return slotRole==="GK"||player.positions.includes("GK")?0:3;}
function scorePlayer(player,slotRole){const baseAbility=player.ratingBase/100*40;const appearancePart=Math.min(14,Math.sqrt(player.appearances.total)/Math.sqrt(500)*14);const goalCeiling=player.positionGroup.includes("FW")?180:player.positionGroup.includes("MF")?90:35;const goalPart=Math.min(8,player.goals/goalCeiling*8);const assistPart=Number.isFinite(player.assists)?Math.min(3,player.assists/80*3):1.5;const contribution=appearancePart+goalPart+assistPart;const honoursBonus=Math.min(20,player.honours.reduce((total,honour)=>total+honourWeight(honour),0));const positionFit=getPositionFit(player,slotRole);return{baseAbility,contribution,honoursBonus,positionFit,total:clamp(baseAbility+contribution+honoursBonus+positionFit,0,100)};}
function honourWeight(label){if(/Premier League/i.test(label))return 4;if(/FA Cup/i.test(label))return 3;if(/Community Shield/i.test(label))return 1.5;if(/all-time|captain|Hall of Fame|Golden Boot|Player/i.test(label))return 2;return 1;}
function chooseCandidate(players,used,slotDef){const eligible=players.filter(player=>!used.has(player.id)&&getPositionFit(player,slotDef.role)>=8).map(player=>({player,weight:getPositionFit(player,slotDef.role)*5+player.ratingBase+Math.random()*24})).sort((a,b)=>b.weight-a.weight);if(eligible.length){const pool=eligible.slice(0,Math.min(24,eligible.length));return pool[Math.floor(Math.random()*pool.length)].player;}return players.find(player=>!used.has(player.id));}
function generateLineup(players,formationName){const slots=FORMATIONS[formationName];const used=new Set();const order={GK:0,DF:1,MF:2,FW:3};const sortedSlots=[...slots].sort((a,b)=>order[roleFamily(a.role)]-order[roleFamily(b.role)]);const picks=new Map();sortedSlots.forEach(slotDef=>{const player=chooseCandidate(players,used,slotDef);if(!player)return;used.add(player.id);picks.set(slotDef.id,player);});return slots.map(slotDef=>({slot:slotDef,player:picks.get(slotDef.id)||null}));}
function squadScore(lineup){const scored=lineup.filter(item=>item.player).map(item=>({...item,score:scorePlayer(item.player,item.slot.role)}));if(!scored.length)return{total:0,average:0,formationBonus:0,fit:0,scored};const average=scored.reduce((sum,item)=>sum+item.score.total,0)/scored.length;const fit=scored.reduce((sum,item)=>sum+item.score.positionFit,0)/(scored.length*15);const formationBonus=fit>=0.92?3:fit>=0.82?2:fit>=0.72?1:0;return{total:clamp(average+formationBonus,0,100),average,formationBonus,fit,scored};}
function useWikiImage(player){const[src,setSrc]=useState("");useEffect(()=>{let cancelled=false;if(!player?.wikiTitle){setSrc("");return()=>{cancelled=true;};}const key=player.wikiTitle;if(imageCache.has(key)){setSrc(imageCache.get(key));return()=>{cancelled=true;};}async function loadImage(){try{const url=`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(key.replace(/ /g,"_"))}`;const response=await fetch(url);if(!response.ok)throw new Error("image unavailable");const payload=await response.json();const image=payload.thumbnail?.source||payload.originalimage?.source||"";imageCache.set(key,image);if(!cancelled)setSrc(image);}catch{imageCache.set(key,"");if(!cancelled)setSrc("");}}setSrc("");loadImage();return()=>{cancelled=true;};},[player?.wikiTitle]);return src;}
function App(){
  const{players,loading,sourceMode,error,loadedPages}=usePlayers();
  const[formation,setFormation]=useState("4-3-3");
  const[lineup,setLineup]=useState([]);
  const[selected,setSelected]=useState(null);
  const[query,setQuery]=useState("");
  const[rolling,setRolling]=useState(false);
  const playablePlayers=useMemo(()=>players.filter(player=>player.appearances.total>0),[players]);
  const rollLineup=useCallback(()=>{
    if(!playablePlayers.length)return;
    setRolling(true);
    const next=generateLineup(playablePlayers,formation);
    setLineup(next);
    setSelected(next.find(item=>item.player)?.player||null);
    window.setTimeout(()=>setRolling(false),760);
  },[formation,playablePlayers]);
  useEffect(()=>{if(playablePlayers.length&&!lineup.length)rollLineup();},[lineup.length,playablePlayers.length,rollLineup]);
  useEffect(()=>{if(playablePlayers.length)rollLineup();},[formation]);
  const score=useMemo(()=>squadScore(lineup),[lineup]);
  const selectedLineupItem=score.scored.find(item=>item.player?.id===selected?.id);
  const filteredPlayers=useMemo(()=>{
    const value=query.trim().toLowerCase();
    if(!value)return players.slice(0,160);
    return players.filter(player=>`${player.name} ${player.nationality} ${player.positions.join(" ")} ${player.years}`.toLowerCase().includes(value)).slice(0,220);
  },[players,query]);

  const header=h("header",{className:"topbar"},
    h("div",{className:"brand"},
      h("div",{className:"crest"},"A"),
      h("div",null,
        h("strong",null,"Arsenal XI Forge"),
        h("span",null,sourceMode==="live"?`Live public database - ${players.length} players`:sourceMode==="seed"?`Local seed ready - ${players.length} players`:`Offline seed - ${players.length} players`)
      )
    ),
    h("nav",{className:"formation-tabs","aria-label":"Formation"},
      Object.keys(FORMATIONS).map(name=>h("button",{key:name,type:"button",className:name===formation?"active":"",onClick:()=>setFormation(name)},name))
    ),
    h("button",{className:"generate-button",type:"button",onClick:rollLineup,disabled:!playablePlayers.length},h("span",null,"Generate XI"))
  );

  const scoreHud=h("div",{className:"score-hud"},
    h("div",{className:"score-ring",style:{"--score":`${score.total*3.6}deg`}},
      h("strong",null,Math.round(score.total)),
      h("span",null,"Squad Score")
    ),
    h("div",{className:"score-break"},
      h("span",null,`Average ${score.average.toFixed(1)}`),
      h("span",null,`Formation +${score.formationBonus}`),
      h("span",null,`Fit ${Math.round(score.fit*100)}%`)
    )
  );

  const pitch=h("div",{className:"pitch"},
    h("div",{className:"pitch-glow"}),
    h("div",{className:"halfway-line"}),
    h("div",{className:"center-circle"}),
    h("div",{className:"box box-top"}),
    h("div",{className:"box box-bottom"}),
    lineup.map(item=>h(PlayerToken,{key:item.slot.id,item,selected:selected?.id===item.player?.id,onSelect:setSelected}))
  );

  const pitchSection=h("section",{className:"pitch-zone"},
    scoreHud,
    pitch,
    h("div",{className:"data-strip"},
      h("span",null,loading?`Loading public tables ${loadedPages}/${SOURCE_PAGES.length}`:"Data ready"),
      h("span",null,sourceMode==="seed"?"Local seed database active":sourceMode==="fallback"?`Offline mode: ${error}`:"Snapshot source: Wikipedia player lists")
    )
  );

  const roster=h("div",{className:"roster-panel"},
    h("div",{className:"panel-heading"},h("strong",null,"Player Database"),h("span",null,`${players.length} loaded`)),
    h("input",{value:query,onChange:event=>setQuery(event.target.value),placeholder:"Search player, country, role, year"}),
    h("div",{className:"roster-list"},
      filteredPlayers.map(player=>h("button",{key:player.id,type:"button",onClick:()=>setSelected(player),className:selected?.id===player.id?"selected":""},
        h("span",null,player.name),
        h("small",null,`${player.positions.slice(0,3).join("/")} - ${player.appearances.total}`)
      ))
    )
  );

  const side=h("aside",{className:"side-panel"},
    selected?h(PlayerDetail,{player:selected,score:selectedLineupItem?.score}):h(EmptyDetail,{loading}),
    roster
  );

  return h("div",{className:`app ${rolling?"is-rolling":""}`},
    h(ParticleField),
    h("div",{className:"scanline"}),
    header,
    h("main",{className:"layout"},pitchSection,side)
  );
}
function ParticleField(){return h("div",{className:"particle-field","aria-hidden":"true"},Array.from({length:34},(_,index)=>h("i",{key:index,style:{"--x":`${index*37%100}%`,"--delay":`${index%11*-0.63}s`,"--duration":`${6+index%7*0.7}s`,"--size":`${2+index%4}px`}})));}
function PlayerToken({item,selected,onSelect}){const{slot:slotDef,player}=item;const image=useWikiImage(player);const score=player?scorePlayer(player,slotDef.role):null;return h("button",{type:"button",className:`player-token ${selected?"selected":""}`,style:{left:`${slotDef.x}%`,top:`${slotDef.y}%`},onMouseEnter:()=>player&&onSelect(player),onFocus:()=>player&&onSelect(player),onClick:()=>player&&onSelect(player)},h("span",{className:"token-role"},slotDef.role),h("span",{className:"token-avatar"},image?h("img",{src:image,alt:player.name,loading:"lazy"}):h("span",null,initials(player?.name||slotDef.role))),h("span",{className:"token-name"},player?.name||"Empty"),h("span",{className:"token-rating"},score?Math.round(score.total):"--"));}
function PlayerDetail({player,score}){const image=useWikiImage(player);return h("section",{className:"player-detail"},h("div",{className:"detail-hero"},h("div",{className:"detail-avatar"},image?h("img",{src:image,alt:player.name}):h("span",null,initials(player.name))),h("div",null,h("span",{className:"kicker"},player.positions.join(" / ")),h("h1",null,player.name),h("p",null,player.nationality))),h("div",{className:"stat-grid"},stat("Apps",player.appearances.total),stat("Goals",player.goals),stat("Assists",Number.isFinite(player.assists)?player.assists:"N/A"),stat("Base",player.ratingBase)),h("p",{className:"bio"},player.bio),score&&h("div",{className:"breakdown"},h("div",{className:"panel-heading"},h("strong",null,"Score Breakdown"),h("span",null,`${Math.round(score.total)}/100`)),meter("Base Ability",score.baseAbility,40),meter("Arsenal Contribution",score.contribution,25),meter("Honours Bonus",score.honoursBonus,20),meter("Position Fit",score.positionFit,15)),h("div",{className:"honours"},h("div",{className:"panel-heading"},h("strong",null,"Honours"),h("span",null,`${player.honours.length}`)),player.honours.length?player.honours.slice(0,12).map(honour=>h("span",{key:honour},honour)):h("em",null,"No verified Arsenal honours in this dataset")),h("a",{className:"source-link",href:player.source.url==="local fallback"?WIKI_BASE:player.source.url,target:"_blank",rel:"noreferrer"},`Source - ${player.source.label}`));}
function EmptyDetail({loading}){return h("section",{className:"player-detail empty-state"},h("span",{className:"kicker"},"Arsenal Database"),h("h1",null,loading?"Loading squad archive":"Generate a lineup"),h("p",null,loading?"Public player tables are being loaded.":"Select any player card or database row."));}
function stat(label,value){return h("div",{className:"stat"},h("span",null,label),h("strong",null,value));}
function meter(label,value,max){const percent=clamp(value/max,0,1)*100;return h("div",{className:"meter"},h("div",null,h("span",null,label),h("strong",null,`${value.toFixed(1)} / ${max}`)),h("i",null,h("b",{style:{width:`${percent}%`}})));}
function initials(name){return cleanText(name).split(/\s+/).slice(0,2).map(part=>part[0]||"").join("").toUpperCase();}
createRoot(document.getElementById("root")).render(h(App));