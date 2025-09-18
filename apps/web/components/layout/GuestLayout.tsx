import GuestNavbar from "../container/GuestNavbar";

export default function GuestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <GuestNavbar />
      <main className="flex-1 min-h-screen">{children}</main>
      <footer className="text-muted-foreground dark:text-muted-foreground-dark mt-10 flex min-h-16 border-t-2 border-gray-200 p-4 dark:border-gray-700">
        <p className="w-full text-center">
          &copy; {new Date().getFullYear()}. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
