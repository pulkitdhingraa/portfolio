// Steam-synced games (top 3 by playtime) live in games-generated.json.
// Run `npm run sync:steam` to refresh — also auto-runs on `npm run build`.
import steamData from './games-generated.json'

// Permanent entries (not on Steam — Riot / Epic). Always shown.
const PERMANENT_GAMES = [
  { name: 'Valorant', hours: '1500 hrs', img: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Valorant_logo_-_pink_color_version.svg' },
  { name: 'Fortnite', hours: '316 hrs', img: 'https://www.internetmatters.org/wp-content/uploads/2024/11/Fortnite-game-image.webp' },
]

const FALLBACK_STEAM = [
  { name: 'Deadlock', hours: '230 hrs', img: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1422450/header.jpg' },
  { name: 'Arc Raiders', hours: '58 hrs', img: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1808500/header.jpg' },
]

const parseHours = h => parseInt(String(h).replace(/[^0-9]/g, ''), 10) || 0
const steamGames = steamData?.games?.length ? steamData.games : FALLBACK_STEAM

export const games = [...PERMANENT_GAMES, ...steamGames].sort(
  (a, b) => parseHours(b.hours) - parseHours(a.hours)
)
export const steamTotalGames = steamData?.totalGames ?? null

export const animeRecs = [
  { name: 'Rising Impact', genre: 'Sports \u2022 Netflix', img: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx171115-IApjErPwc7oV.jpg' },
  { name: 'Dusk Maiden of Amnesia', genre: 'Mystery \u2022 Romance', img: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx12445-hKIXQW3vA4iz.jpg' },
  { name: 'Odd Taxi', genre: 'Mystery \u2022 Thriller', img: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx128547-nNekWTKqmvEi.jpg' },
  { name: 'Ishura', genre: 'Action \u2022 Fantasy', img: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx161476-ukTxAPHib1Fg.jpg' },
  { name: 'Grand Blue Dreaming', genre: 'Comedy \u2022 Slice of Life', img: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx100922-uxEhaCsqMMp3.png' },
]

export const music = [
  { name: 'her', artist: 'JVKE', img: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/9c/0c/88/9c0c883c-0901-60a1-8f4b-6a96c36be366/198846140360.jpg/600x600bb.jpg' },
  { name: 'Shelter', artist: 'Porter Robinson', img: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/ff/56/9a/ff569a15-ff9f-307d-3d6c-1415d80bd8c1/653738346720_Cover.jpg/600x600bb.jpg' },
  { name: 'Into Pieces', artist: 'Subtronics', img: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/13/41/13/1341133b-560f-1aee-461f-c4b32ec049b4/cover.jpg/600x600bb.jpg' },
  { name: 'Guitar, Loneliness and Blue Planet', artist: 'Kessoku Band', img: 'https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/51/3b/00/513b003d-5583-4533-168b-f213c245b53f/4534530141828.jpg/600x600bb.jpg' },
  { name: "Fools (Can't Help Falling in Love)", artist: 'Foster & Sody Sarcastic Sounds', img: 'https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/21/c3/55/21c35534-c549-8b34-2959-afc83c745e60/886448841678.jpg/600x600bb.jpg' },
]

export const books = [
  { name: 'Origin', author: 'Dan Brown', img: 'https://covers.openlibrary.org/b/isbn/9780385514231-M.jpg' },
  { name: 'Project Hail Mary', author: 'Andy Weir', img: 'https://covers.openlibrary.org/b/isbn/9780593135204-M.jpg' },
  { name: 'Psycho-Cybernetics', author: 'Maxwell Maltz', img: 'https://covers.openlibrary.org/b/isbn/9780399176135-M.jpg' },
  { name: 'The Obesity Code', author: 'Dr. Jason Fung', img: 'https://covers.openlibrary.org/b/isbn/9781771641258-M.jpg' },
]

// Moodboard images for the left "photography" card.
// Replace any URL with your own (Unsplash, Pinterest, /public/, whatever).
// The first entry renders tall (spans 2 rows).
export const moodboard = [
  'https://i.pinimg.com/736x/12/d2/40/12d240dcf0bc2cc9ebbf4b6e10fcc400.jpg', // lo-fi boy on van under stars (tall)
  'https://i.pinimg.com/736x/0e/16/78/0e1678e301828c44c4fe229786259daf.jpg', // ps controller, anime style
  'https://i.pinimg.com/736x/fd/d1/e6/fdd1e6e4384276e6b0bd2acc45348ae2.jpg', // pixel ramen shop, tokyo
  'https://i.pinimg.com/736x/1f/c9/52/1fc95293c48a402604f782af5c22dd9f.jpg', // retro tech still life
  'https://i.pinimg.com/736x/49/45/63/4945630bcf6afc9d2c4e78db485f7bcb.jpg', // anime couple, sea sunset
]

export const ytChannels = [
  { name: 'MoreSidemen', category: 'Entertainment', img: 'https://unavatar.io/youtube/@MoreSidemen' },
  { name: 'Ryan Trahan', category: 'Entertainment', img: 'https://unavatar.io/youtube/UCnmGIkw-KdI0W5siakKPKog' },
  { name: 'Daily Dose of Internet', category: 'Clips', img: 'https://unavatar.io/youtube/@DailyDoseOfInternet' },
  { name: 'Veritasium', category: 'Science', img: 'https://unavatar.io/youtube/@veritasium' },
  { name: 'Kurzgesagt', category: 'Science', img: 'https://unavatar.io/youtube/UCsXVk37bltHxD1rDPwtNM8Q' },
]

export const personalLinks = {
  steam: 'https://steamcommunity.com/profiles/76561198848372743/',
  mal: 'https://myanimelist.net/profile/300i',
  ytMusic: 'https://music.youtube.com/playlist?list=PLYWOWvoVMUtm6brLKYUf4WRmHZZkkn80E',
  avatar: '/goingmerry.webp',
  gamesAvatar: 'https://pbs.twimg.com/media/G_bH5LKXgAAftCY.jpg',
  animeAvatar: 'https://s4.anilist.co/file/anilistcdn/character/large/b320397-qNDvSRyziKcO.png',
  musicAvatar: 'https://i.pinimg.com/736x/52/87/3f/52873f098bbc0f7d9c30211d904bbbd6.jpg',
}
