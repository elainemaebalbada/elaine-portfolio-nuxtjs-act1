<template>
  <div class="min-h-screen bg-[var(--bg)]">
    <Navbar />

    <main>
      <slot />
    </main>

    <footer class="bg-[var(--primary)] text-[var(--bg)]">
      <div class="mx-auto grid max-w-7xl gap-12 px-6 py-14 md:grid-cols-2 lg:px-12">
        <div>
          <NuxtLink to="/" class="inline-block">
            <img
              src="/logo-footer.png"
              alt="Elaine Mae logo"
              class="h-12 w-auto object-contain"
            />
          </NuxtLink>

          <p class="mt-5 max-w-sm text-sm leading-7 text-[var(--bg)]/75">
            A glimpse into my journey in technology, my interests, and the experiences that continue to shape who I am.
          </p>

          <div class="mt-7 flex items-center gap-5">
            <a
              href="https://web.facebook.com/eunaaaaaaaa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              class="transition-opacity hover:opacity-60"
            >
              <img src="https://cdn.simpleicons.org/facebook/FFFFFF" alt="Facebook" class="h-6 w-6" />
            </a>

            <a
              href="https://www.instagram.com/ecushla/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              class="transition-opacity hover:opacity-60"
            >
              <img src="https://cdn.simpleicons.org/instagram/FFFFFF" alt="Instagram" class="h-6 w-6" />
            </a>

            <a
              href="https://www.tiktok.com/@ecushla"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              class="transition-opacity hover:opacity-60"
            >
              <img src="https://cdn.simpleicons.org/tiktok/FFFFFF" alt="TikTok" class="h-6 w-6" />
            </a>

            <a
              href="https://github.com/elainemaebalbada"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              class="transition-opacity hover:opacity-60"
            >
              <img src="https://cdn.simpleicons.org/github/FFFFFF" alt="GitHub" class="h-6 w-6" />
            </a>
          </div>
        </div>

        <div class="md:justify-self-end">
          <p class="text-xs font-bold uppercase tracking-[0.25em] text-[var(--bg)]/60">
            Explore
          </p>

          <div class="mt-5 flex flex-col gap-4 text-sm">
            <NuxtLink to="/" class="transition-opacity hover:opacity-70">
              Home
            </NuxtLink>

            <NuxtLink to="/profile" class="transition-opacity hover:opacity-70">
              About Me
            </NuxtLink>
            
          </div>
        </div>
      </div>

      <div class="border-t border-white/20">
        <div class="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-6 py-5 text-xs text-[var(--bg)]/65 sm:flex-row lg:px-12">
          <p>© {{ new Date().getFullYear() }} Elaine Mae M. Balbada.</p>
          <p>Designed and developed with care.</p>
        </div>
      </div>
    </footer>
  </div>
</template>