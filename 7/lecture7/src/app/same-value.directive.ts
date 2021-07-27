import { Directive, Input, OnDestroy } from '@angular/core';
import { AbstractControl, NgForm, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { Subscription } from 'rxjs';
import { sameValueValidateFactory } from './same-value-validate-fn';

@Directive({
  selector: '[ngModel][appSameValue]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: SameValueDirective,
      multi: true
    }
  ]
})
export class SameValueDirective implements Validator, OnDestroy {

  @Input() appSameValue = "";
  @Input() name!: string;
  otherControl!: AbstractControl;
  subscription!: Subscription;

  constructor(
    private form: NgForm
  ) { }

  validate(control: AbstractControl): ValidationErrors | null {
    const otherControl = this.form.controls[this.appSameValue];
    if (this.subscription) { this.subscription.unsubscribe(); }
    this.subscription = otherControl.valueChanges!.subscribe(() => {
      control.updateValueAndValidity({ onlySelf: true });
    });

    return sameValueValidateFactory(this.name, otherControl, this.appSameValue)(control);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
