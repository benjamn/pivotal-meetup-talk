Array.prototype.forEach.call(
  document.querySelectorAll("pre[data-language]"),
  function(pre) {
    makeCodeMirror(pre);
  }
);

Reveal.addEventListener("ready", function() {
  makeCodeMirror.init();
});

// Full list of configuration options available here:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
    width: 1080,
    height: 720,

    controls: true,
    progress: true,
    history: true,
    center: true,

    theme: "simple",
    transition: Reveal.getQueryHash().transition || 'default', // default/cube/page/concave/zoom/linear/fade/none

    // Optional libraries used to extend on reveal.js
    dependencies: [{
        src: 'lib/js/classList.js',
        condition: function() {
            return !document.body.classList;
        }
    }, {
        src: 'plugin/markdown/marked.js',
        condition: function() {
            return !!document.querySelector( '[data-markdown]' );
        }
    }, {
        src: 'plugin/markdown/markdown.js',
        condition: function() {
            return !!document.querySelector( '[data-markdown]' );
        }
    }, {
        src: 'plugin/zoom-js/zoom.js',
        async: true,
        condition: function() {
            return !!document.body.classList;
        }
    }, {
        src: 'plugin/notes/notes.js',
        async: true,
        condition: function() {
            return !!document.body.classList;
        }
    }]
});
