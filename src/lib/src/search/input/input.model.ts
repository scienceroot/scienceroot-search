import {HttpParams} from "@angular/common/http";

export class ScrSearchInput {

  constructor(
    public type: ScrSearchInputType = ScrSearchInputType.SIMPLE,
    public data: ScrSearchInputData = new ScrSearchInputData(),
    public filterType: 'ScrPaper' | 'ScrUser' | 'ScrPreprint' = 'ScrPaper'
  ) {

  }
}

export enum ScrSearchInputType {
  SIMPLE = 'simple',
  ADVANCED = 'advanced'
}

export class ScrSearchInputData {

  public q?: string;

  public toHttpParams(): HttpParams {
    let params = new HttpParams();

    params = params.set('q', '');

    return params;
  };
}
