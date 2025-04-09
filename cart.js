import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    { naam: "Natuurlijk Glijmiddel", prijs: 14.95, aantal: 1 },
    { naam: "Massageolie", prijs: 19.95, aantal: 2 },
  ]);

  const totaal = cartItems.reduce((acc, item) => acc + item.prijs * item.aantal, 0);

  return (
    <div className="min-h-screen px-6 py-20 bg-white text-gray-800 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Jouw Winkelmand</h1>
      {cartItems.length === 0 ? (
        <p>Je winkelmand is leeg.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item, idx) => (
            <div key={idx} className="flex justify-between items-center border-b pb-4">
              <div>
                <h2 className="text-xl font-semibold">{item.naam}</h2>
                <p className="text-sm text-gray-500">Aantal: {item.aantal}</p>
              </div>
              <p className="font-semibold">€{(item.prijs * item.aantal).toFixed(2)}</p>
            </div>
          ))}
          <div className="text-right font-bold text-xl mt-6">
            Totaal: €{totaal.toFixed(2)}
          </div>
          <div className="text-right mt-4">
            <Button className="px-6 py-3 text-lg">Ga naar Afrekenen</Button>
          </div>
        </div>
      )}
    </div>
  );
}
