export const YOUTUBE_API_URL  = 'https://www.googleapis.com/youtube/v3/search'

export const htmlDecode = (str) => {
  const div = document.createElement('div');
  div.innerHTML = str;
  return div.textContent;
}