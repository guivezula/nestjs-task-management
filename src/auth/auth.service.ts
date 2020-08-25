import { Injectable } from '@nestjs/common';
import { UserRepository } from './auth.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth-credntials.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
    ) {}

    async signUp(authCrdentialsDto: AuthCredentialsDto): Promise<void> {
        return this.userRepository.signUp(authCrdentialsDto);
    }
}
