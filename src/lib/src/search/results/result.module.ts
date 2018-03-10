import {NgModule} from "@angular/core";
import {ScrSearchResultComponent} from "./result.component";
import {ScrSearchResultPaperModule} from "./paper/paper.module";
import {CommonModule} from "@angular/common";
import {ScrLoadingModule} from "@scienceroot/design";

export * from './paper/paper.module';

@NgModule({
  imports: [
    CommonModule,
    ScrLoadingModule,
    ScrSearchResultPaperModule
  ],
  declarations: [
    ScrSearchResultComponent
  ],
  exports: [
    ScrSearchResultComponent
  ],
  providers: []
})
export class ScrSearchResultModule {

}
