const { default: vegaEmbedModule } = require("vega-embed");

var containerWidth = document.getElementById("map").clientWidth;
var containerHeight = document.getElementById("map").clientHeight;

const vgData = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.1.0.json",
    "width": containerWidth,
    "height": containerHeight,
    "data": {
        "url": "data/worldMap.topojson",
        "format": {
            "type": "topojson",
            "feature": "worldMap"
        }
    },
    "projection": { "type": "equirectangular" },
    "layer": [
        {
            "transform": [{ "calculate": "'Data is not avaliable in ' + datum.properties.NAME", "as": "note" }],
            "mark": { "type": "geoshape", "fill": "lightgrey", "stroke": "#757575" },
            "encoding": { "tooltip": { "field": "note", "format": { "font": "Lucida Sans Unicode" }}}
        },{
            "transform": [
                {
                    "lookup": "properties.NAME",
                    "from": {
                        "data": { "url": "data/map.csv" },
                        "key": "Country",
                        "fields": ["patriotic","in","out","Index"]
                    }
                }
            ],
        
            "mark": { 
                "type": "geoshape",
                "stroke": "#757575"
            },
            "encoding": {
                "color": {
                    "field": "Index",
                    "type": "quantitative",
                    "scale": { "scheme": "redyellowblue" }
                },
                "tooltip": [
                    { "field": "properties.NAME", "type": "nominal", "title": "Country", "format": { "font": "Lucida Sans Unicode" } },
                    { "field": "patriotic", "type": "quantitative", "title": "Patriots", "format": { "font": "Lucida Sans Unicode" } },
                    { "field": "in", "type": "quantitative", "title": "Immigrants", "format": { "font": "Lucida Sans Unicode" } },
                    { "field": "out", "type": "quantitative", "title": "Emigrants", "format": { "font": "Lucida Sans Unicode" } }
                ]
            }
        }
    ]
}

vegaEmbed('#map',vgData);
    