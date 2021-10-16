var styles = window.getComputedStyle(document.getElementById('brush'))
var containerWidth = parseFloat(styles.width);
var containerHeight = parseFloat(styles.height);

const brushData = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.1.0.json",
    "data": {"url": "https://raw.githubusercontent.com/sbro0020/sbro0020.github.io/main/data/brush.csv"},
    "vconcat": [
      {
        "width": containerWidth*0.85,
        "height": containerHeight*0.85*0.8,
        "mark": "area",
        "encoding": {
          "x": {
            "field": "year",
            "type": "quantitative",
            "scale": {"domain": {"param": "brush"}},
            "axis": {"title": "", "tickCount": 8 }
          },
          "y": {
            "field": "num",
            "title": "Number of Living Mathematicians",
            "type": "quantitative",
            "scale": {"domain": [0, 3000] }
          },
          "color": {"value": "#377eb8"}
        }
      },
      {
        "width": containerWidth*0.85,
        "height": containerHeight*0.85*0.2,
        "mark": "area",
        "params": [
          {"name": "brush", "select": {"type": "interval", "encodings": ["x"]}}
        ],
        "encoding": {
          "x": {
            "field": "year",
            "title": "Year (CE)",
            "type": "quantitative",
            "axis": {
              "titleFont": "Lucida Sans Unicode",
              "titleFontWeight": 600,
              "labelFont": "Lucida Sans Unicode",
              "labelFontWeight": 200
            }
          },
          "color": {"value": "#377eb8"},
          "y": {
            "field": "num",
            "title": "",
            "type": "quantitative",
            "axis": {
              "titleFont": "Lucida Sans Unicode",
              "titleFontWeight": 600,
              "labelFont": "Lucida Sans Unicode",
              "labelFontWeight": 200
            },
            "scale": {"domain": [0, 3000]}
          }
        }
      }
    ]
  }

vegaEmbed('#brush',brushData);
console.log("Brush embeded");
    