const AccessibleFooter = () => {
  return (
    <footer 
      className="bg-muted py-8 px-6 mt-12"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Acessibilidade Digital</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Comprometidos em criar uma web mais inclusiva e acessível para todos os usuários.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Links Úteis</h4>
            <nav aria-label="Links úteis">
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://www.w3.org/WAI/WCAG21/quickref/" 
                    className="text-sm text-link hover:text-link-hover underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-describedby="wcag-desc"
                  >
                    Diretrizes WCAG 2.1
                  </a>
                  <span id="wcag-desc" className="sr-only">
                    Abre em nova aba - Diretrizes de Acessibilidade para Conteúdo Web
                  </span>
                </li>
                <li>
                  <a 
                    href="https://webaim.org/" 
                    className="text-sm text-link hover:text-link-hover underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-describedby="webaim-desc"
                  >
                    WebAIM
                  </a>
                  <span id="webaim-desc" className="sr-only">
                    Abre em nova aba - Recursos e ferramentas de acessibilidade web
                  </span>
                </li>
                <li>
                  <a 
                    href="https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital" 
                    className="text-sm text-link hover:text-link-hover underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-describedby="gov-desc"
                  >
                    eMAG - Modelo de Acessibilidade
                  </a>
                  <span id="gov-desc" className="sr-only">
                    Abre em nova aba - Modelo de Acessibilidade em Governo Eletrônico
                  </span>
                </li>
              </ul>
            </nav>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Ferramentas</h4>
            <nav aria-label="Ferramentas de acessibilidade">
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://www.nvaccess.org/download/" 
                    className="text-sm text-link hover:text-link-hover underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-describedby="nvda-desc"
                  >
                    NVDA (Leitor de Tela)
                  </a>
                  <span id="nvda-desc" className="sr-only">
                    Abre em nova aba - Download do leitor de tela NVDA gratuito
                  </span>
                </li>
                <li>
                  <a 
                    href="https://wave.webaim.org/" 
                    className="text-sm text-link hover:text-link-hover underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-describedby="wave-desc"
                  >
                    WAVE
                  </a>
                  <span id="wave-desc" className="sr-only">
                    Abre em nova aba - Ferramenta de avaliação de acessibilidade web
                  </span>
                </li>
                <li>
                  <a 
                    href="https://www.deque.com/axe/devtools/" 
                    className="text-sm text-link hover:text-link-hover underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-describedby="axe-desc"
                  >
                    axe DevTools
                  </a>
                  <span id="axe-desc" className="sr-only">
                    Abre em nova aba - Extensão de desenvolvimento para testes de acessibilidade
                  </span>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Acessibilidade Digital. Construído seguindo as diretrizes WCAG 2.1 AA.
            </p>
            <div className="flex gap-4">
              <span className="text-xs text-muted-foreground">
                Conformidade WCAG 2.1 AA
              </span>
              <span className="text-xs text-muted-foreground">
                Testado com leitores de tela
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AccessibleFooter;