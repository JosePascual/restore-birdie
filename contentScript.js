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

const birdHouseLogoActive = `<svg width="26.5" height="24" viewBox="0 0 61 55" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 19.5695L30.1642 0.219574L30.1783 0.240082L30.1924 0.219574L60.3566 19.5695L56.9258 24.5692L54 22.6923V50C54 52.7614 51.7614 55 49 55H12C9.23859 55 7 52.7614 7 50V22.2796L3.43085 24.5692L0 19.5695ZM30 21C24.4772 21 20 25.4771 20 31C20 36.5229 24.4772 41 30 41H31C36.5228 41 41 36.5229 41 31C41 25.4771 36.5228 21 31 21H30Z" fill="#0F1419"/></svg>`
const birdHouseLogoActiveDark = `<svg width="26.5" height="24" viewBox="0 0 61 55" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 19.5695L30.1642 0.219574L30.1783 0.240082L30.1924 0.219574L60.3566 19.5695L56.9258 24.5692L54 22.6923V50C54 52.7614 51.7614 55 49 55H12C9.23859 55 7 52.7614 7 50V22.2796L3.43085 24.5692L0 19.5695ZM30 21C24.4772 21 20 25.4771 20 31C20 36.5229 24.4772 41 30 41H31C36.5228 41 41 36.5229 41 31C41 25.4771 36.5228 21 31 21H30Z" fill="#0F1419"/></svg>`

const birdHouseLogo = `<svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.0203 1.16035L1.89418 8.29759C1.18154 8.75474 0.988236 9.71074 1.46729 10.4089L2.21642 11.5005C2.55284 11.9908 3.13034 12.22 3.68344 12.1344V21.0833C3.68344 22.6941 4.98931 24 6.60018 24H20.7841C22.395 24 23.7008 22.6941 23.7008 21.0833V12.1607C24.1678 12.1572 24.6248 11.9325 24.9081 11.5197L25.6703 10.4089C26.1494 9.71074 25.9561 8.75474 25.2434 8.29759L14.1174 1.16035C13.9483 1.05194 13.7588 1.00048 13.5715 1.00134C13.3827 0.999427 13.1911 1.05074 13.0203 1.16035ZM13.0238 1.16585C13.0533 1.14656 13.0836 1.129 13.1146 1.11318C13.0836 1.12916 13.0533 1.14681 13.024 1.1661C12.9177 1.23587 12.823 1.32707 12.7469 1.43828C12.8242 1.32535 12.9187 1.23457 13.0238 1.16585ZM14.1027 1.15908C14.1064 1.1614 14.11 1.16375 14.1137 1.16612C14.2185 1.23457 14.3127 1.32476 14.3896 1.43659C14.3137 1.32625 14.2195 1.23561 14.1136 1.16614C14.11 1.16376 14.1064 1.16141 14.1027 1.15908ZM10.667 13.7996C10.667 12.2347 11.9356 10.9661 13.5005 10.9661H13.8838C15.4487 10.9661 16.7173 12.2347 16.7173 13.7996C16.7173 15.3645 15.4487 16.6331 13.8838 16.6331H13.5005C11.9356 16.6331 10.667 15.3645 10.667 13.7996Z" stroke="black" stroke-width="2"/>`
const birdHouseLogoDark = `<svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.0203 1.16035L1.89418 8.29759C1.18154 8.75474 0.988236 9.71074 1.46729 10.4089L2.21642 11.5005C2.55284 11.9908 3.13034 12.22 3.68344 12.1344V21.0833C3.68344 22.6941 4.98931 24 6.60018 24H20.7841C22.395 24 23.7008 22.6941 23.7008 21.0833V12.1607C24.1678 12.1572 24.6248 11.9325 24.9081 11.5197L25.6703 10.4089C26.1494 9.71074 25.9561 8.75474 25.2434 8.29759L14.1174 1.16035C13.9483 1.05194 13.7588 1.00048 13.5715 1.00134C13.3827 0.999427 13.1911 1.05074 13.0203 1.16035ZM13.0238 1.16585C13.0533 1.14656 13.0836 1.129 13.1146 1.11318C13.0836 1.12916 13.0533 1.14681 13.024 1.1661C12.9177 1.23587 12.823 1.32707 12.7469 1.43828C12.8242 1.32535 12.9187 1.23457 13.0238 1.16585ZM14.1027 1.15908C14.1064 1.1614 14.11 1.16375 14.1137 1.16612C14.2185 1.23457 14.3127 1.32476 14.3896 1.43659C14.3137 1.32625 14.2195 1.23561 14.1136 1.16614C14.11 1.16376 14.1064 1.16141 14.1027 1.15908ZM10.667 13.7996C10.667 12.2347 11.9356 10.9661 13.5005 10.9661H13.8838C15.4487 10.9661 16.7173 12.2347 16.7173 13.7996C16.7173 15.3645 15.4487 16.6331 13.8838 16.6331H13.5005C11.9356 16.6331 10.667 15.3645 10.667 13.7996Z" stroke="black" stroke-width="2"/>`

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

const setHouseBirdLogo = () => {
  const locateLogo = document.querySelector('[data-testid="AppTabBar_Home_Link"] > div > div');
  if (!locateLogo) return;

  // problem with memory
  /* const active = window.location.pathname.endsWith('/home')
  const isDarkMode = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  locateLogo.innerHTML = active ? birdHouseLogoActive : birdHouseLogo; */

  /* if (isDarkMode && locateLogo.getAttribute("data-logo") !== "dark") {
    locateLogo.innerHTML = active ? birdHouseLogoActiveDark : birdHouseLogoDark;
    locateLogo.setAttribute("data-logo", "dark");
  } else if (!isDarkMode && locateLogo.getAttribute("data-logo") !== "original") {
    locateLogo.innerHTML = active ? birdHouseLogoActive : birdHouseLogo;
    locateLogo.setAttribute("data-logo", "original");
  } */
}

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
  const postButton = document.querySelector('[data-testid="SideNav_NewTweet_Button"]')
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
    // setHouseBirdLogo()
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
  // setHouseBirdLogo()
  setMainPostButton()
  setTweetPostButton()
  setTweetPostModal()
  const twitterObserve = observeTwitterChanges();
  window.addEventListener('beforeunload', () => {
    twitterObserve.disconnect();
  });
})();
