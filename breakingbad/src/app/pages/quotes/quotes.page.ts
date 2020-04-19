import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.page.html',
  styleUrls: ['./quotes.page.scss'],
})
export class QuotesPage implements OnInit {

    quotes: any;
    quotesId: Observable<any>
searchQuery: string = '';

  constructor(private router: Router, private api: ApiService) {
  }
   
  ngOnInit() {
  this.quotes = this.api.getQuotes();
 // this.quotes.subscribe(data => {console.log('my data' , data);
   // });

}
    openDetails(quotes){
        let quotesId = quotes.quote_id;
    this.router.navigateByUrl(`/tabs/quotes/${quotesId}`);
    }

  SearchQuotes(ev: any) {
    // Reset items back to all of the items
    this.quotes = this.api.getQuotes();

    // set val to the value of the searchbar
    var val = ev.target.value;
    
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.quotes = this.quotes.filter((quote) => {
        return (quote.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}