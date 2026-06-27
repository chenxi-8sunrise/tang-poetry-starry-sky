import React, { useEffect, useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import "./styles.css";

const h = React.createElement;

const DATA_BASES = [
  "https://raw.githubusercontent.com/chinese-poetry/chinese-poetry/master/%E5%85%A8%E5%94%90%E8%AF%97/",
  "https://cdn.jsdelivr.net/gh/chinese-poetry/chinese-poetry@master/%E5%85%A8%E5%94%90%E8%AF%97/"
];

const CHUNK_IDS = Array.from({ length: 58 }, (_, index) => index * 1000);
const THEME_ORDER = ["山水", "边塞", "离别", "宫廷", "佛道", "咏物", "四时", "怀古", "田园", "酬赠", "其他"];
const STAGE_ORDER = ["初唐", "盛唐", "中唐", "晚唐", "未分期"];
const FORM_ORDER = ["五言绝句", "七言绝句", "五言律诗", "七言律诗", "五言古体", "七言古体", "古体/杂言"];

const THEME_COLORS = {
  山水: "#64d2aa",
  边塞: "#d88955",
  离别: "#8da7ff",
  宫廷: "#e2c46c",
  佛道: "#b99cff",
  咏物: "#ef6f9f",
  四时: "#6fd7e8",
  怀古: "#cfc7a3",
  田园: "#a8d46f",
  酬赠: "#ffb36b",
  其他: "#f4f1de"
};

const THEME_RULES = [
  ["山水", ["山", "水", "江", "河", "峰", "嶺", "岭", "雲", "云", "溪", "泉", "松", "石", "林", "月"]],
  ["边塞", ["塞", "邊", "边", "胡", "羌", "戎", "沙", "烽", "關", "关", "馬", "马", "軍", "军", "甲", "戰", "战"]],
  ["离别", ["別", "别", "送", "離", "离", "歸", "归", "客", "舟", "驛", "驿", "淚", "泪", "故人", "相思"]],
  ["宫廷", ["宮", "宫", "闕", "阙", "殿", "帝", "皇", "御", "苑", "鳳", "凤", "龍", "龙", "朝"]],
  ["佛道", ["僧", "寺", "禪", "禅", "佛", "道", "仙", "觀", "观", "庵", "經", "经", "塔"]],
  ["咏物", ["花", "梅", "菊", "柳", "竹", "草", "鳥", "鸟", "鶴", "鹤", "蟬", "蝉", "燕"]],
  ["四时", ["春", "夏", "秋", "冬", "雪", "雨", "霜", "風", "风", "寒", "暑", "夜"]],
  ["怀古", ["古", "昔", "舊", "旧", "秦", "漢", "汉", "晉", "晋", "陵", "臺", "台", "史"]],
  ["田园", ["田", "園", "园", "農", "农", "村", "桑", "麻", "柴", "牧", "樵", "釣", "钓"]],
  ["酬赠", ["寄", "贈", "赠", "答", "酬", "和", "奉", "呈", "憶", "忆", "懷", "怀"]]
];

const STAGE_AUTHORS = {
  初唐: ["太宗皇帝", "上官昭容", "王勃", "楊炯", "杨炯", "盧照鄰", "卢照邻", "駱賓王", "骆宾王", "陳子昂", "陈子昂", "沈佺期", "宋之問", "宋之问", "張九齡", "张九龄"],
  盛唐: ["李白", "杜甫", "王維", "王维", "孟浩然", "岑參", "岑参", "高適", "高适", "王昌齡", "王昌龄", "王之渙", "王之涣", "王翰", "常建", "崔顥", "崔颢", "李頎", "李颀", "賀知章", "贺知章", "張旭", "张旭"],
  中唐: ["白居易", "元稹", "韓愈", "韩愈", "柳宗元", "劉禹錫", "刘禹锡", "孟郊", "賈島", "贾岛", "張籍", "张籍", "王建", "韋應物", "韦应物", "李賀", "李贺"],
  晚唐: ["李商隱", "李商隐", "杜牧", "溫庭筠", "温庭筠", "韋莊", "韦庄", "許渾", "许浑", "司空圖", "司空图", "皮日休", "陸龜蒙", "陆龟蒙", "羅隱", "罗隐", "杜荀鶴", "杜荀鹤"]
};

const SAMPLE_POEMS = [
  { author: "李白", title: "靜夜思", paragraphs: ["牀前明月光，疑是地上霜。", "舉頭望明月，低頭思故鄉。"] },
  { author: "王維", title: "鹿柴", paragraphs: ["空山不見人，但聞人語響。", "返景入深林，復照青苔上。"] },
  { author: "杜甫", title: "春望", paragraphs: ["國破山河在，城春草木深。", "感時花濺淚，恨別鳥驚心。", "烽火連三月，家書抵萬金。", "白頭搔更短，渾欲不勝簪。"] },
  { author: "王昌齡", title: "出塞", paragraphs: ["秦時明月漢時關，萬里長征人未還。", "但使龍城飛將在，不教胡馬度陰山。"] },
  { author: "白居易", title: "賦得古原草送別", paragraphs: ["離離原上草，一歲一枯榮。", "野火燒不盡，春風吹又生。", "遠芳侵古道，晴翠接荒城。", "又送王孫去，萋萋滿別情。"] },
  { author: "李商隱", title: "夜雨寄北", paragraphs: ["君問歸期未有期，巴山夜雨漲秋池。", "何當共剪西窗燭，卻話巴山夜雨時。"] }
];

function splitPoeticLines(paragraphs) {
  return paragraphs
    .flatMap(line => String(line).split(/[，。！？；：]/))
    .map(line => line.trim())
    .filter(Boolean);
}

function countChineseChars(value) {
  const matches = String(value).match(/[\u3400-\u9fff]/g);
  return matches ? matches.length : 0;
}

function inferForm(paragraphs) {
  const lines = splitPoeticLines(paragraphs);
  const lengths = lines.map(countChineseChars).filter(Boolean);
  const everyLength = length => lengths.length > 0 && lengths.every(item => item === length);

  if (lengths.length === 4 && everyLength(5)) return "五言绝句";
  if (lengths.length === 4 && everyLength(7)) return "七言绝句";
  if (lengths.length === 8 && everyLength(5)) return "五言律诗";
  if (lengths.length === 8 && everyLength(7)) return "七言律诗";
  if (everyLength(5)) return "五言古体";
  if (everyLength(7)) return "七言古体";
  return "古体/杂言";
}

function inferTheme(text) {
  let bestTheme = "其他";
  let bestScore = 0;

  for (const [theme, words] of THEME_RULES) {
    const score = words.reduce((total, word) => total + (text.includes(word) ? 1 : 0), 0);
    if (score > bestScore) {
      bestTheme = theme;
      bestScore = score;
    }
  }

  return bestTheme;
}

function inferStage(author) {
  for (const [stage, authors] of Object.entries(STAGE_AUTHORS)) {
    if (authors.some(name => author.includes(name))) {
      return stage;
    }
  }

  return "未分期";
}

function hashString(value) {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function randomUnit(seed) {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
}

function makeStarPosition(poem) {
  const themeIndex = Math.max(0, THEME_ORDER.indexOf(poem.theme));
  const stageIndex = Math.max(0, STAGE_ORDER.indexOf(poem.stage));
  const seed = hashString(`${poem.author}|${poem.title}|${poem.sourceIndex}`);
  const angle = (themeIndex / THEME_ORDER.length) * Math.PI * 2 + (randomUnit(seed) - 0.5) * 0.5;
  const lengthWeight = Math.min(1, poem.charCount / 220);
  const radius = 160 + lengthWeight * 270 + randomUnit(seed + 7) * 90;
  const stageOffset = (stageIndex - (STAGE_ORDER.length - 1) / 2) * 115;
  const y = stageOffset + (randomUnit(seed + 13) - 0.5) * 70;
  const x = Math.cos(angle) * radius + (randomUnit(seed + 19) - 0.5) * 90;
  const z = Math.sin(angle) * radius + (randomUnit(seed + 29) - 0.5) * 90;
  return [x, y, z];
}

function normalizePoem(item, sourceIndex) {
  const paragraphs = Array.isArray(item.paragraphs) ? item.paragraphs.filter(Boolean).map(String) : [];
  const author = String(item.author || "佚名");
  const title = String(item.title || `未题 ${sourceIndex + 1}`);
  const lines = splitPoeticLines(paragraphs);
  const body = paragraphs.join("\n");
  const searchable = `${author} ${title} ${body}`.toLowerCase();
  const charCount = countChineseChars(body);
  const form = inferForm(paragraphs);
  const theme = inferTheme(`${title}${body}`);
  const stage = inferStage(author);

  return {
    id: `${sourceIndex}-${hashString(`${author}-${title}-${body}`)}`,
    sourceIndex,
    author,
    title,
    paragraphs,
    firstLine: lines[0] || paragraphs[0] || "",
    body,
    searchable,
    charCount,
    lineCount: lines.length,
    form,
    theme,
    stage,
    position: makeStarPosition({ author, title, sourceIndex, charCount, theme, stage })
  };
}

async function fetchPoemChunk(chunkId, signal) {
  const filename = `poet.tang.${chunkId}.json`;
  let lastError = null;

  for (const base of DATA_BASES) {
    try {
      const response = await fetch(`${base}${filename}`, { signal, cache: "force-cache" });
      if (!response.ok) {
        lastError = new Error(`${filename}: ${response.status}`);
        continue;
      }

      return await response.json();
    } catch (error) {
      if (signal.aborted) throw error;
      lastError = error;
    }
  }

  throw lastError || new Error(`${filename}: load failed`);
}

async function loadTangPoems(onBatch, onProgress, signal) {
  let remoteAvailable = false;
  let loadedChunks = 0;
  let failedChunks = 0;

  try {
    const firstChunk = await fetchPoemChunk(0, signal);
    remoteAvailable = true;
    loadedChunks += 1;
    onBatch(firstChunk.map((item, index) => normalizePoem(item, index)));
    onProgress({ loadedChunks, failedChunks, totalChunks: CHUNK_IDS.length, source: "remote" });
  } catch (error) {
    if (signal.aborted) return;
    onBatch(SAMPLE_POEMS.map((item, index) => normalizePoem(item, index)));
    onProgress({ loadedChunks: 0, failedChunks: CHUNK_IDS.length, totalChunks: CHUNK_IDS.length, source: "sample" });
    return;
  }

  const remainingChunks = CHUNK_IDS.slice(1);
  let cursor = 0;

  async function worker() {
    while (!signal.aborted && cursor < remainingChunks.length) {
      const chunkId = remainingChunks[cursor];
      cursor += 1;

      try {
        const chunk = await fetchPoemChunk(chunkId, signal);
        const normalized = chunk.map((item, index) => normalizePoem(item, chunkId + index));
        onBatch(normalized);
        loadedChunks += 1;
      } catch (error) {
        if (signal.aborted) return;
        failedChunks += 1;
      }

      onProgress({
        loadedChunks,
        failedChunks,
        totalChunks: CHUNK_IDS.length,
        source: remoteAvailable ? "remote" : "sample"
      });
    }
  }

  await Promise.all([worker(), worker(), worker(), worker()]);
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function makeGeometry(poems) {
  const positions = new Float32Array(poems.length * 3);
  const colors = new Float32Array(poems.length * 3);
  const sizes = new Float32Array(poems.length);
  const color = new THREE.Color();

  poems.forEach((poem, index) => {
    const [x, y, z] = poem.position;
    positions[index * 3] = x;
    positions[index * 3 + 1] = y;
    positions[index * 3 + 2] = z;

    color.set(THEME_COLORS[poem.theme] || THEME_COLORS["其他"]);
    colors[index * 3] = color.r;
    colors[index * 3 + 1] = color.g;
    colors[index * 3 + 2] = color.b;
    sizes[index] = clamp(3.8 + Math.sqrt(Math.max(poem.charCount, 1)) * 0.42, 5, 14);
  });

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("customColor", new THREE.BufferAttribute(colors, 3));
  geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));
  geometry.computeBoundingSphere();
  return geometry;
}

function StarField({ poems, onHover, onSelect }) {
  const mountRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const sceneRef = useRef(null);
  const pointsRef = useRef(null);
  const poemsRef = useRef(poems);
  const hoverRef = useRef(null);

  useEffect(() => {
    poemsRef.current = poems;

    if (!pointsRef.current) {
      return;
    }

    const oldGeometry = pointsRef.current.geometry;
    pointsRef.current.geometry = makeGeometry(poems);
    oldGeometry.dispose();
  }, [poems]);

  useEffect(() => {
    const mount = mountRef.current;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#05070a");
    scene.fog = new THREE.FogExp2("#05070a", 0.0009);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(58, mount.clientWidth / mount.clientHeight, 1, 3000);
    camera.position.set(0, 220, 920);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, preserveDrawingBuffer: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.07;
    controls.enablePan = true;
    controls.minDistance = 170;
    controls.maxDistance = 1500;
    controls.rotateSpeed = 0.35;
    controls.zoomSpeed = 0.75;
    controls.panSpeed = 0.75;

    const material = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexShader: `
        attribute float size;
        attribute vec3 customColor;
        varying vec3 vColor;

        void main() {
          vColor = customColor;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * (720.0 / max(120.0, -mvPosition.z));
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;

        void main() {
          vec2 center = gl_PointCoord - vec2(0.5);
          float distanceToCenter = length(center);
          float alpha = smoothstep(0.5, 0.08, distanceToCenter);
          float core = smoothstep(0.18, 0.0, distanceToCenter);
          gl_FragColor = vec4(vColor + core * 0.45, alpha);
        }
      `
    });

    const points = new THREE.Points(makeGeometry(poemsRef.current), material);
    scene.add(points);
    pointsRef.current = points;

    const raycaster = new THREE.Raycaster();
    raycaster.params.Points.threshold = 9;
    const pointer = new THREE.Vector2();

    function updatePointer(event) {
      const rect = renderer.domElement.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(pointer, camera);
      const hits = raycaster.intersectObject(points);

      if (hits.length > 0) {
        const poem = poemsRef.current[hits[0].index];
        if (poem) {
          hoverRef.current = poem;
          renderer.domElement.style.cursor = "pointer";
          onHover({ poem, x: event.clientX, y: event.clientY });
          return;
        }
      }

      hoverRef.current = null;
      renderer.domElement.style.cursor = "grab";
      onHover(null);
    }

    function handleClick() {
      if (hoverRef.current) {
        onSelect(hoverRef.current);
      }
    }

    function handleResize() {
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }

    renderer.domElement.addEventListener("pointermove", updatePointer);
    renderer.domElement.addEventListener("click", handleClick);
    window.addEventListener("resize", handleResize);

    let animationId = 0;
    function animate() {
      animationId = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      renderer.domElement.removeEventListener("pointermove", updatePointer);
      renderer.domElement.removeEventListener("click", handleClick);
      window.removeEventListener("resize", handleResize);
      controls.dispose();
      material.dispose();
      points.geometry.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, [onHover, onSelect]);

  return h("div", { className: "starfield", ref: mountRef });
}

function usePoemData() {
  const [poems, setPoems] = useState([]);
  const [loadState, setLoadState] = useState({
    loadedChunks: 0,
    failedChunks: 0,
    totalChunks: CHUNK_IDS.length,
    source: "remote",
    done: false
  });

  useEffect(() => {
    const controller = new AbortController();

    loadTangPoems(
      batch => {
        setPoems(previous => previous.concat(batch));
      },
      progress => {
        setLoadState(previous => ({
          ...previous,
          ...progress,
          done: progress.loadedChunks + progress.failedChunks >= progress.totalChunks
        }));
      },
      controller.signal
    );

    return () => controller.abort();
  }, []);

  return { poems, loadState };
}

function uniqueCounts(poems, key) {
  const counts = new Map();
  poems.forEach(poem => counts.set(poem[key], (counts.get(poem[key]) || 0) + 1));
  return [...counts.entries()].sort((a, b) => b[1] - a[1]);
}

function App() {
  const { poems, loadState } = usePoemData();
  const [query, setQuery] = useState("");
  const [authorFilter, setAuthorFilter] = useState("");
  const [themeFilter, setThemeFilter] = useState("全部");
  const [stageFilter, setStageFilter] = useState("全部");
  const [formFilter, setFormFilter] = useState("全部");
  const [hover, setHover] = useState(null);
  const [selectedPoem, setSelectedPoem] = useState(null);

  const authorOptions = useMemo(() => uniqueCounts(poems, "author").slice(0, 120), [poems]);

  const filteredPoems = useMemo(() => {
    const queryText = query.trim().toLowerCase();
    const authorText = authorFilter.trim();

    return poems.filter(poem => {
      if (queryText && !poem.searchable.includes(queryText)) return false;
      if (authorText && !poem.author.includes(authorText)) return false;
      if (themeFilter !== "全部" && poem.theme !== themeFilter) return false;
      if (stageFilter !== "全部" && poem.stage !== stageFilter) return false;
      if (formFilter !== "全部" && poem.form !== formFilter) return false;
      return true;
    });
  }, [poems, query, authorFilter, themeFilter, stageFilter, formFilter]);

  useEffect(() => {
    if (selectedPoem && !filteredPoems.some(poem => poem.id === selectedPoem.id)) {
      setSelectedPoem(null);
    }
  }, [filteredPoems, selectedPoem]);

  const statusText = loadState.source === "sample"
    ? "公开数据暂不可达，已载入样例"
    : `${loadState.done ? "已完成" : "加载中"} ${poems.length.toLocaleString("zh-CN")} 首`;

  return h("div", { className: "app" },
    h("header", { className: "topbar" },
      h("div", { className: "brand" },
        h("span", { className: "brand-mark" }, "唐"),
        h("div", null,
          h("strong", null, "唐诗星空"),
          h("span", null, statusText)
        )
      ),
      h("div", { className: "controls" },
        h("input", {
          value: query,
          placeholder: "搜索诗人、诗名、诗句",
          onChange: event => setQuery(event.target.value)
        }),
        h("input", {
          value: authorFilter,
          list: "author-options",
          placeholder: "诗人筛选",
          onChange: event => setAuthorFilter(event.target.value)
        }),
        h("datalist", { id: "author-options" },
          authorOptions.map(([author, count]) => h("option", { key: author, value: author }, `${author} ${count}`))
        ),
        h("select", { value: themeFilter, onChange: event => setThemeFilter(event.target.value), "aria-label": "主题" },
          ["全部", ...THEME_ORDER].map(theme => h("option", { key: theme, value: theme }, `主题 ${theme}`))
        ),
        h("select", { value: stageFilter, onChange: event => setStageFilter(event.target.value), "aria-label": "朝代阶段" },
          ["全部", ...STAGE_ORDER].map(stage => h("option", { key: stage, value: stage }, `阶段 ${stage}`))
        ),
        h("select", { value: formFilter, onChange: event => setFormFilter(event.target.value), "aria-label": "诗体" },
          ["全部", ...FORM_ORDER].map(form => h("option", { key: form, value: form }, `诗体 ${form}`))
        )
      )
    ),
    h("main", { className: "workspace" },
      h("section", { className: "sky" },
        h(StarField, { poems: filteredPoems, onHover: setHover, onSelect: setSelectedPoem }),
        hover && h("div", {
          className: "tooltip",
          style: {
            left: `${Math.min(window.innerWidth - 260, hover.x + 16)}px`,
            top: `${Math.min(window.innerHeight - 130, hover.y + 16)}px`
          }
        },
          h("strong", null, hover.poem.title),
          h("span", null, hover.poem.author),
          h("p", null, hover.poem.firstLine)
        ),
        h("div", { className: "metrics" },
          h("span", null, `${filteredPoems.length.toLocaleString("zh-CN")} / ${poems.length.toLocaleString("zh-CN")} 首`),
          h("span", null, `${loadState.loadedChunks}/${loadState.totalChunks} 批`)
        )
      ),
      h("aside", { className: "detail" },
        selectedPoem
          ? h(PoemDetail, { poem: selectedPoem })
          : h(Overview, { poems, filteredPoems, loadState })
      )
    )
  );
}

function Overview({ poems, filteredPoems, loadState }) {
  const themeCounts = useMemo(() => uniqueCounts(filteredPoems, "theme"), [filteredPoems]);

  return h("div", { className: "panel-content" },
    h("div", { className: "panel-kicker" }, "星图概览"),
    h("h1", null, poems.length ? `${filteredPoems.length.toLocaleString("zh-CN")} 首诗` : "正在载入"),
    h("p", { className: "muted" }, loadState.source === "sample" ? "当前显示本地样例数据。" : "数据来自公开《全唐诗》JSON，星点随数据批次渐进出现。"),
    h("div", { className: "legend-block" },
      h("h2", null, "星图编码"),
      h("p", null, "颜色代表主题，大小代表正文篇幅，纵向层级代表朝代阶段，环形扇区代表主题聚类。")
    ),
    h("div", { className: "legend-grid" },
      THEME_ORDER.map(theme => h("span", { key: theme },
        h("i", { style: { background: THEME_COLORS[theme] } }),
        theme
      ))
    ),
    h("div", { className: "theme-list" },
      themeCounts.slice(0, 6).map(([theme, count]) => h("div", { key: theme },
        h("span", null, theme),
        h("strong", null, count.toLocaleString("zh-CN"))
      ))
    )
  );
}

function PoemDetail({ poem }) {
  return h("div", { className: "panel-content poem-detail" },
    h("div", { className: "panel-kicker" }, poem.author),
    h("h1", null, poem.title),
    h("p", { className: "first-line" }, poem.firstLine),
    h("div", { className: "tag-row" },
      h("span", null, poem.theme),
      h("span", null, poem.stage),
      h("span", null, poem.form),
      h("span", null, `${poem.charCount} 字`)
    ),
    h("div", { className: "poem-body" },
      poem.paragraphs.map((line, index) => h("p", { key: `${poem.id}-${index}` }, line))
    )
  );
}

createRoot(document.getElementById("root")).render(h(App));
