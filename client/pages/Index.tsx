import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Bell, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PetalField } from "@/components/site/PetalField";
import { PrayerFlags } from "@/components/site/PrayerFlags";
import { SectionDivider } from "@/components/site/SectionDivider";
import { MonasteryCard } from "@/components/site/MonasteryCard";
import { MeditationTimer } from "@/components/site/MeditationTimer";
import { GalleryGrid } from "@/components/site/GalleryGrid";
import { ContactForm } from "@/components/site/ContactForm";

export default function Index() {
  // Smooth mount fade
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const monasteries = [
    { name: "Rumtek", query: "Rumtek Monastery Sikkim Himalayas", overlayUrl: "https://cdn.builder.io/api/v1/image/assets%2F83fe13fcff68445dafe105ce571cf6cb%2F02cafdaac1244252a5ba35e4f9e2ae36" },
    { name: "Enchey", query: "Enchey Monastery Sikkim", overlayUrl: "https://cdn.builder.io/api/v1/image/assets%2F83fe13fcff68445dafe105ce571cf6cb%2Fb4b260ec413746979c0df515d3f45529" },
    { name: "Pemayangtse", query: "Pemayangtse Monastery Sikkim", overlayUrl: "https://cdn.builder.io/api/v1/image/assets%2F83fe13fcff68445dafe105ce571cf6cb%2F074f913ecba24c4eb09eb1f66f6eb288" },
    { name: "Tashiding", query: "Tashiding Monastery Sikkim", overlayUrl: "https://cdn.builder.io/api/v1/image/assets%2F83fe13fcff68445dafe105ce571cf6cb%2Ff1036b59811f468fac9ed9b84eed858f" },
    { name: "Ralang", query: "Ralang Monastery Sikkim", overlayUrl: "https://cdn.builder.io/api/v1/image/assets%2F83fe13fcff68445dafe105ce571cf6cb%2Fe801dc6f8ae6469c9446e38dec95ebde" },
    { name: "Phodong", query: "Phodong Monastery Sikkim", overlayUrl: "https://cdn.builder.io/api/v1/image/assets%2F83fe13fcff68445dafe105ce571cf6cb%2Fe52382f611da4bc6b1b57e28b5ac4f70" },
  ];

  const galleryImages = [
    { alt: "Prayer wheels", query: "Sikkim prayer wheels monastery" },
    { alt: "Chanting monks", query: "Sikkim monks chanting" },
    { alt: "Thangka art", query: "Thangka murals Buddhist art" },
    { alt: "Stupa", query: "Sikkim stupa chorten" },
    { alt: "Himalayan view", query: "Himalayas Sikkim mountains" },
    { alt: "Monastery murals", query: "monastery murals Sikkim" },
  ];

  return (
    <div className="relative">

      {/* Hero */}
      <section id="hero" className="relative min-h-[92vh] flex items-center pt-20">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://source.unsplash.com/1600x1000/?Sikkim,monastery,Himalayas"
            alt="Sikkim monastery landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-background/70" />
        </div>
        <PetalField />
        <div className="container mx-auto relative">
          <PrayerFlags />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-white"
          >
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-black">
              Virtual Journey through the Monasteries of Sikkim
            </h1>
            <p className="mt-4 text-lg md:text-xl text-[rgba(95,80,80,0.9)]">
              Experience the sacred sanctuaries digitally — prayer wheels, thangkas, stupas, and chants.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://ecd2f6131a4e45c384c0d6ec6e94558f-24295ca6b62d41a7b807ca8fd.fly.dev/?reload=1756540196779#meditation">
                <Button size="lg" className="bg-saffron text-neutral-900 hover:bg-saffron/90">
                  Begin Meditation
                </Button>
              </a>
              <a href="https://ecd2f6131a4e45c384c0d6ec6e94558f-24295ca6b62d41a7b807ca8fd.fly.dev/?reload=1756540196779#sanctuary">
                <Button size="lg" className="bg-black text-white border border-gold/60 hover:bg-black">
                  Explore Monasteries
                </Button>
              </a>
            </div>
            <div className="mt-10 text-gold italic text-lg">“In the silence of the mountains, wisdom speaks.”</div>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* About */}
      <section id="about" className="py-14">
        <div className="container mx-auto grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-3 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-semibold">Heritage and Spirit</h2>
            <p className="mt-4 text-muted-foreground">
              Sikkim’s monasteries are sanctuaries of learning, art, and meditation. From Rumtek to
              Tashiding, these sacred spaces hold centuries of Himalayan wisdom, vibrant thangkas, and
              the echoing hum of prayer wheels.
            </p>
          </div>
          {[
            { title: "Heritage", desc: "Living archives of Himalayan Buddhism and Sikkimese culture." },
            { title: "Mindful Experience", desc: "Slow, serene interactions for contemplative exploration." },
            { title: "Accessibility", desc: "A sanctuary accessible from anywhere in the world." },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl border bg-card/60 backdrop-blur p-6 ring-1 ring-gold/20">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-gradient-to-tr from-gold/70 to-saffron/60" />
                <h3 className="text-xl font-semibold">{c.title}</h3>
              </div>
              <p className="mt-3 text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* Virtual Sanctuary */}
      <section id="sanctuary" className="py-16">
        <div className="container mx-auto">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
            <h2 className="text-3xl md:text-4xl font-semibold flex items-center gap-2">
              <Landmark className="text-gold" /> Virtual Sanctuary Experience
            </h2>
            <div className="text-sm text-muted-foreground">Hover to reveal names — click for 360° placeholders</div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {monasteries.map((m) => (
              <MonasteryCard key={m.name} name={m.name} query={m.query} overlayUrl={(m as any).overlayUrl} />
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Meditation */}
      <section id="meditation" className="py-16">
        <div className="container mx-auto">
          <MeditationTimer />
        </div>
      </section>

      <SectionDivider />

      {/* Sacred Gallery */}
      <section id="gallery" className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Sacred Gallery</h2>
          <GalleryGrid images={galleryImages} />
        </div>
      </section>

      <SectionDivider />

      {/* Contact & Blessing */}
      <section id="contact" className="py-16">
        <div className="container mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">Contact & Blessing</h2>
            <p className="mt-3 text-muted-foreground">
              Om Mani Padme Hum — May the people of Sikkim and all beings be happy.
            </p>
            <div className="mt-4 text-sm text-[hsl(var(--stone))]">Location: Virtual Sanctuary inspired by Rumtek Monastery, Sikkim.</div>
            <div className="mt-6 rounded-2xl border bg-card/60 backdrop-blur p-6">
              <ContactForm />
            </div>
          </div>
          <div className="grid gap-6">
            <div className="rounded-2xl border bg-card/60 backdrop-blur p-6">
              <div className="flex items-center gap-3">
                <Bell className="text-gold" />
                <div className="font-medium">End of Session</div>
              </div>
              <p className="mt-2 text-muted-foreground">
                Upon completion, a soft bell chime will sound — gently guiding you back.
              </p>
            </div>
            <div className="rounded-2xl border bg-card/60 backdrop-blur p-6 italic text-[hsl(var(--stone))]">
              “May you be well; may you be at peace.”
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
