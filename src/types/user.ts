export interface User {
  id: string;
  name?: string;
  lastname?: string;
  avatar?: string;
  email?: string;
  institutionalEmail?: string;
  dni?: string;
  birthday?: string;
  career?: string;
  consecutive?: string;
  state?: string;

  [key: string]: unknown;
}
