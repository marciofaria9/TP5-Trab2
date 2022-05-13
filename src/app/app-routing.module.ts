import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { ComicsComponent } from './comics/comics.component';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { SeriesComponent } from './series/series.component';
import { StoriesComponent } from './stories/stories.component';

const routes: Routes = [
{path: 'characters', component: CharactersComponent},
{path: 'comics', component: ComicsComponent},
{path: 'events', component: EventsComponent},
{path: 'home', component: HomeComponent},
{path: 'series', component: SeriesComponent},
{path: 'stories', component: StoriesComponent},
{path: '', component: HomeComponent}


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
