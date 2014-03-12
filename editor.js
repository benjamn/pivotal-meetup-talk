function makeCodeMirror(value, transform, inputId, outputId) {
  var doc = document;
  var head = doc.documentElement.firstChild;
  var delayTimer;
  var delayMS = 50;
  var inputWrapper = doc.getElementById(inputId);
  var outputWrapper = doc.getElementById(outputId);

  function setUp() {
    var input = CodeMirror(function(input) {
      inputWrapper.appendChild(input);
    }, {
      value: value,
      mode: "javascript",
      indentUnit: 2
    });
    
    var output = CodeMirror(function(output) {
      outputWrapper.appendChild(output);
    }, {
      value: transform(value),
      readOnly: true
    });
    
    CodeMirror.on(input.doc, "change", function(instance) {
      clearTimeout(delayTimer);
      delayTimer = setTimeout(function() {
        output.setValue(transform(instance.getValue()));
      }, delayMS);
    });
    
    CodeMirror.on(doc, "keydown", function(event) {
      if (event.ctrlKey && event.which === 13) {
        event.preventDefault();
        
        var script = doc.createElement("script");
        script.appendChild(doc.createTextNode(output.getValue()));
        head.appendChild(script);
      }
    });
  }

  makeCodeMirror.setUpFns.push(setUp);
}

makeCodeMirror.setUpFns = [];
makeCodeMirror.init = function() {
  makeCodeMirror.setUpFns.forEach(function(setUp) {
    setUp();
  });
};
