export const metadata = {
  title: "Themeing with Shadcn",
  description:
    "This is a project on themeing wrapped in a Tailwind Plugin/Preset",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
