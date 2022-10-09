import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CoinService {


  public base_url = 'https://hackathon.lsp.team/hk'

  constructor( private http: HttpClient) {
  }

  sentRubles(from: string, to:string, amount:number): Observable<any> {

    let url = '/v1/transfers/ruble'

    let data = {
      fromPrivateKey: from,
      toPublicKey: to,
      amount: amount
    }

    return this.http.post(this.base_url + url, data)
  }

  getBalance(publicKey: string): Observable<any> {
    let url = `/v1/wallets/${publicKey}/balance`
    return this.http.get(this.base_url + url)
  }

  getNFTBalance(publicKey: string): Observable<any> {
    let url = `/v1/wallets/${publicKey}/nft/balance`
    return this.http.get(this.base_url + url)
  }




}
