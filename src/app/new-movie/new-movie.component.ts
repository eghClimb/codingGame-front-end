import { Component, OnInit } from '@angular/core';
import {MovieService} from '../services/movie.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.css']
})
export class NewMovieComponent implements OnInit {

  constructor(private movieService:MovieService, private router:Router) { }

  ngOnInit() {
  }

  onSaveMovie(data: any) {
    console.log(data);
    this.movieService.saveMovie(data)
      .subscribe(res=>{
        console.log(res);
          let conf = confirm("a new movie is successfuly saved");
          if(conf)
            this.router.navigateByUrl("/movies");
      },
          err =>{
            console.log(err);
          } );
  }
}
