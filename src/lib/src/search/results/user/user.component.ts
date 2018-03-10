import {Component, Input} from "@angular/core";
import {ScrUser} from "@scienceroot/user";

@Component({
  selector: 'scr-search-result-users',
  template: `
    <div>
      <ng-container *ngIf="users?.length > 0">
        <ul>
          <li *ngFor="let user of users; let i = index;">
            <scr-search-result-user-item [searchableUser]="user">
            </scr-search-result-user-item>
            <ng-container *ngIf="i < users.length">
              <mat-divider></mat-divider>
            </ng-container>
          </li>
        </ul>
      </ng-container>

      <ng-container *ngIf="users?.length < 1">
        <span class="mat-body-1">No results found</span>
      </ng-container>

    </div>
  `,
  styles: [`
    ul {
      list-style: none;
      padding-left: 0;
    }
  `]
})
export class ScrSearchResultUserComponent {

  @Input() users: ScrUser[];
}
