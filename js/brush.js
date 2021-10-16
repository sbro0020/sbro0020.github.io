var styles = window.getComputedStyle(document.getElementById('brush'))
var containerWidth = parseFloat(styles.width);
var containerHeight = parseFloat(styles.height);

const brushData = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.1.0.json",
    "data": { "url": "https://sbro0020.github.io/data/brush.csv" },
    "vconcat": [{
        "width": containerWidth*0.85,
        "height": containerHeight*0.85*0.8,
        "mark": "area",
        "encoding": {
            "x": {
                "field": "year",
                "type": "quantitative",
                "scale": { "domain": { "param": "brush" } },
                "axis": { "title": "", "tickCount": 10 }
            },
            "y": { 
                "field": "num", 
                "type": "quantitative",
                "scale": { "domain": [0, 3000], "nice": false}
            }
        }
    }, {
        "width": containerWidth*0.85,
        "height": containerHeight*0.85*0.2,
        "mark": "area",
        "params": [{
            "name": "brush",
            "select": { "type": "interval", "encodings": ["x"] }
        }],
        "encoding": {
            "x": {
                "field": "year",
                "title": "Year (CE)",
                "type": "quantitative",
                "axis": { "tickCount": 10 }
            },
            "y": {
                "field": "num",
                "type": "quantitative",
                "axis": { "tickCount": 3, "grid": false },
                "scale": { "domain": [0,3000] }
            }
        }
    }]
}

vegaEmbed('#brush',brushData);
console.log("Brush embeded");
    