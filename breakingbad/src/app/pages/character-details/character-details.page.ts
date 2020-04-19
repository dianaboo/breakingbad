import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FavouriteService } from './../../services/favourite.service';

@Component({
    selector: 'app-character-details',
    templateUrl: './character-details.page.html',
    styleUrls: ['./character-details.page.scss'],
})

export class CharacterDetailsPage implements OnInit {
    character: any;
    characterId = null;
    isFavourite = false;

    constructor(private activatedRoute:
        ActivatedRoute, private api: ApiService, private favouriteService: FavouriteService) { }

    ngOnInit() {
        this.characterId = this.activatedRoute.snapshot.paramMap.get('id');
        
        this.api.getCharacter(this.characterId).subscribe(res => {
            this.character = res[0];
            console.log(JSON.stringify(this.character.char_id));
        });

        this.favouriteService.isFavouriteChar(this.characterId).then(isFav => {
            this.isFavourite = isFav;
        });
    }

    favouriteCharacter() {
        this.favouriteService.favouriteEpisode(this.characterId).then(() => {
            this.isFavourite = true;
        });
    }

    unfavouriteCharacter() {
        this.favouriteService.unfavouriteEpisode(this.characterId).then(() => {
            this.isFavourite = false;
        });
    }
}
