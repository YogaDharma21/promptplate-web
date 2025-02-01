"use client";

import { GalleryVerticalEnd } from "lucide-react";
import { useRouter } from "next/navigation";
import { LoginForm } from "@/components/login-form";
import { RegisterForm } from "@/components/register-form";

export default function RegisterPage() {
    const router = useRouter();
    return (
        <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-gradient-to-br from-black via-neutral-900 to-red-950/50 p-6 md:p-10">
            <div className="flex w-full max-w-sm flex-col gap-6">
                <div
                    onClick={() => router.push("/")}
                    className="flex items-center gap-2 self-center font-medium cursor-pointer"
                >
                    <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
                        <GalleryVerticalEnd className="size-4" />
                    </div>
                    Prompt Plate
                </div>
                <RegisterForm />
            </div>
        </div>
    );
}
