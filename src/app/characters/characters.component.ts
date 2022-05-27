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

  newCharacter : Model = {} as Model
  characterList : Model []=[]

  constructor(private service: DataService) { }

  ngOnInit(): void {
   this.service.getData()
  }

 

}
