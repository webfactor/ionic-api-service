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
get(endpoint: string, params?: any, options?: any): Observable<any>
post(endpoint: string, body: any, options?: any): Observable<any>
put(endpoint: string, body: any, options?: any): Observable<any>
delete(endpoint: string, options?: any): Observable<any>
patch(endpoint: string, body: any, options?: any): Observable<any>
```

Sends requests to the given endpoint.

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
