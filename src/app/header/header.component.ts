import { Component, OnInit } from '@angular/core';
import { GiphyService } from '../giphy.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private giphyService: GiphyService) { }

  ngOnInit(): void {
  }
  search(gifName:string){
    this.giphyService.searchGifs(gifName);
  }

}
