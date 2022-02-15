export class User {

  id: string;

  name: string;

  email: string;

  password: string;

  constructor(uId: string, uName: string, uEmail: string, uPass: string) {
    this.id = uId;
    this.name = uName;
    this.email = uEmail;
    this.password = uPass;
  }

}
