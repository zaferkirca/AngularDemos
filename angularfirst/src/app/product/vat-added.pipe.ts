import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded'
})

export class VatAddedPipe implements PipeTransform {

  transform(value: number, args?: number): number {
    var vatPercentage: number = 18;

    if (args) { // args parametresine ? konulduğu için boş gelebilir demektir
      vatPercentage = args[0]; //args parametresi dizi şeklinde geliyor
    }

    return value + (value / 100 * vatPercentage);
  }
}