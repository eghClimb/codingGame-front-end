import { Component } from '@angular/core';
import {MovieService} from './services/movie.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'codingGame-front-web';
  constructor( private  router:Router) {
    this.router.navigateByUrl("/home");
  }
}
