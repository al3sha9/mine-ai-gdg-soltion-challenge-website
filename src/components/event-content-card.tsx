import Image from "next/image";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  Avatar,
} from "@material-tailwind/react";

interface EventContentCardProps {
  title: string;
  des: string;
  name: string;
  position: string;
  panel: string;
  img: string;
}
export function EventContentCard({
  title,
  des,
  name,
  position,
  panel,
  img,
}: EventContentCardProps) {
  return (
    <Card
      color="transparent"
      shadow={false}
      placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
      className="lg:!flex-row bg-black py-2 mb-10 lg:items-end"
    >
      <CardHeader
      placeholder=""
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
        floated={false}
        shadow={false}
        className="h-[32rem] max-w-[28rem] my-2 shrink-0"
      >
        <Image
          width={768}
          height={768}
          src={img}
          alt="testimonial image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}} className="col-span-full lg:col-span-3">
        <Typography placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}} variant="h6" color="white" className="mb-4">
          {panel}
        </Typography>
        <Typography placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}} variant="h2" color="white" className="mb-4 font-minecraft font-medium">
          {title}
        </Typography>
        <Typography placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}} className="mb-12 md:w-8/12 font-medium !text-gray-500">
          {des}
        </Typography>
        <div className="flex items-center gap-4">
          <Avatar
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
            variant="circular"
            src="/logos/spotify-logo.png"
            alt="spotify"
            size="lg"
          />
          <div>
            <Typography placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}} variant="h6" color="white" className="mb-0.5">
              {name}
            </Typography>
            <Typography placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}} variant="small" className="font-normal !text-gray-500">
              {position}
            </Typography>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default EventContentCard;
