"use client";
import { GalleryVerticalEnd } from "lucide-react";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    SidebarRail,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { NavUser } from "./nav-user";
import { Button } from "./ui/button";
import { useAuth } from "@/hooks/auth";
import Loading from "@/app/Loading";
import { SearchForm } from "./search-form";
import { useState } from "react";
const data = {
    navMain: [
        {
            title: "Learning",
            url: "#",
            count: 15,
        },
        {
            title: "Programming",
            url: "#",
            count: 24,
        },
        {
            title: "Web Development",
            url: "#",
            count: 17,
        },
        {
            title: "Mobile Development",
            url: "#",
            count: 9,
        },
        {
            title: "AI & Data Science",
            url: "#",
            count: 28,
        },
        {
            title: "DevOps",
            url: "#",
            count: 12,
        },
        {
            title: "Cloud Computing",
            url: "#",
            count: 21,
        },
        {
            title: "Cybersecurity",
            url: "#",
            count: 7,
        },
        {
            title: "UI/UX Design",
            url: "#",
            count: 19,
        },
        {
            title: "Career & Trends",
            url: "#",
            count: 5,
        },
        {
            title: "Game Development",
            url: "#",
            count: 22,
        },
        {
            title: "Data Engineering",
            url: "#",
            count: 11,
        },
        {
            title: "Software Testing",
            url: "#",
            count: 14,
        },
        {
            title: "Machine Learning",
            url: "#",
            count: 30,
        },
        {
            title: "Blockchain",
            url: "#",
            count: 4,
        },
        {
            title: "AR/VR",
            url: "#",
            count: 10,
        },
        {
            title: "IoT",
            url: "#",
            count: 16,
        },
        {
            title: "Networking",
            url: "#",
            count: 8,
        },
        {
            title: "Database Management",
            url: "#",
            count: 26,
        },
        {
            title: "Project Management",
            url: "#",
            count: 13,
        },
    ],
};
export function AppSidebar({
    user,
    ...props
}: React.ComponentProps<typeof Sidebar> & { user: any }) {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredNavMain = data.navMain.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return (
        <Sidebar {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard">
                                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                                    <GalleryVerticalEnd className="size-4" />
                                </div>
                                <div className="flex flex-col gap-0.5 leading-none">
                                    <span className="text-lg font-semibold">
                                        Prompt Plate
                                    </span>
                                </div>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SearchForm onSearch={setSearchQuery} />
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarMenu>
                        {filteredNavMain.map((item) => (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton asChild>
                                    <div className="flex justify-between items-center">
                                        <a
                                            href={item.url}
                                            className="font-medium"
                                        >
                                            {item.title}
                                        </a>
                                        <span className=" text-muted-foreground text-xs font-semibold">
                                            {item.count}
                                        </span>
                                    </div>
                                </SidebarMenuButton>
                                {/* <SidebarMenuSub>
                                    <SidebarMenuSubItem key={item.title}>
                                        <SidebarMenuSubButton asChild>
                                            <a href={item.url}>{item.title}</a>
                                        </SidebarMenuSubButton>
                                    </SidebarMenuSubItem>
                                </SidebarMenuSub> */}
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <Link href={"/create-prompt"}>
                    <Button className="w-full">Create New Prompt</Button>
                </Link>
                <NavUser user={user} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}
