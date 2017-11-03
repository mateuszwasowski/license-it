import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanIcon'
})
export class BooleanIconPipe implements PipeTransform {

  transform(value: boolean): string {
    const icon = value ? 'glyphicon-ok text-success' : 'glyphicon-remove text-danger';

    return `<span class="glyphicon ${icon}"></span>`;
  }

}
