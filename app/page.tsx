import Link from "next/link";
import React from 'react';
import Particles from "./components/particles";
import Script from 'next/script'

const navigation = [
	{ name: "Projects", href: "/projects" },
	{ name: "Contact", href: "/contact" },
];

export default function Home() {

	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
			<Script src="https://www.googletagmanager.com/gtag/js?id=G-JH19V2SF4M" />
			<Script id="google-analytics">
				{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-JH19V2SF4M');
        `}
			</Script>
			<nav className="my-16 animate-fade-in">
				<ul className="flex items-center justify-center gap-4">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-lg duration-500 text-zinc-500 hover:text-zinc-300"
						>
							{item.name}
						</Link>
					))}
				</ul>
			</nav>
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<Particles
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={100}
			/>
			<div className="w-max">
				<h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-4xl text-transparent
               bg-white font-display sm:text-6xl md:text-8xl bg-clip-text">
					{/*Hi! I'm Jerry Zhang.*/}
					Happy Birthday!
				</h1>
			</div>
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<div className="my-16 text-center animate-fade-in">
				<h2 className="text-lg text-zinc-500 ">
					I'm a computer science student at the {" "}
					<Link
						target="_blank"
						href=""
						className="underline duration-500 hover:text-zinc-300"
					>
						University of Waterloo
					</Link>

					<br />
					and I like to work on{" "}
					<Link
						target="_blank"
						href=""
						className="underline duration-500 hover:text-zinc-300"
					>
						my backend projects
					</Link>{" "}
					at night.
				</h2>
			</div>
		</div>
	);
}
