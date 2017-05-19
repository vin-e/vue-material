/*!
* Vue Material v0.7.1
* Made with love by Marcos Moura
* Released under the MIT License.
*/   
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueMaterial"] = factory();
	else
		root["VueMaterial"] = factory();
})(this, (function() {
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 379);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach((function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    }))
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var margin = 8;

var isAboveOfViewport = function isAboveOfViewport(element, position) {
  return position.top <= margin - parseInt(getComputedStyle(element).marginTop, 10);
};

var isBelowOfViewport = function isBelowOfViewport(element, position) {
  return position.top + element.offsetHeight + margin >= window.innerHeight - parseInt(getComputedStyle(element).marginTop, 10);
};

var isOnTheLeftOfViewport = function isOnTheLeftOfViewport(element, position) {
  return position.left <= margin - parseInt(getComputedStyle(element).marginLeft, 10);
};

var isOnTheRightOfViewport = function isOnTheRightOfViewport(element, position) {
  return position.left + element.offsetWidth + margin >= window.innerWidth - parseInt(getComputedStyle(element).marginLeft, 10);
};

var getInViewPosition = function getInViewPosition(element, position) {
  var computedStyle = getComputedStyle(element);

  if (isAboveOfViewport(element, position)) {
    position.top = margin - parseInt(computedStyle.marginTop, 10);
  }

  if (isOnTheLeftOfViewport(element, position)) {
    position.left = margin - parseInt(computedStyle.marginLeft, 10);
  }

  if (isOnTheRightOfViewport(element, position)) {
    position.left = window.innerWidth - margin - element.offsetWidth - parseInt(computedStyle.marginLeft, 10);
  }

  if (isBelowOfViewport(element, position)) {
    position.top = window.innerHeight - margin - element.offsetHeight - parseInt(computedStyle.marginTop, 10);
  }

  return position;
};

/* harmony default export */ __webpack_exports__["a"] = (getInViewPosition);
module.exports = exports["default"];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)(module)))

/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(4)
var getDaysInMonth = __webpack_require__(7)

/**
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be added
 * @returns {Date} the new date with the months added
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * var result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 */
function addMonths (dirtyDate, dirtyAmount) {
  var date = parse(dirtyDate)
  var amount = Number(dirtyAmount)
  var desiredMonth = date.getMonth() + amount
  var dateWithDesiredMonth = new Date(0)
  dateWithDesiredMonth.setFullYear(date.getFullYear(), desiredMonth, 1)
  dateWithDesiredMonth.setHours(0, 0, 0, 0)
  var daysInMonth = getDaysInMonth(dateWithDesiredMonth)
  // Set the last day of the new month
  // if the original date was the last day of the longer month
  date.setMonth(desiredMonth, Math.min(daysInMonth, date.getDate()))
  return date
}

module.exports = addMonths


/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

var startOfDay = __webpack_require__(8)

var MILLISECONDS_IN_MINUTE = 60000
var MILLISECONDS_IN_DAY = 86400000

/**
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar days
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * var result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 */
function differenceInCalendarDays (dirtyDateLeft, dirtyDateRight) {
  var startOfDayLeft = startOfDay(dirtyDateLeft)
  var startOfDayRight = startOfDay(dirtyDateRight)

  var timestampLeft = startOfDayLeft.getTime() -
    startOfDayLeft.getTimezoneOffset() * MILLISECONDS_IN_MINUTE
  var timestampRight = startOfDayRight.getTime() -
    startOfDayRight.getTimezoneOffset() * MILLISECONDS_IN_MINUTE

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a day is not constant
  // (e.g. it's different in the day of the daylight saving time clock shift)
  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY)
}

module.exports = differenceInCalendarDays


/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

var getDayOfYear = __webpack_require__(140)
var getISOWeek = __webpack_require__(141)
var getISOYear = __webpack_require__(16)
var parse = __webpack_require__(4)
var isValid = __webpack_require__(18)
var enLocale = __webpack_require__(152)

/**
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format.
 *
 * Accepted tokens:
 * | Unit                    | Token | Result examples                  |
 * |-------------------------|-------|----------------------------------|
 * | Month                   | M     | 1, 2, ..., 12                    |
 * |                         | Mo    | 1st, 2nd, ..., 12th              |
 * |                         | MM    | 01, 02, ..., 12                  |
 * |                         | MMM   | Jan, Feb, ..., Dec               |
 * |                         | MMMM  | January, February, ..., December |
 * | Quarter                 | Q     | 1, 2, 3, 4                       |
 * |                         | Qo    | 1st, 2nd, 3rd, 4th               |
 * | Day of month            | D     | 1, 2, ..., 31                    |
 * |                         | Do    | 1st, 2nd, ..., 31st              |
 * |                         | DD    | 01, 02, ..., 31                  |
 * | Day of year             | DDD   | 1, 2, ..., 366                   |
 * |                         | DDDo  | 1st, 2nd, ..., 366th             |
 * |                         | DDDD  | 001, 002, ..., 366               |
 * | Day of week             | d     | 0, 1, ..., 6                     |
 * |                         | do    | 0th, 1st, ..., 6th               |
 * |                         | dd    | Su, Mo, ..., Sa                  |
 * |                         | ddd   | Sun, Mon, ..., Sat               |
 * |                         | dddd  | Sunday, Monday, ..., Saturday    |
 * | Day of ISO week         | E     | 1, 2, ..., 7                     |
 * | ISO week                | W     | 1, 2, ..., 53                    |
 * |                         | Wo    | 1st, 2nd, ..., 53rd              |
 * |                         | WW    | 01, 02, ..., 53                  |
 * | Year                    | YY    | 00, 01, ..., 99                  |
 * |                         | YYYY  | 1900, 1901, ..., 2099            |
 * | ISO week-numbering year | GG    | 00, 01, ..., 99                  |
 * |                         | GGGG  | 1900, 1901, ..., 2099            |
 * | AM/PM                   | A     | AM, PM                           |
 * |                         | a     | am, pm                           |
 * |                         | aa    | a.m., p.m.                       |
 * | Hour                    | H     | 0, 1, ... 23                     |
 * |                         | HH    | 00, 01, ... 23                   |
 * |                         | h     | 1, 2, ..., 12                    |
 * |                         | hh    | 01, 02, ..., 12                  |
 * | Minute                  | m     | 0, 1, ..., 59                    |
 * |                         | mm    | 00, 01, ..., 59                  |
 * | Second                  | s     | 0, 1, ..., 59                    |
 * |                         | ss    | 00, 01, ..., 59                  |
 * | 1/10 of second          | S     | 0, 1, ..., 9                     |
 * | 1/100 of second         | SS    | 00, 01, ..., 99                  |
 * | Millisecond             | SSS   | 000, 001, ..., 999               |
 * | Timezone                | Z     | -01:00, +00:00, ... +12:00       |
 * |                         | ZZ    | -0100, +0000, ..., +1200         |
 * | Seconds timestamp       | X     | 512969520                        |
 * | Milliseconds timestamp  | x     | 512969520900                     |
 *
 * The characters wrapped in square brackets are escaped.
 *
 * The result may vary by locale.
 *
 * @param {Date|String|Number} date - the original date
 * @param {String} [format='YYYY-MM-DDTHH:mm:ss.SSSZ'] - the string of tokens
 * @param {Object} [options] - the object with options
 * @param {Object} [options.locale=enLocale] - the locale object
 * @returns {String} the formatted date string
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * var result = format(
 *   new Date(2014, 1, 11),
 *   'MM/DD/YYYY'
 * )
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * var eoLocale = require('date-fns/locale/eo')
 * var result = format(
 *   new Date(2014, 6, 2),
 *   'Do [de] MMMM YYYY',
 *   {locale: eoLocale}
 * )
 * //=> '2-a de julio 2014'
 */
