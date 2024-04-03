import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "Q1: How does UtilityHarvest leverage technology to enhance the value of carbon credits?",
    answer:
      "UtilityHarvest employs DMRV and machine learning to accurately value carbon offsets. This technology enables precise verification of sustainable farming practices, ensuring the credibility and impact of carbon credits.",
  },
  {
    question:"Q2: What makes UtilityHarvest's approach to carbon credits unique?",
    answer:"UtilityHarvest focuses on enabling access to carbon markets for smallholder farmers, promoting sustainable farming through incentivization. This approach not only supports environmental goals but also improves farmers' livelihoods by providing an additional revenue stream.",
  },
  {
    question:"Q3: Who are UtilityHarvest's primary customers, and why are they interested in carbon credits?",
    answer:"UtilityHarvest targets carbon-negative companies troubled with high Scope 3 emissions seeking credible carbon offsets. We aim to serve those particularly interested in high-quality, reputable carbon credits to meet their sustainability objectives and avoid greenwashing accusations.",
  },
  {
    question:"Q4: How does UtilityHarvest ensure the quality and impact of its carbon credits?",
    answer:"Through rigorous preparation of sustainable projects and partnerships with carbon credit certification agencies and environmental NGOs, UtilityHarvest guarantees that its carbon credits represent real, measurable environmental benefits.",
  },
  {
    question:"Q5: Can you discuss the importance of transparency and third-party validation in UtilityHarvest's operations?",
    answer:"Transparency and reliable monitoring, reporting, and verification (MRV) are central to UtilityHarvest's operations as our customers need to defend their purchase decisions against heightened scrutiny from stakeholders. Third-party validation further enhances the credibility of the carbon credits offered.",
  },
  {
    question:"Q6: What challenges do farmers face in adopting sustainable farming practices, according to UtilityHarvest's research?",
    answer:"Farmers deal with issues like nutrient-depleted soil and financial instability, which are exacerbated by conventional farming practices. UtilityHarvest's model addresses these challenges by promoting regenerative farming, diversification, and sustainable practices, thereby improving soil health and farmers' financial resilience.",
  }
]

export default function Example() {
  return (
    <div className="bg-white" id='faq'>
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-32 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
          <dl className="mt-8 space-y-5 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
