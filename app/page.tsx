import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ActiveIcon from "@mui/icons-material/LocalFireDepartment";
import InProgressIcon from "@mui/icons-material/HourglassTop";
import DoneIcon from "@mui/icons-material/DoneAll";
import Tooltip from "@mui/material/Tooltip";
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { grey } from "@mui/material/colors";

export default function Home() {
  return (
    <Container sx={{ height: "100vh", display: "grid", placeItems: "center" }}>
      <Box
        sx={{
          width: "400px",
          maxWidth: "100%",
          minHeight: "400px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            gap: 1.4,
            alignItems: "center",
          }}
        >
          <TextField
            label="Add Todo"
            variant="outlined"
            sx={{ mx: "auto", display: "block", width: "100%" }}
            fullWidth
          />
          <Button variant="contained" sx={{ paddingBlock: "10px" }}>
            Add
          </Button>
        </Box>
        <Box sx={{ position: "relative", pb: 7 }}>
          <List sx={{ mt: 2, height: "400px", overflowY: "auto" }}>
            {Array.from({ length: 10 }).map(() => (
              <ListItem
                disablePadding
                sx={{
                  bgcolor: grey[200],
                  paddingInline: 2,
                  paddingBlock: 1,
                  mb: "5px",
                }}
              >
                <ListItemText>
                  <Typography>This is for testing</Typography>
                </ListItemText>
                <ListItemIcon
                  sx={{ width: "fit-content", minWidth: "fit-content" }}
                >
                  <Tooltip title="Edit Todo">
                    <IconButton>
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete Todo">
                    <IconButton>
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </ListItemIcon>
              </ListItem>
            ))}
          </List>
          <Paper
            sx={{ position: "absolute", bottom: 0, left: 0, right: 0 }}
            elevation={3}
          >
            <BottomNavigation showLabels>
              <BottomNavigationAction label="Active" icon={<ActiveIcon />} />
              <BottomNavigationAction
                label="In Progress"
                icon={<InProgressIcon />}
              />
              <BottomNavigationAction label="Complated" icon={<DoneIcon />} />
            </BottomNavigation>
          </Paper>
        </Box>
      </Box>
    </Container>
  );
}

/**
 * Features:
 * 1- Create New Todo list (UI = done)
 * 2- Update Exist Todo
 * 3- Delete Todo
 * 4- Filter Todos By: (Complate | Active | In Progress)
 */
