import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const AccessibleForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Nome é obrigatório";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email deve ter um formato válido";
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = "Assunto é obrigatório";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Mensagem é obrigatória";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em breve.",
      });
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } else {
      toast({
        title: "Erro no formulário",
        description: "Por favor, corrija os erros indicados.",
        variant: "destructive"
      });
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Entre em Contato</CardTitle>
        <CardDescription>
          Tem dúvidas sobre acessibilidade? Envie sua mensagem que responderemos em breve.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} noValidate>
          <div className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-sm font-medium">
                Nome completo *
              </Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                aria-describedby={errors.name ? "name-error" : "name-hint"}
                aria-invalid={!!errors.name}
                className={errors.name ? "border-destructive" : ""}
                required
              />
              <p id="name-hint" className="text-xs text-muted-foreground mt-1">
                Digite seu nome completo
              </p>
              {errors.name && (
                <p id="name-error" className="text-xs text-destructive mt-1" role="alert">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="email" className="text-sm font-medium">
                Email *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                aria-describedby={errors.email ? "email-error" : "email-hint"}
                aria-invalid={!!errors.email}
                className={errors.email ? "border-destructive" : ""}
                required
              />
              <p id="email-hint" className="text-xs text-muted-foreground mt-1">
                Digite um email válido para resposta
              </p>
              {errors.email && (
                <p id="email-error" className="text-xs text-destructive mt-1" role="alert">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="subject" className="text-sm font-medium">
                Assunto *
              </Label>
              <Input
                id="subject"
                type="text"
                value={formData.subject}
                onChange={(e) => handleChange("subject", e.target.value)}
                aria-describedby={errors.subject ? "subject-error" : "subject-hint"}
                aria-invalid={!!errors.subject}
                className={errors.subject ? "border-destructive" : ""}
                required
              />
              <p id="subject-hint" className="text-xs text-muted-foreground mt-1">
                Qual o assunto da sua mensagem?
              </p>
              {errors.subject && (
                <p id="subject-error" className="text-xs text-destructive mt-1" role="alert">
                  {errors.subject}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="message" className="text-sm font-medium">
                Mensagem *
              </Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                aria-describedby={errors.message ? "message-error" : "message-hint"}
                aria-invalid={!!errors.message}
                className={errors.message ? "border-destructive" : ""}
                rows={5}
                required
              />
              <p id="message-hint" className="text-xs text-muted-foreground mt-1">
                Descreva sua dúvida ou comentário
              </p>
              {errors.message && (
                <p id="message-error" className="text-xs text-destructive mt-1" role="alert">
                  {errors.message}
                </p>
              )}
            </div>

            <Button 
              type="submit" 
              className="w-full"
              aria-describedby="submit-hint"
            >
              Enviar Mensagem
            </Button>
            <p id="submit-hint" className="text-xs text-muted-foreground text-center">
              Clique para enviar sua mensagem
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default AccessibleForm;