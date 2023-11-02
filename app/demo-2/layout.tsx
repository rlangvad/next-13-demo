export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto lg:w-[1200px]">
      <section className="mt-10 flex flex-col justify-between">
        {children}
      </section>
    </div>
  );
}
