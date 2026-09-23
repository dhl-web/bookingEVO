import { useState, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SocialProofBar } from './components/SocialProofBar';
import { ComparisonSection } from './components/ComparisonSection';
import { FounderLetterSection } from './components/FounderLetterSection';
import { ProgramPillarsSection } from './components/ProgramPillarsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ConsultationForm } from './components/ConsultationForm';
import { FaqSection } from './components/FaqSection';
import { StickyFloatingActions } from './components/StickyFloatingActions';
import { Footer } from './components/Footer';
import { WebhookModal } from './components/WebhookModal';
import { ThankYouView } from './components/ThankYouView';
import { WebhookSubmissionResult } from './types';

const DEFAULT_WEBHOOK_URL = 'https://hook.eu1.make.com/04f3amgolo0f4dblm9cjw1nfishbie0b';

export default function App() {
  const [webhookUrl, setWebhookUrl] = useState<string>(() => {
    const saved = localStorage.getItem('evo_webhook_url');
    if (!saved || saved === 'https://hook.eu1.make.com/thay-bang-webhook-cua-ban') {
      localStorage.setItem('evo_webhook_url', DEFAULT_WEBHOOK_URL);
      return DEFAULT_WEBHOOK_URL;
    }
    return saved;
  });

  const [submissionResult, setSubmissionResult] = useState<WebhookSubmissionResult | null>(null);
  const [isWebhookModalOpen, setIsWebhookModalOpen] = useState(false);

  const formSectionRef = useRef<HTMLDivElement | null>(null);

  const scrollToForm = () => {
    formSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSaveWebhook = (newUrl: string) => {
    setWebhookUrl(newUrl);
    localStorage.setItem('evo_webhook_url', newUrl);
  };

  const handleFormSuccess = (result: WebhookSubmissionResult) => {
    setSubmissionResult(result);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setSubmissionResult(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // If already submitted, show the Thank You Page
  if (submissionResult) {
    return (
      <main>
        <ThankYouView result={submissionResult} onBackToHome={handleBackToHome} />
      </main>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-orange-100 selection:text-orange-900">
      {/* Sticky Header Navigation */}
      <Navbar onScrollToForm={scrollToForm} onScrollToSection={scrollToSection} />

      <main className="flex-1">
        {/* 1. Hero Section: Powerful above-the-fold value prop & Coach Ms My presentation */}
        <HeroSection
          onScrollToForm={scrollToForm}
          onScrollToFounder={() => scrollToSection('ve-ms-my')}
        />

        {/* 2. Social Proof & Numbers Bar */}
        <SocialProofBar />

        {/* 3. Comparison: Traditional Classes vs. 1-on-1 EVO English Coach */}
        <ComparisonSection onScrollToForm={scrollToForm} />

        {/* 4. Founder's Letter & Philosophy (Ms My - Tiểu My Na) */}
        <FounderLetterSection onScrollToForm={scrollToForm} />

        {/* 5. 4 Core Training Pillars & 3-Step Journey */}
        <ProgramPillarsSection onScrollToForm={scrollToForm} />

        {/* 6. Student Testimonials & Results */}
        <TestimonialsSection />

        {/* 7. Registration Section (2-Column High Converting Consultation Form) */}
        <section ref={formSectionRef} id="dang-ky" className="py-16 sm:py-24 bg-gradient-to-b from-white to-slate-100 relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <ConsultationForm
              webhookUrl={webhookUrl}
              onOpenWebhookModal={() => setIsWebhookModalOpen(true)}
              onSubmitSuccess={handleFormSuccess}
            />
          </div>
        </section>

        {/* 8. FAQ Section */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons: Zalo, Messenger, Quick Book & Scroll to Top */}
      <StickyFloatingActions onScrollToForm={scrollToForm} />

      {/* Webhook Configuration Modal */}
      <WebhookModal
        isOpen={isWebhookModalOpen}
        onClose={() => setIsWebhookModalOpen(false)}
        webhookUrl={webhookUrl}
        onSaveWebhookUrl={handleSaveWebhook}
      />
    </div>
  );
}
