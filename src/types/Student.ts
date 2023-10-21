export default interface IStudent {
  name: string;
  city?: string;
  phone?: string;
}

export interface StudentResponseType {
  _id: string;
  name: string;
  city: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
