"use client";

import axios from "@/lib/axios";
import { useEffect, useState } from "react";

export default function Page() {
    const [prompts, setPrompts] = useState([]);
    useEffect(() => {
        axios.get("/api/prompt").then((response) => {
            setPrompts(response.data);
        });
    }, []);
    console.log(prompts);
    return (
        <div>
            <h1>halo</h1>
        </div>
    );
}
