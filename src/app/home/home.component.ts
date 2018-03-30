import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

import { QuoteService } from './quote.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  images: Array<string>;
  quote: string;
  isLoading: boolean;
  banners:any;
  constructor(private quoteService: QuoteService,private _http: HttpClient) { }

  ngOnInit() {
    this.isLoading = true;
    this.quoteService.getRandomQuote({ category: 'dev' })
      .pipe(finalize(() => { this.isLoading = false; }))
      .subscribe((quote: string) => { this.quote = quote; });
     this.banners = [{'banner_header':'header','banner_label':'label goes here','image_url':'assets/image2.jpg'},{'banner_header':'header','banner_label':'label goes here','image_url':'assets/image1.jpg'}]
     this.images = ['assets/image2.jpg','assets/image1.jpg'];
  }
  private _randomImageUrls(images: Array<{id: number}>): Array<string> {
    return [1, 2, 3].map(() => {
      const randomId = images[Math.floor(Math.random() * images.length)].id;
      return `https://picsum.photos/900/500?image=${randomId}`;
    });
  }

  getUrl(banner)
  {
    return "url('"+banner.image_url+"')";
  }

}
