import { Sofa, BedDouble, Armchair, Square, Car, Wind } from "lucide-react";

const services = [
  {
    icon: Sofa,
    title: "Диваны",
    description: "Чистка мягкой мебели любой сложности — угловые, модульные, прямые диваны",
    price: "от 250 000 сум",
    time: "2–3 часа",
    color: "bg-blue-50",
    iconColor: "text-primary",
  },
  {
    icon: Armchair,
    title: "Кресла",
    description: "Глубокая очистка кресел, пуфов и оттоманок от загрязнений и запахов",
    price: "от 120 000 сум",
    time: "1–1.5 часа",
    color: "bg-teal-50",
    iconColor: "text-primary",
  },
  {
    icon: BedDouble,
    title: "Матрасы",
    description: "Антибактериальная обработка матрасов, удаление пятен и аллергенов",
    price: "от 180 000 сум",
    time: "1.5–2 часа",
    color: "bg-indigo-50",
    iconColor: "text-secondary",
  },
  {
    icon: Square,
    title: "Ковры",
    description: "Профессиональная чистка ковров любого размера и материала",
    price: "от 15 000 сум/м²",
    time: "зависит от размера",
    color: "bg-purple-50",
    iconColor: "text-secondary",
  },
  {
    icon: Car,
    title: "Авто-сиденья",
    description: "Химчистка автомобильных сидений и потолка прямо во дворе",
    price: "от 300 000 сум",
    time: "2–4 часа",
    color: "bg-orange-50",
    iconColor: "text-orange-500",
  },
  {
    icon: Wind,
    title: "Устранение запахов",
    description: "Специализированная обработка от запахов животных, табака, плесени",
    price: "от 100 000 сум",
    time: "1–2 часа",
    color: "bg-green-50",
    iconColor: "text-green-500",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-bold text-sm uppercase tracking-wide">Наши услуги</span>
          {/* 🔎 SEO: H2 с ключевыми словами + город */}
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mt-2 mb-4">
            Что мы чистим в Ташкенте?
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Профессиональная химчистка диванов, ковров, матрасов и кресел с выездом на дом — по всему Ташкенту
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-shadow group"
              >
                <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon size={28} className={service.iconColor} />
                </div>
                <h3 className="font-bold text-lg text-secondary mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">{service.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="font-bold text-primary text-sm">{service.price}</span>
                  <span className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded-full">{service.time}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <a
            href="#quiz"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-xl transition-colors shadow-md"
          >
            Рассчитать стоимость уборки
          </a>
        </div>
      </div>
    </section>
  );
}
