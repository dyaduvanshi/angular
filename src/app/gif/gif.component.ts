import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GiphyService } from '../giphy.service';

@Component({
  selector: 'app-gif',
  templateUrl: './gif.component.html',
  styleUrls: ['./gif.component.css']
})
export class GifComponent implements OnInit {

  gifs:any[]=[];
  subscription:Subscription;
  constructor(private giphyService:GiphyService) { }

  ngOnInit(): void {
    this.giphyService.getDefaultGifs();
    this.subscription=this.giphyService.getGifs().subscribe((res:any)=>{
      this.gifs=res;
      console.log(res)
    });
  }

}
