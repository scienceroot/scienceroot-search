import {Component} from "@angular/core";
import {map} from 'rxjs/operators';
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
      <div [ngClass]="{
        'hero': isInitState
      }">
        <scr-search-input [input]="search.input"
                          (onInputChange)="onSearchInputChange($event)">
        </scr-search-input>
      </div>
      <div *ngIf="!isInitState">
        <scr-search-result [resultReq]="resultReq">
        </scr-search-result>
      </div>
    </div>
  `,
  styles: [`
    
  `]
})
export class ScrSearchComponent {

  public isInitState: boolean = true;
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
    const query: string = params.query;
    let input =  null;

    if (!!query) {
      input = new ScrSearchInput(ScrSearchInputType.SIMPLE, new ScrSimpleSearchInputData(params.query));
    }
    this._updateSearch(input);
  }

  private _updateSearch(input: ScrSearchInput) {
    this.search = new ScrSearch(this._searchService, input);

    this.search.onResult
      .pipe(
        map((res: Promise<ScrSearchResult>) => {
          if(this.isInitState) {
            this.isInitState = false;
          }

          return res;
        })
      )
      .subscribe((res: Promise<ScrSearchResult>) => this.resultReq = res);
  }
}

export interface ScrSearchQueryParams {
  query: string;
}
