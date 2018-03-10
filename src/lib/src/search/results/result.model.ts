import {ScrSearchable} from "../search.model";

export class ScrSearchResult {

  constructor(
    public filterType: 'ScrPaper' | 'ScrUser',
    public values: ScrSearchable[]
  ) {
  }
}
