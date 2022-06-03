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
    setTimeout(()=>{ 
      this.loadComics()
    }, 3000);
  }

  loadComics(){
    this.modelList = this.service.loadData()
    console.log(this.modelList)
    this.modelList.forEach(model =>{
      this.newComic = model
      this.newComic.image = `${model.thumbnail?.path}.${model.thumbnail?.extension}`
      this.comicList.push(this.newComic)
      this.newComic = {} as Model
    })
       
  }
}
