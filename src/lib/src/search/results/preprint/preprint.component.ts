import {Component, Input} from "@angular/core";
import {ScrPreprint} from './preprint.model';

@Component({
  selector: 'scr-search-result-preprints',
  template: `
    <div fxLayout="column">
      <div fxFlex=""
           *ngIf="preprints?.length > 0">
        <ul>
          <li *ngFor="let preprint of preprints; let i = index;">
            <scr-search-preprint-item [preprint]="preprint">
            </scr-search-preprint-item>
            <ng-container *ngIf="i < preprints.length">
              <mat-divider></mat-divider>
            </ng-container>
          </li>
        </ul>
      </div>

      <span class="mat-body-1"
            *ngIf="preprints?.length < 1">
        No results found
      </span>

    </div>
  `,
  styles: [`
    ul {
      list-style: none;
      padding-left: 0;
    }
  `]
})
export class ScrSearchPreprintComponent {

  @Input() preprints: ScrPreprint[];
}
