import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome to Otterworld!</h1>
      <Link href={`/otters`} className="text-blue-800">
        Visit our otters
      </Link>
    </main>
  );
}
