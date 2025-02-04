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
                    <Button className="border border-neutral-700 bg-neutral-800 text-white transition-colors hover:bg-neutral-700">
                        Dashboard
                    </Button>
                </Link>
            ) : (
                <>
                    <Link href="/login">
                        <Button className="border border-neutral-700 bg-neutral-800 text-white transition-colors hover:bg-neutral-700">
                            Login
                        </Button>
                    </Link>

                    <Link href="/register">
                        <Button className="border border-neutral-700 bg-neutral-800 text-white transition-colors hover:bg-neutral-700">
                            Register
                        </Button>
                    </Link>
                </>
            )}
        </div>
    );
};

export default LoginLinks;
