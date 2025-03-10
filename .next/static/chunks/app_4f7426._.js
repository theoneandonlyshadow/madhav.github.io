(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_4f7426._.js", {

"[project]/app/components/Curzr.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
const Cursor = ()=>{
    _s();
    const cursorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Cursor.useEffect": ()=>{
            class ArrowPointer {
                root;
                cursor;
                position;
                previousPointerX;
                previousPointerY;
                angle;
                previousAngle;
                angleDisplace;
                degrees;
                cursorSize;
                constructor(cursor){
                    this.root = document.body;
                    this.cursor = cursor;
                    this.position = {
                        distanceX: 0,
                        distanceY: 0,
                        distance: 0,
                        pointerX: 0,
                        pointerY: 0
                    };
                    this.previousPointerX = 0;
                    this.previousPointerY = 0;
                    this.angle = 0;
                    this.previousAngle = 0;
                    this.angleDisplace = 0;
                    this.degrees = 57.296;
                    this.cursorSize = 20;
                    this.init();
                }
                init() {
                    Object.assign(this.cursor.style, {
                        boxSizing: 'border-box',
                        position: 'fixed',
                        top: '0px',
                        left: `${-this.cursorSize / 2}px`,
                        zIndex: '2147483647',
                        width: `${this.cursorSize}px`,
                        height: `${this.cursorSize}px`,
                        transition: '250ms, transform 100ms',
                        userSelect: 'none',
                        pointerEvents: 'none'
                    });
                    this.cursor.removeAttribute('hidden');
                }
                move(event) {
                    this.previousPointerX = this.position.pointerX;
                    this.previousPointerY = this.position.pointerY;
                    this.position.pointerX = event.pageX + this.root.getBoundingClientRect().x;
                    this.position.pointerY = event.pageY + this.root.getBoundingClientRect().y;
                    this.position.distanceX = this.previousPointerX - this.position.pointerX;
                    this.position.distanceY = this.previousPointerY - this.position.pointerY;
                    this.position.distance = Math.sqrt(this.position.distanceY ** 2 + this.position.distanceX ** 2);
                    this.cursor.style.transform = `translate3d(${this.position.pointerX}px, ${this.position.pointerY}px, 0)`;
                    if (this.position.distance > 1) {
                        this.rotate(this.position);
                    } else {
                        this.cursor.style.transform += ` rotate(${this.angleDisplace}deg)`;
                    }
                }
                rotate(position) {
                    const unsortedAngle = Math.atan(Math.abs(position.distanceY) / Math.abs(position.distanceX)) * this.degrees;
                    let modAngle;
                    const style = this.cursor.style;
                    this.previousAngle = this.angle;
                    if (position.distanceX <= 0 && position.distanceY >= 0) {
                        this.angle = 90 - unsortedAngle + 0;
                    } else if (position.distanceX < 0 && position.distanceY < 0) {
                        this.angle = unsortedAngle + 90;
                    } else if (position.distanceX >= 0 && position.distanceY <= 0) {
                        this.angle = 90 - unsortedAngle + 180;
                    } else if (position.distanceX > 0 && position.distanceY > 0) {
                        this.angle = unsortedAngle + 270;
                    }
                    if (isNaN(this.angle)) {
                        this.angle = this.previousAngle;
                    } else {
                        if (this.angle - this.previousAngle <= -270) {
                            this.angleDisplace += 360 + this.angle - this.previousAngle;
                        } else if (this.angle - this.previousAngle >= 270) {
                            this.angleDisplace += this.angle - this.previousAngle - 360;
                        } else {
                            this.angleDisplace += this.angle - this.previousAngle;
                        }
                    }
                    style.transform += ` rotate(${this.angleDisplace}deg)`;
                    setTimeout({
                        "Cursor.useEffect": ()=>{
                            modAngle = this.angleDisplace >= 0 ? this.angleDisplace % 360 : 360 + this.angleDisplace % 360;
                            if (modAngle >= 45 && modAngle < 135) {
                                style.left = `${-this.cursorSize}px`;
                                style.top = `${-this.cursorSize / 2}px`;
                            } else if (modAngle >= 135 && modAngle < 225) {
                                style.left = `${-this.cursorSize / 2}px`;
                                style.top = `${-this.cursorSize}px`;
                            } else if (modAngle >= 225 && modAngle < 315) {
                                style.left = '0px';
                                style.top = `${-this.cursorSize / 2}px`;
                            } else {
                                style.left = `${-this.cursorSize / 2}px`;
                                style.top = '0px';
                            }
                        }
                    }["Cursor.useEffect"], 0);
                }
                remove() {
                    this.cursor.remove();
                }
            }
            if (cursorRef.current) {
                const cursor = new ArrowPointer(cursorRef.current);
                const handleMouseMove = {
                    "Cursor.useEffect.handleMouseMove": (event)=>{
                        cursor.move(event);
                    }
                }["Cursor.useEffect.handleMouseMove"];
                if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                    document.addEventListener('mousemove', handleMouseMove);
                } else {
                    cursor.remove();
                }
                return ({
                    "Cursor.useEffect": ()=>{
                        document.removeEventListener('mousemove', handleMouseMove);
                        cursor.remove();
                    }
                })["Cursor.useEffect"];
            }
        }
    }["Cursor.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "curzr",
        ref: cursorRef,
        hidden: true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 32 32",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    className: "inner",
                    d: "M25,30a5.82,5.82,0,0,1-1.09-.17l-.2-.07-7.36-3.48a.72.72,0,0,0-.35-.08.78.78,0,0,0-.33.07L8.24,29.54a.66.66,0,0,1-.2.06,5.17,5.17,0,0,1-1,.15,3.6,3.6,0,0,1-3.29-5L12.68,4.2a3.59,3.59,0,0,1,6.58,0l9,20.74A3.6,3.6,0,0,1,25,30Z",
                    fill: "#F2F5F8"
                }, void 0, false, {
                    fileName: "[project]/app/components/Curzr.tsx",
                    lineNumber: 166,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    className: "outer",
                    d: "M16,3A2.59,2.59,0,0,1,18.34,4.6l9,20.74A2.59,2.59,0,0,1,25,29a5.42,5.42,0,0,1-.86-.15l-7.37-3.48a1.84,1.84,0,0,0-.77-.17,1.69,1.69,0,0,0-.73.16l-7.4,3.31a5.89,5.89,0,0,1-.79.12,2.59,2.59,0,0,1-2.37-3.62L13.6,4.6A2.58,2.58,0,0,1,16,3m0-2h0A4.58,4.58,0,0,0,11.76,3.8L2.84,24.33A4.58,4.58,0,0,0,7,30.75a6.08,6.08,0,0,0,1.21-.17,1.87,1.87,0,0,0,.4-.13L16,27.18l7.29,3.44a1.64,1.64,0,0,0,.39.14A6.37,6.37,0,0,0,25,31a4.59,4.59,0,0,0,4.21-6.41l-9-20.75A4.62,4.62,0,0,0,16,1Z",
                    fill: "#111920"
                }, void 0, false, {
                    fileName: "[project]/app/components/Curzr.tsx",
                    lineNumber: 171,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Curzr.tsx",
            lineNumber: 165,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/Curzr.tsx",
        lineNumber: 164,
        columnNumber: 5
    }, this);
};
_s(Cursor, "BAOXNtFTrLv46f15Gc0vVLC8KO4=");
_c = Cursor;
const __TURBOPACK__default__export__ = Cursor;
var _c;
__turbopack_refresh__.register(_c, "Cursor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=app_4f7426._.js.map