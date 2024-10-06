import Layout from "@/layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout title="Home" description="Home page description">
      <h1>Home Page</h1>
      <Link href="/about" className="text-blue-800 underline">
        About Page
      </Link>
    </Layout>
  );
}
