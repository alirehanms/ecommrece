import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  brand_name: string;

  @IsOptional()
  @IsString()
  merchant_product_id: string;

  @IsOptional()
  @IsString()
  aw_product_id: string;

  @IsOptional()
  @IsString()
  data_feed_id: string;

  @IsNotEmpty()
  @IsString()
  product_name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsOptional()
  @IsNumber()
  merchant_id: number;

  @IsNotEmpty()
  @IsString()
  merchant_name: string;

  @IsOptional()
  @IsNumber()
  category_id: number;

  @IsNotEmpty()
  @IsString()
  category_name: string;

  @IsNotEmpty()
  @IsNumber()
  merchant_category: number;
}
