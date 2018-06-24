import { Component } from '@angular/core';
import { AppNavigationService } from '../services/app-navigation.service';

@Component({
    selector: 'dt-site-nav',
    templateUrl: './siteNav.html',
    styleUrls: ['./siteNav.scss']
})
export class SiteNavComponent {

  constructor (private appNavigationService: AppNavigationService) {}

  public toggleBurgerMenu(): void {
    this.appNavigationService.showFilterMenu.next(!this.appNavigationService.showFilterMenu.value);
  }
}
