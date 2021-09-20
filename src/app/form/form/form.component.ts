import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'dynamic-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent {
  readonly testFieldControl = new FormControl();

  // tslint:disable-next-line:variable-name
  private _parentForm: FormGroup;

  get parentForm(): FormGroup {
    return this._parentForm;
  }

  @Input()
  set parentForm(value: FormGroup) {
    this._parentForm = value;
    this._parentForm.addControl('test_field', this.testFieldControl);
  }
}
