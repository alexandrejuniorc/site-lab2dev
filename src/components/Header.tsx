"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import { urls } from "@/mock/urls";
import MenuIcon from "@mui/icons-material/Menu";
import { Drawer } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import List from "@mui/material/List";

type Anchor = "top" | "left" | "bottom" | "right";

// export const Header = () => {

//   return (
//     <header className="container">
//       <div className="flex justify-between">
//         <div>
//           <Link href="/" prefetch={true}>
//             <Image
//               style={{ objectFit: "contain" }}
//               src="/logo.png"
//               alt="Logo Lab2dev"
//               width={128}
//               height={30}
//               quality={100}
//             />
//           </Link>
//         </div>

//         <div className=" flex items-center max-md:hidden">
//           <Link
//             prefetch={true}
//             className={
//               pathname === "/"
//                 ? "font-normal text-16 leading-6 not-italic text-purple-300 pr-8 "
//                 : "font-normal text-16 leading-6 not-italic text-gray-600 pr-8 hover:text-purple-300"
//             }
//             href="/"
//           >
//             {/*  */}
//             Home
//           </Link>
//           <Link
//             prefetch={true}
//             className={
//               pathname === "/quem-somos"
//                 ? "font-normal text-16 leading-6 not-italic text-purple-300 pr-8 "
//                 : "font-normal text-16 leading-6 not-italic text-gray-600 pr-8 hover:text-purple-300"
//             }
//             href="quem-somos"
//           >
//             Quem somos
//           </Link>
//           <Link
//             prefetch={true}
//             className={
//               pathname === "/o-que-fazemos"
//                 ? "font-normal text-16 leading-6 not-italic text-purple-300 pr-8 "
//                 : "font-normal text-16 leading-6 not-italic text-gray-600 pr-8 hover:text-purple-300"
//             }
//             href="o-que-fazemos"
//           >
//             O que fazemos
//           </Link>
//           <Link
//             prefetch={true}
//             className={
//               pathname === "/sap-btp"
//                 ? "font-normal text-16 leading-6 not-italic text-purple-300 pr-8 "
//                 : "font-normal text-16 leading-6 not-italic text-gray-600 pr-8 hover:text-purple-300"
//             }
//             href="sap-btp"
//           >
//             BTP
//           </Link>
//           <Link
//             prefetch={true}
//             className={
//               pathname === "/sap-ams"
//                 ? "font-normal text-16 leading-6 not-italic text-purple-300"
//                 : "font-normal text-16 leading-6 not-italic text-gray-600 hover:text-purple-300"
//             }
//             href="sap-ams"
//           >
//             AMS
//           </Link>
//         </div>

//         <div className="flex items-center md:hidden rounded-md border-2 border-[transparent] transition-colors hover:border-purple-300 mb-3">
//           <Menubar />
//         </div>
//       </div>
//     </header>
//   );
// };
export const Header = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const pathname = usePathname();

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
      <List style={{ padding: 0 }} className="flex flex-col text-center">
        <div className="flex h-screen flex-col justify-between border-e bg-purple-100">
          <div className="px-4 py-6">
            <div className="flex justify-center">
              <span className="grid h-10 w-32 place-content-center rounded-lg bg-purple-200 text-xs text-gray-600">
                <Image
                  src="/logo-menu-mobile.png"
                  alt=""
                  width={128}
                  height={40}
                />
              </span>
            </div>

            <ul className="mt-6 space-y-1">
              {urls.map((url) => {
                return (
                  <li key={url.id}>
                    <Link
                      prefetch={true}
                      className={
                        pathname === url.pathname
                          ? "block rounded-lg px-4 py-2 text-sm bg-gray-100 text-purple-300"
                          : "block rounded-lg px-4 py-2 text-sm text-gray-100 hover:bg-gray-100 hover:text-purple-300"
                      }
                      href={url.pathname}
                    >
                      {url.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </List>
    </Box>
  );

  return (
    <header>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link href="/" prefetch={true}>
              <Image
                style={{ objectFit: "contain" }}
                src="/logo.png"
                alt="Logo Lab2dev"
                width={128}
                height={30}
                quality={100}
              />
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  {urls.map((url) => {
                    return (
                      <Link
                        key={url.id}
                        prefetch={true}
                        className={
                          pathname === url.pathname
                            ? "text-16 leading-6 transition text-purple-300 pr-8 "
                            : "text-16 leading-6 transition text-gray-600 pr-8 hover:text-purple-300/75"
                        }
                        href={url.pathname}
                      >
                        {url.title}
                      </Link>
                    );
                  })}
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="block md:hidden">
                {(["right"] as const).map((anchor) => (
                  <React.Fragment key={anchor}>
                    <Button
                      className="rounded bg-purple-100/90 p-2 text-white transition hover:text-gray-600/75"
                      onClick={toggleDrawer(anchor, true)}
                    >
                      <MenuIcon />
                    </Button>
                    <Drawer
                      anchor={anchor}
                      open={state[anchor]}
                      onClose={toggleDrawer(anchor, false)}
                    >
                      {list(anchor)}
                    </Drawer>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
