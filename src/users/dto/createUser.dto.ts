import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty() //Class-validator is a decorator based validation library for Typescript and ES6. It works on both browser and node.js platforms.
  @IsString()
  userName: string;

  @IsString()
  displayName?: string;
}
