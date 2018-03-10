import {Injectable} from "@angular/core";
import {ScrSearchStore} from "../../../store/search.store";
import {HttpParams, HttpClient} from "@angular/common/http";
import {ScrSearchableUser} from "./user.model";

@Injectable()
export class ScrSearchUserService {

  constructor(
    private http: HttpClient
  ) {
  }

  public search(query: string): Promise<ScrSearchableUser[]> {
    let url: string = `${ScrSearchStore.searchUsers()}`;

    let params: HttpParams = new HttpParams();
    params = params.set('q', query);

    return this.http.get(url, {params: params})
      .map( (res: any) => ScrSearchableUser.fromObjectArray(res))
      .toPromise();
  }
}
