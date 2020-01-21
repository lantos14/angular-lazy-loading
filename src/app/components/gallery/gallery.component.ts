import { Component, OnInit } from '@angular/core';
import { FetchImageService } from 'src/app/services/fetch-image.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  images: string[] = [];
  imageStates: boolean[] = []

  constructor(
    public imageService: FetchImageService,
  ) { }

  ngOnInit() {
    this.imageService.getImage().pipe(
      map(( response: any ) => {
        console.log('response: ', response);
        return response.map(({ download_url }) => download_url)
      })
    )
    .subscribe((result) => {
      this.images = result;
    });
  }

}
