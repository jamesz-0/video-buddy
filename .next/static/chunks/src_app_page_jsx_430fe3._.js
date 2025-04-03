(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_page_jsx_430fe3._.js", {

"[project]/src/app/page.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$calendar$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/react-calendar/dist/esm/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
;
// import { table } from "console";
const sampleInvitationsData = {
    content: [
        {
            id: 'h',
            name: 'Samson',
            meetingName: 'Q4 planning'
        },
        {
            id: 'i',
            name: 'Lena',
            meetingName: 'Breakfast!!!!'
        },
        {
            id: 'j',
            name: 'Dominic',
            meetingName: 'Brainstorming'
        }
    ],
    onRSVP: (e, meetingItem)=>{
        alert('rsvp');
    }
};
const insightsData = {
    meetingsHostedThisWeek: 8,
    meetingsHostedLastWeek: 16
};
const Header = ({ className, children, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `Header bg-blue-primary flex items-center gap-4 p-6 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className)}`,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/page.jsx",
        lineNumber: 40,
        columnNumber: 3
    }, this);
_c = Header;
const Main = ({ className, children, style, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `Main bg-gray-50 grid gap-4 p-4 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className)}`,
        style: {
            gridTemplate: `
        'a a a a a a b b b b b b b c c c c c c' auto
        'a a a a a a d d d d d e e e f f f f f' auto`,
            ...style
        },
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/page.jsx",
        lineNumber: 49,
        columnNumber: 3
    }, this);
_c1 = Main;
const Panel = ({ className, children, tag, ...props })=>{
    const Tag = tag ? tag : 'div';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
        className: `Panel bg-white p-6 border-2 border-gray-200 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className)}`,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/page.jsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
};
_c2 = Panel;
const IconText = ({ className, renderIcon, renderText, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `IconText flex flex-row items-center ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className)}`,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "IconText-icon flex-shrink flex items-center mr-4 align-middle",
                children: renderIcon
            }, void 0, false, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 80,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "IconText-text flex-auto align-middle align-middle",
                children: renderText
            }, void 0, false, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 83,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.jsx",
        lineNumber: 76,
        columnNumber: 3
    }, this);
