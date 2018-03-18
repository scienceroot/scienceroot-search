import {ScrSearchInputData} from "../input.model";
import {HttpParams} from "@angular/common/http";

export class ScrSimpleSearchInputData extends ScrSearchInputData {

  constructor(
    public q: string
  ) {

  }

  public toHttpParams(): HttpParams {
    let params = new HttpParams();

    params = params.set('q', this.q || '');

    return params;
  }
}