function format (dirtyDate, dirtyFormatStr, dirtyOptions) {
  var formatStr = dirtyFormatStr ? String(dirtyFormatStr) : 'YYYY-MM-DDTHH:mm:ss.SSSZ'
  var options = dirtyOptions || {}

  var locale = options.locale
  var localeFormatters = enLocale.format.formatters
  var formattingTokensRegExp = enLocale.format.formattingTokensRegExp
  if (locale && locale.format && locale.format.formatters) {
    localeFormatters = locale.format.formatters

    if (locale.format.formattingTokensRegExp) {
      formattingTokensRegExp = locale.format.formattingTokensRegExp
    }
  }

  var date = parse(dirtyDate)

  if (!isValid(date)) {
    return 'Invalid Date'
  }

  var formatFn = buildFormatFn(formatStr, localeFormatters, formattingTokensRegExp)

  return formatFn(date)
}

var formatters = {
  // Month: 1, 2, ..., 12
  'M': function (date) {
    return date.getMonth() + 1
  },

  // Month: 01, 02, ..., 12
  'MM': function (date) {
    return addLeadingZeros(date.getMonth() + 1, 2)
  },

  // Quarter: 1, 2, 3, 4
  'Q': function (date) {
    return Math.ceil((date.getMonth() + 1) / 3)
  },

  // Day of month: 1, 2, ..., 31
  'D': function (date) {
    return date.getDate()
  },

  // Day of month: 01, 02, ..., 31
  'DD': function (date) {
    return addLeadingZeros(date.getDate(), 2)
  },

  // Day of year: 1, 2, ..., 366
  'DDD': function (date) {
    return getDayOfYear(date)
  },

  // Day of year: 001, 002, ..., 366
  'DDDD': function (date) {
    return addLeadingZeros(getDayOfYear(date), 3)
  },

  // Day of week: 0, 1, ..., 6
  'd': function (date) {
    return date.getDay()
  },

  // Day of ISO week: 1, 2, ..., 7
  'E': function (date) {
    return date.getDay() || 7
  },

  // ISO week: 1, 2, ..., 53
  'W': function (date) {
    return getISOWeek(date)
  },

  // ISO week: 01, 02, ..., 53
  'WW': function (date) {
    return addLeadingZeros(getISOWeek(date), 2)
  },

  // Year: 00, 01, ..., 99
  'YY': function (date) {
    return addLeadingZeros(date.getFullYear(), 4).substr(2)
  },

  // Year: 1900, 1901, ..., 2099
  'YYYY': function (date) {
    return addLeadingZeros(date.getFullYear(), 4)
  },

  // ISO week-numbering year: 00, 01, ..., 99
  'GG': function (date) {
    return String(getISOYear(date)).substr(2)
  },

  // ISO week-numbering year: 1900, 1901, ..., 2099
  'GGGG': function (date) {
    return getISOYear(date)
  },

  // Hour: 0, 1, ... 23
  'H': function (date) {
    return date.getHours()
  },

  // Hour: 00, 01, ..., 23
  'HH': function (date) {
    return addLeadingZeros(date.getHours(), 2)
  },

  // Hour: 1, 2, ..., 12
  'h': function (date) {
    var hours = date.getHours()
    if (hours === 0) {
      return 12
    } else if (hours > 12) {
      return hours % 12
    } else {
      return hours
    }
  },

  // Hour: 01, 02, ..., 12
  'hh': function (date) {
    return addLeadingZeros(formatters['h'](date), 2)
  },

  // Minute: 0, 1, ..., 59
  'm': function (date) {
    return date.getMinutes()
  },

  // Minute: 00, 01, ..., 59
  'mm': function (date) {
    return addLeadingZeros(date.getMinutes(), 2)
  },

  // Second: 0, 1, ..., 59
  's': function (date) {
    return date.getSeconds()
  },

  // Second: 00, 01, ..., 59
  'ss': function (date) {
    return addLeadingZeros(date.getSeconds(), 2)
  },

  // 1/10 of second: 0, 1, ..., 9
  'S': function (date) {
    return Math.floor(date.getMilliseconds() / 100)
  },

  // 1/100 of second: 00, 01, ..., 99
  'SS': function (date) {
    return addLeadingZeros(Math.floor(date.getMilliseconds() / 10), 2)
  },

  // Millisecond: 000, 001, ..., 999
  'SSS': function (date) {
    return addLeadingZeros(date.getMilliseconds(), 3)
  },

  // Timezone: -01:00, +00:00, ... +12:00
  'Z': function (date) {
    return formatTimezone(date.getTimezoneOffset(), ':')
  },

  // Timezone: -0100, +0000, ... +1200
  'ZZ': function (date) {
    return formatTimezone(date.getTimezoneOffset())
  },

  // Seconds timestamp: 512969520
  'X': function (date) {
    return Math.floor(date.getTime() / 1000)
  },

  // Milliseconds timestamp: 512969520900
  'x': function (date) {
    return date.getTime()
  }
}

function buildFormatFn (formatStr, localeFormatters, formattingTokensRegExp) {
  var array = formatStr.match(formattingTokensRegExp)
  var length = array.length

  var i
  var formatter
  for (i = 0; i < length; i++) {
    formatter = localeFormatters[array[i]] || formatters[array[i]]
    if (formatter) {
      array[i] = formatter
    } else {
      array[i] = removeFormattingTokens(array[i])
    }
  }

  return function (date) {
    var output = ''
    for (var i = 0; i < length; i++) {
      if (array[i] instanceof Function) {
        output += array[i](date, formatters)
      } else {
        output += array[i]
      }
    }
    return output
  }
}

