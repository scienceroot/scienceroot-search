import {Component, Input} from "@angular/core";
import {ScrSearchableUser} from "../user.model";

@Component({
  selector: 'scr-search-result-user-item',
  template: `
    <div class="user">
      <div fxLayout="row">
        <div fxFlex="">
          <span class="scr-primary-text mat-title">{{ searchableUser.user.forename }} {{ searchableUser.user.lastname }}</span>
        </div>
        <div fxFlex="">
          <div fxLayout="row">
            <div fxFlex="32px">
              <a mat-button=""
                 [routerLink]="['/user', searchableUser.user.uid, 'info' ]"
                 color="accent">
                Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .user { padding: 24px 0; }
  `]
})
export class ScrSearchableUserItemComponent {

  @Input() searchableUser: ScrSearchableUser;
}
