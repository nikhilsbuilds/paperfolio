import { Pencil } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NewsletterSignup } from "@/components/newsletter-signup"
import Image from "next/image"

export function ArticlesSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">Articles & News</h2>
          <Button
            variant="outline"
            className="border-[3px] border-black rounded-xl px-6 py-6 hover:bg-gray-50 bg-white font-semibold"
          >
            <Pencil className="w-4 h-4 mr-2" />
            Browse all articles
          </Button>
        </div>

        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-6 mb-16">
          {/* Large featured article card */}
          <div className="group bg-white border-[3px] border-black rounded-3xl overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
            {/* Image area with gray background */}
            <div className="bg-[#EDEDED] relative min-h-[320px] m-4 rounded-2xl overflow-hidden">
              <span className="absolute top-4 right-4 inline-block bg-black text-white text-sm font-semibold px-4 py-2 rounded-lg z-10">
                Resources
              </span>
              <Image
                src="/images/article-design-tools.png"
                alt="Design tools illustration"
                fill
                className="object-contain p-6 rounded-2xl transition-transform duration-500 ease-out group-hover:scale-110"
              />
            </div>
            {/* Content area */}
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-6">What is the right design tool to choose in 2023?</h3>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-[#FDB927] border-2 border-black rounded-full overflow-hidden">
                  <Image
                    src="/images/design-mode/63407fbdc2d4ac5270385fd4_home-he.png"
                    alt="John Carter"
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-lg text-[#0B0B0B]">John Carter</div>
                  <div className="text-base text-gray-600">Oct 28, 2022</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Two smaller article cards */}
          <div className="space-y-8">
            {/* First smaller card */}
            <div className="group bg-white border-[3px] border-black rounded-3xl overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
              <div className="flex">
                {/* Image area */}
                <div className="bg-[#EDEDED] min-w-[280px] min-h-[200px] relative m-4 rounded-2xl overflow-hidden">
                  <span className="absolute top-4 right-4 inline-block bg-black text-white text-xs font-semibold px-3 py-1.5 rounded-lg z-10">
                    Articles
                  </span>
                  <Image
                    src="/images/article-font-sizes.png"
                    alt="Font sizes illustration"
                    fill
                    className="object-contain p-4 rounded-2xl transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>
                {/* Content area */}
                <div className="p-10 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">Font sizes in UI design: The complete guide to follow</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Lorem ipsum dolor sit amet dolor consectetur adipiscing elit ectus
                  </p>
                </div>
              </div>
            </div>

            {/* Second smaller card */}
            <div className="group bg-white border-[3px] border-black rounded-3xl overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
              <div className="flex">
                {/* Image area */}
                <div className="bg-[#EDEDED] min-w-[280px] min-h-[200px] relative m-4 rounded-2xl overflow-hidden">
                  <span className="absolute top-4 right-4 inline-block bg-black text-white text-xs font-semibold px-3 py-1.5 rounded-lg z-10">
                    News
                  </span>
                  <Image
                    src="/images/article-exercises.png"
                    alt="Exercises illustration"
                    fill
                    className="object-contain p-4 rounded-2xl transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>
                {/* Content area */}
                <div className="p-10 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">
                    6 practical exercises to learn become a pro UI/UX designer
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Lorem ipsum dolor sit amet dolor consectetur adipiscing elit ectus
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <NewsletterSignup />
      </div>
    </section>
  )
}
