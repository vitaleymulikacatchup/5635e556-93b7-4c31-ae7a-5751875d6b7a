"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Briefcase, Code, Mail, Star, TrendingUp, Users, Zap } from "lucide-react";

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Services", id: "features" },
            { name: "About", id: "about" },
            { name: "Testimonials", id: "testimonials" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="DialedWeb"
          button={{
            text: "Get Started",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Professional Web Development That Drives Results"
          description="We create stunning, high-performance websites that convert visitors into customers. From design to development, we handle everything so you can focus on growing your business."
          tag="Web Development Agency"
          tagIcon={Code}
          buttons={[
            {
              text: "Start Your Project",
              href: "contact"
            },
            {
              text: "View Our Work",
              href: "about"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/5926393/pexels-photo-5926393.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Modern web development workspace"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Why Choose DialedWeb"
          description="We're not just developers - we're your digital growth partners. Our team combines technical expertise with creative vision to deliver websites that perform."
          tag="About Us"
          tagIcon={Users}
          bulletPoints={[
            {
              title: "Expert Development Team",
              description: "Our developers stay current with the latest technologies and best practices",
              icon: Code
            },
            {
              title: "Results-Driven Approach",
              description: "Every website we build is optimized for conversions and user experience",
              icon: TrendingUp
            },
            {
              title: "Full-Service Solution",
              description: "From concept to launch and beyond, we handle every aspect of your project",
              icon: Zap
            }
          ]}
          imageSrc="https://images.pexels.com/photos/5926393/pexels-photo-5926393.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="DialedWeb development team at work"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardThree
          title="Our Services"
          description="Comprehensive web development solutions tailored to your business needs"
          tag="Services"
          tagIcon={Briefcase}
          features={[
            {
              id: "01",
              title: "Custom Web Design",
              description: "Beautiful, responsive designs that reflect your brand and engage your audience",
              imageSrc: "https://images.pexels.com/photos/6625655/pexels-photo-6625655.png?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Custom web design showcase"
            },
            {
              id: "02",
              title: "Full-Stack Development",
              description: "Robust, scalable websites built with modern technologies and best practices",
              imageSrc: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Full-stack development process"
            },
            {
              id: "03",
              title: "SEO Optimization",
              description: "Get found online with our comprehensive SEO strategies and technical optimization",
              imageSrc: "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "SEO optimization dashboard"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Clients Say"
          description="Don't just take our word for it - hear from businesses we've helped grow"
          tag="Testimonials"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "CEO & Founder",
              testimonial: "DialedWeb transformed our online presence completely. Our new website not only looks amazing but has increased our conversion rate by 150%. The team was professional, responsive, and delivered exactly what they promised.",
              imageSrc: "https://images.pexels.com/photos/6894103/pexels-photo-6894103.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Johnson, CEO"
            },
            {
              id: "2",
              name: "Michael Rodriguez",
              role: "Tech Startup Founder",
              testimonial: "Working with DialedWeb was a game-changer for our startup. They understood our vision and created a website that perfectly represents our brand. The attention to detail and technical expertise is outstanding.",
              imageSrc: "https://images.pexels.com/photos/7414280/pexels-photo-7414280.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Michael Rodriguez, Founder"
            },
            {
              id: "3",
              name: "Emily Chen",
              role: "Marketing Director",
              testimonial: "The team at DialedWeb didn't just build us a website - they built us a powerful marketing tool. Our organic traffic has doubled since launch, and the user experience is phenomenal.",
              imageSrc: "https://images.pexels.com/photos/5990046/pexels-photo-5990046.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Emily Chen, Marketing Director"
            },
            {
              id: "4",
              name: "David Thompson",
              role: "Business Owner",
              testimonial: "I've worked with several agencies before, but DialedWeb stands out. They're responsive, creative, and truly care about your success. Our new site has generated more leads in 3 months than our old site did all year.",
              imageSrc: "https://images.pexels.com/photos/7552374/pexels-photo-7552374.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Thompson, Business Owner"
            },
            {
              id: "5",
              name: "Lisa Martinez",
              role: "E-commerce Entrepreneur",
              testimonial: "DialedWeb rebuilt our e-commerce platform and the results speak for themselves - 40% increase in sales and 60% improvement in page load times. They're simply the best at what they do.",
              imageSrc: "https://images.pexels.com/photos/7552374/pexels-photo-7552374.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Lisa Martinez, E-commerce Entrepreneur"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Get answers to common questions about our web development services"
          faqs={[
            {
              id: "1",
              title: "How long does it take to build a website?",
              content: "Most projects take 4-8 weeks depending on complexity. We'll provide a detailed timeline during our initial consultation based on your specific requirements."
            },
            {
              id: "2",
              title: "Do you provide ongoing maintenance?",
              content: "Yes, we offer comprehensive maintenance packages including security updates, content updates, performance optimization, and technical support."
            },
            {
              id: "3",
              title: "Will my website be mobile-friendly?",
              content: "Absolutely. All our websites are built with responsive design, ensuring they look and function perfectly on all devices - mobile, tablet, and desktop."
            },
            {
              id: "4",
              title: "Can you help with SEO?",
              content: "Yes, we include basic SEO optimization with every project and offer advanced SEO services to help your website rank higher in search results."
            },
            {
              id: "5",
              title: "What's included in your pricing?",
              content: "Our packages include design, development, basic SEO, mobile optimization, testing, and launch. We'll provide a detailed quote based on your specific needs."
            }
          ]}
          textPosition="left"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get Started"
          tagIcon={Mail}
          title="Ready to Transform Your Online Presence?"
          description="Get a free consultation and discover how we can help your business grow with a professional website that converts."
          inputPlaceholder="Enter your email address"
          buttonText="Get Free Consultation"
          termsText="By submitting, you agree to receive occasional emails from DialedWeb. Unsubscribe anytime."
          imageSrc="https://images.pexels.com/photos/3719037/pexels-photo-3719037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Contact DialedWeb for web development services"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Services",
              items: [
                { label: "Web Design", href: "features" },
                { label: "Development", href: "features" },
                { label: "SEO Services", href: "features" },
                { label: "Maintenance", href: "contact" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Work", href: "about" },
                { label: "Testimonials", href: "testimonials" },
                { label: "FAQ", href: "faq" }
              ]
            },
            {
              title: "Contact",
              items: [
                { label: "Get Started", href: "contact" },
                { label: "Free Consultation", href: "contact" },
                { label: "Support", href: "contact" }
              ]
            }
          ]}
          copyrightText="© 2025 | DialedWeb"
        />
      </div>
    </ThemeProvider>
  );
}