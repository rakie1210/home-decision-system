import type { ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HugeiconsIcon } from "@hugeicons/react";
import { Notification02Icon } from "@hugeicons/core-free-icons";
import {
  Popover,
  PopoverHeader,
  PopoverTitle,
  PopoverDescription,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

import userImage from "../assets/user.png";

type BreadcrumbItem = {
  label: string;
  to?: string;
};

type PageHeaderProps = {
  actions?: ReactNode;
  breadcrumbs?: BreadcrumbItem[];
  eyebrow?: string;
  title?: string;
};

// Popover notifications for Notiication bell
function PopoverDescriptionNotifications() {
  return (
    <PopoverDescription>
      <p className="text-sm text-muted-foreground">
        You have 3 unread notifications
      </p>
    </PopoverDescription>
  );
}

export function PageHeader({
  actions,
  breadcrumbs,
  eyebrow,
  title,
}: PageHeaderProps) {
  const navigate = useNavigate();

  return (
    <header className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
      <div>
        <nav aria-label="Breadcrumb">
          <ol className="mb-4 flex flex-wrap items-center gap-2 text-sm font-medium text-muted-foreground">
            {breadcrumbs?.map((item, index) => {
              const isLast = index === breadcrumbs.length - 1;

              return (
                <li className="flex items-center gap-2" key={item.label}>
                  {item.to && !isLast ? (
                    <Link
                      className="transition-colors hover:text-foreground"
                      to={item.to}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span
                      className={isLast ? "text-foreground" : undefined}
                      aria-current={isLast ? "page" : undefined}
                    >
                      {item.label}
                    </span>
                  )}
                  {!isLast && (
                    <span className="text-muted-foreground/60">/</span>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
        {eyebrow && (
          <p className="text-base text-muted-foreground">{eyebrow}</p>
        )}
        {title && (
          <h1 className="text-3xl font-bold tracking-normal text-foreground">
            {title}
          </h1>
        )}
      </div>

      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
        <div className="hidden items-center gap-3 pr-2 lg:flex">
          <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card">
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#d27a43]" />
            <Popover>
              <PopoverTrigger>
                <HugeiconsIcon icon={Notification02Icon} className="h-5 w-5" />
              </PopoverTrigger>
              <PopoverContent>
                <PopoverHeader>
                  <PopoverTitle>Notifications</PopoverTitle>
                  <PopoverDescriptionNotifications />
                </PopoverHeader>
              </PopoverContent>
            </Popover>
          </span>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar>
                  <AvatarImage src={userImage} alt="Raquelle Mae" />
                  <AvatarFallback>RM</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-32">
              <DropdownMenuGroup>
                <DropdownMenuItem onSelect={() => navigate("/profile")}>
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem variant="destructive">
                  Log out
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {actions && <div className="flex items-center gap-3">{actions}</div>}
      </div>
    </header>
  );
}
