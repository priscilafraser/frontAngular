import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataBrasil'
})
export class DataBrasilPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let x:any = value
    return x.toUpperCase();
  }

}
