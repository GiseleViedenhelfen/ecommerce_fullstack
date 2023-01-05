import User from "../database/models/user.model";

class UserService {
  public model = User;
  public async getUser(email:string): Promise<User> {
    const user = await this.model.findOne({ where: { email } }) as User;
    return user
  }
}
export default UserService;