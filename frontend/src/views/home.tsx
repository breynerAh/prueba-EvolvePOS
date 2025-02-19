import {
  Card,
  CardContent,
  CardHeader,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import Box from "@mui/material/Box";

const Home = () => {
  const itemData = [
    {
      img: "/avatar3.jpg",
      title: "Nombre contacto",
      author: "1234456789",
    },
    {
      img: "/avatar2.jpg",
      title: "Nombre contacto",
      author: "1234456789",
    },
    {
      img: "/avatar2.jpg",
      title: "Nombre contacto",
      author: "1234456789",
    },
    {
      img: "/avatar3.jpg",
      title: "Nombre contacto",
      author: "1234456789",
    },
    {
      img: "/avatar3.jpg",
      title: "Nombre contacto",
      author: "1234456789",
    },
    {
      img: "/avatar2.jpg",
      title: "Nombre contacto",
      author: "1234456789",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Card sx={{ marginTop: "30px" }}>
        <CardHeader title="Agenda tus contactos" />
        <CardContent>
          <ImageList sx={{ width: 500, height: 400 }}>
            {itemData.map((item, index) => (
              <ImageListItem key={`key-${index}`}>
                <img
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={item.title}
                  subtitle={<span>N°: {item.author}</span>}
                  position="below"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Home;
