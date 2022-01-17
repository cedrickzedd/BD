/**
 * @name BetterMembersList
 * @description Members List but Better
 * @author Cedrick
 * @version 1.1
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
.content-1jQy2l{flex-direction:row-reverse;}
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
.chat-2ZfjoI.vis{margin-right: 60px;border-top-right-radius:20px;border-bottom-right-radius:20px;}
        `
        BdApi.injectCSS(
            "BetterMembersList",css
        );
    };
    stop() {document.querySelector('style#BetterMembersList').remove()};
}





//Thanks to DoggyBootsy for helping me figure out how to make this plugin
