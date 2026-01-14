const Cta = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-600 via-purple-700 to-blue-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-5xl font-extrabold text-white mb-6">
          Dijital Dönüşümü Başlatın
        </h2>
        <p className="text-xl text-white/95 mb-12 max-w-2xl mx-auto leading-relaxed">
          Hemen kaydolun ve restoranınız için özel dijital menünüzü oluşturun
        </p>
        <button className="px-12 py-5 bg-white text-purple-700 rounded-xl font-bold text-lg shadow-2xl hover:shadow-white/30 hover:scale-105 transition-all duration-300">
          Ücretsiz Deneyin
        </button>
      </div>
    </section>
  );
};

export default Cta;
