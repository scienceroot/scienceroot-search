export class ScrSearchInput {

  constructor(
    public type: ScrSearchInputType = ScrSearchInputType.SIMPLE,
    public query: string = '',
    public filterType: 'ScrPaper' | 'ScrUser' = 'ScrPaper'
  ) {
  }
}

export enum ScrSearchInputType {
  SIMPLE = 'simple',
  ADVANCED = 'advanced'
}
