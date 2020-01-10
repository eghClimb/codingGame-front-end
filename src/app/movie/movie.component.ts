import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MovieService} from '../services/movie.service';
import {Router} from '@angular/router';
import {Observable, observable} from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ["./movie.component.css"]
})
export class MovieComponent implements OnInit {

  moviesList: any ;
  hostURL : any = "http://localhost:8080";
  searchOption: any =1;
  constructor(private movieService : MovieService, private  router:Router) {
    this.onGetMovies();

  }

  ngOnInit() {
  }
  onGetMovies(){
   this.movieService.getMovies().
    subscribe(
      data => {
        this.moviesList = data;
      },
      error => {
        console.log(error);
      }
    );
  }


  onSearch(form: any) {
    if(form.keyword){
      console.log("egh form is ..."+form.keyword);
      console.log("searchOption form is ...."+this.searchOption);
      let obsRes : any ;
      switch (this.searchOption) {
        case "1" :
          console.log("egh about to call getMoviesByTitle");
           this.movieService.getMoviesByTitle(form.keyword).
          subscribe(
            data => {
              this.moviesList = data;
            },
            error => {
              console.log(error);
            }
          );
           break;
        case "2" :
          this.movieService.getMoviesByDirector(form.keyword).
             subscribe(
              data => {
                this.moviesList = data;
              },
              error => {
                console.log(error);
              }
            );
          break;
        case "3" :
           this.movieService.getMoviesByType(form.keyword).
          subscribe(
            data => {
              this.moviesList = data;
            },
            error => {
              console.log(error);
            }
          );
           break;
        case "4" :
          this.movieService.getMoviesByReleaseDate(form.keyword).
          subscribe(
            data => {
              this.moviesList = data;
            },
            error => {
              console.log(error);
            }
          );
          break;

      }

    }else{ // if a blank search then get all movies
      this.movieService.loadAll().
      subscribe(
        data => {
          this.moviesList = data;
        },
        error => {
          console.log(error);
        }
      );
    }

  }
  onLoadAll(){
    this.movieService.loadAll().
    subscribe(
      data => {
        console.log(data);
        this.moviesList = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  onDeleteMovie(m: string) {
  let conf = confirm("are you sure ?");
  if(conf){
    console.log(m);
    this.movieService.removeMovie(m).
    subscribe(
      data => {
        this.onLoadAll();
      },
      error => {
        console.log(error);
      }
    );
  }
  }

  onEditMovie(title: any ) {
    this.router.navigateByUrl("/editMovie/" + title);
  }

  rtrvOption(option: any) {
    this.searchOption = option;
    console.log(this.searchOption);
  }
}
