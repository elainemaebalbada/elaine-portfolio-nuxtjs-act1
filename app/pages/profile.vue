<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const education = [
  {
    level: 'Tertiary',
    school: 'Caraga State University – Main Campus',
    program: 'Bachelor of Science in Information Technology',
    schoolYear: '2024–Present',
    organization: 'Public Information Officer I - CSU-Society of Information Technology Students (CSU-SITeS)',
    recognition: ['Ms. CCIS 2026 – 1st Runner Up'],
  },
  {
    level: 'Secondary',
    school: 'Las Nieves National High School',
    program: 'General Academic Strand (GAS)',
    schoolYear: '2012-2024',
    recognition: [
      'With Highest Honor',
      'Philippine Senate Academic Excellence Awardee – Top 1 in Strand',
    ],
  },
  {
    level: 'Primary',
    school: 'Las Nieves Central Elementary School',
    schoolYear: '2013–2018',
    recognition: ['With Honor – 3rd Honorable Mention'],
  },
]

const technologies = [
  {
    name: 'Laravel',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg',
  },
  {
    name: 'HTML',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
  },
  {
    name: 'CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
  },
  {
    name: 'PHP',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
  },
  {
    name: 'PostgreSQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
  },
  {
    name: 'MySQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
  },
  {
    name: 'Postman',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg',
  },
  {
    name: 'C',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg',
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  },
  {
    name: 'Supabase',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg',
  },
]

const areasOfInterest = [
  {
    number: '01',
    title: 'Web Development',
    description: 'Building responsive and functional websites while exploring different tools and technologies for web applications.',
  },
  {
    number: '02',
    title: 'UI/UX and Interface Design',
    description: 'Creating organized and visually engaging interfaces with attention to layout, typography, and user experience.',
  },
  {
    number: '03',
    title: 'Backend Development',
    description: 'Understanding application logic, server-side processes, and how different parts of a system work together.',
  },
  {
    number: '04',
    title: 'Database Management',
    description: 'Exploring how data is structured, stored, organized, and managed within applications.',
  },
  {
    number: '05',
    title: 'Exploring New Technologies',
    description: 'Discovering new tools and development approaches while continuously expanding my technical knowledge.',
  },
]

const interests = [
  {
    title: 'Singing',
    description: 'Singing is one of the ways I express myself, unwind, and enjoy my free time. Music gives me a chance to share my emotions and appreciate the little moments.',
    image: '/hobbies/singing.jpg',
  },
  {
    title: 'Playing Musical Instruments',
    description: 'I enjoy playing musical instruments and exploring different sounds and melodies. It allows me to appreciate music, develop my skills, and express my creativity.',
    image: '/hobbies/instruments.jpg',
  },
  {
    title: 'Motorcycle Rides',
    description: 'I enjoy going on motorcycle rides, especially when I am in our province. Exploring different places, enjoying the scenery, and taking a break from my usual routine make every ride worthwhile.',
    image: '/hobbies/motorcycle.jpg',
  },
]

const sharingPhotos = [
  '/knowledge-sharing/sharing-1.jpg',
  '/knowledge-sharing/sharing-2.jpg',
  '/knowledge-sharing/sharing-3.jpg',
  '/knowledge-sharing/sharing-4.jpg',
  '/knowledge-sharing/sharing-5.jpg',
  '/knowledge-sharing/sharing-6.jpg',
  '/knowledge-sharing/sharing-7.jpg',
]

const currentSlide = ref(0)

let slideshowInterval: ReturnType<typeof setInterval> | undefined

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % sharingPhotos.length
}

function goToSlide(index: number) {
  currentSlide.value = index
}

onMounted(() => {
  slideshowInterval = setInterval(nextSlide, 2000)
})

onUnmounted(() => {
  if (slideshowInterval) {
    clearInterval(slideshowInterval)
  }
})
</script>

