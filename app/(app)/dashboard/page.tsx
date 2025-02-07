"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { usePrompt } from "@/hooks/prompt";
import { useToast } from "@/hooks/use-toast";
import axios from "@/lib/axios";
import { Copy, LucideMessageCircleQuestion } from "lucide-react";
import { useEffect, useState } from "react";

export default function Page() {
    const [selectedPrompt, setSelectedPrompt] = useState<any>(null);
    const { toast } = useToast();
    const { prompts, isLoading } = usePrompt({ middleware: "auth" });

    const copyToClipboard = (e: React.MouseEvent, content: string) => {
        e.stopPropagation();
        navigator.clipboard
            .writeText(content)
            .then(() => {
                toast({
                    title: "Prompt copied!",
                    description:
                        "The prompt has been copied to your clipboard.",
                });
            })
            .catch((err) => {
                console.error("Failed to copy: ", err);
                toast({
                    title: "Copy failed",
                    description: "There was an error copying the prompt.",
                    variant: "destructive",
                });
            });
    };

    return (
        <div className="container mx-auto p-4">
            {isLoading ? (
                <div className="flex gap-2 flex-col">
                    {Array.from({ length: 10 }).map((_, index) => (
                        <div
                            key={index}
                            className="aspect-video h-14 w-full rounded-lg bg-muted/50"
                        />
                    ))}
                </div>
            ) : (
                <>
                    <div className="flex flex-wrap gap-4">
                        {prompts.length === 0 ? (
                            <div className="w-full text-center py-8 ">
                                <p className="text-xl text-primary font-bold">
                                    No prompts found
                                </p>
                                <p className="text-base text-primary mt-2 ">
                                    Create your first prompt to get started
                                </p>
                            </div>
                        ) : (
                            prompts.map((prompt: any) => (
                                <Card
                                    key={prompt.id}
                                    className="cursor-pointer hover:shadow-lg transition-shadow"
                                    onClick={() => setSelectedPrompt(prompt)}
                                    style={{
                                        width: "clamp(272px, 100%, 368px)",
                                        height: "clamp(328px, 100%, 424px)",
                                    }}
                                >
                                    <CardContent className="p-4 h-full flex flex-col max-h-[50vh]">
                                        <div className="flex justify-between items-center mb-2">
                                            <h2 className="text-xl font-semibold truncate">
                                                {prompt.name}
                                            </h2>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                onClick={(e) =>
                                                    copyToClipboard(
                                                        e,
                                                        prompt.content
                                                    )
                                                }
                                            >
                                                <Copy className="h-4 w-4" />
                                            </Button>
                                        </div>
                                        <p className="text-sm text-gray-500 mb-2">
                                            Created by {prompt.creator}
                                        </p>
                                        <div className="flex-grow overflow-y-auto text-sm">
                                            <p className="whitespace-pre-wrap">
                                                {prompt.content}
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))
                        )}
                    </div>

                    <Dialog
                        open={selectedPrompt !== null}
                        onOpenChange={(open) =>
                            !open && setSelectedPrompt(null)
                        }
                    >
                        {selectedPrompt && (
                            <DialogContent className="max-w-3xl max-h-[80vh] flex flex-col">
                                <DialogHeader>
                                    <DialogTitle>
                                        {selectedPrompt.name}
                                    </DialogTitle>
                                    <DialogDescription>
                                        Created by {selectedPrompt.creator}
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="mt-4 flex-grow overflow-y-auto">
                                    <p className="whitespace-pre-wrap">
                                        {selectedPrompt.content}
                                    </p>
                                </div>
                                <div className="mt-4 flex justify-end">
                                    <Button
                                        onClick={(e) =>
                                            copyToClipboard(
                                                e,
                                                selectedPrompt.content
                                            )
                                        }
                                    >
                                        <Copy className="h-4 w-4 mr-2" />
                                        Copy Prompt
                                    </Button>
                                </div>
                            </DialogContent>
                        )}
                    </Dialog>
                </>
            )}
        </div>
    );
}
