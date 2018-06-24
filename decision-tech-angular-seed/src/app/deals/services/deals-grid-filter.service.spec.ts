import { DealsGridFilterService } from './deals-grid-filter.service';
import { of } from 'rxjs';
import { fakeAsync, tick } from '@angular/core/testing';
import { BroadbandResult } from '../types/interfaces/broadbanddeals';

fdescribe('DealsGridFilterService', () => {
  let service: DealsGridFilterService;
  let httpClientStub: any;

  beforeEach(() => {
    httpClientStub = { get: {} };
    service = new DealsGridFilterService(httpClientStub);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('orignalDealCache list should be empty', () => {
    expect(service.orignalDealsCache.length).toEqual(0);
  });

  describe('getDeals', () => {
    it(
      'should return available deals without any filters',
      fakeAsync(() => {
        const dealsData: Array<any> = [
          { title: 'unlimited BroadBand' },
          { title: 'unlimited BroadBand with TV' }
        ];
        const returnData: any = { deals: dealsData };
        spyOn(httpClientStub, 'get').and.returnValue(of(returnData));
        //
        // call the target
        //
        service.getDeals();
        tick();
        service.deals.subscribe((deals: Array<BroadbandResult.Deal>) => {
          expect(deals).toBe(dealsData);
          expect(service.orignalDealsCache).toEqual(dealsData);
          expect(httpClientStub.get).toHaveBeenCalledWith('assets/deals.json');
        });
      })
    );
  });
});
