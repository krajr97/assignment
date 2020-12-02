import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharingService } from '../sharing.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit, OnDestroy {

  constructor(public sharingService : SharingService) { }

  text : String;
  private sharingSubs :Subscription;

  ngOnInit() {
    this.text = this.sharingService.getText();
    this.sharingSubs =  this.sharingService.getUpdatedtext()
    .subscribe((data: String) => {
      this.text = data;
    });
  }

  ngOnDestroy() {
    this.sharingSubs.unsubscribe();
  }

}
