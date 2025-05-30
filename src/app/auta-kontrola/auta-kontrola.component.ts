import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AutoZoznam} from "../models/auto.model";

@Component({
  selector: 'app-auta-kontrola',
  templateUrl: './auta-kontrola.component.html',
  styleUrls: ['./auta-kontrola.component.css']
})
export class AutaKontrolaComponent{

  term!: string;

  @Input()
  auta: AutoZoznam[] = [];

  @Output()
  upravAuto: EventEmitter<number> = new EventEmitter<number>();

  uprav(autoId: number): void {
    this.upravAuto.emit(autoId);

  }

}
