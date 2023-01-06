import { Request, Response, NextFunction } from 'express';
import User from '../database/models/user.model';
import UserService from '../service/user';
import * as Jwt from 'jsonwebtoken';
const JWT_SECRET = 'jwt_secret';
export default class LoginMiddle {
  public model = User;
  constructor(private userService = new UserService()) { }
  public LoginValidation = async (
    req: Request,
    res: Response,
    next: NextFunction
    ): Promise <Response | undefined> => {
  
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'All fields must be filled' });
    }

    const login = await this.model.findOne({ where: { email }, raw: true }) as User;
    if (!login) {
      return res.status(400).json({ message: 'Incorrect email or password' });
    }
    const token = await this.userService.Login(email, password);
    if (!token) {
      return res.status(403).json({ message: 'All fields must be filled' });
    }
    next(); 
  };
  public validateAuth = async (req: Request, res: Response, next: NextFunction):
  Promise<Response | undefined> => {
    const { authorization } = req.headers;
    const verifica = Jwt.verify(authorization, JWT_SECRET)
    console.log(verifica);
    
    if (!authorization) {
      return res.status(401).json({ message: 'Incorrect email or password' });
    }

    next();
  };
}