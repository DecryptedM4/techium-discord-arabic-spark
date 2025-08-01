import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MessageCircle, 
  Mail, 
  Clock, 
  Users, 
  Send,
  MapPin,
  Phone
} from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "ديسكورد",
      description: "تواصل معنا مباشرة على الديسكورد",
      action: "انضم للخادم",
      color: "tech-primary",
      primary: true
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "البريد الإلكتروني",
      description: "راسلنا عبر البريد الإلكتروني",
      action: "أرسل رسالة",
      color: "tech-secondary"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "الدعم المباشر",
      description: "احصل على مساعدة فورية",
      action: "ابدأ المحادثة",
      color: "tech-accent"
    }
  ];

  const workingHours = [
    { day: "السبت - الخميس", hours: "9:00 ص - 11:00 م" },
    { day: "الجمعة", hours: "2:00 م - 11:00 م" },
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            تواصل معنا
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            نحن هنا لمساعدتك في جميع احتياجاتك التقنية. تواصل معنا عبر الوسيلة المفضلة لديك
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Methods */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-bold mb-6">طرق التواصل</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {contactMethods.map((method, index) => (
                <Card key={index} className={`group hover:shadow-tech transition-all duration-500 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-border/50 ${method.primary ? 'ring-2 ring-tech-primary/50' : ''}`}>
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${method.color}/20 flex items-center justify-center group-hover:shadow-glow transition-all duration-300`}>
                      <div className={`text-${method.color}`}>
                        {method.icon}
                      </div>
                    </div>
                    <CardTitle className="text-lg font-bold">{method.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-4 text-sm">
                      {method.description}
                    </p>
                    <Button 
                      className={`w-full ${method.primary ? 'gradient-primary' : 'gradient-accent'} hover-glow`}
                      size="sm"
                    >
                      {method.action}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Form */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-xl font-bold">أرسل رسالة</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="الاسم الكامل" className="bg-background/50" />
                  <Input placeholder="البريد الإلكتروني" type="email" className="bg-background/50" />
                </div>
                <Input placeholder="الموضوع" className="bg-background/50" />
                <Textarea 
                  placeholder="نص الرسالة..." 
                  rows={5} 
                  className="bg-background/50"
                />
                <Button className="w-full gradient-primary hover-glow">
                  <Send className="w-4 h-4 ml-2" />
                  إرسال الرسالة
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            {/* Working Hours */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 space-x-reverse text-lg">
                  <Clock className="w-5 h-5 text-tech-primary" />
                  <span>ساعات العمل</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {workingHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-muted-foreground">{schedule.day}</span>
                    <span className="font-medium">{schedule.hours}</span>
                  </div>
                ))}
                <div className="mt-4 p-3 bg-tech-primary/10 rounded-lg">
                  <p className="text-sm text-tech-primary">
                    الدعم التقني متاح 24/7 عبر الديسكورد
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Stats */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 space-x-reverse text-lg">
                  <Users className="w-5 h-5 text-tech-secondary" />
                  <span>إحصائياتنا</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient">500+</div>
                  <div className="text-sm text-muted-foreground">عضو في الديسكورد</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient">100+</div>
                  <div className="text-sm text-muted-foreground">خدمة مكتملة</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient">24/7</div>
                  <div className="text-sm text-muted-foreground">دعم متواصل</div>
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 space-x-reverse text-lg">
                  <MapPin className="w-5 h-5 text-tech-accent" />
                  <span>الموقع</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  نقدم خدماتنا عبر الإنترنت لجميع أنحاء العالم العربي
                </p>
                <div className="mt-4 p-3 bg-tech-accent/10 rounded-lg">
                  <p className="text-sm text-tech-accent">
                    خدمات رقمية 100% عن بُعد
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Quick Links */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-primary/10 border-tech-primary/30 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4">أسئلة شائعة؟</h3>
              <p className="text-muted-foreground mb-6">
                تحقق من الأسئلة الشائعة أو انضم لخادم الديسكورد للحصول على إجابات فورية
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" className="hover-glow">
                  الأسئلة الشائعة
                </Button>
                <Button className="gradient-primary hover-glow">
                  انضم للديسكورد
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;