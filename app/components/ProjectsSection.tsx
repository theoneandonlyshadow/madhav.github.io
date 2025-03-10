import React from 'react';
import Image from 'next/image';
import { Nodejs, TypeScript, Python, Docker, EJS, Expressjs, Java, Warning } from './Services';
import { Download } from './Icons';

export const ProjectsSection = () => {
	return (
		<section id="work" className="py-12 sm:py-20 px-4 bg-[#161B22] scroll-mt-20">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Featured Projects</h2>
				<div className="space-y-8 sm:space-y-12">
					{[
						{
							title: 'NetProbe Mk.II',
							description: 'Internet Connection Monitor with Real-Time Updates and Lightweight Tools.',
							tools: {
								icon0: <Nodejs />,
								icon1: <Docker />,
							},
							techDetails: ['Notifies when Internet has gone offline/online [Real Time]', 'Clear your local DNS Cache', 'Downtime Tracker', 'Advanced Logging'],
							image: '/img/netprobe.png',
							github: 'https://github.com/theoneandonlyshadow/NetProbe/',
							download: 'https://github.com/theoneandonlyshadow/NetProbe/releases',
							tooltip: 'Download Available',
						},
						{
							title: 'Express Relay (XPR)',
							description: 'File Sharing Web Application with Powerful Security and Privacy',
							tools: {
								icon0: <Nodejs />,
								icon1: <Expressjs />,
								icon2: <EJS />,
								icon3: <TypeScript />,
							},
							github: 'https://github.com/theoneandonlyshadow/Echo-Relay-Dbox',
							techDetails: ['AES-256 Encryption', 'SHA-256 Hashing', 'WebSocket Chat Interface', 'Google Drive API Integration'],
							image: '/img/xpr.png',
							visit: '',
							tooltip: 'Under Development',
						},
						{
							title: "MaxTac's Vermilion AI",
							description: 'Desktop AI Assistant with Uncensored Results and Automation Intelligence',
							tools: {
								icon0: <Nodejs />,
								icon1: <Python />,
								icon2: <Java />,
							},
							github: 'https://github.com/theoneandonlyshadow/Scarlett-Vermillion',
							techDetails: ['Uncensored results with no bias', 'Integrated in Desktop App for Automation capabilities', 'N0 Data Tracking Policy', 'XS1 Algorithm: Detect Automation prompts apart from regular prompts'],
							image: '/img/verm.png',
							download: '',
							tooltip: 'Under Development',
						},
						{
							title: "NetDaemon",
							description: "Under Development",
							icon: <Warning />,
							tools: {
								icon0: <Nodejs />,
								icon1: <Docker />,
							},
							github: 'https://github.com/theoneandonlyshadow/NetDaemon',
							techDetails: ['Monitor & manage your DNS Activity', 'Extended DNS features', 'N0 Data Tracking Policy', 'Advanced Logging'],
							download: '',
							tooltip: 'Under Development',
						},
						{
							title: "RelayDriver",
							description: "Under Development",
							icon: <Warning />,
							tools: {
								icon0: <Nodejs />,
								icon1: <Docker />,
							},
							github: 'https://github.com/theoneandonlyshadow/RelayDriver',
							techDetails: ['Upload files directly to XPR', 'Extended XPR features', 'N0 Data Tracking Policy', 'Advanced Logging'],
							download: '',
							tooltip: 'Under Development',
						},
					].map((project) => (
						<div key={project.title} className="bg-[#21262D] rounded-lg overflow-hidden">
							<div className="grid grid-cols-1 lg:grid-cols-2">
								<div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
									<h3 className="text-xl sm:text-2xl font-bold">{project.title}</h3>
									<p className="text-sm sm:text-base text-gray-400 inlinin">{project.description} {project.icon}</p>
									{/* Performance Metrics */}
									<div className="space-y-3">
										<h4 className="text-base sm:text-lg font-semibold">Technologies Used</h4>
										<div className="grid grid-cols-3 gap-2 sm:gap-4 inlinin">
											{Object.entries(project.tools).map(([key, value]) => (
												<div key={key} className="text-center">
													<div className="text-2xl font-bold text-blue-400">{value}</div>
												</div>
											))}
										</div>
									</div>

									{/* Technical Implementation */}
									<div>
										<h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Technical Implementation</h4>
										<ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base">
											{project.techDetails.map((detail) => (
												<li key={detail} className="flex items-center gap-2">
													<span className="text-green-400">▹</span>
													<span className="text-gray-300">{detail}</span>
												</li>
											))}
										</ul>
									</div>

									<div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-8 sm:mt-12 px-4 sm:px-0">
										<a href={project.github} className="group relative inline-flex items-center justify-center">
											<div className="absolute -inset-0.5 from-blue-500 to-purple-500 rounded-full blur opacity-75 group-hover:opacity-100 transition"></div>
											<span className="relative px-6 sm:px-8 py-3 bg-[#161B22] rounded-full inline-flex items-center justify-center w-full sm:w-auto">
												GitHub
												<svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
												</svg>
											</span>
										</a>
										{project.download ? (
											<div className="relative group inlinin">
												<a
													href={project.download}
													className="px-6 sm:px-8 py-3 bg-[#21262D] hover:bg-[#2D333B] transition-colors border border-[#2D333B] hover:border-gray-600 text-center rounded-full"
												>
													<Download />
												</a>
												{project.tooltip && (
													<div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
														{project.tooltip}
													</div>
												)}
											</div>
										) : (
											<div className="relative group inlinin">
												<a
													href={project.visit}
													className="px-6 sm:px-8 py-3 bg-[#21262D] hover:bg-[#2D333B] transition-colors border border-[#2D333B] hover:border-gray-600 text-center rounded-full"
												>
													Visit
												</a>
												{project.tooltip && (
													<div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
														{project.tooltip}
													</div>
												)}
											</div>
										)}
									</div>
								</div>
								<div className="relative h-full min-h-[300px] lg:min-h-full">
									<Image src={project.image || '/code.png'} alt={project.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
									<div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#21262D] via-transparent to-transparent lg:via-[#21262D]/20 lg:to-[#21262D]/40"></div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};