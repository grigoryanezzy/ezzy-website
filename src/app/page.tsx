import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Stats from "@/components/Stats";
import Reviews from "@/components/Reviews";
import Quiz from "@/components/Quiz";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <HowItWorks />
      <Stats />
      {/* 📊 МАРКЕТОЛОГ: отзывы ПЕРЕД квизом — социальное доказательство до точки конверсии */}
      <Reviews />
      <Quiz />
      <FAQ />
      <Footer />

      {/* Floating Telegram button */}
      <a
        href="https://t.me/+998772603003"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Написать в Telegram"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#2AABEE] hover:bg-[#1a9bde] text-white rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95"
        title="Написать в Telegram"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.269c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.952z"/>
        </svg>
      </a>
    </main>
  );
}
