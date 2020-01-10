import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MovieService} from '../services/movie.service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {
  movieToEdit: any ;

  constructor(private router:Router , private activatedRoute:ActivatedRoute ,
              private movieservice:MovieService) {

  }

  ngOnInit() {
    let title = this.activatedRoute.snapshot.params.title;
    this.movieservice.getMoviesByTitle(title)
      .subscribe(res=>{
          console.log(res);
          this.movieToEdit = res[0];
        },
        err =>{
          console.log(err);
        } );
  }


  onUpdateMovie(value: any) {
    this.movieservice.updateMovie(value)
      .subscribe(res=>{
          console.log(res);
          this.movieToEdit = res[0];
          let conf = confirm("update done successfuly");
          if(conf)
            this.router.navigateByUrl("/movies");
        },
        err =>{
          console.log(err);
        } );
  }
}
