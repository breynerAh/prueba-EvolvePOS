import {
  Avatar,
  Card,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import Box from "@mui/material/Box";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ContactsIcon from "@mui/icons-material/Contacts";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import EditNoteIcon from "@mui/icons-material/EditNote";
import CloseIcon from "@mui/icons-material/Close";
import ApiIcon from "@mui/icons-material/Api";
import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();

  const menu = [
    "Añadir contactos",
    "Listado de contactos",
    "Buscar contacto",
    "Editar contacto",
    "Cerrar agenda",
  ];

  const logo = (num: number) => {
    switch (num) {
      case 0:
        return <PersonAddIcon sx={{ color: "white" }} />;
      case 1:
        return <ContactsIcon sx={{ color: "white" }} />;
      case 2:
        return <PersonSearchIcon sx={{ color: "white" }} />;
      case 3:
        return <EditNoteIcon sx={{ color: "white" }} />;
      default:
        return <CloseIcon sx={{ color: "white" }} />;
    }
  };

  const redirect = (num: number) => {
    switch (num) {
      case 0:
        return navigate(`/crear`);
      case 1:
        return navigate(`/lista`);
      case 2:
        return navigate(`/buscar`);
      case 3:
        return navigate(`/editar`);
      default:
        return navigate(`/cerrar`);
    }
  };

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box sx={{ width: "16%" }} role="presentation">
        <List sx={{ background: "#121621", height: "100vh", minWidth: "60px" }}>
          <ListItem sx={{ height: "72px" }}>
            <ListItemButton
              sx={{ display: "flex", justifyContent: "center" }}
              onClick={() => navigate(`/`)}
            >
              <ListItemIcon>
                <ApiIcon sx={{ color: "white", fontSize: "60px" }} />
              </ListItemIcon>
              <ListItemText
                primary="Agenda"
                sx={{
                  color: "white",
                  marginLeft: "10px",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                }}
              />
            </ListItemButton>
          </ListItem>
          <Divider sx={{ background: "#dcdcdc" }} />
          {menu.map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton
                sx={{ width: "350px" }}
                onClick={() => redirect(index)}
              >
                <ListItemIcon>{logo(index)}</ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={{
                    color: "white",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
          <Divider sx={{ background: "#dcdcdc" }} />
        </List>
      </Box>
      <Box sx={{ width: "84%" }}>
        <Card
          sx={{
            width: "100%",
            height: "80px",
            background: "#ffffff",
            borderRadius: "0px",
            boxShadow: "none",
            borderBottom: "1px solid #dcdcdc",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Stack direction="row" spacing={2}>
            <Avatar
              alt="Avatar"
              src="/avatar.jpg"
              sx={{ width: 56, height: 56 }}
            />
          </Stack>
        </Card>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
