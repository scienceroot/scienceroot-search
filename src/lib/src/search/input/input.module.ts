import {NgModule} from "@angular/core";
import {ScrSearchInputComponent} from "./input.component";
import {ScrSearchInputSimpleModule} from "./simple/simple.module";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    CommonModule,
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
