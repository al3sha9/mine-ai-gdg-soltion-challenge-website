
import { Typography, Card } from "@material-tailwind/react";
interface StatsCardProps {
  count: string;
  title: string;
}

export function StatsCard({ count, title }: StatsCardProps) {
  return (
    <Card placeholder=""
    onPointerEnterCapture={() => {}}
    onPointerLeaveCapture={() => {}} color="transparent" shadow={false}>
      <Typography placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}} variant="h1" className="font-bold" color="blue-gray">
        {count}
      </Typography>
      <Typography placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}} variant="h6" color="blue-gray" className="mt-1 font-medium">
        {title}
      </Typography>
    </Card>
  );
}


export default StatsCard;