function removeFormattingTokens (input) {
  if (input.match(/\[[\s\S]/)) {
    return input.replace(/^\[|]$/g, '')
  }
  return input.replace(/\\/g, '')
}

function formatTimezone (offset, delimeter) {
  delimeter = delimeter || ''
  var sign = offset > 0 ? '-' : '+'
  var absOffset = Math.abs(offset)
  var hours = Math.floor(absOffset / 60)
  var minutes = absOffset % 60
  return sign + addLeadingZeros(hours, 2) + delimeter + addLeadingZeros(minutes, 2)
}

function addLeadingZeros (number, targetLength) {
  var output = Math.abs(number).toString()
  while (output.length < targetLength) {
    output = '0' + output
  }
  return output
}

module.exports = format


/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(4)
var startOfYear = __webpack_require__(159)
var differenceInCalendarDays = __webpack_require__(138)

/**
 * @category Day Helpers
 * @summary Get the day of the year of the given date.
 *
 * @description
 * Get the day of the year of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the day of year
 *
 * @example
 * // Which day of the year is 2 July 2014?
 * var result = getDayOfYear(new Date(2014, 6, 2))
 * //=> 183
 */
function getDayOfYear (dirtyDate) {
  var date = parse(dirtyDate)
  var diff = differenceInCalendarDays(date, startOfYear(date))
  var dayOfYear = diff + 1
  return dayOfYear
}

module.exports = getDayOfYear


/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(4)
var startOfISOWeek = __webpack_require__(9)
var startOfISOYear = __webpack_require__(156)

var MILLISECONDS_IN_WEEK = 604800000

/**
 * @category ISO Week Helpers
 * @summary Get the ISO week of the given date.
 *
 * @description
 * Get the ISO week of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the ISO week
 *
 * @example
 * // Which week of the ISO-week numbering year is 2 January 2005?
 * var result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */
function getISOWeek (dirtyDate) {
  var date = parse(dirtyDate)
  var diff = startOfISOWeek(date).getTime() - startOfISOYear(date).getTime()

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1
}

module.exports = getISOWeek


/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(4)

/**
 * @category Common Helpers
 * @summary Is the first date before the second one?
 *
 * @description
 * Is the first date before the second one?
 *
 * @param {Date|String|Number} date - the date that should be before the other one to return true
 * @param {Date|String|Number} dateToCompare - the date to compare with
 * @returns {Boolean} the first date is before the second date
 *
 * @example
 * // Is 10 July 1989 before 11 February 1987?
 * var result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> false
 */
function isBefore (dirtyDate, dirtyDateToCompare) {
  var date = parse(dirtyDate)
  var dateToCompare = parse(dirtyDateToCompare)
  return date.getTime() < dateToCompare.getTime()
}

module.exports = isBefore


/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

var startOfDay = __webpack_require__(8)

/**
 * @category Day Helpers
 * @summary Are the given dates in the same day?
 *
 * @description
 * Are the given dates in the same day?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * var result = isSameDay(
 *   new Date(2014, 8, 4, 6, 0),
 *   new Date(2014, 8, 4, 18, 0)
 * )
 * //=> true
 */
function isSameDay (dirtyDateLeft, dirtyDateRight) {
  var dateLeftStartOfDay = startOfDay(dirtyDateLeft)
  var dateRightStartOfDay = startOfDay(dirtyDateRight)

  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime()
}

module.exports = isSameDay


/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(4)

/**
 * @category Month Helpers
 * @summary Are the given dates in the same month?
 *
 * @description
 * Are the given dates in the same month?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same month
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same month?
 * var result = isSameMonth(
 *   new Date(2014, 8, 2),
 *   new Date(2014, 8, 25)
 * )
 * //=> true
 */
function isSameMonth (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var dateRight = parse(dirtyDateRight)
  return dateLeft.getFullYear() === dateRight.getFullYear() &&
    dateLeft.getMonth() === dateRight.getMonth()
}

module.exports = isSameMonth


/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(4)

/**
 * @category Year Helpers
 * @summary Are the given dates in the same year?
 *
 * @description
 * Are the given dates in the same year?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same year
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same year?
 * var result = isSameYear(
 *   new Date(2014, 8, 2),
 *   new Date(2014, 8, 25)
 * )
 * //=> true
 */
function isSameYear (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var dateRight = parse(dirtyDateRight)
  return dateLeft.getFullYear() === dateRight.getFullYear()
}

module.exports = isSameYear


/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

var isSameMonth = __webpack_require__(144)

/**
 * @category Month Helpers
 * @summary Is the given date in the same month as the current date?
 *
 * @description
 * Is the given date in the same month as the current date?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is in this month
 *
 * @example
 * // If today is 25 September 2014, is 15 September 2014 in this month?
 * var result = isThisMonth(new Date(2014, 8, 15))
 * //=> true
 */
function isThisMonth (dirtyDate) {
  return isSameMonth(new Date(), dirtyDate)
}

module.exports = isThisMonth


/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

var isSameYear = __webpack_require__(145)

/**
 * @category Year Helpers
 * @summary Is the given date in the same year as the current date?
 *
 * @description
 * Is the given date in the same year as the current date?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is in this year
 *
 * @example
 * // If today is 25 September 2014, is 2 July 2014 in this year?
 * var result = isThisYear(new Date(2014, 6, 2))
 * //=> true
 */
function isThisYear (dirtyDate) {
  return isSameYear(new Date(), dirtyDate)
}

module.exports = isThisYear


/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

var startOfDay = __webpack_require__(8)

/**
 * @category Day Helpers
 * @summary Is the given date today?
 *
 * @description
 * Is the given date today?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is today
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * var result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */
function isToday (dirtyDate) {
  return startOfDay(dirtyDate).getTime() === startOfDay(new Date()).getTime()
}

module.exports = isToday


/***/ }),

/***/ 149:
/***/ (function(module, exports) {

var commonFormatterKeys = [
  'M', 'MM', 'Q', 'D', 'DD', 'DDD', 'DDDD', 'd',
  'E', 'W', 'WW', 'YY', 'YYYY', 'GG', 'GGGG',
  'H', 'HH', 'h', 'hh', 'm', 'mm',
  's', 'ss', 'S', 'SS', 'SSS',
  'Z', 'ZZ', 'X', 'x'
]

function buildFormattingTokensRegExp (formatters) {
  var formatterKeys = []
  for (var key in formatters) {
    if (formatters.hasOwnProperty(key)) {
      formatterKeys.push(key)
    }
  }

  var formattingTokens = commonFormatterKeys
    .concat(formatterKeys)
    .sort()
    .reverse()
  var formattingTokensRegExp = new RegExp(
    '(\\[[^\\[]*\\])|(\\\\)?' + '(' + formattingTokens.join('|') + '|.)', 'g'
  )

  return formattingTokensRegExp
}

module.exports = buildFormattingTokensRegExp


/***/ }),

/***/ 150:
/***/ (function(module, exports) {

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: 'less than a second',
      other: 'less than {{count}} seconds'
    },

    xSeconds: {
      one: '1 second',
      other: '{{count}} seconds'
    },

    halfAMinute: 'half a minute',

    lessThanXMinutes: {
      one: 'less than a minute',
      other: 'less than {{count}} minutes'
    },

    xMinutes: {
      one: '1 minute',
      other: '{{count}} minutes'
    },

    aboutXHours: {
      one: 'about 1 hour',
      other: 'about {{count}} hours'
    },

    xHours: {
      one: '1 hour',
      other: '{{count}} hours'
    },

    xDays: {
      one: '1 day',
      other: '{{count}} days'
    },

    aboutXMonths: {
      one: 'about 1 month',
      other: 'about {{count}} months'
    },

    xMonths: {
      one: '1 month',
      other: '{{count}} months'
    },

    aboutXYears: {
      one: 'about 1 year',
      other: 'about {{count}} years'
    },

    xYears: {
      one: '1 year',
      other: '{{count}} years'
    },

    overXYears: {
      one: 'over 1 year',
      other: 'over {{count}} years'
    },

    almostXYears: {
      one: 'almost 1 year',
      other: 'almost {{count}} years'
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var result
    if (typeof distanceInWordsLocale[token] === 'string') {
      result = distanceInWordsLocale[token]
    } else if (count === 1) {
      result = distanceInWordsLocale[token].one
    } else {
      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return 'in ' + result
      } else {
        return result + ' ago'
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(149)

function buildFormatLocale () {
  // Note: in English, the names of days of the week and months are capitalized.
  // If you are making a new locale based on this one, check if the same is true for the language you're working on.
  // Generally, formatted dates should look like they are in the middle of a sentence,
  // e.g. in Spanish language the weekdays and months should be in the lowercase.
  var months3char = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  var monthsFull = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  var weekdays2char = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
  var weekdays3char = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  var weekdaysFull = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  var meridiemUppercase = ['AM', 'PM']
  var meridiemLowercase = ['am', 'pm']
  var meridiemFull = ['a.m.', 'p.m.']

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // AM, PM
    'A': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
    },

    // am, pm
    'a': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
    },

    // a.m., p.m.
    'aa': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
    }
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach((function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return ordinal(formatters[formatterToken](date))
    }
  }))

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

function ordinal (number) {
  var rem100 = number % 100
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st'
      case 2:
        return number + 'nd'
      case 3:
        return number + 'rd'
    }
  }
  return number + 'th'
}

