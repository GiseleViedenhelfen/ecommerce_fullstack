import * as Jwt from 'jsonwebtoken';
import User from '../database/models/user.model';

const JWT_SECRET = 'jwt_secret';

const tokenGenerate = (user: User) => {
  const token = Jwt.sign(
    { userId: user.id },
    JWT_SECRET,
    { algorithm: 'HS256', expiresIn: '1d' },
  );

  return token;
};

export default tokenGenerate;