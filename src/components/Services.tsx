import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Cpu, 
  Settings, 
  Headphones, 
  Code2, 
  Zap, 
  Shield,
  Bot,
  Download,
  Clock,
  Star
} from "lucide-react";

const Services = () => {
  const freeServices = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "تحسين الحاسوب",
      description: "تحسين أداء الحاسوب وزيادة السرعة وإصلاح المشاكل",
      features: ["تنظيف النظام", "تحسين الذاكرة", "إزالة الملفات المؤقتة", "تحديث التعريفات"],
      color: "tech-primary"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "تطويقات ويندوز",
      description: "تطبيق أحدث التحسينات والتعديلات على نظام ويندوز",
      features: ["تحسين الخصوصية", "تسريع الإقلاع", "إزالة البرامج غير المرغوبة", "تحسين الألعاب"],
      color: "tech-secondary"
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "دعم تقني عن بُعد",
      description: "مساعدة فورية لحل مشاكل الحاسوب عبر الديسكورد",
      features: ["مساعدة فورية", "حل المشاكل التقنية", "إرشادات التثبيت", "استشارات مجانية"],
      color: "tech-accent"
    }
  ];

  const paidServices = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "بوت ديسكورد متقدم",
      description: "بوت ديسكورد كامل مع جميع الميزات المتقدمة",
      price: "50$",
      features: ["إدارة الخوادم", "نظام الترحيب", "أوامر متقدمة", "تخصيص كامل"],
      color: "tech-primary"
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "مصدر بوت الموسيقى",
      description: "بوت موسيقى عالي الجودة مع دعم جميع المنصات",
      price: "30$",
      features: ["تشغيل من يوتيوب", "قوائم التشغيل", "جودة عالية", "أوامر سهلة"],
      color: "tech-secondary"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "بوت الأمان والحماية",
      description: "نظام حماية متكامل لخادم الديسكورد",
      price: "40$",
      features: ["مكافحة السبام", "نظام التحذيرات", "حماية من الروابط", "تسجيل الأحداث"],
      color: "tech-accent"
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Free Services Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            خدمات مجانية
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            نقدم خدمات تقنية عالية الجودة مجاناً لمجتمع الديسكورد
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {freeServices.map((service, index) => (
            <Card key={index} className="group hover:shadow-tech transition-all duration-500 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${service.color}/20 flex items-center justify-center group-hover:shadow-glow transition-all duration-300`}>
                  <div className={`text-${service.color}`}>
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3 space-x-reverse">
                      <div className={`w-2 h-2 rounded-full bg-${service.color}`}></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full gradient-primary hover-glow">
                  <Clock className="w-4 h-4 ml-2" />
                  احصل عليها مجاناً
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Paid Services Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            مصادر البوتات
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            بوتات ديسكورد متقدمة جاهزة للاستخدام مع كود المصدر الكامل
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {paidServices.map((service, index) => (
            <Card key={index} className="group hover:shadow-tech transition-all duration-500 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-border/50 relative overflow-hidden">
              {/* Price Badge */}
              <div className="absolute top-4 left-4 bg-gradient-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold z-10">
                {service.price}
              </div>
              
              <CardHeader className="text-center pt-12">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${service.color}/20 flex items-center justify-center group-hover:shadow-glow transition-all duration-300`}>
                  <div className={`text-${service.color}`}>
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3 space-x-reverse">
                      <Star className={`w-4 h-4 text-${service.color}`} />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full gradient-accent hover-glow">
                  <Download className="w-4 h-4 ml-2" />
                  شراء المصدر
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
            <h3 className="text-2xl font-bold mb-4">هل تحتاج خدمة مخصصة؟</h3>
            <p className="text-muted-foreground mb-6">
              نقدم حلول مخصصة حسب احتياجاتك الخاصة
            </p>
            <Button size="lg" variant="outline" className="hover-glow">
              تواصل معنا
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;