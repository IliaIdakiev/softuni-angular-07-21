import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: string, length: number): unknown {
    return value.length > length ? `${value.substr(0, length)}...` : value;
  }

}
