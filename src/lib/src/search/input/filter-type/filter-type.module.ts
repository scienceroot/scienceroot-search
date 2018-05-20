import {CommonModule} from '@angular/common';
import {NgModule} from "@angular/core";
import {ScrAuthenticationModule} from '@scienceroot/security';
import {ScrSearchInputFilterTypeComponent} from "./filter-type.component";
import {MatRadioModule} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatRadioModule,
    ScrAuthenticationModule
  ],
  declarations: [
    ScrSearchInputFilterTypeComponent
  ],
  exports: [
    ScrSearchInputFilterTypeComponent
  ],
  providers: []
})
export class ScrSearchInputFilterTypeModule {

}
