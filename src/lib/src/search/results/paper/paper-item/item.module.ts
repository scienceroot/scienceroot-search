import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ScrSearchPaperItem} from "./item.component";
import {FlexLayoutModule} from "@angular/flex-layout";
import {ScrSearchPaperItemLinkModule} from "./link/link.module";

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    ScrSearchPaperItemLinkModule
  ],
  declarations: [
    ScrSearchPaperItem
  ],
  exports: [
    ScrSearchPaperItem
  ]
})
export class ScrSearchPaperItemModule {

}
