import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export function ContactForm() {
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    toast.success("Blessings received. We will be in touch.");
    (e.target as HTMLFormElement).reset();
  }

  return (
    <form 
  name="contact"
  method="POST"
  data-netlify="true"
  netlify-honeypot="bot-field"
  className="grid gap-4"
>
  <input type="hidden" name="form-name" value="contact" />
      <div className="grid md:grid-cols-2 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" placeholder="Your name" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" placeholder="you@example.com" required />
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" placeholder="Share your thoughts" rows={5} required />
      </div>
      <Button type="submit" disabled={loading} className="bg-saffron text-neutral-900 hover:bg-saffron/90">
        {loading ? "Sending..." : "Send Blessing"}
      </Button>
    </form>
  );
}
