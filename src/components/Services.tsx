import React, { useEffect, useRef, useState } from 'react';
import { Heart, Home, Baby, FileText, Shield, Calculator, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const services = entry.target.querySelectorAll('.service-card');
            services.forEach((service, index) => {
              setTimeout(() => {
                setVisibleItems(prev => [...prev, index]);
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Heart,
      title: 'Развод и расторжение брака',
      description: 'Профессиональное сопровождение процедуры развода, защита ваших интересов в суде.',
      price: 'от 25 000 ₽'
    },
    {
      icon: Home,
      title: 'Раздел имущества',
      description: 'Справедливый раздел совместно нажитого имущества супругов.',
      price: 'от 35 000 ₽'
    },
    {
      icon: Baby,
      title: 'Алименты и права детей',
      description: 'Взыскание алиментов, определение места жительства ребенка.',
      price: 'от 20 000 ₽'
    },
    {
      icon: FileText,
      title: 'Брачные договоры',
      description: 'Составление и регистрация брачных договоров, соглашений.',
      price: 'от 15 000 ₽'
    },
    {
      icon: Shield,
      title: 'Лишение родительских прав',
      description: 'Защита интересов детей, процедуры лишения родительских прав.',
      price: 'от 30 000 ₽'
    },
    {
      icon: Calculator,
      title: 'Консультации по семейному праву',
      description: 'Комплексные консультации по всем вопросам семейного права.',
      price: 'от 3 000 ₽'
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Полный спектр юридических услуг по семейному праву в Туапсе и Туапсинском районе 
            с гарантией защиты ваших интересов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card relative group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 ${
                visibleItems.includes(index) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{
                transform: visibleItems.includes(index) 
                  ? 'translateY(0) rotateX(0)' 
                  : 'translateY(32px) rotateX(10deg)',
                transition: 'all 0.7s ease-out'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-amber-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-800 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-2xl font-bold text-blue-800">{service.price}</span>
                  <button className="text-amber-600 font-semibold hover:text-amber-700 transition-colors duration-300 flex items-center group">
                    Подробнее
                    <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button
            onClick={scrollToContact}
            className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-4 rounded-xl font-semibold text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span className="flex items-center">
              Получить консультацию
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;