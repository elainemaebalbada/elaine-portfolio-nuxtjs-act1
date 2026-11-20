<template>
  <header class="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]">
    <nav class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
      <NuxtLink to="/" class="flex items-center">
        <img
          src="/logo-navbar.png"
          alt="Elaine Mae logo"
          class="h-10 w-auto object-contain"
        />
      </NuxtLink>

      <div class="flex items-center gap-7">
        <NuxtLink
          to="/"
          class="text-sm font-semibold text-[var(--primary)] transition-colors hover:text-[var(--muted)]"
          active-class="underline underline-offset-8"
          exact
        >
          Home
        </NuxtLink>

        <NuxtLink
          to="/profile"
          class="text-sm font-semibold text-[var(--primary)] transition-colors hover:text-[var(--muted)]"
          active-class="underline underline-offset-8"
        >
          About Me
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>