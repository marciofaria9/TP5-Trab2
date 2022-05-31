import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Model } from '../models/Model';
import { CharacterService } from './character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  
  newCharacter : Model = {} as Model
  characterList : Model []=[]
  modelList: Model[]=[]
  offset = 0;
  mult = 100; 

  constructor(private service: CharacterService) { }

  ngOnInit(): void {
    this.service.getCharacter(environment.URLCaracter, (0 * this.mult))
    setTimeout(()=>{ 
      this.loadCharacteres()
    }, 3000);
    this.service.getCharacter(environment.URLCaracter, (1 * this.mult))
    setTimeout(()=>{ 
      this.loadCharacteres()
    }, 3000);
  }

  loadCharacteres(){
    this.modelList = this.service.loadCharacter()
    console.log(this.modelList)
    this.modelList.forEach(model =>{
      this.newCharacter.name = model.name
      this.newCharacter.description = model.description
      this.characterList.push(this.newCharacter)
      this.newCharacter = {} as Model
      
    })
  }

 
  
}