module.exports = buildFormatLocale


/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(150)
var buildFormatLocale = __webpack_require__(151)

/**
 * @category Locales
 * @summary English locale.
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(4)

/**
 * @category Day Helpers
 * @summary Set the day of the month to the given date.
 *
 * @description
 * Set the day of the month to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} dayOfMonth - the day of the month of the new date
 * @returns {Date} the new date with the day of the month setted
 *
 * @example
 * // Set the 30th day of the month to 1 September 2014:
 * var result = setDate(new Date(2014, 8, 1), 30)
 * //=> Tue Sep 30 2014 00:00:00
 */
function setDate (dirtyDate, dirtyDayOfMonth) {
  var date = parse(dirtyDate)
  var dayOfMonth = Number(dirtyDayOfMonth)
  date.setDate(dayOfMonth)
  return date
}

module.exports = setDate


/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(4)
var getDaysInMonth = __webpack_require__(7)

/**
 * @category Month Helpers
 * @summary Set the month to the given date.
 *
 * @description
 * Set the month to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} month - the month of the new date
 * @returns {Date} the new date with the month setted
 *
 * @example
 * // Set February to 1 September 2014:
 * var result = setMonth(new Date(2014, 8, 1), 1)
 * //=> Sat Feb 01 2014 00:00:00
 */
function setMonth (dirtyDate, dirtyMonth) {
  var date = parse(dirtyDate)
  var month = Number(dirtyMonth)
  var year = date.getFullYear()
  var day = date.getDate()

  var dateWithDesiredMonth = new Date(0)
  dateWithDesiredMonth.setFullYear(year, month, 15)
  dateWithDesiredMonth.setHours(0, 0, 0, 0)
  var daysInMonth = getDaysInMonth(dateWithDesiredMonth)
  // Set the last day of the new month
  // if the original date was the last day of the longer month
  date.setMonth(month, Math.min(day, daysInMonth))
  return date
}

module.exports = setMonth


/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(4)

/**
 * @category Year Helpers
 * @summary Set the year to the given date.
 *
 * @description
 * Set the year to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} year - the year of the new date
 * @returns {Date} the new date with the year setted
 *
 * @example
 * // Set year 2013 to 1 September 2014:
 * var result = setYear(new Date(2014, 8, 1), 2013)
 * //=> Sun Sep 01 2013 00:00:00
 */
function setYear (dirtyDate, dirtyYear) {
  var date = parse(dirtyDate)
  var year = Number(dirtyYear)
  date.setFullYear(year)
  return date
}

module.exports = setYear


/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var getISOYear = __webpack_require__(16)
var startOfISOWeek = __webpack_require__(9)

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the start of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the start of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of an ISO year
 *
 * @example
 * // The start of an ISO week-numbering year for 2 July 2005:
 * var result = startOfISOYear(new Date(2005, 6, 2))
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfISOYear (dirtyDate) {
  var year = getISOYear(dirtyDate)
  var fourthOfJanuary = new Date(0)
  fourthOfJanuary.setFullYear(year, 0, 4)
  fourthOfJanuary.setHours(0, 0, 0, 0)
  var date = startOfISOWeek(fourthOfJanuary)
  return date
}

module.exports = startOfISOYear


/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(4)

/**
 * @category Month Helpers
 * @summary Return the start of a month for the given date.
 *
 * @description
 * Return the start of a month for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of a month
 *
 * @example
 * // The start of a month for 2 September 2014 11:55:00:
 * var result = startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfMonth (dirtyDate) {
  var date = parse(dirtyDate)
  date.setDate(1)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfMonth


/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(4)

/**
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @param {Object} [options] - the object with options
 * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), {weekStartsOn: 1})
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek (dirtyDate, dirtyOptions) {
  var weekStartsOn = dirtyOptions ? (Number(dirtyOptions.weekStartsOn) || 0) : 0

  var date = parse(dirtyDate)
  var day = date.getDay()
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn

  date.setDate(date.getDate() - diff)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfWeek


/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(4)

/**
 * @category Year Helpers
 * @summary Return the start of a year for the given date.
 *
 * @description
 * Return the start of a year for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of a year
 *
 * @example
 * // The start of a year for 2 September 2014 11:55:00:
 * var result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Jan 01 2014 00:00:00
 */
function startOfYear (dirtyDate) {
  var cleanDate = parse(dirtyDate)
  var date = new Date(0)
  date.setFullYear(cleanDate.getFullYear(), 0, 1)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfYear


/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(4)
var startOfISOWeek = __webpack_require__(9)

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the ISO week-numbering year of the given date.
 *
 * @description
 * Get the ISO week-numbering year of the given date,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the ISO week-numbering year
 *
 * @example
 * // Which ISO-week numbering year is 2 January 2005?
 * var result = getISOYear(new Date(2005, 0, 2))
 * //=> 2004
 */
function getISOYear (dirtyDate) {
  var date = parse(dirtyDate)
  var year = date.getFullYear()

  var fourthOfJanuaryOfNextYear = new Date(0)
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4)
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0)
  var startOfNextYear = startOfISOWeek(fourthOfJanuaryOfNextYear)

  var fourthOfJanuaryOfThisYear = new Date(0)
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4)
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0)
  var startOfThisYear = startOfISOWeek(fourthOfJanuaryOfThisYear)

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year
  } else {
    return year - 1
  }
}

module.exports = getISOYear


/***/ }),

/***/ 17:
/***/ (function(module, exports) {

/**
 * @category Common Helpers
 * @summary Is the given argument an instance of Date?
 *
 * @description
 * Is the given argument an instance of Date?
 *
 * @param {*} argument - the argument to check
 * @returns {Boolean} the given argument is an instance of Date
 *
 * @example
 * // Is 'mayonnaise' a Date?
 * var result = isDate('mayonnaise')
 * //=> false
 */
function isDate (argument) {
  return argument instanceof Date
}

module.exports = isDate


/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

var isDate = __webpack_require__(17)

/**
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {Date} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} argument must be an instance of Date
 *
 * @example
 * // For the valid date:
 * var result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the invalid date:
 * var result = isValid(new Date(''))
 * //=> false
 */
function isValid (dirtyDate) {
  if (isDate(dirtyDate)) {
    return !isNaN(dirtyDate)
  } else {
    throw new TypeError(toString.call(dirtyDate) + ' is not an instance of Date')
  }
}

module.exports = isValid


/***/ }),

/***/ 182:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {// Theme mixin

// Grab the closest ancestor component's `md-theme` attribute OR grab the
// `md-name` attribute from an `<md-theme>` component.
function getAncestorThemeName(component) {
  if (!component) {
    return null;
  }

  var name = component.mdTheme;

  if (!name && component.$options._componentTag === 'md-theme') {
    name = component.mdName;
  }

  return name || getAncestorThemeName(component.$parent);
}

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    mdTheme: String
  },
  computed: {
    mdEffectiveTheme: function mdEffectiveTheme() {
      return getAncestorThemeName(this) || this.$material.currentTheme;
    },
    themeClass: function themeClass() {
      return this.$material.prefix + this.mdEffectiveTheme;
    }
  },
  watch: {
    mdTheme: function mdTheme(value) {
      this.$material.useTheme(value);
    }
  },
  beforeMount: function beforeMount() {
    var localTheme = this.mdTheme;

    if (localTheme) {
      this.$material.useTheme(localTheme);
    }
  }
});
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)(module)))

/***/ }),

