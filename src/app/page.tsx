'use client';

import { motion } from "framer-motion";
import { Menu, MapPin, MoonStar, Coffee, Sparkles, Clock } from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";

const menuItems = [
  {
    name: "Velvet Mocha Elixir",
    description:
      "Single-origin espresso, smoked cacao, Madagascar vanilla cloud, crystallized citrus peel.",
    flavor: "Silky • Aromatic • Citrus finish",
    price: "$6.80",
    image:
      "https://images.unsplash.com/photo-1432107294469-414527cb5c65?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Amber Honey Cold Brew",
    description:
      "24-hour Ethiopian brew, burnt sugar honeycomb, orange blossom mist, mineral tonic.",
    flavor: "Bright • Honeyed • Effervescent",
    price: "$6.40",
    image:
      "https://images.unsplash.com/photo-1481391032119-d89fee407e44?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Midnight Cascara Latte",
    description:
      "Cascara reduction, oat cream, smoked cedar bitters, black lava salt microfoam.",
    flavor: "Deep • Floral • Textured",
    price: "$6.20",
    image:
      "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1200&auto=format&fit=crop",
  },
];

const experiences = [
  {
    title: "Immersive brew bar",
    copy: "Watch our baristas craft slow pours & curated flights at the illuminated brew altar.",
    icon: <Coffee className="h-6 w-6 text-orange-200" strokeWidth={1.5} />,
  },
  {
    title: "Sensorial tasting lounge",
    copy: "Layered lighting, curated soundscapes, and velvet seating invite you to linger.",
    icon: <MoonStar className="h-6 w-6 text-indigo-200" strokeWidth={1.5} />,
  },
  {
    title: "Seasonal rituals",
    copy: "Monthly cupping ceremonies, origin stories, and nocturnal dessert pairings.",
    icon: <Sparkles className="h-6 w-6 text-pink-200" strokeWidth={1.5} />,
  },
];

const testimonials = [
  {
    quote:
      "Every sip feels choreographed. Velvet Brew elevates coffee into an art form I don’t find anywhere else in the city.",
    name: "Isabella Moreau",
    title: "Creative Director, Atelier 22",
  },
  {
    quote:
      "Their flights are a masterclass in flavor. I bring clients here to impress—always hits the mark.",
    name: "Julian Park",
    title: "Founder, Prism Labs",
  },
  {
    quote:
      "The atmosphere transports you. Soft light, magnetic warmth, and a menu that keeps surprising me.",
    name: "Maya Chen",
    title: "Interior Stylist",
  },
];

const gallery = [
  "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
];

const softEase = [0.16, 1, 0.3, 1] as const;

const revealVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: softEase,
      delay: i * 0.12,
    },
  }),
};

export default function Home() {
  const currentStatus = useMemo(() => {
    const date = new Date();
    const hours = date.getHours();
    const open = hours >= 7 && hours < 22;
    return open ? "Open now • serving until 10pm" : "Closed • opens 7am tomorrow";
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-transparent">
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.05),transparent_55%)]" />
      <FloatingOrbs />

      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: softEase }}
        className="relative z-20 mx-auto mt-8 flex w-[92%] max-w-6xl items-center justify-between rounded-full border border-white/10 bg-black/30 px-6 py-3 backdrop-blur-xl"
      >
        <div className="flex items-center gap-3">
          <div className="glass-panel flex h-10 w-10 items-center justify-center rounded-full text-xl font-semibold uppercase tracking-widest">
            VB
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
              Velvet Brew
            </p>
            <p className="text-xs text-white/40">Artisanal Coffee House</p>
          </div>
        </div>

        <div className="hidden items-center gap-6 text-sm uppercase tracking-[0.35em] text-white/50 md:flex">
          <Link href="#rituals" className="transition hover:text-white">
            Rituals
          </Link>
          <Link href="#menu" className="transition hover:text-white">
            Menu
          </Link>
          <Link href="#experience" className="transition hover:text-white">
            Experience
          </Link>
          <Link href="#visit" className="transition hover:text-white">
            Visit
          </Link>
        </div>

        <button
          className="group flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.4em] text-white/70 transition hover:border-white/40 hover:text-white"
          type="button"
        >
          Reserve
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 transition group-hover:border-white/40 group-hover:bg-white/10">
            <Menu className="h-4 w-4" />
          </span>
        </button>
      </motion.nav>

      <main className="relative z-10 mx-auto flex w-[92%] max-w-6xl flex-1 flex-col gap-32 pb-24 pt-16 text-white md:gap-36 md:pt-24">
        <Hero currentStatus={currentStatus} />
        <SignatureMenu />
        <Experience />
        <Gallery />
        <Testimonials />
        <Visit />
      </main>

      <footer className="relative z-10 mt-auto w-full bg-black/30 py-10">
        <div className="mx-auto flex w-[92%] max-w-6xl flex-col justify-between gap-6 text-sm text-white/60 md:flex-row md:items-center">
          <p className="uppercase tracking-[0.35em]">
            Velvet Brew © {new Date().getFullYear()} • Crafted in Reverie District
          </p>
          <div className="flex items-center gap-6 uppercase tracking-[0.35em]">
            <Link href="#menu" className="transition hover:text-white">
              Seasonal Menu
            </Link>
            <Link href="#experience" className="transition hover:text-white">
              Tastings
            </Link>
            <Link href="#visit" className="transition hover:text-white">
              Private Events
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

const heroVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: softEase },
  },
};

function Hero({ currentStatus }: { currentStatus: string }) {
  return (
    <motion.section
      id="rituals"
      variants={heroVariants}
      initial="hidden"
      animate="visible"
      className="relative flex flex-col gap-12 overflow-hidden rounded-[46px] border border-white/10 bg-white/5 px-8 py-14 backdrop-blur-2xl md:flex-row md:px-12"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(255,198,132,0.35),transparent_48%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_20%,rgba(131,106,255,0.25),transparent_55%)] mix-blend-screen" />
        <div className="absolute bottom-0 left-1/2 h-48 w-[65%] -translate-x-1/2 rounded-full bg-gradient-to-t from-black/30 to-transparent blur-3xl" />
      </div>

      <div className="relative flex-1 space-y-6">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.4em] text-white/70">
          New nocturne tasting • Fridays
        </span>
        <h1 className="font-display text-4xl leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
          A sanctuary where velvet nights meet ceremonial coffee.
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-white/70">
          Sip meticulously roasted origins, theatrically presented by baristas who compose each cup
          with light, sound, and aromatic storytelling. Slow down. Stay a while. Let the evening
          unfold.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link
            href="#menu"
            className="shine-border flex items-center justify-center rounded-full bg-gradient-to-r from-[#f7b77d] via-[#f79bad] to-[#7f9cff] px-8 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-black shadow-[0_15px_45px_rgba(247,155,173,0.45)] transition hover:scale-[1.02]"
          >
            Explore Menu
          </Link>
          <Link
            href="#visit"
            className="flex items-center justify-center rounded-full border border-white/25 px-8 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-white/80 transition hover:border-white hover:text-white"
          >
            Reserve Ritual
          </Link>
        </div>

        <div className="grid gap-4 text-sm text-white/70 sm:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-black/30 p-4">
            <p className="uppercase tracking-[0.35em] text-white/50">Locations</p>
            <p className="mt-2 font-display text-lg text-white">
              Reverie District <span className="text-white/40">•</span> Skyward Lane
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.4em] text-white/40">
              {currentStatus}
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-black/30 p-4">
            <p className="uppercase tracking-[0.35em] text-white/50">Highlights</p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs uppercase tracking-[0.3em] text-white/60">
              <span className="rounded-full border border-white/10 px-3 py-1">Brew flights</span>
              <span className="rounded-full border border-white/10 px-3 py-1">
                Dessert pairings
              </span>
              <span className="rounded-full border border-white/10 px-3 py-1">Cascara bar</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex-1">
        <div className="glass-panel soft-shadow relative flex h-full min-h-[360px] flex-col justify-end overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-90"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(12, 8, 20, 0.2) 0%, rgba(12, 8, 20, 0.85) 70%), url('https://images.unsplash.com/photo-1507914372361-74ee826d2012?q=80&w=1200&auto=format&fit=crop')",
            }}
          />
          <div className="relative space-y-4 px-8 pb-10 pt-40">
            <p className="text-xs uppercase tracking-[0.5em] text-white/60">Tonight&apos;s pour</p>
            <h2 className="font-display text-3xl text-white">Nocturne Cascade Flight</h2>
            <p className="max-w-sm text-sm leading-relaxed text-white/75">
              Three expressions of the Asteria roast featuring smoked vanilla, tamarind mist, and
              caramelized pear textures. Limited to 12 sets nightly.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function SignatureMenu() {
  return (
    <motion.section
      id="menu"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={revealVariants}
      className="space-y-10"
    >
      <div className="flex flex-col gap-3">
        <span className="text-xs uppercase tracking-[0.4em] text-white/40">Signature pours</span>
        <h2 className="font-display text-4xl text-white">Seasonal curiosities</h2>
        <p className="max-w-2xl text-lg text-white/65">
          Each beverage is choreographed to highlight rhythm, aroma, and cadence. Expect layered
          textures, temperature shifts, and playful sensory cues.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {menuItems.map((item, index) => (
          <motion.article
            key={item.name}
            custom={index}
            variants={revealVariants}
            className="glass-panel shine-border flex flex-col overflow-hidden"
          >
            <div
              className="h-56 w-full flex-shrink-0 bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(12, 8, 20, 0.15) 0%, rgba(12, 8, 20, 0.85) 100%), url('${item.image}')`,
              }}
            />
            <div className="flex flex-1 flex-col gap-4 p-7">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl text-white">{item.name}</h3>
                <span className="text-sm uppercase tracking-[0.35em] text-white/60">
                  {item.price}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-white/70">{item.description}</p>
              <div className="mt-auto text-xs uppercase tracking-[0.3em] text-white/45">
                {item.flavor}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}

function Experience() {
  return (
    <motion.section
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={revealVariants}
      className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center"
    >
      <div className="space-y-6">
        <span className="text-xs uppercase tracking-[0.4em] text-white/40">The experience</span>
        <h2 className="font-display text-4xl text-white">A choreography of light & flavor</h2>
        <p className="max-w-2xl text-lg text-white/70">
          We designed Velvet Brew as a multisensory salon. From aromatic vapor trails to hand-cut
          ice spheres, every detail invites you into a world of rich storytelling and modern ritual.
        </p>

        <div className="grid gap-5 sm:grid-cols-3">
          {experiences.map((feature, index) => (
            <motion.div
              key={feature.title}
              custom={index}
              variants={revealVariants}
              className="glass-panel flex flex-col gap-4 p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10">
                {feature.icon}
              </div>
              <h3 className="font-display text-xl text-white">{feature.title}</h3>
              <p className="text-sm text-white/65">{feature.copy}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="glass-panel relative overflow-hidden rounded-[40px] border-white/15 bg-white/10 p-8">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-screen"
          style={{
            backgroundImage:
              "linear-gradient(160deg, rgba(12,8,20,0.7) 0%, rgba(12,8,20,0.95) 70%), url('https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1200&auto=format&fit=crop')",
          }}
        />
        <div className="relative space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">Moments</p>
          <h3 className="font-display text-3xl text-white">
            Gilded hour table-side pour-over, backlit by prism glass.
          </h3>
          <p className="text-sm text-white/70">
            Reserve the sensory lounge after dusk for intimate tastings, custom playlists, and
            desserts composed to match your flight.
          </p>
          <button className="rounded-full border border-white/20 px-6 py-2 text-xs uppercase tracking-[0.35em] text-white/80 transition hover:border-white hover:text-white">
            Curate your evening
          </button>
        </div>
      </div>
    </motion.section>
  );
}

function Gallery() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={revealVariants}
      className="space-y-10"
    >
      <div className="flex flex-col gap-3">
        <span className="text-xs uppercase tracking-[0.4em] text-white/40">Atmosphere</span>
        <h2 className="font-display text-4xl text-white">Captured moments</h2>
        <p className="max-w-2xl text-lg text-white/65">
          Immersed in amber glow and soft echoes of vinyl, Velvet Brew is an escape designed for
          night owls, dreamers, and storytellers.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {gallery.map((src, index) => (
          <motion.div
            key={src}
            custom={index}
            variants={revealVariants}
            className="group relative overflow-hidden rounded-[34px] border border-white/10"
          >
            <div
              className="h-[320px] w-full bg-cover bg-center transition duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url('${src}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

function Testimonials() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={revealVariants}
      className="glass-panel overflow-hidden rounded-[40px] border-white/15 bg-black/40 p-10 md:p-14"
    >
      <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="md:max-w-sm">
          <span className="text-xs uppercase tracking-[0.4em] text-white/40">Whispers</span>
          <h2 className="mt-3 font-display text-4xl text-white">
            Loved by late-night creators & collectors.
          </h2>
          <p className="mt-4 text-lg text-white/65">
            We honor refinement and warmth in equal measure. Here’s what our regulars say after
            lingering past midnight.
          </p>
        </div>

        <div className="relative grid gap-6 md:max-w-xl">
          {testimonials.map((testimonial, index) => (
            <motion.blockquote
              key={testimonial.name}
              custom={index}
              variants={revealVariants}
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <p className="text-lg leading-relaxed text-white/80">&ldquo;{testimonial.quote}&rdquo;</p>
              <footer className="mt-6 text-sm uppercase tracking-[0.35em] text-white/50">
                {testimonial.name}
                <span className="ml-3 text-white/30">{testimonial.title}</span>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function Visit() {
  return (
    <motion.section
      id="visit"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={revealVariants}
      className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]"
    >
      <div className="glass-panel flex flex-col gap-6 p-10">
        <span className="text-xs uppercase tracking-[0.4em] text-white/40">Visit</span>
        <h2 className="font-display text-3xl text-white">Velvet Brew Studio</h2>
        <p className="text-sm uppercase tracking-[0.35em] text-white/45">
          781 Skyward Lane • Reverie District
        </p>

        <div className="space-y-4 text-sm text-white/70">
          <div className="flex items-start gap-3">
            <Clock className="mt-1 h-5 w-5 text-white/40" strokeWidth={1.5} />
            <div>
              <p className="uppercase tracking-[0.35em] text-white/40">Hours</p>
              <p>Mon–Thu 7a – 10p</p>
              <p>Fri–Sat 7a – 1a</p>
              <p>Sun 8a – 8p</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="mt-1 h-5 w-5 text-white/40" strokeWidth={1.5} />
            <div>
              <p className="uppercase tracking-[0.35em] text-white/40">Contact</p>
              <p>concierge@velvetbrew.studio</p>
              <p>+1 (917) 555-0115</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.35em] text-white/45">
          <span className="rounded-full border border-white/10 px-3 py-1">Private tastings</span>
          <span className="rounded-full border border-white/10 px-3 py-1">Acoustic sets</span>
          <span className="rounded-full border border-white/10 px-3 py-1">Gallery nights</span>
        </div>

        <Link
          href="#"
          className="mt-4 inline-flex items-center justify-center gap-3 rounded-full border border-white/25 px-6 py-3 text-xs uppercase tracking-[0.4em] text-white/70 transition hover:border-white hover:text-white"
        >
          <span>Plan an event</span>
          <Sparkles className="h-4 w-4" />
        </Link>
      </div>

      <div className="relative overflow-hidden rounded-[40px] border border-white/15">
        <div
          className="h-full min-h-[320px] bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(12,8,20,0.35) 0%, rgba(12,8,20,0.88) 70%), url('https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1200&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-x-6 bottom-6 rounded-3xl border border-white/15 bg-black/50 p-5 text-sm text-white/70 backdrop-blur-md">
          <p className="flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-white/40">
            <MoonStar className="h-4 w-4" strokeWidth={1.5} /> Nightfall signature
          </p>
          <p className="mt-2 font-display text-xl text-white">
            Reserve the starlit atrium for gatherings up to 18 guests.
          </p>
        </div>
      </div>
    </motion.section>
  );
}

function FloatingOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div
        className="orb"
        style={{
          top: "12%",
          left: "8%",
          width: "240px",
          height: "240px",
          background: "radial-gradient(circle, rgba(255,186,110,0.3), transparent 70%)",
        }}
      />
      <div
        className="orb"
        style={{
          bottom: "18%",
          left: "5%",
          width: "320px",
          height: "320px",
          background: "radial-gradient(circle, rgba(127,156,255,0.28), transparent 65%)",
          animationDelay: "-6s",
        }}
      />
      <div
        className="orb"
        style={{
          top: "28%",
          right: "10%",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(247,155,173,0.35), transparent 65%)",
          animationDelay: "-3s",
        }}
      />
    </div>
  );
}
