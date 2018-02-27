import {NgModule} from "@angular/core";
import {MatCardModule, MatListModule} from "@angular/material";
import {CommonModule} from "@angular/common";
import {ScrSearchPaperItem} from "./item.component";

@NgModule({
  imports: [
    CommonModule
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
