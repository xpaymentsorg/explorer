import {PipeTransform, Pipe} from '@angular/core';
import {convertWithDecimals} from '../utils/functions';

@Pipe({
  name: 'weiToXPS'
})

export class WeiToXPSPipe implements PipeTransform {

  transform(val: string | number, showUnit: boolean = true, removeTrailingZeros: boolean = false, decimals: number = 18 ): string {
    return convertWithDecimals(val, showUnit, removeTrailingZeros, decimals);
  }
}
