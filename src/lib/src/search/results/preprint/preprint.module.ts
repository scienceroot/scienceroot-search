import {NgModule} from "@angular/core";
import {ScrSearchPreprintService} from './preprint.service';
import {ScrSearchPreprintComponent} from './preprint.component';
import {CommonModule} from '@angular/common';
import {MatDividerModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ScrSearchPreprintItemModule} from './item/item.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatDividerModule,
    ScrSearchPreprintItemModule
  ],
  declarations: [
    ScrSearchPreprintComponent
  ],
  exports: [
    ScrSearchPreprintComponent
  ],
  providers: [
    ScrSearchPreprintService
  ]
})
export class ScrSearchResultPreprintModule {

}
