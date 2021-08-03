import { Pipe, PipeTransform } from '@angular/core';
import { getProp } from './utils/get-prop';

@Pipe({
  name: 'getProp'
})
export class GetPropPipe implements PipeTransform {

  transform = getProp;

}
