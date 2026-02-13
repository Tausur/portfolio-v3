import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SkillCardProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
  delay?: number;
}

export function SkillCard({ title, skills, icon, delay = 0 }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
    >
      <Card className="h-full bg-secondary/30 border-primary/10 hover:border-primary/40 hover:bg-secondary/50 transition-all duration-300 group">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-md bg-primary/10 text-primary group-hover:text-glow transition-all">
              {icon}
            </div>
            <CardTitle className="font-mono text-lg text-foreground group-hover:text-primary transition-colors">
              {title}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <Badge 
                key={i} 
                variant="outline" 
                className="bg-transparent border-primary/20 hover:border-primary/60 hover:text-primary transition-colors font-mono text-xs py-1"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
