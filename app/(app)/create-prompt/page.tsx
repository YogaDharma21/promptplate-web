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

export default function page() {
    const { user } = useAuth({});
    if (!user) {
        return <Loading />;
    }
    return (
        <div className="flex flex-1 flex-col gap-4 p-4">
            <PromptForm />
            {/* <div className="aspect-video h-12 w-full rounded-lg bg-muted/50" />
                    <div className="aspect-video h-12 w-full rounded-lg bg-muted/50" />
                    <div className="aspect-video h-40 md:h-96 w-full rounded-lg bg-muted/50" />
                    <div className="aspect-video h-12 w-40 rounded-lg bg-muted/50" /> */}
        </div>
    );
}
