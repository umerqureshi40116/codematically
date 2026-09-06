import { motion } from 'framer-motion';
import { Award, Code2, Play } from 'lucide-react';
import Reveal from './Reveal';

type Project = {
  tag: string;
  title: string;
  desc: string;
  /** Drive walkthrough video, where one was recorded. */
  demo?: string;
  code: string;
  thumbnail: string;
};

type Certificate = {
  img: string;
  issuer: string;
  title: string;
  date: string;
  featured: boolean;
};

const projects: Project[] = [
  {
    tag: 'LLM · RAG',
    title: 'ANF Chatbot',
    desc: 'RAG chatbot using LangGraph + Groq LLaMA 70B. 96% retrieval precision.',
    demo: 'https://drive.google.com/file/d/1ADYD4-VLENIl5wpVcwQCjj3JnWEkcZ8u/preview',
    code: 'https://github.com/umerqureshi40116/ANF_HQ_VERSION',
    thumbnail:
      'https://res.cloudinary.com/dh2tiiokr/image/upload/v1781295200/ANF_Chatbot_m6jcno.png',
  },
  {
    tag: 'Full Stack',
    title: 'Inventory Management',
    desc: 'FastAPI stack with JWT + RBAC, PDF/CSV reporting, 90% effort reduction.',
    demo: 'https://drive.google.com/file/d/12ThjJ4lltkZ713NRziuk2WTrP_Vsc0dS/preview',
    code: 'https://github.com/umerqureshi40116/waze_enterprises_water_project',
    thumbnail:
      'https://res.cloudinary.com/dh2tiiokr/image/upload/v1781281847/IMS_Thumbnail_hywe1g.png',
  },
  {
    tag: 'Deep Learning',
    title: 'MRI Brain Tumor Detection',
    desc: 'VGG16 transfer learning achieving 95% accuracy on brain MRI scans.',
    demo: 'https://drive.google.com/file/d/1UNe8ilI9XRjxcTQmocBqi1wA1jUGTqH_/preview',
    code: 'https://github.com/umerqureshi40116/Brain_Tumor_Detection_DL',
    thumbnail:
      'https://res.cloudinary.com/dh2tiiokr/image/upload/v1781281256/ChatGPT_Image_Jun_12_2026_09_19_39_PM_1_vy6e0b.png',
  },
  {
    tag: 'ML · Classification',
    title: 'Heart Disease Prediction',
    desc: 'Ensemble model (Random Forest + XGBoost) with 88% accuracy.',
    demo: 'https://drive.google.com/file/d/1HyLwy8-XnjR05BhAOPoh0omCDKFYkSyK/preview',
    code: 'https://github.com/umerqureshi40116/Heart_Disease_Prediction',
    thumbnail:
      'https://res.cloudinary.com/dh2tiiokr/image/upload/v1781295200/HDP_Thumbnail_vwfiwc.png',
  },
  {
    tag: 'Unsupervised',
    title: 'Customer Segmentation',
    desc: 'K-Means clustering & PCA on retail data for targeted marketing.',
    demo: 'https://drive.google.com/file/d/152FC1E_fZE-vGveqrK__TQ2Q6JxbNQKp/preview',
    code: 'https://github.com/umerqureshi40116/Customer-Segmentation-KMeans',
    thumbnail:
      'https://res.cloudinary.com/dh2tiiokr/image/upload/v1781282179/CSP_Thumbnail_caajbp.png',
  },
  {
    tag: 'Computer Vision',
    title: 'Virtual Try-On System',
    desc: 'Cat-VTON garment segmentation at 95% accuracy, GPU batching.',
    demo: 'https://drive.google.com/file/d/16GL-KCXMQi7sjEXfRL6LpyvVGHMPqnRY/preview',
    code: 'https://github.com/umerqureshi40116/CLOTHING_VIRTUAL_TRYON_WEB_APPLICATION',
    thumbnail:
      'https://res.cloudinary.com/dh2tiiokr/image/upload/v1781282492/VTON_Thumbnail_levdeb.png',
  },
  {
    tag: 'Full Stack AI',
    title: 'AI Assisted Hospital MS',
    desc: '3-hour rapid prototyping for job application.',
    demo: 'https://drive.google.com/file/d/17AdWAg5lq-rl8NKwfFUR9UU0q0Y2BSL1/preview',
    code: 'https://github.com/umerqureshi40116/IMERA_AI_AI_POWERED_FULL_STACK_APPLICATION',
    thumbnail:
      'https://res.cloudinary.com/dh2tiiokr/image/upload/v1781295583/Hospital_Thumbnail_lr931h.png',
  },
  {
    tag: 'Classification',
    title: 'Diabetes Prediction',
    desc: 'Logistic Regression & ANN with 92% accuracy, PIMA dataset.',
    demo: 'https://drive.google.com/file/d/1KZJoEwzb5ZG3J2yc3cKlH-Va0H_lggVm/preview',
    code: 'https://github.com/umerqureshi40116/Diabetes-Prediction-ML',
    thumbnail:
      'https://res.cloudinary.com/dh2tiiokr/image/upload/v1781295200/DDP_Thumbnail_pj8je8.png',
  },
  {
    tag: 'NLP · Compliance',
    title: 'ComplianceGuard',
    desc: 'Call-centre compliance detector: TF-IDF + LinearSVC flags whether agents completed data-capture verification. 99.97% on 5-fold CV vs 81.3% keyword baseline.',
    code: 'https://github.com/umerqureshi40116/call_center_supervision',
    thumbnail:
      'https://res.cloudinary.com/dh2tiiokr/image/upload/v1788712595/Compliance_Guard_Thumbnail_xawxpu.png',
  },
  {
    tag: 'ML · Analytics',
    title: 'Student Class Estimator',
    desc: 'Teachers upload a class CSV and get grade-distribution and difficulty-tolerance charts. Aggregate class predictions land 88-95% accurate.',
    code: 'https://github.com/umerqureshi40116/student_class_estimator',
    thumbnail:
      'https://res.cloudinary.com/dh2tiiokr/image/upload/v1788712749/Student_Performance_Project_Thumbnail_zp2qzo.png',
  },
];

