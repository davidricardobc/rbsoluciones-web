"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle, 
  Home, 
  Building2,
  MessageCircle,
  Loader2
} from "lucide-react";
import Link from "next/link";

interface FormData {
  category: "hogar" | "estructuras" | "";
  homeServices: string[];
  structServices: string[];
  projectDescription: string;
  projectStage: string;
  timeline: string;
  city: string;
  cityOther: string;
  neighborhood: string;
  fullName: string;
  email: string;
  whatsapp: string;
  preferWhatsApp: boolean;
  source: string;
  additionalComments: string;
  acceptTerms: boolean;
}

const homeServicesOptions = [
  { value: "cocinas", label: "Cocinas Modulares" },
  { value: "closets", label: "Closets a Medida" },
  { value: "centros", label: "Centros de Entretenimiento" },
  { value: "pvc", label: "PVC Marmolizado" },
  { value: "wpc", label: "Acabados WPC" },
  { value: "spc", label: "Piso SPC" },
  { value: "cerramientos", label: "Cerramientos de Terrazas" },
];

const structServicesOptions = [
  { value: "techos", label: "Techos y Cubiertas" },
  { value: "montajes", label: "Montajes Metalmecánicos" },
  { value: "industrial", label: "Estructuras Industriales" },
  { value: "adecuaciones", label: "Adecuaciones Estructurales" },
];

