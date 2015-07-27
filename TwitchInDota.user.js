// ==UserScript==
// @name       TwitchInDota
// @namespace  https://github.com/ShunyFR/TwitchInDota/
// @version    1.0
// @author     Shuny
// @description  Replace Dota 2 default chatrooms with their Twitch counterpart.
// @match      http://www.dota2.com/watch/76561198198486997
// @match      http://www.dota2.com/watch/76561198207546029
// @match      http://www.dota2.com/watch/76561198239691668
// @copyright  2015+, Shuny
// ==/UserScript==

function createTwitchChatLink(twitchUser)
{
    return "http://www.twitch.tv/" + twitchUser + "/chat";
}

function getCurrentStreamId()
{
    return window.location.href.split(/[\/]+/).pop();
}

var streamIdToChatArray = {
    "76561198198486997" : "dota2ti",
    "76561198239691668" : "dota2ti_2",
    "76561198207546029" : "dota2ti_3"
};

var chatIframe = document.getElementById('Chat');
if (chatIframe !== null)
{
    var twitchChatToDisplay = streamIdToChatArray[getCurrentStreamId()];
    chatIframe.src = createTwitchChatLink(twitchChatToDisplay);
}