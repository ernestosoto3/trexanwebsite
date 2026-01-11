"use client";

import { useMemo, useState, useCallback, memo } from "react";
import type { Metadata } from "next";
import Hero from "../(componentes)/ui/Hero";
import IntroText from "../(componentes)/ui/IntroText";

// ============================================================================
// TYPES
// ============================================================================
interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  industry: string;
  volume: string;
  contactPreference: "email" | "phone" | "whatsapp";
  message: string;
  privacy: boolean;
  website: string; // honeypot
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

// ============================================================================
// CONSTANTS
// ============================================================================
const INITIAL_FORM_DATA: FormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  industry: "",
  volume: "",
  contactPreference: "email",
  message: "",
  privacy: false,
  website: "", // honeypot
};

const INDUSTRIES = [
  { value: "", label: "-Seleccionar-" },
  { value: "automotriz", label: "Automotriz" },
  { value: "manufactura", label: "Manufactura" },
  { value: "gobierno", label: "Gobierno" },
  { value: "electronica", label: "Electrónica" },
  { value: "tecnologia", label: "Tecnología" },
  { value: "salud", label: "Salud" },
  { value: "retail", label: "Retail" },
  { value: "educacion", label: "Educación" },
  { value: "otro", label: "Otro" },
] as const;

const VOLUMES = [
  { value: "", label: "-Seleccionar-" },
  { value: "1-100", label: "1 – 100 kg" },
  { value: "100-1000", label: "100 – 1,000 kg" },
  { value: "1000-5000", label: "1,000 – 5,000 kg" },
  { value: "5000+", label: "Más de 5,000 kg" },
] as const;

const CONTACT_PREFERENCES = [
  { value: "email", label: "Email" },
  { value: "phone", label: "Teléfono" },
  { value: "whatsapp", label: "WhatsApp" },
] as const;

// Shared input classes
const INPUT_CLASSES =
  "w-full px-4 py-2.5 border border-zinc-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none transition-colors";

const ERROR_INPUT_CLASSES =
  "w-full px-4 py-2.5 border border-red-500 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition-colors";

// ============================================================================
// VALIDATION HELPERS
// ============================================================================
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validateForm = (data: FormData): FormErrors => {
  const errors: FormErrors = {};

  if (!data.name.trim()) {
    errors.name = "El nombre completo es requerido";
  } else if (data.name.trim().length < 2) {
    errors.name = "El nombre debe tener al menos 2 caracteres";
  }

  if (!data.email.trim()) {
    errors.email = "El email es requerido";
  } else if (!validateEmail(data.email)) {
    errors.email = "Por favor ingresa un email válido";
  }

  if (!data.message.trim()) {
    errors.message = "El mensaje es requerido";
  } else if (data.message.trim().length < 10) {
    errors.message = "El mensaje debe tener al menos 10 caracteres";
  }

  return errors;
};

// ============================================================================
// SUB-COMPONENTS
// ============================================================================

/**
 * Contact information sidebar
 * Memoized as it never changes
 */
const ContactInfo = memo(function ContactInfo() {
  return (
    <aside className="bg-white border border-zinc-200 shadow-sm p-8 md:p-10">
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
          <address className="mt-1 text-zinc-800 leading-relaxed not-italic">
            Eje 132 No.120, Zona Industrial del Potosí
            <br />
            C.P. 78395, San Luis Potosí, S.L.P., México
          </address>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <div className="text-xs uppercase tracking-wide text-zinc-500">
              Email general
            </div>
            <a
              className="mt-1 inline-block font-medium text-emerald-800 hover:text-emerald-900 underline underline-offset-4 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-offset-2 rounded"
              href="mailto:contacto@recibasicos.com"
              aria-label="Enviar email a contacto@recibasicos.com"
            >
              contacto@recibasicos.com
            </a>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wide text-zinc-500">
              Teléfono
            </div>
            <a
              className="mt-1 inline-block font-medium text-zinc-900 hover:underline underline-offset-4 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-offset-2 rounded"
              href="tel:+524448292422"
              aria-label="Llamar a +52 444 829 2422"
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
            rel="noopener noreferrer"
            className="mt-1 inline-block font-medium text-zinc-900 hover:underline underline-offset-4 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-offset-2 rounded"
            aria-label="Abrir chat de WhatsApp"
          >
            +52 (444) 219 7673
          </a>
        </div>
      </div>
    </aside>
  );
});

