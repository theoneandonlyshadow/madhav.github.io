const CHUNK_PUBLIC_PATH = "server/pages/_document.js";
const runtime = require("../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/ssr/node_modules__pnpm_b26fa0._.js");
runtime.loadChunk("server/chunks/ssr/[root of the server]__e237d7._.js");
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/node_modules/.pnpm/next@15.1.6_@babel+core@7.2_ba6a5888374c993a00a432bd6661b23f/node_modules/next/document.js [ssr] (ecmascript)", CHUNK_PUBLIC_PATH).exports;
