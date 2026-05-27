"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var _React = React,
  useState = _React.useState,
  useEffect = _React.useEffect,
  useRef = _React.useRef;

// Define Lucide React wrapper components
var LucideIcon = function LucideIcon(_ref) {
  var name = _ref.name,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 18 : _ref$size,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className;
  var kebabName = name.replace(/[A-Z]/g, function (m) {
    return "-" + m.toLowerCase();
  }).replace(/^-/, '');
  var ref = React.useRef(null);
  React.useEffect(function () {
    if (ref.current && window.lucide) {
      ref.current.innerHTML = "<i data-lucide=\"".concat(kebabName, "\" style=\"width: ").concat(size, "px; height: ").concat(size, "px;\" class=\"").concat(className, "\"></i>");
      window.lucide.createIcons({
        node: ref.current
      });
    }
  }, [name, size, className]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    className: "inline-flex items-center justify-center"
  });
};
var BookOpen = function BookOpen(props) {
  return /*#__PURE__*/React.createElement(LucideIcon, _extends({
    name: "BookOpen"
  }, props));
};
var ShoppingBag = function ShoppingBag(props) {
  return /*#__PURE__*/React.createElement(LucideIcon, _extends({
    name: "ShoppingBag"
  }, props));
};
var Truck = function Truck(props) {
  return /*#__PURE__*/React.createElement(LucideIcon, _extends({
    name: "Truck"
  }, props));
};
var MessageSquare = function MessageSquare(props) {
  return /*#__PURE__*/React.createElement(LucideIcon, _extends({
    name: "MessageSquare"
  }, props));
};
var CreditCard = function CreditCard(props) {
  return /*#__PURE__*/React.createElement(LucideIcon, _extends({
    name: "CreditCard"
  }, props));
};
var ChevronRight = function ChevronRight(props) {
  return /*#__PURE__*/React.createElement(LucideIcon, _extends({
    name: "ChevronRight"
  }, props));
};
var Volume2 = function Volume2(props) {
  return /*#__PURE__*/React.createElement(LucideIcon, _extends({
    name: "Volume2"
  }, props));
};
var Copy = function Copy(props) {
  return /*#__PURE__*/React.createElement(LucideIcon, _extends({
    name: "Copy"
  }, props));
};
var Search = function Search(props) {
  return /*#__PURE__*/React.createElement(LucideIcon, _extends({
    name: "Search"
  }, props));
};
var Compass = function Compass(props) {
  return /*#__PURE__*/React.createElement(LucideIcon, _extends({
    name: "Compass"
  }, props));
};
var AlertCircle = function AlertCircle(props) {
  return /*#__PURE__*/React.createElement(LucideIcon, _extends({
    name: "AlertCircle"
  }, props));
};
var Sparkles = function Sparkles(props) {
  return /*#__PURE__*/React.createElement(LucideIcon, _extends({
    name: "Sparkles"
  }, props));
};
var Check = function Check(props) {
  return /*#__PURE__*/React.createElement(LucideIcon, _extends({
    name: "Check"
  }, props));
};
var CornerDownRight = function CornerDownRight(props) {
  return /*#__PURE__*/React.createElement(LucideIcon, _extends({
    name: "CornerDownRight"
  }, props));
};
var Smartphone = function Smartphone(props) {
  return /*#__PURE__*/React.createElement(LucideIcon, _extends({
    name: "Smartphone"
  }, props));
};
var ArrowRight = function ArrowRight(props) {
  return /*#__PURE__*/React.createElement(LucideIcon, _extends({
    name: "ArrowRight"
  }, props));
};
var HelpCircle = function HelpCircle(props) {
  return /*#__PURE__*/React.createElement(LucideIcon, _extends({
    name: "HelpCircle"
  }, props));
};
var X = function X(props) {
  return /*#__PURE__*/React.createElement(LucideIcon, _extends({
    name: "X"
  }, props));
};
var Menu = function Menu(props) {
  return /*#__PURE__*/React.createElement(LucideIcon, _extends({
    name: "Menu"
  }, props));
};
var Languages = function Languages(props) {
  return /*#__PURE__*/React.createElement(LucideIcon, _extends({
    name: "Languages"
  }, props));
};
var ArrowLeftRight = function ArrowLeftRight(props) {
  return /*#__PURE__*/React.createElement(LucideIcon, _extends({
    name: "ArrowLeftRight"
  }, props));
};
var User = function User(props) {
  return /*#__PURE__*/React.createElement(LucideIcon, _extends({
    name: "User"
  }, props));
};
var MapPin = function MapPin(props) {
  return /*#__PURE__*/React.createElement(LucideIcon, _extends({
    name: "MapPin"
  }, props));
};
var PlusCircle = function PlusCircle(props) {
  return /*#__PURE__*/React.createElement(LucideIcon, _extends({
    name: "PlusCircle"
  }, props));
};
var ShieldCheck = function ShieldCheck(props) {
  return /*#__PURE__*/React.createElement(LucideIcon, _extends({
    name: "ShieldCheck"
  }, props));
};
var Coins = function Coins(props) {
  return /*#__PURE__*/React.createElement(LucideIcon, _extends({
    name: "Coins"
  }, props));
};
var Ticket = function Ticket(props) {
  return /*#__PURE__*/React.createElement(LucideIcon, _extends({
    name: "Ticket"
  }, props));
};
var ExternalLink = function ExternalLink(props) {
  return /*#__PURE__*/React.createElement(LucideIcon, _extends({
    name: "ExternalLink"
  }, props));
};
var CheckSquare = function CheckSquare(props) {
  return /*#__PURE__*/React.createElement(LucideIcon, _extends({
    name: "CheckSquare"
  }, props));
};
var Lock = function Lock(props) {
  return /*#__PURE__*/React.createElement(LucideIcon, _extends({
    name: "Lock"
  }, props));
};
var MessageCircle = function MessageCircle(props) {
  return /*#__PURE__*/React.createElement(LucideIcon, _extends({
    name: "MessageCircle"
  }, props));
};
var Info = function Info(props) {
  return /*#__PURE__*/React.createElement(LucideIcon, _extends({
    name: "Info"
  }, props));
};
var Settings = function Settings(props) {
  return /*#__PURE__*/React.createElement(LucideIcon, _extends({
    name: "Settings"
  }, props));
};
var Navigation = function Navigation(props) {
  return /*#__PURE__*/React.createElement(LucideIcon, _extends({
    name: "Navigation"
  }, props));
};
var ThumbsUp = function ThumbsUp(props) {
  return /*#__PURE__*/React.createElement(LucideIcon, _extends({
    name: "ThumbsUp"
  }, props));
};
var Map = function Map(props) {
  return /*#__PURE__*/React.createElement(LucideIcon, _extends({
    name: "Map"
  }, props));
};
var Layers = function Layers(props) {
  return /*#__PURE__*/React.createElement(LucideIcon, _extends({
    name: "Layers"
  }, props));
};
var ChevronDown = function ChevronDown(props) {
  return /*#__PURE__*/React.createElement(LucideIcon, _extends({
    name: "ChevronDown"
  }, props));
};

// --- CONFIG & APP DATA ---
var apiKey = ""; // Runtime automatically injects the key

var APP_CATEGORIES = {
  DELIVERY: 'Food Delivery',
  SHOPPING: 'General Shopping',
  FASHION: 'Fashion & Style',
  USED: 'Second-hand Market',
  MOBILITY: 'Mobility & Taxi',
  PAYMENT: 'Fintech & Pay'
};

// Direct links to App Store, Google Play Store, and Official Web Pages
var APP_LINKS = {
  baemin: {
    ios: "https://apps.apple.com/kr/app/id378061811",
    android: "https://play.google.com/store/apps/details?id=com.smartdom.baemin",
    web: "https://www.baemin.com"
  },
  coupang: {
    ios: "https://apps.apple.com/kr/app/id415427503",
    android: "https://play.google.com/store/apps/details?id=com.coupang.mobile",
    web: "https://www.coupang.com"
  },
  karrot: {
    ios: "https://apps.apple.com/kr/app/id1018769042",
    android: "https://play.google.com/store/apps/details?id=com.towngentle.karrot",
    web: "https://www.daangn.com"
  },
  bunjang: {
    ios: "https://apps.apple.com/kr/app/id424391694",
    android: "https://play.google.com/store/apps/details?id=com.bunjang.app",
    web: "https://m.bunjang.co.kr"
  },
  ably: {
    ios: "https://apps.apple.com/kr/app/id1359556157",
    android: "https://play.google.com/store/apps/details?id=kr.co.ably.ably",
    web: "https://a-bly.com"
  },
  zigzag: {
    ios: "https://apps.apple.com/kr/app/id1004243763",
    android: "https://play.google.com/store/apps/details?id=com.croquis.zigzag",
    web: "https://apk.chwiderstand.com"
  },
  kakaoT: {
    ios: "https://apps.apple.com/kr/app/id987487890",
    android: "https://play.google.com/store/apps/details?id=com.kakao.taxi",
    web: "https://www.kakaomobility.com"
  },
  kakaoPay: {
    ios: "https://apps.apple.com/kr/app/id1455209774",
    android: "https://play.google.com/store/apps/details?id=com.kakaopay.app",
    web: "https://kakaopay.tistory.com/25"
  },
  naverMap: {
    ios: "https://apps.apple.com/kr/app/id311868728",
    android: "https://play.google.com/store/apps/details?id=com.nhn.android.nmap",
    web: "https://map.naver.com"
  },
  deliveredKorea: {
    web: "https://www.delivered.co.kr"
  }
};
var APP_DIRECTORY = [{
  id: 'naverMap',
  name: 'NAVER Map (네이버 지도)',
  category: APP_CATEGORIES.MOBILITY,
  typeExplainKr: '대한민국 대표 지도 및 길찾기/내비게이션 어플리케이션',
  typeExplainEn: 'The absolute essential navigation and local mapping app in South Korea.',
  desc: 'The gold standard navigation tool for Korea. Provides superior walking, transit, subway exit routing, and thousands of real local restaurant reviews.',
  howToUse: ['Download pre-arrival to bypass airport chaos.', 'Go to settings and instantly switch to English mode.', 'Check detailed subway exit numbers to prevent extra walking.', 'Search via local place names or copy-paste actual Korean addresses.'],
  tips: 'Use the 5-digit bus stop ID to match physical stops in real life, and trust Naver Local reviews for highly updated community recommendations.'
}, {
  id: 'baemin',
  name: 'Baemin (배달의민족)',
  category: APP_CATEGORIES.DELIVERY,
  typeExplainKr: '대한민국 1등 실시간 음식 배달 및 마트 직배송 서비스',
  typeExplainEn: 'Korea’s #1 online food delivery, grocery, and quick-commerce platform.',
  desc: 'The most popular food delivery app in Korea. Allows ordering from local restaurants, convenience stores, and grocery delivery (B-Mart).',
  howToUse: ['Download and sign up (social login like Kakao is easiest).', 'Set your delivery address in English or Korean (search using postal code).', 'Select a category (e.g., Chicken, Pizza, Korean) and choose a restaurant.', 'Add items to your cart and proceed to checkout.', 'Select payment method (Foreign credit cards can be used under "Other payment methods" -> "Foreign Card", or use Kakao Pay/Toss).'],
  tips: 'Watch out for "Minimum Order Amount" (최소주문금액) and "Delivery Fee" (배달팁). Many shops offer discount coupons!'
}, {
  id: 'coupang',
  name: 'Coupang (쿠팡)',
  category: APP_CATEGORIES.SHOPPING,
  typeExplainKr: '다음날 새벽 배달이 완료되는 초고속 로켓배송 생필품/종합 쇼핑몰',
  typeExplainEn: 'The legendary "Amazon of Korea" famous for ultra-fast Rocket Delivery.',
  desc: 'The Amazon of Korea. Offers "Rocket Delivery" (로켓배송) which arrives the next morning or even the same day.',
  howToUse: ['Register an account (requires identity verification with foreign registration card/phone number for Rocket Wow membership).', 'Add a shipping address (ensure the name matches your domestic phone registration).', 'Search for products. Look for the "Rocket" icon for ultra-fast delivery.', 'Register your card for "Coupay" simple payment to check out with a single click.'],
  tips: 'Rocket Wow membership is highly recommended for free shipping/returns and access to Coupang Play (streaming service).'
}, {
  id: 'karrot',
  name: 'Karrot (당근마켓)',
  category: APP_CATEGORIES.USED,
  typeExplainKr: '실제 GPS 기반 동네 주민들과 소통하는 따뜻한 지역 밀착형 중고거래 플랫폼',
  typeExplainEn: 'Hyper-local secondhand market and community platform based on real physical locations.',
  desc: 'Hyper-local secondhand marketplace. You can buy and sell items with neighbors within a few kilometers range.',
  howToUse: ['Set your location (requires GPS verification to prove you are in the neighborhood).', 'Search for secondhand items or free giveaways (나눔).', 'Chat with the seller to negotiate or agree on a meeting place/time.', 'Meet in person (직거래) at a public, safe place (like a subway exit) and pay via cash or bank transfer.'],
  tips: 'Check the seller’s "Manner Temperature" (매너온도). 36.5°C is the starting point; higher means a more trustworthy trader.'
}, {
  id: 'bunjang',
  name: 'Bunjang (번개장터)',
  category: APP_CATEGORIES.USED,
  typeExplainKr: '덕질 용품, 패션, 한정판 전문 전국구 안전결제 특화 중고거래 플랫폼',
  typeExplainEn: 'Nationwide secondhand market specializing in K-pop goods, limited sneakers, and fashion.',
  desc: 'Nationwide secondhand market, great for K-pop goods, electronics, and fashion items with shipping support.',
  howToUse: ['Search nationwide for specific collector items or brands.', 'Use "Bunjang Talk" (번개톡) to chat with sellers.', 'Utilize "Bunke Pay" (번개페이) secure transaction service if you want to prevent scams.'],
  tips: 'You can request convenience store delivery (반값택배 - half-price shipping) to pick up items at a nearby GS25 or CU.'
}, {
  id: 'ably',
  name: 'Ably (에이블리)',
  category: APP_CATEGORIES.FASHION,
  typeExplainKr: '모든 상품이 금액 제한 없이 무조건 무료 배송되는 대학생 선호도 1위 패션 쇼핑몰',
  typeExplainEn: 'Trendy youth fashion and style application offering unconditional free shipping on all items.',
  desc: 'Ultra-popular fashion app with free shipping on every single item. Highly favored by university students.',
  howToUse: ['Browse daily trending coordinates and fashion items.', 'Apply various coupons distributed weekly.', 'Pay simply using Kakao Pay or your local bank transfer.'],
  tips: 'Use the "Inquiry" tab on product pages to ask about restocking or sizes. See the phrasebook section below for copy-paste templates!'
}, {
  id: 'zigzag',
  name: 'Zigzag (지그재그)',
  category: APP_CATEGORIES.FASHION,
  typeExplainKr: '수천 개의 소호 디자인 온라인 쇼핑몰을 단 하나의 장바구니에 모아 결제하는 허브 플랫폼',
  typeExplainEn: 'A centralized fashion hub that consolidates thousands of online shopping malls into one checkout.',
  desc: 'An aggregator of thousands of Korean online fashion malls. Compiles items based on your personal style preference.',
  howToUse: ['Follow stores that match your aesthetic.', 'Add items from different stores to a single shopping cart using "Z- 결제" (Z-Payment).'],
  tips: 'Use the filtering tool to select your height and weight to see reviews from buyers with similar body types.'
}, {
  id: 'kakaoT',
  name: 'Kakao T (카카오 T)',
  category: APP_CATEGORIES.MOBILITY,
  typeExplainKr: '택시 호출, 바이크 대여, 대중교통 경로를 한 번에 해결하는 통합 이동 플랫폼',
  typeExplainEn: 'The dominant, all-in-one domestic travel, navigation, and taxi hailing mobility app.',
  desc: 'The primary mobility app in Korea. Used for hailing taxis, renting bikes, checking parking spots, and looking up transit routing.',
  howToUse: ['Download Kakao T and log in via your KakaoTalk credentials.', 'Tap Taxi, specify your pickup and destination locations.', 'Select a taxi type and choose your preferred payment gateway.', 'If you have no domestic Korean bank card, select "Pay to Driver" to pay with physical cash or your foreign card directly in the cab.'],
  tips: 'Double check the vehicle license plate before stepping inside, especially in crowded station areas!'
}, {
  id: 'kakaoPay',
  name: 'Kakao Pay (카카오페이)',
  category: APP_CATEGORIES.PAYMENT,
  typeExplainKr: '계좌 송금, 오프라인 QR 결제 및 모바일 공과금 납부를 처리하는 필수 금융 솔루션',
  typeExplainEn: 'The central digital wallet for easy money transfers, QR codes, and quick billing in Korea.',
  desc: 'Connects your domestic checking account directly to send quick transfers and finish store checkouts.',
  howToUse: ['Download the app or access Kakaopay inside KakaoTalk.', 'Link your domestic Korean bank checkings account.', 'Complete ARS phone audio call authorization.', 'Set your secure 6-digit payment password PIN.'],
  tips: 'Biometric authorization saves serious time when confirming transfers or checkout pages.'
}, {
  id: 'deliveredKorea',
  name: 'Delivered Korea (딜리버드 코리아)',
  category: APP_CATEGORIES.SHOPPING,
  typeExplainKr: '인증 및 현지 결제 제한 없이 한국 상품을 구매해서 해외로 발송해주는 물류 파트너',
  typeExplainEn: 'A proxy-buying and international package forwarding shipping companion.',
  desc: 'Enables international residents to order and ship native Korean products globally without local payment verification barriers.',
  howToUse: ['Get a free virtual Korean warehouse delivery address.', 'Place order on Zigzag, Ably, or Bunjang using this warehouse address.', 'Consolidate multiple packages into one box to save up to 80% on international shipping.'],
  tips: 'Use the official built-in shipping calculator to estimate custom fees beforehand.'
}];

