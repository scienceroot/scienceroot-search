import {ScrUser} from "@scienceroot/user";
import {ScrSearchable} from "../../search.model";

export class ScrSearchableUser extends ScrSearchable {

  public static type: string = 'ScrUser';

  static fromObjectArray(objArr: any[] = []) {
    let mapFc = (obj: any) => ScrSearchableUser.fromObj(obj)

    return objArr.map(mapFc);
  }

  static fromObj(obj: any): ScrSearchableUser {
    return new ScrSearchableUser(ScrUser.fromObj(obj));
  }

  constructor(
    public user: ScrUser
  ) {
    super();
  }
}
