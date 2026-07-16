import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { GithubIcon, GitlabIcon, FacebookIcon, InstagramIcon } from "./ui/Icons";
import { portfolioData } from "../data/portfolio";
import { Badge } from "./ui/Badge";
import { Card } from "./ui/Card";
import { Button } from "./ui/Button";

export default function Contact() {
  const { email, phone, address, github, gitlab, facebook, instagram } = portfolioData.contact;
  
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Animation constants
  const easeOut = [0.16, 1, 0.3, 1];
  const fadeInUp = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
  };

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    
    // Get Web3Forms access key from environment variables or fallback to portfolio data
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || portfolioData.contact.web3FormsAccessKey;
    
    const triggerMailtoFallback = () => {
      const subject = encodeURIComponent(`[Portfolio Contact] Lời nhắn từ ${formData.name}`);
      const body = encodeURIComponent(
        `Chào Mạnh,\n\nTên tôi là: ${formData.name}\nEmail liên hệ: ${formData.email}\n\nLời nhắn:\n${formData.message}\n\n---\nTin nhắn được gửi từ contact form của Portfolio.`
      );
      const mailtoUrl = `mailto:${email}?subject=${subject}&body=${body}`;
      window.location.href = mailtoUrl;
    };

    if (accessKey && accessKey !== "YOUR_ACCESS_KEY_HERE" && accessKey.trim() !== "") {
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: accessKey,
            name: formData.name,
            email: formData.email,
            message: formData.message,
            subject: `[Portfolio Contact] Lời nhắn mới từ ${formData.name}`,
            from_name: "Portfolio Website"
          }),
        });
        
        const result = await response.json();
        if (result.success) {
          setShowSuccess(true);
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => setShowSuccess(false), 5000);
        } else {
          console.warn("Web3Forms submission failed, falling back to mailto", result);
          triggerMailtoFallback();
        }
      } catch (err) {
        console.error("Error sending message via API, falling back to mailto", err);
        triggerMailtoFallback();
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Fallback to mailto
      setTimeout(() => {
        triggerMailtoFallback();
        setIsSubmitting(false);
        setShowSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setShowSuccess(false), 5000);
      }, 600);
    }
  };

  const handleScrollToForm = () => {
    const el = document.querySelector("#contact-form-anchor");
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 120,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="py-28 md:py-36 bg-background relative overflow-hidden">
        {/* Decorative Blur */}
        <div className="absolute left-10 bottom-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-accent/3 blur-[120px]" />
        
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15, margin: "-60px" }}
            variants={stagger}
            className="flex flex-col items-center"
          >
            {/* Section Badge */}
            <motion.div variants={fadeInUp} className="mb-6">
              <Badge>// GET IN TOUCH</Badge>
            </motion.div>

            {/* Section Heading */}
            <motion.h2
              variants={fadeInUp}
              className="font-display text-3xl md:text-[3.25rem] leading-[1.15] text-foreground mb-16 text-center"
            >
              Liên hệ với <span className="gradient-text">Tôi</span>
            </motion.h2>

            <div id="contact-form-anchor" className="grid w-full gap-12 lg:grid-cols-[0.9fr_1.1fr]">
              {/* Left Column: Contact Cards */}
              <motion.div variants={stagger} className="flex flex-col gap-6 text-left">
                {/* Email Card */}
                <Card className="flex items-center gap-4 bg-card p-6 hover:border-accent/20 transition-all duration-300">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/5 border border-accent/10 text-accent">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-sans text-xs font-mono uppercase tracking-wider text-muted-foreground">Email</h4>
                    <a href={`mailto:${email}`} className="font-sans text-base md:text-lg font-semibold text-foreground hover:text-accent transition-colors">
                      {email}
                    </a>
                  </div>
                </Card>

                {/* Phone Card */}
                <Card className="flex items-center gap-4 bg-card p-6 hover:border-accent/20 transition-all duration-300">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/5 border border-accent/10 text-accent">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-sans text-xs font-mono uppercase tracking-wider text-muted-foreground">Điện thoại</h4>
                    <a href={`tel:${phone}`} className="font-sans text-base md:text-lg font-semibold text-foreground hover:text-accent transition-colors">
                      {phone}
                    </a>
                  </div>
                </Card>

                {/* Address Card */}
                <Card className="flex items-center gap-4 bg-card p-6 hover:border-accent/20 transition-all duration-300">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/5 border border-accent/10 text-accent">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-sans text-xs font-mono uppercase tracking-wider text-muted-foreground">Địa chỉ</h4>
                    <p className="font-sans text-sm md:text-base font-semibold text-foreground">
                      {address}
                    </p>
                  </div>
                </Card>

                {/* Socials Card */}
                <Card className="flex items-center gap-4 bg-card p-6 hover:border-accent/20 transition-all duration-300">
                  <div className="flex flex-col gap-2 w-full">
                    <h4 className="font-sans text-xs font-mono uppercase tracking-wider text-muted-foreground">Mạng xã hội</h4>
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-2">
                      <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent transition-colors">
                        <GithubIcon className="h-5 w-5" /> GitHub
                      </a>
                      <a href={gitlab} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent transition-colors">
                        <GitlabIcon className="h-5 w-5" /> GitLab
                      </a>
                      <a href={facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent transition-colors">
                        <FacebookIcon className="h-5 w-5" /> Facebook
                      </a>
                      <a href={instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent transition-colors">
                        <InstagramIcon className="h-5 w-5" /> Instagram
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Right Column: Contact Form */}
              <motion.div variants={fadeInUp}>
                <Card className="bg-card p-8 text-left border border-border">
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    {/* Name Input */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="font-sans text-xs font-bold uppercase tracking-wider text-foreground">
                        Họ và tên
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Nguyễn Văn A"
                        className="h-12 w-full rounded-xl border border-border bg-background px-4 font-sans text-sm text-foreground transition-all focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/10"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="font-sans text-xs font-bold uppercase tracking-wider text-foreground">
                        Email liên hệ
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="email@example.com"
                        className="h-12 w-full rounded-xl border border-border bg-background px-4 font-sans text-sm text-foreground transition-all focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/10"
                      />
                    </div>

                    {/* Message Input */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="font-sans text-xs font-bold uppercase tracking-wider text-foreground">
                        Lời nhắn
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Viết lời nhắn của bạn ở đây..."
                        className="w-full rounded-xl border border-border bg-background p-4 font-sans text-sm text-foreground transition-all focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/10 resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      variant="primary"
                      disabled={isSubmitting}
                      className="w-full justify-center gap-2 group h-12"
                    >
                      {isSubmitting ? "Đang gửi..." : "Gửi tin nhắn"}
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Button>
                  </form>

                  {/* Success Alert Banner */}
                  <AnimatePresence>
                    {showSuccess && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="mt-6 flex items-start gap-3 rounded-xl border border-emerald-500/25 bg-emerald-500/5 p-4 text-emerald-700"
                      >
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500 mt-0.5" />
                        <div>
                          <h5 className="font-sans text-sm font-bold">Gửi yêu cầu thành công!</h5>
                          <p className="font-sans text-xs mt-1 text-emerald-600/90 leading-relaxed">
                            Form đã kích hoạt ứng dụng email (mailto). Bạn vui lòng gửi email trong hộp thư để hoàn tất.
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Dark Inverted CTA Banner before Footer */}
      <section className="relative overflow-hidden bg-foreground py-24 text-white dot-pattern border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 to-foreground pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="font-display text-3xl md:text-[3.25rem] leading-[1.15] text-white mb-6">
            Sẵn sàng hợp tác với <span className="gradient-text">Mạnh?</span>
          </h2>
          <p className="mx-auto max-w-xl font-sans text-base md:text-lg text-muted-foreground/80 leading-relaxed mb-8">
            Tôi luôn tìm kiếm cơ hội thực tập phát triển bản thân và đóng góp giá trị cho dự án. Hãy liên hệ với tôi ngay hôm nay!
          </p>
          <Button
            variant="primary"
            size="lg"
            onClick={handleScrollToForm}
            className="shadow-accent-lg hover:shadow-accent"
          >
            Liên hệ tuyển dụng
          </Button>
        </div>
      </section>
    </>
  );
}
