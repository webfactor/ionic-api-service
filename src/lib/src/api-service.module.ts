import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { ApiService } from './providers/api';

@NgModule({
  imports: [CommonModule]
})
export class ApiServiceModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ApiServiceModule,
      providers: [ApiService]
    };
  }
}
