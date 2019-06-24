# ApiService

Makes communication with your API a bliss. 😌

## Installation

* Add `@webfactor/ionic-api-service` via npm
* Add `ApiServiceModule.forRoot()` to your Ionic module imports

## Methods

```typescript
setBaseUrl(baseUrl: string): void
```

Sets the base URL for all api requests.

```typescript
getBaseUrl(): string
```

Return the base URL for all api requests.

```typescript
setApiSuffix(suffix: string): string
```

Set the Api Suffix. Default /api/v1/

```typescript
getApiSuffix(): string
```

Return the api Suffix for all api requests.

```typescript
getUrl(): string
```

Return the URL for all api requests (BaseUrl + Api Suffix).

```typescript
enableMultiLingual(): void
```

Sets the default values for languageParameter = ?locale= and preferredLanguage = de

```typescript
setPreferredLanguage(language: string): void
```

Sets preferredLanguage for requestdata output.

```typescript
get(endpoint: string, params?: any, options?: any): Observable<any>
post(endpoint: string, body: any, options?: any): Observable<any>
put(endpoint: string, body: any, options?: any): Observable<any>
delete(endpoint: string, options?: any): Observable<any>
patch(endpoint: string, body: any, options?: any): Observable<any>
```

Sends requests to the given endpoint.

```typescript
let headers = new HttpHeaders();
headers = headers.append('Cache-Control', 'no-cache');
this.apiService.get('myEndpoint', {}, { headers })
```

Set Custom Headers

## Example

```typescript
constructor(private apiService: ApiService) {
    this.apiService.setBaseUrl('https://webfactormedia.de');
}

getPizza(id: number): void {
    this.apiService.get('pizza', { id }).subscribe(response => {
        this.pizza = response.data.pizza;
    }, err => {
        console.log(err);
    });
}
```
