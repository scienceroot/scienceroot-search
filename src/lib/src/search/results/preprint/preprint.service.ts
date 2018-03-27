import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from '@angular/common/http';
import {ScrSearchStore} from '../../../store/search.store';
import {ScrPreprint} from './preprint.model';

@Injectable()
export class ScrSearchPreprintService {

  constructor(
    private http: HttpClient
  ) {
  }

  public search(params: HttpParams): Promise<ScrPreprint[]> {
    let url: string = `${ScrSearchStore.searchPreprints()}`;

    return this.http.get(url, {params: params})
      .map( (res: any) => ScrPreprint.fromObjectArray(res))
      .toPromise();
  }
}
