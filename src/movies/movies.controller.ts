import { UpdateMovieDTO } from './dto/update-movie.dto.';
import { CreateMovieDTO } from './dto/create-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  constructor(readonly moviesServie: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesServie.getAll();
  }

  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `We are searching for a movie made after: ${searchingYear}`;
  }

  @Get(':id')
  getOne(@Param('id') movieId: number): Movie {
    return this.moviesServie.getOne(movieId);
  }

  @Post()
  create(@Body() movieData: CreateMovieDTO) {
    return this.moviesServie.create(movieData);
  }

  @Delete(':id')
  remove(@Param('id') movieId: number) {
    this.moviesServie.deleteOne(movieId);
  }

  @Patch(':id')
  patch(@Param('id') movieId: number, @Body() updateData: UpdateMovieDTO) {
    return this.moviesServie.update(movieId, updateData);
  }
}
