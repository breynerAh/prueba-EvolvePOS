import { Card, Typography } from "@mui/material";
import Box from "@mui/material/Box";

const Cerrar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Card
        sx={{
          width: "80%",
          padding: "20px",
          marginTop: "40px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{ fontFamily: "sans-serif", fontSize: "30px", color: "#121621" }}
        >
          Agenda cerrada!
        </Typography>
      </Card>
    </Box>
  );
};

export default Cerrar;
