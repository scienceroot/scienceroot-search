import {NgModule} from "@angular/core";
import {ScrSearchInputComponent} from "./input.component";
import {ScrSearchInputSimpleModule} from "./simple/simple.module";
import {CommonModule} from "@angular/common";
import {ScrSearchInputFilterTypeModule} from "./filter-type/filter-type.module";

@NgModule({
  imports: [
    CommonModule,
    ScrSearchInputFilterTypeModule,
    ScrSearchInputSimpleModule
  ],
  declarations: [
    ScrSearchInputComponent
  ],
  exports: [
    ScrSearchInputComponent
  ],
  providers: []
})
export class ScrSearchInputModule {

}
