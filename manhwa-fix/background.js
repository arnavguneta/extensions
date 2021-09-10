chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {
        if (tab.url.includes("solomanhwa.com/manga")) {
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                function: modifyPage,
            });
        }
    }
})



function modifyPage() {
    console.log('yoyo')
    for (div of document.querySelectorAll(".code-block")) {
        div.parentNode.removeChild(div)
    }
    document.querySelector(".navbar").remove()
    for (frame of document.querySelectorAll("iframe")) {
        frame.remove()
    }
    // console.log(document.lastChild.removeChild(document.lastChild.lastChild))
    for (img of document.querySelectorAll("img")) {
        img.style.marginBottom = "0px"
    }
    for (p of document.querySelectorAll("p")) {
        p.style.marginBottom = "0px"
        p.style.lineHeight = "0px"
    }
    document.title = "Solo Leveling"

}