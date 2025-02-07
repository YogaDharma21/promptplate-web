"use client";
import Loading from "@/app/Loading";
import { AppSidebar } from "@/components/app-sidebar";
import PromptForm from "@/components/prompt-form";
import { SiteHeader } from "@/components/site-header";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar";
import { useAuth } from "@/hooks/auth";
import axios from "@/lib/axios";
import { useEffect, useState } from "react";

export default function page() {
    const { user } = useAuth({});
    const [tags, setTags] = useState([]);
    useEffect(() => {
        axios.get("/api/tag").then((response) => {
            setTags(response.data);
        });
    }, []);

    if (!user) {
        return <Loading />;
    }
    return (
        <div className="flex flex-1 flex-col gap-4 px-4">
            <PromptForm user={user} tags={tags} />
        </div>
    );
}
