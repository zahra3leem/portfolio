import ff from "../../assets/ff.png";
import fff from "../../assets/fff.png";
import ffff from "../../assets/ffff.png";

export default function Skills() {
  return (
    <div>
      <main id="skills" className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-6">
            <h1
              data-aos="fade-up"
              data-aos-delay="300"
              className="sm:text-2xl text-2xl font-bold title-font mb-4 text-gray-900"
            >
              INTERNSHIPS & EDUCATION
            </h1>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">

          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1"
          >

          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0"
          >
            <img
              src={ff}
              alt=""
              className="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full"
              loading="lazy"
            />
            <img
              src={fff}
              alt=""
              className="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32"
              loading="lazy"
            />
            <img
              src={ffff}
              alt=""
              className="hidden w-full h-52  rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32"
              loading="lazy"
            />
          </div>
          <div data-aos="fade-up" data-aos-delay="300" className="mt-4 col-start-1 row-start-3 space-y-6">
            {/* ITI Section */}
            <div className="flex flex-col p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">Information Technology Institute (ITI)</h2>
              <p className="text-gray-600 text-sm mb-1">Intensive training program</p>
              <p className="text-gray-700 text-sm font-medium">Track: MEARN stack development</p>
              <p className="text-gray-500 text-xs">May 2024 – September 2024</p>
            </div>

            {/* Route Section */}
            <div className="flex flex-col p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">Route</h2>
              <p className="text-gray-600 text-sm">Online Diploma In frontend development</p>
              <p className="text-gray-500 text-xs">January 2024 – April 2024</p>
            </div>

            {/* University Section */}
            <div className="flex flex-col p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">Faculty of Commerce, Mansoura University</h2>
              <p className="text-gray-600 text-sm">Accounting Department</p>
              <p className="text-gray-500 text-xs">September 2016 – August 2020</p>
            </div>
          </div>

          </div>
        </div>
      </main>
    </div>
  );
}
