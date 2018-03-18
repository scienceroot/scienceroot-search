import {Component, EventEmitter, Input, Output} from "@angular/core";
import {ScrSearchInput} from "../input.model";
import {ScrSimpleSearchInputData} from "./simple-input.model";

@Component({
  selector: 'scr-search-input-simple',
  template: `
    <div  fxLayout="row"
          fxLayoutAlign="center">
      <div fxFlexFill="">
        <mat-form-field>
          <input  matInput=""
                  placeholder="Search..."
                  [ngModel]="input.data.q"
                  (ngModelChange)="onQueryChange($event)"
                  type="search">
        </mat-form-field>
      </div>
    </div>
  `,
  styles: [`
    mat-form-field, input { width: 100%; }
  `]
})
export class ScrSearchInputSimpleComponent {

  @Input() input: ScrSearchInput;

  @Output() onInputChange: EventEmitter<ScrSearchInput> = new EventEmitter();

  public onQueryChange(newQuery: string) {
    this.input.data = new ScrSimpleSearchInputData(newQuery);

    this.onInputChange.emit(this.input);
  }
}
