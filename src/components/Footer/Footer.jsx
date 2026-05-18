import { PawPrint } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { FaFacebookSquare, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
             <footer className="bg-[#8B5CF6] text-white pt-20 pb-10 mt-10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center">
                  <PawPrint className="text-[#8B5CF6]" />
                </div>

                <h2 className="text-3xl font-bold">
                  Pet Blossom
                </h2>
              </div>

              <p className="mt-5 text-purple-100 leading-relaxed">
                Helping pets find loving homes and creating
                beautiful memories for families.
              </p>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-xl font-bold mb-5">
                Quick Links
              </h3>

              <div className="flex flex-col gap-3 text-purple-100">
                <Link href="/">Home</Link>
                <Link href="/pets">All Pets</Link>
                <Link href="/stories">
                  Success Stories
                </Link>
                <Link href="/contact">Contact</Link>
              </div>
            </div>

            {/* Help */}
            <div>
              <h3 className="text-xl font-bold mb-5">
                Support
              </h3>

              <div className="flex flex-col gap-3 text-purple-100">
                <Link href="/">FAQ</Link>
                <Link href="/">Privacy Policy</Link>
                <Link href="/">Terms & Conditions</Link>
                <Link href="/">Help Center</Link>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xl font-bold mb-5">
                Contact
              </h3>

              <div className="space-y-3 text-purple-100">
                <p>Email: support@petblossom.com</p>
                <p>Phone: +880 1234-567890</p>
                <p>Location: Bangladesh</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mt-5 mb-3">
                  Follow Us
                </h3>

                <div className="flex items-center gap-4">
                  <Link href="/" className="hover:text-white transition">
                    <FaFacebookSquare />
                  </Link>
                  <Link href="/" className="hover:text-white transition">
                    <FaTwitter />
                  </Link>
                  <Link href="/" className="hover:text-white transition">
                    <FaInstagram />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-purple-400 mt-14 pt-6 text-center text-purple-100">
            © 2026 Pet Blossom. All rights reserved.
          </div>
        </div>
      </footer>

    );
};

export default Footer;