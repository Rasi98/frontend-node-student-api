import Button from "@mui/material/Button/Button";
import React from "react";

type ButtonProps = {
  text: string;
  onClick: () => void;
};

const ButtonSolid: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <Button variant="contained" fullWidth onClick={onClick}>
      {text}
    </Button>
  );
};

export default ButtonSolid;
