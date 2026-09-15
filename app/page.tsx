import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
   return (
      <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
         <main className="flex flex-1 w-full gap-4 max-w-5xl flex-col items-center justify-between py-16 px-16 bg-white dark:bg-black sm:items-start">
            <h2 className="text-4xl font-extrabold">Syed Faraz Ali</h2>
            <span className="text-2xl font-bold text-zinc-600 dark:text-zinc-400">
               Frontend Tech Lead | Senior React.js/Next.js Engineer |
               Full-Stack Developer
            </span>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
               I am a seasoned Frontend Tech Lead and Senior Engineer with
               nearly a decade of experience architecting and delivering
               scalable, high‑performance web applications. My expertise lies in
               React.js, Next.js, and TypeScript, complemented by full‑stack
               proficiency in Node.js and MongoDB.
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
               Over the years, I’ve led teams, owned complex module
               architecture, and delivered measurable results — including a 25%
               boost in feature delivery speed and a 30% reduction in render
               time through performance optimization and modern frontend
               practices.
            </p>
            <p className="text-lg font-bold text-zinc-600 dark:text-zinc-400">
               I specialize in:
            </p>
            <ul className="flex flex-col gap-2 text-lg list-disc pl-5 text-zinc-600 dark:text-zinc-400">
               <li>
                  Frontend architecture & scalability — building reusable
                  component libraries and performant UI systems
               </li>
               <li>
                  AI‑assisted development — leveraging GitHub Copilot for faster
                  code generation, refactoring, and PR reviews with rigorous
                  human validation
               </li>
               <li>
                  Team leadership & mentorship — guiding engineers, ensuring
                  code quality, and driving delivery excellence.
               </li>
               <li>
                  Testing & reliability — implementing unit tests, API mocks,
                  and accessibility standards for robust user experiences.
               </li>
            </ul>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
               My focus is always on reliability, accessibility, and
               user‑centric design, ensuring that technology empowers businesses
               and delights users.
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
               🚀 Currently, I’m expanding my expertise into multi‑region
               e‑commerce and wellness platforms, combining technical leadership
               with product vision.
            </p>
            <section className="flex flex-col gap-2 text-zinc-600 dark:text-zinc-400">
               <h4 className="text-xl font-semibold">📌 Connect with me:</h4>
               <p className="text-lg">
                  LinkedIn - {''}
                  <Link
                     href="https://www.linkedin.com/in/syed-faraz-ali-130160143/"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-blue-600 hover:underline dark:text-blue-400"
                  >
                     (Profile)
                  </Link>
               </p>
               <p className="text-lg">
                  Email - {''}
                  <Link
                     href="mailto:faraz2891@gmail.com"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-blue-600 hover:underline dark:text-blue-400"
                  >
                     (Contact Me)
                  </Link>
               </p>
            </section>
         </main>
      </div>
   );
}
