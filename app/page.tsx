"use client";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
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
import Image from "next/image";
import googleImage from "./google.svg";
import { ListItemButton } from "@mui/material";
import { useState } from "react";

export default function Home() {
  const [showCreateAccountPopup, setShowCreateAccountPopup] =
    useState<boolean>(false);
  return (
    <Container sx={{ height: "100vh", display: "grid", placeItems: "center" }}>
      <Box
        sx={{
          width: "448px",
          height: "500px",
          border: `1px solid ${grey[300]}`,
          borderRadius: "10px",
          p: "48px 40px 36px",
        }}
      >
        <Image
          src={googleImage}
          alt="google"
          width={75}
          height={24}
          style={{ marginInline: "auto", display: "block" }}
        />
        <Typography variant="h5" sx={{ textAlign: "center", mt: 2, mb: 1 }}>
          تسجيل الدخول
        </Typography>
        <Typography sx={{ textAlign: "center" }} color={"GrayText"}>
          المتابعة إلي Gmail
        </Typography>
        <Box sx={{ mt: "30px" }}>
          <TextField
            label="البريد الإلكتروني أو الهاتف"
            variant="outlined"
            fullWidth
          />
          <Link href="#" underline="none" sx={{ mt: 1, display: "block" }}>
            هل نسيت البريد الإلكتروني؟
          </Link>
        </Box>
        <Box sx={{ marginBlock: 5 }}>
          <Typography variant="body2" color={"GrayText"}>
            ألا تمتلك هذا الكمبيوتر؟ استخدِم وضع الضيف لتسجيل الدخول بشكلٍ خاص.
          </Typography>
          <Link underline="none" sx={{ fontSize: "15px" }}>
            مزيد من المعلومات
          </Link>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            variant="text"
            onClick={() => setShowCreateAccountPopup((prev) => !prev)}
          >
            إنشاء حساب
          </Button>
          <Button variant="contained">التالي</Button>
        </Box>
        <Paper
          elevation={2}
          sx={{
            width: "fit-content",
            height: "100px",
            opacity: `${showCreateAccountPopup ? 1 : 0}`,
            transition: "all 300ms linear",
            overflowY: "auto",
          }}
        >
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText>لإستخدامي الشخصي</ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText>لطفلي</ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText>للعمل أو لنشاطي التجاري</ListItemText>
              </ListItemButton>
            </ListItem>
          </List>
        </Paper>
      </Box>
    </Container>
  );
}
