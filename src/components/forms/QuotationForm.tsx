"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle, 
  Home, 
  Building2, 
  Upload,
  MessageCircle,
  Loader2
} from "lucide-react";
import Link from "next/link";

// Validation Schema
const quotationSchema = z.object({
  category: z.enum(["hogar", "estructuras"]),
  homeServices: z.array(z.string()).optional(),
  structServices: z.array(z.string()).optional(),
  projectDescription: z.string().min(20, "Describe tu proyecto con al menos 20 caracteres").max(1000),
  projectStage: z.enum(["idea", "planos", "construccion", "renovacion"]),
  timeline: z.enum(["urgente", "1-2meses", "3-6meses", "indefinido"]),
  city: z.enum(["restrepo", "villavicencio", "bogota", "otro"]),
  cityOther: z.string().optional(),
  neighborhood: z.string().optional(),
  fullName: z.string().min(3, "Ingresa tu nombre completo").max(100),
  email: z.string().email("Ingresa un correo válido"),
  whatsapp: z.string().regex(/^[0-9]{10}$/, "Ingresa 10 dígitos válidos"),
  preferWhatsApp: z.boolean().default(true),
  source: z.string().optional(),
  additionalComments: z.string().max(500).optional(),
  acceptTerms: z.literal(true, {
    errorMap: () => ({ message: "Debes aceptar la política de privacidad" })
  })
}).refine(
  (data) => {
    if (data.category === "hogar") {
      return data.homeServices && data.homeServices.length > 0;
    }
    return data.structServices && data.structServices.length > 0;
  },
  { message: "Selecciona al menos un servicio", path: ["homeServices"] }
).refine(
  (data) => {
    if (data.city === "otro") {
      return data.cityOther && data.cityOther.length > 0;
    }
    return true;
  },
  { message: "Especifica tu ciudad", path: ["cityOther"] }
);

