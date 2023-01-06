const md5 = require('md5')
import User from "../database/models/user.model";
import bCryptPasswordValidation from "../helpers/bCryptPassVal";
import tokenGenerate from "../helpers/jwtGenerator";

interface JwtUser {
  userId: number;
}
class UserService {
  public model = User;

  public async Login(email:string, password: string): Promise<JwtUser | null> {
    const user = await this.model.findOne({ where: { email } }) as User;
    
   if (!bCryptPasswordValidation(password, user.password)) {
    return null;
    }
    const token = tokenGenerate(user);

    return token as unknown as JwtUser;
  }

  public async validate(userData: JwtUser): Promise<string> {
    const { userId } = userData;
    const user = await this.model.findOne({ where: { id: userId } }) as User;

    return user.role;
  }
}
export default UserService;