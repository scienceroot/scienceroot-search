import {Component, Input} from "@angular/core";
import {ScrPreprint} from '../preprint.model';

@Component({
  selector: 'scr-search-preprint-item',
  template: `
    <div  class="preprint"
          fxLayout="column"
          fxLayoutGap="8px">
      <div fxFlex="">
        <span class="scr-primary-text mat-title">{{preprint.title}}</span>
      </div>
      <div fxFlex="">
        <div>
          <span class="mat-caption">by</span>
          <ng-container *ngIf="!!preprint && !!preprint.authors; else missingAuthor">
            <ng-container *ngFor="let author of preprint.authors; let i = index">
              <span class="mat-subheading">{{author}}</span>
              <span class="mat-subheading" *ngIf="i + 1 < preprint.authors.length">, </span>
            </ng-container>
          </ng-container>
          <ng-template #missingAuthor>
            n/a
          </ng-template>
        </div>
        <!--<div>
          <span class="mat-caption">Published</span>
          <span class="mat-subheading">{{preprint?.published | date}}</span>
          <ng-container *ngIf="preprint?.published !== preprint?.updated">
            <span class="mat-subheading">(updated {{preprint?.updated | date}})</span>
          </ng-container>
        </div>-->
      </div>

      <div>
        <span *ngIf="preprint?.description" class="mat-body-1">
          {{preprint?.description}}
        </span>
      </div>
      <div fxFlex="">
        
      </div>
    </div>
  `,
  styles: [`
    .preprint { padding: 24px 0; }
  `]
})
export class ScrSearchPreprintItemComponent {

  @Input() preprint: ScrPreprint;
}
