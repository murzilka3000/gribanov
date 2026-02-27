// components/TypographyProvider.tsx
"use client";

import { useTypography } from "@/hooks/useTypography";

export const TypographyProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  useTypography();
  return <>{children}</>;
};
