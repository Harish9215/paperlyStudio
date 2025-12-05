import React, { useState } from 'react';
import { Button } from './Button';
import { FadeIn } from './FadeIn';
import { Check, Mail, MapPin } from 'lucide-react';

const interestOptions = [
  "Custom Packaging",
  "Branding & Identity",
  "Sustainable Solutions",
  "Production & Logistics",
  "General Inquiry"
];

export const Enquiry: React.FC = () => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleInterest = (interest: string) => {
    setSelectedInterests(prev => 
      prev.includes(interest) 
        ? prev.filter(i => i !== interest) 
        : [...prev, interest]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted", { ...formData, interests: selectedInterests });
    setIsSubmitted(true);
  };

  return (
    <section id="consultation" className="py-16 md:py-32 bg-white text-paper-black relative border-t border-gray-100">
       <div className="container mx-auto px-6 max-w-6xl">
          <FadeIn>
            <div className="text-center mb-16 md:mb-24">
               <span className="text-paper-gold font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Get in Touch</span>
               <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl font-medium text-paper-black mb-6">
                 Start a Conversation.
               </h2>
               <p className="text-gray-500 text-lg md:text-xl font-light max-w-2xl mx-auto">
                 Whether you have a fully fleshed-out idea or just a spark of inspiration, we're here to help you build it.
               </p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
             {/* Contact Info (Left on Desktop) */}
             <div className="lg:col-span-4 lg:order-2 space-y-12 h-full flex flex-col justify-center">
                 <FadeIn delay={100}>
                    <div className="bg-paper-cream p-8 md:p-10 border border-gray-100">
                        <h3 className="font-serif text-2xl mb-8 border-b border-gray-200 pb-4">Contact Details</h3>
                        
                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-paper-gold/10 flex items-center justify-center text-paper-gold shrink-0">
                                   <Mail size={18} />
                                </div>
                                <div>
                                    <p className="font-bold text-xs uppercase tracking-wider text-gray-400 mb-1">Email Us</p>
                                    <a href="mailto:hello@paperlystudio.com" className="text-lg font-medium hover:text-paper-gold transition-colors block break-all">hello@paperlystudio.com</a>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-paper-gold/10 flex items-center justify-center text-paper-gold shrink-0">
                                   <MapPin size={18} />
                                </div>
                                <div>
                                    <p className="font-bold text-xs uppercase tracking-wider text-gray-400 mb-1">Visit Studio</p>
                                    <p className="text-lg font-medium leading-snug">
                                        1200 Market St, Suite 400<br/>
                                        San Francisco, CA 94102
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 pt-8 border-t border-gray-200">
                            <p className="text-gray-500 text-sm italic leading-relaxed">
                                "Design is the silent ambassador of your brand."
                            </p>
                        </div>
                    </div>
                 </FadeIn>
             </div>

             {/* Form (Right on Desktop -> Occupies main space) */}
             <div className="lg:col-span-8 lg:order-1">
                <FadeIn delay={200}>
                    {isSubmitted ? (
                        <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center bg-paper-cream p-12 border border-gray-100 rounded-sm">
                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                                <Check size={32} />
                            </div>
                            <h3 className="font-serif text-3xl text-paper-black mb-4">Message Sent</h3>
                            <p className="text-gray-500 max-w-md mb-8">
                                Thanks for reaching out! We'll be in touch shortly to discuss your project.
                            </p>
                            <Button onClick={() => setIsSubmitted(false)} variant="outline">
                                Send Another Message
                            </Button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-10">
                            
                            {/* Interest Tags */}
                            <div>
                                <label className="block text-sm font-bold tracking-widest uppercase text-gray-400 mb-4">I'm interested in...</label>
                                <div className="flex flex-wrap gap-3">
                                    {interestOptions.map((option) => (
                                        <button
                                            key={option}
                                            type="button"
                                            onClick={() => toggleInterest(option)}
                                            className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 border ${
                                                selectedInterests.includes(option)
                                                ? 'bg-paper-black text-white border-paper-black shadow-lg'
                                                : 'bg-transparent text-gray-500 border-gray-200 hover:border-paper-gold hover:text-paper-gold'
                                            }`}
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Inputs */}
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="block text-sm font-bold text-paper-black">Name</label>
                                    <input 
                                        type="text" 
                                        id="name"
                                        required
                                        className="w-full bg-paper-cream/30 border-b-2 border-gray-200 px-4 py-4 focus:outline-none focus:border-paper-gold transition-colors text-lg"
                                        placeholder="Jane Doe"
                                        onChange={e => setFormData({...formData, name: e.target.value})}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="block text-sm font-bold text-paper-black">Email</label>
                                    <input 
                                        type="email" 
                                        id="email"
                                        required
                                        className="w-full bg-paper-cream/30 border-b-2 border-gray-200 px-4 py-4 focus:outline-none focus:border-paper-gold transition-colors text-lg"
                                        placeholder="jane@company.com"
                                        onChange={e => setFormData({...formData, email: e.target.value})}
                                    />
                                </div>
                            </div>
                            
                            <div className="space-y-2">
                                <label htmlFor="company" className="block text-sm font-bold text-paper-black">Company <span className="text-gray-400 font-normal">(Optional)</span></label>
                                <input 
                                    type="text" 
                                    id="company"
                                    className="w-full bg-paper-cream/30 border-b-2 border-gray-200 px-4 py-4 focus:outline-none focus:border-paper-gold transition-colors text-lg"
                                    placeholder="Your Brand"
                                    onChange={e => setFormData({...formData, company: e.target.value})}
                                />
                            </div>
                            
                            <div className="space-y-2">
                                <label htmlFor="message" className="block text-sm font-bold text-paper-black">Message</label>
                                <textarea 
                                    id="message"
                                    rows={4}
                                    className="w-full bg-paper-cream/30 border-b-2 border-gray-200 px-4 py-4 focus:outline-none focus:border-paper-gold transition-colors text-lg resize-y min-h-[120px]"
                                    placeholder="Tell us a bit about your project..."
                                    onChange={e => setFormData({...formData, message: e.target.value})}
                                />
                            </div>

                            <div className="pt-4">
                                <Button 
                                    type="submit" 
                                    className="w-full md:w-auto px-10 py-5 bg-paper-black text-white hover:bg-paper-black border-none"
                                    fillClassName="bg-paper-gold"
                                >
                                    <span className="relative z-10 text-white group-hover:text-white transition-colors duration-300">Send Message</span>
                                </Button>
                            </div>
                        </form>
                    )}
                </FadeIn>
             </div>
          </div>
       </div>
    </section>
  );
};