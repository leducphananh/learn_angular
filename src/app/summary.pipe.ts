import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary',
  standalone: true,
})
export class SummaryPipe implements PipeTransform {
  transform(value: string, limit?: number): string {
    return value.substring(0, limit || 50) + '...';
  }
}
