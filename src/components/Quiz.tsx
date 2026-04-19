"use client";

import { useState } from "react";
import {
  Sofa, BedDouble, Armchair, Square, Car, ChevronRight, ChevronLeft,
  CheckCircle, Phone, User, Wine, Droplets, Zap, Heart, Coffee, Leaf,
  MapPin, Calendar, Clock, Home, Building
} from "lucide-react";

// Types
interface QuizOption {
  id: string;
  label: string;
  icon?: React.ReactNode;
  emoji?: string;
}

interface FormData {
  furnitureType: string[];
  size: string;
  stainType: string[];
  location: string;
  when: string;
  name: string;
  phone: string;
}

// Step 1: What to clean
const furnitureOptions: QuizOption[] = [
  { id: "sofa", label: "Диван", icon: <Sofa size={28} /> },
  { id: "armchair", label: "Кресло", icon: <Armchair size={28} /> },
  { id: "mattress", label: "Матрас", icon: <BedDouble size={28} /> },
  { id: "carpet", label: "Ковёр", icon: <Square size={28} /> },
  { id: "car", label: "Авто-сиденья", icon: <Car size={28} /> },
  { id: "other", label: "Другое", emoji: "🧹" },
];

// Step 2: Size
const sizeOptions: QuizOption[] = [
  { id: "small", label: "Маленький", emoji: "📦", },
  { id: "medium", label: "Средний", emoji: "📫" },
  { id: "large", label: "Большой", emoji: "📬" },
  { id: "xlarge", label: "Очень большой", emoji: "🏠" },
];

const sizeDescriptions: Record<string, string> = {
  small: "1–2 предмета / кресло / диван 2-х мест.",
  medium: "3–4 предмета / диван 3-х мест.",
  large: "5–6 предметов / угловой диван",
  xlarge: "Весь гарнитур / несколько комнат",
};

// Step 3: Stain types
const stainOptions: QuizOption[] = [
  { id: "wine", label: "Вино", icon: <Wine size={22} /> },
  { id: "urine", label: "Моча", icon: <Droplets size={22} /> },
  { id: "grease", label: "Жир", icon: <Zap size={22} /> },
  { id: "blood", label: "Кровь", icon: <Heart size={22} /> },
  { id: "coffee", label: "Кофе", icon: <Coffee size={22} /> },
  { id: "dirt", label: "Грязь", icon: <Leaf size={22} /> },
  { id: "none", label: "Без пятен", emoji: "✨" },
  { id: "other", label: "Другое", emoji: "❓" },
];

// Step 4: Location
const locationOptions: QuizOption[] = [
  { id: "apartment", label: "Квартира", icon: <Home size={28} /> },
  { id: "house", label: "Частный дом", icon: <Building size={28} /> },
  { id: "office", label: "Офис", icon: <Building size={28} /> },
  { id: "other", label: "Другое", emoji: "📍" },
];

// Step 5: When
const whenOptions: QuizOption[] = [
  { id: "today", label: "Сегодня", icon: <Clock size={24} /> },
  { id: "tomorrow", label: "Завтра", icon: <Calendar size={24} /> },
  { id: "this_week", label: "На этой неделе", icon: <Calendar size={24} /> },
  { id: "flexible", label: "Когда удобно вам", icon: <MapPin size={24} /> },
];

const TOTAL_STEPS = 6;

