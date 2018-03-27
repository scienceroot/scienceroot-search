import {ScrSearchable} from "../../search.model";

export class ScrPreprint extends ScrSearchable {

  public static type: string = 'ScrPreprint';

  public static fromObjectArray(objArr: any[] = []) {
    let mapFc = (obj: any) => ScrPreprint.fromObj(obj)

    return objArr.map(mapFc);
  }

  public static fromObj(obj: any): ScrPreprint {

    return new ScrPreprint(
      obj.id,
      obj.title,
      obj.published,
      obj.description,
      obj.authors,
      obj.modified,
      obj.created
    )
  }

  constructor(
    public id?: string,
    public title?: string,
    public published?: Date,
    public description?: string,
    public authors?: string[],
    public modified?: Date,
    public created?: Date
  ) {
    super();
  }
}
