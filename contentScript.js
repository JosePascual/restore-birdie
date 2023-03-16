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
            }, 500);
        });
    };

    console.log('pepete')

    // wait for the element to be available
    await waitForElm('[role="region"] article');

    // get all tweets on the view

    const tweets = document.querySelectorAll('[role="region"] article')

    // Add shit emoji button in every tweet
    tweets.forEach(tweet => {
        if(!tweet) return
        const button = document.createElement('button')
        // add data-atribute to identify the tweet
        tweet.setAttribute('data-tweet', 'setted')
        button.innerHTML = '💩'
        button.style = 'background-color: transparent; border: none; cursor: pointer; font-size: 20px; margin-left: 10px;'
        // Add button inside navAction
        const navAction = tweet.querySelector('div[role="group"][id*="id__"]')
        if(navAction) navAction.appendChild(button)
    })

    // every second check if are new tweets

    const interval = setInterval(() => {
        // get all tweets on the view that don't have the data-tweet attribute
        const newTweets = document.querySelectorAll('[role="region"] article:not([data-tweet])')
        if(newTweets.length === 0) return
        newTweets.forEach(tweet => {
            if(!tweet) return
            const button = document.createElement('button')
            // add data-atribute to identify the tweet
            tweet.setAttribute('data-tweet', 'setted')
            button.innerHTML = '💩'
            button.style = 'background-color: transparent; border: none; cursor: pointer; font-size: 20px; margin-left: 10px;'
            // Add button inside navAction
            const navAction = tweet.querySelector('div[role="group"][id*="id__"]')
            if(navAction) navAction.appendChild(button)
        })
    }, 300)

    // add listener to the button
    document.addEventListener('click', (e) => {
        if(e.target.innerHTML === '💩') {
            const tweet = e.target.closest('article')
            const btnDropdown = tweet.querySelector('[aria-haspopup="menu"][role="button"]')
            btnDropdown.click()

            // sleep 1 second to wait the dropdown to be available
            setTimeout(() => {
                const dropdown = document.querySelector('[data-testid="Dropdown"]')
                if(!dropdown) return
                const itemsDropdown = dropdown.querySelectorAll('div[role="menuitem"]')
                if(!itemsDropdown.length) return
                itemsDropdown.forEach(item => {
                    console.log(item.innerText)
                    if(item.innerText.includes('No me interesa')) item.click()
                })
            }, 100)
            
            
        }
    })

    // destroy interval when user leave the page
    window.addEventListener('beforeunload', () => {
        clearInterval(interval)
    })

    console.log('pacote')
})()