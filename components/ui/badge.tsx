import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-xl border bg-muted px-3 py-1 text-xs text-muted-foreground",
        className
      )}
      {...props}
    />
  );
}
