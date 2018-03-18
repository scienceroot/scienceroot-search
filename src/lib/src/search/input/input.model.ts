import {HttpParams} from "@angular/common/http";

export class ScrSearchInput {

  constructor(
    public type: ScrSearchInputType = ScrSearchInputType.SIMPLE,
    public data: ScrSearchInputData,
    public filterType: 'ScrPaper' | 'ScrUser' = 'ScrPaper'
  ) {
  }
}

export enum ScrSearchInputType {
  SIMPLE = 'simple',
  ADVANCED = 'advanced'
}

export abstract class ScrSearchInputData {

  public abstract toHttpParams(): HttpParams;
}
