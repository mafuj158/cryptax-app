
export interface StaticPage {
  status: boolean;
  message: string;
  code: number;
  data: Data;
}

export interface Data {
  title: string;
  content: string;
}