_c3 = IconText;
/**
 * Dot expects bg-color and size to be passed through className.
 * Tailwind does not catch dynamic classNames.
 */ const Dot = ({ className, ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `Dot rounded-full ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className)}`,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/app/page.jsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
};
_c4 = Dot;
const Button = ({ className, children, isSecondary, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('Button', isSecondary ? 'Button--secondary' : '', className)}`,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/page.jsx",
        lineNumber: 103,
        columnNumber: 3
    }, this);
_c5 = Button;
const ImageWithPlaceholder = ({ className, size, ...props })=>{
    return props.src && props.alt ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: `rounded-full ${className}`,
        src: props.src,
        width: size,
        height: size,
        alt: props.alt
    }, void 0, false, {
        fileName: "[project]/src/app/page.jsx",
        lineNumber: 117,
        columnNumber: 5
    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dot, {
        className: `bg-gray-200 ${className}`
    }, void 0, false, {
        fileName: "[project]/src/app/page.jsx",
        lineNumber: 125,
        columnNumber: 5
    }, this);
};
_c6 = ImageWithPlaceholder;
const InvitationAlertItem = ({ renderAvatar, renderText, renderButton })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "InvitationAlertItem flex items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconText, {
                className: "flex-1 mr-4",
                renderIcon: renderAvatar,
                renderText: renderText
            }, void 0, false, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 131,
                columnNumber: 5
            }, this),
            renderButton
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.jsx",
        lineNumber: 130,
        columnNumber: 3
    }, this);
_c7 = InvitationAlertItem;
const AgendaTodayTable = ({ className, children, meetingData, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('AgentToday', className)}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "table border-spacing-x-0 border-spacing-y-[16px] w-full",
            children: meetingData.meetings.map((meetingItem)=>{
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "table-row",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "table-cell align-middle pr-2",
                            children: meetingItem.meetingName
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.jsx",
                            lineNumber: 146,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "table-cell align-middle pr-2",
                            children: meetingItem.meetingTime
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.jsx",
                            lineNumber: 149,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "table-cell text-right align-middle pr-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                onClick: (e)=>{
                                    meetingData.onReschedule(e, meetingItem);
                                },
                                children: "Reschedule"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 153,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.jsx",
                            lineNumber: 152,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "table-cell text-right align-middle",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                isSecondary: true,
                                onClick: (e)=>{
                                    meetingData.onChangeAttendance(e, meetingItem);
                                },
                                children: "Change attendance"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 162,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.jsx",
                            lineNumber: 161,
                            columnNumber: 13
                        }, this)
                    ]
                }, meetingItem.meetingID, true, {
                    fileName: "[project]/src/app/page.jsx",
                    lineNumber: 145,
                    columnNumber: 11
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/src/app/page.jsx",
            lineNumber: 142,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/page.jsx",
        lineNumber: 141,
        columnNumber: 3
    }, this);
_c8 = AgendaTodayTable;
/**
 * @param invitationsData expects to be in this
 * [{
      id: String,
      name: String,
      meetingName: String,
      onRSVP: Event Function
    }]
 * }
 * @returns List of meeting data
 */ const InvitationsList = ({ className, invitationsData })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('InvitationsList', 'flex', 'flex-col', 'gap-4', 'py-20', className)}`,
        children: invitationsData.content.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InvitationAlertItem, {
                renderAvatar: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ImageWithPlaceholder, {
                    className: "inline-block min-w-[24px]",
                    alt: "sample profile",
                    size: 24,
                    src: "/sample-profile.jpg"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.jsx",
                    lineNumber: 197,
                    columnNumber: 11
                }, void 0),
                renderText: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm",
                    children: [
                        item.name,
                        " invited you to do",
                        ' ',
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-bold text-blue-primary",
                            children: item.meetingName
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.jsx",
                            lineNumber: 207,
                            columnNumber: 13
                        }, void 0)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.jsx",
                    lineNumber: 205,
                    columnNumber: 11
                }, void 0),
                renderButton: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                    className: "px-12 height-fit",
                    onClick: (e)=>{
                        sampleInvitationsData.onRSVP(e, item);
                    },
                    children: "RSVP"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.jsx",
                    lineNumber: 213,
                    columnNumber: 11
                }, void 0)
            }, item.id, false, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 194,
                columnNumber: 7
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/app/page.jsx",
        lineNumber: 190,
        columnNumber: 3
    }, this);
_c9 = InvitationsList;
const InsightsData = ({ className, insightsData, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('InsightsData', className)}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "table w-full border-spacing-x-0 border-spacing-y-[16px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "table-row",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "table-cell w-1/2 align-middle",
                            children: "Number of meetings you hosted this week"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.jsx",
                            lineNumber: 231,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "table-cell text-blue-primary text-5xl text-center align-middle",
                            children: insightsData.meetingsHostedThisWeek
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.jsx",
                            lineNumber: 234,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.jsx",
                    lineNumber: 230,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "table-row",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "table-cell w-1/2 align-middle",
                            children: "Number of meetings you hosted last week"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.jsx",
                            lineNumber: 239,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "table-cell text-blue-primary text-5xl text-center align-middle",
                            children: insightsData.meetingsHostedLastWeek
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.jsx",
                            lineNumber: 242,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.jsx",
                    lineNumber: 238,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.jsx",
            lineNumber: 229,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/page.jsx",
        lineNumber: 228,
        columnNumber: 3
    }, this);
