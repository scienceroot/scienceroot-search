import {ScrSearchable} from "../search.model";

export class ScrSearchResult {

  constructor(
    public filterType: 'ScrPaper' | 'ScrUser' | 'ScrPreprint',
    public values: ScrSearchable[]
  ) {
  }
}
