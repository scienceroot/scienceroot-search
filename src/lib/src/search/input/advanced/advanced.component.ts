import {Component, EventEmitter, Input, Output} from "@angular/core";
import {ScrSearchInput, ScrSearchInputData} from "../input.model";

@Component({
  selector: 'scr-search-input-advanced',
  template: `
    <ng-container *ngIf="input.filterType === 'ScrPaper'">
      <scr-search-input-advanced-paper [data]="input.data"
                                      (dataChange)="onInputDataChange($event)">
      </scr-search-input-advanced-paper>
    </ng-container>
    <ng-container *ngIf="input.filterType === 'ScrUser'">

    </ng-container>
  `,
  styles: [`
  
  `]
})
export class ScrSearchInputAdvancedComponent {

  @Input() input: ScrSearchInput;

  @Output() inputChange: EventEmitter<ScrSearchInput> = new EventEmitter();

  public onInputDataChange(newInputData: ScrSearchInputData) {
    let newInput = this.input;

    newInput.data = newInputData;

    this.inputChange.emit(newInput);
  }
}
