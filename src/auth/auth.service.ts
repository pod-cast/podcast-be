import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signIn() {
    return { msg: 'I have signed in ' };
  }

  signup() {
    return { msg: 'I have signed up ' };
  }
}
