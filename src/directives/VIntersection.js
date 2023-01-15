export default {
  mounted(el, binding) {
    console.log(binding)
    // this.fetchPosts()
    const options = {
      rootMargin: '0px',
      threshold: 1.0,
    }
    const callback = (entries) => {
      if (entries[0].isIntersecting && binding.value.page <= binding.value.totalPages) {
        binding.value.loadMorePosts()
      }
    }
    const observer = new IntersectionObserver(callback, options)
    observer.observe(el)
  },
  name: 'intersection',
}
