
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { switchMap} from 'rxjs/operators';

 
@Injectable({providedIn: 'root'})
export class ConfigService<T> {
   private config: T;
   constructor(private http: HttpClient) {}



  load(url: string) {
    return new Promise((resolve) => {
      this.http.get<T>(url).pipe(
        switchMap(config => {
          this.config = config;
          //return this.cacheService.loadCache(config);
          return of(true);

        }))
        .subscribe(() => {
            resolve();
        });
    });

        }
get configuration(): T {

    return this.config;
  }
}