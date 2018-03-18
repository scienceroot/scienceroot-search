import {ScrSearchable} from "../../search.model";
import {ScrPaperLink} from "./paper-item/link/link.model";

export class ScrPaper extends ScrSearchable {

  public static type: string = 'ScrPaper';

  public static fromObjectArray(objArr: any[] = []) {
    let mapFc = (obj: any) => ScrPaper.fromObj(obj)

    return objArr.map(mapFc);
  }

  public static fromObj(obj: any): ScrPaper {
    let mapFnc = (linkStr: string) => new ScrPaperLink(linkStr);
    let links = obj.link.map(mapFnc);

    return new ScrPaper(
      obj.id,
      obj.title,
      obj.published,
      obj.summary,
      obj.author,
      links,
      obj.updated
    )
  }

  constructor(
    public id?: string,
    public title?: string,
    public published?: Date,
    public summary?: string,
    public author?: string[],
    public links: ScrPaperLink[],
    public updated?: Date
  ) {
    super();

    console.log(links)
  }
}
