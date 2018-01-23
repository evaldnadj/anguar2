import { Component } from '@angular/core';
import { PageTitleService } from '../../shared/services/page-title.service';

@Component({
  selector: 'app-layout',
  templateUrl: 'layout.component.html'
})
export class LayoutComponent {

  title: string;

  constructor(
    private pageTitleService: PageTitleService
  ) {
    this.pageTitleService
      .pageTitleAnnounced$
      .subscribe((title) => {
        this.title = title;
      });
    }


}
