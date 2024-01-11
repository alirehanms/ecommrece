import { PartialType } from '@nestjs/mapped-types';
import { CreateDeepLinkDto } from './create-deep_link.dto';

export class UpdateDeepLinkDto extends PartialType(CreateDeepLinkDto) {}
