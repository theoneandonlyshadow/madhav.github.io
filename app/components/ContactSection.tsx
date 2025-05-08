import React from 'react';
import { NextJS, Cloudflare } from './Icons';

export const ContactSection = () => {
	return (
		<section id="contact" className="py-12 sm:py-20 px-4 bg-[#161B22] scroll-mt-20">
			<div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
				<h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Let&apos;s Build Something Amazing</h2>
				<p className="text-sm sm:text-base text-gray-400 mb-6">Schedule a call or an Interview. I&apos;m open to work.</p>

				{/* Location */}
				<div className="flex items-center justify-center gap-2 text-gray-400 mb-8">
					
					<svg className="w-5 h-5" fill="none" stroke="#00ffff" viewBox="0 0 24 24">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
						/>
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
					</svg>
					<span>Kochi, KL</span>
					<span></span>
					<span>&</span>
					<span></span>
					<svg className="w-5 h-5" fill="none" stroke="red" viewBox="0 0 24 24">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
						/>
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
					</svg>
					<span>Bangalore, KA</span>
				</div>
				

				{/* Contact Buttons */}
				<div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
					<a
						href="mailto:madhavnair700@gmail.com"
						className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-medium hover:opacity-90 transition-opacity"
					>
						<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
							<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
							<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
						</svg>
						Mail Me
					</a>
					<a
						href="/assets/madhav_resume.pdf"
						target="_blank"
						className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#21262D] border border-gray-800 rounded-lg font-medium hover:bg-gray-900 transition-colors"
					>
						<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
							<path
								fillRule="evenodd"
								d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
								clipRule="evenodd"
							/>
							<path fillRule="evenodd" d="M8 11a1 1 0 100 2h4a1 1 0 100-2H8zm0-4a1 1 0 100 2h4a1 1 0 100-2H8z" clipRule="evenodd" />
						</svg>
						View Resume
					</a>
				</div>
				<hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
				{/* Social Links */}
				<div className="flex justify-center gap-6 inlininFoo text-gray-400">
					Built with<NextJS />  Deployed on<Cloudflare />
				</div>
				<div className="flex justify-center gap-6 inlininFoo text-gray-400">
					by Madhav
				</div>
			</div>
		</section>
	);
};
