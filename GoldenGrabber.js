// ==UserScript==
// @name        GoldenKai Links grabber
// @namespace   goldenkai.me
// @include     https://goldenkai.me/
// @version     2
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js
// @grant       GM_registerMenuCommand
// ==/UserScript==
this.$ = this.jQuery = jQuery.noConflict(true);
function installGoldenGrabber()
{
  if (0 < $('#GoldenGrabber_main').length)
  {
    return;
  }
  var parentNode = $('.home__content');
  var mainElement = $('<div/>').attr('id', 'GoldenGrabber_main');
  parentNode.prepend(mainElement);
  mainElement.append($('<div/>').text('Links:').css({
    '-webkit-user-select': 'none',
    '-moz-user-select': 'none',
    '-ms-user-select': 'none',
    'user-select': 'none'
  }));
}
function addDate(dateString)
{
  $('#GoldenGrabber_main').append($('<div/>').addClass('anime_episode_date').text(dateString).css({
    '-webkit-user-select': 'none',
    '-moz-user-select': 'none',
    '-ms-user-select': 'none',
    'user-select': 'none'
  }));
}
function addLink(link, animeName, episodeNumber)
{
  var children = $('#GoldenGrabber_main >');
  var ulElement = null;
  if (0 < children.length && 'UL' == children.last().prop('tagName'))
  {
    ulElement = children.last();
  }
  else
  {
    ulElement = $('<ul/>');
    $('#GoldenGrabber_main').append(ulElement);
  }
  var liElement = $('<li/>');
  ulElement.append(liElement);
  if (animeName)
  {
    liElement.append($('<span/>').text('[' + animeName + ']'));
  }
  if (episodeNumber)
  {
    liElement.append($('<span/>').text('[' + episodeNumber + ']'));
  }
  if (link)
  {
    liElement.append($('<a/>').attr({
      'href': link
    }).text(link));
  }
}
function grabLinks()
{
  installGoldenGrabber();
  $('.releases__day:visible').each(function (index, element) {
    addDate($(this).text());
    $(this).next('.releases__wrapper:visible').children('.release__block:visible').each(function (index, element) {
      var link = $(this).find('a').attr('href');
      var animeName = $(this).find('.release__name__anime').text();
      var episodeNumber = $(this).find('.release__name__number').text()
      addLink(link, animeName, episodeNumber);
    });
  });
}
function resetLinks() {
  $('#GoldenGrabber_main').remove();
  installGoldenGrabber();
}

if (typeof GM_registerMenuCommand !== 'undefined')
{
	GM_registerMenuCommand('Grab Links', grabLinks);
	GM_registerMenuCommand('Reset Links', resetLinks);
}
else
{
  /*
  Called when the item has been created, or when creation failed due to an error.
  We'll just log success/failure here.
  */
  function onCreated() {
    if (browser.runtime.lastError) {
      console.log(`Error: ${browser.runtime.lastError}`);
    } else {
      console.log("Item created successfully");
    }
  }

  /*
  Create all the context menu items.
  */
  browser.menus.create({
    id: "grab-links",
    title: 'Grab Links',
    contexts: ["all"]
  }, onCreated);
  browser.menus.create({
    id: "reset-links",
    title: 'Reset Links',
    contexts: ["all"]
  }, onCreated);

  /*
  The click event listener, where we perform the appropriate action given the
  ID of the menu item that was clicked.
  */
  browser.menus.onClicked.addListener((info, tab) => {
    switch (info.menuItemId) {
      case "grab-links":
        console.log(info.selectionText);
        grabLinks();
        break;
      case "reset-links":
        console.log(info.selectionText);
        resetLinks();
        break;
    }
  });
}