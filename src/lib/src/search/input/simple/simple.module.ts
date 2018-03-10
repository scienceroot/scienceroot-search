import {NgModule} from "@angular/core";
import {ScrSearchInputSimpleComponent} from "./simple.component";
import {FormsModule} from "@angular/forms";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatInputModule} from "@angular/material";

@NgModule({
  imports: [
    FormsModule,
    FlexLayoutModule,
    MatInputModule
  ],
  declarations: [
    ScrSearchInputSimpleComponent
  ],
  exports: [
    ScrSearchInputSimpleComponent
  ],
  providers: []
})
export class ScrSearchInputSimpleModule {

}
