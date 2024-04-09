import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/user.schema';
import { CreateUserDto } from './dto/createUser.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  //Data Transfer Object (DTO) is a design pattern that allows data to be transferred between objects with different data structures.
  createUser(createUserDto: CreateUserDto) {
    //Create User document
    const newUser = new this.userModel(createUserDto);
    return newUser.save(); //Save the document to the database
  }
}
