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
import Link from "next/link";

export function ForgotPasswordForm({
    className,
    ...props
}: React.ComponentPropsWithoutRef<"div">) {
    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader className="text-center">
                    <CardTitle className="text-xl">
                        Forgot your password?
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid gap-6">
                            <div className="grid gap-6">
                                <div className="grid gap-2">
                                    <p className="text-sm text-muted-foreground md:text-base">
                                        Forgot your password? No problem. Just
                                        let us know your email address and we
                                        will email you a password reset link
                                        that will allow you to choose a new one.
                                    </p>
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="m@example.com"
                                        required
                                    />
                                </div>
                                <Button type="submit" className="w-full">
                                    Email password reset link
                                </Button>
                            </div>
                        </div>
                    </form>
                </CardContent>
            </Card>
            <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  ">
                By clicking continue, you agree to our{" "}
                <Link
                    href="/terms-of-service"
                    className="underline underline-offset-4 cursor-pointer"
                >
                    Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                    href="/privacy-policy"
                    className="underline underline-offset-4 cursor-pointer"
                >
                    Privacy Policy
                </Link>
                .
            </div>
        </div>
    );
}
