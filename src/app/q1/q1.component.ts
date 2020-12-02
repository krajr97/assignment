import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-q1',
  templateUrl: './q1.component.html',
  styleUrls: ['./q1.component.css']
})
export class Q1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  index = 0;
  result = 0;
  show:boolean = false;

  getNumber(form: NgForm) {
    this.index = form.value.number;
    var number = Math.pow(this.index, 2);
    if (number % 2 == 0) {
      this.result = number - 1;
      this.showNumber();
    } else {
      this.result = number + 1;
      this.showNumber();
    }
    form.reset();
  }

  showNumber() {
    this.show = true;
  }

}
