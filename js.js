function playVideo(event) {
    event.preventDefault();
  var iframe = document.createElement("iframe");
  iframe.width = "495";
  iframe.height = "335";
  iframe.src = "https://www.youtube.com/embed/DXTPjzFYs4k?autoplay=1";
  iframe.title = "YouTube video player";
  iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  iframe.allowfullscreen = true;
  document.querySelector(".business-plan a").replaceWith(iframe);
}
