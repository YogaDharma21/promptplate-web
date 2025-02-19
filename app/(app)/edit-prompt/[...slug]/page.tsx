import PromptEditForm from "@/components/prompt-edit-form";

export default async function Page({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    return (
        <div className="flex flex-1 flex-col gap-4 px-4">
            <PromptEditForm slug={slug} />
        </div>
    );
}
