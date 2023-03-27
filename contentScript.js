let TW_NOT_INTERESTED_WORDS = [
    'no me interesa',
    'not interested',
    'nicht interessiert',
    "ne m'intéresse pas",
    'não tenho interesse',
    'non mi interessa',
    'nie interesuje',
    ' interes',
    ' intéresse'
];

const sleep = ms => new Promise(r => setTimeout(r, ms));

const waitForElm = (selector) => {
    return new Promise((resolve, reject) => {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                const elm = mutation.target.querySelector(selector);
                if (elm) {
                    observer.disconnect();
                    resolve(elm);
                }
            });
        });
        observer.observe(document.body, {
            childList: true,
            subtree: true,
        });
    });
};

const getActiveTab = () => {
    const firstTab = document.querySelector('[role="tablist"] [role="tab"]:nth-child(1)');
    return firstTab && firstTab.getAttribute('aria-selected') === 'true';
};

const setTabStatusToBody = (activeTab = false) => {
    const body = document.querySelector('body')
    if (body) body.setAttribute('data-shity-btn', activeTab)
}

const createShityBtn = (tweet) => {
    if (!tweet || tweet.querySelector('.shitBtn')) return;
    if (document.URL !== 'https://twitter.com/home') return;

    const button = document.createElement('button');
    tweet.setAttribute('data-shit', 'shiteable');
    button.classList.add('shitBtn');
    button.innerHTML = '💩';

    const navAction = tweet.querySelector('div[role="group"][id*="id__"]');
    if (navAction) navAction.appendChild(button);
}

const handleShityBtnClick = async (e) => {
    const tweet = e.target.closest('article');
    const btnDropdown = tweet.querySelector('[aria-haspopup="menu"][role="button"][data-testid="caret"]');
    btnDropdown.click();

    setTimeout(() => {
        const dropdown = document.querySelector('[data-testid="Dropdown"]');
        if (!dropdown) return;

        const itemsDropdown = dropdown.querySelectorAll('div[role="menuitem"]');
        if (!itemsDropdown.length) return;
        itemsDropdown.forEach(item => {
            const word = item.innerText.toLowerCase();
            if (TW_NOT_INTERESTED_WORDS.find(w => word.includes(w))) item.click();
        });
    }, 25);

    await sleep(25);
    btnDropdown.click();
}

const addBtnToTweets = () => {
    const tweets = document.querySelectorAll('[role="region"] article:not([data-shit])');
    if (tweets && tweets.length > 0) tweets.forEach(tweet => createShityBtn(tweet));
}

const observeTweets = () => {
    const observer = new MutationObserver((mutations) => {
        const activeTabStatus = getActiveTab();
        setTabStatusToBody(activeTabStatus);
        mutations.forEach(() => addBtnToTweets());
    });
    observer.observe(document.body, {
        childList: true,
        subtree: true,
    });
    return observer;
}

(async () => {
    await waitForElm('[role="region"] article');
    const activeTabStatus = getActiveTab();
    setTabStatusToBody(activeTabStatus);

    addBtnToTweets();
    const tweetsObserver = observeTweets();

    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('shitBtn')) handleShityBtnClick(e);
    })

    window.addEventListener('beforeunload', () => {
        tweetsObserver.disconnect();
    });
})();
