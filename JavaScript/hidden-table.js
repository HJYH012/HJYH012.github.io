let lastScroll = 0;
const navbar = document.getElementById('header');
const scrollThreshold = 0; // 滚动阈值
window.addEventListener('scroll',function()
{
      const currentScroll=window.pageYOffset||document.documentElement.scrollTop;
      // 向下滚动且超过阈值时隐藏
      if (currentScroll > lastScroll && currentScroll>scrollThreshold)
      {
        navbar.classList.add('hidden');
      } 
      // 向上滚动或接近顶部时显示
      else if (currentScroll < lastScroll || currentScroll<=scrollThreshold)
      {
        navbar.classList.remove('hidden');
      }
      lastScroll = currentScroll;
});
