import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UpdateNoteResponseDto } from './dto/update-note-response.dto';

import { NotesService } from './notes.service';
import { CreateNoteDto, CreateNoteResponseDto, UpdateNoteDto } from './dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('notes')
@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Create a note' })
  @ApiBody({ type: CreateNoteDto })
  @ApiResponse({
    status: 201,
    description: 'Note successfully created',
    type: CreateNoteResponseDto,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  create(@Req() request, @Body() createNoteDto: CreateNoteDto) {
    return this.notesService.create(createNoteDto, request.user.username);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Get all notes' })
  @ApiBearerAuth()
  @ApiResponse({ status: 200, description: 'Get all notes' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  findAll(@Req() request) {
    return this.notesService.findAll(request.user.username);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Update note data' })
  @ApiBearerAuth()
  @ApiParam({
    description: 'Id of the note to update',
    name: 'id',
    type: 'number',
    example: 123,
  })
  @ApiBody({ type: UpdateNoteDto })
  @ApiResponse({
    status: 200,
    description: 'Note successfully updated',
    type: UpdateNoteResponseDto,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 404, description: 'Note not found' })
  update(
    @Req() request,
    @Param('id') id: string,
    @Body() updateNoteDto: UpdateNoteDto,
  ) {
    return this.notesService.update(+id, updateNoteDto, request.user.username);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Remove note' })
  @ApiBearerAuth()
  @ApiParam({
    description: 'Id of the note to delete',
    name: 'id',
    type: 'number',
    example: 123,
  })
  @ApiResponse({
    status: 200,
    description: 'Note successfully updated',
    type: UpdateNoteResponseDto,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 404, description: 'Note not found' })
  remove(@Req() request, @Param('id') id: string) {
    return this.notesService.remove(+id, request.user.username);
  }
}
