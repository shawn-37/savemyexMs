chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: resetSMELimit
    });
});

function resetSMELimit() {
    try {
        localStorage.removeItem("SME.revision-note-views");
        alert("Save My Exams revision note limit reset! Refresh the page.");
    } catch (e) {
        alert("Error resetting the limit.");
    }
}
