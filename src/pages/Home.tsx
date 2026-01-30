import React from 'react';
import { Hero } from '../components/home/Hero';
import { Courses } from '../components/home/Courses';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { CallToAction } from '../components/home/CallToAction';
import { FreeResources } from '../components/home/FreeResources';

export const Home = () => {
  return (
    <main>
      <Hero />
      <FreeResources />
      <Courses />
      <WhyChooseUs />
      <CallToAction />
    </main>
  );
};
