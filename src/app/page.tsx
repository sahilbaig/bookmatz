import { Featured } from "@/components/ui/homeCarousel";
export default function HomePage() {
  return (
    <main className="min-h-screen px-4 py-10 md:px-12 lg:px-24">
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Featured Books</h2>
        <Featured />
      </section>
    </main>
  );
}
