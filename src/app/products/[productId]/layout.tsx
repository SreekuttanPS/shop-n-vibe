import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Does it look good?",
  description: "Shop and vibe with the trends",
};

export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
}
