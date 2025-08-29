export default function HeadingSmall({ title, description }: { title: string; description?: string }) {
    return (
        <header>
            <h3 className="mb-0.5 text-lg font-semibold text-primary">{title}</h3>
            {description && <p className="text-xs text-muted-foreground">{description}</p>}
        </header>
    );
}