type QuotationFormData = z.infer<typeof quotationSchema>;

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

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
    trigger
  } = useForm<QuotationFormData>({
    resolver: zodResolver(quotationSchema),
    defaultValues: {
      category: undefined,
      homeServices: [],
      structServices: [],
      preferWhatsApp: true,
      acceptTerms: false as any,
    }
  });

  const category = watch("category");
  const city = watch("city");

  const onSubmit = async (data: QuotationFormData) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Form data:", data);
    setIsLoading(false);
    setIsSubmitted(true);
  };

  const nextStep = async () => {
    const fieldsToValidate = step === 1 
      ? ["category", category === "hogar" ? "homeServices" : "structServices"]
      : step === 2
      ? ["projectDescription", "projectStage", "timeline", "city", city === "otro" ? "cityOther" : "neighborhood"]
      : [];
    
    const isValid = await trigger(fieldsToValidate as any);
    if (isValid) setStep(step + 1);
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
            href="https://wa.me/573XXXXXXXXX"
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

      <form onSubmit={handleSubmit(onSubmit)} className="p-8">
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

              <Controller
                name="category"
                control={control}
                render={({ field }) => (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => field.onChange("hogar")}
                      className={`p-6 rounded-xl border-2 text-left transition-all ${
                        field.value === "hogar"
                          ? "border-accent bg-accent/5"
                          : "border-slate-200 hover:border-accent/30"
                      }`}
                    >
                      <Home className={`w-8 h-8 mb-3 ${field.value === "hogar" ? "text-accent" : "text-slate-400"}`} />
                      <div className="font-semibold text-slate-900">Hogar (Residencial)</div>
                      <div className="text-sm text-slate-500 mt-1">Cocinas, closets, acabados</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => field.onChange("estructuras")}
                      className={`p-6 rounded-xl border-2 text-left transition-all ${
                        field.value === "estructuras"
                          ? "border-accent bg-accent/5"
                          : "border-slate-200 hover:border-accent/30"
                      }`}
                    >
                      <Building2 className={`w-8 h-8 mb-3 ${field.value === "estructuras" ? "text-accent" : "text-slate-400"}`} />
                      <div className="font-semibold text-slate-900">Estructuras (Industrial)</div>
                      <div className="text-sm text-slate-500 mt-1">Techos, montajes metálicos</div>
                    </button>
                  </div>
                )}
              />
              {errors.category && (
                <p className="text-red-500 text-sm">{errors.category.message}</p>
              )}

              {category === "hogar" && (
                <div className="space-y-3">
                  <label className="block font-medium text-slate-700">
                    ¿Qué servicios te interesan?
                  </label>
                  <Controller
                    name="homeServices"
                    control={control}
                    render={({ field }) => (
                      <div className="grid grid-cols-2 gap-3">
                        {homeServicesOptions.map((service) => (
                          <label
                            key={service.value}
                            className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                              field.value?.includes(service.value)
                                ? "border-accent bg-accent/5"
                                : "border-slate-200 hover:border-slate-300"
                            }`}
                          >
                            <input
                              type="checkbox"
                              value={service.value}
                              checked={field.value?.includes(service.value)}
                              onChange={(e) => {
                                const value = e.target.value;
                                const newValue = e.target.checked
                                  ? [...(field.value || []), value]
                                  : (field.value || []).filter(v => v !== value);
                                field.onChange(newValue);
                              }}
                              className="w-4 h-4 text-accent rounded"
                            />
                            <span className="text-sm">{service.label}</span>
                          </label>
                        ))}
                      </div>
                    )}
                  />
                  {errors.homeServices && (
                    <p className="text-red-500 text-sm">{errors.homeServices.message}</p>
                  )}
                </div>
              )}

              {category === "estructuras" && (
                <div className="space-y-3">
                  <label className="block font-medium text-slate-700">
                    ¿Qué servicios te interesan?
                  </label>
                  <Controller
                    name="structServices"
                    control={control}
                    render={({ field }) => (
                      <div className="grid grid-cols-2 gap-3">
                        {structServicesOptions.map((service) => (
                          <label
                            key={service.value}
                            className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                              field.value?.includes(service.value)
                                ? "border-accent bg-accent/5"
                                : "border-slate-200 hover:border-slate-300"
                            }`}
                          >
                            <input
                              type="checkbox"
                              value={service.value}
                              checked={field.value?.includes(service.value)}
                              onChange={(e) => {
                                const value = e.target.value;
                                const newValue = e.target.checked
                                  ? [...(field.value || []), value]
                                  : (field.value || []).filter(v => v !== value);
                                field.onChange(newValue);
                              }}
                              className="w-4 h-4 text-accent rounded"
                            />
                            <span className="text-sm">{service.label}</span>
                          </label>
                        ))}
                      </div>
                    )}
                  />
                  {errors.structServices && (
                    <p className="text-red-500 text-sm">{errors.structServices.message}</p>
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
                <Controller
                  name="projectDescription"
                  control={control}
                  render={({ field }) => (
                    <textarea
                      {...field}
                      rows={4}
                      placeholder="Ejemplo: Necesito una cocina integral en L para un espacio de 3x2 metros..."
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    />
                  )}
                />
                {errors.projectDescription && (
                  <p className="text-red-500 text-sm mt-1">{errors.projectDescription.message}</p>
                )}
              </div>

              <div>
                <label className="block font-medium text-slate-700 mb-2">
                  Etapa del proyecto *
                </label>
                <Controller
                  name="projectStage"
                  control={control}
                  render={({ field }) => (
                    <select
                      {...field}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="idea">Solo tengo la idea</option>
                      <option value="planos">Tengo planos / renders</option>
                      <option value="construccion">Obra en construcción</option>
                      <option value="renovacion">Renovación de espacio existente</option>
                    </select>
                  )}
                />
                {errors.projectStage && (
                  <p className="text-red-500 text-sm mt-1">{errors.projectStage.message}</p>
                )}
              </div>

              <div>
                <label className="block font-medium text-slate-700 mb-2">
                  ¿Cuándo necesitas iniciar? *
                </label>
                <Controller
                  name="timeline"
                  control={control}
                  render={({ field }) => (
                    <select
                      {...field}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="urgente">Lo antes posible</option>
                      <option value="1-2meses">Dentro de 1-2 meses</option>
                      <option value="3-6meses">Dentro de 3-6 meses</option>
                      <option value="indefinido">Aún no lo tengo definido</option>
                    </select>
                  )}
                />
                {errors.timeline && (
                  <p className="text-red-500 text-sm mt-1">{errors.timeline.message}</p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium text-slate-700 mb-2">
                    Ciudad *
                  </label>
                  <Controller
                    name="city"
                    control={control}
                    render={({ field }) => (
                      <select
                        {...field}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                      >
                        <option value="">Selecciona</option>
                        <option value="restrepo">Restrepo (Meta)</option>
                        <option value="villavicencio">Villavicencio</option>
                        <option value="bogota">Bogotá</option>
                        <option value="otro">Otro</option>
                      </select>
                    )}
                  />
                  {errors.city && (
                    <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
                  )}
                </div>

                {city === "otro" ? (
                  <div>
                    <label className="block font-medium text-slate-700 mb-2">
                      Especifica tu ciudad *
                    </label>
                    <Controller
                      name="cityOther"
                      control={control}
                      render={({ field }) => (
                        <input
                          {...field}
                          type="text"
                          placeholder="Ej: Granada (Meta)"
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                        />
                      )}
                    />
                    {errors.cityOther && (
                      <p className="text-red-500 text-sm mt-1">{errors.cityOther.message}</p>
                    )}
                  </div>
                ) : (
                  <div>
                    <label className="block font-medium text-slate-700 mb-2">
                      Barrio / Sector
                    </label>
                    <Controller
                      name="neighborhood"
                      control={control}
                      render={({ field }) => (
                        <input
                          {...field}
                          type="text"
                          placeholder="Ej: Centro, Porvenir"
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                        />
                      )}
                    />
                  </div>
                )}
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
                  <Upload className="w-4 h-4" />
                  <span>Adjuntar fotos o planos (opcional - disponible en siguiente versión)</span>
                </label>
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
                <Controller
                  name="fullName"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      placeholder="Ej: Juan Pérez García"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    />
                  )}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium text-slate-700 mb-2">
                    Correo electrónico *
                  </label>
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="email"
                        placeholder="Ej: juan@email.com"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                      />
                    )}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block font-medium text-slate-700 mb-2">
                    WhatsApp * (10 dígitos)
                  </label>
                  <Controller
                    name="whatsapp"
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="tel"
                        placeholder="Ej: 3123456789"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                      />
                    )}
                  />
                  {errors.whatsapp && (
                    <p className="text-red-500 text-sm mt-1">{errors.whatsapp.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block font-medium text-slate-700 mb-2">
                  ¿Cómo nos encontraste?
                </label>
                <Controller
                  name="source"
                  control={control}
                  render={({ field }) => (
                    <select
                      {...field}
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
                  )}
                />
              </div>

              <div>
                <label className="block font-medium text-slate-700 mb-2">
                  ¿Algo más que debamos saber?
                </label>
                <Controller
                  name="additionalComments"
                  control={control}
                  render={({ field }) => (
                    <textarea
                      {...field}
                      rows={3}
                      placeholder="Horario preferido, presupuesto, restricciones..."
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    />
                  )}
                />
              </div>

              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <Controller
                    name="acceptTerms"
                    control={control}
                    render={({ field }) => (
                      <input
                        type="checkbox"
                        checked={field.value}
                        onChange={(e) => field.onChange(e.target.checked)}
                        className="w-5 h-5 text-accent rounded mt-0.5"
                      />
                    )}
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
                  <p className="text-red-500 text-sm mt-1">{errors.acceptTerms.message}</p>
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
