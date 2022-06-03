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
  
  i = 0;
  newCharacter : Model = {} as Model
  characterList : Model []=[]
  modelList: Model[]=[]
  mult = 100; 

  constructor(private service: CharacterService) { }

  ngOnInit(): void {
    
    this.loadPage()

  }

  loadCharacteres(){
    this.modelList = this.service.loadCharacter()
    console.log(this.modelList)
    this.modelList.forEach(model =>{
      this.newCharacter = model      
      this.newCharacter.image = `${model.thumbnail?.path}.${model.thumbnail?.extension}`
      this.characterList.push(this.newCharacter)
      this.newCharacter = {} as Model
      
    })
  }

  loadPage(){
    
    if(this.i < 17){
      this.service.getCharacter(environment.URLCaracter, (this.i * this.mult))
      setTimeout(()=>{
        this.i++
        this.loadCharacteres() 
        console.log("Segundo " + this.i)
        this.loadPage()
      }, 3000);
    }
  }
  
}
