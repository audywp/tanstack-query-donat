export interface ILoginBody {
  email: string;
  password: string;
}

export interface ILoginResponse {
  data: {
    token: string;
    user: {
      id: string;
      name: string;
      email: string;
    };
  };
}
