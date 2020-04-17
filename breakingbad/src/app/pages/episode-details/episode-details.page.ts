import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.page.html',
  styleUrls: ['./episode-details.page.scss'],
})
export class EpisodeDetailsPage implements OnInit {

  episode: any;
	
  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) { }
	
  ngOnInit() {
	
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.http.get('https://www.breakingbadapi.com/api/episodes${id}', 
    {responseType: 'text'}).subscribe(res => {
    this.episode = res;
	
    });
}
}