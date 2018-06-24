import { BroadbandResult } from './broadbanddeals';

export interface DealsFilter {
  value?: any;
  isDealValid(deal: BroadbandResult.Deal): boolean;
}
