import { useEffect, useState } from "react";
import {
  createContacto,
  getOneContacto,
  updateContacto,
} from "../../services/api";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  TextField,
  Typography,
} from "@mui/material";
import { RequestContacto } from "./types";
import { toast, ToastContainer } from "react-toastify";
import { AxiosError } from "axios";
import { useLocation } from "react-router-dom";
import { TContacto } from "../../services/types";

const Create = () => {
  // Editar
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  const [contacto, setContacto] = useState<TContacto>();

  const [dataForm, setDataForm] = useState<RequestContacto>({
    email: "",
    nombre: "",
    telefono: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (id) {
        await updateContacto(Number(id), dataForm);
        toast.success("Contacto actualizado correctamente");
      } else {
        await createContacto(dataForm);
        toast.success("Contacto creado correctamente.");
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(`Error: ${error?.response?.data?.message?.[0]}`, {
          position: "bottom-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        console.error("Error inesperado.", error);
      }
    }
  };

  useEffect(() => {
    if (id) {
      const fetchContacto = async () => {
        try {
          const data = await getOneContacto(Number(id));
          setContacto(data);
          setDataForm({
            email: data.email,
            nombre: data.nombre,
            telefono: data.telefono,
          });
        } catch (error) {
          console.error("Error inesperado.", error);
        }
      };

      fetchContacto();
    } else {
      setDataForm({
        email: "",
        nombre: "",
        telefono: "",
      });
    }
  }, [id]);

  console.log(contacto, 777);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20px",
      }}
    >
      <Typography
        sx={{ fontFamily: "sans-serif", fontSize: "17px", color: "#121621" }}
      >
        {id ? "Editar contacto" : "Añadir contacto"}
      </Typography>
      <Card
        sx={{
          height: 400,
          width: "35%",
        }}
      >
        <CardMedia
          sx={{ height: 90 }}
          image="/img-hexa.jpg"
          title="green iguana"
        />
        <CardContent>
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <TextField
              name="nombre"
              label="Nombre"
              variant="outlined"
              onChange={handleChange}
              value={dataForm.nombre}
              sx={{ margin: "20px 0px 10px 0px" }}
            />
            <TextField
              name="telefono"
              label="Telefono"
              variant="outlined"
              onChange={handleChange}
              value={dataForm.telefono}
              sx={{ margin: "10px 0" }}
            />
            <TextField
              name="email"
              label="Email"
              variant="outlined"
              onChange={handleChange}
              value={dataForm.email}
              sx={{ margin: "10px 0" }}
            />
            <Button
              variant="contained"
              type="submit"
              sx={{ background: "#121621" }}
            >
              {id ? "Actualizar" : "Crear"}
            </Button>
          </form>
        </CardContent>
      </Card>
      <ToastContainer />
    </Box>
  );
};

export default Create;
