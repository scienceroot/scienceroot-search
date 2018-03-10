import {Injectable} from "@angular/core";
import {ScrSearchPaperService} from "./results/paper/paper.service";
import {ScrSearchInput} from "./input/input.model";
import {ScrPaper} from "./results/paper/paper.model";
import {ScrSearchable} from "./search.model";

@Injectable()
export class ScrSearchService {

  constructor(
    private _paperService: ScrSearchPaperService
  ) {
  }

  public get(input: ScrSearchInput): Promise<ScrSearchable[]> {
    let result;

    switch (input.filterType) {
      case 'ScrPaper':
        result = this._getPapers(input);
        break;
    }

    return result;
  }

  private _getPapers(input: ScrSearchInput): Promise<ScrPaper[]> {
    return this._paperService.search(input.query);
  }
}
