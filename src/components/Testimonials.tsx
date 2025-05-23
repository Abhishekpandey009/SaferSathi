import React from 'react';

const testimonials = [
  {
    id: 1,
    quote: "SaferSathi has completely transformed how I feel when traveling alone. The real-time location sharing gives me peace of mind knowing my family can check on me anytime.",
    author: "Priya Sharma",
    role: "College Student",
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    quote: "As a parent, I was always worried about my daughter's safety during her commute. SaferSathi's check-in feature has been a game-changer for our family's peace of mind.",
    author: "Rajesh Patel",
    role: "Parent",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    quote: "The emergency SOS feature saved me when I felt unsafe in an unfamiliar neighborhood. My contacts were immediately alerted with my location, and I got help quickly.",
    author: "Ananya Gupta",
    role: "Working Professional",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const Testimonials: React.FC = () => {
  return (
    <div id="testimonials" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by thousands across India
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Hear from our users about how SaferSathi has made a difference in their daily lives and provided them with a sense of security.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex flex-col justify-between bg-white p-8 shadow-lg ring-1 ring-gray-200 rounded-2xl">
              <div>
                <div className="flex items-center gap-x-4">
                  <img src={testimonial.image} alt={testimonial.author} className="h-12 w-12 rounded-full bg-gray-50" />
                  <div>
                    <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{testimonial.author}</h3>
                    <p className="text-base leading-7 text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="mt-8 text-base italic leading-7 text-gray-600">"{testimonial.quote}"</p>
              </div>
              <div className="mt-8 flex items-center gap-x-2">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <svg
                    key={rating}
                    className="h-5 w-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;