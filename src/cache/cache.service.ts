import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class CacheService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async getCache<T>(key: string, fetchFn: () => Promise<T>): Promise<T> {
    const cachedData: T = await this.cacheManager.get<T>(key);

    if (cachedData) {
      return cachedData;
    }

    const newData: T = await fetchFn();
    await this.cacheManager.set(key, newData);

    return newData;
  }
}
