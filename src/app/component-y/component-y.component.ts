import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from '../post.service';

@Component({
  selector: 'app-component-y',
  templateUrl: './component-y.component.html',
  styleUrls: ['./component-y.component.css'],
})
export class ComponentYComponent implements OnInit {

  constructor(private postService: PostService) {}

  @Input() Name: String;
  saved: boolean = false;

  ngOnInit(): void {}

  onAction(data: NgForm) {
    this.saved = true;
    const msg = {
      compName : this.Name,
      message: data.value.message
    };
    this.postService.postMessage(msg);
  }
}
