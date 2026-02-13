import { useMutation } from "@tanstack/react-query";
import { api, type InsertMessage } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

export function useContactForm() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertMessage) => {
      // Validate locally before sending (defensive programming)
      const validated = api.contact.submit.input.parse(data);

      const res = await fetch(api.contact.submit.path, {
        method: api.contact.submit.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        // Handle specific error codes if needed, or generic
        if (res.status === 400) {
           const error = api.contact.submit.responses[400].parse(await res.json());
           throw new Error(error.message);
        }
        throw new Error("Failed to send message");
      }

      return api.contact.submit.responses[200].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Transmission Successful",
        description: "Your message has been received on our encrypted channels.",
        className: "border-primary text-primary-foreground bg-secondary",
      });
    },
    onError: (error) => {
      toast({
        title: "Transmission Failed",
        description: error.message || "An unexpected error occurred.",
        variant: "destructive",
      });
    },
  });
}
