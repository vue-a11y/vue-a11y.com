<template>
  <section
    v-show="webmentions.length"
    aria-label="Webmention"
    class="webmentions"
  >
    <h2 class="text-2xl font-bold">
      ({{ webmentions.length }}) Webmentions<span class="text-accent">.</span>
    </h2>

    <div class="my-12 webmentions-interact">
      <div
        v-if="likes.length"
        class="flex flex-wrap items-center"
      >
        <div
          v-show="likes.length < avatarLimits"
          class="flex items-center w-full mb-4 font-bold"
        >
          <vp-icon
            name="like"
            class="mr-1 text-accent"
          />
          <span class="ml-2 uppercase">Likes</span>
        </div>
        <ul class="flex w-full sm:w-4/6 lg:w-9/12 webmentions-interact__list">
          <li
            v-for="(like, index) in likes.slice(0, avatarLimits)"
            :key="`like${index}`"
            :style="`left: ${35 * index}px`"
          >
            <a
              :href="like.author.url"
              :title="like.author.name"
              :aria-label="`Ir para o site do ${like.author.name}`"
              rel="nofollow"
            >
              <span class="sr-only">{{ like.author.name }}</span>
              <img
                class="rounded-full"
                :src="like.author.photo"
                :alt="`Avatar de ${like.author.name}`"
              >
            </a>
          </li>
        </ul>
        <div class="w-full mt-3 sm:w-2/6 lg:w-3/12 sm:mt-0 sm:text-right">
          <span
            v-show="likes.length > avatarLimits"
            class="text-sm"
          >
            +{{ likes.length - avatarLimits }} Gostaram disso
          </span>
        </div>
      </div>
      <div
        v-if="reposts.length"
        class="flex flex-wrap items-center mt-10"
      >
        <div
          v-show="reposts.length < avatarLimits"
          class="flex items-center w-full mb-4 font-bold"
        >
          <vp-icon
            name="share"
            class="mr-1 text-accent"
          />
          <span class="ml-2 uppercase">Reposts</span>
        </div>
        <ul class="flex w-full sm:w-4/6 lg:w-9/12 webmentions-interact__list">
          <li
            v-for="(repost, index) in reposts"
            :key="`repost${index}`"
            :style="`left: ${35 * index}px`"
          >
            <a
              :href="repost.author.url"
              :title="repost.author.name"
              :aria-label="`Ir para o site do ${repost.author.name}`"
              rel="nofollow"
            >
              <span class="sr-only">{{ repost.author.name }}</span>
              <img
                class="rounded-full"
                :src="repost.author.photo"
                :alt="`Avatar de ${repost.author.name}`"
              >
            </a>
          </li>
        </ul>
        <div
          class="w-full mt-3 sm:w-2/6 lg:w-3/12 sm:mt-0 sm:text-right"
        >
          <span
            v-show="reposts.length > avatarLimits"
            class="text-sm"
          >
            +{{ reposts.length - avatarLimits }} Compartilharam
          </span>
        </div>
      </div>
    </div>

    <div class="mt-24 webmentions-comments">
      <h3 class="mb-12 text-xl">
        <span class="text-2xl font-bold">Comments <span class="text-accent">.</span></span>
      </h3>
      <ul
        v-if="mentions.length"
        class="webmentions-comments__list"
      >
        <li
          v-for="(mention, index) in mentions"
          :key="`mention${index}`"
          class="mb-16"
        >
          <article
            class="flex flex-wrap"
            itemprop="comment"
            itemscope="itemscope"
            itemtype="https://schema.org/Comment"
            itemref="author-comment-image"
          >
            <div
              class="flex items-center w-full"
              itemprop="author"
              itemscope="itemscope"
              itemtype="https://schema.org/Person"
            >
              <a
                :href="mention.author.url"
                :title="mention.author.name"
                :aria-label="`Ir para o site do ${mention.author.name}`"
                rel="nofollow"
                itemprop="url"
              >
                <span class="sr-only">{{ mention.author.name }}</span>
                <img
                  id="author-comment-image"
                  class="rounded-full"
                  itemprop="image"
                  :src="mention.author.photo"
                  :alt="`Avatar de ${mention.author.name}`"
                >
              </a>
              <p
                class="ml-4 font-bold"
                itemprop="name"
              >
                {{ mention.author.name }}
              </p>
            </div>
            <div class="w-full mt-2">
              <p
                v-if="mention.content"
                itemprop="text"
                class="text-sm"
                v-html="mention.content.html || mention.content.text"
              />
              <time
                itemprop="datePublished"
                :datetime="mention.published"
                class="text-xs text-gray-600"
              >
                {{ new Intl.DateTimeFormat('default', { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(mention.published)) }}
              </time>
            </div>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { ref, watch, computed, onBeforeMount } from '@vue/composition-api'

import { useWindowSize } from '@/theme/composable'

export default {
  name: 'WebMentions',

  setup (_, { root }) {
    const webmentions = ref([])
    const avatarLimits = ref(16)
    // const urlFetch = root.$themeConfig.webmentions.endpoint.replace('#URLPOST#', `${process.env.URL_BASE}${root.$route.fullPath}`)
    const urlFetch = root.$themeConfig.webmentions.endpoint.replace('#URLPOST#', 'https://vue-a11y.com/about')

    const mentions = computed(() => {
      if (!webmentions.value.length) return []
      return webmentions.value.filter(item => {
        return ['mention-of', 'in-reply-to'].includes(item['wm-property'])
      })
    })

    const likes = computed(() => {
      if (!webmentions.value.length) return []
      return webmentions.value.filter(item => {
        return item['wm-property'] === 'like-of'
      })
    })

    const reposts = computed(() => {
      if (!webmentions.value.length) return []
      return webmentions.value.filter(item => {
        return item['wm-property'] === 'repost-of'
      })
    })

    const { width } = useWindowSize(100)

    watch(width, val => responsiveAvatars(val))

    onBeforeMount(() => {
      fetch(urlFetch)
        .then(res => res.json())
        .then(res => {
          webmentions.value = res.children
        })
    })

    function responsiveAvatars (val) {
      const sizes = {
        480: 7,
        1024: 10,
        1400: 14
      }
      for (const size in sizes) {
        if (val < Number(size)) {
          avatarLimits.value = sizes[size]
          break
        }
        avatarLimits.value = 16
      }
    }

    return {
      likes,
      reposts,
      mentions,
      webmentions,
      avatarLimits
    }
  }
}
</script>

<style lang="scss">
.webmentions-interact {
  &__list {
    @apply relative;
    height: 50px;

    li {
      @apply absolute z-10;
      transition: transform .3s;
      width: 50px;

      &:hover {
        @apply z-20;
        transform: scale(1.5,1.5);
      }

      a {
        @apply block;
      }

      img {
        @apply w-full;
      }
    }
  }
}

.webmentions-comments {
  &__list {
    > li {
      img {
        width: 50px;
      }

      a {
        @apply text-accent;
      }
    }
  }
}
</style>
