export default function Hero() {
  return (
    <section
      className="
        relative
        min-h-[92vh]
        bg-[url('/img/hero.webp')]
        bg-cover
        bg-center
        flex
        items-center
      "
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 w-full px-5 sm:px-8 lg:px-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-white">
            HVAC Ducting Efisien untuk Bangunan yang Lebih Nyaman & Hemat Energi
          </h1>

          <p className="mt-6 text-base sm:text-lg text-white/70">
            Kami membantu Anda menciptakan sistem sirkulasi udara yang optimal
            melalui solusi HVAC ducting yang presisi, aman, dan sesuai dengan
            kebutuhan bangunan modern.
          </p>

          <div className="mt-10 flex justify-center">
            <a
              href="https://wa.me/6281387602244"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-industrial-graphite
                px-8
                py-4
                text-sm
                font-semibold
                text-white
                shadow-lg
                transition
                duration-200
                hover:bg-white
                hover:text-black
                active:bg-black
                active:text-white
              "
            >
              Konsultasi Sekarang
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