const certificates: Certificate[] = [
  {
    img: 'https://res.cloudinary.com/dh2tiiokr/image/upload/v1778962745/IMG_20260517_010828_410_thprwg.jpg',
    issuer: 'Anti-Narcotics Force (ANF)',
    title: 'Junior AI Engineer',
    date: 'Sep 2025 – Apr 2026',
    featured: true,
  },
  {
    img: 'https://res.cloudinary.com/dh2tiiokr/image/upload/v1778971885/Muahammad_Umer_Qureshi_page-0001_ezmhy6.jpg',
    issuer: 'Kartoa Technologies-USA Based Company',
    title: 'AI Intern',
    date: 'Aug 2025 – Nov 2026',
    featured: true,
  },
  {
    img: 'https://res.cloudinary.com/dh2tiiokr/image/upload/v1778962620/IBM_Python_Certificate_ryfoeu.jpg',
    issuer: 'IBM',
    title: 'Python for Data Science, AI and Development',
    date: 'Completed 2025',
    featured: false,
  },
  {
    img: 'https://res.cloudinary.com/dh2tiiokr/image/upload/v1778962621/Cisco_Python_1_Course_tqq5cl.jpg',
    issuer: 'CISCO',
    title: 'Python Essentials 1',
    date: 'Completed 2025',
    featured: false,
  },
  {
    img: 'https://res.cloudinary.com/dh2tiiokr/image/upload/v1778962770/IMG_20260517_010932_433_n6joud.jpg',
    issuer: 'NUTECH',
    title: 'ASP .NET Core',
    date: 'Completed 2024',
    featured: false,
  },
  {
    img: 'https://res.cloudinary.com/dh2tiiokr/image/upload/v1778962621/WhatsApp_Image_2025-08-29_at_11.38.01_PM_1_d2rigj.jpg',
    issuer: 'CISCO',
    title: 'Advance Python Essentials',
    date: 'Completed 2025',
    featured: false,
  },
  {
    img: 'https://res.cloudinary.com/dh2tiiokr/image/upload/v1778962621/WhatsApp_Image_2025-08-29_at_11.38.00_PM_curxhh.jpg',
    issuer: 'HP Life',
    title: 'AI for Beginners',
    date: 'Completed 2025',
    featured: false,
  },
];

