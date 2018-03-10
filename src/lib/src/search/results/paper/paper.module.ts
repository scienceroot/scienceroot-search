import {NgModule} from "@angular/core";
import {ScrSearchPaperComponent} from "./paper.component";
import {CommonModule} from "@angular/common";
import {FlexLayoutModule} from "@angular/flex-layout";
import {ScrSearchPaperService} from "../../core/paper/paper.service";
import {MatFormFieldModule, MatInputModule, MatListModule, MatProgressSpinnerModule} from "@angular/material";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ScrSearchPaperItemModule} from "./paper-item/item.module";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatProgressSpinnerModule,
    ScrSearchPaperItemModule
  ],
  declarations: [
    ScrSearchPaperComponent
  ],
  exports: [
    ScrSearchPaperComponent
  ],
  providers: [
    ScrSearchPaperService
  ]
})
export class ScrSearchPaperModule {}
