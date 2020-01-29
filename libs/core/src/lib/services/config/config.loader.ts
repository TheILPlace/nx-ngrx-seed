import { ConfigService } from './config.service';

export function configLoader<T>(configService: ConfigService<T>, configFileName: string) {
    return configService.load(configFileName);
}