"use client";

import Link from "next/link";
import { useAuth } from "@/hooks/auth";
import { Button } from "./ui/button";

const LoginLinks = () => {
    const { user } = useAuth({ middleware: "guest" });

    return (
        <div className="flex gap-4 items-center justify-center">
            {user ? (
                <Link href="/dashboard">
                    <Button className="border transition-colors text-white font-bold px-6">
                        Dashboard
                    </Button>
                </Link>
            ) : (
                <>
                    <Link href="/login">
                        <Button
                            className="border text-white transition-colors border-primary font-bold px-6"
                            variant={"secondary"}
                        >
                            Login
                        </Button>
                    </Link>

                    <Link href="/register">
                        <Button className="border transition-colors text-primary-foreground font-bold px-6">
                            Get Started for Free
                        </Button>
                    </Link>
                </>
            )}
        </div>
    );
};

export default LoginLinks;
