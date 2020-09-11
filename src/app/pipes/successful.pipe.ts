import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'successful'
})
export class SuccessfulPipe implements PipeTransform {
  transform(value: any[], prop: string, all = false): boolean {
    return all ? value.every(v => v[prop]) : value.some(v => v[prop]);
  }
}
