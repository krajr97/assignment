import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharingService {

  private text: String = "";
  private textUpdated = new Subject<String>();

  getText() {
    return this.text;
  }

  getUpdatedtext() {
    return this.textUpdated.asObservable();
  }

  addNewtext(text: String) {
    this.text = text;
    this.textUpdated.next(this.text);
  }

  constructor() { }
}
