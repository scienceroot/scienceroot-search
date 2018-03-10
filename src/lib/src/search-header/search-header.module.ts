import {NgModule} from "@angular/core";
import {ScrSearchHeaderComponent} from "./search-header.component";
import {ScrSearchBarModule} from "@scienceroot/design";

export * from './search-header.component';

@NgModule({
  imports: [
    ScrSearchBarModule
  ],
  declarations: [
    ScrSearchHeaderComponent
  ],
  exports: [
    ScrSearchHeaderComponent
  ],
  providers: []
})
export class ScrSearchHeaderModule {

}
