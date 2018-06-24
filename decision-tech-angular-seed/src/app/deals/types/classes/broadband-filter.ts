import { DealsFilter } from '../interfaces/deals-filter';
import { BroadbandResult } from '../interfaces/broadbanddeals';

export class BroadbandFilter implements DealsFilter {
  public value? = false;

  public isDealValid(deal: BroadbandResult.Deal): boolean {
  const dealIncludesBroadband: boolean =  (deal.productTypes.filter((x: string) => x.includes('Broadband')).length > 0);
  return dealIncludesBroadband ===  (this.value ? this.value : false);
  }
}
