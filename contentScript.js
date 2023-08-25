const originalLogo = `<svg 
viewBox="0 0 24 24" 
aria-hidden="true"
class="r-1cvl2hr r-4qtqp9 r-yyyyoo r-16y2uox r-8kz0gk r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp"
fill="#1d9bf0"
style="color: #1d9bf0;"
>
<g>
    <path
        d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
</g>
</svg>`;

const darkModeOriginalLogo = `<svg
viewBox="0 0 24 24"
aria-hidden="true"
class="r-1cvl2hr r-4qtqp9 r-yyyyoo r-16y2uox r-8kz0gk r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp"
fill="#fff"
style="color: #fff;"
>
<g>
    <path
        d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
</g>
</svg>`;

const loadingBirdLogo = `<svg viewBox="0 0 24 24" id="loading-bird-anim-1" aria-hidden="true" class="r-1p0dtai r-13gxpu9 r-4qtqp9 r-yyyyoo r-wy61xf r-1d2f490 r-0 r-ywje51 r-dnmrzs r-u8s1d r-zchlnj r-1plcrui r-ipm5af r-lrvibr r-1blnp2b"><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path><path d="M 10,30 C 190,101 49,9 73,135 h 110 s 103,249 129,153 C 130,202 38,74 189,89 h 255 s 94,190 95,106 C 249,96 164,255 232,177 h 107 s 9,167 67,139 C 103,4 111,166 154,250 h 22 s 217,237 150,38 C 3,1 253,101 25,54 h 173 s 23,206 183,107 C 226,199 65,40 86,236 h 196 s 238,114 235,213 C 116,166 115,50 37,109 h 142 s 247,121 238,130 C 227,196 114,205 89,40 h 61 s 153,36 53,19 C 83,159 118,8 85,245 h 163 s 77,61 140,202 C 86,181 22,146 252,78 h 219 s 71,58 250,81 C 36,168 232,243 15,211 h 185 s 29,2 170,149 C 38,151 85,230 186,206 h 176 s 181,203 149,97 C 52,141 156,27 62,255 h 184 s 69,241 90,52 C 225,253 225,203 233,209 h 231 s 219,83 46,254 C 154,59 58,76 75,137 h 128 s 168,144 234,252 C 178,218 247,218 110,226 h 229 s 112,129 61,200" fill="#1d9bf008"></path></g></svg>`

const faviconUrl = `data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJkSURBVHgB7VZBbtpQEH3zIW0WVYuXVaH4Bs0NSk4AOUFhEarskhMknIDsqkKlcIT0BNAT1D1B3ZJK3dmVuirwp/MhVmzAxiagKBJv9+ePZ97M/JkxsMMODwzChlD84FWQp3MxeCDHAhiumB+MJrr1+8Ryw3p/9+H4DctfIPCq49Xlw8Kv99YlMuB19885gy/i7llziwGfFFWJyR02XzSCuwiBUse7BlFVaz5LS8KQVkRXaXRJsqImfDjKSZBNyzEyFWFKVJ4KFbWLElUao6KbSk8i9TXgTPaorxTskPwOxa7/9baGt4zg8oQbNyfWYJlRU0/KUx9ZwNwYNq1ecFRzl18QpW0bB0Ks//KjV1uwlbuLJA3GxEdh5wb5yGEPl3qMd2xecYQHKnlFlVLX95kxYCFKGg5IlU2a0uLpCM68LEJA+sJ/Dm6Jy3aMjQIRakRUm+UuvfOp/X34iQSejeFo0Hdx4optG5uFH/R+GHNvANcm3VtwLs+Lvy2TRwhIOnrYHhysIuDKcCDwGbYAjglOzQt+HssElF6dvoNNOZeuCSbfSgIGMjILMo4/ExZf7TqghNLmlwm1gpSC2tmaLAZMvWGz0Iu7XpqBm2NrQNN5cD+Y5ZOTdZyok3RZMusZOJUN+QZrQFb0oQkG6xIIYHe8A03Unx/Ryd6jS2ctAsbxmFRVynGKlM5na5ePVkUe0p+h9MmraS2zXqYgmSWjOPtElHbLTVB3Q79gqQlMScxqXpeav0UWiGMmXKSNOpZAAPvKs/U/1MRoxRxl+5WD+psUy2D5IdmRVoWjnqDnLlkyO+zwaPAf1zXwZL751PUAAAAASUVORK5CYII=`;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

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

const setFavicon = () => {
  const favicon = document.querySelector('link[rel="shortcut icon"]');
  if (!favicon) return;

  if (favicon.getAttribute("href") === faviconUrl) return;
  favicon.setAttribute("href", faviconUrl);
};

const setTwitterLogo = () => {
  const locateLogo = document.querySelector(
    'a[aria-label="X"][role="link"] > div'
  ) || document.querySelector(
    'a[aria-label="Twitter"][role="link"] > div'
  );
  if (!locateLogo) return;

  const isDarkMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (isDarkMode && locateLogo.getAttribute("data-logo") !== "dark") {
    locateLogo.innerHTML = darkModeOriginalLogo;
    locateLogo.setAttribute("data-logo", "dark");
  } else if (
    !isDarkMode &&
    locateLogo.getAttribute("data-logo") !== "original"
  ) {
    locateLogo.innerHTML = originalLogo;
    locateLogo.setAttribute("data-logo", "original");
  }
};

const setTitle = () => {
  const title = document.querySelector('head > title');
  if (!title) return;

  if (!title.innerText.endsWith(' / X')) return

  document.querySelector('head > title').innerHTML = title.innerText.replace(' / X', ' / Twitter')
}


const setLoadingScreen = () => {
  const placeholder = document.querySelector('#placeholder')
  if (!placeholder) return

  placeholder.innerHTML = loadingBirdLogo
}

const setMainPostButton = () => {
  const postButton = document.querySelector('a[href="/compose/tweet"]')
  if (!postButton) return

  const text = postButton.querySelector('div > span > div > div > span > span')
  if (!text) return

  text.innerText = 'Tweet'
}

const setTweetPostButton = async () => {
  await waitForElm('[data-testid="tweetButtonInline"]');
  const postButton = document.querySelector('[data-testid="tweetButtonInline"]')

  if (!postButton) return

  if (postButton.getAttribute('data-locate')) return

  const text = postButton.querySelector('div > span > span')
  if (!text) return

  text.innerText = 'Tweet'
  postButton.setAttribute('data-locate', 'true')
}

const setTweetPostModal = async () => {
  const modal = document.querySelector('[aria-labelledby="modal-header"]')
  if (!modal) return

  const modalBtn = modal.querySelector('[data-testid="tweetButton"]')
  if (!modalBtn) return

  if (modalBtn.getAttribute('data-locate')) return

  const text = modalBtn.querySelector('div > span > span')
  if (!text) return

  text.innerText = 'Tweet all'
  modalBtn.setAttribute('data-locate', 'true')
}

const observeTwitterChanges = () => {
  const observer = new MutationObserver((mutations) => {
    setTitle();
    setTwitterLogo()
    setTweetPostButton()
    setTweetPostModal()
  });
  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
  return observer;
}

(async () => {
  setLoadingScreen()
  await waitForElm('a[aria-label="X"][role="link"]');
  setFavicon();
  setTitle();
  setTwitterLogo();
  setMainPostButton()
  setTweetPostButton()
  setTweetPostModal()
  const twitterObserve = observeTwitterChanges();
  window.addEventListener('beforeunload', () => {
    twitterObserve.disconnect();
  });
})();
