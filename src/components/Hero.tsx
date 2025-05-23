import React from 'react';
import { Shield, MapPin, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
      <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
        <div className="px-6 lg:px-0 lg:pt-4">
          <div className="mx-auto max-w-2xl">
            <div className="max-w-lg">
              <div className="mt-24 sm:mt-32 lg:mt-16">
                <a href="#" className="inline-flex space-x-6">
                  <span className="rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-600/10">
                    New Release
                  </span>
                </a>
              </div>
              <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Your Personal Safety Companion
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                SaferSathi is a revolutionary safety app designed to keep you protected in any situation. With real-time location sharing, emergency alerts, and a network of trusted contacts, you're never alone.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Download Now
                </a>
                <a href="#how-it-works" className="text-sm font-semibold leading-6 text-gray-900">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
          <div className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 md:-mr-20 lg:-mr-36" aria-hidden="true" />
          <div className="shadow-lg md:rounded-3xl">
            <div className="bg-indigo-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
              <div className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36" aria-hidden="true" />
              <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                  <div className="w-screen overflow-hidden rounded-tl-xl bg-gray-900">
                    <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                      <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                        <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                          SaferSathi App
                        </div>
                        <div className="border-r border-gray-600/10 px-4 py-2">Safety Features</div>
                      </div>
                    </div>
                    <div className="px-6 pt-6 pb-14 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
                      <div className="flex flex-col space-y-6">
                        <div className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg">
                          <MapPin className="h-8 w-8 text-indigo-400" />
                          <div>
                            <h3 className="font-semibold">Location Tracking</h3>
                            <p className="text-sm text-gray-300">Real-time location sharing with trusted contacts</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg">
                          <Phone className="h-8 w-8 text-red-400" />
                          <div>
                            <h3 className="font-semibold">Emergency SOS</h3>
                            <p className="text-sm text-gray-300">One-tap emergency alerts with location data</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg">
                          <Shield className="h-8 w-8 text-green-400" />
                          <div>
                            <h3 className="font-semibold">Safety Network</h3>
                            <p className="text-sm text-gray-300">Connect with trusted friends and family</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 md:rounded-3xl" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
    </div>
  );
};

export default Hero;