<template>
  <div>
    <!-- About Me Hero -->
    <section class="bg-[var(--warm)]">
      <div class="mx-auto grid max-w-7xl items-center gap-14 px-6 pt-8 pb-20 lg:grid-cols-2 lg:px-12 lg:pt-12 lg:pb-28">
        <div>
          <p class="text-xs font-bold uppercase tracking-[0.3em] text-[var(--muted)]">
            Get to Know Me
          </p>

          <h1 class="mt-5 text-5xl font-bold leading-tight text-[var(--primary)] md:text-6xl">
            A little more<br><span class="text-[var(--muted)]">about who I am.</span>
          </h1>

          <p class="mt-7 leading-8 text-[var(--muted)]">
            I enjoy exploring new ideas, learning through experience, and finding creative ways to approach challenges.
            I believe that growth comes from staying curious, trying new things, and being willing to learn from both successes and setbacks.
            I am always open to opportunities that allow me to develop new skills and broaden my perspective.<br><br>

            Beyond academics, I value creativity, collaboration, and personal growth. I enjoy discovering things that inspire me,
            sharing what I learn with others, and taking on experiences that challenge me to improve. Through this portfolio, I share the interests,
            experiences, and milestones that continue to shape who I am and the person I aspire to become.
          </p>
        </div>

        <div class="flex justify-center lg:justify-end">
          <img
            src="/about-me.jpg"
            alt="Elaine Mae"
            class="aspect-[4/5] w-full max-w-md object-cover"
          />
        </div>
      </div>
    </section>

    <!-- Personal Information -->
    <section class="border-y border-[var(--border)] bg-[var(--bg)] py-20 lg:py-24">
      <div class="mx-auto max-w-7xl px-6 lg:px-12">
        <div class="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <p class="text-xs font-bold uppercase tracking-[0.3em] text-[var(--muted)]">
              The Basics
            </p>

            <h2 class="mt-5 text-4xl font-bold leading-tight text-[var(--primary)] md:text-5xl">
              Personal<br>
              <span class="text-[var(--muted)]">Information</span>
            </h2>

            <p class="mt-5 max-w-sm leading-8 text-[var(--muted)]">
              A closer look at my personal background, academic details, and current studies.
            </p>
          </div>

          <div class="divide-y divide-[var(--border)] border-y border-[var(--border)]">
            <div class="grid grid-cols-[110px_1fr] gap-5 py-5 sm:grid-cols-[150px_1fr]">
              <p class="text-xs font-bold uppercase tracking-widest text-[var(--muted)]">
                Full Name
              </p>
              <p class="font-semibold leading-7 text-[var(--primary)]">
                Elaine Mae M. Balbada
              </p>
            </div>

            <div class="grid grid-cols-[110px_1fr] gap-5 py-5 sm:grid-cols-[150px_1fr]">
              <p class="text-xs font-bold uppercase tracking-widest text-[var(--muted)]">
                Age
              </p>
              <p class="font-semibold leading-7 text-[var(--primary)]">
                20 years old
              </p>
            </div>

            <div class="grid grid-cols-[110px_1fr] gap-5 py-5 sm:grid-cols-[150px_1fr]">
              <p class="text-xs font-bold uppercase tracking-widest text-[var(--muted)]">
                Address
              </p>
              <p class="font-semibold leading-7 text-[var(--primary)]">
                Purok 4, Brgy. Malicato, Las Nieves, Agusan del Norte, Philippines
              </p>
            </div>

            <div class="grid grid-cols-[110px_1fr] gap-5 py-5 sm:grid-cols-[150px_1fr]">
              <p class="text-xs font-bold uppercase tracking-widest text-[var(--muted)]">
                Year Level
              </p>
              <p class="font-semibold leading-7 text-[var(--primary)]">
                Third Year
              </p>
            </div>

            <div class="grid grid-cols-[110px_1fr] gap-5 py-5 sm:grid-cols-[150px_1fr]">
              <p class="text-xs font-bold uppercase tracking-widest text-[var(--muted)]">
                Degree Program
              </p>
              <p class="font-semibold leading-7 text-[var(--primary)]">
                Bachelor of Science in Information Technology
              </p>
            </div>

            <div class="grid grid-cols-[110px_1fr] gap-5 py-5 sm:grid-cols-[150px_1fr]">
              <p class="text-xs font-bold uppercase tracking-widest text-[var(--muted)]">
                College
              </p>
              <p class="font-semibold leading-7 text-[var(--primary)]">
                College of Computing and Information Sciences
              </p>
            </div>

            <div class="grid grid-cols-[110px_1fr] gap-5 py-5 sm:grid-cols-[150px_1fr]">
              <p class="text-xs font-bold uppercase tracking-widest text-[var(--muted)]">
                University
              </p>
              <p class="font-semibold leading-7 text-[var(--primary)]">
                Caraga State University – Main Campus
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Education Section -->
    <section class="bg-[var(--surface)] py-16 lg:py-20">
      <div class="mx-auto max-w-7xl px-6 lg:px-12">

        <!-- Section Heading -->
        <div class="max-w-2xl">
          <p class="text-xs font-bold uppercase tracking-[0.3em] text-[var(--muted)]">
            My Academic Journey
          </p>

          <h2 class="mt-4 text-4xl font-bold text-[var(--primary)] md:text-5xl">
            Education
          </h2>

          <p class="mt-4 leading-7 text-[var(--muted)]">
            Each stage has shaped my growth and love for learning.
          </p>
        </div>

        <!-- Education Timeline -->
        <div class="relative mt-10 ml-2 md:ml-6">
          <div class="absolute bottom-6 left-5 top-5 w-px bg-[var(--accent)] md:left-6"></div>

          <div class="space-y-5">
            <article
              v-for="(item, index) in education"
              :key="item.level"
              class="relative grid grid-cols-[40px_1fr] gap-5 md:grid-cols-[48px_1fr] md:gap-7"
            >
              <!-- Number Marker -->
              <div class="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--accent)] bg-[var(--bg)] text-xs font-bold text-[var(--primary)] md:h-12 md:w-12">
                {{ String(index + 1).padStart(2, '0') }}
              </div>

              <!-- Education Details -->
              <div
                class="border-b border-[var(--border)] pb-5"
                :class="{ 'border-b-0': index === education.length - 1 }"
              >
                <p class="text-xs font-bold uppercase tracking-[0.2em] text-[var(--muted)]">
                  {{ item.level }}
                </p>

                <h3 class="mt-2 text-lg font-extrabold leading-snug text-[var(--primary)] md:text-xl">
                  {{ item.school }}
                </h3>

                <p
                  v-if="item.program"
                  class="mt-1 text-sm font-semibold text-[var(--primary)]"
                >
                  {{ item.program }}
                </p>

                <p
                  v-if="item.schoolYear"
                  class="mt-1 text-sm font-semibold text-[var(--primary)]"
                >
                  {{ item.schoolYear }}
                </p>

                <ul
                  v-if="item.organization || item.recognition"
                  class="mt-2 space-y-1"
                >
                  <li
                    v-if="item.organization"
                    class="flex items-start gap-2 text-sm leading-6 text-[var(--muted)]"
                  >
                    <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]"></span>
                    {{ item.organization }}
                  </li>

                  <li
                    v-for="award in item.recognition"
                    :key="award"
                    class="flex items-start gap-2 text-sm leading-6 text-[var(--muted)]"
                  >
                    <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]"></span>
                    {{ award }}
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- Technical Skills Section -->
    <section class="bg-[var(--bg)] py-20 lg:py-28">
      <div class="mx-auto max-w-7xl px-6 lg:px-12">
        <div class="max-w-2xl">
          <p class="text-xs font-bold uppercase tracking-[0.3em] text-[var(--muted)]">
            Tools and Technologies
          </p>

          <h2 class="mt-5 text-4xl font-bold leading-[1.1] tracking-tight text-[var(--primary)] md:text-5xl">
            Technical
            <span class="text-[var(--muted)]">Skills</span>
          </h2>

          <p class="mt-5 leading-8 text-[var(--muted)]">
            These are some of the technologies and tools I have encountered
            and used throughout my learning and project experiences.
          </p>
        </div>

        <div class="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          <div
            v-for="technology in technologies"
            :key="technology.name"
            class="flex min-h-36 flex-col items-center justify-center gap-4 border border-[var(--border)] bg-[var(--surface)] p-5 transition-transform duration-300 hover:-translate-y-1"
          >
            <img
              :src="technology.icon"
              :alt="technology.name"
              class="h-12 w-12 object-contain"
              loading="lazy"
            />

            <p class="text-sm font-semibold text-[var(--primary)]">
              {{ technology.name }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Areas of Interest Section -->
    <section class="border-y border-[var(--border)] bg-[var(--warm)] py-20 lg:py-28">
      <div class="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-12">
        <div>
          <p class="text-xs font-bold uppercase tracking-[0.3em] text-[var(--muted)]">
            Beyond Technical Skills
          </p>

          <h2 class="mt-5 max-w-lg text-4xl font-bold leading-[1.1] tracking-tight text-[var(--primary)] md:text-5xl">
            Areas of<br>
            <span class="text-[var(--muted)]">Interest</span>
          </h2>

          <p class="mt-6 max-w-md leading-8 text-[var(--muted)]">
            I am interested in exploring different areas of technology,
            developing practical skills, and discovering new ways to create
            useful digital experiences.
          </p>
        </div>

        <div class="flex flex-col justify-center">
          <article
            v-for="item in areasOfInterest"
            :key="item.number"
            class="grid grid-cols-[40px_1fr] gap-5 border-b border-[var(--border)] py-6 first:pt-0 last:border-b-0 last:pb-0 sm:grid-cols-[52px_1fr] sm:gap-7"
          >
            <span class="pt-1 text-sm font-semibold tracking-widest text-[var(--muted)]">
              {{ item.number }}
            </span>

            <div>
              <h3 class="text-xl font-bold text-[var(--primary)] sm:text-2xl">
                {{ item.title }}
              </h3>

              <p class="mt-3 max-w-md text-sm leading-7 text-[var(--muted)]">
                {{ item.description }}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Things I Enjoy Section -->
    <section class="bg-[var(--bg)] py-20 lg:py-28">
      <div class="mx-auto max-w-7xl px-6 lg:px-12">
        <div class="max-w-2xl">
          <p class="text-xs font-bold uppercase tracking-[0.3em] text-[var(--muted)]">
            Outside the Classroom
          </p>

          <h2 class="mt-5 text-4xl font-bold text-[var(--primary)] md:text-5xl">
            Things I <span class="text-[var(--muted)]">Enjoy</span>
          </h2>

          <p class="mt-5 leading-8 text-[var(--muted)]">
            Beyond academics, I make time for the activities that allow me
            to express myself, explore, and enjoy new experiences.
          </p>
        </div>

        <div class="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="item in interests"
            :key="item.title"
            class="group cursor-pointer overflow-hidden border border-[var(--border)] bg-[var(--surface)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:shadow-xl hover:shadow-[rgba(74,8,8,0.10)]"
          >
            <div class="mx-6 mt-6 overflow-hidden">
              <img
                :src="item.image"
                :alt="item.title"
                class="aspect-[4/3] w-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                loading="lazy"
              />
            </div>

            <div class="p-6">
              <h3 class="text-xl font-extrabold text-[var(--primary)] transition-colors duration-300 group-hover:text-[var(--muted)]">
                {{ item.title }}
              </h3>

              <p class="mt-3 text-sm leading-7 text-[var(--muted)]">
                {{ item.description }}
              </p>

              <div class="mt-5 h-px w-10 bg-[var(--accent)] transition-all duration-300 group-hover:w-full"></div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Knowledge Sharing -->
    <section class="bg-[var(--warm)] py-20 lg:py-28">
      <div class="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-12">
        <div>
          <p class="text-xs font-bold uppercase tracking-[0.3em] text-[var(--muted)]">
            Learning Together
          </p>

          <h2 class="mt-5 text-4xl font-bold leading-tight text-[var(--primary)] md:text-5xl">
            Sharing knowledge is<br><span class="text-[var(--muted)]">part of my journey.</span>
          </h2>

          <p class="mt-6 leading-8 text-[var(--muted)]">
            I find fulfillment in helping others understand lessons and
            sharing what I have learned. Explaining ideas, assisting others,
            and learning together are experiences I genuinely value.
          </p>
        </div>

        <div>
          <div class="group border border-[var(--border)] bg-[var(--bg)] p-3 shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl">
            <div class="relative aspect-[4/3] overflow-hidden border border-[var(--border)]">
              <img
                v-for="(photo, index) in sharingPhotos"
                :key="photo"
                :src="photo"
                alt="Knowledge-sharing experience"
                class="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out"
                :class="currentSlide === index ? 'opacity-100' : 'opacity-0'"
              />
            </div>
          </div>

          <div class="mt-5 flex justify-center gap-3">
            <button
              v-for="(_, index) in sharingPhotos"
              :key="index"
              type="button"
              :aria-label="`Go to photo ${index + 1}`"
              class="h-2.5 w-2.5 rounded-full transition-colors"
              :class="currentSlide === index ? 'bg-[var(--primary)]' : 'bg-[var(--border)]'"
              @click="goToSlide(index)"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Closing Section -->
    <section class="mx-auto max-w-7xl px-6 py-20 text-center lg:px-12 lg:py-28">
      <p class="text-xs font-bold uppercase tracking-[0.3em] text-[var(--muted)]">
        What's Next
      </p>

      <h2 class="mx-auto mt-5 max-w-3xl text-4xl font-bold leading-tight text-[var(--primary)] md:text-5xl">
        There's always more to<br><span class="text-[var(--muted)]">learn and discover.</span>
      </h2>

      <p class="mx-auto mt-6 max-w-2xl leading-8 text-[var(--muted)]">
        I look forward to growing through new experiences, learning
        opportunities, and the projects still ahead of me.
      </p>

      <NuxtLink
        to="/"
        class="mt-9 inline-block bg-[var(--primary)] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--deep)]"
      >
        Back to Home
      </NuxtLink>
    </section>
  </div>
</template>