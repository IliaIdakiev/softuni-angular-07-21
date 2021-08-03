import { AbstractControl } from "@angular/forms";


export function sameValueValidateFactory(
  controlName: string,
  otherControl: AbstractControl,
  otherControlName: string
) {
  return function sameValueValidate(
    control: AbstractControl,
  ) {
    return control.value !== otherControl?.value ? {
      sameValue: {
        [otherControlName]: otherControl?.value,
        [controlName]: control.value
      }
    } : null;
  };
}