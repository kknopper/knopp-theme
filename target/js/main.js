/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _jquery = __webpack_require__(1);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _mobileDetect = __webpack_require__(3);

	var _mobileDetect2 = _interopRequireDefault(_mobileDetect);

	var _debug = __webpack_require__(5);

	var _grid = __webpack_require__(6);

	var _konamiCode = __webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _jquery2.default)(document).ready(function () {

		(0, _debug.debug)('document ready');

		//Variables
		var md = new _mobileDetect2.default(window.navigator.userAgent),
		    $header = (0, _jquery2.default)('.header'),
		    $navTrigger = (0, _jquery2.default)('.nav-trigger img'),
		    $portfolioPiece = (0, _jquery2.default)('.portfolio-piece');

		//Mobile Detect
		if (md.mobile()) {
			(0, _jquery2.default)('html').addClass('isMobile');
		}

		//Nav Controls
		$navTrigger.click(function () {
			(0, _jquery2.default)(this).toggleClass('active');
			$header.toggleClass('active');
			(0, _debug.debug)("toggle header");
		});

		(0, _grid.grid)();
		(0, _konamiCode.konami)();
	});

	//Module imports

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/*!
	 * jQuery JavaScript Library v3.1.1
	 * https://jquery.com/
	 *
	 * Includes Sizzle.js
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * https://jquery.org/license
	 *
	 * Date: 2016-09-22T22:30Z
	 */
	(function (global, factory) {

		"use strict";

		if (( false ? "undefined" : _typeof(module)) === "object" && _typeof(module.exports) === "object") {

			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ? factory(global, true) : function (w) {
				if (!w.document) {
					throw new Error("jQuery requires a window with a document");
				}
				return factory(w);
			};
		} else {
			factory(global);
		}

		// Pass this if window is not defined yet
	})(typeof window !== "undefined" ? window : undefined, function (window, noGlobal) {

		// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
		// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
		// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
		// enough that all such attempts are guarded in a try block.
		"use strict";

		var arr = [];

		var document = window.document;

		var getProto = Object.getPrototypeOf;

		var _slice = arr.slice;

		var concat = arr.concat;

		var push = arr.push;

		var indexOf = arr.indexOf;

		var class2type = {};

		var toString = class2type.toString;

		var hasOwn = class2type.hasOwnProperty;

		var fnToString = hasOwn.toString;

		var ObjectFunctionString = fnToString.call(Object);

		var support = {};

		function DOMEval(code, doc) {
			doc = doc || document;

			var script = doc.createElement("script");

			script.text = code;
			doc.head.appendChild(script).parentNode.removeChild(script);
		}
		/* global Symbol */
		// Defining this global in .eslintrc.json would create a danger of using the global
		// unguarded in another place, it seems safer to define global only for this module


		var version = "3.1.1",


		// Define a local copy of jQuery
		jQuery = function jQuery(selector, context) {

			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init(selector, context);
		},


		// Support: Android <=4.0 only
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,


		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		    rdashAlpha = /-([a-z])/g,


		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function fcamelCase(all, letter) {
			return letter.toUpperCase();
		};

		jQuery.fn = jQuery.prototype = {

			// The current version of jQuery being used
			jquery: version,

			constructor: jQuery,

			// The default length of a jQuery object is 0
			length: 0,

			toArray: function toArray() {
				return _slice.call(this);
			},

			// Get the Nth element in the matched element set OR
			// Get the whole matched element set as a clean array
			get: function get(num) {

				// Return all the elements in a clean array
				if (num == null) {
					return _slice.call(this);
				}

				// Return just the one element from the set
				return num < 0 ? this[num + this.length] : this[num];
			},

			// Take an array of elements and push it onto the stack
			// (returning the new matched element set)
			pushStack: function pushStack(elems) {

				// Build a new jQuery matched element set
				var ret = jQuery.merge(this.constructor(), elems);

				// Add the old object onto the stack (as a reference)
				ret.prevObject = this;

				// Return the newly-formed element set
				return ret;
			},

			// Execute a callback for every element in the matched set.
			each: function each(callback) {
				return jQuery.each(this, callback);
			},

			map: function map(callback) {
				return this.pushStack(jQuery.map(this, function (elem, i) {
					return callback.call(elem, i, elem);
				}));
			},

			slice: function slice() {
				return this.pushStack(_slice.apply(this, arguments));
			},

			first: function first() {
				return this.eq(0);
			},

			last: function last() {
				return this.eq(-1);
			},

			eq: function eq(i) {
				var len = this.length,
				    j = +i + (i < 0 ? len : 0);
				return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
			},

			end: function end() {
				return this.prevObject || this.constructor();
			},

			// For internal use only.
			// Behaves like an Array's method, not like a jQuery method.
			push: push,
			sort: arr.sort,
			splice: arr.splice
		};

		jQuery.extend = jQuery.fn.extend = function () {
			var options,
			    name,
			    src,
			    copy,
			    copyIsArray,
			    clone,
			    target = arguments[0] || {},
			    i = 1,
			    length = arguments.length,
			    deep = false;

			// Handle a deep copy situation
			if (typeof target === "boolean") {
				deep = target;

				// Skip the boolean and the target
				target = arguments[i] || {};
				i++;
			}

			// Handle case when target is a string or something (possible in deep copy)
			if ((typeof target === "undefined" ? "undefined" : _typeof(target)) !== "object" && !jQuery.isFunction(target)) {
				target = {};
			}

			// Extend jQuery itself if only one argument is passed
			if (i === length) {
				target = this;
				i--;
			}

			for (; i < length; i++) {

				// Only deal with non-null/undefined values
				if ((options = arguments[i]) != null) {

					// Extend the base object
					for (name in options) {
						src = target[name];
						copy = options[name];

						// Prevent never-ending loop
						if (target === copy) {
							continue;
						}

						// Recurse if we're merging plain objects or arrays
						if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {

							if (copyIsArray) {
								copyIsArray = false;
								clone = src && jQuery.isArray(src) ? src : [];
							} else {
								clone = src && jQuery.isPlainObject(src) ? src : {};
							}

							// Never move original objects, clone them
							target[name] = jQuery.extend(deep, clone, copy);

							// Don't bring in undefined values
						} else if (copy !== undefined) {
							target[name] = copy;
						}
					}
				}
			}

			// Return the modified object
			return target;
		};

		jQuery.extend({

			// Unique for each copy of jQuery on the page
			expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),

			// Assume jQuery is ready without the ready module
			isReady: true,

			error: function error(msg) {
				throw new Error(msg);
			},

			noop: function noop() {},

			isFunction: function isFunction(obj) {
				return jQuery.type(obj) === "function";
			},

			isArray: Array.isArray,

			isWindow: function isWindow(obj) {
				return obj != null && obj === obj.window;
			},

			isNumeric: function isNumeric(obj) {

				// As of jQuery 3.0, isNumeric is limited to
				// strings and numbers (primitives or objects)
				// that can be coerced to finite numbers (gh-2662)
				var type = jQuery.type(obj);
				return (type === "number" || type === "string") &&

				// parseFloat NaNs numeric-cast false positives ("")
				// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
				// subtraction forces infinities to NaN
				!isNaN(obj - parseFloat(obj));
			},

			isPlainObject: function isPlainObject(obj) {
				var proto, Ctor;

				// Detect obvious negatives
				// Use toString instead of jQuery.type to catch host objects
				if (!obj || toString.call(obj) !== "[object Object]") {
					return false;
				}

				proto = getProto(obj);

				// Objects with no prototype (e.g., `Object.create( null )`) are plain
				if (!proto) {
					return true;
				}

				// Objects with prototype are plain iff they were constructed by a global Object function
				Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
				return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
			},

			isEmptyObject: function isEmptyObject(obj) {

				/* eslint-disable no-unused-vars */
				// See https://github.com/eslint/eslint/issues/6125
				var name;

				for (name in obj) {
					return false;
				}
				return true;
			},

			type: function type(obj) {
				if (obj == null) {
					return obj + "";
				}

				// Support: Android <=2.3 only (functionish RegExp)
				return (typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
			},

			// Evaluates a script in a global context
			globalEval: function globalEval(code) {
				DOMEval(code);
			},

			// Convert dashed to camelCase; used by the css and data modules
			// Support: IE <=9 - 11, Edge 12 - 13
			// Microsoft forgot to hump their vendor prefix (#9572)
			camelCase: function camelCase(string) {
				return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
			},

			nodeName: function nodeName(elem, name) {
				return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
			},

			each: function each(obj, callback) {
				var length,
				    i = 0;

				if (isArrayLike(obj)) {
					length = obj.length;
					for (; i < length; i++) {
						if (callback.call(obj[i], i, obj[i]) === false) {
							break;
						}
					}
				} else {
					for (i in obj) {
						if (callback.call(obj[i], i, obj[i]) === false) {
							break;
						}
					}
				}

				return obj;
			},

			// Support: Android <=4.0 only
			trim: function trim(text) {
				return text == null ? "" : (text + "").replace(rtrim, "");
			},

			// results is for internal usage only
			makeArray: function makeArray(arr, results) {
				var ret = results || [];

				if (arr != null) {
					if (isArrayLike(Object(arr))) {
						jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
					} else {
						push.call(ret, arr);
					}
				}

				return ret;
			},

			inArray: function inArray(elem, arr, i) {
				return arr == null ? -1 : indexOf.call(arr, elem, i);
			},

			// Support: Android <=4.0 only, PhantomJS 1 only
			// push.apply(_, arraylike) throws on ancient WebKit
			merge: function merge(first, second) {
				var len = +second.length,
				    j = 0,
				    i = first.length;

				for (; j < len; j++) {
					first[i++] = second[j];
				}

				first.length = i;

				return first;
			},

			grep: function grep(elems, callback, invert) {
				var callbackInverse,
				    matches = [],
				    i = 0,
				    length = elems.length,
				    callbackExpect = !invert;

				// Go through the array, only saving the items
				// that pass the validator function
				for (; i < length; i++) {
					callbackInverse = !callback(elems[i], i);
					if (callbackInverse !== callbackExpect) {
						matches.push(elems[i]);
					}
				}

				return matches;
			},

			// arg is for internal usage only
			map: function map(elems, callback, arg) {
				var length,
				    value,
				    i = 0,
				    ret = [];

				// Go through the array, translating each of the items to their new values
				if (isArrayLike(elems)) {
					length = elems.length;
					for (; i < length; i++) {
						value = callback(elems[i], i, arg);

						if (value != null) {
							ret.push(value);
						}
					}

					// Go through every key on the object,
				} else {
					for (i in elems) {
						value = callback(elems[i], i, arg);

						if (value != null) {
							ret.push(value);
						}
					}
				}

				// Flatten any nested arrays
				return concat.apply([], ret);
			},

			// A global GUID counter for objects
			guid: 1,

			// Bind a function to a context, optionally partially applying any
			// arguments.
			proxy: function proxy(fn, context) {
				var tmp, args, proxy;

				if (typeof context === "string") {
					tmp = fn[context];
					context = fn;
					fn = tmp;
				}

				// Quick check to determine if target is callable, in the spec
				// this throws a TypeError, but we will just return undefined.
				if (!jQuery.isFunction(fn)) {
					return undefined;
				}

				// Simulated bind
				args = _slice.call(arguments, 2);
				proxy = function proxy() {
					return fn.apply(context || this, args.concat(_slice.call(arguments)));
				};

				// Set the guid of unique handler to the same of original handler, so it can be removed
				proxy.guid = fn.guid = fn.guid || jQuery.guid++;

				return proxy;
			},

			now: Date.now,

			// jQuery.support is not used in Core but other projects attach their
			// properties to it so it needs to exist.
			support: support
		});

		if (typeof Symbol === "function") {
			jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
		}

		// Populate the class2type map
		jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (i, name) {
			class2type["[object " + name + "]"] = name.toLowerCase();
		});

		function isArrayLike(obj) {

			// Support: real iOS 8.2 only (not reproducible in simulator)
			// `in` check used to prevent JIT error (gh-2145)
			// hasOwn isn't used here due to false negatives
			// regarding Nodelist length in IE
			var length = !!obj && "length" in obj && obj.length,
			    type = jQuery.type(obj);

			if (type === "function" || jQuery.isWindow(obj)) {
				return false;
			}

			return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
		}
		var Sizzle =
		/*!
	  * Sizzle CSS Selector Engine v2.3.3
	  * https://sizzlejs.com/
	  *
	  * Copyright jQuery Foundation and other contributors
	  * Released under the MIT license
	  * http://jquery.org/license
	  *
	  * Date: 2016-08-08
	  */
		function (window) {

			var i,
			    support,
			    Expr,
			    getText,
			    isXML,
			    tokenize,
			    compile,
			    select,
			    outermostContext,
			    sortInput,
			    hasDuplicate,


			// Local document vars
			setDocument,
			    document,
			    docElem,
			    documentIsHTML,
			    rbuggyQSA,
			    rbuggyMatches,
			    matches,
			    contains,


			// Instance-specific data
			expando = "sizzle" + 1 * new Date(),
			    preferredDoc = window.document,
			    dirruns = 0,
			    done = 0,
			    classCache = createCache(),
			    tokenCache = createCache(),
			    compilerCache = createCache(),
			    sortOrder = function sortOrder(a, b) {
				if (a === b) {
					hasDuplicate = true;
				}
				return 0;
			},


			// Instance methods
			hasOwn = {}.hasOwnProperty,
			    arr = [],
			    pop = arr.pop,
			    push_native = arr.push,
			    push = arr.push,
			    slice = arr.slice,

			// Use a stripped-down indexOf as it's faster than native
			// https://jsperf.com/thor-indexof-vs-for/5
			indexOf = function indexOf(list, elem) {
				var i = 0,
				    len = list.length;
				for (; i < len; i++) {
					if (list[i] === elem) {
						return i;
					}
				}
				return -1;
			},
			    booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",


			// Regular expressions

			// http://www.w3.org/TR/css3-selectors/#whitespace
			whitespace = "[\\x20\\t\\r\\n\\f]",


			// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
			identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",


			// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
			attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
			    pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" + ")\\)|)",


			// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
			rwhitespace = new RegExp(whitespace + "+", "g"),
			    rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
			    rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
			    rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
			    rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"),
			    rpseudo = new RegExp(pseudos),
			    ridentifier = new RegExp("^" + identifier + "$"),
			    matchExpr = {
				"ID": new RegExp("^#(" + identifier + ")"),
				"CLASS": new RegExp("^\\.(" + identifier + ")"),
				"TAG": new RegExp("^(" + identifier + "|[*])"),
				"ATTR": new RegExp("^" + attributes),
				"PSEUDO": new RegExp("^" + pseudos),
				"CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
				"bool": new RegExp("^(?:" + booleans + ")$", "i"),
				// For use in libraries implementing .is()
				// We use this for POS matching in `select`
				"needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
			},
			    rinputs = /^(?:input|select|textarea|button)$/i,
			    rheader = /^h\d$/i,
			    rnative = /^[^{]+\{\s*\[native \w/,


			// Easily-parseable/retrievable ID or TAG or CLASS selectors
			rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			    rsibling = /[+~]/,


			// CSS escapes
			// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
			runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
			    funescape = function funescape(_, escaped, escapedWhitespace) {
				var high = "0x" + escaped - 0x10000;
				// NaN means non-codepoint
				// Support: Firefox<24
				// Workaround erroneous numeric interpretation of +"0x"
				return high !== high || escapedWhitespace ? escaped : high < 0 ?
				// BMP codepoint
				String.fromCharCode(high + 0x10000) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
			},


			// CSS string/identifier serialization
			// https://drafts.csswg.org/cssom/#common-serializing-idioms
			rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
			    fcssescape = function fcssescape(ch, asCodePoint) {
				if (asCodePoint) {

					// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
					if (ch === "\0") {
						return "\uFFFD";
					}

					// Control characters and (dependent upon position) numbers get escaped as code points
					return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
				}

				// Other potentially-special ASCII characters get backslash-escaped
				return "\\" + ch;
			},


			// Used for iframes
			// See setDocument()
			// Removing the function wrapper causes a "Permission Denied"
			// error in IE
			unloadHandler = function unloadHandler() {
				setDocument();
			},
			    disabledAncestor = addCombinator(function (elem) {
				return elem.disabled === true && ("form" in elem || "label" in elem);
			}, { dir: "parentNode", next: "legend" });

			// Optimize for push.apply( _, NodeList )
			try {
				push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
				// Support: Android<4.0
				// Detect silently failing push.apply
				arr[preferredDoc.childNodes.length].nodeType;
			} catch (e) {
				push = { apply: arr.length ?

					// Leverage slice if possible
					function (target, els) {
						push_native.apply(target, slice.call(els));
					} :

					// Support: IE<9
					// Otherwise append directly
					function (target, els) {
						var j = target.length,
						    i = 0;
						// Can't trust NodeList.length
						while (target[j++] = els[i++]) {}
						target.length = j - 1;
					}
				};
			}

			function Sizzle(selector, context, results, seed) {
				var m,
				    i,
				    elem,
				    nid,
				    match,
				    groups,
				    newSelector,
				    newContext = context && context.ownerDocument,


				// nodeType defaults to 9, since context defaults to document
				nodeType = context ? context.nodeType : 9;

				results = results || [];

				// Return early from calls with invalid selector or context
				if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {

					return results;
				}

				// Try to shortcut find operations (as opposed to filters) in HTML documents
				if (!seed) {

					if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
						setDocument(context);
					}
					context = context || document;

					if (documentIsHTML) {

						// If the selector is sufficiently simple, try using a "get*By*" DOM method
						// (excepting DocumentFragment context, where the methods don't exist)
						if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {

							// ID selector
							if (m = match[1]) {

								// Document context
								if (nodeType === 9) {
									if (elem = context.getElementById(m)) {

										// Support: IE, Opera, Webkit
										// TODO: identify versions
										// getElementById can match elements by name instead of ID
										if (elem.id === m) {
											results.push(elem);
											return results;
										}
									} else {
										return results;
									}

									// Element context
								} else {

									// Support: IE, Opera, Webkit
									// TODO: identify versions
									// getElementById can match elements by name instead of ID
									if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {

										results.push(elem);
										return results;
									}
								}

								// Type selector
							} else if (match[2]) {
								push.apply(results, context.getElementsByTagName(selector));
								return results;

								// Class selector
							} else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {

								push.apply(results, context.getElementsByClassName(m));
								return results;
							}
						}

						// Take advantage of querySelectorAll
						if (support.qsa && !compilerCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {

							if (nodeType !== 1) {
								newContext = context;
								newSelector = selector;

								// qSA looks outside Element context, which is not what we want
								// Thanks to Andrew Dupont for this workaround technique
								// Support: IE <=8
								// Exclude object elements
							} else if (context.nodeName.toLowerCase() !== "object") {

								// Capture the context ID, setting it first if necessary
								if (nid = context.getAttribute("id")) {
									nid = nid.replace(rcssescape, fcssescape);
								} else {
									context.setAttribute("id", nid = expando);
								}

								// Prefix every selector in the list
								groups = tokenize(selector);
								i = groups.length;
								while (i--) {
									groups[i] = "#" + nid + " " + toSelector(groups[i]);
								}
								newSelector = groups.join(",");

								// Expand context for sibling selectors
								newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
							}

							if (newSelector) {
								try {
									push.apply(results, newContext.querySelectorAll(newSelector));
									return results;
								} catch (qsaError) {} finally {
									if (nid === expando) {
										context.removeAttribute("id");
									}
								}
							}
						}
					}
				}

				// All others
				return select(selector.replace(rtrim, "$1"), context, results, seed);
			}

			/**
	   * Create key-value caches of limited size
	   * @returns {function(string, object)} Returns the Object data after storing it on itself with
	   *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	   *	deleting the oldest entry
	   */
			function createCache() {
				var keys = [];

				function cache(key, value) {
					// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
					if (keys.push(key + " ") > Expr.cacheLength) {
						// Only keep the most recent entries
						delete cache[keys.shift()];
					}
					return cache[key + " "] = value;
				}
				return cache;
			}

			/**
	   * Mark a function for special use by Sizzle
	   * @param {Function} fn The function to mark
	   */
			function markFunction(fn) {
				fn[expando] = true;
				return fn;
			}

			/**
	   * Support testing using an element
	   * @param {Function} fn Passed the created element and returns a boolean result
	   */
			function assert(fn) {
				var el = document.createElement("fieldset");

				try {
					return !!fn(el);
				} catch (e) {
					return false;
				} finally {
					// Remove from its parent by default
					if (el.parentNode) {
						el.parentNode.removeChild(el);
					}
					// release memory in IE
					el = null;
				}
			}

			/**
	   * Adds the same handler for all of the specified attrs
	   * @param {String} attrs Pipe-separated list of attributes
	   * @param {Function} handler The method that will be applied
	   */
			function addHandle(attrs, handler) {
				var arr = attrs.split("|"),
				    i = arr.length;

				while (i--) {
					Expr.attrHandle[arr[i]] = handler;
				}
			}

			/**
	   * Checks document order of two siblings
	   * @param {Element} a
	   * @param {Element} b
	   * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	   */
			function siblingCheck(a, b) {
				var cur = b && a,
				    diff = cur && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex;

				// Use IE sourceIndex if available on both nodes
				if (diff) {
					return diff;
				}

				// Check if b follows a
				if (cur) {
					while (cur = cur.nextSibling) {
						if (cur === b) {
							return -1;
						}
					}
				}

				return a ? 1 : -1;
			}

			/**
	   * Returns a function to use in pseudos for input types
	   * @param {String} type
	   */
			function createInputPseudo(type) {
				return function (elem) {
					var name = elem.nodeName.toLowerCase();
					return name === "input" && elem.type === type;
				};
			}

			/**
	   * Returns a function to use in pseudos for buttons
	   * @param {String} type
	   */
			function createButtonPseudo(type) {
				return function (elem) {
					var name = elem.nodeName.toLowerCase();
					return (name === "input" || name === "button") && elem.type === type;
				};
			}

			/**
	   * Returns a function to use in pseudos for :enabled/:disabled
	   * @param {Boolean} disabled true for :disabled; false for :enabled
	   */
			function createDisabledPseudo(disabled) {

				// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
				return function (elem) {

					// Only certain elements can match :enabled or :disabled
					// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
					// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
					if ("form" in elem) {

						// Check for inherited disabledness on relevant non-disabled elements:
						// * listed form-associated elements in a disabled fieldset
						//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
						//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
						// * option elements in a disabled optgroup
						//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
						// All such elements have a "form" property.
						if (elem.parentNode && elem.disabled === false) {

							// Option elements defer to a parent optgroup if present
							if ("label" in elem) {
								if ("label" in elem.parentNode) {
									return elem.parentNode.disabled === disabled;
								} else {
									return elem.disabled === disabled;
								}
							}

							// Support: IE 6 - 11
							// Use the isDisabled shortcut property to check for disabled fieldset ancestors
							return elem.isDisabled === disabled ||

							// Where there is no isDisabled, check manually
							/* jshint -W018 */
							elem.isDisabled !== !disabled && disabledAncestor(elem) === disabled;
						}

						return elem.disabled === disabled;

						// Try to winnow out elements that can't be disabled before trusting the disabled property.
						// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
						// even exist on them, let alone have a boolean value.
					} else if ("label" in elem) {
						return elem.disabled === disabled;
					}

					// Remaining elements are neither :enabled nor :disabled
					return false;
				};
			}

			/**
	   * Returns a function to use in pseudos for positionals
	   * @param {Function} fn
	   */
			function createPositionalPseudo(fn) {
				return markFunction(function (argument) {
					argument = +argument;
					return markFunction(function (seed, matches) {
						var j,
						    matchIndexes = fn([], seed.length, argument),
						    i = matchIndexes.length;

						// Match elements found at the specified indexes
						while (i--) {
							if (seed[j = matchIndexes[i]]) {
								seed[j] = !(matches[j] = seed[j]);
							}
						}
					});
				});
			}

			/**
	   * Checks a node for validity as a Sizzle context
	   * @param {Element|Object=} context
	   * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	   */
			function testContext(context) {
				return context && typeof context.getElementsByTagName !== "undefined" && context;
			}

			// Expose support vars for convenience
			support = Sizzle.support = {};

			/**
	   * Detects XML nodes
	   * @param {Element|Object} elem An element or a document
	   * @returns {Boolean} True iff elem is a non-HTML XML node
	   */
			isXML = Sizzle.isXML = function (elem) {
				// documentElement is verified for cases where it doesn't yet exist
				// (such as loading iframes in IE - #4833)
				var documentElement = elem && (elem.ownerDocument || elem).documentElement;
				return documentElement ? documentElement.nodeName !== "HTML" : false;
			};

			/**
	   * Sets document-related variables once based on the current document
	   * @param {Element|Object} [doc] An element or document object to use to set the document
	   * @returns {Object} Returns the current document
	   */
			setDocument = Sizzle.setDocument = function (node) {
				var hasCompare,
				    subWindow,
				    doc = node ? node.ownerDocument || node : preferredDoc;

				// Return early if doc is invalid or already selected
				if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
					return document;
				}

				// Update global variables
				document = doc;
				docElem = document.documentElement;
				documentIsHTML = !isXML(document);

				// Support: IE 9-11, Edge
				// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
				if (preferredDoc !== document && (subWindow = document.defaultView) && subWindow.top !== subWindow) {

					// Support: IE 11, Edge
					if (subWindow.addEventListener) {
						subWindow.addEventListener("unload", unloadHandler, false);

						// Support: IE 9 - 10 only
					} else if (subWindow.attachEvent) {
						subWindow.attachEvent("onunload", unloadHandler);
					}
				}

				/* Attributes
	   ---------------------------------------------------------------------- */

				// Support: IE<8
				// Verify that getAttribute really returns attributes and not properties
				// (excepting IE8 booleans)
				support.attributes = assert(function (el) {
					el.className = "i";
					return !el.getAttribute("className");
				});

				/* getElement(s)By*
	   ---------------------------------------------------------------------- */

				// Check if getElementsByTagName("*") returns only elements
				support.getElementsByTagName = assert(function (el) {
					el.appendChild(document.createComment(""));
					return !el.getElementsByTagName("*").length;
				});

				// Support: IE<9
				support.getElementsByClassName = rnative.test(document.getElementsByClassName);

				// Support: IE<10
				// Check if getElementById returns elements by name
				// The broken getElementById methods don't pick up programmatically-set names,
				// so use a roundabout getElementsByName test
				support.getById = assert(function (el) {
					docElem.appendChild(el).id = expando;
					return !document.getElementsByName || !document.getElementsByName(expando).length;
				});

				// ID filter and find
				if (support.getById) {
					Expr.filter["ID"] = function (id) {
						var attrId = id.replace(runescape, funescape);
						return function (elem) {
							return elem.getAttribute("id") === attrId;
						};
					};
					Expr.find["ID"] = function (id, context) {
						if (typeof context.getElementById !== "undefined" && documentIsHTML) {
							var elem = context.getElementById(id);
							return elem ? [elem] : [];
						}
					};
				} else {
					Expr.filter["ID"] = function (id) {
						var attrId = id.replace(runescape, funescape);
						return function (elem) {
							var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
							return node && node.value === attrId;
						};
					};

					// Support: IE 6 - 7 only
					// getElementById is not reliable as a find shortcut
					Expr.find["ID"] = function (id, context) {
						if (typeof context.getElementById !== "undefined" && documentIsHTML) {
							var node,
							    i,
							    elems,
							    elem = context.getElementById(id);

							if (elem) {

								// Verify the id attribute
								node = elem.getAttributeNode("id");
								if (node && node.value === id) {
									return [elem];
								}

								// Fall back on getElementsByName
								elems = context.getElementsByName(id);
								i = 0;
								while (elem = elems[i++]) {
									node = elem.getAttributeNode("id");
									if (node && node.value === id) {
										return [elem];
									}
								}
							}

							return [];
						}
					};
				}

				// Tag
				Expr.find["TAG"] = support.getElementsByTagName ? function (tag, context) {
					if (typeof context.getElementsByTagName !== "undefined") {
						return context.getElementsByTagName(tag);

						// DocumentFragment nodes don't have gEBTN
					} else if (support.qsa) {
						return context.querySelectorAll(tag);
					}
				} : function (tag, context) {
					var elem,
					    tmp = [],
					    i = 0,

					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName(tag);

					// Filter out possible comments
					if (tag === "*") {
						while (elem = results[i++]) {
							if (elem.nodeType === 1) {
								tmp.push(elem);
							}
						}

						return tmp;
					}
					return results;
				};

				// Class
				Expr.find["CLASS"] = support.getElementsByClassName && function (className, context) {
					if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
						return context.getElementsByClassName(className);
					}
				};

				/* QSA/matchesSelector
	   ---------------------------------------------------------------------- */

				// QSA and matchesSelector support

				// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
				rbuggyMatches = [];

				// qSa(:focus) reports false when true (Chrome 21)
				// We allow this because of a bug in IE8/9 that throws an error
				// whenever `document.activeElement` is accessed on an iframe
				// So, we allow :focus to pass through QSA all the time to avoid the IE error
				// See https://bugs.jquery.com/ticket/13378
				rbuggyQSA = [];

				if (support.qsa = rnative.test(document.querySelectorAll)) {
					// Build QSA regex
					// Regex strategy adopted from Diego Perini
					assert(function (el) {
						// Select is set to empty string on purpose
						// This is to test IE's treatment of not explicitly
						// setting a boolean content attribute,
						// since its presence should be enough
						// https://bugs.jquery.com/ticket/12359
						docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>";

						// Support: IE8, Opera 11-12.16
						// Nothing should be selected when empty strings follow ^= or $= or *=
						// The test attribute must be unknown in Opera but "safe" for WinRT
						// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
						if (el.querySelectorAll("[msallowcapture^='']").length) {
							rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
						}

						// Support: IE8
						// Boolean attributes and "value" are not treated correctly
						if (!el.querySelectorAll("[selected]").length) {
							rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
						}

						// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
						if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
							rbuggyQSA.push("~=");
						}

						// Webkit/Opera - :checked should return selected option elements
						// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
						// IE8 throws error here and will not see later tests
						if (!el.querySelectorAll(":checked").length) {
							rbuggyQSA.push(":checked");
						}

						// Support: Safari 8+, iOS 8+
						// https://bugs.webkit.org/show_bug.cgi?id=136851
						// In-page `selector#id sibling-combinator selector` fails
						if (!el.querySelectorAll("a#" + expando + "+*").length) {
							rbuggyQSA.push(".#.+[+~]");
						}
					});

					assert(function (el) {
						el.innerHTML = "<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>";

						// Support: Windows 8 Native Apps
						// The type and name attributes are restricted during .innerHTML assignment
						var input = document.createElement("input");
						input.setAttribute("type", "hidden");
						el.appendChild(input).setAttribute("name", "D");

						// Support: IE8
						// Enforce case-sensitivity of name attribute
						if (el.querySelectorAll("[name=d]").length) {
							rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
						}

						// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
						// IE8 throws error here and will not see later tests
						if (el.querySelectorAll(":enabled").length !== 2) {
							rbuggyQSA.push(":enabled", ":disabled");
						}

						// Support: IE9-11+
						// IE's :disabled selector does not pick up the children of disabled fieldsets
						docElem.appendChild(el).disabled = true;
						if (el.querySelectorAll(":disabled").length !== 2) {
							rbuggyQSA.push(":enabled", ":disabled");
						}

						// Opera 10-11 does not throw on post-comma invalid pseudos
						el.querySelectorAll("*,:x");
						rbuggyQSA.push(",.*:");
					});
				}

				if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {

					assert(function (el) {
						// Check to see if it's possible to do matchesSelector
						// on a disconnected node (IE 9)
						support.disconnectedMatch = matches.call(el, "*");

						// This should fail with an exception
						// Gecko does not error, returns false instead
						matches.call(el, "[s!='']:x");
						rbuggyMatches.push("!=", pseudos);
					});
				}

				rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
				rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));

				/* Contains
	   ---------------------------------------------------------------------- */
				hasCompare = rnative.test(docElem.compareDocumentPosition);

				// Element contains another
				// Purposefully self-exclusive
				// As in, an element does not contain itself
				contains = hasCompare || rnative.test(docElem.contains) ? function (a, b) {
					var adown = a.nodeType === 9 ? a.documentElement : a,
					    bup = b && b.parentNode;
					return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
				} : function (a, b) {
					if (b) {
						while (b = b.parentNode) {
							if (b === a) {
								return true;
							}
						}
					}
					return false;
				};

				/* Sorting
	   ---------------------------------------------------------------------- */

				// Document order sorting
				sortOrder = hasCompare ? function (a, b) {

					// Flag for duplicate removal
					if (a === b) {
						hasDuplicate = true;
						return 0;
					}

					// Sort on method existence if only one input has compareDocumentPosition
					var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
					if (compare) {
						return compare;
					}

					// Calculate position if both inputs belong to the same document
					compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) :

					// Otherwise we know they are disconnected
					1;

					// Disconnected nodes
					if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {

						// Choose the first element that is related to our preferred document
						if (a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
							return -1;
						}
						if (b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
							return 1;
						}

						// Maintain original order
						return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
					}

					return compare & 4 ? -1 : 1;
				} : function (a, b) {
					// Exit early if the nodes are identical
					if (a === b) {
						hasDuplicate = true;
						return 0;
					}

					var cur,
					    i = 0,
					    aup = a.parentNode,
					    bup = b.parentNode,
					    ap = [a],
					    bp = [b];

					// Parentless nodes are either documents or disconnected
					if (!aup || !bup) {
						return a === document ? -1 : b === document ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;

						// If the nodes are siblings, we can do a quick check
					} else if (aup === bup) {
						return siblingCheck(a, b);
					}

					// Otherwise we need full lists of their ancestors for comparison
					cur = a;
					while (cur = cur.parentNode) {
						ap.unshift(cur);
					}
					cur = b;
					while (cur = cur.parentNode) {
						bp.unshift(cur);
					}

					// Walk down the tree looking for a discrepancy
					while (ap[i] === bp[i]) {
						i++;
					}

					return i ?
					// Do a sibling check if the nodes have a common ancestor
					siblingCheck(ap[i], bp[i]) :

					// Otherwise nodes in our document sort first
					ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
				};

				return document;
			};

			Sizzle.matches = function (expr, elements) {
				return Sizzle(expr, null, null, elements);
			};

			Sizzle.matchesSelector = function (elem, expr) {
				// Set document vars if needed
				if ((elem.ownerDocument || elem) !== document) {
					setDocument(elem);
				}

				// Make sure that attribute selectors are quoted
				expr = expr.replace(rattributeQuotes, "='$1']");

				if (support.matchesSelector && documentIsHTML && !compilerCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {

					try {
						var ret = matches.call(elem, expr);

						// IE 9's matchesSelector returns false on disconnected nodes
						if (ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11) {
							return ret;
						}
					} catch (e) {}
				}

				return Sizzle(expr, document, null, [elem]).length > 0;
			};

			Sizzle.contains = function (context, elem) {
				// Set document vars if needed
				if ((context.ownerDocument || context) !== document) {
					setDocument(context);
				}
				return contains(context, elem);
			};

			Sizzle.attr = function (elem, name) {
				// Set document vars if needed
				if ((elem.ownerDocument || elem) !== document) {
					setDocument(elem);
				}

				var fn = Expr.attrHandle[name.toLowerCase()],

				// Don't get fooled by Object.prototype properties (jQuery #13807)
				val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;

				return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
			};

			Sizzle.escape = function (sel) {
				return (sel + "").replace(rcssescape, fcssescape);
			};

			Sizzle.error = function (msg) {
				throw new Error("Syntax error, unrecognized expression: " + msg);
			};

			/**
	   * Document sorting and removing duplicates
	   * @param {ArrayLike} results
	   */
			Sizzle.uniqueSort = function (results) {
				var elem,
				    duplicates = [],
				    j = 0,
				    i = 0;

				// Unless we *know* we can detect duplicates, assume their presence
				hasDuplicate = !support.detectDuplicates;
				sortInput = !support.sortStable && results.slice(0);
				results.sort(sortOrder);

				if (hasDuplicate) {
					while (elem = results[i++]) {
						if (elem === results[i]) {
							j = duplicates.push(i);
						}
					}
					while (j--) {
						results.splice(duplicates[j], 1);
					}
				}

				// Clear input after sorting to release objects
				// See https://github.com/jquery/sizzle/pull/225
				sortInput = null;

				return results;
			};

			/**
	   * Utility function for retrieving the text value of an array of DOM nodes
	   * @param {Array|Element} elem
	   */
			getText = Sizzle.getText = function (elem) {
				var node,
				    ret = "",
				    i = 0,
				    nodeType = elem.nodeType;

				if (!nodeType) {
					// If no nodeType, this is expected to be an array
					while (node = elem[i++]) {
						// Do not traverse comment nodes
						ret += getText(node);
					}
				} else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
					// Use textContent for elements
					// innerText usage removed for consistency of new lines (jQuery #11153)
					if (typeof elem.textContent === "string") {
						return elem.textContent;
					} else {
						// Traverse its children
						for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
							ret += getText(elem);
						}
					}
				} else if (nodeType === 3 || nodeType === 4) {
					return elem.nodeValue;
				}
				// Do not include comment or processing instruction nodes

				return ret;
			};

			Expr = Sizzle.selectors = {

				// Can be adjusted by the user
				cacheLength: 50,

				createPseudo: markFunction,

				match: matchExpr,

				attrHandle: {},

				find: {},

				relative: {
					">": { dir: "parentNode", first: true },
					" ": { dir: "parentNode" },
					"+": { dir: "previousSibling", first: true },
					"~": { dir: "previousSibling" }
				},

				preFilter: {
					"ATTR": function ATTR(match) {
						match[1] = match[1].replace(runescape, funescape);

						// Move the given value to match[3] whether quoted or unquoted
						match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);

						if (match[2] === "~=") {
							match[3] = " " + match[3] + " ";
						}

						return match.slice(0, 4);
					},

					"CHILD": function CHILD(match) {
						/* matches from matchExpr["CHILD"]
	     	1 type (only|nth|...)
	     	2 what (child|of-type)
	     	3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
	     	4 xn-component of xn+y argument ([+-]?\d*n|)
	     	5 sign of xn-component
	     	6 x of xn-component
	     	7 sign of y-component
	     	8 y of y-component
	     */
						match[1] = match[1].toLowerCase();

						if (match[1].slice(0, 3) === "nth") {
							// nth-* requires argument
							if (!match[3]) {
								Sizzle.error(match[0]);
							}

							// numeric x and y parameters for Expr.filter.CHILD
							// remember that false/true cast respectively to 0/1
							match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
							match[5] = +(match[7] + match[8] || match[3] === "odd");

							// other types prohibit arguments
						} else if (match[3]) {
							Sizzle.error(match[0]);
						}

						return match;
					},

					"PSEUDO": function PSEUDO(match) {
						var excess,
						    unquoted = !match[6] && match[2];

						if (matchExpr["CHILD"].test(match[0])) {
							return null;
						}

						// Accept quoted arguments as-is
						if (match[3]) {
							match[2] = match[4] || match[5] || "";

							// Strip excess characters from unquoted arguments
						} else if (unquoted && rpseudo.test(unquoted) && (
						// Get excess from tokenize (recursively)
						excess = tokenize(unquoted, true)) && (
						// advance to the next closing parenthesis
						excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {

							// excess is a negative index
							match[0] = match[0].slice(0, excess);
							match[2] = unquoted.slice(0, excess);
						}

						// Return only captures needed by the pseudo filter method (type and argument)
						return match.slice(0, 3);
					}
				},

				filter: {

					"TAG": function TAG(nodeNameSelector) {
						var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
						return nodeNameSelector === "*" ? function () {
							return true;
						} : function (elem) {
							return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
						};
					},

					"CLASS": function CLASS(className) {
						var pattern = classCache[className + " "];

						return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function (elem) {
							return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
						});
					},

					"ATTR": function ATTR(name, operator, check) {
						return function (elem) {
							var result = Sizzle.attr(elem, name);

							if (result == null) {
								return operator === "!=";
							}
							if (!operator) {
								return true;
							}

							result += "";

							return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
						};
					},

					"CHILD": function CHILD(type, what, argument, first, last) {
						var simple = type.slice(0, 3) !== "nth",
						    forward = type.slice(-4) !== "last",
						    ofType = what === "of-type";

						return first === 1 && last === 0 ?

						// Shortcut for :nth-*(n)
						function (elem) {
							return !!elem.parentNode;
						} : function (elem, context, xml) {
							var cache,
							    uniqueCache,
							    outerCache,
							    node,
							    nodeIndex,
							    start,
							    dir = simple !== forward ? "nextSibling" : "previousSibling",
							    parent = elem.parentNode,
							    name = ofType && elem.nodeName.toLowerCase(),
							    useCache = !xml && !ofType,
							    diff = false;

							if (parent) {

								// :(first|last|only)-(child|of-type)
								if (simple) {
									while (dir) {
										node = elem;
										while (node = node[dir]) {
											if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {

												return false;
											}
										}
										// Reverse direction for :only-* (if we haven't yet done so)
										start = dir = type === "only" && !start && "nextSibling";
									}
									return true;
								}

								start = [forward ? parent.firstChild : parent.lastChild];

								// non-xml :nth-child(...) stores cache data on `parent`
								if (forward && useCache) {

									// Seek `elem` from a previously-cached index

									// ...in a gzip-friendly way
									node = parent;
									outerCache = node[expando] || (node[expando] = {});

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});

									cache = uniqueCache[type] || [];
									nodeIndex = cache[0] === dirruns && cache[1];
									diff = nodeIndex && cache[2];
									node = nodeIndex && parent.childNodes[nodeIndex];

									while (node = ++nodeIndex && node && node[dir] || (

									// Fallback to seeking `elem` from the start
									diff = nodeIndex = 0) || start.pop()) {

										// When found, cache indexes on `parent` and break
										if (node.nodeType === 1 && ++diff && node === elem) {
											uniqueCache[type] = [dirruns, nodeIndex, diff];
											break;
										}
									}
								} else {
									// Use previously-cached element index if available
									if (useCache) {
										// ...in a gzip-friendly way
										node = elem;
										outerCache = node[expando] || (node[expando] = {});

										// Support: IE <9 only
										// Defend against cloned attroperties (jQuery gh-1709)
										uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});

										cache = uniqueCache[type] || [];
										nodeIndex = cache[0] === dirruns && cache[1];
										diff = nodeIndex;
									}

									// xml :nth-child(...)
									// or :nth-last-child(...) or :nth(-last)?-of-type(...)
									if (diff === false) {
										// Use the same loop as above to seek `elem` from the start
										while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {

											if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {

												// Cache the index of each encountered element
												if (useCache) {
													outerCache = node[expando] || (node[expando] = {});

													// Support: IE <9 only
													// Defend against cloned attroperties (jQuery gh-1709)
													uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});

													uniqueCache[type] = [dirruns, diff];
												}

												if (node === elem) {
													break;
												}
											}
										}
									}
								}

								// Incorporate the offset, then check against cycle size
								diff -= last;
								return diff === first || diff % first === 0 && diff / first >= 0;
							}
						};
					},

					"PSEUDO": function PSEUDO(pseudo, argument) {
						// pseudo-class names are case-insensitive
						// http://www.w3.org/TR/selectors/#pseudo-classes
						// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
						// Remember that setFilters inherits from pseudos
						var args,
						    fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);

						// The user may use createPseudo to indicate that
						// arguments are needed to create the filter function
						// just as Sizzle does
						if (fn[expando]) {
							return fn(argument);
						}

						// But maintain support for old signatures
						if (fn.length > 1) {
							args = [pseudo, pseudo, "", argument];
							return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function (seed, matches) {
								var idx,
								    matched = fn(seed, argument),
								    i = matched.length;
								while (i--) {
									idx = indexOf(seed, matched[i]);
									seed[idx] = !(matches[idx] = matched[i]);
								}
							}) : function (elem) {
								return fn(elem, 0, args);
							};
						}

						return fn;
					}
				},

				pseudos: {
					// Potentially complex pseudos
					"not": markFunction(function (selector) {
						// Trim the selector passed to compile
						// to avoid treating leading and trailing
						// spaces as combinators
						var input = [],
						    results = [],
						    matcher = compile(selector.replace(rtrim, "$1"));

						return matcher[expando] ? markFunction(function (seed, matches, context, xml) {
							var elem,
							    unmatched = matcher(seed, null, xml, []),
							    i = seed.length;

							// Match elements unmatched by `matcher`
							while (i--) {
								if (elem = unmatched[i]) {
									seed[i] = !(matches[i] = elem);
								}
							}
						}) : function (elem, context, xml) {
							input[0] = elem;
							matcher(input, null, xml, results);
							// Don't keep the element (issue #299)
							input[0] = null;
							return !results.pop();
						};
					}),

					"has": markFunction(function (selector) {
						return function (elem) {
							return Sizzle(selector, elem).length > 0;
						};
					}),

					"contains": markFunction(function (text) {
						text = text.replace(runescape, funescape);
						return function (elem) {
							return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
						};
					}),

					// "Whether an element is represented by a :lang() selector
					// is based solely on the element's language value
					// being equal to the identifier C,
					// or beginning with the identifier C immediately followed by "-".
					// The matching of C against the element's language value is performed case-insensitively.
					// The identifier C does not have to be a valid language name."
					// http://www.w3.org/TR/selectors/#lang-pseudo
					"lang": markFunction(function (lang) {
						// lang value must be a valid identifier
						if (!ridentifier.test(lang || "")) {
							Sizzle.error("unsupported lang: " + lang);
						}
						lang = lang.replace(runescape, funescape).toLowerCase();
						return function (elem) {
							var elemLang;
							do {
								if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {

									elemLang = elemLang.toLowerCase();
									return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
								}
							} while ((elem = elem.parentNode) && elem.nodeType === 1);
							return false;
						};
					}),

					// Miscellaneous
					"target": function target(elem) {
						var hash = window.location && window.location.hash;
						return hash && hash.slice(1) === elem.id;
					},

					"root": function root(elem) {
						return elem === docElem;
					},

					"focus": function focus(elem) {
						return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
					},

					// Boolean properties
					"enabled": createDisabledPseudo(false),
					"disabled": createDisabledPseudo(true),

					"checked": function checked(elem) {
						// In CSS3, :checked should return both checked and selected elements
						// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
						var nodeName = elem.nodeName.toLowerCase();
						return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
					},

					"selected": function selected(elem) {
						// Accessing this property makes selected-by-default
						// options in Safari work properly
						if (elem.parentNode) {
							elem.parentNode.selectedIndex;
						}

						return elem.selected === true;
					},

					// Contents
					"empty": function empty(elem) {
						// http://www.w3.org/TR/selectors/#empty-pseudo
						// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
						//   but not by others (comment: 8; processing instruction: 7; etc.)
						// nodeType < 6 works because attributes (2) do not appear as children
						for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
							if (elem.nodeType < 6) {
								return false;
							}
						}
						return true;
					},

					"parent": function parent(elem) {
						return !Expr.pseudos["empty"](elem);
					},

					// Element/input types
					"header": function header(elem) {
						return rheader.test(elem.nodeName);
					},

					"input": function input(elem) {
						return rinputs.test(elem.nodeName);
					},

					"button": function button(elem) {
						var name = elem.nodeName.toLowerCase();
						return name === "input" && elem.type === "button" || name === "button";
					},

					"text": function text(elem) {
						var attr;
						return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && (

						// Support: IE<8
						// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
						(attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
					},

					// Position-in-collection
					"first": createPositionalPseudo(function () {
						return [0];
					}),

					"last": createPositionalPseudo(function (matchIndexes, length) {
						return [length - 1];
					}),

					"eq": createPositionalPseudo(function (matchIndexes, length, argument) {
						return [argument < 0 ? argument + length : argument];
					}),

					"even": createPositionalPseudo(function (matchIndexes, length) {
						var i = 0;
						for (; i < length; i += 2) {
							matchIndexes.push(i);
						}
						return matchIndexes;
					}),

					"odd": createPositionalPseudo(function (matchIndexes, length) {
						var i = 1;
						for (; i < length; i += 2) {
							matchIndexes.push(i);
						}
						return matchIndexes;
					}),

					"lt": createPositionalPseudo(function (matchIndexes, length, argument) {
						var i = argument < 0 ? argument + length : argument;
						for (; --i >= 0;) {
							matchIndexes.push(i);
						}
						return matchIndexes;
					}),

					"gt": createPositionalPseudo(function (matchIndexes, length, argument) {
						var i = argument < 0 ? argument + length : argument;
						for (; ++i < length;) {
							matchIndexes.push(i);
						}
						return matchIndexes;
					})
				}
			};

			Expr.pseudos["nth"] = Expr.pseudos["eq"];

			// Add button/input type pseudos
			for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
				Expr.pseudos[i] = createInputPseudo(i);
			}
			for (i in { submit: true, reset: true }) {
				Expr.pseudos[i] = createButtonPseudo(i);
			}

			// Easy API for creating new setFilters
			function setFilters() {}
			setFilters.prototype = Expr.filters = Expr.pseudos;
			Expr.setFilters = new setFilters();

			tokenize = Sizzle.tokenize = function (selector, parseOnly) {
				var matched,
				    match,
				    tokens,
				    type,
				    soFar,
				    groups,
				    preFilters,
				    cached = tokenCache[selector + " "];

				if (cached) {
					return parseOnly ? 0 : cached.slice(0);
				}

				soFar = selector;
				groups = [];
				preFilters = Expr.preFilter;

				while (soFar) {

					// Comma and first run
					if (!matched || (match = rcomma.exec(soFar))) {
						if (match) {
							// Don't consume trailing commas as valid
							soFar = soFar.slice(match[0].length) || soFar;
						}
						groups.push(tokens = []);
					}

					matched = false;

					// Combinators
					if (match = rcombinators.exec(soFar)) {
						matched = match.shift();
						tokens.push({
							value: matched,
							// Cast descendant combinators to space
							type: match[0].replace(rtrim, " ")
						});
						soFar = soFar.slice(matched.length);
					}

					// Filters
					for (type in Expr.filter) {
						if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
							matched = match.shift();
							tokens.push({
								value: matched,
								type: type,
								matches: match
							});
							soFar = soFar.slice(matched.length);
						}
					}

					if (!matched) {
						break;
					}
				}

				// Return the length of the invalid excess
				// if we're just parsing
				// Otherwise, throw an error or return tokens
				return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) :
				// Cache the tokens
				tokenCache(selector, groups).slice(0);
			};

			function toSelector(tokens) {
				var i = 0,
				    len = tokens.length,
				    selector = "";
				for (; i < len; i++) {
					selector += tokens[i].value;
				}
				return selector;
			}

			function addCombinator(matcher, combinator, base) {
				var dir = combinator.dir,
				    skip = combinator.next,
				    key = skip || dir,
				    checkNonElements = base && key === "parentNode",
				    doneName = done++;

				return combinator.first ?
				// Check against closest ancestor/preceding element
				function (elem, context, xml) {
					while (elem = elem[dir]) {
						if (elem.nodeType === 1 || checkNonElements) {
							return matcher(elem, context, xml);
						}
					}
					return false;
				} :

				// Check against all ancestor/preceding elements
				function (elem, context, xml) {
					var oldCache,
					    uniqueCache,
					    outerCache,
					    newCache = [dirruns, doneName];

					// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
					if (xml) {
						while (elem = elem[dir]) {
							if (elem.nodeType === 1 || checkNonElements) {
								if (matcher(elem, context, xml)) {
									return true;
								}
							}
						}
					} else {
						while (elem = elem[dir]) {
							if (elem.nodeType === 1 || checkNonElements) {
								outerCache = elem[expando] || (elem[expando] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});

								if (skip && skip === elem.nodeName.toLowerCase()) {
									elem = elem[dir] || elem;
								} else if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {

									// Assign to newCache so results back-propagate to previous elements
									return newCache[2] = oldCache[2];
								} else {
									// Reuse newcache so results back-propagate to previous elements
									uniqueCache[key] = newCache;

									// A match means we're done; a fail means we have to keep checking
									if (newCache[2] = matcher(elem, context, xml)) {
										return true;
									}
								}
							}
						}
					}
					return false;
				};
			}

			function elementMatcher(matchers) {
				return matchers.length > 1 ? function (elem, context, xml) {
					var i = matchers.length;
					while (i--) {
						if (!matchers[i](elem, context, xml)) {
							return false;
						}
					}
					return true;
				} : matchers[0];
			}

			function multipleContexts(selector, contexts, results) {
				var i = 0,
				    len = contexts.length;
				for (; i < len; i++) {
					Sizzle(selector, contexts[i], results);
				}
				return results;
			}

			function condense(unmatched, map, filter, context, xml) {
				var elem,
				    newUnmatched = [],
				    i = 0,
				    len = unmatched.length,
				    mapped = map != null;

				for (; i < len; i++) {
					if (elem = unmatched[i]) {
						if (!filter || filter(elem, context, xml)) {
							newUnmatched.push(elem);
							if (mapped) {
								map.push(i);
							}
						}
					}
				}

				return newUnmatched;
			}

			function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
				if (postFilter && !postFilter[expando]) {
					postFilter = setMatcher(postFilter);
				}
				if (postFinder && !postFinder[expando]) {
					postFinder = setMatcher(postFinder, postSelector);
				}
				return markFunction(function (seed, results, context, xml) {
					var temp,
					    i,
					    elem,
					    preMap = [],
					    postMap = [],
					    preexisting = results.length,


					// Get initial elements from seed or context
					elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),


					// Prefilter to get matcher input, preserving a map for seed-results synchronization
					matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
					    matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || (seed ? preFilter : preexisting || postFilter) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results : matcherIn;

					// Find primary matches
					if (matcher) {
						matcher(matcherIn, matcherOut, context, xml);
					}

					// Apply postFilter
					if (postFilter) {
						temp = condense(matcherOut, postMap);
						postFilter(temp, [], context, xml);

						// Un-match failing elements by moving them back to matcherIn
						i = temp.length;
						while (i--) {
							if (elem = temp[i]) {
								matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
							}
						}
					}

					if (seed) {
						if (postFinder || preFilter) {
							if (postFinder) {
								// Get the final matcherOut by condensing this intermediate into postFinder contexts
								temp = [];
								i = matcherOut.length;
								while (i--) {
									if (elem = matcherOut[i]) {
										// Restore matcherIn since elem is not yet a final match
										temp.push(matcherIn[i] = elem);
									}
								}
								postFinder(null, matcherOut = [], temp, xml);
							}

							// Move matched elements from seed to results to keep them synchronized
							i = matcherOut.length;
							while (i--) {
								if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {

									seed[temp] = !(results[temp] = elem);
								}
							}
						}

						// Add elements to results, through postFinder if defined
					} else {
						matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
						if (postFinder) {
							postFinder(null, results, matcherOut, xml);
						} else {
							push.apply(results, matcherOut);
						}
					}
				});
			}

			function matcherFromTokens(tokens) {
				var checkContext,
				    matcher,
				    j,
				    len = tokens.length,
				    leadingRelative = Expr.relative[tokens[0].type],
				    implicitRelative = leadingRelative || Expr.relative[" "],
				    i = leadingRelative ? 1 : 0,


				// The foundational matcher ensures that elements are reachable from top-level context(s)
				matchContext = addCombinator(function (elem) {
					return elem === checkContext;
				}, implicitRelative, true),
				    matchAnyContext = addCombinator(function (elem) {
					return indexOf(checkContext, elem) > -1;
				}, implicitRelative, true),
				    matchers = [function (elem, context, xml) {
					var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
					// Avoid hanging onto element (issue #299)
					checkContext = null;
					return ret;
				}];

				for (; i < len; i++) {
					if (matcher = Expr.relative[tokens[i].type]) {
						matchers = [addCombinator(elementMatcher(matchers), matcher)];
					} else {
						matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);

						// Return special upon seeing a positional matcher
						if (matcher[expando]) {
							// Find the next relative operator (if any) for proper handling
							j = ++i;
							for (; j < len; j++) {
								if (Expr.relative[tokens[j].type]) {
									break;
								}
							}
							return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice(0, i - 1).concat({ value: tokens[i - 2].type === " " ? "*" : "" })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
						}
						matchers.push(matcher);
					}
				}

				return elementMatcher(matchers);
			}

			function matcherFromGroupMatchers(elementMatchers, setMatchers) {
				var bySet = setMatchers.length > 0,
				    byElement = elementMatchers.length > 0,
				    superMatcher = function superMatcher(seed, context, xml, results, outermost) {
					var elem,
					    j,
					    matcher,
					    matchedCount = 0,
					    i = "0",
					    unmatched = seed && [],
					    setMatched = [],
					    contextBackup = outermostContext,

					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]("*", outermost),

					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1,
					    len = elems.length;

					if (outermost) {
						outermostContext = context === document || context || outermost;
					}

					// Add elements passing elementMatchers directly to results
					// Support: IE<9, Safari
					// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
					for (; i !== len && (elem = elems[i]) != null; i++) {
						if (byElement && elem) {
							j = 0;
							if (!context && elem.ownerDocument !== document) {
								setDocument(elem);
								xml = !documentIsHTML;
							}
							while (matcher = elementMatchers[j++]) {
								if (matcher(elem, context || document, xml)) {
									results.push(elem);
									break;
								}
							}
							if (outermost) {
								dirruns = dirrunsUnique;
							}
						}

						// Track unmatched elements for set filters
						if (bySet) {
							// They will have gone through all possible matchers
							if (elem = !matcher && elem) {
								matchedCount--;
							}

							// Lengthen the array for every element, matched or not
							if (seed) {
								unmatched.push(elem);
							}
						}
					}

					// `i` is now the count of elements visited above, and adding it to `matchedCount`
					// makes the latter nonnegative.
					matchedCount += i;

					// Apply set filters to unmatched elements
					// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
					// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
					// no element matchers and no seed.
					// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
					// case, which will result in a "00" `matchedCount` that differs from `i` but is also
					// numerically zero.
					if (bySet && i !== matchedCount) {
						j = 0;
						while (matcher = setMatchers[j++]) {
							matcher(unmatched, setMatched, context, xml);
						}

						if (seed) {
							// Reintegrate element matches to eliminate the need for sorting
							if (matchedCount > 0) {
								while (i--) {
									if (!(unmatched[i] || setMatched[i])) {
										setMatched[i] = pop.call(results);
									}
								}
							}

							// Discard index placeholder values to get only actual matches
							setMatched = condense(setMatched);
						}

						// Add matches to results
						push.apply(results, setMatched);

						// Seedless set matches succeeding multiple successful matchers stipulate sorting
						if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {

							Sizzle.uniqueSort(results);
						}
					}

					// Override manipulation of globals by nested matchers
					if (outermost) {
						dirruns = dirrunsUnique;
						outermostContext = contextBackup;
					}

					return unmatched;
				};

				return bySet ? markFunction(superMatcher) : superMatcher;
			}

			compile = Sizzle.compile = function (selector, match /* Internal Use Only */) {
				var i,
				    setMatchers = [],
				    elementMatchers = [],
				    cached = compilerCache[selector + " "];

				if (!cached) {
					// Generate a function of recursive functions that can be used to check each element
					if (!match) {
						match = tokenize(selector);
					}
					i = match.length;
					while (i--) {
						cached = matcherFromTokens(match[i]);
						if (cached[expando]) {
							setMatchers.push(cached);
						} else {
							elementMatchers.push(cached);
						}
					}

					// Cache the compiled function
					cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));

					// Save selector and tokenization
					cached.selector = selector;
				}
				return cached;
			};

			/**
	   * A low-level selection function that works with Sizzle's compiled
	   *  selector functions
	   * @param {String|Function} selector A selector or a pre-compiled
	   *  selector function built with Sizzle.compile
	   * @param {Element} context
	   * @param {Array} [results]
	   * @param {Array} [seed] A set of elements to match against
	   */
			select = Sizzle.select = function (selector, context, results, seed) {
				var i,
				    tokens,
				    token,
				    type,
				    find,
				    compiled = typeof selector === "function" && selector,
				    match = !seed && tokenize(selector = compiled.selector || selector);

				results = results || [];

				// Try to minimize operations if there is only one selector in the list and no seed
				// (the latter of which guarantees us context)
				if (match.length === 1) {

					// Reduce context if the leading compound selector is an ID
					tokens = match[0] = match[0].slice(0);
					if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {

						context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
						if (!context) {
							return results;

							// Precompiled matchers will still verify ancestry, so step up a level
						} else if (compiled) {
							context = context.parentNode;
						}

						selector = selector.slice(tokens.shift().value.length);
					}

					// Fetch a seed set for right-to-left matching
					i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
					while (i--) {
						token = tokens[i];

						// Abort if we hit a combinator
						if (Expr.relative[type = token.type]) {
							break;
						}
						if (find = Expr.find[type]) {
							// Search, expanding context for leading sibling combinators
							if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {

								// If seed is empty or no tokens remain, we can return early
								tokens.splice(i, 1);
								selector = seed.length && toSelector(tokens);
								if (!selector) {
									push.apply(results, seed);
									return results;
								}

								break;
							}
						}
					}
				}

				// Compile and execute a filtering function if one is not provided
				// Provide `match` to avoid retokenization if we modified the selector above
				(compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
				return results;
			};

			// One-time assignments

			// Sort stability
			support.sortStable = expando.split("").sort(sortOrder).join("") === expando;

			// Support: Chrome 14-35+
			// Always assume duplicates if they aren't passed to the comparison function
			support.detectDuplicates = !!hasDuplicate;

			// Initialize against the default document
			setDocument();

			// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
			// Detached nodes confoundingly follow *each other*
			support.sortDetached = assert(function (el) {
				// Should return 1, but returns 4 (following)
				return el.compareDocumentPosition(document.createElement("fieldset")) & 1;
			});

			// Support: IE<8
			// Prevent attribute/property "interpolation"
			// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
			if (!assert(function (el) {
				el.innerHTML = "<a href='#'></a>";
				return el.firstChild.getAttribute("href") === "#";
			})) {
				addHandle("type|href|height|width", function (elem, name, isXML) {
					if (!isXML) {
						return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
					}
				});
			}

			// Support: IE<9
			// Use defaultValue in place of getAttribute("value")
			if (!support.attributes || !assert(function (el) {
				el.innerHTML = "<input/>";
				el.firstChild.setAttribute("value", "");
				return el.firstChild.getAttribute("value") === "";
			})) {
				addHandle("value", function (elem, name, isXML) {
					if (!isXML && elem.nodeName.toLowerCase() === "input") {
						return elem.defaultValue;
					}
				});
			}

			// Support: IE<9
			// Use getAttributeNode to fetch booleans when getAttribute lies
			if (!assert(function (el) {
				return el.getAttribute("disabled") == null;
			})) {
				addHandle(booleans, function (elem, name, isXML) {
					var val;
					if (!isXML) {
						return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
					}
				});
			}

			return Sizzle;
		}(window);

		jQuery.find = Sizzle;
		jQuery.expr = Sizzle.selectors;

		// Deprecated
		jQuery.expr[":"] = jQuery.expr.pseudos;
		jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
		jQuery.text = Sizzle.getText;
		jQuery.isXMLDoc = Sizzle.isXML;
		jQuery.contains = Sizzle.contains;
		jQuery.escapeSelector = Sizzle.escape;

		var dir = function dir(elem, _dir, until) {
			var matched = [],
			    truncate = until !== undefined;

			while ((elem = elem[_dir]) && elem.nodeType !== 9) {
				if (elem.nodeType === 1) {
					if (truncate && jQuery(elem).is(until)) {
						break;
					}
					matched.push(elem);
				}
			}
			return matched;
		};

		var _siblings = function _siblings(n, elem) {
			var matched = [];

			for (; n; n = n.nextSibling) {
				if (n.nodeType === 1 && n !== elem) {
					matched.push(n);
				}
			}

			return matched;
		};

		var rneedsContext = jQuery.expr.match.needsContext;

		var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

		var risSimple = /^.[^:#\[\.,]*$/;

		// Implement the identical functionality for filter and not
		function winnow(elements, qualifier, not) {
			if (jQuery.isFunction(qualifier)) {
				return jQuery.grep(elements, function (elem, i) {
					return !!qualifier.call(elem, i, elem) !== not;
				});
			}

			// Single element
			if (qualifier.nodeType) {
				return jQuery.grep(elements, function (elem) {
					return elem === qualifier !== not;
				});
			}

			// Arraylike of elements (jQuery, arguments, Array)
			if (typeof qualifier !== "string") {
				return jQuery.grep(elements, function (elem) {
					return indexOf.call(qualifier, elem) > -1 !== not;
				});
			}

			// Simple selector that can be filtered directly, removing non-Elements
			if (risSimple.test(qualifier)) {
				return jQuery.filter(qualifier, elements, not);
			}

			// Complex selector, compare the two sets, removing non-Elements
			qualifier = jQuery.filter(qualifier, elements);
			return jQuery.grep(elements, function (elem) {
				return indexOf.call(qualifier, elem) > -1 !== not && elem.nodeType === 1;
			});
		}

		jQuery.filter = function (expr, elems, not) {
			var elem = elems[0];

			if (not) {
				expr = ":not(" + expr + ")";
			}

			if (elems.length === 1 && elem.nodeType === 1) {
				return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
			}

			return jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
				return elem.nodeType === 1;
			}));
		};

		jQuery.fn.extend({
			find: function find(selector) {
				var i,
				    ret,
				    len = this.length,
				    self = this;

				if (typeof selector !== "string") {
					return this.pushStack(jQuery(selector).filter(function () {
						for (i = 0; i < len; i++) {
							if (jQuery.contains(self[i], this)) {
								return true;
							}
						}
					}));
				}

				ret = this.pushStack([]);

				for (i = 0; i < len; i++) {
					jQuery.find(selector, self[i], ret);
				}

				return len > 1 ? jQuery.uniqueSort(ret) : ret;
			},
			filter: function filter(selector) {
				return this.pushStack(winnow(this, selector || [], false));
			},
			not: function not(selector) {
				return this.pushStack(winnow(this, selector || [], true));
			},
			is: function is(selector) {
				return !!winnow(this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
			}
		});

		// Initialize a jQuery object


		// A central reference to the root jQuery(document)
		var rootjQuery,


		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		// Shortcut simple #id case for speed
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
		    init = jQuery.fn.init = function (selector, context, root) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if (!selector) {
				return this;
			}

			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;

			// Handle HTML strings
			if (typeof selector === "string") {
				if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {

					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [null, selector, null];
				} else {
					match = rquickExpr.exec(selector);
				}

				// Match html or make sure no context is specified for #id
				if (match && (match[1] || !context)) {

					// HANDLE: $(html) -> $(array)
					if (match[1]) {
						context = context instanceof jQuery ? context[0] : context;

						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));

						// HANDLE: $(html, props)
						if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
							for (match in context) {

								// Properties of context are called as methods if possible
								if (jQuery.isFunction(this[match])) {
									this[match](context[match]);

									// ...and otherwise set as attributes
								} else {
									this.attr(match, context[match]);
								}
							}
						}

						return this;

						// HANDLE: $(#id)
					} else {
						elem = document.getElementById(match[2]);

						if (elem) {

							// Inject the element directly into the jQuery object
							this[0] = elem;
							this.length = 1;
						}
						return this;
					}

					// HANDLE: $(expr, $(...))
				} else if (!context || context.jquery) {
					return (context || root).find(selector);

					// HANDLE: $(expr, context)
					// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor(context).find(selector);
				}

				// HANDLE: $(DOMElement)
			} else if (selector.nodeType) {
				this[0] = selector;
				this.length = 1;
				return this;

				// HANDLE: $(function)
				// Shortcut for document ready
			} else if (jQuery.isFunction(selector)) {
				return root.ready !== undefined ? root.ready(selector) :

				// Execute immediately if ready is not present
				selector(jQuery);
			}

			return jQuery.makeArray(selector, this);
		};

		// Give the init function the jQuery prototype for later instantiation
		init.prototype = jQuery.fn;

		// Initialize central reference
		rootjQuery = jQuery(document);

		var rparentsprev = /^(?:parents|prev(?:Until|All))/,


		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

		jQuery.fn.extend({
			has: function has(target) {
				var targets = jQuery(target, this),
				    l = targets.length;

				return this.filter(function () {
					var i = 0;
					for (; i < l; i++) {
						if (jQuery.contains(this, targets[i])) {
							return true;
						}
					}
				});
			},

			closest: function closest(selectors, context) {
				var cur,
				    i = 0,
				    l = this.length,
				    matched = [],
				    targets = typeof selectors !== "string" && jQuery(selectors);

				// Positional selectors never match, since there's no _selection_ context
				if (!rneedsContext.test(selectors)) {
					for (; i < l; i++) {
						for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {

							// Always skip document fragments
							if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 :

							// Don't pass non-elements to Sizzle
							cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {

								matched.push(cur);
								break;
							}
						}
					}
				}

				return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
			},

			// Determine the position of an element within the set
			index: function index(elem) {

				// No argument, return index in parent
				if (!elem) {
					return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
				}

				// Index in selector
				if (typeof elem === "string") {
					return indexOf.call(jQuery(elem), this[0]);
				}

				// Locate the position of the desired element
				return indexOf.call(this,

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[0] : elem);
			},

			add: function add(selector, context) {
				return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
			},

			addBack: function addBack(selector) {
				return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
			}
		});

		function sibling(cur, dir) {
			while ((cur = cur[dir]) && cur.nodeType !== 1) {}
			return cur;
		}

		jQuery.each({
			parent: function parent(elem) {
				var parent = elem.parentNode;
				return parent && parent.nodeType !== 11 ? parent : null;
			},
			parents: function parents(elem) {
				return dir(elem, "parentNode");
			},
			parentsUntil: function parentsUntil(elem, i, until) {
				return dir(elem, "parentNode", until);
			},
			next: function next(elem) {
				return sibling(elem, "nextSibling");
			},
			prev: function prev(elem) {
				return sibling(elem, "previousSibling");
			},
			nextAll: function nextAll(elem) {
				return dir(elem, "nextSibling");
			},
			prevAll: function prevAll(elem) {
				return dir(elem, "previousSibling");
			},
			nextUntil: function nextUntil(elem, i, until) {
				return dir(elem, "nextSibling", until);
			},
			prevUntil: function prevUntil(elem, i, until) {
				return dir(elem, "previousSibling", until);
			},
			siblings: function siblings(elem) {
				return _siblings((elem.parentNode || {}).firstChild, elem);
			},
			children: function children(elem) {
				return _siblings(elem.firstChild);
			},
			contents: function contents(elem) {
				return elem.contentDocument || jQuery.merge([], elem.childNodes);
			}
		}, function (name, fn) {
			jQuery.fn[name] = function (until, selector) {
				var matched = jQuery.map(this, fn, until);

				if (name.slice(-5) !== "Until") {
					selector = until;
				}

				if (selector && typeof selector === "string") {
					matched = jQuery.filter(selector, matched);
				}

				if (this.length > 1) {

					// Remove duplicates
					if (!guaranteedUnique[name]) {
						jQuery.uniqueSort(matched);
					}

					// Reverse order for parents* and prev-derivatives
					if (rparentsprev.test(name)) {
						matched.reverse();
					}
				}

				return this.pushStack(matched);
			};
		});
		var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;

		// Convert String-formatted options into Object-formatted ones
		function createOptions(options) {
			var object = {};
			jQuery.each(options.match(rnothtmlwhite) || [], function (_, flag) {
				object[flag] = true;
			});
			return object;
		}

		/*
	  * Create a callback list using the following parameters:
	  *
	  *	options: an optional list of space-separated options that will change how
	  *			the callback list behaves or a more traditional option object
	  *
	  * By default a callback list will act like an event callback list and can be
	  * "fired" multiple times.
	  *
	  * Possible options:
	  *
	  *	once:			will ensure the callback list can only be fired once (like a Deferred)
	  *
	  *	memory:			will keep track of previous values and will call any callback added
	  *					after the list has been fired right away with the latest "memorized"
	  *					values (like a Deferred)
	  *
	  *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	  *
	  *	stopOnFalse:	interrupt callings when a callback returns false
	  *
	  */
		jQuery.Callbacks = function (options) {

			// Convert options from String-formatted to Object-formatted if needed
			// (we check in cache first)
			options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);

			var // Flag to know if list is currently firing
			firing,


			// Last fire value for non-forgettable lists
			memory,


			// Flag to know if list was already fired
			_fired,


			// Flag to prevent firing
			_locked,


			// Actual callback list
			list = [],


			// Queue of execution data for repeatable lists
			queue = [],


			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,


			// Fire callbacks
			fire = function fire() {

				// Enforce single-firing
				_locked = options.once;

				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				_fired = firing = true;
				for (; queue.length; firingIndex = -1) {
					memory = queue.shift();
					while (++firingIndex < list.length) {

						// Run callback and check for early termination
						if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {

							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}

				// Forget the data if we're done with it
				if (!options.memory) {
					memory = false;
				}

				firing = false;

				// Clean up if we're done firing for good
				if (_locked) {

					// Keep an empty list if we have data for future add calls
					if (memory) {
						list = [];

						// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},


			// Actual Callbacks object
			self = {

				// Add a callback or a collection of callbacks to the list
				add: function add() {
					if (list) {

						// If we have memory from a past run, we should fire after adding
						if (memory && !firing) {
							firingIndex = list.length - 1;
							queue.push(memory);
						}

						(function add(args) {
							jQuery.each(args, function (_, arg) {
								if (jQuery.isFunction(arg)) {
									if (!options.unique || !self.has(arg)) {
										list.push(arg);
									}
								} else if (arg && arg.length && jQuery.type(arg) !== "string") {

									// Inspect recursively
									add(arg);
								}
							});
						})(arguments);

						if (memory && !firing) {
							fire();
						}
					}
					return this;
				},

				// Remove a callback from the list
				remove: function remove() {
					jQuery.each(arguments, function (_, arg) {
						var index;
						while ((index = jQuery.inArray(arg, list, index)) > -1) {
							list.splice(index, 1);

							// Handle firing indexes
							if (index <= firingIndex) {
								firingIndex--;
							}
						}
					});
					return this;
				},

				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function has(fn) {
					return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
				},

				// Remove all callbacks from the list
				empty: function empty() {
					if (list) {
						list = [];
					}
					return this;
				},

				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function disable() {
					_locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function disabled() {
					return !list;
				},

				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function lock() {
					_locked = queue = [];
					if (!memory && !firing) {
						list = memory = "";
					}
					return this;
				},
				locked: function locked() {
					return !!_locked;
				},

				// Call all callbacks with the given context and arguments
				fireWith: function fireWith(context, args) {
					if (!_locked) {
						args = args || [];
						args = [context, args.slice ? args.slice() : args];
						queue.push(args);
						if (!firing) {
							fire();
						}
					}
					return this;
				},

				// Call all the callbacks with the given arguments
				fire: function fire() {
					self.fireWith(this, arguments);
					return this;
				},

				// To know if the callbacks have already been called at least once
				fired: function fired() {
					return !!_fired;
				}
			};

			return self;
		};

		function Identity(v) {
			return v;
		}
		function Thrower(ex) {
			throw ex;
		}

		function adoptValue(value, resolve, reject) {
			var method;

			try {

				// Check for promise aspect first to privilege synchronous behavior
				if (value && jQuery.isFunction(method = value.promise)) {
					method.call(value).done(resolve).fail(reject);

					// Other thenables
				} else if (value && jQuery.isFunction(method = value.then)) {
					method.call(value, resolve, reject);

					// Other non-thenables
				} else {

					// Support: Android 4.0 only
					// Strict mode functions invoked without .call/.apply get global-object context
					resolve.call(undefined, value);
				}

				// For Promises/A+, convert exceptions into rejections
				// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
				// Deferred#then to conditionally suppress rejection.
			} catch (value) {

				// Support: Android 4.0 only
				// Strict mode functions invoked without .call/.apply get global-object context
				reject.call(undefined, value);
			}
		}

		jQuery.extend({

			Deferred: function Deferred(func) {
				var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				["notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2], ["resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected"]],
				    _state = "pending",
				    _promise = {
					state: function state() {
						return _state;
					},
					always: function always() {
						deferred.done(arguments).fail(arguments);
						return this;
					},
					"catch": function _catch(fn) {
						return _promise.then(null, fn);
					},

					// Keep pipe for back-compat
					pipe: function pipe() /* fnDone, fnFail, fnProgress */{
						var fns = arguments;

						return jQuery.Deferred(function (newDefer) {
							jQuery.each(tuples, function (i, tuple) {

								// Map tuples (progress, done, fail) to arguments (done, fail, progress)
								var fn = jQuery.isFunction(fns[tuple[4]]) && fns[tuple[4]];

								// deferred.progress(function() { bind to newDefer or newDefer.notify })
								// deferred.done(function() { bind to newDefer or newDefer.resolve })
								// deferred.fail(function() { bind to newDefer or newDefer.reject })
								deferred[tuple[1]](function () {
									var returned = fn && fn.apply(this, arguments);
									if (returned && jQuery.isFunction(returned.promise)) {
										returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
									} else {
										newDefer[tuple[0] + "With"](this, fn ? [returned] : arguments);
									}
								});
							});
							fns = null;
						}).promise();
					},
					then: function then(onFulfilled, onRejected, onProgress) {
						var maxDepth = 0;
						function resolve(depth, deferred, handler, special) {
							return function () {
								var that = this,
								    args = arguments,
								    mightThrow = function mightThrow() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if (depth < maxDepth) {
										return;
									}

									returned = handler.apply(that, args);

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if (returned === deferred.promise()) {
										throw new TypeError("Thenable self-resolution");
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned && (

									// Support: Promises/A+ section 2.3.4
									// https://promisesaplus.com/#point-64
									// Only check objects and functions for thenability
									(typeof returned === "undefined" ? "undefined" : _typeof(returned)) === "object" || typeof returned === "function") && returned.then;

									// Handle a returned thenable
									if (jQuery.isFunction(then)) {

										// Special processors (notify) just wait for resolution
										if (special) {
											then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special));

											// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special), resolve(maxDepth, deferred, Identity, deferred.notifyWith));
										}

										// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if (handler !== Identity) {
											that = undefined;
											args = [returned];
										}

										// Process the value(s)
										// Default process is resolve
										(special || deferred.resolveWith)(that, args);
									}
								},


								// Only normal processors (resolve) catch and reject exceptions
								process = special ? mightThrow : function () {
									try {
										mightThrow();
									} catch (e) {

										if (jQuery.Deferred.exceptionHook) {
											jQuery.Deferred.exceptionHook(e, process.stackTrace);
										}

										// Support: Promises/A+ section 2.3.3.3.4.1
										// https://promisesaplus.com/#point-61
										// Ignore post-resolution exceptions
										if (depth + 1 >= maxDepth) {

											// Only substitute handlers pass on context
											// and multiple values (non-spec behavior)
											if (handler !== Thrower) {
												that = undefined;
												args = [e];
											}

											deferred.rejectWith(that, args);
										}
									}
								};

								// Support: Promises/A+ section 2.3.3.3.1
								// https://promisesaplus.com/#point-57
								// Re-resolve promises immediately to dodge false rejection from
								// subsequent errors
								if (depth) {
									process();
								} else {

									// Call an optional hook to record the stack, in case of exception
									// since it's otherwise lost when execution goes async
									if (jQuery.Deferred.getStackHook) {
										process.stackTrace = jQuery.Deferred.getStackHook();
									}
									window.setTimeout(process);
								}
							};
						}

						return jQuery.Deferred(function (newDefer) {

							// progress_handlers.add( ... )
							tuples[0][3].add(resolve(0, newDefer, jQuery.isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith));

							// fulfilled_handlers.add( ... )
							tuples[1][3].add(resolve(0, newDefer, jQuery.isFunction(onFulfilled) ? onFulfilled : Identity));

							// rejected_handlers.add( ... )
							tuples[2][3].add(resolve(0, newDefer, jQuery.isFunction(onRejected) ? onRejected : Thrower));
						}).promise();
					},

					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function promise(obj) {
						return obj != null ? jQuery.extend(obj, _promise) : _promise;
					}
				},
				    deferred = {};

				// Add list-specific methods
				jQuery.each(tuples, function (i, tuple) {
					var list = tuple[2],
					    stateString = tuple[5];

					// promise.progress = list.add
					// promise.done = list.add
					// promise.fail = list.add
					_promise[tuple[1]] = list.add;

					// Handle state
					if (stateString) {
						list.add(function () {

							// state = "resolved" (i.e., fulfilled)
							// state = "rejected"
							_state = stateString;
						},

						// rejected_callbacks.disable
						// fulfilled_callbacks.disable
						tuples[3 - i][2].disable,

						// progress_callbacks.lock
						tuples[0][2].lock);
					}

					// progress_handlers.fire
					// fulfilled_handlers.fire
					// rejected_handlers.fire
					list.add(tuple[3].fire);

					// deferred.notify = function() { deferred.notifyWith(...) }
					// deferred.resolve = function() { deferred.resolveWith(...) }
					// deferred.reject = function() { deferred.rejectWith(...) }
					deferred[tuple[0]] = function () {
						deferred[tuple[0] + "With"](this === deferred ? undefined : this, arguments);
						return this;
					};

					// deferred.notifyWith = list.fireWith
					// deferred.resolveWith = list.fireWith
					// deferred.rejectWith = list.fireWith
					deferred[tuple[0] + "With"] = list.fireWith;
				});

				// Make the deferred a promise
				_promise.promise(deferred);

				// Call given func if any
				if (func) {
					func.call(deferred, deferred);
				}

				// All done!
				return deferred;
			},

			// Deferred helper
			when: function when(singleValue) {
				var

				// count of uncompleted subordinates
				remaining = arguments.length,


				// count of unprocessed arguments
				i = remaining,


				// subordinate fulfillment data
				resolveContexts = Array(i),
				    resolveValues = _slice.call(arguments),


				// the master Deferred
				master = jQuery.Deferred(),


				// subordinate callback factory
				updateFunc = function updateFunc(i) {
					return function (value) {
						resolveContexts[i] = this;
						resolveValues[i] = arguments.length > 1 ? _slice.call(arguments) : value;
						if (! --remaining) {
							master.resolveWith(resolveContexts, resolveValues);
						}
					};
				};

				// Single- and empty arguments are adopted like Promise.resolve
				if (remaining <= 1) {
					adoptValue(singleValue, master.done(updateFunc(i)).resolve, master.reject);

					// Use .then() to unwrap secondary thenables (cf. gh-3000)
					if (master.state() === "pending" || jQuery.isFunction(resolveValues[i] && resolveValues[i].then)) {

						return master.then();
					}
				}

				// Multiple arguments are aggregated like Promise.all array elements
				while (i--) {
					adoptValue(resolveValues[i], updateFunc(i), master.reject);
				}

				return master.promise();
			}
		});

		// These usually indicate a programmer mistake during development,
		// warn about them ASAP rather than swallowing them by default.
		var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

		jQuery.Deferred.exceptionHook = function (error, stack) {

			// Support: IE 8 - 9 only
			// Console exists when dev tools are open, which can happen at any time
			if (window.console && window.console.warn && error && rerrorNames.test(error.name)) {
				window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
			}
		};

		jQuery.readyException = function (error) {
			window.setTimeout(function () {
				throw error;
			});
		};

		// The deferred used on DOM ready
		var readyList = jQuery.Deferred();

		jQuery.fn.ready = function (fn) {

			readyList.then(fn)

			// Wrap jQuery.readyException in a function so that the lookup
			// happens at the time of error handling instead of callback
			// registration.
			.catch(function (error) {
				jQuery.readyException(error);
			});

			return this;
		};

		jQuery.extend({

			// Is the DOM ready to be used? Set to true once it occurs.
			isReady: false,

			// A counter to track how many items to wait for before
			// the ready event fires. See #6781
			readyWait: 1,

			// Hold (or release) the ready event
			holdReady: function holdReady(hold) {
				if (hold) {
					jQuery.readyWait++;
				} else {
					jQuery.ready(true);
				}
			},

			// Handle when the DOM is ready
			ready: function ready(wait) {

				// Abort if there are pending holds or we're already ready
				if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
					return;
				}

				// Remember that the DOM is ready
				jQuery.isReady = true;

				// If a normal DOM Ready event fired, decrement, and wait if need be
				if (wait !== true && --jQuery.readyWait > 0) {
					return;
				}

				// If there are functions bound, to execute
				readyList.resolveWith(document, [jQuery]);
			}
		});

		jQuery.ready.then = readyList.then;

		// The ready event handler and self cleanup method
		function completed() {
			document.removeEventListener("DOMContentLoaded", completed);
			window.removeEventListener("load", completed);
			jQuery.ready();
		}

		// Catch cases where $(document).ready() is called
		// after the browser event has already occurred.
		// Support: IE <=9 - 10 only
		// Older IE sometimes signals "interactive" too soon
		if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) {

			// Handle it asynchronously to allow scripts the opportunity to delay ready
			window.setTimeout(jQuery.ready);
		} else {

			// Use the handy event callback
			document.addEventListener("DOMContentLoaded", completed);

			// A fallback to window.onload, that will always work
			window.addEventListener("load", completed);
		}

		// Multifunctional method to get and set values of a collection
		// The value/s can optionally be executed if it's a function
		var access = function access(elems, fn, key, value, chainable, emptyGet, raw) {
			var i = 0,
			    len = elems.length,
			    bulk = key == null;

			// Sets many values
			if (jQuery.type(key) === "object") {
				chainable = true;
				for (i in key) {
					access(elems, fn, i, key[i], true, emptyGet, raw);
				}

				// Sets one value
			} else if (value !== undefined) {
				chainable = true;

				if (!jQuery.isFunction(value)) {
					raw = true;
				}

				if (bulk) {

					// Bulk operations run against the entire set
					if (raw) {
						fn.call(elems, value);
						fn = null;

						// ...except when executing function values
					} else {
						bulk = fn;
						fn = function fn(elem, key, value) {
							return bulk.call(jQuery(elem), value);
						};
					}
				}

				if (fn) {
					for (; i < len; i++) {
						fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
					}
				}
			}

			if (chainable) {
				return elems;
			}

			// Gets
			if (bulk) {
				return fn.call(elems);
			}

			return len ? fn(elems[0], key) : emptyGet;
		};
		var acceptData = function acceptData(owner) {

			// Accepts only:
			//  - Node
			//    - Node.ELEMENT_NODE
			//    - Node.DOCUMENT_NODE
			//  - Object
			//    - Any
			return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
		};

		function Data() {
			this.expando = jQuery.expando + Data.uid++;
		}

		Data.uid = 1;

		Data.prototype = {

			cache: function cache(owner) {

				// Check if the owner object already has a cache
				var value = owner[this.expando];

				// If not, create one
				if (!value) {
					value = {};

					// We can accept data for non-element nodes in modern browsers,
					// but we should not, see #8335.
					// Always return an empty object.
					if (acceptData(owner)) {

						// If it is a node unlikely to be stringify-ed or looped over
						// use plain assignment
						if (owner.nodeType) {
							owner[this.expando] = value;

							// Otherwise secure it in a non-enumerable property
							// configurable must be true to allow the property to be
							// deleted when data is removed
						} else {
							Object.defineProperty(owner, this.expando, {
								value: value,
								configurable: true
							});
						}
					}
				}

				return value;
			},
			set: function set(owner, data, value) {
				var prop,
				    cache = this.cache(owner);

				// Handle: [ owner, key, value ] args
				// Always use camelCase key (gh-2257)
				if (typeof data === "string") {
					cache[jQuery.camelCase(data)] = value;

					// Handle: [ owner, { properties } ] args
				} else {

					// Copy the properties one-by-one to the cache object
					for (prop in data) {
						cache[jQuery.camelCase(prop)] = data[prop];
					}
				}
				return cache;
			},
			get: function get(owner, key) {
				return key === undefined ? this.cache(owner) :

				// Always use camelCase key (gh-2257)
				owner[this.expando] && owner[this.expando][jQuery.camelCase(key)];
			},
			access: function access(owner, key, value) {

				// In cases where either:
				//
				//   1. No key was specified
				//   2. A string key was specified, but no value provided
				//
				// Take the "read" path and allow the get method to determine
				// which value to return, respectively either:
				//
				//   1. The entire cache object
				//   2. The data stored at the key
				//
				if (key === undefined || key && typeof key === "string" && value === undefined) {

					return this.get(owner, key);
				}

				// When the key is not a string, or both a key and value
				// are specified, set or extend (existing objects) with either:
				//
				//   1. An object of properties
				//   2. A key and value
				//
				this.set(owner, key, value);

				// Since the "set" path can have two possible entry points
				// return the expected data based on which path was taken[*]
				return value !== undefined ? value : key;
			},
			remove: function remove(owner, key) {
				var i,
				    cache = owner[this.expando];

				if (cache === undefined) {
					return;
				}

				if (key !== undefined) {

					// Support array or space separated string of keys
					if (jQuery.isArray(key)) {

						// If key is an array of keys...
						// We always set camelCase keys, so remove that.
						key = key.map(jQuery.camelCase);
					} else {
						key = jQuery.camelCase(key);

						// If a key with the spaces exists, use it.
						// Otherwise, create an array by matching non-whitespace
						key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
					}

					i = key.length;

					while (i--) {
						delete cache[key[i]];
					}
				}

				// Remove the expando if there's no more data
				if (key === undefined || jQuery.isEmptyObject(cache)) {

					// Support: Chrome <=35 - 45
					// Webkit & Blink performance suffers when deleting properties
					// from DOM nodes, so set to undefined instead
					// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
					if (owner.nodeType) {
						owner[this.expando] = undefined;
					} else {
						delete owner[this.expando];
					}
				}
			},
			hasData: function hasData(owner) {
				var cache = owner[this.expando];
				return cache !== undefined && !jQuery.isEmptyObject(cache);
			}
		};
		var dataPriv = new Data();

		var dataUser = new Data();

		//	Implementation Summary
		//
		//	1. Enforce API surface and semantic compatibility with 1.9.x branch
		//	2. Improve the module's maintainability by reducing the storage
		//		paths to a single mechanism.
		//	3. Use the same single mechanism to support "private" and "user" data.
		//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
		//	5. Avoid exposing implementation details on user objects (eg. expando properties)
		//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

		var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		    rmultiDash = /[A-Z]/g;

		function getData(data) {
			if (data === "true") {
				return true;
			}

			if (data === "false") {
				return false;
			}

			if (data === "null") {
				return null;
			}

			// Only convert to a number if it doesn't change the string
			if (data === +data + "") {
				return +data;
			}

			if (rbrace.test(data)) {
				return JSON.parse(data);
			}

			return data;
		}

		function dataAttr(elem, key, data) {
			var name;

			// If nothing was found internally, try to fetch any
			// data from the HTML5 data-* attribute
			if (data === undefined && elem.nodeType === 1) {
				name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
				data = elem.getAttribute(name);

				if (typeof data === "string") {
					try {
						data = getData(data);
					} catch (e) {}

					// Make sure we set the data so it isn't changed later
					dataUser.set(elem, key, data);
				} else {
					data = undefined;
				}
			}
			return data;
		}

		jQuery.extend({
			hasData: function hasData(elem) {
				return dataUser.hasData(elem) || dataPriv.hasData(elem);
			},

			data: function data(elem, name, _data) {
				return dataUser.access(elem, name, _data);
			},

			removeData: function removeData(elem, name) {
				dataUser.remove(elem, name);
			},

			// TODO: Now that all calls to _data and _removeData have been replaced
			// with direct calls to dataPriv methods, these can be deprecated.
			_data: function _data(elem, name, data) {
				return dataPriv.access(elem, name, data);
			},

			_removeData: function _removeData(elem, name) {
				dataPriv.remove(elem, name);
			}
		});

		jQuery.fn.extend({
			data: function data(key, value) {
				var i,
				    name,
				    data,
				    elem = this[0],
				    attrs = elem && elem.attributes;

				// Gets all values
				if (key === undefined) {
					if (this.length) {
						data = dataUser.get(elem);

						if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
							i = attrs.length;
							while (i--) {

								// Support: IE 11 only
								// The attrs elements can be null (#14894)
								if (attrs[i]) {
									name = attrs[i].name;
									if (name.indexOf("data-") === 0) {
										name = jQuery.camelCase(name.slice(5));
										dataAttr(elem, name, data[name]);
									}
								}
							}
							dataPriv.set(elem, "hasDataAttrs", true);
						}
					}

					return data;
				}

				// Sets multiple values
				if ((typeof key === "undefined" ? "undefined" : _typeof(key)) === "object") {
					return this.each(function () {
						dataUser.set(this, key);
					});
				}

				return access(this, function (value) {
					var data;

					// The calling jQuery object (element matches) is not empty
					// (and therefore has an element appears at this[ 0 ]) and the
					// `value` parameter was not undefined. An empty jQuery object
					// will result in `undefined` for elem = this[ 0 ] which will
					// throw an exception if an attempt to read a data cache is made.
					if (elem && value === undefined) {

						// Attempt to get data from the cache
						// The key will always be camelCased in Data
						data = dataUser.get(elem, key);
						if (data !== undefined) {
							return data;
						}

						// Attempt to "discover" the data in
						// HTML5 custom data-* attrs
						data = dataAttr(elem, key);
						if (data !== undefined) {
							return data;
						}

						// We tried really hard, but the data doesn't exist.
						return;
					}

					// Set the data...
					this.each(function () {

						// We always store the camelCased key
						dataUser.set(this, key, value);
					});
				}, null, value, arguments.length > 1, null, true);
			},

			removeData: function removeData(key) {
				return this.each(function () {
					dataUser.remove(this, key);
				});
			}
		});

		jQuery.extend({
			queue: function queue(elem, type, data) {
				var queue;

				if (elem) {
					type = (type || "fx") + "queue";
					queue = dataPriv.get(elem, type);

					// Speed up dequeue by getting out quickly if this is just a lookup
					if (data) {
						if (!queue || jQuery.isArray(data)) {
							queue = dataPriv.access(elem, type, jQuery.makeArray(data));
						} else {
							queue.push(data);
						}
					}
					return queue || [];
				}
			},

			dequeue: function dequeue(elem, type) {
				type = type || "fx";

				var queue = jQuery.queue(elem, type),
				    startLength = queue.length,
				    fn = queue.shift(),
				    hooks = jQuery._queueHooks(elem, type),
				    next = function next() {
					jQuery.dequeue(elem, type);
				};

				// If the fx queue is dequeued, always remove the progress sentinel
				if (fn === "inprogress") {
					fn = queue.shift();
					startLength--;
				}

				if (fn) {

					// Add a progress sentinel to prevent the fx queue from being
					// automatically dequeued
					if (type === "fx") {
						queue.unshift("inprogress");
					}

					// Clear up the last queue stop function
					delete hooks.stop;
					fn.call(elem, next, hooks);
				}

				if (!startLength && hooks) {
					hooks.empty.fire();
				}
			},

			// Not public - generate a queueHooks object, or return the current one
			_queueHooks: function _queueHooks(elem, type) {
				var key = type + "queueHooks";
				return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
					empty: jQuery.Callbacks("once memory").add(function () {
						dataPriv.remove(elem, [type + "queue", key]);
					})
				});
			}
		});

		jQuery.fn.extend({
			queue: function queue(type, data) {
				var setter = 2;

				if (typeof type !== "string") {
					data = type;
					type = "fx";
					setter--;
				}

				if (arguments.length < setter) {
					return jQuery.queue(this[0], type);
				}

				return data === undefined ? this : this.each(function () {
					var queue = jQuery.queue(this, type, data);

					// Ensure a hooks for this queue
					jQuery._queueHooks(this, type);

					if (type === "fx" && queue[0] !== "inprogress") {
						jQuery.dequeue(this, type);
					}
				});
			},
			dequeue: function dequeue(type) {
				return this.each(function () {
					jQuery.dequeue(this, type);
				});
			},
			clearQueue: function clearQueue(type) {
				return this.queue(type || "fx", []);
			},

			// Get a promise resolved when queues of a certain type
			// are emptied (fx is the type by default)
			promise: function promise(type, obj) {
				var tmp,
				    count = 1,
				    defer = jQuery.Deferred(),
				    elements = this,
				    i = this.length,
				    resolve = function resolve() {
					if (! --count) {
						defer.resolveWith(elements, [elements]);
					}
				};

				if (typeof type !== "string") {
					obj = type;
					type = undefined;
				}
				type = type || "fx";

				while (i--) {
					tmp = dataPriv.get(elements[i], type + "queueHooks");
					if (tmp && tmp.empty) {
						count++;
						tmp.empty.add(resolve);
					}
				}
				resolve();
				return defer.promise(obj);
			}
		});
		var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;

		var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");

		var cssExpand = ["Top", "Right", "Bottom", "Left"];

		var isHiddenWithinTree = function isHiddenWithinTree(elem, el) {

			// isHiddenWithinTree might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;

			// Inline style trumps all
			return elem.style.display === "none" || elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains(elem.ownerDocument, elem) && jQuery.css(elem, "display") === "none";
		};

		var swap = function swap(elem, options, callback, args) {
			var ret,
			    name,
			    old = {};

			// Remember the old values, and insert the new ones
			for (name in options) {
				old[name] = elem.style[name];
				elem.style[name] = options[name];
			}

			ret = callback.apply(elem, args || []);

			// Revert the old values
			for (name in options) {
				elem.style[name] = old[name];
			}

			return ret;
		};

		function adjustCSS(elem, prop, valueParts, tween) {
			var adjusted,
			    scale = 1,
			    maxIterations = 20,
			    currentValue = tween ? function () {
				return tween.cur();
			} : function () {
				return jQuery.css(elem, prop, "");
			},
			    initial = currentValue(),
			    unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"),


			// Starting value computation is required for potential unit mismatches
			initialInUnit = (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));

			if (initialInUnit && initialInUnit[3] !== unit) {

				// Trust units reported by jQuery.css
				unit = unit || initialInUnit[3];

				// Make sure we update the tween properties later on
				valueParts = valueParts || [];

				// Iteratively approximate from a nonzero starting point
				initialInUnit = +initial || 1;

				do {

					// If previous iteration zeroed out, double until we get *something*.
					// Use string for doubling so we don't accidentally see scale as unchanged below
					scale = scale || ".5";

					// Adjust and apply
					initialInUnit = initialInUnit / scale;
					jQuery.style(elem, prop, initialInUnit + unit);

					// Update scale, tolerating zero or NaN from tween.cur()
					// Break the loop if scale is unchanged or perfect, or if we've just had enough.
				} while (scale !== (scale = currentValue() / initial) && scale !== 1 && --maxIterations);
			}

			if (valueParts) {
				initialInUnit = +initialInUnit || +initial || 0;

				// Apply relative offset (+=/-=) if specified
				adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
				if (tween) {
					tween.unit = unit;
					tween.start = initialInUnit;
					tween.end = adjusted;
				}
			}
			return adjusted;
		}

		var defaultDisplayMap = {};

		function getDefaultDisplay(elem) {
			var temp,
			    doc = elem.ownerDocument,
			    nodeName = elem.nodeName,
			    display = defaultDisplayMap[nodeName];

			if (display) {
				return display;
			}

			temp = doc.body.appendChild(doc.createElement(nodeName));
			display = jQuery.css(temp, "display");

			temp.parentNode.removeChild(temp);

			if (display === "none") {
				display = "block";
			}
			defaultDisplayMap[nodeName] = display;

			return display;
		}

		function showHide(elements, show) {
			var display,
			    elem,
			    values = [],
			    index = 0,
			    length = elements.length;

			// Determine new display value for elements that need to change
			for (; index < length; index++) {
				elem = elements[index];
				if (!elem.style) {
					continue;
				}

				display = elem.style.display;
				if (show) {

					// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
					// check is required in this first loop unless we have a nonempty display value (either
					// inline or about-to-be-restored)
					if (display === "none") {
						values[index] = dataPriv.get(elem, "display") || null;
						if (!values[index]) {
							elem.style.display = "";
						}
					}
					if (elem.style.display === "" && isHiddenWithinTree(elem)) {
						values[index] = getDefaultDisplay(elem);
					}
				} else {
					if (display !== "none") {
						values[index] = "none";

						// Remember what we're overwriting
						dataPriv.set(elem, "display", display);
					}
				}
			}

			// Set the display of the elements in a second loop to avoid constant reflow
			for (index = 0; index < length; index++) {
				if (values[index] != null) {
					elements[index].style.display = values[index];
				}
			}

			return elements;
		}

		jQuery.fn.extend({
			show: function show() {
				return showHide(this, true);
			},
			hide: function hide() {
				return showHide(this);
			},
			toggle: function toggle(state) {
				if (typeof state === "boolean") {
					return state ? this.show() : this.hide();
				}

				return this.each(function () {
					if (isHiddenWithinTree(this)) {
						jQuery(this).show();
					} else {
						jQuery(this).hide();
					}
				});
			}
		});
		var rcheckableType = /^(?:checkbox|radio)$/i;

		var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i;

		var rscriptType = /^$|\/(?:java|ecma)script/i;

		// We have to close these tags to support XHTML (#13200)
		var wrapMap = {

			// Support: IE <=9 only
			option: [1, "<select multiple='multiple'>", "</select>"],

			// XHTML parsers do not magically insert elements in the
			// same way that tag soup parsers do. So we cannot shorten
			// this by omitting <tbody> or other required elements.
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],

			_default: [0, "", ""]
		};

		// Support: IE <=9 only
		wrapMap.optgroup = wrapMap.option;

		wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
		wrapMap.th = wrapMap.td;

		function getAll(context, tag) {

			// Support: IE <=9 - 11 only
			// Use typeof to avoid zero-argument method invocation on host objects (#15151)
			var ret;

			if (typeof context.getElementsByTagName !== "undefined") {
				ret = context.getElementsByTagName(tag || "*");
			} else if (typeof context.querySelectorAll !== "undefined") {
				ret = context.querySelectorAll(tag || "*");
			} else {
				ret = [];
			}

			if (tag === undefined || tag && jQuery.nodeName(context, tag)) {
				return jQuery.merge([context], ret);
			}

			return ret;
		}

		// Mark scripts as having already been evaluated
		function setGlobalEval(elems, refElements) {
			var i = 0,
			    l = elems.length;

			for (; i < l; i++) {
				dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
			}
		}

		var rhtml = /<|&#?\w+;/;

		function buildFragment(elems, context, scripts, selection, ignored) {
			var elem,
			    tmp,
			    tag,
			    wrap,
			    contains,
			    j,
			    fragment = context.createDocumentFragment(),
			    nodes = [],
			    i = 0,
			    l = elems.length;

			for (; i < l; i++) {
				elem = elems[i];

				if (elem || elem === 0) {

					// Add nodes directly
					if (jQuery.type(elem) === "object") {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge(nodes, elem.nodeType ? [elem] : elem);

						// Convert non-html into a text node
					} else if (!rhtml.test(elem)) {
						nodes.push(context.createTextNode(elem));

						// Convert html into DOM nodes
					} else {
						tmp = tmp || fragment.appendChild(context.createElement("div"));

						// Deserialize a standard representation
						tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
						wrap = wrapMap[tag] || wrapMap._default;
						tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];

						// Descend through wrappers to the right content
						j = wrap[0];
						while (j--) {
							tmp = tmp.lastChild;
						}

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge(nodes, tmp.childNodes);

						// Remember the top-level container
						tmp = fragment.firstChild;

						// Ensure the created nodes are orphaned (#12392)
						tmp.textContent = "";
					}
				}
			}

			// Remove wrapper from fragment
			fragment.textContent = "";

			i = 0;
			while (elem = nodes[i++]) {

				// Skip elements already in the context collection (trac-4087)
				if (selection && jQuery.inArray(elem, selection) > -1) {
					if (ignored) {
						ignored.push(elem);
					}
					continue;
				}

				contains = jQuery.contains(elem.ownerDocument, elem);

				// Append to fragment
				tmp = getAll(fragment.appendChild(elem), "script");

				// Preserve script evaluation history
				if (contains) {
					setGlobalEval(tmp);
				}

				// Capture executables
				if (scripts) {
					j = 0;
					while (elem = tmp[j++]) {
						if (rscriptType.test(elem.type || "")) {
							scripts.push(elem);
						}
					}
				}
			}

			return fragment;
		}

		(function () {
			var fragment = document.createDocumentFragment(),
			    div = fragment.appendChild(document.createElement("div")),
			    input = document.createElement("input");

			// Support: Android 4.0 - 4.3 only
			// Check state lost if the name is set (#11217)
			// Support: Windows Web Apps (WWA)
			// `name` and `type` must use .setAttribute for WWA (#14901)
			input.setAttribute("type", "radio");
			input.setAttribute("checked", "checked");
			input.setAttribute("name", "t");

			div.appendChild(input);

			// Support: Android <=4.1 only
			// Older WebKit doesn't clone checked state correctly in fragments
			support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;

			// Support: IE <=11 only
			// Make sure textarea (and checkbox) defaultValue is properly cloned
			div.innerHTML = "<textarea>x</textarea>";
			support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
		})();
		var documentElement = document.documentElement;

		var rkeyEvent = /^key/,
		    rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		    rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

		function returnTrue() {
			return true;
		}

		function returnFalse() {
			return false;
		}

		// Support: IE <=9 only
		// See #13393 for more info
		function safeActiveElement() {
			try {
				return document.activeElement;
			} catch (err) {}
		}

		function _on(elem, types, selector, data, fn, one) {
			var origFn, type;

			// Types can be a map of types/handlers
			if ((typeof types === "undefined" ? "undefined" : _typeof(types)) === "object") {

				// ( types-Object, selector, data )
				if (typeof selector !== "string") {

					// ( types-Object, data )
					data = data || selector;
					selector = undefined;
				}
				for (type in types) {
					_on(elem, type, selector, data, types[type], one);
				}
				return elem;
			}

			if (data == null && fn == null) {

				// ( types, fn )
				fn = selector;
				data = selector = undefined;
			} else if (fn == null) {
				if (typeof selector === "string") {

					// ( types, selector, fn )
					fn = data;
					data = undefined;
				} else {

					// ( types, data, fn )
					fn = data;
					data = selector;
					selector = undefined;
				}
			}
			if (fn === false) {
				fn = returnFalse;
			} else if (!fn) {
				return elem;
			}

			if (one === 1) {
				origFn = fn;
				fn = function fn(event) {

					// Can use an empty set, since event contains the info
					jQuery().off(event);
					return origFn.apply(this, arguments);
				};

				// Use same guid so caller can remove using origFn
				fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
			}
			return elem.each(function () {
				jQuery.event.add(this, types, fn, data, selector);
			});
		}

		/*
	  * Helper functions for managing events -- not part of the public interface.
	  * Props to Dean Edwards' addEvent library for many of the ideas.
	  */
		jQuery.event = {

			global: {},

			add: function add(elem, types, handler, data, selector) {

				var handleObjIn,
				    eventHandle,
				    tmp,
				    events,
				    t,
				    handleObj,
				    special,
				    handlers,
				    type,
				    namespaces,
				    origType,
				    elemData = dataPriv.get(elem);

				// Don't attach events to noData or text/comment nodes (but allow plain objects)
				if (!elemData) {
					return;
				}

				// Caller can pass in an object of custom data in lieu of the handler
				if (handler.handler) {
					handleObjIn = handler;
					handler = handleObjIn.handler;
					selector = handleObjIn.selector;
				}

				// Ensure that invalid selectors throw exceptions at attach time
				// Evaluate against documentElement in case elem is a non-element node (e.g., document)
				if (selector) {
					jQuery.find.matchesSelector(documentElement, selector);
				}

				// Make sure that the handler has a unique ID, used to find/remove it later
				if (!handler.guid) {
					handler.guid = jQuery.guid++;
				}

				// Init the element's event structure and main handler, if this is the first
				if (!(events = elemData.events)) {
					events = elemData.events = {};
				}
				if (!(eventHandle = elemData.handle)) {
					eventHandle = elemData.handle = function (e) {

						// Discard the second event of a jQuery.event.trigger() and
						// when an event is called after a page has unloaded
						return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
					};
				}

				// Handle multiple events separated by a space
				types = (types || "").match(rnothtmlwhite) || [""];
				t = types.length;
				while (t--) {
					tmp = rtypenamespace.exec(types[t]) || [];
					type = origType = tmp[1];
					namespaces = (tmp[2] || "").split(".").sort();

					// There *must* be a type, no attaching namespace-only handlers
					if (!type) {
						continue;
					}

					// If event changes its type, use the special event handlers for the changed type
					special = jQuery.event.special[type] || {};

					// If selector defined, determine special event api type, otherwise given type
					type = (selector ? special.delegateType : special.bindType) || type;

					// Update special based on newly reset type
					special = jQuery.event.special[type] || {};

					// handleObj is passed to all event handlers
					handleObj = jQuery.extend({
						type: type,
						origType: origType,
						data: data,
						handler: handler,
						guid: handler.guid,
						selector: selector,
						needsContext: selector && jQuery.expr.match.needsContext.test(selector),
						namespace: namespaces.join(".")
					}, handleObjIn);

					// Init the event handler queue if we're the first
					if (!(handlers = events[type])) {
						handlers = events[type] = [];
						handlers.delegateCount = 0;

						// Only use addEventListener if the special events handler returns false
						if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {

							if (elem.addEventListener) {
								elem.addEventListener(type, eventHandle);
							}
						}
					}

					if (special.add) {
						special.add.call(elem, handleObj);

						if (!handleObj.handler.guid) {
							handleObj.handler.guid = handler.guid;
						}
					}

					// Add to the element's handler list, delegates in front
					if (selector) {
						handlers.splice(handlers.delegateCount++, 0, handleObj);
					} else {
						handlers.push(handleObj);
					}

					// Keep track of which events have ever been used, for event optimization
					jQuery.event.global[type] = true;
				}
			},

			// Detach an event or set of events from an element
			remove: function remove(elem, types, handler, selector, mappedTypes) {

				var j,
				    origCount,
				    tmp,
				    events,
				    t,
				    handleObj,
				    special,
				    handlers,
				    type,
				    namespaces,
				    origType,
				    elemData = dataPriv.hasData(elem) && dataPriv.get(elem);

				if (!elemData || !(events = elemData.events)) {
					return;
				}

				// Once for each type.namespace in types; type may be omitted
				types = (types || "").match(rnothtmlwhite) || [""];
				t = types.length;
				while (t--) {
					tmp = rtypenamespace.exec(types[t]) || [];
					type = origType = tmp[1];
					namespaces = (tmp[2] || "").split(".").sort();

					// Unbind all events (on this namespace, if provided) for the element
					if (!type) {
						for (type in events) {
							jQuery.event.remove(elem, type + types[t], handler, selector, true);
						}
						continue;
					}

					special = jQuery.event.special[type] || {};
					type = (selector ? special.delegateType : special.bindType) || type;
					handlers = events[type] || [];
					tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");

					// Remove matching events
					origCount = j = handlers.length;
					while (j--) {
						handleObj = handlers[j];

						if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
							handlers.splice(j, 1);

							if (handleObj.selector) {
								handlers.delegateCount--;
							}
							if (special.remove) {
								special.remove.call(elem, handleObj);
							}
						}
					}

					// Remove generic event handler if we removed something and no more handlers exist
					// (avoids potential for endless recursion during removal of special event handlers)
					if (origCount && !handlers.length) {
						if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {

							jQuery.removeEvent(elem, type, elemData.handle);
						}

						delete events[type];
					}
				}

				// Remove data and the expando if it's no longer used
				if (jQuery.isEmptyObject(events)) {
					dataPriv.remove(elem, "handle events");
				}
			},

			dispatch: function dispatch(nativeEvent) {

				// Make a writable jQuery.Event from the native event object
				var event = jQuery.event.fix(nativeEvent);

				var i,
				    j,
				    ret,
				    matched,
				    handleObj,
				    handlerQueue,
				    args = new Array(arguments.length),
				    handlers = (dataPriv.get(this, "events") || {})[event.type] || [],
				    special = jQuery.event.special[event.type] || {};

				// Use the fix-ed jQuery.Event rather than the (read-only) native event
				args[0] = event;

				for (i = 1; i < arguments.length; i++) {
					args[i] = arguments[i];
				}

				event.delegateTarget = this;

				// Call the preDispatch hook for the mapped type, and let it bail if desired
				if (special.preDispatch && special.preDispatch.call(this, event) === false) {
					return;
				}

				// Determine handlers
				handlerQueue = jQuery.event.handlers.call(this, event, handlers);

				// Run delegates first; they may want to stop propagation beneath us
				i = 0;
				while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
					event.currentTarget = matched.elem;

					j = 0;
					while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {

						// Triggered event must either 1) have no namespace, or 2) have namespace(s)
						// a subset or equal to those in the bound event (both can have no namespace).
						if (!event.rnamespace || event.rnamespace.test(handleObj.namespace)) {

							event.handleObj = handleObj;
							event.data = handleObj.data;

							ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);

							if (ret !== undefined) {
								if ((event.result = ret) === false) {
									event.preventDefault();
									event.stopPropagation();
								}
							}
						}
					}
				}

				// Call the postDispatch hook for the mapped type
				if (special.postDispatch) {
					special.postDispatch.call(this, event);
				}

				return event.result;
			},

			handlers: function handlers(event, _handlers) {
				var i,
				    handleObj,
				    sel,
				    matchedHandlers,
				    matchedSelectors,
				    handlerQueue = [],
				    delegateCount = _handlers.delegateCount,
				    cur = event.target;

				// Find delegate handlers
				if (delegateCount &&

				// Support: IE <=9
				// Black-hole SVG <use> instance trees (trac-13180)
				cur.nodeType &&

				// Support: Firefox <=42
				// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
				// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
				// Support: IE 11 only
				// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
				!(event.type === "click" && event.button >= 1)) {

					for (; cur !== this; cur = cur.parentNode || this) {

						// Don't check non-elements (#13208)
						// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
						if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
							matchedHandlers = [];
							matchedSelectors = {};
							for (i = 0; i < delegateCount; i++) {
								handleObj = _handlers[i];

								// Don't conflict with Object.prototype properties (#13203)
								sel = handleObj.selector + " ";

								if (matchedSelectors[sel] === undefined) {
									matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
								}
								if (matchedSelectors[sel]) {
									matchedHandlers.push(handleObj);
								}
							}
							if (matchedHandlers.length) {
								handlerQueue.push({ elem: cur, handlers: matchedHandlers });
							}
						}
					}
				}

				// Add the remaining (directly-bound) handlers
				cur = this;
				if (delegateCount < _handlers.length) {
					handlerQueue.push({ elem: cur, handlers: _handlers.slice(delegateCount) });
				}

				return handlerQueue;
			},

			addProp: function addProp(name, hook) {
				Object.defineProperty(jQuery.Event.prototype, name, {
					enumerable: true,
					configurable: true,

					get: jQuery.isFunction(hook) ? function () {
						if (this.originalEvent) {
							return hook(this.originalEvent);
						}
					} : function () {
						if (this.originalEvent) {
							return this.originalEvent[name];
						}
					},

					set: function set(value) {
						Object.defineProperty(this, name, {
							enumerable: true,
							configurable: true,
							writable: true,
							value: value
						});
					}
				});
			},

			fix: function fix(originalEvent) {
				return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
			},

			special: {
				load: {

					// Prevent triggered image.load events from bubbling to window.load
					noBubble: true
				},
				focus: {

					// Fire native event if possible so blur/focus sequence is correct
					trigger: function trigger() {
						if (this !== safeActiveElement() && this.focus) {
							this.focus();
							return false;
						}
					},
					delegateType: "focusin"
				},
				blur: {
					trigger: function trigger() {
						if (this === safeActiveElement() && this.blur) {
							this.blur();
							return false;
						}
					},
					delegateType: "focusout"
				},
				click: {

					// For checkbox, fire native event so checked state will be right
					trigger: function trigger() {
						if (this.type === "checkbox" && this.click && jQuery.nodeName(this, "input")) {
							this.click();
							return false;
						}
					},

					// For cross-browser consistency, don't fire native .click() on links
					_default: function _default(event) {
						return jQuery.nodeName(event.target, "a");
					}
				},

				beforeunload: {
					postDispatch: function postDispatch(event) {

						// Support: Firefox 20+
						// Firefox doesn't alert if the returnValue field is not set.
						if (event.result !== undefined && event.originalEvent) {
							event.originalEvent.returnValue = event.result;
						}
					}
				}
			}
		};

		jQuery.removeEvent = function (elem, type, handle) {

			// This "if" is needed for plain objects
			if (elem.removeEventListener) {
				elem.removeEventListener(type, handle);
			}
		};

		jQuery.Event = function (src, props) {

			// Allow instantiation without the 'new' keyword
			if (!(this instanceof jQuery.Event)) {
				return new jQuery.Event(src, props);
			}

			// Event object
			if (src && src.type) {
				this.originalEvent = src;
				this.type = src.type;

				// Events bubbling up the document may have been marked as prevented
				// by a handler lower down the tree; reflect the correct value.
				this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ? returnTrue : returnFalse;

				// Create target properties
				// Support: Safari <=6 - 7 only
				// Target should not be a text node (#504, #13143)
				this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;

				this.currentTarget = src.currentTarget;
				this.relatedTarget = src.relatedTarget;

				// Event type
			} else {
				this.type = src;
			}

			// Put explicitly provided properties onto the event object
			if (props) {
				jQuery.extend(this, props);
			}

			// Create a timestamp if incoming event doesn't have one
			this.timeStamp = src && src.timeStamp || jQuery.now();

			// Mark it as fixed
			this[jQuery.expando] = true;
		};

		// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
		// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
		jQuery.Event.prototype = {
			constructor: jQuery.Event,
			isDefaultPrevented: returnFalse,
			isPropagationStopped: returnFalse,
			isImmediatePropagationStopped: returnFalse,
			isSimulated: false,

			preventDefault: function preventDefault() {
				var e = this.originalEvent;

				this.isDefaultPrevented = returnTrue;

				if (e && !this.isSimulated) {
					e.preventDefault();
				}
			},
			stopPropagation: function stopPropagation() {
				var e = this.originalEvent;

				this.isPropagationStopped = returnTrue;

				if (e && !this.isSimulated) {
					e.stopPropagation();
				}
			},
			stopImmediatePropagation: function stopImmediatePropagation() {
				var e = this.originalEvent;

				this.isImmediatePropagationStopped = returnTrue;

				if (e && !this.isSimulated) {
					e.stopImmediatePropagation();
				}

				this.stopPropagation();
			}
		};

		// Includes all common event props including KeyEvent and MouseEvent specific props
		jQuery.each({
			altKey: true,
			bubbles: true,
			cancelable: true,
			changedTouches: true,
			ctrlKey: true,
			detail: true,
			eventPhase: true,
			metaKey: true,
			pageX: true,
			pageY: true,
			shiftKey: true,
			view: true,
			"char": true,
			charCode: true,
			key: true,
			keyCode: true,
			button: true,
			buttons: true,
			clientX: true,
			clientY: true,
			offsetX: true,
			offsetY: true,
			pointerId: true,
			pointerType: true,
			screenX: true,
			screenY: true,
			targetTouches: true,
			toElement: true,
			touches: true,

			which: function which(event) {
				var button = event.button;

				// Add which for key events
				if (event.which == null && rkeyEvent.test(event.type)) {
					return event.charCode != null ? event.charCode : event.keyCode;
				}

				// Add which for click: 1 === left; 2 === middle; 3 === right
				if (!event.which && button !== undefined && rmouseEvent.test(event.type)) {
					if (button & 1) {
						return 1;
					}

					if (button & 2) {
						return 3;
					}

					if (button & 4) {
						return 2;
					}

					return 0;
				}

				return event.which;
			}
		}, jQuery.event.addProp);

		// Create mouseenter/leave events using mouseover/out and event-time checks
		// so that event delegation works in jQuery.
		// Do the same for pointerenter/pointerleave and pointerover/pointerout
		//
		// Support: Safari 7 only
		// Safari sends mouseenter too often; see:
		// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
		// for the description of the bug (it existed in older Chrome versions as well).
		jQuery.each({
			mouseenter: "mouseover",
			mouseleave: "mouseout",
			pointerenter: "pointerover",
			pointerleave: "pointerout"
		}, function (orig, fix) {
			jQuery.event.special[orig] = {
				delegateType: fix,
				bindType: fix,

				handle: function handle(event) {
					var ret,
					    target = this,
					    related = event.relatedTarget,
					    handleObj = event.handleObj;

					// For mouseenter/leave call the handler if related is outside the target.
					// NB: No relatedTarget if the mouse left/entered the browser window
					if (!related || related !== target && !jQuery.contains(target, related)) {
						event.type = handleObj.origType;
						ret = handleObj.handler.apply(this, arguments);
						event.type = fix;
					}
					return ret;
				}
			};
		});

		jQuery.fn.extend({

			on: function on(types, selector, data, fn) {
				return _on(this, types, selector, data, fn);
			},
			one: function one(types, selector, data, fn) {
				return _on(this, types, selector, data, fn, 1);
			},
			off: function off(types, selector, fn) {
				var handleObj, type;
				if (types && types.preventDefault && types.handleObj) {

					// ( event )  dispatched jQuery.Event
					handleObj = types.handleObj;
					jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
					return this;
				}
				if ((typeof types === "undefined" ? "undefined" : _typeof(types)) === "object") {

					// ( types-object [, selector] )
					for (type in types) {
						this.off(type, selector, types[type]);
					}
					return this;
				}
				if (selector === false || typeof selector === "function") {

					// ( types [, fn] )
					fn = selector;
					selector = undefined;
				}
				if (fn === false) {
					fn = returnFalse;
				}
				return this.each(function () {
					jQuery.event.remove(this, types, fn, selector);
				});
			}
		});

		var

		/* eslint-disable max-len */

		// See https://github.com/eslint/eslint/issues/3229
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,


		/* eslint-enable */

		// Support: IE <=10 - 11, Edge 12 - 13
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,


		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		    rscriptTypeMasked = /^true\/(.*)/,
		    rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

		function manipulationTarget(elem, content) {
			if (jQuery.nodeName(elem, "table") && jQuery.nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {

				return elem.getElementsByTagName("tbody")[0] || elem;
			}

			return elem;
		}

		// Replace/restore the type attribute of script elements for safe DOM manipulation
		function disableScript(elem) {
			elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
			return elem;
		}
		function restoreScript(elem) {
			var match = rscriptTypeMasked.exec(elem.type);

			if (match) {
				elem.type = match[1];
			} else {
				elem.removeAttribute("type");
			}

			return elem;
		}

		function cloneCopyEvent(src, dest) {
			var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

			if (dest.nodeType !== 1) {
				return;
			}

			// 1. Copy private data: events, handlers, etc.
			if (dataPriv.hasData(src)) {
				pdataOld = dataPriv.access(src);
				pdataCur = dataPriv.set(dest, pdataOld);
				events = pdataOld.events;

				if (events) {
					delete pdataCur.handle;
					pdataCur.events = {};

					for (type in events) {
						for (i = 0, l = events[type].length; i < l; i++) {
							jQuery.event.add(dest, type, events[type][i]);
						}
					}
				}
			}

			// 2. Copy user data
			if (dataUser.hasData(src)) {
				udataOld = dataUser.access(src);
				udataCur = jQuery.extend({}, udataOld);

				dataUser.set(dest, udataCur);
			}
		}

		// Fix IE bugs, see support tests
		function fixInput(src, dest) {
			var nodeName = dest.nodeName.toLowerCase();

			// Fails to persist the checked state of a cloned checkbox or radio button.
			if (nodeName === "input" && rcheckableType.test(src.type)) {
				dest.checked = src.checked;

				// Fails to return the selected option to the default selected state when cloning options
			} else if (nodeName === "input" || nodeName === "textarea") {
				dest.defaultValue = src.defaultValue;
			}
		}

		function domManip(collection, args, callback, ignored) {

			// Flatten any nested arrays
			args = concat.apply([], args);

			var fragment,
			    first,
			    scripts,
			    hasScripts,
			    node,
			    doc,
			    i = 0,
			    l = collection.length,
			    iNoClone = l - 1,
			    value = args[0],
			    isFunction = jQuery.isFunction(value);

			// We can't cloneNode fragments that contain checked, in WebKit
			if (isFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
				return collection.each(function (index) {
					var self = collection.eq(index);
					if (isFunction) {
						args[0] = value.call(this, index, self.html());
					}
					domManip(self, args, callback, ignored);
				});
			}

			if (l) {
				fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
				first = fragment.firstChild;

				if (fragment.childNodes.length === 1) {
					fragment = first;
				}

				// Require either new content or an interest in ignored elements to invoke the callback
				if (first || ignored) {
					scripts = jQuery.map(getAll(fragment, "script"), disableScript);
					hasScripts = scripts.length;

					// Use the original fragment for the last item
					// instead of the first because it can end up
					// being emptied incorrectly in certain situations (#8070).
					for (; i < l; i++) {
						node = fragment;

						if (i !== iNoClone) {
							node = jQuery.clone(node, true, true);

							// Keep references to cloned scripts for later restoration
							if (hasScripts) {

								// Support: Android <=4.0 only, PhantomJS 1 only
								// push.apply(_, arraylike) throws on ancient WebKit
								jQuery.merge(scripts, getAll(node, "script"));
							}
						}

						callback.call(collection[i], node, i);
					}

					if (hasScripts) {
						doc = scripts[scripts.length - 1].ownerDocument;

						// Reenable scripts
						jQuery.map(scripts, restoreScript);

						// Evaluate executable scripts on first document insertion
						for (i = 0; i < hasScripts; i++) {
							node = scripts[i];
							if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {

								if (node.src) {

									// Optional AJAX dependency, but won't run scripts if not present
									if (jQuery._evalUrl) {
										jQuery._evalUrl(node.src);
									}
								} else {
									DOMEval(node.textContent.replace(rcleanScript, ""), doc);
								}
							}
						}
					}
				}
			}

			return collection;
		}

		function _remove(elem, selector, keepData) {
			var node,
			    nodes = selector ? jQuery.filter(selector, elem) : elem,
			    i = 0;

			for (; (node = nodes[i]) != null; i++) {
				if (!keepData && node.nodeType === 1) {
					jQuery.cleanData(getAll(node));
				}

				if (node.parentNode) {
					if (keepData && jQuery.contains(node.ownerDocument, node)) {
						setGlobalEval(getAll(node, "script"));
					}
					node.parentNode.removeChild(node);
				}
			}

			return elem;
		}

		jQuery.extend({
			htmlPrefilter: function htmlPrefilter(html) {
				return html.replace(rxhtmlTag, "<$1></$2>");
			},

			clone: function clone(elem, dataAndEvents, deepDataAndEvents) {
				var i,
				    l,
				    srcElements,
				    destElements,
				    clone = elem.cloneNode(true),
				    inPage = jQuery.contains(elem.ownerDocument, elem);

				// Fix IE cloning issues
				if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {

					// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
					destElements = getAll(clone);
					srcElements = getAll(elem);

					for (i = 0, l = srcElements.length; i < l; i++) {
						fixInput(srcElements[i], destElements[i]);
					}
				}

				// Copy the events from the original to the clone
				if (dataAndEvents) {
					if (deepDataAndEvents) {
						srcElements = srcElements || getAll(elem);
						destElements = destElements || getAll(clone);

						for (i = 0, l = srcElements.length; i < l; i++) {
							cloneCopyEvent(srcElements[i], destElements[i]);
						}
					} else {
						cloneCopyEvent(elem, clone);
					}
				}

				// Preserve script evaluation history
				destElements = getAll(clone, "script");
				if (destElements.length > 0) {
					setGlobalEval(destElements, !inPage && getAll(elem, "script"));
				}

				// Return the cloned set
				return clone;
			},

			cleanData: function cleanData(elems) {
				var data,
				    elem,
				    type,
				    special = jQuery.event.special,
				    i = 0;

				for (; (elem = elems[i]) !== undefined; i++) {
					if (acceptData(elem)) {
						if (data = elem[dataPriv.expando]) {
							if (data.events) {
								for (type in data.events) {
									if (special[type]) {
										jQuery.event.remove(elem, type);

										// This is a shortcut to avoid jQuery.event.remove's overhead
									} else {
										jQuery.removeEvent(elem, type, data.handle);
									}
								}
							}

							// Support: Chrome <=35 - 45+
							// Assign undefined instead of using delete, see Data#remove
							elem[dataPriv.expando] = undefined;
						}
						if (elem[dataUser.expando]) {

							// Support: Chrome <=35 - 45+
							// Assign undefined instead of using delete, see Data#remove
							elem[dataUser.expando] = undefined;
						}
					}
				}
			}
		});

		jQuery.fn.extend({
			detach: function detach(selector) {
				return _remove(this, selector, true);
			},

			remove: function remove(selector) {
				return _remove(this, selector);
			},

			text: function text(value) {
				return access(this, function (value) {
					return value === undefined ? jQuery.text(this) : this.empty().each(function () {
						if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
							this.textContent = value;
						}
					});
				}, null, value, arguments.length);
			},

			append: function append() {
				return domManip(this, arguments, function (elem) {
					if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
						var target = manipulationTarget(this, elem);
						target.appendChild(elem);
					}
				});
			},

			prepend: function prepend() {
				return domManip(this, arguments, function (elem) {
					if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
						var target = manipulationTarget(this, elem);
						target.insertBefore(elem, target.firstChild);
					}
				});
			},

			before: function before() {
				return domManip(this, arguments, function (elem) {
					if (this.parentNode) {
						this.parentNode.insertBefore(elem, this);
					}
				});
			},

			after: function after() {
				return domManip(this, arguments, function (elem) {
					if (this.parentNode) {
						this.parentNode.insertBefore(elem, this.nextSibling);
					}
				});
			},

			empty: function empty() {
				var elem,
				    i = 0;

				for (; (elem = this[i]) != null; i++) {
					if (elem.nodeType === 1) {

						// Prevent memory leaks
						jQuery.cleanData(getAll(elem, false));

						// Remove any remaining nodes
						elem.textContent = "";
					}
				}

				return this;
			},

			clone: function clone(dataAndEvents, deepDataAndEvents) {
				dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
				deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

				return this.map(function () {
					return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
				});
			},

			html: function html(value) {
				return access(this, function (value) {
					var elem = this[0] || {},
					    i = 0,
					    l = this.length;

					if (value === undefined && elem.nodeType === 1) {
						return elem.innerHTML;
					}

					// See if we can take a shortcut and just use innerHTML
					if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {

						value = jQuery.htmlPrefilter(value);

						try {
							for (; i < l; i++) {
								elem = this[i] || {};

								// Remove element nodes and prevent memory leaks
								if (elem.nodeType === 1) {
									jQuery.cleanData(getAll(elem, false));
									elem.innerHTML = value;
								}
							}

							elem = 0;

							// If using innerHTML throws an exception, use the fallback method
						} catch (e) {}
					}

					if (elem) {
						this.empty().append(value);
					}
				}, null, value, arguments.length);
			},

			replaceWith: function replaceWith() {
				var ignored = [];

				// Make the changes, replacing each non-ignored context element with the new content
				return domManip(this, arguments, function (elem) {
					var parent = this.parentNode;

					if (jQuery.inArray(this, ignored) < 0) {
						jQuery.cleanData(getAll(this));
						if (parent) {
							parent.replaceChild(elem, this);
						}
					}

					// Force callback invocation
				}, ignored);
			}
		});

		jQuery.each({
			appendTo: "append",
			prependTo: "prepend",
			insertBefore: "before",
			insertAfter: "after",
			replaceAll: "replaceWith"
		}, function (name, original) {
			jQuery.fn[name] = function (selector) {
				var elems,
				    ret = [],
				    insert = jQuery(selector),
				    last = insert.length - 1,
				    i = 0;

				for (; i <= last; i++) {
					elems = i === last ? this : this.clone(true);
					jQuery(insert[i])[original](elems);

					// Support: Android <=4.0 only, PhantomJS 1 only
					// .get() because push.apply(_, arraylike) throws on ancient WebKit
					push.apply(ret, elems.get());
				}

				return this.pushStack(ret);
			};
		});
		var rmargin = /^margin/;

		var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");

		var getStyles = function getStyles(elem) {

			// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;

			if (!view || !view.opener) {
				view = window;
			}

			return view.getComputedStyle(elem);
		};

		(function () {

			// Executing both pixelPosition & boxSizingReliable tests require only one layout
			// so they're executed at the same time to save the second computation.
			function computeStyleTests() {

				// This is a singleton, we need to execute it only once
				if (!div) {
					return;
				}

				div.style.cssText = "box-sizing:border-box;" + "position:relative;display:block;" + "margin:auto;border:1px;padding:1px;" + "top:1%;width:50%";
				div.innerHTML = "";
				documentElement.appendChild(container);

				var divStyle = window.getComputedStyle(div);
				pixelPositionVal = divStyle.top !== "1%";

				// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
				reliableMarginLeftVal = divStyle.marginLeft === "2px";
				boxSizingReliableVal = divStyle.width === "4px";

				// Support: Android 4.0 - 4.3 only
				// Some styles come back with percentage values, even though they shouldn't
				div.style.marginRight = "50%";
				pixelMarginRightVal = divStyle.marginRight === "4px";

				documentElement.removeChild(container);

				// Nullify the div so it wouldn't be stored in the memory and
				// it will also be a sign that checks already performed
				div = null;
			}

			var pixelPositionVal,
			    boxSizingReliableVal,
			    pixelMarginRightVal,
			    reliableMarginLeftVal,
			    container = document.createElement("div"),
			    div = document.createElement("div");

			// Finish early in limited (non-browser) environments
			if (!div.style) {
				return;
			}

			// Support: IE <=9 - 11 only
			// Style of cloned element affects source element cloned (#8908)
			div.style.backgroundClip = "content-box";
			div.cloneNode(true).style.backgroundClip = "";
			support.clearCloneStyle = div.style.backgroundClip === "content-box";

			container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" + "padding:0;margin-top:1px;position:absolute";
			container.appendChild(div);

			jQuery.extend(support, {
				pixelPosition: function pixelPosition() {
					computeStyleTests();
					return pixelPositionVal;
				},
				boxSizingReliable: function boxSizingReliable() {
					computeStyleTests();
					return boxSizingReliableVal;
				},
				pixelMarginRight: function pixelMarginRight() {
					computeStyleTests();
					return pixelMarginRightVal;
				},
				reliableMarginLeft: function reliableMarginLeft() {
					computeStyleTests();
					return reliableMarginLeftVal;
				}
			});
		})();

		function curCSS(elem, name, computed) {
			var width,
			    minWidth,
			    maxWidth,
			    ret,
			    style = elem.style;

			computed = computed || getStyles(elem);

			// Support: IE <=9 only
			// getPropertyValue is only needed for .css('filter') (#12537)
			if (computed) {
				ret = computed.getPropertyValue(name) || computed[name];

				if (ret === "" && !jQuery.contains(elem.ownerDocument, elem)) {
					ret = jQuery.style(elem, name);
				}

				// A tribute to the "awesome hack by Dean Edwards"
				// Android Browser returns percentage for some values,
				// but width seems to be reliably pixels.
				// This is against the CSSOM draft spec:
				// https://drafts.csswg.org/cssom/#resolved-values
				if (!support.pixelMarginRight() && rnumnonpx.test(ret) && rmargin.test(name)) {

					// Remember the original values
					width = style.width;
					minWidth = style.minWidth;
					maxWidth = style.maxWidth;

					// Put in the new values to get a computed value out
					style.minWidth = style.maxWidth = style.width = ret;
					ret = computed.width;

					// Revert the changed values
					style.width = width;
					style.minWidth = minWidth;
					style.maxWidth = maxWidth;
				}
			}

			return ret !== undefined ?

			// Support: IE <=9 - 11 only
			// IE returns zIndex value as an integer.
			ret + "" : ret;
		}

		function addGetHookIf(conditionFn, hookFn) {

			// Define the hook, we'll check on the first run if it's really needed.
			return {
				get: function get() {
					if (conditionFn()) {

						// Hook not needed (or it's not possible to use it due
						// to missing dependency), remove it.
						delete this.get;
						return;
					}

					// Hook needed; redefine it so that the support test is not executed again.
					return (this.get = hookFn).apply(this, arguments);
				}
			};
		}

		var

		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		    cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		    cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		    cssPrefixes = ["Webkit", "Moz", "ms"],
		    emptyStyle = document.createElement("div").style;

		// Return a css property mapped to a potentially vendor prefixed property
		function vendorPropName(name) {

			// Shortcut for names that are not vendor prefixed
			if (name in emptyStyle) {
				return name;
			}

			// Check for vendor prefixed names
			var capName = name[0].toUpperCase() + name.slice(1),
			    i = cssPrefixes.length;

			while (i--) {
				name = cssPrefixes[i] + capName;
				if (name in emptyStyle) {
					return name;
				}
			}
		}

		function setPositiveNumber(elem, value, subtract) {

			// Any relative (+/-) values have already been
			// normalized at this point
			var matches = rcssNum.exec(value);
			return matches ?

			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
		}

		function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
			var i,
			    val = 0;

			// If we already have the right measurement, avoid augmentation
			if (extra === (isBorderBox ? "border" : "content")) {
				i = 4;

				// Otherwise initialize for horizontal or vertical properties
			} else {
				i = name === "width" ? 1 : 0;
			}

			for (; i < 4; i += 2) {

				// Both box models exclude margin, so add it if we want it
				if (extra === "margin") {
					val += jQuery.css(elem, extra + cssExpand[i], true, styles);
				}

				if (isBorderBox) {

					// border-box includes padding, so remove it if we want content
					if (extra === "content") {
						val -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
					}

					// At this point, extra isn't border nor margin, so remove border
					if (extra !== "margin") {
						val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
					}
				} else {

					// At this point, extra isn't content, so add padding
					val += jQuery.css(elem, "padding" + cssExpand[i], true, styles);

					// At this point, extra isn't content nor padding, so add border
					if (extra !== "padding") {
						val += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
					}
				}
			}

			return val;
		}

		function getWidthOrHeight(elem, name, extra) {

			// Start with offset property, which is equivalent to the border-box value
			var val,
			    valueIsBorderBox = true,
			    styles = getStyles(elem),
			    isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";

			// Support: IE <=11 only
			// Running getBoundingClientRect on a disconnected node
			// in IE throws an error.
			if (elem.getClientRects().length) {
				val = elem.getBoundingClientRect()[name];
			}

			// Some non-html elements return undefined for offsetWidth, so check for null/undefined
			// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
			// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
			if (val <= 0 || val == null) {

				// Fall back to computed then uncomputed css if necessary
				val = curCSS(elem, name, styles);
				if (val < 0 || val == null) {
					val = elem.style[name];
				}

				// Computed unit is not pixels. Stop here and return.
				if (rnumnonpx.test(val)) {
					return val;
				}

				// Check for style in case a browser which returns unreliable values
				// for getComputedStyle silently falls back to the reliable elem.style
				valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]);

				// Normalize "", auto, and prepare for extra
				val = parseFloat(val) || 0;
			}

			// Use the active box-sizing model to add/subtract irrelevant styles
			return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles) + "px";
		}

		jQuery.extend({

			// Add in style property hooks for overriding the default
			// behavior of getting and setting a style property
			cssHooks: {
				opacity: {
					get: function get(elem, computed) {
						if (computed) {

							// We should always get a number back from opacity
							var ret = curCSS(elem, "opacity");
							return ret === "" ? "1" : ret;
						}
					}
				}
			},

			// Don't automatically add "px" to these possibly-unitless properties
			cssNumber: {
				"animationIterationCount": true,
				"columnCount": true,
				"fillOpacity": true,
				"flexGrow": true,
				"flexShrink": true,
				"fontWeight": true,
				"lineHeight": true,
				"opacity": true,
				"order": true,
				"orphans": true,
				"widows": true,
				"zIndex": true,
				"zoom": true
			},

			// Add in properties whose names you wish to fix before
			// setting or getting the value
			cssProps: {
				"float": "cssFloat"
			},

			// Get and set the style property on a DOM Node
			style: function style(elem, name, value, extra) {

				// Don't set styles on text and comment nodes
				if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
					return;
				}

				// Make sure that we're working with the right name
				var ret,
				    type,
				    hooks,
				    origName = jQuery.camelCase(name),
				    style = elem.style;

				name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(origName) || origName);

				// Gets hook for the prefixed version, then unprefixed version
				hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

				// Check if we're setting a value
				if (value !== undefined) {
					type = typeof value === "undefined" ? "undefined" : _typeof(value);

					// Convert "+=" or "-=" to relative numbers (#7345)
					if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
						value = adjustCSS(elem, name, ret);

						// Fixes bug #9237
						type = "number";
					}

					// Make sure that null and NaN values aren't set (#7116)
					if (value == null || value !== value) {
						return;
					}

					// If a number was passed in, add the unit (except for certain CSS properties)
					if (type === "number") {
						value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
					}

					// background-* props affect original clone's values
					if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
						style[name] = "inherit";
					}

					// If a hook was provided, use that value, otherwise just set the specified value
					if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {

						style[name] = value;
					}
				} else {

					// If a hook was provided get the non-computed value from there
					if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {

						return ret;
					}

					// Otherwise just get the value from the style object
					return style[name];
				}
			},

			css: function css(elem, name, extra, styles) {
				var val,
				    num,
				    hooks,
				    origName = jQuery.camelCase(name);

				// Make sure that we're working with the right name
				name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(origName) || origName);

				// Try prefixed name followed by the unprefixed name
				hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

				// If a hook was provided get the computed value from there
				if (hooks && "get" in hooks) {
					val = hooks.get(elem, true, extra);
				}

				// Otherwise, if a way to get the computed value exists, use that
				if (val === undefined) {
					val = curCSS(elem, name, styles);
				}

				// Convert "normal" to computed value
				if (val === "normal" && name in cssNormalTransform) {
					val = cssNormalTransform[name];
				}

				// Make numeric if forced or a qualifier was provided and val looks numeric
				if (extra === "" || extra) {
					num = parseFloat(val);
					return extra === true || isFinite(num) ? num || 0 : val;
				}
				return val;
			}
		});

		jQuery.each(["height", "width"], function (i, name) {
			jQuery.cssHooks[name] = {
				get: function get(elem, computed, extra) {
					if (computed) {

						// Certain elements can have dimension info if we invisibly show them
						// but it must have a current display style that would benefit
						return rdisplayswap.test(jQuery.css(elem, "display")) && (

						// Support: Safari 8+
						// Table columns in Safari have non-zero offsetWidth & zero
						// getBoundingClientRect().width unless display is changed.
						// Support: IE <=11 only
						// Running getBoundingClientRect on a disconnected node
						// in IE throws an error.
						!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function () {
							return getWidthOrHeight(elem, name, extra);
						}) : getWidthOrHeight(elem, name, extra);
					}
				},

				set: function set(elem, value, extra) {
					var matches,
					    styles = extra && getStyles(elem),
					    subtract = extra && augmentWidthOrHeight(elem, name, extra, jQuery.css(elem, "boxSizing", false, styles) === "border-box", styles);

					// Convert to pixels if value adjustment is needed
					if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {

						elem.style[name] = value;
						value = jQuery.css(elem, name);
					}

					return setPositiveNumber(elem, value, subtract);
				}
			};
		});

		jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function (elem, computed) {
			if (computed) {
				return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, { marginLeft: 0 }, function () {
					return elem.getBoundingClientRect().left;
				})) + "px";
			}
		});

		// These hooks are used by animate to expand properties
		jQuery.each({
			margin: "",
			padding: "",
			border: "Width"
		}, function (prefix, suffix) {
			jQuery.cssHooks[prefix + suffix] = {
				expand: function expand(value) {
					var i = 0,
					    expanded = {},


					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split(" ") : [value];

					for (; i < 4; i++) {
						expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
					}

					return expanded;
				}
			};

			if (!rmargin.test(prefix)) {
				jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
			}
		});

		jQuery.fn.extend({
			css: function css(name, value) {
				return access(this, function (elem, name, value) {
					var styles,
					    len,
					    map = {},
					    i = 0;

					if (jQuery.isArray(name)) {
						styles = getStyles(elem);
						len = name.length;

						for (; i < len; i++) {
							map[name[i]] = jQuery.css(elem, name[i], false, styles);
						}

						return map;
					}

					return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
				}, name, value, arguments.length > 1);
			}
		});

		function Tween(elem, options, prop, end, easing) {
			return new Tween.prototype.init(elem, options, prop, end, easing);
		}
		jQuery.Tween = Tween;

		Tween.prototype = {
			constructor: Tween,
			init: function init(elem, options, prop, end, easing, unit) {
				this.elem = elem;
				this.prop = prop;
				this.easing = easing || jQuery.easing._default;
				this.options = options;
				this.start = this.now = this.cur();
				this.end = end;
				this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
			},
			cur: function cur() {
				var hooks = Tween.propHooks[this.prop];

				return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
			},
			run: function run(percent) {
				var eased,
				    hooks = Tween.propHooks[this.prop];

				if (this.options.duration) {
					this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
				} else {
					this.pos = eased = percent;
				}
				this.now = (this.end - this.start) * eased + this.start;

				if (this.options.step) {
					this.options.step.call(this.elem, this.now, this);
				}

				if (hooks && hooks.set) {
					hooks.set(this);
				} else {
					Tween.propHooks._default.set(this);
				}
				return this;
			}
		};

		Tween.prototype.init.prototype = Tween.prototype;

		Tween.propHooks = {
			_default: {
				get: function get(tween) {
					var result;

					// Use a property on the element directly when it is not a DOM element,
					// or when there is no matching style property that exists.
					if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
						return tween.elem[tween.prop];
					}

					// Passing an empty string as a 3rd parameter to .css will automatically
					// attempt a parseFloat and fallback to a string if the parse fails.
					// Simple values such as "10px" are parsed to Float;
					// complex values such as "rotate(1rad)" are returned as-is.
					result = jQuery.css(tween.elem, tween.prop, "");

					// Empty strings, null, undefined and "auto" are converted to 0.
					return !result || result === "auto" ? 0 : result;
				},
				set: function set(tween) {

					// Use step hook for back compat.
					// Use cssHook if its there.
					// Use .style if available and use plain properties where available.
					if (jQuery.fx.step[tween.prop]) {
						jQuery.fx.step[tween.prop](tween);
					} else if (tween.elem.nodeType === 1 && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
						jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
					} else {
						tween.elem[tween.prop] = tween.now;
					}
				}
			}
		};

		// Support: IE <=9 only
		// Panic based approach to setting things on disconnected nodes
		Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
			set: function set(tween) {
				if (tween.elem.nodeType && tween.elem.parentNode) {
					tween.elem[tween.prop] = tween.now;
				}
			}
		};

		jQuery.easing = {
			linear: function linear(p) {
				return p;
			},
			swing: function swing(p) {
				return 0.5 - Math.cos(p * Math.PI) / 2;
			},
			_default: "swing"
		};

		jQuery.fx = Tween.prototype.init;

		// Back compat <1.8 extension point
		jQuery.fx.step = {};

		var fxNow,
		    timerId,
		    rfxtypes = /^(?:toggle|show|hide)$/,
		    rrun = /queueHooks$/;

		function raf() {
			if (timerId) {
				window.requestAnimationFrame(raf);
				jQuery.fx.tick();
			}
		}

		// Animations created synchronously will run synchronously
		function createFxNow() {
			window.setTimeout(function () {
				fxNow = undefined;
			});
			return fxNow = jQuery.now();
		}

		// Generate parameters to create a standard animation
		function genFx(type, includeWidth) {
			var which,
			    i = 0,
			    attrs = { height: type };

			// If we include width, step value is 1 to do all cssExpand values,
			// otherwise step value is 2 to skip over Left and Right
			includeWidth = includeWidth ? 1 : 0;
			for (; i < 4; i += 2 - includeWidth) {
				which = cssExpand[i];
				attrs["margin" + which] = attrs["padding" + which] = type;
			}

			if (includeWidth) {
				attrs.opacity = attrs.width = type;
			}

			return attrs;
		}

		function createTween(value, prop, animation) {
			var tween,
			    collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]),
			    index = 0,
			    length = collection.length;
			for (; index < length; index++) {
				if (tween = collection[index].call(animation, prop, value)) {

					// We're done with this property
					return tween;
				}
			}
		}

		function defaultPrefilter(elem, props, opts) {
			var prop,
			    value,
			    toggle,
			    hooks,
			    oldfire,
			    propTween,
			    restoreDisplay,
			    display,
			    isBox = "width" in props || "height" in props,
			    anim = this,
			    orig = {},
			    style = elem.style,
			    hidden = elem.nodeType && isHiddenWithinTree(elem),
			    dataShow = dataPriv.get(elem, "fxshow");

			// Queue-skipping animations hijack the fx hooks
			if (!opts.queue) {
				hooks = jQuery._queueHooks(elem, "fx");
				if (hooks.unqueued == null) {
					hooks.unqueued = 0;
					oldfire = hooks.empty.fire;
					hooks.empty.fire = function () {
						if (!hooks.unqueued) {
							oldfire();
						}
					};
				}
				hooks.unqueued++;

				anim.always(function () {

					// Ensure the complete handler is called before this completes
					anim.always(function () {
						hooks.unqueued--;
						if (!jQuery.queue(elem, "fx").length) {
							hooks.empty.fire();
						}
					});
				});
			}

			// Detect show/hide animations
			for (prop in props) {
				value = props[prop];
				if (rfxtypes.test(value)) {
					delete props[prop];
					toggle = toggle || value === "toggle";
					if (value === (hidden ? "hide" : "show")) {

						// Pretend to be hidden if this is a "show" and
						// there is still data from a stopped show/hide
						if (value === "show" && dataShow && dataShow[prop] !== undefined) {
							hidden = true;

							// Ignore all other no-op show/hide data
						} else {
							continue;
						}
					}
					orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
				}
			}

			// Bail out if this is a no-op like .hide().hide()
			propTween = !jQuery.isEmptyObject(props);
			if (!propTween && jQuery.isEmptyObject(orig)) {
				return;
			}

			// Restrict "overflow" and "display" styles during box animations
			if (isBox && elem.nodeType === 1) {

				// Support: IE <=9 - 11, Edge 12 - 13
				// Record all 3 overflow attributes because IE does not infer the shorthand
				// from identically-valued overflowX and overflowY
				opts.overflow = [style.overflow, style.overflowX, style.overflowY];

				// Identify a display type, preferring old show/hide data over the CSS cascade
				restoreDisplay = dataShow && dataShow.display;
				if (restoreDisplay == null) {
					restoreDisplay = dataPriv.get(elem, "display");
				}
				display = jQuery.css(elem, "display");
				if (display === "none") {
					if (restoreDisplay) {
						display = restoreDisplay;
					} else {

						// Get nonempty value(s) by temporarily forcing visibility
						showHide([elem], true);
						restoreDisplay = elem.style.display || restoreDisplay;
						display = jQuery.css(elem, "display");
						showHide([elem]);
					}
				}

				// Animate inline elements as inline-block
				if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
					if (jQuery.css(elem, "float") === "none") {

						// Restore the original display value at the end of pure show/hide animations
						if (!propTween) {
							anim.done(function () {
								style.display = restoreDisplay;
							});
							if (restoreDisplay == null) {
								display = style.display;
								restoreDisplay = display === "none" ? "" : display;
							}
						}
						style.display = "inline-block";
					}
				}
			}

			if (opts.overflow) {
				style.overflow = "hidden";
				anim.always(function () {
					style.overflow = opts.overflow[0];
					style.overflowX = opts.overflow[1];
					style.overflowY = opts.overflow[2];
				});
			}

			// Implement show/hide animations
			propTween = false;
			for (prop in orig) {

				// General show/hide setup for this element animation
				if (!propTween) {
					if (dataShow) {
						if ("hidden" in dataShow) {
							hidden = dataShow.hidden;
						}
					} else {
						dataShow = dataPriv.access(elem, "fxshow", { display: restoreDisplay });
					}

					// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
					if (toggle) {
						dataShow.hidden = !hidden;
					}

					// Show elements before animating them
					if (hidden) {
						showHide([elem], true);
					}

					/* eslint-disable no-loop-func */

					anim.done(function () {

						/* eslint-enable no-loop-func */

						// The final step of a "hide" animation is actually hiding the element
						if (!hidden) {
							showHide([elem]);
						}
						dataPriv.remove(elem, "fxshow");
						for (prop in orig) {
							jQuery.style(elem, prop, orig[prop]);
						}
					});
				}

				// Per-property setup
				propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
				if (!(prop in dataShow)) {
					dataShow[prop] = propTween.start;
					if (hidden) {
						propTween.end = propTween.start;
						propTween.start = 0;
					}
				}
			}
		}

		function propFilter(props, specialEasing) {
			var index, name, easing, value, hooks;

			// camelCase, specialEasing and expand cssHook pass
			for (index in props) {
				name = jQuery.camelCase(index);
				easing = specialEasing[name];
				value = props[index];
				if (jQuery.isArray(value)) {
					easing = value[1];
					value = props[index] = value[0];
				}

				if (index !== name) {
					props[name] = value;
					delete props[index];
				}

				hooks = jQuery.cssHooks[name];
				if (hooks && "expand" in hooks) {
					value = hooks.expand(value);
					delete props[name];

					// Not quite $.extend, this won't overwrite existing keys.
					// Reusing 'index' because we have the correct "name"
					for (index in value) {
						if (!(index in props)) {
							props[index] = value[index];
							specialEasing[index] = easing;
						}
					}
				} else {
					specialEasing[name] = easing;
				}
			}
		}

		function Animation(elem, properties, options) {
			var result,
			    stopped,
			    index = 0,
			    length = Animation.prefilters.length,
			    deferred = jQuery.Deferred().always(function () {

				// Don't match elem in the :animated selector
				delete tick.elem;
			}),
			    tick = function tick() {
				if (stopped) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
				    remaining = Math.max(0, animation.startTime + animation.duration - currentTime),


				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				    percent = 1 - temp,
				    index = 0,
				    length = animation.tweens.length;

				for (; index < length; index++) {
					animation.tweens[index].run(percent);
				}

				deferred.notifyWith(elem, [animation, percent, remaining]);

				if (percent < 1 && length) {
					return remaining;
				} else {
					deferred.resolveWith(elem, [animation]);
					return false;
				}
			},
			    animation = deferred.promise({
				elem: elem,
				props: jQuery.extend({}, properties),
				opts: jQuery.extend(true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function createTween(prop, end) {
					var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
					animation.tweens.push(tween);
					return tween;
				},
				stop: function stop(gotoEnd) {
					var index = 0,


					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
					if (stopped) {
						return this;
					}
					stopped = true;
					for (; index < length; index++) {
						animation.tweens[index].run(1);
					}

					// Resolve when we played the last frame; otherwise, reject
					if (gotoEnd) {
						deferred.notifyWith(elem, [animation, 1, 0]);
						deferred.resolveWith(elem, [animation, gotoEnd]);
					} else {
						deferred.rejectWith(elem, [animation, gotoEnd]);
					}
					return this;
				}
			}),
			    props = animation.props;

			propFilter(props, animation.opts.specialEasing);

			for (; index < length; index++) {
				result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
				if (result) {
					if (jQuery.isFunction(result.stop)) {
						jQuery._queueHooks(animation.elem, animation.opts.queue).stop = jQuery.proxy(result.stop, result);
					}
					return result;
				}
			}

			jQuery.map(props, createTween, animation);

			if (jQuery.isFunction(animation.opts.start)) {
				animation.opts.start.call(elem, animation);
			}

			jQuery.fx.timer(jQuery.extend(tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			}));

			// attach callbacks from options
			return animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
		}

		jQuery.Animation = jQuery.extend(Animation, {

			tweeners: {
				"*": [function (prop, value) {
					var tween = this.createTween(prop, value);
					adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
					return tween;
				}]
			},

			tweener: function tweener(props, callback) {
				if (jQuery.isFunction(props)) {
					callback = props;
					props = ["*"];
				} else {
					props = props.match(rnothtmlwhite);
				}

				var prop,
				    index = 0,
				    length = props.length;

				for (; index < length; index++) {
					prop = props[index];
					Animation.tweeners[prop] = Animation.tweeners[prop] || [];
					Animation.tweeners[prop].unshift(callback);
				}
			},

			prefilters: [defaultPrefilter],

			prefilter: function prefilter(callback, prepend) {
				if (prepend) {
					Animation.prefilters.unshift(callback);
				} else {
					Animation.prefilters.push(callback);
				}
			}
		});

		jQuery.speed = function (speed, easing, fn) {
			var opt = speed && (typeof speed === "undefined" ? "undefined" : _typeof(speed)) === "object" ? jQuery.extend({}, speed) : {
				complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
				duration: speed,
				easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
			};

			// Go to the end state if fx are off or if document is hidden
			if (jQuery.fx.off || document.hidden) {
				opt.duration = 0;
			} else {
				if (typeof opt.duration !== "number") {
					if (opt.duration in jQuery.fx.speeds) {
						opt.duration = jQuery.fx.speeds[opt.duration];
					} else {
						opt.duration = jQuery.fx.speeds._default;
					}
				}
			}

			// Normalize opt.queue - true/undefined/null -> "fx"
			if (opt.queue == null || opt.queue === true) {
				opt.queue = "fx";
			}

			// Queueing
			opt.old = opt.complete;

			opt.complete = function () {
				if (jQuery.isFunction(opt.old)) {
					opt.old.call(this);
				}

				if (opt.queue) {
					jQuery.dequeue(this, opt.queue);
				}
			};

			return opt;
		};

		jQuery.fn.extend({
			fadeTo: function fadeTo(speed, to, easing, callback) {

				// Show any hidden elements after setting opacity to 0
				return this.filter(isHiddenWithinTree).css("opacity", 0).show()

				// Animate to the value specified
				.end().animate({ opacity: to }, speed, easing, callback);
			},
			animate: function animate(prop, speed, easing, callback) {
				var empty = jQuery.isEmptyObject(prop),
				    optall = jQuery.speed(speed, easing, callback),
				    doAnimation = function doAnimation() {

					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation(this, jQuery.extend({}, prop), optall);

					// Empty animations, or finishing resolves immediately
					if (empty || dataPriv.get(this, "finish")) {
						anim.stop(true);
					}
				};
				doAnimation.finish = doAnimation;

				return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
			},
			stop: function stop(type, clearQueue, gotoEnd) {
				var stopQueue = function stopQueue(hooks) {
					var stop = hooks.stop;
					delete hooks.stop;
					stop(gotoEnd);
				};

				if (typeof type !== "string") {
					gotoEnd = clearQueue;
					clearQueue = type;
					type = undefined;
				}
				if (clearQueue && type !== false) {
					this.queue(type || "fx", []);
				}

				return this.each(function () {
					var dequeue = true,
					    index = type != null && type + "queueHooks",
					    timers = jQuery.timers,
					    data = dataPriv.get(this);

					if (index) {
						if (data[index] && data[index].stop) {
							stopQueue(data[index]);
						}
					} else {
						for (index in data) {
							if (data[index] && data[index].stop && rrun.test(index)) {
								stopQueue(data[index]);
							}
						}
					}

					for (index = timers.length; index--;) {
						if (timers[index].elem === this && (type == null || timers[index].queue === type)) {

							timers[index].anim.stop(gotoEnd);
							dequeue = false;
							timers.splice(index, 1);
						}
					}

					// Start the next in the queue if the last step wasn't forced.
					// Timers currently will call their complete callbacks, which
					// will dequeue but only if they were gotoEnd.
					if (dequeue || !gotoEnd) {
						jQuery.dequeue(this, type);
					}
				});
			},
			finish: function finish(type) {
				if (type !== false) {
					type = type || "fx";
				}
				return this.each(function () {
					var index,
					    data = dataPriv.get(this),
					    queue = data[type + "queue"],
					    hooks = data[type + "queueHooks"],
					    timers = jQuery.timers,
					    length = queue ? queue.length : 0;

					// Enable finishing flag on private data
					data.finish = true;

					// Empty the queue first
					jQuery.queue(this, type, []);

					if (hooks && hooks.stop) {
						hooks.stop.call(this, true);
					}

					// Look for any active animations, and finish them
					for (index = timers.length; index--;) {
						if (timers[index].elem === this && timers[index].queue === type) {
							timers[index].anim.stop(true);
							timers.splice(index, 1);
						}
					}

					// Look for any animations in the old queue and finish them
					for (index = 0; index < length; index++) {
						if (queue[index] && queue[index].finish) {
							queue[index].finish.call(this);
						}
					}

					// Turn off finishing flag
					delete data.finish;
				});
			}
		});

		jQuery.each(["toggle", "show", "hide"], function (i, name) {
			var cssFn = jQuery.fn[name];
			jQuery.fn[name] = function (speed, easing, callback) {
				return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
			};
		});

		// Generate shortcuts for custom animations
		jQuery.each({
			slideDown: genFx("show"),
			slideUp: genFx("hide"),
			slideToggle: genFx("toggle"),
			fadeIn: { opacity: "show" },
			fadeOut: { opacity: "hide" },
			fadeToggle: { opacity: "toggle" }
		}, function (name, props) {
			jQuery.fn[name] = function (speed, easing, callback) {
				return this.animate(props, speed, easing, callback);
			};
		});

		jQuery.timers = [];
		jQuery.fx.tick = function () {
			var timer,
			    i = 0,
			    timers = jQuery.timers;

			fxNow = jQuery.now();

			for (; i < timers.length; i++) {
				timer = timers[i];

				// Checks the timer has not already been removed
				if (!timer() && timers[i] === timer) {
					timers.splice(i--, 1);
				}
			}

			if (!timers.length) {
				jQuery.fx.stop();
			}
			fxNow = undefined;
		};

		jQuery.fx.timer = function (timer) {
			jQuery.timers.push(timer);
			if (timer()) {
				jQuery.fx.start();
			} else {
				jQuery.timers.pop();
			}
		};

		jQuery.fx.interval = 13;
		jQuery.fx.start = function () {
			if (!timerId) {
				timerId = window.requestAnimationFrame ? window.requestAnimationFrame(raf) : window.setInterval(jQuery.fx.tick, jQuery.fx.interval);
			}
		};

		jQuery.fx.stop = function () {
			if (window.cancelAnimationFrame) {
				window.cancelAnimationFrame(timerId);
			} else {
				window.clearInterval(timerId);
			}

			timerId = null;
		};

		jQuery.fx.speeds = {
			slow: 600,
			fast: 200,

			// Default speed
			_default: 400
		};

		// Based off of the plugin by Clint Helfers, with permission.
		// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
		jQuery.fn.delay = function (time, type) {
			time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
			type = type || "fx";

			return this.queue(type, function (next, hooks) {
				var timeout = window.setTimeout(next, time);
				hooks.stop = function () {
					window.clearTimeout(timeout);
				};
			});
		};

		(function () {
			var input = document.createElement("input"),
			    select = document.createElement("select"),
			    opt = select.appendChild(document.createElement("option"));

			input.type = "checkbox";

			// Support: Android <=4.3 only
			// Default value for a checkbox should be "on"
			support.checkOn = input.value !== "";

			// Support: IE <=11 only
			// Must access selectedIndex to make default options select
			support.optSelected = opt.selected;

			// Support: IE <=11 only
			// An input loses its value after becoming a radio
			input = document.createElement("input");
			input.value = "t";
			input.type = "radio";
			support.radioValue = input.value === "t";
		})();

		var boolHook,
		    attrHandle = jQuery.expr.attrHandle;

		jQuery.fn.extend({
			attr: function attr(name, value) {
				return access(this, jQuery.attr, name, value, arguments.length > 1);
			},

			removeAttr: function removeAttr(name) {
				return this.each(function () {
					jQuery.removeAttr(this, name);
				});
			}
		});

		jQuery.extend({
			attr: function attr(elem, name, value) {
				var ret,
				    hooks,
				    nType = elem.nodeType;

				// Don't get/set attributes on text, comment and attribute nodes
				if (nType === 3 || nType === 8 || nType === 2) {
					return;
				}

				// Fallback to prop when attributes are not supported
				if (typeof elem.getAttribute === "undefined") {
					return jQuery.prop(elem, name, value);
				}

				// Attribute hooks are determined by the lowercase version
				// Grab necessary hook if one is defined
				if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
					hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
				}

				if (value !== undefined) {
					if (value === null) {
						jQuery.removeAttr(elem, name);
						return;
					}

					if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
						return ret;
					}

					elem.setAttribute(name, value + "");
					return value;
				}

				if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
					return ret;
				}

				ret = jQuery.find.attr(elem, name);

				// Non-existent attributes return null, we normalize to undefined
				return ret == null ? undefined : ret;
			},

			attrHooks: {
				type: {
					set: function set(elem, value) {
						if (!support.radioValue && value === "radio" && jQuery.nodeName(elem, "input")) {
							var val = elem.value;
							elem.setAttribute("type", value);
							if (val) {
								elem.value = val;
							}
							return value;
						}
					}
				}
			},

			removeAttr: function removeAttr(elem, value) {
				var name,
				    i = 0,


				// Attribute names can contain non-HTML whitespace characters
				// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
				attrNames = value && value.match(rnothtmlwhite);

				if (attrNames && elem.nodeType === 1) {
					while (name = attrNames[i++]) {
						elem.removeAttribute(name);
					}
				}
			}
		});

		// Hooks for boolean attributes
		boolHook = {
			set: function set(elem, value, name) {
				if (value === false) {

					// Remove boolean attributes when set to false
					jQuery.removeAttr(elem, name);
				} else {
					elem.setAttribute(name, name);
				}
				return name;
			}
		};

		jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (i, name) {
			var getter = attrHandle[name] || jQuery.find.attr;

			attrHandle[name] = function (elem, name, isXML) {
				var ret,
				    handle,
				    lowercaseName = name.toLowerCase();

				if (!isXML) {

					// Avoid an infinite loop by temporarily removing this function from the getter
					handle = attrHandle[lowercaseName];
					attrHandle[lowercaseName] = ret;
					ret = getter(elem, name, isXML) != null ? lowercaseName : null;
					attrHandle[lowercaseName] = handle;
				}
				return ret;
			};
		});

		var rfocusable = /^(?:input|select|textarea|button)$/i,
		    rclickable = /^(?:a|area)$/i;

		jQuery.fn.extend({
			prop: function prop(name, value) {
				return access(this, jQuery.prop, name, value, arguments.length > 1);
			},

			removeProp: function removeProp(name) {
				return this.each(function () {
					delete this[jQuery.propFix[name] || name];
				});
			}
		});

		jQuery.extend({
			prop: function prop(elem, name, value) {
				var ret,
				    hooks,
				    nType = elem.nodeType;

				// Don't get/set properties on text, comment and attribute nodes
				if (nType === 3 || nType === 8 || nType === 2) {
					return;
				}

				if (nType !== 1 || !jQuery.isXMLDoc(elem)) {

					// Fix name and attach hooks
					name = jQuery.propFix[name] || name;
					hooks = jQuery.propHooks[name];
				}

				if (value !== undefined) {
					if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
						return ret;
					}

					return elem[name] = value;
				}

				if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
					return ret;
				}

				return elem[name];
			},

			propHooks: {
				tabIndex: {
					get: function get(elem) {

						// Support: IE <=9 - 11 only
						// elem.tabIndex doesn't always return the
						// correct value when it hasn't been explicitly set
						// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
						// Use proper attribute retrieval(#12072)
						var tabindex = jQuery.find.attr(elem, "tabindex");

						if (tabindex) {
							return parseInt(tabindex, 10);
						}

						if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
							return 0;
						}

						return -1;
					}
				}
			},

			propFix: {
				"for": "htmlFor",
				"class": "className"
			}
		});

		// Support: IE <=11 only
		// Accessing the selectedIndex property
		// forces the browser to respect setting selected
		// on the option
		// The getter ensures a default option is selected
		// when in an optgroup
		// eslint rule "no-unused-expressions" is disabled for this code
		// since it considers such accessions noop
		if (!support.optSelected) {
			jQuery.propHooks.selected = {
				get: function get(elem) {

					/* eslint no-unused-expressions: "off" */

					var parent = elem.parentNode;
					if (parent && parent.parentNode) {
						parent.parentNode.selectedIndex;
					}
					return null;
				},
				set: function set(elem) {

					/* eslint no-unused-expressions: "off" */

					var parent = elem.parentNode;
					if (parent) {
						parent.selectedIndex;

						if (parent.parentNode) {
							parent.parentNode.selectedIndex;
						}
					}
				}
			};
		}

		jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
			jQuery.propFix[this.toLowerCase()] = this;
		});

		// Strip and collapse whitespace according to HTML spec
		// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
		function stripAndCollapse(value) {
			var tokens = value.match(rnothtmlwhite) || [];
			return tokens.join(" ");
		}

		function getClass(elem) {
			return elem.getAttribute && elem.getAttribute("class") || "";
		}

		jQuery.fn.extend({
			addClass: function addClass(value) {
				var classes,
				    elem,
				    cur,
				    curValue,
				    clazz,
				    j,
				    finalValue,
				    i = 0;

				if (jQuery.isFunction(value)) {
					return this.each(function (j) {
						jQuery(this).addClass(value.call(this, j, getClass(this)));
					});
				}

				if (typeof value === "string" && value) {
					classes = value.match(rnothtmlwhite) || [];

					while (elem = this[i++]) {
						curValue = getClass(elem);
						cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";

						if (cur) {
							j = 0;
							while (clazz = classes[j++]) {
								if (cur.indexOf(" " + clazz + " ") < 0) {
									cur += clazz + " ";
								}
							}

							// Only assign if different to avoid unneeded rendering.
							finalValue = stripAndCollapse(cur);
							if (curValue !== finalValue) {
								elem.setAttribute("class", finalValue);
							}
						}
					}
				}

				return this;
			},

			removeClass: function removeClass(value) {
				var classes,
				    elem,
				    cur,
				    curValue,
				    clazz,
				    j,
				    finalValue,
				    i = 0;

				if (jQuery.isFunction(value)) {
					return this.each(function (j) {
						jQuery(this).removeClass(value.call(this, j, getClass(this)));
					});
				}

				if (!arguments.length) {
					return this.attr("class", "");
				}

				if (typeof value === "string" && value) {
					classes = value.match(rnothtmlwhite) || [];

					while (elem = this[i++]) {
						curValue = getClass(elem);

						// This expression is here for better compressibility (see addClass)
						cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";

						if (cur) {
							j = 0;
							while (clazz = classes[j++]) {

								// Remove *all* instances
								while (cur.indexOf(" " + clazz + " ") > -1) {
									cur = cur.replace(" " + clazz + " ", " ");
								}
							}

							// Only assign if different to avoid unneeded rendering.
							finalValue = stripAndCollapse(cur);
							if (curValue !== finalValue) {
								elem.setAttribute("class", finalValue);
							}
						}
					}
				}

				return this;
			},

			toggleClass: function toggleClass(value, stateVal) {
				var type = typeof value === "undefined" ? "undefined" : _typeof(value);

				if (typeof stateVal === "boolean" && type === "string") {
					return stateVal ? this.addClass(value) : this.removeClass(value);
				}

				if (jQuery.isFunction(value)) {
					return this.each(function (i) {
						jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
					});
				}

				return this.each(function () {
					var className, i, self, classNames;

					if (type === "string") {

						// Toggle individual class names
						i = 0;
						self = jQuery(this);
						classNames = value.match(rnothtmlwhite) || [];

						while (className = classNames[i++]) {

							// Check each className given, space separated list
							if (self.hasClass(className)) {
								self.removeClass(className);
							} else {
								self.addClass(className);
							}
						}

						// Toggle whole class name
					} else if (value === undefined || type === "boolean") {
						className = getClass(this);
						if (className) {

							// Store className if set
							dataPriv.set(this, "__className__", className);
						}

						// If the element has a class name or if we're passed `false`,
						// then remove the whole classname (if there was one, the above saved it).
						// Otherwise bring back whatever was previously saved (if anything),
						// falling back to the empty string if nothing was stored.
						if (this.setAttribute) {
							this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
						}
					}
				});
			},

			hasClass: function hasClass(selector) {
				var className,
				    elem,
				    i = 0;

				className = " " + selector + " ";
				while (elem = this[i++]) {
					if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
						return true;
					}
				}

				return false;
			}
		});

		var rreturn = /\r/g;

		jQuery.fn.extend({
			val: function val(value) {
				var hooks,
				    ret,
				    isFunction,
				    elem = this[0];

				if (!arguments.length) {
					if (elem) {
						hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];

						if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
							return ret;
						}

						ret = elem.value;

						// Handle most common string cases
						if (typeof ret === "string") {
							return ret.replace(rreturn, "");
						}

						// Handle cases where value is null/undef or number
						return ret == null ? "" : ret;
					}

					return;
				}

				isFunction = jQuery.isFunction(value);

				return this.each(function (i) {
					var val;

					if (this.nodeType !== 1) {
						return;
					}

					if (isFunction) {
						val = value.call(this, i, jQuery(this).val());
					} else {
						val = value;
					}

					// Treat null/undefined as ""; convert numbers to string
					if (val == null) {
						val = "";
					} else if (typeof val === "number") {
						val += "";
					} else if (jQuery.isArray(val)) {
						val = jQuery.map(val, function (value) {
							return value == null ? "" : value + "";
						});
					}

					hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];

					// If set returns undefined, fall back to normal setting
					if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
						this.value = val;
					}
				});
			}
		});

		jQuery.extend({
			valHooks: {
				option: {
					get: function get(elem) {

						var val = jQuery.find.attr(elem, "value");
						return val != null ? val :

						// Support: IE <=10 - 11 only
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						stripAndCollapse(jQuery.text(elem));
					}
				},
				select: {
					get: function get(elem) {
						var value,
						    option,
						    i,
						    options = elem.options,
						    index = elem.selectedIndex,
						    one = elem.type === "select-one",
						    values = one ? null : [],
						    max = one ? index + 1 : options.length;

						if (index < 0) {
							i = max;
						} else {
							i = one ? index : 0;
						}

						// Loop through all the selected options
						for (; i < max; i++) {
							option = options[i];

							// Support: IE <=9 only
							// IE8-9 doesn't update selected after form reset (#2551)
							if ((option.selected || i === index) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {

								// Get the specific value for the option
								value = jQuery(option).val();

								// We don't need an array for one selects
								if (one) {
									return value;
								}

								// Multi-Selects return an array
								values.push(value);
							}
						}

						return values;
					},

					set: function set(elem, value) {
						var optionSet,
						    option,
						    options = elem.options,
						    values = jQuery.makeArray(value),
						    i = options.length;

						while (i--) {
							option = options[i];

							/* eslint-disable no-cond-assign */

							if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
								optionSet = true;
							}

							/* eslint-enable no-cond-assign */
						}

						// Force browsers to behave consistently when non-matching value is set
						if (!optionSet) {
							elem.selectedIndex = -1;
						}
						return values;
					}
				}
			}
		});

		// Radios and checkboxes getter/setter
		jQuery.each(["radio", "checkbox"], function () {
			jQuery.valHooks[this] = {
				set: function set(elem, value) {
					if (jQuery.isArray(value)) {
						return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
					}
				}
			};
			if (!support.checkOn) {
				jQuery.valHooks[this].get = function (elem) {
					return elem.getAttribute("value") === null ? "on" : elem.value;
				};
			}
		});

		// Return jQuery for attributes-only inclusion


		var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

		jQuery.extend(jQuery.event, {

			trigger: function trigger(event, data, elem, onlyHandlers) {

				var i,
				    cur,
				    tmp,
				    bubbleType,
				    ontype,
				    handle,
				    special,
				    eventPath = [elem || document],
				    type = hasOwn.call(event, "type") ? event.type : event,
				    namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];

				cur = tmp = elem = elem || document;

				// Don't do events on text and comment nodes
				if (elem.nodeType === 3 || elem.nodeType === 8) {
					return;
				}

				// focus/blur morphs to focusin/out; ensure we're not firing them right now
				if (rfocusMorph.test(type + jQuery.event.triggered)) {
					return;
				}

				if (type.indexOf(".") > -1) {

					// Namespaced trigger; create a regexp to match event type in handle()
					namespaces = type.split(".");
					type = namespaces.shift();
					namespaces.sort();
				}
				ontype = type.indexOf(":") < 0 && "on" + type;

				// Caller can pass in a jQuery.Event object, Object, or just an event type string
				event = event[jQuery.expando] ? event : new jQuery.Event(type, (typeof event === "undefined" ? "undefined" : _typeof(event)) === "object" && event);

				// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
				event.isTrigger = onlyHandlers ? 2 : 3;
				event.namespace = namespaces.join(".");
				event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;

				// Clean up the event in case it is being reused
				event.result = undefined;
				if (!event.target) {
					event.target = elem;
				}

				// Clone any incoming data and prepend the event, creating the handler arg list
				data = data == null ? [event] : jQuery.makeArray(data, [event]);

				// Allow special events to draw outside the lines
				special = jQuery.event.special[type] || {};
				if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
					return;
				}

				// Determine event propagation path in advance, per W3C events spec (#9951)
				// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
				if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {

					bubbleType = special.delegateType || type;
					if (!rfocusMorph.test(bubbleType + type)) {
						cur = cur.parentNode;
					}
					for (; cur; cur = cur.parentNode) {
						eventPath.push(cur);
						tmp = cur;
					}

					// Only add window if we got to document (e.g., not plain obj or detached DOM)
					if (tmp === (elem.ownerDocument || document)) {
						eventPath.push(tmp.defaultView || tmp.parentWindow || window);
					}
				}

				// Fire handlers on the event path
				i = 0;
				while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {

					event.type = i > 1 ? bubbleType : special.bindType || type;

					// jQuery handler
					handle = (dataPriv.get(cur, "events") || {})[event.type] && dataPriv.get(cur, "handle");
					if (handle) {
						handle.apply(cur, data);
					}

					// Native handler
					handle = ontype && cur[ontype];
					if (handle && handle.apply && acceptData(cur)) {
						event.result = handle.apply(cur, data);
						if (event.result === false) {
							event.preventDefault();
						}
					}
				}
				event.type = type;

				// If nobody prevented the default action, do it now
				if (!onlyHandlers && !event.isDefaultPrevented()) {

					if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {

						// Call a native DOM method on the target with the same name as the event.
						// Don't do default actions on window, that's where global variables be (#6170)
						if (ontype && jQuery.isFunction(elem[type]) && !jQuery.isWindow(elem)) {

							// Don't re-trigger an onFOO event when we call its FOO() method
							tmp = elem[ontype];

							if (tmp) {
								elem[ontype] = null;
							}

							// Prevent re-triggering of the same event, since we already bubbled it above
							jQuery.event.triggered = type;
							elem[type]();
							jQuery.event.triggered = undefined;

							if (tmp) {
								elem[ontype] = tmp;
							}
						}
					}
				}

				return event.result;
			},

			// Piggyback on a donor event to simulate a different one
			// Used only for `focus(in | out)` events
			simulate: function simulate(type, elem, event) {
				var e = jQuery.extend(new jQuery.Event(), event, {
					type: type,
					isSimulated: true
				});

				jQuery.event.trigger(e, null, elem);
			}

		});

		jQuery.fn.extend({

			trigger: function trigger(type, data) {
				return this.each(function () {
					jQuery.event.trigger(type, data, this);
				});
			},
			triggerHandler: function triggerHandler(type, data) {
				var elem = this[0];
				if (elem) {
					return jQuery.event.trigger(type, data, elem, true);
				}
			}
		});

		jQuery.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), function (i, name) {

			// Handle event binding
			jQuery.fn[name] = function (data, fn) {
				return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
			};
		});

		jQuery.fn.extend({
			hover: function hover(fnOver, fnOut) {
				return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
			}
		});

		support.focusin = "onfocusin" in window;

		// Support: Firefox <=44
		// Firefox doesn't have focus(in | out) events
		// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
		//
		// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
		// focus(in | out) events fire after focus & blur events,
		// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
		// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
		if (!support.focusin) {
			jQuery.each({ focus: "focusin", blur: "focusout" }, function (orig, fix) {

				// Attach a single capturing handler on the document while someone wants focusin/focusout
				var handler = function handler(event) {
					jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
				};

				jQuery.event.special[fix] = {
					setup: function setup() {
						var doc = this.ownerDocument || this,
						    attaches = dataPriv.access(doc, fix);

						if (!attaches) {
							doc.addEventListener(orig, handler, true);
						}
						dataPriv.access(doc, fix, (attaches || 0) + 1);
					},
					teardown: function teardown() {
						var doc = this.ownerDocument || this,
						    attaches = dataPriv.access(doc, fix) - 1;

						if (!attaches) {
							doc.removeEventListener(orig, handler, true);
							dataPriv.remove(doc, fix);
						} else {
							dataPriv.access(doc, fix, attaches);
						}
					}
				};
			});
		}
		var location = window.location;

		var nonce = jQuery.now();

		var rquery = /\?/;

		// Cross-browser xml parsing
		jQuery.parseXML = function (data) {
			var xml;
			if (!data || typeof data !== "string") {
				return null;
			}

			// Support: IE 9 - 11 only
			// IE throws on parseFromString with invalid input.
			try {
				xml = new window.DOMParser().parseFromString(data, "text/xml");
			} catch (e) {
				xml = undefined;
			}

			if (!xml || xml.getElementsByTagName("parsererror").length) {
				jQuery.error("Invalid XML: " + data);
			}
			return xml;
		};

		var rbracket = /\[\]$/,
		    rCRLF = /\r?\n/g,
		    rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		    rsubmittable = /^(?:input|select|textarea|keygen)/i;

		function buildParams(prefix, obj, traditional, add) {
			var name;

			if (jQuery.isArray(obj)) {

				// Serialize array item.
				jQuery.each(obj, function (i, v) {
					if (traditional || rbracket.test(prefix)) {

						// Treat each array item as a scalar.
						add(prefix, v);
					} else {

						// Item is non-scalar (array or object), encode its numeric index.
						buildParams(prefix + "[" + ((typeof v === "undefined" ? "undefined" : _typeof(v)) === "object" && v != null ? i : "") + "]", v, traditional, add);
					}
				});
			} else if (!traditional && jQuery.type(obj) === "object") {

				// Serialize object item.
				for (name in obj) {
					buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
				}
			} else {

				// Serialize scalar item.
				add(prefix, obj);
			}
		}

		// Serialize an array of form elements or a set of
		// key/values into a query string
		jQuery.param = function (a, traditional) {
			var prefix,
			    s = [],
			    add = function add(key, valueOrFunction) {

				// If value is a function, invoke it and use its return value
				var value = jQuery.isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;

				s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
			};

			// If an array was passed in, assume that it is an array of form elements.
			if (jQuery.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {

				// Serialize the form elements
				jQuery.each(a, function () {
					add(this.name, this.value);
				});
			} else {

				// If traditional, encode the "old" way (the way 1.3.2 or older
				// did it), otherwise encode params recursively.
				for (prefix in a) {
					buildParams(prefix, a[prefix], traditional, add);
				}
			}

			// Return the resulting serialization
			return s.join("&");
		};

		jQuery.fn.extend({
			serialize: function serialize() {
				return jQuery.param(this.serializeArray());
			},
			serializeArray: function serializeArray() {
				return this.map(function () {

					// Can add propHook for "elements" to filter or add form elements
					var elements = jQuery.prop(this, "elements");
					return elements ? jQuery.makeArray(elements) : this;
				}).filter(function () {
					var type = this.type;

					// Use .is( ":disabled" ) so that fieldset[disabled] works
					return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
				}).map(function (i, elem) {
					var val = jQuery(this).val();

					if (val == null) {
						return null;
					}

					if (jQuery.isArray(val)) {
						return jQuery.map(val, function (val) {
							return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
						});
					}

					return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
				}).get();
			}
		});

		var r20 = /%20/g,
		    rhash = /#.*$/,
		    rantiCache = /([?&])_=[^&]*/,
		    rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,


		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		    rnoContent = /^(?:GET|HEAD)$/,
		    rprotocol = /^\/\//,


		/* Prefilters
	  * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	  * 2) These are called:
	  *    - BEFORE asking for a transport
	  *    - AFTER param serialization (s.data is a string if s.processData is true)
	  * 3) key is the dataType
	  * 4) the catchall symbol "*" can be used
	  * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	  */
		prefilters = {},


		/* Transports bindings
	  * 1) key is the dataType
	  * 2) the catchall symbol "*" can be used
	  * 3) selection will start with transport dataType and THEN go to "*" if needed
	  */
		transports = {},


		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat("*"),


		// Anchor tag for parsing the document origin
		originAnchor = document.createElement("a");
		originAnchor.href = location.href;

		// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
		function addToPrefiltersOrTransports(structure) {

			// dataTypeExpression is optional and defaults to "*"
			return function (dataTypeExpression, func) {

				if (typeof dataTypeExpression !== "string") {
					func = dataTypeExpression;
					dataTypeExpression = "*";
				}

				var dataType,
				    i = 0,
				    dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];

				if (jQuery.isFunction(func)) {

					// For each dataType in the dataTypeExpression
					while (dataType = dataTypes[i++]) {

						// Prepend if requested
						if (dataType[0] === "+") {
							dataType = dataType.slice(1) || "*";
							(structure[dataType] = structure[dataType] || []).unshift(func);

							// Otherwise append
						} else {
							(structure[dataType] = structure[dataType] || []).push(func);
						}
					}
				}
			};
		}

		// Base inspection function for prefilters and transports
		function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {

			var inspected = {},
			    seekingTransport = structure === transports;

			function inspect(dataType) {
				var selected;
				inspected[dataType] = true;
				jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
					var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
					if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {

						options.dataTypes.unshift(dataTypeOrTransport);
						inspect(dataTypeOrTransport);
						return false;
					} else if (seekingTransport) {
						return !(selected = dataTypeOrTransport);
					}
				});
				return selected;
			}

			return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
		}

		// A special extend for ajax options
		// that takes "flat" options (not to be deep extended)
		// Fixes #9887
		function ajaxExtend(target, src) {
			var key,
			    deep,
			    flatOptions = jQuery.ajaxSettings.flatOptions || {};

			for (key in src) {
				if (src[key] !== undefined) {
					(flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
				}
			}
			if (deep) {
				jQuery.extend(true, target, deep);
			}

			return target;
		}

		/* Handles responses to an ajax request:
	  * - finds the right dataType (mediates between content-type and expected dataType)
	  * - returns the corresponding response
	  */
		function ajaxHandleResponses(s, jqXHR, responses) {

			var ct,
			    type,
			    finalDataType,
			    firstDataType,
			    contents = s.contents,
			    dataTypes = s.dataTypes;

			// Remove auto dataType and get content-type in the process
			while (dataTypes[0] === "*") {
				dataTypes.shift();
				if (ct === undefined) {
					ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
				}
			}

			// Check if we're dealing with a known content-type
			if (ct) {
				for (type in contents) {
					if (contents[type] && contents[type].test(ct)) {
						dataTypes.unshift(type);
						break;
					}
				}
			}

			// Check to see if we have a response for the expected dataType
			if (dataTypes[0] in responses) {
				finalDataType = dataTypes[0];
			} else {

				// Try convertible dataTypes
				for (type in responses) {
					if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
						finalDataType = type;
						break;
					}
					if (!firstDataType) {
						firstDataType = type;
					}
				}

				// Or just use first one
				finalDataType = finalDataType || firstDataType;
			}

			// If we found a dataType
			// We add the dataType to the list if needed
			// and return the corresponding response
			if (finalDataType) {
				if (finalDataType !== dataTypes[0]) {
					dataTypes.unshift(finalDataType);
				}
				return responses[finalDataType];
			}
		}

		/* Chain conversions given the request and the original response
	  * Also sets the responseXXX fields on the jqXHR instance
	  */
		function ajaxConvert(s, response, jqXHR, isSuccess) {
			var conv2,
			    current,
			    conv,
			    tmp,
			    prev,
			    converters = {},


			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

			// Create converters map with lowercased keys
			if (dataTypes[1]) {
				for (conv in s.converters) {
					converters[conv.toLowerCase()] = s.converters[conv];
				}
			}

			current = dataTypes.shift();

			// Convert to each sequential dataType
			while (current) {

				if (s.responseFields[current]) {
					jqXHR[s.responseFields[current]] = response;
				}

				// Apply the dataFilter if provided
				if (!prev && isSuccess && s.dataFilter) {
					response = s.dataFilter(response, s.dataType);
				}

				prev = current;
				current = dataTypes.shift();

				if (current) {

					// There's only work to do if current dataType is non-auto
					if (current === "*") {

						current = prev;

						// Convert response if prev dataType is non-auto and differs from current
					} else if (prev !== "*" && prev !== current) {

						// Seek a direct converter
						conv = converters[prev + " " + current] || converters["* " + current];

						// If none found, seek a pair
						if (!conv) {
							for (conv2 in converters) {

								// If conv2 outputs current
								tmp = conv2.split(" ");
								if (tmp[1] === current) {

									// If prev can be converted to accepted input
									conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
									if (conv) {

										// Condense equivalence converters
										if (conv === true) {
											conv = converters[conv2];

											// Otherwise, insert the intermediate dataType
										} else if (converters[conv2] !== true) {
											current = tmp[0];
											dataTypes.unshift(tmp[1]);
										}
										break;
									}
								}
							}
						}

						// Apply converter (if not an equivalence)
						if (conv !== true) {

							// Unless errors are allowed to bubble, catch and return them
							if (conv && s.throws) {
								response = conv(response);
							} else {
								try {
									response = conv(response);
								} catch (e) {
									return {
										state: "parsererror",
										error: conv ? e : "No conversion from " + prev + " to " + current
									};
								}
							}
						}
					}
				}
			}

			return { state: "success", data: response };
		}

		jQuery.extend({

			// Counter for holding the number of active queries
			active: 0,

			// Last-Modified header cache for next request
			lastModified: {},
			etag: {},

			ajaxSettings: {
				url: location.href,
				type: "GET",
				isLocal: rlocalProtocol.test(location.protocol),
				global: true,
				processData: true,
				async: true,
				contentType: "application/x-www-form-urlencoded; charset=UTF-8",

				/*
	   timeout: 0,
	   data: null,
	   dataType: null,
	   username: null,
	   password: null,
	   cache: null,
	   throws: false,
	   traditional: false,
	   headers: {},
	   */

				accepts: {
					"*": allTypes,
					text: "text/plain",
					html: "text/html",
					xml: "application/xml, text/xml",
					json: "application/json, text/javascript"
				},

				contents: {
					xml: /\bxml\b/,
					html: /\bhtml/,
					json: /\bjson\b/
				},

				responseFields: {
					xml: "responseXML",
					text: "responseText",
					json: "responseJSON"
				},

				// Data converters
				// Keys separate source (or catchall "*") and destination types with a single space
				converters: {

					// Convert anything to text
					"* text": String,

					// Text to html (true = no transformation)
					"text html": true,

					// Evaluate text as a json expression
					"text json": JSON.parse,

					// Parse text as xml
					"text xml": jQuery.parseXML
				},

				// For options that shouldn't be deep extended:
				// you can add your own custom options here if
				// and when you create one that shouldn't be
				// deep extended (see ajaxExtend)
				flatOptions: {
					url: true,
					context: true
				}
			},

			// Creates a full fledged settings object into target
			// with both ajaxSettings and settings fields.
			// If target is omitted, writes into ajaxSettings.
			ajaxSetup: function ajaxSetup(target, settings) {
				return settings ?

				// Building a settings object
				ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) :

				// Extending ajaxSettings
				ajaxExtend(jQuery.ajaxSettings, target);
			},

			ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
			ajaxTransport: addToPrefiltersOrTransports(transports),

			// Main method
			ajax: function ajax(url, options) {

				// If url is an object, simulate pre-1.5 signature
				if ((typeof url === "undefined" ? "undefined" : _typeof(url)) === "object") {
					options = url;
					url = undefined;
				}

				// Force options to be an object
				options = options || {};

				var transport,


				// URL without anti-cache param
				cacheURL,


				// Response headers
				responseHeadersString,
				    responseHeaders,


				// timeout handle
				timeoutTimer,


				// Url cleanup var
				urlAnchor,


				// Request state (becomes false upon send and true upon completion)
				completed,


				// To know if global events are to be dispatched
				fireGlobals,


				// Loop variable
				i,


				// uncached part of the url
				uncached,


				// Create the final options object
				s = jQuery.ajaxSetup({}, options),


				// Callbacks context
				callbackContext = s.context || s,


				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,


				// Deferreds
				deferred = jQuery.Deferred(),
				    completeDeferred = jQuery.Callbacks("once memory"),


				// Status-dependent callbacks
				_statusCode = s.statusCode || {},


				// Headers (they are sent all at once)
				requestHeaders = {},
				    requestHeadersNames = {},


				// Default abort message
				strAbort = "canceled",


				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function getResponseHeader(key) {
						var match;
						if (completed) {
							if (!responseHeaders) {
								responseHeaders = {};
								while (match = rheaders.exec(responseHeadersString)) {
									responseHeaders[match[1].toLowerCase()] = match[2];
								}
							}
							match = responseHeaders[key.toLowerCase()];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function getAllResponseHeaders() {
						return completed ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function setRequestHeader(name, value) {
						if (completed == null) {
							name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
							requestHeaders[name] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function overrideMimeType(type) {
						if (completed == null) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function statusCode(map) {
						var code;
						if (map) {
							if (completed) {

								// Execute the appropriate callbacks
								jqXHR.always(map[jqXHR.status]);
							} else {

								// Lazy-add the new callbacks in a way that preserves old ones
								for (code in map) {
									_statusCode[code] = [_statusCode[code], map[code]];
								}
							}
						}
						return this;
					},

					// Cancel the request
					abort: function abort(statusText) {
						var finalText = statusText || strAbort;
						if (transport) {
							transport.abort(finalText);
						}
						done(0, finalText);
						return this;
					}
				};

				// Attach deferreds
				deferred.promise(jqXHR);

				// Add protocol if not provided (prefilters might expect it)
				// Handle falsy url in the settings object (#10093: consistency with old signature)
				// We also use the url parameter if available
				s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//");

				// Alias method option to type as per ticket #12004
				s.type = options.method || options.type || s.method || s.type;

				// Extract dataTypes list
				s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];

				// A cross-domain request is in order when the origin doesn't match the current origin.
				if (s.crossDomain == null) {
					urlAnchor = document.createElement("a");

					// Support: IE <=8 - 11, Edge 12 - 13
					// IE throws exception on accessing the href property if url is malformed,
					// e.g. http://example.com:80x/
					try {
						urlAnchor.href = s.url;

						// Support: IE <=8 - 11 only
						// Anchor's host property isn't correctly set when s.url is relative
						urlAnchor.href = urlAnchor.href;
						s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
					} catch (e) {

						// If there is an error parsing the URL, assume it is crossDomain,
						// it can be rejected by the transport if it is invalid
						s.crossDomain = true;
					}
				}

				// Convert data if not already a string
				if (s.data && s.processData && typeof s.data !== "string") {
					s.data = jQuery.param(s.data, s.traditional);
				}

				// Apply prefilters
				inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);

				// If request was aborted inside a prefilter, stop there
				if (completed) {
					return jqXHR;
				}

				// We can fire global events as of now if asked to
				// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
				fireGlobals = jQuery.event && s.global;

				// Watch for a new set of requests
				if (fireGlobals && jQuery.active++ === 0) {
					jQuery.event.trigger("ajaxStart");
				}

				// Uppercase the type
				s.type = s.type.toUpperCase();

				// Determine if request has content
				s.hasContent = !rnoContent.test(s.type);

				// Save the URL in case we're toying with the If-Modified-Since
				// and/or If-None-Match header later on
				// Remove hash to simplify url manipulation
				cacheURL = s.url.replace(rhash, "");

				// More options handling for requests with no content
				if (!s.hasContent) {

					// Remember the hash so we can put it back
					uncached = s.url.slice(cacheURL.length);

					// If data is available, append data to url
					if (s.data) {
						cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;

						// #9682: remove data so that it's not used in an eventual retry
						delete s.data;
					}

					// Add or update anti-cache param if needed
					if (s.cache === false) {
						cacheURL = cacheURL.replace(rantiCache, "$1");
						uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++ + uncached;
					}

					// Put hash and anti-cache on the URL that will be requested (gh-1732)
					s.url = cacheURL + uncached;

					// Change '%20' to '+' if this is encoded form body content (gh-2658)
				} else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
					s.data = s.data.replace(r20, "+");
				}

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if (s.ifModified) {
					if (jQuery.lastModified[cacheURL]) {
						jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
					}
					if (jQuery.etag[cacheURL]) {
						jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
					}
				}

				// Set the correct header, if data is being sent
				if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
					jqXHR.setRequestHeader("Content-Type", s.contentType);
				}

				// Set the Accepts header for the server, depending on the dataType
				jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);

				// Check for headers option
				for (i in s.headers) {
					jqXHR.setRequestHeader(i, s.headers[i]);
				}

				// Allow custom headers/mimetypes and early abort
				if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) {

					// Abort if not done already and return
					return jqXHR.abort();
				}

				// Aborting is no longer a cancellation
				strAbort = "abort";

				// Install callbacks on deferreds
				completeDeferred.add(s.complete);
				jqXHR.done(s.success);
				jqXHR.fail(s.error);

				// Get transport
				transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);

				// If no transport, we auto-abort
				if (!transport) {
					done(-1, "No Transport");
				} else {
					jqXHR.readyState = 1;

					// Send global event
					if (fireGlobals) {
						globalEventContext.trigger("ajaxSend", [jqXHR, s]);
					}

					// If request was aborted inside ajaxSend, stop there
					if (completed) {
						return jqXHR;
					}

					// Timeout
					if (s.async && s.timeout > 0) {
						timeoutTimer = window.setTimeout(function () {
							jqXHR.abort("timeout");
						}, s.timeout);
					}

					try {
						completed = false;
						transport.send(requestHeaders, done);
					} catch (e) {

						// Rethrow post-completion exceptions
						if (completed) {
							throw e;
						}

						// Propagate others as results
						done(-1, e);
					}
				}

				// Callback for when everything is done
				function done(status, nativeStatusText, responses, headers) {
					var isSuccess,
					    success,
					    error,
					    response,
					    modified,
					    statusText = nativeStatusText;

					// Ignore repeat invocations
					if (completed) {
						return;
					}

					completed = true;

					// Clear timeout if it exists
					if (timeoutTimer) {
						window.clearTimeout(timeoutTimer);
					}

					// Dereference transport for early garbage collection
					// (no matter how long the jqXHR object will be used)
					transport = undefined;

					// Cache response headers
					responseHeadersString = headers || "";

					// Set readyState
					jqXHR.readyState = status > 0 ? 4 : 0;

					// Determine if successful
					isSuccess = status >= 200 && status < 300 || status === 304;

					// Get response data
					if (responses) {
						response = ajaxHandleResponses(s, jqXHR, responses);
					}

					// Convert no matter what (that way responseXXX fields are always set)
					response = ajaxConvert(s, response, jqXHR, isSuccess);

					// If successful, handle type chaining
					if (isSuccess) {

						// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
						if (s.ifModified) {
							modified = jqXHR.getResponseHeader("Last-Modified");
							if (modified) {
								jQuery.lastModified[cacheURL] = modified;
							}
							modified = jqXHR.getResponseHeader("etag");
							if (modified) {
								jQuery.etag[cacheURL] = modified;
							}
						}

						// if no content
						if (status === 204 || s.type === "HEAD") {
							statusText = "nocontent";

							// if not modified
						} else if (status === 304) {
							statusText = "notmodified";

							// If we have data, let's convert it
						} else {
							statusText = response.state;
							success = response.data;
							error = response.error;
							isSuccess = !error;
						}
					} else {

						// Extract error from statusText and normalize for non-aborts
						error = statusText;
						if (status || !statusText) {
							statusText = "error";
							if (status < 0) {
								status = 0;
							}
						}
					}

					// Set data for the fake xhr object
					jqXHR.status = status;
					jqXHR.statusText = (nativeStatusText || statusText) + "";

					// Success/Error
					if (isSuccess) {
						deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
					} else {
						deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
					}

					// Status-dependent callbacks
					jqXHR.statusCode(_statusCode);
					_statusCode = undefined;

					if (fireGlobals) {
						globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
					}

					// Complete
					completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);

					if (fireGlobals) {
						globalEventContext.trigger("ajaxComplete", [jqXHR, s]);

						// Handle the global AJAX counter
						if (! --jQuery.active) {
							jQuery.event.trigger("ajaxStop");
						}
					}
				}

				return jqXHR;
			},

			getJSON: function getJSON(url, data, callback) {
				return jQuery.get(url, data, callback, "json");
			},

			getScript: function getScript(url, callback) {
				return jQuery.get(url, undefined, callback, "script");
			}
		});

		jQuery.each(["get", "post"], function (i, method) {
			jQuery[method] = function (url, data, callback, type) {

				// Shift arguments if data argument was omitted
				if (jQuery.isFunction(data)) {
					type = type || callback;
					callback = data;
					data = undefined;
				}

				// The url can be an options object (which then must have .url)
				return jQuery.ajax(jQuery.extend({
					url: url,
					type: method,
					dataType: type,
					data: data,
					success: callback
				}, jQuery.isPlainObject(url) && url));
			};
		});

		jQuery._evalUrl = function (url) {
			return jQuery.ajax({
				url: url,

				// Make this explicit, since user can override this through ajaxSetup (#11264)
				type: "GET",
				dataType: "script",
				cache: true,
				async: false,
				global: false,
				"throws": true
			});
		};

		jQuery.fn.extend({
			wrapAll: function wrapAll(html) {
				var wrap;

				if (this[0]) {
					if (jQuery.isFunction(html)) {
						html = html.call(this[0]);
					}

					// The elements to wrap the target around
					wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);

					if (this[0].parentNode) {
						wrap.insertBefore(this[0]);
					}

					wrap.map(function () {
						var elem = this;

						while (elem.firstElementChild) {
							elem = elem.firstElementChild;
						}

						return elem;
					}).append(this);
				}

				return this;
			},

			wrapInner: function wrapInner(html) {
				if (jQuery.isFunction(html)) {
					return this.each(function (i) {
						jQuery(this).wrapInner(html.call(this, i));
					});
				}

				return this.each(function () {
					var self = jQuery(this),
					    contents = self.contents();

					if (contents.length) {
						contents.wrapAll(html);
					} else {
						self.append(html);
					}
				});
			},

			wrap: function wrap(html) {
				var isFunction = jQuery.isFunction(html);

				return this.each(function (i) {
					jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
				});
			},

			unwrap: function unwrap(selector) {
				this.parent(selector).not("body").each(function () {
					jQuery(this).replaceWith(this.childNodes);
				});
				return this;
			}
		});

		jQuery.expr.pseudos.hidden = function (elem) {
			return !jQuery.expr.pseudos.visible(elem);
		};
		jQuery.expr.pseudos.visible = function (elem) {
			return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
		};

		jQuery.ajaxSettings.xhr = function () {
			try {
				return new window.XMLHttpRequest();
			} catch (e) {}
		};

		var xhrSuccessStatus = {

			// File protocol always yields status code 0, assume 200
			0: 200,

			// Support: IE <=9 only
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		    xhrSupported = jQuery.ajaxSettings.xhr();

		support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
		support.ajax = xhrSupported = !!xhrSupported;

		jQuery.ajaxTransport(function (options) {
			var _callback, errorCallback;

			// Cross domain only allowed if supported through XMLHttpRequest
			if (support.cors || xhrSupported && !options.crossDomain) {
				return {
					send: function send(headers, complete) {
						var i,
						    xhr = options.xhr();

						xhr.open(options.type, options.url, options.async, options.username, options.password);

						// Apply custom fields if provided
						if (options.xhrFields) {
							for (i in options.xhrFields) {
								xhr[i] = options.xhrFields[i];
							}
						}

						// Override mime type if needed
						if (options.mimeType && xhr.overrideMimeType) {
							xhr.overrideMimeType(options.mimeType);
						}

						// X-Requested-With header
						// For cross-domain requests, seeing as conditions for a preflight are
						// akin to a jigsaw puzzle, we simply never set it to be sure.
						// (it can always be set on a per-request basis or even using ajaxSetup)
						// For same-domain requests, won't change header if already provided.
						if (!options.crossDomain && !headers["X-Requested-With"]) {
							headers["X-Requested-With"] = "XMLHttpRequest";
						}

						// Set headers
						for (i in headers) {
							xhr.setRequestHeader(i, headers[i]);
						}

						// Callback
						_callback = function callback(type) {
							return function () {
								if (_callback) {
									_callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

									if (type === "abort") {
										xhr.abort();
									} else if (type === "error") {

										// Support: IE <=9 only
										// On a manual native abort, IE9 throws
										// errors on any property access that is not readyState
										if (typeof xhr.status !== "number") {
											complete(0, "error");
										} else {
											complete(

											// File: protocol always yields status 0; see #8605, #14207
											xhr.status, xhr.statusText);
										}
									} else {
										complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText,

										// Support: IE <=9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										(xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? { binary: xhr.response } : { text: xhr.responseText }, xhr.getAllResponseHeaders());
									}
								}
							};
						};

						// Listen to events
						xhr.onload = _callback();
						errorCallback = xhr.onerror = _callback("error");

						// Support: IE 9 only
						// Use onreadystatechange to replace onabort
						// to handle uncaught aborts
						if (xhr.onabort !== undefined) {
							xhr.onabort = errorCallback;
						} else {
							xhr.onreadystatechange = function () {

								// Check readyState before timeout as it changes
								if (xhr.readyState === 4) {

									// Allow onerror to be called first,
									// but that will not handle a native abort
									// Also, save errorCallback to a variable
									// as xhr.onerror cannot be accessed
									window.setTimeout(function () {
										if (_callback) {
											errorCallback();
										}
									});
								}
							};
						}

						// Create the abort callback
						_callback = _callback("abort");

						try {

							// Do send the request (this may raise an exception)
							xhr.send(options.hasContent && options.data || null);
						} catch (e) {

							// #14683: Only rethrow if this hasn't been notified as an error yet
							if (_callback) {
								throw e;
							}
						}
					},

					abort: function abort() {
						if (_callback) {
							_callback();
						}
					}
				};
			}
		});

		// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
		jQuery.ajaxPrefilter(function (s) {
			if (s.crossDomain) {
				s.contents.script = false;
			}
		});

		// Install script dataType
		jQuery.ajaxSetup({
			accepts: {
				script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
			},
			contents: {
				script: /\b(?:java|ecma)script\b/
			},
			converters: {
				"text script": function textScript(text) {
					jQuery.globalEval(text);
					return text;
				}
			}
		});

		// Handle cache's special case and crossDomain
		jQuery.ajaxPrefilter("script", function (s) {
			if (s.cache === undefined) {
				s.cache = false;
			}
			if (s.crossDomain) {
				s.type = "GET";
			}
		});

		// Bind script tag hack transport
		jQuery.ajaxTransport("script", function (s) {

			// This transport only deals with cross domain requests
			if (s.crossDomain) {
				var script, _callback2;
				return {
					send: function send(_, complete) {
						script = jQuery("<script>").prop({
							charset: s.scriptCharset,
							src: s.url
						}).on("load error", _callback2 = function callback(evt) {
							script.remove();
							_callback2 = null;
							if (evt) {
								complete(evt.type === "error" ? 404 : 200, evt.type);
							}
						});

						// Use native DOM manipulation to avoid our domManip AJAX trickery
						document.head.appendChild(script[0]);
					},
					abort: function abort() {
						if (_callback2) {
							_callback2();
						}
					}
				};
			}
		});

		var oldCallbacks = [],
		    rjsonp = /(=)\?(?=&|$)|\?\?/;

		// Default jsonp settings
		jQuery.ajaxSetup({
			jsonp: "callback",
			jsonpCallback: function jsonpCallback() {
				var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
				this[callback] = true;
				return callback;
			}
		});

		// Detect, normalize options and install callbacks for jsonp requests
		jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {

			var callbackName,
			    overwritten,
			    responseContainer,
			    jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");

			// Handle iff the expected data type is "jsonp" or we have a parameter to set
			if (jsonProp || s.dataTypes[0] === "jsonp") {

				// Get callback name, remembering preexisting value associated with it
				callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;

				// Insert callback into url or form data
				if (jsonProp) {
					s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
				} else if (s.jsonp !== false) {
					s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
				}

				// Use data converter to retrieve json after script execution
				s.converters["script json"] = function () {
					if (!responseContainer) {
						jQuery.error(callbackName + " was not called");
					}
					return responseContainer[0];
				};

				// Force json dataType
				s.dataTypes[0] = "json";

				// Install callback
				overwritten = window[callbackName];
				window[callbackName] = function () {
					responseContainer = arguments;
				};

				// Clean-up function (fires after converters)
				jqXHR.always(function () {

					// If previous value didn't exist - remove it
					if (overwritten === undefined) {
						jQuery(window).removeProp(callbackName);

						// Otherwise restore preexisting value
					} else {
						window[callbackName] = overwritten;
					}

					// Save back as free
					if (s[callbackName]) {

						// Make sure that re-using the options doesn't screw things around
						s.jsonpCallback = originalSettings.jsonpCallback;

						// Save the callback name for future use
						oldCallbacks.push(callbackName);
					}

					// Call if it was a function and we have a response
					if (responseContainer && jQuery.isFunction(overwritten)) {
						overwritten(responseContainer[0]);
					}

					responseContainer = overwritten = undefined;
				});

				// Delegate to script
				return "script";
			}
		});

		// Support: Safari 8 only
		// In Safari 8 documents created via document.implementation.createHTMLDocument
		// collapse sibling forms: the second one becomes a child of the first one.
		// Because of that, this security measure has to be disabled in Safari 8.
		// https://bugs.webkit.org/show_bug.cgi?id=137337
		support.createHTMLDocument = function () {
			var body = document.implementation.createHTMLDocument("").body;
			body.innerHTML = "<form></form><form></form>";
			return body.childNodes.length === 2;
		}();

		// Argument "data" should be string of html
		// context (optional): If specified, the fragment will be created in this context,
		// defaults to document
		// keepScripts (optional): If true, will include scripts passed in the html string
		jQuery.parseHTML = function (data, context, keepScripts) {
			if (typeof data !== "string") {
				return [];
			}
			if (typeof context === "boolean") {
				keepScripts = context;
				context = false;
			}

			var base, parsed, scripts;

			if (!context) {

				// Stop scripts or inline event handlers from being executed immediately
				// by using document.implementation
				if (support.createHTMLDocument) {
					context = document.implementation.createHTMLDocument("");

					// Set the base href for the created document
					// so any parsed elements with URLs
					// are based on the document's URL (gh-2965)
					base = context.createElement("base");
					base.href = document.location.href;
					context.head.appendChild(base);
				} else {
					context = document;
				}
			}

			parsed = rsingleTag.exec(data);
			scripts = !keepScripts && [];

			// Single tag
			if (parsed) {
				return [context.createElement(parsed[1])];
			}

			parsed = buildFragment([data], context, scripts);

			if (scripts && scripts.length) {
				jQuery(scripts).remove();
			}

			return jQuery.merge([], parsed.childNodes);
		};

		/**
	  * Load a url into a page
	  */
		jQuery.fn.load = function (url, params, callback) {
			var selector,
			    type,
			    response,
			    self = this,
			    off = url.indexOf(" ");

			if (off > -1) {
				selector = stripAndCollapse(url.slice(off));
				url = url.slice(0, off);
			}

			// If it's a function
			if (jQuery.isFunction(params)) {

				// We assume that it's the callback
				callback = params;
				params = undefined;

				// Otherwise, build a param string
			} else if (params && (typeof params === "undefined" ? "undefined" : _typeof(params)) === "object") {
				type = "POST";
			}

			// If we have elements to modify, make the request
			if (self.length > 0) {
				jQuery.ajax({
					url: url,

					// If "type" variable is undefined, then "GET" method will be used.
					// Make value of this field explicit since
					// user can override it through ajaxSetup method
					type: type || "GET",
					dataType: "html",
					data: params
				}).done(function (responseText) {

					// Save response for use in complete callback
					response = arguments;

					self.html(selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) :

					// Otherwise use the full result
					responseText);

					// If the request succeeds, this function gets "data", "status", "jqXHR"
					// but they are ignored because response was set above.
					// If it fails, this function gets "jqXHR", "status", "error"
				}).always(callback && function (jqXHR, status) {
					self.each(function () {
						callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
					});
				});
			}

			return this;
		};

		// Attach a bunch of functions for handling common AJAX events
		jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (i, type) {
			jQuery.fn[type] = function (fn) {
				return this.on(type, fn);
			};
		});

		jQuery.expr.pseudos.animated = function (elem) {
			return jQuery.grep(jQuery.timers, function (fn) {
				return elem === fn.elem;
			}).length;
		};

		/**
	  * Gets a window from an element
	  */
		function getWindow(elem) {
			return jQuery.isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
		}

		jQuery.offset = {
			setOffset: function setOffset(elem, options, i) {
				var curPosition,
				    curLeft,
				    curCSSTop,
				    curTop,
				    curOffset,
				    curCSSLeft,
				    calculatePosition,
				    position = jQuery.css(elem, "position"),
				    curElem = jQuery(elem),
				    props = {};

				// Set position first, in-case top/left are set even on static elem
				if (position === "static") {
					elem.style.position = "relative";
				}

				curOffset = curElem.offset();
				curCSSTop = jQuery.css(elem, "top");
				curCSSLeft = jQuery.css(elem, "left");
				calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;

				// Need to be able to calculate position if either
				// top or left is auto and position is either absolute or fixed
				if (calculatePosition) {
					curPosition = curElem.position();
					curTop = curPosition.top;
					curLeft = curPosition.left;
				} else {
					curTop = parseFloat(curCSSTop) || 0;
					curLeft = parseFloat(curCSSLeft) || 0;
				}

				if (jQuery.isFunction(options)) {

					// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
					options = options.call(elem, i, jQuery.extend({}, curOffset));
				}

				if (options.top != null) {
					props.top = options.top - curOffset.top + curTop;
				}
				if (options.left != null) {
					props.left = options.left - curOffset.left + curLeft;
				}

				if ("using" in options) {
					options.using.call(elem, props);
				} else {
					curElem.css(props);
				}
			}
		};

		jQuery.fn.extend({
			offset: function offset(options) {

				// Preserve chaining for setter
				if (arguments.length) {
					return options === undefined ? this : this.each(function (i) {
						jQuery.offset.setOffset(this, options, i);
					});
				}

				var docElem,
				    win,
				    rect,
				    doc,
				    elem = this[0];

				if (!elem) {
					return;
				}

				// Support: IE <=11 only
				// Running getBoundingClientRect on a
				// disconnected node in IE throws an error
				if (!elem.getClientRects().length) {
					return { top: 0, left: 0 };
				}

				rect = elem.getBoundingClientRect();

				// Make sure element is not hidden (display: none)
				if (rect.width || rect.height) {
					doc = elem.ownerDocument;
					win = getWindow(doc);
					docElem = doc.documentElement;

					return {
						top: rect.top + win.pageYOffset - docElem.clientTop,
						left: rect.left + win.pageXOffset - docElem.clientLeft
					};
				}

				// Return zeros for disconnected and hidden elements (gh-2310)
				return rect;
			},

			position: function position() {
				if (!this[0]) {
					return;
				}

				var offsetParent,
				    offset,
				    elem = this[0],
				    parentOffset = { top: 0, left: 0 };

				// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
				// because it is its only offset parent
				if (jQuery.css(elem, "position") === "fixed") {

					// Assume getBoundingClientRect is there when computed position is fixed
					offset = elem.getBoundingClientRect();
				} else {

					// Get *real* offsetParent
					offsetParent = this.offsetParent();

					// Get correct offsets
					offset = this.offset();
					if (!jQuery.nodeName(offsetParent[0], "html")) {
						parentOffset = offsetParent.offset();
					}

					// Add offsetParent borders
					parentOffset = {
						top: parentOffset.top + jQuery.css(offsetParent[0], "borderTopWidth", true),
						left: parentOffset.left + jQuery.css(offsetParent[0], "borderLeftWidth", true)
					};
				}

				// Subtract parent offsets and element margins
				return {
					top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
					left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
				};
			},

			// This method will return documentElement in the following cases:
			// 1) For the element inside the iframe without offsetParent, this method will return
			//    documentElement of the parent window
			// 2) For the hidden or detached element
			// 3) For body or html element, i.e. in case of the html node - it will return itself
			//
			// but those exceptions were never presented as a real life use-cases
			// and might be considered as more preferable results.
			//
			// This logic, however, is not guaranteed and can change at any point in the future
			offsetParent: function offsetParent() {
				return this.map(function () {
					var offsetParent = this.offsetParent;

					while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
						offsetParent = offsetParent.offsetParent;
					}

					return offsetParent || documentElement;
				});
			}
		});

		// Create scrollLeft and scrollTop methods
		jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (method, prop) {
			var top = "pageYOffset" === prop;

			jQuery.fn[method] = function (val) {
				return access(this, function (elem, method, val) {
					var win = getWindow(elem);

					if (val === undefined) {
						return win ? win[prop] : elem[method];
					}

					if (win) {
						win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset);
					} else {
						elem[method] = val;
					}
				}, method, val, arguments.length);
			};
		});

		// Support: Safari <=7 - 9.1, Chrome <=37 - 49
		// Add the top/left cssHooks using jQuery.fn.position
		// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
		// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
		// getComputedStyle returns percent when specified for top/left/bottom/right;
		// rather than make the css module depend on the offset module, just check for it here
		jQuery.each(["top", "left"], function (i, prop) {
			jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function (elem, computed) {
				if (computed) {
					computed = curCSS(elem, prop);

					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
				}
			});
		});

		// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
		jQuery.each({ Height: "height", Width: "width" }, function (name, type) {
			jQuery.each({ padding: "inner" + name, content: type, "": "outer" + name }, function (defaultExtra, funcName) {

				// Margin is only for outerHeight, outerWidth
				jQuery.fn[funcName] = function (margin, value) {
					var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
					    extra = defaultExtra || (margin === true || value === true ? "margin" : "border");

					return access(this, function (elem, type, value) {
						var doc;

						if (jQuery.isWindow(elem)) {

							// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
							return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
						}

						// Get document width or height
						if (elem.nodeType === 9) {
							doc = elem.documentElement;

							// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
							// whichever is greatest
							return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
						}

						return value === undefined ?

						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css(elem, type, extra) :

						// Set width or height on the element
						jQuery.style(elem, type, value, extra);
					}, type, chainable ? margin : undefined, chainable);
				};
			});
		});

		jQuery.fn.extend({

			bind: function bind(types, data, fn) {
				return this.on(types, null, data, fn);
			},
			unbind: function unbind(types, fn) {
				return this.off(types, null, fn);
			},

			delegate: function delegate(selector, types, data, fn) {
				return this.on(types, selector, data, fn);
			},
			undelegate: function undelegate(selector, types, fn) {

				// ( namespace ) or ( selector, types [, fn] )
				return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
			}
		});

		jQuery.parseJSON = JSON.parse;

		// Register as a named AMD module, since jQuery can be concatenated with other
		// files that may use define, but not via a proper concatenation script that
		// understands anonymous AMD modules. A named AMD is safest and most robust
		// way to register. Lowercase jquery is used because AMD module names are
		// derived from file names, and jQuery is normally delivered in a lowercase
		// file name. Do this after creating the global so that if an AMD module wants
		// to call noConflict to hide this version of jQuery, it will work.

		// Note that for maximum portability, libraries that are not jQuery should
		// declare themselves as anonymous modules, and avoid setting a global if an
		// AMD loader is present. jQuery is a special case. For more information, see
		// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

		if (true) {
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return jQuery;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		}

		var

		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,


		// Map over the $ in case of overwrite
		_$ = window.$;

		jQuery.noConflict = function (deep) {
			if (window.$ === jQuery) {
				window.$ = _$;
			}

			if (deep && window.jQuery === jQuery) {
				window.jQuery = _jQuery;
			}

			return jQuery;
		};

		// Expose jQuery and $ identifiers, even in AMD
		// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
		// and CommonJS for browser emulators (#13566)
		if (!noGlobal) {
			window.jQuery = window.$ = jQuery;
		}

		return jQuery;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (module) {
		if (!module.webpackPolyfill) {
			module.deprecate = function () {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	// THIS FILE IS GENERATED - DO NOT EDIT!
	/*!mobile-detect v1.3.6 2017-04-05*/
	/*global module:false, define:false*/
	/*jshint latedef:false*/
	/*!@license Copyright 2013, Heinrich Goebl, License: MIT, see https://github.com/hgoebl/mobile-detect.js*/
	(function (define, undefined) {
	    define(function () {
	        'use strict';

	        var impl = {};

	        impl.mobileDetectRules = {
	            "phones": {
	                "iPhone": "\\biPhone\\b|\\biPod\\b",
	                "BlackBerry": "BlackBerry|\\bBB10\\b|rim[0-9]+",
	                "HTC": "HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m",
	                "Nexus": "Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6",
	                "Dell": "Dell.*Streak|Dell.*Aero|Dell.*Venue|DELL.*Venue Pro|Dell Flash|Dell Smoke|Dell Mini 3iX|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",
	                "Motorola": "Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b",
	                "Samsung": "\\bSamsung\\b|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F|SM-G920F|SM-G920V|SM-G930F|SM-N910C",
	                "LG": "\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323)",
	                "Sony": "SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533",
	                "Asus": "Asus.*Galaxy|PadFone.*Mobile",
	                "NokiaLumia": "Lumia [0-9]{3,4}",
	                "Micromax": "Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",
	                "Palm": "PalmSource|Palm",
	                "Vertu": "Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",
	                "Pantech": "PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",
	                "Fly": "IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",
	                "Wiko": "KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM",
	                "iMobile": "i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",
	                "SimValley": "\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",
	                "Wolfgang": "AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",
	                "Alcatel": "Alcatel",
	                "Nintendo": "Nintendo 3DS",
	                "Amoi": "Amoi",
	                "INQ": "INQ",
	                "GenericPhone": "Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser"
	            },
	            "tablets": {
	                "iPad": "iPad|iPad.*Mobile",
	                "NexusTablet": "Android.*Nexus[\\s]+(7|9|10)",
	                "SamsungTablet": "SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|SM-T713|SM-T719|SM-T813|SM-T819|SM-T580|SM-T355Y|SM-T280|SM-T817A|SM-T820|SM-W700|SM-P580|SM-T587",
	                "Kindle": "Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI|KFFOWI|KFGIWI|KFMEWI)\\b|Android.*Silk\/[0-9.]+ like Chrome\/[0-9.]+ (?!Mobile)",
	                "SurfaceTablet": "Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",
	                "HPTablet": "HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",
	                "AsusTablet": "^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K011 | K017 | K01E |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C|P01Y|PO1MA|P01Z",
	                "BlackBerryTablet": "PlayBook|RIM Tablet",
	                "HTCtablet": "HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",
	                "MotorolaTablet": "xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",
	                "NookTablet": "Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",
	                "AcerTablet": "Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|\\bA3-A20\\b|\\bA3-A30",
	                "ToshibaTablet": "Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",
	                "LGTablet": "\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",
	                "FujitsuTablet": "Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",
	                "PrestigioTablet": "PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002",
	                "LenovoTablet": "Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-X90L|YT3-X90F|YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)",
	                "DellTablet": "Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",
	                "YarvikTablet": "Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",
	                "MedionTablet": "Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",
	                "ArnovaTablet": "97G4|AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",
	                "IntensoTablet": "INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",
	                "IRUTablet": "M702pro",
	                "MegafonTablet": "MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",
	                "EbodaTablet": "E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",
	                "AllViewTablet": "Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",
	                "ArchosTablet": "\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|c|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",
	                "AinolTablet": "NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",
	                "NokiaLumiaTablet": "Lumia 2520",
	                "SonyTablet": "Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP612|SOT31",
	                "PhilipsTablet": "\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",
	                "CubeTablet": "Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",
	                "CobyTablet": "MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",
	                "MIDTablet": "M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10",
	                "MSITablet": "MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",
	                "SMiTTablet": "Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",
	                "RockChipTablet": "Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",
	                "FlyTablet": "IQ310|Fly Vision",
	                "bqTablet": "Android.*(bq)?.*(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris [E|M]10)|Maxwell.*Lite|Maxwell.*Plus",
	                "HuaweiTablet": "MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim",
	                "NecTablet": "\\bN-06D|\\bN-08D",
	                "PantechTablet": "Pantech.*P4100",
	                "BronchoTablet": "Broncho.*(N701|N708|N802|a710)",
	                "VersusTablet": "TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",
	                "ZyncTablet": "z1000|Z99 2G|z99|z930|z999|z990|z909|Z919|z900",
	                "PositivoTablet": "TB07STA|TB10STA|TB07FTA|TB10FTA",
	                "NabiTablet": "Android.*\\bNabi",
	                "KoboTablet": "Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",
	                "DanewTablet": "DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",
	                "TexetTablet": "NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",
	                "PlaystationTablet": "Playstation.*(Portable|Vita)",
	                "TrekstorTablet": "ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",
	                "PyleAudioTablet": "\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",
	                "AdvanTablet": "Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",
	                "DanyTechTablet": "Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",
	                "GalapadTablet": "Android.*\\bG1\\b",
	                "MicromaxTablet": "Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",
	                "KarbonnTablet": "Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",
	                "AllFineTablet": "Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",
	                "PROSCANTablet": "\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",
	                "YONESTablet": "BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",
	                "ChangJiaTablet": "TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",
	                "GUTablet": "TX-A1301|TX-M9002|Q702|kf026",
	                "PointOfViewTablet": "TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",
	                "OvermaxTablet": "OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)",
	                "HCLTablet": "HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",
	                "DPSTablet": "DPS Dream 9|DPS Dual 7",
	                "VistureTablet": "V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",
	                "CrestaTablet": "CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",
	                "MediatekTablet": "\\bMT8125|MT8389|MT8135|MT8377\\b",
	                "ConcordeTablet": "Concorde([ ]+)?Tab|ConCorde ReadMan",
	                "GoCleverTablet": "GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",
	                "ModecomTablet": "FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",
	                "VoninoTablet": "\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",
	                "ECSTablet": "V07OT2|TM105A|S10OT1|TR10CS1",
	                "StorexTablet": "eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",
	                "VodafoneTablet": "SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497",
	                "EssentielBTablet": "Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",
	                "RossMoorTablet": "RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",
	                "iMobileTablet": "i-mobile i-note",
	                "TolinoTablet": "tolino tab [0-9.]+|tolino shine",
	                "AudioSonicTablet": "\\bC-22Q|T7-QC|T-17B|T-17P\\b",
	                "AMPETablet": "Android.* A78 ",
	                "SkkTablet": "Android.* (SKYPAD|PHOENIX|CYCLOPS)",
	                "TecnoTablet": "TECNO P9",
	                "JXDTablet": "Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",
	                "iJoyTablet": "Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",
	                "FX2Tablet": "FX2 PAD7|FX2 PAD10",
	                "XoroTablet": "KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",
	                "ViewsonicTablet": "ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",
	                "OdysTablet": "LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",
	                "CaptivaTablet": "CAPTIVA PAD",
	                "IconbitTablet": "NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",
	                "TeclastTablet": "T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",
	                "OndaTablet": "\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+",
	                "JaytechTablet": "TPC-PA762",
	                "BlaupunktTablet": "Endeavour 800NG|Endeavour 1010",
	                "DigmaTablet": "\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",
	                "EvolioTablet": "ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",
	                "LavaTablet": "QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b",
	                "AocTablet": "MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712",
	                "MpmanTablet": "MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010",
	                "CelkonTablet": "CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",
	                "WolderTablet": "miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b",
	                "MiTablet": "\\bMI PAD\\b|\\bHM NOTE 1W\\b",
	                "NibiruTablet": "Nibiru M1|Nibiru Jupiter One",
	                "NexoTablet": "NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",
	                "LeaderTablet": "TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100",
	                "UbislateTablet": "UbiSlate[\\s]?7C",
	                "PocketBookTablet": "Pocketbook",
	                "KocasoTablet": "\\b(TB-1207)\\b",
	                "HisenseTablet": "\\b(F5281|E2371)\\b",
	                "Hudl": "Hudl HT7S3|Hudl 2",
	                "TelstraTablet": "T-Hub2",
	                "GenericTablet": "Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bTP750\\b"
	            },
	            "oss": {
	                "AndroidOS": "Android",
	                "BlackBerryOS": "blackberry|\\bBB10\\b|rim tablet os",
	                "PalmOS": "PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",
	                "SymbianOS": "Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",
	                "WindowsMobileOS": "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Window Mobile|Windows Phone [0-9.]+|WCE;",
	                "WindowsPhoneOS": "Windows Phone 10.0|Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",
	                "iOS": "\\biPhone.*Mobile|\\biPod|\\biPad",
	                "MeeGoOS": "MeeGo",
	                "MaemoOS": "Maemo",
	                "JavaOS": "J2ME\/|\\bMIDP\\b|\\bCLDC\\b",
	                "webOS": "webOS|hpwOS",
	                "badaOS": "\\bBada\\b",
	                "BREWOS": "BREW"
	            },
	            "uas": {
	                "Chrome": "\\bCrMo\\b|CriOS|Android.*Chrome\/[.0-9]* (Mobile)?",
	                "Dolfin": "\\bDolfin\\b",
	                "Opera": "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR\/[0-9.]+|Coast\/[0-9.]+",
	                "Skyfire": "Skyfire",
	                "Edge": "Mobile Safari\/[.0-9]* Edge",
	                "IE": "IEMobile|MSIEMobile",
	                "Firefox": "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS",
	                "Bolt": "bolt",
	                "TeaShark": "teashark",
	                "Blazer": "Blazer",
	                "Safari": "Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari",
	                "UCBrowser": "UC.*Browser|UCWEB",
	                "baiduboxapp": "baiduboxapp",
	                "baidubrowser": "baidubrowser",
	                "DiigoBrowser": "DiigoBrowser",
	                "Puffin": "Puffin",
	                "Mercury": "\\bMercury\\b",
	                "ObigoBrowser": "Obigo",
	                "NetFront": "NF-Browser",
	                "GenericBrowser": "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger",
	                "PaleMoon": "Android.*PaleMoon|Mobile.*PaleMoon"
	            },
	            "props": {
	                "Mobile": "Mobile\/[VER]",
	                "Build": "Build\/[VER]",
	                "Version": "Version\/[VER]",
	                "VendorID": "VendorID\/[VER]",
	                "iPad": "iPad.*CPU[a-z ]+[VER]",
	                "iPhone": "iPhone.*CPU[a-z ]+[VER]",
	                "iPod": "iPod.*CPU[a-z ]+[VER]",
	                "Kindle": "Kindle\/[VER]",
	                "Chrome": ["Chrome\/[VER]", "CriOS\/[VER]", "CrMo\/[VER]"],
	                "Coast": ["Coast\/[VER]"],
	                "Dolfin": "Dolfin\/[VER]",
	                "Firefox": ["Firefox\/[VER]", "FxiOS\/[VER]"],
	                "Fennec": "Fennec\/[VER]",
	                "Edge": "Edge\/[VER]",
	                "IE": ["IEMobile\/[VER];", "IEMobile [VER]", "MSIE [VER];", "Trident\/[0-9.]+;.*rv:[VER]"],
	                "NetFront": "NetFront\/[VER]",
	                "NokiaBrowser": "NokiaBrowser\/[VER]",
	                "Opera": [" OPR\/[VER]", "Opera Mini\/[VER]", "Version\/[VER]"],
	                "Opera Mini": "Opera Mini\/[VER]",
	                "Opera Mobi": "Version\/[VER]",
	                "UC Browser": "UC Browser[VER]",
	                "MQQBrowser": "MQQBrowser\/[VER]",
	                "MicroMessenger": "MicroMessenger\/[VER]",
	                "baiduboxapp": "baiduboxapp\/[VER]",
	                "baidubrowser": "baidubrowser\/[VER]",
	                "SamsungBrowser": "SamsungBrowser\/[VER]",
	                "Iron": "Iron\/[VER]",
	                "Safari": ["Version\/[VER]", "Safari\/[VER]"],
	                "Skyfire": "Skyfire\/[VER]",
	                "Tizen": "Tizen\/[VER]",
	                "Webkit": "webkit[ \/][VER]",
	                "PaleMoon": "PaleMoon\/[VER]",
	                "Gecko": "Gecko\/[VER]",
	                "Trident": "Trident\/[VER]",
	                "Presto": "Presto\/[VER]",
	                "Goanna": "Goanna\/[VER]",
	                "iOS": " \\bi?OS\\b [VER][ ;]{1}",
	                "Android": "Android [VER]",
	                "BlackBerry": ["BlackBerry[\\w]+\/[VER]", "BlackBerry.*Version\/[VER]", "Version\/[VER]"],
	                "BREW": "BREW [VER]",
	                "Java": "Java\/[VER]",
	                "Windows Phone OS": ["Windows Phone OS [VER]", "Windows Phone [VER]"],
	                "Windows Phone": "Windows Phone [VER]",
	                "Windows CE": "Windows CE\/[VER]",
	                "Windows NT": "Windows NT [VER]",
	                "Symbian": ["SymbianOS\/[VER]", "Symbian\/[VER]"],
	                "webOS": ["webOS\/[VER]", "hpwOS\/[VER];"]
	            },
	            "utils": {
	                "Bot": "Googlebot|facebookexternalhit|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|YandexMobileBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom",
	                "MobileBot": "Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker\/M1A1-R2D2",
	                "DesktopMode": "WPDesktop",
	                "TV": "SonyDTV|HbbTV",
	                "WebKit": "(webkit)[ \/]([\\w.]+)",
	                "Console": "\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|PLAYSTATION|Xbox)\\b",
	                "Watch": "SM-V700"
	            }
	        };

	        // following patterns come from http://detectmobilebrowsers.com/
	        impl.detectMobileBrowsers = {
	            fullPattern: /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
	            shortPattern: /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
	            tabletPattern: /android|ipad|playbook|silk/i
	        };

	        var hasOwnProp = Object.prototype.hasOwnProperty,
	            isArray;

	        impl.FALLBACK_PHONE = 'UnknownPhone';
	        impl.FALLBACK_TABLET = 'UnknownTablet';
	        impl.FALLBACK_MOBILE = 'UnknownMobile';

	        isArray = 'isArray' in Array ? Array.isArray : function (value) {
	            return Object.prototype.toString.call(value) === '[object Array]';
	        };

	        function equalIC(a, b) {
	            return a != null && b != null && a.toLowerCase() === b.toLowerCase();
	        }

	        function containsIC(array, value) {
	            var valueLC,
	                i,
	                len = array.length;
	            if (!len || !value) {
	                return false;
	            }
	            valueLC = value.toLowerCase();
	            for (i = 0; i < len; ++i) {
	                if (valueLC === array[i].toLowerCase()) {
	                    return true;
	                }
	            }
	            return false;
	        }

	        function convertPropsToRegExp(object) {
	            for (var key in object) {
	                if (hasOwnProp.call(object, key)) {
	                    object[key] = new RegExp(object[key], 'i');
	                }
	            }
	        }

	        (function init() {
	            var key,
	                values,
	                value,
	                i,
	                len,
	                verPos,
	                mobileDetectRules = impl.mobileDetectRules;
	            for (key in mobileDetectRules.props) {
	                if (hasOwnProp.call(mobileDetectRules.props, key)) {
	                    values = mobileDetectRules.props[key];
	                    if (!isArray(values)) {
	                        values = [values];
	                    }
	                    len = values.length;
	                    for (i = 0; i < len; ++i) {
	                        value = values[i];
	                        verPos = value.indexOf('[VER]');
	                        if (verPos >= 0) {
	                            value = value.substring(0, verPos) + '([\\w._\\+]+)' + value.substring(verPos + 5);
	                        }
	                        values[i] = new RegExp(value, 'i');
	                    }
	                    mobileDetectRules.props[key] = values;
	                }
	            }
	            convertPropsToRegExp(mobileDetectRules.oss);
	            convertPropsToRegExp(mobileDetectRules.phones);
	            convertPropsToRegExp(mobileDetectRules.tablets);
	            convertPropsToRegExp(mobileDetectRules.uas);
	            convertPropsToRegExp(mobileDetectRules.utils);

	            // copy some patterns to oss0 which are tested first (see issue#15)
	            mobileDetectRules.oss0 = {
	                WindowsPhoneOS: mobileDetectRules.oss.WindowsPhoneOS,
	                WindowsMobileOS: mobileDetectRules.oss.WindowsMobileOS
	            };
	        })();

	        /**
	         * Test userAgent string against a set of rules and find the first matched key.
	         * @param {Object} rules (key is String, value is RegExp)
	         * @param {String} userAgent the navigator.userAgent (or HTTP-Header 'User-Agent').
	         * @returns {String|null} the matched key if found, otherwise <tt>null</tt>
	         * @private
	         */
	        impl.findMatch = function (rules, userAgent) {
	            for (var key in rules) {
	                if (hasOwnProp.call(rules, key)) {
	                    if (rules[key].test(userAgent)) {
	                        return key;
	                    }
	                }
	            }
	            return null;
	        };

	        /**
	         * Test userAgent string against a set of rules and return an array of matched keys.
	         * @param {Object} rules (key is String, value is RegExp)
	         * @param {String} userAgent the navigator.userAgent (or HTTP-Header 'User-Agent').
	         * @returns {Array} an array of matched keys, may be empty when there is no match, but not <tt>null</tt>
	         * @private
	         */
	        impl.findMatches = function (rules, userAgent) {
	            var result = [];
	            for (var key in rules) {
	                if (hasOwnProp.call(rules, key)) {
	                    if (rules[key].test(userAgent)) {
	                        result.push(key);
	                    }
	                }
	            }
	            return result;
	        };

	        /**
	         * Check the version of the given property in the User-Agent.
	         *
	         * @param {String} propertyName
	         * @param {String} userAgent
	         * @return {String} version or <tt>null</tt> if version not found
	         * @private
	         */
	        impl.getVersionStr = function (propertyName, userAgent) {
	            var props = impl.mobileDetectRules.props,
	                patterns,
	                i,
	                len,
	                match;
	            if (hasOwnProp.call(props, propertyName)) {
	                patterns = props[propertyName];
	                len = patterns.length;
	                for (i = 0; i < len; ++i) {
	                    match = patterns[i].exec(userAgent);
	                    if (match !== null) {
	                        return match[1];
	                    }
	                }
	            }
	            return null;
	        };

	        /**
	         * Check the version of the given property in the User-Agent.
	         * Will return a float number. (eg. 2_0 will return 2.0, 4.3.1 will return 4.31)
	         *
	         * @param {String} propertyName
	         * @param {String} userAgent
	         * @return {Number} version or <tt>NaN</tt> if version not found
	         * @private
	         */
	        impl.getVersion = function (propertyName, userAgent) {
	            var version = impl.getVersionStr(propertyName, userAgent);
	            return version ? impl.prepareVersionNo(version) : NaN;
	        };

	        /**
	         * Prepare the version number.
	         *
	         * @param {String} version
	         * @return {Number} the version number as a floating number
	         * @private
	         */
	        impl.prepareVersionNo = function (version) {
	            var numbers;

	            numbers = version.split(/[a-z._ \/\-]/i);
	            if (numbers.length === 1) {
	                version = numbers[0];
	            }
	            if (numbers.length > 1) {
	                version = numbers[0] + '.';
	                numbers.shift();
	                version += numbers.join('');
	            }
	            return Number(version);
	        };

	        impl.isMobileFallback = function (userAgent) {
	            return impl.detectMobileBrowsers.fullPattern.test(userAgent) || impl.detectMobileBrowsers.shortPattern.test(userAgent.substr(0, 4));
	        };

	        impl.isTabletFallback = function (userAgent) {
	            return impl.detectMobileBrowsers.tabletPattern.test(userAgent);
	        };

	        impl.prepareDetectionCache = function (cache, userAgent, maxPhoneWidth) {
	            if (cache.mobile !== undefined) {
	                return;
	            }
	            var phone, tablet, phoneSized;

	            // first check for stronger tablet rules, then phone (see issue#5)
	            tablet = impl.findMatch(impl.mobileDetectRules.tablets, userAgent);
	            if (tablet) {
	                cache.mobile = cache.tablet = tablet;
	                cache.phone = null;
	                return; // unambiguously identified as tablet
	            }

	            phone = impl.findMatch(impl.mobileDetectRules.phones, userAgent);
	            if (phone) {
	                cache.mobile = cache.phone = phone;
	                cache.tablet = null;
	                return; // unambiguously identified as phone
	            }

	            // our rules haven't found a match -> try more general fallback rules
	            if (impl.isMobileFallback(userAgent)) {
	                phoneSized = MobileDetect.isPhoneSized(maxPhoneWidth);
	                if (phoneSized === undefined) {
	                    cache.mobile = impl.FALLBACK_MOBILE;
	                    cache.tablet = cache.phone = null;
	                } else if (phoneSized) {
	                    cache.mobile = cache.phone = impl.FALLBACK_PHONE;
	                    cache.tablet = null;
	                } else {
	                    cache.mobile = cache.tablet = impl.FALLBACK_TABLET;
	                    cache.phone = null;
	                }
	            } else if (impl.isTabletFallback(userAgent)) {
	                cache.mobile = cache.tablet = impl.FALLBACK_TABLET;
	                cache.phone = null;
	            } else {
	                // not mobile at all!
	                cache.mobile = cache.tablet = cache.phone = null;
	            }
	        };

	        // t is a reference to a MobileDetect instance
	        impl.mobileGrade = function (t) {
	            // impl note:
	            // To keep in sync w/ Mobile_Detect.php easily, the following code is tightly aligned to the PHP version.
	            // When changes are made in Mobile_Detect.php, copy this method and replace:
	            //     $this-> / t.
	            //     self::MOBILE_GRADE_(.) / '$1'
	            //     , self::VERSION_TYPE_FLOAT / (nothing)
	            //     isIOS() / os('iOS')
	            //     [reg] / (nothing)   <-- jsdelivr complaining about unescaped unicode character U+00AE
	            var $isMobile = t.mobile() !== null;

	            if (
	            // Apple iOS 3.2-5.1 - Tested on the original iPad (4.3 / 5.0), iPad 2 (4.3), iPad 3 (5.1), original iPhone (3.1), iPhone 3 (3.2), 3GS (4.3), 4 (4.3 / 5.0), and 4S (5.1)
	            t.os('iOS') && t.version('iPad') >= 4.3 || t.os('iOS') && t.version('iPhone') >= 3.1 || t.os('iOS') && t.version('iPod') >= 3.1 ||

	            // Android 2.1-2.3 - Tested on the HTC Incredible (2.2), original Droid (2.2), HTC Aria (2.1), Google Nexus S (2.3). Functional on 1.5 & 1.6 but performance may be sluggish, tested on Google G1 (1.5)
	            // Android 3.1 (Honeycomb)  - Tested on the Samsung Galaxy Tab 10.1 and Motorola XOOM
	            // Android 4.0 (ICS)  - Tested on a Galaxy Nexus. Note: transition performance can be poor on upgraded devices
	            // Android 4.1 (Jelly Bean)  - Tested on a Galaxy Nexus and Galaxy 7
	            t.version('Android') > 2.1 && t.is('Webkit') ||

	            // Windows Phone 7-7.5 - Tested on the HTC Surround (7.0) HTC Trophy (7.5), LG-E900 (7.5), Nokia Lumia 800
	            t.version('Windows Phone OS') >= 7.0 ||

	            // Blackberry 7 - Tested on BlackBerry Torch 9810
	            // Blackberry 6.0 - Tested on the Torch 9800 and Style 9670
	            t.is('BlackBerry') && t.version('BlackBerry') >= 6.0 ||
	            // Blackberry Playbook (1.0-2.0) - Tested on PlayBook
	            t.match('Playbook.*Tablet') ||

	            // Palm WebOS (1.4-2.0) - Tested on the Palm Pixi (1.4), Pre (1.4), Pre 2 (2.0)
	            t.version('webOS') >= 1.4 && t.match('Palm|Pre|Pixi') ||
	            // Palm WebOS 3.0  - Tested on HP TouchPad
	            t.match('hp.*TouchPad') ||

	            // Firefox Mobile (12 Beta) - Tested on Android 2.3 device
	            t.is('Firefox') && t.version('Firefox') >= 12 ||

	            // Chrome for Android - Tested on Android 4.0, 4.1 device
	            t.is('Chrome') && t.is('AndroidOS') && t.version('Android') >= 4.0 ||

	            // Skyfire 4.1 - Tested on Android 2.3 device
	            t.is('Skyfire') && t.version('Skyfire') >= 4.1 && t.is('AndroidOS') && t.version('Android') >= 2.3 ||

	            // Opera Mobile 11.5-12: Tested on Android 2.3
	            t.is('Opera') && t.version('Opera Mobi') > 11 && t.is('AndroidOS') ||

	            // Meego 1.2 - Tested on Nokia 950 and N9
	            t.is('MeeGoOS') ||

	            // Tizen (pre-release) - Tested on early hardware
	            t.is('Tizen') ||

	            // Samsung Bada 2.0 - Tested on a Samsung Wave 3, Dolphin browser
	            // @todo: more tests here!
	            t.is('Dolfin') && t.version('Bada') >= 2.0 ||

	            // UC Browser - Tested on Android 2.3 device
	            (t.is('UC Browser') || t.is('Dolfin')) && t.version('Android') >= 2.3 ||

	            // Kindle 3 and Fire  - Tested on the built-in WebKit browser for each
	            t.match('Kindle Fire') || t.is('Kindle') && t.version('Kindle') >= 3.0 ||

	            // Nook Color 1.4.1 - Tested on original Nook Color, not Nook Tablet
	            t.is('AndroidOS') && t.is('NookTablet') ||

	            // Chrome Desktop 11-21 - Tested on OS X 10.7 and Windows 7
	            t.version('Chrome') >= 11 && !$isMobile ||

	            // Safari Desktop 4-5 - Tested on OS X 10.7 and Windows 7
	            t.version('Safari') >= 5.0 && !$isMobile ||

	            // Firefox Desktop 4-13 - Tested on OS X 10.7 and Windows 7
	            t.version('Firefox') >= 4.0 && !$isMobile ||

	            // Internet Explorer 7-9 - Tested on Windows XP, Vista and 7
	            t.version('MSIE') >= 7.0 && !$isMobile ||

	            // Opera Desktop 10-12 - Tested on OS X 10.7 and Windows 7
	            // @reference: http://my.opera.com/community/openweb/idopera/
	            t.version('Opera') >= 10 && !$isMobile) {
	                return 'A';
	            }

	            if (t.os('iOS') && t.version('iPad') < 4.3 || t.os('iOS') && t.version('iPhone') < 3.1 || t.os('iOS') && t.version('iPod') < 3.1 ||

	            // Blackberry 5.0: Tested on the Storm 2 9550, Bold 9770
	            t.is('Blackberry') && t.version('BlackBerry') >= 5 && t.version('BlackBerry') < 6 ||

	            //Opera Mini (5.0-6.5) - Tested on iOS 3.2/4.3 and Android 2.3
	            t.version('Opera Mini') >= 5.0 && t.version('Opera Mini') <= 6.5 && (t.version('Android') >= 2.3 || t.is('iOS')) ||

	            // Nokia Symbian^3 - Tested on Nokia N8 (Symbian^3), C7 (Symbian^3), also works on N97 (Symbian^1)
	            t.match('NokiaN8|NokiaC7|N97.*Series60|Symbian/3') ||

	            // @todo: report this (tested on Nokia N71)
	            t.version('Opera Mobi') >= 11 && t.is('SymbianOS')) {
	                return 'B';
	            }

	            if (
	            // Blackberry 4.x - Tested on the Curve 8330
	            t.version('BlackBerry') < 5.0 ||
	            // Windows Mobile - Tested on the HTC Leo (WinMo 5.2)
	            t.match('MSIEMobile|Windows CE.*Mobile') || t.version('Windows Mobile') <= 5.2) {
	                return 'C';
	            }

	            //All older smartphone platforms and featurephones - Any device that doesn't support media queries
	            //will receive the basic, C grade experience.
	            return 'C';
	        };

	        impl.detectOS = function (ua) {
	            return impl.findMatch(impl.mobileDetectRules.oss0, ua) || impl.findMatch(impl.mobileDetectRules.oss, ua);
	        };

	        impl.getDeviceSmallerSide = function () {
	            return window.screen.width < window.screen.height ? window.screen.width : window.screen.height;
	        };

	        /**
	         * Constructor for MobileDetect object.
	         * <br>
	         * Such an object will keep a reference to the given user-agent string and cache most of the detect queries.<br>
	         * <div style="background-color: #d9edf7; border: 1px solid #bce8f1; color: #3a87ad; padding: 14px; border-radius: 2px; margin-top: 20px">
	         *     <strong>Find information how to download and install:</strong>
	         *     <a href="https://github.com/hgoebl/mobile-detect.js/">github.com/hgoebl/mobile-detect.js/</a>
	         * </div>
	         *
	         * @example <pre>
	         *     var md = new MobileDetect(window.navigator.userAgent);
	         *     if (md.mobile()) {
	         *         location.href = (md.mobileGrade() === 'A') ? '/mobile/' : '/lynx/';
	         *     }
	         * </pre>
	         *
	         * @param {string} userAgent typically taken from window.navigator.userAgent or http_header['User-Agent']
	         * @param {number} [maxPhoneWidth=600] <strong>only for browsers</strong> specify a value for the maximum
	         *        width of smallest device side (in logical "CSS" pixels) until a device detected as mobile will be handled
	         *        as phone.
	         *        This is only used in cases where the device cannot be classified as phone or tablet.<br>
	         *        See <a href="http://developer.android.com/guide/practices/screens_support.html">Declaring Tablet Layouts
	         *        for Android</a>.<br>
	         *        If you provide a value < 0, then this "fuzzy" check is disabled.
	         * @constructor
	         * @global
	         */
	        function MobileDetect(userAgent, maxPhoneWidth) {
	            this.ua = userAgent || '';
	            this._cache = {};
	            //600dp is typical 7" tablet minimum width
	            this.maxPhoneWidth = maxPhoneWidth || 600;
	        }

	        MobileDetect.prototype = {
	            constructor: MobileDetect,

	            /**
	             * Returns the detected phone or tablet type or <tt>null</tt> if it is not a mobile device.
	             * <br>
	             * For a list of possible return values see {@link MobileDetect#phone} and {@link MobileDetect#tablet}.<br>
	             * <br>
	             * If the device is not detected by the regular expressions from Mobile-Detect, a test is made against
	             * the patterns of <a href="http://detectmobilebrowsers.com/">detectmobilebrowsers.com</a>. If this test
	             * is positive, a value of <code>UnknownPhone</code>, <code>UnknownTablet</code> or
	             * <code>UnknownMobile</code> is returned.<br>
	             * When used in browser, the decision whether phone or tablet is made based on <code>screen.width/height</code>.<br>
	             * <br>
	             * When used server-side (node.js), there is no way to tell the difference between <code>UnknownTablet</code>
	             * and <code>UnknownMobile</code>, so you will get <code>UnknownMobile</code> here.<br>
	             * Be aware that since v1.0.0 in this special case you will get <code>UnknownMobile</code> only for:
	             * {@link MobileDetect#mobile}, not for {@link MobileDetect#phone} and {@link MobileDetect#tablet}.
	             * In versions before v1.0.0 all 3 methods returned <code>UnknownMobile</code> which was tedious to use.
	             * <br>
	             * In most cases you will use the return value just as a boolean.
	             *
	             * @returns {String} the key for the phone family or tablet family, e.g. "Nexus".
	             * @function MobileDetect#mobile
	             */
	            mobile: function mobile() {
	                impl.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
	                return this._cache.mobile;
	            },

	            /**
	             * Returns the detected phone type/family string or <tt>null</tt>.
	             * <br>
	             * The returned tablet (family or producer) is one of following keys:<br>
	             * <br><tt>iPhone, BlackBerry, HTC, Nexus, Dell, Motorola, Samsung, LG, Sony, Asus,
	             * NokiaLumia, Micromax, Palm, Vertu, Pantech, Fly, Wiko, iMobile, SimValley,
	             * Wolfgang, Alcatel, Nintendo, Amoi, INQ, GenericPhone</tt><br>
	             * <br>
	             * If the device is not detected by the regular expressions from Mobile-Detect, a test is made against
	             * the patterns of <a href="http://detectmobilebrowsers.com/">detectmobilebrowsers.com</a>. If this test
	             * is positive, a value of <code>UnknownPhone</code> or <code>UnknownMobile</code> is returned.<br>
	             * When used in browser, the decision whether phone or tablet is made based on <code>screen.width/height</code>.<br>
	             * <br>
	             * When used server-side (node.js), there is no way to tell the difference between <code>UnknownTablet</code>
	             * and <code>UnknownMobile</code>, so you will get <code>null</code> here, while {@link MobileDetect#mobile}
	             * will return <code>UnknownMobile</code>.<br>
	             * Be aware that since v1.0.0 in this special case you will get <code>UnknownMobile</code> only for:
	             * {@link MobileDetect#mobile}, not for {@link MobileDetect#phone} and {@link MobileDetect#tablet}.
	             * In versions before v1.0.0 all 3 methods returned <code>UnknownMobile</code> which was tedious to use.
	             * <br>
	             * In most cases you will use the return value just as a boolean.
	             *
	             * @returns {String} the key of the phone family or producer, e.g. "iPhone"
	             * @function MobileDetect#phone
	             */
	            phone: function phone() {
	                impl.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
	                return this._cache.phone;
	            },

	            /**
	             * Returns the detected tablet type/family string or <tt>null</tt>.
	             * <br>
	             * The returned tablet (family or producer) is one of following keys:<br>
	             * <br><tt>iPad, NexusTablet, SamsungTablet, Kindle, SurfaceTablet, HPTablet, AsusTablet,
	             * BlackBerryTablet, HTCtablet, MotorolaTablet, NookTablet, AcerTablet,
	             * ToshibaTablet, LGTablet, FujitsuTablet, PrestigioTablet, LenovoTablet,
	             * DellTablet, YarvikTablet, MedionTablet, ArnovaTablet, IntensoTablet, IRUTablet,
	             * MegafonTablet, EbodaTablet, AllViewTablet, ArchosTablet, AinolTablet,
	             * NokiaLumiaTablet, SonyTablet, PhilipsTablet, CubeTablet, CobyTablet, MIDTablet,
	             * MSITablet, SMiTTablet, RockChipTablet, FlyTablet, bqTablet, HuaweiTablet,
	             * NecTablet, PantechTablet, BronchoTablet, VersusTablet, ZyncTablet,
	             * PositivoTablet, NabiTablet, KoboTablet, DanewTablet, TexetTablet,
	             * PlaystationTablet, TrekstorTablet, PyleAudioTablet, AdvanTablet,
	             * DanyTechTablet, GalapadTablet, MicromaxTablet, KarbonnTablet, AllFineTablet,
	             * PROSCANTablet, YONESTablet, ChangJiaTablet, GUTablet, PointOfViewTablet,
	             * OvermaxTablet, HCLTablet, DPSTablet, VistureTablet, CrestaTablet,
	             * MediatekTablet, ConcordeTablet, GoCleverTablet, ModecomTablet, VoninoTablet,
	             * ECSTablet, StorexTablet, VodafoneTablet, EssentielBTablet, RossMoorTablet,
	             * iMobileTablet, TolinoTablet, AudioSonicTablet, AMPETablet, SkkTablet,
	             * TecnoTablet, JXDTablet, iJoyTablet, FX2Tablet, XoroTablet, ViewsonicTablet,
	             * OdysTablet, CaptivaTablet, IconbitTablet, TeclastTablet, OndaTablet,
	             * JaytechTablet, BlaupunktTablet, DigmaTablet, EvolioTablet, LavaTablet,
	             * AocTablet, MpmanTablet, CelkonTablet, WolderTablet, MiTablet, NibiruTablet,
	             * NexoTablet, LeaderTablet, UbislateTablet, PocketBookTablet, KocasoTablet,
	             * HisenseTablet, Hudl, TelstraTablet, GenericTablet</tt><br>
	             * <br>
	             * If the device is not detected by the regular expressions from Mobile-Detect, a test is made against
	             * the patterns of <a href="http://detectmobilebrowsers.com/">detectmobilebrowsers.com</a>. If this test
	             * is positive, a value of <code>UnknownTablet</code> or <code>UnknownMobile</code> is returned.<br>
	             * When used in browser, the decision whether phone or tablet is made based on <code>screen.width/height</code>.<br>
	             * <br>
	             * When used server-side (node.js), there is no way to tell the difference between <code>UnknownTablet</code>
	             * and <code>UnknownMobile</code>, so you will get <code>null</code> here, while {@link MobileDetect#mobile}
	             * will return <code>UnknownMobile</code>.<br>
	             * Be aware that since v1.0.0 in this special case you will get <code>UnknownMobile</code> only for:
	             * {@link MobileDetect#mobile}, not for {@link MobileDetect#phone} and {@link MobileDetect#tablet}.
	             * In versions before v1.0.0 all 3 methods returned <code>UnknownMobile</code> which was tedious to use.
	             * <br>
	             * In most cases you will use the return value just as a boolean.
	             *
	             * @returns {String} the key of the tablet family or producer, e.g. "SamsungTablet"
	             * @function MobileDetect#tablet
	             */
	            tablet: function tablet() {
	                impl.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
	                return this._cache.tablet;
	            },

	            /**
	             * Returns the (first) detected user-agent string or <tt>null</tt>.
	             * <br>
	             * The returned user-agent is one of following keys:<br>
	             * <br><tt>Chrome, Dolfin, Opera, Skyfire, Edge, IE, Firefox, Bolt, TeaShark, Blazer,
	             * Safari, UCBrowser, baiduboxapp, baidubrowser, DiigoBrowser, Puffin, Mercury,
	             * ObigoBrowser, NetFront, GenericBrowser, PaleMoon</tt><br>
	             * <br>
	             * In most cases calling {@link MobileDetect#userAgent} will be sufficient. But there are rare
	             * cases where a mobile device pretends to be more than one particular browser. You can get the
	             * list of all matches with {@link MobileDetect#userAgents} or check for a particular value by
	             * providing one of the defined keys as first argument to {@link MobileDetect#is}.
	             *
	             * @returns {String} the key for the detected user-agent or <tt>null</tt>
	             * @function MobileDetect#userAgent
	             */
	            userAgent: function userAgent() {
	                if (this._cache.userAgent === undefined) {
	                    this._cache.userAgent = impl.findMatch(impl.mobileDetectRules.uas, this.ua);
	                }
	                return this._cache.userAgent;
	            },

	            /**
	             * Returns all detected user-agent strings.
	             * <br>
	             * The array is empty or contains one or more of following keys:<br>
	             * <br><tt>Chrome, Dolfin, Opera, Skyfire, Edge, IE, Firefox, Bolt, TeaShark, Blazer,
	             * Safari, UCBrowser, baiduboxapp, baidubrowser, DiigoBrowser, Puffin, Mercury,
	             * ObigoBrowser, NetFront, GenericBrowser, PaleMoon</tt><br>
	             * <br>
	             * In most cases calling {@link MobileDetect#userAgent} will be sufficient. But there are rare
	             * cases where a mobile device pretends to be more than one particular browser. You can get the
	             * list of all matches with {@link MobileDetect#userAgents} or check for a particular value by
	             * providing one of the defined keys as first argument to {@link MobileDetect#is}.
	             *
	             * @returns {Array} the array of detected user-agent keys or <tt>[]</tt>
	             * @function MobileDetect#userAgents
	             */
	            userAgents: function userAgents() {
	                if (this._cache.userAgents === undefined) {
	                    this._cache.userAgents = impl.findMatches(impl.mobileDetectRules.uas, this.ua);
	                }
	                return this._cache.userAgents;
	            },

	            /**
	             * Returns the detected operating system string or <tt>null</tt>.
	             * <br>
	             * The operating system is one of following keys:<br>
	             * <br><tt>AndroidOS, BlackBerryOS, PalmOS, SymbianOS, WindowsMobileOS, WindowsPhoneOS,
	             * iOS, MeeGoOS, MaemoOS, JavaOS, webOS, badaOS, BREWOS</tt><br>
	             *
	             * @returns {String} the key for the detected operating system.
	             * @function MobileDetect#os
	             */
	            os: function os() {
	                if (this._cache.os === undefined) {
	                    this._cache.os = impl.detectOS(this.ua);
	                }
	                return this._cache.os;
	            },

	            /**
	             * Get the version (as Number) of the given property in the User-Agent.
	             * <br>
	             * Will return a float number. (eg. 2_0 will return 2.0, 4.3.1 will return 4.31)
	             *
	             * @param {String} key a key defining a thing which has a version.<br>
	             *        You can use one of following keys:<br>
	             * <br><tt>Mobile, Build, Version, VendorID, iPad, iPhone, iPod, Kindle, Chrome, Coast,
	             * Dolfin, Firefox, Fennec, Edge, IE, NetFront, NokiaBrowser, Opera, Opera Mini,
	             * Opera Mobi, UC Browser, MQQBrowser, MicroMessenger, baiduboxapp, baidubrowser,
	             * SamsungBrowser, Iron, Safari, Skyfire, Tizen, Webkit, PaleMoon, Gecko, Trident,
	             * Presto, Goanna, iOS, Android, BlackBerry, BREW, Java, Windows Phone OS, Windows
	             * Phone, Windows CE, Windows NT, Symbian, webOS</tt><br>
	             *
	             * @returns {Number} the version as float or <tt>NaN</tt> if User-Agent doesn't contain this version.
	             *          Be careful when comparing this value with '==' operator!
	             * @function MobileDetect#version
	             */
	            version: function version(key) {
	                return impl.getVersion(key, this.ua);
	            },

	            /**
	             * Get the version (as String) of the given property in the User-Agent.
	             * <br>
	             *
	             * @param {String} key a key defining a thing which has a version.<br>
	             *        You can use one of following keys:<br>
	             * <br><tt>Mobile, Build, Version, VendorID, iPad, iPhone, iPod, Kindle, Chrome, Coast,
	             * Dolfin, Firefox, Fennec, Edge, IE, NetFront, NokiaBrowser, Opera, Opera Mini,
	             * Opera Mobi, UC Browser, MQQBrowser, MicroMessenger, baiduboxapp, baidubrowser,
	             * SamsungBrowser, Iron, Safari, Skyfire, Tizen, Webkit, PaleMoon, Gecko, Trident,
	             * Presto, Goanna, iOS, Android, BlackBerry, BREW, Java, Windows Phone OS, Windows
	             * Phone, Windows CE, Windows NT, Symbian, webOS</tt><br>
	             *
	             * @returns {String} the "raw" version as String or <tt>null</tt> if User-Agent doesn't contain this version.
	             *
	             * @function MobileDetect#versionStr
	             */
	            versionStr: function versionStr(key) {
	                return impl.getVersionStr(key, this.ua);
	            },

	            /**
	             * Global test key against userAgent, os, phone, tablet and some other properties of userAgent string.
	             *
	             * @param {String} key the key (case-insensitive) of a userAgent, an operating system, phone or
	             *        tablet family.<br>
	             *        For a complete list of possible values, see {@link MobileDetect#userAgent},
	             *        {@link MobileDetect#os}, {@link MobileDetect#phone}, {@link MobileDetect#tablet}.<br>
	             *        Additionally you have following keys:<br>
	             * <br><tt>Bot, MobileBot, DesktopMode, TV, WebKit, Console, Watch</tt><br>
	             *
	             * @returns {boolean} <tt>true</tt> when the given key is one of the defined keys of userAgent, os, phone,
	             *                    tablet or one of the listed additional keys, otherwise <tt>false</tt>
	             * @function MobileDetect#is
	             */
	            is: function is(key) {
	                return containsIC(this.userAgents(), key) || equalIC(key, this.os()) || equalIC(key, this.phone()) || equalIC(key, this.tablet()) || containsIC(impl.findMatches(impl.mobileDetectRules.utils, this.ua), key);
	            },

	            /**
	             * Do a quick test against navigator::userAgent.
	             *
	             * @param {String|RegExp} pattern the pattern, either as String or RegExp
	             *                        (a string will be converted to a case-insensitive RegExp).
	             * @returns {boolean} <tt>true</tt> when the pattern matches, otherwise <tt>false</tt>
	             * @function MobileDetect#match
	             */
	            match: function match(pattern) {
	                if (!(pattern instanceof RegExp)) {
	                    pattern = new RegExp(pattern, 'i');
	                }
	                return pattern.test(this.ua);
	            },

	            /**
	             * Checks whether the mobile device can be considered as phone regarding <code>screen.width</code>.
	             * <br>
	             * Obviously this method makes sense in browser environments only (not for Node.js)!
	             * @param {number} [maxPhoneWidth] the maximum logical pixels (aka. CSS-pixels) to be considered as phone.<br>
	             *        The argument is optional and if not present or falsy, the value of the constructor is taken.
	             * @returns {boolean|undefined} <code>undefined</code> if screen size wasn't detectable, else <code>true</code>
	             *          when screen.width is less or equal to maxPhoneWidth, otherwise <code>false</code>.<br>
	             *          Will always return <code>undefined</code> server-side.
	             */
	            isPhoneSized: function isPhoneSized(maxPhoneWidth) {
	                return MobileDetect.isPhoneSized(maxPhoneWidth || this.maxPhoneWidth);
	            },

	            /**
	             * Returns the mobile grade ('A', 'B', 'C').
	             *
	             * @returns {String} one of the mobile grades ('A', 'B', 'C').
	             * @function MobileDetect#mobileGrade
	             */
	            mobileGrade: function mobileGrade() {
	                if (this._cache.grade === undefined) {
	                    this._cache.grade = impl.mobileGrade(this);
	                }
	                return this._cache.grade;
	            }
	        };

	        // environment-dependent
	        if (typeof window !== 'undefined' && window.screen) {
	            MobileDetect.isPhoneSized = function (maxPhoneWidth) {
	                return maxPhoneWidth < 0 ? undefined : impl.getDeviceSmallerSide() <= maxPhoneWidth;
	            };
	        } else {
	            MobileDetect.isPhoneSized = function () {};
	        }

	        // should not be replaced by a completely new object - just overwrite existing methods
	        MobileDetect._impl = impl;

	        MobileDetect.version = '1.3.6 2017-04-05';

	        return MobileDetect;
	    }); // end of call of define()
	})(function (undefined) {
	    if (typeof module !== 'undefined' && module.exports) {
	        return function (factory) {
	            module.exports = factory();
	        };
	    } else if (true) {
	        return __webpack_require__(4);
	    } else if (typeof window !== 'undefined') {
	        return function (factory) {
	            window.MobileDetect = factory();
	        };
	    } else {
	        // please file a bug if you get this error!
	        throw new Error('unknown environment');
	    }
	}());

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.debug = debug;

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var config = {};
	config.debug = true;

	//Console.logs only when debug set to true
	function debug(log, type) {
		if (config.debug) {
			var styles = ['padding: 4px'];

			if (type == 'error') {
				styles = [].concat(_toConsumableArray(styles), ['background: red', 'color: white']).join(';');
			} else if (type == 'success') {
				styles = [].concat(_toConsumableArray(styles), ['background: green', 'color: white']).join(';');
			}

			console.log('%c' + log, styles);
		}
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.grid = undefined;

	var _jquery = __webpack_require__(1);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _debug = __webpack_require__(5);

	var _mixitup = __webpack_require__(7);

	var _mixitup2 = _interopRequireDefault(_mixitup);

	var _imagesloaded = __webpack_require__(8);

	var _imagesloaded2 = _interopRequireDefault(_imagesloaded);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_imagesloaded2.default.makeJQueryPlugin(_jquery2.default);
	// import mojs from 'mo-js';
	// jQuery.ready(function() {
	// 	console.log('add filterizr')
	// 	require('filterizr');
	// })

	function grid() {
	    var $grid = (0, _jquery2.default)('.portfolio-grid'),
	        $gridItemImg = (0, _jquery2.default)('.portfolio-piece img'),
	        $gridItem = (0, _jquery2.default)('.portfolio-piece'),
	        $gridExpansions = (0, _jquery2.default)('.portfolio-piece-expansion'),
	        $overlayClose = (0, _jquery2.default)('.overlay-close'),
	        $overlay = (0, _jquery2.default)('.overlay'),
	        $overlayContent = (0, _jquery2.default)('.overlay-content'),
	        $body = (0, _jquery2.default)('body'),
	        $html = (0, _jquery2.default)('html');

	    if ($grid.length > 0) {
	        var recalcCircleCenter = function recalcCircleCenter(expandOut) {
	            var $gridPortfolioPieceWrap = (0, _jquery2.default)('.portfolio-piece.active').find('.portfolio-piece-wrap');
	            var $circleOverlay = (0, _jquery2.default)('.circle-overlay');

	            var newCoordinates = {};

	            var squareWidth = $gridPortfolioPieceWrap.width() / 2;
	            var squareOffset = $gridPortfolioPieceWrap.offset();

	            newCoordinates.top = ($gridPortfolioPieceWrap.outerHeight() - circleOverlayInitialHeight * 0.25) / 2 + squareOffset.top + 'px';
	            newCoordinates.left = ($gridPortfolioPieceWrap.outerWidth() - circleOverlayInitialWidth * 0.25) / 2 + squareOffset.left + 'px';
	            newCoordinates.radius = squareWidth * 0.25;
	            console.log(circleOverlay);
	            console.log(newCoordinates);

	            if (expandOut) circleOverlay.tune({ left: newCoordinates.left, top: newCoordinates.top, radius: newCoordinates.radius }).play();else circleOverlay.tune({ left: newCoordinates.left, top: newCoordinates.top, radius: newCoordinates.radius }).playBackward();
	        };

	        (0, _debug.debug)('Initiate Grid', 'success');

	        var mixer = (0, _mixitup2.default)($grid, {
	            selectors: {
	                target: '.portfolio-piece'
	            },
	            animation: {
	                duration: 500
	            }
	        });

	        var fillColor = (0, _jquery2.default)('.theme-color-bg-secondary').css('background-color');

	        var circleOverlay = new mojs.Shape({
	            shape: 'circle',
	            isShowStart: true,
	            radius: 20,
	            fill: fillColor,
	            // parent: '.portfolio-grid',
	            className: 'circle-overlay',
	            opacity: { 0: 1 },
	            duration: 400,
	            delay: 300
	        }).then({
	            scale: { 0.5: 50 },
	            duration: 500
	        });

	        var circleOverlayInitialHeight = (0, _jquery2.default)('.circle-overlay').outerHeight();
	        var circleOverlayInitialWidth = (0, _jquery2.default)('.circle-overlay').outerWidth();

	        $gridItem.click(function (e) {
	            e.preventDefault();
	            //remove currecnt active states
	            $gridItem.removeClass('active');
	            (0, _jquery2.default)(this).addClass('active-animations');
	            (0, _jquery2.default)(this).addClass('active');

	            // let squareWidth = $(this).find('.portfolio-piece-wrap').width() / 2;
	            // let squareOffset = $(this).find('.portfolio-piece-wrap').offset();

	            // let newTop = (($(this).find('.portfolio-piece-wrap').outerHeight() - $('.circle-overlay').outerHeight() * 0.25) / 2 + squareOffset.top + 'px');
	            // let newLeft = (($(this).find('.portfolio-piece-wrap').outerWidth() - $('.circle-overlay').outerWidth() * 0.25)  / 2 + squareOffset.left+ 'px');
	            // let newRadius = squareWidth * 0.25

	            // circleOverlay.tune({ left: newLeft, top: newTop, radius: newRadius }).play();
	            recalcCircleCenter(true);

	            var newHTML = (0, _jquery2.default)(this).find('.portfolio-piece-expansion').html();

	            $overlay.addClass('active');
	            $overlayContent.html("<div class=\"container\">" + newHTML + "</div>");
	            $html.addClass('noscroll');
	        });

	        $overlayClose.click(function () {
	            recalcCircleCenter(false);
	            $gridItem.removeClass('active');
	            $overlay.removeClass('active');
	            $overlayContent.html('');
	            $html.removeClass('noscroll');

	            //Wait for animatins to end based off css transtions
	            //removes class so transtions dont conflict with mixitup transitions
	            setTimeout(function () {
	                (0, _debug.debug)('remove after complete animtion');
	                $gridItem.removeClass('active-animations');
	            }, 1000);
	        });

	        $grid.imagesLoaded(function () {
	            (0, _debug.debug)('Grid images loaded');
	        });
	    }
	}

	exports.grid = grid;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/**!
	 * MixItUp v3.1.10
	 * A high-performance, dependency-free library for animated filtering, sorting and more
	 * Build e6e7a2d0-7eef-4170-a198-9a6a2bd4e53e
	 *
	 * @copyright Copyright 2014-2017 KunkaLabs Limited.
	 * @author    KunkaLabs Limited.
	 * @link      https://www.kunkalabs.com/mixitup/
	 *
	 * @license   Commercial use requires a commercial license.
	 *            https://www.kunkalabs.com/mixitup/licenses/
	 *
	 *            Non-commercial use permitted under same terms as CC BY-NC 3.0 license.
	 *            http://creativecommons.org/licenses/by-nc/3.0/
	 */

	(function (window) {
	    'use strict';

	    var _mixitup = null,
	        h = null,
	        jq = null;

	    (function () {
	        var VENDORS = ['webkit', 'moz', 'o', 'ms'],
	            canary = window.document.createElement('div'),
	            i = -1;

	        // window.requestAnimationFrame

	        for (i = 0; i < VENDORS.length && !window.requestAnimationFrame; i++) {
	            window.requestAnimationFrame = window[VENDORS[i] + 'RequestAnimationFrame'];
	        }

	        // Element.nextElementSibling

	        if (typeof canary.nextElementSibling === 'undefined') {
	            Object.defineProperty(window.Element.prototype, 'nextElementSibling', {
	                get: function get() {
	                    var el = this.nextSibling;

	                    while (el) {
	                        if (el.nodeType === 1) {
	                            return el;
	                        }

	                        el = el.nextSibling;
	                    }

	                    return null;
	                }
	            });
	        }

	        // Element.matches

	        (function (ElementPrototype) {
	            ElementPrototype.matches = ElementPrototype.matches || ElementPrototype.machesSelector || ElementPrototype.mozMatchesSelector || ElementPrototype.msMatchesSelector || ElementPrototype.oMatchesSelector || ElementPrototype.webkitMatchesSelector || function (selector) {
	                return Array.prototype.indexOf.call(this.parentElement.querySelectorAll(selector), this) > -1;
	            };
	        })(window.Element.prototype);

	        // Object.keys
	        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

	        if (!Object.keys) {
	            Object.keys = function () {
	                var hasOwnProperty = Object.prototype.hasOwnProperty,
	                    hasDontEnumBug = false,
	                    dontEnums = [],
	                    dontEnumsLength = -1;

	                hasDontEnumBug = !{
	                    toString: null
	                }.propertyIsEnumerable('toString');

	                dontEnums = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor'];

	                dontEnumsLength = dontEnums.length;

	                return function (obj) {
	                    var result = [],
	                        prop = '',
	                        i = -1;

	                    if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' && (typeof obj !== 'function' || obj === null)) {
	                        throw new TypeError('Object.keys called on non-object');
	                    }

	                    for (prop in obj) {
	                        if (hasOwnProperty.call(obj, prop)) {
	                            result.push(prop);
	                        }
	                    }

	                    if (hasDontEnumBug) {
	                        for (i = 0; i < dontEnumsLength; i++) {
	                            if (hasOwnProperty.call(obj, dontEnums[i])) {
	                                result.push(dontEnums[i]);
	                            }
	                        }
	                    }

	                    return result;
	                };
	            }();
	        }

	        // Array.isArray
	        // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray

	        if (!Array.isArray) {
	            Array.isArray = function (arg) {
	                return Object.prototype.toString.call(arg) === '[object Array]';
	            };
	        }

	        // Object.create
	        // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/create

	        if (typeof Object.create !== 'function') {
	            Object.create = function (undefined) {
	                var Temp = function Temp() {};

	                return function (prototype, propertiesObject) {
	                    if (prototype !== Object(prototype) && prototype !== null) {
	                        throw TypeError('Argument must be an object, or null');
	                    }

	                    Temp.prototype = prototype || {};

	                    var result = new Temp();

	                    Temp.prototype = null;

	                    if (propertiesObject !== undefined) {
	                        Object.defineProperties(result, propertiesObject);
	                    }

	                    if (prototype === null) {
	                        /* jshint ignore:start */
	                        result.__proto__ = null;
	                        /* jshint ignore:end */
	                    }

	                    return result;
	                };
	            }();
	        }

	        // String.prototyoe.trim

	        if (!String.prototype.trim) {
	            String.prototype.trim = function () {
	                return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
	            };
	        }

	        // Array.prototype.indexOf
	        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

	        if (!Array.prototype.indexOf) {
	            Array.prototype.indexOf = function (searchElement) {
	                var n, k, t, len;

	                if (this === null) {
	                    throw new TypeError();
	                }

	                t = Object(this);

	                len = t.length >>> 0;

	                if (len === 0) {
	                    return -1;
	                }

	                n = 0;

	                if (arguments.length > 1) {
	                    n = Number(arguments[1]);

	                    if (n !== n) {
	                        n = 0;
	                    } else if (n !== 0 && n !== Infinity && n !== -Infinity) {
	                        n = (n > 0 || -1) * Math.floor(Math.abs(n));
	                    }
	                }

	                if (n >= len) {
	                    return -1;
	                }

	                for (k = n >= 0 ? n : Math.max(len - Math.abs(n), 0); k < len; k++) {
	                    if (k in t && t[k] === searchElement) {
	                        return k;
	                    }
	                }

	                return -1;
	            };
	        }

	        // Function.prototype.bind
	        // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_objects/Function/bind

	        if (!Function.prototype.bind) {
	            Function.prototype.bind = function (oThis) {
	                var aArgs, self, FNOP, fBound;

	                if (typeof this !== 'function') {
	                    throw new TypeError();
	                }

	                aArgs = Array.prototype.slice.call(arguments, 1);

	                self = this;

	                FNOP = function FNOP() {};

	                fBound = function fBound() {
	                    return self.apply(this instanceof FNOP ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
	                };

	                if (this.prototype) {
	                    FNOP.prototype = this.prototype;
	                }

	                fBound.prototype = new FNOP();

	                return fBound;
	            };
	        }

	        // Element.prototype.dispatchEvent

	        if (!window.Element.prototype.dispatchEvent) {
	            window.Element.prototype.dispatchEvent = function (event) {
	                try {
	                    return this.fireEvent('on' + event.type, event);
	                } catch (err) {}
	            };
	        }
	    })();

	    /**
	     * The `mixitup()` "factory" function creates and returns individual instances
	     * of MixItUp, known as "mixers", on which API methods can be called.
	     *
	     * When loading MixItUp via a script tag, the factory function is accessed
	     * via the global variable `mixitup`. When using a module loading
	     * system (e.g. ES2015, CommonJS, RequireJS), the factory function is
	     * exported into your module when you require the MixItUp library.
	     *
	     * @example
	     * mixitup(container [,config] [,foreignDoc])
	     *
	     * @example <caption>Example 1: Creating a mixer instance with an element reference</caption>
	     * var containerEl = document.querySelector('.container');
	     *
	     * var mixer = mixitup(containerEl);
	     *
	     * @example <caption>Example 2: Creating a mixer instance with a selector string</caption>
	     * var mixer = mixitup('.container');
	     *
	     * @example <caption>Example 3: Passing a configuration object</caption>
	     * var mixer = mixitup(containerEl, {
	     *     animation: {
	     *         effects: 'fade scale(0.5)'
	     *     }
	     * });
	     *
	     * @example <caption>Example 4: Passing an iframe reference</caption>
	     * var mixer = mixitup(containerEl, config, foreignDocument);
	     *
	     * @global
	     * @namespace
	     * @public
	     * @kind        function
	     * @since       3.0.0
	     * @param       {(Element|string)}  container
	     *      A DOM element or selector string representing the container(s) on which to instantiate MixItUp.
	     * @param       {object}            [config]
	     *      An optional "configuration object" used to customize the behavior of the MixItUp instance.
	     * @param       {object}            [foreignDoc]
	     *      An optional reference to a `document`, which can be used to control a MixItUp instance in an iframe.
	     * @return      {mixitup.Mixer}
	     *      A "mixer" object holding the MixItUp instance.
	     */

	    _mixitup = function mixitup(container, config, foreignDoc) {
	        var el = null,
	            returnCollection = false,
	            instance = null,
	            facade = null,
	            doc = null,
	            output = null,
	            instances = [],
	            id = '',
	            elements = [],
	            i = -1;

	        doc = foreignDoc || window.document;

	        if (returnCollection = arguments[3]) {
	            // A non-documented 4th paramater enabling control of multiple instances

	            returnCollection = typeof returnCollection === 'boolean';
	        }

	        if (typeof container === 'string') {
	            elements = doc.querySelectorAll(container);
	        } else if (container && (typeof container === 'undefined' ? 'undefined' : _typeof(container)) === 'object' && h.isElement(container, doc)) {
	            elements = [container];
	        } else if (container && (typeof container === 'undefined' ? 'undefined' : _typeof(container)) === 'object' && container.length) {
	            // Although not documented, the container may also be an array-like list of
	            // elements such as a NodeList or jQuery collection, is returnCollection is true

	            elements = container;
	        } else {
	            throw new Error(_mixitup.messages.errorFactoryInvalidContainer());
	        }

	        if (elements.length < 1) {
	            throw new Error(_mixitup.messages.errorFactoryContainerNotFound());
	        }

	        for (i = 0; el = elements[i]; i++) {
	            if (i > 0 && !returnCollection) break;

	            if (!el.id) {
	                id = 'MixItUp' + h.randomHex();

	                el.id = id;
	            } else {
	                id = el.id;
	            }

	            if (_mixitup.instances[id] instanceof _mixitup.Mixer) {
	                instance = _mixitup.instances[id];

	                if (!config || config && config.debug && config.debug.showWarnings !== false) {
	                    console.warn(_mixitup.messages.warningFactoryPreexistingInstance());
	                }
	            } else {
	                instance = new _mixitup.Mixer();

	                instance.attach(el, doc, id, config);

	                _mixitup.instances[id] = instance;
	            }

	            facade = new _mixitup.Facade(instance);

	            if (config && config.debug && config.debug.enable) {
	                instances.push(instance);
	            } else {
	                instances.push(facade);
	            }
	        }

	        if (returnCollection) {
	            output = new _mixitup.Collection(instances);
	        } else {
	            // Return the first instance regardless

	            output = instances[0];
	        }

	        return output;
	    };

	    /**
	     * The `.use()` static method is used to extend the functionality of mixitup with compatible
	     * extensions and libraries in an environment with modular scoping e.g. ES2015, CommonJS, or RequireJS.
	     *
	     * You need only call the `.use()` function once per project, per extension, as module loaders
	     * will cache a single reference to MixItUp inclusive of all changes made.
	     *
	     * @example
	     * mixitup.use(extension)
	     *
	     * @example <caption>Example 1: Extending MixItUp with the Pagination Extension</caption>
	     *
	     * import mixitup from 'mixitup';
	     * import mixitupPagination from 'mixitup-pagination';
	     *
	     * mixitup.use(mixitupPagination);
	     *
	     * // All mixers created by the factory function in all modules will now
	     * // have pagination functionality
	     *
	     * var mixer = mixitup('.container');
	     *
	     * @example <caption>Example 2: Activating the legacy jQuery API</caption>
	     *
	     * import mixitup from 'mixitup';
	     * import $ from 'jquery';
	     *
	     * mixitup.use($);
	     *
	     * // MixItUp can now be used as a jQuery plugin, as per the v2 API
	     *
	     * $('.container').mixitup();
	     *
	     * @public
	     * @name     use
	     * @memberof mixitup
	     * @kind     function
	     * @static
	     * @since    3.0.0
	     * @param    {*}  extension   A reference to the extension or library to be used.
	     * @return   {void}
	     */

	    _mixitup.use = function (extension) {
	        _mixitup.Base.prototype.callActions.call(_mixitup, 'beforeUse', arguments);

	        // Call the extension's factory function, passing
	        // the mixitup factory as a paramater

	        if (typeof extension === 'function' && extension.TYPE === 'mixitup-extension') {
	            // Mixitup extension

	            if (typeof _mixitup.extensions[extension.NAME] === 'undefined') {
	                extension(_mixitup);

	                _mixitup.extensions[extension.NAME] = extension;
	            }
	        } else if (extension.fn && extension.fn.jquery) {
	            // jQuery

	            _mixitup.libraries.$ = extension;

	            // Register MixItUp as a jQuery plugin to allow v2 API

	            _mixitup.registerJqPlugin(extension);
	        }

	        _mixitup.Base.prototype.callActions.call(_mixitup, 'afterUse', arguments);
	    };

	    /**
	     * @private
	     * @static
	     * @since   3.0.0
	     * @param   {jQuery} $
	     * @return  {void}
	     */

	    _mixitup.registerJqPlugin = function ($) {
	        $.fn.mixItUp = function () {
	            var method = arguments[0],
	                config = arguments[1],
	                args = Array.prototype.slice.call(arguments, 1),
	                outputs = [],
	                chain = [];

	            chain = this.each(function () {
	                var instance = null,
	                    output = null;

	                if (method && typeof method === 'string') {
	                    // jQuery-UI method syntax

	                    instance = _mixitup.instances[this.id];

	                    output = instance[method].apply(instance, args);

	                    if (typeof output !== 'undefined' && output !== null && typeof output.then !== 'function') outputs.push(output);
	                } else {
	                    _mixitup(this, config);
	                }
	            });

	            if (outputs.length) {
	                return outputs.length > 1 ? outputs : outputs[0];
	            } else {
	                return chain;
	            }
	        };
	    };

	    _mixitup.instances = {};
	    _mixitup.extensions = {};
	    _mixitup.libraries = {};

	    /**
	     * @private
	     */

	    h = {

	        /**
	         * @private
	         * @param   {HTMLElement}   el
	         * @param   {string}        cls
	         * @return  {boolean}
	         */

	        hasClass: function hasClass(el, cls) {
	            return !!el.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
	        },

	        /**
	         * @private
	         * @param   {HTMLElement}   el
	         * @param   {string}        cls
	         * @return  {void}
	         */

	        addClass: function addClass(el, cls) {
	            if (!this.hasClass(el, cls)) el.className += el.className ? ' ' + cls : cls;
	        },

	        /**
	         * @private
	         * @param   {HTMLElement}   el
	         * @param   {string}        cls
	         * @return  {void}
	         */

	        removeClass: function removeClass(el, cls) {
	            if (this.hasClass(el, cls)) {
	                var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');

	                el.className = el.className.replace(reg, ' ').trim();
	            }
	        },

	        /**
	         * Merges the properties of the source object onto the
	         * target object. Alters the target object.
	         *
	         * @private
	         * @param   {object}    destination
	         * @param   {object}    source
	         * @param   {boolean}   [deep=false]
	         * @param   {boolean}   [handleErrors=false]
	         * @return  {void}
	         */

	        extend: function extend(destination, source, deep, handleErrors) {
	            var sourceKeys = [],
	                key = '',
	                i = -1;

	            deep = deep || false;
	            handleErrors = handleErrors || false;

	            try {
	                if (Array.isArray(source)) {
	                    for (i = 0; i < source.length; i++) {
	                        sourceKeys.push(i);
	                    }
	                } else if (source) {
	                    sourceKeys = Object.keys(source);
	                }

	                for (i = 0; i < sourceKeys.length; i++) {
	                    key = sourceKeys[i];

	                    if (!deep || _typeof(source[key]) !== 'object' || this.isElement(source[key])) {
	                        // All non-object properties, or all properties if shallow extend

	                        destination[key] = source[key];
	                    } else if (Array.isArray(source[key])) {
	                        // Arrays

	                        if (!destination[key]) {
	                            destination[key] = [];
	                        }

	                        this.extend(destination[key], source[key], deep, handleErrors);
	                    } else {
	                        // Objects

	                        if (!destination[key]) {
	                            destination[key] = {};
	                        }

	                        this.extend(destination[key], source[key], deep, handleErrors);
	                    }
	                }
	            } catch (err) {
	                if (handleErrors) {
	                    this.handleExtendError(err, destination);
	                } else {
	                    throw err;
	                }
	            }

	            return destination;
	        },

	        /**
	         * @private
	         * @param   {Error}  err
	         * @param   {object} destination
	         * @return  {void}
	         */

	        handleExtendError: function handleExtendError(err, destination) {
	            var re = /property "?(\w*)"?[,:] object/i,
	                matches = null,
	                erroneous = '',
	                message = '',
	                suggestion = '',
	                probableMatch = '',
	                key = '',
	                mostMatchingChars = -1,
	                i = -1;

	            if (err instanceof TypeError && (matches = re.exec(err.message))) {
	                erroneous = matches[1];

	                for (key in destination) {
	                    i = 0;

	                    while (i < erroneous.length && erroneous.charAt(i) === key.charAt(i)) {
	                        i++;
	                    }

	                    if (i > mostMatchingChars) {
	                        mostMatchingChars = i;
	                        probableMatch = key;
	                    }
	                }

	                if (mostMatchingChars > 1) {
	                    suggestion = _mixitup.messages.errorConfigInvalidPropertySuggestion({
	                        probableMatch: probableMatch
	                    });
	                }

	                message = _mixitup.messages.errorConfigInvalidProperty({
	                    erroneous: erroneous,
	                    suggestion: suggestion
	                });

	                throw new TypeError(message);
	            }

	            throw err;
	        },

	        /**
	         * @private
	         * @param   {string} str
	         * @return  {function}
	         */

	        template: function template(str) {
	            var re = /\${([\w]*)}/g,
	                dynamics = {},
	                matches = null;

	            while (matches = re.exec(str)) {
	                dynamics[matches[1]] = new RegExp('\\${' + matches[1] + '}', 'g');
	            }

	            return function (data) {
	                var key = '',
	                    output = str;

	                data = data || {};

	                for (key in dynamics) {
	                    output = output.replace(dynamics[key], typeof data[key] !== 'undefined' ? data[key] : '');
	                }

	                return output;
	            };
	        },

	        /**
	         * @private
	         * @param   {HTMLElement}   el
	         * @param   {string}        type
	         * @param   {function}      fn
	         * @param   {boolean}       useCapture
	         * @return  {void}
	         */

	        on: function on(el, type, fn, useCapture) {
	            if (!el) return;

	            if (el.addEventListener) {
	                el.addEventListener(type, fn, useCapture);
	            } else if (el.attachEvent) {
	                el['e' + type + fn] = fn;

	                el[type + fn] = function () {
	                    el['e' + type + fn](window.event);
	                };

	                el.attachEvent('on' + type, el[type + fn]);
	            }
	        },

	        /**
	         * @private
	         * @param   {HTMLElement}   el
	         * @param   {string}        type
	         * @param   {function}      fn
	         * @return  {void}
	         */

	        off: function off(el, type, fn) {
	            if (!el) return;

	            if (el.removeEventListener) {
	                el.removeEventListener(type, fn, false);
	            } else if (el.detachEvent) {
	                el.detachEvent('on' + type, el[type + fn]);
	                el[type + fn] = null;
	            }
	        },

	        /**
	         * @private
	         * @param   {string}      eventType
	         * @param   {object}      detail
	         * @param   {Document}    [doc]
	         * @return  {CustomEvent}
	         */

	        getCustomEvent: function getCustomEvent(eventType, detail, doc) {
	            var event = null;

	            doc = doc || window.document;

	            if (typeof window.CustomEvent === 'function') {
	                event = new window.CustomEvent(eventType, {
	                    detail: detail,
	                    bubbles: true,
	                    cancelable: true
	                });
	            } else if (typeof doc.createEvent === 'function') {
	                event = doc.createEvent('CustomEvent');
	                event.initCustomEvent(eventType, true, true, detail);
	            } else {
	                event = doc.createEventObject(), event.type = eventType;

	                event.returnValue = false;
	                event.cancelBubble = false;
	                event.detail = detail;
	            }

	            return event;
	        },

	        /**
	         * @private
	         * @param   {Event} e
	         * @return  {Event}
	         */

	        getOriginalEvent: function getOriginalEvent(e) {
	            if (e.touches && e.touches.length) {
	                return e.touches[0];
	            } else if (e.changedTouches && e.changedTouches.length) {
	                return e.changedTouches[0];
	            } else {
	                return e;
	            }
	        },

	        /**
	         * @private
	         * @param   {HTMLElement}   el
	         * @param   {string}        selector
	         * @return  {Number}
	         */

	        index: function index(el, selector) {
	            var i = 0;

	            while ((el = el.previousElementSibling) !== null) {
	                if (!selector || el.matches(selector)) {
	                    ++i;
	                }
	            }

	            return i;
	        },

	        /**
	         * Converts a dash or snake-case string to camel case.
	         *
	         * @private
	         * @param   {string}    str
	         * @param   {boolean}   [isPascal]
	         * @return  {string}
	         */

	        camelCase: function camelCase(str) {
	            return str.toLowerCase().replace(/([_-][a-z])/g, function ($1) {
	                return $1.toUpperCase().replace(/[_-]/, '');
	            });
	        },

	        /**
	         * Converts a dash or snake-case string to pascal case.
	         *
	         * @private
	         * @param   {string}    str
	         * @param   {boolean}   [isPascal]
	         * @return  {string}
	         */

	        pascalCase: function pascalCase(str) {
	            return (str = this.camelCase(str)).charAt(0).toUpperCase() + str.slice(1);
	        },

	        /**
	         * Converts a camel or pascal-case string to dash case.
	         *
	         * @private
	         * @param   {string}    str
	         * @return  {string}
	         */

	        dashCase: function dashCase(str) {
	            return str.replace(/([A-Z])/g, '-$1').replace(/^-/, '').toLowerCase();
	        },

	        /**
	         * @private
	         * @param   {HTMLElement}       el
	         * @param   {HTMLHtmlElement}   [doc]
	         * @return  {boolean}
	         */

	        isElement: function isElement(el, doc) {
	            doc = doc || window.document;

	            if (window.HTMLElement && el instanceof window.HTMLElement) {
	                return true;
	            } else if (doc.defaultView && doc.defaultView.HTMLElement && el instanceof doc.defaultView.HTMLElement) {
	                return true;
	            } else {
	                return el !== null && el.nodeType === 1 && typeof el.nodeName === 'string';
	            }
	        },

	        /**
	         * @private
	         * @param   {string}            htmlString
	         * @param   {HTMLHtmlElement}   [doc]
	         * @return  {DocumentFragment}
	         */

	        createElement: function createElement(htmlString, doc) {
	            var frag = null,
	                temp = null;

	            doc = doc || window.document;

	            frag = doc.createDocumentFragment();
	            temp = doc.createElement('div');

	            temp.innerHTML = htmlString;

	            while (temp.firstChild) {
	                frag.appendChild(temp.firstChild);
	            }

	            return frag;
	        },

	        /**
	         * @private
	         * @param   {Node} node
	         * @return  {void}
	         */

	        removeWhitespace: function removeWhitespace(node) {
	            var deleting;

	            while (node && node.nodeName === '#text') {
	                deleting = node;

	                node = node.previousSibling;

	                deleting.parentElement && deleting.parentElement.removeChild(deleting);
	            }
	        },

	        /**
	         * @private
	         * @param   {Array<*>}  a
	         * @param   {Array<*>}  b
	         * @return  {boolean}
	         */

	        isEqualArray: function isEqualArray(a, b) {
	            var i = a.length;

	            if (i !== b.length) return false;

	            while (i--) {
	                if (a[i] !== b[i]) return false;
	            }

	            return true;
	        },

	        /**
	         * @private
	         * @param   {object}  a
	         * @param   {object}  b
	         * @return  {boolean}
	         */

	        deepEquals: function deepEquals(a, b) {
	            var key;

	            if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object' && a && (typeof b === 'undefined' ? 'undefined' : _typeof(b)) === 'object' && b) {
	                if (Object.keys(a).length !== Object.keys(b).length) return false;

	                for (key in a) {
	                    if (!b.hasOwnProperty(key) || !this.deepEquals(a[key], b[key])) return false;
	                }
	            } else if (a !== b) {
	                return false;
	            }

	            return true;
	        },

	        /**
	         * @private
	         * @param   {Array<*>}  oldArray
	         * @return  {Array<*>}
	         */

	        arrayShuffle: function arrayShuffle(oldArray) {
	            var newArray = oldArray.slice(),
	                len = newArray.length,
	                i = len,
	                p = -1,
	                t = [];

	            while (i--) {
	                p = ~~(Math.random() * len);
	                t = newArray[i];

	                newArray[i] = newArray[p];
	                newArray[p] = t;
	            }

	            return newArray;
	        },

	        /**
	         * @private
	         * @param   {object}    list
	         */

	        arrayFromList: function arrayFromList(list) {
	            var output, i;

	            try {
	                return Array.prototype.slice.call(list);
	            } catch (err) {
	                output = [];

	                for (i = 0; i < list.length; i++) {
	                    output.push(list[i]);
	                }

	                return output;
	            }
	        },

	        /**
	         * @private
	         * @param   {function}  func
	         * @param   {Number}    wait
	         * @param   {boolean}   immediate
	         * @return  {function}
	         */

	        debounce: function debounce(func, wait, immediate) {
	            var timeout;

	            return function () {
	                var self = this,
	                    args = arguments,
	                    callNow = immediate && !timeout,
	                    later = null;

	                later = function later() {
	                    timeout = null;

	                    if (!immediate) {
	                        func.apply(self, args);
	                    }
	                };

	                clearTimeout(timeout);

	                timeout = setTimeout(later, wait);

	                if (callNow) func.apply(self, args);
	            };
	        },

	        /**
	         * @private
	         * @param   {HTMLElement}   element
	         * @return  {object}
	         */

	        position: function position(element) {
	            var xPosition = 0,
	                yPosition = 0,
	                offsetParent = element;

	            while (element) {
	                xPosition -= element.scrollLeft;
	                yPosition -= element.scrollTop;

	                if (element === offsetParent) {
	                    xPosition += element.offsetLeft;
	                    yPosition += element.offsetTop;

	                    offsetParent = element.offsetParent;
	                }

	                element = element.parentElement;
	            }

	            return {
	                x: xPosition,
	                y: yPosition
	            };
	        },

	        /**
	         * @private
	         * @param   {object}    node1
	         * @param   {object}    node2
	         * @return  {Number}
	         */

	        getHypotenuse: function getHypotenuse(node1, node2) {
	            var distanceX = node1.x - node2.x,
	                distanceY = node1.y - node2.y;

	            distanceX = distanceX < 0 ? distanceX * -1 : distanceX, distanceY = distanceY < 0 ? distanceY * -1 : distanceY;

	            return Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
	        },

	        /**
	         * Calcuates the area of intersection between two rectangles and expresses it as
	         * a ratio in comparison to the area of the first rectangle.
	         *
	         * @private
	         * @param   {Rect}  box1
	         * @param   {Rect}  box2
	         * @return  {number}
	         */

	        getIntersectionRatio: function getIntersectionRatio(box1, box2) {
	            var controlArea = box1.width * box1.height,
	                intersectionX = -1,
	                intersectionY = -1,
	                intersectionArea = -1,
	                ratio = -1;

	            intersectionX = Math.max(0, Math.min(box1.left + box1.width, box2.left + box2.width) - Math.max(box1.left, box2.left));

	            intersectionY = Math.max(0, Math.min(box1.top + box1.height, box2.top + box2.height) - Math.max(box1.top, box2.top));

	            intersectionArea = intersectionY * intersectionX;

	            ratio = intersectionArea / controlArea;

	            return ratio;
	        },

	        /**
	         * @private
	         * @param   {object}            el
	         * @param   {string}            selector
	         * @param   {boolean}           [includeSelf]
	         * @param   {HTMLHtmlElement}   [doc]
	         * @return  {Element|null}
	         */

	        closestParent: function closestParent(el, selector, includeSelf, doc) {
	            var parent = el.parentNode;

	            doc = doc || window.document;

	            if (includeSelf && el.matches(selector)) {
	                return el;
	            }

	            while (parent && parent != doc.body) {
	                if (parent.matches && parent.matches(selector)) {
	                    return parent;
	                } else if (parent.parentNode) {
	                    parent = parent.parentNode;
	                } else {
	                    return null;
	                }
	            }

	            return null;
	        },

	        /**
	         * @private
	         * @param   {HTMLElement}       el
	         * @param   {string}            selector
	         * @param   {HTMLHtmlElement}   [doc]
	         * @return  {NodeList}
	         */

	        children: function children(el, selector, doc) {
	            var children = [],
	                tempId = '';

	            doc = doc || window.doc;

	            if (el) {
	                if (!el.id) {
	                    tempId = 'Temp' + this.randomHexKey();

	                    el.id = tempId;
	                }

	                children = doc.querySelectorAll('#' + el.id + ' > ' + selector);

	                if (tempId) {
	                    el.removeAttribute('id');
	                }
	            }

	            return children;
	        },

	        /**
	         * Creates a clone of a provided array, with any empty strings removed.
	         *
	         * @private
	         * @param   {Array<*>} originalArray
	         * @return  {Array<*>}
	         */

	        clean: function clean(originalArray) {
	            var cleanArray = [],
	                i = -1;

	            for (i = 0; i < originalArray.length; i++) {
	                if (originalArray[i] !== '') {
	                    cleanArray.push(originalArray[i]);
	                }
	            }

	            return cleanArray;
	        },

	        /**
	         * Abstracts an ES6 promise into a q-like deferred interface for storage and deferred resolution.
	         *
	         * @private
	         * @param  {object} libraries
	         * @return {h.Deferred}
	         */

	        defer: function defer(libraries) {
	            var deferred = null,
	                promiseWrapper = null,
	                $ = null;

	            promiseWrapper = new this.Deferred();

	            if (_mixitup.features.has.promises) {
	                // ES6 native promise or polyfill

	                promiseWrapper.promise = new Promise(function (resolve, reject) {
	                    promiseWrapper.resolve = resolve;
	                    promiseWrapper.reject = reject;
	                });
	            } else if (($ = window.jQuery || libraries.$) && typeof $.Deferred === 'function') {
	                // jQuery

	                deferred = $.Deferred();

	                promiseWrapper.promise = deferred.promise();
	                promiseWrapper.resolve = deferred.resolve;
	                promiseWrapper.reject = deferred.reject;
	            } else if (window.console) {
	                // No implementation

	                console.warn(_mixitup.messages.warningNoPromiseImplementation());
	            }

	            return promiseWrapper;
	        },

	        /**
	         * @private
	         * @param   {Array<Promise>}    tasks
	         * @param   {object}            libraries
	         * @return  {Promise<Array>}
	         */

	        all: function all(tasks, libraries) {
	            var $ = null;

	            if (_mixitup.features.has.promises) {
	                return Promise.all(tasks);
	            } else if (($ = window.jQuery || libraries.$) && typeof $.when === 'function') {
	                return $.when.apply($, tasks).done(function () {
	                    // jQuery when returns spread arguments rather than an array or resolutions

	                    return arguments;
	                });
	            }

	            // No implementation

	            if (window.console) {
	                console.warn(_mixitup.messages.warningNoPromiseImplementation());
	            }

	            return [];
	        },

	        /**
	         * @private
	         * @param   {HTMLElement}   el
	         * @param   {string}        property
	         * @param   {Array<string>} vendors
	         * @return  {string}
	         */

	        getPrefix: function getPrefix(el, property, vendors) {
	            var i = -1,
	                prefix = '';

	            if (h.dashCase(property) in el.style) return '';

	            for (i = 0; prefix = vendors[i]; i++) {
	                if (prefix + property in el.style) {
	                    return prefix.toLowerCase();
	                }
	            }

	            return 'unsupported';
	        },

	        /**
	         * @private
	         * @return  {string}
	         */

	        randomHex: function randomHex() {
	            return ('00000' + (Math.random() * 16777216 << 0).toString(16)).substr(-6).toUpperCase();
	        },

	        /**
	         * @private
	         * @param   {HTMLDocument}  [doc]
	         * @return  {object}
	         */

	        getDocumentState: function getDocumentState(doc) {
	            doc = _typeof(doc.body) === 'object' ? doc : window.document;

	            return {
	                scrollTop: window.pageYOffset,
	                scrollLeft: window.pageXOffset,
	                docHeight: doc.documentElement.scrollHeight
	            };
	        },

	        /**
	         * @private
	         * @param   {object}    obj
	         * @param   {function}  fn
	         * @return  {function}
	         */

	        bind: function bind(obj, fn) {
	            return function () {
	                return fn.apply(obj, arguments);
	            };
	        },

	        /**
	         * @private
	         * @param   {HTMLElement}   el
	         * @return  {boolean}
	         */

	        isVisible: function isVisible(el) {
	            var styles = null;

	            if (el.offsetParent) return true;

	            styles = window.getComputedStyle(el);

	            if (styles.position === 'fixed' && styles.visibility !== 'hidden' && styles.opacity !== '0') {
	                // Fixed elements report no offsetParent,
	                // but may still be invisible

	                return true;
	            }

	            return false;
	        },

	        /**
	         * @private
	         * @param   {object}    obj
	         */

	        seal: function seal(obj) {
	            if (typeof Object.seal === 'function') {
	                Object.seal(obj);
	            }
	        },

	        /**
	         * @private
	         * @param   {object}    obj
	         */

	        freeze: function freeze(obj) {
	            if (typeof Object.freeze === 'function') {
	                Object.freeze(obj);
	            }
	        },

	        /**
	         * @private
	         * @param   {string}    control
	         * @param   {string}    specimen
	         * @return  {boolean}
	         */

	        compareVersions: function compareVersions(control, specimen) {
	            var controlParts = control.split('.'),
	                specimenParts = specimen.split('.'),
	                controlPart = -1,
	                specimenPart = -1,
	                i = -1;

	            for (i = 0; i < controlParts.length; i++) {
	                controlPart = parseInt(controlParts[i].replace(/[^\d.]/g, ''));
	                specimenPart = parseInt(specimenParts[i].replace(/[^\d.]/g, '') || 0);

	                if (specimenPart < controlPart) {
	                    return false;
	                } else if (specimenPart > controlPart) {
	                    return true;
	                }
	            }

	            return true;
	        },

	        /**
	         * @private
	         * @constructor
	         */

	        Deferred: function Deferred() {
	            this.promise = null;
	            this.resolve = null;
	            this.reject = null;
	            this.id = h.randomHex();
	        },

	        /**
	         * @private
	         * @param   {object}  obj
	         * @return  {boolean}
	         */

	        isEmptyObject: function isEmptyObject(obj) {
	            var key = '';

	            if (typeof Object.keys === 'function') {
	                return Object.keys(obj).length === 0;
	            }

	            for (key in obj) {
	                if (obj.hasOwnProperty(key)) {
	                    return false;
	                }
	            }

	            return true;
	        },

	        /**
	         * @param   {mixitup.Config.ClassNames}   classNames
	         * @param   {string}                      elementName
	         * @param   {string}                      [modifier]
	         * @return  {string}
	         */

	        getClassname: function getClassname(classNames, elementName, modifier) {
	            var classname = '';

	            classname += classNames.block;

	            if (classname.length) {
	                classname += classNames.delineatorElement;
	            }

	            classname += classNames['element' + this.pascalCase(elementName)];

	            if (!modifier) return classname;

	            if (classname.length) {
	                classname += classNames.delineatorModifier;
	            }

	            classname += modifier;

	            return classname;
	        },

	        /**
	         * Returns the value of a property on a given object via its string key.
	         *
	         * @param   {object}    obj
	         * @param   {string}    stringKey
	         * @return  {*} value
	         */

	        getProperty: function getProperty(obj, stringKey) {
	            var parts = stringKey.split('.'),
	                returnCurrent = null,
	                current = '',
	                i = 0;

	            if (!stringKey) {
	                return obj;
	            }

	            returnCurrent = function returnCurrent(obj) {
	                if (!obj) {
	                    return null;
	                } else {
	                    return obj[current];
	                }
	            };

	            while (i < parts.length) {
	                current = parts[i];

	                obj = returnCurrent(obj);

	                i++;
	            }

	            if (typeof obj !== 'undefined') {
	                return obj;
	            } else {
	                return null;
	            }
	        }
	    };

	    _mixitup.h = h;

	    /**
	     * The Base class adds instance methods to all other extensible MixItUp classes,
	     * enabling the calling of any registered hooks.
	     *
	     * @constructor
	     * @namespace
	     * @memberof    mixitup
	     * @private
	     * @since       3.0.0
	     */

	    _mixitup.Base = function () {};

	    _mixitup.Base.prototype = {
	        constructor: _mixitup.Base,

	        /**
	         * Calls any registered hooks for the provided action.
	         *
	         * @memberof    mixitup.Base
	         * @private
	         * @instance
	         * @since       2.0.0
	         * @param       {string}    actionName
	         * @param       {Array<*>}  args
	         * @return      {void}
	         */

	        callActions: function callActions(actionName, args) {
	            var self = this,
	                hooks = self.constructor.actions[actionName],
	                extensionName = '';

	            if (!hooks || h.isEmptyObject(hooks)) return;

	            for (extensionName in hooks) {
	                hooks[extensionName].apply(self, args);
	            }
	        },

	        /**
	         * Calls any registered hooks for the provided filter.
	         *
	         * @memberof    mixitup.Base
	         * @private
	         * @instance
	         * @since       2.0.0
	         * @param       {string}    filterName
	         * @param       {*}         input
	         * @param       {Array<*>}  args
	         * @return      {*}
	         */

	        callFilters: function callFilters(filterName, input, args) {
	            var self = this,
	                hooks = self.constructor.filters[filterName],
	                output = input,
	                extensionName = '';

	            if (!hooks || h.isEmptyObject(hooks)) return output;

	            args = args || [];

	            for (extensionName in hooks) {
	                args = h.arrayFromList(args);

	                args.unshift(output);

	                output = hooks[extensionName].apply(self, args);
	            }

	            return output;
	        }
	    };

	    /**
	     * The BaseStatic class holds a set of static methods which are then added to all other
	     * extensible MixItUp classes as a means of integrating extensions via the addition of new
	     * methods and/or actions and hooks.
	     *
	     * @constructor
	     * @namespace
	     * @memberof    mixitup
	     * @private
	     * @since       3.0.0
	     */

	    _mixitup.BaseStatic = function () {
	        this.actions = {};
	        this.filters = {};

	        /**
	         * Performs a shallow extend on the class's prototype, adding one or more new members to
	         * the class in a single operation.
	         *
	         * @memberof    mixitup.BaseStatic
	         * @public
	         * @static
	         * @since       2.1.0
	         * @param       {object} extension
	         * @return      {void}
	         */

	        this.extend = function (extension) {
	            h.extend(this.prototype, extension);
	        };

	        /**
	         * Registers a function to be called on the action hook of the provided name.
	         *
	         * @memberof    mixitup.BaseStatic
	         * @public
	         * @static
	         * @since       2.1.0
	         * @param       {string}    hookName
	         * @param       {string}    extensionName
	         * @param       {function}  func
	         * @return      {void}
	         */

	        this.registerAction = function (hookName, extensionName, func) {
	            (this.actions[hookName] = this.actions[hookName] || {})[extensionName] = func;
	        };

	        /**
	         * Registers a function to be called on the filter of the provided name.
	         *
	         * @memberof    mixitup.BaseStatic
	         * @public
	         * @static
	         * @since       2.1.0
	         * @param       {string}    hookName
	         * @param       {string}    extensionName
	         * @param       {function}  func
	         * @return      {void}
	         */

	        this.registerFilter = function (hookName, extensionName, func) {
	            (this.filters[hookName] = this.filters[hookName] || {})[extensionName] = func;
	        };
	    };

	    /**
	     * The `mixitup.Features` class performs all feature and CSS prefix detection
	     * neccessary for MixItUp to function correctly, as well as storing various
	     * string and array constants. All feature decection is on evaluation of the
	     * library and stored in a singleton instance for use by other internal classes.
	     *
	     * @constructor
	     * @namespace
	     * @memberof    mixitup
	     * @private
	     * @since       3.0.0
	     */

	    _mixitup.Features = function () {
	        _mixitup.Base.call(this);

	        this.callActions('beforeConstruct');

	        this.boxSizingPrefix = '';
	        this.transformPrefix = '';
	        this.transitionPrefix = '';

	        this.boxSizingPrefix = '';
	        this.transformProp = '';
	        this.transformRule = '';
	        this.transitionProp = '';
	        this.perspectiveProp = '';
	        this.perspectiveOriginProp = '';

	        this.has = new _mixitup.Has();

	        this.canary = null;

	        this.BOX_SIZING_PROP = 'boxSizing';
	        this.TRANSITION_PROP = 'transition';
	        this.TRANSFORM_PROP = 'transform';
	        this.PERSPECTIVE_PROP = 'perspective';
	        this.PERSPECTIVE_ORIGIN_PROP = 'perspectiveOrigin';
	        this.VENDORS = ['Webkit', 'moz', 'O', 'ms'];

	        this.TWEENABLE = ['opacity', 'width', 'height', 'marginRight', 'marginBottom', 'x', 'y', 'scale', 'translateX', 'translateY', 'translateZ', 'rotateX', 'rotateY', 'rotateZ'];

	        this.callActions('afterConstruct');
	    };

	    _mixitup.BaseStatic.call(_mixitup.Features);

	    _mixitup.Features.prototype = Object.create(_mixitup.Base.prototype);

	    h.extend(_mixitup.Features.prototype,
	    /** @lends mixitup.Features */
	    {
	        constructor: _mixitup.Features,

	        /**
	         * @private
	         * @return  {void}
	         */

	        init: function init() {
	            var self = this;

	            self.callActions('beforeInit', arguments);

	            self.canary = document.createElement('div');

	            self.setPrefixes();
	            self.runTests();

	            self.callActions('beforeInit', arguments);
	        },

	        /**
	         * @private
	         * @return  {void}
	         */

	        runTests: function runTests() {
	            var self = this;

	            self.callActions('beforeRunTests', arguments);

	            self.has.promises = typeof window.Promise === 'function';
	            self.has.transitions = self.transitionPrefix !== 'unsupported';

	            self.callActions('afterRunTests', arguments);

	            h.freeze(self.has);
	        },

	        /**
	         * @private
	         * @return  {void}
	         */

	        setPrefixes: function setPrefixes() {
	            var self = this;

	            self.callActions('beforeSetPrefixes', arguments);

	            self.transitionPrefix = h.getPrefix(self.canary, 'Transition', self.VENDORS);
	            self.transformPrefix = h.getPrefix(self.canary, 'Transform', self.VENDORS);
	            self.boxSizingPrefix = h.getPrefix(self.canary, 'BoxSizing', self.VENDORS);

	            self.boxSizingProp = self.boxSizingPrefix ? self.boxSizingPrefix + h.pascalCase(self.BOX_SIZING_PROP) : self.BOX_SIZING_PROP;

	            self.transitionProp = self.transitionPrefix ? self.transitionPrefix + h.pascalCase(self.TRANSITION_PROP) : self.TRANSITION_PROP;

	            self.transformProp = self.transformPrefix ? self.transformPrefix + h.pascalCase(self.TRANSFORM_PROP) : self.TRANSFORM_PROP;

	            self.transformRule = self.transformPrefix ? '-' + self.transformPrefix + '-' + self.TRANSFORM_PROP : self.TRANSFORM_PROP;

	            self.perspectiveProp = self.transformPrefix ? self.transformPrefix + h.pascalCase(self.PERSPECTIVE_PROP) : self.PERSPECTIVE_PROP;

	            self.perspectiveOriginProp = self.transformPrefix ? self.transformPrefix + h.pascalCase(self.PERSPECTIVE_ORIGIN_PROP) : self.PERSPECTIVE_ORIGIN_PROP;

	            self.callActions('afterSetPrefixes', arguments);
	        }
	    });

	    /**
	     * @constructor
	     * @memberof    mixitup
	     * @private
	     * @since       3.0.0
	     */

	    _mixitup.Has = function () {
	        this.transitions = false;
	        this.promises = false;

	        h.seal(this);
	    };

	    // Assign a singleton instance to `mixitup.features` and initialise:

	    _mixitup.features = new _mixitup.Features();

	    _mixitup.features.init();

	    /**
	     * A group of properties defining the mixer's animation and effects settings.
	     *
	     * @constructor
	     * @memberof    mixitup.Config
	     * @name        animation
	     * @namespace
	     * @public
	     * @since       2.0.0
	     */

	    _mixitup.ConfigAnimation = function () {
	        _mixitup.Base.call(this);

	        this.callActions('beforeConstruct');

	        /**
	         * A boolean dictating whether or not animation should be enabled for the MixItUp instance.
	         * If `false`, all operations will occur instantly and syncronously, although callback
	         * functions and any returned promises will still be fulfilled.
	         *
	         * @example <caption>Example: Create a mixer with all animations disabled</caption>
	         * var mixer = mixitup(containerEl, {
	         *     animation: {
	         *         enable: false
	         *     }
	         * });
	         *
	         * @name        enable
	         * @memberof    mixitup.Config.animation
	         * @instance
	         * @type        {boolean}
	         * @default     true
	         */

	        this.enable = true;

	        /**
	         * A string of one or more space-seperated properties to which transitions will be
	         * applied for all filtering animations.
	         *
	         * Properties can be listed any order or combination, although they will be applied in a specific
	         * predefined order to produce consistent results.
	         *
	         * To learn more about available effects, experiment with our <a href="https://www.kunkalabs.com/mixitup/">
	         * sandbox demo</a> and try out the "Export config" button in the Animation options drop down.
	         *
	         * @example <caption>Example: Apply "fade" and "translateZ" effects to all animations</caption>
	         * // As targets are filtered in and out, they will fade between
	         * // opacity 1 and 0 and transform between translateZ(-100px) and
	         * // translateZ(0).
	         *
	         * var mixer = mixitup(containerEl, {
	         *     animation: {
	         *         effects: 'fade translateZ(-100px)'
	         *     }
	         * });
	         *
	         * @name        effects
	         * @memberof    mixitup.Config.animation
	         * @instance
	         * @type        {string}
	         * @default     'fade scale'
	         */

	        this.effects = 'fade scale';

	        /**
	         * A string of one or more space-seperated effects to be applied only to filter-in
	         * animations, overriding `config.animation.effects` if set.
	         *
	         * @example <caption>Example: Apply downwards vertical translate to targets being filtered in</caption>
	         *
	         * var mixer = mixitup(containerEl, {
	         *     animation: {
	         *         effectsIn: 'fade translateY(-100%)'
	         *     }
	         * });
	         *
	         * @name        effectsIn
	         * @memberof    mixitup.Config.animation
	         * @instance
	         * @type        {string}
	         * @default     ''
	         */

	        this.effectsIn = '';

	        /**
	         * A string of one or more space-seperated effects to be applied only to filter-out
	         * animations, overriding `config.animation.effects` if set.
	         *
	         * @example <caption>Example: Apply upwards vertical translate to targets being filtered out</caption>
	         *
	         * var mixer = mixitup(containerEl, {
	         *     animation: {
	         *         effectsOut: 'fade translateY(-100%)'
	         *     }
	         * });
	         *
	         * @name        effectsOut
	         * @memberof    mixitup.Config.animation
	         * @instance
	         * @type        {string}
	         * @default     ''
	         */

	        this.effectsOut = '';

	        /**
	         * An integer dictating the duration of all MixItUp animations in milliseconds, not
	         * including any additional delay apllied via the `'stagger'` effect.
	         *
	         * @example <caption>Example: Apply an animation duration of 200ms to all mixitup animations</caption>
	         *
	         * var mixer = mixitup(containerEl, {
	         *     animation: {
	         *         duration: 200
	         *     }
	         * });
	         *
	         * @name        duration
	         * @memberof    mixitup.Config.animation
	         * @instance
	         * @type        {number}
	         * @default     600
	         */

	        this.duration = 600;

	        /**
	         * A valid CSS3 transition-timing function or shorthand. For a full list of accepted
	         * values, visit <a href="http://easings.net" target="_blank">easings.net</a>.
	         *
	         * @example <caption>Example 1: Apply "ease-in-out" easing to all animations</caption>
	         *
	         * var mixer = mixitup(containerEl, {
	         *     animation: {
	         *         easing: 'ease-in-out'
	         *     }
	         * });
	         *
	         * @example <caption>Example 2: Apply a custom "cubic-bezier" easing function to all animations</caption>
	         * var mixer = mixitup(containerEl, {
	         *     animation: {
	         *         easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)'
	         *     }
	         * });
	         *
	         * @name        easing
	         * @memberof    mixitup.Config.animation
	         * @instance
	         * @type        {string}
	         * @default     'ease'
	         */

	        this.easing = 'ease';

	        /**
	         * A boolean dictating whether or not to apply perspective to the MixItUp container
	         * during animations. By default, perspective is always applied and creates the
	         * illusion of three-dimensional space for effects such as `translateZ`, `rotateX`,
	         * and `rotateY`.
	         *
	         * You may wish to disable this and define your own perspective settings via CSS.
	         *
	         * @example <caption>Example: Prevent perspective from being applied to any 3D transforms</caption>
	         * var mixer = mixitup(containerEl, {
	         *     animation: {
	         *         applyPerspective: false
	         *     }
	         * });
	         *
	         * @name        applyPerspective
	         * @memberof    mixitup.Config.animation
	         * @instance
	         * @type        {bolean}
	         * @default     true
	         */

	        this.applyPerspective = true;

	        /**
	         * The perspective distance value to be applied to the container during animations,
	         * affecting any 3D-transform-based effects.
	         *
	         * @example <caption>Example: Set a perspective distance of 2000px</caption>
	         * var mixer = mixitup(containerEl, {
	         *     animation: {
	         *         effects: 'rotateY(-25deg)',
	         *         perspectiveDistance: '2000px'
	         *     }
	         * });
	         *
	         * @name        perspectiveDistance
	         * @memberof    mixitup.Config.animation
	         * @instance
	         * @type        {string}
	         * @default     '3000px'
	         */

	        this.perspectiveDistance = '3000px';

	        /**
	         * The perspective-origin value to be applied to the container during animations,
	         * affecting any 3D-transform-based effects.
	         *
	         * @example <caption>Example: Set a perspective origin in the top-right of the container</caption>
	         * var mixer = mixitup(containerEl, {
	         *     animation: {
	         *         effects: 'transateZ(-200px)',
	         *         perspectiveOrigin: '100% 0'
	         *     }
	         * });
	         *
	         * @name        perspectiveOrigin
	         * @memberof    mixitup.Config.animation
	         * @instance
	         * @type        {string}
	         * @default     '50% 50%'
	         */

	        this.perspectiveOrigin = '50% 50%';

	        /**
	         * A boolean dictating whether or not to enable the queuing of operations.
	         *
	         * If `true` (default), and a control is clicked or an API call is made while another
	         * operation is progress, the operation will go into the queue and will be automatically exectuted
	         * when the previous operaitons is finished.
	         *
	         * If `false`, any requested operations will be ignored, and the `onMixBusy` callback and `mixBusy`
	         * event will be fired. If `debug.showWarnings` is enabled, a console warning will also occur.
	         *
	         * @example <caption>Example: Disable queuing</caption>
	         * var mixer = mixitup(containerEl, {
	         *     animation: {
	         *         queue: false
	         *     }
	         * });
	         *
	         * @name        queue
	         * @memberof    mixitup.Config.animation
	         * @instance
	         * @type        {boolean}
	         * @default     true
	         */

	        this.queue = true;

	        /**
	         * An integer dictacting the maximum number of operations allowed in the queue at
	         * any time, when queuing is enabled.
	         *
	         * @example <caption>Example: Allow a maximum of 5 operations in the queue at any time</caption>
	         * var mixer = mixitup(containerEl, {
	         *     animation: {
	         *         queueLimit: 5
	         *     }
	         * });
	         *
	         * @name        queueLimit
	         * @memberof    mixitup.Config.animation
	         * @instance
	         * @type        {number}
	         * @default     3
	         */

	        this.queueLimit = 3;

	        /**
	         * A boolean dictating whether or not to transition the height and width of the
	         * container as elements are filtered in and out. If disabled, the container height
	         * will change abruptly.
	         *
	         * It may be desirable to disable this on mobile devices as the CSS `height` and
	         * `width` properties do not receive GPU-acceleration and can therefore cause stuttering.
	         *
	         * @example <caption>Example 1: Disable the transitioning of the container height and/or width</caption>
	         * var mixer = mixitup(containerEl, {
	         *     animation: {
	         *         animateResizeContainer: false
	         *     }
	         * });
	         *
	         * @example <caption>Example 2: Disable the transitioning of the container height and/or width for mobile devices only</caption>
	         * var mixer = mixitup(containerEl, {
	         *     animation: {
	         *         animateResizeContainer: myFeatureTests.isMobile ? false : true
	         *     }
	         * });
	         *
	         * @name        animateResizeContainer
	         * @memberof    mixitup.Config.animation
	         * @instance
	         * @type        {boolean}
	         * @default     true
	         */

	        this.animateResizeContainer = true;

	        /**
	         * A boolean dictating whether or not to transition the height and width of target
	         * elements as they change throughout the course of an animation.
	         *
	         * This is often a must for flex-box grid layouts where the size of target elements may change
	         * depending on final their position in relation to their siblings, or for `.changeLayout()`
	         * operations where the size of targets change between layouts.
	         *
	         * NB: This feature requires additional calculations and manipulation to non-hardware-accelerated
	         * properties which may adversely affect performance on slower devices, and is therefore
	         * disabled by default.
	         *
	         * @example <caption>Example: Enable the transitioning of target widths and heights</caption>
	         * var mixer = mixitup(containerEl, {
	         *     animation: {
	         *         animateResizeTargets: true
	         *     }
	         * });
	         *
	         * @name        animateResizeTargets
	         * @memberof    mixitup.Config.animation
	         * @instance
	         * @type        {boolean}
	         * @default     false
	         */

	        this.animateResizeTargets = false;

	        /**
	         * A custom function used to manipulate the order in which the stagger delay is
	         * incremented when using the ‘stagger’ effect.
	         *
	         * When using the 'stagger' effect, the delay applied to each target element is incremented
	         * based on its index. You may create a custom function to manipulate the order in which the
	         * delay is incremented and create engaging non-linear stagger effects.
	         *
	         * The function receives the index of the target element as a parameter, and must
	         * return an integer which serves as the multiplier for the stagger delay.
	         *
	         * @example <caption>Example 1: Stagger target elements by column in a 3-column grid</caption>
	         * var mixer = mixitup(containerEl, {
	         *     animation: {
	         *         effects: 'fade stagger(100ms)',
	         *         staggerSequence: function(i) {
	         *             return i % 3;
	         *         }
	         *     }
	         * });
	         *
	         * @example <caption>Example 2: Using an algorithm to produce a more complex sequence</caption>
	         * var mixer = mixitup(containerEl, {
	         *     animation: {
	         *         effects: 'fade stagger(100ms)',
	         *         staggerSequence: function(i) {
	         *             return (2*i) - (5*((i/3) - ((1/3) * (i%3))));
	         *         }
	         *     }
	         * });
	         *
	         * @name        staggerSequence
	         * @memberof    mixitup.Config.animation
	         * @instance
	         * @type        {function}
	         * @default     null
	         */

	        this.staggerSequence = null;

	        /**
	         * A boolean dictating whether or not to reverse the direction of `translate`
	         * and `rotate` transforms for elements being filtered out.
	         *
	         * It can be used to create carousel-like animations where elements enter and exit
	         * from opposite directions. If enabled, the effect `translateX(-100%)` for elements
	         * being filtered in would become `translateX(100%)` for targets being filtered out.
	         *
	         * This functionality can also be achieved by providing seperate effects
	         * strings for `config.animation.effectsIn` and `config.animation.effectsOut`.
	         *
	         * @example <caption>Example: Reverse the desired direction on any translate/rotate effect for targets being filtered out</caption>
	         * // Elements being filtered in will be translated from '100%' to '0' while
	         * // elements being filtered out will be translated from 0 to '-100%'
	         *
	         * var mixer = mixitup(containerEl, {
	         *     animation: {
	         *         effects: 'fade translateX(100%)',
	         *         reverseOut: true,
	         *         nudge: false // Disable nudging to create a carousel-like effect
	         *     }
	         * });
	         *
	         * @name        reverseOut
	         * @memberof    mixitup.Config.animation
	         * @instance
	         * @type        {boolean}
	         * @default     false
	         */

	        this.reverseOut = false;

	        /**
	         * A boolean dictating whether or not to "nudge" the animation path of targets
	         * when they are being filtered in and out simulatenously.
	         *
	         * This has been the default behavior of MixItUp since version 1, but it
	         * may be desirable to disable this effect when filtering directly from
	         * one exclusive set of targets to a different exclusive set of targets,
	         * to create a carousel-like effect, or a generally more subtle animation.
	         *
	         * @example <caption>Example: Disable the "nudging" of targets being filtered in and out simulatenously</caption>
	         *
	         * var mixer = mixitup(containerEl, {
	         *     animation: {
	         *         nudge: false
	         *     }
	         * });
	         *
	         * @name        nudge
	         * @memberof    mixitup.Config.animation
	         * @instance
	         * @type        {boolean}
	         * @default     true
	         */

	        this.nudge = true;

	        /**
	         * A boolean dictating whether or not to clamp the height of the container while MixItUp's
	         * geometry tests are carried out before an operation.
	         *
	         * To prevent scroll-bar flicker, clamping is turned on by default. But in the case where the
	         * height of the container might affect its vertical positioning in the viewport
	         * (e.g. a vertically-centered container), this should be turned off to ensure accurate
	         * test results and a smooth animation.
	         *
	         * @example <caption>Example: Disable container height-clamping</caption>
	         *
	         * var mixer = mixitup(containerEl, {
	         *     animation: {
	         *         clampHeight: false
	         *     }
	         * });
	         *
	         * @name        clampHeight
	         * @memberof    mixitup.Config.animation
	         * @instance
	         * @type        {boolean}
	         * @default     true
	         */

	        this.clampHeight = true;

	        this.callActions('afterConstruct');

	        h.seal(this);
	    };

	    _mixitup.BaseStatic.call(_mixitup.ConfigAnimation);

	    _mixitup.ConfigAnimation.prototype = Object.create(_mixitup.Base.prototype);

	    _mixitup.ConfigAnimation.prototype.constructor = _mixitup.ConfigAnimation;

	    /**
	     * A group of optional callback functions to be invoked at various
	     * points within the lifecycle of a mixer operation.
	     *
	     * Each function is analogous to an event of the same name triggered from the
	     * container element, and is invoked immediately after it.
	     *
	     * All callback functions receive the current `state` object as their first
	     * argument, as well as other more specific arguments described below.
	     *
	     * @constructor
	     * @memberof    mixitup.Config
	     * @name        callbacks
	     * @namespace
	     * @public
	     * @since       2.0.0
	     */

	    _mixitup.ConfigCallbacks = function () {
	        _mixitup.Base.call(this);

	        this.callActions('beforeConstruct');

	        /**
	         * A callback function invoked immediately after any MixItUp operation is requested
	         * and before animations have begun.
	         *
	         * A second `futureState` argument is passed to the function which represents the final
	         * state of the mixer once the requested operation has completed.
	         *
	         * @example <caption>Example: Adding an `onMixStart` callback function</caption>
	         * var mixer = mixitup(containerEl, {
	         *     callbacks: {
	         *         onMixStart: function(state, futureState) {
	         *              console.log('Starting operation...');
	         *         }
	         *     }
	         * });
	         *
	         * @name        onMixStart
	         * @memberof    mixitup.Config.callbacks
	         * @instance
	         * @type        {function}
	         * @default     null
	         */

	        this.onMixStart = null;

	        /**
	         * A callback function invoked when a MixItUp operation is requested while another
	         * operation is in progress, and the animation queue is full, or queueing
	         * is disabled.
	         *
	         * @example <caption>Example: Adding an `onMixBusy` callback function</caption>
	         * var mixer = mixitup(containerEl, {
	         *     callbacks: {
	         *         onMixBusy: function(state) {
	         *              console.log('Mixer busy');
	         *         }
	         *     }
	         * });
	         *
	         * @name        onMixBusy
	         * @memberof    mixitup.Config.callbacks
	         * @instance
	         * @type        {function}
	         * @default     null
	         */

	        this.onMixBusy = null;

	        /**
	         * A callback function invoked after any MixItUp operation has completed, and the
	         * state has been updated.
	         *
	         * @example <caption>Example: Adding an `onMixEnd` callback function</caption>
	         * var mixer = mixitup(containerEl, {
	         *     callbacks: {
	         *         onMixEnd: function(state) {
	         *              console.log('Operation complete');
	         *         }
	         *     }
	         * });
	         *
	         * @name        onMixEnd
	         * @memberof    mixitup.Config.callbacks
	         * @instance
	         * @type        {function}
	         * @default     null
	         */

	        this.onMixEnd = null;

	        /**
	         * A callback function invoked whenever an operation "fails", i.e. no targets
	         * could be found matching the requested filter.
	         *
	         * @example <caption>Example: Adding an `onMixFail` callback function</caption>
	         * var mixer = mixitup(containerEl, {
	         *     callbacks: {
	         *         onMixFail: function(state) {
	         *              console.log('No items could be found matching the requested filter');
	         *         }
	         *     }
	         * });
	         *
	         * @name        onMixFail
	         * @memberof    mixitup.Config.callbacks
	         * @instance
	         * @type        {function}
	         * @default     null
	         */

	        this.onMixFail = null;

	        /**
	         * A callback function invoked whenever a MixItUp control is clicked, and before its
	         * respective operation is requested.
	         *
	         * The clicked element is assigned to the `this` keyword within the function. The original
	         * click event is passed to the function as the second argument, which can be useful if
	         * using `<a>` tags as controls where the default behavior needs to be prevented.
	         *
	         * Returning `false` from the callback will prevent the control click from triggering
	         * an operation.
	         *
	         * @example <caption>Example 1: Adding an `onMixClick` callback function</caption>
	         * var mixer = mixitup(containerEl, {
	         *     callbacks: {
	         *         onMixClick: function(state, originalEvent) {
	         *              console.log('The control "' + this.innerText + '" was clicked');
	         *         }
	         *     }
	         * });
	         *
	         * @example <caption>Example 2: Using `onMixClick` to manipulate the original click event</caption>
	         * var mixer = mixitup(containerEl, {
	         *     callbacks: {
	         *         onMixClick: function(state, originalEvent) {
	         *              // Prevent original click event from bubbling up:
	         *              originalEvent.stopPropagation();
	         *
	         *              // Prevent default behavior of clicked element:
	         *              originalEvent.preventDefault();
	         *         }
	         *     }
	         * });
	         *
	         * @example <caption>Example 3: Using `onMixClick` to conditionally cancel operations</caption>
	         * var mixer = mixitup(containerEl, {
	         *     callbacks: {
	         *         onMixClick: function(state, originalEvent) {
	         *              // Perform some conditional check:
	         *
	         *              if (myApp.isLoading) {
	         *                  // By returning false, we can prevent the control click from triggering an operation.
	         *
	         *                  return false;
	         *              }
	         *         }
	         *     }
	         * });
	         *
	         * @name        onMixClick
	         * @memberof    mixitup.Config.callbacks
	         * @instance
	         * @type        {function}
	         * @default     null
	         */

	        this.onMixClick = null;

	        this.callActions('afterConstruct');

	        h.seal(this);
	    };

	    _mixitup.BaseStatic.call(_mixitup.ConfigCallbacks);

	    _mixitup.ConfigCallbacks.prototype = Object.create(_mixitup.Base.prototype);

	    _mixitup.ConfigCallbacks.prototype.constructor = _mixitup.ConfigCallbacks;

	    /**
	     * A group of properties relating to clickable control elements.
	     *
	     * @constructor
	     * @memberof    mixitup.Config
	     * @name        controls
	     * @namespace
	     * @public
	     * @since       2.0.0
	     */

	    _mixitup.ConfigControls = function () {
	        _mixitup.Base.call(this);

	        this.callActions('beforeConstruct');

	        /**
	         * A boolean dictating whether or not controls should be enabled for the mixer instance.
	         *
	         * If `true` (default behavior), MixItUp will search the DOM for any clickable elements with
	         * `data-filter`, `data-sort` or `data-toggle` attributes, and bind them for click events.
	         *
	         * If `false`, no click handlers will be bound, and all functionality must therefore be performed
	         * via the mixer's API methods.
	         *
	         * If you do not intend to use the default controls, setting this property to `false` will
	         * marginally improve the startup time of your mixer instance, and will also prevent any other active
	         * mixer instances in the DOM which are bound to controls from controlling the instance.
	         *
	         * @example <caption>Example: Disabling controls</caption>
	         * var mixer = mixitup(containerEl, {
	         *     controls: {
	         *         enable: false
	         *     }
	         * });
	         *
	         * // With the default controls disabled, we can only control
	         * // the mixer via its API methods, e.g.:
	         *
	         * mixer.filter('.cat-1');
	         *
	         * @name        enable
	         * @memberof    mixitup.Config.controls
	         * @instance
	         * @type        {boolean}
	         * @default     true
	         */

	        this.enable = true;

	        /**
	         * A boolean dictating whether or not to use event delegation when binding click events
	         * to the default controls.
	         *
	         * If `false` (default behavior), each control button in the DOM will be found and
	         * individually bound when a mixer is instantiated, with their corresponding actions
	         * cached for performance.
	         *
	         * If `true`, a single click handler will be applied to the `window` (or container element - see
	         * `config.controls.scope`), and any click events triggered by elements with `data-filter`,
	         * `data-sort` or `data-toggle` attributes present will be handled as they propagate upwards.
	         *
	         * If you require a user interface where control buttons may be added, removed, or changed during the
	         * lifetime of a mixer, `controls.live` should be set to `true`. There is a marginal but unavoidable
	         * performance deficit when using live controls, as the value of each control button must be read
	         * from the DOM in real time once the click event has propagated.
	         *
	         * @example <caption>Example: Setting live controls</caption>
	         * var mixer = mixitup(containerEl, {
	         *     controls: {
	         *         live: true
	         *     }
	         * });
	         *
	         * // Control buttons can now be added, remove and changed without breaking
	         * // the mixer's UI
	         *
	         * @name        live
	         * @memberof    mixitup.Config.controls
	         * @instance
	         * @type        {boolean}
	         * @default     true
	         */

	        this.live = false;

	        /**
	         * A string dictating the "scope" to use when binding or querying the default controls. The available
	         * values are `'global'` or `'local'`.
	         *
	         * When set to `'global'` (default behavior), MixItUp will query the entire document for control buttons
	         * to bind, or delegate click events from (see `config.controls.live`).
	         *
	         * When set to `'local'`, MixItUp will only query (or bind click events to) its own container element.
	         * This may be desireable if you require multiple active mixer instances within the same document, with
	         * controls that would otherwise intefere with each other if scoped globally.
	         *
	         * Conversely, if you wish to control multiple instances with a single UI, you would create one
	         * set of controls and keep the controls scope of each mixer set to `global`.
	         *
	         * @example <caption>Example: Setting 'local' scoped controls</caption>
	         * var mixerOne = mixitup(containerOne, {
	         *     controls: {
	         *         scope: 'local'
	         *     }
	         * });
	         *
	         * var mixerTwo = mixitup(containerTwo, {
	         *     controls: {
	         *         scope: 'local'
	         *     }
	         * });
	         *
	         * // Both mixers can now exist within the same document with
	         * // isolated controls placed within their container elements.
	         *
	         * @name        scope
	         * @memberof    mixitup.Config.controls
	         * @instance
	         * @type        {string}
	         * @default     'global'
	         */

	        this.scope = 'global'; // enum: ['local' ,'global']

	        /**
	         * A string dictating the type of logic to apply when concatenating the filter selectors of
	         * active toggle buttons (i.e. any clickable element with a `data-toggle` attribute).
	         *
	         * If set to `'or'` (default behavior), selectors will be concatenated together as
	         * a comma-seperated list. For example:
	         *
	         * `'.cat-1, .cat-2'` (shows any elements matching `'.cat-1'` OR `'.cat-2'`)
	         *
	         * If set to `'and'`, selectors will be directly concatenated together. For example:
	         *
	         * `'.cat-1.cat-2'` (shows any elements which match both `'.cat-1'` AND `'.cat-2'`)
	         *
	         * @example <caption>Example: Setting "and" toggle logic</caption>
	         * var mixer = mixitup(containerEl, {
	         *     controls: {
	         *         toggleLogic: 'and'
	         *     }
	         * });
	         *
	         * @name        toggleLogic
	         * @memberof    mixitup.Config.controls
	         * @instance
	         * @type        {string}
	         * @default     'or'
	         */

	        this.toggleLogic = 'or'; // enum: ['or', 'and']

	        /**
	         * A string dictating the filter behavior when all toggles are inactive.
	         *
	         * When set to `'all'` (default behavior), *all* targets will be shown by default
	         * when no toggles are active, or at the moment all active toggles are toggled off.
	         *
	         * When set to `'none'`, no targets will be shown by default when no toggles are
	         * active, or at the moment all active toggles are toggled off.
	         *
	         * @example <caption>Example 1: Setting the default toggle behavior to `'all'`</caption>
	         * var mixer = mixitup(containerEl, {
	         *     controls: {
	         *         toggleDefault: 'all'
	         *     }
	         * });
	         *
	         * mixer.toggleOn('.cat-2')
	         *     .then(function() {
	         *         // Deactivate all active toggles
	         *
	         *         return mixer.toggleOff('.cat-2')
	         *     })
	         *     .then(function(state) {
	         *          console.log(state.activeFilter.selector); // 'all'
	         *          console.log(state.totalShow); // 12
	         *     });
	         *
	         * @example <caption>Example 2: Setting the default toggle behavior to `'none'`</caption>
	         * var mixer = mixitup(containerEl, {
	         *     controls: {
	         *         toggleDefault: 'none'
	         *     }
	         * });
	         *
	         * mixer.toggleOn('.cat-2')
	         *     .then(function() {
	         *         // Deactivate all active toggles
	         *
	         *         return mixer.toggleOff('.cat-2')
	         *     })
	         *     .then(function(state) {
	         *          console.log(state.activeFilter.selector); // 'none'
	         *          console.log(state.totalShow); // 0
	         *     });
	         *
	         * @name        toggleDefault
	         * @memberof    mixitup.Config.controls
	         * @instance
	         * @type        {string}
	         * @default     'all'
	         */

	        this.toggleDefault = 'all'; // enum: ['all', 'none']

	        this.callActions('afterConstruct');

	        h.seal(this);
	    };

	    _mixitup.BaseStatic.call(_mixitup.ConfigControls);

	    _mixitup.ConfigControls.prototype = Object.create(_mixitup.Base.prototype);

	    _mixitup.ConfigControls.prototype.constructor = _mixitup.ConfigControls;

	    /**
	     * A group of properties defining the output and structure of class names programmatically
	     * added to controls and containers to reflect the state of the mixer.
	     *
	     * Most commonly, class names are added to controls by MixItUp to indicate that
	     * the control is active so that it can be styled accordingly - `'mixitup-control-active'` by default.
	     *
	     * Using a "BEM" like structure, each classname is broken into the three parts:
	     * a block namespace (`'mixitup'`), an element name (e.g. `'control'`), and an optional modifier
	     * name (e.g. `'active'`) reflecting the state of the element.
	     *
	     * By default, each part of the classname is concatenated together using single hyphens as
	     * delineators, but this can be easily customised to match the naming convention and style of
	     * your project.
	     *
	     * @constructor
	     * @memberof    mixitup.Config
	     * @name        classNames
	     * @namespace
	     * @public
	     * @since       3.0.0
	     */

	    _mixitup.ConfigClassNames = function () {
	        _mixitup.Base.call(this);

	        this.callActions('beforeConstruct');

	        /**
	         * The "block" portion, or top-level namespace added to the start of any class names created by MixItUp.
	         *
	         * @example <caption>Example 1: changing the `config.classNames.block` value</caption>
	         * var mixer = mixitup(containerEl, {
	         *     classNames: {
	         *         block: 'portfolio'
	         *     }
	         * });
	         *
	         * // Active control output: "portfolio-control-active"
	         *
	         * @example <caption>Example 2: Removing `config.classNames.block`</caption>
	         * var mixer = mixitup(containerEl, {
	         *     classNames: {
	         *         block: ''
	         *     }
	         * });
	         *
	         * // Active control output: "control-active"
	         *
	         * @name        block
	         * @memberof    mixitup.Config.classNames
	         * @instance
	         * @type        {string}
	         * @default     'mixitup'
	         */

	        this.block = 'mixitup';

	        /**
	         * The "element" portion of the class name added to container.
	         *
	         * @name        elementContainer
	         * @memberof    mixitup.Config.classNames
	         * @instance
	         * @type        {string}
	         * @default     'container'
	         */

	        this.elementContainer = 'container';

	        /**
	         * The "element" portion of the class name added to filter controls.
	         *
	         * By default, all filter, sort, multimix and toggle controls take the same element value of `'control'`, but
	         * each type's element value can be individually overwritten to match the unique classNames of your controls as needed.
	         *
	         * @example <caption>Example 1: changing the `config.classNames.elementFilter` value</caption>
	         * var mixer = mixitup(containerEl, {
	         *     classNames: {
	         *         elementFilter: 'filter'
	         *     }
	         * });
	         *
	         * // Active filter output: "mixitup-filter-active"
	         *
	         * @example <caption>Example 2: changing the `config.classNames.block` and `config.classNames.elementFilter` values</caption>
	         * var mixer = mixitup(containerEl, {
	         *     classNames: {
	         *         block: 'portfolio',
	         *         elementFilter: 'filter'
	         *     }
	         * });
	         *
	         * // Active filter output: "portfolio-filter-active"
	         *
	         * @name        elementFilter
	         * @memberof    mixitup.Config.classNames
	         * @instance
	         * @type        {string}
	         * @default     'control'
	         */

	        this.elementFilter = 'control';

	        /**
	         * The "element" portion of the class name added to sort controls.
	         *
	         * By default, all filter, sort, multimix and toggle controls take the same element value of `'control'`, but
	         * each type's element value can be individually overwritten to match the unique classNames of your controls as needed.
	         *
	         * @example <caption>Example 1: changing the `config.classNames.elementSort` value</caption>
	         * var mixer = mixitup(containerEl, {
	         *     classNames: {
	         *         elementSort: 'sort'
	         *     }
	         * });
	         *
	         * // Active sort output: "mixitup-sort-active"
	         *
	         * @example <caption>Example 2: changing the `config.classNames.block` and `config.classNames.elementSort` values</caption>
	         * var mixer = mixitup(containerEl, {
	         *     classNames: {
	         *         block: 'portfolio',
	         *         elementSort: 'sort'
	         *     }
	         * });
	         *
	         * // Active sort output: "portfolio-sort-active"
	         *
	         * @name        elementSort
	         * @memberof    mixitup.Config.classNames
	         * @instance
	         * @type        {string}
	         * @default     'control'
	         */

	        this.elementSort = 'control';

	        /**
	         * The "element" portion of the class name added to multimix controls.
	         *
	         * By default, all filter, sort, multimix and toggle controls take the same element value of `'control'`, but
	         * each type's element value can be individually overwritten to match the unique classNames of your controls as needed.
	         *
	         * @example <caption>Example 1: changing the `config.classNames.elementMultimix` value</caption>
	         * var mixer = mixitup(containerEl, {
	         *     classNames: {
	         *         elementMultimix: 'multimix'
	         *     }
	         * });
	         *
	         * // Active multimix output: "mixitup-multimix-active"
	         *
	         * @example <caption>Example 2: changing the `config.classNames.block` and `config.classNames.elementMultimix` values</caption>
	         * var mixer = mixitup(containerEl, {
	         *     classNames: {
	         *         block: 'portfolio',
	         *         elementSort: 'multimix'
	         *     }
	         * });
	         *
	         * // Active multimix output: "portfolio-multimix-active"
	         *
	         * @name        elementMultimix
	         * @memberof    mixitup.Config.classNames
	         * @instance
	         * @type        {string}
	         * @default     'control'
	         */

	        this.elementMultimix = 'control';

	        /**
	         * The "element" portion of the class name added to toggle controls.
	         *
	         * By default, all filter, sort, multimix and toggle controls take the same element value of `'control'`, but
	         * each type's element value can be individually overwritten to match the unique classNames of your controls as needed.
	         *
	         * @example <caption>Example 1: changing the `config.classNames.elementToggle` value</caption>
	         * var mixer = mixitup(containerEl, {
	         *     classNames: {
	         *         elementToggle: 'toggle'
	         *     }
	         * });
	         *
	         * // Active toggle output: "mixitup-toggle-active"
	         *
	         * @example <caption>Example 2: changing the `config.classNames.block` and `config.classNames.elementToggle` values</caption>
	         * var mixer = mixitup(containerEl, {
	         *     classNames: {
	         *         block: 'portfolio',
	         *         elementToggle: 'toggle'
	         *     }
	         * });
	         *
	         * // Active toggle output: "portfolio-toggle-active"
	         *
	         * @name        elementToggle
	         * @memberof    mixitup.Config.classNames
	         * @instance
	         * @type        {string}
	         * @default     'control'
	         */

	        this.elementToggle = 'control';

	        /**
	         * The "modifier" portion of the class name added to active controls.
	         * @name        modifierActive
	         * @memberof    mixitup.Config.classNames
	         * @instance
	         * @type        {string}
	         * @default     'active'
	         */

	        this.modifierActive = 'active';

	        /**
	         * The "modifier" portion of the class name added to disabled controls.
	         *
	         * @name        modifierDisabled
	         * @memberof    mixitup.Config.classNames
	         * @instance
	         * @type        {string}
	         * @default     'disabled'
	         */

	        this.modifierDisabled = 'disabled';

	        /**
	         * The "modifier" portion of the class name added to the container when in a "failed" state.
	         *
	         * @name        modifierFailed
	         * @memberof    mixitup.Config.classNames
	         * @instance
	         * @type        {string}
	         * @default     'failed'
	         */

	        this.modifierFailed = 'failed';

	        /**
	         * The delineator used between the "block" and "element" portions of any class name added by MixItUp.
	         *
	         * If the block portion is ommited by setting it to an empty string, no delineator will be added.
	         *
	         * @example <caption>Example: changing the delineator to match BEM convention</caption>
	         * var mixer = mixitup(containerEl, {
	         *     classNames: {
	         *         delineatorElement: '__'
	         *     }
	         * });
	         *
	         * // example active control output: "mixitup__control-active"
	         *
	         * @name        delineatorElement
	         * @memberof    mixitup.Config.classNames
	         * @instance
	         * @type        {string}
	         * @default     '-'
	         */

	        this.delineatorElement = '-';

	        /**
	         * The delineator used between the "element" and "modifier" portions of any class name added by MixItUp.
	         *
	         * If the element portion is ommited by setting it to an empty string, no delineator will be added.
	         *
	         * @example <caption>Example: changing both delineators to match BEM convention</caption>
	         * var mixer = mixitup(containerEl, {
	         *     classNames: {
	         *         delineatorElement: '__'
	         *         delineatorModifier: '--'
	         *     }
	         * });
	         *
	         * // Active control output: "mixitup__control--active"
	         *
	         * @name        delineatorModifier
	         * @memberof    mixitup.Config.classNames
	         * @instance
	         * @type        {string}
	         * @default     '-'
	         */

	        this.delineatorModifier = '-';

	        this.callActions('afterConstruct');

	        h.seal(this);
	    };

	    _mixitup.BaseStatic.call(_mixitup.ConfigClassNames);

	    _mixitup.ConfigClassNames.prototype = Object.create(_mixitup.Base.prototype);

	    _mixitup.ConfigClassNames.prototype.constructor = _mixitup.ConfigClassNames;

	    /**
	     * A group of properties relating to MixItUp's dataset API.
	     *
	     * @constructor
	     * @memberof    mixitup.Config
	     * @name        data
	     * @namespace
	     * @public
	     * @since       3.0.0
	     */

	    _mixitup.ConfigData = function () {
	        _mixitup.Base.call(this);

	        this.callActions('beforeConstruct');

	        /**
	         * A string specifying the name of the key containing your data model's unique
	         * identifier (UID). To use the dataset API, a UID key must be specified and
	         * be present and unique on all objects in the dataset you provide to MixItUp.
	         *
	         * For example, if your dataset is made up of MongoDB documents, the UID
	         * key would be `'id'` or `'_id'`.
	         *
	         * @example <caption>Example: Setting the UID to `'id'`</caption>
	         * var mixer = mixitup(containerEl, {
	         *     data: {
	         *         uidKey: 'id'
	         *     }
	         * });
	         *
	         * @name        uidKey
	         * @memberof    mixitup.Config.data
	         * @instance
	         * @type        {string}
	         * @default     ''
	         */

	        this.uidKey = '';

	        /**
	         * A boolean dictating whether or not MixItUp should "dirty check" each object in
	         * your dataset for changes whenever `.dataset()` is called, and re-render any targets
	         * for which a change is found.
	         *
	         * Depending on the complexity of your data model, dirty checking can be expensive
	         * and is therefore disabled by default.
	         *
	         * NB: For changes to be detected, a new immutable instance of the edited model must be
	         * provided to mixitup, rather than manipulating properties on the existing instance.
	         * If your changes are a result of a DB write and read, you will most likely be calling
	         * `.dataset()` with a clean set of objects each time, so this will not be an issue.
	         *
	         * @example <caption>Example: Enabling dirty checking</caption>
	         *
	         * var myDataset = [
	         *     {
	         *         id: 0,
	         *         title: "Blog Post Title 0"
	         *         ...
	         *     },
	         *     {
	         *         id: 1,
	         *         title: "Blog Post Title 1"
	         *         ...
	         *     }
	         * ];
	         *
	         * // Instantiate a mixer with a pre-loaded dataset, and a target renderer
	         * // function defined
	         *
	         * var mixer = mixitup(containerEl, {
	         *     data: {
	         *         uidKey: 'id',
	         *         dirtyCheck: true
	         *     },
	         *     load: {
	         *         dataset: myDataset
	         *     },
	         *     render: {
	         *         target: function() { ... }
	         *     }
	         * });
	         *
	         * // For illustration, we will clone and edit the second object in the dataset.
	         * // NB: this would typically be done server-side in response to a DB update,
	         * and then re-queried via an API.
	         *
	         * myDataset[1] = Object.assign({}, myDataset[1]);
	         *
	         * myDataset[1].title = 'Blog Post Title 11';
	         *
	         * mixer.dataset(myDataset)
	         *    .then(function() {
	         *        // the target with ID "1", will be re-rendered reflecting its new title
	         *    });
	         *
	         * @name        dirtyCheck
	         * @memberof    mixitup.Config.data
	         * @instance
	         * @type        {boolean}
	         * @default     false
	         */

	        this.dirtyCheck = false;

	        this.callActions('afterConstruct');

	        h.seal(this);
	    };

	    _mixitup.BaseStatic.call(_mixitup.ConfigData);

	    _mixitup.ConfigData.prototype = Object.create(_mixitup.Base.prototype);

	    _mixitup.ConfigData.prototype.constructor = _mixitup.ConfigData;

	    /**
	     * A group of properties allowing the toggling of various debug features.
	     *
	     * @constructor
	     * @memberof    mixitup.Config
	     * @name        debug
	     * @namespace
	     * @public
	     * @since       3.0.0
	     */

	    _mixitup.ConfigDebug = function () {
	        _mixitup.Base.call(this);

	        this.callActions('beforeConstruct');

	        /**
	         * A boolean dictating whether or not the mixer instance returned by the
	         * `mixitup()` factory function should expose private properties and methods.
	         *
	         * By default, mixer instances only expose their public API, but enabling
	         * debug mode will give you access to various mixer internals which may aid
	         * in debugging, or the authoring of extensions.
	         *
	         * @example <caption>Example: Enabling debug mode</caption>
	         *
	         * var mixer = mixitup(containerEl, {
	         *     debug: {
	         *         enable: true
	         *     }
	         * });
	         *
	         * // Private properties and methods will now be visible on the mixer instance:
	         *
	         * console.log(mixer);
	         *
	         * @name        enable
	         * @memberof    mixitup.Config.debug
	         * @instance
	         * @type        {boolean}
	         * @default     false
	         */

	        this.enable = false;

	        /**
	         * A boolean dictating whether or not warnings should be shown when various
	         * common gotchas occur.
	         *
	         * Warnings are intended to provide insights during development when something
	         * occurs that is not a fatal, but may indicate an issue with your integration,
	         * and are therefore turned on by default. However, you may wish to disable
	         * them in production.
	         *
	         * @example <caption>Example 1: Disabling warnings</caption>
	         *
	         * var mixer = mixitup(containerEl, {
	         *     debug: {
	         *         showWarnings: false
	         *     }
	         * });
	         *
	         * @example <caption>Example 2: Disabling warnings based on environment</caption>
	         *
	         * var showWarnings = myAppConfig.environment === 'development' ? true : false;
	         *
	         * var mixer = mixitup(containerEl, {
	         *     debug: {
	         *         showWarnings: showWarnings
	         *     }
	         * });
	         *
	         * @name        showWarnings
	         * @memberof    mixitup.Config.debug
	         * @instance
	         * @type        {boolean}
	         * @default     true
	         */

	        this.showWarnings = true;

	        /**
	         * Used for server-side testing only.
	         *
	         * @private
	         * @name        fauxAsync
	         * @memberof    mixitup.Config.debug
	         * @instance
	         * @type        {boolean}
	         * @default     false
	         */

	        this.fauxAsync = false;

	        this.callActions('afterConstruct');

	        h.seal(this);
	    };

	    _mixitup.BaseStatic.call(_mixitup.ConfigDebug);

	    _mixitup.ConfigDebug.prototype = Object.create(_mixitup.Base.prototype);

	    _mixitup.ConfigDebug.prototype.constructor = _mixitup.ConfigDebug;

	    /**
	     * A group of properties relating to the layout of the container.
	     *
	     * @constructor
	     * @memberof    mixitup.Config
	     * @name        layout
	     * @namespace
	     * @public
	     * @since       3.0.0
	     */

	    _mixitup.ConfigLayout = function () {
	        _mixitup.Base.call(this);

	        this.callActions('beforeConstruct');

	        /**
	         * A boolean dictating whether or not mixitup should query all descendants
	         * of the container for targets, or only immediate children.
	         *
	         * By default, mixitup will query all descendants matching the
	         * `selectors.target` selector when indexing targets upon instantiation.
	         * This allows for targets to be nested inside a sub-container which is
	         * useful when ring-fencing targets from locally scoped controls in your
	         * markup (see `controls.scope`).
	         *
	         * However, if you are building a more complex UI requiring the nesting
	         * of mixers within mixers, you will most likely want to limit targets to
	         * immediate children of the container by setting this property to `false`.
	         *
	         * @example <caption>Example: Restricting targets to immediate children</caption>
	         *
	         * var mixer = mixitup(containerEl, {
	         *     layout: {
	         *         allowNestedTargets: false
	         *     }
	         * });
	         *
	         * @name        allowNestedTargets
	         * @memberof    mixitup.Config.layout
	         * @instance
	         * @type        {boolean}
	         * @default     true
	         */

	        this.allowNestedTargets = true;

	        /**
	         * A string specifying an optional class name to apply to the container when in
	         * its default state.
	         *
	         * By changing this class name or adding a class name to the container via the
	         * `.changeLayout()` API method, the CSS layout of the container can be changed,
	         * and MixItUp will attemp to gracefully animate the container and its targets
	         * between states.
	         *
	         * @example <caption>Example 1: Specifying a container class name</caption>
	         *
	         * var mixer = mixitup(containerEl, {
	         *     layout: {
	         *         containerClassName: 'grid'
	         *     }
	         * });
	         *
	         * @example <caption>Example 2: Changing the default class name with `.changeLayout()`</caption>
	         *
	         * var mixer = mixitup(containerEl, {
	         *     layout: {
	         *         containerClassName: 'grid'
	         *     }
	         * });
	         *
	         * mixer.changeLayout('list')
	         *     .then(function(state) {
	         *          console.log(state.activeContainerClass); // "list"
	         *     });
	         *
	         * @name        containerClassName
	         * @memberof    mixitup.Config.layout
	         * @instance
	         * @type        {string}
	         * @default     ''
	         */

	        this.containerClassName = '';

	        /**
	         * A reference to a non-target sibling element after which to insert targets
	         * when there are no targets in the container.
	         *
	         * @example <caption>Example: Setting a `siblingBefore` reference element</caption>
	         *
	         * var addButton = containerEl.querySelector('button');
	         *
	         * var mixer = mixitup(containerEl, {
	         *     layout: {
	         *         siblingBefore: addButton
	         *     }
	         * });
	         *
	         * @name        siblingBefore
	         * @memberof    mixitup.Config.layout
	         * @instance
	         * @type        {HTMLElement}
	         * @default     null
	         */

	        this.siblingBefore = null;

	        /**
	         * A reference to a non-target sibling element before which to insert targets
	         * when there are no targets in the container.
	         *
	         * @example <caption>Example: Setting an `siblingAfter` reference element</caption>
	         *
	         * var gap = containerEl.querySelector('.gap');
	         *
	         * var mixer = mixitup(containerEl, {
	         *     layout: {
	         *         siblingAfter: gap
	         *     }
	         * });
	         *
	         * @name        siblingAfter
	         * @memberof    mixitup.Config.layout
	         * @instance
	         * @type        {HTMLElement}
	         * @default     null
	         */

	        this.siblingAfter = null;

	        this.callActions('afterConstruct');

	        h.seal(this);
	    };

	    _mixitup.BaseStatic.call(_mixitup.ConfigLayout);

	    _mixitup.ConfigLayout.prototype = Object.create(_mixitup.Base.prototype);

	    _mixitup.ConfigLayout.prototype.constructor = _mixitup.ConfigLayout;

	    /**
	     * A group of properties defining the initial state of the mixer on load (instantiation).
	     *
	     * @constructor
	     * @memberof    mixitup.Config
	     * @name        load
	     * @namespace
	     * @public
	     * @since       2.0.0
	     */

	    _mixitup.ConfigLoad = function () {
	        _mixitup.Base.call(this);

	        this.callActions('beforeConstruct');

	        /**
	         * A string defining any filtering to be statically applied to the mixer on load.
	         * As per the `.filter()` API, this can be any valid selector string, or the
	         * values `'all'` or `'none'`.
	         *
	         * @example <caption>Example 1: Defining an initial filter selector to be applied on load</caption>
	         *
	         * // The mixer will show only those targets matching '.category-a' on load.
	         *
	         * var mixer = mixitup(containerEl, {
	         *     load: {
	         *         filter: '.category-a'
	         *     }
	         * });
	         *
	         * @example <caption>Example 2: Hiding all targets on load</caption>
	         *
	         * // The mixer will show hide all targets on load.
	         *
	         * var mixer = mixitup(containerEl, {
	         *     load: {
	         *         filter: 'none'
	         *     }
	         * });
	         *
	         * @name        filter
	         * @memberof    mixitup.Config.load
	         * @instance
	         * @type        {string}
	         * @default     'all'
	         */

	        this.filter = 'all';

	        /**
	         * A string defining any sorting to be statically applied to the mixer on load.
	         * As per the `.sort()` API, this should be a valid "sort string" made up of
	         * an attribute to sort by (or `'default'`) followed by an optional sorting
	         * order, or the value `'random'`;
	         *
	         * @example <caption>Example: Defining sorting to be applied on load</caption>
	         *
	         * // The mixer will sort the container by the value of the `data-published-date`
	         * // attribute, in descending order.
	         *
	         * var mixer = mixitup(containerEl, {
	         *     load: {
	         *         sort: 'published-date:desc'
	         *     }
	         * });
	         *
	         * @name        sort
	         * @memberof    mixitup.Config.load
	         * @instance
	         * @type        {string}
	         * @default     'default:asc'
	         */

	        this.sort = 'default:asc';

	        /**
	         * An array of objects representing the underlying data of any pre-rendered targets,
	         * when using the `.dataset()` API.
	         *
	         * NB: If targets are pre-rendered when the mixer is instantiated, this must be set.
	         *
	         * @example <caption>Example: Defining the initial underyling dataset</caption>
	         *
	         * var myDataset = [
	         *     {
	         *         id: 0,
	         *         title: "Blog Post Title 0",
	         *         ...
	         *     },
	         *     {
	         *         id: 1,
	         *         title: "Blog Post Title 1",
	         *         ...
	         *     }
	         * ];
	         *
	         * var mixer = mixitup(containerEl, {
	         *     data: {
	         *         uidKey: 'id'
	         *     },
	         *     load: {
	         *         dataset: myDataset
	         *     }
	         * });
	         *
	         * @name        dataset
	         * @memberof    mixitup.Config.load
	         * @instance
	         * @type        {Array.<object>}
	         * @default     null
	         */

	        this.dataset = null;

	        this.callActions('afterConstruct');

	        h.seal(this);
	    };

	    _mixitup.BaseStatic.call(_mixitup.ConfigLoad);

	    _mixitup.ConfigLoad.prototype = Object.create(_mixitup.Base.prototype);

	    _mixitup.ConfigLoad.prototype.constructor = _mixitup.ConfigLoad;

	    /**
	     * A group of properties defining the selectors used to query elements within a mixitup container.
	     *
	     * @constructor
	     * @memberof    mixitup.Config
	     * @name        selectors
	     * @namespace
	     * @public
	     * @since       3.0.0
	     */

	    _mixitup.ConfigSelectors = function () {
	        _mixitup.Base.call(this);

	        this.callActions('beforeConstruct');

	        /**
	         * A selector string used to query and index target elements within the container.
	         *
	         * By default, the class selector `'.mix'` is used, but this can be changed to an
	         * attribute or element selector to match the style of your project.
	         *
	         * @example <caption>Example 1: Changing the target selector</caption>
	         *
	         * var mixer = mixitup(containerEl, {
	         *     selectors: {
	         *         target: '.portfolio-item'
	         *     }
	         * });
	         *
	         * @example <caption>Example 2: Using an attribute selector as a target selector</caption>
	         *
	         * // The mixer will search for any children with the attribute `data-ref="mix"`
	         *
	         * var mixer = mixitup(containerEl, {
	         *     selectors: {
	         *         target: '[data-ref="mix"]'
	         *     }
	         * });
	         *
	         * @name        target
	         * @memberof    mixitup.Config.selectors
	         * @instance
	         * @type        {string}
	         * @default     '.mix'
	         */

	        this.target = '.mix';

	        /**
	         * A optional selector string used to add further specificity to the querying of control elements,
	         * in addition to their mandatory data attribute (e.g. `data-filter`, `data-toggle`, `data-sort`).
	         *
	         * This can be used if other elements in your document must contain the above attributes
	         * (e.g. for use in third-party scripts), and would otherwise interfere with MixItUp. Adding
	         * an additional `control` selector of your choice allows MixItUp to restrict event handling
	         * to only those elements matching the defined selector.
	         *
	         * @name        control
	         * @memberof    mixitup.Config.selectors
	         * @instance
	         * @type        {string}
	         * @default     ''
	         *
	         * @example <caption>Example 1: Adding a `selectors.control` selector</caption>
	         *
	         * var mixer = mixitup(containerEl, {
	         *     selectors: {
	         *         control: '.mixitup-control'
	         *     }
	         * });
	         *
	         * // Will not be handled:
	         * // <button data-filter=".category-a"></button>
	         *
	         * // Will be handled:
	         * // <button class="mixitup-control" data-filter=".category-a"></button>
	         */

	        this.control = '';

	        this.callActions('afterConstruct');

	        h.seal(this);
	    };

	    _mixitup.BaseStatic.call(_mixitup.ConfigSelectors);

	    _mixitup.ConfigSelectors.prototype = Object.create(_mixitup.Base.prototype);

	    _mixitup.ConfigSelectors.prototype.constructor = _mixitup.ConfigSelectors;

	    /**
	     * A group of optional render functions for creating and updating elements.
	     *
	     * All render functions receive a data object, and should return a valid HTML string.
	     *
	     * @constructor
	     * @memberof    mixitup.Config
	     * @name        render
	     * @namespace
	     * @public
	     * @since       3.0.0
	     */

	    _mixitup.ConfigRender = function () {
	        _mixitup.Base.call(this);

	        this.callActions('beforeConstruct');

	        /**
	         * A function returning an HTML string representing a target element, or a reference to a
	         * single DOM element.
	         *
	         * The function is invoked as part of the `.dataset()` API, whenever a new item is added
	         * to the dataset, or an item in the dataset changes (if `dataset.dirtyCheck` is enabled).
	         *
	         * The function receives the relevant dataset item as its first parameter.
	         *
	         * @example <caption>Example 1: Using string concatenation</caption>
	         *
	         * var mixer = mixitup(containerEl, {
	         *     render: {
	         *         target: function(item) {
	         *             return (
	         *                 '&lt;div class="mix"&gt;' +
	         *                     '&lt;h2&gt;' + item.title + '&lt;/h2&gt;' +
	         *                 '&lt;/div&gt;'
	         *             );
	         *         }
	         *     }
	         * });
	         *
	         * @example <caption>Example 2: Using an ES2015 template literal</caption>
	         *
	         * var mixer = mixitup(containerEl, {
	         *     render: {
	         *         target: function(item) {
	         *             return (
	         *                 `&lt;div class="mix"&gt;
	         *                     &lt;h2&gt;${item.title}&lt;/h2&gt;
	         *                  &lt;/div&gt;`
	         *             );
	         *         }
	         *     }
	         * });
	         *
	         * @example <caption>Example 3: Using a Handlebars template</caption>
	         *
	         * var targetTemplate = Handlebars.compile('&lt;div class="mix"&gt;&lt;h2&gt;{{title}}&lt;/h2&gt;&lt;/div&gt;');
	         *
	         * var mixer = mixitup(containerEl, {
	         *     render: {
	         *         target: targetTemplate
	         *     }
	         * });
	         *
	         * @example <caption>Example 4: Returning a DOM element</caption>
	         *
	         * var mixer = mixitup(containerEl, {
	         *     render: {
	         *         target: function(item) {
	         *              // Create a single element using your framework's built-in renderer
	         *
	         *              var el = ...
	         *
	         *              return el;
	         *         }
	         *     }
	         * });
	         *
	         * @name        target
	         * @memberof    mixitup.Config.render
	         * @instance
	         * @type        {function}
	         * @default     'null'
	         */

	        this.target = null;

	        this.callActions('afterConstruct');

	        h.seal(this);
	    };

	    _mixitup.BaseStatic.call(_mixitup.ConfigRender);

	    _mixitup.ConfigRender.prototype = Object.create(_mixitup.Base.prototype);

	    _mixitup.ConfigRender.prototype.constructor = _mixitup.ConfigRender;

	    /**
	     * @constructor
	     * @memberof    mixitup
	     * @private
	     * @since       3.0.0
	     */

	    _mixitup.ConfigTemplates = function () {
	        _mixitup.Base.call(this);

	        this.callActions('beforeConstruct');

	        this.callActions('afterConstruct');

	        h.seal(this);
	    };

	    _mixitup.BaseStatic.call(_mixitup.ConfigTemplates);

	    _mixitup.ConfigTemplates.prototype = Object.create(_mixitup.Base.prototype);

	    _mixitup.ConfigTemplates.prototype.constructor = _mixitup.ConfigTemplates;

	    /**
	     * `mixitup.Config` is an interface used for customising the functionality of a
	     * mixer instance. It is organised into several semantically distinct sub-objects,
	     * each one pertaining to a particular aspect of MixItUp functionality.
	     *
	     * An object literal containing any or all of the available properies,
	     * known as the "configuration object", can be passed as the second parameter to
	     * the `mixitup` factory function when creating a mixer instance to customise its
	     * functionality as needed.
	     *
	     * If no configuration object is passed, the mixer instance will take on the default
	     * configuration values detailed below.
	     *
	     * @example <caption>Example 1: Creating and passing the configuration object</caption>
	     * // Create a configuration object with desired values
	     *
	     * var config = {
	     *     animation: {
	     *         enable: false
	     *     },
	     *     selectors: {
	     *         target: '.item'
	     *     }
	     * };
	     *
	     * // Pass the configuration object to the mixitup factory function
	     *
	     * var mixer = mixitup(containerEl, config);
	     *
	     * @example <caption>Example 2: Passing the configuration object inline</caption>
	     * // Typically, the configuration object is passed inline for brevity.
	     *
	     * var mixer = mixitup(containerEl, {
	     *     controls: {
	     *         live: true,
	     *         toggleLogic: 'and'
	     *     }
	     * });
	     *
	     *
	     * @constructor
	     * @memberof    mixitup
	     * @namespace
	     * @public
	     * @since       2.0.0
	     */

	    _mixitup.Config = function () {
	        _mixitup.Base.call(this);

	        this.callActions('beforeConstruct');

	        this.animation = new _mixitup.ConfigAnimation();
	        this.callbacks = new _mixitup.ConfigCallbacks();
	        this.controls = new _mixitup.ConfigControls();
	        this.classNames = new _mixitup.ConfigClassNames();
	        this.data = new _mixitup.ConfigData();
	        this.debug = new _mixitup.ConfigDebug();
	        this.layout = new _mixitup.ConfigLayout();
	        this.load = new _mixitup.ConfigLoad();
	        this.selectors = new _mixitup.ConfigSelectors();
	        this.render = new _mixitup.ConfigRender();
	        this.templates = new _mixitup.ConfigTemplates();

	        this.callActions('afterConstruct');

	        h.seal(this);
	    };

	    _mixitup.BaseStatic.call(_mixitup.Config);

	    _mixitup.Config.prototype = Object.create(_mixitup.Base.prototype);

	    _mixitup.Config.prototype.constructor = _mixitup.Config;

	    /**
	     * @constructor
	     * @memberof    mixitup
	     * @private
	     * @since       3.0.0
	     */

	    _mixitup.MixerDom = function () {
	        _mixitup.Base.call(this);

	        this.callActions('beforeConstruct');

	        this.document = null;
	        this.body = null;
	        this.container = null;
	        this.parent = null;
	        this.targets = [];

	        this.callActions('afterConstruct');

	        h.seal(this);
	    };

	    _mixitup.BaseStatic.call(_mixitup.MixerDom);

	    _mixitup.MixerDom.prototype = Object.create(_mixitup.Base.prototype);

	    _mixitup.MixerDom.prototype.constructor = _mixitup.MixerDom;

	    /**
	     * @constructor
	     * @memberof    mixitup
	     * @private
	     * @since       3.0.0
	     */

	    _mixitup.UiClassNames = function () {
	        _mixitup.Base.call(this);

	        this.callActions('beforeConstruct');

	        this.base = '';
	        this.active = '';
	        this.disabled = '';

	        this.callActions('afterConstruct');

	        h.seal(this);
	    };

	    _mixitup.BaseStatic.call(_mixitup.UiClassNames);

	    _mixitup.UiClassNames.prototype = Object.create(_mixitup.Base.prototype);

	    _mixitup.UiClassNames.prototype.constructor = _mixitup.UiClassNames;

	    /**
	     * An object into which all arbitrary arguments sent to '.dataset()' are mapped.
	     *
	     * @constructor
	     * @memberof    mixitup
	     * @private
	     * @since       3.0.0
	     */

	    _mixitup.CommandDataset = function () {
	        _mixitup.Base.call(this);

	        this.callActions('beforeConstruct');

	        this.dataset = null;

	        this.callActions('afterConstruct');

	        h.seal(this);
	    };

	    _mixitup.BaseStatic.call(_mixitup.CommandDataset);

	    _mixitup.CommandDataset.prototype = Object.create(_mixitup.Base.prototype);

	    _mixitup.CommandDataset.prototype.constructor = _mixitup.CommandDataset;

	    /**
	     * An object into which all arbitrary arguments sent to '.multimix()' are mapped.
	     *
	     * @constructor
	     * @memberof    mixitup
	     * @private
	     * @since       3.0.0
	     */

	    _mixitup.CommandMultimix = function () {
	        _mixitup.Base.call(this);

	        this.callActions('beforeConstruct');

	        this.filter = null;
	        this.sort = null;
	        this.insert = null;
	        this.remove = null;
	        this.changeLayout = null;

	        this.callActions('afterConstruct');

	        h.seal(this);
	    };

	    _mixitup.BaseStatic.call(_mixitup.CommandMultimix);

	    _mixitup.CommandMultimix.prototype = Object.create(_mixitup.Base.prototype);

	    _mixitup.CommandMultimix.prototype.constructor = _mixitup.CommandMultimix;

	    /**
	     * An object into which all arbitrary arguments sent to '.filter()' are mapped.
	     *
	     * @constructor
	     * @memberof    mixitup
	     * @private
	     * @since       3.0.0
	     */

	    _mixitup.CommandFilter = function () {
	        _mixitup.Base.call(this);

	        this.callActions('beforeConstruct');

	        this.selector = '';
	        this.collection = null;
	        this.action = 'show'; // enum: ['show', 'hide']

	        this.callActions('afterConstruct');

	        h.seal(this);
	    };

	    _mixitup.BaseStatic.call(_mixitup.CommandFilter);

	    _mixitup.CommandFilter.prototype = Object.create(_mixitup.Base.prototype);

	    _mixitup.CommandFilter.prototype.constructor = _mixitup.CommandFilter;

	    /**
	     * An object into which all arbitrary arguments sent to '.sort()' are mapped.
	     *
	     * @constructor
	     * @memberof    mixitup
	     * @private
	     * @since       3.0.0
	     */

	    _mixitup.CommandSort = function () {
	        _mixitup.Base.call(this);

	        this.callActions('beforeConstruct');

	        this.sortString = '';
	        this.attribute = '';
	        this.order = 'asc';
	        this.collection = null;
	        this.next = null;

	        this.callActions('afterConstruct');

	        h.seal(this);
	    };

	    _mixitup.BaseStatic.call(_mixitup.CommandSort);

	    _mixitup.CommandSort.prototype = Object.create(_mixitup.Base.prototype);

	    _mixitup.CommandSort.prototype.constructor = _mixitup.CommandSort;

	    /**
	     * An object into which all arbitrary arguments sent to '.insert()' are mapped.
	     *
	     * @constructor
	     * @memberof    mixitup
	     * @private
	     * @since       3.0.0
	     */

	    _mixitup.CommandInsert = function () {
	        _mixitup.Base.call(this);

	        this.callActions('beforeConstruct');

	        this.index = 0;
	        this.collection = [];
	        this.position = 'before'; // enum: ['before', 'after']
	        this.sibling = null;

	        this.callActions('afterConstruct');

	        h.seal(this);
	    };

	    _mixitup.BaseStatic.call(_mixitup.CommandInsert);

	    _mixitup.CommandInsert.prototype = Object.create(_mixitup.Base.prototype);

	    _mixitup.CommandInsert.prototype.constructor = _mixitup.CommandInsert;

	    /**
	     * An object into which all arbitrary arguments sent to '.remove()' are mapped.
	     *
	     * @constructor
	     * @memberof    mixitup
	     * @private
	     * @since       3.0.0
	     */

	    _mixitup.CommandRemove = function () {
	        _mixitup.Base.call(this);

	        this.callActions('beforeConstruct');

	        this.targets = [];
	        this.collection = [];

	        this.callActions('afterConstruct');

	        h.seal(this);
	    };

	    _mixitup.BaseStatic.call(_mixitup.CommandRemove);

	    _mixitup.CommandRemove.prototype = Object.create(_mixitup.Base.prototype);

	    _mixitup.CommandRemove.prototype.constructor = _mixitup.CommandRemove;

	    /**
	     * An object into which all arbitrary arguments sent to '.changeLayout()' are mapped.
	     *
	     * @constructor
	     * @memberof    mixitup
	     * @private
	     * @since       3.0.0
	     */

	    _mixitup.CommandChangeLayout = function () {
	        _mixitup.Base.call(this);

	        this.callActions('beforeConstruct');

	        this.containerClassName = '';

	        this.callActions('afterConstruct');

	        h.seal(this);
	    };

	    _mixitup.BaseStatic.call(_mixitup.CommandChangeLayout);

	    _mixitup.CommandChangeLayout.prototype = Object.create(_mixitup.Base.prototype);

	    _mixitup.CommandChangeLayout.prototype.constructor = _mixitup.CommandChangeLayout;

	    /**
	     * @constructor
	     * @memberof    mixitup
	     * @private
	     * @since       3.0.0
	     * @param       {string}        type
	     * @param       {string}        selector
	     * @param       {boolean}       [live]
	     * @param       {string}        [parent]
	     *     An optional string representing the name of the mixer.dom property containing a reference to a parent element.
	     */

	    _mixitup.ControlDefinition = function (type, selector, live, parent) {
	        _mixitup.Base.call(this);

	        this.callActions('beforeConstruct');

	        this.type = type;
	        this.selector = selector;
	        this.live = live || false;
	        this.parent = parent || '';

	        this.callActions('afterConstruct');

	        h.freeze(this);
	        h.seal(this);
	    };

	    _mixitup.BaseStatic.call(_mixitup.ControlDefinition);

	    _mixitup.ControlDefinition.prototype = Object.create(_mixitup.Base.prototype);

	    _mixitup.ControlDefinition.prototype.constructor = _mixitup.ControlDefinition;

	    _mixitup.controlDefinitions = [];

	    _mixitup.controlDefinitions.push(new _mixitup.ControlDefinition('multimix', '[data-filter][data-sort]'));
	    _mixitup.controlDefinitions.push(new _mixitup.ControlDefinition('filter', '[data-filter]'));
	    _mixitup.controlDefinitions.push(new _mixitup.ControlDefinition('sort', '[data-sort]'));
	    _mixitup.controlDefinitions.push(new _mixitup.ControlDefinition('toggle', '[data-toggle]'));

	    /**
	     * @constructor
	     * @memberof    mixitup
	     * @private
	     * @since       3.0.0
	     */

	    _mixitup.Control = function () {
	        _mixitup.Base.call(this);

	        this.callActions('beforeConstruct');

	        this.el = null;
	        this.selector = '';
	        this.bound = [];
	        this.pending = -1;
	        this.type = '';
	        this.status = 'inactive'; // enum: ['inactive', 'active', 'disabled', 'live']
	        this.filter = '';
	        this.sort = '';
	        this.canDisable = false;
	        this.handler = null;
	        this.classNames = new _mixitup.UiClassNames();

	        this.callActions('afterConstruct');

	        h.seal(this);
	    };

	    _mixitup.BaseStatic.call(_mixitup.Control);

	    _mixitup.Control.prototype = Object.create(_mixitup.Base.prototype);

	    h.extend(_mixitup.Control.prototype,
	    /** @lends mixitup.Control */
	    {
	        constructor: _mixitup.Control,

	        /**
	         * @private
	         * @param {HTMLElement} el
	         * @param {string}      type
	         * @param {string}      selector
	         */

	        init: function init(el, type, selector) {
	            var self = this;

	            this.callActions('beforeInit', arguments);

	            self.el = el;
	            self.type = type;
	            self.selector = selector;

	            if (self.selector) {
	                self.status = 'live';
	            } else {
	                self.canDisable = typeof self.el.disable === 'boolean';

	                switch (self.type) {
	                    case 'filter':
	                        self.filter = self.el.getAttribute('data-filter');

	                        break;
	                    case 'toggle':
	                        self.filter = self.el.getAttribute('data-toggle');

	                        break;
	                    case 'sort':
	                        self.sort = self.el.getAttribute('data-sort');

	                        break;
	                    case 'multimix':
	                        self.filter = self.el.getAttribute('data-filter');
	                        self.sort = self.el.getAttribute('data-sort');

	                        break;
	                }
	            }

	            self.bindClick();

	            _mixitup.controls.push(self);

	            this.callActions('afterInit', arguments);
	        },

	        /**
	         * @private
	         * @param  {mixitup.Mixer} mixer
	         * @return {boolean}
	         */

	        isBound: function isBound(mixer) {
	            var self = this,
	                isBound = false;

	            this.callActions('beforeIsBound', arguments);

	            isBound = self.bound.indexOf(mixer) > -1;

	            return self.callFilters('afterIsBound', isBound, arguments);
	        },

	        /**
	         * @private
	         * @param  {mixitup.Mixer} mixer
	         * @return {void}
	         */

	        addBinding: function addBinding(mixer) {
	            var self = this;

	            this.callActions('beforeAddBinding', arguments);

	            if (!self.isBound()) {
	                self.bound.push(mixer);
	            }

	            this.callActions('afterAddBinding', arguments);
	        },

	        /**
	         * @private
	         * @param  {mixitup.Mixer} mixer
	         * @return {void}
	         */

	        removeBinding: function removeBinding(mixer) {
	            var self = this,
	                removeIndex = -1;

	            this.callActions('beforeRemoveBinding', arguments);

	            if ((removeIndex = self.bound.indexOf(mixer)) > -1) {
	                self.bound.splice(removeIndex, 1);
	            }

	            if (self.bound.length < 1) {
	                // No bindings exist, unbind event click handlers

	                self.unbindClick();

	                // Remove from `mixitup.controls` list

	                removeIndex = _mixitup.controls.indexOf(self);

	                _mixitup.controls.splice(removeIndex, 1);

	                if (self.status === 'active') {
	                    self.renderStatus(self.el, 'inactive');
	                }
	            }

	            this.callActions('afterRemoveBinding', arguments);
	        },

	        /**
	         * @private
	         * @return {void}
	         */

	        bindClick: function bindClick() {
	            var self = this;

	            this.callActions('beforeBindClick', arguments);

	            self.handler = function (e) {
	                self.handleClick(e);
	            };

	            h.on(self.el, 'click', self.handler);

	            this.callActions('afterBindClick', arguments);
	        },

	        /**
	         * @private
	         * @return {void}
	         */

	        unbindClick: function unbindClick() {
	            var self = this;

	            this.callActions('beforeUnbindClick', arguments);

	            h.off(self.el, 'click', self.handler);

	            self.handler = null;

	            this.callActions('afterUnbindClick', arguments);
	        },

	        /**
	         * @private
	         * @param   {MouseEvent} e
	         * @return  {void}
	         */

	        handleClick: function handleClick(e) {
	            var self = this,
	                button = null,
	                mixer = null,
	                isActive = false,
	                returnValue = void 0,
	                command = {},
	                clone = null,
	                commands = [],
	                i = -1;

	            this.callActions('beforeHandleClick', arguments);

	            this.pending = 0;

	            mixer = self.bound[0];

	            if (!self.selector) {
	                button = self.el;
	            } else {
	                button = h.closestParent(e.target, mixer.config.selectors.control + self.selector, true, mixer.dom.document);
	            }

	            if (!button) {
	                self.callActions('afterHandleClick', arguments);

	                return;
	            }

	            switch (self.type) {
	                case 'filter':
	                    command.filter = self.filter || button.getAttribute('data-filter');

	                    break;
	                case 'sort':
	                    command.sort = self.sort || button.getAttribute('data-sort');

	                    break;
	                case 'multimix':
	                    command.filter = self.filter || button.getAttribute('data-filter');
	                    command.sort = self.sort || button.getAttribute('data-sort');

	                    break;
	                case 'toggle':
	                    command.filter = self.filter || button.getAttribute('data-toggle');

	                    if (self.status === 'live') {
	                        isActive = h.hasClass(button, self.classNames.active);
	                    } else {
	                        isActive = self.status === 'active';
	                    }

	                    break;
	            }

	            for (i = 0; i < self.bound.length; i++) {
	                // Create a clone of the command for each bound mixer instance

	                clone = new _mixitup.CommandMultimix();

	                h.extend(clone, command);

	                commands.push(clone);
	            }

	            commands = self.callFilters('commandsHandleClick', commands, arguments);

	            self.pending = self.bound.length;

	            for (i = 0; mixer = self.bound[i]; i++) {
	                command = commands[i];

	                if (!command) {
	                    // An extension may set a command null to indicate that the click should not be handled

	                    continue;
	                }

	                if (!mixer.lastClicked) {
	                    mixer.lastClicked = button;
	                }

	                _mixitup.events.fire('mixClick', mixer.dom.container, {
	                    state: mixer.state,
	                    instance: mixer,
	                    originalEvent: e,
	                    control: mixer.lastClicked
	                }, mixer.dom.document);

	                if (typeof mixer.config.callbacks.onMixClick === 'function') {
	                    returnValue = mixer.config.callbacks.onMixClick.call(mixer.lastClicked, mixer.state, e, mixer);

	                    if (returnValue === false) {
	                        // User has returned `false` from the callback, so do not handle click

	                        continue;
	                    }
	                }

	                if (self.type === 'toggle') {
	                    isActive ? mixer.toggleOff(command.filter) : mixer.toggleOn(command.filter);
	                } else {
	                    mixer.multimix(command);
	                }
	            }

	            this.callActions('afterHandleClick', arguments);
	        },

	        /**
	         * @param   {object}          command
	         * @param   {Array<string>}   toggleArray
	         * @return  {void}
	         */

	        update: function update(command, toggleArray) {
	            var self = this,
	                actions = new _mixitup.CommandMultimix();

	            self.callActions('beforeUpdate', arguments);

	            self.pending--;

	            self.pending = Math.max(0, self.pending);

	            if (self.pending > 0) return;

	            if (self.status === 'live') {
	                // Live control (status unknown)

	                self.updateLive(command, toggleArray);
	            } else {
	                // Static control

	                actions.sort = self.sort;
	                actions.filter = self.filter;

	                self.callFilters('actionsUpdate', actions, arguments);

	                self.parseStatusChange(self.el, command, actions, toggleArray);
	            }

	            self.callActions('afterUpdate', arguments);
	        },

	        /**
	         * @param   {mixitup.CommandMultimix} command
	         * @param   {Array<string>}           toggleArray
	         * @return  {void}
	         */

	        updateLive: function updateLive(command, toggleArray) {
	            var self = this,
	                controlButtons = null,
	                actions = null,
	                button = null,
	                i = -1;

	            self.callActions('beforeUpdateLive', arguments);

	            if (!self.el) return;

	            controlButtons = self.el.querySelectorAll(self.selector);

	            for (i = 0; button = controlButtons[i]; i++) {
	                actions = new _mixitup.CommandMultimix();

	                switch (self.type) {
	                    case 'filter':
	                        actions.filter = button.getAttribute('data-filter');

	                        break;
	                    case 'sort':
	                        actions.sort = button.getAttribute('data-sort');

	                        break;
	                    case 'multimix':
	                        actions.filter = button.getAttribute('data-filter');
	                        actions.sort = button.getAttribute('data-sort');

	                        break;
	                    case 'toggle':
	                        actions.filter = button.getAttribute('data-toggle');

	                        break;
	                }

	                actions = self.callFilters('actionsUpdateLive', actions, arguments);

	                self.parseStatusChange(button, command, actions, toggleArray);
	            }

	            self.callActions('afterUpdateLive', arguments);
	        },

	        /**
	         * @param   {HTMLElement}             button
	         * @param   {mixitup.CommandMultimix} command
	         * @param   {mixitup.CommandMultimix} actions
	         * @param   {Array<string>}           toggleArray
	         * @return  {void}
	         */

	        parseStatusChange: function parseStatusChange(button, command, actions, toggleArray) {
	            var self = this,
	                alias = '',
	                toggle = '',
	                i = -1;

	            self.callActions('beforeParseStatusChange', arguments);

	            switch (self.type) {
	                case 'filter':
	                    if (command.filter === actions.filter) {
	                        self.renderStatus(button, 'active');
	                    } else {
	                        self.renderStatus(button, 'inactive');
	                    }

	                    break;
	                case 'multimix':
	                    if (command.sort === actions.sort && command.filter === actions.filter) {
	                        self.renderStatus(button, 'active');
	                    } else {
	                        self.renderStatus(button, 'inactive');
	                    }

	                    break;
	                case 'sort':
	                    if (command.sort.match(/:asc/g)) {
	                        alias = command.sort.replace(/:asc/g, '');
	                    }

	                    if (command.sort === actions.sort || alias === actions.sort) {
	                        self.renderStatus(button, 'active');
	                    } else {
	                        self.renderStatus(button, 'inactive');
	                    }

	                    break;
	                case 'toggle':
	                    if (toggleArray.length < 1) self.renderStatus(button, 'inactive');

	                    if (command.filter === actions.filter) {
	                        self.renderStatus(button, 'active');
	                    }

	                    for (i = 0; i < toggleArray.length; i++) {
	                        toggle = toggleArray[i];

	                        if (toggle === actions.filter) {
	                            // Button matches one active toggle

	                            self.renderStatus(button, 'active');

	                            break;
	                        }

	                        self.renderStatus(button, 'inactive');
	                    }

	                    break;
	            }

	            self.callActions('afterParseStatusChange', arguments);
	        },

	        /**
	         * @param   {HTMLElement}   button
	         * @param   {string}        status
	         * @return  {void}
	         */

	        renderStatus: function renderStatus(button, status) {
	            var self = this;

	            self.callActions('beforeRenderStatus', arguments);

	            switch (status) {
	                case 'active':
	                    h.addClass(button, self.classNames.active);
	                    h.removeClass(button, self.classNames.disabled);

	                    if (self.canDisable) self.el.disabled = false;

	                    break;
	                case 'inactive':
	                    h.removeClass(button, self.classNames.active);
	                    h.removeClass(button, self.classNames.disabled);

	                    if (self.canDisable) self.el.disabled = false;

	                    break;
	                case 'disabled':
	                    if (self.canDisable) self.el.disabled = true;

	                    h.addClass(button, self.classNames.disabled);
	                    h.removeClass(button, self.classNames.active);

	                    break;
	            }

	            if (self.status !== 'live') {
	                // Update the control's status propery if not live

	                self.status = status;
	            }

	            self.callActions('afterRenderStatus', arguments);
	        }
	    });

	    _mixitup.controls = [];

	    /**
	     * @constructor
	     * @memberof    mixitup
	     * @private
	     * @since       3.0.0
	     */

	    _mixitup.StyleData = function () {
	        _mixitup.Base.call(this);

	        this.callActions('beforeConstruct');

	        this.x = 0;
	        this.y = 0;
	        this.top = 0;
	        this.right = 0;
	        this.bottom = 0;
	        this.left = 0;
	        this.width = 0;
	        this.height = 0;
	        this.marginRight = 0;
	        this.marginBottom = 0;
	        this.opacity = 0;
	        this.scale = new _mixitup.TransformData();
	        this.translateX = new _mixitup.TransformData();
	        this.translateY = new _mixitup.TransformData();
	        this.translateZ = new _mixitup.TransformData();
	        this.rotateX = new _mixitup.TransformData();
	        this.rotateY = new _mixitup.TransformData();
	        this.rotateZ = new _mixitup.TransformData();

	        this.callActions('afterConstruct');

	        h.seal(this);
	    };

	    _mixitup.BaseStatic.call(_mixitup.StyleData);

	    _mixitup.StyleData.prototype = Object.create(_mixitup.Base.prototype);

	    _mixitup.StyleData.prototype.constructor = _mixitup.StyleData;

	    /**
	     * @constructor
	     * @memberof    mixitup
	     * @private
	     * @since       3.0.0
	     */

	    _mixitup.TransformData = function () {
	        _mixitup.Base.call(this);

	        this.callActions('beforeConstruct');

	        this.value = 0;
	        this.unit = '';

	        this.callActions('afterConstruct');

	        h.seal(this);
	    };

	    _mixitup.BaseStatic.call(_mixitup.TransformData);

	    _mixitup.TransformData.prototype = Object.create(_mixitup.Base.prototype);

	    _mixitup.TransformData.prototype.constructor = _mixitup.TransformData;

	    /**
	     * @constructor
	     * @memberof    mixitup
	     * @private
	     * @since       3.0.0
	     */

	    _mixitup.TransformDefaults = function () {
	        _mixitup.StyleData.apply(this);

	        this.callActions('beforeConstruct');

	        this.scale.value = 0.01;
	        this.scale.unit = '';

	        this.translateX.value = 20;
	        this.translateX.unit = 'px';

	        this.translateY.value = 20;
	        this.translateY.unit = 'px';

	        this.translateZ.value = 20;
	        this.translateZ.unit = 'px';

	        this.rotateX.value = 90;
	        this.rotateX.unit = 'deg';

	        this.rotateY.value = 90;
	        this.rotateY.unit = 'deg';

	        this.rotateX.value = 90;
	        this.rotateX.unit = 'deg';

	        this.rotateZ.value = 180;
	        this.rotateZ.unit = 'deg';

	        this.callActions('afterConstruct');

	        h.seal(this);
	    };

	    _mixitup.BaseStatic.call(_mixitup.TransformDefaults);

	    _mixitup.TransformDefaults.prototype = Object.create(_mixitup.StyleData.prototype);

	    _mixitup.TransformDefaults.prototype.constructor = _mixitup.TransformDefaults;

	    /**
	     * @private
	     * @static
	     * @since   3.0.0
	     * @type    {mixitup.TransformDefaults}
	     */

	    _mixitup.transformDefaults = new _mixitup.TransformDefaults();

	    /**
	     * @constructor
	     * @memberof    mixitup
	     * @private
	     * @since       3.0.0
	     */

	    _mixitup.EventDetail = function () {
	        this.state = null;
	        this.futureState = null;
	        this.instance = null;
	        this.originalEvent = null;
	    };

	    /**
	     * The `mixitup.Events` class contains all custom events dispatched by MixItUp at various
	     * points within the lifecycle of a mixer operation.
	     *
	     * Each event is analogous to the callback function of the same name defined in
	     * the `callbacks` configuration object, and is triggered immediately before it.
	     *
	     * Events are always triggered from the container element on which MixItUp is instantiated
	     * upon.
	     *
	     * As with any event, registered event handlers receive the event object as a parameter
	     * which includes a `detail` property containting references to the current `state`,
	     * the `mixer` instance, and other event-specific properties described below.
	     *
	     * @constructor
	     * @namespace
	     * @memberof    mixitup
	     * @public
	     * @since       3.0.0
	     */

	    _mixitup.Events = function () {
	        _mixitup.Base.call(this);

	        this.callActions('beforeConstruct');

	        /**
	         * A custom event triggered immediately after any MixItUp operation is requested
	         * and before animations have begun.
	         *
	         * The `mixStart` event also exposes a `futureState` property via the
	         * `event.detail` object, which represents the final state of the mixer once
	         * the requested operation has completed.
	         *
	         * @name        mixStart
	         * @memberof    mixitup.Events
	         * @static
	         * @type        {CustomEvent}
	         */

	        this.mixStart = null;

	        /**
	         * A custom event triggered when a MixItUp operation is requested while another
	         * operation is in progress, and the animation queue is full, or queueing
	         * is disabled.
	         *
	         * @name        mixBusy
	         * @memberof    mixitup.Events
	         * @static
	         * @type        {CustomEvent}
	         */

	        this.mixBusy = null;

	        /**
	         * A custom event triggered after any MixItUp operation has completed, and the
	         * state has been updated.
	         *
	         * @name        mixEnd
	         * @memberof    mixitup.Events
	         * @static
	         * @type        {CustomEvent}
	         */

	        this.mixEnd = null;

	        /**
	         * A custom event triggered whenever a filter operation "fails", i.e. no targets
	         * could be found matching the requested filter.
	         *
	         * @name        mixFail
	         * @memberof    mixitup.Events
	         * @static
	         * @type        {CustomEvent}
	         */

	        this.mixFail = null;

	        /**
	         * A custom event triggered whenever a MixItUp control is clicked, and before its
	         * respective operation is requested.
	         *
	         * This event also exposes an `originalEvent` property via the `event.detail`
	         * object, which holds a reference to the original click event.
	         *
	         * @name        mixClick
	         * @memberof    mixitup.Events
	         * @static
	         * @type        {CustomEvent}
	         */

	        this.mixClick = null;

	        this.callActions('afterConstruct');

	        h.seal(this);
	    };

	    _mixitup.BaseStatic.call(_mixitup.Events);

	    _mixitup.Events.prototype = Object.create(_mixitup.Base.prototype);

	    _mixitup.Events.prototype.constructor = _mixitup.Events;

	    /**
	     * @private
	     * @param   {string}      eventType
	     * @param   {Element}     el
	     * @param   {object}      detail
	     * @param   {Document}    [doc]
	     */

	    _mixitup.Events.prototype.fire = function (eventType, el, detail, doc) {
	        var self = this,
	            event = null,
	            eventDetail = new _mixitup.EventDetail();

	        self.callActions('beforeFire', arguments);

	        if (typeof self[eventType] === 'undefined') {
	            throw new Error('Event type "' + eventType + '" not found.');
	        }

	        eventDetail.state = new _mixitup.State();

	        h.extend(eventDetail.state, detail.state);

	        if (detail.futureState) {
	            eventDetail.futureState = new _mixitup.State();

	            h.extend(eventDetail.futureState, detail.futureState);
	        }

	        eventDetail.instance = detail.instance;

	        if (detail.originalEvent) {
	            eventDetail.originalEvent = detail.originalEvent;
	        }

	        event = h.getCustomEvent(eventType, eventDetail, doc);

	        self.callFilters('eventFire', event, arguments);

	        el.dispatchEvent(event);
	    };

	    // Asign a singleton instance to `mixitup.events`:

	    _mixitup.events = new _mixitup.Events();

	    /**
	     * @constructor
	     * @memberof    mixitup
	     * @private
	     * @since       3.0.0
	     */

	    _mixitup.QueueItem = function () {
	        _mixitup.Base.call(this);

	        this.callActions('beforeConstruct');

	        this.args = [];
	        this.instruction = null;
	        this.triggerElement = null;
	        this.deferred = null;
	        this.isToggling = false;

	        this.callActions('afterConstruct');

	        h.seal(this);
	    };

	    _mixitup.BaseStatic.call(_mixitup.QueueItem);

	    _mixitup.QueueItem.prototype = Object.create(_mixitup.Base.prototype);

	    _mixitup.QueueItem.prototype.constructor = _mixitup.QueueItem;

	    /**
	     * The `mixitup.Mixer` class is used to hold discreet, user-configured
	     * instances of MixItUp on a provided container element.
	     *
	     * Mixer instances are returned whenever the `mixitup()` factory function is called,
	     * which expose a range of methods enabling API-based filtering, sorting,
	     * insertion, removal and more.
	     *
	     * @constructor
	     * @namespace
	     * @memberof    mixitup
	     * @public
	     * @since       3.0.0
	     */

	    _mixitup.Mixer = function () {
	        _mixitup.Base.call(this);

	        this.callActions('beforeConstruct');

	        this.config = new _mixitup.Config();

	        this.id = '';

	        this.isBusy = false;
	        this.isToggling = false;
	        this.incPadding = true;

	        this.controls = [];
	        this.targets = [];
	        this.origOrder = [];
	        this.cache = {};

	        this.toggleArray = [];

	        this.targetsMoved = 0;
	        this.targetsImmovable = 0;
	        this.targetsBound = 0;
	        this.targetsDone = 0;

	        this.staggerDuration = 0;
	        this.effectsIn = null;
	        this.effectsOut = null;
	        this.transformIn = [];
	        this.transformOut = [];
	        this.queue = [];

	        this.state = null;
	        this.lastOperation = null;
	        this.lastClicked = null;
	        this.userCallback = null;
	        this.userDeferred = null;

	        this.dom = new _mixitup.MixerDom();

	        this.callActions('afterConstruct');

	        h.seal(this);
	    };

	    _mixitup.BaseStatic.call(_mixitup.Mixer);

	    _mixitup.Mixer.prototype = Object.create(_mixitup.Base.prototype);

	    h.extend(_mixitup.Mixer.prototype,
	    /** @lends mixitup.Mixer */
	    {
	        constructor: _mixitup.Mixer,

	        /**
	         * @private
	         * @instance
	         * @since 3.0.0
	         * @param {HTMLElement} container
	         * @param {HTMLElement} document
	         * @param {string}      id
	         * @param {object}      [config]
	         */

	        attach: function attach(container, document, id, config) {
	            var self = this,
	                target = null,
	                i = -1;

	            self.callActions('beforeAttach', arguments);

	            self.id = id;

	            if (config) {
	                h.extend(self.config, config, true, true);
	            }

	            self.sanitizeConfig();

	            self.cacheDom(container, document);

	            if (self.config.layout.containerClassName) {
	                h.addClass(self.dom.container, self.config.layout.containerClassName);
	            }

	            if (!_mixitup.features.has.transitions) {
	                self.config.animation.enable = false;
	            }

	            if (typeof window.console === 'undefined') {
	                self.config.debug.showWarnings = false;
	            }

	            if (self.config.data.uidKey) {
	                // If the dataset API is in use, force disable controls

	                self.config.controls.enable = false;
	            }

	            self.indexTargets();

	            self.state = self.getInitialState();

	            for (i = 0; target = self.lastOperation.toHide[i]; i++) {
	                target.hide();
	            }

	            if (self.config.controls.enable) {
	                self.initControls();

	                self.updateControls({
	                    filter: self.state.activeFilter,
	                    sort: self.state.activeSort
	                });

	                self.buildToggleArray(null, self.state);
	            }

	            self.parseEffects();

	            self.callActions('afterAttach', arguments);
	        },

	        /**
	         * @private
	         * @instance
	         * @since 3.0.0
	         * @return {void}
	         */

	        sanitizeConfig: function sanitizeConfig() {
	            var self = this;

	            self.callActions('beforeSanitizeConfig', arguments);

	            // Sanitize enum/string config options

	            self.config.controls.scope = self.config.controls.scope.toLowerCase().trim();
	            self.config.controls.toggleLogic = self.config.controls.toggleLogic.toLowerCase().trim();
	            self.config.controls.toggleDefault = self.config.controls.toggleDefault.toLowerCase().trim();

	            self.config.animation.effects = self.config.animation.effects.trim();

	            self.callActions('afterSanitizeConfig', arguments);
	        },

	        /**
	         * @private
	         * @instance
	         * @since   3.0.0
	         * @return  {mixitup.State}
	         */

	        getInitialState: function getInitialState() {
	            var self = this,
	                state = new _mixitup.State(),
	                operation = new _mixitup.Operation();

	            self.callActions('beforeGetInitialState', arguments);

	            // Map initial values into a mock state object in order to construct an operation

	            state.activeContainerClassName = self.config.layout.containerClassName;

	            if (self.config.load.dataset) {
	                // Dataset API

	                if (!self.config.data.uidKey || typeof self.config.data.uidKey !== 'string') {
	                    throw new TypeError(_mixitup.messages.errorConfigDataUidKeyNotSet());
	                }

	                operation.startDataset = operation.newDataset = state.activeDataset = self.config.load.dataset.slice();
	                operation.startContainerClassName = operation.newContainerClassName = state.activeContainerClassName;
	                operation.show = self.targets.slice();

	                state = self.callFilters('stateGetInitialState', state, arguments);
	            } else {
	                // DOM API

	                state.activeFilter = self.parseFilterArgs([self.config.load.filter]).command;
	                state.activeSort = self.parseSortArgs([self.config.load.sort]).command;
	                state.totalTargets = self.targets.length;

	                state = self.callFilters('stateGetInitialState', state, arguments);

	                if (state.activeSort.collection || state.activeSort.attribute || state.activeSort.order === 'random' || state.activeSort.order === 'desc') {
	                    // Sorting on load

	                    operation.newSort = state.activeSort;

	                    self.sortOperation(operation);

	                    self.printSort(false, operation);

	                    self.targets = operation.newOrder;
	                } else {
	                    operation.startOrder = operation.newOrder = self.targets;
	                }

	                operation.startFilter = operation.newFilter = state.activeFilter;
	                operation.startSort = operation.newSort = state.activeSort;
	                operation.startContainerClassName = operation.newContainerClassName = state.activeContainerClassName;

	                if (operation.newFilter.selector === 'all') {
	                    operation.newFilter.selector = self.config.selectors.target;
	                } else if (operation.newFilter.selector === 'none') {
	                    operation.newFilter.selector = '';
	                }
	            }

	            operation = self.callFilters('operationGetInitialState', operation, [state]);

	            self.lastOperation = operation;

	            if (operation.newFilter) {
	                self.filterOperation(operation);
	            }

	            state = self.buildState(operation);

	            return state;
	        },

	        /**
	         * Caches references of DOM elements neccessary for the mixer's functionality.
	         *
	         * @private
	         * @instance
	         * @since   3.0.0
	         * @param   {HTMLElement}       el
	         * @param   {HTMLHtmlElement}   document
	         * @return  {void}
	         */

	        cacheDom: function cacheDom(el, document) {
	            var self = this;

	            self.callActions('beforeCacheDom', arguments);

	            self.dom.document = document;
	            self.dom.body = self.dom.document.querySelector('body');
	            self.dom.container = el;
	            self.dom.parent = el;

	            self.callActions('afterCacheDom', arguments);
	        },

	        /**
	         * Indexes all child elements of the mixer matching the `selectors.target`
	         * selector, instantiating a mixitup.Target for each one.
	         *
	         * @private
	         * @instance
	         * @since   3.0.0
	         * @return  {void}
	         */

	        indexTargets: function indexTargets() {
	            var self = this,
	                target = null,
	                el = null,
	                dataset = null,
	                i = -1;

	            self.callActions('beforeIndexTargets', arguments);

	            self.dom.targets = self.config.layout.allowNestedTargets ? self.dom.container.querySelectorAll(self.config.selectors.target) : h.children(self.dom.container, self.config.selectors.target, self.dom.document);

	            self.dom.targets = h.arrayFromList(self.dom.targets);

	            self.targets = [];

	            if ((dataset = self.config.load.dataset) && dataset.length !== self.dom.targets.length) {
	                throw new Error(_mixitup.messages.errorDatasetPrerenderedMismatch());
	            }

	            if (self.dom.targets.length) {
	                for (i = 0; el = self.dom.targets[i]; i++) {
	                    target = new _mixitup.Target();

	                    target.init(el, self, dataset ? dataset[i] : void 0);

	                    target.isInDom = true;

	                    self.targets.push(target);
	                }

	                self.dom.parent = self.dom.targets[0].parentElement === self.dom.container ? self.dom.container : self.dom.targets[0].parentElement;
	            }

	            self.origOrder = self.targets;

	            self.callActions('afterIndexTargets', arguments);
	        },

	        initControls: function initControls() {
	            var self = this,
	                definition = '',
	                controlElements = null,
	                el = null,
	                parent = null,
	                delagators = null,
	                control = null,
	                i = -1,
	                j = -1;

	            self.callActions('beforeInitControls', arguments);

	            switch (self.config.controls.scope) {
	                case 'local':
	                    parent = self.dom.container;

	                    break;
	                case 'global':
	                    parent = self.dom.document;

	                    break;
	                default:
	                    throw new Error(_mixitup.messages.errorConfigInvalidControlsScope());
	            }

	            for (i = 0; definition = _mixitup.controlDefinitions[i]; i++) {
	                if (self.config.controls.live || definition.live) {
	                    if (definition.parent) {
	                        delagators = self.dom[definition.parent];

	                        if (!delagators || delagators.length < 0) continue;

	                        if (typeof delagators.length !== 'number') {
	                            delagators = [delagators];
	                        }
	                    } else {
	                        delagators = [parent];
	                    }

	                    for (j = 0; el = delagators[j]; j++) {
	                        control = self.getControl(el, definition.type, definition.selector);

	                        self.controls.push(control);
	                    }
	                } else {
	                    controlElements = parent.querySelectorAll(self.config.selectors.control + definition.selector);

	                    for (j = 0; el = controlElements[j]; j++) {
	                        control = self.getControl(el, definition.type, '');

	                        if (!control) continue;

	                        self.controls.push(control);
	                    }
	                }
	            }

	            self.callActions('afterInitControls', arguments);
	        },

	        /**
	         * @private
	         * @instance
	         * @since   3.0.0
	         * @param   {HTMLElement} el
	         * @param   {string}      type
	         * @param   {string}      selector
	         * @return  {mixitup.Control|null}
	         */

	        getControl: function getControl(el, type, selector) {
	            var self = this,
	                control = null,
	                i = -1;

	            self.callActions('beforeGetControl', arguments);

	            if (!selector) {
	                // Static controls only

	                for (i = 0; control = _mixitup.controls[i]; i++) {
	                    if (control.el === el && control.isBound(self)) {
	                        // Control already bound to this mixer (as another type).

	                        // NB: This prevents duplicate controls from being registered where a selector
	                        // might collide, eg: "[data-filter]" and "[data-filter][data-sort]"

	                        return self.callFilters('controlGetControl', null, arguments);
	                    } else if (control.el === el && control.type === type && control.selector === selector) {
	                        // Another mixer is already using this control, add this mixer as a binding

	                        control.addBinding(self);

	                        return self.callFilters('controlGetControl', control, arguments);
	                    }
	                }
	            }

	            // Create new control

	            control = new _mixitup.Control();

	            control.init(el, type, selector);

	            control.classNames.base = h.getClassname(self.config.classNames, type);
	            control.classNames.active = h.getClassname(self.config.classNames, type, self.config.classNames.modifierActive);
	            control.classNames.disabled = h.getClassname(self.config.classNames, type, self.config.classNames.modifierDisabled);

	            // Add a reference to this mixer as a binding

	            control.addBinding(self);

	            return self.callFilters('controlGetControl', control, arguments);
	        },

	        /**
	         * Creates a compound selector by joining the `toggleArray` value as per the
	         * defined toggle logic.
	         *
	         * @private
	         * @instance
	         * @since   3.0.0
	         * @return  {string}
	         */

	        getToggleSelector: function getToggleSelector() {
	            var self = this,
	                delineator = self.config.controls.toggleLogic === 'or' ? ', ' : '',
	                toggleSelector = '';

	            self.callActions('beforeGetToggleSelector', arguments);

	            self.toggleArray = h.clean(self.toggleArray);

	            toggleSelector = self.toggleArray.join(delineator);

	            if (toggleSelector === '') {
	                toggleSelector = self.config.controls.toggleDefault;
	            }

	            return self.callFilters('selectorGetToggleSelector', toggleSelector, arguments);
	        },

	        /**
	         * Breaks compound selector strings in an array of discreet selectors,
	         * as per the active `controls.toggleLogic` configuration option. Accepts
	         * either a dynamic command object, or a state object.
	         *
	         * @private
	         * @instance
	         * @since   2.0.0
	         * @param   {object}        [command]
	         * @param   {mixitup.State} [state]
	         * @return  {void}
	         */

	        buildToggleArray: function buildToggleArray(command, state) {
	            var self = this,
	                activeFilterSelector = '';

	            self.callActions('beforeBuildToggleArray', arguments);

	            if (command && command.filter) {
	                activeFilterSelector = command.filter.selector.replace(/\s/g, '');
	            } else if (state) {
	                activeFilterSelector = state.activeFilter.selector.replace(/\s/g, '');
	            } else {
	                return;
	            }

	            if (activeFilterSelector === self.config.selectors.target || activeFilterSelector === 'all') {
	                activeFilterSelector = '';
	            }

	            if (self.config.controls.toggleLogic === 'or') {
	                self.toggleArray = activeFilterSelector.split(',');
	            } else {
	                self.toggleArray = self.splitCompoundSelector(activeFilterSelector);
	            }

	            self.toggleArray = h.clean(self.toggleArray);

	            self.callActions('afterBuildToggleArray', arguments);
	        },

	        /**
	         * Takes a compound selector (e.g. `.cat-1.cat-2`, `[data-cat="1"][data-cat="2"]`)
	         * and breaks into its individual selectors.
	         *
	         * @private
	         * @instance
	         * @since   3.0.0
	         * @param   {string} compoundSelector
	         * @return  {string[]}
	         */

	        splitCompoundSelector: function splitCompoundSelector(compoundSelector) {
	            // Break at a `.` or `[`, capturing the delineator

	            var partials = compoundSelector.split(/([\.\[])/g),
	                toggleArray = [],
	                selector = '',
	                i = -1;

	            if (partials[0] === '') {
	                partials.shift();
	            }

	            for (i = 0; i < partials.length; i++) {
	                if (i % 2 === 0) {
	                    selector = '';
	                }

	                selector += partials[i];

	                if (i % 2 !== 0) {
	                    toggleArray.push(selector);
	                }
	            }

	            return toggleArray;
	        },

	        /**
	         * Updates controls to their active/inactive state based on the command or
	         * current state of the mixer.
	         *
	         * @private
	         * @instance
	         * @since   2.0.0
	         * @param   {object} command
	         * @return  {void}
	         */

	        updateControls: function updateControls(command) {
	            var self = this,
	                control = null,
	                output = new _mixitup.CommandMultimix(),
	                i = -1;

	            self.callActions('beforeUpdateControls', arguments);

	            // Sanitise to defaults

	            if (command.filter) {
	                output.filter = command.filter.selector;
	            } else {
	                output.filter = self.state.activeFilter.selector;
	            }

	            if (command.sort) {
	                output.sort = self.buildSortString(command.sort);
	            } else {
	                output.sort = self.buildSortString(self.state.activeSort);
	            }

	            if (output.filter === self.config.selectors.target) {
	                output.filter = 'all';
	            }

	            if (output.filter === '') {
	                output.filter = 'none';
	            }

	            h.freeze(output);

	            for (i = 0; control = self.controls[i]; i++) {
	                control.update(output, self.toggleArray);
	            }

	            self.callActions('afterUpdateControls', arguments);
	        },

	        /**
	         * @private
	         * @instance
	         * @since   3.0.0
	         * @param   {mixitup.CommandSort}   command
	         * @return  {string}
	         */

	        buildSortString: function buildSortString(command) {
	            var self = this;
	            var output = '';

	            output += command.sortString;

	            if (command.next) {
	                output += ' ' + self.buildSortString(command.next);
	            }

	            return output;
	        },

	        /**
	         * @private
	         * @instance
	         * @since   3.0.0
	         * @param   {object}        command
	         * @param   {Operation}     operation
	         * @return  {Promise.<mixitup.State>}
	         */

	        insertTargets: function insertTargets(command, operation) {
	            var self = this,
	                nextSibling = null,
	                insertionIndex = -1,
	                frag = null,
	                target = null,
	                el = null,
	                i = -1;

	            self.callActions('beforeInsertTargets', arguments);

	            if (typeof command.index === 'undefined') command.index = 0;

	            nextSibling = self.getNextSibling(command.index, command.sibling, command.position);
	            frag = self.dom.document.createDocumentFragment();

	            if (nextSibling) {
	                insertionIndex = h.index(nextSibling, self.config.selectors.target);
	            } else {
	                insertionIndex = self.targets.length;
	            }

	            if (command.collection) {
	                for (i = 0; el = command.collection[i]; i++) {
	                    if (self.dom.targets.indexOf(el) > -1) {
	                        throw new Error(_mixitup.messages.errorInsertPreexistingElement());
	                    }

	                    // Ensure elements are hidden when they are added to the DOM, so they can
	                    // be animated in gracefully

	                    el.style.display = 'none';

	                    frag.appendChild(el);
	                    frag.appendChild(self.dom.document.createTextNode(' '));

	                    if (!h.isElement(el, self.dom.document) || !el.matches(self.config.selectors.target)) continue;

	                    target = new _mixitup.Target();

	                    target.init(el, self);

	                    target.isInDom = true;

	                    self.targets.splice(insertionIndex, 0, target);

	                    insertionIndex++;
	                }

	                self.dom.parent.insertBefore(frag, nextSibling);
	            }

	            // Since targets have been added, the original order must be updated

	            operation.startOrder = self.origOrder = self.targets;

	            self.callActions('afterInsertTargets', arguments);
	        },

	        /**
	         * @private
	         * @instance
	         * @since   3.0.0
	         * @param   {Number}      [index]
	         * @param   {Element}     [sibling]
	         * @param   {string}      [position]
	         * @return  {Element}
	         */

	        getNextSibling: function getNextSibling(index, sibling, position) {
	            var self = this,
	                element = null;

	            index = Math.max(index, 0);

	            if (sibling && position === 'before') {
	                // Explicit sibling

	                element = sibling;
	            } else if (sibling && position === 'after') {
	                // Explicit sibling

	                element = sibling.nextElementSibling || null;
	            } else if (self.targets.length > 0 && typeof index !== 'undefined') {
	                // Index and targets exist

	                element = index < self.targets.length || !self.targets.length ? self.targets[index].dom.el : self.targets[self.targets.length - 1].dom.el.nextElementSibling;
	            } else if (self.targets.length === 0 && self.dom.parent.children.length > 0) {
	                // No targets but other siblings

	                if (self.config.layout.siblingAfter) {
	                    element = self.config.layout.siblingAfter;
	                } else if (self.config.layout.siblingBefore) {
	                    element = self.config.layout.siblingBefore.nextElementSibling;
	                } else {
	                    self.dom.parent.children[0];
	                }
	            } else {
	                element === null;
	            }

	            return self.callFilters('elementGetNextSibling', element, arguments);
	        },

	        /**
	         * @private
	         * @instance
	         * @since   2.0.0
	         * @param   {Operation}     operation
	         * @return  {void}
	         */

	        filterOperation: function filterOperation(operation) {
	            var self = this,
	                testResult = false,
	                index = -1,
	                action = '',
	                target = null,
	                i = -1;

	            self.callActions('beforeFilterOperation', arguments);

	            action = operation.newFilter.action;

	            for (i = 0; target = operation.newOrder[i]; i++) {
	                if (operation.newFilter.collection) {
	                    // show via collection

	                    testResult = operation.newFilter.collection.indexOf(target.dom.el) > -1;
	                } else {
	                    // show via selector

	                    if (operation.newFilter.selector === '') {
	                        testResult = false;
	                    } else {
	                        testResult = target.dom.el.matches(operation.newFilter.selector);
	                    }
	                }

	                self.evaluateHideShow(testResult, target, action, operation);
	            }

	            if (operation.toRemove.length) {
	                for (i = 0; target = operation.show[i]; i++) {
	                    if (operation.toRemove.indexOf(target) > -1) {
	                        // If any shown targets should be removed, move them into the toHide array

	                        operation.show.splice(i, 1);

	                        if ((index = operation.toShow.indexOf(target)) > -1) {
	                            operation.toShow.splice(index, 1);
	                        }

	                        operation.toHide.push(target);
	                        operation.hide.push(target);

	                        i--;
	                    }
	                }
	            }

	            operation.matching = operation.show.slice();

	            if (operation.show.length === 0 && operation.newFilter.selector !== '' && self.targets.length !== 0) {
	                operation.hasFailed = true;
	            }

	            self.callActions('afterFilterOperation', arguments);
	        },

	        /**
	         * @private
	         * @instance
	         * @since   3.0.0
	         * @param   {boolean}   testResult
	         * @param   {Element}   target
	         * @param   {string}    action
	         * @param   {Operation} operation
	         * @return  {void}
	         */

	        evaluateHideShow: function evaluateHideShow(testResult, target, action, operation) {
	            var self = this;

	            self.callActions('beforeEvaluateHideShow', arguments);

	            if (testResult === true && action === 'show' || testResult === false && action === 'hide') {
	                operation.show.push(target);

	                !target.isShown && operation.toShow.push(target);
	            } else {
	                operation.hide.push(target);

	                target.isShown && operation.toHide.push(target);
	            }

	            self.callActions('afterEvaluateHideShow', arguments);
	        },

	        /**
	         * @private
	         * @instance
	         * @since   2.0.0
	         * @param   {Operation}     operation
	         * @return  {void}
	         */

	        sortOperation: function sortOperation(operation) {
	            var self = this;

	            self.callActions('beforeSortOperation', arguments);

	            operation.startOrder = self.targets;

	            if (operation.newSort.collection) {
	                // Sort by collection

	                operation.newOrder = operation.newSort.collection;
	            } else if (operation.newSort.order === 'random') {
	                // Sort random

	                operation.newOrder = h.arrayShuffle(operation.startOrder);
	            } else if (operation.newSort.attribute === '') {
	                // Sort by default

	                operation.newOrder = self.origOrder.slice();

	                if (operation.newSort.order === 'desc') {
	                    operation.newOrder.reverse();
	                }
	            } else {
	                // Sort by attribute

	                operation.newOrder = operation.startOrder.slice();

	                operation.newOrder.sort(function (a, b) {
	                    return self.compare(a, b, operation.newSort);
	                });
	            }

	            if (h.isEqualArray(operation.newOrder, operation.startOrder)) {
	                operation.willSort = false;
	            }

	            self.callActions('afterSortOperation', arguments);
	        },

	        /**
	         * @private
	         * @instance
	         * @since   2.0.0
	         * @param   {mixitup.Target}        a
	         * @param   {mixitup.Target}        b
	         * @param   {mixitup.CommandSort}   command
	         * @return  {Number}
	         */

	        compare: function compare(a, b, command) {
	            var self = this,
	                order = command.order,
	                attrA = self.getAttributeValue(a, command.attribute),
	                attrB = self.getAttributeValue(b, command.attribute);

	            if (isNaN(attrA * 1) || isNaN(attrB * 1)) {
	                attrA = attrA.toLowerCase();
	                attrB = attrB.toLowerCase();
	            } else {
	                attrA = attrA * 1;
	                attrB = attrB * 1;
	            }

	            if (attrA < attrB) {
	                return order === 'asc' ? -1 : 1;
	            }

	            if (attrA > attrB) {
	                return order === 'asc' ? 1 : -1;
	            }

	            if (attrA === attrB && command.next) {
	                return self.compare(a, b, command.next);
	            }

	            return 0;
	        },

	        /**
	         * Reads the values of any data attributes present the provided target element
	         * which match the current sort command.
	         *
	         * @private
	         * @instance
	         * @since   3.0.0
	         * @param   {mixitup.Target}    target
	         * @param   {string}            [attribute]
	         * @return  {(String|Number)}
	         */

	        getAttributeValue: function getAttributeValue(target, attribute) {
	            var self = this,
	                value = '';

	            value = target.dom.el.getAttribute('data-' + attribute);

	            if (value === null) {
	                if (self.config.debug.showWarnings) {
	                    // Encourage users to assign values to all targets to avoid erroneous sorting
	                    // when types are mixed

	                    console.warn(_mixitup.messages.warningInconsistentSortingAttributes({
	                        attribute: 'data-' + attribute
	                    }));
	                }
	            }

	            // If an attribute is not present, return 0 as a safety value

	            return self.callFilters('valueGetAttributeValue', value || 0, arguments);
	        },

	        /**
	         * Inserts elements into the DOM in the appropriate
	         * order using a document fragment for minimal
	         * DOM thrashing
	         *
	         * @private
	         * @instance
	         * @since   2.0.0
	         * @param   {boolean}   isResetting
	         * @param   {Operation} operation
	         * @return  {void}
	         */

	        printSort: function printSort(isResetting, operation) {
	            var self = this,
	                startOrder = isResetting ? operation.newOrder : operation.startOrder,
	                newOrder = isResetting ? operation.startOrder : operation.newOrder,
	                nextSibling = startOrder.length ? startOrder[startOrder.length - 1].dom.el.nextElementSibling : null,
	                frag = window.document.createDocumentFragment(),
	                whitespace = null,
	                target = null,
	                el = null,
	                i = -1;

	            self.callActions('beforePrintSort', arguments);

	            // Empty the container

	            for (i = 0; target = startOrder[i]; i++) {
	                el = target.dom.el;

	                if (el.style.position === 'absolute') continue;

	                h.removeWhitespace(el.previousSibling);

	                el.parentElement.removeChild(el);
	            }

	            whitespace = nextSibling ? nextSibling.previousSibling : self.dom.parent.lastChild;

	            if (whitespace && whitespace.nodeName === '#text') {
	                h.removeWhitespace(whitespace);
	            }

	            for (i = 0; target = newOrder[i]; i++) {
	                // Add targets into a document fragment

	                el = target.dom.el;

	                if (h.isElement(frag.lastChild)) {
	                    frag.appendChild(window.document.createTextNode(' '));
	                }

	                frag.appendChild(el);
	            }

	            // Insert the document fragment into the container
	            // before any other non-target elements

	            if (self.dom.parent.firstChild && self.dom.parent.firstChild !== nextSibling) {
	                frag.insertBefore(window.document.createTextNode(' '), frag.childNodes[0]);
	            }

	            if (nextSibling) {
	                frag.appendChild(window.document.createTextNode(' '));

	                self.dom.parent.insertBefore(frag, nextSibling);
	            } else {
	                self.dom.parent.appendChild(frag);
	            }

	            self.callActions('afterPrintSort', arguments);
	        },

	        /**
	         * Parses user-defined sort strings (i.e. `default:asc`) into sort commands objects.
	         *
	         * @private
	         * @instance
	         * @since   3.0.0
	         * @param   {string}                sortString
	         * @param   {mixitup.CommandSort}   command
	         * @return  {mixitup.CommandSort}
	         */

	        parseSortString: function parseSortString(sortString, command) {
	            var self = this,
	                rules = sortString.split(' '),
	                current = command,
	                rule = [],
	                i = -1;

	            // command.sortString = sortString;

	            for (i = 0; i < rules.length; i++) {
	                rule = rules[i].split(':');

	                current.sortString = rules[i];
	                current.attribute = h.dashCase(rule[0]);
	                current.order = rule[1] || 'asc';

	                switch (current.attribute) {
	                    case 'default':
	                        // treat "default" as sorting by no attribute

	                        current.attribute = '';

	                        break;
	                    case 'random':
	                        // treat "random" as an order not an attribute

	                        current.attribute = '';
	                        current.order = 'random';

	                        break;
	                }

	                if (!current.attribute || current.order === 'random') break;

	                if (i < rules.length - 1) {
	                    // Embed reference to the next command

	                    current.next = new _mixitup.CommandSort();

	                    h.freeze(current);

	                    current = current.next;
	                }
	            }

	            return self.callFilters('commandsParseSort', command, arguments);
	        },

	        /**
	         * Parses all effects out of the user-defined `animation.effects` string into
	         * their respective properties and units.
	         *
	         * @private
	         * @instance
	         * @since   2.0.0
	         * @return  {void}
	         */

	        parseEffects: function parseEffects() {
	            var self = this,
	                transformName = '',
	                effectsIn = self.config.animation.effectsIn || self.config.animation.effects,
	                effectsOut = self.config.animation.effectsOut || self.config.animation.effects;

	            self.callActions('beforeParseEffects', arguments);

	            self.effectsIn = new _mixitup.StyleData();
	            self.effectsOut = new _mixitup.StyleData();
	            self.transformIn = [];
	            self.transformOut = [];

	            self.effectsIn.opacity = self.effectsOut.opacity = 1;

	            self.parseEffect('fade', effectsIn, self.effectsIn, self.transformIn);
	            self.parseEffect('fade', effectsOut, self.effectsOut, self.transformOut, true);

	            for (transformName in _mixitup.transformDefaults) {
	                if (!(_mixitup.transformDefaults[transformName] instanceof _mixitup.TransformData)) {
	                    continue;
	                }

	                self.parseEffect(transformName, effectsIn, self.effectsIn, self.transformIn);
	                self.parseEffect(transformName, effectsOut, self.effectsOut, self.transformOut, true);
	            }

	            self.parseEffect('stagger', effectsIn, self.effectsIn, self.transformIn);
	            self.parseEffect('stagger', effectsOut, self.effectsOut, self.transformOut, true);

	            self.callActions('afterParseEffects', arguments);
	        },

	        /**
	         * @private
	         * @instance
	         * @since   2.0.0
	         * @param   {string}    effectName
	         * @param   {string}    effectString
	         * @param   {StyleData} effects
	         * @param   {String[]}  transform
	         * @param   {boolean}   [isOut]
	         */

	        parseEffect: function parseEffect(effectName, effectString, effects, transform, isOut) {
	            var self = this,
	                re = /\(([^)]+)\)/,
	                propIndex = -1,
	                str = '',
	                match = [],
	                val = '',
	                units = ['%', 'px', 'em', 'rem', 'vh', 'vw', 'deg'],
	                unit = '',
	                i = -1;

	            self.callActions('beforeParseEffect', arguments);

	            if (typeof effectString !== 'string') {
	                throw new TypeError(_mixitup.messages.errorConfigInvalidAnimationEffects());
	            }

	            if (effectString.indexOf(effectName) < 0) {
	                // The effect is not present in the effects string

	                if (effectName === 'stagger') {
	                    // Reset stagger to 0

	                    self.staggerDuration = 0;
	                }

	                return;
	            }

	            // The effect is present

	            propIndex = effectString.indexOf(effectName + '(');

	            if (propIndex > -1) {
	                // The effect has a user defined value in parentheses

	                // Extract from the first parenthesis to the end of string

	                str = effectString.substring(propIndex);

	                // Match any number of characters between "(" and ")"

	                match = re.exec(str);

	                val = match[1];
	            }

	            switch (effectName) {
	                case 'fade':
	                    effects.opacity = val ? parseFloat(val) : 0;

	                    break;
	                case 'stagger':
	                    self.staggerDuration = val ? parseFloat(val) : 100;

	                    // TODO: Currently stagger must be applied globally, but
	                    // if seperate values are specified for in/out, this should
	                    // be respected

	                    break;
	                default:
	                    // All other effects are transforms following the same structure

	                    if (isOut && self.config.animation.reverseOut && effectName !== 'scale') {
	                        effects[effectName].value = (val ? parseFloat(val) : _mixitup.transformDefaults[effectName].value) * -1;
	                    } else {
	                        effects[effectName].value = val ? parseFloat(val) : _mixitup.transformDefaults[effectName].value;
	                    }

	                    if (val) {
	                        for (i = 0; unit = units[i]; i++) {
	                            if (val.indexOf(unit) > -1) {
	                                effects[effectName].unit = unit;

	                                break;
	                            }
	                        }
	                    } else {
	                        effects[effectName].unit = _mixitup.transformDefaults[effectName].unit;
	                    }

	                    transform.push(effectName + '(' + effects[effectName].value + effects[effectName].unit + ')');
	            }

	            self.callActions('afterParseEffect', arguments);
	        },

	        /**
	         * @private
	         * @instance
	         * @since   2.0.0
	         * @param   {Operation}     operation
	         * @return  {State}
	         */

	        buildState: function buildState(operation) {
	            var self = this,
	                state = new _mixitup.State(),
	                target = null,
	                i = -1;

	            self.callActions('beforeBuildState', arguments);

	            // Map target elements into state arrays.
	            // the real target objects should never be exposed

	            for (i = 0; target = self.targets[i]; i++) {
	                if (!operation.toRemove.length || operation.toRemove.indexOf(target) < 0) {
	                    state.targets.push(target.dom.el);
	                }
	            }

	            for (i = 0; target = operation.matching[i]; i++) {
	                state.matching.push(target.dom.el);
	            }

	            for (i = 0; target = operation.show[i]; i++) {
	                state.show.push(target.dom.el);
	            }

	            for (i = 0; target = operation.hide[i]; i++) {
	                if (!operation.toRemove.length || operation.toRemove.indexOf(target) < 0) {
	                    state.hide.push(target.dom.el);
	                }
	            }

	            state.id = self.id;
	            state.container = self.dom.container;
	            state.activeFilter = operation.newFilter;
	            state.activeSort = operation.newSort;
	            state.activeDataset = operation.newDataset;
	            state.activeContainerClassName = operation.newContainerClassName;
	            state.hasFailed = operation.hasFailed;
	            state.totalTargets = self.targets.length;
	            state.totalShow = operation.show.length;
	            state.totalHide = operation.hide.length;
	            state.totalMatching = operation.matching.length;
	            state.triggerElement = operation.triggerElement;

	            return self.callFilters('stateBuildState', state, arguments);
	        },

	        /**
	         * @private
	         * @instance
	         * @since   2.0.0
	         * @param   {boolean}   shouldAnimate
	         * @param   {Operation} operation
	         * @return  {void}
	         */

	        goMix: function goMix(shouldAnimate, operation) {
	            var self = this,
	                deferred = null;

	            self.callActions('beforeGoMix', arguments);

	            // If the animation duration is set to 0ms,
	            // or no effects specified,
	            // or the container is hidden
	            // then abort animation

	            if (!self.config.animation.duration || !self.config.animation.effects || !h.isVisible(self.dom.container)) {
	                shouldAnimate = false;
	            }

	            if (!operation.toShow.length && !operation.toHide.length && !operation.willSort && !operation.willChangeLayout) {
	                // If nothing to show or hide, and not sorting or
	                // changing layout

	                shouldAnimate = false;
	            }

	            if (!operation.startState.show.length && !operation.show.length) {
	                // If nothing currently shown, nothing to show

	                shouldAnimate = false;
	            }

	            _mixitup.events.fire('mixStart', self.dom.container, {
	                state: operation.startState,
	                futureState: operation.newState,
	                instance: self
	            }, self.dom.document);

	            if (typeof self.config.callbacks.onMixStart === 'function') {
	                self.config.callbacks.onMixStart.call(self.dom.container, operation.startState, operation.newState, self);
	            }

	            h.removeClass(self.dom.container, h.getClassname(self.config.classNames, 'container', self.config.classNames.modifierFailed));

	            if (!self.userDeferred) {
	                // Queue empty, no pending operations

	                deferred = self.userDeferred = h.defer(_mixitup.libraries);
	            } else {
	                // Use existing deferred

	                deferred = self.userDeferred;
	            }

	            self.isBusy = true;

	            if (!shouldAnimate || !_mixitup.features.has.transitions) {
	                // Abort

	                if (self.config.debug.fauxAsync) {
	                    setTimeout(function () {
	                        self.cleanUp(operation);
	                    }, self.config.animation.duration);
	                } else {
	                    self.cleanUp(operation);
	                }

	                return self.callFilters('promiseGoMix', deferred.promise, arguments);
	            }

	            // If we should animate and the platform supports transitions, go for it

	            if (window.pageYOffset !== operation.docState.scrollTop) {
	                window.scrollTo(operation.docState.scrollLeft, operation.docState.scrollTop);
	            }

	            if (self.config.animation.applyPerspective) {
	                self.dom.parent.style[_mixitup.features.perspectiveProp] = self.config.animation.perspectiveDistance;

	                self.dom.parent.style[_mixitup.features.perspectiveOriginProp] = self.config.animation.perspectiveOrigin;
	            }

	            if (self.config.animation.animateResizeContainer || operation.startHeight === operation.newHeight) {
	                self.dom.parent.style.height = operation.startHeight + 'px';
	            }

	            if (self.config.animation.animateResizeContainer || operation.startWidth === operation.newWidth) {
	                self.dom.parent.style.width = operation.startWidth + 'px';
	            }

	            requestAnimationFrame(function () {
	                self.moveTargets(operation);
	            });

	            return self.callFilters('promiseGoMix', deferred.promise, arguments);
	        },

	        /**
	         * @private
	         * @instance
	         * @since   2.0.0
	         * @param   {Operation}     operation
	         * @return  {void}
	         */

	        getStartMixData: function getStartMixData(operation) {
	            var self = this,
	                parentStyle = window.getComputedStyle(self.dom.parent),
	                parentRect = self.dom.parent.getBoundingClientRect(),
	                target = null,
	                data = {},
	                i = -1,
	                boxSizing = parentStyle[_mixitup.features.boxSizingProp];

	            self.incPadding = boxSizing === 'border-box';

	            self.callActions('beforeGetStartMixData', arguments);

	            for (i = 0; target = operation.show[i]; i++) {
	                data = target.getPosData();

	                operation.showPosData[i] = {
	                    startPosData: data
	                };
	            }

	            for (i = 0; target = operation.toHide[i]; i++) {
	                data = target.getPosData();

	                operation.toHidePosData[i] = {
	                    startPosData: data
	                };
	            }

	            operation.startX = parentRect.left;
	            operation.startY = parentRect.top;

	            operation.startHeight = self.incPadding ? parentRect.height : parentRect.height - parseFloat(parentStyle.paddingTop) - parseFloat(parentStyle.paddingBottom) - parseFloat(parentStyle.borderTop) - parseFloat(parentStyle.borderBottom);

	            operation.startWidth = self.incPadding ? parentRect.width : parentRect.width - parseFloat(parentStyle.paddingLeft) - parseFloat(parentStyle.paddingRight) - parseFloat(parentStyle.borderLeft) - parseFloat(parentStyle.borderRight);

	            self.callActions('afterGetStartMixData', arguments);
	        },

	        /**
	         * @private
	         * @instance
	         * @since   2.0.0
	         * @param   {Operation}     operation
	         * @return  {void}
	         */

	        setInter: function setInter(operation) {
	            var self = this,
	                target = null,
	                i = -1;

	            self.callActions('beforeSetInter', arguments);

	            // Prevent scrollbar flicker on non-inertial scroll platforms by clamping height

	            if (self.config.animation.clampHeight) {
	                self.dom.parent.style.height = operation.startHeight + 'px';
	                self.dom.parent.style.overflow = 'hidden';
	            }

	            for (i = 0; target = operation.toShow[i]; i++) {
	                target.show();
	            }

	            if (operation.willChangeLayout) {
	                h.removeClass(self.dom.container, operation.startContainerClassName);
	                h.addClass(self.dom.container, operation.newContainerClassName);
	            }

	            self.callActions('afterSetInter', arguments);
	        },

	        /**
	         * @private
	         * @instance
	         * @since   2.0.0
	         * @param   {Operation}     operation
	         * @return  {void}
	         */

	        getInterMixData: function getInterMixData(operation) {
	            var self = this,
	                target = null,
	                i = -1;

	            self.callActions('beforeGetInterMixData', arguments);

	            for (i = 0; target = operation.show[i]; i++) {
	                operation.showPosData[i].interPosData = target.getPosData();
	            }

	            for (i = 0; target = operation.toHide[i]; i++) {
	                operation.toHidePosData[i].interPosData = target.getPosData();
	            }

	            self.callActions('afterGetInterMixData', arguments);
	        },

	        /**
	         * @private
	         * @instance
	         * @since   2.0.0
	         * @param   {Operation}     operation
	         * @return  {void}
	         */

	        setFinal: function setFinal(operation) {
	            var self = this,
	                target = null,
	                i = -1;

	            self.callActions('beforeSetFinal', arguments);

	            // Remove clamping

	            if (self.config.animation.clampHeight) {
	                self.dom.parent.style.height = self.dom.parent.style.overflow = '';
	            }

	            operation.willSort && self.printSort(false, operation);

	            for (i = 0; target = operation.toHide[i]; i++) {
	                target.hide();
	            }

	            self.callActions('afterSetFinal', arguments);
	        },

	        /**
	         * @private
	         * @instance
	         * @since   2.0.0
	         * @param   {Operation}     operation
	         * @return  {void}
	         */

	        getFinalMixData: function getFinalMixData(operation) {
	            var self = this,
	                parentStyle = null,
	                parentRect = self.dom.parent.getBoundingClientRect(),
	                target = null,
	                i = -1;

	            if (!self.incPadding) {
	                parentStyle = window.getComputedStyle(self.dom.parent);
	            }

	            self.callActions('beforeGetFinalMixData', arguments);

	            for (i = 0; target = operation.show[i]; i++) {
	                operation.showPosData[i].finalPosData = target.getPosData();
	            }

	            for (i = 0; target = operation.toHide[i]; i++) {
	                operation.toHidePosData[i].finalPosData = target.getPosData();
	            }

	            operation.newX = parentRect.left;
	            operation.newY = parentRect.top;

	            operation.newHeight = self.incPadding ? parentRect.height : parentRect.height - parseFloat(parentStyle.paddingTop) - parseFloat(parentStyle.paddingBottom) - parseFloat(parentStyle.borderTop) - parseFloat(parentStyle.borderBottom);

	            operation.newWidth = self.incPadding ? parentRect.width : parentRect.width - parseFloat(parentStyle.paddingLeft) - parseFloat(parentStyle.paddingRight) - parseFloat(parentStyle.borderLeft) - parseFloat(parentStyle.borderRight);

	            if (operation.willSort) {
	                self.printSort(true, operation);
	            }

	            for (i = 0; target = operation.toShow[i]; i++) {
	                target.hide();
	            }

	            for (i = 0; target = operation.toHide[i]; i++) {
	                target.show();
	            }

	            if (operation.willChangeLayout) {
	                h.removeClass(self.dom.container, operation.newContainerClassName);
	                h.addClass(self.dom.container, self.config.layout.containerClassName);
	            }

	            self.callActions('afterGetFinalMixData', arguments);
	        },

	        /**
	         * @private
	         * @instance
	         * @since    3.0.0
	         * @param    {Operation}     operation
	         */

	        getTweenData: function getTweenData(operation) {
	            var self = this,
	                target = null,
	                posData = null,
	                effectNames = Object.getOwnPropertyNames(self.effectsIn),
	                effectName = '',
	                effect = null,
	                widthChange = -1,
	                heightChange = -1,
	                i = -1,
	                j = -1;

	            self.callActions('beforeGetTweenData', arguments);

	            for (i = 0; target = operation.show[i]; i++) {
	                posData = operation.showPosData[i];
	                posData.posIn = new _mixitup.StyleData();
	                posData.posOut = new _mixitup.StyleData();
	                posData.tweenData = new _mixitup.StyleData();

	                // Process x and y

	                if (target.isShown) {
	                    posData.posIn.x = posData.startPosData.x - posData.interPosData.x;
	                    posData.posIn.y = posData.startPosData.y - posData.interPosData.y;
	                } else {
	                    posData.posIn.x = posData.posIn.y = 0;
	                }

	                posData.posOut.x = posData.finalPosData.x - posData.interPosData.x;
	                posData.posOut.y = posData.finalPosData.y - posData.interPosData.y;

	                // Process opacity

	                posData.posIn.opacity = target.isShown ? 1 : self.effectsIn.opacity;
	                posData.posOut.opacity = 1;
	                posData.tweenData.opacity = posData.posOut.opacity - posData.posIn.opacity;

	                // Adjust x and y if not nudging

	                if (!target.isShown && !self.config.animation.nudge) {
	                    posData.posIn.x = posData.posOut.x;
	                    posData.posIn.y = posData.posOut.y;
	                }

	                posData.tweenData.x = posData.posOut.x - posData.posIn.x;
	                posData.tweenData.y = posData.posOut.y - posData.posIn.y;

	                // Process width, height, and margins

	                if (self.config.animation.animateResizeTargets) {
	                    posData.posIn.width = posData.startPosData.width;
	                    posData.posIn.height = posData.startPosData.height;

	                    // "||" Prevents width/height change from including 0 width/height if hiding or showing

	                    widthChange = (posData.startPosData.width || posData.finalPosData.width) - posData.interPosData.width;

	                    posData.posIn.marginRight = posData.startPosData.marginRight - widthChange;

	                    heightChange = (posData.startPosData.height || posData.finalPosData.height) - posData.interPosData.height;

	                    posData.posIn.marginBottom = posData.startPosData.marginBottom - heightChange;

	                    posData.posOut.width = posData.finalPosData.width;
	                    posData.posOut.height = posData.finalPosData.height;

	                    widthChange = (posData.finalPosData.width || posData.startPosData.width) - posData.interPosData.width;

	                    posData.posOut.marginRight = posData.finalPosData.marginRight - widthChange;

	                    heightChange = (posData.finalPosData.height || posData.startPosData.height) - posData.interPosData.height;

	                    posData.posOut.marginBottom = posData.finalPosData.marginBottom - heightChange;

	                    posData.tweenData.width = posData.posOut.width - posData.posIn.width;
	                    posData.tweenData.height = posData.posOut.height - posData.posIn.height;
	                    posData.tweenData.marginRight = posData.posOut.marginRight - posData.posIn.marginRight;
	                    posData.tweenData.marginBottom = posData.posOut.marginBottom - posData.posIn.marginBottom;
	                }

	                // Process transforms

	                for (j = 0; effectName = effectNames[j]; j++) {
	                    effect = self.effectsIn[effectName];

	                    if (!(effect instanceof _mixitup.TransformData) || !effect.value) continue;

	                    posData.posIn[effectName].value = effect.value;
	                    posData.posOut[effectName].value = 0;

	                    posData.tweenData[effectName].value = posData.posOut[effectName].value - posData.posIn[effectName].value;

	                    posData.posIn[effectName].unit = posData.posOut[effectName].unit = posData.tweenData[effectName].unit = effect.unit;
	                }
	            }

	            for (i = 0; target = operation.toHide[i]; i++) {
	                posData = operation.toHidePosData[i];
	                posData.posIn = new _mixitup.StyleData();
	                posData.posOut = new _mixitup.StyleData();
	                posData.tweenData = new _mixitup.StyleData();

	                // Process x and y

	                posData.posIn.x = target.isShown ? posData.startPosData.x - posData.interPosData.x : 0;
	                posData.posIn.y = target.isShown ? posData.startPosData.y - posData.interPosData.y : 0;
	                posData.posOut.x = self.config.animation.nudge ? 0 : posData.posIn.x;
	                posData.posOut.y = self.config.animation.nudge ? 0 : posData.posIn.y;
	                posData.tweenData.x = posData.posOut.x - posData.posIn.x;
	                posData.tweenData.y = posData.posOut.y - posData.posIn.y;

	                // Process width, height, and margins

	                if (self.config.animation.animateResizeTargets) {
	                    posData.posIn.width = posData.startPosData.width;
	                    posData.posIn.height = posData.startPosData.height;

	                    widthChange = posData.startPosData.width - posData.interPosData.width;

	                    posData.posIn.marginRight = posData.startPosData.marginRight - widthChange;

	                    heightChange = posData.startPosData.height - posData.interPosData.height;

	                    posData.posIn.marginBottom = posData.startPosData.marginBottom - heightChange;
	                }

	                // Process opacity

	                posData.posIn.opacity = 1;
	                posData.posOut.opacity = self.effectsOut.opacity;
	                posData.tweenData.opacity = posData.posOut.opacity - posData.posIn.opacity;

	                // Process transforms

	                for (j = 0; effectName = effectNames[j]; j++) {
	                    effect = self.effectsOut[effectName];

	                    if (!(effect instanceof _mixitup.TransformData) || !effect.value) continue;

	                    posData.posIn[effectName].value = 0;
	                    posData.posOut[effectName].value = effect.value;

	                    posData.tweenData[effectName].value = posData.posOut[effectName].value - posData.posIn[effectName].value;

	                    posData.posIn[effectName].unit = posData.posOut[effectName].unit = posData.tweenData[effectName].unit = effect.unit;
	                }
	            }

	            self.callActions('afterGetTweenData', arguments);
	        },

	        /**
	         * @private
	         * @instance
	         * @since   3.0.0
	         * @param   {Operation}     operation
	         * @return  {void}
	         */

	        moveTargets: function moveTargets(operation) {
	            var self = this,
	                target = null,
	                moveData = null,
	                posData = null,
	                statusChange = '',
	                willTransition = false,
	                staggerIndex = -1,
	                i = -1,
	                checkProgress = self.checkProgress.bind(self);

	            self.callActions('beforeMoveTargets', arguments);

	            // TODO: this is an extra loop in addition to the calcs
	            // done in getOperation, could some of this be done there?

	            for (i = 0; target = operation.show[i]; i++) {
	                moveData = new _mixitup.IMoveData();
	                posData = operation.showPosData[i];

	                statusChange = target.isShown ? 'none' : 'show';

	                willTransition = self.willTransition(statusChange, operation.hasEffect, posData.posIn, posData.posOut);

	                if (willTransition) {
	                    // Prevent non-transitioning targets from incrementing the staggerIndex

	                    staggerIndex++;
	                }

	                target.show();

	                moveData.posIn = posData.posIn;
	                moveData.posOut = posData.posOut;
	                moveData.statusChange = statusChange;
	                moveData.staggerIndex = staggerIndex;
	                moveData.operation = operation;
	                moveData.callback = willTransition ? checkProgress : null;

	                target.move(moveData);
	            }

	            for (i = 0; target = operation.toHide[i]; i++) {
	                posData = operation.toHidePosData[i];
	                moveData = new _mixitup.IMoveData();

	                statusChange = 'hide';

	                willTransition = self.willTransition(statusChange, posData.posIn, posData.posOut);

	                moveData.posIn = posData.posIn;
	                moveData.posOut = posData.posOut;
	                moveData.statusChange = statusChange;
	                moveData.staggerIndex = i;
	                moveData.operation = operation;
	                moveData.callback = willTransition ? checkProgress : null;

	                target.move(moveData);
	            }

	            if (self.config.animation.animateResizeContainer) {
	                self.dom.parent.style[_mixitup.features.transitionProp] = 'height ' + self.config.animation.duration + 'ms ease, ' + 'width ' + self.config.animation.duration + 'ms ease ';

	                requestAnimationFrame(function () {
	                    self.dom.parent.style.height = operation.newHeight + 'px';
	                    self.dom.parent.style.width = operation.newWidth + 'px';
	                });
	            }

	            if (operation.willChangeLayout) {
	                h.removeClass(self.dom.container, self.config.layout.ContainerClassName);
	                h.addClass(self.dom.container, operation.newContainerClassName);
	            }

	            self.callActions('afterMoveTargets', arguments);
	        },

	        /**
	         * @private
	         * @instance
	         * @return  {boolean}
	         */

	        hasEffect: function hasEffect() {
	            var self = this,
	                EFFECTABLES = ['scale', 'translateX', 'translateY', 'translateZ', 'rotateX', 'rotateY', 'rotateZ'],
	                effectName = '',
	                effect = null,
	                result = false,
	                value = -1,
	                i = -1;

	            if (self.effectsIn.opacity !== 1) {
	                return self.callFilters('resultHasEffect', true, arguments);
	            }

	            for (i = 0; effectName = EFFECTABLES[i]; i++) {
	                effect = self.effectsIn[effectName];
	                value = (typeof effect === 'undefined' ? 'undefined' : _typeof(effect)) && effect.value !== 'undefined' ? effect.value : effect;

	                if (value !== 0) {
	                    result = true;

	                    break;
	                }
	            }

	            return self.callFilters('resultHasEffect', result, arguments);
	        },

	        /**
	         * Determines if a target element will transition in
	         * some fasion and therefore requires binding of
	         * transitionEnd
	         *
	         * @private
	         * @instance
	         * @since   3.0.0
	         * @param   {string}        statusChange
	         * @param   {boolean}       hasEffect
	         * @param   {StyleData}     posIn
	         * @param   {StyleData}     posOut
	         * @return  {boolean}
	         */

	        willTransition: function willTransition(statusChange, hasEffect, posIn, posOut) {
	            var self = this,
	                result = false;

	            if (!h.isVisible(self.dom.container)) {
	                // If the container is not visible, the transitionEnd
	                // event will not occur and MixItUp will hang

	                result = false;
	            } else if (statusChange !== 'none' && hasEffect || posIn.x !== posOut.x || posIn.y !== posOut.y) {
	                // If opacity and/or translate will change

	                result = true;
	            } else if (self.config.animation.animateResizeTargets) {
	                // Check if width, height or margins will change

	                result = posIn.width !== posOut.width || posIn.height !== posOut.height || posIn.marginRight !== posOut.marginRight || posIn.marginTop !== posOut.marginTop;
	            } else {
	                result = false;
	            }

	            return self.callFilters('resultWillTransition', result, arguments);
	        },

	        /**
	         * @private
	         * @instance
	         * @since   2.0.0
	         * @param   {Operation}     operation
	         * @return  {void}
	         */

	        checkProgress: function checkProgress(operation) {
	            var self = this;

	            self.targetsDone++;

	            if (self.targetsBound === self.targetsDone) {
	                self.cleanUp(operation);
	            }
	        },

	        /**
	         * @private
	         * @instance
	         * @since   2.0.0
	         * @param   {Operation}     operation
	         * @return  {void}
	         */

	        cleanUp: function cleanUp(operation) {
	            var self = this,
	                target = null,
	                whitespaceBefore = null,
	                whitespaceAfter = null,
	                nextInQueue = null,
	                i = -1;

	            self.callActions('beforeCleanUp', arguments);

	            self.targetsMoved = self.targetsImmovable = self.targetsBound = self.targetsDone = 0;

	            for (i = 0; target = operation.show[i]; i++) {
	                target.cleanUp();

	                target.show();
	            }

	            for (i = 0; target = operation.toHide[i]; i++) {
	                target.cleanUp();

	                target.hide();
	            }

	            if (operation.willSort) {
	                self.printSort(false, operation);
	            }

	            // Remove any styles applied to the parent container

	            self.dom.parent.style[_mixitup.features.transitionProp] = self.dom.parent.style.height = self.dom.parent.style.width = self.dom.parent.style[_mixitup.features.perspectiveProp] = self.dom.parent.style[_mixitup.features.perspectiveOriginProp] = '';

	            if (operation.willChangeLayout) {
	                h.removeClass(self.dom.container, operation.startContainerClassName);
	                h.addClass(self.dom.container, operation.newContainerClassName);
	            }

	            if (operation.toRemove.length) {
	                for (i = 0; target = self.targets[i]; i++) {
	                    if (operation.toRemove.indexOf(target) > -1) {
	                        if ((whitespaceBefore = target.dom.el.previousSibling) && whitespaceBefore.nodeName === '#text' && (whitespaceAfter = target.dom.el.nextSibling) && whitespaceAfter.nodeName === '#text') {
	                            h.removeWhitespace(whitespaceBefore);
	                        }

	                        if (!operation.willSort) {
	                            // NB: Sorting will remove targets as a bi-product of `printSort()`

	                            self.dom.parent.removeChild(target.dom.el);
	                        }

	                        self.targets.splice(i, 1);

	                        target.isInDom = false;

	                        i--;
	                    }
	                }

	                // Since targets have been removed, the original order must be updated

	                self.origOrder = self.targets;
	            }

	            if (operation.willSort) {
	                self.targets = operation.newOrder;
	            }

	            self.state = operation.newState;
	            self.lastOperation = operation;

	            self.dom.targets = self.state.targets;

	            // mixEnd

	            _mixitup.events.fire('mixEnd', self.dom.container, {
	                state: self.state,
	                instance: self
	            }, self.dom.document);

	            if (typeof self.config.callbacks.onMixEnd === 'function') {
	                self.config.callbacks.onMixEnd.call(self.dom.container, self.state, self);
	            }

	            if (operation.hasFailed) {
	                // mixFail

	                _mixitup.events.fire('mixFail', self.dom.container, {
	                    state: self.state,
	                    instance: self
	                }, self.dom.document);

	                if (typeof self.config.callbacks.onMixFail === 'function') {
	                    self.config.callbacks.onMixFail.call(self.dom.container, self.state, self);
	                }

	                h.addClass(self.dom.container, h.getClassname(self.config.classNames, 'container', self.config.classNames.modifierFailed));
	            }

	            // User-defined callback function

	            if (typeof self.userCallback === 'function') {
	                self.userCallback.call(self.dom.container, self.state, self);
	            }

	            if (typeof self.userDeferred.resolve === 'function') {
	                self.userDeferred.resolve(self.state);
	            }

	            self.userCallback = null;
	            self.userDeferred = null;
	            self.lastClicked = null;
	            self.isToggling = false;
	            self.isBusy = false;

	            if (self.queue.length) {
	                self.callActions('beforeReadQueueCleanUp', arguments);

	                nextInQueue = self.queue.shift();

	                // Update non-public API properties stored in queue

	                self.userDeferred = nextInQueue.deferred;
	                self.isToggling = nextInQueue.isToggling;
	                self.lastClicked = nextInQueue.triggerElement;

	                if (nextInQueue.instruction.command instanceof _mixitup.CommandMultimix) {
	                    self.multimix.apply(self, nextInQueue.args);
	                } else {
	                    self.dataset.apply(self, nextInQueue.args);
	                }
	            }

	            self.callActions('afterCleanUp', arguments);
	        },

	        /**
	         * @private
	         * @instance
	         * @since   2.0.0
	         * @param   {Array<*>}  args
	         * @return  {mixitup.UserInstruction}
	         */

	        parseMultimixArgs: function parseMultimixArgs(args) {
	            var self = this,
	                instruction = new _mixitup.UserInstruction(),
	                arg = null,
	                i = -1;

	            instruction.animate = self.config.animation.enable;
	            instruction.command = new _mixitup.CommandMultimix();

	            for (i = 0; i < args.length; i++) {
	                arg = args[i];

	                if (arg === null) continue;

	                if ((typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object') {
	                    h.extend(instruction.command, arg);
	                } else if (typeof arg === 'boolean') {
	                    instruction.animate = arg;
	                } else if (typeof arg === 'function') {
	                    instruction.callback = arg;
	                }
	            }

	            // Coerce arbitrary command arguments into typed command objects

	            if (instruction.command.insert && !(instruction.command.insert instanceof _mixitup.CommandInsert)) {
	                instruction.command.insert = self.parseInsertArgs([instruction.command.insert]).command;
	            }

	            if (instruction.command.remove && !(instruction.command.remove instanceof _mixitup.CommandRemove)) {
	                instruction.command.remove = self.parseRemoveArgs([instruction.command.remove]).command;
	            }

	            if (instruction.command.filter && !(instruction.command.filter instanceof _mixitup.CommandFilter)) {
	                instruction.command.filter = self.parseFilterArgs([instruction.command.filter]).command;
	            }

	            if (instruction.command.sort && !(instruction.command.sort instanceof _mixitup.CommandSort)) {
	                instruction.command.sort = self.parseSortArgs([instruction.command.sort]).command;
	            }

	            if (instruction.command.changeLayout && !(instruction.command.changeLayout instanceof _mixitup.CommandChangeLayout)) {
	                instruction.command.changeLayout = self.parseChangeLayoutArgs([instruction.command.changeLayout]).command;
	            }

	            instruction = self.callFilters('instructionParseMultimixArgs', instruction, arguments);

	            h.freeze(instruction);

	            return instruction;
	        },

	        /**
	         * @private
	         * @instance
	         * @since   2.0.0
	         * @param   {Array<*>}  args
	         * @return  {mixitup.UserInstruction}
	         */

	        parseFilterArgs: function parseFilterArgs(args) {
	            var self = this,
	                instruction = new _mixitup.UserInstruction(),
	                arg = null,
	                i = -1;

	            instruction.animate = self.config.animation.enable;
	            instruction.command = new _mixitup.CommandFilter();

	            for (i = 0; i < args.length; i++) {
	                arg = args[i];

	                if (typeof arg === 'string') {
	                    // Selector

	                    instruction.command.selector = arg;
	                } else if (arg === null) {
	                    instruction.command.collection = [];
	                } else if ((typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object' && h.isElement(arg, self.dom.document)) {
	                    // Single element

	                    instruction.command.collection = [arg];
	                } else if ((typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object' && typeof arg.length !== 'undefined') {
	                    // Multiple elements in array, NodeList or jQuery collection

	                    instruction.command.collection = h.arrayFromList(arg);
	                } else if ((typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object') {
	                    // Filter command

	                    h.extend(instruction.command, arg);
	                } else if (typeof arg === 'boolean') {
	                    instruction.animate = arg;
	                } else if (typeof arg === 'function') {
	                    instruction.callback = arg;
	                }
	            }

	            if (instruction.command.selector && instruction.command.collection) {
	                throw new Error(_mixitup.messages.errorFilterInvalidArguments());
	            }

	            instruction = self.callFilters('instructionParseFilterArgs', instruction, arguments);

	            h.freeze(instruction);

	            return instruction;
	        },

	        parseSortArgs: function parseSortArgs(args) {
	            var self = this,
	                instruction = new _mixitup.UserInstruction(),
	                arg = null,
	                sortString = '',
	                i = -1;

	            instruction.animate = self.config.animation.enable;
	            instruction.command = new _mixitup.CommandSort();

	            for (i = 0; i < args.length; i++) {
	                arg = args[i];

	                if (arg === null) continue;

	                switch (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) {
	                    case 'string':
	                        // Sort string

	                        sortString = arg;

	                        break;
	                    case 'object':
	                        // Array of element references

	                        if (arg.length) {
	                            instruction.command.collection = h.arrayFromList(arg);
	                        }

	                        break;
	                    case 'boolean':
	                        instruction.animate = arg;

	                        break;
	                    case 'function':
	                        instruction.callback = arg;

	                        break;
	                }
	            }

	            if (sortString) {
	                instruction.command = self.parseSortString(sortString, instruction.command);
	            }

	            instruction = self.callFilters('instructionParseSortArgs', instruction, arguments);

	            h.freeze(instruction);

	            return instruction;
	        },

	        /**
	         * @private
	         * @instance
	         * @since   2.0.0
	         * @param   {Array<*>}  args
	         * @return  {mixitup.UserInstruction}
	         */

	        parseInsertArgs: function parseInsertArgs(args) {
	            var self = this,
	                instruction = new _mixitup.UserInstruction(),
	                arg = null,
	                i = -1;

	            instruction.animate = self.config.animation.enable;
	            instruction.command = new _mixitup.CommandInsert();

	            for (i = 0; i < args.length; i++) {
	                arg = args[i];

	                if (arg === null) continue;

	                if (typeof arg === 'number') {
	                    // Insert index

	                    instruction.command.index = arg;
	                } else if (typeof arg === 'string' && ['before', 'after'].indexOf(arg) > -1) {
	                    // 'before'/'after'

	                    instruction.command.position = arg;
	                } else if (typeof arg === 'string') {
	                    // Markup

	                    instruction.command.collection = h.arrayFromList(h.createElement(arg).childNodes);
	                } else if ((typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object' && h.isElement(arg, self.dom.document)) {
	                    // Single element

	                    !instruction.command.collection.length ? instruction.command.collection = [arg] : instruction.command.sibling = arg;
	                } else if ((typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object' && arg.length) {
	                    // Multiple elements in array or jQuery collection

	                    !instruction.command.collection.length ? instruction.command.collection = arg : instruction.command.sibling = arg[0];
	                } else if ((typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object' && arg.childNodes && arg.childNodes.length) {
	                    // Document fragment

	                    !instruction.command.collection.length ? instruction.command.collection = h.arrayFromList(arg.childNodes) : instruction.command.sibling = arg.childNodes[0];
	                } else if ((typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object') {
	                    // Insert command

	                    h.extend(instruction.command, arg);
	                } else if (typeof arg === 'boolean') {
	                    instruction.animate = arg;
	                } else if (typeof arg === 'function') {
	                    instruction.callback = arg;
	                }
	            }

	            if (instruction.command.index && instruction.command.sibling) {
	                throw new Error(_mixitup.messages.errorInsertInvalidArguments());
	            }

	            if (!instruction.command.collection.length && self.config.debug.showWarnings) {
	                console.warn(_mixitup.messages.warningInsertNoElements());
	            }

	            instruction = self.callFilters('instructionParseInsertArgs', instruction, arguments);

	            h.freeze(instruction);

	            return instruction;
	        },

	        /**
	         * @private
	         * @instance
	         * @since   3.0.0
	         * @param   {Array<*>}  args
	         * @return  {mixitup.UserInstruction}
	         */

	        parseRemoveArgs: function parseRemoveArgs(args) {
	            var self = this,
	                instruction = new _mixitup.UserInstruction(),
	                target = null,
	                arg = null,
	                i = -1;

	            instruction.animate = self.config.animation.enable;
	            instruction.command = new _mixitup.CommandRemove();

	            for (i = 0; i < args.length; i++) {
	                arg = args[i];

	                if (arg === null) continue;

	                switch (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) {
	                    case 'number':
	                        if (self.targets[arg]) {
	                            instruction.command.targets[0] = self.targets[arg];
	                        }

	                        break;
	                    case 'string':
	                        instruction.command.collection = h.arrayFromList(self.dom.parent.querySelectorAll(arg));

	                        break;
	                    case 'object':
	                        if (arg && arg.length) {
	                            instruction.command.collection = arg;
	                        } else if (h.isElement(arg, self.dom.document)) {
	                            instruction.command.collection = [arg];
	                        } else {
	                            // Remove command

	                            h.extend(instruction.command, arg);
	                        }

	                        break;
	                    case 'boolean':
	                        instruction.animate = arg;

	                        break;
	                    case 'function':
	                        instruction.callback = arg;

	                        break;
	                }
	            }

	            if (instruction.command.collection.length) {
	                for (i = 0; target = self.targets[i]; i++) {
	                    if (instruction.command.collection.indexOf(target.dom.el) > -1) {
	                        instruction.command.targets.push(target);
	                    }
	                }
	            }

	            if (!instruction.command.targets.length && self.config.debug.showWarnings) {
	                console.warn(_mixitup.messages.warningRemoveNoElements());
	            }

	            h.freeze(instruction);

	            return instruction;
	        },

	        /**
	         * @private
	         * @instance
	         * @since   3.0.0
	         * @param   {Array<*>}  args
	         * @return  {mixitup.UserInstruction}
	         */

	        parseDatasetArgs: function parseDatasetArgs(args) {
	            var self = this,
	                instruction = new _mixitup.UserInstruction(),
	                arg = null,
	                i = -1;

	            instruction.animate = self.config.animation.enable;
	            instruction.command = new _mixitup.CommandDataset();

	            for (i = 0; i < args.length; i++) {
	                arg = args[i];

	                if (arg === null) continue;

	                switch (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) {
	                    case 'object':
	                        if (Array.isArray(arg) || typeof arg.length === 'number') {
	                            instruction.command.dataset = arg;
	                        } else {
	                            // Change layout command

	                            h.extend(instruction.command, arg);
	                        }

	                        break;
	                    case 'boolean':
	                        instruction.animate = arg;

	                        break;
	                    case 'function':
	                        instruction.callback = arg;

	                        break;
	                }
	            }

	            h.freeze(instruction);

	            return instruction;
	        },

	        /**
	         * @private
	         * @instance
	         * @since   3.0.0
	         * @param   {Array<*>}  args
	         * @return  {mixitup.UserInstruction}
	         */

	        parseChangeLayoutArgs: function parseChangeLayoutArgs(args) {
	            var self = this,
	                instruction = new _mixitup.UserInstruction(),
	                arg = null,
	                i = -1;

	            instruction.animate = self.config.animation.enable;
	            instruction.command = new _mixitup.CommandChangeLayout();

	            for (i = 0; i < args.length; i++) {
	                arg = args[i];

	                if (arg === null) continue;

	                switch (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) {
	                    case 'string':
	                        instruction.command.containerClassName = arg;

	                        break;
	                    case 'object':
	                        // Change layout command

	                        h.extend(instruction.command, arg);

	                        break;
	                    case 'boolean':
	                        instruction.animate = arg;

	                        break;
	                    case 'function':
	                        instruction.callback = arg;

	                        break;
	                }
	            }

	            h.freeze(instruction);

	            return instruction;
	        },

	        /**
	         * @private
	         * @instance
	         * @since       3.0.0
	         * @param       {mixitup.QueueItem}         queueItem
	         * @return      {Promise.<mixitup.State>}
	         */

	        queueMix: function queueMix(queueItem) {
	            var self = this,
	                deferred = null,
	                toggleSelector = '';

	            self.callActions('beforeQueueMix', arguments);

	            deferred = h.defer(_mixitup.libraries);

	            if (self.config.animation.queue && self.queue.length < self.config.animation.queueLimit) {
	                queueItem.deferred = deferred;

	                self.queue.push(queueItem);

	                // Keep controls in sync with user interactions. Mixer will catch up as it drains the queue.

	                if (self.config.controls.enable) {
	                    if (self.isToggling) {
	                        self.buildToggleArray(queueItem.instruction.command);

	                        toggleSelector = self.getToggleSelector();

	                        self.updateControls({
	                            filter: {
	                                selector: toggleSelector
	                            }
	                        });
	                    } else {
	                        self.updateControls(queueItem.instruction.command);
	                    }
	                }
	            } else {
	                if (self.config.debug.showWarnings) {
	                    console.warn(_mixitup.messages.warningMultimixInstanceQueueFull());
	                }

	                deferred.resolve(self.state);

	                _mixitup.events.fire('mixBusy', self.dom.container, {
	                    state: self.state,
	                    instance: self
	                }, self.dom.document);

	                if (typeof self.config.callbacks.onMixBusy === 'function') {
	                    self.config.callbacks.onMixBusy.call(self.dom.container, self.state, self);
	                }
	            }

	            return self.callFilters('promiseQueueMix', deferred.promise, arguments);
	        },

	        /**
	         * @private
	         * @instance
	         * @since   3.0.0
	         * @param   {Array.<object>}    newDataset
	         * @return  {Operation}
	         */

	        getDataOperation: function getDataOperation(newDataset) {
	            var self = this,
	                operation = new _mixitup.Operation(),
	                startDataset = [];

	            operation = self.callFilters('operationUnmappedGetDataOperation', operation, arguments);

	            if (self.dom.targets.length && !(startDataset = self.state.activeDataset || []).length) {
	                throw new Error(_mixitup.messages.errorDatasetNotSet());
	            }

	            operation.id = h.randomHex();
	            operation.startState = self.state;
	            operation.startDataset = startDataset;
	            operation.newDataset = newDataset.slice();

	            self.diffDatasets(operation);

	            operation.startOrder = self.targets;
	            operation.newOrder = operation.show;

	            if (self.config.animation.enable) {
	                self.getStartMixData(operation);
	                self.setInter(operation);

	                operation.docState = h.getDocumentState(self.dom.document);

	                self.getInterMixData(operation);
	                self.setFinal(operation);
	                self.getFinalMixData(operation);

	                self.parseEffects();

	                operation.hasEffect = self.hasEffect();

	                self.getTweenData(operation);
	            }

	            self.targets = operation.show.slice();

	            operation.newState = self.buildState(operation);

	            // NB: Targets to be removed must be included in `self.targets` for removal during clean up,
	            // but are added after state is built so that state is accurate

	            Array.prototype.push.apply(self.targets, operation.toRemove);

	            operation = self.callFilters('operationMappedGetDataOperation', operation, arguments);

	            return operation;
	        },

	        /**
	         * @private
	         * @instance
	         * @since   3.0.0
	         * @param   {mixitup.Operation} operation
	         * @return  {void}
	         */

	        diffDatasets: function diffDatasets(operation) {
	            var self = this,
	                persistantStartIds = [],
	                persistantNewIds = [],
	                insertedTargets = [],
	                data = null,
	                target = null,
	                el = null,
	                frag = null,
	                nextEl = null,
	                uids = {},
	                id = '',
	                i = -1;

	            self.callActions('beforeDiffDatasets', arguments);

	            for (i = 0; data = operation.newDataset[i]; i++) {
	                if (typeof (id = data[self.config.data.uidKey]) === 'undefined' || id.toString().length < 1) {
	                    throw new TypeError(_mixitup.messages.errorDatasetInvalidUidKey({
	                        uidKey: self.config.data.uidKey
	                    }));
	                }

	                if (!uids[id]) {
	                    uids[id] = true;
	                } else {
	                    throw new Error(_mixitup.messages.errorDatasetDuplicateUid({
	                        uid: id
	                    }));
	                }

	                if ((target = self.cache[id]) instanceof _mixitup.Target) {
	                    // Already in cache

	                    if (self.config.data.dirtyCheck && !h.deepEquals(data, target.data)) {
	                        // change detected

	                        el = target.render(data);

	                        target.data = data;

	                        if (el !== target.dom.el) {
	                            // Update target element reference

	                            if (target.isInDom) {
	                                target.unbindEvents();

	                                self.dom.parent.replaceChild(el, target.dom.el);
	                            }

	                            if (!target.isShown) {
	                                el.style.display = 'none';
	                            }

	                            target.dom.el = el;

	                            if (target.isInDom) {
	                                target.bindEvents();
	                            }
	                        }
	                    }

	                    el = target.dom.el;
	                } else {
	                    // New target

	                    target = new _mixitup.Target();

	                    target.init(null, self, data);

	                    target.hide();
	                }

	                if (!target.isInDom) {
	                    // Adding to DOM

	                    if (!frag) {
	                        // Open frag

	                        frag = self.dom.document.createDocumentFragment();
	                    }

	                    if (frag.lastElementChild) {
	                        frag.appendChild(self.dom.document.createTextNode(' '));
	                    }

	                    frag.appendChild(target.dom.el);

	                    target.isInDom = true;

	                    target.unbindEvents();
	                    target.bindEvents();
	                    target.hide();

	                    operation.toShow.push(target);

	                    insertedTargets.push(target);
	                } else {
	                    // Already in DOM

	                    nextEl = target.dom.el.nextElementSibling;

	                    persistantNewIds.push(id);

	                    if (frag) {
	                        // Close and insert previously opened frag

	                        if (frag.lastElementChild) {
	                            frag.appendChild(self.dom.document.createTextNode(' '));
	                        }

	                        self.insertDatasetFrag(frag, target.dom.el, self.targets.indexOf(target), insertedTargets);

	                        frag = null;
	                    }
	                }

	                operation.show.push(target);
	            }

	            if (frag) {
	                // Unclosed frag remaining

	                nextEl = nextEl || self.config.layout.siblingAfter;

	                if (nextEl) {
	                    frag.appendChild(self.dom.document.createTextNode(' '));
	                }

	                self.insertDatasetFrag(frag, nextEl, self.dom.targets.length, insertedTargets);
	            }

	            for (i = 0; data = operation.startDataset[i]; i++) {
	                id = data[self.config.data.uidKey];

	                target = self.cache[id];

	                if (operation.show.indexOf(target) < 0) {
	                    // Previously shown but now absent

	                    operation.hide.push(target);
	                    operation.toHide.push(target);
	                    operation.toRemove.push(target);
	                } else {
	                    persistantStartIds.push(id);
	                }
	            }

	            if (!h.isEqualArray(persistantStartIds, persistantNewIds)) {
	                operation.willSort = true;
	            }

	            self.callActions('afterDiffDatasets', arguments);
	        },

	        /**
	         * @private
	         * @instance
	         * @since   3.1.5
	         * @param   {DocumentFragment}          frag
	         * @param   {(HTMLElement|null)}        nextEl
	         * @param   {number}                    insertionIndex
	         * @param   {Array.<mixitup.Target>}    targets
	         * @return  {void}
	         */

	        insertDatasetFrag: function insertDatasetFrag(frag, nextEl, insertionIndex, targets) {
	            var self = this;

	            self.dom.parent.insertBefore(frag, nextEl);

	            while (targets.length) {
	                self.targets.splice(insertionIndex, 0, targets.shift());

	                insertionIndex++;
	            }
	        },

	        /**
	         * @private
	         * @instance
	         * @since   3.0.0
	         * @param   {mixitup.CommandSort} sortCommandA
	         * @param   {mixitup.CommandSort} sortCommandB
	         * @return  {boolean}
	         */

	        willSort: function willSort(sortCommandA, sortCommandB) {
	            var self = this,
	                result = false;

	            if (sortCommandA.order === 'random' || sortCommandA.attribute !== sortCommandB.attribute || sortCommandA.order !== sortCommandB.order || sortCommandA.collection !== sortCommandB.collection || sortCommandA.next === null && sortCommandB.next || sortCommandA.next && sortCommandB.next === null) {
	                result = true;
	            } else if (sortCommandA.next && sortCommandB.next) {
	                result = self.willSort(sortCommandA.next, sortCommandB.next);
	            } else {
	                result = false;
	            }

	            return self.callFilters('resultWillSort', result, arguments);
	        },

	        /**
	         * A shorthand method for `.filter('all')`. Shows all targets in the container.
	         *
	         * @example
	         *
	         * .show()
	         *
	         * @example <caption>Example: Showing all targets</caption>
	         *
	         * mixer.show()
	         *     .then(function(state) {
	         *         console.log(state.totalShow === state.totalTargets); // true
	         *     });
	         *
	         * @public
	         * @instance
	         * @since       3.0.0
	         * @return      {Promise.<mixitup.State>}
	         */

	        show: function show() {
	            var self = this;

	            return self.filter('all');
	        },

	        /**
	         * A shorthand method for `.filter('none')`. Hides all targets in the container.
	         *
	         * @example
	         *
	         * .hide()
	         *
	         * @example <caption>Example: Hiding all targets</caption>
	         *
	         * mixer.hide()
	         *     .then(function(state) {
	         *         console.log(state.totalShow === 0); // true
	         *         console.log(state.totalHide === state.totalTargets); // true
	         *     });
	         *
	         * @public
	         * @instance
	         * @since       3.0.0
	         * @return      {Promise.<mixitup.State>}
	         */

	        hide: function hide() {
	            var self = this;

	            return self.filter('none');
	        },

	        /**
	         * Returns a boolean indicating whether or not a MixItUp operation is
	         * currently in progress.
	         *
	         * @example
	         *
	         * .isMixing()
	         *
	         * @example <caption>Example: Checking the status of a mixer</caption>
	         *
	         * mixer.sort('random', function() {
	         *     console.log(mixer.isMixing()) // false
	         * });
	         *
	         * console.log(mixer.isMixing()) // true
	         *
	         * @public
	         * @instance
	         * @since   2.0.0
	         * @return  {boolean}
	         */

	        isMixing: function isMixing() {
	            var self = this;

	            return self.isBusy;
	        },

	        /**
	         * Filters all targets in the container by a provided selector string, or the values `'all'`
	         * or `'none'`. Only targets matching the selector will be shown.
	         *
	         * @example
	         *
	         * .filter(selector [, animate] [, callback])
	         *
	         * @example <caption>Example 1: Filtering targets by a class selector</caption>
	         *
	         * mixer.filter('.category-a')
	         *     .then(function(state) {
	         *         console.log(state.totalShow === containerEl.querySelectorAll('.category-a').length); // true
	         *     });
	         *
	         * @example <caption>Example 2: Filtering targets by an attribute selector</caption>
	         *
	         * mixer.filter('[data-category~="a"]')
	         *     .then(function(state) {
	         *         console.log(state.totalShow === containerEl.querySelectorAll('[data-category~="a"]').length); // true
	         *     });
	         *
	         * @example <caption>Example 3: Filtering targets by a compound selector</caption>
	         *
	         * // Show only those targets with the classes 'category-a' AND 'category-b'
	         *
	         * mixer.filter('.category-a.category-c')
	         *     .then(function(state) {
	         *         console.log(state.totalShow === containerEl.querySelectorAll('.category-a.category-c').length); // true
	         *     });
	         *
	         * @example <caption>Example 4: Filtering via an element collection</caption>
	         *
	         * var collection = Array.from(container.querySelectorAll('.mix'));
	         *
	         * console.log(collection.length); // 34
	         *
	         * // Filter the collection manually using Array.prototype.filter
	         *
	         * var filtered = collection.filter(function(target) {
	         *    return parseInt(target.getAttribute('data-price')) > 10;
	         * });
	         *
	         * console.log(filtered.length); // 22
	         *
	         * // Pass the filtered collection to MixItUp
	         *
	         * mixer.filter(filtered)
	         *    .then(function(state) {
	         *        console.log(state.activeFilter.collection.length === 22); // true
	         *    });
	         *
	         * @public
	         * @instance
	         * @since       2.0.0
	         * @param       {(string|HTMLElement|Array.<HTMLElement>)} selector
	         *      Any valid CSS selector (i.e. `'.category-a'`), or the values `'all'` or `'none'`. The filter method also accepts a reference to single target element or a collection of target elements to show.
	         * @param       {boolean}   [animate=true]
	         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
	         * @param       {function}  [callback=null]
	         *      An optional callback function to be invoked after the operation has completed.
	         * @return      {Promise.<mixitup.State>}
	         *      A promise resolving with the current state object.
	         */

	        filter: function filter() {
	            var self = this,
	                instruction = self.parseFilterArgs(arguments);

	            return self.multimix({
	                filter: instruction.command
	            }, instruction.animate, instruction.callback);
	        },

	        /**
	         * Adds an additional selector to the currently active filter selector, concatenating
	         * as per the logic defined in `controls.toggleLogic`.
	         *
	         * @example
	         *
	         * .toggleOn(selector [, animate] [, callback])
	         *
	         * @example <caption>Example: Toggling on a filter selector</caption>
	         *
	         * console.log(mixer.getState().activeFilter.selector); // '.category-a'
	         *
	         * mixer.toggleOn('.category-b')
	         *     .then(function(state) {
	         *         console.log(state.activeFilter.selector); // '.category-a, .category-b'
	         *     });
	         *
	         * @public
	         * @instance
	         * @since       3.0.0
	         * @param       {string}    selector
	         *      Any valid CSS selector (i.e. `'.category-a'`)
	         * @param       {boolean}   [animate=true]
	         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
	         * @param       {function}  [callback=null]
	         *      An optional callback function to be invoked after the operation has completed.
	         * @return      {Promise.<mixitup.State>}
	         *      A promise resolving with the current state object.
	         */

	        toggleOn: function toggleOn() {
	            var self = this,
	                instruction = self.parseFilterArgs(arguments),
	                selector = instruction.command.selector,
	                toggleSelector = '';

	            self.isToggling = true;

	            if (self.toggleArray.indexOf(selector) < 0) {
	                self.toggleArray.push(selector);
	            }

	            toggleSelector = self.getToggleSelector();

	            return self.multimix({
	                filter: toggleSelector
	            }, instruction.animate, instruction.callback);
	        },

	        /**
	         * Removes a selector from the active filter selector.
	         *
	         * @example
	         *
	         * .toggleOff(selector [, animate] [, callback])
	         *
	         * @example <caption>Example: Toggling off a filter selector</caption>
	         *
	         * console.log(mixer.getState().activeFilter.selector); // '.category-a, .category-b'
	         *
	         * mixer.toggleOff('.category-b')
	         *     .then(function(state) {
	         *         console.log(state.activeFilter.selector); // '.category-a'
	         *     });
	         *
	         * @public
	         * @instance
	         * @since       3.0.0
	         * @param       {string}    selector
	         *      Any valid CSS selector (i.e. `'.category-a'`)
	         * @param       {boolean}   [animate=true]
	         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
	         * @param       {function}  [callback=null]
	         *      An optional callback function to be invoked after the operation has completed.
	         * @return      {Promise.<mixitup.State>}
	         *      A promise resolving with the current state object.
	         */

	        toggleOff: function toggleOff() {
	            var self = this,
	                instruction = self.parseFilterArgs(arguments),
	                selector = instruction.command.selector,
	                toggleSelector = '';

	            self.isToggling = true;

	            self.toggleArray.splice(self.toggleArray.indexOf(selector), 1);

	            toggleSelector = self.getToggleSelector();

	            return self.multimix({
	                filter: toggleSelector
	            }, instruction.animate, instruction.callback);
	        },

	        /**
	         * Sorts all targets in the container according to a provided sort string.
	         *
	         * @example
	         *
	         * .sort(sortString [, animate] [, callback])
	         *
	         * @example <caption>Example 1: Sorting by the default DOM order</caption>
	         *
	         * // Reverse the default order of the targets
	         *
	         * mixer.sort('default:desc')
	         *     .then(function(state) {
	         *         console.log(state.activeSort.attribute === 'default'); // true
	         *         console.log(state.activeSort.order === 'desc'); // true
	         *     });
	         *
	         * @example <caption>Example 2: Sorting by a custom data-attribute</caption>
	         *
	         * // Sort the targets by the value of a `data-published-date` attribute
	         *
	         * mixer.sort('published-date:asc')
	         *     .then(function(state) {
	         *         console.log(state.activeSort.attribute === 'published-date'); // true
	         *         console.log(state.activeSort.order === 'asc'); // true
	         *     });
	         *
	         * @example <caption>Example 3: Sorting by multiple attributes</caption>
	         *
	         * // Sort the targets by the value of a `data-published-date` attribute, then by `data-title`
	         *
	         * mixer.sort('published-date:desc data-title:asc')
	         *     .then(function(state) {
	         *         console.log(state.activeSort.attribute === 'published-date'); // true
	         *         console.log(state.activeSort.order === 'desc'); // true
	         *
	         *         console.log(state.activeSort.next.attribute === 'title'); // true
	         *         console.log(state.activeSort.next.order === 'asc'); // true
	         *     });
	         *
	         * @example <caption>Example 4: Sorting by random</caption>
	         *
	         * mixer.sort('random')
	         *     .then(function(state) {
	         *         console.log(state.activeSort.order === 'random') // true
	         *     });
	         *
	         * @example <caption>Example 5: Sorting via an element collection</caption>
	         *
	         * var collection = Array.from(container.querySelectorAll('.mix'));
	         *
	         * // Swap the position of two elements in the collection:
	         *
	         * var temp = collection[1];
	         *
	         * collection[1] = collection[0];
	         * collection[0] = temp;
	         *
	         * // Pass the sorted collection to MixItUp
	         *
	         * mixer.sort(collection)
	         *     .then(function(state) {
	         *         console.log(state.targets[0] === collection[0]); // true
	         *     });
	         *
	         * @public
	         * @instance
	         * @since       2.0.0
	         * @param       {(string|Array.<HTMLElement>)}    sortString
	         *      A valid sort string (e.g. `'default'`, `'published-date:asc'`, or `'random'`). The sort method also accepts an array of all target elements in a user-defined order.
	         * @param       {boolean}   [animate=true]
	         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
	         * @param       {function}  [callback=null]
	         *      An optional callback function to be invoked after the operation has completed.
	         * @return      {Promise.<mixitup.State>}
	         *      A promise resolving with the current state object.
	         */

	        sort: function sort() {
	            var self = this,
	                instruction = self.parseSortArgs(arguments);

	            return self.multimix({
	                sort: instruction.command
	            }, instruction.animate, instruction.callback);
	        },

	        /**
	         * Changes the layout of the container by adding, removing or updating a
	         * layout-specific class name. If `animation.animateResizetargets` is
	         * enabled, MixItUp will attempt to gracefully animate the width, height,
	         * and position of targets between layout states.
	         *
	         * @example
	         *
	         * .changeLayout(containerClassName [, animate] [, callback])
	         *
	         * @example <caption>Example 1: Adding a new class name to the container</caption>
	         *
	         * mixer.changeLayout('container-list')
	         *      .then(function(state) {
	         *          console.log(state.activeContainerClass === 'container-list'); // true
	         *      });
	         *
	         * @example <caption>Example 2: Removing a previously added class name from the container</caption>
	         *
	         * mixer.changeLayout('')
	         *      .then(function(state) {
	         *          console.log(state.activeContainerClass === ''); // true
	         *      });
	         *
	         * @public
	         * @instance
	         * @since       2.0.0
	         * @param       {string}    containerClassName
	         *      A layout-specific class name to add to the container.
	         * @param       {boolean}   [animate=true]
	         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
	         * @param       {function}  [callback=null]
	         *      An optional callback function to be invoked after the operation has completed.
	         * @return      {Promise.<mixitup.State>}
	         *      A promise resolving with the current state object.
	         */

	        changeLayout: function changeLayout() {
	            var self = this,
	                instruction = self.parseChangeLayoutArgs(arguments);

	            return self.multimix({
	                changeLayout: instruction.command
	            }, instruction.animate, instruction.callback);
	        },

	        /**
	         * Updates the contents and order of the container to reflect the provided dataset,
	         * if the dataset API is in use.
	         *
	         * The dataset API is designed for use in API-driven JavaScript applications, and
	         * can be used instead of DOM-based methods such as `.filter()`, `.sort()`,
	         * `.insert()`, etc. When used, insertion, removal, sorting and pagination can be
	         * achieved purely via changes to your data model, without the uglyness of having
	         * to interact with or query the DOM directly.
	         *
	         * @example
	         *
	         * .dataset(dataset [, animate] [, callback])
	         *
	         * @example <caption>Example 1: Rendering a dataset</caption>
	         *
	         * var myDataset = [
	         *     {id: 1, ...},
	         *     {id: 2, ...},
	         *     {id: 3, ...}
	         * ];
	         *
	         * mixer.dataset(myDataset)
	         *     .then(function(state) {
	         *         console.log(state.totalShow === 3); // true
	         *     });
	         *
	         * @example <caption>Example 2: Sorting a dataset</caption>
	         *
	         * // Create a new dataset in reverse order
	         *
	         * var newDataset = myDataset.slice().reverse();
	         *
	         * mixer.dataset(newDataset)
	         *     .then(function(state) {
	         *         console.log(state.activeDataset[0] === myDataset[2]); // true
	         *     });
	         *
	         * @example <caption>Example 3: Removing an item from the dataset</caption>
	         *
	         * console.log(myDataset.length); // 3
	         *
	         * // Create a new dataset with the last item removed.
	         *
	         * var newDataset = myDataset.slice().pop();
	         *
	         * mixer.dataset(newDataset)
	         *     .then(function(state) {
	         *         console.log(state.totalShow === 2); // true
	         *     });
	         *
	         * @public
	         * @instance
	         * @since       3.0.0
	         * @param       {Array.<object>}    dataset
	         *      An array of objects, each one representing the underlying data model of a target to be rendered.
	         * @param       {boolean}           [animate=true]
	         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
	         * @param       {function}          [callback=null]
	         *      An optional callback function to be invoked after the operation has completed.
	         * @return      {Promise.<mixitup.State>}
	         *      A promise resolving with the current state object.
	         */

	        dataset: function dataset() {
	            var self = this,
	                instruction = self.parseDatasetArgs(arguments),
	                operation = null,
	                queueItem = null,
	                animate = false;

	            self.callActions('beforeDataset', arguments);

	            if (!self.isBusy) {
	                if (instruction.callback) self.userCallback = instruction.callback;

	                animate = instruction.animate ^ self.config.animation.enable ? instruction.animate : self.config.animation.enable;

	                operation = self.getDataOperation(instruction.command.dataset);

	                return self.goMix(animate, operation);
	            } else {
	                queueItem = new _mixitup.QueueItem();

	                queueItem.args = arguments;
	                queueItem.instruction = instruction;

	                return self.queueMix(queueItem);
	            }
	        },

	        /**
	         * Performs simultaneous `filter`, `sort`, `insert`, `remove` and `changeLayout`
	         * operations as requested.
	         *
	         * @example
	         *
	         * .multimix(multimixCommand [, animate] [, callback])
	         *
	         * @example <caption>Example 1: Performing simultaneous filtering and sorting</caption>
	         *
	         * mixer.multimix({
	         *     filter: '.category-b',
	         *     sort: 'published-date:desc'
	         * })
	         *     .then(function(state) {
	         *         console.log(state.activeFilter.selector === '.category-b'); // true
	         *         console.log(state.activeSort.attribute === 'published-date'); // true
	         *     });
	         *
	         * @example <caption>Example 2: Performing simultaneous sorting, insertion, and removal</caption>
	         *
	         * console.log(mixer.getState().totalShow); // 6
	         *
	         * // NB: When inserting via `multimix()`, an object should be provided as the value
	         * // for the `insert` portion of the command, allowing for a collection of elements
	         * // and an insertion index to be specified.
	         *
	         * mixer.multimix({
	         *     sort: 'published-date:desc', // Sort the container, including any new elements
	         *     insert: {
	         *         collection: [newElementReferenceA, newElementReferenceB], // Add 2 new elements at index 5
	         *         index: 5
	         *     },
	         *     remove: existingElementReference // Remove 1 existing element
	         * })
	         *     .then(function(state) {
	         *         console.log(state.activeSort.attribute === 'published-date'); // true
	         *         console.log(state.totalShow === 7); // true
	         *     });
	         *
	         * @public
	         * @instance
	         * @since       2.0.0
	         * @param       {object}    multimixCommand
	         *      An object containing one or more things to do
	         * @param       {boolean}   [animate=true]
	         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
	         * @param       {function}  [callback=null]
	         *      An optional callback function to be invoked after the operation has completed.
	         * @return      {Promise.<mixitup.State>}
	         *      A promise resolving with the current state object.
	         */

	        multimix: function multimix() {
	            var self = this,
	                operation = null,
	                animate = false,
	                queueItem = null,
	                instruction = self.parseMultimixArgs(arguments);

	            self.callActions('beforeMultimix', arguments);

	            if (!self.isBusy) {
	                operation = self.getOperation(instruction.command);

	                if (self.config.controls.enable) {
	                    // Update controls for API calls

	                    if (instruction.command.filter && !self.isToggling) {
	                        // As we are not toggling, reset the toggle array
	                        // so new filter overrides existing toggles

	                        self.toggleArray.length = 0;
	                        self.buildToggleArray(operation.command);
	                    }

	                    if (self.queue.length < 1) {
	                        self.updateControls(operation.command);
	                    }
	                }

	                if (instruction.callback) self.userCallback = instruction.callback;

	                // Always allow the instruction to override the instance setting

	                animate = instruction.animate ^ self.config.animation.enable ? instruction.animate : self.config.animation.enable;

	                self.callFilters('operationMultimix', operation, arguments);

	                return self.goMix(animate, operation);
	            } else {
	                queueItem = new _mixitup.QueueItem();

	                queueItem.args = arguments;
	                queueItem.instruction = instruction;
	                queueItem.triggerElement = self.lastClicked;
	                queueItem.isToggling = self.isToggling;

	                return self.queueMix(queueItem);
	            }
	        },

	        /**
	         * @private
	         * @instance
	         * @since   3.0.0
	         * @param   {object}            multimixCommand
	         * @param   {boolean}           [isPreFetch]
	         *      An optional boolean indicating that the operation is being pre-fetched for execution at a later time.
	         * @return  {Operation|null}
	         */

	        getOperation: function getOperation(multimixCommand) {
	            var self = this,
	                sortCommand = multimixCommand.sort,
	                filterCommand = multimixCommand.filter,
	                changeLayoutCommand = multimixCommand.changeLayout,
	                removeCommand = multimixCommand.remove,
	                insertCommand = multimixCommand.insert,
	                operation = new _mixitup.Operation();

	            operation = self.callFilters('operationUnmappedGetOperation', operation, arguments);

	            operation.id = h.randomHex();
	            operation.command = multimixCommand;
	            operation.startState = self.state;
	            operation.triggerElement = self.lastClicked;

	            if (self.isBusy) {
	                if (self.config.debug.showWarnings) {
	                    console.warn(_mixitup.messages.warningGetOperationInstanceBusy());
	                }

	                return null;
	            }

	            if (insertCommand) {
	                self.insertTargets(insertCommand, operation);
	            }

	            if (removeCommand) {
	                operation.toRemove = removeCommand.targets;
	            }

	            operation.startSort = operation.newSort = operation.startState.activeSort;
	            operation.startOrder = operation.newOrder = self.targets;

	            if (sortCommand) {
	                operation.startSort = operation.startState.activeSort;
	                operation.newSort = sortCommand;

	                operation.willSort = self.willSort(sortCommand, operation.startState.activeSort);

	                if (operation.willSort) {
	                    self.sortOperation(operation);
	                }
	            }

	            operation.startFilter = operation.startState.activeFilter;

	            if (filterCommand) {
	                operation.newFilter = filterCommand;
	            } else {
	                operation.newFilter = h.extend(new _mixitup.CommandFilter(), operation.startFilter);
	            }

	            if (operation.newFilter.selector === 'all') {
	                operation.newFilter.selector = self.config.selectors.target;
	            } else if (operation.newFilter.selector === 'none') {
	                operation.newFilter.selector = '';
	            }

	            self.filterOperation(operation);

	            operation.startContainerClassName = operation.startState.activeContainerClassName;

	            if (changeLayoutCommand) {
	                operation.newContainerClassName = changeLayoutCommand.containerClassName;

	                if (operation.newContainerClassName !== operation.startContainerClassName) {
	                    operation.willChangeLayout = true;
	                }
	            } else {
	                operation.newContainerClassName = operation.startContainerClassName;
	            }

	            if (self.config.animation.enable) {
	                // Populate the operation's position data

	                self.getStartMixData(operation);
	                self.setInter(operation);

	                operation.docState = h.getDocumentState(self.dom.document);

	                self.getInterMixData(operation);
	                self.setFinal(operation);
	                self.getFinalMixData(operation);

	                self.parseEffects();

	                operation.hasEffect = self.hasEffect();

	                self.getTweenData(operation);
	            }

	            operation.newState = self.buildState(operation);

	            return self.callFilters('operationMappedGetOperation', operation, arguments);
	        },

	        /**
	         * Renders a previously created operation at a specific point in its path, as
	         * determined by a multiplier between 0 and 1.
	         *
	         * @example
	         * .tween(operation, multiplier)
	         *
	         * @private
	         * @instance
	         * @since   3.0.0
	         * @param   {mixitup.Operation}     operation
	         *      An operation object created via the `getOperation` method
	         *
	         * @param   {Float}                 multiplier
	         *      Any number between 0 and 1 representing the percentage complete of the operation
	         * @return  {void}
	         */

	        tween: function tween(operation, multiplier) {
	            var target = null,
	                posData = null,
	                toHideIndex = -1,
	                i = -1;

	            multiplier = Math.min(multiplier, 1);
	            multiplier = Math.max(multiplier, 0);

	            for (i = 0; target = operation.show[i]; i++) {
	                posData = operation.showPosData[i];

	                target.applyTween(posData, multiplier);
	            }

	            for (i = 0; target = operation.hide[i]; i++) {
	                if (target.isShown) {
	                    target.hide();
	                }

	                if ((toHideIndex = operation.toHide.indexOf(target)) > -1) {
	                    posData = operation.toHidePosData[toHideIndex];

	                    if (!target.isShown) {
	                        target.show();
	                    }

	                    target.applyTween(posData, multiplier);
	                }
	            }
	        },

	        /**
	         * Inserts one or more new target elements into the container at a specified
	         * index.
	         *
	         * To be indexed as targets, new elements must match the `selectors.target`
	         * selector (`'.mix'` by default).
	         *
	         * @example
	         *
	         * .insert(newElements [, index] [, animate], [, callback])
	         *
	         * @example <caption>Example 1: Inserting a single element via reference</caption>
	         *
	         * console.log(mixer.getState().totalShow); // 0
	         *
	         * // Create a new element
	         *
	         * var newElement = document.createElement('div');
	         * newElement.classList.add('mix');
	         *
	         * mixer.insert(newElement)
	         *     .then(function(state) {
	         *         console.log(state.totalShow === 1); // true
	         *     });
	         *
	         * @example <caption>Example 2: Inserting a single element via HTML string</caption>
	         *
	         * console.log(mixer.getState().totalShow); // 1
	         *
	         * // Create a new element via reference
	         *
	         * var newElementHtml = '&lt;div class="mix"&gt;&lt;/div&gt;';
	         *
	         * // Create and insert the new element at index 1
	         *
	         * mixer.insert(newElementHtml, 1)
	         *     .then(function(state) {
	         *         console.log(state.totalShow === 2); // true
	         *         console.log(state.show[1].outerHTML === newElementHtml); // true
	         *     });
	         *
	         * @example <caption>Example 3: Inserting multiple elements via reference</caption>
	         *
	         * console.log(mixer.getState().totalShow); // 2
	         *
	         * // Create an array of new elements to insert.
	         *
	         * var newElement1 = document.createElement('div');
	         * var newElement2 = document.createElement('div');
	         *
	         * newElement1.classList.add('mix');
	         * newElement2.classList.add('mix');
	         *
	         * var newElementsCollection = [newElement1, newElement2];
	         *
	         * // Insert the new elements starting at index 1
	         *
	         * mixer.insert(newElementsCollection, 1)
	         *     .then(function(state) {
	         *         console.log(state.totalShow === 4); // true
	         *         console.log(state.show[1] === newElement1); // true
	         *         console.log(state.show[2] === newElement2); // true
	         *     });
	         *
	         * @example <caption>Example 4: Inserting a jQuery collection object containing one or more elements</caption>
	         *
	         * console.log(mixer.getState().totalShow); // 4
	         *
	         * var $newElement = $('&lt;div class="mix"&gt;&lt;/div&gt;');
	         *
	         * // Insert the new elements starting at index 3
	         *
	         * mixer.insert(newElementsCollection, 3)
	         *     .then(function(state) {
	         *         console.log(state.totalShow === 5); // true
	         *         console.log(state.show[3] === $newElement[0]); // true
	         *     });
	         *
	         * @public
	         * @instance
	         * @since       2.0.0
	         * @param       {(HTMLElement|Array.<HTMLElement>|string)}    newElements
	         *      A reference to a single element to insert, an array-like collection of elements, or an HTML string representing a single element.
	         * @param       {number}    index=0
	         *      The index at which to insert the new element(s). `0` by default.
	         * @param       {boolean}   [animate=true]
	         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
	         * @param       {function}  [callback=null]
	         *      An optional callback function to be invoked after the operation has completed.
	         * @return      {Promise.<mixitup.State>}
	         *      A promise resolving with the current state object.
	         */

	        insert: function insert() {
	            var self = this,
	                args = self.parseInsertArgs(arguments);

	            return self.multimix({
	                insert: args.command
	            }, args.animate, args.callback);
	        },

	        /**
	         * Inserts one or more new elements before a provided reference element.
	         *
	         * @example
	         *
	         * .insertBefore(newElements, referenceElement [, animate] [, callback])
	         *
	         * @example <caption>Example: Inserting a new element before a reference element</caption>
	         *
	         * // An existing reference element is chosen at index 2
	         *
	         * var referenceElement = mixer.getState().show[2];
	         *
	         * // Create a new element
	         *
	         * var newElement = document.createElement('div');
	         * newElement.classList.add('mix');
	         *
	         * mixer.insertBefore(newElement, referenceElement)
	         *     .then(function(state) {
	         *         // The new element is inserted into the container at index 2, before the reference element
	         *
	         *         console.log(state.show[2] === newElement); // true
	         *
	         *         // The reference element is now at index 3
	         *
	         *         console.log(state.show[3] === referenceElement); // true
	         *     });
	         *
	         * @public
	         * @instance
	         * @since       3.0.0
	         * @param       {(HTMLElement|Array.<HTMLElement>|string)}    newElements
	         *      A reference to a single element to insert, an array-like collection of elements, or an HTML string representing a single element.
	         * @param       {HTMLElement}    referenceElement
	         *      A reference to an existing element in the container to insert new elements before.
	         *@param       {boolean}   [animate=true]
	         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
	         * @param       {function}  [callback=null]
	         *      An optional callback function to be invoked after the operation has completed.
	         * @return      {Promise.<mixitup.State>}
	         *      A promise resolving with the current state object.
	         */

	        insertBefore: function insertBefore() {
	            var self = this,
	                args = self.parseInsertArgs(arguments);

	            return self.insert(args.command.collection, 'before', args.command.sibling, args.animate, args.callback);
	        },

	        /**
	         * Inserts one or more new elements after a provided reference element.
	         *
	         * @example
	         *
	         * .insertAfter(newElements, referenceElement [, animate] [, callback])
	         *
	         * @example <caption>Example: Inserting a new element after a reference element</caption>
	         *
	         * // An existing reference element is chosen at index 2
	         *
	         * var referenceElement = mixer.getState().show[2];
	         *
	         * // Create a new element
	         *
	         * var newElement = document.createElement('div');
	         * newElement.classList.add('mix');
	         *
	         * mixer.insertAfter(newElement, referenceElement)
	         *     .then(function(state) {
	         *         // The new element is inserted into the container at index 3, after the reference element
	         *
	         *         console.log(state.show[3] === newElement); // true
	         *     });
	         *
	         * @public
	         * @instance
	         * @since       3.0.0
	         * @param       {(HTMLElement|Array.<HTMLElement>|string)}    newElements
	         *      A reference to a single element to insert, an array-like collection of elements, or an HTML string representing a single element.
	         * @param       {HTMLElement}    referenceElement
	         *      A reference to an existing element in the container to insert new elements after.
	         * @param       {boolean}   [animate=true]
	         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
	         * @param       {function}  [callback=null]
	         *      An optional callback function to be invoked after the operation has completed.
	         * @return      {Promise.<mixitup.State>}
	         *      A promise resolving with the current state object.
	         */

	        insertAfter: function insertAfter() {
	            var self = this,
	                args = self.parseInsertArgs(arguments);

	            return self.insert(args.command.collection, 'after', args.command.sibling, args.animate, args.callback);
	        },

	        /**
	         * Inserts one or more new elements into the container before all existing targets.
	         *
	         * @example
	         *
	         * .prepend(newElements [,animate] [,callback])
	         *
	         * @example <caption>Example: Prepending a new element</caption>
	         *
	         * // Create a new element
	         *
	         * var newElement = document.createElement('div');
	         * newElement.classList.add('mix');
	         *
	         * // Insert the element into the container
	         *
	         * mixer.prepend(newElement)
	         *     .then(function(state) {
	         *         console.log(state.show[0] === newElement); // true
	         *     });
	         *
	         * @public
	         * @instance
	         * @since       3.0.0
	         * @param       {(HTMLElement|Array.<HTMLElement>|string)}    newElements
	         *      A reference to a single element to insert, an array-like collection of elements, or an HTML string representing a single element.
	         * @param       {boolean}   [animate=true]
	         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
	         * @param       {function}  [callback=null]
	         *      An optional callback function to be invoked after the operation has completed.
	         * @return      {Promise.<mixitup.State>}
	         *      A promise resolving with the current state object.
	         */

	        prepend: function prepend() {
	            var self = this,
	                args = self.parseInsertArgs(arguments);

	            return self.insert(0, args.command.collection, args.animate, args.callback);
	        },

	        /**
	         * Inserts one or more new elements into the container after all existing targets.
	         *
	         * @example
	         *
	         * .append(newElements [,animate] [,callback])
	         *
	         * @example <caption>Example: Appending a new element</caption>
	         *
	         * // Create a new element
	         *
	         * var newElement = document.createElement('div');
	         * newElement.classList.add('mix');
	         *
	         * // Insert the element into the container
	         *
	         * mixer.append(newElement)
	         *     .then(function(state) {
	         *         console.log(state.show[state.show.length - 1] === newElement); // true
	         *     });
	         *
	         * @public
	         * @instance
	         * @since       3.0.0
	         * @param       {(HTMLElement|Array.<HTMLElement>|string)}    newElements
	         *      A reference to a single element to insert, an array-like collection of elements, or an HTML string representing a single element.
	         * @param       {boolean}   [animate=true]
	         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
	         * @param       {function}  [callback=null]
	         *      An optional callback function to be invoked after the operation has completed.
	         * @return      {Promise.<mixitup.State>}
	         *      A promise resolving with the current state object.
	         */

	        append: function append() {
	            var self = this,
	                args = self.parseInsertArgs(arguments);

	            return self.insert(self.state.totalTargets, args.command.collection, args.animate, args.callback);
	        },

	        /**
	         * Removes one or more existing target elements from the container.
	         *
	         * @example
	         *
	         * .remove(elements [, animate] [, callback])
	         *
	         * @example <caption>Example 1: Removing an element by reference</caption>
	         *
	         * var elementToRemove = containerEl.firstElementChild;
	         *
	         * mixer.remove(elementToRemove)
	         *      .then(function(state) {
	         *          console.log(state.targets.indexOf(elementToRemove) === -1); // true
	         *      });
	         *
	         * @example <caption>Example 2: Removing a collection of elements by reference</caption>
	         *
	         * var elementsToRemove = containerEl.querySelectorAll('.category-a');
	         *
	         * console.log(elementsToRemove.length) // 3
	         *
	         * mixer.remove(elementsToRemove)
	         *      .then(function() {
	         *          console.log(containerEl.querySelectorAll('.category-a').length); // 0
	         *      });
	         *
	         * @example <caption>Example 3: Removing one or more elements by selector</caption>
	         *
	         * mixer.remove('.category-a')
	         *      .then(function() {
	         *          console.log(containerEl.querySelectorAll('.category-a').length); // 0
	         *      });
	         *
	         * @example <caption>Example 4: Removing an element by index</caption>
	         *
	         * console.log(mixer.getState.totalShow); // 4
	         *
	         * // Remove the element at index 3
	         *
	         * mixer.remove(3)
	         *      .then(function(state) {
	         *          console.log(state.totalShow); // 3
	         *          console.log(state.show[3]); // undefined
	         *      });
	         *
	         *
	         * @public
	         * @instance
	         * @since       3.0.0
	         * @param       {(HTMLElement|Array.<HTMLElement>|string|number)}    elements
	         *      A reference to a single element to remove, an array-like collection of elements, a selector string, or the index of an element to remove.
	         * @param       {boolean}   [animate=true]
	         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
	         * @param       {function}  [callback=null]
	         *      An optional callback function to be invoked after the operation has completed.
	         * @return      {Promise.<mixitup.State>}
	         *      A promise resolving with the current state object.
	         */

	        remove: function remove() {
	            var self = this,
	                args = self.parseRemoveArgs(arguments);

	            return self.multimix({
	                remove: args.command
	            }, args.animate, args.callback);
	        },

	        /**
	         * Retrieves the the value of any property or sub-object within the current
	         * mixitup configuration, or the whole configuration object.
	         *
	         * @example
	         *
	         * .getConfig([stringKey])
	         *
	         * @example <caption>Example 1: retrieve the entire configuration object</caption>
	         *
	         * var config = mixer.getConfig(); // Config { ... }
	         *
	         * @example <caption>Example 2: retrieve a named sub-object of configuration object</caption>
	         *
	         * var animation = mixer.getConfig('animation'); // ConfigAnimation { ... }
	         *
	         * @example <caption>Example 3: retrieve a value of configuration object via a dot-notation string key</caption>
	         *
	         * var effects = mixer.getConfig('animation.effects'); // 'fade scale'
	         *
	         * @public
	         * @instance
	         * @since       2.0.0
	         * @param       {string}    [stringKey]    A "dot-notation" string key
	         * @return      {*}
	         */

	        getConfig: function getConfig(stringKey) {
	            var self = this,
	                value = null;

	            if (!stringKey) {
	                value = self.config;
	            } else {
	                value = h.getProperty(self.config, stringKey);
	            }

	            return self.callFilters('valueGetConfig', value, arguments);
	        },

	        /**
	         * Updates the configuration of the mixer, after it has been instantiated.
	         *
	         * See the Configuration Object documentation for a full list of avilable
	         * configuration options.
	         *
	         * @example
	         *
	         * .configure(config)
	         *
	         * @example <caption>Example 1: Updating animation options</caption>
	         *
	         * mixer.configure({
	         *     animation: {
	         *         effects: 'fade translateX(-100%)',
	         *         duration: 300
	         *     }
	         * });
	         *
	         * @example <caption>Example 2: Removing a callback after it has been set</caption>
	         *
	         * var mixer;
	         *
	         * function handleMixEndOnce() {
	         *     // Do something ..
	         *
	         *     // Then nullify the callback
	         *
	         *     mixer.configure({
	         *         callbacks: {
	         *             onMixEnd: null
	         *         }
	         *     });
	         * };
	         *
	         * // Instantiate a mixer with a callback defined
	         *
	         * mixer = mixitup(containerEl, {
	         *     callbacks: {
	         *         onMixEnd: handleMixEndOnce
	         *     }
	         * });
	         *
	         * @public
	         * @instance
	         * @since       3.0.0
	         * @param       {object}    config
	         *      An object containing one of more configuration options.
	         * @return      {void}
	         */

	        configure: function configure(config) {
	            var self = this;

	            self.callActions('beforeConfigure', arguments);

	            h.extend(self.config, config, true, true);

	            self.callActions('afterConfigure', arguments);
	        },

	        /**
	         * Returns an object containing information about the current state of the
	         * mixer. See the State Object documentation for more information.
	         *
	         * NB: State objects are immutable and should therefore be regenerated
	         * after any operation.
	         *
	         * @example
	         *
	         * .getState();
	         *
	         * @example <caption>Example: Retrieving a state object</caption>
	         *
	         * var state = mixer.getState();
	         *
	         * console.log(state.totalShow + 'targets are currently shown');
	         *
	         * @public
	         * @instance
	         * @since       2.0.0
	         * @return      {mixitup.State} An object reflecting the current state of the mixer.
	         */

	        getState: function getState() {
	            var self = this,
	                state = null;

	            state = new _mixitup.State();

	            h.extend(state, self.state);

	            h.freeze(state);

	            return self.callFilters('stateGetState', state, arguments);
	        },

	        /**
	         * Forces the re-indexing all targets within the container.
	         *
	         * This should only be used if some other piece of code in your application
	         * has manipulated the contents of your container, which should be avoided.
	         *
	         * If you need to add or remove target elements from the container, use
	         * the built-in `.insert()` or `.remove()` methods, and MixItUp will keep
	         * itself up to date.
	         *
	         * @example
	         *
	         * .forceRefresh()
	         *
	         * @example <caption>Example: Force refreshing the mixer after external DOM manipulation</caption>
	         *
	         * console.log(mixer.getState().totalShow); // 3
	         *
	         * // An element is removed from the container via some external DOM manipulation code:
	         *
	         * containerEl.removeChild(containerEl.firstElementChild);
	         *
	         * // The mixer does not know that the number of targets has changed:
	         *
	         * console.log(mixer.getState().totalShow); // 3
	         *
	         * mixer.forceRefresh();
	         *
	         * // After forceRefresh, the mixer is in sync again:
	         *
	         * console.log(mixer.getState().totalShow); // 2
	         *
	         * @public
	         * @instance
	         * @since 2.1.2
	         * @return {void}
	         */

	        forceRefresh: function forceRefresh() {
	            var self = this;

	            self.indexTargets();
	        },

	        /**
	         * Removes mixitup functionality from the container, unbinds all control
	         * event handlers, and deletes the mixer instance from MixItUp's internal
	         * cache.
	         *
	         * This should be performed whenever a mixer's container is removed from
	         * the DOM, such as during a page change in a single page application,
	         * or React's `componentWillUnmount()`.
	         *
	         * @example
	         *
	         * .destroy([cleanUp])
	         *
	         * @example <caption>Example: Destroying the mixer before removing its container element</caption>
	         *
	         * mixer.destroy();
	         *
	         * containerEl.parentElement.removeChild(containerEl);
	         *
	         * @public
	         * @instance
	         * @since   2.0.0
	         * @param   {boolean}   [cleanUp=false]
	         *     An optional boolean dictating whether or not to clean up any inline `display: none;` styling applied to hidden targets.
	         * @return  {void}
	         */

	        destroy: function destroy(cleanUp) {
	            var self = this,
	                control = null,
	                target = null,
	                i = 0;

	            self.callActions('beforeDestroy', arguments);

	            for (i = 0; control = self.controls[i]; i++) {
	                control.removeBinding(self);
	            }

	            for (i = 0; target = self.targets[i]; i++) {
	                if (cleanUp) {
	                    target.show();
	                }

	                target.unbindEvents();
	            }

	            if (self.dom.container.id.match(/^MixItUp/)) {
	                self.dom.container.removeAttribute('id');
	            }

	            delete _mixitup.instances[self.id];

	            self.callActions('afterDestroy', arguments);
	        }
	    });

	    /**
	     * @constructor
	     * @memberof    mixitup
	     * @private
	     * @since       3.0.0
	     */

	    _mixitup.IMoveData = function () {
	        _mixitup.Base.call(this);

	        this.callActions('beforeConstruct');

	        this.posIn = null;
	        this.posOut = null;
	        this.operation = null;
	        this.callback = null;
	        this.statusChange = '';
	        this.duration = -1;
	        this.staggerIndex = -1;

	        this.callActions('afterConstruct');

	        h.seal(this);
	    };

	    _mixitup.BaseStatic.call(_mixitup.IMoveData);

	    _mixitup.IMoveData.prototype = Object.create(_mixitup.Base.prototype);

	    _mixitup.IMoveData.prototype.constructor = _mixitup.IMoveData;

	    /**
	     * @constructor
	     * @memberof    mixitup
	     * @private
	     * @since       3.0.0
	     */

	    _mixitup.TargetDom = function () {
	        _mixitup.Base.call(this);

	        this.callActions('beforeConstruct');

	        this.el = null;

	        this.callActions('afterConstruct');

	        h.seal(this);
	    };

	    _mixitup.BaseStatic.call(_mixitup.TargetDom);

	    _mixitup.TargetDom.prototype = Object.create(_mixitup.Base.prototype);

	    _mixitup.TargetDom.prototype.constructor = _mixitup.TargetDom;

	    /**
	     * @constructor
	     * @namespace
	     * @memberof    mixitup
	     * @private
	     * @since       3.0.0
	     */

	    _mixitup.Target = function () {
	        _mixitup.Base.call(this);

	        this.callActions('beforeConstruct');

	        this.id = '';
	        this.sortString = '';
	        this.mixer = null;
	        this.callback = null;
	        this.isShown = false;
	        this.isBound = false;
	        this.isExcluded = false;
	        this.isInDom = false;
	        this.handler = null;
	        this.operation = null;
	        this.data = null;
	        this.dom = new _mixitup.TargetDom();

	        this.callActions('afterConstruct');

	        h.seal(this);
	    };

	    _mixitup.BaseStatic.call(_mixitup.Target);

	    _mixitup.Target.prototype = Object.create(_mixitup.Base.prototype);

	    h.extend(_mixitup.Target.prototype, {
	        constructor: _mixitup.Target,

	        /**
	         * Initialises a newly instantiated Target.
	         *
	         * @private
	         * @instance
	         * @since   3.0.0
	         * @param   {(Element|null)}    el
	         * @param   {object}            mixer
	         * @param   {object}            [data]
	         * @return  {void}
	         */

	        init: function init(el, mixer, data) {
	            var self = this,
	                id = '';

	            self.callActions('beforeInit', arguments);

	            self.mixer = mixer;

	            if (!el) {
	                // If no element is provided, render it

	                el = self.render(data);
	            }

	            self.cacheDom(el);

	            self.bindEvents();

	            if (self.dom.el.style.display !== 'none') {
	                self.isShown = true;
	            }

	            if (data && mixer.config.data.uidKey) {
	                if (typeof (id = data[mixer.config.data.uidKey]) === 'undefined' || id.toString().length < 1) {
	                    throw new TypeError(_mixitup.messages.errorDatasetInvalidUidKey({
	                        uidKey: mixer.config.data.uidKey
	                    }));
	                }

	                self.id = id;
	                self.data = data;

	                mixer.cache[id] = self;
	            }

	            self.callActions('afterInit', arguments);
	        },

	        /**
	         * Renders the target element using a user-defined renderer function.
	         *
	         * @private
	         * @instance
	         * @since   3.1.4
	         * @param   {object} data
	         * @return  {void}
	         */

	        render: function render(data) {
	            var self = this,
	                render = null,
	                el = null,
	                temp = null,
	                output = '';

	            self.callActions('beforeRender', arguments);

	            render = self.callFilters('renderRender', self.mixer.config.render.target, arguments);

	            if (typeof render !== 'function') {
	                throw new TypeError(_mixitup.messages.errorDatasetRendererNotSet());
	            }

	            output = render(data);

	            if (output && (typeof output === 'undefined' ? 'undefined' : _typeof(output)) === 'object' && h.isElement(output)) {
	                el = output;
	            } else if (typeof output === 'string') {
	                temp = document.createElement('div');
	                temp.innerHTML = output;

	                el = temp.firstElementChild;
	            }

	            return self.callFilters('elRender', el, arguments);
	        },

	        /**
	         * Caches references of DOM elements neccessary for the target's functionality.
	         *
	         * @private
	         * @instance
	         * @since   3.0.0
	         * @param   {Element} el
	         * @return  {void}
	         */

	        cacheDom: function cacheDom(el) {
	            var self = this;

	            self.callActions('beforeCacheDom', arguments);

	            self.dom.el = el;

	            self.callActions('afterCacheDom', arguments);
	        },

	        /**
	         * @private
	         * @instance
	         * @since   3.0.0
	         * @param   {string}    attributeName
	         * @return  {void}
	         */

	        getSortString: function getSortString(attributeName) {
	            var self = this,
	                value = self.dom.el.getAttribute('data-' + attributeName) || '';

	            self.callActions('beforeGetSortString', arguments);

	            value = isNaN(value * 1) ? value.toLowerCase() : value * 1;

	            self.sortString = value;

	            self.callActions('afterGetSortString', arguments);
	        },

	        /**
	         * @private
	         * @instance
	         * @since   3.0.0
	         * @return  {void}
	         */

	        show: function show() {
	            var self = this;

	            self.callActions('beforeShow', arguments);

	            if (!self.isShown) {
	                self.dom.el.style.display = '';

	                self.isShown = true;
	            }

	            self.callActions('afterShow', arguments);
	        },

	        /**
	         * @private
	         * @instance
	         * @since   3.0.0
	         * @return  {void}
	         */

	        hide: function hide() {
	            var self = this;

	            self.callActions('beforeHide', arguments);

	            if (self.isShown) {
	                self.dom.el.style.display = 'none';

	                self.isShown = false;
	            }

	            self.callActions('afterHide', arguments);
	        },

	        /**
	         * @private
	         * @instance
	         * @since   3.0.0
	         * @param   {mixitup.IMoveData} moveData
	         * @return  {void}
	         */

	        move: function move(moveData) {
	            var self = this;

	            self.callActions('beforeMove', arguments);

	            if (!self.isExcluded) {
	                self.mixer.targetsMoved++;
	            }

	            self.applyStylesIn(moveData);

	            requestAnimationFrame(function () {
	                self.applyStylesOut(moveData);
	            });

	            self.callActions('afterMove', arguments);
	        },

	        /**
	         * @private
	         * @instance
	         * @since   3.0.0
	         * @param   {object}    posData
	         * @param   {number}    multiplier
	         * @return  {void}
	         */

	        applyTween: function applyTween(posData, multiplier) {
	            var self = this,
	                propertyName = '',
	                tweenData = null,
	                posIn = posData.posIn,
	                currentTransformValues = [],
	                currentValues = new _mixitup.StyleData(),
	                i = -1;

	            self.callActions('beforeApplyTween', arguments);

	            currentValues.x = posIn.x;
	            currentValues.y = posIn.y;

	            if (multiplier === 0) {
	                self.hide();
	            } else if (!self.isShown) {
	                self.show();
	            }

	            for (i = 0; propertyName = _mixitup.features.TWEENABLE[i]; i++) {
	                tweenData = posData.tweenData[propertyName];

	                if (propertyName === 'x') {
	                    if (!tweenData) continue;

	                    currentValues.x = posIn.x + tweenData * multiplier;
	                } else if (propertyName === 'y') {
	                    if (!tweenData) continue;

	                    currentValues.y = posIn.y + tweenData * multiplier;
	                } else if (tweenData instanceof _mixitup.TransformData) {
	                    if (!tweenData.value) continue;

	                    currentValues[propertyName].value = posIn[propertyName].value + tweenData.value * multiplier;

	                    currentValues[propertyName].unit = tweenData.unit;

	                    currentTransformValues.push(propertyName + '(' + currentValues[propertyName].value + tweenData.unit + ')');
	                } else {
	                    if (!tweenData) continue;

	                    currentValues[propertyName] = posIn[propertyName] + tweenData * multiplier;

	                    self.dom.el.style[propertyName] = currentValues[propertyName];
	                }
	            }

	            if (currentValues.x || currentValues.y) {
	                currentTransformValues.unshift('translate(' + currentValues.x + 'px, ' + currentValues.y + 'px)');
	            }

	            if (currentTransformValues.length) {
	                self.dom.el.style[_mixitup.features.transformProp] = currentTransformValues.join(' ');
	            }

	            self.callActions('afterApplyTween', arguments);
	        },

	        /**
	         * Applies the initial styling to a target element before any transition
	         * is applied.
	         *
	         * @private
	         * @instance
	         * @param   {mixitup.IMoveData} moveData
	         * @return  {void}
	         */

	        applyStylesIn: function applyStylesIn(moveData) {
	            var self = this,
	                posIn = moveData.posIn,
	                isFading = self.mixer.effectsIn.opacity !== 1,
	                transformValues = [];

	            self.callActions('beforeApplyStylesIn', arguments);

	            transformValues.push('translate(' + posIn.x + 'px, ' + posIn.y + 'px)');

	            if (self.mixer.config.animation.animateResizeTargets) {
	                if (moveData.statusChange !== 'show') {
	                    // Don't apply posIn width or height or showing, as will be 0

	                    self.dom.el.style.width = posIn.width + 'px';
	                    self.dom.el.style.height = posIn.height + 'px';
	                }

	                self.dom.el.style.marginRight = posIn.marginRight + 'px';
	                self.dom.el.style.marginBottom = posIn.marginBottom + 'px';
	            }

	            isFading && (self.dom.el.style.opacity = posIn.opacity);

	            if (moveData.statusChange === 'show') {
	                transformValues = transformValues.concat(self.mixer.transformIn);
	            }

	            self.dom.el.style[_mixitup.features.transformProp] = transformValues.join(' ');

	            self.callActions('afterApplyStylesIn', arguments);
	        },

	        /**
	         * Applies a transition followed by the final styles for the element to
	         * transition towards.
	         *
	         * @private
	         * @instance
	         * @param   {mixitup.IMoveData} moveData
	         * @return  {void}
	         */

	        applyStylesOut: function applyStylesOut(moveData) {
	            var self = this,
	                transitionRules = [],
	                transformValues = [],
	                isResizing = self.mixer.config.animation.animateResizeTargets,
	                isFading = typeof self.mixer.effectsIn.opacity !== 'undefined';

	            self.callActions('beforeApplyStylesOut', arguments);

	            // Build the transition rules

	            transitionRules.push(self.writeTransitionRule(_mixitup.features.transformRule, moveData.staggerIndex));

	            if (moveData.statusChange !== 'none') {
	                transitionRules.push(self.writeTransitionRule('opacity', moveData.staggerIndex, moveData.duration));
	            }

	            if (isResizing) {
	                transitionRules.push(self.writeTransitionRule('width', moveData.staggerIndex, moveData.duration));

	                transitionRules.push(self.writeTransitionRule('height', moveData.staggerIndex, moveData.duration));

	                transitionRules.push(self.writeTransitionRule('margin', moveData.staggerIndex, moveData.duration));
	            }

	            // If no callback was provided, the element will
	            // not transition in any way so tag it as "immovable"

	            if (!moveData.callback) {
	                self.mixer.targetsImmovable++;

	                if (self.mixer.targetsMoved === self.mixer.targetsImmovable) {
	                    // If the total targets moved is equal to the
	                    // number of immovable targets, the operation
	                    // should be considered finished

	                    self.mixer.cleanUp(moveData.operation);
	                }

	                return;
	            }

	            // If the target will transition in some fasion,
	            // assign a callback function

	            self.operation = moveData.operation;
	            self.callback = moveData.callback;

	            // As long as the target is not excluded, increment
	            // the total number of targets bound

	            !self.isExcluded && self.mixer.targetsBound++;

	            // Tag the target as bound to differentiate from transitionEnd
	            // events that may come from stylesheet driven effects

	            self.isBound = true;

	            // Apply the transition

	            self.applyTransition(transitionRules);

	            // Apply width, height and margin negation

	            if (isResizing && moveData.posOut.width > 0 && moveData.posOut.height > 0) {
	                self.dom.el.style.width = moveData.posOut.width + 'px';
	                self.dom.el.style.height = moveData.posOut.height + 'px';
	                self.dom.el.style.marginRight = moveData.posOut.marginRight + 'px';
	                self.dom.el.style.marginBottom = moveData.posOut.marginBottom + 'px';
	            }

	            if (!self.mixer.config.animation.nudge && moveData.statusChange === 'hide') {
	                // If we're not nudging, the translation should be
	                // applied before any other transforms to prevent
	                // lateral movement

	                transformValues.push('translate(' + moveData.posOut.x + 'px, ' + moveData.posOut.y + 'px)');
	            }

	            // Apply fade

	            switch (moveData.statusChange) {
	                case 'hide':
	                    isFading && (self.dom.el.style.opacity = self.mixer.effectsOut.opacity);

	                    transformValues = transformValues.concat(self.mixer.transformOut);

	                    break;
	                case 'show':
	                    isFading && (self.dom.el.style.opacity = 1);
	            }

	            if (self.mixer.config.animation.nudge || !self.mixer.config.animation.nudge && moveData.statusChange !== 'hide') {
	                // Opposite of above - apply translate after
	                // other transform

	                transformValues.push('translate(' + moveData.posOut.x + 'px, ' + moveData.posOut.y + 'px)');
	            }

	            // Apply transforms

	            self.dom.el.style[_mixitup.features.transformProp] = transformValues.join(' ');

	            self.callActions('afterApplyStylesOut', arguments);
	        },

	        /**
	         * Combines the name of a CSS property with the appropriate duration and delay
	         * values to created a valid transition rule.
	         *
	         * @private
	         * @instance
	         * @since   3.0.0
	         * @param   {string}    property
	         * @param   {number}    staggerIndex
	         * @param   {number}    duration
	         * @return  {string}
	         */

	        writeTransitionRule: function writeTransitionRule(property, staggerIndex, duration) {
	            var self = this,
	                delay = self.getDelay(staggerIndex),
	                rule = '';

	            rule = property + ' ' + (duration > 0 ? duration : self.mixer.config.animation.duration) + 'ms ' + delay + 'ms ' + (property === 'opacity' ? 'linear' : self.mixer.config.animation.easing);

	            return self.callFilters('ruleWriteTransitionRule', rule, arguments);
	        },

	        /**
	         * Calculates the transition delay for each target element based on its index, if
	         * staggering is applied. If defined, A custom `animation.staggerSeqeuence`
	         * function can be used to manipulate the order of indices to produce custom
	         * stagger effects (e.g. for use in a grid with irregular row lengths).
	         *
	         * @private
	         * @instance
	         * @since   2.0.0
	         * @param   {number}    index
	         * @return  {number}
	         */

	        getDelay: function getDelay(index) {
	            var self = this,
	                delay = -1;

	            if (typeof self.mixer.config.animation.staggerSequence === 'function') {
	                index = self.mixer.config.animation.staggerSequence.call(self, index, self.state);
	            }

	            delay = !!self.mixer.staggerDuration ? index * self.mixer.staggerDuration : 0;

	            return self.callFilters('delayGetDelay', delay, arguments);
	        },

	        /**
	         * @private
	         * @instance
	         * @since   3.0.0
	         * @param   {string[]}  rules
	         * @return  {void}
	         */

	        applyTransition: function applyTransition(rules) {
	            var self = this,
	                transitionString = rules.join(', ');

	            self.callActions('beforeApplyTransition', arguments);

	            self.dom.el.style[_mixitup.features.transitionProp] = transitionString;

	            self.callActions('afterApplyTransition', arguments);
	        },

	        /**
	         * @private
	         * @instance
	         * @since   3.0.0
	         * @param   {Event} e
	         * @return  {void}
	         */

	        handleTransitionEnd: function handleTransitionEnd(e) {
	            var self = this,
	                propName = e.propertyName,
	                canResize = self.mixer.config.animation.animateResizeTargets;

	            self.callActions('beforeHandleTransitionEnd', arguments);

	            if (self.isBound && e.target.matches(self.mixer.config.selectors.target) && (propName.indexOf('transform') > -1 || propName.indexOf('opacity') > -1 || canResize && propName.indexOf('height') > -1 || canResize && propName.indexOf('width') > -1 || canResize && propName.indexOf('margin') > -1)) {
	                self.callback.call(self, self.operation);

	                self.isBound = false;
	                self.callback = null;
	                self.operation = null;
	            }

	            self.callActions('afterHandleTransitionEnd', arguments);
	        },

	        /**
	         * @private
	         * @instance
	         * @since   3.0.0
	         * @param   {Event}     e
	         * @return  {void}
	         */

	        eventBus: function eventBus(e) {
	            var self = this;

	            self.callActions('beforeEventBus', arguments);

	            switch (e.type) {
	                case 'webkitTransitionEnd':
	                case 'transitionend':
	                    self.handleTransitionEnd(e);
	            }

	            self.callActions('afterEventBus', arguments);
	        },

	        /**
	         * @private
	         * @instance
	         * @since   3.0.0
	         * @return  {void}
	         */

	        unbindEvents: function unbindEvents() {
	            var self = this;

	            self.callActions('beforeUnbindEvents', arguments);

	            h.off(self.dom.el, 'webkitTransitionEnd', self.handler);
	            h.off(self.dom.el, 'transitionend', self.handler);

	            self.callActions('afterUnbindEvents', arguments);
	        },

	        /**
	         * @private
	         * @instance
	         * @since   3.0.0
	         * @return  {void}
	         */

	        bindEvents: function bindEvents() {
	            var self = this,
	                transitionEndEvent = '';

	            self.callActions('beforeBindEvents', arguments);

	            transitionEndEvent = _mixitup.features.transitionPrefix === 'webkit' ? 'webkitTransitionEnd' : 'transitionend';

	            self.handler = function (e) {
	                return self.eventBus(e);
	            };

	            h.on(self.dom.el, transitionEndEvent, self.handler);

	            self.callActions('afterBindEvents', arguments);
	        },

	        /**
	         * @private
	         * @instance
	         * @since   3.0.0
	         * @param   {boolean}   [getBox]
	         * @return  {PosData}
	         */

	        getPosData: function getPosData(getBox) {
	            var self = this,
	                styles = {},
	                rect = null,
	                posData = new _mixitup.StyleData();

	            self.callActions('beforeGetPosData', arguments);

	            posData.x = self.dom.el.offsetLeft;
	            posData.y = self.dom.el.offsetTop;

	            if (self.mixer.config.animation.animateResizeTargets || getBox) {
	                rect = self.dom.el.getBoundingClientRect();

	                posData.top = rect.top;
	                posData.right = rect.right;
	                posData.bottom = rect.bottom;
	                posData.left = rect.left;

	                posData.width = rect.width;
	                posData.height = rect.height;
	            }

	            if (self.mixer.config.animation.animateResizeTargets) {
	                styles = window.getComputedStyle(self.dom.el);

	                posData.marginBottom = parseFloat(styles.marginBottom);
	                posData.marginRight = parseFloat(styles.marginRight);
	            }

	            return self.callFilters('posDataGetPosData', posData, arguments);
	        },

	        /**
	         * @private
	         * @instance
	         * @since       3.0.0
	         * @return      {void}
	         */

	        cleanUp: function cleanUp() {
	            var self = this;

	            self.callActions('beforeCleanUp', arguments);

	            self.dom.el.style[_mixitup.features.transformProp] = '';
	            self.dom.el.style[_mixitup.features.transitionProp] = '';
	            self.dom.el.style.opacity = '';

	            if (self.mixer.config.animation.animateResizeTargets) {
	                self.dom.el.style.width = '';
	                self.dom.el.style.height = '';
	                self.dom.el.style.marginRight = '';
	                self.dom.el.style.marginBottom = '';
	            }

	            self.callActions('afterCleanUp', arguments);
	        }
	    });

	    /**
	     * A jQuery-collection-like wrapper around one or more `mixitup.Mixer` instances
	     * allowing simultaneous control of said instances similar to the MixItUp 2 API.
	     *
	     * @example
	     * new mixitup.Collection(instances)
	     *
	     * @constructor
	     * @namespace
	     * @memberof    mixitup
	     * @private
	     * @since       3.0.0
	     * @param       {mixitup.Mixer[]}   instances
	     */

	    _mixitup.Collection = function (instances) {
	        var instance = null,
	            i = -1;

	        this.callActions('beforeConstruct');

	        for (i = 0; instance = instances[i]; i++) {
	            this[i] = instance;
	        }

	        this.length = instances.length;

	        this.callActions('afterConstruct');

	        h.freeze(this);
	    };

	    _mixitup.BaseStatic.call(_mixitup.Collection);

	    _mixitup.Collection.prototype = Object.create(_mixitup.Base.prototype);

	    h.extend(_mixitup.Collection.prototype,
	    /** @lends mixitup.Collection */
	    {
	        constructor: _mixitup.Collection,

	        /**
	         * Calls a method on all instances in the collection by passing the method
	         * name as a string followed by any applicable parameters to be curried into
	         * to the method.
	         *
	         * @example
	         * .mixitup(methodName[,arg1][,arg2..]);
	         *
	         * @example
	         * var collection = new Collection([mixer1, mixer2]);
	         *
	         * return collection.mixitup('filter', '.category-a')
	         *     .then(function(states) {
	         *         state.forEach(function(state) {
	         *             console.log(state.activeFilter.selector); // .category-a
	         *         });
	         *     });
	         *
	         * @public
	         * @instance
	         * @since       3.0.0
	         * @param       {string}  methodName
	         * @return      {Promise<Array<mixitup.State>>}
	         */

	        mixitup: function mixitup(methodName) {
	            var self = this,
	                instance = null,
	                args = Array.prototype.slice.call(arguments),
	                tasks = [],
	                i = -1;

	            this.callActions('beforeMixitup');

	            args.shift();

	            for (i = 0; instance = self[i]; i++) {
	                tasks.push(instance[methodName].apply(instance, args));
	            }

	            return self.callFilters('promiseMixitup', h.all(tasks, _mixitup.libraries), arguments);
	        }
	    });

	    /**
	     * `mixitup.Operation` objects contain all data neccessary to describe the full
	     * lifecycle of any MixItUp operation. They can be used to compute and store an
	     * operation for use at a later time (e.g. programmatic tweening).
	     *
	     * @constructor
	     * @namespace
	     * @memberof    mixitup
	     * @private
	     * @since       3.0.0
	     */

	    _mixitup.Operation = function () {
	        _mixitup.Base.call(this);

	        this.callActions('beforeConstruct');

	        this.id = '';

	        this.args = [];
	        this.command = null;
	        this.showPosData = [];
	        this.toHidePosData = [];

	        this.startState = null;
	        this.newState = null;
	        this.docState = null;

	        this.willSort = false;
	        this.willChangeLayout = false;
	        this.hasEffect = false;
	        this.hasFailed = false;

	        this.triggerElement = null;

	        this.show = [];
	        this.hide = [];
	        this.matching = [];
	        this.toShow = [];
	        this.toHide = [];
	        this.toMove = [];
	        this.toRemove = [];
	        this.startOrder = [];
	        this.newOrder = [];
	        this.startSort = null;
	        this.newSort = null;
	        this.startFilter = null;
	        this.newFilter = null;
	        this.startDataset = null;
	        this.newDataset = null;
	        this.startX = 0;
	        this.startY = 0;
	        this.startHeight = 0;
	        this.startWidth = 0;
	        this.newX = 0;
	        this.newY = 0;
	        this.newHeight = 0;
	        this.newWidth = 0;
	        this.startContainerClassName = '';
	        this.startDisplay = '';
	        this.newContainerClassName = '';
	        this.newDisplay = '';

	        this.callActions('afterConstruct');

	        h.seal(this);
	    };

	    _mixitup.BaseStatic.call(_mixitup.Operation);

	    _mixitup.Operation.prototype = Object.create(_mixitup.Base.prototype);

	    _mixitup.Operation.prototype.constructor = _mixitup.Operation;

	    /**
	     * `mixitup.State` objects expose various pieces of data detailing the state of
	     * a MixItUp instance. They are provided at the start and end of any operation via
	     * callbacks and events, with the most recent state stored between operations
	     * for retrieval at any time via the API.
	     *
	     * @constructor
	     * @namespace
	     * @memberof    mixitup
	     * @public
	     * @since       3.0.0
	     */

	    _mixitup.State = function () {
	        _mixitup.Base.call(this);

	        this.callActions('beforeConstruct');

	        /**
	         * The ID of the mixer instance.
	         *
	         * @name        id
	         * @memberof    mixitup.State
	         * @instance
	         * @type        {string}
	         * @default     ''
	         */

	        this.id = '';

	        /**
	         * The currently active filter command as set by a control click or API call.
	         *
	         * @name        activeFilter
	         * @memberof    mixitup.State
	         * @instance
	         * @type        {mixitup.CommandFilter}
	         * @default     null
	         */

	        this.activeFilter = null;

	        /**
	         * The currently active sort command as set by a control click or API call.
	         *
	         * @name        activeSort
	         * @memberof    mixitup.State
	         * @instance
	         * @type        {mixitup.CommandSort}
	         * @default     null
	         */

	        this.activeSort = null;

	        /**
	         * The current layout-specific container class name, if applied.
	         *
	         * @name        activeContainerClassName
	         * @memberof    mixitup.State
	         * @instance
	         * @type        {string}
	         * @default     ''
	         */

	        this.activeContainerClassName = '';

	        /**
	         * A reference to the container element that the mixer is instantiated on.
	         *
	         * @name        container
	         * @memberof    mixitup.State
	         * @instance
	         * @type        {Element}
	         * @default     null
	         */

	        this.container = null;

	        /**
	         * An array of all target elements indexed by the mixer.
	         *
	         * @name        targets
	         * @memberof    mixitup.State
	         * @instance
	         * @type        {Array.<Element>}
	         * @default     []
	         */

	        this.targets = [];

	        /**
	         * An array of all target elements not matching the current filter.
	         *
	         * @name        hide
	         * @memberof    mixitup.State
	         * @instance
	         * @type        {Array.<Element>}
	         * @default     []
	         */

	        this.hide = [];

	        /**
	         * An array of all target elements matching the current filter and any additional
	         * limits applied such as pagination.
	         *
	         * @name        show
	         * @memberof    mixitup.State
	         * @instance
	         * @type        {Array.<Element>}
	         * @default     []
	         */

	        this.show = [];

	        /**
	         * An array of all target elements matching the current filter irrespective of
	         * any additional limits applied such as pagination.
	         *
	         * @name        matching
	         * @memberof    mixitup.State
	         * @instance
	         * @type        {Array.<Element>}
	         * @default     []
	         */

	        this.matching = [];

	        /**
	         * An integer representing the total number of target elements indexed by the
	         * mixer. Equivalent to `state.targets.length`.
	         *
	         * @name        totalTargets
	         * @memberof    mixitup.State
	         * @instance
	         * @type        {number}
	         * @default     -1
	         */

	        this.totalTargets = -1;

	        /**
	         * An integer representing the total number of target elements matching the
	         * current filter and any additional limits applied such as pagination.
	         * Equivalent to `state.show.length`.
	         *
	         * @name        totalShow
	         * @memberof    mixitup.State
	         * @instance
	         * @type        {number}
	         * @default     -1
	         */

	        this.totalShow = -1;

	        /**
	         * An integer representing the total number of target elements not matching
	         * the current filter. Equivalent to `state.hide.length`.
	         *
	         * @name        totalHide
	         * @memberof    mixitup.State
	         * @instance
	         * @type        {number}
	         * @default     -1
	         */

	        this.totalHide = -1;

	        /**
	         * An integer representing the total number of target elements matching the
	         * current filter irrespective of any other limits applied such as pagination.
	         * Equivalent to `state.matching.length`.
	         *
	         * @name        totalMatching
	         * @memberof    mixitup.State
	         * @instance
	         * @type        {number}
	         * @default     -1
	         */

	        this.totalMatching = -1;

	        /**
	         * A boolean indicating whether the last operation "failed", i.e. no targets
	         * could be found matching the filter.
	         *
	         * @name        hasFailed
	         * @memberof    mixitup.State
	         * @instance
	         * @type        {boolean}
	         * @default     false
	         */

	        this.hasFailed = false;

	        /**
	         * The DOM element that was clicked if the last operation was triggered by the
	         * clicking of a control and not an API call.
	         *
	         * @name        triggerElement
	         * @memberof    mixitup.State
	         * @instance
	         * @type        {Element|null}
	         * @default     null
	         */

	        this.triggerElement = null;

	        /**
	         * The currently active dataset underlying the rendered targets, if the
	         * dataset API is in use.
	         *
	         * @name        activeDataset
	         * @memberof    mixitup.State
	         * @instance
	         * @type        {Array.<object>}
	         * @default     null
	         */

	        this.activeDataset = null;

	        this.callActions('afterConstruct');

	        h.seal(this);
	    };

	    _mixitup.BaseStatic.call(_mixitup.State);

	    _mixitup.State.prototype = Object.create(_mixitup.Base.prototype);

	    _mixitup.State.prototype.constructor = _mixitup.State;

	    /**
	     * @constructor
	     * @memberof    mixitup
	     * @private
	     * @since       3.0.0
	     */

	    _mixitup.UserInstruction = function () {
	        _mixitup.Base.call(this);

	        this.callActions('beforeConstruct');

	        this.command = {};
	        this.animate = false;
	        this.callback = null;

	        this.callActions('afterConstruct');

	        h.seal(this);
	    };

	    _mixitup.BaseStatic.call(_mixitup.UserInstruction);

	    _mixitup.UserInstruction.prototype = Object.create(_mixitup.Base.prototype);

	    _mixitup.UserInstruction.prototype.constructor = _mixitup.UserInstruction;

	    /**
	     * @constructor
	     * @memberof    mixitup
	     * @private
	     * @since       3.0.0
	     */

	    _mixitup.Messages = function () {
	        _mixitup.Base.call(this);

	        this.callActions('beforeConstruct');

	        /* Errors
	        ----------------------------------------------------------------------------- */

	        this.ERROR_FACTORY_INVALID_CONTAINER = '[MixItUp] An invalid selector or element reference was passed to the mixitup factory function';

	        this.ERROR_FACTORY_CONTAINER_NOT_FOUND = '[MixItUp] The provided selector yielded no container element';

	        this.ERROR_CONFIG_INVALID_ANIMATION_EFFECTS = '[MixItUp] Invalid value for `animation.effects`';

	        this.ERROR_CONFIG_INVALID_CONTROLS_SCOPE = '[MixItUp] Invalid value for `controls.scope`';

	        this.ERROR_CONFIG_INVALID_PROPERTY = '[MixitUp] Invalid configuration object property "${erroneous}"${suggestion}';

	        this.ERROR_CONFIG_INVALID_PROPERTY_SUGGESTION = '. Did you mean "${probableMatch}"?';

	        this.ERROR_CONFIG_DATA_UID_KEY_NOT_SET = '[MixItUp] To use the dataset API, a UID key must be specified using `data.uidKey`';

	        this.ERROR_DATASET_INVALID_UID_KEY = '[MixItUp] The specified UID key "${uidKey}" is not present on one or more dataset items';

	        this.ERROR_DATASET_DUPLICATE_UID = '[MixItUp] The UID "${uid}" was found on two or more dataset items. UIDs must be unique.';

	        this.ERROR_INSERT_INVALID_ARGUMENTS = '[MixItUp] Please provider either an index or a sibling and position to insert, not both';

	        this.ERROR_INSERT_PREEXISTING_ELEMENT = '[MixItUp] An element to be inserted already exists in the container';

	        this.ERROR_FILTER_INVALID_ARGUMENTS = '[MixItUp] Please provide either a selector or collection `.filter()`, not both';

	        this.ERROR_DATASET_NOT_SET = '[MixItUp] To use the dataset API with pre-rendered targets, a starting dataset must be set using `load.dataset`';

	        this.ERROR_DATASET_PRERENDERED_MISMATCH = '[MixItUp] `load.dataset` does not match pre-rendered targets';

	        this.ERROR_DATASET_RENDERER_NOT_SET = '[MixItUp] To insert an element via the dataset API, a target renderer function must be provided to `render.target`';

	        /* Warnings
	        ----------------------------------------------------------------------------- */

	        this.WARNING_FACTORY_PREEXISTING_INSTANCE = '[MixItUp] WARNING: This element already has an active MixItUp instance. The provided configuration object will be ignored.' + ' If you wish to perform additional methods on this instance, please create a reference.';

	        this.WARNING_INSERT_NO_ELEMENTS = '[MixItUp] WARNING: No valid elements were passed to `.insert()`';

	        this.WARNING_REMOVE_NO_ELEMENTS = '[MixItUp] WARNING: No valid elements were passed to `.remove()`';

	        this.WARNING_MULTIMIX_INSTANCE_QUEUE_FULL = '[MixItUp] WARNING: An operation was requested but the MixItUp instance was busy. The operation was rejected because the ' + 'queue is full or queuing is disabled.';

	        this.WARNING_GET_OPERATION_INSTANCE_BUSY = '[MixItUp] WARNING: Operations can be be created while the MixItUp instance is busy.';

	        this.WARNING_NO_PROMISE_IMPLEMENTATION = '[MixItUp] WARNING: No Promise implementations could be found. If you wish to use promises with MixItUp please install' + ' an ES6 Promise polyfill.';

	        this.WARNING_INCONSISTENT_SORTING_ATTRIBUTES = '[MixItUp] WARNING: The requested sorting data attribute "${attribute}" was not present on one or more target elements' + ' which may product unexpected sort output';

	        this.callActions('afterConstruct');

	        this.compileTemplates();

	        h.seal(this);
	    };

	    _mixitup.BaseStatic.call(_mixitup.Messages);

	    _mixitup.Messages.prototype = Object.create(_mixitup.Base.prototype);

	    _mixitup.Messages.prototype.constructor = _mixitup.Messages;

	    /**
	     * @return {void}
	     */

	    _mixitup.Messages.prototype.compileTemplates = function () {
	        var errorKey = '';
	        var errorMessage = '';

	        for (errorKey in this) {
	            if (typeof (errorMessage = this[errorKey]) !== 'string') continue;

	            this[h.camelCase(errorKey)] = h.template(errorMessage);
	        }
	    };

	    _mixitup.messages = new _mixitup.Messages();

	    /**
	     * @constructor
	     * @memberof    mixitup
	     * @private
	     * @since       3.0.0
	     * @param       {mixitup.Mixer} mixer
	     */

	    _mixitup.Facade = function Mixer(mixer) {
	        _mixitup.Base.call(this);

	        this.callActions('beforeConstruct', arguments);

	        this.configure = mixer.configure.bind(mixer);
	        this.show = mixer.show.bind(mixer);
	        this.hide = mixer.hide.bind(mixer);
	        this.filter = mixer.filter.bind(mixer);
	        this.toggleOn = mixer.toggleOn.bind(mixer);
	        this.toggleOff = mixer.toggleOff.bind(mixer);
	        this.sort = mixer.sort.bind(mixer);
	        this.changeLayout = mixer.changeLayout.bind(mixer);
	        this.multimix = mixer.multimix.bind(mixer);
	        this.multiMix = mixer.multimix.bind(mixer);
	        this.dataset = mixer.dataset.bind(mixer);
	        this.tween = mixer.tween.bind(mixer);
	        this.insert = mixer.insert.bind(mixer);
	        this.insertBefore = mixer.insertBefore.bind(mixer);
	        this.insertAfter = mixer.insertAfter.bind(mixer);
	        this.prepend = mixer.prepend.bind(mixer);
	        this.append = mixer.append.bind(mixer);
	        this.remove = mixer.remove.bind(mixer);
	        this.destroy = mixer.destroy.bind(mixer);
	        this.forceRefresh = mixer.forceRefresh.bind(mixer);
	        this.isMixing = mixer.isMixing.bind(mixer);
	        this.getOperation = mixer.getOperation.bind(mixer);
	        this.getConfig = mixer.getConfig.bind(mixer);
	        this.getState = mixer.getState.bind(mixer);

	        this.callActions('afterConstruct', arguments);

	        h.freeze(this);
	        h.seal(this);
	    };

	    _mixitup.BaseStatic.call(_mixitup.Facade);

	    _mixitup.Facade.prototype = Object.create(_mixitup.Base.prototype);

	    _mixitup.Facade.prototype.constructor = _mixitup.Facade;

	    if (( false ? 'undefined' : _typeof(exports)) === 'object' && ( false ? 'undefined' : _typeof(module)) === 'object') {
	        module.exports = _mixitup;
	    } else if (true) {
	        !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	            return _mixitup;
	        }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof window.mixitup === 'undefined' || typeof window.mixitup !== 'function') {
	        window.mixitup = window.mixItUp = _mixitup;
	    }

	    if ((jq = window.$ || window.jQuery) && jq.fn.jquery) {
	        _mixitup.registerJqPlugin(jq);
	    }
	    _mixitup.BaseStatic.call(_mixitup.constructor);

	    _mixitup.NAME = 'mixitup';
	    _mixitup.CORE_VERSION = '3.1.10';
	})(window);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/*!
	 * imagesLoaded v4.1.1
	 * JavaScript is all like "You images are done yet or what?"
	 * MIT License
	 */

	(function (window, factory) {
	  'use strict';
	  // universal module definition

	  /*global define: false, module: false, require: false */

	  if (true) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(9)], __WEBPACK_AMD_DEFINE_RESULT__ = function (EvEmitter) {
	      return factory(window, EvEmitter);
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) == 'object' && module.exports) {
	    // CommonJS
	    module.exports = factory(window, require('ev-emitter'));
	  } else {
	    // browser global
	    window.imagesLoaded = factory(window, window.EvEmitter);
	  }
	})(window,

	// --------------------------  factory -------------------------- //

	function factory(window, EvEmitter) {

	  'use strict';

	  var $ = window.jQuery;
	  var console = window.console;

	  // -------------------------- helpers -------------------------- //

	  // extend objects
	  function extend(a, b) {
	    for (var prop in b) {
	      a[prop] = b[prop];
	    }
	    return a;
	  }

	  // turn element or nodeList into an array
	  function makeArray(obj) {
	    var ary = [];
	    if (Array.isArray(obj)) {
	      // use object if already an array
	      ary = obj;
	    } else if (typeof obj.length == 'number') {
	      // convert nodeList to array
	      for (var i = 0; i < obj.length; i++) {
	        ary.push(obj[i]);
	      }
	    } else {
	      // array of single index
	      ary.push(obj);
	    }
	    return ary;
	  }

	  // -------------------------- imagesLoaded -------------------------- //

	  /**
	   * @param {Array, Element, NodeList, String} elem
	   * @param {Object or Function} options - if function, use as callback
	   * @param {Function} onAlways - callback function
	   */
	  function ImagesLoaded(elem, options, onAlways) {
	    // coerce ImagesLoaded() without new, to be new ImagesLoaded()
	    if (!(this instanceof ImagesLoaded)) {
	      return new ImagesLoaded(elem, options, onAlways);
	    }
	    // use elem as selector string
	    if (typeof elem == 'string') {
	      elem = document.querySelectorAll(elem);
	    }

	    this.elements = makeArray(elem);
	    this.options = extend({}, this.options);

	    if (typeof options == 'function') {
	      onAlways = options;
	    } else {
	      extend(this.options, options);
	    }

	    if (onAlways) {
	      this.on('always', onAlways);
	    }

	    this.getImages();

	    if ($) {
	      // add jQuery Deferred object
	      this.jqDeferred = new $.Deferred();
	    }

	    // HACK check async to allow time to bind listeners
	    setTimeout(function () {
	      this.check();
	    }.bind(this));
	  }

	  ImagesLoaded.prototype = Object.create(EvEmitter.prototype);

	  ImagesLoaded.prototype.options = {};

	  ImagesLoaded.prototype.getImages = function () {
	    this.images = [];

	    // filter & find items if we have an item selector
	    this.elements.forEach(this.addElementImages, this);
	  };

	  /**
	   * @param {Node} element
	   */
	  ImagesLoaded.prototype.addElementImages = function (elem) {
	    // filter siblings
	    if (elem.nodeName == 'IMG') {
	      this.addImage(elem);
	    }
	    // get background image on element
	    if (this.options.background === true) {
	      this.addElementBackgroundImages(elem);
	    }

	    // find children
	    // no non-element nodes, #143
	    var nodeType = elem.nodeType;
	    if (!nodeType || !elementNodeTypes[nodeType]) {
	      return;
	    }
	    var childImgs = elem.querySelectorAll('img');
	    // concat childElems to filterFound array
	    for (var i = 0; i < childImgs.length; i++) {
	      var img = childImgs[i];
	      this.addImage(img);
	    }

	    // get child background images
	    if (typeof this.options.background == 'string') {
	      var children = elem.querySelectorAll(this.options.background);
	      for (i = 0; i < children.length; i++) {
	        var child = children[i];
	        this.addElementBackgroundImages(child);
	      }
	    }
	  };

	  var elementNodeTypes = {
	    1: true,
	    9: true,
	    11: true
	  };

	  ImagesLoaded.prototype.addElementBackgroundImages = function (elem) {
	    var style = getComputedStyle(elem);
	    if (!style) {
	      // Firefox returns null if in a hidden iframe https://bugzil.la/548397
	      return;
	    }
	    // get url inside url("...")
	    var reURL = /url\((['"])?(.*?)\1\)/gi;
	    var matches = reURL.exec(style.backgroundImage);
	    while (matches !== null) {
	      var url = matches && matches[2];
	      if (url) {
	        this.addBackground(url, elem);
	      }
	      matches = reURL.exec(style.backgroundImage);
	    }
	  };

	  /**
	   * @param {Image} img
	   */
	  ImagesLoaded.prototype.addImage = function (img) {
	    var loadingImage = new LoadingImage(img);
	    this.images.push(loadingImage);
	  };

	  ImagesLoaded.prototype.addBackground = function (url, elem) {
	    var background = new Background(url, elem);
	    this.images.push(background);
	  };

	  ImagesLoaded.prototype.check = function () {
	    var _this = this;
	    this.progressedCount = 0;
	    this.hasAnyBroken = false;
	    // complete if no images
	    if (!this.images.length) {
	      this.complete();
	      return;
	    }

	    function onProgress(image, elem, message) {
	      // HACK - Chrome triggers event before object properties have changed. #83
	      setTimeout(function () {
	        _this.progress(image, elem, message);
	      });
	    }

	    this.images.forEach(function (loadingImage) {
	      loadingImage.once('progress', onProgress);
	      loadingImage.check();
	    });
	  };

	  ImagesLoaded.prototype.progress = function (image, elem, message) {
	    this.progressedCount++;
	    this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
	    // progress event
	    this.emitEvent('progress', [this, image, elem]);
	    if (this.jqDeferred && this.jqDeferred.notify) {
	      this.jqDeferred.notify(this, image);
	    }
	    // check if completed
	    if (this.progressedCount == this.images.length) {
	      this.complete();
	    }

	    if (this.options.debug && console) {
	      console.log('progress: ' + message, image, elem);
	    }
	  };

	  ImagesLoaded.prototype.complete = function () {
	    var eventName = this.hasAnyBroken ? 'fail' : 'done';
	    this.isComplete = true;
	    this.emitEvent(eventName, [this]);
	    this.emitEvent('always', [this]);
	    if (this.jqDeferred) {
	      var jqMethod = this.hasAnyBroken ? 'reject' : 'resolve';
	      this.jqDeferred[jqMethod](this);
	    }
	  };

	  // --------------------------  -------------------------- //

	  function LoadingImage(img) {
	    this.img = img;
	  }

	  LoadingImage.prototype = Object.create(EvEmitter.prototype);

	  LoadingImage.prototype.check = function () {
	    // If complete is true and browser supports natural sizes,
	    // try to check for image status manually.
	    var isComplete = this.getIsImageComplete();
	    if (isComplete) {
	      // report based on naturalWidth
	      this.confirm(this.img.naturalWidth !== 0, 'naturalWidth');
	      return;
	    }

	    // If none of the checks above matched, simulate loading on detached element.
	    this.proxyImage = new Image();
	    this.proxyImage.addEventListener('load', this);
	    this.proxyImage.addEventListener('error', this);
	    // bind to image as well for Firefox. #191
	    this.img.addEventListener('load', this);
	    this.img.addEventListener('error', this);
	    this.proxyImage.src = this.img.src;
	  };

	  LoadingImage.prototype.getIsImageComplete = function () {
	    return this.img.complete && this.img.naturalWidth !== undefined;
	  };

	  LoadingImage.prototype.confirm = function (isLoaded, message) {
	    this.isLoaded = isLoaded;
	    this.emitEvent('progress', [this, this.img, message]);
	  };

	  // ----- events ----- //

	  // trigger specified handler for event type
	  LoadingImage.prototype.handleEvent = function (event) {
	    var method = 'on' + event.type;
	    if (this[method]) {
	      this[method](event);
	    }
	  };

	  LoadingImage.prototype.onload = function () {
	    this.confirm(true, 'onload');
	    this.unbindEvents();
	  };

	  LoadingImage.prototype.onerror = function () {
	    this.confirm(false, 'onerror');
	    this.unbindEvents();
	  };

	  LoadingImage.prototype.unbindEvents = function () {
	    this.proxyImage.removeEventListener('load', this);
	    this.proxyImage.removeEventListener('error', this);
	    this.img.removeEventListener('load', this);
	    this.img.removeEventListener('error', this);
	  };

	  // -------------------------- Background -------------------------- //

	  function Background(url, element) {
	    this.url = url;
	    this.element = element;
	    this.img = new Image();
	  }

	  // inherit LoadingImage prototype
	  Background.prototype = Object.create(LoadingImage.prototype);

	  Background.prototype.check = function () {
	    this.img.addEventListener('load', this);
	    this.img.addEventListener('error', this);
	    this.img.src = this.url;
	    // check if image is already complete
	    var isComplete = this.getIsImageComplete();
	    if (isComplete) {
	      this.confirm(this.img.naturalWidth !== 0, 'naturalWidth');
	      this.unbindEvents();
	    }
	  };

	  Background.prototype.unbindEvents = function () {
	    this.img.removeEventListener('load', this);
	    this.img.removeEventListener('error', this);
	  };

	  Background.prototype.confirm = function (isLoaded, message) {
	    this.isLoaded = isLoaded;
	    this.emitEvent('progress', [this, this.element, message]);
	  };

	  // -------------------------- jQuery -------------------------- //

	  ImagesLoaded.makeJQueryPlugin = function (jQuery) {
	    jQuery = jQuery || window.jQuery;
	    if (!jQuery) {
	      return;
	    }
	    // set local variable
	    $ = jQuery;
	    // $().imagesLoaded()
	    $.fn.imagesLoaded = function (options, callback) {
	      var instance = new ImagesLoaded(this, options, callback);
	      return instance.jqDeferred.promise($(this));
	    };
	  };
	  // try making plugin
	  ImagesLoaded.makeJQueryPlugin();

	  // --------------------------  -------------------------- //

	  return ImagesLoaded;
	});

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/**
	 * EvEmitter v1.0.3
	 * Lil' event emitter
	 * MIT License
	 */

	/* jshint unused: true, undef: true, strict: true */

	(function (global, factory) {
	  // universal module definition
	  /* jshint strict: false */ /* globals define, module, window */
	  if (true) {
	    // AMD - RequireJS
	    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) == 'object' && module.exports) {
	    // CommonJS - Browserify, Webpack
	    module.exports = factory();
	  } else {
	    // Browser globals
	    global.EvEmitter = factory();
	  }
	})(typeof window != 'undefined' ? window : undefined, function () {

	  "use strict";

	  function EvEmitter() {}

	  var proto = EvEmitter.prototype;

	  proto.on = function (eventName, listener) {
	    if (!eventName || !listener) {
	      return;
	    }
	    // set events hash
	    var events = this._events = this._events || {};
	    // set listeners array
	    var listeners = events[eventName] = events[eventName] || [];
	    // only add once
	    if (listeners.indexOf(listener) == -1) {
	      listeners.push(listener);
	    }

	    return this;
	  };

	  proto.once = function (eventName, listener) {
	    if (!eventName || !listener) {
	      return;
	    }
	    // add event
	    this.on(eventName, listener);
	    // set once flag
	    // set onceEvents hash
	    var onceEvents = this._onceEvents = this._onceEvents || {};
	    // set onceListeners object
	    var onceListeners = onceEvents[eventName] = onceEvents[eventName] || {};
	    // set flag
	    onceListeners[listener] = true;

	    return this;
	  };

	  proto.off = function (eventName, listener) {
	    var listeners = this._events && this._events[eventName];
	    if (!listeners || !listeners.length) {
	      return;
	    }
	    var index = listeners.indexOf(listener);
	    if (index != -1) {
	      listeners.splice(index, 1);
	    }

	    return this;
	  };

	  proto.emitEvent = function (eventName, args) {
	    var listeners = this._events && this._events[eventName];
	    if (!listeners || !listeners.length) {
	      return;
	    }
	    var i = 0;
	    var listener = listeners[i];
	    args = args || [];
	    // once stuff
	    var onceListeners = this._onceEvents && this._onceEvents[eventName];

	    while (listener) {
	      var isOnce = onceListeners && onceListeners[listener];
	      if (isOnce) {
	        // remove listener
	        // remove before trigger to prevent recursion
	        this.off(eventName, listener);
	        // unset once flag
	        delete onceListeners[listener];
	      }
	      // trigger listener
	      listener.apply(this, args);
	      // get next listener
	      i += isOnce ? 0 : 1;
	      listener = listeners[i];
	    }

	    return this;
	  };

	  return EvEmitter;
	});

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.konami = undefined;

	var _jquery = __webpack_require__(1);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _debug = __webpack_require__(5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function konami() {
		//Set up our array of needed keys, and variables.
		var neededkeys = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
		    started = false,
		    count = 0;
		(0, _jquery2.default)(document).keydown(function (e) {
			var key = e.keyCode;
			//Set start to true only if having pressed the first key in the konami sequence.
			if (!started) {
				if (key == 38) {
					started = true;
				}
			}
			//If we've started, pay attention to key presses, looking for right sequence.
			if (started) {
				if (neededkeys[count] == key) {
					//We're good so far.
					count++;
				} else {
					//Oops, not the right sequence, lets restart from the top.
					reset();
				}
				if (count == 10) {
					//We made it! Put code here to do what you want when successfully execute konami sequence
					(0, _jquery2.default)('body').toggleClass('konami');
					(0, _debug.debug)('konami code activated!', 'success');
					//Reset the conditions so that someone can do it all again.
					reset();
				}
			} else {
				//Oops.
				reset();
			}
		});
		//Function used to reset us back to starting point.
		function reset() {
			started = false;count = 0;
			return;
		}
	}

	exports.konami = konami;

/***/ }
/******/ ]);