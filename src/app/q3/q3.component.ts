import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-q3',
  templateUrl: './q3.component.html',
  styleUrls: ['./q3.component.css']
})
export class Q3Component implements OnInit {

  element : String;
  Array: String[] = [];

  addReq(){
    this.Array.push(this.element);
    this.element = '';
  }

  removeReq(element: String){
    let index = this.Array.indexOf(element);
    this.Array.splice(index, 1);
  }

  onSubmit() {
    var data : any = [];
    var element = 0;
    for (let index = 0; index < this.Array.length; index++) {
      element++;
      var phoneNumber = {};
      var key = 'phoneNumber' + element;
      phoneNumber[key] = this.Array[index];
      data[index] = phoneNumber;
    }
    console.log(JSON.stringify(data));
  }

  constructor() { }

  ngOnInit(): void {
  }

}
