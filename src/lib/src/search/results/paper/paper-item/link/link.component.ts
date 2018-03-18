import {Component, Input, OnChanges, OnInit} from "@angular/core";
import {ScrPaperLink} from "./link.model";

@Component({
  selector: 'scr-search-paper-item-link',
  template: `
    <a [href]="link.target"
       target="_blank"
       rel="noopener noreferrer"
       mat-button
       color="accent">
      {{link.typeDisplayName()}}
    </a>
  `,
  styles: [`
  
  `]
})
export class ScrSearchPaperItemLinkComponent implements OnChanges {

  @Input() link: ScrPaperLink;

  ngOnChanges(changes: any): void {
    if(changes.link) {

    }
  }

  private _onLinkChange() {

  }
}


