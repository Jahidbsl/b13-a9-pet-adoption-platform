"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Heart,
  HeartHandshake,
  PlusCircle,
  PawPrint,
  Settings,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { name: "My Requests", icon: HeartHandshake, href: "/dashboard/my-requests" },
  { name: "Wishlist", icon: Heart, href: "/dashboard/wishlist" },
  { name: "Add Pet", icon: PlusCircle, href: "/dashboard/add-pet" },
  { name: "My Listings", icon: PawPrint, href: "/dashboard/my-listings" },
  { name: "Settings", icon: Settings, href: "/dashboard/settings" },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar variant="floating" collapsible="icon">
      {/* Header */}
      <div className="p-4 flex items-center gap-3 border-b border-purple-100">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] flex items-center justify-center">
          <PawPrint className="text-white" size={18} />
        </div>

        <span className="font-bold text-[#374151]">Pet Blossom</span>
      </div>

      {/* Menu */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;

                return (
                  <SidebarMenuItem key={index}>
                    <SidebarMenuButton asChild isActive={isActive}>
                      <a
                        href={item.href}
                        className={
                          "flex items-center gap-3 px-3 py-2 rounded-xl transition-all " +
                          (isActive
                            ? "bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] text-white"
                            : "hover:bg-purple-50 text-[#374151]")
                        }
                      >
                        <Icon size={18} />
                        <span>{item.name}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}