import { Toaster as Sonner, type ToasterProps } from "sonner";

import { cn } from "@/lib/utils";

const Toaster = ({ className, ...props }: ToasterProps) => (
  <Sonner className={cn("toaster group", className)} toastOptions={{ classNames: { toast: "group toast" } }} {...props} />
);

export { Toaster };