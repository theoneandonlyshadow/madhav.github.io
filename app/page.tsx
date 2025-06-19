"use client";

import { HeroSection } from './components/HeroSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import ReggieServiceWorker from './components/WebCapabilitiesSection';
import { ContactSection } from './components/ContactSection';
import Cursor from './components/Curzr';

import { useEffect, useState } from 'react';

export default function WebDeveloperPortfolio() {
	const [isOffline, setIsOffline] = useState(false);
  
	useEffect(() => {
	  // Register service worker
	  if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
		navigator.serviceWorker.register('../public/sw.js')
		  .then(reg => console.log('SW registered:', reg))
		  .catch(err => console.log('SW registration failed:', err));
	  }
  
	  // Handle offline/online detection
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
  
	if (isOffline) {
	  return (
		<div className="min-h-screen bg-[#0D1117] text-white flex items-center justify-center">
		  <div className="text-center">
			<h1 className="text-4xl font-bold mb-4">You are Offline</h1>
			<p>Some content may not be available. Please check your connection.</p>
			<button 
			  onClick={() => window.location.reload()}
			  className="mt-4 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
			>
			  Retry Connection
			</button>
		  </div>
		</div>
	  );
	}
  
	return (
	  <main className="min-h-screen bg-[#0D1117] text-white">
		<link rel="icon" href="/madhav.ico" />
		<HeroSection />
		<SkillsSection />
		<ProjectsSection />
		<ContactSection />
		<Cursor />
		<ReggieServiceWorker />
	  </main>
	);
  }