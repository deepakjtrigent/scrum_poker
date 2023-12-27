import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css'],
})
export class PageNotFoundComponent {
  // constructor(private meta: Meta, private route: ActivatedRoute) {
  //   this.route.data.subscribe((data) => {
  //     this.updateOgpMetadata(data);
  //   });
  // }

  // private updateOgpMetadata(data: any) {
  //   this.meta.updateTag({ property: 'og:title', content: data.title });
  //   this.meta.updateTag({
  //     property: 'og:description',
  //     content: data.description,
  //   });
  //   this.meta.updateTag({ property: 'og:image', content: data.image });
  //   // Update other OG tags as needed
  // }
}
