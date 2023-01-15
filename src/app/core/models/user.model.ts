export class UserLogin {
  username: string;
  password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}

export class ResponseLogin {
  email: string;
  firstName: string;
  gender: string;
  id: number;
  image: string;
  lastName: string;
  token: string;
  username: string;

  constructor(
    email: string,
    firstName: string,
    gender: string,
    id: number,
    image: string,
    lastName: string,
    token: string,
    username: string
  ) {
    this.email = email;
    this.firstName = firstName;
    this.gender = gender;
    this.id = id;
    this.image = image;
    this.lastName = lastName;
    this.token = token;
    this.username = username;
  }
}
