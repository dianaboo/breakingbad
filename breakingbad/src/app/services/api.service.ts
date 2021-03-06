import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
//import {HttpClientModule} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

characters = [];

  constructor(private http: HttpClient) {
//this.loadUsers();  
}

loadUsers(){
   return this.http.get(`https://www.breakingbadapi.com/api/characters?limit=20`)
    //.subscribe(
      //  res => { console.log(res);
          //  this.characters = this.characters.concat(res['results']);
           
   // });
}

getEpisodes(){
    return this.http.get(`https://www.breakingbadapi.com/api/episodes`);
}

    getEpisode(id){
    return this.http.get(`https://www.breakingbadapi.com/api/episodes/${id}`);
}

   getCharacters(){
   return this.http.get(`https://www.breakingbadapi.com/api/characters`);
}




getCharacter(id){
    return this.http.get(`https://www.breakingbadapi.com/api/characters/${id}`);

}
  
    getQuotes(){
    return this.http.get(`https://www.breakingbadapi.com/api/quotes`);
}

getQuote(id){
    return this.http.get(`https://www.breakingbadapi.com/api/quotes/${id}`);

}

  getDeaths(){
    return this.http.get(`https://www.breakingbadapi.com/api/deaths`)
}



}