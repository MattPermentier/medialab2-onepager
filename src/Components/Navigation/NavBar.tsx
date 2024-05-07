import { AppBar, Typography, styled } from "@mui/material";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  position: "static",
  backgroundColor: "#FF3E32",
  padding: 14,
}));

export default function NavBar() {
  return (
    <StyledAppBar>
      <Typography>Brandje blussen</Typography>
    </StyledAppBar>
  );
}
