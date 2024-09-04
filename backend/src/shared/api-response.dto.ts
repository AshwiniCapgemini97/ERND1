// src/shared/api-response.dto.ts
export class ApiResponseDto<T = any> {
    status: 'success' | 'error';
    data?: T;
    error?: string;
  }
  