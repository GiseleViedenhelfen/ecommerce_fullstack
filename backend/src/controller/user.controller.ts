import { Request, Response } from "express";
import UserService from "../service/user";
import * as jwt from 'jsonwebtoken';
const JWT_SECRET = 'jwt_secret';
interface JwtUser {
  userId: number;
}

export default class UserController {
  constructor(private userService = new UserService()) {}

  public login = async (req: Request, res: Response): Promise <Response> => {
    const { email, password } = req.body;
    const {authorization} = req.headers;
    console.log(authorization);
    const token = await this.userService.Login(email, password);
    
    return res.status(200).json(token);
  };
  public validate = async (req: Request, res: Response): Promise<Response> => {
    const { authorization } = req.headers ;

    const newAuthorization = authorization.replace('Bearer ', '');

    const userData = jwt.verify(newAuthorization as string, JWT_SECRET);

    const role = await this.userService.validate(userData as JwtUser);

    return res.status(200).json({ role })
  };
  
}