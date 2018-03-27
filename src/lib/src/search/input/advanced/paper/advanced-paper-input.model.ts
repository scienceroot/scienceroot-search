import {ScrSearchInputData} from "../../input.model";
import {HttpParams} from "@angular/common/http";

export class ScrAdvancedPaperInputData extends ScrSearchInputData {

  constructor(
    public author: string,
    public title: string,
    public abstract: string
  ) {
    super();
  }

  public toHttpParams(): HttpParams {
    return null;
  }
}
