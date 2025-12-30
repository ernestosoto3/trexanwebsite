"use client";

import { useMemo, useState } from "react";
import Hero from "../(componentes)/ui/Hero";
import IntroText from "../(componentes)/ui/IntroText";

export default function ContactPage() {
  const title = "Asegure la trazabilidad de sus activos ahora";

  const subtitle = useMemo(() => {
    const safeIndustry = "su sector";
    return `Dé el primer paso hacia una disposición final certificada. Proporcione sus detalles y nuestro equipo de cumplimiento para ${safeIndustry} le ayudará a estructurar un esquema de retiro seguro y trazable.`;
  }, []);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    volume: "",
    contactPreference: "email",
    message: "",
    privacy: false,
    website: "", // honeypot
  });

  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">(
    "idle"
  );

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      company: "",
      industry: "",
      volume: "",
      contactPreference: "email",
      message: "",
      privacy: false,
      website: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("ok");
      handleReset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="bg-white">
      {/* Hero */}
      <Hero
        bg={{
          type: "image",
          src: "/images/industrias/GRUPO TREXAN-18.jpg",
          alt: "Contacto",
        }} 
        height="60vh"
        badgeText="Contacto"
        title="Conecte con Expertos en Valorización"
        subtitle="Obtenga una solución integral de retiro, trazabilidad y cumplimiento normativo diseñada para su sector."
      />

      {/* Intro text */}
      <IntroText>
        Proporcione sus detalles para recibir una propuesta técnica y económica.
        Nuestro equipo especializado le contactará lo antes posible para agilizar
        su gestión de residuos.
      </IntroText>

      {/* Form + Contact Info side-by-side */}
      <section className="py-16 md:py-20 bg-zinc-50">
        <div className="section">
          <div className="max-w-6xl mx-auto">
            {/* Title + Subtitle */}
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
                {title}
              </h2>
              <p className="text-base md:text-lg text-zinc-600">{subtitle}</p>
            </div>

            {/* Two-column layout */}
            <div className="grid lg:grid-cols-2 gap-6 items-start">
              {/* Form */}
              <form
                onSubmit={handleSubmit}
                className="bg-white border border-zinc-200 shadow-sm p-8 md:p-10 space-y-6"
              >
                {/* Nombre Completo */}
                <div>
                  <label className="block text-sm font-medium text-zinc-900 mb-2">
                    Nombre Completo <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-zinc-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-zinc-900 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-zinc-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none"
                  />
                </div>

                {/* Teléfono */}
                <div>
                  <label className="block text-sm font-medium text-zinc-900 mb-2">
                    Teléfono <span className="text-zinc-400">(opcional)</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-zinc-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none"
                  />
                </div>

                {/* Empresa */}
                <div>
                  <label className="block text-sm font-medium text-zinc-900 mb-2">
                    Empresa / Institución{" "}
                    <span className="text-zinc-400">(opcional)</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-zinc-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none"
                  />
                </div>

                {/* Industria */}
                <div>
                  <label className="block text-sm font-medium text-zinc-900 mb-2">
                    Industria <span className="text-zinc-400">(opcional)</span>
                  </label>
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-zinc-300 bg-white focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none"
                  >
                    <option value="">-Seleccionar-</option>
                    <option value="automotriz">Automotriz</option>
                    <option value="manufactura">Manufactura</option>
                    <option value="gobierno">Gobierno</option>
                    <option value="electronica">Electrónica</option>
                    <option value="tecnologia">Tecnología</option>
                    <option value="salud">Salud</option>
                    <option value="retail">Retail</option>
                    <option value="educacion">Educación</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                {/* Volumen RAEE (kg) */}
                <div>
                  <label className="block text-sm font-medium text-zinc-900 mb-2">
                    Volumen aproximado de RAEE{" "}
                    <span className="text-zinc-400">(opcional)</span>
                  </label>
                  <select
                    name="volume"
                    value={formData.volume}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-zinc-300 bg-white focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none"
                  >
                    <option value="">-Seleccionar-</option>
                    <option value="1-100">1 – 100 kg</option>
                    <option value="100-1000">100 – 1,000 kg</option>
                    <option value="1000-5000">1,000 – 5,000 kg</option>
                    <option value="5000+">Más de 5,000 kg</option>
                  </select>
                </div>

                {/* Preferencia de contacto */}
                <div>
                  <label className="block text-sm font-medium text-zinc-900 mb-2">
                    ¿Cómo prefieres que te contactemos?{" "}
                    <span className="text-zinc-400">(opcional)</span>
                  </label>
                  <select
                    name="contactPreference"
                    value={formData.contactPreference}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-zinc-300 bg-white focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none"
                  >
                    <option value="email">Email</option>
                    <option value="phone">Teléfono</option>
                    <option value="whatsapp">WhatsApp</option>
                  </select>
                </div>

                {/* Mensaje */}
                <div>
                  <label className="block text-sm font-medium text-zinc-900 mb-2">
                    Mensaje <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Cuéntanos más sobre tus necesidades..."
                    className="w-full px-4 py-2.5 border border-zinc-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none resize-none"
                  />
                </div>

                {/* Privacy (optional) */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="privacy"
                    checked={formData.privacy}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 text-emerald-600"
                  />
                  <p className="text-sm text-zinc-600">
                    Acepto recibir comunicaciones de Recibásicos. Estamos
                    comprometidos con tu privacidad. Usaremos la información
                    proporcionada para contactarte sobre nuestros servicios.
                    Puedes darte de baja en cualquier momento.{" "}
                    <span className="text-zinc-400">(opcional)</span>
                  </p>
                </div>

                {/* Honeypot */}
                <input
                  type="text"
                  name="website"
                  autoComplete="off"
                  style={{ display: "none" }}
                  tabIndex={-1}
                  value={formData.website}
                  onChange={handleChange}
                />

                {/* Submit + Status */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="px-8 py-3 bg-emerald-700 text-white font-semibold hover:bg-emerald-800 transition-colors disabled:opacity-60"
                  >
                    {status === "sending" ? "Enviando…" : "Enviar"}
                  </button>

                  {status === "ok" && (
                    <p className="mt-4 text-sm font-medium text-emerald-700">
                      ¡Gracias! Te contactaremos pronto.
                    </p>
                  )}
                  {status === "error" && (
                    <p className="mt-4 text-sm font-medium text-red-600">
                      Hubo un error. Intenta de nuevo.
                    </p>
                  )}
                </div>
              </form>

              {/* Contact Info */}
              <div className="bg-white border border-zinc-200 shadow-sm p-8 md:p-10">
                <h3 className="text-xl font-bold text-zinc-900">
                  Información de contacto
                </h3>
                <p className="text-sm text-zinc-600 mt-2">
                  Canales directos para comunicarte con nuestro equipo.
                </p>

                <div className="mt-6 space-y-5">
                  <div>
                    <div className="text-xs uppercase tracking-wide text-zinc-500">
                      Razón social
                    </div>
                    <div className="mt-1 font-medium text-zinc-900">
                      Recibásicos S.A. de C.V.
                    </div>
                  </div>

                  <div>
                    <div className="text-xs uppercase tracking-wide text-zinc-500">
                      Dirección
                    </div>
                    <p className="mt-1 text-zinc-800 leading-relaxed">
                      Eje 132 No.120, Zona Industrial del Potosí
                      <br />
                      C.P. 78395, San Luis Potosí, S.L.P., México
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <div className="text-xs uppercase tracking-wide text-zinc-500">
                        Email general
                      </div>
                      <a
                        className="mt-1 inline-block font-medium text-emerald-800 hover:text-emerald-900 underline underline-offset-4"
                        href="mailto:contacto@recibasicos.com"
                      >
                        contacto@recibasicos.com
                      </a>
                    </div>

                    <div>
                      <div className="text-xs uppercase tracking-wide text-zinc-500">
                        Teléfono
                      </div>
                      <a
                        className="mt-1 inline-block font-medium text-zinc-900 hover:underline underline-offset-4"
                        href="tel:+524448292422"
                      >
                        +52 (444) 829 2422
                      </a>
                    </div>
                  </div>

                  <div>
                    <div className="text-xs uppercase tracking-wide text-zinc-500">
                      WhatsApp
                    </div>
                    <a
                      href="https://wa.me/524448292422"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-block font-medium text-zinc-900 hover:underline underline-offset-4"
                    >
                      +52 (444) 219 7673
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map full width */}
            <div className="mt-10 border border-zinc-200 bg-white shadow-sm overflow-hidden">
              <div className="p-6 md:p-8 border-b border-zinc-200">
                <h3 className="text-lg font-semibold text-zinc-900">Ubicación</h3>
                <p className="text-sm text-zinc-600 mt-1">
                  Visítanos o utiliza el mapa para ubicar nuestra planta.
                </p>
              </div>

              <div className="h-105 md:h-130">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3880.3237148335484!2d-100.88085848895486!3d22.0732802797664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842aa50060ad87ff%3A0xbaab4d0cea4484df!2sRecib%C3%A1sicos%20SA%20de%20CV!5e1!3m2!1sen!2smx!4v1764013510685!5m2!1sen!2smx"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa - Recibásicos"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
