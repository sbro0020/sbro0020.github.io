/* styling.js
Used for scaling sizing based on the window size on load */

// Get header data
var styles = window.getComputedStyle(document.getElementById('header'));
var otherStyles = window.getComputedStyle(document.getElementById('map'));

// Set font sizes as constants
const fontsizeHeader = parseFloat(styles.width)/25;
const fontsizeHeader2 = parseFloat(styles.width)/40;
const fontsizeHeader3 = parseFloat(otherStyles.width)/35;
const fontsizeInformation = parseFloat(otherStyles.width)/60;

// Get collections of all elements that have text in them
let headers = document.getElementsByTagName('h1');
let subheaders = document.getElementsByTagName('h2');
let subsubhead = document.getElementsByTagName('h3');
let information = document.getElementsByTagName('p');
let listInformation = document.getElementsByTagName('li');

// Go through all elements found above and apply font sizes as above
for (let i=0; i<headers.length; i++) { headers[i].style.fontSize = fontsizeHeader; }
for (let i=0; i<subheaders.length; i++) { subheaders[i].style.fontSize = fontsizeHeader2; }
for (let i=0; i<subsubhead.length; i++) { subsubhead[i].style.fontSize = fontsizeHeader3; }
for (let i=0; i<information.length; i++) { information[i].style.fontSize = fontsizeInformation; }
for (let i=0; i<listInformation.length; i++) { listInformation[i].style.fontSize = fontsizeInformation; }


// Set heights based on width
// Get sections
var sections = document.getElementsByTagName('section');
var height = 0;
for (let sectionIndex=1; sectionIndex<sections.length; sectionIndex++) {
    // Loop through all the sections EXCEPT the first (the header section)
    var section = sections[sectionIndex];
    var graph = section.getElementsByClassName('graph')[0];
    var info = section.getElementsByClassName('info')[0];
    var styles = window.getComputedStyle(graph);
    var graphAct = graph.getElementsByTagName('div')[0].getElementsByTagName('canvas')[0];
    console.log(1);
    
    let newHeight = parseFloat(styles.width)/2;
    section.style.marginTop = height+5;
    graph.style.height = newHeight;
    info.style.height = newHeight;
    graphAct.style.width = parseFloat(styles.width);
    graphAct.style.height = newHegiht;
    if (sectionIndex===1) { height += newHeight; }
}