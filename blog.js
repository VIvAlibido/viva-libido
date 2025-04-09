export default function BlogPage() {
  const blogs = [
    {
      titel: "5 Tips voor Meer Intimiteit",
      intro: "Ontdek eenvoudige manieren om de connectie met je partner te verdiepen, zowel emotioneel als lichamelijk.",
      link: "#",
    },
    {
      titel: "Waarom Natuurlijke Ingrediënten Werken",
      intro: "We leggen uit waarom we kiezen voor plantaardige formules en hoe deze bijdragen aan je welzijn.",
      link: "#",
    },
    {
      titel: "Zelfzorg en Seksuele Gezondheid",
      intro: "Leer hoe je met bewuste zelfzorg je libido en zelfvertrouwen kunt versterken.",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen px-6 py-20 bg-white text-gray-800 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-12 text-center">Blog & Tips</h1>
      <div className="space-y-8">
        {blogs.map((blog, index) => (
          <div key={index} className="border-b pb-6">
            <h2 className="text-2xl font-semibold mb-2">{blog.titel}</h2>
            <p className="mb-2">{blog.intro}</p>
            <a href={blog.link} className="text-pink-600 font-medium hover:underline">Lees verder →</a>
          </div>
        ))}
      </div>
    </div>
  );
}
