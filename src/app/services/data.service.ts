import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Model } from '../models/Model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  model: Model = {} as Model 
  constructor(private http:HttpClient) { }

  getData(url: string){
    fetch(`${url}${environment.timestamp}&apikey=${environment.publicKey}&hash=${environment.hash}&limit=10`
    ).then((response) =>{
       return response.json();
    }).then((jsonPased) =>{
      for(let i = 0; i < jsonPased.data.results.lenght ; i++){
        console.log(i)
      }
      this.model.name = jsonPased.data.results[0].name
    })
  }
  
  loadData(){    
    return this.model
  }
}

