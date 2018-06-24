import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppNavigationService } from '../../services/app-navigation.service';

@Component({
  selector: 'dt-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss']
})
export class DealsComponent implements OnDestroy {

  private filterButtonSubscription: Subscription;
  public showFilterMenuOverlay= false;

  public constructor(private appNavigationService: AppNavigationService) {
    this.filterButtonSubscription = this.appNavigationService.showFilterMenu.subscribe((showMenu: boolean) => {
      this.showFilterMenuOverlay = showMenu;
    });
  };

 public ngOnDestroy(): void {
  this.filterButtonSubscription.unsubscribe();
  }
}
