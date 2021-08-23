import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('DM')
@Controller('api/workspaces/:url/dms')
export class DmsController {
  @ApiParam({
    name: 'url',
    required: true,
    description: 'workspace param',
  })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'user ID',
  })
  @ApiQuery({
    name: 'perPage',
    required: true,
    description: 'Qunatity of taking data',
  })
  @ApiQuery({
    name: 'page',
    required: true,
    description: 'Number of the taken page',
  })
  @Get(':id/chats')
  getChat(@Query() query, @Param() param) {
    console.log(query.perPage, query.page);
    console.log(param.id, param.url);
  }

  @Post(':id/chats')
  postchat(@Body() body) {}
}
