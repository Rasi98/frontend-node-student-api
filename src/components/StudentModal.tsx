import Button from "@mui/material/Button/Button";
import Dialog from "@mui/material/Dialog/Dialog";
import DialogActions from "@mui/material/DialogActions/DialogActions";
import DialogContent from "@mui/material/DialogContent/DialogContent";
import DialogTitle from "@mui/material/DialogTitle/DialogTitle";
import TextField from "@mui/material/TextField/TextField";
import React, { useEffect, useState } from "react";

type ModalProps = {
  action: "add" | "update";
  open: boolean;
  handleClose: () => void;
  handleSubmit: (name: string, city: string, phone: string) => void;
};

const StudentModal: React.FC<ModalProps> = ({
  action = "add",
  open = false,
  handleClose,
  handleSubmit,
}) => {
  const [name, setName] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  useEffect(() => {
    if (!open) {
      clearState();
    }
  }, [open]);

  const handleModalClose = () => {
    clearState();
    handleClose();
  };

  const clearState = () => {
    setName("");
    setCity("");
    setPhone("");
  };

  return (
    <Dialog
      open={open}
      onClose={(e: object, reason: string) => {
        if (reason !== "backdropClick" && reason !== "escapeKeyDown") {
          handleModalClose();
        }
      }}
      fullWidth
      disableEscapeKeyDown
    >
      <DialogTitle>
        {action === "add" ? "Add student" : "Edit student"}
      </DialogTitle>
      <DialogContent
        dividers
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          margin="dense"
          size="small"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="City"
          variant="outlined"
          margin="dense"
          size="small"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Phone"
          type="tel"
          variant="outlined"
          margin="dense"
          size="small"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleModalClose}>Cancel</Button>
        <Button
          onClick={() => handleSubmit(name, city, phone)}
          variant="contained"
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default StudentModal;
