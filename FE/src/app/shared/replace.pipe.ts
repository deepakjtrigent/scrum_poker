import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replace',
})
export class ReplacePipe implements PipeTransform {
  transform(
    value: string | undefined,
    strToReplace: string,
    replacementStr: string
  ): string {
    return value
      ? value.replace(new RegExp(strToReplace, 'g'), replacementStr)
      : '';
  }
}