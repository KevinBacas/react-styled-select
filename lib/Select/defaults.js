(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.defaults = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    fontFamily: '"Trebuchet MS", "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", sans-serif',

    // value label
    valueLabel__color: '#777',

    // arrow
    arrow__color: '#9b9ba5',

    // clear
    clear__fontSize: '14px',

    // clear zone
    clearZone__color: '#999',

    // option
    option__focused__backgroundColor: '',

    control__borderColor: '#dcdce3',
    control__focused__borderColor: '#40a3f5'
  };
});
//# sourceMappingURL=defaults.js.map