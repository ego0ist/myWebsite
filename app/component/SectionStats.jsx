"use client";

export function StatsSection() {
    const stats = [
      { value: '10,000+', label: 'Developers' },
      { value: '500+', label: 'Projects Shipped' },
      { value: '99.9%', label: 'Uptime' },
      { value: '24/7', label: 'Support' }
    ];
  
    return (
      <section className="py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-base-content text-center mb-12">
          Our Impact by the Numbers
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-bold text-primary">{stat.value}</span>
              <span className="text-base-content/70 mt-2">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>
    );
  }