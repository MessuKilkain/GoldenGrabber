// ==UserScript==
// @name        GoldenKai Links grabber full anime series
// @namespace   goldenkai.me
// @include     /^https:\/\/goldenkai\.me\/anime\/[0-9]+\/.*$/
// @version     1
// @grant       GM_registerMenuCommand
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.2.1/jquery.min.js
// ==/UserScript==
this.$ = this.jQuery = jQuery.noConflict(true);
function installGoldenGrabber()
{
  if (0 < $('#GoldenGrabber_main').length)
  {
    return;
  }
  var parentNode = $('#tab-episodes');
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
  var animeTitle = $(".anime-title").text();
  $('.anime-episode').each(function (index, element) {
      var link = $(this).parent('a').attr('href');
      var episodeTitle = $(this).find('.anime-episode-title').text();
      var regex = new RegExp("[0-9]+$");
      var episodeNumber = regex.exec(episodeTitle);
      console.log("episodeNumber : "+episodeNumber);
      addLink(link, animeTitle, episodeNumber);
  });
}
function resetLinks() {
  $('#GoldenGrabber_main').remove();
  installGoldenGrabber();
}
GM_registerMenuCommand('Grab Links', grabLinks);
GM_registerMenuCommand('Reset Links', resetLinks);
