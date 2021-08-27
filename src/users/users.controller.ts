import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { User } from '../common/decorators/user.decorator';
import { UserDto } from '../common/dto/user.dto';
import { UndefinedToNullInterceptor } from '../common/interceptors/undefinedToNull.interceptor';
import { JoinRequestDto } from './dto/join.request.dto';
import { UsersService } from './users.service';

@UseInterceptors(UndefinedToNullInterceptor) // can be used to individual
@ApiTags('USER')
@Controller('api/users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiResponse({
    description: 'Success',
    status: 200,
  })
  @ApiResponse({
    description: 'Server error',
    status: 500,
  })
  @ApiOperation({ summary: 'Get my data' })
  @Get()
  getUsers(@User() user) {
    return user;
  }

  @ApiOperation({ summary: 'Sign Up' })
  @Post()
  async join(@Body() body: JoinRequestDto) {
    await this.usersService.join(body.email, body.nickname, body.password);
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
