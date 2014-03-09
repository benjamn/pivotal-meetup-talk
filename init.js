// Full list of configuration options available here:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
    width: 1280,
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
        src: 'plugin/highlight/highlight.js',
        async: true,
        callback: function() {
            Array.prototype.map.call(
                document.querySelectorAll("pre code"),
                function(code) {
                    if (code.getAttribute("data-notrim") !== "true") {
                        code.textContent = code.textContent.replace(/^\s+|\s+$/g, "");
                    }
                    hljs.highlightBlock(code.parentNode);
                }
            );
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
