import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Model } from '../models/Model';
import { RequestApi } from '../models/requestApi';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  aux:any;
  constructor(private http:HttpClient) { }

  getData(){
    this.aux = fetch(`${environment.URLCaracter}${environment.timestamp}&apikey=${environment.publicKey}&hash=${environment.hash}&limit=10`
    ).then((response) =>{
       return response.json();
    }).then((jsonPased) =>{
      
      return jsonPased
    })
    return this.aux
  }
  
}

