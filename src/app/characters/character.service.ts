import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Model } from '../models/Model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  model: Model = {} as Model
  modelList : Model [] = []
  
  constructor() { }

  getCharacter(url: string, offset: number){
    if (offset === 0){
      this.modelList = []
    }
    
    console.log(offset)
    fetch(`${url}${environment.timestamp}&apikey=${environment.publicKey}&hash=${environment.hash}&limit=100&offset=${offset}`
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
            
    })
  }

  loadCharacter(){
    return this.modelList
  }
}
