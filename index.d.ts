declare module '@apiverve/randomidentitygenerator' {
  export interface randomidentitygeneratorOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface randomidentitygeneratorResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
  }

  export default class randomidentitygeneratorWrapper {
    constructor(options: randomidentitygeneratorOptions);

    execute(callback: (error: any, data: randomidentitygeneratorResponse | null) => void): Promise<randomidentitygeneratorResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: randomidentitygeneratorResponse | null) => void): Promise<randomidentitygeneratorResponse>;
    execute(query?: Record<string, any>): Promise<randomidentitygeneratorResponse>;
  }
}
