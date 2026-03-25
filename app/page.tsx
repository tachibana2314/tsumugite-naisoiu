import { Hero } from "@/components/organisms/Hero";
import { About } from "@/components/organisms/About";
import { Projects } from "@/components/organisms/Projects";
import { Contact } from "@/components/organisms/Contact";
import { SchemaOrg } from "@/components/SEO/SchemaOrg";
import { generateLocalBusinessSchema } from "@/lib/schema";

export default function Home() {
  const localBusinessSchema = generateLocalBusinessSchema();
  
  return (
    <main>
      <SchemaOrg schema={localBusinessSchema} />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}