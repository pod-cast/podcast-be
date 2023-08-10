import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PostgresService } from '../services/postgres.service';
@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private postgresService: PostgresService,
  ) {}

  @Post('signup')
  async signup(@Body() userData: any) {
    try {
      const data = {
        name: userData.userName,
        password: userData.password,
      };
      await this.postgresService.addDataToPostgres(data);

      return 'signup successful';
    } catch (error) {}
    return 'signup failed';
  }

  @Post('signIn')
  async signIn(@Body() loginData: any) {
    try {
      const data = {
        userName: loginData.userName,
        password: loginData.password,
      };
      await this.postgresService.addDataToPostgres(data);

      return 'signIn successful';
    } catch (error) {
      return 'signIn failed';
    }
  }
}
