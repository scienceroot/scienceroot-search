import {NgModule} from "@angular/core";
import {ScrSearchResultPaperComponent} from "./paper.component";
import {CommonModule} from "@angular/common";
import {FlexLayoutModule} from "@angular/flex-layout";
import {
  MatDividerModule, MatFormFieldModule, MatInputModule, MatListModule,
  MatProgressSpinnerModule
} from "@angular/material";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ScrSearchPaperItemModule} from "./paper-item/item.module";
import {BrowserModule} from "@angular/platform-browser";
import {ScrSearchPaperService} from "./paper.service";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatProgressSpinnerModule,
    ScrSearchPaperItemModule
  ],
  declarations: [
    ScrSearchResultPaperComponent
  ],
  exports: [
    ScrSearchResultPaperComponent
  ],
  providers: [
    ScrSearchPaperService
  ]
})
export class ScrSearchResultPaperModule {}
