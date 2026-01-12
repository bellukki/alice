import { Link } from "react-router";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import { Button } from "~/common/components/ui/button";
import { Badge } from "~/common/components/ui/badge";

interface JobCardProps {
  Id: string;
  company: string;
  companyLogoUrl: string;
  companyHq: string;
  title: string;
  type: string;
  positionLocation: string;
  postedAt: string;
  salary: string;
}

export function JobCard({
  Id,
  companyLogoUrl,
  company,
  companyHq,
  title,
  type,
  positionLocation,
  postedAt,
  salary,
}: JobCardProps) {
  return (
    <Link to={`/jobs/${Id}`}>
      <Card className="bg-transparent hover:bg-primary/10 transition-colors">
        <CardHeader>
          <div className="flex items-center gap-4 mb-4">
            <img
              src={companyLogoUrl}
              alt="Company Logo"
              className="size-10 rounded-full"
            />
            <div className="space-x-2">
              <span className="text-accent-foreground">{company}</span>
              <span className="text-xs text-muted-foreground">{postedAt}</span>
            </div>
          </div>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex gap-2">
          <Badge variant="outline">{type}</Badge>
          <Badge variant="outline">{positionLocation}</Badge>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-muted-foreground">
              {salary}
            </span>
            <span className="text-sm font-medium text-muted-foreground">
              {companyHq}
            </span>
          </div>
          <Button size="sm">Apply now</Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
