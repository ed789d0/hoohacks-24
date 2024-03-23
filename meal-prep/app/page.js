import Image from "next/image";
import Nav from "@/components/Nav";
export default function Home() {
  return (
    <>
    <Nav /><main className="m-5">
      <h1 className="text-4xl font-extrabold m-5">👋 Welcome to Mealr</h1>
      <p className="text-lg m-5">Your meal-planning companion.</p>
      <a className="m-5 mt-0 btn bg-black text-white hover:bg-gray-800 py-2 px-4 rounded transition-colors">Get started 🡢</a>
    </main>
    </>
  );
}
