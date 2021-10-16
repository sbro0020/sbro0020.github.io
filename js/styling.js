/* styling.js
Used for scaling sizing based on the window size on load */

// Get header data
var pageTitle = document.getElementById('header-title');
var pageSubtitle = document.getElementById('header-subtitle');
var info = document.getElementById('header-info');
var styles = window.getComputedStyle(document.getElementById('header'));

const fontsizeHeader = parseFloat(styles.width)/25;
const fontsizeHeader2 = parseFloat(styles.width)/40;
const fontsizeInformation = parseFloat(styles.width)/60;

let headers = document.getElementsByTagName('h1');
for (let i=0; i<headers.length; i++) { headers[i].style.fontSize = fontsizeHeader; }

let subheaders = document.getElementsByTagName('h2');
for (let i=0; i<subheaders.length; i++) { subheaders[i].style.fontSize = fontsizeHeader2; }

let information = document.getElementsByTagName('p');
for (let i=0; i<information.length; i++) { information[i].style.fontSize = fontsizeInformation; }
information = document.getElementsByTagName('li');
for (let i=0; i<information.length; i++) { information[i].style.fontSize = fontsizeInformation; }

styles = window.getComputedStyle(document.getElementById('map'));
const fontsizeHeader3 = parseFloat(styles.width)/30;
let subsubhead = document.getElementsByTagName('h3');
for (let i=0; i<subsubhead.length; i++) { subsubhead[i].style.fontSize = fontsizeHeader3; }