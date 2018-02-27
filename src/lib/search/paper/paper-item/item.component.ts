import {Component, Input} from "@angular/core";
import {ScrPaper} from "../../../core/paper/paper.model";

@Component({
  selector: 'scr-search-paper-item',
  template: `
    
    <div fxLayout="row">
      <span fxFlex="">{{paper?.title}}</span>
      <span  fxFlex=""
             class="mat-body-1">by</span>
      <span fxFlex=""
           fxLayout="row"
           *ngIf="paper?.author; else missingAuthor">
        <span fxFlex=""
              *ngFor="let author_item of paper?.author"
              class="mat-body-1">
          {{author_item}}, 
        </span>
      </span>
      <span fxFlex="" class="mat-body-1">{{paper?.published | date}}</span>
      <ng-template #missingAuthor>
        unknown
      </ng-template>
    </div>
    
    <span *ngIf="paper?.summary" class="mat-body-1">
      {{paper?.summary}}
    </span>
    
    <div fxLayout="row">
      <a fxFlex=""
         *ngFor="let link of paper?.link"
         [href]="link"
         class="mat-subheading-2 scr-primary-text paper-item-link">
        Source
      </a>
    </div>
  `,
  styles: [`
    .paper-item-link {
      margin-right: 8px;
    }
  `]
})
export class ScrSearchPaperItem {

  @Input() paper: ScrPaper;
}
