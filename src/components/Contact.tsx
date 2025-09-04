import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', phone: '', email: '', message: '' });
      }, 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Связаться с нами
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Получите профессиональную консультацию по вашему семейному вопросу
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Контактная информация</h3>
              
              <div className="space-y-6">
                {[
                  {
                    icon: Phone,
                    title: 'Телефон',
                    content: '+7 (86167) 2-34-56',
                    subtitle: 'Круглосуточно'
                  },
                  {
                    icon: Mail,
                    title: 'Email',
                    content: 'info@familylaw-tuapse.ru',
                    subtitle: 'Ответим в течение часа'
                  },
                  {
                    icon: MapPin,
                    title: 'Адрес',
                    content: 'ул. Горького, 12, Туапсе',
                    subtitle: 'Центр Туапсе'
                  },
                  {
                    icon: Clock,
                    title: 'Время работы',
                    content: 'Пн-Пт: 9:00-18:00',
                    subtitle: 'Сб: 10:00-16:00'
                  }
                ].map((contact, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <contact.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 group-hover:text-blue-800 transition-colors duration-300">
                        {contact.title}
                      </h4>
                      <p className="text-gray-800 font-medium">{contact.content}</p>
                      <p className="text-gray-500 text-sm">{contact.subtitle}</p>
                    </div>
                  </div>
                ))}
                <p className="text-gray-600 mt-6">
                  Получите профессиональную консультацию по семейному праву в Туапсе
                </p>
              </div>
            </div>

            {/* Emergency contact */}
            <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl p-8 text-white shadow-lg transform hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4">Экстренная консультация</h3>
              <p className="mb-4">Срочные вопросы по семейному праву</p>
              <div className="text-2xl font-bold">+7 (495) 987-65-43</div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Запись на консультацию</h3>
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative group">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ваше имя"
                      required
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300 group-hover:border-blue-400"
                    />
                  </div>
                  
                  <div className="relative group">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Телефон"
                      required
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300 group-hover:border-blue-400"
                    />
                  </div>
                </div>

                <div className="relative group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300 group-hover:border-blue-400"
                  />
                </div>

                <div className="relative group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Опишите вашу ситуацию"
                    rows={5}
                    required
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300 resize-none group-hover:border-blue-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-semibold text-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 group"
                >
                  <span>Отправить заявку</span>
                  <Send className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
            ) : (
              <div className="text-center py-12 space-y-6">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto transform scale-0 animate-bounce">
                  <CheckCircle className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-green-600">Заявка отправлена!</h3>
                <p className="text-gray-600">Мы свяжемся с вами в ближайшее время</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;