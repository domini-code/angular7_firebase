import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { BookInterface } from 'src/app/models/book';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  private books: BookInterface[];
  ngOnInit() {
    this.getOffers();
    console.log('OFERTAS', this.books);
  }


  getOffers() {
    this.dataApi.getAllBooksOffers().subscribe(offers => this.books = offers);
  }

}