/***/ 203:
/***/ (function(module, exports) {

module.exports = ".THEME_NAME.md-datepicker-popup.md-select-date .md-datepicker-year-select{color:PRIMARY-CONTRAST-0.54}.THEME_NAME.md-datepicker-popup.md-select-date .md-datepicker-year-select:hover{color:PRIMARY-CONTRAST-0.87}.THEME_NAME.md-datepicker-popup.md-select-month .md-datepicker-year-select,.THEME_NAME.md-datepicker-popup.md-select-month .md-datepicker-date-select{color:PRIMARY-CONTRAST-0.54}.THEME_NAME.md-datepicker-popup.md-select-month .md-datepicker-year-select:hover,.THEME_NAME.md-datepicker-popup.md-select-month .md-datepicker-date-select:hover{color:PRIMARY-CONTRAST-0.87}.THEME_NAME.md-datepicker-popup.md-select-year .md-datepicker-date-select{color:PRIMARY-CONTRAST-0.54}.THEME_NAME.md-datepicker-popup.md-select-year .md-datepicker-date-select:hover{color:PRIMARY-CONTRAST-0.87}.THEME_NAME.md-datepicker-popup .md-datepicker-body{background-color:BACKGROUND-COLOR}.THEME_NAME.md-datepicker-popup .md-datepicker-header{background-color:PRIMARY-COLOR;color:PRIMARY-CONTRAST-0.9999}.THEME_NAME.md-datepicker-popup .md-datepicker-week-days{color:BACKGROUND-CONTRAST-0.54}.THEME_NAME.md-datepicker-popup .md-datepicker-days{color:BACKGROUND-CONTRAST-0.8}.THEME_NAME.md-datepicker-popup .md-datepicker-days .md-button:hover{background-color:PRIMARY-COLOR;color:PRIMARY-CONTRAST}.THEME_NAME .md-button.md-current:not(.md-raised){color:PRIMARY-COLOR}.THEME_NAME .md-button.md-selected:not(.md-raised){background-color:PRIMARY-COLOR;color:PRIMARY-CONTRAST}\n"

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(182)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(72),
  /* template */
  __webpack_require__(349),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdDatePicker_vue__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdDatePicker_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mdDatePicker_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdDatePicker_theme__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdDatePicker_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdDatePicker_theme__);
/* harmony export (immutable) */ __webpack_exports__["default"] = install;



function install(Vue) {
  Vue.component('md-datepicker', Vue.extend(__WEBPACK_IMPORTED_MODULE_0__mdDatePicker_vue___default.a));

  Vue.material.styles.push(__WEBPACK_IMPORTED_MODULE_1__mdDatePicker_theme___default.a);
}
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)(module)))

/***/ }),

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var getClosestVueParent = function getClosestVueParent($parent, cssClass) {
  if (!$parent || !$parent.$el || !$parent.$el.classList || $parent._uid === 0) {
    return false;
  }

  if ($parent.$el.classList.contains(cssClass)) {
    return $parent;
  }

  return getClosestVueParent($parent.$parent, cssClass);
};

/* harmony default export */ __webpack_exports__["a"] = (getClosestVueParent);
module.exports = exports["default"];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)(module)))

/***/ }),

/***/ 349:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-datepicker"
  }, [_c('md-icon', {
    nativeOn: {
      "click": function($event) {
        _vm.openPicker($event)
      }
    }
  }, [_vm._v("event")]), _vm._v(" "), _c('md-input', {
    ref: "pickerInput",
    attrs: {
      "type": "date",
      "id": _vm.id,
      "name": _vm.name,
      "required": _vm.required,
      "placeholder": _vm.placeholder,
      "disabled": _vm.disabled
    },
    nativeOn: {
      "focus": function($event) {
        _vm.openOnFocus($event)
      },
      "input": function($event) {
        _vm.changeValue($event)
      }
    },
    model: {
      value: (_vm.modelDate),
      callback: function($$v) {
        _vm.modelDate = $$v
      },
      expression: "modelDate"
    }
  }), _vm._v(" "), _c('div', {
    ref: "pickerElement",
    staticClass: "md-datepicker-popup",
    class: [_vm.themeClass, _vm.classes],
    style: (_vm.styles)
  }, [_c('div', {
    staticClass: "md-datepicker-header"
  }, [_c('span', {
    staticClass: "md-datepicker-year-select",
    on: {
      "click": _vm.showYearPicker
    }
  }, [_vm._v(_vm._s(_vm.selectedDate.getFullYear()))]), _vm._v(" "), _c('div', {
    staticClass: "md-datepicker-date-select",
    on: {
      "click": _vm.showDatePicker
    }
  }, [_c('strong', {
    staticClass: "md-datepicker-dayname"
  }, [_vm._v(_vm._s(_vm.locale.shortDays[_vm.selectedDate.getDay()]) + ",")]), _vm._v(" "), _c('strong', {
    staticClass: "md-datepicker-monthname"
  }, [_vm._v(_vm._s(_vm.locale.shortMonths[_vm.selectedDate.getMonth()]))]), _vm._v(" "), _c('strong', {
    staticClass: "md-datepicker-day"
  }, [_vm._v(_vm._s(_vm.selectedDate.getDate()))])])]), _vm._v(" "), _c('div', {
    staticClass: "md-datepicker-body"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.currentView === 'date'),
      expression: "currentView === 'date'"
    }],
    staticClass: "md-datepicker-calendar"
  }, [_c('div', {
    staticClass: "md-datepicker-controls"
  }, [_c('button', {
    staticClass: "md-button md-icon-button",
    on: {
      "click": _vm.previousMonth
    }
  }, [_c('md-icon', [_vm._v("keyboard_arrow_left")])], 1), _vm._v(" "), _c('button', {
    staticClass: "md-button md-icon-button",
    on: {
      "click": _vm.nextMonth
    }
  }, [_c('md-icon', [_vm._v("keyboard_arrow_right")])], 1)]), _vm._v(" "), _c('transition-group', {
    staticClass: "md-calendar-container",
    class: {
      'md-previous': _vm.lastAction === 'previous', 'md-next': _vm.lastAction === 'next'
    },
    attrs: {
      "tag": "div",
      "name": "slide-month",
      "appear": ""
    }
  }, _vm._l(([_vm.currentDate]), (function(month) {
    return _c('div', {
      key: month,
      staticClass: "md-datepicker-month"
    }, [_c('md-button', {
      staticClass: "md-current-date",
      nativeOn: {
        "click": function($event) {
          _vm.showMonthPicker($event)
        }
      }
    }, [_vm._v(_vm._s(_vm.locale.months[month.getMonth()]) + " " + _vm._s(month.getFullYear()))]), _vm._v(" "), _c('div', {
      staticClass: "md-datepicker-week-days"
    }, _vm._o(_vm._l((_vm.locale.shorterDays), (function(day) {
      return _c('span', [_vm._v(_vm._s(day))])
    })), 0, month)), _vm._v(" "), _c('div', {
      staticClass: "md-datepicker-days"
    }, [_vm._o(_vm._l((_vm.startOfMonth(month).getDay()), (function(day) {
      return _c('span', {
        staticClass: "md-empty"
      })
    })), 1, month), _vm._v(" "), _vm._l((_vm.getDaysInMonth(month)), (function(day) {
      return _c('button', {
        key: day,
        staticClass: "md-button md-icon-button",
        class: {
          'md-current': _vm.isToday(day),
            'md-selected': _vm.isSelectedDay(day)
        },
        on: {
          "click": function($event) {
            _vm.setDate(day)
          }
        }
      }, [_vm._v("\n                " + _vm._s(day) + "\n              ")])
    }))], 2)], 1)
  })))], 1), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.currentView === 'year'),
      expression: "currentView === 'year'"
    }],
    staticClass: "md-datepicker-years"
  }, _vm._l((_vm.visibleYears()), (function(year) {
    return _c('button', {
      key: year,
      staticClass: "md-button md-dense md-datepicker-year",
      class: [{
          'md-current': _vm.isThisYear(year),
          'md-selected': _vm.isSelectedYear(year),
        },
        'data-' + year
      ],
      on: {
        "click": function($event) {
          _vm.setYear(year)
        }
      }
    }, [_vm._v("\n          " + _vm._s(year) + "\n        ")])
  }))), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.currentView === 'month'),
      expression: "currentView === 'month'"
    }],
    staticClass: "md-datepicker-months"
  }, _vm._l((_vm.locale.months), (function(month, index) {
    return _c('button', {
      key: month,
      staticClass: "md-button md-dense md-datepicker-month",
      class: {
        'md-current': _vm.isThisMonth(index),
          'md-selected': _vm.isSelectedMonth(index),
      },
      on: {
        "click": function($event) {
          _vm.setMonth(index)
        }
      }
    }, [_vm._v("\n          " + _vm._s(month) + "\n        ")])
  }))), _vm._v(" "), _c('div', {
    staticClass: "md-datepicker-actions md-dialog-actions"
  }, [_c('md-button', {
    nativeOn: {
      "click": function($event) {
        _vm.closePicker($event)
      }
    }
  }, [_vm._v("Cancel")]), _vm._v(" "), _c('md-button', {
    staticClass: "md-primary",
    nativeOn: {
      "click": function($event) {
        _vm.closePicker($event)
      }
    }
  }, [_vm._v("Ok")])], 1)])]), _vm._v(" "), _c('md-backdrop', {
    ref: "pickerBackdrop",
    staticClass: "md-datepicker-backdrop",
    class: _vm.classes,
    on: {
      "close": _vm.closePicker
    }
  })], 1)
},staticRenderFns: []}

