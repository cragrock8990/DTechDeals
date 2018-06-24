import { DealsFilter } from '../interfaces/deals-filter';
import { BroadbandResult } from '../interfaces/broadbanddeals';

export class MobileFilter implements DealsFilter {
  public value?= false;

  public isDealValid(deal: BroadbandResult.Deal): boolean {
  const dealIncludesMobile: boolean =  (deal.productTypes.filter((x: string) => x.includes('Mobile')).length > 0);
  return dealIncludesMobile ===  (this.value ? this.value : false);
  }
}
