const navigation = [
  { name: "Our Solution", href: "#featuresection" },
  { name: "Why us", href: "#whyus" },
  { name: "Q&A", href: "#faq" },
];

import Images from 'next/image' 
import FullLogo from '../../public/fulllogowhite.png' 

export default function Example() {
  return (
    <div className="">
    <header className="bg-green-600">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-green-500 py-6 lg:border-none">
          <div className="flex items-center">
            <a href="#">
              <span className="sr-only">Utility Harvest</span>
              <Images 
                  alt="UtilityHarvest Logo" 
                  className="h-12 w-auto" 
                  src={FullLogo} 
                /> 
            </a>
            <div className="ml-10 hidden space-x-8 lg:block">
              {navigation.map((link) => (
                <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-green-50">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="ml-10 space-x-4">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeAEvnZpnfl9zjS0UBLevy59Ah9rDEF6QDVkQJjVvBKELUjaQ/viewform?usp=sf_link" className="inline-block rounded-md border border-transparent bg-white px-4 py-2 text-base font-medium text-green-600 hover:bg-green-50">
              Inquire Now
            </a>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 py-4 lg:hidden">
          {navigation.map((link) => (
            <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-green-50">
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
    </div>
  );
}
