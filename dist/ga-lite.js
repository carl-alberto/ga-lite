(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["galite"] = factory();
	else
		root["galite"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addTracker;
/* harmony export (immutable) */ __webpack_exports__["b"] = getTracker;
/* unused harmony export removeTracker */
/* unused harmony export getAllTrackers */
/* unused harmony export clearStore */
var store = {};

function addTracker(trackerName, tracker) {
  store[trackerName] = tracker;
}

function getTracker(trackerName) {
  return store[trackerName];
}

function removeTracker(trackerName) {
  delete store[trackerName];
}

function getAllTrackers() {
  return Object.keys(store).map(function (key) {
    return store[key];
  });
}

function clearStore() {
  return Object.keys(store).forEach(removeTracker);
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DEFAULT_TRACKER_NAME; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__send_to__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__get_user_id__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__build_event_url__ = __webpack_require__(8);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var DEFAULT_TRACKER_NAME = 't0';

var Tracker = function () {
  function Tracker(trackingId) {
    _classCallCheck(this, Tracker);

    this.trackingId = trackingId;
    this.userId = Object(__WEBPACK_IMPORTED_MODULE_1__get_user_id__["a" /* default */])();
    this._sendTo = __WEBPACK_IMPORTED_MODULE_0__send_to__["a" /* default */];
    this._getTime = getTime;
  }

  _createClass(Tracker, [{
    key: 'send',
    value: function send(hitType, fieldsObject) {
      var url = Object(__WEBPACK_IMPORTED_MODULE_2__build_event_url__["a" /* default */])(hitType, this.userId, this.trackingId, this._getTime());
      this._sendTo(url, fieldsObject);
    }
  }]);

  return Tracker;
}();

/* harmony default export */ __webpack_exports__["b"] = (Tracker);


function getTime() {
  return new Date().getTime();
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = galite;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__do_not_track_enabled__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ga_lite_commands__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tracker_store__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tracker__ = __webpack_require__(1);





function galite(command) {
  // Check for doNotTrack variable. If it's present, the user has decided to
  // opt-out of the tracking, so we kill this tracking script
  if (Object(__WEBPACK_IMPORTED_MODULE_0__do_not_track_enabled__["a" /* default */])()) {
    return;
  }

  var commandFoundInGlobalCommands = !!__WEBPACK_IMPORTED_MODULE_1__ga_lite_commands__["a" /* default */][command];
  var commandFoundInTrackerMethods = !!__WEBPACK_IMPORTED_MODULE_3__tracker__["b" /* default */].prototype[command] && command !== 'constructor';

  for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  if (commandFoundInGlobalCommands) {
    __WEBPACK_IMPORTED_MODULE_1__ga_lite_commands__["a" /* default */][command].apply(__WEBPACK_IMPORTED_MODULE_1__ga_lite_commands__["a" /* default */], values);
  } else if (commandFoundInTrackerMethods) {
    var defaultTracker = Object(__WEBPACK_IMPORTED_MODULE_2__tracker_store__["b" /* getTracker */])(__WEBPACK_IMPORTED_MODULE_3__tracker__["a" /* DEFAULT_TRACKER_NAME */]);
    defaultTracker[command].apply(defaultTracker, values);
  } else {
    throw new Error('Command ' + command + ' is not available in ga-lite');
  }
}

Object.keys(__WEBPACK_IMPORTED_MODULE_1__ga_lite_commands__["a" /* default */]).forEach(function (key) {
  galite[key] = __WEBPACK_IMPORTED_MODULE_1__ga_lite_commands__["a" /* default */][key];
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = doNotTrackEnabled;
function doNotTrackEnabled() {
  var dntNumber = parseInt(navigator.msDoNotTrack || // Internet Explorer 9 and 10 vendor prefix
  window.doNotTrack || // IE 11 uses window.doNotTrack
  navigator.doNotTrack, // W3C
  10);

  return dntNumber === 1;
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__commands_create__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__commands_get_by_name__ = __webpack_require__(12);



var galiteCommands = {
  create: __WEBPACK_IMPORTED_MODULE_0__commands_create__["a" /* default */],
  getByName: __WEBPACK_IMPORTED_MODULE_1__commands_get_by_name__["a" /* default */]
};

/* harmony default export */ __webpack_exports__["a"] = (galiteCommands);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = create;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tracker_store__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tracker__ = __webpack_require__(1);



function create(trackingId, cookieDomain) {
  var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : __WEBPACK_IMPORTED_MODULE_1__tracker__["a" /* DEFAULT_TRACKER_NAME */];
  var fieldsObject = arguments[3];

  var tracker = new __WEBPACK_IMPORTED_MODULE_1__tracker__["b" /* default */](trackingId);
  Object(__WEBPACK_IMPORTED_MODULE_0__tracker_store__["a" /* addTracker */])(name, tracker);
  return tracker;
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = sendTo;
function sendTo(url) {
  if (navigator.sendBeacon) {
    navigator.sendBeacon(url);
  } else {
    try {
      var req = new window.XMLHttpRequest();
      req.open('GET', url, false);
      req.send();
    } catch (e) {
      // IE9 throws an error with cross-site XMLHttpRequest so
      // we fall back to simple image request
      var i = new window.Image();
      i.src = url;
    }
  }
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getUserId;
var USER_ID_KEY = 'uid';

function getUserId() {
  var storage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window ? window.localStorage : null;

  if (storage && storage.getItem(USER_ID_KEY)) {
    return storage.getItem(USER_ID_KEY);
  }

  var userId = Math.random() + '.' + Math.random();
  if (storage) {
    storage.setItem(USER_ID_KEY, userId);
  }

  return userId;
}

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = buildEventUrl;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__get_base_url__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__object_to_query_string__ = __webpack_require__(11);



function buildEventUrl(event, userId, trackingId, timestamp) {
  var params = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  var anonymizeIp = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

  var paramsQueryString = Object(__WEBPACK_IMPORTED_MODULE_1__object_to_query_string__["a" /* default */])(params);
  return Object(__WEBPACK_IMPORTED_MODULE_0__get_base_url__["a" /* default */])() + (paramsQueryString ? '&' + paramsQueryString : '') + (anonymizeIp ? '&aip=1' : '') + '&cid=' + userId + '&tid=' + trackingId + '&t=' + encodeURIComponent(event) + '&z=' + timestamp;
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getBaseUrl;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__get_optional_url_param__ = __webpack_require__(10);


function getBaseUrl(trackingId, userId) {
  return 'https://www.google-analytics.com/collect' + '?v=1' + '&ul=en-us' + '&de=UTF-8' + Object(__WEBPACK_IMPORTED_MODULE_0__get_optional_url_param__["a" /* default */])('dl', [document.location.href]) + Object(__WEBPACK_IMPORTED_MODULE_0__get_optional_url_param__["a" /* default */])('dt', [document.title]) + Object(__WEBPACK_IMPORTED_MODULE_0__get_optional_url_param__["a" /* default */])('sd', [window.screen.colorDepth, '-bit']) + Object(__WEBPACK_IMPORTED_MODULE_0__get_optional_url_param__["a" /* default */])('sr', [window.screen.availHeight, 'x', window.screen.availWidth]) + Object(__WEBPACK_IMPORTED_MODULE_0__get_optional_url_param__["a" /* default */])('vp', [window.innerWidth, 'x', window.innerHeight]) + Object(__WEBPACK_IMPORTED_MODULE_0__get_optional_url_param__["a" /* default */])('dr', [document.referrer]);
}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getOptionalStr;
function getOptionalStr(key) {
  var values = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (!key || values.indexOf(undefined) > -1) return '';

  return '&' + key + '=' + values.map(encodeURIComponent).join('');
};

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = objectToQueryString;
function objectToQueryString() {
  var object = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return Object.keys(object).map(function (key) {
    return [key, object[key]].map(encodeURIComponent).join('=');
  }).join('&');
}

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getByName;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tracker_store__ = __webpack_require__(0);


function getByName(name) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__tracker_store__["b" /* getTracker */])(name);
}

/***/ })
/******/ ])["default"];
});