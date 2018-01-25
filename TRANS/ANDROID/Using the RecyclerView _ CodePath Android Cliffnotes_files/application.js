// Put your application scripts here


$(function(){ // document ready
  // Language in tabs
  MultiLanguageTabs.init();
  // Sidebar Sticky
  var sidebarEl = $(".markdown-toc");
  if (!!$(sidebarEl).offset()) {
    // Calculate right at load
    StickySideBar.resize(sidebarEl);
    sidebarEl.fadeIn();
    // Re-adjust on scroll
    $(window).scroll(function(){
      StickySideBar.adjust(sidebarEl);
    });
    // Re-adjust on resize
    $(window).resize(function(){
      sidebarEl.removeAttr("style");
      // Move sidebar based on resized window
      StickySideBar.adjust(sidebarEl);
    });
  }

  // Smooth Scroll
  $(document).on('click', 'a[href^="#"]', function(e) {
    if ($(this).data("toggle")) return;
    e.preventDefault();
    SmoothScroll.toTarget(this.hash);
  });

  // Anchor Links
  $(document).on('click', "h2, h3, h4", function(e) {
    var anchor = $(this).find("a");
    if (anchor.length == 0) { return; }
    SmoothScroll.toTarget(anchor.attr("href"));
  });
}); // onready end

// Smooth scrolling
// SmoothScroll.toTarget("some-hash");
SmoothScroll = {
  toTarget : function(target) {
    var scrollOffset = 8;
    var sidebarEl = $(".markdown-toc");
    $target = $(target);
    var currentOffset = $(window).scrollTop();
    var targetOffset = $target.offset().top - scrollOffset;
    if (Math.abs(currentOffset - targetOffset) < 10) { return false; }
    $('html, body').stop().animate({
        'scrollTop': targetOffset
    }, 900, 'swing', function () {
        window.location.hash = target;
    });
  }
};


// Stick sidebar to edge
StickySideBar = {
  // Resize height of table of contents
  resize : function(sidebarEl) {
    sidebarEl.css("max-height", $(window).height() - 150);
  },
  // Adjust position of sidebar
  adjust : function(sidebarEl) {
    // Update max height based on screen height
    StickySideBar.resize(sidebarEl);
    // Move the toc to the top of viewport
    var windowTop = $(window).scrollTop() - $(".header").height();
    var topPos = Math.max(windowTop, 0) + $(".header").height() + 30;
    // Force TOC to absolute position fixed to calculated location
    sidebarEl.absolutize().css({ position: 'absolute', top:  topPos }, 600);
  }
};

/* Add tabs for consecutive multi language code blocks */
MultiLanguageTabs = {
  init : function() {
    var langs = [];
    var blocks = {};
    var blockCount = 0;
    $("pre.highlight[data-lang]").each(function() {
      var nextSibling = $(this)[0].nextSibling;
      var lang = $(this).data("lang");
      langs.push(lang);
      var hasAdjacentTextNode = nextSibling.nodeName == "#text" && nextSibling.length > 5;
      if ($(this).next().is( "pre.highlight") && !hasAdjacentTextNode) {
        blocks[lang] = $(this);
      } else {
        if (langs.length > 1) {
          blocks[lang] = $(this);
          MultiLanguageTabs.convertToTabs(langs, blocks, blockCount);
        }
        langs = []; // reset langs
        blocks = {}; // reset blocks
        blockCount += 1; // increment blocks count
      }
    });
  },
  convertToTabs : function(langs, blocks, blockCount) {
    // Creating the tabs themselves
    var tabsHtml = $('<ul class="nav nav-tabs"></ul>');
    $(langs).each(function(ind) {
      var className = '';
      if (ind == 0) { className = 'class="active"'; }
      tabsHtml.append('<li ' + className + '><a href="#block-' + blockCount + '-' + this.toLowerCase() + '" data-toggle="tab">' + this + '</a></li>');
    });
    var firstBlock = blocks[langs[0]];
    firstBlock.before(tabsHtml);
    // Creating the containers
    var containerHtml = $('<div class="tab-content">');
    firstBlock.before(containerHtml);
    $(langs).each(function(ind) {
      var block = blocks[this];
      var className = '';
      if (ind == 0) { className = 'active'; }
      block.wrap('<div class="tab-pane ' + className + '" id="block-' + blockCount + '-' + this.toLowerCase() + '"></div>').
        closest("div.tab-pane").appendTo(containerHtml);
    });
  }
};
