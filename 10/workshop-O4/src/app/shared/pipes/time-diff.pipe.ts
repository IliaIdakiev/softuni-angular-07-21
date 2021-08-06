import { Inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeDiff'
})
export class TimeDiffPipe implements PipeTransform {

  constructor(@Inject(LOCALE_ID) private locale: string) { }

  transform(value: string): string {
    const msPerMinute = 60 * 1000;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;
    const msPerMonth = msPerDay * 30;
    const msPerYear = msPerMonth * 12;

    const valueDate = new Date(value);
    const currentDate = new Date();

    const elapsedTime = +currentDate - +valueDate;

    const rtf = new Intl.RelativeTimeFormat(this.locale);

    if (elapsedTime < msPerMinute) {
      return rtf.format(-Math.floor(elapsedTime / 1000), 'seconds');
    }
    if (elapsedTime < msPerHour) {
      return rtf.format(-Math.floor(elapsedTime / msPerMinute), 'minutes');
    }
    if (elapsedTime < msPerDay) {
      return rtf.format(-Math.floor(elapsedTime / msPerHour), 'hours');
    }
    if (elapsedTime < msPerMonth) {
      return rtf.format(-Math.floor(elapsedTime / msPerDay), 'days');
    }
    if (elapsedTime < msPerYear) {
      return rtf.format(-Math.floor(elapsedTime / msPerMonth), 'months');
    }
    return rtf.format(-Math.floor(elapsedTime / msPerYear), 'years');
  }

}
