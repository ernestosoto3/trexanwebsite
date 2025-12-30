"use client";

import { memo, useState } from "react";

// ============================================================================
// TYPES
// ============================================================================
interface ContactFormProps {
  industry?: string;
}

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  industry: string;
  volume: string;
  contactPreference: string;
  message: string;
  privacy: boolean;
  website: string; // Honeypot field (hidden from users)
};

type FormStatus = "idle" | "submitting" | "success" | "error";

// ============================================================================
// CONSTANTS
// ============================================================================
const INITIAL_FORM_STATE: FormData = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  industry: "",
  volume: "",
  contactPreference: "email",
  message: "",
  privacy: false,
  website: "", // Honeypot
};

// Shared input classes
const INPUT_CLASSES =
  "w-full px-4 py-2.5 border border-zinc-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none transition-colors";

// ============================================================================
// CONTACT FORM COMPONENT
// ============================================================================
function ContactFormComponent({ industry = "Gobierno" }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    ...INITIAL_FORM_STATE,
    industry: industry.toLowerCase(),
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  // Dynamic subtitle based on industry
  const subtitle = `Dé el primer paso hacia una disposición final certificada. Proporcione sus detalles y nuestro equipo de cumplimiento para ${industry.trim()} le ayudará a estructurar un esquema de retiro seguro y trazable.`;

  // ============================================================================
  // FORM SUBMISSION
  // ============================================================================
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      // Map industry to service enum values that API expects
      const serviceMap: Record<string, string> = {
        automotriz: "other",
        manufactura: "other",
        gobierno: "other",
        electronica: "ewr",
        tecnologia: "ewr",
        salud: "other",
        retail: "other",
        educacion: "other",
        otro: "other",
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone || undefined,
          company: formData.company || undefined,
          service: serviceMap[formData.industry] || undefined,
          message: formData.message,
          website: formData.website, // Honeypot for spam detection
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        
        if (response.status === 429) {
          throw new Error(
            "Demasiadas solicitudes. Por favor, espera un momento antes de intentar nuevamente."
          );
        }
        
        // Show detailed error for debugging
        const errorDetail = data.error || response.statusText || "Error desconocido";
        throw new Error(`Error ${response.status}: ${errorDetail}`);
      }

      setStatus("success");
      handleReset();

      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Error al enviar el formulario. Por favor, inténtalo de nuevo."
      );
    }
  };

  // ============================================================================
  // FORM RESET
  // ============================================================================
  const handleReset = () => {
    setFormData({
      ...INITIAL_FORM_STATE,
      industry: industry.toLowerCase(),
    });
  };

  // ============================================================================
  // INPUT CHANGE HANDLER
  // ============================================================================
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

  // ============================================================================
  // RENDER
  // ============================================================================
  const isSubmitting = status === "submitting";

  return (
    <section className="py-16 md:py-20 bg-zinc-50">
      <div className="section">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Asegure la trazabilidad de sus activos ahora
            </h2>
            <p className="text-base md:text-lg text-zinc-600">{subtitle}</p>
          </div>

          {/* Success Message */}
          {status === "success" && (
            <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded">
              <p className="text-emerald-800 font-medium">
                ✓ ¡Gracias por tu mensaje! Nos pondremos en contacto contigo
                pronto.
              </p>
            </div>
          )}

          {/* Error Message */}
          {status === "error" && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded">
              <p className="text-red-800 font-medium">✕ {errorMessage}</p>
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="bg-white border border-zinc-200 shadow-sm p-8 md:p-10 space-y-6"
          >
            {/* Honeypot Field (Hidden) */}
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              autoComplete="off"
              tabIndex={-1}
              className="absolute opacity-0 pointer-events-none"
              aria-hidden="true"
            />

            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-zinc-900 mb-2"
              >
                Nombre Completo <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className={INPUT_CLASSES}
                minLength={2}
                maxLength={100}
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-zinc-900 mb-2"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className={INPUT_CLASSES}
                maxLength={200}
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-zinc-900 mb-2"
              >
                Teléfono <span className="text-zinc-400">(opcional)</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                disabled={isSubmitting}
                className={INPUT_CLASSES}
                maxLength={50}
              />
            </div>

            {/* Company */}
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-zinc-900 mb-2"
              >
                Empresa / Institución{" "}
                <span className="text-zinc-400">(opcional)</span>
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                disabled={isSubmitting}
                className={INPUT_CLASSES}
                maxLength={200}
              />
            </div>

            {/* Industry */}
            <div>
              <label
                htmlFor="industry"
                className="block text-sm font-medium text-zinc-900 mb-2"
              >
                Industria <span className="text-zinc-400">(opcional)</span>
              </label>
              <select
                id="industry"
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                disabled={isSubmitting}
                className={`${INPUT_CLASSES} bg-white`}
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

            {/* Volume */}
            <div>
              <label
                htmlFor="volume"
                className="block text-sm font-medium text-zinc-900 mb-2"
              >
                Volumen aproximado de RAEE{" "}
                <span className="text-zinc-400">(opcional)</span>
              </label>
              <select
                id="volume"
                name="volume"
                value={formData.volume}
                onChange={handleChange}
                disabled={isSubmitting}
                className={`${INPUT_CLASSES} bg-white`}
              >
                <option value="">-Seleccionar-</option>
                <option value="1-100">1 – 100 kg</option>
                <option value="100-1000">100 – 1,000 kg</option>
                <option value="1000-5000">1,000 – 5,000 kg</option>
                <option value="5000+">Más de 5,000 kg</option>
              </select>
            </div>

            {/* Contact Preference */}
            <div>
              <label
                htmlFor="contactPreference"
                className="block text-sm font-medium text-zinc-900 mb-2"
              >
                ¿Cómo prefieres que te contactemos?{" "}
                <span className="text-zinc-400">(opcional)</span>
              </label>
              <select
                id="contactPreference"
                name="contactPreference"
                value={formData.contactPreference}
                onChange={handleChange}
                disabled={isSubmitting}
                className={`${INPUT_CLASSES} bg-white`}
              >
                <option value="email">Email</option>
                <option value="phone">Teléfono</option>
                <option value="whatsapp">WhatsApp</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-zinc-900 mb-2"
              >
                Mensaje <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                placeholder="Cuéntanos más sobre tus necesidades..."
                className={`${INPUT_CLASSES} resize-none`}
                minLength={10}
                maxLength={5000}
              />
            </div>

            {/* Privacy Checkbox */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="privacy"
                name="privacy"
                checked={formData.privacy}
                onChange={handleChange}
                disabled={isSubmitting}
                className="mt-1 w-4 h-4 text-emerald-600 focus:ring-emerald-600"
              />
              <label htmlFor="privacy" className="text-sm text-zinc-600">
                Acepto recibir comunicaciones de Recibásicos. Estamos
                comprometidos con tu privacidad. Usaremos la información
                proporcionada para contactarte sobre nuestros servicios. Puedes
                darte de baja en cualquier momento.{" "}
                <span className="text-zinc-400">(opcional)</span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-emerald-700 text-white font-semibold hover:bg-emerald-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Enviando..." : "Enviar"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// MEMOIZED EXPORT
// ============================================================================
const ContactForm = memo(ContactFormComponent);
ContactForm.displayName = "ContactForm";

export default ContactForm;