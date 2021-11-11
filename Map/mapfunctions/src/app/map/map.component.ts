import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import { LineString, Polygon, Point } from 'ol/geom.js';
import GeometryType from 'ol/geom/GeometryType';
import OverlayPositioning from 'ol/OverlayPositioning';
import Draw from 'ol/interaction/Draw.js';
import { Tile as TileLayer, Vector as VectorLayer, Vector } from 'ol/layer.js';
import { OSM, Vector as VectorSource } from 'ol/source.js';
import { Circle as CircleStyle, Fill, Stroke, Style, Icon } from 'ol/style.js';
import { defaults as defaultInteractions, DragRotateAndZoom } from 'ol/interaction.js';
import { fromLonLat, get } from 'ol/proj.js';
import "ol/ol.css";
import { transform } from 'ol/proj';
import { Observable, from } from 'rxjs';
import { environment } from 'src/environments/environment';
import { unByKey } from 'ol/Observable.js';
import Overlay from 'ol/Overlay.js';
import { getArea, getLength } from 'ol/sphere.js';

import { drawImage } from 'ol/render/canvas';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css',]
})
export class MapComponent implements OnInit {
  map: any;
  draw: any;
  

  constructor() {}

  ngOnInit() {
    this.initializeMap();
    // this.addcontrol1(event);
    // const myExtent= transform([20.5936832, 78.962883] , 'EPSG:4326', 'EPSG:3857');
    console.log(this.map);
    // this.map.getView().fit([7275582.100296217, 656746.9470262342, 10536079.978828695, 2263759.02969378], this.map.getSize());
    this.map.getView().fit(environment.myExtent, this.map.getSize());
    console.log(environment.myExtent);
  }

