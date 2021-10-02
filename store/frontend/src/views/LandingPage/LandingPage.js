import React from 'react';
import Hero from '../../components/Hero';
import Products from '../../components/Products';
import Services from '../../components/Services';
import {productDataTwo } from '../../components/Products/data';
import { productData} from '../../components/Services/data';
import Feature from '../../components/Feature';
import Footer from '../../components/Footer';

export default function LandingPage() {
    return (
        <div>
      <Hero />
      <Services heading='What do we do?' data={productData} />
      <Feature />
      <Products heading='Choose your product' data={productDataTwo} />
      <Footer />
      </div>
    );
}