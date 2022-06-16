import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BigNumberPipe} from '../../pipes/big-number.pipe';
import {WeiToXPSPipe} from '../../pipes/wei-to-xps.pipe';
import {WeiToWholeXPSPipe} from '../../pipes/wei-to-whole-xps.pipe';
import {Hex2Str} from '../../pipes/hex-to-str.pipe';
import {ToGweiPipe} from '../../pipes/to-gwei.pipe';
import {TrimExtra} from '../../pipes/trim-extra-data.pipe';
import {AbiMethodPipe} from '../../pipes/abi-method.pipe';

@NgModule({
  declarations: [
    BigNumberPipe,
    WeiToXPSPipe,
    WeiToWholeXPSPipe,
    TrimExtra,
    ToGweiPipe,
    Hex2Str,
    AbiMethodPipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    BigNumberPipe,
    WeiToXPSPipe,
    WeiToWholeXPSPipe,
    Hex2Str,
    ToGweiPipe,
    TrimExtra,
    AbiMethodPipe,
  ]
})
export class PipesModule {
}
