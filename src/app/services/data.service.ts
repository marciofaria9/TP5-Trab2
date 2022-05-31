
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Model } from '../models/Model';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  model: Model = {} as Model
  modelList : Model [] = []
  offset = 0

  constructor() { }

  getData(url: string){
    this.modelList = []
   
    fetch(`${url}${environment.timestamp}&apikey=${environment.publicKey}&hash=${environment.hash}&limit=100&offset=${this.offset}`
    ).then((response) =>{
       return response.json();
    }).then((jsonPased) =>{
      console.log(jsonPased)
      for(let i = 0; i < jsonPased.data.results.length ; i++){
          this.model = jsonPased.data.results[i]
          this.modelList.push(this.model)
          this.model = {} as Model
          console.log(i)
      }
      //this.offset = this.offset + 100
    })
  }
  
  loadData(){        
    return this.modelList
    
  }
}

