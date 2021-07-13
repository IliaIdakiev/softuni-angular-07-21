import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit, OnDestroy {

  timeStreamSubscription!: Subscription;

  time$ = interval(1000).pipe(
    startWith(''),
    map(() => new Date())
  );

  timeValue!: Date;

  constructor() {
  }

  ngOnInit(): void {
    this.timeStreamSubscription = this.time$.subscribe(timeValue => this.timeValue = timeValue);
  }

  ngOnDestroy(): void {
    this.timeStreamSubscription.unsubscribe();
  }
}
