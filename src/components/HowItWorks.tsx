import { PhoneCall, CalendarCheck, Truck, Sparkles, ThumbsUp, BadgeCheck } from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    number: "01",
    title: "Оставьте заявку",
    description: "Заполните форму на сайте или позвоните нам. Это займёт 2 минуты.",
  },
  {
    icon: CalendarCheck,
    number: "02",
    title: "Согласуем время",
    description: "Наш менеджер перезвонит и назначит удобное время визита.",
  },
  {
    icon: Truck,
    number: "03",
    title: "Приедем к вам",
    description: "Мастер приедет со всем необходимым оборудованием и химикатами.",
  },
  {
    icon: Sparkles,
    number: "04",
    title: "Профессиональная чистка",
    description: "Тщательно очищаем мебель. Удаляем пятна, запахи и аллергены.",
  },
  {
    icon: ThumbsUp,
    number: "05",
    title: "Проверка результата",
    description: "Вы принимаете работу. Если что-то не так — исправим бесплатно.",
  },
  {
    icon: BadgeCheck,
    number: "06",
    title: "Гарантия",
    description: "Даём гарантию на результат. Мебель будет чистой долгое время.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 bg-accent">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-bold text-sm uppercase tracking-wide">Процесс</span>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mt-2 mb-4">
            Как мы работаем
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Простой и понятный процесс от заявки до чистой мебели
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-white rounded-2xl p-6 relative overflow-hidden group hover:shadow-lg transition-shadow"
              >
                {/* Step number background */}
                <div className="absolute top-4 right-4 text-6xl font-black text-gray-50 select-none">
                  {step.number}
                </div>

                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 relative z-10 group-hover:bg-primary/20 transition-colors">
                  <Icon size={24} className="text-primary" />
                </div>

                <h3 className="font-bold text-secondary mb-2 relative z-10">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed relative z-10">{step.description}</p>

                {/* Connector arrow for desktop */}
                {index < steps.length - 1 && (index + 1) % 3 !== 0 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-white text-xs font-bold">›</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
