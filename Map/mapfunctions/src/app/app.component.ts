import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { transformExtent} from 'ol/proj';
import { Observable} from 'rxjs';

@Component({

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  @Input() receivedparentmessage: string;
  @Output() receivedata = new EventEmitter<string>();
  map: any;
 

  

  transferdata(event) {
    // console.log('Zoom In');
    // console.log('Zoom Out');
    // console.log('Measure Length');
    this.receivedata.emit('data transferred to app from parent');
  }
    constructor(private router: Router, private route: ActivatedRoute) {
      
    }
  ngOnInit() {
    const name = this.route.snapshot.params['name'];
  }

  zoomin(event){
        alert('zoomin Component : '+event);
  }
  zoomout(event){
       alert('zoomout Component : '+event);
      }
  extent(event){
        alert('extent Component : ' +event);
        this.map.extent(transformExtent([68.17665, 7.96553, 97.40256, 35.49401], 'EPSG:4326', 'EPSG:3857')) ;
        console.log(this.map);
        // this.map.getView().fit([7275582.100296217, 656746.9470262342, 10536079.978828695, 2263759.02969378], this.map.getSize());
         
        this.map.getView().fit(["myExtent"], this.map.getSize());
        
      }
     
       
  drawline(event){
          alert('drawline: '+event);
      }

  drawpolygon(event){
          alert('drawpolygon: '+event);
      }

}
export class ZoominComponent implements OnInit {
  @Input() receivedparentmessage: string;
  @Output() receivedata = new EventEmitter<string>();
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const name = this.route.snapshot.params['name'];
  }

  zoomin(event) {
    console.log('Zoom In');
    this.receivedata.emit('data transferred from zoomin component to app component');
  }
  
 
}
export class ZoomoutComponent implements OnInit {
  @Input() receivedparentmessage: string;
  @Output() receivedata = new EventEmitter<string>();
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const name = this.route.snapshot.params['name'];
  }

  zoomout(event) {
    console.log('Zoom Out');
    this.receivedata.emit('data transferred from zoomout component to app component');
  }
}
export class ExtentComponent implements OnInit {
  @Input() receivedparentmessage: string;
  @Output() receivedata = new EventEmitter<string>();
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const name = this.route.snapshot.params['name'];
  }

  extent(event) {
    console.log('extent');
    this.receivedata.emit('data transferred from extent component to app component');
  }
    
}
export class DrawlineComponent implements OnInit {
  @Input() receivedparentmessage: string;
  @Output() receivedata = new EventEmitter<string>();
  
   
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const name = this.route.snapshot.params['name'];
  }
  drawline(event) {
    console.log('drawline');
    this.receivedata.emit('data transferred from drawline component to app component');
    
  }
}

export class DrawpolygonComponent implements OnInit {
  @Input() receivedparentmessage: string;
  @Output() receivedata = new EventEmitter<string>();
  
   
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const name = this.route.snapshot.params['name'];
  }
  drawline(event) {
    console.log('drawpolygon');
    this.receivedata.emit('data transferred from drawpolygon component to app component');
    
  }
}




