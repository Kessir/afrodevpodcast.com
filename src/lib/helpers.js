const TWITTER_INTENT_URL = 'https://twitter.com/intent/tweet';
const FACEBOOK_INTENT_URL = 'https://www.facebook.com/sharer/sharer.php';
const BASE_URL = 'https://afrodevpodcast.com'

export function getTwitterIntent(text, url){
    const arr = [
        ['text', encodeURIComponent(`${text} ${BASE_URL}${url}`)],
        ['via', 'afrodevpodcast'],
    ];

    const query = arr.map((entity) => `${entity[0]}=${entity[1]}`).join('&');
    return `${TWITTER_INTENT_URL}?${query}`;
}

export function getFacebookIntent(text, url){
    const fullPath = `${BASE_URL}${url}`;
    const arr = [
        ['u', encodeURIComponent(fullPath)],
        ['t', encodeURIComponent(text)],
    ];

    const query = arr.map((entity) => `${entity[0]}=${entity[1]}`).join('&');
    return `${FACEBOOK_INTENT_URL}?${query}`;
}

// https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fkessir.github.io%2Ftaxcalculatorgh&t=Compute%20take-home%20income%2C%20income%20tax%20and%20SSNIT