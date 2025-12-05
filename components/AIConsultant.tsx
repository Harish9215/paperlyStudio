import React, { useState, useEffect } from 'react';
import { generateDesignConcepts } from '../services/geminiService';
import { DesignConcept } from '../types';
import { Button } from './Button';
import { Sparkles, Loader2, Info, Box, Ruler, Layers } from 'lucide-react';
import { FadeIn } from './FadeIn';

// Helper Component for Typewriter Effect
const TypewriterText = ({ text, delay = 0, speed = 15 }: { text: string; delay?: number; speed?: number }) => {
  const [display, setDisplay] = useState('');
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setHasStarted(true);
    }, delay);
    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!hasStarted) return;
    
    let i = 0;
    const intervalId = setInterval(() => {
      setDisplay((prev) => {
        if (i >= text.length) {
          clearInterval(intervalId);
          return text;
        }
        i++;
        return text.substring(0, i);
      });
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, hasStarted, speed]);

  return (
    <span>
      {display}
      {hasStarted && display.length < text.length && (
        <span className="inline-block w-2 h-4 bg-paper-gold ml-1 animate-pulse align-middle"></span>
      )}
    </span>
  );
};

export const AIConsultant: React.FC = () => {
  const [productName, setProductName] = useState('');
  const [brandVibe, setBrandVibe] = useState('');
  const [details, setDetails] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [concepts, setConcepts] = useState<DesignConcept[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!productName || !brandVibe) return;

    setIsLoading(true);
    setError(null);
    try {
      const results = await generateDesignConcepts(productName, brandVibe, details);
      setConcepts(results);
    } catch (err) {
      setError("We couldn't generate concepts at this moment. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="consultation" className="pt-32 pb-24 bg-paper-black text-white relative overflow-hidden min-h-screen">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-paper-charcoal rounded-full filter blur-[100px] opacity-30 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Intro & Form */}
          <FadeIn delay={0} className="h-full">
            <div className="sticky top-32">
              <div className="flex items-center space-x-2 text-paper-gold mb-4">
                <Sparkles size={20} />
                <span className="text-xs font-bold tracking-widest uppercase font-serif">AI Design Engine</span>
              </div>
              <h2 className="font-serif text-4xl md:text-6xl mb-6 uppercase leading-none">
                Define Your <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-paper-gold to-white">Structure.</span>
              </h2>
              <p className="text-gray-400 mb-10 leading-relaxed font-light text-lg">
                Input your product parameters. Our engine generates preliminary structural and aesthetic specifications instantly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase text-paper-gold mb-2 font-serif">01 / Product Name</label>
                  <input 
                    type="text"
                    required
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    placeholder="e.g. Organic Lavender Soap"
                    className="w-full bg-paper-charcoal border-b-2 border-gray-700 text-white px-4 py-4 focus:outline-none focus:border-paper-gold transition-colors placeholder-gray-600 text-lg font-bold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase text-paper-gold mb-2 font-serif">02 / Brand Vibe</label>
                  <select 
                    required
                    value={brandVibe}
                    onChange={(e) => setBrandVibe(e.target.value)}
                    className="w-full bg-paper-charcoal border-b-2 border-gray-700 text-white px-4 py-4 focus:outline-none focus:border-paper-gold transition-colors appearance-none text-lg font-bold"
                  >
                    <option value="" disabled>Select a vibe...</option>
                    <option value="Luxury & Minimal">Luxury & Minimal</option>
                    <option value="Eco-Friendly & Raw">Eco-Friendly & Raw</option>
                    <option value="Modern & Tech">Modern & Tech</option>
                    <option value="Vintage & Heritage">Vintage & Heritage</option>
                    <option value="Playful & Bold">Playful & Bold</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase text-paper-gold mb-2 font-serif">03 / Specifications (Optional)</label>
                  <textarea 
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder="e.g. Target audience is Gen Z, price point is $45..."
                    rows={3}
                    className="w-full bg-paper-charcoal border-b-2 border-gray-700 text-white px-4 py-4 focus:outline-none focus:border-paper-gold transition-colors placeholder-gray-600 resize-none text-lg"
                  />
                </div>
                
                <Button type="submit" variant="primary" disabled={isLoading} className="w-full bg-paper-gold text-paper-black hover:bg-white hover:text-paper-black border-none h-16 text-lg">
                  {isLoading ? <span className="flex items-center"><Loader2 className="animate-spin mr-2" size={20}/> COMPUTING...</span> : 'GENERATE SPECS'}
                </Button>
              </form>
            </div>
          </FadeIn>

          {/* Right Column: Results - "Technical Spec Sheet" Look */}
          <FadeIn delay={200} className="h-full">
            <div className="bg-paper-charcoal/30 border-2 border-dashed border-gray-700 p-8 min-h-[600px] flex flex-col relative h-full rounded-sm">
              <div className="absolute top-0 left-0 bg-gray-800 text-xs text-gray-400 px-3 py-1 font-mono uppercase">Sys.Output_v2.1</div>
              
              {!concepts && !isLoading && (
                <div className="flex-1 flex flex-col items-center justify-center text-center text-gray-500">
                  <Box size={64} strokeWidth={1} className="mb-6 opacity-20" />
                  <p className="font-serif text-2xl mb-2 text-gray-600">AWAITING INPUT</p>
                  <p className="font-mono text-xs text-gray-600">Enter parameters to generate structural concepts.</p>
                </div>
              )}

              {isLoading && (
                <div className="flex-1 flex flex-col items-center justify-center text-center">
                   <div className="w-full max-w-xs h-1 bg-gray-800 mb-6 relative overflow-hidden">
                      <div className="absolute inset-0 bg-paper-gold animate-indeterminate"></div>
                   </div>
                   <p className="text-paper-gold font-mono text-sm uppercase tracking-widest animate-pulse">Analyzing Brand DNA...</p>
                </div>
              )}
              
              {error && (
                 <div className="flex-1 flex items-center justify-center text-paper-gold font-mono text-sm border border-paper-gold p-4 bg-paper-gold/10">
                   ERROR: {error}
                 </div>
              )}

              {concepts && !isLoading && (
                <div className="space-y-8 overflow-y-auto max-h-[800px] hide-scrollbar pr-2 pt-8">
                   <div className="flex items-center justify-between border-b-2 border-white pb-4 mb-8">
                      <h3 className="font-serif text-3xl text-white uppercase">Spec Sheets</h3>
                      <button onClick={() => setConcepts(null)} className="text-xs text-paper-gold hover:text-white font-mono uppercase border border-paper-gold hover:border-white px-3 py-1 transition-colors">Reset</button>
                   </div>
                   
                   {concepts.map((concept, idx) => (
                     <div key={idx} className="bg-paper-black relative group animate-fade-in-up" style={{ animationDelay: `${idx * 200}ms` }}>
                       {/* Card Header */}
                       <div className="bg-white text-paper-black p-4 flex justify-between items-center">
                          <h4 className="font-serif text-xl font-bold uppercase">{concept.conceptName}</h4>
                          <span className="font-mono text-sm font-bold">NO. 0{idx + 1}</span>
                       </div>
                       
                       {/* Card Body */}
                       <div className="p-6 border-l-2 border-r-2 border-b-2 border-white/20 space-y-6">
                          <div className="grid grid-cols-[24px_1fr] gap-4">
                            <Layers className="text-paper-gold mt-1" size={18} />
                            <div>
                              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 font-serif">Visual Language</p>
                              <p className="text-gray-200 text-sm leading-relaxed">
                                <TypewriterText text={concept.visualStyle} delay={idx * 800 + 200} />
                              </p>
                            </div>
                          </div>

                          <div className="grid grid-cols-[24px_1fr] gap-4">
                            <Box className="text-paper-gold mt-1" size={18} />
                            <div>
                              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 font-serif">Material Composition</p>
                              <p className="text-gray-200 text-sm leading-relaxed">
                                <TypewriterText text={concept.materials} delay={idx * 800 + 400} />
                              </p>
                            </div>
                          </div>

                          <div className="grid grid-cols-[24px_1fr] gap-4">
                            <Ruler className="text-paper-gold mt-1" size={18} />
                            <div>
                              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 font-serif">Interaction Flow</p>
                              <p className="text-gray-200 text-sm leading-relaxed">
                                <TypewriterText text={concept.unboxingExperience} delay={idx * 800 + 600} />
                              </p>
                            </div>
                          </div>
                       </div>
                       
                       {/* Decorative Corner */}
                       <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-paper-gold"></div>
                     </div>
                   ))}
                   
                   <div className="pt-8 mt-8 border-t border-dashed border-gray-700">
                      <p className="flex items-center text-xs text-gray-500 font-mono">
                        <Info size={14} className="mr-2 text-paper-gold"/> 
                        CONFIDENTIAL // PAPERLY STUDIO GENERATED
                      </p>
                   </div>
                </div>
              )}
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};