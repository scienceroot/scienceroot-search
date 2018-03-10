import {Component, Input, OnInit} from "@angular/core";
import {ScrPaper} from "../paper.model";

@Component({
  selector: 'scr-search-paper-item',
  template: `
    <div class="paper">
      <div>
        <span class="scr-primary-text mat-title">{{paper.title}}</span>
      </div>
      <div>
        <span class="mat-caption">by</span>
        <ng-container *ngIf="!!paper && !!paper.author; else missingAuthor">
          <ng-container *ngFor="let author_item of paper.author; let i = index">
            <span class="mat-subheading">{{author_item}}</span>
            <span class="mat-subheading" *ngIf="i + 1 < paper.author.length">, </span>
          </ng-container>
        </ng-container>
        <ng-template #missingAuthor>
          n/a
        </ng-template>
      </div>
      <div>
        <span class="mat-caption">Published</span>
        <span class="mat-subheading">{{paper?.published | date}}</span>
      </div>        
        

      <span *ngIf="paper?.summary" class="mat-body-1">
        {{paper?.summary}}
      </span>

      <div  fxLayout="row"
            fxLayoutGap="24px" >
        <div fxFlex="55px"
             *ngFor="let link of paper?.link">
          <scr-search-paper-item-link [link]="link">
          </scr-search-paper-item-link>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .paper { padding: 24px 0; }
  `]
})
export class ScrSearchPaperItem {

  @Input() paper: ScrPaper;
}
