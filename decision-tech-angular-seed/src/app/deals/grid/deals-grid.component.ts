import { Component, OnInit } from '@angular/core';

import { OnDestroy } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { BroadbandResult } from '../types/interfaces/broadbanddeals';
import { DealsGridFilterService } from '../services/deals-grid-filter.service';

@Component({
  selector: 'dt-deals-grid',
  templateUrl: './deals-grid.component.html',
  styleUrls: ['./deals-grid.component.scss']
})

export class DealsGridComponent implements OnInit, OnDestroy  {

 public deals: BroadbandResult.Deal[] = [];
 public dealsSubscription: Subscription;
/**
 * adding string as a variable to help in localization of string
 */
 public MONTHS = 'months';

  constructor( private dealsFilterService: DealsGridFilterService) {
  }

  public ngOnInit(): void {
    this.dealsSubscription = this.dealsFilterService.deals.subscribe((filteredDeals: Array<BroadbandResult.Deal>) => {
    this.deals = filteredDeals;
    });
    this.dealsFilterService.getDeals();
  }

 public ngOnDestroy(): void {
  this.dealsSubscription.unsubscribe();
      }
}
