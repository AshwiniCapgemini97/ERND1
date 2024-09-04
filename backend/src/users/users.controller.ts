import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
  Req,
  Res,
  NotFoundException,
  HttpException,
  HttpStatus,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcryptjs';
import { ChangeUserStatusDto } from './dto/change-user-status.dto';
import { User } from './entities/user.entity';
import { AuthenticationGuard } from '../guards/authentication.guard';
import { AuthorizationGuard } from '../guards/authorization.guard';
import { Roles } from '../decorators/roles.decorator';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('signup')
  async signup(@Body() createUserDto: CreateUserDto) {
    const { email } = createUserDto;
    const existingUser = await this.userService.findUserByEmail(email);
    if (existingUser) {
      console.log('existingUser', existingUser);
      throw new HttpException('Uses Already exists', HttpStatus.BAD_REQUEST);
    }
    const user = await this.userService.create(createUserDto);
    return {
      status: 'success',
      user: user,
    };
  }

  @Get('getallUsers')
  async findAll(
    @Query('page') page: number = 1,
    @Query('pageSize') pageSize: number = 5,
  ) {
    console.log(
      'await this.userService.findAll(page, pageSize)',
      await this.userService.findAll(page, pageSize),
    );
    const { data, total }: { data: any[]; total: number } =
      await this.userService.findAll(page, pageSize);
    if (!data || data.length === 0) {
      throw new HttpException('No Users found.', HttpStatus.BAD_REQUEST);
    }
    return {
      status: 'success',
      data,
      total,
    };
  }

  @Roles(['Admin'])
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Put(':id/update-status')
  async changeUserStatus(
    @Param('id') id: number,
    @Body() changeUserStatusDto: ChangeUserStatusDto,
    @Req() req,
  ): Promise<any> {
    const approverId = req.user.id;
    const user = await this.userService.changeUserStatus(
      id,
      changeUserStatusDto.status,
      approverId,
    );
    return {
      status: 'success',
      user: user,
    };
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    console.log('called');
    return this.userService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Get()
  async verifyAccount(@Query('token') token: string): Promise<string> {
    // Verify token and update user status
    const success = await this.userService.verifyUser(token);

    if (success) {
      return 'Your account has been verified successfully.';
    } else {
      return 'Invalid or expired token.';
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.userService.remove(+id);
    return { userId: id, message: 'User deleted successfully' };
  }
}
