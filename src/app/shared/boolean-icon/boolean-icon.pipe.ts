import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanIcon'
})
export class BooleanIconPipe implements PipeTransform {

  transform(value: boolean): string {
    const icon = value ? 'glyphicon-ok' : 'glyphicon-remove';

    return `<span class="glyphicon ${icon}"></span>`;
  }

}
