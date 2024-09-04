import { Injectable, Global } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { MailService } from './../mail/mail.service';
import { UserStatus } from '../../src/shared/status.enum';

@Injectable()
export class UsersService {
  constructor(
    private mailService: MailService,
    @InjectRepository(User)
    private readonly UserRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    console.log('createUserDto', createUserDto);
    let { password } = createUserDto;
    console.log(password);
    const hashedPassword = await this.hashPassword(password);
    console.log({ ...createUserDto, password: hashedPassword });
    const verificationToken = this.generateRandomString(32);
    // const token = Math.floor(1000 + Math.random() * 9000).toString();
    const user = this.UserRepository.create({
      ...createUserDto,
      password: hashedPassword,
      token: verificationToken,
    });

    // create user in db
    // ...
    // send confirmation mail
    // await this.mailService.sendUserConfirmation(user, token);

    return this.UserRepository.save(user);
  }

  async verifyUser(token: string): Promise<boolean> {
    // Find the user by the token
    const user = await this.UserRepository.findOne({ where: { token } });
    if (!user) {
      // User not found
      return false;
    }
    // Mark the user as verified
    user.status = UserStatus.ACTIVE;
    // Save the updated user
    await this.UserRepository.save(user);
    return true;
  }
  async findUserByEmail(email: string): Promise<User> {
    return this.UserRepository.findOne({ where: { email } });
  }

  // async validateUser(email: string, password: string): Promise<User> {
  //   const user = await this.findUserByEmail(email);
  //   if (user && user.password === password) {
  //     return user;
  //   }
  //   return null;
  // }

  async findAll(page: number = 1, pageSize: number = 10): Promise<any> {
    const skip = (page - 1) * pageSize;
    const [dataNew, total] = await this.UserRepository.findAndCount({
      // select: ['name','id'],
      relations: ['approver'],
      skip,
      take: pageSize,
    });
    const data = await dataNew.map((item) => ({
      id: item.id,
      name: item.name,
      status: item.status,
      email: item.email,
      created_at: item.created_at,
      approver_name: item.approver ? item.approver.name : null,
      approved_at: item.approved_date,
    }));
    // console.log('updatedData', data);
    return {
      data,
      total,
    };
  }
  async changeUserStatus(
    userId: number,
    status: string,
    approverId: number,
  ): Promise<User> {
    // console.log("users", req.user)
    const user = await this.UserRepository.findOne({
      where: { id: userId },
      select: ['id', 'name', 'email', 'status', 'created_at'], // Specify the columns you want to select
    });
    if (!user) {
      throw new Error('User not found');
    }
    const statusEnumValue: UserStatus =
      UserStatus[status.toUpperCase() as keyof typeof UserStatus];
    user.status = statusEnumValue;
    user.approved_by = approverId;
    const updatedUser = await this.UserRepository.save(user);
    return updatedUser;
  }

  async findOne(id: number): Promise<User | undefined> {
    return await this.UserRepository.findOne({ where: { id } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number): Promise<void> {
    await this.UserRepository.delete(id);
  }

  // Function to generate a random string of specified length
  generateRandomString(length: number): string {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';
    for (let i = 0; i < length; i++) {
      randomString += characters.charAt(
        Math.floor(Math.random() * characters.length),
      );
    }
    return randomString;
  }

  async comparePasswords(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return await bcrypt.compare(plainTextPassword, hashedPassword);
  }

  async hashPassword(password: string): Promise<string> {
    const saltOrRounds = 10; // Salt rounds for bcrypt
    return bcrypt.hash(password, saltOrRounds);
  }
}
