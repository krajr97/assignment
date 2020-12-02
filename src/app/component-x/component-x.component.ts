import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-x',
  templateUrl: './component-x.component.html',
  styleUrls: ['./component-x.component.css']
})

export class ComponentXComponent implements OnInit {

  tab_name: any = "Component name";
  editflag:boolean = true;
  index = 0;
  components = [];

  constructor() { }

  editTab() {
    this.editflag = false;
  }

  saveTab() {
    this.editflag = true;
  }

  ngOnInit() {
  }

  addComponent() {
    this.index++;
    this.components.push(this.index);
  }

}
