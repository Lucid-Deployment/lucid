export interface AuthenticateInput {
  email: string;
  password: string;
}

export interface UserInfo {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: "admin" | "customer";
}

export interface AuthenticateResult {
  message: string;
  expiresAt: number;
  userInfo: UserInfo;
}
