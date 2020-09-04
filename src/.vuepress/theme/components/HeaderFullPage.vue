<template>
  <header class="relative w-full mt-6 header-full-page lg:pb-32">
    <div class="absolute top-0 right-0 hidden w-full h-64 lg:block md:max-w-5xl" />
    <div class="card box-default">
      <h1
        id="card-title"
        class="max-w-2xl card-title"
        itemprop="name headline"
      >
        <slot name="cardTitle" />
      </h1>

      <p>
        <slot />
      </p>

      <div class="card-info">
        <slot name="cardFooter" />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderFullPage'
}
</script>

<style lang="scss">
.header-full-page {
  .card {
    min-height: 220px;
    @screen lg {
      top: 120px;
      max-width: 57rem;
    }
  }

  > div:first-child {
    background: var(--bg-secondary);
    background: radial-gradient(circle at center, var(--accent) 10%, transparent 12%), transparent;
    background-size: 40px 40px;
  }
}
</style>
