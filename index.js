;(function() {
  function arrayToObjectTemplate() {
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
