import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-character-details',
    templateUrl: './character-details.page.html',
    styleUrls: ['./character-details.page.scss'],
})
export class CharacterDetailsPage
    implements OnInit {

    character: any;
    characterId = null;

    constructor(private activatedRoute: ActivatedRoute,
        private api: ApiService, private http: HttpClient) { }


    ngOnInit() {
   // let id = this.activatedRoute.snapshot.paramMap.get('id');
    //this.http.get(`https://www.breakingbadapi.com/api/characteres/${id}').subscribe(res => {
	
      //this.character = res;
	
//    });
        let id = this.activatedRoute.snapshot.paramMap.get('id');
       this.api.getCharacter(id).subscribe(res => {
         this.character = res;
       });
    }
}
