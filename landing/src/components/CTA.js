import Images from "next/image";
import SmallLogo from "../../public/smalllogo.png";

export default function Calltoaction() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="overflow-hidden rounded-lg bg-green-700 shadow-xl lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="px-6 pb-12 pt-10 sm:px-16 sm:pt-16 lg:py-16 lg:pr-0 xl:px-15 xl:py-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                <span className="block">Ready to make a measurable difference?</span>
              </h2>
              <div className="mt-4 text-lg leading-6 text-green-200">
                <p>Contact UtilityHarvest to explore how our carbon credits can align with your sustainability objectives.</p>
              </div>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSeAEvnZpnfl9zjS0UBLevy59Ah9rDEF6QDVkQJjVvBKELUjaQ/viewform?usp=sf_link" className="mt-8 inline-flex items-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-green-600 shadow hover:bg-green-50">
                Inquire Now
              </a>
            </div>
          </div>
          <div className="aspect-h-3 aspect-w-5 -mt-6 md:aspect-h-1 md:aspect-w-2">
            <Images className="translate-x-6 translate-y-6 transform rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20" src={SmallLogo} width={500} height={500} alt="App screenshot" />
          </div>
        </div>
      </div>
    </div>
  );
}
