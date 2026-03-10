import info from "../constants/info.json";

export default function About() {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-background lg:pl-64 border-t border-border px-4 sm:px-6 lg:px-16 py-18 lg:py-24"
    >
      <div className="max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">
          About
        </h2>

        <div
          dangerouslySetInnerHTML={{ __html: info.ABOUT_ME }}
          className="space-y-6 text-base sm:text-lg text-foreground leading-relaxed"
        ></div>
      </div>
    </section>
  );
}