_c10 = InsightsData;
function Home() {
    _s();
    const [value, onChange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date());
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Header, {
                className: "flex-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "LogoContainer",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dot, {
                            className: "bg-white size-[32px]"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.jsx",
                            lineNumber: 256,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.jsx",
                        lineNumber: 255,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "TitleContainer text-white flex font-bold text-xl",
                        children: "Video Buddy"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.jsx",
                        lineNumber: 258,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 254,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Main, {
                className: "flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Panel, {
                        className: "NavPanel min-w-[240px] px-0 flex flex-col justify-between",
                        style: {
                            gridArea: 'a'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "Nav",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: "NavLink NavLink--selected",
                                        "aria-current": "page",
                                        href: "#",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "NavItem",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconText, {
                                                className: "flex-1",
                                                renderIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dot, {
                                                    className: "bg-gray-200 size-[24px]"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.jsx",
                                                    lineNumber: 276,
                                                    columnNumber: 31
                                                }, void 0),
                                                renderText: "Home"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.jsx",
                                                lineNumber: 274,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.jsx",
                                            lineNumber: 273,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.jsx",
                                        lineNumber: 268,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: "NavLink",
                                        "aria-current": "page",
                                        href: "#",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "NavItem",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconText, {
                                                className: "flex-1",
                                                renderIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dot, {
                                                    className: "bg-gray-200 size-[24px]"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.jsx",
                                                    lineNumber: 285,
                                                    columnNumber: 31
                                                }, void 0),
                                                renderText: "Calendar"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.jsx",
                                                lineNumber: 283,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.jsx",
                                            lineNumber: 282,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.jsx",
                                        lineNumber: 281,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: "NavLink",
                                        "aria-current": "page",
                                        href: "#",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "NavItem",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconText, {
                                                className: "flex-1",
                                                renderIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dot, {
                                                    className: "bg-gray-200 size-[24px]"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.jsx",
                                                    lineNumber: 294,
                                                    columnNumber: 31
                                                }, void 0),
                                                renderText: "Recording"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.jsx",
                                                lineNumber: 292,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.jsx",
                                            lineNumber: 291,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.jsx",
                                        lineNumber: 290,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: "NavLink",
                                        "aria-current": "page",
                                        href: "#",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "NavItem",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconText, {
                                                className: "flex-1",
                                                renderIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dot, {
                                                    className: "bg-gray-200 size-[24px]"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.jsx",
                                                    lineNumber: 303,
                                                    columnNumber: 31
                                                }, void 0),
                                                renderText: "Contacts"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.jsx",
                                                lineNumber: 301,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.jsx",
                                            lineNumber: 300,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.jsx",
                                        lineNumber: 299,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: "NavLink",
                                        "aria-current": "page",
                                        href: "#",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "NavItem",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconText, {
                                                className: "flex-1",
                                                renderIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dot, {
                                                    className: "bg-gray-200 size-[24px]"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.jsx",
                                                    lineNumber: 312,
                                                    columnNumber: 31
                                                }, void 0),
                                                renderText: "Whiteboards"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.jsx",
                                                lineNumber: 310,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.jsx",
                                            lineNumber: 309,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.jsx",
                                        lineNumber: 308,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 267,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "NavLink NavLink--red mb-4",
                                "aria-current": "page",
                                href: "#",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconText, {
                                    className: "flex-1",
                                    renderIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dot, {
                                        className: "bg-gray-200 size-[24px]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.jsx",
                                        lineNumber: 321,
                                        columnNumber: 27
                                    }, void 0),
                                    renderText: "Log out"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.jsx",
                                    lineNumber: 319,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 318,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.jsx",
                        lineNumber: 263,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Panel, {
                        className: "flex flex-col",
                        style: {
                            gridArea: 'b'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-lg font-bold",
                                        children: "Good morning, John!"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.jsx",
                                        lineNumber: 328,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ImageWithPlaceholder, {
                                        className: "inline-block",
                                        alt: "sample profile",
                                        size: 128,
                                        src: "/sample-profile.jpg"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.jsx",
                                        lineNumber: 329,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 327,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "flex-none text-lg font-bold",
                                children: "Your agenda today:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 336,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AgendaTodayTable, {
                                className: "flex-none",
                                meetingData: {
                                    meetings: [
                                        {
                                            meetingID: '1',
                                            meetingName: 'Morning Standup',
                                            meetingTime: '9:00 - 9:15'
                                        },
                                        {
                                            meetingID: '2',
                                            meetingName: 'Managers catch-up',
                                            meetingTime: '10:00 - 10:30'
                                        },
                                        {
                                            meetingID: '3',
                                            meetingName: 'Ben 1:1',
                                            meetingTime: '13:00 - 14:45'
                                        },
                                        {
                                            meetingID: '4',
                                            meetingName: 'KPI Clarification',
                                            meetingTime: '15:00 - 15:30'
                                        }
                                    ],
                                    onReschedule: (e, meetingItem)=>{
                                        alert('reschedule');
                                    },
                                    onChangeAttendance: (e, meetingItem)=>{
                                        alert('change attendance');
                                    }
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 337,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.jsx",
                        lineNumber: 326,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            gridArea: 'c'
                        },
                        className: "grid grid-rows-[1fr_1fr_1fr] gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Panel, {
                                tag: "button",
                                className: "flex flex-row items-center MeetingButton StartMeetingButton",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconText, {
                                    className: "flex-1 ml-12",
                                    renderIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dot, {
                                        className: "bg-blue-primary size-[32px]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.jsx",
                                        lineNumber: 381,
                                        columnNumber: 27
                                    }, void 0),
                                    renderText: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-lg font-bold",
                                        children: "Start a meeting"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.jsx",
                                        lineNumber: 383,
                                        columnNumber: 17
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.jsx",
                                    lineNumber: 379,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 375,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Panel, {
                                tag: "button",
                                className: "flex flex-row items-center items-stretch MeetingButton JoinMeetingButton",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconText, {
                                    className: "flex-1 ml-12",
                                    renderIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dot, {
                                        className: "bg-blue-primary size-[32px]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.jsx",
                                        lineNumber: 393,
                                        columnNumber: 27
                                    }, void 0),
                                    renderText: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-lg font-bold",
                                        children: "Join a meeting"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.jsx",
                                        lineNumber: 394,
                                        columnNumber: 27
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.jsx",
                                    lineNumber: 391,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 387,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Panel, {
                                tag: "button",
                                className: "flex flex-row items-center MeetingButton ScheduleMeetingButton",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconText, {
                                    className: "flex-1 ml-12",
                                    renderIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dot, {
                                        className: "bg-blue-primary size-[32px]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.jsx",
                                        lineNumber: 403,
                                        columnNumber: 27
                                    }, void 0),
                                    renderText: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-lg font-bold",
                                        children: "Schedule a meeting"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.jsx",
                                        lineNumber: 405,
                                        columnNumber: 17
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.jsx",
                                    lineNumber: 401,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 397,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.jsx",
                        lineNumber: 371,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Panel, {
                        className: "Calendar",
                        style: {
                            gridArea: 'd'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-lg font-bold",
                                children: "Calendar"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 411,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$calendar$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                                onChange: onChange,
                                value: value
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 412,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.jsx",
                        lineNumber: 410,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Panel, {
                        className: "Invitations",
                        style: {
                            gridArea: 'e'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-lg font-bold",
                                children: "Invitations"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 415,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InvitationsList, {
                                invitationsData: sampleInvitationsData
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 416,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.jsx",
                        lineNumber: 414,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Panel, {
                        className: "Insights flex flex-col",
                        style: {
                            gridArea: 'f'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-lg font-bold mb-2",
                                children: "Insights"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 419,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InsightsData, {
                                className: "flex-grow flex flex-col justify-center",
                                insightsData: insightsData
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 420,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.jsx",
                        lineNumber: 418,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 262,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.jsx",
        lineNumber: 253,
        columnNumber: 5
    }, this);
}
_s(Home, "DQgK+Tjy3CpWvhZj4nuXkkLAGxU=");
_c11 = Home;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_refresh__.register(_c, "Header");
__turbopack_refresh__.register(_c1, "Main");
__turbopack_refresh__.register(_c2, "Panel");
__turbopack_refresh__.register(_c3, "IconText");
__turbopack_refresh__.register(_c4, "Dot");
__turbopack_refresh__.register(_c5, "Button");
__turbopack_refresh__.register(_c6, "ImageWithPlaceholder");
__turbopack_refresh__.register(_c7, "InvitationAlertItem");
__turbopack_refresh__.register(_c8, "AgendaTodayTable");
__turbopack_refresh__.register(_c9, "InvitationsList");
__turbopack_refresh__.register(_c10, "InsightsData");
__turbopack_refresh__.register(_c11, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.jsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_app_page_jsx_430fe3._.js.map