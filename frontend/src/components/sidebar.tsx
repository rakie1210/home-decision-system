import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Calendar02Icon,
  HomeIcon,
  ServingFoodIcon,
  SettingsIcon,
  ShieldQuestionMarkIcon,
} from "@hugeicons/core-free-icons";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import plantImage from "@/assets/plant.png";

type SideBarLayoutProps = {
  activeItem?: "home" | "recipes" | "meal-plan";
  children: ReactNode;
  collapsible?: "offcanvas" | "icon" | "none";
  defaultOpen?: boolean;
  footerClassName?: string;
  footerImage?: string;
  footerImageClassName?: string;
  showBrandName?: boolean;
};

const activeMenuClass =
  "bg-sidebar-primary text-sidebar-primary-foreground border-l-4 border-sidebar-primary";

export function SideBarLayout({
  activeItem = "recipes",
  children,
  collapsible = "icon",
  defaultOpen = false,
  footerClassName = "mt-auto p-1",
  footerImage = plantImage,
  footerImageClassName = "mx-auto h-28 w-full object-contain",
  showBrandName = false,
}: SideBarLayoutProps) {
  const navigate = useNavigate();

  const getMenuClassName = (item: SideBarLayoutProps["activeItem"]) =>
    activeItem === item ? activeMenuClass : undefined;

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <Sidebar className="bg-sidebar flex flex-col" collapsible={collapsible}>
        <SidebarHeader>
          <div
            className={
              showBrandName
                ? "flex items-center gap-2 p-4"
                : "flex items-center justify-center p-3"
            }
          >
            <button
              className="flex h-8 w-8 items-center justify-center rounded-lg"
              onClick={() => navigate("/dashboard")}
              type="button"
            >
              <img
                src="/homewise-icon-v2.svg"
                alt="Homewise"
                className="h-12 w-auto"
              />
            </button>
            {showBrandName && (
              <span className="text-lg font-semibold">Homewise</span>
            )}
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Menu</SidebarGroupLabel>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  className={getMenuClassName("home")}
                  onClick={() => navigate("/dashboard")}
                >
                  <HugeiconsIcon icon={HomeIcon} className="h-4 w-4" />
                  <span>Home</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  className={getMenuClassName("recipes")}
                  onClick={() => navigate("/recipes")}
                >
                  <HugeiconsIcon icon={ServingFoodIcon} className="h-4 w-4" />
                  <span>Recipes</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className={getMenuClassName("meal-plan")}>
                  <HugeiconsIcon icon={Calendar02Icon} className="h-4 w-4" />
                  <span>Meal Plan</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
          <SidebarSeparator />
          <SidebarGroup>
            <SidebarGroupLabel>Profile</SidebarGroupLabel>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <HugeiconsIcon icon={SettingsIcon} className="h-4 w-4" />
                  <span>Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <HugeiconsIcon
                    icon={ShieldQuestionMarkIcon}
                    className="h-4 w-4"
                  />
                  <span>Help</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className={footerClassName}>
          <img
            src={footerImage}
            alt="Plant"
            className={footerImageClassName}
          />
        </SidebarFooter>
      </Sidebar>

      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  );
}
