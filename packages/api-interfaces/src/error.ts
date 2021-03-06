export interface Error {
  errors?: {
    message: string;
    type: string;
    source: string;
    path?: string;
  }[];
  message?: string;
}
