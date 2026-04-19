'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Section from '@/components/Section';
import ProjectCard from '@/components/ProjectCard';
import ExperienceItem from '@/components/ExperienceItem';
import VolunteerSection from '@/components/VolunteerSection';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import ToolBadge from '@/components/ToolBadge';
import { FaGoogle, FaMicrosoft, FaChalkboardTeacher, FaSearch, FaFileAlt, FaUsers, FaBullhorn, FaLightbulb, FaTasks, FaGlobe } from 'react-icons/fa';
import { SiCanva, SiLinkedin } from 'react-icons/si';

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <Marquee items={['Recruitment Specialist', 'Human Capital Intern', 'Structured Process', 'Creative Thinker', 'Digital Nomad']} />

      <main className="container">
        
        {/* Summary */}
        <Section title="Summary" id="summary" superscript="01">
          <p style={{ fontSize: '1.5rem', color: '#ccc', maxWidth: '800px', lineHeight: '1.6' }}>
            Psychology Student with professional experience as recruitment staff. Possess hands-on experience within fast-paced organizations processing high volume candidates, optimizing workflows, and administering psychological assessments. Committed to rigorous discipline and continuous development in human capital.
          </p>
        </Section>

        {/* Projects */}
        <Section title="Featured Works" id="projects" superscript="03">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <ProjectCard
              title="Recruitment & Selection"
              description="Conducted job analysis, designed KPIs, and created interview BEI/LGD/SJT methodologies."
              link="https://bit.ly/Project_RecruitmentandSelection"
              index="1/3"
            />
            <ProjectCard
              title="Training & Dev"
              description="Performed TNA for UGM Tennis Organization using fishbone diagram analysis."
              link="https://bit.ly/Project_TrainingandDevelopment"
              index="2/3"
              marginTop="4rem"
            />
            <ProjectCard
              title="Compensations"
              description="Developed performance scores, salary structures, Hay System analysis, and exact HR policies."
              link="https://bit.ly/Project_CompensationandBenefit"
              index="3/3"
            />
          </div>
        </Section>

        {/* Experience & Education */}
        <Section title="Services" id="experience" superscript="06">
          <div className="bordered-list">
             <ExperienceItem role="Human Capital Intern" company="PT GS Battery" period="Feb 2025 – Jun 2025" index="01">
                <ul style={{ listStyleType: 'disc', paddingLeft: '1rem', color: '#999' }}>
                   <li>Screened 6000+ candidates for various positions (GA, Production, QC, etc.).</li>
                   <li>Conducted interviews with 150+ internship candidates.</li>
                   <li>Created and updated job descriptions for MCB and QA/QC Department.</li>
                   <li>Represented company as PIC at Integrated Career Day UGM.</li>
                </ul>
             </ExperienceItem>
             <ExperienceItem role="Human Capital Intern" company="PT HKI" period="Jan 2025 – Feb 2025" index="02">
                <ul style={{ listStyleType: 'disc', paddingLeft: '1rem', color: '#999' }}>
                   <li>Reviewed 300+ CVs, ensuring accurate data entry.</li>
                   <li>Created Vouchers and BEP for psychological test vendors.</li>
                   <li>Assisted in managing KPI scores in internal systems.</li>
                </ul>
             </ExperienceItem>
             <ExperienceItem role="Mentor Facilitator" company="BTPN Syariah" period="Sep 2024 – Oct 2024" index="03">
                <ul style={{ listStyleType: 'disc', paddingLeft: '1rem', color: '#999' }}>
                   <li>Conducted assessments for business potentials of two clients.</li>
                   <li>Delivered entrepreneurship training to clients.</li>
                </ul>
             </ExperienceItem>
             <ExperienceItem role="Trainer" company="OpteamA" period="Jan 2023 – Nov 2023" index="04">
                <ul style={{ listStyleType: 'disc', paddingLeft: '1rem', color: '#999' }}>
                    <li>Designed training materials for teamwork and culture.</li>
                    <li>Conducted specialized training sessions for student organizations.</li>
                </ul>
             </ExperienceItem>
             <ExperienceItem role="Program Facilitator" company="PPSMB Psikologi" period="May 2023 – Aug 2023" index="05">
                <ul style={{ listStyleType: 'disc', paddingLeft: '1rem', color: '#999' }}>
                    <li>Guided 10 new students, provided mentorship.</li>
                    <li>Facilitated presentations and FGDs.</li>
                </ul>
             </ExperienceItem>
             <ExperienceItem role="Undergraduate Student" company="Universitas Gadjah Mada" period="2022 – 2026" index="06">
                <ul style={{ listStyleType: 'disc', paddingLeft: '1rem', color: '#999' }}>
                    <li>Majoring in Psychology – GPA: 3.64/4.00</li>
                    <li>Relevant coursework: Recruitment, Training, Personality Assessment, Reward Systems, OD.</li>
                </ul>
             </ExperienceItem>
          </div>
        </Section>

        {/* Skills */}
        <Section title="Expertise" id="skills" superscript="15">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            <div>
              <h3 style={{ fontSize: '1.25rem', color: '#666', marginBottom: '1rem', fontWeight: 500, borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>Professional Skills</h3>
              <div className="badges-wrapper">
                <ToolBadge icon={<FaChalkboardTeacher />} name="Training Design" />
                <ToolBadge icon={<FaSearch />} name="Recruitment & Selection" />
                <ToolBadge icon={<FaFileAlt />} name="Psychological Testing" />
                <ToolBadge icon={<FaUsers />} name="Teamwork" />
                <ToolBadge icon={<FaBullhorn />} name="Public Speaking" />
                <ToolBadge icon={<FaLightbulb />} name="Problem Solving" />
                <ToolBadge icon={<FaTasks />} name="Analytical Thinking" />
              </div>
              <p style={{ marginTop: '1rem', color: '#888', fontSize: '0.95rem' }}>Psychological Tests: EPPS, SOV, 16PF, PAPI Kostick, RMIB, KUDER, CFIT, AJT</p>
            </div>
            
            <div>
              <h3 style={{ fontSize: '1.25rem', color: '#666', marginBottom: '1rem', fontWeight: 500, borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>Tools</h3>
              <div className="badges-wrapper">
                <ToolBadge icon={<FaGoogle />} name="Google Workspace" />
                <ToolBadge icon={<FaMicrosoft />} name="Microsoft Office" />
                <ToolBadge icon={<SiCanva />} name="Canva" />
                <ToolBadge icon={<SiLinkedin />} name="LinkedIn" />
                <ToolBadge icon={<FaGlobe />} name="Jobstreet" />
                <ToolBadge icon={<FaGlobe />} name="Glints" />
              </div>
            </div>
          </div>
        </Section>
      </main>

      <Marquee items={['Discipline', 'Focus', 'Precision', 'Analytical', 'End To End']} dark={true} />

      <VolunteerSection />

      <CallToAction />

      <Footer />
      <ChatWidget />
    </>
  );
}
