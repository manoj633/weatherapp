import { Component, OnInit } from '@angular/core';
import { ImageService } from './services/image.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private imageService: ImageService) { }
  ngOnInit(): void {
    this.getImages();
  }

  getImages() {
    this.imageService.preloadImage('../assets/images/cloudy/cloud1.jpg');
    this.imageService.preloadImage('../assets/images/cloudy/cloud2.jpg');
    this.imageService.preloadImage('../assets/images/cloudy/cloud3.jpg');
    this.imageService.preloadImage('../assets/images/cloudy/cloud4.jpg');
    this.imageService.preloadImage('../assets/images/cloudy/cloud5.jpg');
    this.imageService.preloadImage('../assets/images/cloudy/cloud6.jpg');
    this.imageService.preloadImage('../assets/images/cloudy/cloud7.jpg');
    this.imageService.preloadImage('../assets/images/cloudy/cloud8.jpg');

    this.imageService.preloadImage('../assets/images/fog/fog1.jpg');
    this.imageService.preloadImage('../assets/images/fog/fog2.jpg');
    this.imageService.preloadImage('../assets/images/fog/fog3.jpg');
    this.imageService.preloadImage('../assets/images/fog/fog4.jpg');
    this.imageService.preloadImage('../assets/images/fog/fog5.jpg');
    this.imageService.preloadImage('../assets/images/fog/fog6.jpg');
    this.imageService.preloadImage('../assets/images/fog/fog7.jpg');
    this.imageService.preloadImage('../assets/images/fog/fog8.jpg');

    this.imageService.preloadImage('../assets/images/haze/haze1.jpg');
    this.imageService.preloadImage('../assets/images/haze/haze2.jpg');
    this.imageService.preloadImage('../assets/images/haze/haze3.jpg');
    this.imageService.preloadImage('../assets/images/haze/haze4.jpg');
    this.imageService.preloadImage('../assets/images/haze/haze5.jpg');
    this.imageService.preloadImage('../assets/images/haze/haze6.jpg');
    this.imageService.preloadImage('../assets/images/haze/haze7.jpg');
    this.imageService.preloadImage('../assets/images/haze/haze8.jpg');

    this.imageService.preloadImage('../assets/images/rain/rain1.jpg');
    this.imageService.preloadImage('../assets/images/rain/rain2.jpg');
    this.imageService.preloadImage('../assets/images/rain/rain3.jpg');
    this.imageService.preloadImage('../assets/images/rain/rain4.jpg');
    this.imageService.preloadImage('../assets/images/rain/rain5.jpg');
    this.imageService.preloadImage('../assets/images/rain/rain6.jpg');
    this.imageService.preloadImage('../assets/images/rain/rain7.jpg');
    this.imageService.preloadImage('../assets/images/rain/rain8.jpg');

    this.imageService.preloadImage('../assets/images/snow/snow1.jpg');
    this.imageService.preloadImage('../assets/images/snow/snow2.jpg');
    this.imageService.preloadImage('../assets/images/snow/snow3.jpg');
    this.imageService.preloadImage('../assets/images/snow/snow4.jpg');
    this.imageService.preloadImage('../assets/images/snow/snow5.jpg');
    this.imageService.preloadImage('../assets/images/snow/snow6.jpg');
    this.imageService.preloadImage('../assets/images/snow/snow7.jpg');
    this.imageService.preloadImage('../assets/images/snow/snow8.jpg');

    this.imageService.preloadImage('../assets/images/summer/summer1.jpg');
    this.imageService.preloadImage('../assets/images/summer/summer2.jpg');
    this.imageService.preloadImage('../assets/images/summer/summer3.jpg');
    this.imageService.preloadImage('../assets/images/summer/summer4.jpg');
    this.imageService.preloadImage('../assets/images/summer/summer5.jpg');
    this.imageService.preloadImage('../assets/images/summer/summer6.jpg');
    this.imageService.preloadImage('../assets/images/summer/summer7.jpg');
    this.imageService.preloadImage('../assets/images/summer/summer8.jpg');

    this.imageService.preloadImage('../assets/images/thunderstorm/thunder1.jpg');
    this.imageService.preloadImage('../assets/images/thunderstorm/thunder2.jpg');
    this.imageService.preloadImage('../assets/images/thunderstorm/thunder3.jpg');
    this.imageService.preloadImage('../assets/images/thunderstorm/thunder4.jpg');
    this.imageService.preloadImage('../assets/images/thunderstorm/thunder5.jpg');
    this.imageService.preloadImage('../assets/images/thunderstorm/thunder6.jpg');
    this.imageService.preloadImage('../assets/images/thunderstorm/thunder7.jpg');
    this.imageService.preloadImage('../assets/images/thunderstorm/thunder8.jpg');
  }

}