export function QuotationForm() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  
  const [formData, setFormData] = useState<FormData>({
    category: "",
    homeServices: [],
    structServices: [],
    projectDescription: "",
    projectStage: "",
    timeline: "",
    city: "",
    cityOther: "",
    neighborhood: "",
    fullName: "",
    email: "",
    whatsapp: "",
    preferWhatsApp: true,
    source: "",
    additionalComments: "",
    acceptTerms: false,
  });

  const updateField = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when field is updated
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validateStep1 = () => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.category) {
      newErrors.category = "Selecciona un tipo de proyecto";
    }
    if (formData.category === "hogar" && formData.homeServices.length === 0) {
      newErrors.homeServices = "Selecciona al menos un servicio";
    }
    if (formData.category === "estructuras" && formData.structServices.length === 0) {
      newErrors.structServices = "Selecciona al menos un servicio";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (formData.projectDescription.length < 20) {
      newErrors.projectDescription = "Describe tu proyecto con al menos 20 caracteres";
    }
    if (!formData.projectStage) {
      newErrors.projectStage = "Selecciona la etapa del proyecto";
    }
    if (!formData.timeline) {
      newErrors.timeline = "Selecciona cuándo necesitas iniciar";
    }
    if (!formData.city) {
      newErrors.city = "Selecciona una ciudad";
    }
    if (formData.city === "otro" && !formData.cityOther) {
      newErrors.cityOther = "Especifica tu ciudad";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = () => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (formData.fullName.length < 3) {
      newErrors.fullName = "Ingresa tu nombre completo";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Ingresa un correo válido";
    }
    if (!/^\d{10}$/.test(formData.whatsapp)) {
      newErrors.whatsapp = "Ingresa 10 dígitos válidos";
    }
    if (!formData.acceptTerms) {
      newErrors.acceptTerms = "Debes aceptar la política de privacidad";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep3()) return;
    
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Form data:", formData);
    setIsLoading(false);
    setIsSubmitted(true);
  };

  const nextStep = () => {
    if (step === 1 && validateStep1()) setStep(2);
    else if (step === 2 && validateStep2()) setStep(3);
  };

  const prevStep = () => setStep(step - 1);

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl p-8 lg:p-12 text-center shadow-lg"
      >
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-4 font-heading">
          ¡Recibimos tu solicitud!
        </h2>
        <p className="text-slate-600 mb-2">
          Tu número de cotización: <span className="font-mono font-bold text-accent">RB-2026-{Math.floor(Math.random() * 100000).toString().padStart(5, '0')}</span>
        </p>
        <p className="text-slate-600 mb-8">
          Un asesor te contactará en máximo 24 horas hábiles.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/573183773905"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-whatsapp text-white px-6 py-3 rounded-xl font-medium hover:bg-whatsapp/90 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Hablar por WhatsApp
          </a>
          <Link
            href="/portafolio"
            className="inline-flex items-center justify-center gap-2 bg-slate-100 text-slate-700 px-6 py-3 rounded-xl font-medium hover:bg-slate-200 transition-colors"
          >
            Ver proyectos similares
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Progress Bar */}
      <div className="bg-slate-50 px-8 py-6 border-b border-slate-100">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-slate-600">
            Paso {step} de 3
          </span>
          <span className="text-sm font-medium text-accent">
            {step === 1 ? "Tipo de Proyecto" : step === 2 ? "Detalles" : "Contacto"}
          </span>
        </div>
        <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-accent"
            initial={{ width: "0%" }}
            animate={{ width: `${(step / 3) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-8">
        <AnimatePresence mode="wait">
          {/* Step 1: Project Type */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h2 className="text-xl font-bold text-slate-900 font-heading">
                ¿Qué tipo de proyecto necesitas?
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => updateField("category", "hogar")}
                  className={`p-6 rounded-xl border-2 text-left transition-all ${
                    formData.category === "hogar"
                      ? "border-accent bg-accent/5"
                      : "border-slate-200 hover:border-accent/30"
                  }`}
                >
                  <Home className={`w-8 h-8 mb-3 ${formData.category === "hogar" ? "text-accent" : "text-slate-400"}`} />
                  <div className="font-semibold text-slate-900">Hogar (Residencial)</div>
                  <div className="text-sm text-slate-500 mt-1">Cocinas, closets, acabados</div>
                </button>
                <button
                  type="button"
                  onClick={() => updateField("category", "estructuras")}
                  className={`p-6 rounded-xl border-2 text-left transition-all ${
                    formData.category === "estructuras"
                      ? "border-accent bg-accent/5"
                      : "border-slate-200 hover:border-accent/30"
                  }`}
                >
                  <Building2 className={`w-8 h-8 mb-3 ${formData.category === "estructuras" ? "text-accent" : "text-slate-400"}`} />
                  <div className="font-semibold text-slate-900">Estructuras (Industrial)</div>
                  <div className="text-sm text-slate-500 mt-1">Techos, montajes metálicos</div>
                </button>
              </div>
              {errors.category && (
                <p className="text-red-500 text-sm">{errors.category}</p>
              )}

              {formData.category === "hogar" && (
                <div className="space-y-3">
                  <label className="block font-medium text-slate-700">
                    ¿Qué servicios te interesan?
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {homeServicesOptions.map((service) => (
                      <label
                        key={service.value}
                        className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                          formData.homeServices.includes(service.value)
                            ? "border-accent bg-accent/5"
                            : "border-slate-200 hover:border-slate-300"
                        }`}
                      >
                        <input
                          type="checkbox"
                          value={service.value}
                          checked={formData.homeServices.includes(service.value)}
                          onChange={(e) => {
                            const value = e.target.value;
                            const newValue = e.target.checked
                              ? [...formData.homeServices, value]
                              : formData.homeServices.filter(v => v !== value);
                            updateField("homeServices", newValue);
                          }}
                          className="w-4 h-4 text-accent rounded"
                        />
                        <span className="text-sm">{service.label}</span>
                      </label>
                    ))}
                  </div>
                  {errors.homeServices && (
                    <p className="text-red-500 text-sm">{errors.homeServices}</p>
                  )}
                </div>
              )}

              {formData.category === "estructuras" && (
                <div className="space-y-3">
                  <label className="block font-medium text-slate-700">
                    ¿Qué servicios te interesan?
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {structServicesOptions.map((service) => (
                      <label
                        key={service.value}
                        className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                          formData.structServices.includes(service.value)
                            ? "border-accent bg-accent/5"
                            : "border-slate-200 hover:border-slate-300"
                        }`}
                      >
                        <input
                          type="checkbox"
                          value={service.value}
                          checked={formData.structServices.includes(service.value)}
                          onChange={(e) => {
                            const value = e.target.value;
                            const newValue = e.target.checked
                              ? [...formData.structServices, value]
                              : formData.structServices.filter(v => v !== value);
                            updateField("structServices", newValue);
                          }}
                          className="w-4 h-4 text-accent rounded"
                        />
                        <span className="text-sm">{service.label}</span>
                      </label>
                    ))}
                  </div>
                  {errors.structServices && (
                    <p className="text-red-500 text-sm">{errors.structServices}</p>
                  )}
                </div>
              )}
            </motion.div>
          )}

          {/* Step 2: Project Details */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h2 className="text-xl font-bold text-slate-900 font-heading">
                Cuéntanos los detalles
              </h2>

              <div>
                <label className="block font-medium text-slate-700 mb-2">
                  Descripción del proyecto *
                </label>
                <textarea
                  value={formData.projectDescription}
                  onChange={(e) => updateField("projectDescription", e.target.value)}
                  rows={4}
                  placeholder="Ejemplo: Necesito una cocina integral en L para un espacio de 3x2 metros..."
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                />
                {errors.projectDescription && (
                  <p className="text-red-500 text-sm mt-1">{errors.projectDescription}</p>
                )}
              </div>

              <div>
                <label className="block font-medium text-slate-700 mb-2">
                  Etapa del proyecto *
                </label>
                <select
                  value={formData.projectStage}
                  onChange={(e) => updateField("projectStage", e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="idea">Solo tengo la idea</option>
                  <option value="planos">Tengo planos / renders</option>
                  <option value="construccion">Obra en construcción</option>
                  <option value="renovacion">Renovación de espacio existente</option>
                </select>
                {errors.projectStage && (
                  <p className="text-red-500 text-sm mt-1">{errors.projectStage}</p>
                )}
              </div>

              <div>
                <label className="block font-medium text-slate-700 mb-2">
                  ¿Cuándo necesitas iniciar? *
                </label>
                <select
                  value={formData.timeline}
                  onChange={(e) => updateField("timeline", e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="urgente">Lo antes posible</option>
                  <option value="1-2meses">Dentro de 1-2 meses</option>
                  <option value="3-6meses">Dentro de 3-6 meses</option>
                  <option value="indefinido">Aún no lo tengo definido</option>
                </select>
                {errors.timeline && (
                  <p className="text-red-500 text-sm mt-1">{errors.timeline}</p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium text-slate-700 mb-2">
                    Ciudad *
                  </label>
                  <select
                    value={formData.city}
                    onChange={(e) => updateField("city", e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                  >
                    <option value="">Selecciona</option>
                    <option value="restrepo">Restrepo (Meta)</option>
                    <option value="villavicencio">Villavicencio</option>
                    <option value="bogota">Bogotá</option>
                    <option value="otro">Otro</option>
                  </select>
                  {errors.city && (
                    <p className="text-red-500 text-sm mt-1">{errors.city}</p>
                  )}
                </div>

                {formData.city === "otro" ? (
                  <div>
                    <label className="block font-medium text-slate-700 mb-2">
                      Especifica tu ciudad *
                    </label>
                    <input
                      type="text"
                      value={formData.cityOther}
                      onChange={(e) => updateField("cityOther", e.target.value)}
                      placeholder="Ej: Granada (Meta)"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    />
                    {errors.cityOther && (
                      <p className="text-red-500 text-sm mt-1">{errors.cityOther}</p>
                    )}
                  </div>
                ) : (
                  <div>
                    <label className="block font-medium text-slate-700 mb-2">
                      Barrio / Sector
                    </label>
                    <input
                      type="text"
                      value={formData.neighborhood}
                      onChange={(e) => updateField("neighborhood", e.target.value)}
                      placeholder="Ej: Centro, Porvenir"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* Step 3: Contact Info */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h2 className="text-xl font-bold text-slate-900 font-heading">
                Tus datos para contactarte
              </h2>

              <div>
                <label className="block font-medium text-slate-700 mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => updateField("fullName", e.target.value)}
                  placeholder="Ej: Juan Pérez García"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium text-slate-700 mb-2">
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    placeholder="Ej: juan@email.com"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block font-medium text-slate-700 mb-2">
                    WhatsApp * (10 dígitos)
                  </label>
                  <input
                    type="tel"
                    value={formData.whatsapp}
                    onChange={(e) => updateField("whatsapp", e.target.value.replace(/\D/g, ''))}
                    placeholder="Ej: 3123456789"
                    maxLength={10}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                  />
                  {errors.whatsapp && (
                    <p className="text-red-500 text-sm mt-1">{errors.whatsapp}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block font-medium text-slate-700 mb-2">
                  ¿Cómo nos encontraste?
                </label>
                <select
                  value={formData.source}
                  onChange={(e) => updateField("source", e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                >
                  <option value="">Selecciona</option>
                  <option value="google">Google / Búsqueda web</option>
                  <option value="facebook">Facebook</option>
                  <option value="instagram">Instagram</option>
                  <option value="recomendacion">Recomendación</option>
                  <option value="cliente">Ya soy cliente</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <label className="block font-medium text-slate-700 mb-2">
                  ¿Algo más que debamos saber?
                </label>
                <textarea
                  value={formData.additionalComments}
                  onChange={(e) => updateField("additionalComments", e.target.value)}
                  rows={3}
                  placeholder="Horario preferido, presupuesto, restricciones..."
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                />
              </div>

              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.acceptTerms}
                    onChange={(e) => updateField("acceptTerms", e.target.checked)}
                    className="w-5 h-5 text-accent rounded mt-0.5"
                  />
                  <span className="text-sm text-slate-600">
                    Acepto la{" "}
                    <Link href="/privacidad" className="text-accent hover:underline">
                      política de privacidad
                    </Link>{" "}
                    y el tratamiento de mis datos personales *
                  </span>
                </label>
                {errors.acceptTerms && (
                  <p className="text-red-500 text-sm mt-1">{errors.acceptTerms}</p>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8 pt-6 border-t border-slate-100">
          {step > 1 ? (
            <button
              type="button"
              onClick={prevStep}
              className="inline-flex items-center gap-2 px-6 py-3 text-slate-600 hover:text-slate-900 font-medium transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Anterior
            </button>
          ) : (
            <div />
          )}

          {step < 3 ? (
            <button
              type="button"
              onClick={nextStep}
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Siguiente
              <ArrowRight className="w-5 h-5" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-8 py-3 rounded-lg font-medium transition-colors disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  Enviar Solicitud
                  <CheckCircle className="w-5 h-5" />
                </>
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
