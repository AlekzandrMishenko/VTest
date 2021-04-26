import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tariffBenefit'
})
export class TariffBenefitPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/<\/?[^>]+(>|$)/g, "");
  }

}
