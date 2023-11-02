export default function RootLayout({
  candidates,
  dashboard,
  modal,
}: {
  candidates: React.ReactNode;
  dashboard: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div className="mx-auto lg:w-[1200px]">
      <section className="mt-10 flex flex-col justify-between">
        {candidates}
        {dashboard}
        {modal}
      </section>
    </div>
  );
}
