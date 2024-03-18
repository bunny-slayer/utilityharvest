import { BoltIcon, ChatBubbleBottomCenterTextIcon, EnvelopeIcon, GlobeAltIcon, ScaleIcon } from "@heroicons/react/24/outline";

import emissions from '../../public/emissions.jpg'
import farmer from '../../public/farmers.jpg'
import Images from 'next/image'

const transferFeatures = [
  {
    id: 1,
    name: "Carbon offset while promoting local agriculture",
    description: "We acquire our carbon credits from encouraging South-East Asian farmers in practices that are sustainable and eco-friendly. This not only helps in reducing carbon emissions but also supports local agricultural communities.",
    icon: GlobeAltIcon,
  },
  {
    id: 2,
    name: "Reliable and tracable with marketable value",
    description: "Using the latest DMRV technologies, we ensure the most tracable and transparent credit of carbon offsetting.",
    icon: ScaleIcon,
  },
];
const communicationFeatures = [
  {
    id: 1,
    name: "Gain extra income from carbon credits",
    description: "Carbon credit sales provide you with extra income to support your farming activities and improve your livelihood.",
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    id: 2,
    name: "Improve local communities and the environment long-term through sustainable practices",
    description: "Adaptation of sustainable practices not only helps in reducing carbon emissions but also supports local agricultural communities.",
    icon: EnvelopeIcon,
  },
];

export default function Features() {
  return (
    <div id="featuresection" className="overflow-hidden bg-gray-50 py-16 lg:py-24">
      <div className="relative mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8">
        <svg className="absolute left-full hidden -translate-x-1/2 -translate-y-1/4 transform lg:block" width={404} height={784} fill="none" viewBox="0 0 404 784" aria-hidden="true">
          <defs>
            <pattern id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7" x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={784} fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
        </svg>

        <div className="relative">
          <h2 className="text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">Our Unique Win-Win Approach to Carbon Offsetting</h2>
          <p className="mx-auto mt-4 max-w-4xl text-center text-xl text-gray-500">UtilityHarvest collaborates with Southeast Asian farmers to produce highly accurate and reliable carbon credits. Our mission is to enable corporations to effectively counterbalance their Scope 3 emissions, turning environmental responsibility into a tangible asset.</p>
        </div>

        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
          <div className="relative">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Addressing Corporate Emissions</h3>
            <p className="mt-3 text-lg text-gray-500">We harness advanced verification techniques to ensure each carbon credit reflects real, measurable environmental benefits.</p>

            <dl className="mt-10 space-y-10">
              {transferFeatures.map((item) => (
                <div key={item.id} className="relative">
                  <dt>
                    <div className="absolute flex h-12 w-12 items-center justify-center rounded-xl bg-green-500 text-white">
                      <item.icon className="h-8 w-8" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg font-medium leading-6 text-gray-900">{item.name}</p>
                  </dt>
                  <dd className="ml-16 mt-2 text-base text-gray-500">{item.description}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative -mx-4 mt-10 lg:mt-0" aria-hidden="true">
            <svg className="absolute left-1/2 -translate-x-1/2 translate-y-16 transform lg:hidden" width={784} height={404} fill="none" viewBox="0 0 784 404">
              <defs>
                <pattern id="ca9667ae-9f92-4be7-abcb-9e3d727f2941" x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={784} height={404} fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)" />
            </svg>
            <Images className="relative mx-auto rounded-md" src={emissions} width={500} height={500} alt="" />
          </div>
        </div>

        <svg className="absolute right-full hidden translate-x-1/2 translate-y-12 transform lg:block" width={404} height={784} fill="none" viewBox="0 0 404 784" aria-hidden="true">
          <defs>
            <pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={784} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
        </svg>

        <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center lg:gap-8">
            <div className="lg:col-start-2">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Elevating Farmer Sustainability</h3>
              <p className="mt-3 text-lg text-gray-500">Our partnership with Southeast Asian farmers not only contributes to global decarbonization but also supports local agricultural communities.</p>

              <dl className="mt-10 space-y-10">
                {communicationFeatures.map((item) => (
                  <div key={item.id} className="relative">
                    <dt>
                      <div className="absolute flex h-12 w-12 items-center justify-center rounded-xl bg-green-500 text-white">
                        <item.icon className="h-8 w-8" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg font-medium leading-6 text-gray-900">{item.name}</p>
                    </dt>
                    <dd className="ml-16 mt-2 text-base text-gray-500">{item.description}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative -mx-4 mt-10 lg:col-start-1 lg:mt-0">
              <svg className="absolute left-1/2 -translate-x-1/2 translate-y-16 transform lg:hidden" width={784} height={404} fill="none" viewBox="0 0 784 404" aria-hidden="true">
                <defs>
                  <pattern id="e80155a9-dfde-425a-b5ea-1f6fadd20131" x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={784} height={404} fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)" />
              </svg>
              <Images className="relative mx-auto rounded-md" src={farmer} width={500} height={500} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
