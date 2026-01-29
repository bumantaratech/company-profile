export default function Contact() {
  return (
    <section id="contact" className="bg-gray-50 py-20 text-black">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-24">
        <div className="grid gap-14 md:grid-cols-2 items-start">
          {/* INFO */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Kontak
            </h2>

            <p className="mt-4 max-w-md text-black/60">
              Hubungi kami untuk konsultasi proyek HVAC ducting dan permintaan
              penawaran resmi.
            </p>

            <ul className="mt-8 space-y-4 text-black/60">
              <li>
                <span className="font-semibold text-black">Alamat:</span> Jl.
                Siaga. Pontianak, Kalimatan Barat, Indonesia.
              </li>
              <li>
                <span className="font-semibold text-black">Telepon:</span> +62
                21 1234 5678
              </li>
              <li>
                <span className="font-semibold text-black">Email:</span>{" "}
                bumantaratech@gmail.com
              </li>
            </ul>
          </div>

          {/* FORM */}
          <div>
            <div className="rounded-xl bg-industrial-graphite p-8 shadow-lg">
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                className="grid gap-5"
              >
                <input
                  type="text"
                  placeholder="Nama"
                  className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary-600"
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary-600"
                />

                <input
                  type="tel"
                  placeholder="Telepon"
                  className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary-600"
                />

                <textarea
                  rows={4}
                  placeholder="Pesan"
                  className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary-600"
                />

                <button
                  type="submit"
                  className="
                    mt-2
                    inline-flex
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    px-6
                    py-3
                    text-sm
                    font-semibold
                    text-black
                    transition-colors
                    hover:bg-black
                    hover:text-white
                    active:bg-black
                    active:text-white
                  "
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
