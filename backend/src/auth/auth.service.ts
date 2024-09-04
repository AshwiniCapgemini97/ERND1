import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UserStatus } from '../../src/shared/status.enum';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService
  ) { }
  create() {
    return 'This action adds a new auth';
  }

  async signIn(email: string, password: string): Promise<{ access_token: string }> {
    const user = await this.usersService.findUserByEmail(email);
    if (user) {
      if (user.status == UserStatus.INACTIVE) {
        throw new HttpException('User is not active.', HttpStatus.BAD_REQUEST);
      }
      const isPasswordMatch = await this.usersService.comparePasswords(password, user.password);
      if (!isPasswordMatch) {
        throw new UnauthorizedException();
      }
      const payload = { name: user.name, email: user.email, id: user.id, role_id: user.role_id, role: user.role_id == 2 ? 'User' : 'Admin' };
      const accestToken = await this.jwtService.signAsync(payload);
      return {
        ...payload, 'access_token': accestToken
      };
    } else {
      throw new UnauthorizedException();
    }

    // TODO: Generate a JWT and return it here
    // instead of the user object

  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  // update(id: number, updateAuthDto: UpdateAuthDto) {
  //   return `This action updates a #${id} auth`;
  // }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
