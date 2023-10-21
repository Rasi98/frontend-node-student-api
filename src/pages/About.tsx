import Box from "@mui/material/Box/Box";
import Container from "@mui/material/Container/Container";
import Paper from "@mui/material/Paper/Paper";
import React from "react";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          p: 2,
          border: "1px dashed grey",
          width: 300,
          height: 300,
        }}
      >
        <Paper
          elevation={3}
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            backgroundColor: "#AED6F1",
            fontFamily: "monospace",
          }}
        >
          <img
            src="/images/lakshan-img.png"
            width={100}
            style={{ borderRadius: "50%" }}
          />
          <p>Developed by @Lakshan Rasingolla</p>
          <p>
            Visit{" "}
            <a
              href="https://lakshanrasingolla.com/"
              target="_blank"
              style={{ fontStyle: "italic" }}
            >
              www.lakshanrasingolla.com
            </a>
          </p>
          <Link to={".."} style={{ textDecoration: "none", color: "black" }}>
            &lt; Go Back
          </Link>
        </Paper>
      </Box>
    </Container>
  );
};

export default About;
