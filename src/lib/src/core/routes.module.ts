import {NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";
import {ScrSearchPaperComponent} from "../search/paper/paper.component";
import {ScrAuthenticationGuard, ScrAuthenticationLoginComponent, ScrAuthenticationModule} from "@scienceroot/security";
import {ScrSearchPaperModule} from "../search/paper/paper.module";

const SEARCH_ROUTES: Route[] = [
  { path: 'search',
    component: ScrSearchPaperComponent,
    canActivate: [ScrAuthenticationGuard]},
  { path: 'login',
    component: ScrAuthenticationLoginComponent
  },
];

@NgModule({
  imports: [
    ScrAuthenticationModule,
    ScrSearchPaperModule,
    RouterModule.forChild(SEARCH_ROUTES)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class ScrSearchRoutesModule {

}
