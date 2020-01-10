import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  hostURL : any = "http://localhost:8080";
  constructor(private httpClient: HttpClient) { }

  public getMovies(){
        return this.httpClient.get(this.hostURL+"/movies");
  }

  public getMoviesByTitle(title:string){
    return this.httpClient.get(this.hostURL+"/movies/titles/"+title);
  }
  public getMoviesByDirector(keyword: any) {
    return this.httpClient.get(this.hostURL+"/movies/directors/"+keyword);
  }

  public getMoviesByType(keyword: any) {
    return this.httpClient.get(this.hostURL+"/movies/types/"+keyword);

  }
  public removeMovie(title:string){
    console.log("before deleting ... ");
     return this.httpClient.delete(this.hostURL+"/movies/"+title);
  }

  public loadAll(){
    return this.httpClient.get(this.hostURL+"/movies");
  }

  public saveMovie( data){
      return this.httpClient.post(this.hostURL+"/movies",data);
  }
  public updateMovie(data){
    return this.httpClient.put(this.hostURL+"/movies",data);
  }


  getMoviesByReleaseDate(keyword: string) {
    let explodedDate = keyword.split("/");
    let newDate:string;
    if(explodedDate.length!=3){
      alert("incorrect date "+keyword);

    }else {
      let newDate:string = explodedDate[0]+"-"+explodedDate[1]+"-"+explodedDate[2];
      return this.httpClient.get(this.hostURL+"/movies/releaseDates/"+newDate);

    }
  }
}
