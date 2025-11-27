"use client";

import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What services does Awake Agency offer?",
      answer: "We offer comprehensive branding and design services including brand strategy, logo design, web design, UI/UX design, marketing materials, and corporate identity development. Our team works closely with you to create impactful visual solutions.",
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on scope and complexity. A typical brand identity project takes 4-6 weeks, while a full website design can take 6-10 weeks. We'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "How is pricing structured at Awake Agency?",
      answer: "We offer flexible pricing options including project-based pricing and monthly retainer plans. Our Basic plan starts at $2,500/mo and Premium at $3,500/mo. Custom enterprise solutions are also available.",
    },
    {
      question: "Do you offer ongoing support after project completion?",
      answer: "Yes! We offer ongoing support and maintenance packages. Our Premium plan includes priority support and monthly strategy calls. We're committed to your long-term success.",
    },
    {
      question: "How often will I receive updates on project progress?",
      answer: "We believe in transparent communication. You'll receive weekly progress updates, have access to our project management system, and can schedule check-in calls at any time during the project.",
    },
    {
      question: "What is your contract with Awake agency?",
      answer: "Our contracts are straightforward and client-friendly. We typically work on a project basis or monthly retainers. All contracts include clear deliverables, timelines, and revision policies.",
    },
  ];

  return (
    <section className="section-padding bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Got{" "}
            <span className="script-font font-normal text-[#E8FF01]">questions?</span>
            <br />
            <span className="text-gray-500">We&apos;ve got answers</span>
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-2xl overflow-hidden transition-all ${
                openIndex === index ? "border-[#E8FF01]/50 bg-[#0a0a0a]" : "border-[#222] hover:border-[#E8FF01]/30"
              }`}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-white">{faq.question}</span>
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    openIndex === index ? "bg-[#E8FF01] text-black" : "bg-[#222] text-[#E8FF01]"
                  }`}
                >
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      openIndex === index ? "rotate-45" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-48" : "max-h-0"
                }`}
              >
                <p className="px-6 pb-5 text-gray-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
