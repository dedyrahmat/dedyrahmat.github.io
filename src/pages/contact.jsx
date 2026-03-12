import { AtSign, Linkedin, Phone } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full bg-background lg:pl-64 border-t border-border px-4 sm:px-6 lg:px-16 py-16 lg:py-24"
    >
      <div className="max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 lg:mb-16">
          Find out more about me
        </h2>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 auto-rows-[120px]">
          {/* Email — large, spans 2 cols x 2 rows */}
          <a
            href="mailto:dedyrahmat@gmail.com"
            className="col-span-2 row-span-2 border border-muted p-6 flex flex-col justify-between hover:bg-muted/10 transition-colors group"
          >
            <AtSign className="w-10 h-10 text-foreground group-hover:scale-110 transition-transform" />
            <div>
              <h3 className="font-bold text-foreground text-lg">Email</h3>
              <p className="text-muted text-sm">dedyrahmat@gmail.com</p>
            </div>
          </a>

          {/* GitHub — spans 2 cols x 1 row */}
          <a
            href="https://github.com/dedyrahmat"
            target="_blank"
            rel="noreferrer"
            className="col-span-2 border border-muted p-6 flex flex-col justify-between hover:bg-muted/10 transition-colors group"
          >
            <SiGithub className="w-6 h-6 text-foreground group-hover:scale-110 transition-transform" />
            <p className="text-muted text-sm">github.com/dedyrahmat</p>
          </a>

          {/* LinkedIn — spans 2 cols x 1 row */}
          <a
            href="https://linkedin.com/in/dedyrahmat"
            target="_blank"
            rel="noreferrer"
            className="col-span-2 border border-muted p-6 flex flex-col justify-between hover:bg-muted/10 transition-colors group"
          >
            <Linkedin className="w-6 h-6 text-foreground group-hover:scale-110 transition-transform" />
            <p className="text-muted text-sm">linkedin.com/in/dedyrahmat</p>
          </a>
        </div>
      </div>
    </section>
  );
}
