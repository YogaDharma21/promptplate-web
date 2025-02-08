import PromptEditForm from "@/components/prompt-edit-form";
import { useAuth } from "@/hooks/auth";

export default async function Page({ params }: { params: { slug: string } }) {
    const slug = params.slug;
    return (
        <div className="flex flex-1 flex-col gap-4 px-4">
            <PromptEditForm slug={slug} />
        </div>
    );
}
