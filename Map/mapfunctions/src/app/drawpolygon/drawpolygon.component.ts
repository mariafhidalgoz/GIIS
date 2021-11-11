import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-drawpolygon',
  templateUrl: './drawpolygon.component.html',
  styleUrls: ['./drawpolygon.component.css']
})
export class DrawpolygonComponent implements OnInit {
  @Input() receivedparentmessage: string;
  @Output() receivedata = new EventEmitter<string>();
  
 
  drawpolygon(event) {
    console.log('Draw polygon');
    this.receivedata.emit('data transferred from drawpolygon component to app');
    
  }
  
 
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const name = this.route.snapshot.params['name'];
  }

}
