import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({
  name: 'simplePipe'
})
export class SimplePipe implements PipeTransform {
  transform(value: any, args: any[] = []) {
    return 'something';
  }
}