  initializeMap() {
    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          preload: 4,
          source: new OSM()
        })
      ]
    });
  }

  

  zoomin(event) {
    alert('zoomin : ' + event);
    console.log(this.map);
    this.map.getView().setZoom(this.map.getView().getZoom() + 1);

  }

  zoomout(event) {
    alert('zoomout: ' + event);
    console.log(this.map);
    this.map.getView().setZoom(this.map.getView().getZoom() - 1);

  }

  extent(event) {
    alert('extent : ' + event);
    // this.map.extent=transform([20.5936832, 78.962883] , 'EPSG:4326', 'EPSG:3857') ;
    // console.log(this.map);
    //  this.map.getView().fit([7275582.100296217, 656746.9470262342, 10536079.978828695, 2263759.02969378], this.map.getSize());
    this.map.getView().fit(environment.myExtent, this.map.getSize());
    console.log(environment.myExtent);
  }

  drawline(event){
   alert('Draw line: '+ event);
   var source = new VectorSource();
   var vector = new VectorLayer({
     source: source,
     style: new Style({
       fill: new Fill({
         color: 'rgba(255, 255, 255, 0.2)'
       }),
       stroke: new Stroke({
         color: '#ffcc33',
         width: 2
       }),
       image: new CircleStyle({
         radius: 7,
         fill: new Fill({
           color: '#ffcc33'
         })
       })
     })
   });
   var formatLength = function(line) {
    var length = getLength(line);
    var output;
    if (length > 100) {
      output = (Math.round(length / 1000 * 100) / 100) +
          ' ' + 'km';
    } else {
      output = (Math.round(length * 100) / 100) +
          ' ' + 'm';
    }
    return output;
  };
   var sketch;
   var measureTooltipElement;
   var measureTooltip;
   var typeSelect = document.getElementById('drawline');
   var type=(typeSelect.id=='drawline'? GeometryType.LINE_STRING : GeometryType.POLYGON)
  //  var type = (typeSelect.value == 'Line' ? 'LineString' : 'Polygon');
   this.draw = new Draw({
    source: source,
    type: type,
    style: new Style({
      fill: new Fill({
        color: 'rgba(255, 255, 255, 0.2)'
      }),
      stroke: new Stroke({
        color: 'rgba(0, 0, 0, 0.5)',
        lineDash: [10, 10],
        width: 2
      }),
      image: new CircleStyle({
        radius: 5,
        stroke: new Stroke({
          color: 'rgba(0, 0, 0, 0.7)'
        }),
        fill: new Fill({
          color: 'rgba(255, 255, 255, 0.2)'
        })
      })
    })
  });
       this.map.addInteraction(this.draw);
       this.map.addLayer(vector);
       createMeasureTooltip(this.map);
       var listener;
       this.draw.on('drawstart',
       function(evt) {
         console.log('Draw start');
         // set sketch
         sketch = evt.feature;

         /** @type {module:ol/coordinate~Coordinate|undefined} */
         var tooltipCoord = evt.coordinate;
         listener = sketch.getGeometry().on('change', function(evt) {
           var geom = evt.target;
           var output;
            if (geom instanceof LineString) {
              output = formatLength(geom);
              tooltipCoord = geom.getLastCoordinate();
            }
           measureTooltipElement.innerHTML = output;
           measureTooltip.setPosition(tooltipCoord);
         });
       }, this);

       this.draw.on('drawend',
          function() {
            console.log('Draw end');
            measureTooltipElement.className = 'tooltip tooltip-static';
            measureTooltip.setOffset([0, -7]);
            // unset sketch
            sketch = null;
            // unset tooltip so that a new one can be created
            measureTooltipElement = null;
            createMeasureTooltip(this.map);
            unByKey(listener);
          }, this);

          function createMeasureTooltip(map) {
            if (measureTooltipElement) {
              measureTooltipElement.parentNode.removeChild(measureTooltipElement);
            }
            measureTooltipElement = document.createElement('div');
            measureTooltipElement.className = 'tooltip tooltip-measure';
            measureTooltip = new Overlay({
              element: measureTooltipElement,
              offset: [0, -15],
              positioning: OverlayPositioning.BOTTOM_CENTER
            });
            map.addOverlay(measureTooltip);
          } 
          this.map.addLayer(vector);
          this.map.removeInteraction();
          this.map.addInteraction(this.draw);                                 
}

  drawpolygon(event){
    alert('Draw polygon: '+ event);
    var source = new VectorSource();
    var vector = new VectorLayer({
     source: source,
     style: new Style({
       fill: new Fill({
         color: 'rgba(255, 255, 255, 0.2)'
       }),
       stroke: new Stroke({
         color: '#ffcc33',
         width: 2
       }),
       image: new CircleStyle({
         radius: 7,
         fill: new Fill({
           color: '#ffcc33'
         })
       })
     })
   });
   var formatArea = function(polygon) {
    var area = getArea(polygon);
    var output;
    if (area > 10000) {
      output = (Math.round(area / 1000000 * 100) / 100) +
          ' ' + 'km<sup>2</sup>';
    } else {
      output = (Math.round(area * 100) / 100) +
          ' ' + 'm<sup>2</sup>';
    }
    return output;
  };
   var sketch;
   var measureTooltipElement;
   var measureTooltip;
   var typeSelect = document.getElementById('drawpolygon');
   var type=(typeSelect.id=='drawpolygon'?GeometryType.POLYGON: GeometryType.LINE_STRING)
   this.draw = new Draw({
    source: source,
    type: type,
    style: new Style({
      fill: new Fill({
        color: 'rgba(255, 255, 255, 0.2)'
      }),
      stroke: new Stroke({
        color: 'rgba(0, 0, 0, 0.5)',
        lineDash: [10, 10],
        width: 2
      }),
      image: new CircleStyle({
        radius: 5,
        stroke: new Stroke({
          color: 'rgba(0, 0, 0, 0.7)'
        }),
        fill: new Fill({
          color: 'rgba(255, 255, 255, 0.2)'
        })
      })
    })
  });
     this.map.addInteraction(this.draw);
     this.map.addLayer(vector);
     createMeasureTooltip(this.map);
     var listener;
     this.draw.on('drawstart',
     function(evt) {
       console.log('Draw start');
       // set sketch
       sketch = evt.feature;

       /** @type {module:ol/coordinate~Coordinate|undefined} */
       var tooltipCoord = evt.coordinate;
       listener = sketch.getGeometry().on('change', function(evt) {
         var geom = evt.target;
         var output;
          if (geom instanceof Polygon) {
            output = formatArea(geom);
            tooltipCoord = geom.getLastCoordinate();
          }
         measureTooltipElement.innerHTML = output;
         measureTooltip.setPosition(tooltipCoord);
       });
     }, this);

     this.draw.on('drawend',
        function() {
          console.log('Draw end');
          measureTooltipElement.className = 'tooltip tooltip-static';
          measureTooltip.setOffset([0, -7]);
          // unset sketch
          sketch = null;
          // unset tooltip so that a new one can be created
          measureTooltipElement = null;
          createMeasureTooltip(this.map);
          unByKey(listener);
        }, this);

        function createMeasureTooltip(map) {
          if (measureTooltipElement) {
            measureTooltipElement.parentNode.removeChild(measureTooltipElement);
          }
          measureTooltipElement = document.createElement('div');
          measureTooltipElement.className = 'tooltip tooltip-measure';
          measureTooltip = new Overlay({
            element: measureTooltipElement,
            offset: [0, -15],
            positioning: OverlayPositioning.BOTTOM_CENTER
          });
          map.addOverlay(measureTooltip);
        } 
     this.map.addLayer(vector);  
     this.map.removeInteraction(this.draw);
     this.map.addInteraction(this.draw);
 
   }

};
    
    

   




