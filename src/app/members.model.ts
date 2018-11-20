export class Member {
  public name: string;
  public id: number;




  constructor( params: Object = {}) {
    // tslint:disable-next-line:forin
    for (const param in params) {
      this[param] = param[param];
    }

  }
}
