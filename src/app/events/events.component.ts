import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Model } from '../models/Model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  newEvent : Model = {} as Model
  eventList : Model [] = []
  modelList: Model [] = []

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.service.getData(environment.URLEvents)
    setTimeout(()=>{ 
      this.loadEvents()
    }, 3000);
  }

  loadEvents(){
    this.modelList = this.service.loadData()
    console.log(this.modelList)
    this.modelList.forEach(model =>{
      this.newEvent.title = model.title
      this.newEvent.description = model.description
      this.eventList.push(this.newEvent)
      this.newEvent = {} as Model
    })
       
  }

}
