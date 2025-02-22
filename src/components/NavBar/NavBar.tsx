import { AppBar, MenuItem, Toolbar, styled } from "@mui/material"

const NavBar = () => {
    const StyledToobar = styled(Toolbar)(({ theme }) => ({
        alignItems: 'center',
        justifyContent: "space-evenly",
        ...theme.mixins.toolbar,
    }))


  return (
    <>
        <AppBar position="absolute">
            <StyledToobar>
                <MenuItem>About</MenuItem>
                <MenuItem>Skills</MenuItem>
                <MenuItem>Project</MenuItem>
            </StyledToobar>
        </AppBar>
    </>
  )
}

export default NavBar