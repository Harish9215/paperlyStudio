import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { FadeIn } from './FadeIn';
import { ArrowUpRight, CheckCircle2, X, Cog, Layers, Ruler, FileCheck } from 'lucide-react';

const models = [
  {
    id: '01',
    title: 'Market Ready',
    subtitle: 'The Quick-Launch Framework',
    idealFor: 'Startups & MVPs',
    description: 'Adapt your brand to our library of pre-engineered, sustainably optimized structural templates. Zero tooling costs.',
    turnaround: '1-2 Weeks',
    features: ['Pre-set Dielines', 'Surface Graphics Only', 'Low MOQs'],
    technicalSpecs: {
        materials: 'Standard FSC Certified Folding Board (16pt/18pt)',
        print: 'High-speed Digital CMYK',
        finishes: 'Water-based Matte or Gloss Coating',
        tooling: 'None (Pre-existing dies)'
    },
    workflow: ['Template Selection', 'Artwork Application', 'Digital Proofing', 'Production'],
    deliverables: 'Flat-packed cartons, assembly instructions.'
  },
  {
    id: '02',
    title: 'Brand Builder',
    subtitle: 'The Custom Architecture',
    idealFor: 'Scaling D2C Brands',
    description: 'A fully bespoke unboxing experience. We engineer custom cavities, reveals, and locking mechanisms tailored to your product.',
    turnaround: '4-6 Weeks',
    features: ['Custom Engineering', '3D Prototyping', 'Material Sourcing'],
    technicalSpecs: {
        materials: 'Custom Caliper Board, Micro-flute, Rigid Chipboard',
        print: 'Offset Lithography (Pantone/CMYK)',
        finishes: 'Foil Stamping, Embossing, Soft-touch Lamination',
        tooling: 'Custom cutting dies and print plates'
    },
    workflow: ['Structural Engineering', 'White Sample Prototyping', 'Material Selection', 'Tooling Fabrication', 'Mass Production'],
    deliverables: 'Custom structural packaging, physical prototypes, production tooling assets.'
  },
  {
    id: '03',
    title: 'Enterprise',
    subtitle: 'The Global Supply Chain',
    idealFor: 'Retail & Corporate',
    description: 'Comprehensive partnership managing mass production, global logistics, safety testing, and warehousing solutions.',
    turnaround: 'Ongoing',
    features: ['Global Logistics', 'QA/QC Audits', 'Inventory Mgmt'],
    technicalSpecs: {
        materials: 'Multi-substrate sourcing (Paper, Pulp, Bio-plastics)',
        print: 'Global color management consistency',
        finishes: 'Retail-grade durability coatings',
        tooling: 'High-volume rotary dies'
    },
    workflow: ['Global Audit', 'Supply Chain Optimization', 'Compliance Testing (ISTA)', 'Warehousing & Distribution'],
    deliverables: 'End-to-end supply chain management, quarterly QA reports, inventory systems.'
  }
];

