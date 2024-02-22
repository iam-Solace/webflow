
// Define a function to load the script
function loadScript() {
    // Create a <script> element
    var script = document.createElement('script');
    script.src = 'https://app.ecwid.com/script.js?96512257&data_platform=code&data_date=2023-12-26';
    script.type = 'text/javascript';
    script.charset = 'utf-8';

    // Append the <script> element to the document's <head>
    document.head.appendChild(script);
}

// Define a function to execute when the DOM content is loaded
function domContentLoadedHandler() {
    // Load the script after the DOM content has fully loaded
    loadScript();
}

// Add an event listener for the DOMContentLoaded event
document.addEventListener('DOMContentLoaded', domContentLoadedHandler);
