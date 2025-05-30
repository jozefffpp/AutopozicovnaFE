import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Auto, AutoZoznam} from "../app/models/auto.model";

@Injectable({
  providedIn: 'root'
})
export class AutoServiceService {
  private apiUrl = 'http://localhost:8080/api/cars';

  constructor(private http: HttpClient) { }

  getAuta(): Observable<AutoZoznam[]> {
    return this.http.get<AutoZoznam[]>(`${this.apiUrl}`);
  }

  getAuto(autoId: number): Observable<Auto> {
    return this.http.get<Auto>(`${this.apiUrl}/${autoId}`);
  }

  updateAuto(autoId: number, auto: Auto): Observable<Auto> {
    return this.http.put<Auto>(`${this.apiUrl}/${autoId}`, {id: auto.id, price: auto.price, doors: auto.doors, persons: auto.persons,
      EKEndDate: auto.EKEndDate, safety: auto.safety, lug_boot: auto.lug_boot, PZPEndDate: auto.PZPEndDate, TKEndDate: auto.TKEndDate});
  }

  createAuto(auto: Auto): Observable<Auto> {
    return this.http.post<Auto>(`${this.apiUrl}`, {id: auto.id, price: auto.price, doors: auto.doors, persons: auto.persons,
      EKEndDate: auto.EKEndDate, safety: auto.safety, lug_boot: auto.lug_boot, PZPEndDate: auto.PZPEndDate, TKEndDate: auto.TKEndDate});
  }

  deleteAuto(autoId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${autoId}`);
  }

  getKontrolaAut(): Observable<AutoZoznam[]> {
    return this.http.get<AutoZoznam[]>(`${this.apiUrl}/check`);
  }
}
