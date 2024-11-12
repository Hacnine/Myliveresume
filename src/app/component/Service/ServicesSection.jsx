
"use client";
import React from 'react';
import StatCard from './StatCard';
import { services, stats } from '@/app/contant';
import ServiceCard from './ServiceCard';

const ServicesSection = () => (
  <div className=" bg-gray-900/30 wrapper text-white py-16">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold mb-4">What I Am Great At</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
    </div>
  </div>
);

export default ServicesSection;
