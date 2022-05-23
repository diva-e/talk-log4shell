import Reveal from '/node_modules/reveal.js/dist/reveal.esm.js';
import Highlight from '/node_modules/reveal.js/plugin/highlight/highlight.esm.js';

import '/node_modules/reveal.js/dist/reset.css';
import '/node_modules/reveal.js/dist/reveal.css';
import '/src/theme/diva-e.css';


import '/src/slides.css';

// Theme used for syntax highlighted code
import '/node_modules/highlight.js/styles/intellij-light.css';

// More info about initialization & config:
// - https://revealjs.com/initialization/
// - https://revealjs.com/config/
Reveal.initialize({
    width: 1500,
    height: 843,
    margin: 0.05,
    hash: true,
    slideNumber: true,

    // Learn about plugins: https://revealjs.com/plugins/
    plugins: [Highlight]
});
