// Demo lanes: real public YouTube videos (titles via oEmbed). Used only until an API key is added.
const DEMO_LANES = [
 {
  "label": "Hits",
  "items": [
   {
    "id": "dQw4w9WgXcQ",
    "title": "Rick Astley - Never Gonna Give You Up (Official Video) (4K Remaster)",
    "channel": "Rick Astley",
    "duration": 1034,
    "views": 482113,
    "published": "2025-09-12"
   },
   {
    "id": "9bZkp7q19f0",
    "title": "PSY - GANGNAM STYLE(강남스타일) M/V",
    "channel": "officialpsy",
    "duration": 812,
    "views": 301877,
    "published": "2026-02-03"
   },
   {
    "id": "jNQXAC9IVRw",
    "title": "Me at the zoo",
    "channel": "jawed",
    "duration": 1260,
    "views": 96420,
    "published": "2025-06-18"
   },
   {
    "id": "aqz-KE-bpKQ",
    "title": "Big Buck Bunny 60fps 4K - Official Blender Foundation Short Film",
    "channel": "Blender",
    "duration": 644,
    "views": 58210,
    "published": "2026-04-22"
   },
   {
    "id": "kJQP7kiw5Fk",
    "title": "Luis Fonsi - Despacito ft. Daddy Yankee",
    "channel": "LuisFonsiVEVO",
    "duration": 938,
    "views": 221045,
    "published": "2025-11-30"
   },
   {
    "id": "OPf0YbXqDm0",
    "title": "Mark Ronson - Uptown Funk (Official Video) ft. Bruno Mars",
    "channel": "MarkRonsonVEVO",
    "duration": 1187,
    "views": 740590,
    "published": "2026-08-14"
   },
   {
    "id": "fJ9rUzIMcZQ",
    "title": "Queen – Bohemian Rhapsody (Official Video Remastered)",
    "channel": "Queen Official",
    "duration": 1422,
    "views": 133905,
    "published": "2025-03-27"
   },
   {
    "id": "hT_nvWreIhg",
    "title": "OneRepublic - Counting Stars",
    "channel": "OneRepublicVEVO",
    "duration": 511,
    "views": 77802,
    "published": "2026-01-09"
   }
  ]
 },
 {
  "label": "Throwbacks",
  "items": [
   {
    "id": "JGwWNGJdvx8",
    "title": "Ed Sheeran - Shape of You (Official Music Video)",
    "channel": "Ed Sheeran",
    "duration": 1103,
    "views": 412330,
    "published": "2026-05-16"
   },
   {
    "id": "RgKAFK5djSk",
    "title": "Wiz Khalifa - See You Again ft. Charlie Puth [Official Video] Furious 7 Soundtrack",
    "channel": "Wiz Khalifa Music",
    "duration": 1341,
    "views": 189276,
    "published": "2025-10-07"
   },
   {
    "id": "LXb3EKWsInQ",
    "title": "COSTA RICA IN 4K 60fps HDR (ULTRA HD)",
    "channel": "Jacob + Katie Schwarz",
    "duration": 1502,
    "views": 254019,
    "published": "2025-08-21"
   },
   {
    "id": "YQHsXMglC9A",
    "title": "Adele - Hello (Official Music Video)",
    "channel": "Adele",
    "duration": 602,
    "views": 176488,
    "published": "2026-01-28"
   },
   {
    "id": "2Vv-BfVoq4g",
    "title": "Ed Sheeran - Perfect (Official Music Video)",
    "channel": "Ed Sheeran",
    "duration": 1288,
    "views": 96035,
    "published": "2026-06-11"
   },
   {
    "id": "e-ORhEE9VVg",
    "title": "Taylor Swift - Blank Space",
    "channel": "Taylor Swift",
    "duration": 1067,
    "views": 308771,
    "published": "2026-03-05"
   },
   {
    "id": "CevxZvSJLk8",
    "title": "Katy Perry - Roar",
    "channel": "KatyPerryVEVO",
    "duration": 823,
    "views": 64519,
    "published": "2025-12-02"
   },
   {
    "id": "60ItHLz5WEA",
    "title": "Alan Walker - Faded",
    "channel": "Alan Walker",
    "duration": 956,
    "views": 143208,
    "published": "2026-07-19"
   }
  ]
 },
 {
  "label": "Viral",
  "items": [
   {
    "id": "kXYiU_JCYtU",
    "title": "Numb (Official Music Video) [4K UPGRADE] – Linkin Park",
    "channel": "Linkin Park",
    "duration": 418,
    "views": 512880,
    "published": "2025-05-10"
   },
   {
    "id": "pRpeEdMmmQ0",
    "title": "Shakira - Waka Waka (This Time for Africa) (The Official 2010 FIFA World Cup™ Song)",
    "channel": "shakiraVEVO",
    "duration": 690,
    "views": 233410,
    "published": "2026-02-14"
   },
   {
    "id": "ktvTqknDobU",
    "title": "Imagine Dragons - Radioactive",
    "channel": "ImagineDragonsVEVO",
    "duration": 1436,
    "views": 167552,
    "published": "2025-07-29"
   },
   {
    "id": "hTWKbfoikeg",
    "title": "Nirvana - Smells Like Teen Spirit (Official Music Video)",
    "channel": "NirvanaVEVO",
    "duration": 376,
    "views": 88214,
    "published": "2026-04-01"
   },
   {
    "id": "YykjpeuMNEk",
    "title": "Coldplay - Hymn For The Weekend (Official Video)",
    "channel": "Coldplay",
    "duration": 905,
    "views": 129760,
    "published": "2026-09-03"
   },
   {
    "id": "3tmd-ClpJxA",
    "title": "Taylor Swift - Look What You Made Me Do",
    "channel": "Taylor Swift",
    "duration": 1499,
    "views": 402118,
    "published": "2025-11-18"
   },
   {
    "id": "uelHwf8o7_U",
    "title": "Eminem - Love The Way You Lie ft. Rihanna",
    "channel": "EminemVEVO",
    "duration": 732,
    "views": 201066,
    "published": "2026-10-02"
   },
   {
    "id": "fRh_vgS2dFE",
    "title": "Justin Bieber - Sorry (PURPOSE : The Movement)",
    "channel": "JustinBieberVEVO",
    "duration": 289,
    "views": 71945,
    "published": "2026-06-25"
   }
  ]
 },
 {
  "label": "Chill",
  "items": [
   {
    "id": "lp-EO5I60KA",
    "title": "Ed Sheeran - Thinking Out Loud (Official Music Video)",
    "channel": "Ed Sheeran",
    "duration": 634,
    "views": 2104552,
    "published": "2026-05-27"
   },
   {
    "id": "0KSOMA3QBU0",
    "title": "Katy Perry - Dark Horse ft. Juicy J",
    "channel": "KatyPerryVEVO",
    "duration": 548,
    "views": 860311,
    "published": "2026-08-30"
   },
   {
    "id": "SlPhMPnQ58k",
    "title": "Maroon 5 - Memories (Official Video)",
    "channel": "Maroon5VEVO",
    "duration": 1215,
    "views": 327190,
    "published": "2025-12-16"
   },
   {
    "id": "YVkUvmDQ3HY",
    "title": "Eminem - Without Me (Official Music Video)",
    "channel": "EminemVEVO",
    "duration": 1044,
    "views": 1120640,
    "published": "2026-02-22"
   },
   {
    "id": "Zi_XLOBDo_Y",
    "title": "Michael Jackson - Billie Jean (Official Video)",
    "channel": "michaeljacksonVEVO",
    "duration": 401,
    "views": 455903,
    "published": "2025-09-25"
   },
   {
    "id": "nfWlot6h_JM",
    "title": "Taylor Swift - Shake It Off",
    "channel": "Taylor Swift",
    "duration": 477,
    "views": 298014,
    "published": "2026-03-18"
   },
   {
    "id": "UF8uR6Z6KLc",
    "title": "Steve Jobs' 2005 Stanford Commencement Address",
    "channel": "Stanford",
    "duration": 1320,
    "views": 612447,
    "published": "2025-04-08"
   },
   {
    "id": "y6120QOlsfU",
    "title": "Darude - Sandstorm",
    "channel": "Darude",
    "duration": 957,
    "views": 73220,
    "published": "2026-10-12"
   }
  ]
 }
];