/***/ }),

/***/ 379:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(27);


/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

var isDate = __webpack_require__(17)

var MILLISECONDS_IN_HOUR = 3600000
var MILLISECONDS_IN_MINUTE = 60000
var DEFAULT_ADDITIONAL_DIGITS = 2

var parseTokenDateTimeDelimeter = /[T ]/
var parseTokenPlainTime = /:/

// year tokens
var parseTokenYY = /^(\d{2})$/
var parseTokensYYY = [
  /^([+-]\d{2})$/, // 0 additional digits
  /^([+-]\d{3})$/, // 1 additional digit
  /^([+-]\d{4})$/ // 2 additional digits
]

var parseTokenYYYY = /^(\d{4})/
var parseTokensYYYYY = [
  /^([+-]\d{4})/, // 0 additional digits
  /^([+-]\d{5})/, // 1 additional digit
  /^([+-]\d{6})/ // 2 additional digits
]

// date tokens
var parseTokenMM = /^-(\d{2})$/
var parseTokenDDD = /^-?(\d{3})$/
var parseTokenMMDD = /^-?(\d{2})-?(\d{2})$/
var parseTokenWww = /^-?W(\d{2})$/
var parseTokenWwwD = /^-?W(\d{2})-?(\d{1})$/

// time tokens
var parseTokenHH = /^(\d{2}([.,]\d*)?)$/
var parseTokenHHMM = /^(\d{2}):?(\d{2}([.,]\d*)?)$/
var parseTokenHHMMSS = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/

// timezone tokens
var parseTokenTimezone = /([Z+-].*)$/
var parseTokenTimezoneZ = /^(Z)$/
var parseTokenTimezoneHH = /^([+-])(\d{2})$/
var parseTokenTimezoneHHMM = /^([+-])(\d{2}):?(\d{2})$/

/**
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If an argument is a string, the function tries to parse it.
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If all above fails, the function passes the given argument to Date constructor.
 *
 * @param {Date|String|Number} argument - the value to convert
 * @param {Object} [options] - the object with options
 * @param {0 | 1 | 2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * var result = parse('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Parse string '+02014101',
 * // if the additional number of digits in the extended year format is 1:
 * var result = parse('+02014101', {additionalDigits: 1})
 * //=> Fri Apr 11 2014 00:00:00
 */
function parse (argument, dirtyOptions) {
  if (isDate(argument)) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime())
  } else if (typeof argument !== 'string') {
    return new Date(argument)
  }

  var options = dirtyOptions || {}
  var additionalDigits = options.additionalDigits
  if (additionalDigits == null) {
    additionalDigits = DEFAULT_ADDITIONAL_DIGITS
  } else {
    additionalDigits = Number(additionalDigits)
  }

  var dateStrings = splitDateString(argument)

  var parseYearResult = parseYear(dateStrings.date, additionalDigits)
  var year = parseYearResult.year
  var restDateString = parseYearResult.restDateString

  var date = parseDate(restDateString, year)

  if (date) {
    var timestamp = date.getTime()
    var time = 0
    var offset

    if (dateStrings.time) {
      time = parseTime(dateStrings.time)
    }

    if (dateStrings.timezone) {
      offset = parseTimezone(dateStrings.timezone)
    } else {
      // get offset accurate to hour in timezones that change offset
      offset = new Date(timestamp + time).getTimezoneOffset()
      offset = new Date(timestamp + time + offset * MILLISECONDS_IN_MINUTE).getTimezoneOffset()
    }

    return new Date(timestamp + time + offset * MILLISECONDS_IN_MINUTE)
  } else {
    return new Date(argument)
  }
}

function splitDateString (dateString) {
  var dateStrings = {}
  var array = dateString.split(parseTokenDateTimeDelimeter)
  var timeString

  if (parseTokenPlainTime.test(array[0])) {
    dateStrings.date = null
    timeString = array[0]
  } else {
    dateStrings.date = array[0]
    timeString = array[1]
  }

  if (timeString) {
    var token = parseTokenTimezone.exec(timeString)
    if (token) {
      dateStrings.time = timeString.replace(token[1], '')
      dateStrings.timezone = token[1]
    } else {
      dateStrings.time = timeString
    }
  }

  return dateStrings
}

function parseYear (dateString, additionalDigits) {
  var parseTokenYYY = parseTokensYYY[additionalDigits]
  var parseTokenYYYYY = parseTokensYYYYY[additionalDigits]

  var token

  // YYYY or ±YYYYY
  token = parseTokenYYYY.exec(dateString) || parseTokenYYYYY.exec(dateString)
  if (token) {
    var yearString = token[1]
    return {
      year: parseInt(yearString, 10),
      restDateString: dateString.slice(yearString.length)
    }
  }

  // YY or ±YYY
  token = parseTokenYY.exec(dateString) || parseTokenYYY.exec(dateString)
  if (token) {
    var centuryString = token[1]
    return {
      year: parseInt(centuryString, 10) * 100,
      restDateString: dateString.slice(centuryString.length)
    }
  }

  // Invalid ISO-formatted year
  return {
    year: null
  }
}

