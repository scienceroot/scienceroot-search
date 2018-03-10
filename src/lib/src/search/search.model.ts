import {ScrSearchInput} from "./input/input.model";
import {ScrSearchResult} from "./results/result.model";
import {ScrSearchService} from "./search.service";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";
import {debounceTime} from "rxjs/operators";

export class ScrSearch {

  public onResult: Observable<Promise<ScrSearchResult>>;

  private _onResultChange: Subject<Promise<ScrSearchResult>> = new Subject();
  private _result: ScrSearchResult;

  private _onInputChange: Subject<ScrSearchInput> = new Subject();

  constructor(
    private _searchService: ScrSearchService,
    private _input: ScrSearchInput = new ScrSearchInput()
  ) {
    this.onResult = this._onResultChange.asObservable();

    this._onInputChange
      .pipe(
        debounceTime(250)
      )
      .subscribe(input => this._updateResult(input));
  }

  public get input(): ScrSearchInput {
    return this._input;
  }

  public set input(value: ScrSearchInput) {
    this._input = value;
    this._onInputChange.next(value);
  }

  private _updateResult(input: ScrSearchInput) {
    let req = this._searchService.get(input).then((result: ScrSearchable[]) => {
      this._result = new ScrSearchResult(input.filterType, result);

      return this._result;
    });

    this._onResultChange.next(req);
  }
}

export abstract class ScrSearchable {
  public static readonly type: string = '';
}
