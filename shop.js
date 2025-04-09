import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ShopPage() {
  const producten = [
    {
      naam: "Natuurlijk Glijmiddel",
      beschrijving: "Hydrateert, verzorgt en verhoogt je genot — zonder chemicaliën.",
      afbeelding: "/images/lubricant.png",
      prijs: "€14,95",
    },
    {
      naam: "Sensuele Massageolie",
      beschrijving: "Verwen jezelf of je partner met onze heerlijke, plantaardige olie.",
      afbeelding: "/images/oil.png",
      prijs: "€19,95",
    },
    {
      naam: "Libido Supplementen",
      beschrijving: "Ondersteun je hormonale balans met natuurlijke ingrediënten.",
      afbeelding: "/images/capsules.png",
      prijs: "€24,95",
    },
  ];

  return (
    <div className="min-h-screen px-6 py-20 bg-white text-gray-800 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-12 text-center">Onze Producten</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {producten.map((product, idx) => (
          <Card key={idx}>
            <CardContent className="p-6 text-center">
              <img src={product.afbeelding} alt={product.naam} className="mb-4 rounded-xl w-full h-48 object-cover" />
              <h3 className="text-xl font-semibold mb-2">{product.naam}</h3>
              <p className="mb-2">{product.beschrijving}</p>
              <p className="font-bold text-pink-600 mb-4">{product.prijs}</p>
              <Button>In Winkelmand</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
