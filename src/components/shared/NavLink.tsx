import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type NavLinkProps = ComponentProps<typeof Link> & {
  className?: string;
};

export function NavLink({ className, ...props }: NavLinkProps) {
  return <Link className={cn(className)} {...props} />;
}

