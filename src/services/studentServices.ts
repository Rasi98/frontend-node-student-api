import { AxiosResponse } from "axios";
import ApiRequest from "../Api/genericRequest";
import IStudent, { StudentResponseType } from "../types/Student";

export const getAllStudents = async () => {
  try {
    const response: AxiosResponse<StudentResponseType[]> = await ApiRequest<
      StudentResponseType[]
    >("GET", "/students", {});
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getStudent = async (name: string) => {
  try {
    const response: AxiosResponse<StudentResponseType[]> = await ApiRequest<
      StudentResponseType[]
    >("GET", `/students/${name}`, {});
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const addStudent = async (data: IStudent) => {
  try {
    const response: AxiosResponse<StudentResponseType> =
      await ApiRequest<StudentResponseType>(
        "POST",
        "/students/addStudent",
        data
      );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
