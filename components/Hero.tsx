"use client";

import { ArrowRight, Shield, Star, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section
      className="relative h-[calc(100vh-15rem)] w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/hero.jpg')",
        backgroundColor: "#999", // Yedek renk
      }}
    >
      {/* Karartma overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent to-50% to-black/50"></div>
      <div className="relative z-10 max-w-4xl mx-auto flex items-center justify-center h-full">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-white font-medium">
              Yeni Özellikler Yayında
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Dijital Menü Deneyimini
            <span className="block text-5xl leading-16">
              Yeniden Tanımlayın
            </span>
          </h1>
          <p className="text-white/80 text-xl mb-10">
            QR kod teknolojisiyle restoranınızı dijitalleştirin. Müşterilerinize
            hızlı, kolay ve etkileyici bir menü deneyimi sunun.
          </p>
          <div className="flex justify-center items-center gap-10">
            <button className="group px-8 py-4 bg-background text-foreground rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer">
              Hemen Başla
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer">
              Demo İzle
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            <div className="flex items-center gap-3 text-white/90">
              <div className="p-2 bg-white/10 backdrop-blur-sm rounded-lg">
                <Star className="w-5 h-5 text-yellow-400" />
              </div>
              <div>
                <div className="font-semibold">Kolay Kullanım</div>
                <div className="text-sm text-gray-400">
                  Dakikalar içinde kurulum
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-white/90">
              <div className="p-2 bg-white/10 backdrop-blur-sm rounded-lg">
                <Zap className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <div className="font-semibold">Hızlı Performans</div>
                <div className="text-sm text-gray-400">Anında yükleme</div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-white/90">
              <div className="p-2 bg-white/10 backdrop-blur-sm rounded-lg">
                <Shield className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <div className="font-semibold">Güvenli</div>
                <div className="text-sm text-gray-400">SSL korumalı</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
