import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {
  gifs= new BehaviorSubject<any>([]);

  constructor(private http:HttpClient) { }

  getDefaultGifs(){
    return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=qtzzC4xT1OBqUlVP3YGvGruKzWNq8NDU`)
    .subscribe((response:any)=>{
      this.gifs.next(response.data);
    });
  }

  searchGifs(searchTerm:string){
    return this.http.get(`https://api.giphy.com/v1/stickers/search?q=${searchTerm}&api_key=t3IXXEqdWJrXHhtAnpnahr9nZZ6xL41E`)
    .subscribe((response:any)=>{
      this.gifs.next(response.data);
    });
  }
  getGifs(){
    return this.gifs.asObservable();
  }
}
