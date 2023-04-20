import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";

import { Menu } from "@mui/icons-material";
import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

type Anchor = "top" | "left" | "bottom" | "right";

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const router = useRouter();

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className="flex flex-col text-right pt-0">
        <Link
          className={
            router.pathname === "/"
              ? "font-normal text-16 leading-6 not-italic bg-purple-100 text-white pr-8"
              : "font-normal text-16 leading-6 not-italic bg-white text-purple-300 pr-8 hover:text-white hover:bg-purple-300"
          }
          href="/"
        >
          {/*  */}
          Home
        </Link>
        <Link
          className={
            router.pathname === "/quem-somos"
              ? "font-normal text-16 leading-6 not-italic bg-purple-100 text-white pr-8"
              : "font-normal text-16 leading-6 not-italic bg-white text-purple-300 pr-8 hover:text-white hover:bg-purple-300"
          }
          href="quem-somos"
        >
          Quem somos
        </Link>
        <Link
          className={
            router.pathname === "/o-que-fazemos"
              ? "font-normal text-16 leading-6 not-italic bg-purple-100 text-white pr-8"
              : "font-normal text-16 leading-6 not-italic bg-white text-purple-300 pr-8 hover:text-white hover:bg-purple-300"
          }
          href="o-que-fazemos"
        >
          O que fazemos
        </Link>
        <Link
          className={
            router.pathname === "/btp"
              ? "font-normal text-16 leading-6 not-italic bg-purple-100 text-white pr-8"
              : "font-normal text-16 leading-6 not-italic bg-white text-purple-300 pr-8 hover:text-white hover:bg-purple-300"
          }
          href="btp"
        >
          BTP
        </Link>
        <Link
          className={
            router.pathname === "/ams"
              ? "font-normal text-16 leading-6 not-italic bg-purple-100 text-white pr-8"
              : "font-normal text-16 leading-6 not-italic bg-white text-purple-300 pr-8 hover:text-white hover:bg-purple-300"
          }
          href="ams"
        >
          AMS
        </Link>
      </List>

      {/* <Divider className="bg-white" /> */}

      {/*   <List className="flex flex-col text-right">
        <Link
          className="font-normal text-16 leading-6 not-italic text-gray-600 last:pr-0 hover:text-purple-300"
          href="#"
        >
          ENG/SPA
        </Link>
      </List> */}
    </Box>
  );

  return (
    <div>
      {(["right"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <Menu className="text-gray-800 w-10 h-7 mb-10" />
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
