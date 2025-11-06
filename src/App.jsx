import React, { useEffect } from 'react'
  import { motion } from 'framer-motion'
  import { Code2, Wrench, Palette, LineChart, Globe2, Instagram, ArrowRight, ChevronRight, Mail, Linkedin, CheckCircle2, ShieldCheck, CalendarClock } from 'lucide-react'
  import logo from './assets/logo.png'
  import heroImg from './assets/hero.avif'

  // === Paleta de marca (tokens rápidos) ===
  const BRAND = {
    yellow: '#FDB913',
    green: '#007A33',
    red: '#C1272D',
    neutralDark: '#1C1C1C',
    neutralGray: '#5A5A5A',
    neutralLight: '#E5E5E5',
  };

  // Utilidad para animaciones simples
  const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };


  function NavBar() {
    const links = [
      { href: '#inicio', label: 'Inicio' },
      { href: '#servicios', label: 'Servicios' },
      { href: '#casos', label: 'Casos' },
      { href: '#proceso', label: 'Proceso' },
      { href: '#planes', label: 'Planes' },
      { href: '#equipo', label: 'Equipo' },
      { href: '#contacto', label: 'Contacto' },
    ];
    return (
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 dark:bg-neutral-900/80 border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-3">
            <img src={logo} alt="Kūryba Studio" className="h-8 w-auto drop-shadow-sm" />
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="font-medium italic hover:opacity-80 transition-opacity">
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-bold uppercase shadow hover:shadow-md transition-shadow"
            style={{ backgroundColor: BRAND.yellow }}
          >
            Empezar <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </header>
    );
  }

  function Hero() {
    return (
      <section id="inicio" className="relative">
        {/* Fondo con patrón sutil */}
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                `radial-gradient(circle at 10% 10%, ${BRAND.yellow}15 0 20%, transparent 22%),` +
                `radial-gradient(circle at 80% 20%, ${BRAND.green}10 0 16%, transparent 18%),` +
                `radial-gradient(circle at 50% 90%, ${BRAND.red}12 0 20%, transparent 22%)`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-900" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium border border-neutral-200/70 dark:border-neutral-800/80 mb-4">
                <CheckCircle2 className="w-4 h-4" /> Foco en WordPress, Elementor y Mantenimiento
              </div>
              {/* Contenido de Hero */}
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
                Soluciones digitales a medida.
              </h1>
              <p className="mt-6 text-lg md:text-xl text-neutral-700 dark:text-neutral-300 max-w-2xl">
                Desarrollo web y mantenimiento para negocios que quieren crecer.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="#planes"
                  className="rounded-2xl px-5 py-3 font-bold uppercase shadow hover:shadow-md transition-shadow"
                  style={{ backgroundColor: BRAND.yellow }}
                >
                  Ver planes
                </a>
                <a href="#contacto" className="rounded-2xl px-5 py-3 font-semibold border border-neutral-300 dark:border-neutral-700">
                  Agendá una llamada
                </a>
              </div>
            </motion.div>

            {/* Imagen a la derecha */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="w-full">
              <div className="relative rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-sm">
                <img src={heroImg} alt="Kūryba Studio – Hero" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  function Servicios() {
    // Servicios reenfocados.
    const items = [
      {
        icon: <Code2 className="w-6 h-6" />, title: 'Desarrollo Web (Core)', color: BRAND.yellow,
        desc: 'WordPress + Elementor. Sitios corporativos, landings y catálogos.', bullets: ['Diseño responsive', 'Performance (Litespeed)', 'Integraciones'],
      },
      {
        icon: <Wrench className="w-6 h-6" />, title: 'Mantenimiento (Core)', color: BRAND.green,
        desc: 'Soporte mensual, backups, updates y mejoras continuas.', bullets: ['Hardening + seguridad', 'Velocidad y uptime', 'Pequeños cambios incluidos'],
      },
      {
        icon: <Palette className="w-6 h-6" />, title: 'Diseño UX/UI', color: BRAND.red,
        desc: 'Prototipado en Figma para apps y sitios web complejos.', bullets: ['UI kit en Figma', 'Prototipos mobile-first', 'Sistemas de diseño'],
      },
      {
        icon: <Globe2 className="w-6 h-6" />, title: 'Identidad Visual', color: BRAND.yellow,
        desc: 'Creación de sistemas de marca y branding digital.', bullets: ['Manual de marca', 'Logo y paleta', 'Piezas gráficas base'],
      },
      {
        icon: <Instagram className="w-6 h-6" />, title: 'Redes', color: BRAND.green,
        desc: 'Estrategia de contenido y plantillas para redes sociales.', bullets: ['Plantillas RRSS', 'Análisis de métricas', 'Tono de voz'],
      },
      {
        icon: <LineChart className="w-6 h-6" />, title: 'SEO', color: BRAND.red,
        desc: 'Optimización On-Page y configuración de analítica.', bullets: ['Keyword research', 'Schema básico', 'Google Analytics (GA4)'],
      },
    ];
    return (
      <section id="servicios" className="py-16 md:py-24 bg-white dark:bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-3xl md:text-4xl font-extrabold italic mb-10">
            Servicios
          </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((s, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white/60 dark:bg-neutral-900/60 backdrop-blur">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-xl" style={{ backgroundColor: s.color + '22' }}>{s.icon}</div>
                  <h3 className="font-bold text-lg">{s.title}</h3>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-4">{s.desc}</p>
                <ul className="space-y-2 text-sm">
                  {s.bullets.map((b, idx) => (
                    <li key={idx} className="flex items-center gap-2"><ChevronRight className="w-4 h-4 opacity-60" /> {b}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  function Casos() {
    const cases = [
      { name: 'Deep‑Light', tag: 'Comunidad / Workshops', color: BRAND.yellow, text: 'Diseño + efectos visuales + registro de usuarios.' },
      { name: 'Waterplast', tag: 'Catálogo de productos', color: BRAND.green, text: 'Elementor + ACF dinámico + optimización SEO.' },
      { name: 'Quipu Blog', tag: 'Medio editorial', color: BRAND.red, text: 'Plantillas personalizadas, performance y accesibilidad.' },
    ];
    return (
      <section id="casos" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex items-end justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold italic">Casos</h2>
            <a href="#contacto" className="text-sm underline flex items-center gap-1">Ver más <ArrowRight className="w-4 h-4" /></a>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {cases.map((c, i) => (
              <motion.article key={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                <div className="aspect-[16/10] relative">
                  <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${c.color}40, transparent)` }} />
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,_rgba(0,0,0,0.05)_25%,_transparent_25%),linear-gradient(-45deg,_rgba(0,0,0,0.05)_25%,_transparent_25%),linear-gradient(45deg,_transparent_75%,_rgba(0,0,0,0.05)_75%),linear-gradient(-45deg,_transparent_75%,_rgba(0,0,0,0.05)_75%)] bg-[length:20px_20px] opacity-40" />
                </div>
                <div className="p-5">
                  <span className="text-xs px-2 py-1 rounded-full border border-neutral-200 dark:border-neutral-700" style={{ backgroundColor: c.color + '15' }}>{c.tag}</span>
                  <h3 className="mt-3 text-xl font-bold">{c.name}</h3>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{c.text}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    );
  }

  function Proceso() {
    const steps = [
    { 
      icon: <Palette className="w-5 h-5" />, 
      title: "Descubrimiento", 
      text: "Comenzamos con un brief completo para entender tus objetivos, definir el alcance y la estructura del sitio." 
    },
    { 
      icon: <Code2 className="w-5 h-5" />, 
      title: "Diseño + Dev", 
      text: "Prototipamos el diseño en Figma y luego lo construimos en WordPress + Elementor con buenas prácticas." 
    },
    { 
      icon: <ShieldCheck className="w-5 h-5" />, 
      title: "QA + Lanzamiento", 
      text: "Testeamos la funcionalidad y responsividad. Optimizamos performance, seguridad y SEO básico antes de publicar." 
    },
    { 
      icon: <CalendarClock className="w-5 h-5" />, 
      title: "Mantenimiento", 
      text: "Ofrecemos soporte mensual para actualizaciones, monitoreo de seguridad, backups y revisiones funcionales." 
    },
  ];
  
  return (
    <section id="proceso" className="py-16 md:py-24 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          variants={fadeUp} 
          initial="hidden" 
          whileInView="show" 
          viewport={{ once: true }} 
          className="text-3xl md:text-4xl font-extrabold italic mb-8"
        >
          Nuestro proceso
        </motion.h2>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl" style={{ backgroundColor: BRAND.yellow + "22" }}>{s.icon}</div>
                <h3 className="font-bold">{s.title}</h3>
              </div>
              <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

  function Planes() {
    const tiers = [
      {
        name: 'Landing Page',
        price: 'USD 300 +',
        color: BRAND.yellow,
        best: false,
        features: ['Sitio web de 1 página', 'Diseño responsive', 'Formulario de contacto', 'Integración WhatsApp', 'SEO on-page básico'],
      },
      {
        name: 'Sitio Institucional',
        price: 'USD 500 +',
        color: BRAND.green,
        best: true,
        features: ['Hasta 5 páginas', 'Diseño responsive', 'Blog básico', 'Formularios', 'Soporte 15 días'],
      },
      {
        name: 'Pack de Upgrades',
        price: 'Añadir',
        color: BRAND.red,
        best: false,
        features: ['Pack Branding (Logo, paleta)', 'Pack Redes (Plantillas)', 'Diseño UX/UI Avanzado', 'Configuración SEO', 'Mantenimiento mensual'],
      },
    ];
    return (
      <section id="planes" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-3xl md:text-4xl font-extrabold italic mb-10">Planes</motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((t, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className={`rounded-2xl border p-6 bg-white dark:bg-neutral-900 ${t.best ? 'border-[3px]' : 'border'} `} style={{ borderColor: t.best ? t.color : undefined }}>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">{t.name}</h3>
                  <span className="text-sm px-2 py-1 rounded-full" style={{ backgroundColor: t.color + '15' }}>{t.best ? 'Recomendado' : ' '}</span>
                </div>
                <div className="mt-4 text-3xl font-extrabold">{t.price}</div>
                <ul className="mt-4 space-y-2 text-sm">
                  {t.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" style={{ color: t.color }} /> {f}</li>
                  ))}
                </ul>
                <a href="#contacto" className="mt-6 inline-flex items-center gap-2 rounded-2xl px-4 py-2 font-semibold border border-neutral-300 dark:border-neutral-700">
                  {t.price === 'Añadir' ? 'Consultar' : 'Empezar'} <ArrowRight className="w-4 h-4" />
                </a>
                <p className="mt-3 text-xs text-neutral-500 dark:text-neutral-400">*Precios base. Los upgrades se cotizan por separado.</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-sm text-neutral-700 dark:text-neutral-300">
            Mantenimiento Básico opcional desde <strong>USD 50/mes</strong> (backups, actualizaciones, seguridad).
          </div>
        </div>
      </section>
    );
  }

  function Equipo() {
    const people = [
      { name: 'Esteban', role: 'Web Dev / WordPress + Elementor', color: BRAND.yellow },
      { name: 'Gaby', role: 'UX/UI Designer', color: BRAND.green },
      { name: 'Kevin', role: 'Marketing Digital / Estrategia', color: BRAND.red },
    ];
    return (
      <section id="equipo" className="py-16 md:py-24 bg-white dark:bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-3xl md:text-4xl font-extrabold italic mb-10">Equipo</motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {people.map((p, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                <div className="aspect-square rounded-xl mb-4" style={{ background: `linear-gradient(135deg, ${p.color}30, transparent)` }} />
                <h3 className="font-bold">{p.name}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">{p.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  function Contacto() {
    return (
      <section id="contacto" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-3xl md:text-4xl font-extrabold italic mb-8">Hablemos</motion.h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.form variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm">Nombre</label>
                  <input required placeholder="Tu nombre" className="mt-1 w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2" />
                </div>
                <div>
                  <label className="text-sm">Email</label>
                  <input type="email" required placeholder="tu@email.com" className="mt-1 w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm">Mensaje</label>
                  <textarea required rows={5} placeholder="Contanos qué plan te interesa y si necesitás upgrades" className="mt-1 w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2" />
                </div>
              </div>
              <button type="submit" className="mt-4 rounded-2xl px-5 py-3 font-bold uppercase shadow hover:shadow-md transition-shadow" style={{ backgroundColor: BRAND.yellow }}>
                Enviar
              </button>
              <p className="mt-3 text-xs text-neutral-500 dark:text-neutral-400">*Integramos este formulario a tu email o CRM cuando lancemos.</p>
            </motion.form>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-5 h-5" /> <span>Contacto por email a definir con tu dominio</span>
              </div>
              <div className="flex items-center gap-3 text-sm mt-3">
                <Linkedin className="w-5 h-5" /> <span>LinkedIn: Kuryba Studio</span>
              </div>
              <div className="flex items-center gap-3 text-sm mt-3">
                <Instagram className="w-5 h-5" /> <span>Instagram: @kuryba.studio</span>
              </div>
              <div className="flex items-center gap-3 text-sm mt-3">
                <Globe2 className="w-5 h-5" /> <span>Sitio multi-idioma opcional</span>
              </div>
              <div className="mt-6 p-4 rounded-xl border border-dashed border-neutral-300 dark:border-neutral-700 text-sm">
                <strong>Stack sugerido:</strong> Hello + Elementor + Litespeed + Wordfence + Yoast + Updraft. <br />
                <strong>Extras:</strong> ACF dinámico, JetEngine/Forms, Integraciones simples.
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  function Footer() {
    return (
      <footer className="border-t border-neutral-200 dark:border-neutral-800 py-10 bg-white/60 dark:bg-neutral-950/60 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6 items-start">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="Kūryba Studio" className="h-8 w-auto drop-shadow-sm" />
            </div>
            <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300 max-w-sm">
              Somos una agencia con base en Argentina y raíces lituanas. 
              Unimos tecnología, diseño y estrategia para transformar ideas en productos digitales funcionales, escalables y estéticos.
            </p>
          </div>
          <div className="text-sm">
            <div className="font-semibold mb-2">Mapa</div>
            <ul className="space-y-2">
              <li><a href="#servicios" className="hover:underline font-medium italic">Servicios</a></li>
              <li><a href="#casos" className="hover:underline font-medium italic">Casos</a></li>
              <li><a href="#planes" className="hover:underline font-medium italic">Planes</a></li>
              <li><a href="#equipo" className="hover:underline font-medium italic">Equipo</a></li>
            </ul>
          </div>
          <div className="text-sm">
            <div className="font-semibold mb-2">Legales</div>
            <ul className="space-y-2">
              <li>© {new Date().getFullYear()} Kūryba Studio</li>
              <li>Brand: Montserrat · Paleta base B&W + acentos amarillo, verde y rojo.</li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }

 

  export default function App() {
    useEffect(() => {
      // Dark mode automático según preferencia del SO
      if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
      }
    }, []);

    return (
      <div className="min-h-screen text-neutral-900 dark:text-neutral-100 bg-white dark:bg-neutral-900">
        <NavBar />
        <Hero />
        <Servicios />
        <Casos />
        <Proceso />
        <Planes />
        <Equipo />
        <Contacto />
        <Footer />
      </div>
    );
  }
