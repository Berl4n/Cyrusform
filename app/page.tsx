import { ContactForm } from "@/components/ContactForm"
import Script from "next/script"
export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white">
      
      {/* NAVBAR */}
      <header className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="text-2xl font-bold tracking-wide">
          Cyrus<span className="text-[#F5B400]">form</span>
        </div>

        <nav className="hidden md:flex gap-8 text-sm font-medium">
          
        </nav>

      
      </header>

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-8 py-16 grid lg:grid-cols-2 gap-12 items-center">

        {/* TEXTO ESQUERDA */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Transforme visitantes <br />
            em clientes com o <br />
            Cyrusform
          </h1>

          <p className="text-lg text-gray-400 mb-8">
            Formulários inteligentes que geram mais conversões para seu negócio.
          </p>

          
        </div>

        {/* FORMULÁRIO DIREITA */}
        <div className="flex justify-center">
          <div className="w-full max-w-xl bg-[#1A1A1A] p-6 rounded-2xl shadow-2xl border border-[#F5B400]/20">
            <ContactForm />
          </div>
        </div>

      </section>
 {/* WIDGET WHATSAPP */}
      <Script id="widget-whats-config" strategy="afterInteractive">
        {`
          window.WidgetWhatsConfig = {
            userId: 887760,
            accountId: 719341,
            funnelId: null,
            sequenceId: null,
            whatsappNumber: "+5581997906461",
            companyName: "Cyrusform",
            whatsappMessage: "Olá, gostaria de falar com um atendente!",
            entity: "organization",
            deal: false,
            fields: [
              { name: "name", label: "Nome", type: "text", required: true, customField: false },
              { name: "email", label: "E-mail", type: "email", required: true, customField: false },
              { name: "whatsapp", label: "WhatsApp", type: "text", required: true, customField: false }
            ]
          };
        `}
      </Script>

      <Script
        src="https://widgets.agendor.com.br/whatsapp.js"
        strategy="afterInteractive"
      />

    </div>
  )
}
    
  
