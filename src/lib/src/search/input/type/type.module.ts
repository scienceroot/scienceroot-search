import {NgModule} from "@angular/core";
import {ScrAuthenticationModule} from '@scienceroot/security';
import {ScrSearchInputTypeComponent} from "./type.component";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatSlideToggleModule} from "@angular/material";
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatSlideToggleModule,
    ScrAuthenticationModule
  ],
  declarations: [
    ScrSearchInputTypeComponent
  ],
  exports: [
    ScrSearchInputTypeComponent
  ],
  providers: []
})
export class ScrSearchInputTypeModule {

}