function parseDate (dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) {
    return null
  }

  var token
  var date
  var month
  var week

  // YYYY
  if (dateString.length === 0) {
    date = new Date(0)
    date.setUTCFullYear(year)
    return date
  }

  // YYYY-MM
  token = parseTokenMM.exec(dateString)
  if (token) {
    date = new Date(0)
    month = parseInt(token[1], 10) - 1
    date.setUTCFullYear(year, month)
    return date
  }

  // YYYY-DDD or YYYYDDD
  token = parseTokenDDD.exec(dateString)
  if (token) {
    date = new Date(0)
    var dayOfYear = parseInt(token[1], 10)
    date.setUTCFullYear(year, 0, dayOfYear)
    return date
  }

  // YYYY-MM-DD or YYYYMMDD
  token = parseTokenMMDD.exec(dateString)
  if (token) {
    date = new Date(0)
    month = parseInt(token[1], 10) - 1
    var day = parseInt(token[2], 10)
    date.setUTCFullYear(year, month, day)
    return date
  }

  // YYYY-Www or YYYYWww
  token = parseTokenWww.exec(dateString)
  if (token) {
    week = parseInt(token[1], 10) - 1
    return dayOfISOYear(year, week)
  }

  // YYYY-Www-D or YYYYWwwD
  token = parseTokenWwwD.exec(dateString)
  if (token) {
    week = parseInt(token[1], 10) - 1
    var dayOfWeek = parseInt(token[2], 10) - 1
    return dayOfISOYear(year, week, dayOfWeek)
  }

  // Invalid ISO-formatted date
  return null
}

function parseTime (timeString) {
  var token
  var hours
  var minutes

  // hh
  token = parseTokenHH.exec(timeString)
  if (token) {
    hours = parseFloat(token[1].replace(',', '.'))
    return (hours % 24) * MILLISECONDS_IN_HOUR
  }

  // hh:mm or hhmm
  token = parseTokenHHMM.exec(timeString)
  if (token) {
    hours = parseInt(token[1], 10)
    minutes = parseFloat(token[2].replace(',', '.'))
    return (hours % 24) * MILLISECONDS_IN_HOUR +
      minutes * MILLISECONDS_IN_MINUTE
  }

  // hh:mm:ss or hhmmss
  token = parseTokenHHMMSS.exec(timeString)
  if (token) {
    hours = parseInt(token[1], 10)
    minutes = parseInt(token[2], 10)
    var seconds = parseFloat(token[3].replace(',', '.'))
    return (hours % 24) * MILLISECONDS_IN_HOUR +
      minutes * MILLISECONDS_IN_MINUTE +
      seconds * 1000
  }

  // Invalid ISO-formatted time
  return null
}

function parseTimezone (timezoneString) {
  var token
  var absoluteOffset

  // Z
  token = parseTokenTimezoneZ.exec(timezoneString)
  if (token) {
    return 0
  }

  // ±hh
  token = parseTokenTimezoneHH.exec(timezoneString)
  if (token) {
    absoluteOffset = parseInt(token[2], 10) * 60
    return (token[1] === '+') ? -absoluteOffset : absoluteOffset
  }

  // ±hh:mm or ±hhmm
  token = parseTokenTimezoneHHMM.exec(timezoneString)
  if (token) {
    absoluteOffset = parseInt(token[2], 10) * 60 + parseInt(token[3], 10)
    return (token[1] === '+') ? -absoluteOffset : absoluteOffset
  }

  return 0
}

function dayOfISOYear (isoYear, week, day) {
  week = week || 0
  day = day || 0
  var date = new Date(0)
  date.setUTCFullYear(isoYear, 0, 4)
  var fourthOfJanuaryDay = date.getUTCDay() || 7
  var diff = week * 7 + day + 1 - fourthOfJanuaryDay
  date.setUTCDate(date.getUTCDate() + diff)
  return date
}

module.exports = parse


