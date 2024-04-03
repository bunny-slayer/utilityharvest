import heroimage from '../../public/heroimage.jpg'
import Images from 'next/image'

export default function Hero() {
  return (
    <div className="bg-white">
      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 lg:w-full lg:max-w-2xl">
            <svg className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative px-6 py-24 sm:py-36 lg:px-8 lg:py-48 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <div className="hidden sm:mb-10 sm:flex"></div>
                <h1 className="text-4xl font-bold text-gray-900 sm:text-6xl">Precision and Impact in Carbon Offsetting</h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">Enhance Your Brand Image With Accurate and Credible Offsets, Rooted in Tangible Agriculture Projects Across Southeast Asia.</p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSeAEvnZpnfl9zjS0UBLevy59Ah9rDEF6QDVkQJjVvBKELUjaQ/viewform?usp=sf_link" className="rounded-md bg-green-600 px-3.5 py-2.5 text-s font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
                    Offset Reliably & Impactfully Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Images className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full" src={heroimage} width={900} height={900} alt="" />
        </div>
      </div>
    </div>
  );
}
