export default async function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <section>
        <div className="w-full overflow-y-auto flex flex-col flex-grow overflow-x-hidden">
          {children}
        </div>
      </section>
    </>
  );
}
