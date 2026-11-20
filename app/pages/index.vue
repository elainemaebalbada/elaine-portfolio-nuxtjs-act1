<script setup lang="ts">
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="mx-auto grid max-w-7xl items-center gap-14 px-6 pt-8 pb-20 lg:grid-cols-2 lg:pt-16 lg:pb-28">
      <div class="order-2 lg:order-1">
        <p class="text-xl font-semibold tracking-wide text-[var(--muted)]">
          Hi, I am
        </p>

        <h1 class="mt-3 text-6xl font-extrabold leading-[1.05] tracking-tight text-[var(--primary)] sm:text-7xl lg:text-8xl">
          Elaine Mae.
        </h1>

        <p class="mt-7 max-w-lg text-base leading-8 text-[var(--muted)]">
          A third-year BSIT student passionate about technology, creativity, and continuous learning. I enjoy exploring new tools,
          developing my skills, and working on projects that allow me to turn what I learn into something meaningful.
        </p>

        <div class="mt-9 flex flex-wrap gap-4">
          <NuxtLink
            to="/profile"
            class="bg-[var(--primary)] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--deep)]"
          >
            Get to Know Me
          </NuxtLink>
        </div>
      </div>

      <div class="order-1 flex justify-center lg:order-2 lg:justify-end">
        <div class="w-full max-w-md">
          <img
            src="/profile.jpg"
            alt="Portrait of Elaine Mae"
            class="aspect-[4/5] w-full object-cover"
          />
        </div>
      </div>
    </section>

    <!-- Get to Know Me Section -->
    <section class="border-y border-[var(--border)] bg-[var(--warm)]">
      <div class="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:px-12 lg:py-28">
        <div>
          <p class="text-xs font-bold uppercase tracking-[0.3em] text-[var(--muted)]">
            A Brief Introduction
          </p>

          <h2 class="mt-5 max-w-lg text-4xl font-bold leading-[1.1] tracking-tight text-[var(--primary)] md:text-5xl lg:text-6xl">
            Beyond the classroom,<br>
            <span class="text-[var(--muted)]">there is more<br>to discover.</span>
          </h2>
        </div>

        <div class="flex flex-col justify-center">
          <p class="leading-8 text-[var(--muted)]">
            From academic milestones to personal interests, every experience
            contributes to the person I am becoming. I value learning,
            creativity, and making the most of every opportunity.
          </p>

          <NuxtLink
            to="/profile"
            class="mt-8 w-fit border-b border-[var(--primary)] pb-2 text-sm font-bold text-[var(--primary)] transition-colors hover:text-[var(--muted)]"
          >
            Discover my story →
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>