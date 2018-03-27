import {HttpParams} from "@angular/common/http";

export class ScrSearchInput {

  constructor(
    public type: ScrSearchInputType = ScrSearchInputType.SIMPLE,
    public data?: any,
    public filterType: 'ScrPaper' | 'ScrUser' | 'ScrPreprint' = 'ScrPaper'
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
