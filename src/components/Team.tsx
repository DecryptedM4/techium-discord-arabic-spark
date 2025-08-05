import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Crown, Shield, Code2 } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "marshaled",
      role: "مؤسس ومطور رئيسي",
      avatar: "/lovable-uploads/marshaled-avatar.png",
      status: "متاح",
      specialty: "تطوير البوتات وتحسين الأداء",
      icon: <Crown className="w-5 h-5 text-yellow-500" />,
      gradient: "from-yellow-500/20 to-orange-500/20"
    },
    {
      name: "Silent",
      role: "مختص الدعم التقني",
      avatar: "/lovable-uploads/silent-avatar.png",
      status: "متاح",
      specialty: "حلول الأنظمة والأمان",
      icon: <Shield className="w-5 h-5 text-blue-500" />,
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      name: "Proff",
      role: "خبير التطوير",
      avatar: "/lovable-uploads/proff-avatar.webp",
      status: "متاح",
      specialty: "البرمجة المتقدمة والتطوير",
      icon: <Code2 className="w-5 h-5 text-purple-500" />,
      gradient: "from-purple-500/20 to-pink-500/20"
    }
  ];

  return (
    <section id="team" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            فريقنا المتميز
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            تعرف على الخبراء المتخصصين الذين يقدمون لك أفضل الخدمات التقنية عبر الديسكورد
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card 
              key={member.name} 
              className="group hover:shadow-tech transition-all duration-300 hover-glow border border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6 text-center">
                {/* Avatar with Status */}
                <div className="relative mb-6 flex justify-center">
                  <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} rounded-full blur-xl opacity-60 group-hover:opacity-80 transition-opacity`}></div>
                  <img
                    src={member.avatar}
                    alt={`${member.name} Discord Avatar`}
                    className="w-24 h-24 rounded-full border-4 border-primary/30 relative z-10 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute -bottom-2 right-1/2 transform translate-x-1/2 z-20">
                    <Badge 
                      variant="secondary" 
                      className="bg-green-500/20 text-green-400 border-green-500/30 text-xs"
                    >
                      {member.status}
                    </Badge>
                  </div>
                </div>

                {/* Member Info */}
                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-2 space-x-reverse">
                    {member.icon}
                    <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                  </div>
                  
                  <p className="text-tech-primary font-semibold">{member.role}</p>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.specialty}
                  </p>
                </div>

                {/* Discord Indicator */}
                <div className="mt-6 pt-4 border-t border-border/30">
                  <div className="flex items-center justify-center space-x-2 space-x-reverse text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>متاح على الديسكورد</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            هل تريد التحدث مع أحد أعضاء الفريق؟
          </p>
          <Badge 
            variant="outline" 
            className="text-tech-primary border-tech-primary/50 hover:bg-tech-primary/10 transition-colors cursor-pointer text-base px-6 py-2"
          >
            انضم لخادم الديسكورد للتواصل المباشر
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default Team;