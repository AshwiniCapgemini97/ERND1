export declare class ApiResponseDto<T = any> {
    status: 'success' | 'error';
    data?: T;
    error?: string;
}
