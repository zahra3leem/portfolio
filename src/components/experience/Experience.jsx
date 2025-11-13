import  logo from "../../assets/logo.png";
import text from "../../assets/text.png";


export default function Experience() {
  return (
    <div>
      <section id="experience" className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-6">
            <h1
              data-aos="fade-up"
              data-aos-delay="300"
              className="sm:text-2xl text-2xl font-bold title-font mb-4 text-gray-900"
            >
              Brief & Experience
            </h1>
          </div>

          {/* Brief Section */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="lg:w-1/2 mx-auto mb-16 p-6 bg-white"
          >
            <p className="text-base leading-relaxed text-gray-700 text-center">
              Frontend developer with expertise in front-end technologies and a
              good understanding of Back-End development, enabling me to
              contribute effectively to Full-Stack projects. Eager to learn and
              apply new technologies quickly, work well in team settings, and
              use my creative and analytical skills to deliver high-quality web
              solutions.
            </p>
          </div>

          {/* Experience Section */}
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="lg:w-3/4 mx-auto bg-white rounded-lg shadow-md p-8"
          >
            <div className="flex flex-col md:flex-row gap-8">
              {/* Left Side - Image */}
              <div className="md:w-1/3">
                <div className="relative">
                  {/* Background behind images - Orange layer */}
                  <div className="bg-orange-500/20 absolute -top-4 -right-4 w-full h-full rounded-lg z-0"></div>
                  {/* Purple layer on top of orange */}
                  <div className="bg-purple-200 absolute -top-2 -right-2 w-full h-full rounded-lg z-[5]"></div>
                  {/* Images container */}
                  <div className="relative z-10 flex flex-col gap-4 items-center p-4">
                    <img
                      src={logo}
                      alt="Logo"
                      className="w-3/4 h-auto object-contain rounded-lg"
                    />
                    <img
                      src={text}
                      alt="Text"
                      className="w-3/4 h-auto object-contain rounded-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="md:w-2/3">
                <div className="space-y-8">
                  {/* 2024 Section */}
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900">
                      Frontend Developer at{" "}
                      <span className="text-purple-500">
                        <a href="https://revues.ca" target="_blank" rel="noopener noreferrer">
                          Revues.ca
                        </a>
                      </span>
                    </h3>
                    <p className="text-sm text-purple-500 text-gray-900 font-bold mb-3">
                      Working on this project and developing it from October 2024 until now.
                    </p>
                    <div className="text-base text-gray-700 ">
                      <ul className="list-disc pl-6 space-y-2">                       
                        <li>
                          Built end-to-end SaaS platform for online reputation
                          management using AI-powered review responses (GPT-3.5)
                          and multi-channel analytics.
                        </li>
                        <li>
                          Engineered dynamic dashboards with real-time sentiment
                          analysis and performance tracking using Next.js 14 App
                          Router + React Server Components.
                        </li>
                        <li>
                          Implemented secure onboarding flow with JWT auth,
                          role-based access (CASL), and Google Business API
                          integration.
                        </li>
                        <li>
                          Achieved 92% user retention through animated UI
                          components (Framer Motion) and localStorage sync.
                        </li>
                        <li>
                          Reduced client response time by 40% via automated
                          review categorization and AI draft generation
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-gray-900">
                      Tech Stack:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Next.js 14",
                        "TypeScript",
                        "Tailwind",
                        "Shadcn UI",
                        "Clerk",
                        "Google Business API",
                        "OpenAI GPT-3.5",
                        "CASL",
                        "Zod",
                        "React Query",
                        "PostgreSQL",
                      ].map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
