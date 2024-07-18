// Services.jsx

import React from 'react';

const Services = () => {
  return (
    <section className="services">
      <div className="service-card">
        <h2>Premium Exterior Wash</h2>
        <p>
          Clean, shine, and protect your vehicle's exterior with our Premium Exterior Wash service.
          Includes full exterior foam bath, wheels and tires deep cleaning, tire shine, cleaned door jams, and more.
        </p>
        <div className="service-pricing">
          <p>$65 - Sedans</p>
          <p>$75 - SUVs</p>
          <p>$95 - Large SUVs & Trucks</p>
        </div>
        <p>Approx. 1-2 hours</p>
        <p>Add-ons available: Decontamination Clay Bar Service & 3-month Paint Protection (+$50-$75)</p>
      </div>
      {/* Add similar cards for Interior Detail and Full Detail */}
    </section>
  );
};

export default Services;
