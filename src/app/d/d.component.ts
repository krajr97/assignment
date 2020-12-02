import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharingService } from '../sharing.service';

@Component({
  selector: 'app-d',
  templateUrl: './d.component.html',
  styleUrls: ['./d.component.css']
})
export class DComponent implements OnInit, OnDestroy {

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
