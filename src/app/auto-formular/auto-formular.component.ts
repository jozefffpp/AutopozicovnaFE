import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Auto} from "../models/auto.model";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-auto-formular',
  templateUrl: './auto-formular.component.html',
  styleUrls: ['./auto-formular.component.css']
})
export class AutoFormularComponent {

  @Input()
  set auto(data: Auto) {
    if (data) {
      this.naplnForm(data);
    }
  }

  @Output()
  pridajAuto = new EventEmitter<Auto>();

  @Output()
  upravAuto = new EventEmitter<Auto>();

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      id: new FormControl(null),
      price: new FormControl(null),
      doors: new FormControl(null),
      persons: new FormControl(null),
      lug_boot: new FormControl(null),
      safety: new FormControl(null),
      EKEndDate: new FormControl(null),
      TKEndDate: new FormControl(null),
      PZPEndDate: new FormControl(null)
    });
  }

  private naplnForm(auto: Auto): void {
    this.form.controls['id'].setValue(auto.id);
    this.form.controls["price"].setValue(auto.price);
    this.form.controls["doors"].setValue(auto.doors);
    this.form.controls["persons"].setValue(auto.persons);
    this.form.controls["lug_boot"].setValue(auto.lug_boot);
    this.form.controls["safety"].setValue(auto.safety);
    this.form.controls["EKEndDate"].setValue(auto.EKEndDate);
    this.form.controls["TKEndDate"].setValue(auto.TKEndDate);
    this.form.controls["PZPEndDate"].setValue(auto.PZPEndDate);
  }

  public pridaj(): void {
    this.pridajAuto.emit(this.form.value);
    this.form.reset();
  }

  public uprav(): void {
    this.upravAuto.emit(this.form.value);
    this.form.reset();
  }

  public zrus(): void {
    this.form.reset();
  }

}
