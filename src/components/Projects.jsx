import { useEffect, useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/.netlify/functions/projects")
      .then((res) => {
        if (!res.ok) throw new Error("Failed fetch");
        return res.json();
      })
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <section id="projects" className="bg-gray-50 text-black/50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-black">
            Proyek & Dokumentasi
          </h2>
          <p className="mt-3 text-black/50">
            Beberapa dokumentasi pekerjaan kami di berbagai sektor industri.
          </p>
        </div>

        {loading && (
          <p className="mt-10 text-center text-gray-400">
            Memuat dokumentasi...
          </p>
        )}

        {error && (
          <p className="mt-10 text-center text-red-500">
            Gagal memuat data proyek
          </p>
        )}

        {!loading && !error && (
          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {projects.map((p) => {
              const imageUrl =
                p.Image?.[0]?.thumbnails?.medium?.url ||
                p.Image?.[0]?.url ||
                "";

              return (
                <div
                  key={p.id}
                  className="group relative overflow-hidden rounded-xl border border-gray-300"
                >
                  <div
                    className="aspect-4/3 bg-cover bg-center"
                    style={{ backgroundImage: `url(${imageUrl})` }}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-all">
                    <h3 className="text-white font-semibold">{p.Name}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