/** The stored demo URLs are Drive /preview embeds; opening them uses the /view page. */
const watchUrl = (demo: string) => demo.replace('/preview', '/view');

export default function Portfolio() {
  return (
    <section id="portfolio" className="px-6 py-28 border-t border-border">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <Reveal className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-wider text-accent">
              Portfolio
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-text-h tracking-tight">
              Projects &amp; certifications
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-sm text-text-dim max-w-sm">
              Shipped work with recorded walkthroughs and source code, alongside the
              certifications behind it.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface hover:border-accent/40 transition-colors"
            >
              <a
                href={p.demo ? watchUrl(p.demo) : p.code}
                target="_blank"
                rel="noreferrer"
                className="relative block aspect-video overflow-hidden bg-bg-soft"
                aria-label={
                  p.demo ? `Watch the ${p.title} demo video` : `View the ${p.title} source code`
                }
              >
                <img
                  src={p.thumbnail}
                  alt={`${p.title} thumbnail`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-bg/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-bg shadow-lg shadow-accent/30 transition-transform duration-300 group-hover:scale-110">
                    {p.demo ? (
                      <Play size={22} className="ml-0.5 fill-current" />
                    ) : (
                      <Code2 size={22} />
                    )}
                  </span>
                </span>
              </a>

              <div className="flex flex-1 flex-col p-5">
                <span className="w-fit rounded-full border border-accent/25 bg-accent/10 px-2.5 py-1 text-[11px] font-medium text-accent">
                  {p.tag}
                </span>
                <h3 className="mt-3 text-base font-medium text-text-h">{p.title}</h3>
                <p className="mt-2 text-sm text-text-dim leading-relaxed">{p.desc}</p>
                <div
                  className={`mt-auto pt-4 grid gap-2 ${p.demo ? 'grid-cols-2' : 'grid-cols-1'}`}
                >
                  {p.demo && (
                    <a
                      href={watchUrl(p.demo)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-border bg-bg-soft px-3 py-2 text-xs font-medium text-text hover:border-accent/50 hover:text-accent transition-colors"
                    >
                      <Play size={13} />
                      Demo
                    </a>
                  )}
                  <a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-border bg-bg-soft px-3 py-2 text-xs font-medium text-text hover:border-accent/50 hover:text-accent transition-colors"
                  >
                    <Code2 size={13} />
                    Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <Reveal className="mt-20 flex items-center gap-4">
          <h3 className="text-xl sm:text-2xl font-semibold text-text-h tracking-tight whitespace-nowrap">
            Certificates &amp; achievements
          </h3>
          <span className="h-px flex-1 bg-gradient-to-r from-accent/40 to-transparent" />
        </Reveal>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((c, i) => (
            <motion.a
              key={c.title}
              href={c.img}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface hover:border-accent/40 transition-colors"
            >
              <div className="relative h-48 overflow-hidden bg-bg-soft">
                <img
                  src={c.img}
                  alt={`${c.title} certificate`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {c.featured && (
                  <span className="absolute right-3 top-3 rounded-full bg-accent px-2.5 py-1 text-[11px] font-semibold text-bg">
                    Featured
                  </span>
                )}
              </div>
              <div className="p-5">
                <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-accent">
                  <Award size={13} />
                  {c.issuer}
                </div>
                <h3 className="mt-2 text-base font-medium text-text-h">{c.title}</h3>
                <p className="mt-1 text-xs text-text-dim">{c.date}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
