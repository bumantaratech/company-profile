export default function Footer() {
  return (
    <footer className="bg-industrial-graphite text-gray-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div>
              <p className="text-white font-semibold leading-tight text-center">
                Bumantara Tech
              </p>
              <p className="text-xs text-center">
                Mechanical • Electrical • HVAC
              </p>
            </div>
          </div>
          <p className="text-xs">
            © {new Date().getFullYear()} Bemantara Tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
