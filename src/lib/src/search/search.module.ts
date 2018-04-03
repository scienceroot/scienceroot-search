import {NgModule} from "@angular/core";
import {FlexLayoutModule} from '@angular/flex-layout';
import {ScrSearchResultModule} from "./results/result.module";
import {ScrSearchComponent} from "./search.component";
import {ScrSearchInputModule} from "./input/input.module";
import {ScrSearchService} from "./search.service";
import {CommonModule} from "@angular/common";

export * from './results/result.module'

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    ScrSearchInputModule,
    ScrSearchResultModule
  ],
  declarations: [
    ScrSearchComponent
  ],
  exports: [
    ScrSearchComponent
  ],
  providers: [
    ScrSearchService
  ]
})
export class ScrSearchModule {

}
