import React from 'react';
import { ChevronRight } from 'lucide-react';

const steps = [
  {
    id: '01',
    name: 'Download & Install',
    description: 'Download SaferSathi from your app store and create an account with basic information.',
  },
  {
    id: '02',
    name: 'Add Trusted Contacts',
    description: 'Build your safety network by adding trusted friends and family members who can respond in emergencies.',
  },
  {
    id: '03',
    name: 'Set Up Safety Features',
    description: 'Configure your safety preferences, emergency contacts, and automatic check-in schedules.',
  },
  {
    id: '04',
    name: 'Stay Protected',
    description: 'Carry on with your daily activities knowing that help is just a tap away whenever you need it.',
  },
];

const HowItWorks: React.FC = () => {
  return (
    <div id="how-it-works" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Simple Setup</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How SaferSathi Works
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Getting started with SaferSathi is quick and easy. Follow these simple steps to ensure your safety is always prioritized.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:max-w-none">
          <div className="grid grid-cols-1 gap-y-8 gap-x-6 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.id} className="relative flex flex-col bg-white p-8 shadow-sm rounded-2xl">
                <div className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-white">
                    {step.id}
                  </div>
                  {step.name}
                </div>
                <p className="mt-4 text-base leading-7 text-gray-600">{step.description}</p>
                {step.id !== '04' && (
                  <div className="absolute -right-3 top-1/2 hidden transform lg:block">
                    <ChevronRight className="h-6 w-6 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-16 flex justify-center">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-5 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Download SaferSathi Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;