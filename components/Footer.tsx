import Link from "next/link";

export default function Footer() {
  return (
    <footer className="sm:px-8 sm:py-20 max-w-7xl border-neutral-800 border-t mt-24 mr-auto ml-auto pt-14 pr-6 pb-14 pl-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div>
          <span className="text-lg font-semibold tracking-tight text-white font-geist">
            Moneo
          </span>
          <p className="mt-4 text-sm text-neutral-400 font-geist">
            Smart budget assistant for everyone.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-white font-geist mb-4">
            Product
          </h3>
          <nav className="space-y-3">
            <Link
              href="#"
              className="block hover:text-white text-sm text-neutral-400 font-geist"
            >
              Features
            </Link>
            <Link
              href="#"
              className="block text-sm text-neutral-400 hover:text-white font-geist"
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="block text-neutral-400 hover:text-white text-sm font-geist"
            >
              Security
            </Link>
          </nav>
        </div>
        <div>
          <h3 className="text-sm font-medium text-white mb-4 font-geist">
            Company
          </h3>
          <nav className="space-y-3">
            <Link
              href="#"
              className="block text-sm text-neutral-400 hover:text-white font-geist"
            >
              About
            </Link>
            <Link
              href="#"
              className="block text-sm text-neutral-400 hover:text-white font-geist"
            >
              Blog
            </Link>
            <Link
              href="#"
              className="block text-sm text-neutral-400 hover:text-white font-geist"
            >
              Careers
            </Link>
          </nav>
        </div>
        <div>
          <h3 className="text-sm font-medium text-white mb-4 font-geist">
            Support
          </h3>
          <nav className="space-y-3">
            <Link
              href="#"
              className="block text-sm text-neutral-400 hover:text-white font-geist"
            >
              Help Center
            </Link>
            <Link
              href="#"
              className="block text-sm text-neutral-400 hover:text-white font-geist"
            >
              Contact
            </Link>
            <Link
              href="#"
              className="block text-sm text-neutral-400 hover:text-white font-geist"
            >
              Privacy
            </Link>
          </nav>
        </div>
      </div>
      <div className="pt-8 border-t border-neutral-800">
        <p className="text-sm text-neutral-400 font-geist">
          © 2025 Moneo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

