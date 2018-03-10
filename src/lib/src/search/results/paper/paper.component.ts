import {Component, Input} from "@angular/core";
import {ScrPaper} from "./paper.model";

@Component({
  selector: 'scr-search-result-papers',
  template: `
    <div fxLayout="column">
      <div fxFlex=""
           *ngIf="papers?.length > 1">
        <ul>
          <li *ngFor="let paper of papers; index as i">
            <scr-search-paper-item [paper]="paper"></scr-search-paper-item>
            <ng-container *ngIf="i < papers.length">
              <mat-divider></mat-divider>
            </ng-container>
          </li>
        </ul>
      </div>

      <span class="mat-body-1"
            *ngIf="papers?.length < 1">
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
export class ScrSearchResultPaperComponent {

  @Input() papers: ScrPaper[];

  constructor() {
  }
}
