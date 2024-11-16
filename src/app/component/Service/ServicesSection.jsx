import React from 'react';
import StatCard from './StatCard';
import { services, stats } from '../../constant';
import ServiceCard from './ServiceCard';

const ServicesSection = () => (
  <div className=" bg-gray-800 wrapper text-white py-16 ">
    <div className="container mx-auto between flex-col px-4 ">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold mb-4">What I Am Great At</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-32 mb-12  max-w-7xl">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-32 md:place-items-stretch r">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
    </div>
  </div>
);

export default ServicesSection;
