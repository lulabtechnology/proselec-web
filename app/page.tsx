import Hero from "@/components/home/hero";
import Why from "@/components/home/why";
import MissionVision from "@/components/home/mission-vision";
import ServicesGrid from "@/components/home/services-grid";
import ProjectsShowcase from "@/components/home/projects-showcase";
import ClientsGrid from "@/components/home/clients-grid";
import ContactStrip from "@/components/home/contact-strip";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Why />
      <MissionVision />
      <ServicesGrid />
      <ProjectsShowcase />
      <ClientsGrid />
      <ContactStrip />
    </main>
  );
}
