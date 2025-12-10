export type RequestParam = {
  fromCurrency: string;
  toCurrency: string;
  value: number;
};

export type RouteParam = {
  method: string;
  pattern: RegExp;
  capture: (m: Array<string>) => RequestParam;
  authenticate: (r: Request) => boolean;
  handle: (r: Request, p: RequestParam) => Response;
};
