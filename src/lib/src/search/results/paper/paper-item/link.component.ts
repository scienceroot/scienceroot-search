import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: 'scr-search-paper-item-link',
  template: `
    <a [href]="link"
       target="_blank"
       rel="noopener noreferrer"
       class="mat-subheading scr-primary-text">
      Source
    </a>
  `,
  styles: [`
  
  `]
})
export class ScrSearchPaperItemLinkComponent implements OnInit {

  @Input() link: string;

  ngOnInit(): void {
    console.log(this.link);
  }
}
