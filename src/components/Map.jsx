export default function Map() {
  return (
    <section className="bg-gray-50 text-black/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="aspect-video w-full overflow-hidden rounded-xl border border-white/10 shadow-card">
          <iframe
            title="Lokasi Kantor"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4085431.595891383!2d108.46969947025376!3d-0.4783135206799439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e0518178cebfebb%3A0xcd5ceced4c2148a0!2sKalimantan%20Barat!5e0!3m2!1sid!2sid!4v1769759498652!5m2!1sid!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full"
          />
        </div>
      </div>
    </section>
  );
}
