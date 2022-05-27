import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Model } from '../models/Model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  aux : any
  newCharacter : Model = {} as Model
  characterList : Model []=[]

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.aux = this.service.getData()
    console.log(this.aux)
    console.log(this.aux.ZoneAwarePromise.__zone_symbol__value.data.results[0].name)
    //this.newCharacter.name = this.aux.data.results[0].name
    //this.newCharacter.description = this.aux.data.results[0].description
    //this.newCharacter = {} as Model
  }

 

}
