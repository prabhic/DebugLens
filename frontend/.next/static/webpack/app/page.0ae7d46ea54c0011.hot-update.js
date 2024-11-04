"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/services/debugService.ts":
/*!**************************************!*\
  !*** ./src/services/debugService.ts ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getDebugState: function() { return /* binding */ getDebugState; },\n/* harmony export */   setBreakpoint: function() { return /* binding */ setBreakpoint; }\n/* harmony export */ });\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"(app-pages-browser)/./node_modules/next/dist/build/polyfills/process.js\");\nconst API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || \"http://localhost:5000\";\n// Export as a named function\nasync function setBreakpoint(fileId, lineNumber, abstractionLevel) {\n    console.log(\"debugService: Setting breakpoint with params:\", {\n        fileId,\n        lineNumber,\n        abstractionLevel\n    });\n    try {\n        const response = await fetch(\"\".concat(API_BASE_URL, \"/debug/breakpoint\"), {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                fileId,\n                lineNumber,\n                abstractionLevel,\n                action: \"toggle\"\n            })\n        });\n        if (!response.ok) {\n            throw new Error(\"HTTP error! status: \".concat(response.status));\n        }\n        const data = await response.json();\n        console.log(\"debugService: Server response:\", data);\n        return data;\n    } catch (error) {\n        console.error(\"debugService: Error:\", error);\n        throw error;\n    }\n}\nasync function getDebugState(fileId, lineNumber, abstractionLevel) {\n    try {\n        const response = await fetch(\"\".concat(API_BASE_URL, \"/debug/state\"), {\n            method: \"GET\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                fileId,\n                lineNumber,\n                abstractionLevel\n            })\n        });\n        if (!response.ok) {\n            throw new Error(\"HTTP error! status: \".concat(response.status));\n        }\n        const data = await response.json();\n        return data;\n    } catch (error) {\n        console.error(\"debugService: Error fetching debug state:\", error);\n        throw error;\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zZXJ2aWNlcy9kZWJ1Z1NlcnZpY2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUEsTUFBTUEsZUFBZUMsT0FBT0EsQ0FBQ0MsR0FBRyxDQUFDQyxtQkFBbUIsSUFBSTtBQWF4RCw2QkFBNkI7QUFDdEIsZUFBZUMsY0FDcEJDLE1BQWMsRUFDZEMsVUFBa0IsRUFDbEJDLGdCQUF3QjtJQUV4QkMsUUFBUUMsR0FBRyxDQUFDLGlEQUFpRDtRQUMzREo7UUFDQUM7UUFDQUM7SUFDRjtJQUVBLElBQUk7UUFDRixNQUFNRyxXQUFXLE1BQU1DLE1BQU0sR0FBZ0IsT0FBYlgsY0FBYSxzQkFBb0I7WUFDL0RZLFFBQVE7WUFDUkMsU0FBUztnQkFDUCxnQkFBZ0I7WUFDbEI7WUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO2dCQUNuQlg7Z0JBQ0FDO2dCQUNBQztnQkFDQVUsUUFBUTtZQUNWO1FBQ0Y7UUFFQSxJQUFJLENBQUNQLFNBQVNRLEVBQUUsRUFBRTtZQUNoQixNQUFNLElBQUlDLE1BQU0sdUJBQXVDLE9BQWhCVCxTQUFTVSxNQUFNO1FBQ3hEO1FBRUEsTUFBTUMsT0FBTyxNQUFNWCxTQUFTWSxJQUFJO1FBQ2hDZCxRQUFRQyxHQUFHLENBQUMsa0NBQWtDWTtRQUM5QyxPQUFPQTtJQUNULEVBQUUsT0FBT0UsT0FBTztRQUNkZixRQUFRZSxLQUFLLENBQUMsd0JBQXdCQTtRQUN0QyxNQUFNQTtJQUNSO0FBQ0Y7QUFFTyxlQUFlQyxjQUNwQm5CLE1BQWMsRUFDZEMsVUFBa0IsRUFDbEJDLGdCQUF3QjtJQUV4QixJQUFJO1FBQ0YsTUFBTUcsV0FBVyxNQUFNQyxNQUFNLEdBQWdCLE9BQWJYLGNBQWEsaUJBQWU7WUFDMURZLFFBQVE7WUFDUkMsU0FBUztnQkFDUCxnQkFBZ0I7WUFDbEI7WUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO2dCQUNuQlg7Z0JBQ0FDO2dCQUNBQztZQUNGO1FBQ0Y7UUFFQSxJQUFJLENBQUNHLFNBQVNRLEVBQUUsRUFBRTtZQUNoQixNQUFNLElBQUlDLE1BQU0sdUJBQXVDLE9BQWhCVCxTQUFTVSxNQUFNO1FBQ3hEO1FBRUEsTUFBTUMsT0FBTyxNQUFNWCxTQUFTWSxJQUFJO1FBQ2hDLE9BQU9EO0lBQ1QsRUFBRSxPQUFPRSxPQUFPO1FBQ2RmLFFBQVFlLEtBQUssQ0FBQyw2Q0FBNkNBO1FBQzNELE1BQU1BO0lBQ1I7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc2VydmljZXMvZGVidWdTZXJ2aWNlLnRzP2Y5MTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFyaWFibGVTdGF0ZSB9IGZyb20gJ0AvdHlwZXMvcHNldWRvJztcblxuY29uc3QgQVBJX0JBU0VfVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTCB8fCAnaHR0cDovL2xvY2FsaG9zdDo1MDAwJztcblxuaW50ZXJmYWNlIEJyZWFrcG9pbnRSZXNwb25zZSB7XG4gIHN1Y2Nlc3M6IGJvb2xlYW47XG4gIG1lc3NhZ2U/OiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBEZWJ1Z1N0YXRlUmVzcG9uc2Uge1xuICBzdWNjZXNzOiBib29sZWFuO1xuICBtZXNzYWdlPzogc3RyaW5nO1xuICB2YXJpYWJsZXM/OiBWYXJpYWJsZVN0YXRlW107XG59XG5cbi8vIEV4cG9ydCBhcyBhIG5hbWVkIGZ1bmN0aW9uXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2V0QnJlYWtwb2ludChcbiAgZmlsZUlkOiBzdHJpbmcsXG4gIGxpbmVOdW1iZXI6IG51bWJlcixcbiAgYWJzdHJhY3Rpb25MZXZlbDogc3RyaW5nXG4pOiBQcm9taXNlPEJyZWFrcG9pbnRSZXNwb25zZT4ge1xuICBjb25zb2xlLmxvZygnZGVidWdTZXJ2aWNlOiBTZXR0aW5nIGJyZWFrcG9pbnQgd2l0aCBwYXJhbXM6Jywge1xuICAgIGZpbGVJZCxcbiAgICBsaW5lTnVtYmVyLFxuICAgIGFic3RyYWN0aW9uTGV2ZWxcbiAgfSk7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0FQSV9CQVNFX1VSTH0vZGVidWcvYnJlYWtwb2ludGAsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgZmlsZUlkLFxuICAgICAgICBsaW5lTnVtYmVyLFxuICAgICAgICBhYnN0cmFjdGlvbkxldmVsLFxuICAgICAgICBhY3Rpb246ICd0b2dnbGUnLFxuICAgICAgfSksXG4gICAgfSk7XG5cbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgfVxuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZygnZGVidWdTZXJ2aWNlOiBTZXJ2ZXIgcmVzcG9uc2U6JywgZGF0YSk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignZGVidWdTZXJ2aWNlOiBFcnJvcjonLCBlcnJvcik7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERlYnVnU3RhdGUoXG4gIGZpbGVJZDogc3RyaW5nLFxuICBsaW5lTnVtYmVyOiBudW1iZXIsXG4gIGFic3RyYWN0aW9uTGV2ZWw6IHN0cmluZ1xuKTogUHJvbWlzZTxEZWJ1Z1N0YXRlUmVzcG9uc2U+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0FQSV9CQVNFX1VSTH0vZGVidWcvc3RhdGVgLCB7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgZmlsZUlkLFxuICAgICAgICBsaW5lTnVtYmVyLFxuICAgICAgICBhYnN0cmFjdGlvbkxldmVsLFxuICAgICAgfSksXG4gICAgfSk7XG5cbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgfVxuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdkZWJ1Z1NlcnZpY2U6IEVycm9yIGZldGNoaW5nIGRlYnVnIHN0YXRlOicsIGVycm9yKTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufSAiXSwibmFtZXMiOlsiQVBJX0JBU0VfVVJMIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9VUkwiLCJzZXRCcmVha3BvaW50IiwiZmlsZUlkIiwibGluZU51bWJlciIsImFic3RyYWN0aW9uTGV2ZWwiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImFjdGlvbiIsIm9rIiwiRXJyb3IiLCJzdGF0dXMiLCJkYXRhIiwianNvbiIsImVycm9yIiwiZ2V0RGVidWdTdGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/services/debugService.ts\n"));

/***/ })

});