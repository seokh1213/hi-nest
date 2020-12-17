import { CreateMovieDTO } from './create-movie.dto';
import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsNumber } from 'class-validator';

export class UpdateMovieDTO extends PartialType(CreateMovieDTO) {}
