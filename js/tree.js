var styles = window.getComputedStyle(document.getElementById('tree'))
var containerWidth = parseFloat(styles.width);
var containerHeight = parseFloat(styles.height);

const treeData = {
    "$schema": "https://vega.github.io/schema/vega/v5.20.2.json",
    "width": (containerWidth-9)*568/636,
    "height": containerHeight*288283/298000,
    "autosize": "none",
    "data": [
      {
        "name": "tree",
        "url": "data/tree.json",
        "transform": [
          {
            "type": "stratify",
            "key": "id",
            "parentKey": "parent"
          },{
            "type": "treemap",
            "field": "size",
            "sort": { "field": "value" },
            "round": true,
            "method": "binary",
            "size": [{ "signal": "width" }, { "signal": "height"}]
          }
        ]
      },{
        "name": "nodes",
        "source": "tree",
        "transform": [{ "type": "filter", "expr": "datum.children" }]
      },{
        "name": "leaves",
        "source": "tree",
        "transform": [{ "type": "filter", "expr": "!datum.children" }]
      }
    ],
    "scales": [
      {
        "name": "colour",
        "type": "ordinal",
        "domain": { "data": "nodes", "field": "name" },
        "range": [
          "#e41a1c", "#e73133", "#e94849", "#ec5f61", "#ef7677", "#f4a3a4", "#fad1d2", "#fce9e9",
          "#377eb8", "#5f98c6", "#73a5cd", "#afcbe3", "#d7e5f1",
          "#4daf4a", "#a6d7a5", 
          "#984ea3", "#b27aba", "#cca7d1", "#e6d3e8", 
          "#ff7f00",
          "#ffc233",
          "#f781bf",
          "#a65628",
          "#999999"
        ]
      },{
        "name": "size",
        "type": "ordinal",
        "domain": [0,1,2,3],
        "range": [256, 28, 20, 14]
      },{
        "name": "opacity",
        "type": "ordinal",
        "domain": [0, 1, 2, 3],
        "range": [0.15, 0.5, 0.8, 1.0]
      }
    ],
    "params": [
      {
        "name": "highlight",
        "select": { "type": "point", "on": "mouseover" }
      },
      { "name": "select", "select": "point" }
    ],
    "marks": [
      {
        "type": "rect",
        "from": { "data": "nodes" },
        "interactive": false,
        "stroke": "black",
        "encode": {
          "enter": { "fill": { "scale": "colour", "field": "name" }},
          "update": {
            "x": { "field": "x0" },
            "y": { "field": "y0" },
            "x2": { "field": "x1" },
            "y2": { "field": "y1" }
          }
        }
      },{
        "type": "rect",
        "from": { "data": "leaves" },
        "encode": {
          "enter": { 
            "stroke": { "value": "#fff" },
            "tooltip": [{ "signal": "{'Occupation': datum.name, 'Size': datum.size}"}]
          },
          "update": {
            "x": { "field": "x0" },
            "y": { "field": "y0" },
            "x2": { "field": "x1" },
            "y2": { "field": "y1" },
            "fill": { "value": "transparent" },
            "stroke": { "value": "#fff" }
          },
          "hover": { "fill": { "value": "#b3b3b3" }}
        }
      },{
        "type": "text",
        "from": {"data": "nodes"},
        "interactive": false,
        "encode": {
          "enter": {
            "align": { "value": "center" },
            "baseline": { "value": "middle" },
            "fill": { "value": "#000" },
            "text": { "field": "name" },
			"font": { "value": "Lucida Sans Unicode" },
            "fontWeight": { "value": "bold" },
            "lineBreak": { "value": " " },
            "fontSize": { "value": fontsizeInformation }
          },
          "update": {
            "x": {"signal": "0.5 * (datum.x0 + datum.x1)"},
            "y": {"signal": "0.5 * (datum.y0 + datum.y1)"}
          }
        }
      }
    ]
  }

vegaEmbed('#tree',treeData);
console.log("Tree embeded")
    