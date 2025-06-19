import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop by category",
  description: "Shop and vibe with the trends",
};

export default function CartLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="py-16 bg-gray-50">
      {children}
    </section>
  );
}
