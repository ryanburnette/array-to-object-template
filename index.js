;(function() {
  function _arrayToObjectTemplate(root, schema) {
    schema.forEach(function (el, i) {
      if ('string' === typeof el) {
        root[el] = null;
        return;
      }

      if ('object' !== typeof el) {
        throw new Error("array elements must be exclusively strings or normal objects");
      }

      if (!el || Array.isArray(el)) {
        throw new Error("array elements must be exclusively strings or normal objects (not arrays or null)");
      }

      Object.keys(el).forEach(function (key) {
        root[key] = _arrayToObjectTemplate({}, el[key]);
      });
    });
    return root;
  }

  function arrayToObjectTemplate(arr) {
    return _arrayToObjectTemplate({}, arr)
  }
  
  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = arrayToObjectTemplate
  }
  else {
    if (typeof define === 'function' && define.amd) {
      define([], function() {
        return arrayToObjectTemplate
      })
    }
    else {
      window.arrayToObjectTemplate = arrayToObjectTemplate
    }
  }
})();
