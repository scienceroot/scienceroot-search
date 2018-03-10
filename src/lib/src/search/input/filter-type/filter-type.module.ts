import {NgModule} from "@angular/core";
import {ScrSearchInputFilterTypeComponent} from "./filter-type.component";
import {MatRadioModule} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  imports: [
    FlexLayoutModule,
    MatRadioModule
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
