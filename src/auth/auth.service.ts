import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class AuthService {
  constructor(private prismaService: PrismaService) {}
  signup() {
    return { msg: 'I have signup' };
  }

  signin() {
    return { msg: 'I have signin' };
  }
}
