import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewMovieComponent} from './new-movie/new-movie.component';
import {MovieComponent} from './movie/movie.component';
import {EditMovieComponent} from './edit-movie/edit-movie.component';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  {path : "new-movie" , component: NewMovieComponent},
  {path : "movies" , component: MovieComponent},
  {path : "editMovie/:title" , component:EditMovieComponent},
  {path : "home" , component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
