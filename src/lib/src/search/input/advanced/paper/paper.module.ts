import {NgModule} from "@angular/core";
import {ScrSearchInputAdvancedPaperComponent} from "./paper.component";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatInputModule} from "@angular/material";

@NgModule({
  imports: [
    FlexLayoutModule,
    MatInputModule
  ],
  declarations: [
    ScrSearchInputAdvancedPaperComponent
  ],
  exports: [
    ScrSearchInputAdvancedPaperComponent
  ],
  providers: []
})
export class ScrSearchInputAdvancedPaperModule {

}
