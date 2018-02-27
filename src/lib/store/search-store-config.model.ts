export class ScrSearchStoreConfigModel {

  public static readonly storageKeys: any = {
    base: 'scr.search.base',
    papers: 'scr.search.papers',
    users: 'scr.search.users'
  };

  public static fetch(): ScrSearchStoreConfigModel {
    let base = sessionStorage.getItem(ScrSearchStoreConfigModel.storageKeys.base) || '';
    let papers = sessionStorage.getItem(ScrSearchStoreConfigModel.storageKeys.papers) || '';
    let users = sessionStorage.getItem(ScrSearchStoreConfigModel.storageKeys.users) || '';

    return new ScrSearchStoreConfigModel(base, papers, users);
  }

  constructor(
    public base: string,
    public papers: string,
    public users: string
  ) {

  }

  public save() {
    for(let key in ScrSearchStoreConfigModel.storageKeys) {
      sessionStorage.setItem(
        ScrSearchStoreConfigModel.storageKeys[key],
        this[key]
      );
    }
  }
}
