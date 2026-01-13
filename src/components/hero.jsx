import info from "../constants/info";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 md:pt-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4 text-balance">
            {info.NAME}
          </h1>

          {/* Title*/}
          <div className="inline-block mb-6">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold bg-black text-white px-4 py-2 inline-block">
              {info.TITLE}
            </h2>
          </div>

          {/* Subtitle*/}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            {info.SUBTITLE}
          </p>
        </div>
      </div>
    </section>
  );
}
