import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap, filter } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { BroadbandResult } from '../types/interfaces/broadbanddeals';
import { DealsFilter } from '../types/interfaces/deals-filter';


@Injectable()
export class DealsGridFilterService {
  public deals: BehaviorSubject<Array<BroadbandResult.Deal>> = new BehaviorSubject(undefined);
  public orignalDealsCache: Array<BroadbandResult.Deal>= [];

  constructor(private http: HttpClient) {}

  public getDeals(filters?: Array<DealsFilter>): void {
    if (this.orignalDealsCache && this.orignalDealsCache.length > 0) {
      this.publishFilteredDeals(filters);
    } else {
    this.http
      .get('assets/deals.json')
      .subscribe((result: BroadbandResult.RootObject) => {
        this.orignalDealsCache = result.deals;
      this.publishFilteredDeals(filters);
      });
    }
  }

  private publishFilteredDeals(filters?: Array<DealsFilter>): void {
    let filteredDeals: Array<BroadbandResult.Deal>;
    if (filters && filters.length > 0) {
      filteredDeals =  this.orignalDealsCache.filter((deal: BroadbandResult.Deal) => {
         const validFilters: Array<DealsFilter> = filters
         .filter((x: DealsFilter) => x.isDealValid(deal));
        return validFilters.length === filters.length;
      });
    } else {
      filteredDeals = this.orignalDealsCache;
    }
    this.deals.next(filteredDeals);

  }
}
