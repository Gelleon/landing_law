import React from 'react';
import { ArrowRight, Shield, Award, Users, Scale } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient and 3D elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      </div>

      {/* Floating 3D elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-amber-400/20 to-amber-600/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-blue-400/20 to-blue-600/20 rounded-full blur-xl animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Семейный юрист в
                <span className="relative inline-block ml-4">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                    Туапсе
                  </span>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-amber-600 transform scale-x-0 animate-scale-x"></div>
                </span>
                <br />и районе
              </h1>
              
              <p className="text-xl text-blue-100 max-w-2xl">
                Профессиональная юридическая помощь по семейным делам в Туапсе и Туапсинском районе. 
                Развод, алименты, раздел имущества. Более 15 лет опыта работы в регионе.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              {[
                { icon: Shield, number: '1200+', text: 'Выигранных дел' },
                { icon: Award, number: '15', text: 'Лет опыта' },
                { icon: Users, number: '98%', text: 'Довольных клиентов' }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="relative inline-block mb-3">
                    <stat.icon className="h-8 w-8 text-amber-400 mx-auto transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" />
                    <div className="absolute inset-0 scale-150 opacity-0 group-hover:opacity-30 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full blur-md transition-opacity duration-500"></div>
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.number}</div>
                  <div className="text-blue-200 text-sm">{stat.text}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <button
                onClick={scrollToContact}
                className="group relative overflow-hidden bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Бесплатная консультация
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
              
              <button
                onClick={scrollToServices}
                className="group relative border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105"
              >
                Наши услуги
                <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-xl"></div>
              </button>
            </div>
          </div>

          {/* 3D Illustration */}
          <div className="hidden lg:block relative">
            <div className="relative w-full h-96 perspective-1000">
              <div className="absolute inset-0 transform-3d animate-float">
                <div className="w-full h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl border border-white/20 transform rotate-y-12 hover:rotate-y-6 transition-transform duration-700 shadow-2xl">
                  <div className="p-8 h-full flex flex-col justify-center space-y-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center transform hover:rotate-12 transition-transform duration-300">
                      <Scale className="h-8 w-8 text-white" />
                    </div>
                    <div className="space-y-4">
                      <div className="h-4 bg-white/20 rounded-full animate-pulse"></div>
                      <div className="h-4 bg-white/15 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                      <div className="h-4 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;