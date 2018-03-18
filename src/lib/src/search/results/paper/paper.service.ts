import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {ScrPaper} from "./paper.model";
import "rxjs/add/operator/map";
import {ScrSearchStore} from "../../../store/search.store";

@Injectable()
export class ScrSearchPaperService {

  constructor(
    private http: HttpClient
  ) {
  }

  public search(params: HttpParams): Promise<ScrPaper[]> {
    let url: string = `${ScrSearchStore.searchPapers()}`;

    return this.http.get(url, {params: params})
      .map( (res: any) => ScrPaper.fromObjectArray(res))
      .toPromise();
  }
}
