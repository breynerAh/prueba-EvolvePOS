import axios, { AxiosResponse } from "axios";
import { TContacto, TCreateContacto, TUpdateContacto } from "./types";

const api = axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getContactos = async (): Promise<TContacto[]> => {
  try {
    const response: AxiosResponse<TContacto[]> = await api.get("/contacto");
    return response.data;
  } catch (error) {
    console.error("Error al encontrar los contactos", error);
    return [];
  }
};

export const createContacto = async (
  nuevoContacto: TCreateContacto
): Promise<TContacto> => {
  try {
    const response: AxiosResponse<TContacto> = await api.post(
      "/contacto/create",
      nuevoContacto
    );
    return response.data;
  } catch (error) {
    console.error("Error al encontrar los contactos", error);
    throw error;
  }
};

export const getOneContacto = async (id: number): Promise<TContacto> => {
  try {
    const response: AxiosResponse<TContacto> = await api.get(`/contacto/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al encontrar el contacto", error);
    throw error;
  }
};

export const updateContacto = async (
  id: number,
  editarContacto: TUpdateContacto
): Promise<TContacto> => {
  try {
    const response: AxiosResponse<TContacto> = await api.put(
      `/contacto/update/${id}`,
      editarContacto
    );
    return response.data;
  } catch (error) {
    console.error("Error al actualizar el contacto", error);
    throw error;
  }
};
