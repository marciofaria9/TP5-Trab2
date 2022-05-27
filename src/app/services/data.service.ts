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

  constructor(private http:HttpClient) { }

  getData(){
    fetch(`${environment.URLCaracter}1565045589&apikey${environment.publicKey}&hash${environment.hash}&limit=6`
    ).then((response) =>{
      return response.json();
    }).then((jsonPased) =>{
      console.log(jsonPased)
    })
  }
  
}

