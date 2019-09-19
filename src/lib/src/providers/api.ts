import 'rxjs/add/operator/map';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {
  protected baseUrl: string = '';
  protected apiSuffix: string = 'api/v1/';
  private languageParameter = '';
  private preferredLanguage = '';

  constructor(protected http: HttpClient) {}

  setBaseUrl(baseUrl: string): void {
    let lastChar = _.split(baseUrl, '').pop();
    if (lastChar != '/') baseUrl += '/';
    this.baseUrl = baseUrl;
  }

  enableMultiLingual(): void {
    this.languageParameter = '?locale=';
    this.preferredLanguage = 'de';
  }

  getBaseUrl(): string {
    return this.baseUrl;
  }

  getApiSuffix(): string {
    return this.apiSuffix;
  }

  setApiSuffix(suffix: string): void {
    this.apiSuffix = suffix;
  }

  getUrl(): string {
    return this.getBaseUrl() + this.getApiSuffix();
  }

  getLanguageParameter(endpoint) {
    if(this.languageParameter && endpoint.includes('?')) return '&locale=';
    else if(this.languageParameter && !endpoint.includes('?')) return '?locale=';
    else return '';
  }

  get(endpoint: string, params?: any, options?: any): Observable<any> {
    options = this.getOptions(options, params);

    return this.http.get(
      this.baseUrl + this.apiSuffix + endpoint + this.getLanguageParameter(endpoint) + this.preferredLanguage,
      options
    );
  }

  post(endpoint: string, body: any, options?: any): Observable<any> {
    options = this.getOptions(options, null);
    return this.http.post(
      this.baseUrl + this.apiSuffix + endpoint + this.getLanguageParameter(endpoint) + this.preferredLanguage,
      body,
      options
    );
  }

  put(endpoint: string, body: any, options?: any): Observable<any> {
    options = this.getOptions(options, null);
    return this.http.put(
      this.baseUrl + this.apiSuffix + endpoint + this.getLanguageParameter(endpoint) + this.preferredLanguage,
      body,
      options
    );
  }

  delete(endpoint: string, options?: any): Observable<any> {
    options = this.getOptions(options, null);
    return this.http.delete(
      this.baseUrl + this.apiSuffix + endpoint + this.getLanguageParameter(endpoint) + this.preferredLanguage,
      options
    );
  }

  patch(endpoint: string, body: any, options?: any): Observable<any> {
    options = this.getOptions(options, null);
    return this.http.patch(
      this.baseUrl + this.apiSuffix + endpoint + this.getLanguageParameter(endpoint) + this.preferredLanguage,
      body,
      options
    );
  }

    private headers(headers): HttpHeaders {
        if (!headers) headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        headers = headers.append('Accept', 'application/json');
        return headers;
    }

    private getOptions(
        options?: any,
        params?: any
    ): { headers?: HttpHeaders; params?: HttpParams; observe?: string; responseType?: string } {
        if (!options) options = {};
        options.headers = this.headers(options.headers);
        options.observe = 'response';

        if (params) {
            let httpParams = new HttpParams();
            for (let key in params) {
                let value = params[key];
                if (value) httpParams = httpParams.set(key, value);
            }
            options.params = httpParams;
        }

        return options;
    }

  setPreferredLanguage(language: string): void {
    this.preferredLanguage = language;
  }
}
