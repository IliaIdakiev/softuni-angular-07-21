import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appCustomValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CustomValidatorDirective,
      multi: true
    }
  ]
})
export class CustomValidatorDirective implements Validator {

  @Input() appCustomValidator!: ValidatorFn;

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    if (!this.appCustomValidator) { return null; }
    return this.appCustomValidator(control);
  }

}
