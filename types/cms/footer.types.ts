export interface FooterResponse {
  status: boolean;
  message: string;
  code: number;
  data: FooterData;
}

export interface FooterData {
  linkedin: string;
  description: string;
  twitter: string;
}
