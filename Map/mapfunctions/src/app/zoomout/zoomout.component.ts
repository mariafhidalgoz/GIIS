import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-zoomout',
  templateUrl: './zoomout.component.html',
  styleUrls: ['./zoomout.component.css']
})
export class ZoomoutComponent implements OnInit {
  @Input() receivedparentmessage: string;
  @Output() receivedata = new EventEmitter<string>();
  
  
  zoomout(event) {
    console.log('Zoom out');
    this.receivedata.emit('data transferred from zoomout component to app');
    
  }
  
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const name = this.route.snapshot.params['name'];
  }

  
}
