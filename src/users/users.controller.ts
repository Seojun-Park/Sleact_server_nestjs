import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import {
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { User } from '../common/decorators/user.decorator';
import { UserDto } from '../common/dto/user.dto';
import { JoinRequestDto } from './dto/join.request.dto';
import { UsersService } from './users.service';

@ApiTags('USER')
@Controller('api/users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiResponse({
    description: 'server error',
    status: 500,
  })
  @ApiOperation({ summary: 'Get my data' })
  @Get()
  getUsers(@User() user) {
    return user;
  }

  @ApiOperation({ summary: 'Sign Up' })
  @Post()
  postUsers(@Body() data: JoinRequestDto) {
    this.usersService.postUsers(data.email, data.nickname, data.password);
  }

  @ApiOkResponse({
    description: 'success',
    type: UserDto,
  })
  @ApiOperation({ summary: 'Login' })
  @Post('login')
  logIn(@User() user) {
    return user;
  }

  @ApiOperation({ summary: 'Log out' })
  @Post('logout')
  logOut(@Req() req, @Res() res) {
    req.logOut();
    res.clearCookie('connect.sid', { httpOnly: true });
    res.send('ok');
  }
}
