import Button from "@mui/material/Button/Button";
import Container from "@mui/material/Container/Container";
import React from "react";
import { ACTION } from "../pages/Home";

type ActionBarProps = {
  onClick: (action: ACTION) => void;
};

const ActionBar: React.FC<ActionBarProps> = ({ onClick }) => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        marginBottom: "0.5rem",
      }}
    >
      <Button variant="contained" size="small" onClick={() => onClick("add")}>
        Add
      </Button>
    </Container>
  );
};

export default ActionBar;
