const SITE_DATA = {
  personal: {
    name: 'Manas Muddam',
    title: 'Computation & Media',
    statement: 'I build visual experiences where technology meets storytelling.',
    description: 'Computation & Media student working across design, filmmaking, 3D, VFX, interactive media and creative technology.',
    location: 'Hyderabad, India',
    university: 'Mahindra University',
    program: 'Computation & Media',
    email: 'manasmuddam03@gmail.com'
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/manas-m-2102782b1'
  },
  resume: {
    path: 'assets/resume/Manas_Resume new.pdf'
  },
  projects: [
    // Chapter 01: FILMMAKING
    {
      id: 'baigan-ka-dil',
      number: '01',
      title: 'Baigan Ka Dil',
      chapter: '01 — Filmmaking',
      category: 'SHORT FILM / CO-DIRECTION / VFX / MOTION DESIGN / PROMOTIONAL DESIGN',
      year: '2025',
      role: 'Co-Director · VFX Artist · Motion Designer · Promotional Graphic Designer',
      description: 'Baigan Ka Dil is a narrative short film produced under the 7 Screens banner at Mahindra University. I worked across co-direction, VFX, motion design, and promotional graphic design, contributing to the film’s visual language across production, post-production, and promotional rollout.',
      tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Premiere Pro'],
      heroProject: false,
      slug: 'baigan-ka-dil',
      url: 'work/baigan-ka-dil/',
      images: {
        thumbnail: 'assets/images/projects/baigan-ka-dil/yellow-poster.png',
        hero: 'assets/images/projects/baigan-ka-dil/yellow-poster.png',
        gallery: [
          'assets/images/projects/baigan-ka-dil/yellow-poster.png',
          'assets/images/projects/baigan-ka-dil/coming-soon-poster.jpg',
          'assets/images/projects/baigan-ka-dil/baigan-ka-dil-logo.png',
          'assets/images/projects/baigan-ka-dil/courtroom-hungama.png'
        ]
      }
    },
    {
      id: 'drama-kaiku-mama',
      number: '02',
      title: 'Drama Kaiku Mama',
      chapter: '01 — Filmmaking',
      category: 'Short Film / Creative Direction',
      year: '2025',
      role: 'Creative Direction · Graphic Design',
      description: 'Short film project exploring stylized narrative direction, neon visual tone, and creative production design.',
      tools: ['Premiere Pro', 'Photoshop', 'Illustrator'],
      heroProject: false,
      slug: 'drama-kaiku-mama',
      url: 'projects/drama-kaiku-mama.html',
      images: {
        thumbnail: 'assets/images/projects/drama-kaiku-mama/01-dkm-poster.png',
        hero: 'assets/images/projects/drama-kaiku-mama/01-dkm-neon.jpg',
        gallery: [
          'assets/images/projects/drama-kaiku-mama/01-dkm-poster.png',
          'assets/images/projects/drama-kaiku-mama/01-dkm-neon.jpg'
        ]
      }
    },

    // Chapter 02: ANIMATION, 3D & GAME DESIGN
    {
      id: 'dholavira',
      number: '03',
      title: 'Dholavira 3D',
      chapter: '02 — Animation, 3D & Game Design',
      category: '3D / Environment / Interactive Media',
      year: '2026',
      role: '3D Artist · Environment Design',
      description: 'A 3D reconstruction of the ancient archaeological site of Dholavira, exploring environment design, modular assets, lighting, atmosphere and cinematic presentation using Unreal Engine and Blender.',
      tools: ['Unreal Engine', 'Blender'],
      heroProject: true,
      slug: 'dholavira',
      url: 'work/dholavira/',
      video: 'assets/videos/projects/dholavira-hero.mp4',
      images: {
        thumbnail: 'assets/images/projects/dholavira/01-aerial-overview.png',
        hero: 'assets/images/projects/dholavira/05-aerial-golden-hour.png',
        gallery: [
          'assets/images/projects/dholavira/01-aerial-overview.png',
          'assets/images/projects/dholavira/02-aerial-lower-city.png',
          'assets/images/projects/dholavira/03-aerial-water-systems.png',
          'assets/images/projects/dholavira/04-ground-level.png',
          'assets/images/projects/dholavira/05-aerial-golden-hour.png'
        ]
      }
    },
    {
      id: 'fallen-grace',
      number: '04',
      title: 'Fallen Grace',
      chapter: '02 — Animation, 3D & Game Design',
      category: 'Animation / 3D / Film',
      year: '2024',
      role: '3D Modeling · Animation · Editing · Sound Design · Production',
      description: 'A collaborative 3D animated short film created with a friend as coursework at Mahindra University using Unreal Engine, following protagonist Yamen in an unyielding quest for vengeance against the Three Heads gods.',
      tools: ['Unreal Engine', 'Premiere Pro', 'After Effects', 'Blender'],
      heroProject: false,
      slug: 'fallen-grace',
      url: 'projects/fallen-grace.html',
      images: {
        thumbnail: 'assets/images/projects/fallen-grace/01-fallen-grace.png',
        hero: 'assets/images/projects/fallen-grace/01-fallen-grace.png',
        gallery: [
          'assets/images/projects/fallen-grace/02-torii-portal-bridge.jpg',
          'assets/images/projects/fallen-grace/03-yamen-character.jpg',
          'assets/images/projects/fallen-grace/04-three-heads-deities.jpg',
          'assets/images/projects/fallen-grace/05-crimson-void.jpg',
          'assets/images/projects/fallen-grace/06-three-heads-triptych.jpg'
        ]
      }
    },
    {
      id: '3d-simulation-studies',
      number: '05',
      title: '3D Simulation Studies',
      chapter: '02 — Animation, 3D & Game Design',
      category: '3D / Simulation / Environments',
      year: '2025',
      role: '3D Simulation & Technical Artist',
      description: 'Technical explorations in dynamic landscape simulation, atmospheric lighting, fluid/fire behavior, and environment rendering in Blender and Unreal Engine.',
      tools: ['Blender', 'Unreal Engine'],
      heroProject: false,
      wideProject: true,
      slug: '3d-simulation-studies',
      url: 'projects/3d-simulation-studies.html',
      images: {
        thumbnail: 'assets/images/projects/3d-simulation-studies/01-dune-render.png',
        hero: 'assets/images/projects/3d-simulation-studies/01-dune-render.png',
        gallery: [
          'assets/images/projects/3d-simulation-studies/01-dune-render.png',
          'assets/images/projects/3d-simulation-studies/02-fire-simulation.png',
          'assets/images/projects/3d-simulation-studies/03-boat-render.png'
        ]
      }
    },
    {
      id: 'hoppy-antler',
      number: '06',
      title: 'Hoppy Antler',
      chapter: '02 — Animation, 3D & Game Design',
      category: 'GAME DESIGN / 3D / INTERACTIVE',
      year: '2024',
      role: 'Game Designer · 3D Generalist',
      description: 'A 3D road-crossing survival game featuring a courageous young deer navigating busy highways, speeding vehicles, and wilderness obstacles.',
      tools: ['Unity', 'Blender', 'Adobe Photoshop', 'Adobe Illustrator'],
      heroProject: false,
      slug: 'hoppy-antler',
      url: 'projects/hoppy-antler.html',
      images: {
        thumbnail: 'assets/images/projects/hoppy-antler/01-hoppy-banner.png',
        hero: 'assets/images/projects/hoppy-antler/01-hoppy-banner.png',
        gallery: [
          'assets/images/projects/hoppy-antler/01-hoppy-banner.png',
          'assets/images/projects/hoppy-antler/gameplay-action.jpg',
          'assets/images/projects/hoppy-antler/HoppyAntlerComic.png',
          'assets/images/projects/hoppy-antler/Logo.png'
        ]
      }
    },

    // Chapter 03: VFX & MOTION
    {
      id: 'vfx-compositing',
      number: '07',
      title: 'VFX Compositing Reel',
      chapter: '03 — VFX & Motion',
      category: 'VFX / Compositing / Post-Production',
      year: '2025',
      role: 'VFX Artist · Compositor',
      description: 'Multi-layer live-action integration, digital environment set extensions, matte painting, and post-production compositing.',
      tools: ['After Effects', 'Nuke', 'Blender'],
      heroProject: false,
      slug: 'vfx-compositing',
      url: 'projects/vfx-compositing.html',
      images: {
        thumbnail: 'assets/images/projects/vfx-compositing/01-vfx-comp.png',
        hero: 'assets/images/projects/vfx-compositing/01-vfx-comp.png',
        gallery: [
          'assets/images/projects/vfx-compositing/01-vfx-comp.png',
          'assets/images/projects/vfx-compositing/02-vfx-comp-1.png',
          'assets/images/projects/vfx-compositing/03-vfx-comp-2.png'
        ]
      }
    },
    {
      id: 'wipes-digital-ageing',
      number: '08',
      title: 'Wipes & Digital Ageing',
      chapter: '03 — VFX & Motion',
      category: 'VFX / Transitions / Digital Ageing',
      year: '2025',
      role: 'VFX Artist · Retouch & Transition Specialist',
      description: 'Complex narrative screen wipes, digital cosmetic ageing, and seamless transition techniques for cinematic storytelling.',
      tools: ['After Effects', 'Photoshop', 'Premiere Pro'],
      heroProject: false,
      slug: 'wipes-digital-ageing',
      url: 'projects/wipes-digital-ageing.html',
      images: {
        thumbnail: 'assets/images/projects/wipes-digital-ageing/01-wipe.png',
        hero: 'assets/images/projects/wipes-digital-ageing/01-wipe.png',
        gallery: [
          'assets/images/projects/wipes-digital-ageing/01-wipe.png',
          'assets/images/projects/wipes-digital-ageing/02-deadpool-wipe.png',
          'assets/images/projects/wipes-digital-ageing/03-ageing.png'
        ]
      }
    },
    {
      id: 'atmosphere-cg-matching',
      number: '09',
      title: 'Atmosphere & CG Matching',
      chapter: '03 — VFX & Motion',
      category: 'VFX / Lighting / CG Integration',
      year: '2025',
      role: 'Lighting & Integration Artist',
      description: 'Volumetric atmospheric effects, photorealistic CG-to-plate lighting matching, and cinematic color integration.',
      tools: ['Blender', 'After Effects', 'Photoshop'],
      heroProject: false,
      slug: 'atmosphere-cg-matching',
      url: 'projects/atmosphere-cg-matching.html',
      images: {
        thumbnail: 'assets/images/projects/atmosphere-cg-matching/01-atmosphere.png',
        hero: 'assets/images/projects/atmosphere-cg-matching/01-atmosphere.png',
        gallery: [
          'assets/images/projects/atmosphere-cg-matching/01-atmosphere.png',
          'assets/images/projects/atmosphere-cg-matching/02-action-hr.png',
          'assets/images/projects/atmosphere-cg-matching/03-horror-scene.png'
        ]
      }
    },
    {
      id: 'motion-graphics-renders',
      number: '10',
      title: 'Motion Graphics & Renders',
      chapter: '03 — VFX & Motion',
      category: 'Motion Graphics / Title Design / 3D Renders',
      year: '2025',
      role: 'Motion Graphics Designer',
      description: 'Stylized title sequences, animated credit treatments, and broadcast motion design systems.',
      tools: ['After Effects', 'Blender', 'Illustrator'],
      heroProject: false,
      slug: 'motion-graphics-renders',
      url: 'projects/motion-graphics-renders.html',
      images: {
        thumbnail: 'assets/images/projects/motion-graphics-renders/01-motion-render.png',
        hero: 'assets/images/projects/motion-graphics-renders/01-motion-render.png',
        gallery: [
          'assets/images/projects/motion-graphics-renders/01-motion-render.png',
          'assets/images/projects/motion-graphics-renders/02-motion-cast.png',
          'assets/images/projects/motion-graphics-renders/03-motion-crew.png'
        ]
      }
    },

    // Chapter 04: DESIGN & BRANDING
    {
      id: 'coxist',
      number: '11',
      title: 'COXIST AI',
      chapter: '04 — Design & Branding',
      category: 'Freelance Branding / Visual Identity',
      year: '2024',
      role: 'Freelance Brand Designer',
      description: 'Brand identity system, logo mark architecture, and multi-surface applications for an AI-powered Gen Z learning platform.',
      tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma'],
      heroProject: false,
      slug: 'coxist',
      url: 'projects/coxist.html',
      images: {
        thumbnail: 'assets/images/projects/coxist/coxist-card.jpg',
        hero: 'assets/images/projects/coxist/coxist-hero.jpg',
        gallery: [
          'assets/images/projects/coxist/coxist-hero.jpg',
          'assets/images/projects/coxist/coxist-macbook.jpg',
          'assets/images/projects/coxist/coxist-billboard.jpg',
          'assets/images/projects/coxist/coxist-icon-sign.jpg',
          'assets/images/projects/coxist/coxist-app-icon.jpg',
          'assets/images/projects/coxist/coxist-ipad.jpg',
          'assets/images/projects/coxist/coxist-business-card.jpg',
          'assets/images/projects/coxist/coxist-bento-grid.jpg'
        ]
      }
    },
    {
      id: 'campus-crave',
      number: '12',
      title: 'Campus Crave',
      chapter: '04 — Design & Branding',
      category: 'UI/UX / Product Design',
      year: '2025',
      role: 'Product & UI/UX Designer',
      description: 'Mobile app design and user experience framework for campus dining, ordering, and community engagement.',
      tools: ['Figma', 'Prototyping', 'Design Systems'],
      heroProject: false,
      slug: 'campus-crave',
      url: 'projects/campus-crave.html',
      images: {
        thumbnail: null,
        hero: null,
        gallery: []
      }
    },
    {
      id: 'aether',
      number: '13',
      title: 'Aether 2026',
      chapter: '04 — Design & Branding',
      category: 'Design Head / Event Identity',
      year: '2026',
      role: 'Design Head',
      description: 'Brand identity, merchandise, wristbands, lanyards, ID cards, fest banners, and promotional collateral for Mahindra University\'s annual cultural festival.',
      tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma'],
      heroProject: false,
      wideProject: true,
      slug: 'aether',
      url: 'work/aether/',
      images: {
        thumbnail: 'assets/images/projects/aether/aether-hero.jpg',
        hero: 'assets/images/projects/aether/aether-hero.jpg',
        gallery: [
          'assets/images/projects/aether/aether-hero.jpg',
          'assets/images/projects/aether/aether-airo-feature.jpg',
          'assets/images/projects/aether/aether-date-reveal.jpg',
          'assets/images/projects/aether/aether-merch-hoodie.jpg',
          'assets/images/projects/aether/aether-id-design.jpg',
          'assets/images/projects/aether/aether-lanyard-pattern.jpg',
          'assets/images/projects/aether/aether-wristband.jpg',
          'assets/images/projects/aether/aether-merch-cassette.jpg',
          'assets/images/projects/aether/aether-merch-attendance.jpg'
        ]
      }
    }
  ],
  experience: [
    {
      company: 'Mihira Visual Labs',
      role: 'Summer Intern — Animatic & After Effects',
      location: 'Hyderabad',
      date: 'July 2026 – August 2026',
      description: 'Worked on ideation, storyboard, animatic and sound design for promotional content for the animated series "Baahubali: The Eternal War."',
      images: []
    },
    {
      company: 'Angelic NGO',
      role: 'Graphic Designer — Social Sensitization Internship',
      location: 'Hyderabad',
      date: 'June 2025 – July 2025',
      description: 'Designed social media creatives and awareness posters and assisted in digital campaigns promoting adoption and animal welfare.',
      images: []
    }
  ],
  skills: {
    creative: ['Visual Storytelling', 'Filmmaking', 'VFX', 'Motion Graphics', 'Graphic Design', 'Branding', 'Photography'],
    interactive: ['Blender', 'Unreal Engine', 'Unity'],
    design: ['Adobe Creative Suite', 'Figma', 'Affinity', 'Canva', 'Framer'],
    computational: ['Python', 'C Programming']
  },
  achievements: [
    {
      title: 'Design Head — Aether',
      detail: 'Mahindra University\'s Annual Cultural Fest, 2026'
    },
    {
      title: '2nd Place — Enigma Game Jam',
      detail: 'Team Event, Mahindra University, 2024'
    },
    {
      title: 'Dean\'s List',
      detail: 'Mahindra University, 2025'
    }
  ],
  education: {
    degree: 'B.Tech — Computation & Media',
    university: 'Mahindra University',
    date: '2023 – Present',
    coursework: ['Visual Communication', 'VFX', 'Animation', 'Media Production', 'Game Design', 'AR/VR']
  },
  keywords: ['Film', 'Design', '3D', 'VFX', 'Interactive', 'Branding', 'Creative Technology']
};
