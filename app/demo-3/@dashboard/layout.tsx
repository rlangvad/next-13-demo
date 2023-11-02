export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="mt-14 flex flex-col justify-between">
      <h2>Dashboard</h2>
      {children}
    </section>
  );
}
