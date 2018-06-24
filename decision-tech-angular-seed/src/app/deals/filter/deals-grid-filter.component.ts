import { filter } from 'rxjs/operators';
import { Component } from '@angular/core';
import { BroadbandFilter } from '../types/classes/broadband-filter';
import { TVFilter } from '../types/classes/tv-filter';
import { MobileFilter } from '../types/classes/mobile-filter';
import { ANY } from '../constants/deals.constants';
import { BroadbandSpeedFilter } from '../types/classes/broadband-speed-filter';
import { MobileDataAllowanceFilter } from '../types/classes/mobile-data-allowance-filter';
import { DealsGridFilterService } from '../services/deals-grid-filter.service';
import { DealsFilter } from 'app/deals/types/interfaces/deals-filter';

@Component({
  selector: 'dt-deals-grid-filter',
  templateUrl: './deals-grid-filter.component.html',
  styleUrls: ['./deals-grid-filter.component.scss']
})
export class DealsGridFilterComponent {

  public broadbandFilter: DealsFilter = new BroadbandFilter();
  public tvFilter: DealsFilter = new TVFilter();
  public mobileFilter: DealsFilter = new MobileFilter();
  public broadbandSpeedFilter: DealsFilter = new BroadbandSpeedFilter();
  public mobileDataAllowanceFilter: DealsFilter = new MobileDataAllowanceFilter();
  /**
   *  this could be retreived from the available deals data to ensure only avaiable options are shown to the end user
   */
  public mobileInternetDataAllowance: Array<string> = [
    ANY,
    '500MB',
    '1GB',
    '2GB',
    '3GB',
    '4GB',
    '5GB'
  ];

  /**
   *  this could be retreived from the available deals data to ensure only avaiable options are shown to the end user
   */
  public internetSpeed: Array<string> = [ANY, '17MB', '52MB', '76MB'];

  public BROADBAND= 'Broadband';
  public TV= 'Tv';
  public MOBILE = 'Mobile';
  public SPEED = 'Speed';
  public MOBILE_DATA = 'Mobile Data';


  constructor(private dealsFilterService: DealsGridFilterService) {}

  public applyFilter(): void {
    let filters: Array<DealsFilter>;
    if (
      this.broadbandFilter.value ||
      this.tvFilter.value ||
      this.mobileFilter.value
    ) {
      filters = [this.broadbandFilter, this.tvFilter, this.mobileFilter];
      if (this.broadbandFilter.value) {
        filters.push(this.broadbandSpeedFilter);
      }
      if (this.mobileFilter.value) {
        filters.push(this.mobileDataAllowanceFilter);
      }
    }
    this.dealsFilterService.getDeals(filters);
  }
}
