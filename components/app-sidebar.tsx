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
import { useEffect, useState } from "react";
import axios from "@/lib/axios";
export function AppSidebar({
    user,
    ...props
}: React.ComponentProps<typeof Sidebar> & { user: any }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [tags, setTags] = useState<any>([]);
    const filteredNavMain = tags.filter((item: any) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    useEffect(() => {
        axios.get("/api/tag").then((response) => {
            setTags(response.data);
        });
    }, []);
    return (
        <Sidebar {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard">
                                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
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
                        {filteredNavMain.map((item: any) => (
                            <SidebarMenuItem key={item.name}>
                                <SidebarMenuButton asChild>
                                    <Link
                                        href={`/tag/${item.name.toLowerCase()}`}
                                        className="font-medium"
                                    >
                                        {item.name}
                                    </Link>
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
                    <Button className="w-full border transition-colors text-primary-foreground font-bold px-6">
                        Create New Prompt
                    </Button>
                </Link>
                <NavUser user={user} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}
