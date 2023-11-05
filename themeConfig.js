import React from "react";
import { createTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF5733",
    },
    secondary: {
      main: "#E0C2FF",
      light: "#F5EBFF",
      contrastText: "#47008F",
    },
  },
});

const App = () => {
  return (
    <div>
      <Button variant="contained" color="primary">
        My Material-UI Button
      </Button>
    </div>
  );
};

export default App;
