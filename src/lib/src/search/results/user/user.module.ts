import {NgModule} from "@angular/core";
import {ScrSearchResultUserComponent} from "./user.component";
import {ScrSearchUserService} from "./user.service";
import {CommonModule} from "@angular/common";
import {MatDividerModule} from "@angular/material";
import {ScrSearchableUserItemModule} from "./item/item.module";

@NgModule({
  imports: [
    CommonModule,
    MatDividerModule,
    ScrSearchableUserItemModule
  ],
  declarations: [
    ScrSearchResultUserComponent
  ],
  exports: [
    ScrSearchResultUserComponent
  ],
  providers: [
    ScrSearchUserService
  ]
})
export class ScrSearchResultUserModule {

}
