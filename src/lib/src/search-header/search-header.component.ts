import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'scr-search-header',
  template: `
    <form (submit)="submit($event); false">
      <scr-search-bar [value]="query"
                      (valueChange)="onQueryChange($event);">
      </scr-search-bar>
      <button style="display: none;"></button>
    </form>
  `,
  styles: [`

  `]
})
export class ScrSearchHeaderComponent {

  public query: string;

  constructor(private _router: Router) {
  }

  public onQueryChange(newQuery: string) {
    this.query = newQuery;
  }

  public submit(event: any) {
    event.stopPropagation();

    this._router.navigate(
      ['/search'],
      {
        queryParams: {query: this.query}
      }
    );
  }
}
