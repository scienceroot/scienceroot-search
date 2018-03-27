import {Injectable} from "@angular/core";
import {ScrSearchPaperService} from "./results/paper/paper.service";
import {ScrSearchInput} from "./input/input.model";
import {ScrPaper} from "./results/paper/paper.model";
import {ScrSearchable} from "./search.model";
import {ScrSearchUserService} from "./results/user/user.service";
import {ScrSearchableUser} from "./results/user/user.model";
import {ScrPreprint} from './results/preprint/preprint.model';
import {ScrSearchPreprintService} from './results/preprint/preprint.service';

@Injectable()
export class ScrSearchService {

  constructor(
    private _paperService: ScrSearchPaperService,
    private _userService: ScrSearchUserService,
    private _preprintService: ScrSearchPreprintService
  ) {
  }

  public get(input: ScrSearchInput): Promise<ScrSearchable[]> {
    let result;

    switch (input.filterType) {
      case 'ScrPaper':
        result = this._getPapers(input);
        break;
      case 'ScrPreprint':
        result = this._getPreprints(input);
        break;
      case 'ScrUser':
        result = this._getUsers(input);
        break;
    }

    return result;
  }

  private _getPapers(input: ScrSearchInput): Promise<ScrPaper[]> {
    return this._paperService.search(input.data.toHttpParams());
  }

  private _getUsers(input: ScrSearchInput): Promise<ScrSearchableUser[]> {
    return this._userService.search(input.data.toHttpParams());
  }

  private _getPreprints(input: ScrSearchInput): Promise<ScrPreprint[]> {
    return this._preprintService.search(input.data.toHttpParams());
  }
}
