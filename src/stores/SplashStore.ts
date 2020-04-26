import { observable } from "mobx";

export default class SplashStore {
  @observable isLoading: boolean = false;
  constructor() {}
}
