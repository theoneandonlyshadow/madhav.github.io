"use client";

import { HeroSection } from './components/HeroSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
// import { WebCapabilitiesSection } from './components/WebCapabilitiesSection';
import { ContactSection } from './components/ContactSection';
import Cursor from './components/Curzr';

import { useEffect, useState } from 'react';

export default function WebDeveloperPortfolio() {
	const [isOffline, setIsOffline] = useState(false);
  
	useEffect(() => {
	  // Register service worker
	  if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
		navigator.serviceWorker.register('/sw.js');
	  }
  
	  // Handle offline/online status
	  const handleStatusChange = () => {
		setIsOffline(!navigator.onLine);
	  };
  
	  window.addEventListener('online', handleStatusChange);
	  window.addEventListener('offline', handleStatusChange);
	  handleStatusChange(); // Set initial state
  
	  return () => {
		window.removeEventListener('online', handleStatusChange);
		window.removeEventListener('offline', handleStatusChange);
	  };
	}, []);
  
	return (
	  <main className="min-h-screen bg-[#0D1117] text-white">
		{isOffline && (
		  <div className="fixed top-0 left-0 right-0 bg-yellow-500 text-black p-2 text-center z-50">
			Offline Mode - Some content may be limited
		  </div>
		)}
		{
			<main className="min-h-screen bg-[#0D1117] text-white">
			<link rel="icon" href="./madhav.ico" />
			<HeroSection />
			<SkillsSection />
			<ProjectsSection />
			<ContactSection />
			<Cursor	/>
		</main>
		}
	  </main>
	);
  }