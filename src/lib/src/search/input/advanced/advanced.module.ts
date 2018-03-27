import {NgModule} from "@angular/core";
import {ScrSearchInputAdvancedPaperModule} from "./paper/paper.module";
import {ScrSearchInputAdvancedComponent} from "./advanced.component";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    CommonModule,
    ScrSearchInputAdvancedPaperModule
  ],
  declarations: [
    ScrSearchInputAdvancedComponent
  ],
  exports: [
    ScrSearchInputAdvancedComponent
  ],
  providers: []
})
export class ScrSearchInputAdvancedModule {

}
