import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class MetaService {
  constructor(private meta: Meta) {}

  public updateMeta(metaData: {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
  }): void {
    console.log(metaData);
    if (
      metaData.url &&
      metaData.description &&
      metaData.image &&
      metaData.title
    ) {
      this.meta.updateTag({ property: 'og:url', content: metaData.url });

      this.meta.updateTag({ property: 'og:title', content: metaData.title });
      this.meta.updateTag({
        property: 'og:description',
        content: metaData.description,
      });
      this.meta.updateTag({ property: 'og:image', content: metaData.image });
    }
  }
}
