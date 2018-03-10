import {Component} from '@angular/core';

@Component({
  selector: 'demo-app',
  template: `
    <div fxLayout="row"
         class="menu">
      <div fxFlex="64px"
           class="menu-item logo-container">
        <img src="" alt=""/>
      </div>
      <div fxFlex="">
        <scr-search-header>
        </scr-search-header>
      </div>
    </div>
    <div style="padding: 24px">
      <div fxLayout="row"
           fxLayoutAlign="center">
        <div fxFlex="90%"
             fxFlex.lt-md="100%"
             fxFlex.lt-lg="90%"
             fxFlex.xl="75%">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .menu {
      padding: 8px 24px;
      background-color: #0F0F1F;
    }

    .logo-container {
      height: 64px;
      width: 48px;
    }

    .logo-container img {
      width: 100%;
      height: 100%;
    }
  `]
})
export class AppComponent {

}
