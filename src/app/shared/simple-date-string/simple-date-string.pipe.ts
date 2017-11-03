import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'simpleDateString'
})
export class SimpleDateStringPipe implements PipeTransform {

  transform(value: string): any {
    const date = new Date(value);
    const month = date.getMonth() > 9 ? date.getMonth() : '0' + date.getMonth().toString();
    const day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate().toString();

    return day + '.' + month + '.' + date.getFullYear();  }

}