// Phrasebook enriched with Korean Romanized Pronunciations
var PHRASEBOOK = [{
  category: 'Shopping Apps (쇼핑 앱)',
  phrases: [{
    kr: "이거 할인 중인가요?",
    pron: "I-geo hal-in jung-in-ga-yo?",
    en: "Is this on sale?",
    useCase: "Asking about discounts in a store inquiry."
  }, {
    kr: "배송 언제 와요?",
    pron: "Bae-song eon-je wa-yo?",
    en: "When will it arrive?",
    useCase: "Asking about shipping updates."
  }, {
    kr: "무료배송이에요?",
    pron: "Mu-ryeo bae-song-i-e-yo?",
    en: "Is shipping free?",
    useCase: "Confirming if there are delivery charges."
  }, {
    kr: "환불 가능한가요?",
    pron: "Hwan-bul ga-neung-han-ga-yo?",
    en: "Can I get a refund?",
    useCase: "Inquiring about refund policies."
  }]
}, {
  category: 'Second-hand Trading (중고거래 앱)',
  phrases: [{
    kr: "아직 판매 중인가요?",
    pron: "A-jik pan-mae jung-in-ga-yo?",
    en: "Is this still available?",
    useCase: "First message to send to a seller."
  }, {
    kr: "가격 네고 가능할까요?",
    pron: "Ga-gyeok ne-go ga-neung-hal-kka-yo?",
    en: "Can you lower the price?",
    useCase: "Politely asking for a discount."
  }, {
    kr: "직거래 가능하세요?",
    pron: "Jik-geo-rae ga-neung-ha-se-yo?",
    en: "Can we do an in-person transaction?",
    useCase: "Proposing a safe face-to-face meet."
  }, {
    kr: "택배 거래도 되나요?",
    pron: "Taek-bae geo-rae-do doe-na-yo?",
    en: "Is shipping available?",
    useCase: "Asking to ship the item instead of meeting."
  }, {
    kr: "상태 어떤가요?",
    pron: "Sang-tae eo-tteon-ga-yo?",
    en: "What condition is it in?",
    useCase: "Asking for details about wear and tear."
  }, {
    kr: "거래 완료됐어요.",
    pron: "Geo-rae wan-ryo-dwaet-seo-yo.",
    en: "The item has been sold.",
    useCase: "Informing others the listing is closed."
  }, {
    kr: "채팅 보내드렸어요.",
    pron: "Chae-ting bo-nae-deuryeot-seo-yo.",
    en: "I sent you a message.",
    useCase: "Alerting seller about your DM."
  }]
}, {
  category: 'Delivery Apps (배달 앱)',
  phrases: [{
    kr: "배달 얼마나 걸려요?",
    pron: "Bae-dal eol-ma-na geol-ryeo-yo?",
    en: "How long will delivery take?",
    useCase: "Checking estimated delivery time."
  }, {
    kr: "최소주문금액이 있네요.",
    pron: "Choe-so ju-mun-geum-aek-i in-nae-yo.",
    en: "There’s a minimum order amount.",
    useCase: "Noticing checkout restrictions."
  }, {
    kr: "배달비 얼마예요?",
    pron: "Bae-dal-bi eol-ma-ye-yo?",
    en: "How much is the delivery fee?",
    useCase: "Confirming delivery price."
  }, {
    kr: "포장 주문할게요.",
    pron: "Po-jang ju-mun-hal-ge-yo.",
    en: "I’ll order for pickup.",
    useCase: "Letting restaurant know you will pick it up on foot."
  }, {
    kr: "문 앞에 놓아주세요.",
    pron: "Mun ap-e no-a-ju-se-yo.",
    en: "Please leave it at the door.",
    useCase: "Classic contactless drop-off note."
  }, {
    kr: "요청사항에 적어둘게요.",
    pron: "Yo-cheong-sa-hang-e jeok-eo-dul-ge-yo.",
    en: "I’ll write it in the delivery notes.",
    useCase: "Telling rider or store you left a memo."
  }, {
    kr: "재주문할 정도로 맛있었어요.",
    pron: "Jae-ju-mun-hal jeong-do-ro ma-sit-seot-seo-yo.",
    en: "It was good enough to order again.",
    useCase: "Leaving a pleasant positive review."
  }]
}, {
  category: 'Payment & Identity (결제 표현)',
  phrases: [{
    kr: "송금해드릴게요.",
    pron: "Song-geum-hae-deu-ril-ge-yo.",
    en: "I’ll transfer the money.",
    useCase: "When paying a secondhand seller via direct wire."
  }, {
    kr: "계좌번호 보내주세요.",
    pron: "Gye-jwa-beon-ho bo-nae-ju-se-yo.",
    en: "Please send me your bank account number.",
    useCase: "Asking for payment bank details."
  }, {
    kr: "잔액이 부족해요.",
    pron: "Jan-aek-i bu-jok-hae-yo.",
    en: "I don’t have enough balance.",
    useCase: "Noticing low funds on checking account."
  }, {
    kr: "본인인증이 필요하네요.",
    pron: "Bon-in-in-jeung-i pil-yo-ha-ne-yo.",
    en: "Identity verification is required.",
    useCase: "Faced with SMS/ARC validation prompts."
  }, {
    kr: "간편결제로 할게요.",
    pron: "Gan-pyeon-gyeol-je-ro hal-ge-yo.",
    en: "I’ll use easy payment.",
    useCase: "Paying quickly using Kakao Pay, Toss, or Coupay."
  }]
}];
var KAKAO_PAY_STEPS = [{
  step: 1,
  title: "Download KakaoTalk & Access Pay Hub",
  desc: "Download KakaoTalk and create an account. Tap the 'More' (더보기 - bottom right three dots) tab inside the app and select 'Kakaopay'. Click the grey rectangular bar directly underneath your profile photo to open your brand new Kakao Pay account."
}, {
  step: 2,
  title: "Agree to Guidelines & Terms",
  desc: "Follow the on-screen prompts to accept the essential terms and conditions. Authorize permissions for SMS, contacts, and notifications to ensure a seamless setup."
}, {
  step: 3,
  title: "Add Bank Information (계정 추가)",
  desc: "Your initial Kakao Pay balance will display '0 won'. Click on the linking tab directly below your balance: '[연결된 은행 계좌가 없습니다]' (There is no connected bank account) or select '[계정 추가]' (Add account) to connect your local Korean bank account. Choose your corresponding bank brand logo and enter your checking account number."
}, {
  step: 4,
  title: "Deposit Verification (1-Won Test)",
  desc: "Kakao Pay will deposit 1 KRW to your selected bank account. Check your banking application's transaction history, look for the 1 KRW deposit, and type the specific 4-letter sender name (e.g. '푸른바다') in the Kakao Pay verification dialog box."
}, {
  step: 5,
  title: "ARS Voice Phone Verification",
  desc: "Verify your cellular phone carrier. Note the 2-digit verification number displayed on your Kakao Pay registration screen, then click 'ARS'. You will receive an automated phone call in Korean within a few seconds. Type the 2-digit number on your keypad when prompted, and the call will end automatically."
}, {
  step: 6,
  title: "Set Security Credentials",
  desc: "Set up your custom 6-digit payment password PIN code. We strongly recommend configuring biometric authentication (Face ID or Fingerprint) for extreme convenience on daily transactions."
}, {
  step: 7,
  title: "Completed & Ready to Go!",
  desc: "Congratulations! You are officially ready to wire money simply, pay local utility bills, or checkout on Coupang, Ably, Baemin, and in physical stores across South Korea."
}];
function App() {
  var _useState = useState('home'),
    _useState2 = _slicedToArray(_useState, 2),
    activeTab = _useState2[0],
    setActiveTab = _useState2[1];
  var _useState3 = useState('ALL'),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedCategory = _useState4[0],
    setSelectedCategory = _useState4[1];
  var _useState5 = useState(''),
    _useState6 = _slicedToArray(_useState5, 2),
    searchQuery = _useState6[0],
    setSearchQuery = _useState6[1];
  var _useState7 = useState(null),
    _useState8 = _slicedToArray(_useState7, 2),
    copyStatus = _useState8[0],
    setCopyStatus = _useState8[1];

  // Pay Stepper State
  var _useState9 = useState(0),
    _useState10 = _slicedToArray(_useState9, 2),
    currentStep = _useState10[0],
    setCurrentStep = _useState10[1];

  // Secondhand Navigation State
  var _useState11 = useState('karrot'),
    _useState12 = _slicedToArray(_useState11, 2),
    secondhandPlatform = _useState12[0],
    setSecondhandPlatform = _useState12[1]; // 'karrot' or 'bunjang'
  var _useState13 = useState(0),
    _useState14 = _slicedToArray(_useState13, 2),
    karrotRegStep = _useState14[0],
    setKarrotRegStep = _useState14[1];
  var _useState15 = useState({
      step1: false,
      step2: false,
      step3: false,
      step4: false,
      step5: false
    }),
    _useState16 = _slicedToArray(_useState15, 2),
    sellingChecklist = _useState16[0],
    setSellingChecklist = _useState16[1];

  // NAVER Map Interactive Explorer Active Step
  var _useState17 = useState(0),
    _useState18 = _slicedToArray(_useState17, 2),
    naverActiveStep = _useState18[0],
    setNaverActiveStep = _useState18[1];

  // Common Mistakes Checklist for NAVER Map
  var _useState19 = useState({
      mistake1: false,
      mistake2: false,
      mistake3: false,
      mistake4: false,
      mistake5: false,
      mistake6: false
    }),
    _useState20 = _slicedToArray(_useState19, 2),
    mistakesChecklist = _useState20[0],
    setMistakesChecklist = _useState20[1];

  // Dedicated Active Guide App (For detailed interactive UI)
  var _useState21 = useState('naver-map'),
    _useState22 = _slicedToArray(_useState21, 2),
    selectedGuideApp = _useState22[0],
    setSelectedGuideApp = _useState22[1];

  // Delivered Korea Sub-Option State
  var _useState23 = useState('we-buy'),
    _useState24 = _slicedToArray(_useState23, 2),
    dkOption = _useState24[0],
    setDkOption = _useState24[1];

  // AI Helper State
  var _useState25 = useState(''),
    _useState26 = _slicedToArray(_useState25, 2),
    aiInput = _useState26[0],
    setAiInput = _useState26[1];
  var _useState27 = useState(null),
    _useState28 = _slicedToArray(_useState27, 2),
    aiOutput = _useState28[0],
    setAiOutput = _useState28[1];
  var _useState29 = useState(false),
    _useState30 = _slicedToArray(_useState29, 2),
    aiLoading = _useState30[0],
    setAiLoading = _useState30[1];
  var _useState31 = useState(''),
    _useState32 = _slicedToArray(_useState31, 2),
    aiError = _useState32[0],
    setAiError = _useState32[1];

  // Toast status
  var _useState33 = useState(''),
    _useState34 = _slicedToArray(_useState33, 2),
    toastMessage = _useState34[0],
    setToastMessage = _useState34[1];
  var showToast = function showToast(msg) {
    setToastMessage(msg);
    setTimeout(function () {
      setToastMessage('');
    }, 2500);
  };
  var handleCopy = function handleCopy(text, id) {
    try {
      var el = document.createElement('textarea');
      el.value = text;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopyStatus(id);
      showToast('Copied to clipboard!');
      setTimeout(function () {
        return setCopyStatus(null);
      }, 1500);
    } catch (err) {
      showToast('Failed to copy.');
    }
  };
  var handleSpeak = function handleSpeak(text) {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      var utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ko-KR';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    } else {
      showToast('Text-to-speech is not supported in this browser.');
    }
  };

  // call Gemini API with retry logic and exponential backoff
  var callGeminiAI = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(inputMsg) {
      var systemPrompt, payload, retries, delay, i, _data$candidates, response, data, jsonText, parsedResult;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (inputMsg.trim()) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return");
          case 2:
            setAiLoading(true);
            setAiError('');
            setAiOutput(null);
            systemPrompt = "You are \"K-App Companion\", a helpful assistant for international students living in South Korea. \nThe user will input either:\n1. A message/alert they received from a Korean delivery driver, Karrot Market (\uB2F9\uADFC) seller, or shopping app.\n2. An English explanation of what they want to say to a Korean seller/driver.\n\nProvide the response strictly in JSON format matching this schema:\n{\n  \"summary\": \"Brief 1-sentence summary of the user's issue or received message in English.\",\n  \"analysis\": \"A detailed explanation in English of what the Korean message means, what action is expected, and culturally relevant tips.\",\n  \"translations\": [\n    {\n      \"korean\": \"An natural, polite, and perfect Korean sentence the student can send as a reply.\",\n      \"english\": \"English translation of this Korean sentence.\",\n      \"context\": \"When to use this specific reply option.\"\n    }\n  ]\n}\nEnsure the Korean replies are extremely natural, using polite honorifics (\uC874\uB313\uB9D0) suitable for dealing with delivery workers or secondhand sellers. Provide 2 to 3 alternative reply options depending on different user scenarios.";
            payload = {
              contents: [{
                parts: [{
                  text: "User request/received message: \"".concat(inputMsg, "\"")
                }]
              }],
              systemInstruction: {
                parts: [{
                  text: systemPrompt
                }]
              },
              generationConfig: {
                responseMimeType: "application/json",
                responseSchema: {
                  type: "OBJECT",
                  properties: {
                    summary: {
                      type: "STRING"
                    },
                    analysis: {
                      type: "STRING"
                    },
                    translations: {
                      type: "ARRAY",
                      items: {
                        type: "OBJECT",
                        properties: {
                          korean: {
                            type: "STRING"
                          },
                          english: {
                            type: "STRING"
                          },
                          context: {
                            type: "STRING"
                          }
                        },
                        required: ["korean", "english", "context"]
                      }
                    }
                  },
                  required: ["summary", "analysis", "translations"]
                }
              }
            };
            retries = 5;
            delay = 1000;
            i = 0;
          case 10:
            if (!(i < retries)) {
              _context.next = 43;
              break;
            }
            _context.prev = 11;
            _context.next = 14;
            return fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=".concat(apiKey), {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(payload)
            });
          case 14:
            response = _context.sent;
            if (response.ok) {
              _context.next = 17;
              break;
            }
            throw new Error("API Error: ".concat(response.status));
          case 17:
            _context.next = 19;
            return response.json();
          case 19:
            data = _context.sent;
            jsonText = (_data$candidates = data.candidates) === null || _data$candidates === void 0 || (_data$candidates = _data$candidates[0]) === null || _data$candidates === void 0 || (_data$candidates = _data$candidates.content) === null || _data$candidates === void 0 || (_data$candidates = _data$candidates.parts) === null || _data$candidates === void 0 || (_data$candidates = _data$candidates[0]) === null || _data$candidates === void 0 ? void 0 : _data$candidates.text;
            if (!jsonText) {
              _context.next = 28;
              break;
            }
            parsedResult = JSON.parse(jsonText);
            setAiOutput(parsedResult);
            setAiLoading(false);
            return _context.abrupt("return");
          case 28:
            throw new Error("Empty response received from the model.");
          case 29:
            _context.next = 40;
            break;
          case 31:
            _context.prev = 31;
            _context.t0 = _context["catch"](11);
            if (!(i === retries - 1)) {
              _context.next = 37;
              break;
            }
            setAiError("Sorry, we couldn't connect to the translation service. Please check your internet or try again later.");
            setAiLoading(false);
            return _context.abrupt("return");
          case 37:
            _context.next = 39;
            return new Promise(function (resolve) {
              return setTimeout(resolve, delay);
            });
          case 39:
            delay *= 2;
          case 40:
            i++;
            _context.next = 10;
            break;
          case 43:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[11, 31]]);
    }));
    return function callGeminiAI(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  var toggleChecklist = function toggleChecklist(key) {
    setSellingChecklist(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, key, !prev[key]));
    });
  };
  var toggleMistake = function toggleMistake(key) {
    setMistakesChecklist(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, key, !prev[key]));
    });
  };

  // Get active selected app directory info
  var activeAppDetail = APP_DIRECTORY.find(function (app) {
    if (selectedGuideApp === 'naver-map') return app.id === 'naverMap';
    if (selectedGuideApp === 'baemin') return app.id === 'baemin';
    if (selectedGuideApp === 'coupang') return app.id === 'coupang';
    if (selectedGuideApp === 'ably') return app.id === 'ably';
    if (selectedGuideApp === 'zigzag') return app.id === 'zigzag';
    if (selectedGuideApp === 'kakao-t') return app.id === 'kakaoT';
    if (selectedGuideApp === 'delivered-korea') return app.id === 'deliveredKorea';
    return null;
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col selection:bg-indigo-500 selection:text-white animate-fadeIn text-sm"
  }, toastMessage && /*#__PURE__*/React.createElement("div", {
    className: "fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white text-sm px-4 py-3 rounded-full shadow-2xl flex items-center gap-2 z-50 animate-bounce"
  }, /*#__PURE__*/React.createElement(Check, {
    size: 16,
    className: "text-emerald-400"
  }), /*#__PURE__*/React.createElement("span", null, toastMessage)), /*#__PURE__*/React.createElement("header", {
    className: "bg-gradient-to-r from-indigo-600 via-indigo-700 to-violet-800 text-white shadow-md relative overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-0 left-1/2 w-60 h-60 bg-indigo-500/20 rounded-full blur-2xl -ml-30 -mb-20"
  }), /*#__PURE__*/React.createElement("div", {
    className: "max-w-6xl mx-auto px-4 py-8 relative z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col md:flex-row md:items-center md:justify-between gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center gap-1.5 bg-indigo-500/30 text-indigo-100 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-2 border border-indigo-400/20"
  }, /*#__PURE__*/React.createElement(Sparkles, {
    size: 12
  }), "International Student Guide System"), /*#__PURE__*/React.createElement("h1", {
    className: "text-3xl md:text-4xl font-extrabold tracking-tight"
  }, "Smart Korea"), /*#__PURE__*/React.createElement("p", {
    className: "text-indigo-200 mt-1 max-w-xl text-xs md:text-sm leading-relaxed"
  }, "Bypass linguistic hurdles completely. Master food delivery, maps & navigation, online fashion, and localized secondhand marketplaces like a true native.")), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setActiveTab('ai-helper');
    },
    className: "bg-emerald-500 hover:bg-emerald-400 text-white px-4 py-2.5 rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-emerald-950/20 text-xs"
  }, /*#__PURE__*/React.createElement(Languages, {
    size: 18
  }), "AI Translate Companion"))))), /*#__PURE__*/React.createElement("main", {
    className: "max-w-6xl w-full mx-auto px-4 flex-1 py-8 flex flex-col md:flex-row gap-6"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "w-full md:w-64 shrink-0 flex flex-col gap-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl p-4 shadow-sm border border-slate-100"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-xs font-bold uppercase text-slate-400 tracking-wider px-3 mb-3"
  }, "Navigation"), /*#__PURE__*/React.createElement("nav", {
    className: "flex flex-col gap-1"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setActiveTab('home');
    },
    className: "flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition-all ".concat(activeTab === 'home' ? 'bg-indigo-50 text-indigo-700 font-bold' : 'text-slate-600 hover:bg-slate-50')
  }, /*#__PURE__*/React.createElement(Compass, {
    size: 18
  }), "Overview & Guidelines"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setActiveTab('apps');
      setSelectedGuideApp('naver-map');
    },
    className: "flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition-all ".concat(activeTab === 'apps' ? 'bg-indigo-50 text-indigo-700 font-bold' : 'text-slate-600 hover:bg-slate-50')
  }, /*#__PURE__*/React.createElement(ShoppingBag, {
    size: 18
  }), "Essential App Guides"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setActiveTab('secondhand');
    },
    className: "flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition-all ".concat(activeTab === 'secondhand' ? 'bg-orange-50 text-orange-700 border border-orange-100 font-bold' : 'text-slate-600 hover:bg-slate-50')
  }, /*#__PURE__*/React.createElement(ArrowLeftRight, {
    size: 18,
    className: activeTab === 'secondhand' ? 'text-orange-600' : 'text-slate-500'
  }), "Secondhand Mastery"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setActiveTab('pay-guide');
    },
    className: "flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition-all ".concat(activeTab === 'pay-guide' ? 'bg-indigo-50 text-indigo-700 font-bold' : 'text-slate-600 hover:bg-slate-50')
  }, /*#__PURE__*/React.createElement(CreditCard, {
    size: 18
  }), "Kakao Pay Setup Guide"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setActiveTab('phrasebook');
    },
    className: "flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition-all ".concat(activeTab === 'phrasebook' ? 'bg-indigo-50 text-indigo-700 font-bold' : 'text-slate-600 hover:bg-slate-50')
  }, /*#__PURE__*/React.createElement(BookOpen, {
    size: 18
  }), "Survival Korean Phrases"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setActiveTab('ai-helper');
    },
    className: "flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition-all ".concat(activeTab === 'ai-helper' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100 font-bold' : 'text-slate-600 hover:bg-slate-50')
  }, /*#__PURE__*/React.createElement(Languages, {
    size: 18,
    className: activeTab === 'ai-helper' ? 'text-emerald-600' : 'text-slate-500'
  }), "AI Assistant Translate"))), /*#__PURE__*/React.createElement("div", {
    className: "bg-gradient-to-br from-violet-50 to-indigo-50 rounded-2xl p-5 border border-indigo-100 shadow-sm"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-bold text-slate-800 text-xs flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement(AlertCircle, {
    size: 16,
    className: "text-indigo-600"
  }), "Pro Student Tip"), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-slate-600 mt-2 leading-relaxed"
  }, "When ordering on Baemin or Coupang, avoid using your nickname. Ensure the name registered under your shipping details matches your mobile carrier subscription details exactly to avoid verification failures!"))), /*#__PURE__*/React.createElement("section", {
    className: "flex-1 bg-white rounded-3xl shadow-sm border border-slate-100 p-6 md:p-8 min-h-[500px]"
  }, activeTab === 'home' && /*#__PURE__*/React.createElement("div", {
    className: "space-y-6 animate-fadeIn"
  }, /*#__PURE__*/React.createElement("div", {
    className: "border-b border-slate-100 pb-4"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-2xl font-bold text-slate-800 font-sans"
  }, "Welcome to Smart Korea! \uD83C\uDDF0\uD83C\uDDF7"), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-500 text-xs mt-1"
  }, "Your ultimate digitized manual to master local applications without language boundaries.")), /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-sm font-bold text-slate-800 flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement(ShoppingBag, {
    size: 16,
    className: "text-indigo-650"
  }), "At a Glance: Essential Apps (\uC5B4\uD50C\uB9AC\uCF00\uC774\uC158 \uAC1C\uC694)"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-3.5"
  }, APP_DIRECTORY.map(function (app) {
    return /*#__PURE__*/React.createElement("div", {
      key: app.id,
      className: "p-4 rounded-xl border border-slate-150 bg-slate-50/50 flex flex-col justify-between"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between items-center mb-1"
    }, /*#__PURE__*/React.createElement("strong", {
      className: "text-xs text-slate-900"
    }, app.name), /*#__PURE__*/React.createElement("span", {
      className: "text-[10px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-full"
    }, app.category)), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-indigo-650 font-bold mb-1"
    }, app.typeExplainKr), /*#__PURE__*/React.createElement("p", {
      className: "text-[11px] text-slate-500 italic mb-2"
    }, app.typeExplainEn), /*#__PURE__*/React.createElement("p", {
      className: "text-[11px] text-slate-600 line-clamp-2"
    }, app.desc)), /*#__PURE__*/React.createElement("div", {
      className: "mt-3 pt-2 border-t border-slate-200/60 flex justify-between items-center"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-[10px] text-slate-450"
    }, "Tips: ", app.tips.substring(0, 45), "..."), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        setActiveTab('apps');
        if (app.id === 'naverMap') setSelectedGuideApp('naver-map');else if (app.id === 'baemin') setSelectedGuideApp('baemin');else if (app.id === 'coupang') setSelectedGuideApp('coupang');else if (app.id === 'ably') setSelectedGuideApp('ably');else if (app.id === 'zigzag') setSelectedGuideApp('zigzag');else if (app.id === 'kakaoT') setSelectedGuideApp('kakao-t');else if (app.id === 'kakaoPay') setActiveTab('pay-guide');else if (app.id === 'deliveredKorea') setSelectedGuideApp('delivered-korea');
      },
      className: "text-[11px] text-indigo-600 font-bold flex items-center gap-0.5 hover:underline"
    }, "Guide ", /*#__PURE__*/React.createElement(ChevronRight, {
      size: 12
    }))));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-bold text-indigo-600 tracking-wide uppercase bg-indigo-50 px-2 py-1 rounded"
  }, "Shopping & Food"), /*#__PURE__*/React.createElement("h3", {
    className: "font-bold text-slate-800 mt-2 text-base"
  }, "Essential App Manuals"), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-500 text-xs mt-1 leading-relaxed"
  }, "Detailed step-by-step interactive instructions on using NAVER Map, Baemin, Coupang, Ably, Zigzag, and Kakao T in English. Master the NICEPAY global payment flows.")), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setActiveTab('apps');
      setSelectedGuideApp('naver-map');
    },
    className: "mt-4 inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-700 group w-fit"
  }, "View Manuals", /*#__PURE__*/React.createElement(ChevronRight, {
    size: 16,
    className: "group-hover:translate-x-0.5 transition-transform"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "p-5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between border-l-4 border-l-orange-500"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-bold text-orange-600 tracking-wide uppercase bg-orange-50 px-2 py-1 rounded"
  }, "Secondhand Economy"), /*#__PURE__*/React.createElement("h3", {
    className: "font-bold text-slate-800 mt-2 text-base"
  }, "Karrot & Bunjang Mastery"), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-500 text-xs mt-1 leading-relaxed"
  }, "Learn how to register, authenticate locations via GPS, negotiate pricing politely, receive points/coupons, and avoid scams.")), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setActiveTab('secondhand');
    },
    className: "mt-4 inline-flex items-center gap-1 text-xs font-bold text-orange-600 hover:text-orange-700 group w-fit"
  }, "Master Secondhand Markets", /*#__PURE__*/React.createElement(ChevronRight, {
    size: 16,
    className: "group-hover:translate-x-0.5 transition-transform"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "bg-indigo-900 text-white rounded-2xl p-6 relative overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute right-0 bottom-0 opacity-10 pointer-events-none"
  }, /*#__PURE__*/React.createElement(Languages, {
    size: 240
  })), /*#__PURE__*/React.createElement("div", {
    className: "max-w-lg relative z-10"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-base font-bold flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(Sparkles, {
    className: "text-emerald-400",
    size: 20
  }), "AI Chat Translator & Replier"), /*#__PURE__*/React.createElement("p", {
    className: "text-indigo-200 text-xs mt-2 leading-relaxed"
  }, "Struggling to text a seller or delivery worker? Simply paste the Korean text or type your context in English. Our custom Gemini 2.5 API generates perfect, polite Korean replies with audio pronunciations."), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setActiveTab('ai-helper');
    },
    className: "mt-4 bg-white text-indigo-900 font-bold px-4 py-2 rounded-xl text-xs hover:bg-indigo-50 transition-colors shadow-md"
  }, "Launch AI Translator Now"))), /*#__PURE__*/React.createElement("div", {
    className: "border-t border-slate-100 pt-6"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-bold text-slate-850 text-sm mb-3"
  }, "Top 3 Golden Rules for App Registration in Korea"), /*#__PURE__*/React.createElement("ul", {
    className: "space-y-3"
  }, /*#__PURE__*/React.createElement("li", {
    className: "flex items-start gap-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bg-emerald-50 text-emerald-600 p-1 rounded-full text-xs shrink-0 mt-0.5 font-bold w-5 h-5 flex items-center justify-center"
  }, "1"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-bold text-slate-800"
  }, "Your registered Phone Carrier Name must be PERFECT."), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-500"
  }, "If your Alien Registration Card says \"DOE JOHN FITZGERALD\", your carrier subscription name must be exact. If you use a nickname or make a typo, registration verifications will fail immediately."))), /*#__PURE__*/React.createElement("li", {
    className: "flex items-start gap-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bg-emerald-50 text-emerald-600 p-1 rounded-full text-xs shrink-0 mt-0.5 font-bold w-5 h-5 flex items-center justify-center"
  }, "2"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-bold text-slate-800"
  }, "Set Up Native Local Payments for Full Convenience."), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-500"
  }, "Most local checkouts require domestic accounts. Connect your Korean bank card, or activate Kakao Pay as demonstrated in our step-by-step helper."))), /*#__PURE__*/React.createElement("li", {
    className: "flex items-start gap-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bg-emerald-50 text-emerald-600 p-1 rounded-full text-xs shrink-0 mt-0.5 font-bold w-5 h-5 flex items-center justify-center"
  }, "3"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-bold text-slate-800"
  }, "Address format: Always use Street Name (\uB3C4\uB85C\uBA85\uC8FC\uC18C)."), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-500"
  }, "When entering delivery addresses, use the modern street name format. Combine with a front door password so couriers can place packages outside your door safely.")))))), activeTab === 'apps' && /*#__PURE__*/React.createElement("div", {
    className: "space-y-6 animate-fadeIn"
  }, /*#__PURE__*/React.createElement("div", {
    className: "border-b border-slate-100 pb-4"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-2xl font-bold text-slate-800"
  }, "Korea's Essential Apps Manual"), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-500 text-xs mt-1"
  }, "Detailed English guides, checkout flows, and configurations for Korea's top commerce platforms.")), /*#__PURE__*/React.createElement("div", {
    className: "flex bg-slate-100 p-1.5 rounded-2xl overflow-x-auto gap-1 scrollbar-none"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setSelectedGuideApp('naver-map');
    },
    className: "px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ".concat(selectedGuideApp === 'naver-map' ? 'bg-white text-indigo-700 shadow-sm' : 'text-slate-600 hover:bg-white/50')
  }, /*#__PURE__*/React.createElement(Map, {
    size: 14,
    className: "text-indigo-600"
  }), "\uB124\uC774\uBC84 \uC9C0\uB3C4 (NAVER Map)"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setSelectedGuideApp('baemin');
    },
    className: "px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ".concat(selectedGuideApp === 'baemin' ? 'bg-white text-emerald-650 shadow-sm' : 'text-slate-600 hover:bg-white/50')
  }, /*#__PURE__*/React.createElement(Truck, {
    size: 14,
    className: "text-emerald-550"
  }), "\uBC30\uB2EC\uC758\uBBFC\uC871 (Baemin)"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setSelectedGuideApp('coupang');
    },
    className: "px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ".concat(selectedGuideApp === 'coupang' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-600 hover:bg-white/50')
  }, /*#__PURE__*/React.createElement(ShoppingBag, {
    size: 14,
    className: "text-indigo-500"
  }), "\uCFE0\uD321 (Coupang)"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setSelectedGuideApp('ably');
    },
    className: "px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ".concat(selectedGuideApp === 'ably' ? 'bg-white text-rose-600 shadow-sm' : 'text-slate-600 hover:bg-white/50')
  }, /*#__PURE__*/React.createElement(Ticket, {
    size: 14,
    className: "text-rose-500"
  }), "\uC5D0\uC774\uBE14\uB9AC (Ably)"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setSelectedGuideApp('zigzag');
    },
    className: "px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ".concat(selectedGuideApp === 'zigzag' ? 'bg-white text-fuchsia-600 shadow-sm' : 'text-slate-600 hover:bg-white/50')
  }, /*#__PURE__*/React.createElement(ArrowLeftRight, {
    size: 14,
    className: "text-fuchsia-500"
  }), "\uC9C0\uADF8\uC7AC\uADF8 (Zigzag)"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setSelectedGuideApp('kakao-t');
    },
    className: "px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ".concat(selectedGuideApp === 'kakao-t' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600 hover:bg-white/50')
  }, /*#__PURE__*/React.createElement(Navigation, {
    size: 14,
    className: "text-blue-500"
  }), "\uCE74\uCE74\uC624 T (Kakao T)"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setSelectedGuideApp('delivered-korea');
    },
    className: "px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ".concat(selectedGuideApp === 'delivered-korea' ? 'bg-white text-amber-600 shadow-sm' : 'text-slate-600 hover:bg-white/50')
  }, /*#__PURE__*/React.createElement(ExternalLink, {
    size: 14,
    className: "text-amber-500"
  }), "Delivered Korea (Partner)")), activeAppDetail && /*#__PURE__*/React.createElement("div", {
    className: "p-4 bg-gradient-to-r from-indigo-50 to-indigo-100/50 rounded-2xl border border-indigo-150 animate-fadeIn text-xs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-start mb-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] uppercase font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md"
  }, "What App is this? (\uC571 \uC131\uACA9 \uC18C\uAC1C)"), /*#__PURE__*/React.createElement("span", {
    className: "font-extrabold text-indigo-900 text-[11px]"
  }, activeAppDetail.category)), /*#__PURE__*/React.createElement("h3", {
    className: "font-extrabold text-slate-900 text-sm mb-1"
  }, activeAppDetail.name), /*#__PURE__*/React.createElement("p", {
    className: "text-indigo-950 font-bold mb-1"
  }, activeAppDetail.typeExplainKr), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-600 italic mb-2"
  }, activeAppDetail.typeExplainEn), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-550 leading-relaxed font-normal"
  }, activeAppDetail.desc)), selectedGuideApp === 'naver-map' && /*#__PURE__*/React.createElement("div", {
    className: "space-y-6 animate-fadeIn text-slate-700"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-4 rounded-2xl bg-indigo-50 border border-indigo-150 text-xs text-indigo-950 flex gap-3 items-start"
  }, /*#__PURE__*/React.createElement(Map, {
    className: "text-indigo-600 shrink-0 mt-0.5",
    size: 20
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    className: "font-extrabold text-sm mb-1"
  }, "NAVER Map (\uB124\uC774\uBC84 \uC9C0\uB3C4): The Foreigner's Ultimate Navigation System"), "Provides superior walking, current bus/transit tracking, exact building boundaries, and detailed exit numbers across South Korea under secure Domestic Mapping rules.")), /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-50 p-4 rounded-2xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
    className: "text-xs text-slate-800 block"
  }, "Download NAVER Map App"), /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] text-slate-500"
  }, "Configure language before flying to bypass airport arrival chaos!")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2"
  }, /*#__PURE__*/React.createElement("a", {
    href: APP_LINKS.naverMap.ios,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "bg-slate-900 hover:bg-slate-800 text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors"
  }, "App Store ", /*#__PURE__*/React.createElement(ExternalLink, {
    size: 12
  })), /*#__PURE__*/React.createElement("a", {
    href: APP_LINKS.naverMap.android,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "bg-slate-900 hover:bg-slate-800 text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors"
  }, "Play Store ", /*#__PURE__*/React.createElement(ExternalLink, {
    size: 12
  })), /*#__PURE__*/React.createElement("a", {
    href: APP_LINKS.naverMap.web,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors"
  }, "Web Map ", /*#__PURE__*/React.createElement(ExternalLink, {
    size: 12
  })))), /*#__PURE__*/React.createElement("div", {
    className: "border border-slate-100 rounded-3xl p-5 bg-slate-50/40"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between border-b border-slate-200/60 pb-3 mb-4"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-bold text-xs text-slate-800 uppercase tracking-wider flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement(Sparkles, {
    size: 16,
    className: "text-indigo-600"
  }), "13-Step Comprehensive Manual Explorer"), /*#__PURE__*/React.createElement("span", {
    className: "bg-indigo-100 text-indigo-800 text-[10px] font-bold px-2 py-0.5 rounded-full"
  }, "Step ", naverActiveStep + 1, " of 13")), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-1 overflow-x-auto pb-2 scrollbar-none"
  }, Array.from({
    length: 13
  }).map(function (_, idx) {
    return /*#__PURE__*/React.createElement("button", {
      key: idx,
      onClick: function onClick() {
        return setNaverActiveStep(idx);
      },
      className: "px-3 py-1.5 rounded-lg text-xs font-bold shrink-0 transition-all ".concat(naverActiveStep === idx ? 'bg-indigo-600 text-white shadow-sm' : 'bg-white text-slate-600 border border-slate-100 hover:bg-slate-100')
    }, "Step ", idx + 1);
  })), /*#__PURE__*/React.createElement("div", {
    className: "mt-4 bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm leading-relaxed text-xs"
  }, naverActiveStep === 0 && /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-bold text-sm text-indigo-700"
  }, "Step 1: Download NAVER Map Pre-Departure"), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-600"
  }, "Before arriving in Korea, it\u2019s best to install the app in advance. Airport arrival is chaotic with immigration queues, luggage retrievals, SIM/eSIM setups, currency exchanges, and hotel navigation. Configuring a map while tired is frustrating. Install it ahead of your flight!"), /*#__PURE__*/React.createElement("div", {
    className: "p-3 bg-indigo-50/50 rounded-xl text-indigo-950 font-semibold text-[11px] border border-indigo-100/40"
  }, "\uD83D\uDCA1 search for \"NAVER Map\" on Apple App Store or Google Play Store.")), naverActiveStep === 1 && /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-bold text-sm text-indigo-700"
  }, "Step 2: Change NAVER Map to English Mode"), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-600"
  }, "NAVER Map supports fully-localized English translation profiles. Changing the default interface language to English is simple:"), /*#__PURE__*/React.createElement("div", {
    className: "p-3 bg-slate-50 rounded-xl border border-slate-150 font-semibold space-y-1"
  }, /*#__PURE__*/React.createElement("p", null, "1. Open NAVER Map and tap your ", /*#__PURE__*/React.createElement("strong", {
    className: "text-slate-800"
  }, "Profile Menu"), "."), /*#__PURE__*/React.createElement("p", null, "2. Navigate to ", /*#__PURE__*/React.createElement("strong", {
    className: "text-slate-800"
  }, "Settings (\uC124\uC815)"), "."), /*#__PURE__*/React.createElement("p", null, "3. Tap ", /*#__PURE__*/React.createElement("strong", {
    className: "text-slate-800"
  }, "Language (\uC5B8\uC5B4)"), "."), /*#__PURE__*/React.createElement("p", null, "4. Select ", /*#__PURE__*/React.createElement("strong", {
    className: "text-indigo-600"
  }, "English"), " and save settings.")), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-slate-500"
  }, "Once switched, major destinations like Myeongdong, Hongdae, Gangnam, COEX, Incheon Airport, and Gyeongbokgung Palace instantly map in English!")), naverActiveStep === 2 && /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-bold text-sm text-indigo-700"
  }, "Step 3: Understanding the Home Screen"), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-600"
  }, "You only need to master three core buttons which account for 80% of your experience:"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-3 gap-2.5 mt-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-3 rounded-xl border border-slate-150 bg-slate-50/50"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-slate-800 block"
  }, "1. Search (\uAC80\uC0C9)"), "Used for finding places, tourist attractions, specific local addresses or shop titles."), /*#__PURE__*/React.createElement("div", {
    className: "p-3 rounded-xl border border-slate-150 bg-slate-50/50"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-slate-800 block"
  }, "2. Directions (\uAE38\uCC3E\uAE30)"), "Used for detailed subway, transit bus, taxi, walking, or driving routes."), /*#__PURE__*/React.createElement("div", {
    className: "p-3 rounded-xl border border-slate-150 bg-slate-50/50"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-slate-800 block"
  }, "3. Current Location (\uB0B4\uC704\uCE58)"), "Instantly recenters the map grid directly over your physical GPS point."))), naverActiveStep === 4 && /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-bold text-sm text-indigo-700"
  }, "Step 4: Search Like a Local (Hacks)"), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-600"
  }, "English searches work perfectly for main attractions (e.g. Olive Young, Starbucks, Lotte World). However, local neighborhood diners or hidden cafes can fail or show up differently in Romanized English."), /*#__PURE__*/React.createElement("div", {
    className: "p-3 bg-amber-50 rounded-xl border border-amber-150 space-y-1 text-slate-700"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-bold block text-amber-900"
  }, "\uD83D\uDCA1 Local Search Tips:"), /*#__PURE__*/React.createElement("li", null, "If Kyochon Chicken doesn't show up, search for the Korean name: ", /*#__PURE__*/React.createElement("strong", {
    className: "select-all bg-white px-1 py-0.5 rounded border"
  }, "\uAD50\uCD0C\uCE58\uD0A8"), "."), /*#__PURE__*/React.createElement("li", null, "Copy Korean names from Instagram or translate them using Papago."), /*#__PURE__*/React.createElement("li", null, "Avoid typing Korean addresses in English (e.g. \"202jangchung-dong2-ga\") because romanized maps can fail. Search the business or hotel name directly, or paste the Korean address instead!"))), naverActiveStep === 4 && /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-bold text-sm text-indigo-700"
  }, "Step 5: Public Transit Navigation (Transit Routing)"), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-600"
  }, "Korea's public transit system is excellent. NAVER Map aggregates live subway and bus telemetry data to provide highly precise directions."), /*#__PURE__*/React.createElement("div", {
    className: "p-3.5 bg-indigo-900 text-white rounded-xl space-y-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-emerald-400 block text-[11px] uppercase tracking-wider"
  }, "How to route:"), /*#__PURE__*/React.createElement("p", null, "Search destination \u2192 Tap \"Directions\" (\uAE38\uCC3E\uAE30) \u2192 Select \"Public Transit\" (\uB300\uC911\uAD50\uD1B5) icon."), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-2 text-[11px] text-slate-200"
  }, /*#__PURE__*/React.createElement("div", {
    className: "border-l border-indigo-400 pl-2"
  }, /*#__PURE__*/React.createElement("strong", null, "Travel stats shown:"), " Total travel duration, estimated arrival times, and fares."), /*#__PURE__*/React.createElement("div", {
    className: "border-l border-indigo-400 pl-2"
  }, /*#__PURE__*/React.createElement("strong", null, "Transfers shown:"), " Transfer stations, walking transit times, and specific exit numbers.")))), naverActiveStep === 5 && /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-bold text-sm text-indigo-700"
  }, "Step 6: Subway Directions & Exit Strategy"), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-600"
  }, "Subway routes show details: line number, transfers, arrival estimates, transit durations, fares, and exits."), /*#__PURE__*/React.createElement("div", {
    className: "p-3 bg-emerald-50 rounded-xl border border-emerald-150 text-emerald-950"
  }, /*#__PURE__*/React.createElement("strong", {
    className: "block mb-1"
  }, "\uD83D\uDD11 Why Exit Numbers Matter:"), "Seoul subway stations are huge, with dozens of exits spanning long distances. Choosing the wrong exit can mean crossing major multi-lane roads unnecessarily, walking an extra 15 minutes, or getting completely lost. Always exit exactly where NAVER Map specifies (e.g., ", /*#__PURE__*/React.createElement("strong", {
    className: "text-emerald-800 bg-white px-1 rounded border"
  }, "Exit 10"), ")! This precise orientation makes NAVER Map extremely vital.")), naverActiveStep === 6 && /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-bold text-sm text-indigo-700"
  }, "Step 7: Using Korean Buses Without Getting Lost"), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-600"
  }, "Buses can be confusing because stops look identical and routes run in both directions nearby. Don't check *just* the bus number (e.g. Bus 143) as you might board going the wrong way!"), /*#__PURE__*/React.createElement("div", {
    className: "p-3.5 bg-amber-50 rounded-xl border border-amber-250 space-y-2 text-slate-800"
  }, /*#__PURE__*/React.createElement("strong", {
    className: "text-amber-950 block flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement(AlertCircle, {
    size: 14,
    className: "text-amber-700"
  }), "The 5-Digit Bus Stop ID Hack"), "Each Korean bus stop has a unique 5-digit number printed on the physical sign and mapped on NAVER Map (e.g. ", /*#__PURE__*/React.createElement("strong", {
    className: "bg-white px-1.5 py-0.5 rounded border border-amber-300"
  }, "14061"), "). Match this ID before boarding to confirm you are at the correct stop!")), naverActiveStep === 7 && /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-bold text-sm text-indigo-700"
  }, "Step 8: Walking Navigation for Alleys"), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-600"
  }, "Walking in historic or highly crowded Korean cities can be tricky due to complex underground networks, giant stations, and narrow lanes. NAVER Map\u2019s walking navigation provides exceptionally precise pathfinding, showing exact crosswalk positions, pedestrian overpasses, and narrow pedestrian lanes in districts like Seongsu, Hongdae, and Myeongdong.")), naverActiveStep === 8 && /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-bold text-sm text-indigo-700"
  }, "Step 9: Indoor Maps for Shopping Complexes"), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-600"
  }, "NAVER Map provides detailed multi-level indoor maps for large locations like COEX, Starfield malls, Seoul Station, and major department stores."), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-500 font-semibold"
  }, "This is incredibly helpful for finding hidden restaurants, locating Olive Young, or navigating train platforms where GPS signals can be weak or unreliable.")), naverActiveStep === 9 && /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-bold text-sm text-indigo-700"
  }, "Step 10: Local Reviews Advantage"), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-600"
  }, "In Korea, local review culture is highly active. Unlike standard global directories that lack deep local tracking, NAVER Map is backed by a highly active domestic community."), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-4 my-2 text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-3 bg-red-50 text-red-950 border border-red-150 rounded-xl"
  }, /*#__PURE__*/React.createElement("span", {
    className: "block font-extrabold text-sm text-red-700"
  }, "Other Basic Maps"), "~50 reviews"), /*#__PURE__*/React.createElement("div", {
    className: "p-3 bg-emerald-50 text-emerald-950 border border-emerald-150 rounded-xl"
  }, /*#__PURE__*/React.createElement("span", {
    className: "block font-extrabold text-sm text-emerald-700 font-sans"
  }, "NAVER Map"), "2,000+ rich reviews")), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-500"
  }, "Reviews include real photos, menus, exact pricing, waiting times, and helpful remarks. Translate reviews directly using Papago or in-browser extensions!")), naverActiveStep === 10 && /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-bold text-sm text-indigo-700"
  }, "Step 11: Save Places for Trip Planning"), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-600"
  }, "Pre-save locations in lists to plan your itineraries. Mark your hotel, airport terminals, favorite restaurants, cafes, and attractions to easily access them during your travels."), /*#__PURE__*/React.createElement("div", {
    className: "p-3 bg-slate-50 rounded-xl text-slate-500 text-[11px]"
  }, "\u203B Basic search functions work without logging in, but saving places requires setting up a free NAVER account.")), naverActiveStep === 11 && /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-bold text-sm text-indigo-700"
  }, "Step 12: Map Comparison Matrix"), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-550 mb-2"
  }, "Detailed comparison showing why NAVER Map is the superior choice for local travel."), /*#__PURE__*/React.createElement("div", {
    className: "overflow-x-auto border border-slate-200 rounded-xl"
  }, /*#__PURE__*/React.createElement("table", {
    className: "w-full text-[11px] text-left border-collapse"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    className: "bg-slate-150 text-slate-800 uppercase font-bold text-[9px] border-b border-slate-250"
  }, /*#__PURE__*/React.createElement("th", {
    className: "p-2 border-r border-slate-200"
  }, "Feature"), /*#__PURE__*/React.createElement("th", {
    className: "p-2 border-r border-slate-200 text-indigo-700"
  }, "NAVER Map"), /*#__PURE__*/React.createElement("th", {
    className: "p-2 text-slate-600"
  }, "Kakao Map"))), /*#__PURE__*/React.createElement("tbody", {
    className: "divide-y divide-slate-100"
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "p-2 font-bold border-r border-slate-200 bg-slate-50"
  }, "English Support"), /*#__PURE__*/React.createElement("td", {
    className: "p-2 border-r border-slate-200 text-emerald-700 font-semibold"
  }, "Good"), /*#__PURE__*/React.createElement("td", {
    className: "p-2 text-amber-700"
  }, "Fair")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "p-2 font-bold border-r border-slate-200 bg-slate-50"
  }, "English Search"), /*#__PURE__*/React.createElement("td", {
    className: "p-2 border-r border-slate-200 text-emerald-750 font-semibold"
  }, "Good"), /*#__PURE__*/React.createElement("td", {
    className: "p-2 text-amber-700"
  }, "Fair")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "p-2 font-bold border-r border-slate-200 bg-slate-50"
  }, "Local Info"), /*#__PURE__*/React.createElement("td", {
    className: "p-2 border-r border-slate-200 text-emerald-750 font-bold"
  }, "Excellent"), /*#__PURE__*/React.createElement("td", {
    className: "p-2 text-slate-700 font-semibold"
  }, "Strong")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "p-2 font-bold border-r border-slate-200 bg-slate-50"
  }, "Subway Route"), /*#__PURE__*/React.createElement("td", {
    className: "p-2 border-r border-slate-200 text-emerald-750 font-bold"
  }, "Excellent"), /*#__PURE__*/React.createElement("td", {
    className: "p-2 text-slate-700 font-semibold"
  }, "Good")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "p-2 font-bold border-r border-slate-200 bg-slate-50"
  }, "Bus Navigation"), /*#__PURE__*/React.createElement("td", {
    className: "p-2 border-r border-slate-200 text-emerald-750 font-bold"
  }, "Excellent"), /*#__PURE__*/React.createElement("td", {
    className: "p-2 text-slate-700 font-semibold"
  }, "Good")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "p-2 font-bold border-r border-slate-200 bg-slate-50"
  }, "Walking Paths"), /*#__PURE__*/React.createElement("td", {
    className: "p-2 border-r border-slate-200 text-slate-700 font-semibold"
  }, "Strong"), /*#__PURE__*/React.createElement("td", {
    className: "p-2 text-slate-700 font-semibold"
  }, "Strong")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "p-2 font-bold border-r border-slate-200 bg-slate-50"
  }, "Local Reviews"), /*#__PURE__*/React.createElement("td", {
    className: "p-2 border-r border-slate-200 text-emerald-750 font-bold"
  }, "Excellent"), /*#__PURE__*/React.createElement("td", {
    className: "p-2 text-slate-500"
  }, "Moderate")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "p-2 font-bold border-r border-slate-200 bg-slate-50"
  }, "Indoor Mapping"), /*#__PURE__*/React.createElement("td", {
    className: "p-2 border-r border-slate-200 text-slate-750 font-semibold"
  }, "Available"), /*#__PURE__*/React.createElement("td", {
    className: "p-2 text-rose-650"
  }, "Limited")))))), naverActiveStep === 12 && /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-bold text-sm text-indigo-700"
  }, "Step 13: Avoid Common Tourist Mistakes"), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-650 mb-3"
  }, "Check each block to confirm you've mastered these tourist mistakes:"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, [{
    key: 'mistake1',
    t: "Mistake 1: Relying on international maps without local updates",
    d: "Standard global maps are fine for initial travel planning, but lack detailed pedestrian walking paths, real-time domestic bus routes, and local neighborhood listings in South Korea."
  }, {
    key: 'mistake2',
    t: "Mistake 2: Boarding a bus based only on the line number",
    d: "Always cross-verify the Stop ID, stop name, and the route direction before boarding to prevent going the wrong way."
  }, {
    key: 'mistake3',
    t: "Mistake 3: Ignoring subway exit numbers",
    d: "Wrong subway exits lead to massive detours, crossing giant junctions, or walking an extra 15 minutes."
  }, {
    key: 'mistake4',
    t: "Mistake 4: Disregarding local reviews",
    d: "Local diners might look closed or empty on generic maps but have 2,000+ detailed photos and reviews on Naver."
  }, {
    key: 'mistake5',
    t: "Mistake 5: Searching Korean addresses in English",
    d: "English romanizations often fail. Search by place name directly or paste the Korean address characters instead."
  }, {
    key: 'mistake6',
    t: "Mistake 6: Forgetting Indoor Maps in complex malls",
    d: "COEX or department store layouts can be incredibly confusing. Indoor maps save massive planning time."
  }].map(function (mstk) {
    return /*#__PURE__*/React.createElement("div", {
      key: mstk.key,
      onClick: function onClick() {
        return toggleMistake(mstk.key);
      },
      className: "p-3 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ".concat(mistakesChecklist[mstk.key] ? 'bg-indigo-50 border-indigo-300' : 'bg-slate-50/50 border-slate-150 hover:border-slate-350')
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 ".concat(mistakesChecklist[mstk.key] ? 'bg-indigo-600 border-indigo-600 text-white' : 'border-slate-300 bg-white')
    }, mistakesChecklist[mstk.key] && /*#__PURE__*/React.createElement(Check, {
      size: 12
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      className: "font-bold block ".concat(mistakesChecklist[mstk.key] ? 'text-indigo-900 line-through' : 'text-slate-800')
    }, mstk.t), /*#__PURE__*/React.createElement("p", {
      className: "text-[11px] text-slate-500 mt-0.5"
    }, mstk.d)));
  })))), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center mt-4"
  }, /*#__PURE__*/React.createElement("button", {
    disabled: naverActiveStep === 0,
    onClick: function onClick() {
      return setNaverActiveStep(function (prev) {
        return prev - 1;
      });
    },
    className: "text-xs font-bold text-slate-500 hover:text-indigo-600 disabled:opacity-40"
  }, "Previous Step"), /*#__PURE__*/React.createElement("button", {
    disabled: naverActiveStep === 12,
    onClick: function onClick() {
      return setNaverActiveStep(function (prev) {
        return prev + 1;
      });
    },
    className: "bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-1 shadow-sm disabled:opacity-40"
  }, "Next Step", /*#__PURE__*/React.createElement(ChevronRight, {
    size: 14
  }))))), selectedGuideApp === 'baemin' && /*#__PURE__*/React.createElement("div", {
    className: "space-y-6 animate-fadeIn text-slate-700"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-4 rounded-2xl bg-emerald-50 border border-emerald-100 text-xs text-emerald-950 flex gap-3 items-start"
  }, /*#__PURE__*/React.createElement(Info, {
    size: 18,
    className: "text-emerald-600 shrink-0 mt-0.5"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    className: "font-extrabold text-sm mb-1"
  }, "Baemin (\uBC30\uB2EC\uC758\uBBFC\uC871) English Mode & Global Payment"), "Ordering food in Korea is incredibly easy. Baemin now officially supports **global credit card payments via NICEPAY** and a phone system **English setting toggle**!")), /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-50 p-4 rounded-2xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
    className: "text-xs text-slate-800 block"
  }, "Download Baemin App"), /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] text-slate-500"
  }, "Get the official application for iOS or Android.")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2"
  }, /*#__PURE__*/React.createElement("a", {
    href: APP_LINKS.baemin.ios,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "bg-slate-900 hover:bg-slate-800 text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors"
  }, "App Store ", /*#__PURE__*/React.createElement(ExternalLink, {
    size: 12
  })), /*#__PURE__*/React.createElement("a", {
    href: APP_LINKS.baemin.android,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "bg-slate-900 hover:bg-slate-800 text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors"
  }, "Play Store ", /*#__PURE__*/React.createElement(ExternalLink, {
    size: 12
  })), /*#__PURE__*/React.createElement("a", {
    href: APP_LINKS.baemin.web,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors"
  }, "Official Site ", /*#__PURE__*/React.createElement(ExternalLink, {
    size: 12
  })))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "border border-slate-100 rounded-2xl p-5 bg-slate-50/50"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-bold text-xs text-slate-800 flex items-center gap-2 mb-3"
  }, /*#__PURE__*/React.createElement(Smartphone, {
    size: 16,
    className: "text-emerald-600"
  }), "Step 1: Switch App to English & Verify"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-600 leading-relaxed mb-3"
  }, "Baemin will not automatically switch to English from inside the app interface. You need to activate it through your phone's native operating settings:"), /*#__PURE__*/React.createElement("div", {
    className: "p-3 bg-white rounded-xl border border-slate-200 text-xs text-slate-700 font-semibold mb-3"
  }, "\uD83D\uDCCC iOS / Android Setting Path:", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "text-slate-500 text-[11px] font-normal"
  }, "Go to phone's System Settings \u2192 Find & tap the Baemin app \u2192 Change the default Language parameter to \"English\".")), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-600 leading-relaxed"
  }, "After modifying, open the app. You must complete your identity verification by receiving a 6-digit verification code over domestic SMS.")), /*#__PURE__*/React.createElement("div", {
    className: "border border-slate-100 rounded-2xl p-5 bg-slate-50/50 flex flex-col justify-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "font-bold text-xs text-slate-800 flex items-center gap-2 mb-3"
  }, /*#__PURE__*/React.createElement(MapPin, {
    size: 16,
    className: "text-emerald-600"
  }), "Step 2: Entering Your Korean Address (Copy Hack)"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-600 leading-relaxed mb-3"
  }, "Even though the app is translated to English, always input your delivery destination address in Korean text to prevent courier confusion. Follow this copy-paste hack:"), /*#__PURE__*/React.createElement("ol", {
    className: "list-decimal pl-4 text-xs text-slate-500 space-y-1"
  }, /*#__PURE__*/React.createElement("li", null, "Open Naver Map or KakaoMap (which both fully support English searches)."), /*#__PURE__*/React.createElement("li", null, "Search for your target building, hotel, or apartment."), /*#__PURE__*/React.createElement("li", null, "Copy the Korean text address (\uB3C4\uB85C\uBA85\uC8FC\uC18C) provided on the screen."), /*#__PURE__*/React.createElement("li", null, "Paste it directly into Baemin's address search bar."), /*#__PURE__*/React.createElement("li", null, "Manually append your exact room or apartment number (e.g., ", /*#__PURE__*/React.createElement("strong", {
    className: "text-slate-800"
  }, "301\uD638"), ")."))))), /*#__PURE__*/React.createElement("div", {
    className: "bg-gradient-to-br from-slate-900 to-emerald-950 text-white rounded-3xl p-6"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "text-xs font-extrabold uppercase tracking-widest text-emerald-400 mb-2"
  }, "Checkout Game Changer"), /*#__PURE__*/React.createElement("h3", {
    className: "text-base font-bold flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(CreditCard, {
    size: 18
  }), "The 3-Step NICEPAY Foreign Card Checkout Process"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-300 mt-1 leading-relaxed"
  }, "You no longer need to pay in person or use a Korean card. Baemin processes international cards smoothly via the integrated NICEPAY gateway."), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 text-xs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white/5 p-4 rounded-xl border border-white/10"
  }, /*#__PURE__*/React.createElement("strong", {
    className: "text-white block mb-1"
  }, "1. Select \"Foreign Card\""), "On the final order screen (", /*#__PURE__*/React.createElement("span", {
    className: "text-slate-300 select-all"
  }, "\uC8FC\uBB38\uD558\uAE30"), "), scroll to Payment Method (", /*#__PURE__*/React.createElement("span", {
    className: "text-slate-300"
  }, "\uACB0\uC81C\uC218\uB2E8"), "). Tap \"Other Payment Methods\" (", /*#__PURE__*/React.createElement("span", {
    className: "text-emerald-300 font-semibold"
  }, "\uAE30\uD0C0 \uACB0\uC81C\uC218\uB2E8"), ") and select the ", /*#__PURE__*/React.createElement("strong", {
    className: "text-emerald-400 font-extrabold"
  }, "[ Foreign Card ]"), " button."), /*#__PURE__*/React.createElement("div", {
    className: "bg-white/5 p-4 rounded-xl border border-white/10"
  }, /*#__PURE__*/React.createElement("strong", {
    className: "text-white block mb-1"
  }, "2. Choose Card Brand"), "An English NICEPAY overlay will appear on your mobile screen. Select from major global networks: **Visa, MasterCard, JCB, or UnionPay**, then click NEXT."), /*#__PURE__*/React.createElement("div", {
    className: "bg-white/5 p-4 rounded-xl border border-white/10"
  }, /*#__PURE__*/React.createElement("strong", {
    className: "text-white block mb-1"
  }, "3. Enter Details & Pay"), "Type in your card details: Number, Expiration date, Cardholder Name (exact format), and Email address. Check the terms verification box and click the big blue **Pay** button!"))), /*#__PURE__*/React.createElement("div", {
    className: "border border-slate-200 rounded-2xl p-5 bg-slate-50/20"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-bold text-xs text-slate-800 mb-3 uppercase tracking-wider"
  }, "Official In-App Flow & Settings Guide"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3 text-xs text-slate-600"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-3 bg-white rounded-xl border border-slate-100 flex gap-2 items-start"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bg-emerald-100 text-emerald-700 font-extrabold rounded-full px-2 py-0.5 text-[10px]"
  }, "Settings Path"), /*#__PURE__*/React.createElement("p", null, "Go to **My Baemin (\uB9C8\uC774\uBC30\uBBFC)** \u2192 Click the **Settings Gear (\uD1B1\uB2C8\uBC14\uD034) Icon** on the top right corner \u2192 Select **Language Configuration (\uC5B8\uC5B4\uBCC0\uACBD)** to swap details to your home country's native language.")), /*#__PURE__*/React.createElement("div", {
    className: "p-3 bg-white rounded-xl border border-slate-100"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-bold block text-slate-800 mb-2"
  }, "\uD83D\uDED2 Select Food Delivery Type (\uD55C\uC9D1/\uC54C\uB730/\uAC00\uAC8C\uBC30\uB2EC/\uD53D\uC5C5):"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-[11px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-emerald-50/50 p-2.5 rounded-lg border border-emerald-100/30"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-emerald-800 block"
  }, "\uD55C\uC9D1\uBC30\uB2EC (Single Express)"), "Delivers directly from the kitchen to your room. Fast but slightly higher delivery fees."), /*#__PURE__*/React.createElement("div", {
    className: "bg-emerald-50/50 p-2.5 rounded-lg border border-emerald-100/30"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-emerald-800 block"
  }, "\uC54C\uB730\uBC30\uB2EC (Saver Bundled)"), "Saves costs by bundling neighbor deliveries together. Friendly budget options."), /*#__PURE__*/React.createElement("div", {
    className: "bg-emerald-50/50 p-2.5 rounded-lg border border-emerald-100/30"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-emerald-800 block"
  }, "\uAC00\uAC8C\uBC30\uB2EC (Direct Store)"), "Delivery handled strictly by the store's in-house riders. Check fees beforehand."), /*#__PURE__*/React.createElement("div", {
    className: "bg-emerald-50/50 p-2.5 rounded-lg border border-emerald-100/30"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-emerald-800 block"
  }, "\uD3EC\uC7A5/\uD53D\uC5C5 (Pickup Order)"), "Place your order on Baemin beforehand and pick it up on foot to bypass shipping fees entirely."))), /*#__PURE__*/React.createElement("div", {
    className: "p-3 bg-white rounded-xl border border-slate-100"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-bold block text-slate-800 mb-1"
  }, "Cancel Policy:"), "You are free to cancel your order directly from the order details screen ", /*#__PURE__*/React.createElement("strong", {
    className: "text-rose-600"
  }, "anytime BEFORE the restaurant accepts the request"), " (\uC8FC\uBB38 \uBC1B\uAE30 \uC804\uAE4C\uC9C0\uB9CC \uC989\uAC01 \uCDE8\uC18C \uAC00\uB2A5). Once accepted, you must contact customer service.")))), selectedGuideApp === 'coupang' && /*#__PURE__*/React.createElement("div", {
    className: "space-y-6 animate-fadeIn text-slate-750"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-4 rounded-2xl bg-indigo-50 border border-indigo-100 text-xs text-indigo-950 flex gap-3 items-start"
  }, /*#__PURE__*/React.createElement(Info, {
    size: 18,
    className: "text-indigo-600 shrink-0 mt-0.5"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    className: "font-extrabold text-sm mb-1"
  }, "Coupang: The Ultimate Convenience Marketplace"), "Coupang can be found on the Apple App Store or Google Play Store. It is widely famous for **\"Rocket Delivery\" (\uB85C\uCF13\uBC30\uC1A1)** which promises delivery in **1 day or less** for products with the blue rocket graphic.")), /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-50 p-4 rounded-2xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
    className: "text-xs text-slate-800 block"
  }, "Download Coupang App"), /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] text-slate-500"
  }, "Get the official application for iOS or Android.")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2"
  }, /*#__PURE__*/React.createElement("a", {
    href: APP_LINKS.coupang.ios,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "bg-slate-900 hover:bg-slate-800 text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors"
  }, "App Store ", /*#__PURE__*/React.createElement(ExternalLink, {
    size: 12
  })), /*#__PURE__*/React.createElement("a", {
    href: APP_LINKS.coupang.android,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "bg-slate-900 hover:bg-slate-800 text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors"
  }, "Play Store ", /*#__PURE__*/React.createElement(ExternalLink, {
    size: 12
  })), /*#__PURE__*/React.createElement("a", {
    href: APP_LINKS.coupang.web,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors"
  }, "Official Site ", /*#__PURE__*/React.createElement(ExternalLink, {
    size: 12
  })))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "border border-slate-100 rounded-2xl p-5 bg-slate-50/50"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-bold text-xs text-slate-800 flex items-center gap-2 mb-3"
  }, /*#__PURE__*/React.createElement(Smartphone, {
    size: 16,
    className: "text-indigo-600"
  }), "Step 1: Coupang Sign Up Flow"), /*#__PURE__*/React.createElement("ol", {
    className: "space-y-3 text-xs text-slate-600"
  }, /*#__PURE__*/React.createElement("li", {
    className: "flex items-start gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bg-indigo-600 text-white w-5 h-5 rounded-full flex items-center justify-center font-bold shrink-0 text-[10px]"
  }, "1"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-slate-800"
  }, "Download the App:"), " Search 'Coupang' or '\uCFE0\uD321' in Google Play/Apple App Store.")), /*#__PURE__*/React.createElement("li", {
    className: "flex items-start gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bg-indigo-600 text-white w-5 h-5 rounded-full flex items-center justify-center font-bold shrink-0 text-[10px]"
  }, "2"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-slate-800"
  }, "Sign Up (\uD68C\uC6D0\uAC00\uC785):"), " The first page that opens when you first start the app is a login page. Click on the bottom option ", /*#__PURE__*/React.createElement("strong", {
    className: "text-indigo-600 bg-indigo-50 px-1 rounded font-extrabold"
  }, "\"\uD68C\uC6D0\uAC00\uC785\" (Sign Up)"), ".")), /*#__PURE__*/React.createElement("li", {
    className: "flex items-start gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bg-indigo-600 text-white w-5 h-5 rounded-full flex items-center justify-center font-bold shrink-0 text-[10px]"
  }, "3"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-slate-800"
  }, "Fill in details:"), " Input your personal details (Email, password, name, phone carrier number).")), /*#__PURE__*/React.createElement("li", {
    className: "flex items-start gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bg-indigo-600 text-white w-5 h-5 rounded-full flex items-center justify-center font-bold shrink-0 text-[10px]"
  }, "4"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-slate-800"
  }, "SMS Verification:"), " You will then need to verify your phone number. Click on **SMS** and verify it through a text message verification code. That\u2019s it!")))), /*#__PURE__*/React.createElement("div", {
    className: "border border-slate-100 rounded-2xl p-5 bg-slate-50/50 flex flex-col justify-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "font-bold text-xs text-slate-800 flex items-center gap-2 mb-3"
  }, /*#__PURE__*/React.createElement(Search, {
    size: 16,
    className: "text-indigo-600"
  }), "Step 2: Searching for Deals"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-600 leading-relaxed mb-3"
  }, "Although Coupang is a Korean app, you can use **English in the search bar** and find bedding, cleaning supplies, home gadgets, toiletries, cosmetics, and much more with zero issues!"), /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-3 rounded-xl border border-slate-100 text-xs"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-extrabold text-blue-600 flex items-center gap-1"
  }, "\uD83D\uDE80 Rocket Delivery (\uB85C\uCF13\uBC30\uC1A1)"), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-500 text-[11px] mt-1"
  }, "Look for the blue rocket graphic on item pages. These items will arrive at your door within 1 day or less!"))), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-slate-400 block italic border-t border-slate-100 pt-2 mt-3"
  }, "Tip: Rocket Wow members receive free shipping on rocket items.")))), selectedGuideApp === 'ably' && /*#__PURE__*/React.createElement("div", {
    className: "space-y-6 animate-fadeIn text-slate-750"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-4 rounded-2xl bg-rose-50 border border-rose-100 text-xs text-rose-950"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-extrabold text-sm mb-1"
  }, "\uD83C\uDF80 Ably (\uC5D0\uC774\uBE14\uB9AC): Free Shipping Fashion App"), "Ably is extremely popular for free shipping on all products. Follow these instructions to register, use your points, and manage options properly."), /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-50 p-4 rounded-2xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
    className: "text-xs text-slate-800 block"
  }, "Download Ably App"), /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] text-slate-500"
  }, "Get the official application for iOS or Android.")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2"
  }, /*#__PURE__*/React.createElement("a", {
    href: APP_LINKS.ably.ios,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "bg-slate-900 hover:bg-slate-800 text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors"
  }, "App Store ", /*#__PURE__*/React.createElement(ExternalLink, {
    size: 12
  })), /*#__PURE__*/React.createElement("a", {
    href: APP_LINKS.ably.android,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "bg-slate-900 hover:bg-slate-800 text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors"
  }, "Play Store ", /*#__PURE__*/React.createElement(ExternalLink, {
    size: 12
  })), /*#__PURE__*/React.createElement("a", {
    href: APP_LINKS.ably.web,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors"
  }, "Official Site ", /*#__PURE__*/React.createElement(ExternalLink, {
    size: 12
  }))))), selectedGuideApp === 'zigzag' && /*#__PURE__*/React.createElement("div", {
    className: "space-y-6 animate-fadeIn text-slate-750"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-4 rounded-2xl bg-fuchsia-50 border border-fuchsia-100 text-xs text-fuchsia-950"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-extrabold text-sm mb-1"
  }, "\u26A1 Zigzag (\uC9C0\uADF8\uC7AC\uADF8): Brand & Mall Curator"), "Zigzag aggregates thousands of popular local online fashion malls. You can explore styles, check out from different stores at once, and track logistics seamlessly."), /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-50 p-4 rounded-2xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
    className: "text-xs text-slate-800 block"
  }, "Download Zigzag App / PC"), /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] text-slate-500"
  }, "Get the official app or use PC Web Portal.")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2"
  }, /*#__PURE__*/React.createElement("a", {
    href: APP_LINKS.zigzag.ios,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "bg-slate-900 hover:bg-slate-800 text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors"
  }, "App Store ", /*#__PURE__*/React.createElement(ExternalLink, {
    size: 12
  })), /*#__PURE__*/React.createElement("a", {
    href: APP_LINKS.zigzag.android,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "bg-slate-900 hover:bg-slate-800 text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors"
  }, "Play Store ", /*#__PURE__*/React.createElement(ExternalLink, {
    size: 12
  })), /*#__PURE__*/React.createElement("a", {
    href: APP_LINKS.zigzag.web,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors"
  }, "PC Domain (apk.chwiderstand.com) ", /*#__PURE__*/React.createElement(ExternalLink, {
    size: 12
  }))))), selectedGuideApp === 'kakao-t' && /*#__PURE__*/React.createElement("div", {
    className: "space-y-6 animate-fadeIn text-slate-750"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-4 rounded-2xl bg-blue-50 border border-blue-100 text-xs text-blue-950 flex gap-3 items-start"
  }, /*#__PURE__*/React.createElement(Info, {
    size: 18,
    className: "text-blue-600 shrink-0 mt-0.5"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    className: "font-extrabold text-sm mb-1"
  }, "Kakao T (\uCE74\uCE74\uC624 T): Transit & Taxi Hailing"), "Hailing taxis in Korea is completely digitized. Kakao T lets you select your start and destination, see real-time price estimation, and choose physical card/cash payment when you don't have Korean banking cards linked!")), /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-50 p-4 rounded-2xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
    className: "text-xs text-slate-800 block"
  }, "Download Kakao T App"), /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] text-slate-500"
  }, "Hail taxis easily on iOS and Android.")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2"
  }, /*#__PURE__*/React.createElement("a", {
    href: APP_LINKS.kakaoT.ios,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "bg-slate-900 hover:bg-slate-800 text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors"
  }, "App Store ", /*#__PURE__*/React.createElement(ExternalLink, {
    size: 12
  })), /*#__PURE__*/React.createElement("a", {
    href: APP_LINKS.kakaoT.android,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "bg-slate-900 hover:bg-slate-800 text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors"
  }, "Play Store ", /*#__PURE__*/React.createElement(ExternalLink, {
    size: 12
  })), /*#__PURE__*/React.createElement("a", {
    href: APP_LINKS.kakaoT.web,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors"
  }, "Official Site ", /*#__PURE__*/React.createElement(ExternalLink, {
    size: 12
  }))))), selectedGuideApp === 'delivered-korea' && /*#__PURE__*/React.createElement("div", {
    className: "space-y-6 animate-fadeIn text-slate-750"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-950 flex gap-3 items-start"
  }, /*#__PURE__*/React.createElement(Sparkles, {
    size: 18,
    className: "text-amber-600 shrink-0 mt-0.5"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    className: "font-extrabold text-sm mb-1"
  }, "Delivered Korea (\uB51C\uB9AC\uBC84\uB4DC \uCF54\uB9AC\uC544) Official Partnership"), "Delivered Korea runs a special partner page allowing international customers to shop and ship items directly from popular domestic stores like **Bunjang, Olive Young, and Zigzag** easily! It handles shopping, warehousing, and worldwide delivery.")), /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-50 p-4 rounded-2xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
    className: "text-xs text-slate-800 block"
  }, "Access Delivered Korea Platform"), /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] text-slate-500"
  }, "Calculate fees or start shipping directly.")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2"
  }, /*#__PURE__*/React.createElement("a", {
    href: APP_LINKS.deliveredKorea.web,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors"
  }, "Official Site ", /*#__PURE__*/React.createElement(ExternalLink, {
    size: 12
  })))))), activeTab === 'secondhand' && /*#__PURE__*/React.createElement("div", {
    className: "space-y-6 animate-fadeIn text-slate-800"
  }, /*#__PURE__*/React.createElement("div", {
    className: "border-b border-slate-100 pb-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-2xl font-bold text-slate-800"
  }, "Secondhand Market Master Guide"), /*#__PURE__*/React.createElement("span", {
    className: "bg-orange-100 text-orange-800 text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider"
  }, "\uB2F9\uADFC\uB9C8\uCF13 & \uBC88\uAC1C\uC7A5\uD130")), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-500 text-xs mt-1"
  }, "Learn registration flows, selling checklists, points/coupons mechanics, and safe-trading protocols based on domestic guidelines.")), /*#__PURE__*/React.createElement("div", {
    className: "flex bg-slate-100 p-1.5 rounded-2xl w-full sm:w-fit"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setSecondhandPlatform('karrot');
    },
    className: "flex-1 sm:flex-initial px-6 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all ".concat(secondhandPlatform === 'karrot' ? 'bg-white text-orange-600 shadow-sm' : 'text-slate-600 hover:bg-white/40')
  }, /*#__PURE__*/React.createElement(MapPin, {
    size: 16
  }), "\uB2F9\uADFC\uB9C8\uCF13 (Karrot)"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setSecondhandPlatform('bunjang');
    },
    className: "flex-1 sm:flex-initial px-6 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all ".concat(secondhandPlatform === 'bunjang' ? 'bg-white text-rose-600 shadow-sm' : 'text-slate-600 hover:bg-white/40')
  }, /*#__PURE__*/React.createElement(ArrowLeftRight, {
    size: 16
  }), "\uBC88\uAC1C\uC7A5\uD130 (Bunjang)")), secondhandPlatform === 'karrot' ? /*#__PURE__*/React.createElement("div", {
    className: "p-4 bg-gradient-to-r from-orange-50 to-orange-100/40 rounded-2xl border border-orange-150 animate-fadeIn text-xs"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] uppercase font-bold text-orange-700 bg-orange-50 px-2 py-0.5 rounded-md block w-fit mb-1.5"
  }, "What App is this? (\uC571 \uC131\uACA9 \uC18C\uAC1C)"), /*#__PURE__*/React.createElement("h3", {
    className: "font-extrabold text-slate-900 text-sm mb-1"
  }, "Karrot (\uB2F9\uADFC\uB9C8\uCF13)"), /*#__PURE__*/React.createElement("p", {
    className: "text-orange-950 font-bold mb-1"
  }, "\uC2E4\uC81C GPS \uAE30\uBC18 \uB3D9\uB124 \uC8FC\uBBFC\uB4E4\uACFC \uC18C\uD1B5\uD558\uB294 \uB530\uB73B\uD55C \uC9C0\uC5ED \uBC00\uCC29\uD615 \uC911\uACE0\uAC70\uB798 \uD50C\uB7AB\uD3FC"), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-600 italic mb-2"
  }, "Hyper-local secondhand market and community platform based on real physical locations."), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-550 leading-relaxed font-normal"
  }, "Hyper-local secondhand marketplace. You can buy and sell items with neighbors within a few kilometers range.")) : /*#__PURE__*/React.createElement("div", {
    className: "p-4 bg-gradient-to-r from-rose-50 to-rose-100/40 rounded-2xl border border-rose-150 animate-fadeIn text-xs"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] uppercase font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded-md block w-fit mb-1.5"
  }, "What App is this? (\uC571 \uC131\uACA9 \uC18C\uAC1C)"), /*#__PURE__*/React.createElement("h3", {
    className: "font-extrabold text-slate-900 text-sm mb-1"
  }, "Bunjang (\uBC88\uAC1C\uC7A5\uD130)"), /*#__PURE__*/React.createElement("p", {
    className: "text-rose-950 font-bold mb-1"
  }, "\uB355\uC9C8 \uC6A9\uD488, \uD328\uC158, \uD55C\uC815\uD310 \uC804\uBB38 \uC804\uAD6D\uAD6C \uC548\uC804\uACB0\uC81C \uD2B9\uD654 \uC911\uACE0\uAC70\uB798 \uD50C\uB7AB\uD3FC"), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-600 italic mb-2"
  }, "Nationwide secondhand market specializing in K-pop goods, limited sneakers, and fashion."), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-550 leading-relaxed font-normal"
  }, "Nationwide secondhand market, great for K-pop goods, electronics, and fashion items with shipping support.")), secondhandPlatform === 'karrot' && /*#__PURE__*/React.createElement("div", {
    className: "space-y-8 animate-fadeIn"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-4 rounded-2xl bg-orange-50 border border-orange-100 text-xs text-orange-950 leading-relaxed"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-extrabold text-xs mb-1"
  }, "\uD83D\uDCA1 Karrot Market Summary:"), "How to use Karrot: Install the app, verify your phone number, set your neighborhood to find items near you. Tap the '+' write button to post listings, and chat directly with sellers to arrange safe face-to-face transactions."), /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-50 p-4 rounded-2xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
    className: "text-xs text-slate-800 block"
  }, "Download Karrot App"), /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] text-slate-500"
  }, "Find local secondhand trade deals nearby.")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2"
  }, /*#__PURE__*/React.createElement("a", {
    href: APP_LINKS.karrot.ios,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "bg-slate-900 hover:bg-slate-800 text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors"
  }, "App Store ", /*#__PURE__*/React.createElement(ExternalLink, {
    size: 12
  })), /*#__PURE__*/React.createElement("a", {
    href: APP_LINKS.karrot.android,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "bg-slate-900 hover:bg-slate-800 text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors"
  }, "Play Store ", /*#__PURE__*/React.createElement(ExternalLink, {
    size: 12
  })), /*#__PURE__*/React.createElement("a", {
    href: APP_LINKS.karrot.web,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors"
  }, "Official Site ", /*#__PURE__*/React.createElement(ExternalLink, {
    size: 12
  }))))), secondhandPlatform === 'bunjang' && /*#__PURE__*/React.createElement("div", {
    className: "space-y-8 animate-fadeIn text-xs text-slate-650"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-4 rounded-2xl bg-rose-50 border border-rose-100 text-xs text-rose-950 leading-relaxed"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-extrabold text-xs mb-1"
  }, "\uD83D\uDCA1 Bunjang Market Summary:"), "Bunjang enables nationwide shipping. Find items using category and price filters. Chat with sellers via **\"Bunjang Talk\" (\uBC88\uAC1C\uD1A1)**, buy safely using the **\"Bunke Pay\" (\uBC88\uAC1C\uD398\uC774)** escrow, and apply discount points/coupons during checkout."), /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-50 p-4 rounded-2xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
    className: "text-xs text-slate-800 block"
  }, "Download Bunjang App"), /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] text-slate-500"
  }, "Shop K-Pop merchandise and limited fashion nationwide.")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2"
  }, /*#__PURE__*/React.createElement("a", {
    href: APP_LINKS.bunjang.ios,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "bg-slate-900 hover:bg-slate-800 text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors"
  }, "App Store ", /*#__PURE__*/React.createElement(ExternalLink, {
    size: 12
  })), /*#__PURE__*/React.createElement("a", {
    href: APP_LINKS.bunjang.android,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "bg-slate-900 hover:bg-slate-800 text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors"
  }, "Play Store ", /*#__PURE__*/React.createElement(ExternalLink, {
    size: 12
  })), /*#__PURE__*/React.createElement("a", {
    href: APP_LINKS.bunjang.web,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors"
  }, "Official Site ", /*#__PURE__*/React.createElement(ExternalLink, {
    size: 12
  })))))), activeTab === 'pay-guide' && /*#__PURE__*/React.createElement("div", {
    className: "space-y-6 animate-fadeIn text-slate-700"
  }, /*#__PURE__*/React.createElement("div", {
    className: "border-b border-slate-100 pb-4"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-2xl font-bold text-slate-800"
  }, "Kakao Pay Mobile Setup"), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-500 text-xs mt-1"
  }, "Connect your Korean phone number, Alien Registration Card (ARC), and bank accounts safely.")), /*#__PURE__*/React.createElement("div", {
    className: "p-4 bg-gradient-to-r from-amber-50 to-amber-100/40 rounded-2xl border border-amber-150 animate-fadeIn text-xs"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] uppercase font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md block w-fit mb-1.5"
  }, "What App is this? (\uC571 \uC131\uACA9 \uC18C\uAC1C)"), /*#__PURE__*/React.createElement("h3", {
    className: "font-extrabold text-slate-900 text-sm mb-1"
  }, "Kakao Pay (\uCE74\uCE74\uC624\uD398\uC774)"), /*#__PURE__*/React.createElement("p", {
    className: "text-amber-950 font-bold mb-1"
  }, "\uACC4\uC88C \uC1A1\uAE08, \uC624\uD504\uB77C\uC778 QR \uACB0\uC81C \uBC0F \uBAA8\uBC14\uC77C \uACF5\uACFC\uAE08 \uB0A9\uBD80\uB97C \uCC98\uB9AC\uD558\uB294 \uD544\uC218 \uAE08\uC735 \uC194\uB8E8\uC158"), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-600 italic mb-2"
  }, "The central digital wallet for easy money transfers, QR codes, and quick billing in Korea."), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-550 leading-relaxed font-normal"
  }, "Connects your domestic checking account directly to send quick transfers and finish store checkouts.")), /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-50 p-4 rounded-2xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
    className: "text-xs text-slate-800 block"
  }, "Download Kakao Pay standalone App"), /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] text-slate-500"
  }, "Pay bills, make simple transfers and scan barcodes.")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2"
  }, /*#__PURE__*/React.createElement("a", {
    href: APP_LINKS.kakaoPay.ios,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "bg-slate-900 hover:bg-slate-800 text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors"
  }, "App Store ", /*#__PURE__*/React.createElement(ExternalLink, {
    size: 12
  })), /*#__PURE__*/React.createElement("a", {
    href: APP_LINKS.kakaoPay.android,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "bg-slate-900 hover:bg-slate-800 text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors"
  }, "Play Store ", /*#__PURE__*/React.createElement(ExternalLink, {
    size: 12
  })), /*#__PURE__*/React.createElement("a", {
    href: APP_LINKS.kakaoPay.web,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors"
  }, "Tistory Setup Info ", /*#__PURE__*/React.createElement(ExternalLink, {
    size: 12
  })))), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center bg-slate-50 p-4 rounded-xl border border-slate-100"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold text-slate-500"
  }, "Step ", currentStep + 1, " of ", KAKAO_PAY_STEPS.length), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-1"
  }, KAKAO_PAY_STEPS.map(function (_, idx) {
    return /*#__PURE__*/React.createElement("div", {
      key: idx,
      onClick: function onClick() {
        return setCurrentStep(idx);
      },
      className: "h-2 w-6 rounded-full cursor-pointer transition-all ".concat(idx === currentStep ? 'bg-indigo-600' : idx < currentStep ? 'bg-indigo-300' : 'bg-slate-200')
    });
  }))), /*#__PURE__*/React.createElement("div", {
    className: "bg-gradient-to-br from-indigo-900 via-indigo-950 to-violet-950 text-white rounded-3xl p-6 md:p-8 relative min-h-[220px] flex flex-col justify-between overflow-hidden shadow-xl animate-fadeIn"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute right-0 top-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute left-1/3 bottom-0 w-24 h-24 bg-violet-500/10 rounded-full blur-xl"
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-indigo-300 font-extrabold text-xs tracking-wider uppercase bg-white/10 px-2.5 py-1 rounded-md w-fit mb-4"
  }, "Stage ", KAKAO_PAY_STEPS[currentStep].step, ": Authentication"), /*#__PURE__*/React.createElement("h3", {
    className: "text-xl md:text-2xl font-bold"
  }, KAKAO_PAY_STEPS[currentStep].title), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-300 text-xs mt-3 leading-relaxed max-w-2xl"
  }, KAKAO_PAY_STEPS[currentStep].desc)), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center mt-8 pt-4 border-t border-white/10 relative z-10"
  }, /*#__PURE__*/React.createElement("button", {
    disabled: currentStep === 0,
    onClick: function onClick() {
      return setCurrentStep(function (prev) {
        return prev - 1;
      });
    },
    className: "text-xs font-bold text-slate-300 hover:text-white disabled:opacity-35 disabled:cursor-not-allowed flex items-center gap-1"
  }, "Previous"), currentStep < KAKAO_PAY_STEPS.length - 1 ? /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setCurrentStep(function (prev) {
        return prev + 1;
      });
    },
    className: "bg-indigo-500 hover:bg-indigo-400 text-white text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-1 shadow-lg"
  }, "Next Step", /*#__PURE__*/React.createElement(ChevronRight, {
    size: 14
  })) : /*#__PURE__*/React.createElement("span", {
    className: "text-xs bg-emerald-500 text-white font-extrabold px-3 py-1.5 rounded-full flex items-center gap-1"
  }, /*#__PURE__*/React.createElement(Check, {
    size: 14
  }), " Setup Completed!"))), /*#__PURE__*/React.createElement("div", {
    className: "p-4 rounded-2xl bg-amber-50 border border-amber-100"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-bold text-amber-800 text-xs flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement(AlertCircle, {
    size: 16,
    className: "text-amber-700"
  }), "Stuck on ARS Call Verification? (Step 5)"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-amber-700/90 mt-1 leading-relaxed"
  }, "When you receive the phone call, it's completely in Korean. You do not need to speak back. All you need to do is look at the 2-digit number shown on your Kakao Pay registration screen, type it into your mobile calling dial pad, and wait for the automated voice call to drop on its own."))), activeTab === 'phrasebook' && /*#__PURE__*/React.createElement("div", {
    className: "space-y-6 animate-fadeIn text-slate-700"
  }, /*#__PURE__*/React.createElement("div", {
    className: "border-b border-slate-100 pb-4"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-2xl font-bold text-slate-800"
  }, "Survival Korean Dictionary"), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-500 text-xs mt-1"
  }, "Copy-paste handy phrases into Coupang, Karrot, or Baemin to communicate like a native Korean.")), /*#__PURE__*/React.createElement("div", {
    className: "space-y-8"
  }, PHRASEBOOK.map(function (section, sectIdx) {
    return /*#__PURE__*/React.createElement("div", {
      key: sectIdx,
      className: "space-y-3"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-xs font-bold text-indigo-600 bg-indigo-50/50 px-3 py-1.5 rounded-lg w-fit border border-indigo-100/40"
    }, section.category), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 md:grid-cols-2 gap-4"
    }, section.phrases.map(function (phrase, phraseIdx) {
      var uniqueId = "phrase-".concat(sectIdx, "-").concat(phraseIdx);
      return /*#__PURE__*/React.createElement("div", {
        key: phraseIdx,
        className: "border border-slate-100 rounded-xl p-4 bg-slate-50/30 flex flex-col justify-between hover:bg-slate-50 hover:border-slate-200 transition-colors"
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        className: "flex justify-between items-start gap-2"
      }, /*#__PURE__*/React.createElement("div", {
        className: "space-y-1"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-sm font-extrabold text-slate-900 select-all block"
      }, phrase.kr), /*#__PURE__*/React.createElement("span", {
        className: "text-[11px] font-semibold text-slate-450 block italic bg-slate-100/80 px-2 py-0.5 rounded border border-slate-200/40 w-fit"
      }, "\uD83D\uDDE3\uFE0F \"", phrase.pron, "\"")), /*#__PURE__*/React.createElement("div", {
        className: "flex gap-1 shrink-0"
      }, /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return handleSpeak(phrase.kr);
        },
        title: "Listen to Korean pronunciation",
        className: "p-1 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
      }, /*#__PURE__*/React.createElement(Volume2, {
        size: 16
      })), /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return handleCopy(phrase.kr, uniqueId);
        },
        title: "Copy to clipboard",
        className: "p-1 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
      }, /*#__PURE__*/React.createElement(Copy, {
        size: 16
      })))), /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-indigo-700 font-semibold mt-2"
      }, phrase.en)), /*#__PURE__*/React.createElement("div", {
        className: "mt-3 text-[11px] text-slate-400 border-t border-slate-100/80 pt-2 italic"
      }, "Used for: ", phrase.useCase));
    })));
  }))), activeTab === 'ai-helper' && /*#__PURE__*/React.createElement("div", {
    className: "space-y-6 animate-fadeIn"
  }, /*#__PURE__*/React.createElement("div", {
    className: "border-b border-slate-100 pb-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-2xl font-bold text-slate-800"
  }, "K-App Chat Companion"), /*#__PURE__*/React.createElement("span", {
    className: "bg-emerald-100 text-emerald-800 text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider"
  }, "Powered by Gemini 2.5")), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-500 text-xs mt-1"
  }, "Translate texts from Korean delivery drivers or second-hand marketplace sellers, and generate polite replies instantly.")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-12 gap-6 text-xs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-5 space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-50 p-4 rounded-2xl border border-slate-200"
  }, /*#__PURE__*/React.createElement("label", {
    className: "block text-[10px] font-bold text-slate-600 uppercase tracking-wider mb-2"
  }, "What did you receive or want to say?"), /*#__PURE__*/React.createElement("textarea", {
    rows: 6,
    value: aiInput,
    onChange: function onChange(e) {
      return setAiInput(e.target.value);
    },
    placeholder: "Example: '\uBB38 \uC55E\uC5D0 \uB450\uACE0 \uBCA8 \uB20C\uB7EC \uB2EC\uB77C\uB294 \uBB38\uC790 \uBC1B\uC558\uB294\uB370 \uB2F5\uC7A5 \uC5B4\uB5BB\uAC8C \uD574\uC694?' OR paste Korean driver text like: '\uBC30\uB2EC\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uAC10\uC0AC\uD569\uB2C8\uB2E4.'",
    className: "w-full bg-white border border-slate-200 rounded-xl p-3 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 resize-none"
  }), /*#__PURE__*/React.createElement("div", {
    className: "mt-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-bold text-slate-400 block mb-1.5"
  }, "Or click a typical scenario preset:"), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-1.5"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setAiInput("배달원 기사님이 '문 앞이 아니라 경비실에 보관해 달라고 하셨나요?' 라고 문자 왔을때 답변");
    },
    className: "bg-white hover:bg-slate-100 text-[9px] text-slate-600 px-2 py-1 rounded border border-slate-200"
  }, "Delivery Guard Room Check"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setAiInput("당근마켓에서 '혹시 5000원 깎아주실 수 있나요?' 라고 구매자가 물어봤는데 단호하고 정중하게 거절하는 답변");
    },
    className: "bg-white hover:bg-slate-100 text-[9px] text-slate-600 px-2 py-1 rounded border border-slate-200"
  }, "Polite Price Negociation Decline"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setAiInput("Coupang seller said: '상품 재고가 소진되어 배송이 3일 지연됩니다. 죄송합니다.' What does this mean?");
    },
    className: "bg-white hover:bg-slate-100 text-[9px] text-slate-600 px-2 py-1 rounded border border-slate-200"
  }, "Coupang Shipping Delay Alert"))), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return callGeminiAI(aiInput);
    },
    disabled: aiLoading || !aiInput.trim(),
    className: "w-full mt-4 bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-bold py-2.5 rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5 shadow-md shadow-emerald-950/10"
  }, aiLoading ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin"
  }), "Processing Language Context...") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Sparkles, {
    size: 16
  }), "Analyze & Get Replies")))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-7"
  }, aiLoading ? /*#__PURE__*/React.createElement("div", {
    className: "border border-dashed border-emerald-200 bg-emerald-50/20 rounded-2xl p-12 text-center flex flex-col justify-center items-center h-full min-h-[300px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-12 h-12 rounded-full border-4 border-emerald-500/20 border-t-emerald-600 animate-spin"
  }), /*#__PURE__*/React.createElement(Sparkles, {
    className: "text-emerald-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse",
    size: 18
  })), /*#__PURE__*/React.createElement("h4", {
    className: "font-bold text-slate-700 mt-4 text-xs"
  }, "Decoding Cultural Nuance..."), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-400 text-[11px] mt-1 max-w-xs leading-relaxed"
  }, "Generating highly polite honorific structures suited for Korean delivery agents or sellers.")) : aiError ? /*#__PURE__*/React.createElement("div", {
    className: "border border-red-100 bg-red-50/50 rounded-2xl p-6 text-center h-full min-h-[300px] flex flex-col justify-center items-center"
  }, /*#__PURE__*/React.createElement(AlertCircle, {
    className: "text-red-500 mb-2",
    size: 32
  }), /*#__PURE__*/React.createElement("h4", {
    className: "font-bold text-red-800 text-xs"
  }, "An Error Occurred"), /*#__PURE__*/React.createElement("p", {
    className: "text-red-600 text-[11px] mt-1 max-w-sm"
  }, aiError)) : aiOutput ? /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-4 bg-slate-50 border border-slate-200 rounded-2xl"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block"
  }, "Context Summary"), /*#__PURE__*/React.createElement("h4", {
    className: "font-bold text-slate-800 text-xs mt-1"
  }, aiOutput.summary), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-slate-600 mt-2 leading-relaxed bg-white p-3 rounded-lg border border-slate-100"
  }, aiOutput.analysis)), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block"
  }, "Polite Korean Reply Suggestions"), aiOutput.translations.map(function (trans, idx) {
    return /*#__PURE__*/React.createElement("div", {
      key: idx,
      className: "bg-white border border-slate-100 shadow-sm rounded-xl p-4 flex gap-3 relative overflow-hidden group"
    }, /*#__PURE__*/React.createElement("div", {
      className: "absolute left-0 top-0 bottom-0 w-1.5 bg-emerald-500"
    }), /*#__PURE__*/React.createElement("div", {
      className: "flex-1 space-y-1 ml-1"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-1.5"
    }, /*#__PURE__*/React.createElement("span", {
      className: "bg-emerald-50 text-emerald-700 text-[10px] font-bold px-1.5 py-0.5 rounded"
    }, "Option ", idx + 1), /*#__PURE__*/React.createElement("span", {
      className: "text-[11px] text-slate-400 italic font-medium"
    }, trans.context)), /*#__PURE__*/React.createElement("p", {
      className: "text-xs font-extrabold text-slate-800 select-all pt-1 leading-relaxed"
    }, trans.korean), /*#__PURE__*/React.createElement("p", {
      className: "text-[11px] text-slate-500 pt-0.5 flex items-center gap-1"
    }, /*#__PURE__*/React.createElement(ArrowLeftRight, {
      size: 10,
      className: "text-slate-400 shrink-0"
    }), trans.english)), /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col gap-1 shrink-0 self-center"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return handleSpeak(trans.korean);
      },
      className: "p-1.5 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors",
      title: "Listen to Korean"
    }, /*#__PURE__*/React.createElement(Volume2, {
      size: 16
    })), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return handleCopy(trans.korean, "ai-copy-".concat(idx));
      },
      className: "p-1.5 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors",
      title: "Copy response text"
    }, /*#__PURE__*/React.createElement(Copy, {
      size: 16
    }))));
  }))) : /*#__PURE__*/React.createElement("div", {
    className: "border border-dashed border-slate-200 rounded-2xl p-12 text-center h-full min-h-[300px] flex flex-col justify-center items-center"
  }, /*#__PURE__*/React.createElement(Sparkles, {
    className: "text-slate-300 mb-3",
    size: 40
  }), /*#__PURE__*/React.createElement("h4", {
    className: "font-bold text-slate-500 text-xs"
  }, "Awaiting Your Input"), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-400 text-[11px] mt-1 max-w-xs leading-relaxed"
  }, "Input a Korean text message you received, or specify what you want to send. Our AI parses and generates responses."))))))), /*#__PURE__*/React.createElement("footer", {
    className: "bg-slate-900 text-slate-400 text-xs py-8 border-t border-slate-800 shrink-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "font-bold text-slate-300"
  }, "Smart Korea \u2014 International Student Guide"), /*#__PURE__*/React.createElement("p", {
    className: "mt-1 text-[11px] text-slate-500"
  }, "Helping global residents navigate and utilize South Korea's daily applications.")), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-4"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setActiveTab('home');
    },
    className: "hover:text-white transition-colors"
  }, "Home"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setActiveTab('apps');
    },
    className: "hover:text-white transition-colors"
  }, "App Directory"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setActiveTab('secondhand');
    },
    className: "hover:text-white transition-colors"
  }, "Secondhand Guide"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setActiveTab('phrasebook');
    },
    className: "hover:text-white transition-colors"
  }, "Phrasebook")))));
}
var root = ReactDOM.createRoot(document.getElementById('root'));
root.render(/*#__PURE__*/React.createElement(App, null));