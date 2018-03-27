import {Component, EventEmitter, Output} from "@angular/core";
import {MatRadioChange} from "@angular/material";

@Component({
  selector: 'scr-search-input-filter-type',
  template: `
    <mat-radio-group (change)="onFilterTypeChange($event)">
      <div  fxLayout="row"
            fxLayoutGap="24px">
        <div fxFlex="80px">
          <mat-radio-button value="ScrPaper"
                            checked="true">
            <span>Papers</span>
          </mat-radio-button>
        </div>
        <div fxFlex="80px">
          <mat-radio-button value="ScrPreprint">
            <span>Preprints</span>
          </mat-radio-button>
        </div>
        <div fxFlex="80px">
          <mat-radio-button value="ScrUser">
            <span>User</span>
          </mat-radio-button>
        </div>
      </div>
    </mat-radio-group>
  `,
  styles: [`
  
  `]
})
export class ScrSearchInputFilterTypeComponent {

  @Output() filterTypeChange: EventEmitter<'ScrPaper' | 'ScrUser' | 'ScrPreprint'> = new EventEmitter();

  public onFilterTypeChange(filterTypeChangeEvent: MatRadioChange) {
    this.filterTypeChange.emit(filterTypeChangeEvent.value);
  }
}
