export default function About() {
  return (
    <section id="about" className="bg-gray-50 py-20 text-black">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-24">
        <div className="grid gap-14 md:grid-cols-2 items-center">
          {/* CONTENT */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Profil Perusahaan
            </h2>

            <p className="mt-5 max-w-xl text-base text-black/60">
              Kami adalah kontraktor profesional di bidang Mechanical,
              Electrical, dan HVAC dengan spesialisasi ducting. Dengan
              pengalaman proyek industri dan komersial, kami menghadirkan solusi
              yang aman, efisien, dan sesuai standar.
            </p>

            {/* VISION & MISSION */}
            <div className="mt-12 space-y-10">
              {/* VISI */}
              <div>
                <h3 className="text-xl font-semibold">Visi</h3>
                <p className="mt-3 text-black/60 leading-relaxed">
                  Menjadi perusahaan HVAC Ducting terdepan dan terpercaya di
                  Indonesia yang menghadirkan solusi sistem tata udara efisien,
                  berkualitas tinggi, ramah lingkungan, serta berstandar
                  nasional dan internasional.
                </p>
              </div>

              {/* MISI */}
              <div>
                <h3 className="text-xl font-semibold">Misi</h3>
                <ol className="mt-4 list-decimal space-y-3 pl-5 text-black/60 leading-relaxed">
                  <li>
                    Menyediakan jasa perencanaan, fabrikasi, instalasi, dan
                    perawatan HVAC ducting dengan standar mutu tinggi dan
                    ketepatan waktu.
                  </li>
                  <li>
                    Mengutamakan kepuasan pelanggan melalui pelayanan
                    profesional, tepat waktu, dan responsif.
                  </li>
                  <li>
                    Menggunakan material berkualitas dan teknologi terbaru untuk
                    memastikan kinerja sistem yang optimal dan tahan lama.
                  </li>
                  <li>
                    Mengembangkan sumber daya manusia yang kompeten,
                    berintegritas, dan berpengalaman di bidang HVAC.
                  </li>
                </ol>
              </div>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div
              className="
                relative
                aspect-square
                overflow-hidden
                rounded-xl
                border
                border-black/10
                shadow-lg
                bg-[url('/img/about.webp')]
                bg-cover
                bg-center
              "
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-linear-to-tr from-black/40 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
