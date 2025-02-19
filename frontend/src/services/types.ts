export type TContacto = {
  id: number;
  nombre: string;
  telefono: string;
  email: string;
};

export type TCreateContacto = {
  nombre: string;
  telefono: string;
  email: string;
};

export type TUpdateContacto = {
  nombre?: string;
  telefono?: string;
  email?: string;
};
