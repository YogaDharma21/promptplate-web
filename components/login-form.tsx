"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
export function LoginForm({
    className,
    ...props
}: React.ComponentPropsWithoutRef<"div">) {
    const router = useRouter();
    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader className="text-center">
                    <CardTitle className="text-xl">Welcome back</CardTitle>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid gap-6">
                            <div className="grid gap-6">
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="m@example.com"
                                        required
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <div className="flex items-center">
                                        <Label htmlFor="password">
                                            Password
                                        </Label>
                                        <div
                                            onClick={() =>
                                                router.push("/forgot-password")
                                            }
                                            className="ml-auto text-sm underline-offset-4 hover:underline cursor-pointer"
                                        >
                                            Forgot your password?
                                        </div>
                                    </div>
                                    <Input
                                        id="password"
                                        type="password"
                                        required
                                    />
                                </div>
                                <Button type="submit" className="w-full">
                                    Login
                                </Button>
                            </div>
                            <div className="text-center text-sm">
                                Don&apos;t have an account?{" "}
                                <span
                                    onClick={() => router.push("/register")}
                                    className="underline underline-offset-4 cursor-pointer"
                                >
                                    Sign up
                                </span>
                            </div>
                        </div>
                    </form>
                </CardContent>
            </Card>
            <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  ">
                By clicking continue, you agree to our{" "}
                <span
                    onClick={() => router.push("/terms-of-service")}
                    className="underline underline-offset-4 cursor-pointer"
                >
                    Terms of Service
                </span>{" "}
                and{" "}
                <span
                    onClick={() => router.push("/privacy-policy")}
                    className="underline underline-offset-4 cursor-pointer"
                >
                    Privacy Policy
                </span>
                .
            </div>
        </div>
    );
}
