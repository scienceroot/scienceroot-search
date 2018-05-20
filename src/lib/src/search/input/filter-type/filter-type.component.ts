import {Component, EventEmitter, Output} from "@angular/core";
import {MatRadioChange} from "@angular/material";
import {ScrAuthenticationLoginService} from '@scienceroot/security';

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
        <ng-container *ngIf="loggedIn">
          <div fxFlex="80px">
            <mat-radio-button value="ScrUser">
              <span>User</span>
            </mat-radio-button>
          </div>
        </ng-container>
      </div>
    </mat-radio-group>
  `,
  styles: [`
  
  `]
})
export class ScrSearchInputFilterTypeComponent {

  @Output() filterTypeChange: EventEmitter<'ScrPaper' | 'ScrUser' | 'ScrPreprint'> = new EventEmitter();

  public readonly loggedIn: boolean = false;

  constructor(private _loginService: ScrAuthenticationLoginService) {
    this.loggedIn = this._loginService.authenticated();
  }

  public onFilterTypeChange(filterTypeChangeEvent: MatRadioChange) {
    this.filterTypeChange.emit(filterTypeChangeEvent.value);
  }
}
