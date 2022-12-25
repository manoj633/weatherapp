import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ImageService {

    private _cacheURLs: String[] = [];
    constructor() { }

    preloadImage(src: string) {
        var img = new Image();
        img.src = src;
    }
}
