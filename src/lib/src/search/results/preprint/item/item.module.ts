import {NgModule} from "@angular/core";
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ScrSearchPreprintItemComponent} from './item.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
  ],
  declarations: [
    ScrSearchPreprintItemComponent
  ],
  exports: [
    ScrSearchPreprintItemComponent
  ],
  providers: []
})
export class ScrSearchPreprintItemModule {

}
