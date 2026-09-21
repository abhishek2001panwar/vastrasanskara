// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";

// const looks = [
//   {
//     number: "01",
//     name: "The Heirloom",
//     category: "Raw Silk / Zari",
//     slug: "the-heirloom",
//     image:
//       "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1800&q=85",
//     className: "md:col-span-7 md:mt-0",
//   },
//   {
//     number: "02",
//     name: "The Noor",
//     category: "Handwoven Silk",
//     slug: "the-noor",
//     image:
//       "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1800&q=85",
//     className: "md:col-span-4 md:col-start-9 md:mt-40",
//   },
//   {
//     number: "03",
//     name: "The Gul",
//     category: "Embroidered Silk",
//     slug: "the-gul",
//     image:
//       "https://images.unsplash.com/photo-1610189022502-2f9e8e4b7b58?auto=format&fit=crop&w=1800&q=85",
//     className: "md:col-span-5 md:mt-32",
//   },
//   {
//     number: "04",
//     name: "The Meher",
//     category: "Handcrafted Zari",
//     slug: "the-meher",
//     image:
//       "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=1800&q=85",
//     className: "md:col-span-6 md:col-start-7 md:mt-0",
//   },
//   {
//     number: "05",
//     name: "The Riwaayat",
//     category: "Heritage Weave",
//     slug: "the-riwaayat",
//     image:
//       "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=1800&q=85",
//     className: "md:col-span-7 md:mt-40",
//   },
// ];

// const fadeUp = {
//   hidden: {
//     opacity: 0,
//     y: 40,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.8,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };

// export default function CollectionPage() {
//   return (
//     <main className="min-h-screen bg-[#f7f5f0] text-[#171614]">
//       {/* -------------------------------------------------
//           INTRO
//       -------------------------------------------------- */}

//       <section className="px-6 pb-24 pt-32 md:px-12 md:pb-36 md:pt-48">
//         <div className="mx-auto max-w-[1600px]">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-100px" }}
//             variants={fadeUp}
//             className="max-w-4xl"
//           >
//             <p className="mb-8 text-[10px] uppercase tracking-[0.35em] text-black/50 md:text-xs">
//               Vastra Sanskar / The Collection
//             </p>

//             <h1 className="font-serif text-[clamp(4rem,10vw,10rem)] font-light leading-[0.82] tracking-[-0.055em]">
//               The
//               <br />
//               <span className="italic">Looks</span>
//             </h1>

//             <div className="mt-12 flex max-w-xl flex-col gap-6 md:ml-[25%] md:mt-20">
//               <p className="font-serif text-xl leading-relaxed text-black/70 md:text-2xl">
//                 Five expressions of Indian craftsmanship, shaped through
//                 fabric, form and detail.
//               </p>

//               <p className="text-xs leading-6 tracking-wide text-black/45 md:text-sm">
//                 Each look is an exploration of tradition interpreted through a
//                 contemporary lens — created with an attention to material,
//                 silhouette and the quiet details that define the garment.
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* -------------------------------------------------
//           COLLECTION
//       -------------------------------------------------- */}

//       <section className="px-6 pb-32 md:px-12 md:pb-48">
//         <div className="mx-auto max-w-[1600px]">
//           <div className="mb-16 flex items-end justify-between border-b border-black/15 pb-5">
//             <p className="text-[10px] uppercase tracking-[0.3em] text-black/50 md:text-xs">
//               Collection
//             </p>

//             <p className="text-[10px] uppercase tracking-[0.25em] text-black/40 md:text-xs">
//               05 Looks
//             </p>
//           </div>

//           {/* Editorial Grid */}

//           <div className="grid grid-cols-1 gap-y-24 md:grid-cols-12 md:gap-x-8 md:gap-y-40">
//             {looks.map((look, index) => (
//               <motion.article
//                 key={look.slug}
//                 variants={fadeUp}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{
//                   once: true,
//                   margin: "-80px",
//                 }}
//                 transition={{
//                   delay: index * 0.05,
//                 }}
//                 className={`group ${look.className}`}
//               >
//                 <Link href={`/look/${look.slug}`} className="block">
//                   {/* Image */}

