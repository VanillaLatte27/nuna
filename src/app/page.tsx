'use client';

import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import ProjectCard from '@/components/ProjectCard';
import ToolBadge from '@/components/ToolBadge';
import ExperienceItem from '@/components/ExperienceItem';
import VolunteerCard from '@/components/VolunteerCard';
import ChatWidget from '@/components/ChatWidget';
import CallToAction from '@/components/CallToAction';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { FaGoogle, FaMicrosoft, FaTasks, FaSearch, FaChalkboardTeacher, FaUsers, FaLightbulb, FaBullhorn, FaHandshake, FaFileAlt, FaGlobe } from 'react-icons/fa';
import { SiCanva, SiLinkedin } from 'react-icons/si';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Morphing background blobs
  const blob1Y = useTransform(smoothProgress, [0, 1], [0, 800]);
  const blob1Scale = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.8, 1.2]);
  const blob1Rotate = useTransform(smoothProgress, [0, 1], [0, 360]);

  const blob2Y = useTransform(smoothProgress, [0, 1], [0, -600]);
  const blob2Scale = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [1, 1.4, 2, 1.5]);
  const blob2Rotate = useTransform(smoothProgress, [0, 1], [0, -240]);

  return (
    <>
      {/* Morphing Background Components */}
      <motion.div
        className="morph-blob blob-1"
        style={{ y: blob1Y, scale: blob1Scale, rotate: blob1Rotate }}
      />
      <motion.div
        className="morph-blob blob-2"
        style={{ y: blob2Y, scale: blob2Scale, rotate: blob2Rotate }}
      />

      <div className="bg-texture" />

      <Navbar />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Hero />

        <main className="container">
          <Section title="Summary" id="summary">
            <p>
              Psychology Student with professional experience in the field of recruitment staff. Possess hands-on experience within fast-paced organizations in processing recruitment staff end to end, processing high volume candidates, optimizing recruitment workflows, and administering psychological assessments. Currently looking to continue the development skills in the field recruitment staff and people development.
            </p>
          </Section>

          <Section title="Education" id="education">
            <div className="education-layout">
              <motion.div
                className="edu-logo"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Image
                  src="/ugmLogo.png"
                  alt="UGM Logo"
                  width={80}
                  height={80}
                  style={{ objectFit: 'contain' }}
                />
              </motion.div>
              <div className="edu-content">
                <h3 className="edu-title">Universitas Gadjah Mada</h3>
                <p className="edu-period">2022 – 2026</p>
                <p className="edu-major"><strong>Majoring in Psychology</strong> – GPA: 3.64/4.00</p>
                <p className="edu-details">
                  Relevant coursework: Recruitment and Selection, Training and Development, Non-Projective Personality Assessment, Reward Systems, Organizational Development, and Industrial Relation.
                </p>
              </div>
            </div>
          </Section>

          <Section title="Experience" id="experience">
            <div className="experience-grid">
              <ExperienceItem
                role="Human Capital Intern"
                company="PT GS Battery"
                period="Feb 2025 – Jun 2025"
                image="/GS_1.jpg"
              >
                <ul>
                  <li>Screened <strong>6000+ candidates</strong> for various positions (GA, Production, QC, etc.).</li>
                  <li>Conducted interviews with <strong>150+ internship candidates</strong>.</li>
                  <li>Created and updated job descriptions for MCB and QA/QC Department.</li>
                  <li>Represented company as PIC at Integrated Career Day UGM.</li>
                </ul>
              </ExperienceItem>

              <ExperienceItem
                role="Human Capital Intern"
                company="PT HKI"
                period="Jan 2025 – Feb 2025"
              >
                <ul>
                  <li>Reviewed <strong>300+ CVs</strong>, ensuring accurate data entry.</li>
                  <li>Created Vouchers and BEP for psychological test vendors.</li>
                  <li>Assisted in managing KPI scores in internal systems.</li>
                </ul>
              </ExperienceItem>

              <ExperienceItem
                role="Mentor Facilitator"
                company="BTPN Syariah"
                period="Sep 2024 – Oct 2024"
              >
                <ul>
                  <li>Conducted assessments for business potentials of two clients.</li>
                  <li>Delivered entrepreneurship training to clients.</li>
                </ul>
              </ExperienceItem>

              <ExperienceItem
                role="Trainer"
                company="OpteamA"
                period="Jan 2023 – Nov 2023"
              >
                <ul>
                  <li>Designed training materials for teamwork and culture.</li>
                  <li>Conducted specialized training sessions for student organizations.</li>
                </ul>
              </ExperienceItem>

              <ExperienceItem
                role="Program Facilitator"
                company="PPSMB Psikologi"
                period="May 2023 – Aug 2023"
              >
                <ul>
                  <li>Guided 10 new students, provided mentorship.</li>
                  <li>Facilitated presentations and FGDs.</li>
                </ul>
              </ExperienceItem>
            </div>
          </Section>

          <Section title="Projects" id="projects">
            <div className="projects-grid">
              <ProjectCard
                title="Recruitment and Selection"
                description="Conducted job analysis (63 members), designed KPI/competencies, created interview questions/BEI/LGD/SJT."
                link="https://bit.ly/Project_RecruitmentandSelection"
              />
              <ProjectCard
                title="Training and Development"
                description="Performed TNA for UGM Tennis Organization, analyzing data via fishbone diagram."
                link="https://bit.ly/Project_TrainingandDevelopment"
              />
              <ProjectCard
                title="Compensation and Benefit"
                description="Developed performance scores, salary structures, Hay System job analysis, HR policies."
                link="https://bit.ly/Project_CompensationandBenefit"
              />
            </div>
          </Section>

          <Section title="Skills" id="skills">
            <div className="skills-container">
              <div className="skill-group">
                <h3>Tools</h3>
                <div className="badges-wrapper">
                  <ToolBadge icon={<FaGoogle />} name="Google Workspace" />
                  <ToolBadge icon={<FaMicrosoft />} name="Microsoft Office" />
                  <ToolBadge icon={<SiCanva />} name="Canva" />
                  <ToolBadge icon={<SiLinkedin />} name="LinkedIn" />
                  <ToolBadge icon={<FaGlobe />} name="Jobstreet" />
                  <ToolBadge icon={<FaGlobe />} name="Glints" />
                </div>
              </div>

              <div className="skill-group">
                <h3>Professional Skills</h3>
                <div className="badges-wrapper">
                  <ToolBadge icon={<FaChalkboardTeacher />} name="Training Design" />
                  <ToolBadge icon={<FaSearch />} name="Recruitment & Selection" />
                  <ToolBadge icon={<FaFileAlt />} name="Psychological Testing" />
                  <ToolBadge icon={<FaUsers />} name="Teamwork" />
                  <ToolBadge icon={<FaBullhorn />} name="Public Speaking" />
                  <ToolBadge icon={<FaLightbulb />} name="Problem Solving" />
                  <ToolBadge icon={<FaTasks />} name="Analytical Thinking" />
                </div>
                <p className="test-list">
                  <em>Psychological Tests:</em> EPPS, SOV, 16PF, PAPI Kostick, RMIB, KUDER, CFIT, AJT
                </p>
              </div>

              <div className="skill-group">
                <h3>Languages</h3>
                <p><strong>Bahasa Indonesia</strong> (Native), <strong>English</strong> (Professional Working)</p>
              </div>
            </div>
          </Section>

          <Section title="Volunteer" id="volunteer">
            <div className="volunteer-grid">
              <VolunteerCard role="Mentor (Guide)" organization="School Goes to Psychology 2022 (UGM)" icon={<FaChalkboardTeacher />} />
              <VolunteerCard role="Public Relation" organization="Dopamination 2023 (Fakultas Psikologi UGM)" icon={<FaBullhorn />} />
              <VolunteerCard role="Public Relation" organization="OpteamA Training Center" icon={<FaBullhorn />} />
              <VolunteerCard role="Facilitator" organization="Kids Event by Awan Kecil Benteng Vredeburg 2025" icon={<FaUsers />} />
              <VolunteerCard role="Public Relation" organization="KKN Patuk Prana 2025" icon={<FaHandshake />} />
              <VolunteerCard role="Registration Staff" organization="Adira Finance gathering event by Stargate" icon={<FaTasks />} />
            </div>
          </Section>

          <CallToAction />
        </main>
      </motion.div>
      <Footer />
      <ChatWidget />

      <style jsx global>{`
        .morph-blob {
          position: fixed;
          border-radius: 50%;
          filter: blur(80px);
          z-index: -1;
          pointer-events: none;
          opacity: 0.25;
        }

        .blob-1 {
          top: -10%;
          left: -10%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, #a0e7e5 0%, transparent 70%);
        }

        .blob-2 {
          bottom: 10%;
          right: -5%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, #fbe7c6 0%, transparent 70%);
        }

        .bg-texture {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: url('/background.png') repeat;
          opacity: 0.05;
          z-index: -2;
          pointer-events: none;
        }

        .container {
          position: relative;
          z-index: 1;
        }

        .education-layout {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .edu-logo {
          flex-shrink: 0;
          background: rgba(255,255,255,0.05);
          padding: 12px;
          border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }

        .edu-title {
          margin: 0 0 0.5rem 0;
          font-size: 1.25rem;
          color: #a0e7e5;
        }

        .edu-period {
          margin: 0 0 0.5rem 0;
          color: #8899a6;
          font-size: 0.95rem;
        }

        .edu-major {
          margin: 0.5rem 0;
          font-size: 1.05rem;
        }

        .edu-details {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #ddd;
        }

        .experience-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
          margin-top: 1rem;
        }

        .skills-container {
            display: flex;
            flex-direction: column;
            gap: 2rem;
        }

        .skill-group h3 {
            font-size: 1.1rem;
            color: #a0e7e5;
            margin-bottom: 0.75rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .badges-wrapper {
            display: flex;
            flex-wrap: wrap;
            gap: 0.25rem;
        }

        .test-list {
            margin-top: 0.5rem;
            font-size: 0.9rem;
            color: #ccc;
            padding-left: 0.5rem;
            border-left: 2px solid rgba(255,255,255,0.1);
        }

        .volunteer-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 1rem;
        }
      `}</style>
    </>
  );
}
