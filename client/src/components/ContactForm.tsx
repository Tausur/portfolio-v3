import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertMessageSchema } from "@shared/schema";
import type { InsertMessage } from "@shared/schema";
import { useContactForm } from "@/hooks/use-contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Loader2, Send } from "lucide-react";
import { motion } from "framer-motion";

export function ContactForm() {
  const { mutate, isPending } = useContactForm();
  
  const form = useForm<InsertMessage>({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: InsertMessage) {
    mutate(data, {
      onSuccess: () => form.reset(),
    });
  }

  return (
    <div className="bg-secondary/20 p-6 md:p-8 rounded-lg border border-primary/10 backdrop-blur-sm">
      <div className="flex items-center gap-2 mb-6 text-primary font-mono text-sm opacity-70">
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        SECURE TRANSMISSION CHANNEL
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Identity</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="John Doe" 
                    className="bg-background/50 border-primary/20 focus:border-primary/60 font-mono" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Return Address</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="john@example.com" 
                    className="bg-background/50 border-primary/20 focus:border-primary/60 font-mono" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Payload</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Enter your message..." 
                    className="min-h-[120px] bg-background/50 border-primary/20 focus:border-primary/60 font-mono resize-none" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            disabled={isPending}
            className="w-full bg-primary/90 hover:bg-primary text-primary-foreground font-mono font-bold tracking-tight shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all"
          >
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ENCRYPTING...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                EXECUTE TRANSMISSION
              </>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
