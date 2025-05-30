import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Auto, AutoZoznam} from "../models/auto.model";
import {AutoServiceService} from "../../Services/auto-service.service";

@Component({
  selector: 'app-auto-stranka',
  templateUrl: './auto-stranka.component.html',
  styleUrls: ['./auto-stranka.component.css']
})
export class AutoStrankaComponent implements OnInit {
  auta: AutoZoznam[] = [];

  autoNaUpravu?: Auto;

  visibilityzoznam:boolean=false;
  visibilitykontrola:boolean=true;

  constructor(private router: Router, private autoService: AutoServiceService) { }

  ngOnInit(): void {
    this.refreshAut();
  }

  refreshAut(): void {
    this.autoService.getAuta().subscribe(data => {
      console.log('prislo:', data);
      this.auta = data;
    });
  }

  chodSpat(): void {
    this.router.navigate(['']);
  }

  pridaj(auto: Auto): void {
    this.autoService.createAuto(auto).subscribe(data => {
      console.log('prislo:', data);
      this.refreshAut();
    });
  }
  uprav(auto: Auto): void {
    if (auto.id !== undefined) {
      this.autoService.updateAuto(auto.id, auto).subscribe(data => {
        console.log('prislo:', data);
        this.refreshAut();
      });
    }
  }

  upravZoZoznamu(autoId: number): void {
    this.autoService.getAuto(autoId).subscribe(data => {
      console.log('prislo:', data);
      this.autoNaUpravu = data;
    });
  }

  zmazZoZoznamu(autoId: number): void {
    this.autoService.deleteAuto(autoId).subscribe(data => {
      this.refreshAut();
    });
  }

  viditelnostkontrola(): void{
      this.visibilitykontrola=true;
      this.visibilityzoznam=false;
  }
  viditelnostzoznam(): void{
    this.visibilitykontrola=false;
    this.visibilityzoznam=true;
  }


}
