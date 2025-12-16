"use client";

import { useState } from "react";

interface ContactFormProps {
  industry?: string;
  title?: string;
  subtitle?: string;
}

export default function ContactForm({ 
  industry = "Gobierno",
  title = "Cuéntanos sobre tus necesidades de reciclaje",
  subtitle = "Completa el formulario y nuestro equipo se pondrá en contacto contigo"
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    industry: industry.toLowerCase(),
    volume: "",
    contactPreference: "",
    message: "",
    privacy: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    
    console.log("Form submitted:", formData);
    
    alert("¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.");
    handleReset();
  };

  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      industry: industry.toLowerCase(),
      volume: "",
      contactPreference: "",
      message: "",
      privacy: false,
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  return (
    <section className="py-16 md:py-20 bg-zinc-50">
      <div className="section">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              {title}
            </h2>
            <p className="text-base md:text-lg text-zinc-600">
              {subtitle}
            </p>
          </div>

          <form 
            onSubmit={handleSubmit}
            className="bg-white border border-zinc-200 shadow-sm p-8 md:p-10 space-y-6"
          >
            {/* First Name */}
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-zinc-900 mb-2">
                Nombre <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 border border-zinc-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none transition-colors"
              />
            </div>

            {/* Last Name */}
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-zinc-900 mb-2">
                Apellido <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 border border-zinc-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none transition-colors"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-900 mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 border border-zinc-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none transition-colors"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-zinc-900 mb-2">
                Teléfono <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 border border-zinc-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none transition-colors"
              />
            </div>

            {/* Company */}
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-zinc-900 mb-2">
                Empresa / Institución <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 border border-zinc-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none transition-colors"
              />
            </div>

            {/* Industry Dropdown */}
            <div>
              <label htmlFor="industry" className="block text-sm font-medium text-zinc-900 mb-2">
                Industria <span className="text-red-500">*</span>
              </label>
              <select
                id="industry"
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 border border-zinc-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none transition-colors bg-white"
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

            {/* Volume Estimate */}
            <div>
              <label htmlFor="volume" className="block text-sm font-medium text-zinc-900 mb-2">
                Volumen Estimado
              </label>
              <select
                id="volume"
                name="volume"
                value={formData.volume}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-zinc-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none transition-colors bg-white"
              >
                <option value="">-Seleccionar-</option>
                <option value="small">Menos de 50 equipos</option>
                <option value="medium">50-200 equipos</option>
                <option value="large">200-500 equipos</option>
                <option value="xlarge">Más de 500 equipos</option>
              </select>
            </div>

            {/* Contact Preference */}
            <div>
              <label htmlFor="contactPreference" className="block text-sm font-medium text-zinc-900 mb-2">
                ¿Cómo prefieres que te contactemos?
              </label>
              <select
                id="contactPreference"
                name="contactPreference"
                value={formData.contactPreference}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-zinc-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none transition-colors bg-white"
              >
                <option value="">-Seleccionar-</option>
                <option value="email">Email</option>
                <option value="phone">Teléfono</option>
                <option value="whatsapp">WhatsApp</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-zinc-900 mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2.5 border border-zinc-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none transition-colors resize-none"
                placeholder="Cuéntanos más sobre tus necesidades..."
              ></textarea>
            </div>

            {/* Privacy Notice */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="privacy"
                name="privacy"
                checked={formData.privacy}
                onChange={handleChange}
                className="mt-1 w-4 h-4 border-zinc-300 text-emerald-600 focus:ring-emerald-600"
              />
              <label htmlFor="privacy" className="text-sm text-zinc-600">
                Acepto recibir comunicaciones de Recibásicos. Estamos comprometidos con tu privacidad. 
                Usaremos la información proporcionada para contactarte sobre nuestros servicios. 
                Puedes darte de baja en cualquier momento.
              </label>
            </div>

            {/* Submit Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                className="px-8 py-3 bg-emerald-700 text-white font-semibold hover:bg-emerald-800 transition-colors"
              >
                Enviar
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="px-8 py-3 bg-zinc-500 text-white font-semibold hover:bg-zinc-600 transition-colors"
              >
                Limpiar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}