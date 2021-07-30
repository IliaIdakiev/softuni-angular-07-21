import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';

export function emailValidator(control: AbstractControl): ValidationErrors | null {
  if (!control.value) { return null; }
  return /^[a-zA-Z0-9\.-]{6,}@gmail\.(bg|com)$/.test(control.value) ? null : {
    invalidEmail: true
  };
}

export function sameValueAsFactory(getTargetControl: () => AbstractControl | null, killSubscriptions: Observable<any>) {
  let subscription: Subscription | null = null;
  return function (control: AbstractControl) {

    if (subscription) { subscription.unsubscribe(); subscription = null; }
    const targetControl = getTargetControl();
    if (!targetControl) { return null; }
    subscription = targetControl.valueChanges
      .pipe(
        takeUntil(killSubscriptions)
      )
      .subscribe({
        next: () => { control.updateValueAndValidity(); },
        complete: () => { subscription = null; }
      });

    return targetControl?.value === control?.value ? null : { sameValue: true }
  };
}
