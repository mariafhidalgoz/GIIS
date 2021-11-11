import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-zoomin',
  templateUrl: './zoomin.component.html',
  styleUrls: ['./zoomin.component.css']
})
export class ZoominComponent implements OnInit {
  @Input() receivedparentmessage: string;
  @Output() receivedata = new EventEmitter<string>();
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const name = this.route.snapshot.params['name'];
  }

  zoomin(event) {
    console.log('Zoom In');
    this.receivedata.emit('data transferred from zoomin component to app');
    
  }
}

