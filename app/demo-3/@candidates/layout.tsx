export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <section className="mt-14 flex flex-col justify-between">
      <h2>People</h2>
      {children}
      {modal}
    </section>
  );
}
