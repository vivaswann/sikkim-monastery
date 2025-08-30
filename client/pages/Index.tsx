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
    { alt: "Prayer wheels", image: "https://cdn.builder.io/api/v1/image/assets%2F83fe13fcff68445dafe105ce571cf6cb%2F58b40cfabe704e5aade257ac8b51fa65" },
    { alt: "Chanting monks", image: "https://cdn.builder.io/api/v1/image/assets%2F83fe13fcff68445dafe105ce571cf6cb%2F9c5f202d49894d828be3636caacb0d9c?format=webp" },
    { alt: "Thangka art", image: "https://cdn.builder.io/api/v1/image/assets%2F83fe13fcff68445dafe105ce571cf6cb%2Ff1d39cb021dd431ab185662b241b5d33?format=webp" },
    { alt: "Stupa", image: "https://cdn.builder.io/o/assets%2F83fe13fcff68445dafe105ce571cf6cb%2F91e86f07e1cd4590ad208fbac30fa03b?alt=media&token=14ec6079-1a94-4b8f-8d04-e2777f667a5a&apiKey=83fe13fcff68445dafe105ce571cf6cb" },
    { alt: "Himalayan view", image: "https://cdn.builder.io/api/v1/image/assets%2F83fe13fcff68445dafe105ce571cf6cb%2F9bc12e1feda44a9aa37b29dfb4e7afd1" },
    { alt: "Monastery murals", image: "https://cdn.builder.io/api/v1/image/assets%2F83fe13fcff68445dafe105ce571cf6cb%2F2cc34870ea1a49f88ede90069ea687a2" },
  ];

  return (
    <div className="relative">

      {/* Hero */}
      <section id="hero" className="relative min-h-[788px] flex items-center pt-20" style={{ color: "rgba(110,69,29,1)", backgroundColor: "rgba(176,132,6,0.22)", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}>
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
            <div className="mt-10 italic text-lg" style={{ color: "rgba(68,58,42,1)" }}>“In the silence of the mountains, wisdom speaks.”</div>
          </motion.div>
        </div>
      </section>

      <SectionDivider image="https://cdn.builder.io/api/v1/image/assets%2F83fe13fcff68445dafe105ce571cf6cb%2F97556c7877e14002983e5f85174d1cf0" />

      {/* About */}
      <section id="about" className="py-14" style={{ backgroundColor: "rgba(176,132,6,0.22)" }}>
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

      <SectionDivider image="https://cdn.builder.io/api/v1/image/assets%2F83fe13fcff68445dafe105ce571cf6cb%2F40a87c7ac526413282fb43078cde159c" />

      {/* Virtual Sanctuary */}
      <section id="sanctuary" className="py-16" style={{ backgroundColor: "rgba(176,132,6,0.22)" }}>
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

      <SectionDivider image="https://cdn.builder.io/api/v1/image/assets%2F83fe13fcff68445dafe105ce571cf6cb%2F85ce55e604d94e8abe8a5b7d1044a742" />

      {/* Meditation */}
      <section id="meditation" className="py-16" style={{ backgroundColor: "rgba(176,132,6,0.22)" }}>
        <div className="container mx-auto">
          <MeditationTimer />
        </div>
      </section>

      <SectionDivider image="https://cdn.builder.io/api/v1/image/assets%2F83fe13fcff68445dafe105ce571cf6cb%2Fc70da5698cbe495abb42a87b7033abcc" />

      {/* Sacred Gallery */}
      <section id="gallery" className="py-16" style={{ backgroundColor: "rgba(176,132,6,0.22)" }}>
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Sacred Gallery</h2>
          <GalleryGrid images={galleryImages} />
        </div>
      </section>

      <SectionDivider image="https://cdn.builder.io/api/v1/image/assets%2F83fe13fcff68445dafe105ce571cf6cb%2F42524de79cb542b5a0664fd583d4221c" />

      {/* Contact & Blessing */}
      <section id="contact" className="py-16" style={{ backgroundColor: "rgba(176,132,6,0.22)" }}>
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
