"use client";

import { useEffect, useState } from "react";
import axios from "@/lib/axios";
import { useAuth } from "@/hooks/auth";

export default function EditPromptForm({ slug }: { slug: string }) {
    const [prompt, setPrompt] = useState<any>(null);
    const { user } = useAuth({ middleware: "auth" });

    useEffect(() => {
        axios.get(`/api/prompt/${slug}`).then((res) => {
            setPrompt(res.data);
        });
    }, [slug]);
    if (!prompt) return <div>Loading...</div>;
    if (user.id !== prompt.user_id)
        return <div>You are not authorized to edit this prompt</div>;
    return (
        <div>
            <h1>{slug}</h1>
            {prompt && (
                <div>
                    <h2>{prompt.name}</h2>
                    <p>{prompt.content}</p>
                </div>
            )}
        </div>
    );
}
