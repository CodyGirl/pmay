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

     this.banners = [{'banner_header':'header','banner_label':'label goes here','image_url':'assets/imag3.png'}
       ,{'banner_header':'header','banner_label':'label goes here','image_url':'assets/img1.jpg'},
       {'banner_header':'header','banner_label':'label goes here','image_url':'assets/img2.jpg'}]
     this.images = ['assets/promo1.png','assets/promo2.png'];
  }


  getUrl(banner:any)
  {
    return "url('"+banner.image_url+"')";
  }

}
