import { Button } from "@/components/ui/button";
import { ArrowDown, Zap, Shield, Bot } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center gradient-hero relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 bg-tech-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-tech-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-tech-accent/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          {/* Main Logo */}
          <div className="mb-8 flex justify-center">
            <img 
              src="/lovable-uploads/3d6be7a9-3fb0-49ad-8c79-8e6f4452e12d.png" 
              alt="Techium Logo" 
              className="w-24 h-24 md:w-32 md:h-32 rounded-full animate-pulse-glow shadow-tech"
            />
          </div>

          {/* Hero Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient leading-tight">
            تكنيوم
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-foreground/90">
            حلول تقنية احترافية ومتقدمة عبر الديسكورد
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            نوفر خدمات تحسين وتطوير أداء الحواسيب والدعم التقني المتخصص مجاناً، مع توفير مصادر البوتات المتطورة والحلول التقنية المبتكرة لمجتمع الديسكورد العربي
          </p>

          {/* Service Icons */}
          <div className="flex justify-center items-center space-x-8 space-x-reverse mb-12">
            <div className="flex flex-col items-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-tech-primary/20 rounded-full flex items-center justify-center mb-2 hover-glow transition-smooth">
                <Zap className="w-8 h-8 text-tech-primary" />
              </div>
              <span className="text-sm text-muted-foreground">تحسين الأداء</span>
            </div>
            
            <div className="flex flex-col items-center animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-tech-secondary/20 rounded-full flex items-center justify-center mb-2 hover-glow transition-smooth">
                <Shield className="w-8 h-8 text-tech-secondary" />
              </div>
              <span className="text-sm text-muted-foreground">دعم تقني</span>
            </div>
            
            <div className="flex flex-col items-center animate-scale-in" style={{ animationDelay: '0.6s' }}>
              <div className="w-16 h-16 bg-tech-accent/20 rounded-full flex items-center justify-center mb-2 hover-glow transition-smooth">
                <Bot className="w-8 h-8 text-tech-accent" />
              </div>
              <span className="text-sm text-muted-foreground">مصادر البوتات</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in" style={{ animationDelay: '0.8s' }}>
            <Button size="lg" className="gradient-primary text-primary-foreground px-8 py-4 text-lg font-semibold hover-glow transition-smooth">
              ابدأ الآن مجاناً
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold hover-glow transition-smooth">
              تصفح الخدمات
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;