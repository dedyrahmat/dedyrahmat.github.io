import { AtSign, Linkedin } from "lucide-react";
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
        <div className="flex flex-row flex-wrap gap-2">
          <div className="border border-muted flex flex-col p-6 gap-y-2">
            <a href="mailto:dedyrahmat@gmail.com">
              <AtSign className="w-12 h-12 mb-2" />
              <h2 className="font-bold">email</h2>
              <p className="text-muted">dedyrahmat@gmail.com</p>
            </a>
          </div>
          <div className="border border-muted flex flex-col p-6">
            {/* <Phone className="w-6 h-6 mb-2" />*/}
            <a href="tel:+6281234567890" className="text-muted">
              +62 812-3456-7890
            </a>
          </div>
          <div className="border border-muted flex flex-col p-6">
            <SiGithub className="w-6 h-6 mb-2" />
            <a href="https://github.com/dedyrahmat" className="text-muted">
              github.com/dedyrahmat
            </a>
          </div>
          <div className="border border-muted flex flex-col p-6">
            <Linkedin className="w-6 h-6 mb-2" />
            <a href="https://linkedin.com/in/dedyrahmat" className="text-muted">
              linkedin.com/in/dedyrahmat
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
