import { HeroSection } from './components/HeroSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
// import { WebCapabilitiesSection } from './components/WebCapabilitiesSection';
import { ContactSection } from './components/ContactSection';
import Cursor from './components/Curzr';

export default function WebDeveloperPortfolio() {
	return (
		<main className="min-h-screen bg-[#0D1117] text-white">
			<link rel="icon" href="./madhav.ico" />
			<HeroSection />
			<SkillsSection />
			<ProjectsSection />
			<ContactSection />
			<Cursor	/>
		</main>
	);
}
