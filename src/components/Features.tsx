import React from 'react';
import { MapPin, Bell, Users, MessageSquare, Shield, Phone } from 'lucide-react';

const features = [
  {
    name: 'Real-time Location Sharing',
    description:
      'Share your location with trusted contacts in real-time, allowing them to track your movements during critical situations.',
    icon: MapPin,
  },
  {
    name: 'Emergency Alerts',
    description:
      'Send instant SOS alerts with your location to emergency contacts with just one tap in dangerous situations.',
    icon: Bell,
  },
  {
    name: 'Trusted Contacts Network',
    description:
      'Build a network of trusted friends and family who can respond quickly in case of emergencies.',
    icon: Users,
  },
  {
    name: 'Check-in System',
    description:
      'Set up scheduled check-ins that automatically alert your contacts if you miss one, ensuring your safety is monitored.',
    icon: MessageSquare,
  },
  {
    name: 'Safe Routes',
    description:
      'Get recommendations for safer routes when traveling, especially at night or in unfamiliar areas.',
    icon: Shield,
  },
  {
    name: 'One-Touch Emergency Call',
    description:
      'Quickly call emergency services with a single tap, while simultaneously alerting your trusted contacts.',
    icon: Phone,
  },
];

const Features: React.FC = () => {
  return (
    <div id="features" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Enhanced Safety</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to stay safe
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            SaferSathi combines cutting-edge technology with practical safety features to provide comprehensive protection in any situation.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;