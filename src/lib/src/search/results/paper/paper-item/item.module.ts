import {NgModule} from "@angular/core";
import {MatCardModule, MatListModule} from "@angular/material";
import {CommonModule} from "@angular/common";
import {ScrSearchPaperItem} from "./item.component";
import {FlexLayoutModule} from "@angular/flex-layout";
import {ScrSearchPaperItemLinkComponent} from "./link.component";

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  declarations: [
    ScrSearchPaperItem,
    ScrSearchPaperItemLinkComponent
  ],
  exports: [
    ScrSearchPaperItem
  ]
})
export class ScrSearchPaperItemModule {

}
