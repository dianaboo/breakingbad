import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const STORAGE_KEYEpi = 'favouriteEpisodes';
const STORAGE_KEYChar = 'favouriteCharacteres';


@Injectable({
    providedIn: 'root'
})
export class FavouriteService {
    constructor(private storage: Storage) { }

    getAllFavouriteEpisodes() {
        return this.storage.get(STORAGE_KEYEpi);
    }

    isFavouriteEp(episodeId) {
        return this.getAllFavouriteEpisodes().then(result => {
            return result && result.indexOf(episodeId) !== -1;
        });
    }

    favouriteEpisode(episodeId) {
        return this.getAllFavouriteEpisodes().then(result => {
            if (result) {
                result.push(episodeId);
                return this.storage.set(STORAGE_KEYEpi, result);
            } else {
                return this.storage.set(STORAGE_KEYEpi, [episodeId]);
            }
        });
    }

    unfavouriteEpisode(episodeId) {
        return this.getAllFavouriteEpisodes().then(result => {
            if (result) {
                var index = result.indexOf(episodeId);
                result.splice(index, 1);
                return this.storage.set(STORAGE_KEYEpi, result);
            }

        });
    }

    getAllFavouriteCharacteres() {
        return this.storage.get(STORAGE_KEYChar);
    }

    isFavouriteChar(characterId) {
        return this.getAllFavouriteCharacteres().then(result => {
            return result && result.indexOf(characterId) !== -1;
        });
    }

    favouriteCharacter(characterId) {
        return this.getAllFavouriteCharacteres().then(result => {
            if (result) {
                result.push(characterId);
                return this.storage.set(STORAGE_KEYChar, result);
            } else {
                return this.storage.set(STORAGE_KEYChar, [characterId]);
            }
        });
    }

    unfavouriteCharacter(characterId) {
        return this.getAllFavouriteCharacteres().then(result => {
            if (result) {
                var index = result.indexOf(characterId);
                result.splice(index, 1);
                return this.storage.set(STORAGE_KEYChar, result);
            }

        });

    }
}

