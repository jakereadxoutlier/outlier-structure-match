import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you self-perform the concrete work?",
    answer:
      "No. Outlier Structures is a matchmaking platform that connects you with vetted structural concrete crews. We don't self-perform work, which means we stay focused on finding the right fit for your project without conflicts of interest.",
  },
  {
    question: "What project sizes are a good fit?",
    answer:
      "We focus on structural concrete packages typically ranging from $50k to multi-million dollar projects. This includes podium decks, parking structures, foundations, seismic retrofits, and other high-value structural work. We're not a fit for small residential patios or driveways.",
  },
  {
    question: "Do you work outside Ventura County?",
    answer:
      "Yes. While Ventura County is our core market, our network extends throughout Southern California, including Los Angeles, Orange, and San Diego counties. Reach out with your location and we'll let you know if we can help.",
  },
  {
    question: "How do you choose which contractor receives my project?",
    answer:
      "We match based on project type, size, location, timeline, and crew availability. We consider each contractor's past experience with similar work, current workload, safety record, and insurance coverage. You always have final say on who you work with.",
  },
  {
    question: "How are fees structured?",
    answer:
      "There's no cost to submit a project or receive a bid. Outlier Structures is compensated by contractors in our network when a successful match is made. This model keeps us focused on making good fits, not charging upfront fees.",
  },
  {
    question: "What info should I have ready before requesting a bid?",
    answer:
      "Helpful to have: project location, approximate timeline, structural plans (if available), project type (podium, parking, foundation, etc.), and a rough budget range. That said, if you're early in planning, reach out anyway - we can help refine scope.",
  },
  {
    question: "How quickly will I hear back?",
    answer:
      "We respond to all project submissions within one business day. Complex projects may require a brief call to clarify scope before matching you with contractors. Most initial matches happen within 2-3 business days.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Questions about how this works
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Everything you need to know about Outlier Structures
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="glass-card border border-slate-700/50 rounded-xl px-6 hover:border-cyan-400/50 transition-colors"
                >
                  <AccordionTrigger className="text-left text-slate-50 hover:text-cyan-400 py-6 text-lg font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-400 pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