export const Partnerships: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState<typeof models[0] | null>(null);

  useEffect(() => {
    if (selectedModel) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedModel]);

  const scrollToConsultation = () => {
    const element = document.getElementById('consultation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="partnerships" className="py-16 md:py-32 bg-paper-cream relative z-10">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20 pb-6 border-b-4 border-paper-black">
            <div>
              <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-paper-gold mb-2">Engagement Models</h2>
              <h3 className="font-serif text-4xl md:text-5xl lg:text-7xl font-black text-paper-black uppercase leading-[0.9]">
                Choose Your <br/> Framework.
              </h3>
            </div>
            <div className="hidden md:block text-right">
              <p className="font-mono text-xs text-gray-400 uppercase tracking-widest mb-1">System.Config_v2.4</p>
              <p className="font-bold text-paper-black">Scalable solutions for every growth stage.</p>
            </div>
          </div>
        </FadeIn>

        <div className="flex flex-col">
          {models.map((model, idx) => (
            <FadeIn key={model.id} delay={idx * 150} className="w-full">
              <div 
                onClick={() => setSelectedModel(model)}
                className="group relative border-b border-gray-300 hover:border-paper-black transition-colors duration-500 cursor-pointer"
              >
                {/* Hover Background */}
                <div className="absolute inset-0 bg-paper-black transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] z-0"></div>

                <div className="relative z-10 flex flex-col lg:flex-row py-8 md:py-12 lg:items-center gap-6 lg:gap-12 group-hover:text-white transition-colors duration-300 px-4 lg:px-8">
                  
                  {/* ID */}
                  <div className="font-mono text-sm md:text-base text-paper-gold font-bold tracking-widest opacity-80 group-hover:text-paper-gold">
                    /{model.id}
                  </div>

                  {/* Title Section */}
                  <div className="lg:w-1/3">
                    <h4 className="font-serif text-3xl md:text-4xl lg:text-6xl font-black uppercase tracking-tight leading-none mb-2">
                      {model.title}
                    </h4>
                    <span className="inline-block px-2 py-1 border border-paper-charcoal group-hover:border-gray-600 rounded-sm text-xs font-bold uppercase tracking-[0.2em] group-hover:bg-gray-800 group-hover:text-white transition-all">
                      {model.idealFor}
                    </span>
                  </div>

                  {/* Description Section */}
                  <div className="lg:w-1/3">
                    <p className="text-base md:text-xl font-medium leading-relaxed opacity-80 group-hover:opacity-100">
                      {model.description}
                    </p>
                  </div>

                  {/* Features / Action */}
                  <div className="lg:w-1/3 flex flex-col justify-between h-full lg:items-end gap-6">
                    <ul className="space-y-1">
                      {model.features.map((feat, i) => (
                        <li key={i} className="flex items-center text-sm font-bold uppercase tracking-wide opacity-60 group-hover:opacity-100">
                           <CheckCircle2 size={14} className="mr-2 text-paper-gold" />
                           {feat}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-4 mt-4 lg:mt-0">
                       <span className="font-mono text-xs text-paper-gold uppercase tracking-widest group-hover:text-white">Est. {model.turnaround}</span>
                       
                       {/* Button hidden until hover - CHANGED from Icon to Button with Text */}
                       <div className="lg:opacity-0 group-hover:opacity-100 bg-white text-paper-black px-6 py-2 rounded-full flex items-center gap-3 transition-all duration-500 transform lg:translate-y-4 group-hover:translate-y-0 shadow-lg border border-gray-200 lg:border-none">
                          <span className="text-xs font-bold uppercase tracking-widest">View Details</span>
                          <ArrowUpRight size={16} />
                       </div>
                    </div>
                  </div>

                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={400}>
            <div className="mt-12 md:mt-20 flex justify-center">
                <Button onClick={scrollToConsultation} variant="outline" className="shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] border-2 border-paper-black bg-white text-paper-black hover:bg-paper-black hover:text-white">
                    Start Your Project
                </Button>
            </div>
        </FadeIn>
      </div>

      {/* Detail Modal */}
      {selectedModel && (
        <div className="fixed inset-0 z-[100] bg-paper-black/50 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 animate-fade-in-up">
            <div className="bg-paper-cream w-full max-w-5xl h-full md:h-auto md:max-h-[90vh] overflow-y-auto relative shadow-2xl flex flex-col md:flex-row">
                
                {/* Close Button */}
                <button 
                    onClick={(e) => { e.stopPropagation(); setSelectedModel(null); }}
                    className="absolute top-6 right-6 z-20 w-10 h-10 bg-paper-black text-white rounded-full flex items-center justify-center hover:bg-paper-gold transition-colors"
                >
                    <X size={20} />
                </button>

                {/* Left: Summary */}
                <div className="bg-paper-black text-white p-8 md:p-12 md:w-1/3 flex flex-col justify-between">
                    <div>
                        <div className="text-paper-gold font-mono text-sm tracking-widest mb-4">/{selectedModel.id}</div>
                        <h2 className="font-serif text-4xl md:text-5xl font-black uppercase leading-none mb-4">{selectedModel.title}</h2>
                        <div className="inline-block px-3 py-1 border border-gray-600 text-xs font-bold uppercase tracking-widest mb-8">
                            {selectedModel.idealFor}
                        </div>
                        <p className="text-gray-400 leading-relaxed mb-8">
                            {selectedModel.description}
                        </p>
                    </div>
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <Cog className="text-paper-gold" size={20} />
                            <span className="font-bold uppercase tracking-wide text-sm">Turnaround</span>
                        </div>
                        <p className="font-serif text-3xl">{selectedModel.turnaround}</p>
                    </div>
                </div>

                {/* Right: Technical Specs */}
                <div className="p-8 md:p-12 md:w-2/3 bg-white text-paper-black">
                    <div className="mb-10 border-b-2 border-gray-100 pb-8">
                        <div className="flex items-center gap-2 mb-6">
                            <Ruler className="text-paper-secondary" size={24} />
                            <h3 className="font-serif text-2xl font-bold uppercase">Technical Specifications</h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-bold text-xs uppercase tracking-widest text-gray-500 mb-2">Materials</h4>
                                <p className="font-medium">{selectedModel.technicalSpecs.materials}</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-xs uppercase tracking-widest text-gray-500 mb-2">Print Capabilities</h4>
                                <p className="font-medium">{selectedModel.technicalSpecs.print}</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-xs uppercase tracking-widest text-gray-500 mb-2">Finishes</h4>
                                <p className="font-medium">{selectedModel.technicalSpecs.finishes}</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-xs uppercase tracking-widest text-gray-500 mb-2">Tooling Req</h4>
                                <p className="font-medium">{selectedModel.technicalSpecs.tooling}</p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-10">
                         <div className="flex items-center gap-2 mb-6">
                            <Layers className="text-paper-secondary" size={24} />
                            <h3 className="font-serif text-2xl font-bold uppercase">Workflow</h3>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            {selectedModel.workflow.map((step, i) => (
                                <div key={i} className="flex-1 relative">
                                    <div className="text-4xl font-serif font-black text-gray-100 absolute -top-4 -left-2 -z-10">0{i+1}</div>
                                    <p className="font-bold text-sm leading-tight pt-2">{step}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <FileCheck className="text-paper-secondary" size={24} />
                            <h3 className="font-serif text-2xl font-bold uppercase">Deliverables</h3>
                        </div>
                        <p className="text-gray-600 bg-gray-50 p-4 border-l-4 border-paper-gold">
                            {selectedModel.deliverables}
                        </p>
                    </div>

                    <div className="mt-12 flex justify-end">
                         <Button onClick={() => { setSelectedModel(null); scrollToConsultation(); }} className="w-full md:w-auto">
                            Start Project
                         </Button>
                    </div>
                </div>
            </div>
        </div>
      )}
    </section>
  );
};