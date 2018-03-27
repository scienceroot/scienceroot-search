import {Component, Input, OnInit} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {ScrSearchResult} from "./result.model";

@Component({
  selector: 'scr-search-result',
  template: `
    <div  class="result"
          fxLayout="row">
      <div  fxFlex=""
            fxFlexAlign="center">
        <scr-loading [waitFor]="resultReq">
          <div onFinish>
            <ng-container *ngIf="!!result">
              <ng-container [ngSwitch]="result.filterType">
                <ng-container *ngSwitchCase="'ScrPaper'">
                  <scr-search-result-papers [papers]="result.values">
                  </scr-search-result-papers>
                </ng-container>
                <ng-container *ngSwitchCase="'ScrPreprint'">
                  <scr-search-result-preprints [preprints]="result.values">
                  </scr-search-result-preprints>
                </ng-container>
                <ng-container *ngSwitchCase="'ScrUser'">
                  <scr-search-result-users [users]="result.values">
                  </scr-search-result-users>
                </ng-container>
              </ng-container>
            </ng-container>
          </div>
        </scr-loading>
      </div>
    </div>
  `,
  styles: [`
    .result {
      width: 100%;
    }
  `]
})
export class ScrSearchResultComponent implements OnInit {

  @Input() onResult: Observable<Promise<ScrSearchResult>>;

  public resultReq: Promise<ScrSearchResult>;
  public result: ScrSearchResult;

  ngOnInit(): void {
    if(!!this.onResult) {
      this.onResult.subscribe(resultReq => this._onResultReqChange(resultReq));
    }
  }

  private _onResultReqChange(newResultReq: Promise<ScrSearchResult>) {
    this.resultReq = newResultReq;
    this.resultReq.then((newResult: ScrSearchResult) => {
      this.result = newResult
    });
  }
}
