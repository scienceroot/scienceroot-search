import {Component, EventEmitter, Input, Output} from "@angular/core";
import {ScrSearchInput, ScrSearchInputType} from "./input.model";

@Component({
  selector: 'scr-search-input',
  template: `
    <div>
      <ng-container *ngIf="input.type === SIMPLE; then simple else advanced">
      </ng-container>
      
      <div>
        <scr-search-input-filter-type (filterTypeChange)="filterTypeChange($event)">
        </scr-search-input-filter-type>
      </div>
    </div>
    
    <ng-template #simple>
      <scr-search-input-simple  [input]="input"
                                (onInputChange)="inputChange($event)">
      </scr-search-input-simple>
    </ng-template>

    <ng-template #advanced>
      <ng-container *ngIf="input.filterType === 'ScrPaper'">
        
      </ng-container>
      <ng-container *ngIf="input.filterType === 'ScrUser'">

      </ng-container>
    </ng-template>
  `,
  styles: [`
  
  `]
})
export class ScrSearchInputComponent {

  public readonly SIMPLE: ScrSearchInputType = ScrSearchInputType.SIMPLE;
  public readonly ADVANCED: ScrSearchInputType = ScrSearchInputType.ADVANCED;

  @Input() input: ScrSearchInput;

  @Output() onInputChange: EventEmitter<ScrSearchInput> = new EventEmitter();

  public inputChange(newInput: ScrSearchInput) {
    this._updateInput(newInput)
  }

  public filterTypeChange(newFilterType: 'ScrPaper' | 'ScrUser') {
    let newFilter = this.input;

    newFilter.filterType = newFilterType;
    this._updateInput(newFilter);
  }


  private _updateInput(newInput: ScrSearchInput) {
    this.input = newInput;
    this.onInputChange.emit(this.input)
  }
}
