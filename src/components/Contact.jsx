import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { track } from '../lib/analytics.js';

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('A valid email is required'),
  company: z.string().min(2, 'Company is required'),
  message: z.string().min(8, 'Tell us a little more'),
});

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (values) => {
    track('contact_submit', { company: values.company });
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error('Request failed');
      reset();
    } catch (e) {
      track('contact_error', { error: e.message });
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold">Start the System</p>
          <h2 className="mt-4 max-w-2xl font-serif text-fluid-h2 leading-[1.08]">Bring your next operating layer into focus.</h2>
          <div className="mt-8 space-y-6 text-paper/65">
            <p className="max-w-lg leading-relaxed">
              Tell us about your ambition and we’ll map the fastest route from brand direction to operating confidence.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <a href="mailto:hello@sunnus.co.ke" className="hover:text-gold">hello@sunnus.co.ke</a>
              <span className="text-paper/30">|</span>
              <a href="tel:+254700000000" className="hover:text-gold">+254 700 000 000</a>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="rounded border border-paper/10 bg-paper/[0.03] p-8">
          <div className="grid gap-4">
            <label className="grid gap-2">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-paper/50">Name</span>
              <input {...register('name')} className="bg-ink border border-paper/20 px-4 py-3 outline-none" />
              {errors.name && <span className="text-terra text-xs">{errors.name.message}</span>}
            </label>
            <label className="grid gap-2">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-paper/50">Email</span>
              <input {...register('email')} className="bg-ink border border-paper/20 px-4 py-3 outline-none" />
              {errors.email && <span className="text-terra text-xs">{errors.email.message}</span>}
            </label>
            <label className="grid gap-2">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-paper/50">Company</span>
              <input {...register('company')} className="bg-ink border border-paper/20 px-4 py-3 outline-none" />
              {errors.company && <span className="text-terra text-xs">{errors.company.message}</span>}
            </label>
            <label className="grid gap-2">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-paper/50">What are you building?</span>
              <textarea {...register('message')} className="min-h-[128px] bg-ink border border-paper/20 px-4 py-3 outline-none" />
              {errors.message && <span className="text-terra text-xs">{errors.message.message}</span>}
            </label>
            <button className="btn-primary w-fit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Request a Strategy Session'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
