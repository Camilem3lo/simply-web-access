import { Button } from "@/components/ui/button";

const AccessibleHeader = () => {
  return (
    <header 
      className="bg-primary text-primary-foreground py-4 px-6 shadow-md"
      role="banner"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">
              Acessibilidade Digital
            </h1>
            <p className="text-sm mt-1 opacity-90">
              Construindo um web mais inclusivo
            </p>
          </div>
          
          <nav 
            id="navigation" 
            role="navigation" 
            aria-label="Menu principal"
            className="hidden md:block"
          >
            <ul className="flex space-x-6">
              <li>
                <a 
                  href="#sobre" 
                  className="text-primary-foreground hover:underline focus:underline"
                  aria-describedby="sobre-desc"
                >
                  Sobre
                </a>
                <span id="sobre-desc" className="sr-only">
                  Informações sobre acessibilidade digital
                </span>
              </li>
              <li>
                <a 
                  href="#recursos" 
                  className="text-primary-foreground hover:underline focus:underline"
                  aria-describedby="recursos-desc"
                >
                  Recursos
                </a>
                <span id="recursos-desc" className="sr-only">
                  Ferramentas e recursos de acessibilidade
                </span>
              </li>
              <li>
                <a 
                  href="#contato" 
                  className="text-primary-foreground hover:underline focus:underline"
                  aria-describedby="contato-desc"
                >
                  Contato
                </a>
                <span id="contato-desc" className="sr-only">
                  Entre em contato conosco
                </span>
              </li>
            </ul>
          </nav>
          
          <Button 
            variant="secondary" 
            className="md:hidden"
            aria-label="Abrir menu de navegação"
            aria-expanded="false"
          >
            Menu
          </Button>
        </div>
      </div>
    </header>
  );
};

export default AccessibleHeader;