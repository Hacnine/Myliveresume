import React from 'react';
import StatCard from './StatCard';
import { services, stats } from '../../constant';
import ServiceCard from './ServiceCard';

const ServicesSection = () => (
  <div className=" bg-gray-800 wrapper text-white py-16 ">
    <div className="container mx-auto between flex-col px-4 ">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold mb-4">What Do I Love To Do</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
        I have a great passion for designing.
        </p>
      </div>
      <div className="grid grid-cols-2  gap-6 md:gap-12 mb-12  ">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>

      <div className="grid grid-cols-2  gap-6 md:gap-12 md:place-items-stretch r">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
    </div>
  </div>
);

export default ServicesSection;
