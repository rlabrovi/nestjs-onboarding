import { IsDate, IsOptional } from 'class-validator';

export class FilterAuthorDto {
  @IsOptional()
  readonly firstName?: string;

  @IsOptional()
  readonly lastName?: string;

  @IsDate()
  @IsOptional()
  readonly birthDateStart?: Date;

  @IsDate()
  @IsOptional()
  readonly birthDateEnd?: Date;
}
