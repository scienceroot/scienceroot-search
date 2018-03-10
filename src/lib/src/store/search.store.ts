import {ScrSearchStoreConfigModel} from "./search-store-config.model";

export class ScrSearchStore {

  public static search(): string {
    let config = ScrSearchStoreConfigModel.fetch();

    return `${config.base}`;
  }

  public static searchPapers(): string {
    let config = ScrSearchStoreConfigModel.fetch();

    return `${config.papers}`;
  }

  public static searchUsers(): string {
    let config = ScrSearchStoreConfigModel.fetch();

    return `${config.users}`;
  }
}
