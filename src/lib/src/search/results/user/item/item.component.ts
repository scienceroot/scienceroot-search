import {Component, Input} from "@angular/core";
import {ScrSearchableUser} from "../user.model";

@Component({
  selector: 'scr-search-result-user-item',
  template: `
    <div class="user">
      <div>
        <span class="scr-primary-text mat-title">{{ searchableUser.user.forename }} {{ searchableUser.user.lastname }}</span>
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