/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {function transitionEndEventName() {
  var el = document.createElement('span');
  var transitions = {
    transition: 'transitionend',
    OTransition: 'oTransitionEnd',
    MozTransition: 'transitionend',
    WebkitTransition: 'webkitTransitionEnd'
  };

  for (var transition in transitions) {
    if (el.style[transition] !== undefined) {
      return transitions[transition];
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (transitionEndEventName());
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)(module)))

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(4)

/**
 * @category Month Helpers
 * @summary Get the number of days in a month of the given date.
 *
 * @description
 * Get the number of days in a month of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the number of days in a month
 *
 * @example
 * // How many days are in February 2000?
 * var result = getDaysInMonth(new Date(2000, 1))
 * //=> 29
 */
function getDaysInMonth (dirtyDate) {
  var date = parse(dirtyDate)
  var year = date.getFullYear()
  var monthIndex = date.getMonth()
  var lastDayOfMonth = new Date(0)
  lastDayOfMonth.setFullYear(year, monthIndex + 1, 0)
  lastDayOfMonth.setHours(0, 0, 0, 0)
  return lastDayOfMonth.getDate()
}

module.exports = getDaysInMonth


/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_components_mdTheme_mixin__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_utils_getClosestVueParent__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_utils_getInViewPosition__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_utils_transitionEndEventName__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_date_fns_format__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_date_fns_format___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_date_fns_format__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_date_fns_parse__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_date_fns_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_date_fns_parse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_date_fns_start_of_month__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_date_fns_start_of_month___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_date_fns_start_of_month__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_date_fns_add_months__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_date_fns_add_months___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_date_fns_add_months__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_date_fns_get_days_in_month__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_date_fns_get_days_in_month___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_date_fns_get_days_in_month__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_date_fns_set_date__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_date_fns_set_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_date_fns_set_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_date_fns_set_month__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_date_fns_set_month___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_date_fns_set_month__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_date_fns_set_year__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_date_fns_set_year___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_date_fns_set_year__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_date_fns_is_today__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_date_fns_is_today___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_date_fns_is_today__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_date_fns_is_same_day__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_date_fns_is_same_day___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_date_fns_is_same_day__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_date_fns_is_this_month__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_date_fns_is_this_month___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_date_fns_is_this_month__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_date_fns_is_this_year__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_date_fns_is_this_year___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_date_fns_is_this_year__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_date_fns_is_before__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_date_fns_is_before___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_date_fns_is_before__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_date_fns_is_valid__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_date_fns_is_valid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_date_fns_is_valid__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




















/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    value: [String, Date],
    id: String,
    name: String,
    disabled: Boolean,
    required: Boolean,
    placeholder: String,
    mdOpenOnFocus: Boolean
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_0__core_components_mdTheme_mixin__["a" /* default */]],
  data() {
    return {
      rootElement: null,
      pickerElement: null,
      backdropElement: null,
      pickerPosition: {
        top: '0px',
        left: '0px'
      },
      active: false,
      visibleYears() {
        let years = [];
        let startYear = this.locale.startYear;

        while (startYear <= this.locale.endYear) {
          years.push(startYear++);
        }

        return years;
      },
      modelDate: this.value,
      currentDate: __WEBPACK_IMPORTED_MODULE_17_date_fns_is_valid___default()(this.value) ? __WEBPACK_IMPORTED_MODULE_5_date_fns_parse___default()(this.value) : Date.now(),
      selectedDate: __WEBPACK_IMPORTED_MODULE_17_date_fns_is_valid___default()(this.value) ? __WEBPACK_IMPORTED_MODULE_5_date_fns_parse___default()(this.value) : Date.now(),
      createdMonths: [__WEBPACK_IMPORTED_MODULE_7_date_fns_add_months___default()(this.value, -1), this.value, __WEBPACK_IMPORTED_MODULE_7_date_fns_add_months___default()(this.value, 1)],
      currentView: 'date',
      lastAction: null
    };
  },
  computed: {
    classes() {
      return {
        'md-active': this.active,
        'md-select-date': this.currentView === 'date',
        'md-select-month': this.currentView === 'month',
        'md-select-year': this.currentView === 'year'
      };
    },
    styles() {
      return {
        top: this.pickerPosition.top,
        left: this.pickerPosition.left
      };
    },
    locale() {
      return this.$material.locale;
    }
  },
  watch: {
    selectedDate(selected) {
      this.modelDate = __WEBPACK_IMPORTED_MODULE_4_date_fns_format___default()(selected, this.locale.dateFormat);
    }
  },
  methods: {
    startOfMonth(month) {
      return __WEBPACK_IMPORTED_MODULE_6_date_fns_start_of_month___default()(month);
    },
    getDaysInMonth(month) {
      return __WEBPACK_IMPORTED_MODULE_8_date_fns_get_days_in_month___default()(month);
    },
    isThisMonth(month) {
      return __WEBPACK_IMPORTED_MODULE_14_date_fns_is_this_month___default()(__WEBPACK_IMPORTED_MODULE_10_date_fns_set_month___default()(new Date(), month));
    },
    isThisYear(year) {
      return __WEBPACK_IMPORTED_MODULE_15_date_fns_is_this_year___default()(__WEBPACK_IMPORTED_MODULE_11_date_fns_set_year___default()(new Date(), year));
    },
    isToday(day) {
      return __WEBPACK_IMPORTED_MODULE_12_date_fns_is_today___default()(__WEBPACK_IMPORTED_MODULE_9_date_fns_set_date___default()(this.currentDate, day));
    },
    isSelectedDay(day) {
      return __WEBPACK_IMPORTED_MODULE_13_date_fns_is_same_day___default()(this.selectedDate, __WEBPACK_IMPORTED_MODULE_9_date_fns_set_date___default()(this.selectedDate, day));
    },
    isSelectedMonth(month) {
      return __WEBPACK_IMPORTED_MODULE_13_date_fns_is_same_day___default()(this.selectedDate, __WEBPACK_IMPORTED_MODULE_10_date_fns_set_month___default()(this.selectedDate, month));
    },
    isSelectedYear(year) {
      return __WEBPACK_IMPORTED_MODULE_13_date_fns_is_same_day___default()(this.selectedDate, __WEBPACK_IMPORTED_MODULE_11_date_fns_set_year___default()(this.selectedDate, year));
    },
    setYear(year) {
      this.setModelValue(__WEBPACK_IMPORTED_MODULE_11_date_fns_set_year___default()(this.currentDate, year));
    },
    setDate(day) {
      this.setModelValue(__WEBPACK_IMPORTED_MODULE_9_date_fns_set_date___default()(this.currentDate, day));
    },
    setMonth(month) {
      this.setModelValue(__WEBPACK_IMPORTED_MODULE_10_date_fns_set_month___default()(this.currentDate, month));
    },
    setModelValue(date) {
      this.selectedDate = date;
      this.$emit('input', date);
    },
    changeValue() {
      const newDate = __WEBPACK_IMPORTED_MODULE_5_date_fns_parse___default()(this.$refs.pickerInput.$el.value);

      this.lastAction = null;
      this.setModelValue(__WEBPACK_IMPORTED_MODULE_17_date_fns_is_valid___default()(newDate) ? newDate : this.selectedDate);
    },
    openOnFocus() {
      if (this.mdOpenOnFocus) {
        this.openPicker();
      }
    },
    calculatePopupPosition() {
      window.requestAnimationFrame(() => {
        const inputContainerRect = this.parentContainer.$el.getBoundingClientRect();
        let position = {};

        position.top = inputContainerRect.top + this.parentContainer.$el.offsetHeight;
        position.left = inputContainerRect.left;

        position = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_utils_getInViewPosition__["a" /* default */])(this.pickerElement, position);

        this.pickerPosition.top = position.top + window.pageYOffset + 'px';
        this.pickerPosition.left = position.left + window.pageXOffset + 'px';
      });
    },
    openPicker() {
      window.addEventListener('resize', this.calculatePopupPosition);
      this.calculatePopupPosition();
      this.rootElement.appendChild(this.pickerElement);
      this.rootElement.appendChild(this.backdropElement);
      getComputedStyle(this.pickerElement).top;
      getComputedStyle(this.backdropElement).top;
      this.active = true;
      this.currentDate = __WEBPACK_IMPORTED_MODULE_5_date_fns_parse___default()(this.value);
      this.selectedDate = __WEBPACK_IMPORTED_MODULE_5_date_fns_parse___default()(this.value);
    },
    closePicker() {
      const cleanUp = () => {
        this.pickerElement.removeEventListener(__WEBPACK_IMPORTED_MODULE_3__core_utils_transitionEndEventName__["a" /* default */], cleanUp);
        this.rootElement.removeChild(this.pickerElement);
        this.rootElement.removeChild(this.backdropElement);
        this.currentDate = new Date();
      };

      window.removeEventListener('resize', this.calculatePopupPosition);
      this.pickerElement.removeEventListener(__WEBPACK_IMPORTED_MODULE_3__core_utils_transitionEndEventName__["a" /* default */], cleanUp);
      this.pickerElement.addEventListener(__WEBPACK_IMPORTED_MODULE_3__core_utils_transitionEndEventName__["a" /* default */], cleanUp);
      this.showDatePicker();
      this.active = false;
    },
    setLastAction() {
      if (!__WEBPACK_IMPORTED_MODULE_14_date_fns_is_this_month___default()(this.currentDate, this.selectedDate)) {
        if (__WEBPACK_IMPORTED_MODULE_16_date_fns_is_before___default()(this.currentDate, this.selectedDate)) {
          this.lastAction = 'next';
        } else {
          this.lastAction = 'previous';
        }
      } else {
        this.lastAction = null;
      }
    },
    showDatePicker() {
      this.setLastAction();

      this.$nextTick(() => {
        this.currentView = 'date';
        this.currentDate = this.selectedDate;
      });
    },
    showYearPicker() {
      this.lastAction = null;
      this.currentView = 'year';
      this.currentDate = this.selectedDate;

      this.$nextTick(() => {
        this.pickerElement.querySelector(`.data-${this.selectedDate.getFullYear()}`).scrollIntoViewIfNeeded(true);
      });
    },
    showMonthPicker() {
      this.lastAction = null;
      this.currentView = 'month';
      this.currentDate = this.selectedDate;
    },
    previousMonth() {
      this.currentDate = __WEBPACK_IMPORTED_MODULE_7_date_fns_add_months___default()(this.currentDate, -1);
      this.lastAction = 'previous';
    },
    nextMonth() {
      this.currentDate = __WEBPACK_IMPORTED_MODULE_7_date_fns_add_months___default()(this.currentDate, 1);
      this.lastAction = 'next';
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.rootElement = this.$root.$el;
      this.parentContainer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__core_utils_getClosestVueParent__["a" /* default */])(this.$parent, 'md-input-container');
      this.pickerElement = this.$refs.pickerElement;
      this.backdropElement = this.$refs.pickerBackdrop.$el;
      this.pickerElement.parentNode.removeChild(this.pickerElement);
      this.backdropElement.parentNode.removeChild(this.backdropElement);
      this.setModelValue(this.currentDate);
    });
  },
  beforeDestroy() {}
});

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(4)

/**
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * var result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay (dirtyDate) {
  var date = parse(dirtyDate)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfDay


/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

var startOfWeek = __webpack_require__(158)

/**
 * @category ISO Week Helpers
 * @summary Return the start of an ISO week for the given date.
 *
 * @description
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of an ISO week
 *
 * @example
 * // The start of an ISO week for 2 September 2014 11:55:00:
 * var result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfISOWeek (dirtyDate) {
  return startOfWeek(dirtyDate, {weekStartsOn: 1})
}

module.exports = startOfISOWeek


/***/ })

/******/ });
}));