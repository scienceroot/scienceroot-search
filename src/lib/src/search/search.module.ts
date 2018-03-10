import {NgModule} from "@angular/core";
import {ScrSearchResultModule} from "./results/result.module";
import {ScrSearchComponent} from "./search.component";
import {ScrSearchInputModule} from "./input/input.module";
import {ScrSearchService} from "./search.service";
import {CommonModule} from "@angular/common";

export * from './results/result.module'

@NgModule({
  imports: [
    CommonModule,
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
