import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Model } from '../models/Model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  
  newSerie : Model = {} as Model
  seriesList : Model []=[]
  modelList: Model[]=[]

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.service.getData(environment.URLSeries)
    setTimeout(()=>{ 
      this.loadSeries()
    }, 3000);
  }

  loadSeries(){
    this.modelList = this.service.loadData()
    console.log(this.modelList)
    this.modelList.forEach(model =>{
      this.newSerie.title = model.title
      this.newSerie.description = model.description
      this.seriesList.push(this.newSerie)
      this.newSerie = {} as Model
    })
  }
}
