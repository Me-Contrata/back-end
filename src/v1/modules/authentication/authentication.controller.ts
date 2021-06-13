import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthenticationController {
    
    @Post('login')
    @UseGuards(LocalAuthGuard)
    async login(@Request() req) {
        return req.user;
    }
}
