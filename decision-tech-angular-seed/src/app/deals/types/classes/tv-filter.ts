import { DealsFilter } from '../interfaces/deals-filter';
import { BroadbandResult } from '../interfaces/broadbanddeals';

export class TVFilter implements DealsFilter {
  public value?= false;

  public isDealValid(deal: BroadbandResult.Deal): boolean {
  const dealIncludesTV: boolean =  (deal.productTypes.filter((x: string) => x.includes('TV')).length > 0);
  return dealIncludesTV ===  (this.value ? this.value : false);
  }
}
