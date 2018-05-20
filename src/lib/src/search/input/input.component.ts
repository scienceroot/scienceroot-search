import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ScrAuthenticationLoginService} from '@scienceroot/security';
import {ScrSearchInput, ScrSearchInputType} from "./input.model";
import {ScrSimpleSearchInputData} from './simple/simple-input.model';

@Component({
  selector: 'scr-search-input',
  template: `
    <ng-container *ngIf="input">
      <div>
        <scr-search-input-type  [type]="input.type "
                                (typeChange)="onTypeChange($event)">
        </scr-search-input-type>
      </div>

      <div>
        <ng-container *ngIf="input.type === SIMPLE; then simple else advanced">
        </ng-container>

        <div>
          <scr-search-input-filter-type (filterTypeChange)="filterTypeChange($event)">
          </scr-search-input-filter-type>
        </div>
      </div>
    </ng-container>
    
    <ng-template #simple>
      <scr-search-input-simple  [input]="input"
                                (onInputChange)="inputChange($event)">
      </scr-search-input-simple>
    </ng-template>

    <ng-template #advanced>
      <scr-search-input-advanced [input]="input">
      </scr-search-input-advanced>
    </ng-template>
  `,
  styles: [`
  
  `]
})
export class ScrSearchInputComponent implements OnInit {

  public readonly SIMPLE: ScrSearchInputType = ScrSearchInputType.SIMPLE;

  @Input() input: ScrSearchInput;

  @Output() onInputChange: EventEmitter<ScrSearchInput> = new EventEmitter();

  ngOnInit(): void {
    this.input = this.input || new ScrSearchInput();
  }

  public inputChange(newInput: ScrSearchInput) {
    this._updateInput(newInput)
  }

  public onTypeChange(newType: ScrSearchInputType) {
    let newFilter = this.input;

    newFilter.type = newType;
    this._updateInput(newFilter);
  }

  public filterTypeChange(newFilterType: 'ScrPaper' | 'ScrUser' | 'ScrPreprint') {
    let newFilter = this.input;

    newFilter.filterType = newFilterType;
    this._updateInput(newFilter);
  }


  private _updateInput(newInput: ScrSearchInput) {
    this.input = newInput;
    this.onInputChange.emit(this.input)
  }
}
