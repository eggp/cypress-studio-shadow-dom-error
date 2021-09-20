import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatFormFieldDefaultOptions } from '@angular/material/form-field/form-field';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'dynamic-form-card',
  templateUrl: './form-card.component.html',
  styleUrls: ['./form-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom,
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'fill',
        floatLabel: 'auto',
      } as MatFormFieldDefaultOptions,
    },
  ],
})
export class FormCardComponent {
  readonly form = new FormGroup({});
}
