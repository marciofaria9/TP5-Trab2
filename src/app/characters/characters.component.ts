import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Model } from '../models/Model';
import { DataService } from '../services/data.service';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  
  newCharacter : Model = {} as Model
  characterList : Model []=[]
  modelList: Model[]=[]
  i = 0
  max = 5;

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.service.getData(environment.URLCaracter)
    setTimeout(()=>{ 
      this.loadCharacteres()
    }, 3000);
    
  }

  loadCharacteres(){
    this.modelList = this.service.loadData()
    console.log(this.modelList)
    this.modelList.forEach(model =>{
      this.newCharacter.name = model.name
      this.newCharacter.description = model.description
      this.characterList.push(this.newCharacter)
      this.newCharacter = {} as Model
      console.timeLog("passou aqui")
    })
  }

 
  
}
