import {ScrSearchable} from "../../search.model";

export class ScrPaper extends ScrSearchable {

  public static type: string = 'ScrPaper';

  static fromObjectArray(objArr: any[] = []) {
    let mapFc = (obj: any) => ScrPaper.fromObj(obj)

    return objArr.map(mapFc);
  }

  static fromObj(obj: any): ScrPaper {
    return new ScrPaper(
      obj.id,
      obj.title,
      obj.published,
      obj.summary,
      obj.author,
      obj.link,
      obj.updated
    )
  }

  constructor(
    public id?: string,
    public title?: string,
    public published?: Date,
    public summary?: string,
    public author?: string[],
    public link?: string[],
    public updated?: Date
  ) {
    super();
  }
}
