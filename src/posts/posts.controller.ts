import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';

class CreatePostDto {
  @ApiProperty({ description: '帖子标题' })
  title: string;
  @ApiProperty({ description: '帖子内容' })
  content: string;
}

@Controller('posts')
@ApiTags('帖子')
export class PostsController {
  @Get()
  @ApiOperation({ summary: '显示博客列表' })
  index() {
    return [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
  }

  @Post()
  @ApiOperation({ summary: '创建帖子' })
  create(@Body() body: CreatePostDto) {
    return body;
  }

  @Get(':id')
  @ApiOperation({ summary: '博客详情' })
  detail(@Param('id') id: string) {
    return {
      id: id,
      title: '测试',
    };
  }

  @Put(':id')
  @ApiOperation({ summary: '编辑帖子' })
  update(@Param('id') id: string, @Body() body: CreatePostDto) {
    return body;
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除帖子' })
  remove(@Param('id') id: string) {
    return {
      success: true,
    };
  }
}