/**
 * Location map component
 * Memoized and lazy loaded
 */
const LocationMap = memo(function LocationMap() {
  return (
    <div className="mt-10 border border-zinc-200 bg-white shadow-sm overflow-hidden">
      <header className="p-6 md:p-8 border-b border-zinc-200">
        <h3 className="text-lg font-semibold text-zinc-900">Ubicación</h3>
        <p className="text-sm text-zinc-600 mt-1">
          Visítanos o utiliza el mapa para ubicar nuestra planta.
        </p>
      </header>

      <div className="h-105 md:h-130">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!3d3880.3237148335484!2d-100.88085848895486!3d22.0732802797664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842aa50060ad87ff%3A0xbaab4d0cea4484df!2sRecib%C3%A1sicos%20SA%20de%20CV!5e1!3m2!1sen!2smx!4v1764013510685!5m2!1sen!2smx"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación de Recibásicos en San Luis Potosí"
        />
      </div>
    </div>
  );
});

// ============================================================================
// MAIN COMPONENT
// ============================================================================
export default function ContactPage() {
  // Form state
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  // Memoized values
  const title = "Asegure la trazabilidad de sus activos ahora";

  const subtitle = useMemo(() => {
    return "Dé el primer paso hacia una disposición final certificada. Proporcione sus detalles y nuestro equipo de cumplimiento para su sector le ayudará a estructurar un esquema de retiro seguro y trazable.";
  }, []);

  // Handlers
  const handleReset = useCallback(() => {
    setFormData(INITIAL_FORM_DATA);
    setErrors({});
    setErrorMessage("");
  }, []);

  const handleChange = useCallback(
    (
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
        // Clear error when user types
        if (errors[name as keyof FormErrors]) {
          setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
      }
    },
    [errors]
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      // Honeypot check - if filled, it's likely a bot
      if (formData.website) {
        console.warn("Honeypot triggered");
        return;
      }

      // Validate form
      const validationErrors = validateForm(formData);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        setErrorMessage("Por favor corrige los errores en el formulario");
        
        // Focus first error field
        const firstErrorField = Object.keys(validationErrors)[0];
        const element = document.querySelector(
          `[name="${firstErrorField}"]`
        ) as HTMLElement;
        element?.focus();
        return;
      }

      setStatus("submitting");
      setErrors({});
      setErrorMessage("");

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            phone: formData.phone || undefined,
            company: formData.company || undefined,
            industry: formData.industry || undefined,
            volume: formData.volume || undefined,
            contactPreference: formData.contactPreference || undefined,
            privacy: formData.privacy,
            website: formData.website, // Honeypot
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          if (response.status === 429) {
            throw new Error(
              "Demasiadas solicitudes. Por favor, espera un momento antes de intentar nuevamente."
            );
          }
          throw new Error(
            data.error || "Error al enviar el formulario. Por favor, inténtalo de nuevo."
          );
        }

        if (!data.ok) {
          throw new Error("Error al procesar el mensaje");
        }

        setStatus("success");
        handleReset();

        // Auto-hide success message after 10 seconds
        setTimeout(() => {
          setStatus("idle");
        }, 10000);
      } catch (error) {
        console.error("Form submission error:", error);
        setStatus("error");
        setErrorMessage(
          error instanceof Error
            ? error.message
            : "Error al enviar el formulario. Por favor, inténtalo de nuevo."
        );
      }
    },
    [formData, handleReset]
  );

  // Input class with error state
  const getInputClass = (fieldName?: keyof FormErrors) => {
    return fieldName && errors[fieldName] ? ERROR_INPUT_CLASSES : INPUT_CLASSES;
  };

  const isSubmitting = status === "submitting";

  return (
    <main className="bg-white">
      {/* Hero */}
      <Hero
        bg={{
          type: "image",
          src: "/images/industrias/GRUPO TREXAN-18.jpg",
          alt: "Equipo de Trexan listo para ayudar con tus necesidades de reciclaje",
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

      {/* Form + Contact Info */}
      <section className="py-16 md:py-20 bg-zinc-50">
        <div className="section">
          <div className="max-w-6xl mx-auto">
            {/* Title + Subtitle */}
            <header className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
                {title}
              </h2>
              <p className="text-base md:text-lg text-zinc-600">{subtitle}</p>
            </header>

            {/* Two-column layout */}
            <div className="grid lg:grid-cols-2 gap-6 items-start">
              {/* Form */}
              <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-white border border-zinc-200 shadow-sm p-8 md:p-10 space-y-6"
                aria-label="Formulario de contacto"
              >
                {/* Honeypot Field (Hidden) */}
                <div className="absolute -left-2499.75" aria-hidden="true">
                  <label htmlFor="website">
                    Website (do not fill)
                    <input
                      type="text"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      autoComplete="off"
                      tabIndex={-1}
                    />
                  </label>
                </div>

                {/* Full Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-zinc-900 mb-2"
                  >
                    Nombre Completo <span className="text-red-500" aria-label="requerido">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className={getInputClass("name")}
                    minLength={2}
                    maxLength={100}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1.5 text-sm text-red-600" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-zinc-900 mb-2"
                  >
                    Email <span className="text-red-500" aria-label="requerido">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className={getInputClass("email")}
                    maxLength={200}
                    placeholder="correo@ejemplo.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1.5 text-sm text-red-600" role="alert">
                      {errors.email}
                    </p>
                  )}
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
                    className={getInputClass()}
                    maxLength={50}
                    placeholder="+52 (444) 123 4567"
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
                    className={getInputClass()}
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
                    className={`${getInputClass()} bg-white`}
                  >
                    {INDUSTRIES.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
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
                    className={`${getInputClass()} bg-white`}
                  >
                    {VOLUMES.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
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
                    className={`${getInputClass()} bg-white`}
                  >
                    {CONTACT_PREFERENCES.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-zinc-900 mb-2"
                  >
                    Mensaje <span className="text-red-500" aria-label="requerido">*</span>
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
                    className={`${getInputClass("message")} resize-none`}
                    minLength={10}
                    maxLength={5000}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1.5 text-sm text-red-600" role="alert">
                      {errors.message}
                    </p>
                  )}
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
                    className="mt-1 w-4 h-4 text-emerald-600 border-zinc-300 rounded focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
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
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3 bg-emerald-700 text-white font-semibold hover:bg-emerald-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-offset-2"
                    aria-busy={isSubmitting}
                  >
                    {isSubmitting ? "Enviando..." : "Enviar"}
                  </button>
                </div>
              </form>

              {/* Contact Info */}
              <ContactInfo />
            </div>

            {/* Success Message */}
            {status === "success" && (
              <div
                className="mt-6 p-4 bg-emerald-50 border border-emerald-200 rounded"
                role="alert"
                aria-live="polite"
              >
                <p className="text-emerald-800 font-medium text-center">
                  ✓ ¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.
                </p>
              </div>
            )}

            {/* Error Message */}
            {status === "error" && (
              <div
                className="mt-6 p-4 bg-red-50 border border-red-200 rounded"
                role="alert"
                aria-live="assertive"
              >
                <p className="text-red-800 font-medium text-center">
                  ✕ {errorMessage}
                </p>
              </div>
            )}

            {/* Map */}
            <LocationMap />
          </div>
        </div>
      </section>
    </main>
  );
}