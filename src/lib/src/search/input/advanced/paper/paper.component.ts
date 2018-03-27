import {Component, EventEmitter, Input, Output} from "@angular/core";
import {ScrAdvancedPaperInputData} from "./advanced-paper-input.model";

@Component({
  selector: 'scr-search-input-advanced-paper',
  template: `
    <div  fxLayout="row"
          fxLayoutGap="24px">
      <div fxFlex="">
        <mat-form-field>
          <input  matInput=""
                  placeholder="Title"
                  type="search"/>
        </mat-form-field>
      </div>
      <div fxFlex="">
        <mat-form-field>
          <input  matInput=""
                  placeholder="Author"
                  type="search"/>
        </mat-form-field>
      </div>
      <div fxFlex="">
        <mat-form-field>
          <input  matInput=""
                  placeholder="Abstract"
                  type="search"/>
        </mat-form-field>
      </div>
    </div>
  `,
  styles: [`
    mat-form-field, input {
      width: 100%;
    }
  `]
})
export class ScrSearchInputAdvancedPaperComponent {

  @Input() data: ScrAdvancedPaperInputData;

  @Output() dataChange: EventEmitter<ScrAdvancedPaperInputData> = new EventEmitter();
}
