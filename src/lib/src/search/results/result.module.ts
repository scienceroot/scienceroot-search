import {NgModule} from "@angular/core";
import {ScrSearchResultComponent} from "./result.component";
import {ScrSearchResultPaperModule} from "./paper/paper.module";
import {CommonModule} from "@angular/common";
import {ScrLoadingModule} from "@scienceroot/design";
import {FlexLayoutModule} from "@angular/flex-layout";
import {ScrSearchResultUserModule} from "./user/user.module";
import {ScrSearchResultPreprintModule} from './preprint/preprint.module';

export * from './paper/paper.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    ScrLoadingModule,
    ScrSearchResultPaperModule,
    ScrSearchResultUserModule,
    ScrSearchResultPreprintModule
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
