module.exports = {

"[externals]/@ffmpeg/ffmpeg [external] (@ffmpeg/ffmpeg, esm_import)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
const mod = await __turbopack_context__.y("@ffmpeg/ffmpeg");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/@ffmpeg/util [external] (@ffmpeg/util, esm_import)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
const mod = await __turbopack_context__.y("@ffmpeg/util");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/src/compoments/noSsr.tsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dynamic$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dynamic.js [ssr] (ecmascript)");
;
;
const NoSSRWrapper = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: props.children
    }, void 0, false);
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dynamic$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(()=>Promise.resolve(NoSSRWrapper), {
    ssr: false
});
}}),
"[project]/src/pages/index.tsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "default": (()=>VideoCompressor)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$ffmpeg$2f$ffmpeg__$5b$external$5d$__$2840$ffmpeg$2f$ffmpeg$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@ffmpeg/ffmpeg [external] (@ffmpeg/ffmpeg, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$ffmpeg$2f$util__$5b$external$5d$__$2840$ffmpeg$2f$util$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@ffmpeg/util [external] (@ffmpeg/util, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$compoments$2f$noSsr$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/compoments/noSsr.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$ffmpeg$2f$ffmpeg__$5b$external$5d$__$2840$ffmpeg$2f$ffmpeg$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f40$ffmpeg$2f$util__$5b$external$5d$__$2840$ffmpeg$2f$util$2c$__esm_import$29$__
]);
([__TURBOPACK__imported__module__$5b$externals$5d2f40$ffmpeg$2f$ffmpeg__$5b$external$5d$__$2840$ffmpeg$2f$ffmpeg$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f40$ffmpeg$2f$util__$5b$external$5d$__$2840$ffmpeg$2f$util$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
;
function VideoCompressor() {
    const ffmpegRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$externals$5d2f40$ffmpeg$2f$ffmpeg__$5b$external$5d$__$2840$ffmpeg$2f$ffmpeg$2c$__esm_import$29$__["FFmpeg"]());
    // const [ready, setReady] = useState(false);
    // const [video, setVideo] = useState(null);
    // const videoRef = useRef(null);
    // const messageRef = useRef(null);
    const [output, setOutput] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    const load = async ()=>{
        const baseURL = "https://unpkg.com/@ffmpeg/core@0.12.10/dist/umd";
        const ffmpeg = ffmpegRef.current;
        await ffmpeg.load({
            coreURL: await (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$ffmpeg$2f$util__$5b$external$5d$__$2840$ffmpeg$2f$util$2c$__esm_import$29$__["toBlobURL"])(`${baseURL}/ffmpeg-core.js`, "text/javascript"),
            wasmURL: await (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$ffmpeg$2f$util__$5b$external$5d$__$2840$ffmpeg$2f$util$2c$__esm_import$29$__["toBlobURL"])(`${baseURL}/ffmpeg-core.wasm`, "application/wasm")
        });
    };
    const changeVideo = async (e)=>{
        await load();
        const file = e?.target?.files?.[0];
        const ffmpeg = ffmpegRef.current;
        if (!file) return;
        // TODO finish this
        // https://ffmpegwasm.netlify.app/docs/getting-started/usage
        ffmpeg.writeFile("input.mp4", await (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$ffmpeg$2f$util__$5b$external$5d$__$2840$ffmpeg$2f$util$2c$__esm_import$29$__["fetchFile"])(file));
        await ffmpeg.exec([
            '-i',
            'input.mp4',
            '-vcodec',
            'libx264',
            '-crf',
            '28',
            'output.mp4'
        ]);
        const data = await ffmpeg.readFile("readFile", 'output.mp4');
        const videoURL = URL.createObjectURL(new Blob([
            data.buffer
        ], {
            type: 'video/mp4'
        }));
        setOutput(videoURL);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$compoments$2f$noSsr$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                    type: "file",
                    accept: "video/mp4",
                    onChange: changeVideo
                }, void 0, false, {
                    fileName: "[project]/src/pages/index.tsx",
                    lineNumber: 42,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("video", {
                    controls: true,
                    src: output,
                    width: "480"
                }, void 0, false, {
                    fileName: "[project]/src/pages/index.tsx",
                    lineNumber: 43,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                    href: output,
                    download: "compressed.mp4",
                    children: "Baixar vídeo"
                }, void 0, false, {
                    fileName: "[project]/src/pages/index.tsx",
                    lineNumber: 44,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/pages/index.tsx",
            lineNumber: 41,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/pages/index.tsx",
        lineNumber: 40,
        columnNumber: 10
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/node_modules/next/dist/esm/server/route-modules/pages/module.compiled.js [ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    if ("TURBOPACK compile-time truthy", 1) {
        if ("TURBOPACK compile-time truthy", 1) {
            module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/pages-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-turbo.runtime.dev.js, cjs)");
        } else {
            "TURBOPACK unreachable";
        }
    } else {
        "TURBOPACK unreachable";
    }
} //# sourceMappingURL=module.compiled.js.map
}}),
"[project]/node_modules/next/dist/esm/server/route-kind.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "RouteKind": (()=>RouteKind)
});
var RouteKind = /*#__PURE__*/ function(RouteKind) {
    /**
   * `PAGES` represents all the React pages that are under `pages/`.
   */ RouteKind["PAGES"] = "PAGES";
    /**
   * `PAGES_API` represents all the API routes under `pages/api/`.
   */ RouteKind["PAGES_API"] = "PAGES_API";
    /**
   * `APP_PAGE` represents all the React pages that are under `app/` with the
   * filename of `page.{j,t}s{,x}`.
   */ RouteKind["APP_PAGE"] = "APP_PAGE";
    /**
   * `APP_ROUTE` represents all the API routes and metadata routes that are under `app/` with the
   * filename of `route.{j,t}s{,x}`.
   */ RouteKind["APP_ROUTE"] = "APP_ROUTE";
    /**
   * `IMAGE` represents all the images that are generated by `next/image`.
   */ RouteKind["IMAGE"] = "IMAGE";
    return RouteKind;
}({}); //# sourceMappingURL=route-kind.js.map
}}),
"[project]/node_modules/next/dist/esm/build/templates/helpers.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * Hoists a name from a module or promised module.
 *
 * @param module the module to hoist the name from
 * @param name the name to hoist
 * @returns the value on the module (or promised module)
 */ __turbopack_context__.s({
    "hoist": (()=>hoist)
});
function hoist(module, name) {
    // If the name is available in the module, return it.
    if (name in module) {
        return module[name];
    }
    // If a property called `then` exists, assume it's a promise and
    // return a promise that resolves to the name.
    if ('then' in module && typeof module.then === 'function') {
        return module.then((mod)=>hoist(mod, name));
    }
    // If we're trying to hoise the default export, and the module is a function,
    // return the module itself.
    if (typeof module === 'function' && name === 'default') {
        return module;
    }
    // Otherwise, return undefined.
    return undefined;
} //# sourceMappingURL=helpers.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/pages/vendored/contexts/loadable.js [ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/pages/module.compiled.js [ssr] (ecmascript)").vendored['contexts'].Loadable; //# sourceMappingURL=loadable.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/dynamic.js [ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    noSSR: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    /**
 * This function lets you dynamically import a component.
 * It uses [React.lazy()](https://react.dev/reference/react/lazy) with [Suspense](https://react.dev/reference/react/Suspense) under the hood.
 *
 * Read more: [Next.js Docs: `next/dynamic`](https://nextjs.org/docs/app/building-your-application/optimizing/lazy-loading#nextdynamic)
 */ default: function() {
        return dynamic;
    },
    noSSR: function() {
        return noSSR;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [ssr] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[externals]/react/jsx-runtime [external] (react/jsx-runtime, cjs)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[externals]/react [external] (react, cjs)"));
const _loadablesharedruntime = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/pages/vendored/contexts/loadable.js [ssr] (ecmascript)"));
const isServerSide = typeof window === 'undefined';
// Normalize loader to return the module as form { default: Component } for `React.lazy`.
// Also for backward compatible since next/dynamic allows to resolve a component directly with loader
// Client component reference proxy need to be converted to a module.
function convertModule(mod) {
    return {
        default: (mod == null ? void 0 : mod.default) || mod
    };
}
function noSSR(LoadableInitializer, loadableOptions) {
    // Removing webpack and modules means react-loadable won't try preloading
    delete loadableOptions.webpack;
    delete loadableOptions.modules;
    // This check is necessary to prevent react-loadable from initializing on the server
    if (!isServerSide) {
        return LoadableInitializer(loadableOptions);
    }
    const Loading = loadableOptions.loading;
    // This will only be rendered on the server side
    return ()=>/*#__PURE__*/ (0, _jsxruntime.jsx)(Loading, {
            error: null,
            isLoading: true,
            pastDelay: false,
            timedOut: false
        });
}
function dynamic(dynamicOptions, options) {
    let loadableFn = _loadablesharedruntime.default;
    let loadableOptions = {
        // A loading component is not required, so we default it
        loading: (param)=>{
            let { error, isLoading, pastDelay } = param;
            if (!pastDelay) return null;
            if ("TURBOPACK compile-time truthy", 1) {
                if (isLoading) {
                    return null;
                }
                if (error) {
                    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("p", {
                        children: [
                            error.message,
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("br", {}),
                            error.stack
                        ]
                    });
                }
            }
            return null;
        }
    };
    // Support for direct import(), eg: dynamic(import('../hello-world'))
    // Note that this is only kept for the edge case where someone is passing in a promise as first argument
    // The react-loadable babel plugin will turn dynamic(import('../hello-world')) into dynamic(() => import('../hello-world'))
    // To make sure we don't execute the import without rendering first
    if (dynamicOptions instanceof Promise) {
        loadableOptions.loader = ()=>dynamicOptions;
    // Support for having import as a function, eg: dynamic(() => import('../hello-world'))
    } else if (typeof dynamicOptions === 'function') {
        loadableOptions.loader = dynamicOptions;
    // Support for having first argument being options, eg: dynamic({loader: import('../hello-world')})
    } else if (typeof dynamicOptions === 'object') {
        loadableOptions = {
            ...loadableOptions,
            ...dynamicOptions
        };
    }
    // Support for passing options, eg: dynamic(import('../hello-world'), {loading: () => <p>Loading something</p>})
    loadableOptions = {
        ...loadableOptions,
        ...options
    };
    const loaderFn = loadableOptions.loader;
    const loader = ()=>loaderFn != null ? loaderFn().then(convertModule) : Promise.resolve(convertModule(()=>null));
    // coming from build/babel/plugins/react-loadable-plugin.js
    if (loadableOptions.loadableGenerated) {
        loadableOptions = {
            ...loadableOptions,
            ...loadableOptions.loadableGenerated
        };
        delete loadableOptions.loadableGenerated;
    }
    // support for disabling server side rendering, eg: dynamic(() => import('../hello-world'), {ssr: false}).
    if (typeof loadableOptions.ssr === 'boolean' && !loadableOptions.ssr) {
        delete loadableOptions.webpack;
        delete loadableOptions.modules;
        return noSSR(loadableFn, loadableOptions);
    }
    return loadableFn({
        ...loadableOptions,
        loader: loader
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=dynamic.js.map
}}),
"[project]/node_modules/next/dynamic.js [ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/dynamic.js [ssr] (ecmascript)");
}}),
"[project]/node_modules/next/dist/esm/build/templates/pages.js { INNER_PAGE => \"[project]/src/pages/index.tsx [ssr] (ecmascript)\", INNER_DOCUMENT => \"[project]/src/pages/_document.tsx [ssr] (ecmascript)\", INNER_APP => \"[project]/src/pages/_app.tsx [ssr] (ecmascript)\" } [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "config": (()=>config),
    "default": (()=>__TURBOPACK__default__export__),
    "getServerSideProps": (()=>getServerSideProps),
    "getStaticPaths": (()=>getStaticPaths),
    "getStaticProps": (()=>getStaticProps),
    "reportWebVitals": (()=>reportWebVitals),
    "routeModule": (()=>routeModule),
    "unstable_getServerProps": (()=>unstable_getServerProps),
    "unstable_getServerSideProps": (()=>unstable_getServerSideProps),
    "unstable_getStaticParams": (()=>unstable_getStaticParams),
    "unstable_getStaticPaths": (()=>unstable_getStaticPaths),
    "unstable_getStaticProps": (()=>unstable_getStaticProps)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$pages$2f$module$2e$compiled$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/route-modules/pages/module.compiled.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/route-kind.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/build/templates/helpers.js [ssr] (ecmascript)");
// Import the app and document modules.
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$_document$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/pages/_document.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$_app$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/pages/_app.tsx [ssr] (ecmascript)");
// Import the userland code.
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/pages/index.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["hoist"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, 'default');
const getStaticProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["hoist"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, 'getStaticProps');
const getStaticPaths = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["hoist"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, 'getStaticPaths');
const getServerSideProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["hoist"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, 'getServerSideProps');
const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["hoist"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, 'config');
const reportWebVitals = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["hoist"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, 'reportWebVitals');
const unstable_getStaticProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["hoist"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["hoist"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["hoist"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, 'unstable_getStaticParams');
const unstable_getServerProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["hoist"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["hoist"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, 'unstable_getServerSideProps');
const routeModule = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$pages$2f$module$2e$compiled$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["PagesRouteModule"]({
    definition: {
        kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["RouteKind"].PAGES,
        page: "/index",
        pathname: "/",
        // The following aren't used in production.
        bundlePath: '',
        filename: ''
    },
    components: {
        // default export might not exist when optimized for data only
        App: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$_app$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"],
        Document: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$_document$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
    },
    userland: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
}); //# sourceMappingURL=pages.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__43681df1._.js.map