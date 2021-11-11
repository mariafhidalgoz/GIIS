import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-drawline',
  templateUrl: './drawline.component.html',
  styleUrls: ['./drawline.component.css']
})
export class DrawlineComponent implements OnInit {
  @Input() receivedparentmessage: string;
  @Output() receivedata = new EventEmitter<string>();
  
 
  drawline(event) {
    console.log('Draw line');
    this.receivedata.emit('data transferred from drawline component to app');
    
  }
  constructor(private router: Router, private route: ActivatedRoute) { }


  ngOnInit() {
    const name = this.route.snapshot.params['name'];
  }

}
