import axios from "@/lib/axios";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const usePrompt = ({ middleware, redirectTo }: any) => {
    const router = useRouter();

    const createPrompt = async ({ setErrors, ...formData }: any) => {
        setErrors([]);
        try {
            const response = await axios.post("/api/prompt", formData);
            return { success: true, data: response.data };
        } catch (error: any) {
            setErrors(error.response.data.errors);
            return { success: false, error };
        }
    };

    useEffect(() => {
        if (middleware == "auth" && redirectTo) {
            router.push(redirectTo);
        }
    }, [middleware, redirectTo]);

    return {
        createPrompt,
    };
};
