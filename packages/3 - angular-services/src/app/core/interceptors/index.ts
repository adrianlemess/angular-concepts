import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { EnsureHttpsInterceptor } from './ensure-http.interceptor';
import { AuthInterceptor } from './auth.interceptor';
import { LoggingInterceptor } from './logging.interceptor';

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
    // #docregion noop-provider
    // #enddocregion noop-provider, interceptor-providers

    { provide: HTTP_INTERCEPTORS, useClass: EnsureHttpsInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },

    // #docregion interceptor-providers
];