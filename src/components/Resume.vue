<template>
  <div>
    <resumeTimeline/>
    <bannerBubble/>
  </div>
</template>

<script>
import BannerBubble from './BannerBubble'
import ResumeTimeline from './ResumeTimeline'

export default {
  components: {
    'bannerBubble': BannerBubble,
    'resumeTimeline': ResumeTimeline
  },
  name: 'Resume',
  data () {
    return {
    }
  }
}
</script>
