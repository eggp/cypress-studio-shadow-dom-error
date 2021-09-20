import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatPseudoCheckboxModule,} from '@angular/material/core';
import {FormCardComponent} from './form/form-card.component';
import {createCustomElement} from '@angular/elements';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {OverlayContainer} from '@angular/cdk/overlay';
import {OverlayShadowDomWebComponentContainer} from './utils/cdk/overlay-shadow-dom-web-component-container.service';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {NgxMatSelectSearchModule} from 'ngx-mat-select-search';
import {MatSelectInfiniteScrollModule} from 'ng-mat-select-infinite-scroll';
import {FormComponent} from './form/form/form.component';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [FormCardComponent, FormComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    NgxMatSelectSearchModule,
    MatPseudoCheckboxModule,
    MatSelectInfiniteScrollModule,
    MatInputModule,
  ],
  providers: [
    {
      provide: OverlayContainer,
      useClass: OverlayShadowDomWebComponentContainer,
    },
  ],
  entryComponents: [FormCardComponent],
})
export class AppModule {
  constructor(
    private injector: Injector,
  ) {
  }

  ngDoBootstrap(): void {
    const customElement = createCustomElement(FormCardComponent, {
      injector: this.injector,
    });
    customElements.define('dynamic-form-card', customElement);
  }
}
