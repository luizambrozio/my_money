const TAB_SELECTED = 'TAB_SELECTED';

export function selectTab(tabId) {
    return {
        type: TAB_SELECTED,
        payload: tabId
    }
}

const TAB_SHOWED = 'TAB_SHOWED';

export function showTabs(...tabIds) {
    const tabsToShow = {}
    tabIds.forEach(e => tabsToShow[e] = true)
    return {
        type: TAB_SHOWED,
        payload: tabsToShow        
    }
}