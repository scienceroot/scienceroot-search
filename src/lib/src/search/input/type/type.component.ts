import {Component, EventEmitter, Input, Output} from "@angular/core";
import {ScrSearchInputType} from "../input.model";
import {MatSlideToggleChange} from "@angular/material";

@Component({
  selector: 'scr-search-input-type',
  template: `
    <div  fxLayout="row"
          fxLayoutAlign="end">
      <div fxFlex="100px" *ngIf="false">
        <mat-slide-toggle (change)="onTypeChange($event)">
          Advanced
        </mat-slide-toggle>
      </div>
    </div>
  `,
  styles: [`
  
  `]
})
export class ScrSearchInputTypeComponent {

  @Input() type: ScrSearchInputType;

  @Output() typeChange: EventEmitter<ScrSearchInputType> = new EventEmitter();

  public onTypeChange(event: MatSlideToggleChange) {
    let newType: ScrSearchInputType;

    if(event.checked) {
      newType = ScrSearchInputType.ADVANCED;
    } else {
      newType = ScrSearchInputType.SIMPLE;
    }

    this.typeChange.emit(newType);
  }
}
