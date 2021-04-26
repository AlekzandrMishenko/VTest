import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ITariffs } from "../interfaces/tarif.interfaces";


@Injectable({
  providedIn: 'root'
})
export class TariffsService {

  constructor(private httpClient: HttpClient) { }

  public getTariffList(): Observable<ITariffs> {
    return this.httpClient.get<ITariffs>('../../../assets/data.json')
  }
}
