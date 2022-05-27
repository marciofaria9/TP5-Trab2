import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Model } from '../models/Model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  newComic: Model = {} as Model
  comicList: Model  [] = []
  modelList : Model [] = []
  
  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.service.getData(environment.URLComics)
  }

  loadComics(){
    this.modelList = this.service.loadData()
    console.log(this.modelList)
    this.modelList.forEach(model =>{
      this.newComic.title = model.title
      this.newComic.description = model.description
      this.comicList.push(this.newComic)
      this.newComic = {} as Model
    })
       
  }
}
