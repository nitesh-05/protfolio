const projects = [
  { title: "Ecommerce SaaS", description: "Full stack ecommerce platform" },
  { title: "Cloud Kitchen POS", description: "POS system for restaurants" },
  { title: "Stock Market App", description: "Stock trading and prediction app" },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="p-6 bg-white rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-3">{p.title}</h3>
              <p className="text-gray-600">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}