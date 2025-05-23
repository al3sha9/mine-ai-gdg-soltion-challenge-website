import { Typography, Button, IconButton } from "@material-tailwind/react";

const CURRENT_YEAR = new Date().getFullYear();
const LINKS = ["Company", "About Us", "Team", "Products", "Blog"];

export function Footer() {
  return (
    <footer className="pb-5 p-10 md:pt-10 bg-black">
      <div className="container flex flex-col mx-auto">
        <div className="flex !w-full py-10 mb-5 md:mb-20 flex-col justify-center !items-center bg-gray-900 max-w-6xl mx-auto rounded-2xl p-5 ">
          <Typography
            className="text-2xl md:text-3xl text-center font-bold text-white"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            Join now and get 30% OFF!
          </Typography>
          <Typography
            color="white"
            className="md:w-7/12 text-center my-3 !text-base"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            Don&apos;t miss out on this exclusive offer that will end soon.
          </Typography>
          <div className="flex w-full md:w-fit gap-3 mt-2 flex-col md:flex-row">
            <Button
              color="white"
              size="md"
              className="bg-white text-black hover:bg-gray-200"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              buy ticket
            </Button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center !justify-between">
          <Typography
            as="a"
            href="https://typs.dev/"
            target="_blank"
            variant="h6"
            className="text-white"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            Mine-AI
          </Typography>
          <ul className="flex justify-center my-4 md:my-0 w-max mx-auto items-center gap-4">
            {LINKS.map((link, index) => (
              <li key={index}>
                <Typography
                  as="a"
                  href="#"
                  variant="small"
                  className="font-normal !text-gray-400 hover:!text-white transition-colors"
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                >
                  {link}
                </Typography>
              </li>
            ))}
          </ul>
          <div className="flex w-fit justify-center gap-2">
            <IconButton
              size="sm"
              color="white"
              variant="text"
              className="text-white hover:bg-white/10"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              <i className="fa-brands fa-twitter text-lg" />
            </IconButton>
            <IconButton
              size="sm"
              color="white"
              variant="text"
              className="text-white hover:bg-white/10"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              <i className="fa-brands fa-youtube text-lg" />
            </IconButton>
            <IconButton
              size="sm"
              color="white"
              variant="text"
              className="text-white hover:bg-white/10"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              <i className="fa-brands fa-instagram text-lg" />
            </IconButton>
            <IconButton
              size="sm"
              color="white"
              variant="text"
              className="text-white hover:bg-white/10"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              <i className="fa-brands fa-github text-lg" />
            </IconButton>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
