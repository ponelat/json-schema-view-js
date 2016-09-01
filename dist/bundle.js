(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.JSONSchemaView = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
/*
 * Converts anyOf, allOf and oneOf to human readable string
*/
Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.convertXOf = convertXOf;
exports._if = _if;

function convertXOf(type) {
  return type.substring(0, 3) + ' of';
}

/*
 * if condition for ES6 template strings
 * to be used only in template string
 *
 * @example mystr = `Random is ${_if(Math.random() > 0.5)`greater than 0.5``
 *
 * @param {boolean} condition
 *
 * @returns {function} the template function
*/

function _if(condition) {
  return condition ? normal : empty;
}

function empty() {
  return '';
}
function normal(template) {
  for (var _len = arguments.length, expressions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    expressions[_key - 1] = arguments[_key];
  }

  return template.slice(1).reduce(function (accumulator, part, i) {
    return accumulator + expressions[i] + part;
  }, template[0]);
}

},{}],2:[function(require,module,exports){
'use strict';

/* globals JSONSchemaView */

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _templateObject = _taggedTemplateLiteral(['\n        <div class="any">\n          ', '\n\n          <span class="type type-any">&lt;any&gt;</span>\n\n          ', '\n        </div>\n      '], ['\n        <div class="any">\n          ', '\n\n          <span class="type type-any">&lt;any&gt;</span>\n\n          ', '\n        </div>\n      ']),
    _templateObject2 = _taggedTemplateLiteral(['\n            <a class="title"><span class="toggle-handle"></span>', ' </a>\n          '], ['\n            <a class="title"><span class="toggle-handle"></span>', ' </a>\n          ']),
    _templateObject3 = _taggedTemplateLiteral(['\n            <div class="inner description">', '</div>\n          '], ['\n            <div class="inner description">', '</div>\n          ']),
    _templateObject4 = _taggedTemplateLiteral(['\n        <div class="primitive">\n          ', '\n\n            <span class="type">', '</span>\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n          ', '\n          ', '\n        </div>\n      '], ['\n        <div class="primitive">\n          ', '\n\n            <span class="type">', '</span>\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n          ', '\n          ', '\n        </div>\n      ']),
    _templateObject5 = _taggedTemplateLiteral(['\n            <span class="required">*</span>\n          '], ['\n            <span class="required">*</span>\n          ']),
    _templateObject6 = _taggedTemplateLiteral(['\n            <span class="format">(', ')</span>\n          '], ['\n            <span class="format">(', ')</span>\n          ']),
    _templateObject7 = _taggedTemplateLiteral(['\n            <span class="range minimum">minimum:', '</span>\n          '], ['\n            <span class="range minimum">minimum:', '</span>\n          ']),
    _templateObject8 = _taggedTemplateLiteral(['\n            <span class="range exclusiveMinimum">(ex)minimum:', '</span>\n          '], ['\n            <span class="range exclusiveMinimum">(ex)minimum:', '</span>\n          ']),
    _templateObject9 = _taggedTemplateLiteral(['\n            <span class="range maximum">maximum:', '</span>\n          '], ['\n            <span class="range maximum">maximum:', '</span>\n          ']),
    _templateObject10 = _taggedTemplateLiteral(['\n            <span class="range exclusiveMaximum">(ex)maximum:', '</span>\n          '], ['\n            <span class="range exclusiveMaximum">(ex)maximum:', '</span>\n          ']),
    _templateObject11 = _taggedTemplateLiteral(['\n            <span class="range minLength">minLength:', '</span>\n          '], ['\n            <span class="range minLength">minLength:', '</span>\n          ']),
    _templateObject12 = _taggedTemplateLiteral(['\n            <span class="range maxLength">maxLength:', '</span>\n          '], ['\n            <span class="range maxLength">maxLength:', '</span>\n          ']),
    _templateObject13 = _taggedTemplateLiteral(['\n            ', '\n          '], ['\n            ', '\n          ']),
    _templateObject14 = _taggedTemplateLiteral(['', ''], ['', '']),
    _templateObject15 = _taggedTemplateLiteral(['\n        <div class="array">\n          <a class="title"><span class="toggle-handle"></span>', '<span class="opening bracket">[</span>', '</a>\n          ', '\n          <div class="inner">\n            ', '\n          </div>\n\n          ', '\n\n          ', '\n          ', '\n          ', '\n\n          ', '\n        </div>\n      '], ['\n        <div class="array">\n          <a class="title"><span class="toggle-handle"></span>', '<span class="opening bracket">[</span>', '</a>\n          ', '\n          <div class="inner">\n            ', '\n          </div>\n\n          ', '\n\n          ', '\n          ', '\n          ', '\n\n          ', '\n        </div>\n      ']),
    _templateObject16 = _taggedTemplateLiteral(['<span class="closing bracket">]</span>'], ['<span class="closing bracket">]</span>']),
    _templateObject17 = _taggedTemplateLiteral(['\n          <span>\n            <span title="items range">(', '..', ')</span>\n            ', '\n          </span>\n          '], ['\n          <span>\n            <span title="items range">(', '..', ')</span>\n            ', '\n          </span>\n          ']),
    _templateObject18 = _taggedTemplateLiteral(['<span title="unique" class="uniqueItems">♦</span>'], ['<span title="unique" class="uniqueItems">♦</span>']),
    _templateObject19 = _taggedTemplateLiteral(['\n              <div class="description">', '</div>\n            '], ['\n              <div class="description">', '</div>\n            ']),
    _templateObject20 = _taggedTemplateLiteral(['\n          <span class="closing bracket">]</span>\n          '], ['\n          <span class="closing bracket">]</span>\n          ']),
    _templateObject21 = _taggedTemplateLiteral(['\n        <div class="object">\n          <a class="title"><span\n            class="toggle-handle"></span>', ' <span\n            class="opening brace">{</span>', '</a>\n\n          <div class="inner">\n            ', '\n            <!-- children go here -->\n          </div>\n\n          ', '\n\n          ', '\n          ', '\n          ', '\n\n          ', '\n        </div>\n      '], ['\n        <div class="object">\n          <a class="title"><span\n            class="toggle-handle"></span>', ' <span\n            class="opening brace">{</span>', '</a>\n\n          <div class="inner">\n            ', '\n            <!-- children go here -->\n          </div>\n\n          ', '\n\n          ', '\n          ', '\n          ', '\n\n          ', '\n        </div>\n      ']),
    _templateObject22 = _taggedTemplateLiteral(['\n              <span class="closing brace" ng-if="isCollapsed">}</span>\n          '], ['\n              <span class="closing brace" ng-if="isCollapsed">}</span>\n          ']),
    _templateObject23 = _taggedTemplateLiteral(['\n          <span class="closing brace">}</span>\n          '], ['\n          <span class="closing brace">}</span>\n          ']),
    _templateObject24 = _taggedTemplateLiteral(['\n        <div class="inner enums">\n          <b>Enum:</b>\n        </div>\n      '], ['\n        <div class="inner enums">\n          <b>Enum:</b>\n        </div>\n      ']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _helpersJs = require('./helpers.js');

// For escaping ( see below )
var entityMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;',
  '`': '&#x60;',
  '=': '&#x3D;'
};

/**
 * Quote HTML entities ( stolen from mustache.js )
 * @param {string} html
 * @return {string} with html entities quoted
 */
function e(string) {
  return String(string).replace(/[&<>"'`=\/]/g, function fromEntityMap(s) {
    return entityMap[s];
  });
}

/**
 * @class JSONSchemaView
 *
 * A pure JavaScript component for rendering JSON Schema in HTML.
*/

var JSONSchemaView = (function () {

  /**
   * @param {object} schema The JSON Schema object
   *
   * @param {number} [open=1] his number indicates up to how many levels the
   * rendered tree should expand. Set it to `0` to make the whole tree collapsed
   * or set it to `Infinity` to expand the tree deeply
   * @param {object} options.
   *  theme {string}: one of the following options: ['dark']
  */

  function JSONSchemaView(schema, open) {
    var _this = this;

    var options = arguments.length <= 2 || arguments[2] === undefined ? { theme: null } : arguments[2];

    _classCallCheck(this, JSONSchemaView);

    this.schema = schema;
    this.open = open;
    this.options = options;
    this.isCollapsed = open <= 0;

    // if schema is an empty object which means any JOSN
    this.isAny = typeof schema === 'object' && !Array.isArray(schema) && !Object.keys(schema).filter(function (k) {
      return ['title', 'description'].indexOf(k) === -1;
    }).length;

    // Determine if a schema is an array
    this.isArray = !this.isAny && this.schema && this.schema.type === 'array';

    this.isObject = this.schema && (this.schema.type === 'object' || this.schema.properties || this.schema.anyOf || this.schema.oneof || this.schema.allOf);

    // Determine if a schema is a primitive
    this.isPrimitive = !this.isAny && !this.isArray && !this.isObject;

    //
    this.showToggle = this.schema.description || this.schema.title || this.isPrimitive && (this.schema.minimum || this.schema.maximum || this.schema.exclusiveMinimum || this.schema.exclusiveMaximum);

    // populate isRequired property down to properties
    if (this.schema && Array.isArray(this.schema.required)) {
      this.schema.required.forEach(function (requiredProperty) {
        if (typeof _this.schema.properties[requiredProperty] === 'object') {
          _this.schema.properties[requiredProperty].isRequired = true;
        }
      });
    }
  }

  /*
   * Returns the template with populated properties.
   * This template does not have the children
  */

  _createClass(JSONSchemaView, [{
    key: 'template',
    value: function template() {
      if (!this.schema) {
        return '';
      }

      return ('\n      <!-- Any -->\n      ' + (0, _helpersJs._if)(this.isAny)(_templateObject, (0, _helpersJs._if)(this.schema.description || this.schema.title)(_templateObject2, e(this.schema.title || '')), (0, _helpersJs._if)(this.schema.description && !this.isCollapsed)(_templateObject3, e(this.schema.description))) + '\n\n      <!-- Primitive -->\n      ' + (0, _helpersJs._if)(this.isPrimitive)(_templateObject4, (0, _helpersJs._if)(this.schema.description || this.schema.title)(_templateObject2, e(this.schema.title || '')), e(this.schema.type), (0, _helpersJs._if)(this.schema.isRequired)(_templateObject5), (0, _helpersJs._if)(!this.isCollapsed && this.schema.format)(_templateObject6, e(this.schema.format)), (0, _helpersJs._if)(!this.isCollapsed && this.schema.minimum)(_templateObject7, e(this.schema.minimum)), (0, _helpersJs._if)(!this.isCollapsed && this.schema.exclusiveMinimum)(_templateObject8, e(this.schema.exclusiveMinimum)), (0, _helpersJs._if)(!this.isCollapsed && this.schema.maximum)(_templateObject9, e(this.schema.maximum)), (0, _helpersJs._if)(!this.isCollapsed && this.schema.exclusiveMaximum)(_templateObject10, e(this.schema.exclusiveMaximum)), (0, _helpersJs._if)(!this.isCollapsed && this.schema.minLength)(_templateObject11, e(this.schema.minLength)), (0, _helpersJs._if)(!this.isCollapsed && this.schema.maxLength)(_templateObject12, e(this.schema.maxLength)), (0, _helpersJs._if)(this.schema.description && !this.isCollapsed)(_templateObject3, e(this.schema.description)), (0, _helpersJs._if)(!this.isCollapsed && this.schema['enum'])(_templateObject13, this['enum'](this.schema, this.isCollapsed, this.open)), (0, _helpersJs._if)(this.schema.allOf && !this.isCollapsed)(_templateObject14, this.xOf(this.schema, 'allOf')), (0, _helpersJs._if)(this.schema.oneOf && !this.isCollapsed)(_templateObject14, this.xOf(this.schema, 'oneOf')), (0, _helpersJs._if)(this.schema.anyOf && !this.isCollapsed)(_templateObject14, this.xOf(this.schema, 'anyOf'))) + '\n\n\n      <!-- Array -->\n      ' + (0, _helpersJs._if)(this.isArray)(_templateObject15, e(this.schema.title || ''), (0, _helpersJs._if)(this.isCollapsed)(_templateObject16), (0, _helpersJs._if)(!this.isCollapsed && (this.schema.uniqueItems || this.schema.minItems || this.schema.maxItems))(_templateObject17, e(this.schema.minItems || 0), e(this.schema.maxItems || '∞'), (0, _helpersJs._if)(!this.isCollapsed && this.schema.uniqueItems)(_templateObject18)), (0, _helpersJs._if)(!this.isCollapsed && this.schema.description)(_templateObject19, e(this.schema.description)), (0, _helpersJs._if)(!this.isCollapsed && this.schema['enum'])(_templateObject13, this['enum'](this.schema, this.isCollapsed, this.open)), (0, _helpersJs._if)(this.schema.allOf && !this.isCollapsed)(_templateObject14, this.xOf(this.schema, 'allOf')), (0, _helpersJs._if)(this.schema.oneOf && !this.isCollapsed)(_templateObject14, this.xOf(this.schema, 'oneOf')), (0, _helpersJs._if)(this.schema.anyOf && !this.isCollapsed)(_templateObject14, this.xOf(this.schema, 'anyOf')), (0, _helpersJs._if)(!this.isCollapsed)(_templateObject20)) + '\n\n      <!-- Object -->\n      ' + (0, _helpersJs._if)(!this.isPrimitive && !this.isArray && !this.isAny)(_templateObject21, e(this.schema.title || ''), (0, _helpersJs._if)(this.isCollapsed)(_templateObject22), (0, _helpersJs._if)(!this.isCollapsed && this.schema.description)(_templateObject19, e(this.schema.description)), (0, _helpersJs._if)(!this.isCollapsed && this.schema['enum'])(_templateObject13, this['enum'](this.schema, this.isCollapsed, this.open)), (0, _helpersJs._if)(this.schema.allOf && !this.isCollapsed)(_templateObject14, this.xOf(this.schema, 'allOf')), (0, _helpersJs._if)(this.schema.oneOf && !this.isCollapsed)(_templateObject14, this.xOf(this.schema, 'oneOf')), (0, _helpersJs._if)(this.schema.anyOf && !this.isCollapsed)(_templateObject14, this.xOf(this.schema, 'anyOf')), (0, _helpersJs._if)(!this.isCollapsed)(_templateObject23)) + '\n').replace(/\s*\n/g, '\n').replace(/(\<\!\-\-).+/g, '').trim();
    }

    /*
     * Template for oneOf, anyOf and allOf
    */
  }, {
    key: 'xOf',
    value: function xOf(schema, type) {
      return '\n      <div class="inner ' + e(type) + '">\n        <b>' + e((0, _helpersJs.convertXOf)(type)) + ':</b>\n      </div>\n    ';
    }

    /*
     * Template for enums
    */
  }, {
    key: 'enum',
    value: function _enum(schema, isCollapsed, open) {
      return '\n      ' + (0, _helpersJs._if)(!isCollapsed && schema['enum'])(_templateObject24) + '\n    ';
    }

    /*
     * Toggles the 'collapsed' state
    */
  }, {
    key: 'toggle',
    value: function toggle() {
      this.isCollapsed = !this.isCollapsed;
      this.render();
    }

    /*
     * Renders the element and returns it
    */
  }, {
    key: 'render',
    value: function render() {
      if (!this.element) {
        this.element = document.createElement('div');
        this.element.classList.add('json-schema-view');
      }

      if (this.isCollapsed) {
        this.element.classList.add('collapsed');
      } else {
        this.element.classList.remove('collapsed');
      }

      if (this.options.theme) {
        this.element.classList.add('json-schema-view-' + this.options.theme);
      }

      this.element.innerHTML = this.template();

      if (!this.schema) {
        return this.element;
      }

      if (!this.isCollapsed) {
        this.appendChildren(this.element);
      }

      // add event listener for toggling
      if (this.element.querySelector('a.title')) {
        this.element.querySelector('a.title').addEventListener('click', this.toggle.bind(this));
      }
      return this.element;
    }

    /*
     * Appends children to given element based on current schema
    */
  }, {
    key: 'appendChildren',
    value: function appendChildren(element) {
      var _this2 = this;

      var inner = element.querySelector('.inner');

      if (!inner) {
        return;
      }

      if (this.schema['enum']) {
        var formatter = new JSONFormatter(this.schema['enum'], this.open - 1);
        var formatterEl = formatter.render();
        formatterEl.classList.add('inner');
        element.querySelector('.enums.inner').appendChild(formatterEl);
      }

      if (this.isArray) {
        var view = new JSONSchemaView(this.schema.items, this.open - 1);
        inner.appendChild(view.render());
      }

      if (typeof this.schema.properties === 'object') {
        Object.keys(this.schema.properties).forEach(function (propertyName) {
          var property = _this2.schema.properties[propertyName];
          var tempDiv = document.createElement('div');;
          tempDiv.innerHTML = '<div class="property">\n          <span class="name">' + propertyName + ':</span>\n        </div>';
          var view = new JSONSchemaView(property, _this2.open - 1);
          tempDiv.querySelector('.property').appendChild(view.render());

          inner.appendChild(tempDiv.querySelector('.property'));
        });
      }

      if (this.schema.allOf) {
        appendXOf.call(this, 'allOf');
      }
      if (this.schema.oneOf) {
        appendXOf.call(this, 'oneOf');
      }
      if (this.schema.anyOf) {
        appendXOf.call(this, 'anyOf');
      }

      function appendXOf(type) {
        var _this3 = this;

        var innerAllOf = element.querySelector('.inner.' + type);

        this.schema[type].forEach(function (schema) {
          var inner = document.createElement('div');
          inner.classList.add('inner');
          var view = new JSONSchemaView(schema, _this3.open - 1);
          inner.appendChild(view.render());
          innerAllOf.appendChild(inner);
        });
      }
    }
  }]);

  return JSONSchemaView;
})();

exports['default'] = JSONSchemaView;
module.exports = exports['default'];

},{"./helpers.js":1}]},{},[2])(2)
});
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS9qb3NoL3Byb2plY3RzL2pzb24tc2NoZW1hLXZpZXctanMvc3JjL2hlbHBlcnMuanMiLCIvaG9tZS9qb3NoL3Byb2plY3RzL2pzb24tc2NoZW1hLXZpZXctanMvc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7O0FBSU4sU0FBUyxVQUFVLENBQUMsSUFBSSxFQUFFO0FBQy9CLFNBQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO0NBQ3JDOzs7Ozs7Ozs7Ozs7O0FBWU0sU0FBUyxHQUFHLENBQUMsU0FBUyxFQUFFO0FBQzdCLFNBQU8sU0FBUyxHQUFHLE1BQU0sR0FBRyxLQUFLLENBQUM7Q0FDbkM7O0FBQ0QsU0FBUyxLQUFLLEdBQUU7QUFDZCxTQUFPLEVBQUUsQ0FBQztDQUNYO0FBQ0QsU0FBUyxNQUFNLENBQUUsUUFBUSxFQUFrQjtvQ0FBYixXQUFXO0FBQVgsZUFBVzs7O0FBQ3ZDLFNBQU8sUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBSztBQUN4RCxXQUFPLFdBQVcsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO0dBQzVDLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDakI7OztBQzVCRCxZQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5QkFPTixjQUFjOzs7QUFJckIsSUFBSSxTQUFTLEdBQUc7QUFDZCxLQUFHLEVBQUUsT0FBTztBQUNaLEtBQUcsRUFBRSxNQUFNO0FBQ1gsS0FBRyxFQUFFLE1BQU07QUFDWCxLQUFHLEVBQUUsUUFBUTtBQUNiLEtBQUcsRUFBRSxP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RUFBRSxDQUFDLENBQUM7QUFDakMsb0JBQVUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDL0IsQ0FBQyxDQUFDO09BQ0o7S0FDRjs7O1NBL1RrQixjQUFjOzs7cUJBQWQsY0FBYyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG4vKlxuICogQ29udmVydHMgYW55T2YsIGFsbE9mIGFuZCBvbmVPZiB0byBodW1hbiByZWFkYWJsZSBzdHJpbmdcbiovXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFhPZih0eXBlKSB7XG4gIHJldHVybiB0eXBlLnN1YnN0cmluZygwLCAzKSArICcgb2YnO1xufVxuXG4vKlxuICogaWYgY29uZGl0aW9uIGZvciBFUzYgdGVtcGxhdGUgc3RyaW5nc1xuICogdG8gYmUgdXNlZCBvbmx5IGluIHRlbXBsYXRlIHN0cmluZ1xuICpcbiAqIEBleGFtcGxlIG15c3RyID0gYFJhbmRvbSBpcyAke19pZihNYXRoLnJhbmRvbSgpID4gMC41KWBncmVhdGVyIHRoYW4gMC41YGBcbiAqXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGNvbmRpdGlvblxuICpcbiAqIEByZXR1cm5zIHtmdW5jdGlvbn0gdGhlIHRlbXBsYXRlIGZ1bmN0aW9uXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIF9pZihjb25kaXRpb24pIHtcbiAgcmV0dXJuIGNvbmRpdGlvbiA/IG5vcm1hbCA6IGVtcHR5O1xufVxuZnVuY3Rpb24gZW1wdHkoKXtcbiAgcmV0dXJuICcnO1xufVxuZnVuY3Rpb24gbm9ybWFsICh0ZW1wbGF0ZSwgLi4uZXhwcmVzc2lvbnMpIHtcbiAgcmV0dXJuIHRlbXBsYXRlLnNsaWNlKDEpLnJlZHVjZSgoYWNjdW11bGF0b3IsIHBhcnQsIGkpID0+IHtcbiAgICByZXR1cm4gYWNjdW11bGF0b3IgKyBleHByZXNzaW9uc1tpXSArIHBhcnQ7XG4gIH0sIHRlbXBsYXRlWzBdKTtcbn0iLCIndXNlIHN0cmljdCc7XG5cbi8qIGdsb2JhbHMgSlNPTlNjaGVtYVZpZXcgKi9cblxuaW1wb3J0IHtcbiAgY29udmVydFhPZixcbiAgX2lmXG59IGZyb20gJy4vaGVscGVycy5qcyc7XG5cblxuLy8gRm9yIGVzY2FwaW5nICggc2VlIGJlbG93IClcbnZhciBlbnRpdHlNYXAgPSB7XG4gICcmJzogJyZhbXA7JyxcbiAgJzwnOiAnJmx0OycsXG4gICc+JzogJyZndDsnLFxuICAnXCInOiAnJnF1b3Q7JyxcbiAgXCInXCI6ICcmIzM5OycsXG4gICcvJzogJyYjeDJGOycsXG4gICdgJzogJyYjeDYwOycsXG4gICc9JzogJyYjeDNEOydcbn07XG5cbi8qKlxuICogUXVvdGUgSFRNTCBlbnRpdGllcyAoIHN0b2xlbiBmcm9tIG11c3RhY2hlLmpzIClcbiAqIEBwYXJhbSB7c3RyaW5nfSBodG1sXG4gKiBAcmV0dXJuIHtzdHJpbmd9IHdpdGggaHRtbCBlbnRpdGllcyBxdW90ZWRcbiAqL1xuZnVuY3Rpb24gZShzdHJpbmcpIHtcbiAgcmV0dXJuIFN0cmluZyhzdHJpbmcpLnJlcGxhY2UoL1smPD5cIidgPVxcL10vZywgZnVuY3Rpb24gZnJvbUVudGl0eU1hcCAocykge1xuICAgIHJldHVybiBlbnRpdHlNYXBbc107XG4gIH0pO1xufVxuXG4vKipcbiAqIEBjbGFzcyBKU09OU2NoZW1hVmlld1xuICpcbiAqIEEgcHVyZSBKYXZhU2NyaXB0IGNvbXBvbmVudCBmb3IgcmVuZGVyaW5nIEpTT04gU2NoZW1hIGluIEhUTUwuXG4qL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSlNPTlNjaGVtYVZpZXcge1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge29iamVjdH0gc2NoZW1hIFRoZSBKU09OIFNjaGVtYSBvYmplY3RcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtvcGVuPTFdIGhpcyBudW1iZXIgaW5kaWNhdGVzIHVwIHRvIGhvdyBtYW55IGxldmVscyB0aGVcbiAgICogcmVuZGVyZWQgdHJlZSBzaG91bGQgZXhwYW5kLiBTZXQgaXQgdG8gYDBgIHRvIG1ha2UgdGhlIHdob2xlIHRyZWUgY29sbGFwc2VkXG4gICAqIG9yIHNldCBpdCB0byBgSW5maW5pdHlgIHRvIGV4cGFuZCB0aGUgdHJlZSBkZWVwbHlcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMuXG4gICAqICB0aGVtZSB7c3RyaW5nfTogb25lIG9mIHRoZSBmb2xsb3dpbmcgb3B0aW9uczogWydkYXJrJ11cbiAgKi9cbiAgY29uc3RydWN0b3Ioc2NoZW1hLCBvcGVuLCBvcHRpb25zID0ge3RoZW1lOiBudWxsfSkge1xuICAgIHRoaXMuc2NoZW1hID0gc2NoZW1hO1xuICAgIHRoaXMub3BlbiA9IG9wZW47XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLmlzQ29sbGFwc2VkID0gb3BlbiA8PSAwO1xuXG4gICAgLy8gaWYgc2NoZW1hIGlzIGFuIGVtcHR5IG9iamVjdCB3aGljaCBtZWFucyBhbnkgSk9TTlxuICAgIHRoaXMuaXNBbnkgPSB0eXBlb2Ygc2NoZW1hID09PSAnb2JqZWN0JyAmJlxuICAgICAgIUFycmF5LmlzQXJyYXkoc2NoZW1hKSAmJlxuICAgICAgIU9iamVjdC5rZXlzKHNjaGVtYSlcbiAgICAgIC5maWx0ZXIoaz0+IFsndGl0bGUnLCAnZGVzY3JpcHRpb24nXS5pbmRleE9mKGspID09PSAtMSkubGVuZ3RoO1xuXG4gICAgLy8gRGV0ZXJtaW5lIGlmIGEgc2NoZW1hIGlzIGFuIGFycmF5XG4gICAgdGhpcy5pc0FycmF5ID0gIXRoaXMuaXNBbnkgJiYgdGhpcy5zY2hlbWEgJiYgdGhpcy5zY2hlbWEudHlwZSA9PT0gJ2FycmF5JztcblxuICAgIHRoaXMuaXNPYmplY3QgPSB0aGlzLnNjaGVtYSAmJlxuICAgICAgKHRoaXMuc2NoZW1hLnR5cGUgPT09ICdvYmplY3QnIHx8XG4gICAgICAgdGhpcy5zY2hlbWEucHJvcGVydGllcyB8fFxuICAgICAgIHRoaXMuc2NoZW1hLmFueU9mIHx8XG4gICAgICAgdGhpcy5zY2hlbWEub25lb2YgfHxcbiAgICAgICB0aGlzLnNjaGVtYS5hbGxPZik7XG5cbiAgICAvLyBEZXRlcm1pbmUgaWYgYSBzY2hlbWEgaXMgYSBwcmltaXRpdmVcbiAgICB0aGlzLmlzUHJpbWl0aXZlID0gIXRoaXMuaXNBbnkgJiYgIXRoaXMuaXNBcnJheSAmJiAhdGhpcy5pc09iamVjdDtcblxuICAgIC8vXG4gICAgdGhpcy5zaG93VG9nZ2xlID0gdGhpcy5zY2hlbWEuZGVzY3JpcHRpb24gfHxcbiAgICAgIHRoaXMuc2NoZW1hLnRpdGxlIHx8XG4gICAgICAodGhpcy5pc1ByaW1pdGl2ZSAmJiAoXG4gICAgICAgIHRoaXMuc2NoZW1hLm1pbmltdW0gfHxcbiAgICAgICAgdGhpcy5zY2hlbWEubWF4aW11bSB8fFxuICAgICAgICB0aGlzLnNjaGVtYS5leGNsdXNpdmVNaW5pbXVtIHx8XG4gICAgICAgIHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0pXG4gICAgICApO1xuXG4gICAgLy8gcG9wdWxhdGUgaXNSZXF1aXJlZCBwcm9wZXJ0eSBkb3duIHRvIHByb3BlcnRpZXNcbiAgICBpZiAodGhpcy5zY2hlbWEgJiYgQXJyYXkuaXNBcnJheSh0aGlzLnNjaGVtYS5yZXF1aXJlZCkpIHtcbiAgICAgIHRoaXMuc2NoZW1hLnJlcXVpcmVkLmZvckVhY2gocmVxdWlyZWRQcm9wZXJ0eSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5zY2hlbWEucHJvcGVydGllc1tyZXF1aXJlZFByb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzW3JlcXVpcmVkUHJvcGVydHldLmlzUmVxdWlyZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKlxuICAgKiBSZXR1cm5zIHRoZSB0ZW1wbGF0ZSB3aXRoIHBvcHVsYXRlZCBwcm9wZXJ0aWVzLlxuICAgKiBUaGlzIHRlbXBsYXRlIGRvZXMgbm90IGhhdmUgdGhlIGNoaWxkcmVuXG4gICovXG4gIHRlbXBsYXRlKCkge1xuICAgIGlmICghdGhpcy5zY2hlbWEpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICByZXR1cm4gYFxuICAgICAgPCEtLSBBbnkgLS0+XG4gICAgICAke19pZih0aGlzLmlzQW55KWBcbiAgICAgICAgPGRpdiBjbGFzcz1cImFueVwiPlxuICAgICAgICAgICR7X2lmKHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uIHx8IHRoaXMuc2NoZW1hLnRpdGxlKWBcbiAgICAgICAgICAgIDxhIGNsYXNzPVwidGl0bGVcIj48c3BhbiBjbGFzcz1cInRvZ2dsZS1oYW5kbGVcIj48L3NwYW4+JHtlKHRoaXMuc2NoZW1hLnRpdGxlIHx8ICcnKX0gPC9hPlxuICAgICAgICAgIGB9XG5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInR5cGUgdHlwZS1hbnlcIj4mbHQ7YW55Jmd0Ozwvc3Bhbj5cblxuICAgICAgICAgICR7X2lmKHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uICYmICF0aGlzLmlzQ29sbGFwc2VkKWBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lciBkZXNjcmlwdGlvblwiPiR7ZSh0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbil9PC9kaXY+XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9kaXY+XG4gICAgICBgfVxuXG4gICAgICA8IS0tIFByaW1pdGl2ZSAtLT5cbiAgICAgICR7X2lmKHRoaXMuaXNQcmltaXRpdmUpYFxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJpbWl0aXZlXCI+XG4gICAgICAgICAgJHtfaWYodGhpcy5zY2hlbWEuZGVzY3JpcHRpb24gfHwgdGhpcy5zY2hlbWEudGl0bGUpYFxuICAgICAgICAgICAgPGEgY2xhc3M9XCJ0aXRsZVwiPjxzcGFuIGNsYXNzPVwidG9nZ2xlLWhhbmRsZVwiPjwvc3Bhbj4ke2UodGhpcy5zY2hlbWEudGl0bGUgfHwgJycpfSA8L2E+XG4gICAgICAgICAgYH1cblxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0eXBlXCI+JHtlKHRoaXMuc2NoZW1hLnR5cGUpfTwvc3Bhbj5cblxuICAgICAgICAgICR7X2lmKHRoaXMuc2NoZW1hLmlzUmVxdWlyZWQpYFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyZXF1aXJlZFwiPio8L3NwYW4+XG4gICAgICAgICAgYH1cblxuICAgICAgICAgICR7X2lmKCF0aGlzLmlzQ29sbGFwc2VkICYmIHRoaXMuc2NoZW1hLmZvcm1hdClgXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZvcm1hdFwiPigke2UodGhpcy5zY2hlbWEuZm9ybWF0KX0pPC9zcGFuPlxuICAgICAgICAgIGB9XG5cbiAgICAgICAgICAke19pZighdGhpcy5pc0NvbGxhcHNlZCAmJiB0aGlzLnNjaGVtYS5taW5pbXVtKWBcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmFuZ2UgbWluaW11bVwiPm1pbmltdW06JHtlKHRoaXMuc2NoZW1hLm1pbmltdW0pfTwvc3Bhbj5cbiAgICAgICAgICBgfVxuXG4gICAgICAgICAgJHtfaWYoIXRoaXMuaXNDb2xsYXBzZWQgJiYgdGhpcy5zY2hlbWEuZXhjbHVzaXZlTWluaW11bSlgXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJhbmdlIGV4Y2x1c2l2ZU1pbmltdW1cIj4oZXgpbWluaW11bToke2UodGhpcy5zY2hlbWEuZXhjbHVzaXZlTWluaW11bSl9PC9zcGFuPlxuICAgICAgICAgIGB9XG5cbiAgICAgICAgICAke19pZighdGhpcy5pc0NvbGxhcHNlZCAmJiB0aGlzLnNjaGVtYS5tYXhpbXVtKWBcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmFuZ2UgbWF4aW11bVwiPm1heGltdW06JHtlKHRoaXMuc2NoZW1hLm1heGltdW0pfTwvc3Bhbj5cbiAgICAgICAgICBgfVxuXG4gICAgICAgICAgJHtfaWYoIXRoaXMuaXNDb2xsYXBzZWQgJiYgdGhpcy5zY2hlbWEuZXhjbHVzaXZlTWF4aW11bSlgXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJhbmdlIGV4Y2x1c2l2ZU1heGltdW1cIj4oZXgpbWF4aW11bToke2UodGhpcy5zY2hlbWEuZXhjbHVzaXZlTWF4aW11bSl9PC9zcGFuPlxuICAgICAgICAgIGB9XG5cbiAgICAgICAgICAke19pZighdGhpcy5pc0NvbGxhcHNlZCAmJiB0aGlzLnNjaGVtYS5taW5MZW5ndGgpYFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyYW5nZSBtaW5MZW5ndGhcIj5taW5MZW5ndGg6JHtlKHRoaXMuc2NoZW1hLm1pbkxlbmd0aCl9PC9zcGFuPlxuICAgICAgICAgIGB9XG5cbiAgICAgICAgICAke19pZighdGhpcy5pc0NvbGxhcHNlZCAmJiB0aGlzLnNjaGVtYS5tYXhMZW5ndGgpYFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyYW5nZSBtYXhMZW5ndGhcIj5tYXhMZW5ndGg6JHtlKHRoaXMuc2NoZW1hLm1heExlbmd0aCl9PC9zcGFuPlxuICAgICAgICAgIGB9XG5cbiAgICAgICAgICAke19pZih0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbiAmJiAhdGhpcy5pc0NvbGxhcHNlZClgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5uZXIgZGVzY3JpcHRpb25cIj4ke2UodGhpcy5zY2hlbWEuZGVzY3JpcHRpb24pfTwvZGl2PlxuICAgICAgICAgIGB9XG5cbiAgICAgICAgICAke19pZighdGhpcy5pc0NvbGxhcHNlZCAmJiB0aGlzLnNjaGVtYS5lbnVtKWBcbiAgICAgICAgICAgICR7dGhpcy5lbnVtKHRoaXMuc2NoZW1hLCB0aGlzLmlzQ29sbGFwc2VkLCB0aGlzLm9wZW4pfVxuICAgICAgICAgIGB9XG5cbiAgICAgICAgICAke19pZih0aGlzLnNjaGVtYS5hbGxPZiAmJiAhdGhpcy5pc0NvbGxhcHNlZClgJHt0aGlzLnhPZih0aGlzLnNjaGVtYSwgJ2FsbE9mJyl9YH1cbiAgICAgICAgICAke19pZih0aGlzLnNjaGVtYS5vbmVPZiAmJiAhdGhpcy5pc0NvbGxhcHNlZClgJHt0aGlzLnhPZih0aGlzLnNjaGVtYSwgJ29uZU9mJyl9YH1cbiAgICAgICAgICAke19pZih0aGlzLnNjaGVtYS5hbnlPZiAmJiAhdGhpcy5pc0NvbGxhcHNlZClgJHt0aGlzLnhPZih0aGlzLnNjaGVtYSwgJ2FueU9mJyl9YH1cbiAgICAgICAgPC9kaXY+XG4gICAgICBgfVxuXG5cbiAgICAgIDwhLS0gQXJyYXkgLS0+XG4gICAgICAke19pZih0aGlzLmlzQXJyYXkpYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYXJyYXlcIj5cbiAgICAgICAgICA8YSBjbGFzcz1cInRpdGxlXCI+PHNwYW4gY2xhc3M9XCJ0b2dnbGUtaGFuZGxlXCI+PC9zcGFuPiR7ZSh0aGlzLnNjaGVtYS50aXRsZSB8fCAnJyl9PHNwYW4gY2xhc3M9XCJvcGVuaW5nIGJyYWNrZXRcIj5bPC9zcGFuPiR7X2lmKHRoaXMuaXNDb2xsYXBzZWQpYDxzcGFuIGNsYXNzPVwiY2xvc2luZyBicmFja2V0XCI+XTwvc3Bhbj5gfTwvYT5cbiAgICAgICAgICAke19pZighdGhpcy5pc0NvbGxhcHNlZCAmJiAodGhpcy5zY2hlbWEudW5pcXVlSXRlbXMgfHwgdGhpcy5zY2hlbWEubWluSXRlbXMgfHwgdGhpcy5zY2hlbWEubWF4SXRlbXMpKWBcbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIHRpdGxlPVwiaXRlbXMgcmFuZ2VcIj4oJHtlKHRoaXMuc2NoZW1hLm1pbkl0ZW1zIHx8IDApfS4uJHtlKHRoaXMuc2NoZW1hLm1heEl0ZW1zIHx8ICfiiJ4nKX0pPC9zcGFuPlxuICAgICAgICAgICAgJHtfaWYoIXRoaXMuaXNDb2xsYXBzZWQgJiYgdGhpcy5zY2hlbWEudW5pcXVlSXRlbXMpYDxzcGFuIHRpdGxlPVwidW5pcXVlXCIgY2xhc3M9XCJ1bmlxdWVJdGVtc1wiPuKZpjwvc3Bhbj5gfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICBgfVxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lclwiPlxuICAgICAgICAgICAgJHtfaWYoIXRoaXMuaXNDb2xsYXBzZWQgJiYgdGhpcy5zY2hlbWEuZGVzY3JpcHRpb24pYFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb25cIj4ke2UodGhpcy5zY2hlbWEuZGVzY3JpcHRpb24pfTwvZGl2PlxuICAgICAgICAgICAgYH1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICR7X2lmKCF0aGlzLmlzQ29sbGFwc2VkICYmIHRoaXMuc2NoZW1hLmVudW0pYFxuICAgICAgICAgICAgJHt0aGlzLmVudW0odGhpcy5zY2hlbWEsIHRoaXMuaXNDb2xsYXBzZWQsIHRoaXMub3Blbil9XG4gICAgICAgICAgYH1cblxuICAgICAgICAgICR7X2lmKHRoaXMuc2NoZW1hLmFsbE9mICYmICF0aGlzLmlzQ29sbGFwc2VkKWAke3RoaXMueE9mKHRoaXMuc2NoZW1hLCAnYWxsT2YnKX1gfVxuICAgICAgICAgICR7X2lmKHRoaXMuc2NoZW1hLm9uZU9mICYmICF0aGlzLmlzQ29sbGFwc2VkKWAke3RoaXMueE9mKHRoaXMuc2NoZW1hLCAnb25lT2YnKX1gfVxuICAgICAgICAgICR7X2lmKHRoaXMuc2NoZW1hLmFueU9mICYmICF0aGlzLmlzQ29sbGFwc2VkKWAke3RoaXMueE9mKHRoaXMuc2NoZW1hLCAnYW55T2YnKX1gfVxuXG4gICAgICAgICAgJHtfaWYoIXRoaXMuaXNDb2xsYXBzZWQpYFxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2xvc2luZyBicmFja2V0XCI+XTwvc3Bhbj5cbiAgICAgICAgICBgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIGB9XG5cbiAgICAgIDwhLS0gT2JqZWN0IC0tPlxuICAgICAgJHtfaWYoIXRoaXMuaXNQcmltaXRpdmUgJiYgIXRoaXMuaXNBcnJheSAmJiAhdGhpcy5pc0FueSlgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJvYmplY3RcIj5cbiAgICAgICAgICA8YSBjbGFzcz1cInRpdGxlXCI+PHNwYW5cbiAgICAgICAgICAgIGNsYXNzPVwidG9nZ2xlLWhhbmRsZVwiPjwvc3Bhbj4ke2UodGhpcy5zY2hlbWEudGl0bGUgfHwgJycpfSA8c3BhblxuICAgICAgICAgICAgY2xhc3M9XCJvcGVuaW5nIGJyYWNlXCI+ezwvc3Bhbj4ke19pZih0aGlzLmlzQ29sbGFwc2VkKWBcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjbG9zaW5nIGJyYWNlXCIgbmctaWY9XCJpc0NvbGxhcHNlZFwiPn08L3NwYW4+XG4gICAgICAgICAgYH08L2E+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5uZXJcIj5cbiAgICAgICAgICAgICR7X2lmKCF0aGlzLmlzQ29sbGFwc2VkICYmIHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKWBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uXCI+JHtlKHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKX08L2Rpdj5cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8IS0tIGNoaWxkcmVuIGdvIGhlcmUgLS0+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAke19pZighdGhpcy5pc0NvbGxhcHNlZCAmJiB0aGlzLnNjaGVtYS5lbnVtKWBcbiAgICAgICAgICAgICR7dGhpcy5lbnVtKHRoaXMuc2NoZW1hLCB0aGlzLmlzQ29sbGFwc2VkLCB0aGlzLm9wZW4pfVxuICAgICAgICAgIGB9XG5cbiAgICAgICAgICAke19pZih0aGlzLnNjaGVtYS5hbGxPZiAmJiAhdGhpcy5pc0NvbGxhcHNlZClgJHt0aGlzLnhPZih0aGlzLnNjaGVtYSwgJ2FsbE9mJyl9YH1cbiAgICAgICAgICAke19pZih0aGlzLnNjaGVtYS5vbmVPZiAmJiAhdGhpcy5pc0NvbGxhcHNlZClgJHt0aGlzLnhPZih0aGlzLnNjaGVtYSwgJ29uZU9mJyl9YH1cbiAgICAgICAgICAke19pZih0aGlzLnNjaGVtYS5hbnlPZiAmJiAhdGhpcy5pc0NvbGxhcHNlZClgJHt0aGlzLnhPZih0aGlzLnNjaGVtYSwgJ2FueU9mJyl9YH1cblxuICAgICAgICAgICR7X2lmKCF0aGlzLmlzQ29sbGFwc2VkKWBcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImNsb3NpbmcgYnJhY2VcIj59PC9zcGFuPlxuICAgICAgICAgIGB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgYH1cbmAucmVwbGFjZSgvXFxzKlxcbi9nLCAnXFxuJykucmVwbGFjZSgvKFxcPFxcIVxcLVxcLSkuKy9nLCAnJykudHJpbSgpO1xuICB9XG5cbiAgLypcbiAgICogVGVtcGxhdGUgZm9yIG9uZU9mLCBhbnlPZiBhbmQgYWxsT2ZcbiAgKi9cbiAgeE9mKHNjaGVtYSwgdHlwZSkge1xuICAgIHJldHVybiBgXG4gICAgICA8ZGl2IGNsYXNzPVwiaW5uZXIgJHtlKHR5cGUpfVwiPlxuICAgICAgICA8Yj4ke2UoY29udmVydFhPZih0eXBlKSl9OjwvYj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICAvKlxuICAgKiBUZW1wbGF0ZSBmb3IgZW51bXNcbiAgKi9cbiAgZW51bShzY2hlbWEsIGlzQ29sbGFwc2VkLCBvcGVuKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgICR7X2lmKCFpc0NvbGxhcHNlZCAmJiBzY2hlbWEuZW51bSlgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lciBlbnVtc1wiPlxuICAgICAgICAgIDxiPkVudW06PC9iPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIGB9XG4gICAgYDtcbiAgfVxuXG4gIC8qXG4gICAqIFRvZ2dsZXMgdGhlICdjb2xsYXBzZWQnIHN0YXRlXG4gICovXG4gIHRvZ2dsZSgpIHtcbiAgICB0aGlzLmlzQ29sbGFwc2VkID0gIXRoaXMuaXNDb2xsYXBzZWQ7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIC8qXG4gICAqIFJlbmRlcnMgdGhlIGVsZW1lbnQgYW5kIHJldHVybnMgaXRcbiAgKi9cbiAgcmVuZGVyKCkge1xuICAgIGlmICghdGhpcy5lbGVtZW50KSB7XG4gICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdqc29uLXNjaGVtYS12aWV3Jyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNDb2xsYXBzZWQpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2NvbGxhcHNlZCcpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMudGhlbWUpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKGBqc29uLXNjaGVtYS12aWV3LSR7dGhpcy5vcHRpb25zLnRoZW1lfWApO1xuICAgIH1cblxuICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLnRlbXBsYXRlKCk7XG5cbiAgICBpZiAoIXRoaXMuc2NoZW1hKSB7XG4gICAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xuICAgIH1cblxuICAgIGlmICghdGhpcy5pc0NvbGxhcHNlZCkge1xuICAgICAgdGhpcy5hcHBlbmRDaGlsZHJlbih0aGlzLmVsZW1lbnQpO1xuICAgIH1cblxuICAgIC8vIGFkZCBldmVudCBsaXN0ZW5lciBmb3IgdG9nZ2xpbmdcbiAgICBpZiAodGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EudGl0bGUnKSkge1xuICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EudGl0bGUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudG9nZ2xlLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xuICB9XG5cbiAgLypcbiAgICogQXBwZW5kcyBjaGlsZHJlbiB0byBnaXZlbiBlbGVtZW50IGJhc2VkIG9uIGN1cnJlbnQgc2NoZW1hXG4gICovXG4gIGFwcGVuZENoaWxkcmVuKGVsZW1lbnQpIHtcbiAgICBjb25zdCBpbm5lciA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmlubmVyJyk7XG5cbiAgICBpZiAoIWlubmVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2NoZW1hLmVudW0pIHtcbiAgICAgIGNvbnN0IGZvcm1hdHRlciA9IG5ldyBKU09ORm9ybWF0dGVyKHRoaXMuc2NoZW1hLmVudW0sIHRoaXMub3BlbiAtIDEpO1xuICAgICAgY29uc3QgZm9ybWF0dGVyRWwgPSBmb3JtYXR0ZXIucmVuZGVyKCk7XG4gICAgICBmb3JtYXR0ZXJFbC5jbGFzc0xpc3QuYWRkKCdpbm5lcicpO1xuICAgICAgZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZW51bXMuaW5uZXInKS5hcHBlbmRDaGlsZChmb3JtYXR0ZXJFbCk7XG5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc0FycmF5KSB7XG4gICAgICBjb25zdCB2aWV3ID0gbmV3IEpTT05TY2hlbWFWaWV3KHRoaXMuc2NoZW1hLml0ZW1zLCB0aGlzLm9wZW4gLSAxKVxuICAgICAgaW5uZXIuYXBwZW5kQ2hpbGQodmlldy5yZW5kZXIoKSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModGhpcy5zY2hlbWEucHJvcGVydGllcykuZm9yRWFjaChwcm9wZXJ0eU5hbWUgPT4ge1xuICAgICAgICBjb25zdCBwcm9wZXJ0eSA9IHRoaXMuc2NoZW1hLnByb3BlcnRpZXNbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgY29uc3QgdGVtcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOztcbiAgICAgICAgdGVtcERpdi5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cInByb3BlcnR5XCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYW1lXCI+JHtwcm9wZXJ0eU5hbWV9Ojwvc3Bhbj5cbiAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgY29uc3QgdmlldyA9IG5ldyBKU09OU2NoZW1hVmlldyhwcm9wZXJ0eSwgdGhpcy5vcGVuIC0gMSk7XG4gICAgICAgIHRlbXBEaXYucXVlcnlTZWxlY3RvcignLnByb3BlcnR5JykuYXBwZW5kQ2hpbGQodmlldy5yZW5kZXIoKSk7XG5cbiAgICAgICAgaW5uZXIuYXBwZW5kQ2hpbGQodGVtcERpdi5xdWVyeVNlbGVjdG9yKCcucHJvcGVydHknKSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zY2hlbWEuYWxsT2YpIHsgYXBwZW5kWE9mLmNhbGwodGhpcywgJ2FsbE9mJyk7IH1cbiAgICBpZiAodGhpcy5zY2hlbWEub25lT2YpIHsgYXBwZW5kWE9mLmNhbGwodGhpcywgJ29uZU9mJyk7IH1cbiAgICBpZiAodGhpcy5zY2hlbWEuYW55T2YpIHsgYXBwZW5kWE9mLmNhbGwodGhpcywgJ2FueU9mJyk7IH1cblxuICAgIGZ1bmN0aW9uIGFwcGVuZFhPZih0eXBlKSB7XG4gICAgICBjb25zdCBpbm5lckFsbE9mID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKGAuaW5uZXIuJHt0eXBlfWApO1xuXG4gICAgICB0aGlzLnNjaGVtYVt0eXBlXS5mb3JFYWNoKHNjaGVtYSA9PiB7XG4gICAgICAgIGNvbnN0IGlubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGlubmVyLmNsYXNzTGlzdC5hZGQoJ2lubmVyJyk7XG4gICAgICAgIGNvbnN0IHZpZXcgPSBuZXcgSlNPTlNjaGVtYVZpZXcoc2NoZW1hLCB0aGlzLm9wZW4gLSAxKTtcbiAgICAgICAgaW5uZXIuYXBwZW5kQ2hpbGQodmlldy5yZW5kZXIoKSk7XG4gICAgICAgIGlubmVyQWxsT2YuYXBwZW5kQ2hpbGQoaW5uZXIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=
