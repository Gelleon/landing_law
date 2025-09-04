import React, { useEffect, useRef, useState } from 'react';
import { Clock, Users, Trophy, Shield, Star, CheckCircle } from 'lucide-react';

const Advantages: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const advantages = entry.target.querySelectorAll('.advantage-card');
            advantages.forEach((advantage, index) => {
              setTimeout(() => {
                setVisibleItems(prev => [...prev, index]);
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const advantages = [
    {
      icon: Clock,
      title: 'Быстрое решение',
      description: 'Оперативное рассмотрение дел и минимизация временных затрат'
    },
    {
      icon: Users,
      title: 'Индивидуальный подход',
      description: 'Персональная стратегия для каждого клиента и его ситуации'
    },
    {
      icon: Trophy,
      title: 'Высокий процент побед',
      description: '98% выигранных дел благодаря профессионализму команды'
    },
    {
      icon: Shield,
      title: 'Конфиденциальность',
      description: 'Гарантируем полную конфиденциальность всей информации'
    },
    {
      icon: Star,
      title: 'Экспертиза',
      description: '15+ лет специализации исключительно на семейном праве'
    },
    {
      icon: CheckCircle,
      title: 'Прозрачность',
      description: 'Честные цены, никаких скрытых комиссий и доплат'
    }
  ];

  return (
    <section id="advantages" ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Наша команда в Туапсе специализируется на семейном праве и гарантирует 
            профессиональную защиту интересов жителей Туапсинского района
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className={`advantage-card relative group transform transition-all duration-700 ${
                visibleItems.includes(index) 
                  ? 'translate-y-0 opacity-100 rotate-0' 
                  : 'translate-y-12 opacity-0 rotate-3'
              }`}
            >
              <div className="relative bg-white p-8 rounded-2xl border border-gray-100 hover:border-blue-200 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 hover:rotate-1">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-amber-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                    <advantage.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-800 transition-colors duration-300">
                    {advantage.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {advantage.description}
                  </p>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform rotate-45"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-800 to-blue-900 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Cpath d=%22M20 20c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20zm-20-16c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16z%22/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">
                Нужна юридическая помощь в Туапсе?
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Получите бесплатную консультацию от экспертов по семейному праву в Туапсе
              </p>
              <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Записаться на консультацию
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;