//                   <div className="relative aspect-[3/4] overflow-hidden bg-[#e8e4dc]">
//                     <motion.div
//                       className="absolute inset-0"
//                       whileHover={{ scale: 1.035 }}
//                       transition={{
//                         duration: 0.9,
//                         ease: [0.22, 1, 0.36, 1],
//                       }}
//                     >
//                       <Image
//                         src={look.image}
//                         alt={look.name}
//                         fill
//                         sizes="(max-width: 768px) 100vw, 60vw"
//                         className="object-cover"
//                         priority={index < 2}
//                       />
//                     </motion.div>

//                     {/* Image overlay */}

//                     <div className="absolute inset-0 bg-black/0 transition-colors duration-700 group-hover:bg-black/10" />

//                     {/* Number */}

//                     <div className="absolute left-5 top-5">
//                       <span className="text-[10px] tracking-[0.25em] text-white mix-blend-difference md:text-xs">
//                         {look.number}
//                       </span>
//                     </div>

//                     {/* Explore */}

//                     <div className="absolute bottom-5 right-5 flex h-12 w-12 translate-y-3 items-center justify-center rounded-full border border-white/60 bg-white/10 opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
//                       <span className="text-white">↗</span>
//                     </div>
//                   </div>

//                   {/* Information */}

//                   <div className="mt-5 flex items-start justify-between gap-6">
//                     <div>
//                       <h2 className="font-serif text-2xl font-light tracking-tight md:text-3xl">
//                         {look.name}
//                       </h2>

//                       <p className="mt-2 text-[9px] uppercase tracking-[0.25em] text-black/45 md:text-[10px]">
//                         {look.category}
//                       </p>
//                     </div>

//                     <span className="mt-2 text-[10px] uppercase tracking-[0.2em] text-black/40 transition-colors duration-300 group-hover:text-black">
//                       Explore
//                     </span>
//                   </div>
//                 </Link>
//               </motion.article>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* -------------------------------------------------
//           CRAFT STATEMENT
//       -------------------------------------------------- */}

//       <section className="border-y border-black/10 px-6 py-28 md:px-12 md:py-44">
//         <div className="mx-auto max-w-[1600px]">
//           <div className="grid gap-16 md:grid-cols-12 md:items-center">
//             <div className="md:col-span-3">
//               <p className="text-[10px] uppercase tracking-[0.3em] text-black/45">
//                 The Philosophy
//               </p>
//             </div>

//             <div className="md:col-span-8 md:col-start-5">
//               <motion.p
//                 initial={{
//                   opacity: 0,
//                   y: 30,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 1 }}
//                 className="font-serif text-4xl font-light leading-[1.05] tracking-[-0.03em] md:text-6xl lg:text-7xl"
//               >
//                 “Craft is not simply something we preserve.
//                 <span className="italic text-black/55">
//                   {" "}
//                   It is something we continue.
//                 </span>
//                 ”
//               </motion.p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* -------------------------------------------------
//           FOOTER CTA
//       -------------------------------------------------- */}

//       <section className="px-6 py-32 md:px-12 md:py-48">
//         <div className="mx-auto max-w-[1600px] text-center">
//           <p className="mb-8 text-[10px] uppercase tracking-[0.3em] text-black/45">
//             Discover Vastra Sanskar
//           </p>

//           <h2 className="font-serif text-5xl font-light tracking-[-0.04em] md:text-8xl">
//             Woven with
//             <br />
//             <span className="italic">meaning.</span>
//           </h2>

//           <Link
//             href="/about"
//             className="group mx-auto mt-12 inline-flex items-center gap-5 border-b border-black/30 pb-3 text-[10px] uppercase tracking-[0.25em]"
//           >
//             <span>Our Story</span>

//             <span className="transition-transform duration-500 group-hover:translate-x-2">
//               →
//             </span>
//           </Link>
//         </div>
//       </section>
//     </main>
//   );
// }