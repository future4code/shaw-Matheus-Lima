import dotenv from "dotenv";
import {USER_ROLES} from "../../src/model/User"

dotenv.config();

export class TokenGeneratorMock {
  

  public generate = (input: AuthenticationData): string => {


    return "token_mock";
  };

  public verify(token: string) {

    return {
      id: "id_mock",
      role: USER_ROLES.NORMAL
    }
  }
}

export interface AuthenticationData {
  id: string;
  role: string;
}
