import { ApiProperty } from '@nestjs/swagger';

export class JoinRequestDto {
  @ApiProperty({
    example: 'example@example.com',
    description: 'email',
    required: true,
  })
  public email: string;

  @ApiProperty({
    example: 'example',
    description: 'Nickname',
    required: true,
  })
  public nickname: string;

  @ApiProperty({
    example: 'more than 8 characters',
    description: 'password',
    required: true,
  })
  public password: string;
}
