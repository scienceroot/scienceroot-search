import {NgModule} from "@angular/core";
import {ScrSearchableUserItemComponent} from "./item.component";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    RouterModule,
    FlexLayoutModule,
    MatButtonModule
  ],
  declarations: [
    ScrSearchableUserItemComponent
  ],
  exports: [
    ScrSearchableUserItemComponent
  ],
  providers: []
})
export class ScrSearchableUserItemModule {

}
