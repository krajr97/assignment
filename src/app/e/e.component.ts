import { Component, OnInit } from '@angular/core';
import { SharingService } from '../sharing.service';

@Component({
  selector: 'app-e',
  templateUrl: './e.component.html',
  styleUrls: ['./e.component.css']
})
export class EComponent implements OnInit {

  text : String = "";
  constructor(public sharingService: SharingService) { }

  onChange() {
    this.sharingService.addNewtext(this.text);
  }

  ngOnInit(): void {
  }

}
