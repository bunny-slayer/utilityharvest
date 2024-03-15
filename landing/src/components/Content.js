import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from "@heroicons/react/20/solid";

export default function Content() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
            <img className="absolute inset-0 h-full w-full bg-gray-50 object-cover" src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=2560&h=3413&&q=80" alt="" />
          </div>
        </div>
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
            <p className="text-base font-semibold leading-7 text-green-600">Utalizing untapped value</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Why Utility Harvest?</h1>
            <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
              <p>At UtilityHarvest, our dedication to precision in carbon offsetting sets us apart. Through meticulous verification processes and strategic partnerships with Southeast Asian farmers, we guarantee reliable carbon credits that deliver tangible environmental benefits.</p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-green-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Precision.</strong> We use meticulously verified carbon credits through DMRV technologies to ensure the most tracable and transparent credit of carbon offsetting.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-green-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Reliability.</strong> Consistent quality and impact. We deliver benefits throughout all harvesting seasons and conditions through our diverse portfolio of projects.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon className="mt-1 h-5 w-5 flex-none text-green-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Sustainability.</strong> Support for eco-friendly farming practices. We work with local farmers to ensure that our projects are also sustainable and beneficial to the local community.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon className="mt-1 h-5 w-5 flex-none text-green-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Responsibility.</strong> Direct contribution to your corporate ESG goals. We provide a direct and transparent way to contribute to your corporate ESG goals.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
