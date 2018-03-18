export class ScrPaperLink {

  public type: ScrPaperLinkType;

  constructor(
    public target: string
  ) {
    this._extractType(target);
  }

  public typeDisplayName(): string {
    return SCR_PAPER_LINK_TYPE_DISPLAY_NAMES[this.type];
  }

  private _extractType(target: string): ScrPaperLinkType {
    if(!target) return;

    if(target.indexOf(ScrPaperLinkType.PDF) > -1) {
      this.type = ScrPaperLinkType.PDF;
    } else if(target.indexOf(ScrPaperLinkType.DOI) > -1) {
      this.type = ScrPaperLinkType.DOI;
    } else if(target.indexOf(ScrPaperLinkType.ABSTRACT) > -1) {
      this.type = ScrPaperLinkType.ABSTRACT;
    } else {
      this.type = ScrPaperLinkType.WEB;
    }
  }
}

export enum ScrPaperLinkType {
  DOI = 'doi',
  PDF = 'pdf',
  ABSTRACT = 'abs',
  WEB = 'web'
}

export const SCR_PAPER_LINK_TYPE_DISPLAY_NAMES: any = {
  doi: 'DOI',
  pdf: 'PDF',
  abs: 'Abstract',
  web: 'Web'
};
