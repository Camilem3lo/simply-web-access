import SkipLinks from "@/components/SkipLinks";
import AccessibleHeader from "@/components/AccessibleHeader";
import AccessibilityFeatures from "@/components/AccessibilityFeatures";
import AccessibleForm from "@/components/AccessibleForm";
import AccessibleFooter from "@/components/AccessibleFooter";
import heroImage from "@/assets/accessibility-hero.jpg";

const Index = () => {
  return (
    <>
      <SkipLinks />
      <div className="min-h-screen flex flex-col">
        <AccessibleHeader />
        
        <main id="main-content" className="flex-1" role="main">
          {/* Hero Section */}
          <section 
            id="sobre" 
            className="py-16 px-6 bg-gradient-to-b from-primary/5 to-transparent"
            aria-labelledby="hero-title"
          >
            <div className="max-w-4xl mx-auto text-center">
              <h1 id="hero-title" className="text-4xl md:text-5xl font-bold mb-6">
                Acessibilidade Digital para Todos
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Este site demonstra as melhores práticas de acessibilidade web, seguindo as 
                diretrizes WCAG 2.1 para criar experiências inclusivas na internet.
              </p>
              
              <div className="mb-8">
                <img 
                  src={heroImage} 
                  alt="Pessoas diversas usando tecnologias assistivas: uma pessoa usando leitor de tela, alguém com aparelho auditivo, e outra pessoa usando reconhecimento de voz, representando a inclusão digital"
                  className="mx-auto rounded-lg shadow-lg max-w-full h-auto"
                  loading="eager"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#recursos" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 focus:bg-primary/90 transition-colors"
                  aria-describedby="recursos-button-desc"
                >
                  Explorar Recursos
                </a>
                <span id="recursos-button-desc" className="sr-only">
                  Navegar para a seção de recursos de acessibilidade
                </span>
                <a 
                  href="#contato" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground rounded-md font-medium hover:bg-secondary/90 focus:bg-secondary/90 transition-colors"
                  aria-describedby="contato-button-desc"
                >
                  Entre em Contato
                </a>
                <span id="contato-button-desc" className="sr-only">
                  Navegar para o formulário de contato
                </span>
              </div>
            </div>
          </section>

          {/* Statistics Section */}
          <section className="py-12 px-6 bg-muted/30" aria-labelledby="stats-title">
            <div className="max-w-7xl mx-auto">
              <h2 id="stats-title" className="text-2xl font-bold text-center mb-8">
                Por que Acessibilidade Importa?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">15%</div>
                  <p className="text-muted-foreground">
                    da população mundial possui algum tipo de deficiência
                  </p>
                </div>
                <div className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">1 bilhão</div>
                  <p className="text-muted-foreground">
                    de pessoas precisam de tecnologia assistiva
                  </p>
                </div>
                <div className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">71%</div>
                  <p className="text-muted-foreground">
                    dos usuários com deficiência abandonam sites inacessíveis
                  </p>
                </div>
              </div>
            </div>
          </section>

          <AccessibilityFeatures />

          {/* Contact Section */}
          <section 
            id="contato" 
            className="py-12 px-6"
            aria-labelledby="contato-title"
          >
            <div className="max-w-4xl mx-auto text-center mb-8">
              <h2 id="contato-title" className="text-3xl font-bold mb-4">
                Tem Dúvidas sobre Acessibilidade?
              </h2>
              <p className="text-xl text-muted-foreground">
                Nossa equipe está pronta para ajudar você a tornar seu projeto mais acessível.
              </p>
            </div>
            <AccessibleForm />
          </section>
        </main>

        <AccessibleFooter />
      </div>
    </>
  );
};

export default Index;
