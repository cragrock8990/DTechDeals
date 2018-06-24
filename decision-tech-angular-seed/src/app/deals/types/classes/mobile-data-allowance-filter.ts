import { DealsFilter } from '../interfaces/deals-filter';
import { BroadbandResult } from '../interfaces/broadbanddeals';
import { ANY } from '../../constants/deals.constants';

export class MobileDataAllowanceFilter implements DealsFilter {
  public value? = ANY;

  public isDealValid(deal: BroadbandResult.Deal): boolean {
    let isValid: boolean;
    if (this.value === ANY) {
      isValid = true;
    } else {
      const valueLength: number = this.value.length;
    const dataUom: string =  this.value.substr(valueLength - 2);

    isValid =  deal.mobile && deal.mobile.data && deal.mobile.data.label === this.value.replace(dataUom, ` ${dataUom}`);
      }
    return isValid;
  }
}
