import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  RectangleStackIcon,
  UserCircleIcon,
  CommandLineIcon,
  Squares2X2Icon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}



export function CustomNavbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false),
    );
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MTNavbar
      shadow={false}
      fullWidth
      blurred={false}
      color="white"
      className={`fixed top-0 z-50 border-0 transition-colors duration-300 ${
        isScrolling ? 'bg-black' : 'bg-black/40'
      }`}
      placeholder=""
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Typography
          color="white"
          className="text-2xl tracking-[0.2em] font-bold font-minecraft"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          Mine-AI
        </Typography>

        <div className="hidden items-center gap-4 lg:flex">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdad9AP09SkWMTFKBnRFjvz2Y1kgI6G6czYdFAkY1uDrVtmbA/viewform" target="_blank">
            <Button
              className="font-minecraft bg-green-500 text-white text-xl tracking-wide hover:bg-green-400 rounded-none"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              JOIN US
              <span>↗</span>
            </Button>
          </a>
        </div>
        <IconButton
          variant="text"
          color="white"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className={`container mx-auto mt-4 rounded-lg px-6 py-5 ${
          isScrolling ? 'bg-black/40' : 'bg-black'
        }`}>
          <div className="mt-6 flex items-center gap-4">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdad9AP09SkWMTFKBnRFjvz2Y1kgI6G6czYdFAkY1uDrVtmbA/viewform" target="_blank">
              <Button
                color="white"
                className="font-minecraft bg-green-500 w-full rounded-none text-xl text-white hover:bg-gray-200"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                Join Us <span>↗</span>
              </Button>
            </a>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default CustomNavbar;
