import { FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function ExperienceSection() {
  const experiences = [
    {
      period: "Jan 2023 - Present",
      title: "Mobile Product Designer",
      description:
        "Vel facilisis volutpat est velit egestas dui. Urna nec cidu praesent semper feugiat. Vulputate ut pharetra sit.",
      icon: "/images/agency.png",
    },
    {
      period: "Jan 2021 - Dec 2022",
      title: "VP of Design",
      description:
        "Vel facilisis volutpat est velit egestas dui. Urna nec cidu praesent semper feugiat. Vulputate ut pharetra sit.",
      icon: "/images/company.png",
    },
    {
      period: "Mar 2020 - Dec 2020",
      title: "Head of Product Design",
      description:
        "Vel facilisis volutpat est velit egestas dui. Urna nec cidu praesent semper feugiat. Vulputate ut pharetra sit.",
      icon: "/images/busines.png",
    },
    {
      period: "Sep 2017 - Feb 2020",
      title: "Web Designer",
      description:
        "Vel facilisis volutpat est velit egestas dui. Urna nec cidu praesent semper feugiat. Vulputate ut pharetra sit.",
      icon: "/images/startup.png",
    },
  ]

  return (
    <section className="bg-black py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div className="text-white pt-8 md:pt-12 md:sticky md:top-12 self-start">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-[1.3]">
              Take a look at my <span className="bg-[#6366F1] text-white px-3 py-1 inline-block">past experience</span>
            </h2>
            <p className="text-gray-400 mb-10 leading-relaxed text-lg">
              Eu pellentesque arcu ornare velit faucibus egestas gravida sed in purus enim molestie gravida imperdiet
              integer.
            </p>
            <Button className="bg-white text-black hover:bg-gray-50 rounded-lg py-[22px] px-[62px] text-lg font-semibold h-auto min-w-[240px]">
              <FileText className="w-5 h-5" />
              See full resume
            </Button>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white border-4 border-black rounded-3xl min-h-[240px]">
                <div className="flex items-center justify-between mb-6 pt-8 px-8">
                  <div className="text-[22px] leading-[34px] font-bold text-[#0B0B0B]">{exp.period}</div>
                  <div className="rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <Image
                      src={exp.icon || "/placeholder.svg"}
                      alt={exp.title}
                      width={48}
                      height={48}
                      className="w-12 h-12 flex-shrink-0 rounded-full"
                    />
                  </div>
                </div>

                <div className="border-t-[3px] border-black mb-6"></div>

                <div className="px-8 pb-8">
                  <h3 className="text-[28px] leading-[40px] font-bold text-[#0B0B0B] mb-3">{exp.title}</h3>
                  <p className="text-[#393939] text-[20px] leading-[32px]">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
