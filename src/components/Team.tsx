import React, { useEffect, useRef, useState } from 'react';
import { Award, BookOpen, Users } from 'lucide-react';

const Team: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const teamCards = entry.target.querySelectorAll('.team-card');
            teamCards.forEach((card, index) => {
              setTimeout(() => {
                setVisibleItems(prev => [...prev, index]);
              }, index * 300);
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

  const team = [
    {
      name: 'Анна Петрова',
      position: 'Управляющий партнер',
      experience: '15 лет опыта',
      education: 'МГУ им. Ломоносова',
      specialization: 'Сложные разводы, раздел бизнеса',
      cases: '400+ дел'
    },
    {
      name: 'Михаил Сидоров',
      position: 'Старший юрист',
      experience: '12 лет опыта',
      education: 'МГЮА им. Кутафина',
      specialization: 'Алименты, права детей',
      cases: '350+ дел'
    },
    {
      name: 'Елена Козлова',
      position: 'Юрист-консультант',
      experience: '8 лет опыта',
      education: 'СПбГУ',
      specialization: 'Брачные договоры',
      cases: '200+ дел'
    }
  ];

  return (
    <section id="team" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-amber-500/10 to-amber-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Наша команда
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Опытные юристы Туапсе с глубокой специализацией в области семейного права
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className={`team-card group perspective-1000 transition-all duration-700 ${
                visibleItems.includes(index) 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-12 opacity-0'
              }`}
            >
              <div className="relative transform-3d group-hover:rotateY-6 transition-transform duration-700">
                <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  {/* Profile image placeholder */}
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full mx-auto mb-6 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <Users className="h-12 w-12 text-white" />
                  </div>

                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-800 transition-colors duration-300">
                      {member.name}
                    </h3>
                    
                    <p className="text-amber-600 font-semibold text-lg">
                      {member.position}
                    </p>

                    <div className="space-y-3 text-gray-600">
                      <div className="flex items-center justify-center space-x-2">
                        <Award className="h-4 w-4 text-amber-500" />
                        <span>{member.experience}</span>
                      </div>
                      
                      <div className="flex items-center justify-center space-x-2">
                        <BookOpen className="h-4 w-4 text-blue-500" />
                        <span>{member.education}</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-sm text-gray-700 font-medium mb-2">
                        Специализация:
                      </p>
                      <p className="text-gray-600 text-sm">
                        {member.specialization}
                      </p>
                      
                      <div className="mt-4 inline-block bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                        {member.cases}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements section */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '1200+', text: 'Успешных дел' },
              { number: '15', text: 'Лет работы' },
              { number: '98%', text: 'Положительных отзывов' },
              { number: '24/7', text: 'Поддержка клиентов' }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-4xl font-bold text-amber-400 mb-2 transform group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-blue-100">{stat.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;