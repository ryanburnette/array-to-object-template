;(function() {
  function arrayToObjectTemplate(arr) {
    var obj = {};
    arr.forEach(function (el, i) {
      if ('string' === typeof el) {
        obj[el] = null;
        return;
      }

      if ('object' !== typeof el) {
        throw new Error("array elements must be exclusively strings or normal objects");
      }

      if (!el || Array.isArray(el)) {
        throw new Error("array elements must be exclusively strings or normal objects (not arrays or null)");
      }

      Object.keys(el).forEach(function (key) {
        obj[key] = arrayToObjectTemplate(el[key]);
      });
    });
    return obj;
  }
  
  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = arrayToObjectTemplate;
  }
  else {
    if (typeof define === 'function' && define.amd) {
      define([], function() {
        return arrayToObjectTemplate;
      });
    }
    else {
      window.arrayToObjectTemplate = arrayToObjectTemplate;
    }
  }
})();
