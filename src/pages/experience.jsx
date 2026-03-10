// import { experiences } from "../constants/experience";
import experiences from "../constants/experience.json";

export default function Experience() {
  return (
    <section
      id="experience"
      className="w-full bg-background lg:pl-64 border-t border-border px-4 sm:px-6 lg:px-16 py-16 lg:py-24"
    >
      <div className="max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 lg:mb-16">
          Experience
        </h2>
        {/*

  */}
        <div className="space-y-12 lg:space-y-16">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="border py-12  border-muted pl-6 lg:pl-8"
            >
              <div className="mb-4">
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
                  {exp.title}
                </h3>
                <p className="text-base sm:text-lg text-muted-foreground">
                  {exp.company}
                </p>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground mt-2">
                  <span>{exp.location}</span>
                  <span className="text-foreground font-medium">
                    {exp.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.highlights.map((highlight, i) => (
                  <li
                    key={i}
                    className="text-sm sm:text-base text-foreground leading-relaxed flex gap-3"
                  >
                    <span className="text-primary font-bold min-w-fit">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
