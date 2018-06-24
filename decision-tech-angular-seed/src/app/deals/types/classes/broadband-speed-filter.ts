
import { ANY } from '../../constants/deals.constants';
import { DealsFilter } from '../interfaces/deals-filter';
import { BroadbandResult } from '../interfaces/broadbanddeals';

export class BroadbandSpeedFilter implements DealsFilter {
  public value? = ANY;

  public isDealValid(deal: BroadbandResult.Deal): boolean {
    let isValid: boolean;
    if (this.value === ANY) {
      isValid = true;
    } else {
      const valueLength: number = this.value.length;
      isValid = deal.speed && (deal.speed.label === this.value.substr(0, valueLength - 2));
      }
    return isValid;
  }
}
