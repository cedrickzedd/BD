/**
 * @name BetterMembersList
 * @description Members List but Better
 * @author Cedrick
 * @version 1.2
 */

module.exports = class BetterMembersList{
    observer (changes) {    
        if (document.querySelector('.members-3WRCEx')) {
            document.querySelector('.chat-2ZfjoI').classList.add('vis')
        } else {
            if (document.querySelector('.chat-2ZfjoI.vis')) {
                document.querySelector('.chat-2ZfjoI').classList.remove('vis')
            }
        }
    };

    start() {
        const css = `
.container-2o3qEW{background:transparent;width:0px}
.membersGroup-2eiWxl{display: none;}
.membersWrap-2h-GB4{
    min-width: unset;
}
.members-3WRCEx{
    right: -2px;
    top:24px;
    position:fixed;
    max-width: 65px;
    min-width: 65px;
    border-radius:10px;
    height:98%;
    padding:1px;
}
.members-3WRCEx, .members-3WRCEx>div{background-color:var(--background-tetriary);}
.chat-2ZfjoI.vis{margin-right: 60px;border-radius:0px 10px 0px 0px}
.chat-2ZfjoI:not(.vis){margin-right:10px;border-radius:0px 10px 0px 0px}
        `
        BdApi.injectCSS(
            "BetterMembersList",css
        );
    };
    stop() {document.querySelector('style#BetterMembersList').remove()};
}





//Thanks to DoggyBootsy for helping me figure out how to make this plugin

