import {Component} from "@angular/core";
import {ScrSearch} from "./search.model";
import {ActivatedRoute} from "@angular/router";
import {ScrSearchInput, ScrSearchInputType} from "./input/input.model";
import {ScrSearchService} from "./search.service";
import {ScrSimpleSearchInputData} from "./input/simple/simple-input.model";

@Component({
  selector: '',
  template: `
    <div *ngIf="!!search">
      <div>
        <scr-search-input [input]="search.input"
                          (onInputChange)="onSearchInputChange($event)">
        </scr-search-input>
      </div>
      <div>
        <scr-search-result [onResult]="search.onResult">
        </scr-search-result>
      </div>
    </div>
  `,
  styles: [`

  `]
})
export class ScrSearchComponent {

  public search: ScrSearch;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _searchService: ScrSearchService
  ) {
    this._activatedRoute.queryParams.subscribe((params: any) => this._onQueryParamsChange(params));
  }

  public onSearchInputChange(newInput: ScrSearchInput) {
    this.search.input = newInput;
  }

  private _onQueryParamsChange(params: ScrSearchQueryParams) {
    let input = new ScrSearchInput(ScrSearchInputType.SIMPLE, new ScrSimpleSearchInputData(params.query));

    this.search = new ScrSearch(this._searchService, input);
  }
}

export interface ScrSearchQueryParams {
  query: string;
}
