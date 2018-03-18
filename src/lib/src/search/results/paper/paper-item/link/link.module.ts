import {NgModule} from "@angular/core";
import {ScrSearchPaperItemLinkComponent} from "./link.component";
import {MatButtonModule} from "@angular/material";

@NgModule({
  imports: [
    MatButtonModule
  ],
  declarations: [
    ScrSearchPaperItemLinkComponent
  ],
  exports: [
    ScrSearchPaperItemLinkComponent
  ],
  providers: []
})
export class ScrSearchPaperItemLinkModule {

}
