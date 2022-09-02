
import { styled } from "@mui/material/styles";

function TitleTheme(){
  // Set theme for titles of texts
  const Div = styled("div")(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    fontSize: "40px",
    marginLeft: "10vw",
  }));
  return Div;
}

export default TitleTheme;
