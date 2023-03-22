let TW_TAB_ACTIVE = false;
let TW_NOT_INTERESTED_WORDS = ['no me interesa', 'not interested'];

(async () => {
    // check every 5 seconds if the element is available
    // if it is, return the element and stop checking
    const waitForElm = (selector) => {
        return new Promise((resolve, reject) => {
            const interval = setInterval(() => {
                const elm = document.querySelector(selector);
                if (elm) {
                    clearInterval(interval);
                    resolve(elm);
                }
            }, 200);
        });
    };

    const setTabStatusToBody = activeTab => {
        const body = document.querySelector('body')
        if (body) body.setAttribute('data-shity-btn', activeTab)
    }

    const createShityBtn = (tweet) => {
        if(!tweet) return
        const button = document.createElement('button')
        // add data-atribute to identify the tweet
        tweet.setAttribute('data-tweet', 'setted')
        button.classList.add('shitBtn')
        button.innerHTML = '💩'
        // Add button inside navAction
        const navAction = tweet.querySelector('div[role="group"][id*="id__"]')
        if(navAction) navAction.appendChild(button)
    }

    // wait for the element to be available
    await waitForElm('[role="region"] article');

    // First Load set shitty btn on all tweets loaded
    const tweets = document.querySelectorAll('[role="region"] article')
    tweets.forEach(tweet => createShityBtn(tweet))

    // Interval every 300ms
    const interval = setInterval(() => {
        // Get active tab
        const firstTab = document.querySelector('[role="tablist"] [role="tab"]:nth-child(1)')
        TW_TAB_ACTIVE = firstTab && firstTab.getAttribute('aria-selected') === 'true'
        setTabStatusToBody(TW_TAB_ACTIVE)

        // Get all tweets on the view that don't have the data-tweet attribute
        const newTweets = document.querySelectorAll('[role="region"] article:not([data-tweet])')
        if (newTweets && newTweets.length > 0) newTweets.forEach(tweet => createShityBtn(tweet))
    }, 250)

    // Add listeners to the injected shity button
    document.addEventListener('click', (e) => {
        if (!e.target.classList.contains('shitBtn')) return
        const tweet = e.target.closest('article')

        // Trigger click on dropdown
        const btnDropdown = tweet.querySelector('[aria-haspopup="menu"][role="button"]')
        btnDropdown.click()

        // wait for the dropdown to be available
        setTimeout(() => {
            const dropdown = document.querySelector('[data-testid="Dropdown"]')
            if (!dropdown) return
            const itemsDropdown = dropdown.querySelectorAll('div[role="menuitem"]')
            if (!itemsDropdown.length) return
            itemsDropdown.forEach(item => {
                const word = item.innerText.toLowerCase()
                if (TW_NOT_INTERESTED_WORDS.find(w => word.includes(w))) item.click()
            })
        }, 25)
    })

    // Destroy interval when user leave the page
    window.addEventListener('beforeunload', () => {
        clearInterval(interval)
    })
})();