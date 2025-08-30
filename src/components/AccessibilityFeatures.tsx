import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const AccessibilityFeatures = () => {
  const features = [
    {
      title: "Navegação por Teclado",
      description: "Todos os elementos interativos podem ser acessados usando apenas o teclado, seguindo uma ordem lógica.",
      icon: "⌨️",
      tip: "Use Tab para navegar e Enter/Espaço para ativar elementos."
    },
    {
      title: "Alto Contraste",
      description: "Cores escolhidas para garantir contraste adequado segundo as diretrizes WCAG AA.",
      icon: "🎨",
      tip: "Contraste mínimo de 4.5:1 para texto normal e 3:1 para texto grande."
    },
    {
      title: "Leitores de Tela",
      description: "Compatível com NVDA, JAWS, VoiceOver e outros leitores de tela populares.",
      icon: "🔊",
      tip: "Use ARIA labels e estrutura semântica adequada."
    },
    {
      title: "Texto Alternativo",
      description: "Todas as imagens possuem descrições adequadas para usuários que não podem vê-las.",
      icon: "📝",
      tip: "Alt text deve ser descritivo e conciso."
    },
    {
      title: "Estrutura Semântica",
      description: "HTML semântico com hierarquia de cabeçalhos e landmarks apropriados.",
      icon: "🏗️",
      tip: "Use h1, h2, h3 em ordem lógica e elementos como nav, main, aside."
    },
    {
      title: "Redução de Movimento",
      description: "Respeita a preferência do usuário para movimento reduzido.",
      icon: "⏸️",
      tip: "Animações são reduzidas quando prefers-reduced-motion está ativo."
    }
  ];

  return (
    <section 
      id="recursos" 
      className="py-12 px-6"
      aria-labelledby="recursos-title"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 id="recursos-title" className="text-3xl font-bold mb-4">
            Recursos de Acessibilidade
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Este site implementa as melhores práticas de acessibilidade web para garantir 
            que todos os usuários possam navegar e interagir com o conteúdo.
          </p>
        </div>

        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
        >
          {features.map((feature, index) => (
            <Card key={index} className="h-full" role="listitem">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <span 
                    className="text-2xl" 
                    role="img" 
                    aria-label={`Ícone para ${feature.title}`}
                  >
                    {feature.icon}
                  </span>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted p-3 rounded-md">
                  <p className="text-sm font-medium text-muted-foreground">
                    💡 Dica: {feature.tip}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-accent/10 p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">
            Testando a Acessibilidade
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-2">Ferramentas Recomendadas:</h4>
              <ul className="space-y-2 text-sm">
                <li>• <strong>axe DevTools</strong> - Extensão para Chrome/Firefox</li>
                <li>• <strong>WAVE</strong> - Avaliador de acessibilidade web</li>
                <li>• <strong>Lighthouse</strong> - Auditoria integrada ao Chrome</li>
                <li>• <strong>Color Contrast Analyzer</strong> - Teste de contraste</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Testes Manuais:</h4>
              <ul className="space-y-2 text-sm">
                <li>• Navegue apenas com o teclado (Tab, Enter, setas)</li>
                <li>• Use um leitor de tela (NVDA é gratuito)</li>
                <li>• Teste com zoom de 200% no navegador</li>
                <li>• Verifique em modo alto contraste</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessibilityFeatures;