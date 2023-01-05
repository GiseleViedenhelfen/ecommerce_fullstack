import { Request, Response } from "express";
import UserService from "../service/user";

export default class UserController {
  constructor(private userService = new UserService()) {}
  public getUser = async (req: Request, res: Response): Promise <Response> => {
    const { email } = req.body;
    const user = await this.userService.getUser(email);
    
    return res.status(200).json(user);
  };
}