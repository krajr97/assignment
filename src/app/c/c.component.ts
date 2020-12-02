import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharingService } from '../sharing.service';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.css']
})
export class CComponent implements OnInit, OnDestroy {

  constructor(public sharingService : SharingService) { }

  private sharingSubs :Subscription;
  text : String;

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
