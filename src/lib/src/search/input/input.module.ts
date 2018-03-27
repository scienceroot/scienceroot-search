import {NgModule} from "@angular/core";
import {ScrSearchInputComponent} from "./input.component";
import {ScrSearchInputSimpleModule} from "./simple/simple.module";
import {CommonModule} from "@angular/common";
import {ScrSearchInputFilterTypeModule} from "./filter-type/filter-type.module";
import {ScrSearchInputTypeModule} from "./type/type.module";
import {ScrSearchInputAdvancedModule} from "./advanced/advanced.module";

@NgModule({
  imports: [
    CommonModule,
    ScrSearchInputTypeModule,
    ScrSearchInputFilterTypeModule,
    ScrSearchInputSimpleModule,
    ScrSearchInputAdvancedModule
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
