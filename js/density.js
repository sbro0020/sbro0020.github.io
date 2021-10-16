var styles = window.getComputedStyle(document.getElementById('density'))
var containerWidth = parseFloat(styles.width);
var containerHeight = parseFloat(styles.height);

const densityData = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.1.0.json",
    "title": "",
    "width": containerWidth*0.85,
    "height": containerHeight*0.85,
    "data": { "url": "data/density.json" },
    "transform": [
        { "density": "age", "bandwidth": 1 }
    ],
    "layer": [
        {
            "mark": "area",
            "encoding": {
                "x": {
                    "field": "value",
                    "title": "Age at Death",
                    "type": "quantitative",
                    "scale": { "domain": [0, 120] },
                    "axis": {
                        "titleFont": "Lucida Sans Unicode",
                        "titleFontWeight": 600,
                        "labelFont": "Lucida Sans Unicode",
                        "labelFontWeight": 200
                    }
                },
                "y": {
                    "field": "density",
                    "title": "Density of Mathematicians",
                    "type": "quantitative",
                    "scale": { "domain": [0,0.035] },
                    "axis": {
                        "titleFont": "Lucida Sans Unicode",
                        "titleFontWeight": 600,
                        "labelFont": "Lucida Sans Unicode",
                        "labelFontWeight": 200
                    }
                },
                "color": { "value": "#377eb8" },
                "tooltip": [
                    { "field": "value", "type": "quantitative", "title": "Age" },
                    { "field": "density", "type": "quantitative", "title": "Density" }
                ]
            }
        },{
            "mark": "rule",
            "encoding": {
                "x": {
                    "aggregate": "mean",
                    "field": "value",
                    "type": "quantitative",
                    "scale": { "domain": [0, 120] }
                },
                "color": { "value": "#e41a1c" },
                "size": { "value": 3 },
                "tooltip": [
                    { "aggregate": "mean", "field": "value", "type": "quantitative", "title": "Average Life Span" }
                ]
            }
        },{
            "mark": {
                "type": "text",
                "align": "left",
                "dx": 5,
                "dy": -190,
                "fontSize": 12,
                "fontWeight": 300
            },
            "encoding": { 
                "x": { 
                    "aggregate": "mean",
                    "field": "value",
                    "type": "quantitative",
                    "scale": { "domain": [0,120] }
                },
                "text": { 
                    "value": "Average",
                    "format": {
                        "font": "Lucida Sans Console",
                        "text": "Average"
                    }
                },
                "tooltip": [
                    { "aggregate": "mean", "field": "value", "type": "quantitative", "title": "Average Life Span" }
                ]
            }
        }
    ]
}

vegaEmbed('#density',densityData);
console.log("Density embeded");
    