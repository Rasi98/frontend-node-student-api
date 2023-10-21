import AppBar from "@mui/material/AppBar/AppBar";
import Avatar from "@mui/material/Avatar/Avatar";
import Box from "@mui/material/Box/Box";
import IconButton from "@mui/material/IconButton/IconButton";
import Toolbar from "@mui/material/Toolbar/Toolbar";
import Tooltip from "@mui/material/Tooltip/Tooltip";
import Typography from "@mui/material/Typography/Typography";

type NavbarProps = {
  title: string;
  navColor?: "transparent" | "error" | "info" | "success" | "warning";
};

const Navbar: React.FC<NavbarProps> = ({ title, navColor }) => {
  return (
    <Box sx={{ flexGrow: 1 }} marginBottom={"2rem"}>
      <AppBar position="static" color={navColor}>
        <Toolbar>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "700" }}
            align="center"
            noWrap={true}
          >
            {title}
          </Typography>
          <Tooltip title="Open About">
            <IconButton sx={{ p: 0 }}>
              <Avatar
                alt="Lakshan Rasingolla"
                src="/images/lakshan-img.png"
                sx={{ width: 35, height: 35 }}
              />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
