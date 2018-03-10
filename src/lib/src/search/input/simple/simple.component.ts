import {Component, EventEmitter, Input, Output} from "@angular/core";
import {ScrSearchInput} from "../input.model";

@Component({
  selector: 'scr-search-input-simple',
  template: `
    <div  fxLayout="row"
          fxLayoutAlign="center">
      <div fxFlexFill="">
        <mat-form-field>
          <input  matInput=""
                  placeholder="Search..."
                  [ngModel]="input.query"
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
    this.input.query = newQuery;

    this.onInputChange.emit(this.input);
  }
}
