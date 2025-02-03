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
        <SidebarProvider>
            <AppSidebar user={user} />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 border-b">
                    <div className="flex items-center gap-2 px-3">
                        <SidebarTrigger />
                        <Separator
                            orientation="vertical"
                            className="mr-2 h-4"
                        />
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem className="hidden md:block">
                                    <BreadcrumbLink href="#">
                                        Create
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="hidden md:block" />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>
                                        Create Your Prompt
                                    </BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </header>
                <div className="flex flex-1 flex-col gap-4 p-4">
                    <PromptForm />
                    {/* <div className="aspect-video h-12 w-full rounded-lg bg-muted/50" />
                    <div className="aspect-video h-12 w-full rounded-lg bg-muted/50" />
                    <div className="aspect-video h-40 md:h-96 w-full rounded-lg bg-muted/50" />
                    <div className="aspect-video h-12 w-40 rounded-lg bg-muted/50" /> */}
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}
