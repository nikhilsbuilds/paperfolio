import { Facebook, Twitter, Instagram, Youtube, Linkedin, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 relative">
            <div className="flex items-center gap-6">
              {/* Newsletter icon positioned outside on the left */}
              <div className="w-36 h-36 rounded-full flex items-center justify-center flex-shrink-0 relative">
                <Image
                  src="/images/newsletter-icon.png"
                  alt="Newsletter"
                  width={180}
                  height={180}
                  className="object-cover"
                />
              </div>

              {/* White newsletter signup box */}
              <div className="flex-1 bg-white border-4 border-black rounded-3xl py-6 px-8 flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-black">Subscribe to my newsletter</h3>
                </div>

                <div className="relative w-full md:w-auto md:min-w-[480px]">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    className="border-4 border-black rounded-xl px-6 h-16 pr-44 text-lg placeholder:text-gray-500"
                  />
                  <Button className="absolute right-2 top-2 bottom-2 bg-black text-white hover:bg-black/90 rounded-[10px] px-10 text-base font-semibold whitespace-nowrap h-auto">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/footer-logo.jpeg"
                    alt="Paperfolio X Logo"
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
                <span className="text-xl font-bold">Paperfolio X</span>
              </div>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                Lorem ipsum dolor amet consecte adipiscing elit. Lectus mattis nunc.
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-[#2F81F7] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-[#2F81F7] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-[#FF6B7A] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-[#FF6B7A] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-[#FF6B7A] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">Pages</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Single Project
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Utility Pages</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Style Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Start Here
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    404 Not Found
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Password protected
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Licenses
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Changelog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Contact us</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:hello@john.com" className="hover:text-white transition-colors">
                    nikhil@helpinggeeks.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a href="tel:246234-4643" className="hover:text-white transition-colors">
                    +91-9000057810
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>Made by Nikhil - Powered by V0</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
