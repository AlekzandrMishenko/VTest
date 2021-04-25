import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tariffSpeed'
})
export class TariffSpeedPipe implements PipeTransform {

  transform(value: string): string {
    const speed = +value / 1000;

    if (+value >= 1000) {
      if (Number.isInteger(speed)) {
        return `${speed} Mbit/s`
      } if (speed < 1.1) {
        return `${Math.floor(speed)} Mbit/s`
      }
      else {
        return `${speed.toFixed(1)} Mbit/s`
      }
    }
  }

}
