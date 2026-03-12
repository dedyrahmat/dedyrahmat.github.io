import info from "../constants/info.json";

export default function Hero() {
  return (
    // <section
    //   id="hero"
    //   className="min-h-screen w-full bg-background pl-64 pr-16 py-32 flex items-center"
    // >
    <section
      id="hero"
      className="w-full min-h-screen bg-background lg:pl-48 flex items-center justify-center lg:justify-start pt-20 lg:pt-0"
    >
      <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-16 py-16 lg:py-32">
        <div className="space-y-8">
          <div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-4 text-balance leading-tight text-foreground uppercase">
              {info.NAME}
            </h1>
            <h2 className="text-lg sm:text-xl text-primary font-semibold font-mono tracking-wide">
              {info.TITLE}
            </h2>
          </div>

          <p className="text-base sm:text-lg text-foreground italic leading-relaxed max-w-2xl">
            {info.SUBTITLE}
          </p>
        </div>
      </div>
    </section>
  );
}
