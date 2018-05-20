import {NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";
import {ScrAuthenticationGuard, ScrAuthenticationLoginComponent, ScrAuthenticationModule} from "@scienceroot/security";
import {ScrSearchComponent} from "../search/search.component";
import {ScrSearchModule} from "../search/search.module";

const SEARCH_ROUTES: Route[] = [
  {
    path: 'search',
    component: ScrSearchComponent
  }
];

@NgModule({
  imports: [
    ScrAuthenticationModule,
    ScrSearchModule,
    RouterModule.forChild(SEARCH_ROUTES)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class ScrSearchRoutesModule {

}
