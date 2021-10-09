/**
 * @name BetterMembersList
 * @description Members List but Better
 * @author Cedrick
 * @version 1
 */

module.exports = class BetterMembersList{
    observer (changes) {    
        if (document.querySelector('.members-1998pB')) {
            document.querySelector('.chat-3bRxxu').classList.add('vis')
        } else {
            if (document.querySelector('.chat-3bRxxu.vis')) {
                document.querySelector('.chat-3bRxxu').classList.remove('vis')
            }
        }
    };

    start() {
        const css = `
.content-yTz4x3{flex-direction:row-reverse;}
.membersGroup-v9BXpm{display: none;}
.membersWrap-2h-GB4{
    min-width: unset;
}
.members-1998pB{
    right: -2px;
    top:24px;
    position:fixed;
    max-width: 65px;
    min-width: 65px;
    border-radius:10px;
    height:98%;
    padding:1px;
}
.members-1998pB, .members-1998pB>div{background-color:var(--background-tetriary);}
.chat-3bRxxu.vis{margin-right: 60px;border-top-right-radius:20px;border-bottom-right-radius:20px;}
        `
        BdApi.injectCSS(
            "BetterMembersList",css
        );
    };
    stop() {document.querySelector('style#BetterMembersList').remove()};
}





//Thanks to DoggyBootsy for helping me figure out how to make this plugin
