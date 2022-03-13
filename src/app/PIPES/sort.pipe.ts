import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(values: [], sortBy: string): any {
    if (!values || !sortBy) return {};
    return values.reduce(function (rv, x) {
      (<[]>(rv[x[sortBy]] = rv[x[sortBy]] || [])).push(x);
      return rv;
    }, {});
  }

}