export default function Quiz() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    furnitureType: [],
    size: "",
    stainType: [],
    location: "",
    when: "",
    name: "",
    phone: "",
  });

  const toggleMultiSelect = (field: "furnitureType" | "stainType", id: string) => {
    setFormData((prev) => {
      const arr = prev[field];
      return {
        ...prev,
        [field]: arr.includes(id) ? arr.filter((x) => x !== id) : [...arr, id],
      };
    });
  };

  const setSingle = (field: keyof FormData, id: string) => {
    setFormData((prev) => ({ ...prev, [field]: id }));
  };

  const canProceed = () => {
    switch (step) {
      case 1: return formData.furnitureType.length > 0;
      case 2: return formData.size !== "";
      case 3: return formData.stainType.length > 0;
      case 4: return formData.location !== "";
      case 5: return formData.when !== "";
      case 6: return formData.name.trim() !== "" && formData.phone.trim().length >= 9;
      default: return false;
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const stepTitles = [
    "Что будем чистить?",
    "Какой размер?",
    "Есть ли пятна?",
    "Где находится мебель?",
    "Когда удобно?",
    "Ваши контакты",
  ];

  const stepSubtitles = [
    "Выберите один или несколько вариантов",
    "Укажите примерный объём работы",
    "Выберите типы загрязнений (можно несколько)",
    "Выезжаем по всему Ташкенту",
    "Назначим мастера в удобное время",
    "Перезвоним в течение 15 минут",
  ];

  if (submitted) {
    return (
      <section id="quiz" className="py-16 bg-accent">
        <div className="max-w-xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-xl p-10 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} className="text-green-500" />
            </div>
            <h2 className="text-2xl font-black text-secondary mb-3">Заявка принята! 🎉</h2>
            <p className="text-gray-500 mb-2">
              Спасибо, <span className="font-bold text-secondary">{formData.name}</span>!
            </p>
            <p className="text-gray-500 mb-6">
              Наш менеджер свяжется с вами по номеру{" "}
              <span className="font-bold text-primary">{formData.phone}</span> в течение 15 минут.
            </p>
            <div className="bg-primary/10 rounded-2xl p-4 mb-6">
              <p className="text-primary font-bold text-lg">−10% скидка применена!</p>
              <p className="text-sm text-gray-500 mt-1">Ваша скидка на первый заказ уже учтена</p>
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                setStep(1);
                setFormData({ furnitureType: [], size: "", stainType: [], location: "", when: "", name: "", phone: "" });
              }}
              className="text-sm text-gray-400 hover:text-gray-600 underline"
            >
              Оставить ещё одну заявку
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="quiz" className="py-16 bg-accent">
      <div className="max-w-xl mx-auto px-4">
        <div className="text-center mb-8">
          <span className="text-primary font-bold text-sm uppercase tracking-wide">Расчёт стоимости</span>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mt-2 mb-2">
            Рассчитайте цену
          </h2>
          <p className="text-gray-500">Ответьте на 6 вопросов и получите точную стоимость</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Progress bar */}
          <div className="bg-accent px-6 pt-6 pb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-bold text-secondary">Шаг {step} из {TOTAL_STEPS}</span>
              <span className="text-sm text-gray-400">{Math.round((step / TOTAL_STEPS) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full transition-all duration-500"
                style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
              />
            </div>
            {/* Step dots */}
            <div className="flex justify-between mt-2">
              {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i + 1 <= step ? "bg-primary" : "bg-gray-200"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="p-6">
            {/* Step title */}
            <div className="mb-6">
              <h3 className="text-xl font-black text-secondary mb-1">{stepTitles[step - 1]}</h3>
              <p className="text-sm text-gray-400">{stepSubtitles[step - 1]}</p>
            </div>

            {/* STEP 1: Furniture type */}
            {step === 1 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {furnitureOptions.map((opt) => {
                  const selected = formData.furnitureType.includes(opt.id);
                  return (
                    <button
                      key={opt.id}
                      onClick={() => toggleMultiSelect("furnitureType", opt.id)}
                      className={`flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all ${
                        selected
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-gray-100 hover:border-primary/50 text-gray-600"
                      }`}
                    >
                      <div className={selected ? "text-primary" : "text-gray-400"}>
                        {opt.icon || <span className="text-2xl">{opt.emoji}</span>}
                      </div>
                      <span className="text-sm font-bold">{opt.label}</span>
                      {selected && (
                        <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            )}

            {/* STEP 2: Size */}
            {step === 2 && (
              <div className="space-y-3">
                {sizeOptions.map((opt) => {
                  const selected = formData.size === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => setSingle("size", opt.id)}
                      className={`w-full flex items-center gap-4 p-4 rounded-2xl border-2 transition-all text-left ${
                        selected
                          ? "border-primary bg-primary/10"
                          : "border-gray-100 hover:border-primary/40"
                      }`}
                    >
                      <span className="text-3xl">{opt.emoji}</span>
                      <div>
                        <div className={`font-bold ${selected ? "text-primary" : "text-secondary"}`}>
                          {opt.label}
                        </div>
                        <div className="text-xs text-gray-400">{sizeDescriptions[opt.id]}</div>
                      </div>
                      {selected && (
                        <div className="ml-auto w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            )}

            {/* STEP 3: Stain types */}
            {step === 3 && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {stainOptions.map((opt) => {
                  const selected = formData.stainType.includes(opt.id);
                  return (
                    <button
                      key={opt.id}
                      onClick={() => toggleMultiSelect("stainType", opt.id)}
                      className={`flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all ${
                        selected
                          ? "border-primary bg-primary/10"
                          : "border-gray-100 hover:border-primary/40"
                      }`}
                    >
                      <div className={`${selected ? "text-primary" : "text-gray-400"}`}>
                        {opt.icon || <span className="text-2xl">{opt.emoji}</span>}
                      </div>
                      <span className={`text-xs font-bold ${selected ? "text-primary" : "text-gray-600"}`}>
                        {opt.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}

            {/* STEP 4: Location */}
            {step === 4 && (
              <div className="grid grid-cols-2 gap-3">
                {locationOptions.map((opt) => {
                  const selected = formData.location === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => setSingle("location", opt.id)}
                      className={`flex flex-col items-center gap-3 p-6 rounded-2xl border-2 transition-all ${
                        selected
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-gray-100 hover:border-primary/40 text-gray-600"
                      }`}
                    >
                      <div className={selected ? "text-primary" : "text-gray-400"}>
                        {opt.icon || <span className="text-3xl">{opt.emoji}</span>}
                      </div>
                      <span className="text-sm font-bold">{opt.label}</span>
                    </button>
                  );
                })}
              </div>
            )}

            {/* STEP 5: When */}
            {step === 5 && (
              <div className="space-y-3">
                {whenOptions.map((opt) => {
                  const selected = formData.when === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => setSingle("when", opt.id)}
                      className={`w-full flex items-center gap-4 p-4 rounded-2xl border-2 transition-all text-left ${
                        selected
                          ? "border-primary bg-primary/10"
                          : "border-gray-100 hover:border-primary/40"
                      }`}
                    >
                      <div className={selected ? "text-primary" : "text-gray-400"}>
                        {opt.icon}
                      </div>
                      <span className={`font-bold ${selected ? "text-primary" : "text-secondary"}`}>
                        {opt.label}
                      </span>
                      {selected && (
                        <div className="ml-auto w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            )}

            {/* STEP 6: Contact form */}
            {step === 6 && (
              <div className="space-y-4">
                <div className="bg-primary/10 rounded-2xl p-4 text-center mb-4">
                  <p className="text-primary font-bold">🎉 Ваша скидка 10% уже применена!</p>
                  <p className="text-xs text-gray-500 mt-1">Осталось только оставить контакты</p>
                </div>

                <div>
                  <label className="block text-sm font-bold text-secondary mb-2">
                    Ваше имя
                  </label>
                  <div className="relative">
                    <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Например: Алишер"
                      value={formData.name}
                      onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                      className="w-full pl-11 pr-4 py-4 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-primary transition-colors text-secondary font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-secondary mb-2">
                    Номер телефона
                  </label>
                  <div className="relative">
                    <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="tel"
                      placeholder="+998 90 000-00-00"
                      value={formData.phone}
                      onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                      className="w-full pl-11 pr-4 py-4 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-primary transition-colors text-secondary font-medium"
                    />
                  </div>
                </div>

                <p className="text-xs text-gray-400 text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </div>
            )}

            {/* Navigation buttons */}
            <div className="flex gap-3 mt-8">
              {step > 1 && (
                <button
                  onClick={() => setStep((s) => s - 1)}
                  className="flex items-center gap-2 px-5 py-3 rounded-xl border-2 border-gray-200 text-gray-600 hover:border-primary hover:text-primary transition-colors font-bold"
                >
                  <ChevronLeft size={18} />
                  Назад
                </button>
              )}

              {step < TOTAL_STEPS ? (
                <button
                  onClick={() => setStep((s) => s + 1)}
                  disabled={!canProceed()}
                  className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-xl font-black text-white transition-all ${
                    canProceed()
                      ? "bg-primary hover:bg-primary-dark shadow-lg hover:shadow-xl"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  Далее
                  <ChevronRight size={20} />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={!canProceed() || isSubmitting}
                  className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-xl font-black text-white transition-all ${
                    canProceed() && !isSubmitting
                      ? "bg-primary hover:bg-primary-dark shadow-lg hover:shadow-xl"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      Получить расчёт со скидкой 10%
                      <ChevronRight size={20} />
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
