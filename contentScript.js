let TW_TAB_ACTIVE = '';
let TW_TAB_ACTIVE_WORDS = ['para-ti'];

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

    const setTabStatusToBody = activeTab => {
        const body = document.querySelector('body')
        if (body) {
            body.setAttribute('data-shity-btn', activeTab)
        }
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

    // // cookies
    // const cookiesRaw = `; ${document.cookie}`;
    // const cookies = cookiesRaw.split(`; `).filter(c => c).reduce((acc, val) => {
    //     const key = val.split('=')[0]
    //     const value = val.split(`${key}=`)[1]

    //     acc[key] = value

    //     return acc
    // }, {})

    // Get Scripts
    /*
    const scripts = document.querySelectorAll('script[type="text/javascript"]:not([src])')
    let contentScripts = null
    if (scripts) {
        scripts.forEach(script => {
            if (script.innerText.includes('window.__INITIAL_STATE__') && script.innerText.includes('window.__META_DATA__')) {
                contentScripts = script.innerText.split('};').filter(e => e).reduce((acc, value) => {
                    const key = value.split('=')[0].replaceAll('window.', '')
                    const content = value.split('=')[1] + '}'

                    acc[key] = JSON.parse(content)

                    return acc
                }, {})
            }
        })
    }
    */

    // Add element on [role="navigation"]
    const menu = document.querySelector('[role="navigation"]')
    if (menu) {
        const buttonMenu = document.createElement('button')
        buttonMenu.classList.add('extensionConfigBtn')
        buttonMenu.innerHTML = '<span class="icon">💩</span><span class="text">Extension config</span>'
        menu.appendChild(buttonMenu)
    }

    // Add Modal
    const body = document.querySelector('body')
    if (body) {
        body.setAttribute('data-extension-config', false)
        const modalDiv = document.createElement('div')
        modalDiv.classList.add('extensionModal')
        modalDiv.innerHTML = `<div class="modalCard">
            <header>
                <h3>Extension Config</h3>
                <button class="closeExtensionModal">
                    <svg class="closeIcon" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" viewBox="0 0 320.591 320.591" style="enable-background: new 0 0 512 512" xml:space="preserve"><path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"></path><path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"></path></svg>
                </button>
            </header>
            <div class="modalContent">
                <div class="disclaimer">
                Lorem Ipsum
                </div>
                <div class="actions">actions</div>
            </div>
            <div class="modalFooter">
                <p class="made">Made with Love by #TOP and José</p>
            </div>
        </div>`
        body.appendChild(modalDiv)
    }

    // get all tweets on the view
    const tweets = document.querySelectorAll('[role="region"] article')

    // Add shit emoji button in every tweet
    tweets.forEach(tweet => createShityBtn(tweet))

    // every second check if are new tweets
    const interval = setInterval(() => {
        TW_TAB_ACTIVE = document.querySelector('[role="tablist"] [role="tab"][aria-selected="true"]').innerText.toLowerCase().split(' ').join('-')

        setTabStatusToBody(TW_TAB_ACTIVE_WORDS.includes(TW_TAB_ACTIVE))
        // get all tweets on the view that don't have the data-tweet attribute
        const newTweets = document.querySelectorAll('[role="region"] article:not([data-tweet])')
        if(newTweets.length === 0) return
        newTweets.forEach(tweet => createShityBtn(tweet))
    }, 300)

    // add listener to the button
    document.addEventListener('click', (e) => {
        if (!e.target.classList.contains('shitBtn')) return
        const tweet = e.target.closest('article')
        const btnDropdown = tweet.querySelector('[aria-haspopup="menu"][role="button"]')
        btnDropdown.click()

        setTimeout(() => {
            const dropdown = document.querySelector('[data-testid="Dropdown"]')
            if (!dropdown) return
            const itemsDropdown = dropdown.querySelectorAll('div[role="menuitem"]')
            if (!itemsDropdown.length) return
            itemsDropdown.forEach(item => {
                if (item.innerText.toLowerCase().includes('no me interesa')) item.click()
            })
        }, 25)
    })

    const extensionConfigBtn = document.querySelector('.extensionConfigBtn')
    if (extensionConfigBtn) {
        extensionConfigBtn.addEventListener('click', () => {
            const body = document.querySelector('body')
            body.setAttribute('data-extension-config', true)
        })
    }

    const extensionModal = document.querySelector('.extensionModal')
    if (extensionModal) {
        extensionModal.querySelector('button.closeExtensionModal').addEventListener('click', () => {
            const body = document.querySelector('body')
            body.setAttribute('data-extension-config', false)
        })
    }

    // destroy interval when user leave the page
    window.addEventListener('beforeunload', () => {
        clearInterval(interval)
    })
})();