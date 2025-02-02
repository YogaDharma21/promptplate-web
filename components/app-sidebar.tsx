"use client";

import {
    BookOpen,
    Bot,
    Command,
    Frame,
    LifeBuoy,
    Map,
    PieChart,
    Send,
    Settings2,
    SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Button } from "./ui/button";
import Link from "next/link";
import Loading from "@/app/Loading";
import { useAuth } from "@/hooks/auth";
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

export function AppSidebar({ ...props }) {
    const { user } = useAuth({});
    const [searchQuery, setSearchQuery] = useState("");

    const filteredNavMain = data.navMain.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (!user) {
        return <Loading />;
    }
    return (
        <Sidebar
            className="top-[--header-height] !h-[calc(100svh-var(--header-height))]"
            {...props}
        >
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link
                                href="/dashboard"
                                className="flex gap-3 w-full"
                            >
                                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                                    <Command className="size-4" />
                                </div>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate font-semibold text-lg ">
                                        Prompt Plate
                                    </span>
                                </div>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
                <SearchForm className="w-full" onSearch={setSearchQuery} />
            </SidebarHeader>
            <SidebarContent>
                {/* <NavMain items={data.navMain} /> */}
                <SidebarGroup>
                    {filteredNavMain.map((item) => (
                        <SidebarMenu key={item.title}>
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton asChild>
                                    <div className="flex justify-between">
                                        <a href={item.url}>{item.title}</a>
                                        <p className="text-muted-foreground">
                                            {item.count}
                                        </p>
                                    </div>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    ))}
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <Button>Create New Prompt</Button>
                <NavUser user={user} />
            </SidebarFooter>
        </Sidebar>
    );
}
