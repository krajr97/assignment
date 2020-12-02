import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-q2',
  templateUrl: './q2.component.html',
  styleUrls: ['./q2.component.css']
})
export class Q2Component implements OnInit {

  constructor() { }

  index = 0;
  components = [];

  addComponent() {
    this.index++;
    this.components.push(this.index);
  }

  ngOnInit(): void {
  }

}
