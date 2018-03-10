import {Component, Input, OnInit} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {ScrSearchResult} from "./result.model";

@Component({
  selector: 'scr-search-result',
  template: `
    <div>
      <scr-loading [waitFor]="resultReq">
        <div onFinish>
          <ng-container *ngIf="!!result">
            <ng-container [ngSwitch]="result.filterType">
              <ng-container *ngSwitchCase="'ScrPaper'">
                <scr-search-result-papers [papers]="result.values">
                </scr-search-result-papers>
              </ng-container>
            </ng-container>
          </ng-container>
        </div>
      </scr-loading>
    </div>
  `,
  styles: [`
  
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
      console.log(newResult)
      this.result = newResult
    });
  }
}
