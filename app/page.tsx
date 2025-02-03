"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-black p-4 text-white">
            <main className="text-center">
                <h1 className="mb-4 bg-gradient-to-r from-neutral-200 to-neutral-400 bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
                    Prompt Plate
                </h1>
                <p className="mx-auto mb-8 max-w-md text-xl text-neutral-400 md:text-2xl">
                    Share prompts, spark ideas.
                </p>
                <Link href="/login" passHref>
                    <Button
                        size="lg"
                        type="submit"
                        className="border border-neutral-700 bg-neutral-800 text-white transition-colors hover:bg-neutral-700"
                    >
                        Get Started
                    </Button>
                </Link>

                <footer className="mt-16 text-sm text-neutral-500">
                    © {new Date().getFullYear()} Prompt Plate. All rights
                    reserved.
                </footer>
            </main>
        </div>
    );
}
