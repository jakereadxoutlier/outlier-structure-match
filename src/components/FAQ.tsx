import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do you self-perform the concrete work?",
    answer: "No. Outlier Structures is a project matchmaking and lead generation company. We connect you with vetted structural concrete contractors who self-perform the work. We handle the initial qualification, coordination, and introduction.",
  },
  {
    question: "What size projects are a fit?",
    answer: "We focus on high-value structural concrete projects starting at approximately $50k and ranging into multi-million dollar packages. Our sweet spot includes podium decks, parking structures, seismic retrofits, and complex foundation work for commercial and mixed-use developments.",
  },
  {
    question: "Do you work outside Ventura County?",
    answer: "Yes. While Ventura County is our core market, our network extends across Southern California including Los Angeles, Orange County, and San Bernardino areas. We're actively expanding to other markets based on demand.",
  },
  {
    question: "How do you choose which contractor receives my project?",
    answer: "We match projects based on scope complexity, schedule requirements, contractor availability, and past performance on similar work. Our goal is to connect you with a crew whose strengths align with your specific project needs.",
  },
  {
    question: "How are fees and pricing structured?",
    answer: "There is no cost to submit a project or receive an introduction. Contractors pay Outlier Structures a referral fee only when they successfully bid and win work. You receive direct, competitive pricing from the structural crew with no markup from us.",
  },
  {
    question: "How quickly will I hear back?",
    answer: "Our average first response time is under 24 hours. For urgent projects, call us directly at (805) 555-0100 and we'll prioritize your review and contractor outreach immediately.",
  },
  {
    question: "Can I request multiple bids?",
    answer: "Absolutely. If you'd like competitive bids from multiple crews, let us know in your intake form or during the initial call. We can facilitate introductions to 2-3 qualified contractors depending on project scope and timing.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about working with Outlier Structures
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass-card rounded-xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 flex justify-between items-center gap-4 hover:bg-secondary/50 transition-colors"
              >
                <span className="font-semibold text-base sm:text-lg pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6 text-muted-foreground leading-relaxed border-t border-border pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a
            href="#main-form"
            className="text-primary hover:text-primary-glow font-semibold inline-flex items-center gap-2 transition-colors"
          >
            Contact us directly →
          </a>
        </div>
      </div>
    </section>
  );
};
