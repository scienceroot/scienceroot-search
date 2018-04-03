import {Component} from "@angular/core";
import {ScrSearchResult} from './results/result.model';
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
        <scr-search-result [resultReq]="resultReq">
        </scr-search-result>
      </div>
    </div>
  `,
  styles: [`

  `]
})
export class ScrSearchComponent {

  public search: ScrSearch;
  public resultReq: Promise<ScrSearchResult>;

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
    const input = new ScrSearchInput(ScrSearchInputType.SIMPLE, new ScrSimpleSearchInputData(params.query));
    this._updateSearch(input);
  }

  private _updateSearch(input: ScrSearchInput) {
    this.search = new ScrSearch(this._searchService, input);
    this.search.onResult
      .subscribe((res: Promise<ScrSearchResult>) => this.resultReq = res);
  }
}

export interface ScrSearchQueryParams {
  query: string;
}
