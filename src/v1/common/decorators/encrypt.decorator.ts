import { SetMetadata } from '@nestjs/common';

export const Encrypt = (...args: string[]) => SetMetadata('encrypt', args);
