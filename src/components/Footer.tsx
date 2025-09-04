import React from 'react';
import { Scale, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Scale className="h-8 w-8 text-amber-400" />
              <span className="text-xl font-bold">СемейноеПраво</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Семейный юрист в Туапсе и Туапсинском районе. 
              Защищаем интересы семей с 2009 года.
            </p>
            <div className="flex space-x-4">
              {['Telegram', 'WhatsApp', 'Viber'].map((platform) => (
                <div key={platform} className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300 cursor-pointer transform hover:scale-110">
                  <span className="text-xs font-bold">{platform[0]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Услуги</h3>
            <ul className="space-y-3 text-gray-300">
              {[
                'Развод и расторжение брака',
                'Раздел имущества',
                'Алименты',
                'Брачные договоры',
                'Права детей',
                'Усыновление'
              ].map((service) => (
                <li key={service} className="hover:text-amber-400 transition-colors duration-300 cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Контакты</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-400" />
                <span>+7 (86167) 2-34-56</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-400" />
                <span>info@familylaw-tuapse.ru</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-amber-400 mt-1" />
                <span>ул. Горького, 12<br />Туапсе, 352800</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-amber-400 mt-1" />
                <span>Пн-Пт: 9:00-18:00<br />Сб: 10:00-16:00</span>
              </div>
            </div>
          </div>

          {/* Legal Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Правовая информация</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="hover:text-amber-400 transition-colors duration-300 cursor-pointer">
                Политика конфиденциальности
              </li>
              <li className="hover:text-amber-400 transition-colors duration-300 cursor-pointer">
                Пользовательское соглашение
              </li>
              <li className="hover:text-amber-400 transition-colors duration-300 cursor-pointer">
                Лицензии и сертификаты
              </li>
              <li className="hover:text-amber-400 transition-colors duration-300 cursor-pointer">
                Реквизиты
              </li>
            </ul>
            <div className="text-xs text-gray-400">
              <p>Лицензия № 23/001234</p>
              <p>Адвокатская палата Краснодарского края</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} СемейноеПраво Туапсе. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;