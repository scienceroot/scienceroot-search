import {Component, OnInit} from "@angular/core";
import {ScrSearchPaperService} from "../../core/paper/paper.service";
import {ScrPaper} from "../../core/paper/paper.model";
import {FormControl} from "@angular/forms";
import {debounceTime, distinctUntilChanged} from "rxjs/operators";

@Component({
  selector: '',
  template: `
    <div fxLayout="column">

      <div fxFlex="">
        <mat-form-field>
          <input matInput=""
                 [formControl]="queryCtrl"
                 placeholder="Search for papers"
                 type="text"/>
        </mat-form-field>
      </div>
      
      <div *ngIf="loading == true" fxFlex="">
        <mat-progress-spinner></mat-progress-spinner>
      </div>
      
      <div fxFlex=""
           *ngIf="papers?.length > 1">
        <mat-list>
          <mat-list-item *ngFor="let paper of papers">
            <scr-search-paper-item [paper]="paper"></scr-search-paper-item>
          </mat-list-item>
        </mat-list>
      </div>

      <span class="mat-body-1"
            *ngIf="papers?.length < 1 && loading == false">
        No results found
      </span>

    </div>

  `,
  styles: [`

    mat-form-field, input {
      width: 100%;
    }
    
    mat-list-item {
      border-bottom: 1px solid lightgrey;
      height: 60px !important;
    }
  `]
})
export class ScrSearchPaperComponent implements OnInit {

  public loading: boolean = false;
  public queryCtrl: FormControl = new FormControl('');
  public papers: ScrPaper[];

  constructor(
    private paperSearchService: ScrSearchPaperService
  ) {
  }

  ngOnInit(): void {
    this.queryCtrl.valueChanges
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe(query => this.searchForPapers(query))
  }

  private searchForPapers(query: string) {
    this.loading = true;
    this.papers = [];
    this.paperSearchService
      .search(query)
      .then(_papers => {
        this.papers = _papers;
        this.loading = false;
      });
  }

}
