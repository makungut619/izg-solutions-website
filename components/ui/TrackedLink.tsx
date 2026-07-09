"use client";

import Link from "next/link";

interface TrackedLinkProps {
  href: string;
  event: string;
  properties: Record<string, string>;
  className?: string;
  children: React.ReactNode;
}

export default function TrackedLink({
  href,
  event,
  properties,
  className,
  children,
}: TrackedLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => window.izg?.track(event, properties)}
    >
      {children}
    </Link>
  );
}
