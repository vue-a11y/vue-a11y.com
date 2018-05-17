<template>
  <div class="home" role="main">
    <div class="hero">
      <img v-if="data.heroImage" :src="$withBase(data.heroImage)" alt="hero">
      <h1>{{ data.heroText || $title || 'Hello' }}</h1>
      <p class="description">
        {{ data.tagline || $description || 'Welcome to your VuePress site' }}
      </p>
      <p class="action" v-if="data.actionText && data.actionLink">
        <NavLink class="action-button action-button--disabled" :item="actionLink"/>
        <a class="nav-link action-button" 
          title="Go to the vue community accessibility project on Github"
          :href="githubLink.link" 
          v-text="githubLink.text">
        </a>
      </p>
    </div>
    <div class="features" v-if="data.features && data.features.length">
      <div class="feature" v-for="feature in data.features">
        <h2>{{ feature.title }}</h2>
        <p>{{ feature.details }}</p>
      </div>
    </div>
    <div class="features mc-signup-form">
      <div id="mc_embed_signup">
        <form action="https://surge.us18.list-manage.com/subscribe/post?u=393d90138c8be29e7cc5dd32f&amp;id=0171882832" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
          <div id="mc_embed_signup_scroll">
            <h2>Vue A11y Newsletter</h2>
            <p>
              Sign up for emails about articles, videos, updated of components, and events of Accessibility and Vue.js Community.
            </p>
            <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
            <div class="mc-field-group">
              <label for="mce-MMERGE1">Name  <span class="asterisk">*</span></label>
              <input type="text" value="" name="MMERGE1" class="required" id="mce-MMERGE1">
            </div>
            <div class="mc-field-group">
              <label for="mce-EMAIL">Email Address  <span class="asterisk">*</span></label>
              <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
            </div>
              <div id="mce-responses" class="clear">
                <div class="response" id="mce-error-response" style="display:none"></div>
                <div class="response" id="mce-success-response" style="display:none"></div>
              </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_393d90138c8be29e7cc5dd32f_0171882832" tabindex="-1" value=""></div>
                <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
            </div>
        </form>
      </div>
      <!--End mc_embed_signup-->
    </div>
    <Content custom/>
  </div>
</template>

<script>
import NavLink from './NavLink.vue'

export default {
  components: { NavLink },
  computed: {
    data () {
      return this.$page.frontmatter
    },
    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    },
    githubLink () {
      return {
        link: this.data.githubLink,
        text: this.data.githubText
      }
    }
  }
}
</script>

<style lang="stylus">
@import './styles/config.styl'

.home
  padding $navbarHeight 2rem 0
  max-width 960px
  margin 0px auto
  .hero
    text-align center
    img
      max-height 280px
      display block
      margin 3rem auto 1.5rem
    h1
      font-size 3rem
    h1, .description, .action
      margin 1.8rem auto
    .description
      max-width 35rem
      font-size 1.6rem
      line-height 1.3
      color lighten($textColor, 40%)
    .action-button
      display inline-block
      font-size 1.2rem
      color $codeBgColor
      background-color $accentColor
      padding 0.8rem 1.6rem
      border-radius 4px
      transition background-color .1s ease
      box-sizing border-box
      border-bottom 1px solid darken($accentColor, 10%)
      &:not(:last-child)
        margin-right: 10px
      &:hover
        background-color lighten($accentColor, 10%)
      &--disabled
        background-color #ccc
        border-bottom-color #ccc
        &:hover
          background-color #ccc
        
  .features
    border-top 1px solid $borderColor
    padding 1.2rem 0
    margin-top 2.5rem
    display flex
    flex-wrap wrap
    align-items flex-start
    align-content strech
    justify-content space-between
  .feature
    flex-grow 1
    flex-basis 30%
    max-width 30%
    h2
      font-size 1.4rem
      font-weight 500
      border-bottom none
      padding-bottom 0
      color lighten($textColor, 10%)
    p
      color lighten($textColor, 25%)

#mc_embed_signup
  background:#fff
  clear:left
  font:14px Helvetica,Arial,sans-serif
  width:60%
  margin: 0 auto

@media (max-width: $MQMobile)
  .home
    .features
      flex-direction column
    .feature
      max-width 100%
      padding 0 2.5rem

  #mc_embed_signup
    width:250px

@media (max-width: $MQMobileNarrow)
  .home
    padding-left 1.5rem
    padding-right 1.5rem
    .hero
      img
        max-height 210px
        margin 2rem auto 1.2rem
      h1
        font-size 2rem
      h1, .description, .action
        margin 1.2rem auto
      .description
        font-size 1.2rem
      .action-button
        font-size 1rem
        padding 0.6rem 1.2rem
    .feature
      h2
        font-size 1.25rem
</style>
