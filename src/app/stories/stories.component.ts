import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Model } from '../models/Model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {

  newStorie : Model = {} as Model
  storiesList : Model []=[]
  modelList: Model[]=[]

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.service.getData(environment.URLStories)
    setTimeout(()=>{ 
      this.loadStories()
    }, 3000);
  }

  loadStories(){
    this.modelList = this.service.loadData()
    console.log(this.modelList)
    this.modelList.forEach(model =>{
      this.newStorie.title = model.title
      this.newStorie.description = model.description
      this.storiesList.push(this.newStorie)
      this.newStorie = {} as Model
    })
  }

}
