import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";

export default function HomePage() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col justify-between">
      <nav className="bg-white border-b shadow-sm px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <Link href="/">
          <span className="text-2xl font-bold text-pink-600">Viva Libido</span>
        </Link>
        <div className="flex gap-6 text-lg">
          <Link href="/about" className="hover:text-pink-600">Over</Link>
          <Link href="/shop" className="hover:text-pink-600">Shop</Link>
          <Link href="/blog" className="hover:text-pink-600">Blog</Link>
          <Link href="/cart" className="hover:text-pink-600">🛒</Link>
        </div>
      </nav>

      <section className="flex flex-col items-center justify-center text-center px-6 py-20 bg-pink-100">
        <h1 className="text-5xl font-bold max-w-3xl mb-6">Ervaar Intimiteit Opnieuw met Viva Libido</h1>
        <p className="text-xl max-w-xl mb-8">Natuurlijke producten die jouw seksuele gezondheid ondersteunen — veilig, effectief en met liefde samengesteld.</p>
        <div className="flex gap-4">
          <Button className="text-lg px-6 py-3">Shop Nu</Button>
          <Button variant="outline" className="text-lg px-6 py-3">Meer Informatie</Button>
        </div>
      </section>

      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Onze Bestsellers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <img src="/images/lubricant.png" alt="Lichaamsvriendelijke glijmiddel" className="mb-4 rounded-xl" />
              <h3 className="text-xl font-semibold mb-2">Natuurlijk Glijmiddel</h3>
              <p>Hydrateert, verzorgt en verhoogt je genot — zonder chemicaliën.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <img src="/images/oil.png" alt="Massageolie" className="mb-4 rounded-xl" />
              <h3 className="text-xl font-semibold mb-2">Sensuele Massageolie</h3>
              <p>Verwen jezelf of je partner met onze heerlijke, plantaardige olie.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <img src="/images/capsules.png" alt="Supplementen libido" className="mb-4 rounded-xl" />
              <h3 className="text-xl font-semibold mb-2">Libido Supplementen</h3>
              <p>Ondersteun je hormonale balans met natuurlijke ingrediënten.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-pink-50 py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Blijf Op De Hoogte</h2>
          <p className="mb-6">Schrijf je in voor onze nieuwsbrief en ontvang 10% korting op je eerste bestelling.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Jouw e-mailadres"
              className="px-4 py-2 rounded-lg border w-full sm:w-auto"
            />
            <Button className="px-6 py-2">Aanmelden</Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Ontdek Meer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">Over Viva Libido</h3>
              <p className="mb-4">Leer hoe wij natuurlijke intimiteitsproducten ontwikkelen met zorg en wetenschap.</p>
              <Link href="/about"><Button>Lees Meer</Button></Link>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">Onze Shop</h3>
              <p className="mb-4">Bekijk ons volledige assortiment met producten die jouw welzijn ondersteunen.</p>
              <Link href="/shop"><Button>Bekijk Shop</Button></Link>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">Blog & Tips</h3>
              <p className="mb-4">Inspiratie, advies en kennis over intimiteit en zelfzorg.</p>
              <Link href="/blog"><Button>Lees Artikelen</Button></Link>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-gray-100 text-gray-600 text-sm text-center py-6 mt-12 border-t">
        <p>&copy; {new Date().getFullYear()} Viva Libido. Alle rechten voorbehouden.</p>
      </footer>
    </div>
  );
}
