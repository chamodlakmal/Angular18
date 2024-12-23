import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true,
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(values: string[], arg: string): string[] {
    console.log("values : " + values)
    console.log("arg : " + arg)
    return values.filter(item => item.includes(arg))
  }

}
