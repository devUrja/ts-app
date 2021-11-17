import { AxiosResponse } from "axios";
import { ICountry } from "../utility/interfaces/types";
import httpClient from "./base-service";
import { COUNTRIES_API_BASE_URL } from "../constants";

export const axiosInstance = httpClient.create({
  baseURL: COUNTRIES_API_BASE_URL,
});

const getCountryByName = (name: string): Promise<AxiosResponse<ICountry>> =>
  axiosInstance.get(`/name/${name}`);

const getAllCountry = (): Promise<AxiosResponse<ICountry[]>> =>
  axiosInstance.get(`/all`);

const exportedObject = {
  getCountryByName,
  getAllCountry,
};

export default exportedObject;
