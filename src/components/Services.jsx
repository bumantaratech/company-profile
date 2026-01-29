import { services } from "../data/services";

const icons = {
  wind: (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M3 12h9a4 4 0 100-8 3 3 0 013 3" />
      <path d="M3 18h13a4 4 0 110 8 3 3 0 003-3" />
    </svg>
  ),
  cable: (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M7 7h10v10H7z" />
      <path d="M3 3v4M21 3v4M3 17v4M21 17v4" />
    </svg>
  ),
  cpu: (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <path d="M9 9h6v6H9z" />
    </svg>
  ),
};

export default function Services() {
  return (
    <section id="services" className="bg-gray-50 text-black/50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-black">Layanan Kami</h2>
          <p className="mt-3 text-black/50">
            Solusi terintegrasi untuk kebutuhan Mechanical, Electrical, dan HVAC
            Anda.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.id}
              className="group rounded-xl border border-white/10 bg-gray-100 p-6 shadow-card hover:-translate-y-1 hover:shadow-xl transition-transform duration-300 ease-out"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-industrial-graphite text-white shadow transition-colors">
                {icons[s.icon]}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-black">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-black/50">{s.description}</p>
              <div className="mt-4 inline-flex items-center text-primary-300 group-hover:text-primary-200 transition-colors">
                Pelajari lebih lanjut
                <svg
                  className="ml-1 h-4 w-4 transform transition-transform duration-200 group-hover:translate-x-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
