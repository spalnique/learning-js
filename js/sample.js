// const sample = {
//   id: 'tt19465630',
//   productionStatus: {
//     currentProductionStage: {
//       id: 'released',
//       text: 'Released',
//       __typename: 'ProductionStage',
//     },
//     productionStatusHistory: [
//       {
//         status: {
//           id: 'released',
//           text: 'Released',
//           __typename: 'ProductionStatus',
//         },
//         __typename: 'ProductionStatusHistory',
//       },
//     ],
//     restriction: null,
//     __typename: 'ProductionStatusDetails',
//   },
//   canHaveEpisodes: false,
//   series: null,
//   titleText: { text: 'Sniper. The White Raven', __typename: 'TitleText' },
//   titleType: { id: 'movie', canHaveEpisodes: false, __typename: 'TitleType' },
//   originalTitleText: {
//     text: 'Sniper. The White Raven',
//     __typename: 'TitleText',
//   },
//   certificate: { rating: 'R', __typename: 'Certificate' },
//   releaseYear: { year: 2022, __typename: 'YearRange' },
//   releaseDate: {
//     day: 24,
//     month: 8,
//     year: 2022,
//     country: {
//       id: 'UA',
//       text: 'Ukraine',
//       __typename: 'LocalizedDisplayableCountry',
//     },
//     __typename: 'ReleaseDate',
//   },
//   runtime: { seconds: 6660, __typename: 'Runtime' },
//   canRate: { isRatable: true, __typename: 'CanRate' },
//   ratingsSummary: { topRanking: null, __typename: 'RatingsSummary' },
//   meterRanking: {
//     currentRank: 2519,
//     rankChange: {
//       changeDirection: 'UP',
//       difference: 1534,
//       __typename: 'MeterRankChange',
//     },
//     __typename: 'TitleMeterRanking',
//   },
//   primaryImage: { id: 'rm1439244033', __typename: 'Image' },
//   images: {
//     total: 7,
//     edges: [
//       {
//         node: { id: 'rm2361990913', __typename: 'Image' },
//         __typename: 'ImageEdge',
//       },
//     ],
//     __typename: 'ImageConnection',
//   },
//   videos: { total: 3, __typename: 'TitleRelatedVideosConnection' },
//   primaryVideos: {
//     edges: [
//       {
//         node: {
//           id: 'vi787071513',
//           createdDate: '2022-06-06T17:09:03.553Z',
//           isMature: false,
//           runtime: { value: 129, __typename: 'VideoRuntime' },
//           name: {
//             value: 'Official Trailer',
//             language: 'uk',
//             __typename: 'LocalizedString',
//           },
//           description: {
//             value:
//               'After suffering a tragedy at the hand of invading soldiers in Donbas, an Ukrainian physics teacher seeks revenge. He sets his sights on an elite Russian sniper whose elimination could change the tide of the conflict.',
//             language: 'uk',
//             __typename: 'LocalizedString',
//           },
//           timedTextTracks: [],
//           recommendedTimedTextTrack: null,
//           thumbnail: {
//             url: 'https://m.media-amazon.com/images/M/MV5BMjYyNDMwN2MtNTAyZS00NDBkLWI5ZTktMzA3ZGU5NDRlMWY4XkEyXkFqcGdeQWRpZWdtb25n._V1_.jpg',
//             height: 1080,
//             width: 1920,
//             __typename: 'Thumbnail',
//           },
//           primaryTitle: {
//             id: 'tt19465630',
//             titleText: {
//               text: 'Sniper. The White Raven',
//               __typename: 'TitleText',
//             },
//             originalTitleText: {
//               text: 'Sniper. The White Raven',
//               __typename: 'TitleText',
//             },
//             releaseYear: { year: 2022, __typename: 'YearRange' },
//             __typename: 'Title',
//           },
//           playbackURLs: [
//             {
//               displayName: {
//                 value: '480p',
//                 language: 'en-US',
//                 __typename: 'LocalizedString',
//               },
//               videoMimeType: 'MP4',
//               videoDefinition: 'DEF_480p',
//               url: 'https://imdb-video.media-imdb.com/vi787071513/1434659607842-pgv4ql-1654535344437.mp4?Expires=1704575994&Signature=G7ZJPEnX4G8NmIt95lGwAz2kcfnSFNjp~24UFGtC~tssUwUyT9wrANDfqc0gTjBqeIrCJ4oh3dl6bnviPFVCmQnM1xi6AzY5qO4qknOetKas62ggHCxcG7J70Gh57Lr6Xs2KDorHhVzvfsCom~TYBGIStiA-PSZaNGY-ISfh4Fdmh4QT-yGzlrAwA-IarWZUcIEX4qhC0ZUPy0JHqHhEDq4df6KfmueeYa3M3LAM8uPTKwUDuZhA9EoWxiILc~03hS7LXTcrJcyw6QgXG6CIrzpFobypjbxFH0s~IPN6ftqlyBij6Neq5kEaIplUKm6wFBnQYAvi2SFCqtjlIvlDog__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
//               __typename: 'PlaybackURL',
//             },
//             {
//               displayName: {
//                 value: 'SD',
//                 language: 'en-US',
//                 __typename: 'LocalizedString',
//               },
//               videoMimeType: 'MP4',
//               videoDefinition: 'DEF_SD',
//               url: 'https://imdb-video.media-imdb.com/vi787071513/1434659454657-dx9ykf-1654535344437.mp4?Expires=1704575994&Signature=ElPk~LNprNWuOe0rz7y-qaIQ9EaaDEvnU0J~nNTz6zT8X3mqBpG3xvbFAVEFpLO9gR01G1lA1NlZBJwvGHkHx0vOdy6Jg5Tg-qQ2n5rgdnrKYJuysUqV-RH-vjYVqRVZrkkhEY6DgggzJiCxhDvkaTLAZVivXMoTAI1jZSr0gpKx5Viff9Y7rw8Alj4IaV7vMuzGaQHdW67rtGQdiBq-IKdGyi1MSSjEgLzIz9DJm4onQXJ7rAuutBJYdHewBpasnWVgHPHRAfVFFIFvfFstWG23TR-cc73YwCLLcuOBXxCnaWQPhc6kAwYnqLD2C6w7NAQ1jp496hhDvHuoOK3DnQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
//               __typename: 'PlaybackURL',
//             },
//           ],
//           contentType: {
//             id: 'amzn1.imdb.video.contenttype.trailer',
//             displayName: { value: 'Trailer', __typename: 'LocalizedString' },
//             __typename: 'VideoContentType',
//           },
//           previewURLs: [
//             {
//               displayName: {
//                 value: 'AUTO',
//                 language: 'en-US',
//                 __typename: 'LocalizedString',
//               },
//               videoMimeType: 'M3U8',
//               videoDefinition: 'DEF_AUTO',
//               url: 'https://imdb-video.media-imdb.com/vi787071513/hls-preview-79353ff1-9750-49d0-8f07-f8d72a396b4b.m3u8?Expires=1704575994&Signature=YcoOgajIiRrP0EAB~xB4Io~nwsEd3jnkjb6g1x3L2neRrN7yM9UoDVSxXCoi12~yHmfIAYfR9OQ5kxpOxfkV6p~jEixN-jmnclJh7y3se6tuLL8F69UdOKCMcqjzJNBSwnygYDqFalHapeXhuzqL7pjpILxOgnu9iz41Qkwf-oWBj1OhjcA8i4oUqOlGhGesVTRtRGtBq8qcR3IG1AEgHtwrwFOEwhxMiVNzEElR0QMIqLOx84QzpVZ-LvJ2OJstEXcGMg2~ND-LHxaqgXcUTHiGXrjCtLd5SMhNboiZi7fvcJ~a21AgQzKgLJswBPnm7OW6Uiz6r9OPmf95e1YfXA__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
//               __typename: 'PlaybackURL',
//             },
//           ],
//           __typename: 'Video',
//         },
//         __typename: 'VideoEdge',
//       },
//       {
//         node: {
//           id: 'vi1334755865',
//           createdDate: '2022-05-17T15:34:59.035Z',
//           isMature: false,
//           runtime: { value: 137, __typename: 'VideoRuntime' },
//           name: {
//             value: 'Teaser Trailer',
//             language: 'uk',
//             __typename: 'LocalizedString',
//           },
//           description: {
//             value:
//               "Mykola is an eccentric pacifist who wants to be useful to humanity. When the war begins at Donbass, Mykola's naive world is collapsing as the militants kill his pregnant wife and burn his home to the ground.",
//             language: 'uk',
//             __typename: 'LocalizedString',
//           },
//           timedTextTracks: [],
//           recommendedTimedTextTrack: null,
//           thumbnail: {
//             url: 'https://m.media-amazon.com/images/M/MV5BYjcyZThmYmUtZTFjMC00YzU5LWFkYzItNGNiNjUzMWJhYTJkXkEyXkFqcGdeQWRpZWdtb25n._V1_.jpg',
//             height: 1080,
//             width: 1920,
//             __typename: 'Thumbnail',
//           },
//           primaryTitle: {
//             id: 'tt19465630',
//             titleText: {
//               text: 'Sniper. The White Raven',
//               __typename: 'TitleText',
//             },
//             originalTitleText: {
//               text: 'Sniper. The White Raven',
//               __typename: 'TitleText',
//             },
//             releaseYear: { year: 2022, __typename: 'YearRange' },
//             __typename: 'Title',
//           },
//           playbackURLs: [
//             {
//               displayName: {
//                 value: '480p',
//                 language: 'en-US',
//                 __typename: 'LocalizedString',
//               },
//               videoMimeType: 'MP4',
//               videoDefinition: 'DEF_480p',
//               url: 'https://imdb-video.media-imdb.com/vi1334755865/1434659607842-pgv4ql-1652801699420.mp4?Expires=1704575994&Signature=Ztc3~xLpygD1RKGwApuSuBlptSK1TjoZwSkQI8AtMOUOfdeXk9C2F4Txynwh1Yz5OFtceaOQuHpfdtDqMUqOTJVNnsDRkSsili0F0ZraExrGO~g2rDewtsgN8oSvWZMM7gZee7-xW4jV44Y13B6DeoAtIvuVOoyEJgZVoVk5z9Gar8q3n7aJ~m0pbAweKeLoRsjjlxesVHV~zAk47pdEAK9z1n1fIcoC-pRuXG0p-v-BvMh3sTURoDYLVoAddHdxBAWlXwAthTESQYG~~bncLq2RESMX-MAYM3R88XwsOKiMtNW3l5vpKEK9AC~ikdGHXzGbKPJXgv~PcJ~BfGqUAQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
//               __typename: 'PlaybackURL',
//             },
//             {
//               displayName: {
//                 value: 'SD',
//                 language: 'en-US',
//                 __typename: 'LocalizedString',
//               },
//               videoMimeType: 'MP4',
//               videoDefinition: 'DEF_SD',
//               url: 'https://imdb-video.media-imdb.com/vi1334755865/1434659454657-dx9ykf-1652801699420.mp4?Expires=1704575994&Signature=cK0ZCfRjmCo1oral-GcB9ksfbkU3e0rLHXp2L9-r3H34jAXDBhaBm9miwl7DasO80gWEjviRLRz7U7~qKRK~v3TZ34XmsaZaj~Hhd1Wexcuqr4l9t25pUD3ocdVUTlCAQeO3zqwti4-dRkmZzBA7IX4eUrAmjkcrSydWaOPvK0-UXMPKyjmcduOoN78c00aDQ84FgGJjdCnyG4MIEUnLJW-dgf34TkOJmRGrBNTXZTAnr6zl6nfPx-hTH~0VkqppW-WSoXQZ2u9sJz2veyGNXqciZS7vDdvDC8ml9PRmjJHkblD4dkrpkvxtCBN0d3CQsuvCF-e8B1HcUwICV58LqA__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
//               __typename: 'PlaybackURL',
//             },
//           ],
//           contentType: {
//             id: 'amzn1.imdb.video.contenttype.trailer',
//             displayName: { value: 'Trailer', __typename: 'LocalizedString' },
//             __typename: 'VideoContentType',
//           },
//           previewURLs: [
//             {
//               displayName: {
//                 value: 'AUTO',
//                 language: 'en-US',
//                 __typename: 'LocalizedString',
//               },
//               videoMimeType: 'M3U8',
//               videoDefinition: 'DEF_AUTO',
//               url: 'https://imdb-video.media-imdb.com/vi1334755865/hls-preview-a6117403-2798-4aea-87a8-ca26d1b444e7.m3u8?Expires=1704575994&Signature=mzWjX6E0lRbssOHvaxch1Zjnx51rd4xHfQiUsZD5VPheu1-0ZVCZM5yLL9e3aiZEac3eJaePB1ZMa6FOYvNG~b0kD1cn-Y8pEJ3vmOJhhT0SxwwX-R9SR0pPDSEEqIWfQ8uEidXxViuKpl86FXEGclo0oSr1o1cQkQIX9WzFzNk-BUg-k3lbqnRAHR9YlOzsfkJm33Dx0rVajeWvub6b4X8qwTTLT2OhYYl8oHOLQdqzGMGAA2NkkObXRWQtcoqtfxMJ-iZRu14lq4MMmiQ8gYQVOi6mKdS0FY57pDv8vhocl2Osq6wMTco0uxdMHVtI-BKjgB5K6K-fVbgGajiu8w__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
//               __typename: 'PlaybackURL',
//             },
//           ],
//           __typename: 'Video',
//         },
//         __typename: 'VideoEdge',
//       },
//     ],
//     __typename: 'VideoConnection',
//   },
//   externalLinks: { total: 28, __typename: 'ExternalLinkConnection' },
//   metacritic: {
//     metascore: { score: 54, __typename: 'Metascore' },
//     __typename: 'Metacritic',
//   },
//   keywords: {
//     total: 43,
//     edges: [
//       {
//         node: {
//           text: 'russian occupation of ukraine',
//           __typename: 'TitleKeyword',
//         },
//         __typename: 'TitleKeywordEdge',
//       },
//       {
//         node: { text: 'loss of wife', __typename: 'TitleKeyword' },
//         __typename: 'TitleKeywordEdge',
//       },
//       {
//         node: { text: 'husband wife relationship', __typename: 'TitleKeyword' },
//         __typename: 'TitleKeywordEdge',
//       },
//       {
//         node: {
//           text: 'ukrainian russian relations',
//           __typename: 'TitleKeyword',
//         },
//         __typename: 'TitleKeywordEdge',
//       },
//       {
//         node: { text: 'eastern europe', __typename: 'TitleKeyword' },
//         __typename: 'TitleKeywordEdge',
//       },
//     ],
//     __typename: 'TitleKeywordConnection',
//   },
//   genres: {
//     genres: [
//       { text: 'Drama', id: 'Drama', __typename: 'Genre' },
//       { text: 'War', id: 'War', __typename: 'Genre' },
//     ],
//     __typename: 'Genres',
//   },
//   plot: {
//     plotText: {
//       plainText:
//         'After suffering a tragedy at the hand of invading soldiers in Donbas, an Ukrainian physics teacher seeks revenge. He sets his sights on an elite Russian sniper whose elimination could change the tide of the conflict.',
//       __typename: 'Markdown',
//     },
//     language: { id: 'en-US', __typename: 'DisplayableLanguage' },
//     __typename: 'Plot',
//   },
//   plotContributionLink: {
//     url: 'https://contribute.imdb.com/updates?update=tt19465630:outlines.add.1.locale~en-US',
//     __typename: 'ContributionLink',
//   },
//   credits: { total: 68, __typename: 'CreditConnection' },
//   principalCredits: [
//     {
//       totalCredits: 1,
//       category: {
//         text: 'Director',
//         id: 'director',
//         __typename: 'CreditCategory',
//       },
//       credits: [
//         {
//           name: {
//             nameText: { text: 'Marian Bushan', __typename: 'NameText' },
//             id: 'nm11595610',
//             __typename: 'Name',
//           },
//           attributes: null,
//           __typename: 'Crew',
//         },
//       ],
//       __typename: 'PrincipalCreditsForCategory',
//     },
//     {
//       totalCredits: 2,
//       category: { text: 'Writers', id: 'writer', __typename: 'CreditCategory' },
//       credits: [
//         {
//           name: {
//             nameText: { text: 'Marian Bushan', __typename: 'NameText' },
//             id: 'nm11595610',
//             __typename: 'Name',
//           },
//           attributes: null,
//           __typename: 'Crew',
//         },
//         {
//           name: {
//             nameText: { text: 'Mykola Voronin', __typename: 'NameText' },
//             id: 'nm13887614',
//             __typename: 'Name',
//           },
//           attributes: null,
//           __typename: 'Crew',
//         },
//       ],
//       __typename: 'PrincipalCreditsForCategory',
//     },
//     {
//       totalCredits: 32,
//       category: { text: 'Stars', id: 'cast', __typename: 'CreditCategory' },
//       credits: [
//         {
//           name: {
//             nameText: { text: 'Pavlo Aldoshyn', __typename: 'NameText' },
//             id: 'nm3838884',
//             __typename: 'Name',
//           },
//           attributes: null,
//           __typename: 'Cast',
//         },
//         {
//           name: {
//             nameText: { text: 'Maryna Koshkina', __typename: 'NameText' },
//             id: 'nm9582810',
//             __typename: 'Name',
//           },
//           attributes: null,
//           __typename: 'Cast',
//         },
//         {
//           name: {
//             nameText: { text: 'Andrey Mostrenko', __typename: 'NameText' },
//             id: 'nm5643878',
//             __typename: 'Name',
//           },
//           attributes: null,
//           __typename: 'Cast',
//         },
//       ],
//       __typename: 'PrincipalCreditsForCategory',
//     },
//   ],
//   reviews: { total: 51, __typename: 'ReviewsConnection' },
//   criticReviewsTotal: { total: 22, __typename: 'ExternalLinkConnection' },
//   triviaTotal: { total: 1, __typename: 'TriviaConnection' },
//   engagementStatistics: {
//     watchlistStatistics: {
//       displayableCount: {
//         text: 'Added by 9.9K users',
//         __typename: 'LocalizedDisplayableCount',
//       },
//       __typename: 'WatchlistStatistics',
//     },
//     __typename: 'EngagementStatistics',
//   },
//   subNavCredits: { total: 68, __typename: 'CreditConnection' },
//   subNavReviews: { total: 51, __typename: 'ReviewsConnection' },
//   subNavTrivia: { total: 1, __typename: 'TriviaConnection' },
//   subNavFaqs: { total: 0, __typename: 'FaqConnection' },
//   subNavTopQuestions: { total: 15, __typename: 'AlexaQuestionConnection' },
//   titleGenres: {
//     genres: [
//       {
//         genre: { text: 'Drama', __typename: 'GenreItem' },
//         __typename: 'TitleGenre',
//       },
//       {
//         genre: { text: 'War', __typename: 'GenreItem' },
//         __typename: 'TitleGenre',
//       },
//     ],
//     __typename: 'TitleGenres',
//   },
//   meta: {
//     canonicalId: 'tt19465630',
//     publicationStatus: 'PUBLISHED',
//     __typename: 'TitleMeta',
//   },
//   castPageTitle: {
//     edges: [
//       {
//         node: {
//           name: {
//             nameText: { text: 'Pavlo Aldoshyn', __typename: 'NameText' },
//             __typename: 'Name',
//           },
//           __typename: 'Cast',
//         },
//         __typename: 'CreditEdge',
//       },
//       {
//         node: {
//           name: {
//             nameText: { text: 'Maryna Koshkina', __typename: 'NameText' },
//             __typename: 'Name',
//           },
//           __typename: 'Cast',
//         },
//         __typename: 'CreditEdge',
//       },
//       {
//         node: {
//           name: {
//             nameText: { text: 'Andrey Mostrenko', __typename: 'NameText' },
//             __typename: 'Name',
//           },
//           __typename: 'Cast',
//         },
//         __typename: 'CreditEdge',
//       },
//       {
//         node: {
//           name: {
//             nameText: { text: 'Roman Semysal', __typename: 'NameText' },
//             __typename: 'Name',
//           },
//           __typename: 'Cast',
//         },
//         __typename: 'CreditEdge',
//       },
//     ],
//     __typename: 'CreditConnection',
//   },
//   creatorsPageTitle: [],
//   directorsPageTitle: [
//     {
//       credits: [
//         {
//           name: {
//             nameText: { text: 'Marian Bushan', __typename: 'NameText' },
//             __typename: 'Name',
//           },
//           __typename: 'Crew',
//         },
//       ],
//       __typename: 'PrincipalCreditsForCategory',
//     },
//   ],
//   countriesOfOrigin: {
//     countries: [{ id: 'UA', text: 'Ukraine', __typename: 'CountryOfOrigin' }],
//     __typename: 'CountriesOfOrigin',
//   },
//   production: {
//     edges: [
//       {
//         node: {
//           company: {
//             id: 'co0750475',
//             companyText: { text: 'UM Group', __typename: 'CompanyText' },
//             __typename: 'Company',
//           },
//           __typename: 'CompanyCredit',
//         },
//         __typename: 'CompanyCreditEdge',
//       },
//     ],
//     __typename: 'CompanyCreditConnection',
//   },
//   featuredReviews: {
//     edges: [
//       {
//         node: {
//           id: 'rw8707524',
//           author: {
//             nickName: 'mason25',
//             userId: 'ur20098077',
//             __typename: 'UserProfile',
//           },
//           summary: { originalText: 'Meh', __typename: 'ReviewSummary' },
//           text: {
//             originalText: {
//               plaidHtml:
//                 'Starts out bizarrely, a teacher and his wife are living the ultimate hippy lifestyle off the grid, maybe this is more prevalent than I&#39;ve been exposed to, but for the movie, it just seems weird and pointless.<br/><br/>The news reports on them for a sensation piece presumably, but doesn&#39;t immediately follow up after his wife is killed..... odd.<br/><br/>It&#39;s a great motive for joining a military, but he simply doesn&#39;t fit in, and the training, if you want to call it that, is on par with kids playing, but with real guns.<br/><br/>There is literally 2 training scenes on the range, and we&#39;re off to fight the war.... except hero boy doesn&#39;t bother to listen to his commander, because he&#39;s got a good shot on 2 random fighters. Never mind that the commander knows why they&#39;re out there, looking for the enemy snipers, but nope, blown away because hero boy couldn&#39;t keep his round in his rifle.<br/><br/>Jump to our hero immediately somehow being the go to guy for sniping.... and now he&#39;s of course refilling his own ammunition and everything.....\nSo either the pacing of the movie is terrible, and a fair amount of time has passed without any indication of such, or it&#39;s just a terrible script.<br/><br/>I&#39;m suspecting it&#39;s the latter, since randomly hero boy who didn&#39;t seem to get along with his 5 classmates (though he also didn&#39;t seem to not get along with them either, there was next to zero emotions showed either way). When two of them went on a mission, off screen and unbeknownst to the viewers, he starts asking about them multiple times, awkwardly. Only for one of them to be dead of course. But wait.... here comes more lack of any emotion...<br/><br/>It ended quite predictably, not a bad thing, but also not riveting.<br/><br/>For the life of me I cannot figure out why they were constantly loading their first round by hand, when the rifles were all magazine fed, unless it&#39;s for that one extra round of capacity, than that&#39;s fine, but other than that, it makes no sense to do it. I&#39;ve served in the Canadian military and fired an assortment of weapons, semi auto, full auto, belt fed, mag fed. Never any sniper rifles, so maybe snipers do have a reason for it, just seems unlikely though, and that it was added by someone unfamiliar with weapons.<br/><br/>Oh and to say it&#39;s a political statement or propaganda movie, meh, almost every movie is to some extent, even children&#39;s cartoons, this one just happens to be a current issue one. It doesn&#39;t even detract from the movie.',
//               __typename: 'Markdown',
//             },
//             __typename: 'ReviewText',
//           },
//           authorRating: 5,
//           submissionDate: '2022-12-02',
//           helpfulness: {
//             upVotes: 13,
//             downVotes: 15,
//             __typename: 'ReviewHelpfulness',
//           },
//           __typename: 'Review',
//         },
//         __typename: 'ReviewEdge',
//       },
//     ],
//     __typename: 'ReviewsConnection',
//   },
//   __typename: 'Title',
//   wins: { total: 0, __typename: 'AwardNominationConnection' },
//   nominations: { total: 3, __typename: 'AwardNominationConnection' },
//   prestigiousAwardSummary: null,
//   episodes: null,
//   videoStrip: {
//     edges: [
//       {
//         node: {
//           id: 'vi787071513',
//           contentType: {
//             displayName: { value: 'Trailer', __typename: 'LocalizedString' },
//             __typename: 'VideoContentType',
//           },
//           name: { value: 'Official Trailer', __typename: 'LocalizedString' },
//           runtime: { value: 129, __typename: 'VideoRuntime' },
//           thumbnail: {
//             height: 1080,
//             url: 'https://m.media-amazon.com/images/M/MV5BMjYyNDMwN2MtNTAyZS00NDBkLWI5ZTktMzA3ZGU5NDRlMWY4XkEyXkFqcGdeQWRpZWdtb25n._V1_.jpg',
//             width: 1920,
//             __typename: 'Thumbnail',
//           },
//           __typename: 'Video',
//         },
//         __typename: 'VideoEdge',
//       },
//       {
//         node: {
//           id: 'vi1334755865',
//           contentType: {
//             displayName: { value: 'Trailer', __typename: 'LocalizedString' },
//             __typename: 'VideoContentType',
//           },
//           name: { value: 'Teaser Trailer', __typename: 'LocalizedString' },
//           runtime: { value: 137, __typename: 'VideoRuntime' },
//           thumbnail: {
//             height: 1080,
//             url: 'https://m.media-amazon.com/images/M/MV5BYjcyZThmYmUtZTFjMC00YzU5LWFkYzItNGNiNjUzMWJhYTJkXkEyXkFqcGdeQWRpZWdtb25n._V1_.jpg',
//             width: 1920,
//             __typename: 'Thumbnail',
//           },
//           __typename: 'Video',
//         },
//         __typename: 'VideoEdge',
//       },
//       {
//         node: {
//           id: 'vi2515386905',
//           contentType: {
//             displayName: { value: 'Trailer', __typename: 'LocalizedString' },
//             __typename: 'VideoContentType',
//           },
//           name: {
//             value: 'Sniper. The White Raven',
//             __typename: 'LocalizedString',
//           },
//           runtime: { value: 129, __typename: 'VideoRuntime' },
//           thumbnail: {
//             height: 1080,
//             url: 'https://m.media-amazon.com/images/M/MV5BYzQyZGJmNDEtYmU1MS00MGQ3LWE4MjEtMjc1ZDVmOTU0ZjY0XkEyXkFqcGdeQVRoaXJkUGFydHlJbmdlc3Rpb25Xb3JrZmxvdw@@._V1_.jpg',
//             width: 1920,
//             __typename: 'Thumbnail',
//           },
//           __typename: 'Video',
//         },
//         __typename: 'VideoEdge',
//       },
//     ],
//     __typename: 'VideoConnection',
//   },
//   titleMainImages: {
//     total: 7,
//     edges: [
//       {
//         node: {
//           id: 'rm2361990913',
//           url: 'https://m.media-amazon.com/images/M/MV5BNzU4YTZhNGItYWU2MS00MDU5LWFkMTUtZDVmNDM2N2NlNjk0XkEyXkFqcGdeQXVyMzk3OTUyMDY@._V1_.jpg',
//           caption: {
//             plainText: 'Sniper. The White Raven (2022)',
//             __typename: 'Markdown',
//           },
//           height: 791,
//           width: 1815,
//           __typename: 'Image',
//         },
//         __typename: 'ImageEdge',
//       },
//       {
//         node: {
//           id: 'rm3167297281',
//           url: 'https://m.media-amazon.com/images/M/MV5BZmQ3ZWI3ZjQtZDhiOC00ZGMyLWE3NGItNzk0OGNkOGZlOTE0XkEyXkFqcGdeQXVyMzk3OTUyMDY@._V1_.jpg',
//           caption: {
//             plainText: 'Pavlo Aldoshyn in Sniper. The White Raven (2022)',
//             __typename: 'Markdown',
//           },
//           height: 795,
//           width: 1821,
//           __typename: 'Image',
//         },
//         __typename: 'ImageEdge',
//       },
//       {
//         node: {
//           id: 'rm2697535233',
//           url: 'https://m.media-amazon.com/images/M/MV5BY2MwNDkxZTgtNjI1Ni00NmUxLWI0ZTctN2I5ZmFiZTA5MjY5XkEyXkFqcGdeQXVyMzk3OTUyMDY@._V1_.jpg',
//           caption: {
//             plainText: 'Sniper. The White Raven (2022)',
//             __typename: 'Markdown',
//           },
//           height: 791,
//           width: 1811,
//           __typename: 'Image',
//         },
//         __typename: 'ImageEdge',
//       },
//       {
//         node: {
//           id: 'rm1489575681',
//           url: 'https://m.media-amazon.com/images/M/MV5BZTk0OGI3ZDEtZmFhOS00NGYxLWI0YWQtYTg0YjFkMGExZDE1XkEyXkFqcGdeQXVyMzk3OTUyMDY@._V1_.jpg',
//           caption: {
//             plainText: 'Sniper. The White Raven (2022)',
//             __typename: 'Markdown',
//           },
//           height: 793,
//           width: 1817,
//           __typename: 'Image',
//         },
//         __typename: 'ImageEdge',
//       },
//       {
//         node: {
//           id: 'rm356781569',
//           url: 'https://m.media-amazon.com/images/M/MV5BYzRiMmFlN2UtMmM3ZS00NTJiLTk0N2UtZmExNzkyZWQ5YjhlXkEyXkFqcGdeQXVyMTE5MTg5NDIw._V1_.jpg',
//           caption: {
//             plainText: 'Pavlo Aldoshyn in Sniper. The White Raven (2022)',
//             __typename: 'Markdown',
//           },
//           height: 3000,
//           width: 2000,
//           __typename: 'Image',
//         },
//         __typename: 'ImageEdge',
//       },
//       {
//         node: {
//           id: 'rm1026951169',
//           url: 'https://m.media-amazon.com/images/M/MV5BMDRiODE1MDctMTU5Yy00OGJkLTljNzAtNGRkOTYwYmFhNTJjXkEyXkFqcGdeQXVyMTE5MTg5NDIw._V1_.jpg',
//           caption: {
//             plainText: 'Pavlo Aldoshyn in Sniper. The White Raven (2022)',
//             __typename: 'Markdown',
//           },
//           height: 1772,
//           width: 1181,
//           __typename: 'Image',
//         },
//         __typename: 'ImageEdge',
//       },
//       {
//         node: {
//           id: 'rm1439244033',
//           url: 'https://m.media-amazon.com/images/M/MV5BNWMwOTgyNmMtYWNlYS00NGIyLTllOWYtZTVlNzU3N2ViZWQ5XkEyXkFqcGdeQXVyMzk3OTUyMDY@._V1_.jpg',
//           caption: {
//             plainText: 'Pavlo Aldoshyn in Sniper. The White Raven (2022)',
//             __typename: 'Markdown',
//           },
//           height: 1772,
//           width: 1181,
//           __typename: 'Image',
//         },
//         __typename: 'ImageEdge',
//       },
//     ],
//     __typename: 'ImageConnection',
//   },
//   imageUploadLink: {
//     url: 'https://contribute.imdb.com/image/tt19465630/add?bus=imdb&return_url=https%3A%2F%2Fwww.imdb.com%2Fclose_me&site=web',
//     __typename: 'ContributionLink',
//   },
//   cast: {
//     edges: [
//       {
//         node: {
//           name: {
//             id: 'nm3838884',
//             nameText: { text: 'Pavlo Aldoshyn', __typename: 'NameText' },
//             primaryImage: null,
//             __typename: 'Name',
//           },
//           attributes: null,
//           category: { id: 'actor', __typename: 'CreditCategory' },
//           characters: [{ name: 'Mykola', __typename: 'Character' }],
//           episodeCredits: {
//             total: 0,
//             yearRange: null,
//             __typename: 'EpisodeCastConnection',
//           },
//           __typename: 'Cast',
//         },
//         __typename: 'CreditEdge',
//       },
//       {
//         node: {
//           name: {
//             id: 'nm9582810',
//             nameText: { text: 'Maryna Koshkina', __typename: 'NameText' },
//             primaryImage: {
//               url: 'https://m.media-amazon.com/images/M/MV5BYTM1MGRkMzgtMTFmZS00NjU4LWIwOGYtNjhmODY0MWJmMzE4XkEyXkFqcGdeQXVyMTc4MzI2NQ@@._V1_.jpg',
//               width: 1280,
//               height: 720,
//               __typename: 'Image',
//             },
//             __typename: 'Name',
//           },
//           attributes: null,
//           category: { id: 'actress', __typename: 'CreditCategory' },
//           characters: [{ name: 'Nastya', __typename: 'Character' }],
//           episodeCredits: {
//             total: 0,
//             yearRange: null,
//             __typename: 'EpisodeCastConnection',
//           },
//           __typename: 'Cast',
//         },
//         __typename: 'CreditEdge',
//       },
//       {
//         node: {
//           name: {
//             id: 'nm5643878',
//             nameText: { text: 'Andrey Mostrenko', __typename: 'NameText' },
//             primaryImage: null,
//             __typename: 'Name',
//           },
//           attributes: [
//             {
//               text: 'as Andriy Mostrenko',
//               __typename: 'CreditedAsCreditAttribute',
//             },
//           ],
//           category: { id: 'actor', __typename: 'CreditCategory' },
//           characters: [{ name: 'Cap', __typename: 'Character' }],
//           episodeCredits: {
//             total: 0,
//             yearRange: null,
//             __typename: 'EpisodeCastConnection',
//           },
//           __typename: 'Cast',
//         },
//         __typename: 'CreditEdge',
//       },
//       {
//         node: {
//           name: {
//             id: 'nm9457418',
//             nameText: { text: 'Roman Semysal', __typename: 'NameText' },
//             primaryImage: null,
//             __typename: 'Name',
//           },
//           attributes: null,
//           category: { id: 'actor', __typename: 'CreditCategory' },
//           characters: [{ name: 'Brigade commander', __typename: 'Character' }],
//           episodeCredits: {
//             total: 0,
//             yearRange: null,
//             __typename: 'EpisodeCastConnection',
//           },
//           __typename: 'Cast',
//         },
//         __typename: 'CreditEdge',
//       },
//       {
//         node: {
//           name: {
//             id: 'nm0236618',
//             nameText: { text: 'Oleg Drach', __typename: 'NameText' },
//             primaryImage: {
//               url: 'https://m.media-amazon.com/images/M/MV5BYzE0Y2UwZjgtYjE0OC00OGNjLThlMWQtNWU0MDNlNmNjZTVmXkEyXkFqcGdeQXVyMTMzOTU3MDcz._V1_.jpg',
//               width: 261,
//               height: 420,
//               __typename: 'Image',
//             },
//             __typename: 'Name',
//           },
//           attributes: null,
//           category: { id: 'actor', __typename: 'CreditCategory' },
//           characters: [{ name: 'Syeryy', __typename: 'Character' }],
//           episodeCredits: {
//             total: 0,
//             yearRange: null,
//             __typename: 'EpisodeCastConnection',
//           },
//           __typename: 'Cast',
//         },
//         __typename: 'CreditEdge',
//       },
//       {
//         node: {
//           name: {
//             id: 'nm7424662',
//             nameText: { text: 'Roman Yasinovskiy', __typename: 'NameText' },
//             primaryImage: {
//               url: 'https://m.media-amazon.com/images/M/MV5BN2M0NmFiZmQtMTZlZi00MWNiLTlhMjAtMjA4NWNmNjc2MThlXkEyXkFqcGdeQXVyNjg3MTIwODI@._V1_.jpg',
//               width: 2048,
//               height: 1281,
//               __typename: 'Image',
//             },
//             __typename: 'Name',
//           },
//           attributes: null,
//           category: { id: 'actor', __typename: 'CreditCategory' },
//           characters: [{ name: 'Klym', __typename: 'Character' }],
//           episodeCredits: {
//             total: 0,
//             yearRange: null,
//             __typename: 'EpisodeCastConnection',
//           },
//           __typename: 'Cast',
//         },
//         __typename: 'CreditEdge',
//       },
//       {
//         node: {
//           name: {
//             id: 'nm9236420',
//             nameText: { text: 'Oleg Shulga', __typename: 'NameText' },
//             primaryImage: {
//               url: 'https://m.media-amazon.com/images/M/MV5BZWM5NTdhMDAtYmRiNC00NWY3LWFhN2UtZmQ4N2IxZmQyZjIxXkEyXkFqcGdeQXVyNTc0NjY1ODk@._V1_.jpg',
//               width: 960,
//               height: 960,
//               __typename: 'Image',
//             },
//             __typename: 'Name',
//           },
//           attributes: null,
//           category: { id: 'actor', __typename: 'CreditCategory' },
//           characters: [{ name: 'Dunay', __typename: 'Character' }],
//           episodeCredits: {
//             total: 0,
//             yearRange: null,
//             __typename: 'EpisodeCastConnection',
//           },
//           __typename: 'Cast',
//         },
//         __typename: 'CreditEdge',
//       },
//       {
//         node: {
//           name: {
//             id: 'nm9201438',
//             nameText: { text: 'Vadim Lyalko', __typename: 'NameText' },
//             primaryImage: null,
//             __typename: 'Name',
//           },
//           attributes: [
//             {
//               text: 'as Vadym Lyalko',
//               __typename: 'CreditedAsCreditAttribute',
//             },
//           ],
//           category: { id: 'actor', __typename: 'CreditCategory' },
//           characters: [
//             { name: 'Commander of the GRU (Buryy)', __typename: 'Character' },
//           ],
//           episodeCredits: {
//             total: 0,
//             yearRange: null,
//             __typename: 'EpisodeCastConnection',
//           },
//           __typename: 'Cast',
//         },
//         __typename: 'CreditEdge',
//       },
//       {
//         node: {
//           name: {
//             id: 'nm8247168',
//             nameText: { text: 'Vadim Kurilko', __typename: 'NameText' },
//             primaryImage: {
//               url: 'https://m.media-amazon.com/images/M/MV5BZGQyY2M0ZTItNzJlMy00YWViLTkxNGUtYTZkMzk2YzcwOTUzXkEyXkFqcGdeQXVyNjg3MTIwODI@._V1_.jpg',
//               width: 540,
//               height: 435,
//               __typename: 'Image',
//             },
//             __typename: 'Name',
//           },
//           attributes: [
//             {
//               text: 'as Vadym Kurylko',
//               __typename: 'CreditedAsCreditAttribute',
//             },
//           ],
//           category: { id: 'actor', __typename: 'CreditCategory' },
//           characters: [{ name: 'Hyurza', __typename: 'Character' }],
//           episodeCredits: {
//             total: 0,
//             yearRange: null,
//             __typename: 'EpisodeCastConnection',
//           },
//           __typename: 'Cast',
//         },
//         __typename: 'CreditEdge',
//       },
//       {
//         node: {
//           name: {
//             id: 'nm12115530',
//             nameText: { text: 'Vladyslav Dmytrenko', __typename: 'NameText' },
//             primaryImage: null,
//             __typename: 'Name',
//           },
//           attributes: null,
//           category: { id: 'actor', __typename: 'CreditCategory' },
//           characters: [{ name: 'Malysh', __typename: 'Character' }],
//           episodeCredits: {
//             total: 0,
//             yearRange: null,
//             __typename: 'EpisodeCastConnection',
//           },
//           __typename: 'Cast',
//         },
//         __typename: 'CreditEdge',
//       },
//       {
//         node: {
//           name: {
//             id: 'nm10823253',
//             nameText: { text: 'Eugen Volosheniuk', __typename: 'NameText' },
//             primaryImage: null,
//             __typename: 'Name',
//           },
//           attributes: [
//             {
//               text: 'as Yevhen Voloshenyuk',
//               __typename: 'CreditedAsCreditAttribute',
//             },
//           ],
//           category: { id: 'actor', __typename: 'CreditCategory' },
//           characters: [{ name: 'Batyanya', __typename: 'Character' }],
//           episodeCredits: {
//             total: 0,
//             yearRange: null,
//             __typename: 'EpisodeCastConnection',
//           },
//           __typename: 'Cast',
//         },
//         __typename: 'CreditEdge',
//       },
//       {
//         node: {
//           name: {
//             id: 'nm11383417',
//             nameText: { text: 'Oleksandr Bykov', __typename: 'NameText' },
//             primaryImage: null,
//             __typename: 'Name',
//           },
//           attributes: null,
//           category: { id: 'actor', __typename: 'CreditCategory' },
//           characters: [{ name: 'Thin', __typename: 'Character' }],
//           episodeCredits: {
//             total: 0,
//             yearRange: null,
//             __typename: 'EpisodeCastConnection',
//           },
//           __typename: 'Cast',
//         },
//         __typename: 'CreditEdge',
//       },
//       {
//         node: {
//           name: {
//             id: 'nm15108485',
//             nameText: { text: 'Serhiy Artemenko', __typename: 'NameText' },
//             primaryImage: null,
//             __typename: 'Name',
//           },
//           attributes: null,
//           category: { id: 'actor', __typename: 'CreditCategory' },
//           characters: [{ name: 'Volunteer', __typename: 'Character' }],
//           episodeCredits: {
//             total: 0,
//             yearRange: null,
//             __typename: 'EpisodeCastConnection',
//           },
//           __typename: 'Cast',
//         },
//         __typename: 'CreditEdge',
//       },
//       {
//         node: {
//           name: {
//             id: 'nm11348671',
//             nameText: { text: 'Egor Kozlov', __typename: 'NameText' },
//             primaryImage: null,
//             __typename: 'Name',
//           },
//           attributes: null,
//           category: { id: 'actor', __typename: 'CreditCategory' },
//           characters: [{ name: 'Ivan', __typename: 'Character' }],
//           episodeCredits: {
//             total: 0,
//             yearRange: null,
//             __typename: 'EpisodeCastConnection',
//           },
//           __typename: 'Cast',
//         },
//         __typename: 'CreditEdge',
//       },
//       {
//         node: {
//           name: {
//             id: 'nm10801200',
//             nameText: { text: 'Zachary Shadrin', __typename: 'NameText' },
//             primaryImage: {
//               url: 'https://m.media-amazon.com/images/M/MV5BODI1ZGMzODgtNzIyZC00ZjE1LWE4YmMtOGFiYTg2YTg5OWUyXkEyXkFqcGdeQXVyMTA0OTE1OTMx._V1_.jpg',
//               width: 1334,
//               height: 2000,
//               __typename: 'Image',
//             },
//             __typename: 'Name',
//           },
//           attributes: [
//             {
//               text: 'as Zakhar Shadrin',
//               __typename: 'CreditedAsCreditAttribute',
//             },
//           ],
//           category: { id: 'actor', __typename: 'CreditCategory' },
//           characters: [{ name: 'Taras', __typename: 'Character' }],
//           episodeCredits: {
//             total: 0,
//             yearRange: null,
//             __typename: 'EpisodeCastConnection',
//           },
//           __typename: 'Cast',
//         },
//         __typename: 'CreditEdge',
//       },
//       {
//         node: {
//           name: {
//             id: 'nm15108486',
//             nameText: { text: 'Olena Chervonenko', __typename: 'NameText' },
//             primaryImage: null,
//             __typename: 'Name',
//           },
//           attributes: null,
//           category: { id: 'actress', __typename: 'CreditCategory' },
//           characters: [{ name: 'Journalist', __typename: 'Character' }],
//           episodeCredits: {
//             total: 0,
//             yearRange: null,
//             __typename: 'EpisodeCastConnection',
//           },
//           __typename: 'Cast',
//         },
//         __typename: 'CreditEdge',
//       },
//       {
//         node: {
//           name: {
//             id: 'nm4920987',
//             nameText: { text: 'Demyan Radzivilyuk', __typename: 'NameText' },
//             primaryImage: {
//               url: 'https://m.media-amazon.com/images/M/MV5BYjcyYWIyMGUtODdjNi00MjhhLWI3YTgtYTdkYWJkZTZmM2ZjXkEyXkFqcGdeQXVyMTY3NTY5OTcx._V1_.jpg',
//               width: 577,
//               height: 849,
//               __typename: 'Image',
//             },
//             __typename: 'Name',
//           },
//           attributes: null,
//           category: { id: 'actor', __typename: 'CreditCategory' },
//           characters: [{ name: 'Operator', __typename: 'Character' }],
//           episodeCredits: {
//             total: 0,
//             yearRange: null,
//             __typename: 'EpisodeCastConnection',
//           },
//           __typename: 'Cast',
//         },
//         __typename: 'CreditEdge',
//       },
//       {
//         node: {
//           name: {
//             id: 'nm14091106',
//             nameText: { text: 'Alina Karpenko', __typename: 'NameText' },
//             primaryImage: null,
//             __typename: 'Name',
//           },
//           attributes: null,
//           category: { id: 'actor', __typename: 'CreditCategory' },
//           characters: [{ name: 'News anchor', __typename: 'Character' }],
//           episodeCredits: {
//             total: 0,
//             yearRange: null,
//             __typename: 'EpisodeCastConnection',
//           },
//           __typename: 'Cast',
//         },
//         __typename: 'CreditEdge',
//       },
//     ],
//     __typename: 'CreditConnection',
//   },
//   creators: [],
//   directors: [
//     {
//       totalCredits: 1,
//       category: { text: 'Director', __typename: 'CreditCategory' },
//       credits: [
//         {
//           name: {
//             id: 'nm11595610',
//             nameText: { text: 'Marian Bushan', __typename: 'NameText' },
//             __typename: 'Name',
//           },
//           attributes: null,
//           __typename: 'Crew',
//         },
//       ],
//       __typename: 'PrincipalCreditsForCategory',
//     },
//   ],
//   writers: [
//     {
//       totalCredits: 2,
//       category: { text: 'Writers', __typename: 'CreditCategory' },
//       credits: [
//         {
//           name: {
//             id: 'nm11595610',
//             nameText: { text: 'Marian Bushan', __typename: 'NameText' },
//             __typename: 'Name',
//           },
//           attributes: null,
//           __typename: 'Crew',
//         },
//         {
//           name: {
//             id: 'nm13887614',
//             nameText: { text: 'Mykola Voronin', __typename: 'NameText' },
//             __typename: 'Name',
//           },
//           attributes: null,
//           __typename: 'Crew',
//         },
//       ],
//       __typename: 'PrincipalCreditsForCategory',
//     },
//   ],
//   isAdult: false,
//   moreLikeThisTitles: {
//     edges: [
//       {
//         node: {
//           id: 'tt7691572',
//           titleText: {
//             text: 'Cyborgs: Heroes Never Die',
//             __typename: 'TitleText',
//           },
//           titleType: {
//             id: 'movie',
//             text: 'Movie',
//             canHaveEpisodes: false,
//             displayableProperty: {
//               value: { plainText: '', __typename: 'Markdown' },
//               __typename: 'DisplayableTitleTypeProperty',
//             },
//             __typename: 'TitleType',
//           },
//           originalTitleText: {
//             text: 'Kiborgy. Heroyi ne vmyrayut',
//             __typename: 'TitleText',
//           },
//           primaryImage: {
//             id: 'rm3089784576',
//             width: 1000,
//             height: 1500,
//             url: 'https://m.media-amazon.com/images/M/MV5BYTUyMWNkYWUtMTg1ZS00MjJiLWE2ZjgtYjJkYTJmMmEzNWI0XkEyXkFqcGdeQXVyNTEzNDIxOTg@._V1_.jpg',
//             caption: {
//               plainText:
//                 'Vyacheslav Dovzhenko, Andrey Isaenko, Roman Yasinovskiy, Viktor Zhdanov, and Makar Tikhomirov in Cyborgs: Heroes Never Die (2017)',
//               __typename: 'Markdown',
//             },
//             __typename: 'Image',
//           },
//           releaseYear: { year: 2017, endYear: null, __typename: 'YearRange' },
//           ratingsSummary: {
//             aggregateRating: 7.5,
//             voteCount: 7637,
//             __typename: 'RatingsSummary',
//           },
//           runtime: { seconds: 6720, __typename: 'Runtime' },
//           certificate: { rating: 'TV-14', __typename: 'Certificate' },
//           canRate: { isRatable: true, __typename: 'CanRate' },
//           titleGenres: {
//             genres: [
//               {
//                 genre: { text: 'Action', __typename: 'GenreItem' },
//                 __typename: 'TitleGenre',
//               },
//               {
//                 genre: { text: 'Drama', __typename: 'GenreItem' },
//                 __typename: 'TitleGenre',
//               },
//               {
//                 genre: { text: 'War', __typename: 'GenreItem' },
//                 __typename: 'TitleGenre',
//               },
//             ],
//             __typename: 'TitleGenres',
//           },
//           canHaveEpisodes: false,
//           __typename: 'Title',
//         },
//         __typename: 'MoreLikeThisEdge',
//       },
//       {
//         node: {
//           id: 'tt8268302',
//           titleText: {
//             text: 'I Work at the Cemetery',
//             __typename: 'TitleText',
//           },
//           titleType: {
//             id: 'movie',
//             text: 'Movie',
//             canHaveEpisodes: false,
//             displayableProperty: {
//               value: { plainText: '', __typename: 'Markdown' },
//               __typename: 'DisplayableTitleTypeProperty',
//             },
//             __typename: 'TitleType',
//           },
//           originalTitleText: {
//             text: 'Ya pratsyuyu na tsvyntari',
//             __typename: 'TitleText',
//           },
//           primaryImage: {
//             id: 'rm439794177',
//             width: 1200,
//             height: 1691,
//             url: 'https://m.media-amazon.com/images/M/MV5BNjJkOWQwNTAtZjQ4Zi00ZTYxLTg1OGMtNTk3Njg5YTY5YmQ0XkEyXkFqcGdeQXVyNDAwMzY0OTk@._V1_.jpg',
//             caption: {
//               plainText: 'Vitaliy Saliy in I Work at the Cemetery (2021)',
//               __typename: 'Markdown',
//             },
//             __typename: 'Image',
//           },
//           releaseYear: { year: 2021, endYear: null, __typename: 'YearRange' },
//           ratingsSummary: {
//             aggregateRating: 7.4,
//             voteCount: 1395,
//             __typename: 'RatingsSummary',
//           },
//           runtime: { seconds: 6000, __typename: 'Runtime' },
//           certificate: { rating: 'Not Rated', __typename: 'Certificate' },
//           canRate: { isRatable: true, __typename: 'CanRate' },
//           titleGenres: {
//             genres: [
//               {
//                 genre: { text: 'Comedy', __typename: 'GenreItem' },
//                 __typename: 'TitleGenre',
//               },
//               {
//                 genre: { text: 'Crime', __typename: 'GenreItem' },
//                 __typename: 'TitleGenre',
//               },
//               {
//                 genre: { text: 'Drama', __typename: 'GenreItem' },
//                 __typename: 'TitleGenre',
//               },
//             ],
//             __typename: 'TitleGenres',
//           },
//           canHaveEpisodes: false,
//           __typename: 'Title',
//         },
//         __typename: 'MoreLikeThisEdge',
//       },
//       {
//         node: {
//           id: 'tt11386020',
//           titleText: { text: 'Black Raven', __typename: 'TitleText' },
//           titleType: {
//             id: 'movie',
//             text: 'Movie',
//             canHaveEpisodes: false,
//             displayableProperty: {
//               value: { plainText: '', __typename: 'Markdown' },
//               __typename: 'DisplayableTitleTypeProperty',
//             },
//             __typename: 'TitleType',
//           },
//           originalTitleText: { text: 'Chornyy Voron', __typename: 'TitleText' },
//           primaryImage: {
//             id: 'rm3018752513',
//             width: 600,
//             height: 900,
//             url: 'https://m.media-amazon.com/images/M/MV5BMzc4NDViNTgtOGU3MC00NjcwLTk5MDktZTFjZDIwZWM1ZDA0XkEyXkFqcGdeQXVyMjk1NzAxNg@@._V1_.jpg',
//             caption: {
//               plainText: 'Black Raven (2019)',
//               __typename: 'Markdown',
//             },
//             __typename: 'Image',
//           },
//           releaseYear: { year: 2019, endYear: null, __typename: 'YearRange' },
//           ratingsSummary: {
//             aggregateRating: 7.3,
//             voteCount: 583,
//             __typename: 'RatingsSummary',
//           },
//           runtime: { seconds: 6600, __typename: 'Runtime' },
//           certificate: null,
//           canRate: { isRatable: true, __typename: 'CanRate' },
//           titleGenres: {
//             genres: [
//               {
//                 genre: { text: 'Drama', __typename: 'GenreItem' },
//                 __typename: 'TitleGenre',
//               },
//               {
//                 genre: { text: 'History', __typename: 'GenreItem' },
//                 __typename: 'TitleGenre',
//               },
//               {
//                 genre: { text: 'War', __typename: 'GenreItem' },
//                 __typename: 'TitleGenre',
//               },
//             ],
//             __typename: 'TitleGenres',
//           },
//           canHaveEpisodes: false,
//           __typename: 'Title',
//         },
//         __typename: 'MoreLikeThisEdge',
//       },
//       {
//         node: {
//           id: 'tt5761544',
//           titleText: { text: 'Kandahar', __typename: 'TitleText' },
//           titleType: {
//             id: 'movie',
//             text: 'Movie',
//             canHaveEpisodes: false,
//             displayableProperty: {
//               value: { plainText: '', __typename: 'Markdown' },
//               __typename: 'DisplayableTitleTypeProperty',
//             },
//             __typename: 'TitleType',
//           },
//           originalTitleText: { text: 'Kandahar', __typename: 'TitleText' },
//           primaryImage: {
//             id: 'rm487861761',
//             width: 810,
//             height: 1200,
//             url: 'https://m.media-amazon.com/images/M/MV5BMjNiNDg2OWYtOGEzNy00M2E5LTgxZjItNzVmN2VmNTg3MzBhXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg',
//             caption: {
//               plainText: 'Gerard Butler in Kandahar (2023)',
//               __typename: 'Markdown',
//             },
//             __typename: 'Image',
//           },
//           releaseYear: { year: 2023, endYear: null, __typename: 'YearRange' },
//           ratingsSummary: {
//             aggregateRating: 6.1,
//             voteCount: 29110,
//             __typename: 'RatingsSummary',
//           },
//           runtime: { seconds: 7140, __typename: 'Runtime' },
//           certificate: { rating: 'R', __typename: 'Certificate' },
//           canRate: { isRatable: true, __typename: 'CanRate' },
//           titleGenres: {
//             genres: [
//               {
//                 genre: { text: 'Action', __typename: 'GenreItem' },
//                 __typename: 'TitleGenre',
//               },
//               {
//                 genre: { text: 'Thriller', __typename: 'GenreItem' },
//                 __typename: 'TitleGenre',
//               },
//             ],
//             __typename: 'TitleGenres',
//           },
//           canHaveEpisodes: false,
//           __typename: 'Title',
//         },
//         __typename: 'MoreLikeThisEdge',
//       },
//       {
//         node: {
//           id: 'tt26225074',
//           titleText: { text: 'Myrnyi-21', __typename: 'TitleText' },
//           titleType: {
//             id: 'movie',
//             text: 'Movie',
//             canHaveEpisodes: false,
//             displayableProperty: {
//               value: { plainText: '', __typename: 'Markdown' },
//               __typename: 'DisplayableTitleTypeProperty',
//             },
//             __typename: 'TitleType',
//           },
//           originalTitleText: { text: 'Myrnyi-21', __typename: 'TitleText' },
//           primaryImage: {
//             id: 'rm2983014401',
//             width: 600,
//             height: 900,
//             url: 'https://m.media-amazon.com/images/M/MV5BZGU3NTY1MDMtYWM3Zi00YWE0LWFjMTgtNjgwMjc0MmZjMTg4XkEyXkFqcGdeQXVyMjk1NzAxNg@@._V1_.jpg',
//             caption: {
//               plainText:
//                 'Evgeniy Lamakh, Mariia Shtofa, Pavlo Li, Aleksey Tritenko, Andrey Saminin, and Andrey Mostrenko in Myrnyi-21 (2023)',
//               __typename: 'Markdown',
//             },
//             __typename: 'Image',
//           },
//           releaseYear: { year: 2023, endYear: null, __typename: 'YearRange' },
//           ratingsSummary: {
//             aggregateRating: 7.5,
//             voteCount: 368,
//             __typename: 'RatingsSummary',
//           },
//           runtime: { seconds: 7020, __typename: 'Runtime' },
//           certificate: null,
//           canRate: { isRatable: true, __typename: 'CanRate' },
//           titleGenres: {
//             genres: [
//               {
//                 genre: { text: 'War', __typename: 'GenreItem' },
//                 __typename: 'TitleGenre',
//               },
//             ],
//             __typename: 'TitleGenres',
//           },
//           canHaveEpisodes: false,
//           __typename: 'Title',
//         },
//         __typename: 'MoreLikeThisEdge',
//       },
//       {
//         node: {
//           id: 'tt8205656',
//           titleText: { text: 'U311 Cherkasy', __typename: 'TitleText' },
//           titleType: {
//             id: 'movie',
//             text: 'Movie',
//             canHaveEpisodes: false,
//             displayableProperty: {
//               value: { plainText: '', __typename: 'Markdown' },
//               __typename: 'DisplayableTitleTypeProperty',
//             },
//             __typename: 'TitleType',
//           },
//           originalTitleText: { text: 'Cherkasy', __typename: 'TitleText' },
//           primaryImage: {
//             id: 'rm799080705',
//             width: 1131,
//             height: 1600,
//             url: 'https://m.media-amazon.com/images/M/MV5BZGNhYjk4MzItZjhiMC00YWM0LWIwODQtZjBlYjBiNThkNTZlXkEyXkFqcGdeQXVyMTA1OTMyMjUw._V1_.jpg',
//             caption: {
//               plainText: 'U311 Cherkasy (2019)',
//               __typename: 'Markdown',
//             },
//             __typename: 'Image',
//           },
//           releaseYear: { year: 2019, endYear: null, __typename: 'YearRange' },
//           ratingsSummary: {
//             aggregateRating: 6.6,
//             voteCount: 1178,
//             __typename: 'RatingsSummary',
//           },
//           runtime: { seconds: 6120, __typename: 'Runtime' },
//           certificate: null,
//           canRate: { isRatable: true, __typename: 'CanRate' },
//           titleGenres: {
//             genres: [
//               {
//                 genre: { text: 'Drama', __typename: 'GenreItem' },
//                 __typename: 'TitleGenre',
//               },
//               {
//                 genre: { text: 'History', __typename: 'GenreItem' },
//                 __typename: 'TitleGenre',
//               },
//               {
//                 genre: { text: 'War', __typename: 'GenreItem' },
//                 __typename: 'TitleGenre',
//               },
//             ],
//             __typename: 'TitleGenres',
//           },
//           canHaveEpisodes: false,
//           __typename: 'Title',
//         },
//         __typename: 'MoreLikeThisEdge',
//       },
//       {
//         node: {
//           id: 'tt21222434',
//           titleText: { text: 'Sniper: Rogue Mission', __typename: 'TitleText' },
//           titleType: {
//             id: 'movie',
//             text: 'Movie',
//             canHaveEpisodes: false,
//             displayableProperty: {
//               value: { plainText: '', __typename: 'Markdown' },
//               __typename: 'DisplayableTitleTypeProperty',
//             },
//             __typename: 'TitleType',
//           },
//           originalTitleText: {
//             text: 'Sniper: Rogue Mission',
//             __typename: 'TitleText',
//           },
//           primaryImage: {
//             id: 'rm1993804289',
//             width: 1544,
//             height: 2192,
//             url: 'https://m.media-amazon.com/images/M/MV5BNjkxMzQwMzgtMzU0Yy00NGIzLWFiNjUtYmQ2MzVmMzJkN2JmXkEyXkFqcGdeQXVyNTg4MDc4Mg@@._V1_.jpg',
//             caption: {
//               plainText:
//                 'Dennis Haysbert, Ryan Robbins, Chad Michael Collins, and Sayaka Akimoto in Sniper: Rogue Mission (2022)',
//               __typename: 'Markdown',
//             },
//             __typename: 'Image',
//           },
//           releaseYear: { year: 2022, endYear: null, __typename: 'YearRange' },
//           ratingsSummary: {
//             aggregateRating: 4.6,
//             voteCount: 1577,
//             __typename: 'RatingsSummary',
//           },
//           runtime: { seconds: 5760, __typename: 'Runtime' },
//           certificate: { rating: 'R', __typename: 'Certificate' },
//           canRate: { isRatable: true, __typename: 'CanRate' },
//           titleGenres: {
//             genres: [
//               {
//                 genre: { text: 'Action', __typename: 'GenreItem' },
//                 __typename: 'TitleGenre',
//               },
//               {
//                 genre: { text: 'Thriller', __typename: 'GenreItem' },
//                 __typename: 'TitleGenre',
//               },
//             ],
//             __typename: 'TitleGenres',
//           },
//           canHaveEpisodes: false,
//           __typename: 'Title',
//         },
//         __typename: 'MoreLikeThisEdge',
//       },
//       {
//         node: {
//           id: 'tt17024450',
//           titleText: { text: 'The Equalizer 3', __typename: 'TitleText' },
//           titleType: {
//             id: 'movie',
//             text: 'Movie',
//             canHaveEpisodes: false,
//             displayableProperty: {
//               value: { plainText: '', __typename: 'Markdown' },
//               __typename: 'DisplayableTitleTypeProperty',
//             },
//             __typename: 'TitleType',
//           },
//           originalTitleText: {
//             text: 'The Equalizer 3',
//             __typename: 'TitleText',
//           },
//           primaryImage: {
//             id: 'rm3479252737',
//             width: 1080,
//             height: 1350,
//             url: 'https://m.media-amazon.com/images/M/MV5BODdiMzM2YjctZmU3ZS00MzUwLWJiYTMtMmI2NzIyMTQyOTQ1XkEyXkFqcGdeQXVyODY5NzkyMjA@._V1_.jpg',
//             caption: {
//               plainText: 'Denzel Washington in The Equalizer 3 (2023)',
//               __typename: 'Markdown',
//             },
//             __typename: 'Image',
//           },
//           releaseYear: { year: 2023, endYear: null, __typename: 'YearRange' },
//           ratingsSummary: {
//             aggregateRating: 6.8,
//             voteCount: 84672,
//             __typename: 'RatingsSummary',
//           },
//           runtime: { seconds: 6540, __typename: 'Runtime' },
//           certificate: { rating: 'R', __typename: 'Certificate' },
//           canRate: { isRatable: true, __typename: 'CanRate' },
//           titleGenres: {
//             genres: [
//               {
//                 genre: { text: 'Action', __typename: 'GenreItem' },
//                 __typename: 'TitleGenre',
//               },
//               {
//                 genre: { text: 'Crime', __typename: 'GenreItem' },
//                 __typename: 'TitleGenre',
//               },
//               {
//                 genre: { text: 'Thriller', __typename: 'GenreItem' },
//                 __typename: 'TitleGenre',
//               },
//             ],
//             __typename: 'TitleGenres',
//           },
//           canHaveEpisodes: false,
//           __typename: 'Title',
//         },
//         __typename: 'MoreLikeThisEdge',
//       },
//       {
//         node: {
//           id: 'tt6349302',
//           titleText: { text: 'Sniper: Ultimate Kill', __typename: 'TitleText' },
//           titleType: {
//             id: 'movie',
//             text: 'Movie',
//             canHaveEpisodes: false,
//             displayableProperty: {
//               value: { plainText: '', __typename: 'Markdown' },
//               __typename: 'DisplayableTitleTypeProperty',
//             },
//             __typename: 'TitleType',
//           },
//           originalTitleText: {
//             text: 'Sniper: Ultimate Kill',
//             __typename: 'TitleText',
//           },
//           primaryImage: {
//             id: 'rm4087882240',
//             width: 393,
//             height: 521,
//             url: 'https://m.media-amazon.com/images/M/MV5BYjVmYWRmYjgtODEyNS00ZTgwLTg5NDYtMDcyNzQ3ZGUyOGUyXkEyXkFqcGdeQXVyOTg4MDYyNw@@._V1_.jpg',
//             caption: {
//               plainText:
//                 'Tom Berenger, Billy Zane, Chad Michael Collins, and Danay Garcia in Sniper: Ultimate Kill (2017)',
//               __typename: 'Markdown',
//             },
//             __typename: 'Image',
//           },
//           releaseYear: { year: 2017, endYear: null, __typename: 'YearRange' },
//           ratingsSummary: {
//             aggregateRating: 5.6,
//             voteCount: 5993,
//             __typename: 'RatingsSummary',
//           },
//           runtime: { seconds: 5400, __typename: 'Runtime' },
//           certificate: { rating: 'R', __typename: 'Certificate' },
//           canRate: { isRatable: true, __typename: 'CanRate' },
//           titleGenres: {
//             genres: [
//               {
//                 genre: { text: 'Action', __typename: 'GenreItem' },
//                 __typename: 'TitleGenre',
//               },
//               {
//                 genre: { text: 'Drama', __typename: 'GenreItem' },
//                 __typename: 'TitleGenre',
//               },
//               {
//                 genre: { text: 'Thriller', __typename: 'GenreItem' },
//                 __typename: 'TitleGenre',
//               },
//             ],
//             __typename: 'TitleGenres',
//           },
//           canHaveEpisodes: false,
//           __typename: 'Title',
//         },
//         __typename: 'MoreLikeThisEdge',
//       },
//       {
//         node: {
//           id: 'tt7876510',
//           titleText: {
//             text: 'My Thoughts Are Silent',
//             __typename: 'TitleText',
//           },
//           titleType: {
//             id: 'movie',
//             text: 'Movie',
//             canHaveEpisodes: false,
//             displayableProperty: {
//               value: { plainText: '', __typename: 'Markdown' },
//               __typename: 'DisplayableTitleTypeProperty',
//             },
//             __typename: 'TitleType',
//           },
//           originalTitleText: {
//             text: 'Moyi dumky tykhi',
//             __typename: 'TitleText',
//           },
//           primaryImage: {
//             id: 'rm78351361',
//             width: 1984,
//             height: 2835,
//             url: 'https://m.media-amazon.com/images/M/MV5BNzcxMzFmYzYtMjU0Mi00YTQzLWIwYzItN2NmZmY3NzRiNWMyXkEyXkFqcGdeQXVyMjk1NzAxNg@@._V1_.jpg',
//             caption: {
//               plainText:
//                 'Andriy Lidagovskiy and Irma Vitovska in My Thoughts Are Silent (2019)',
//               __typename: 'Markdown',
//             },
//             __typename: 'Image',
//           },
//           releaseYear: { year: 2019, endYear: null, __typename: 'YearRange' },
//           ratingsSummary: {
//             aggregateRating: 7.8,
//             voteCount: 3823,
//             __typename: 'RatingsSummary',
//           },
//           runtime: { seconds: 6240, __typename: 'Runtime' },
//           certificate: null,
//           canRate: { isRatable: true, __typename: 'CanRate' },
//           titleGenres: {
//             genres: [
//               {
//                 genre: { text: 'Comedy', __typename: 'GenreItem' },
//                 __typename: 'TitleGenre',
//               },
//               {
//                 genre: { text: 'Drama', __typename: 'GenreItem' },
//                 __typename: 'TitleGenre',
//               },
//             ],
//             __typename: 'TitleGenres',
//           },
//           canHaveEpisodes: false,
//           __typename: 'Title',
//         },
//         __typename: 'MoreLikeThisEdge',
//       },
//       {
//         node: {
//           id: 'tt10276554',
//           titleText: { text: 'Beshoot', __typename: 'TitleText' },
//           titleType: {
//             id: 'movie',
//             text: 'Movie',
//             canHaveEpisodes: false,
//             displayableProperty: {
//               value: { plainText: '', __typename: 'Markdown' },
//               __typename: 'DisplayableTitleTypeProperty',
//             },
//             __typename: 'TitleType',
//           },
//           originalTitleText: { text: 'Beshoot', __typename: 'TitleText' },
//           primaryImage: {
//             id: 'rm4260934145',
//             width: 501,
//             height: 709,
//             url: 'https://m.media-amazon.com/images/M/MV5BOGZhZWZhY2ItNjM5My00YmJiLTk0MjAtNzkwYjUxNjlkMGQzXkEyXkFqcGdeQXVyODg1MTc3MTM@._V1_.jpg',
//             caption: { plainText: 'Beshoot (2019)', __typename: 'Markdown' },
//             __typename: 'Image',
//           },
//           releaseYear: { year: 2019, endYear: null, __typename: 'YearRange' },
//           ratingsSummary: {
//             aggregateRating: 7.5,
//             voteCount: 592,
//             __typename: 'RatingsSummary',
//           },
//           runtime: { seconds: 7200, __typename: 'Runtime' },
//           certificate: null,
//           canRate: { isRatable: true, __typename: 'CanRate' },
//           titleGenres: {
//             genres: [
//               {
//                 genre: { text: 'Action', __typename: 'GenreItem' },
//                 __typename: 'TitleGenre',
//               },
//               {
//                 genre: { text: 'Drama', __typename: 'GenreItem' },
//                 __typename: 'TitleGenre',
//               },
//               {
//                 genre: { text: 'War', __typename: 'GenreItem' },
//                 __typename: 'TitleGenre',
//               },
//             ],
//             __typename: 'TitleGenres',
//           },
//           canHaveEpisodes: false,
//           __typename: 'Title',
//         },
//         __typename: 'MoreLikeThisEdge',
//       },
//       {
//         node: {
//           id: 'tt10330046',
//           titleText: { text: 'Censored', __typename: 'TitleText' },
//           titleType: {
//             id: 'movie',
//             text: 'Movie',
//             canHaveEpisodes: false,
//             displayableProperty: {
//               value: { plainText: '', __typename: 'Markdown' },
//               __typename: 'DisplayableTitleTypeProperty',
//             },
//             __typename: 'TitleType',
//           },
//           originalTitleText: { text: 'Zaboronenyy', __typename: 'TitleText' },
//           primaryImage: {
//             id: 'rm973182209',
//             width: 600,
//             height: 900,
//             url: 'https://m.media-amazon.com/images/M/MV5BMGRkYWVlNGQtYTM4ZC00MmFmLWI0YTMtYmU4MTgzNWUzNDVlXkEyXkFqcGdeQXVyMjk1NzAxNg@@._V1_.jpg',
//             caption: { plainText: 'Censored (2019)', __typename: 'Markdown' },
//             __typename: 'Image',
//           },
//           releaseYear: { year: 2019, endYear: null, __typename: 'YearRange' },
//           ratingsSummary: {
//             aggregateRating: 7.4,
//             voteCount: 834,
//             __typename: 'RatingsSummary',
//           },
//           runtime: { seconds: 6000, __typename: 'Runtime' },
//           certificate: null,
//           canRate: { isRatable: true, __typename: 'CanRate' },
//           titleGenres: {
//             genres: [
//               {
//                 genre: { text: 'Biography', __typename: 'GenreItem' },
//                 __typename: 'TitleGenre',
//               },
//               {
//                 genre: { text: 'Drama', __typename: 'GenreItem' },
//                 __typename: 'TitleGenre',
//               },
//               {
//                 genre: { text: 'History', __typename: 'GenreItem' },
//                 __typename: 'TitleGenre',
//               },
//             ],
//             __typename: 'TitleGenres',
//           },
//           canHaveEpisodes: false,
//           __typename: 'Title',
//         },
//         __typename: 'MoreLikeThisEdge',
//       },
//     ],
//     __typename: 'MoreLikeThisConnection',
//   },
//   trivia: {
//     edges: [
//       {
//         node: {
//           text: {
//             plaidHtml:
//               'This gritty and evocative film follows a physics teacher in the Donbas region who suffers a family tragedy at the hands of invading Russian troops. The ex-pacifist joins the army as an unconventional sniper determined to gain revenge and defend the future of his country.<br/><br/>It was created with support from the Ukrainian State Film Agency, was co-written by Mykola Voronin - the real-life sniper whose story is portrayed - and features about 100 members of the Ukrainian armed forces and national guard. Even aside from those career military personnel, several of the main cast members are currently fighting on the front lines.',
//             __typename: 'Markdown',
//           },
//           trademark: null,
//           relatedNames: null,
//           __typename: 'TitleTrivia',
//         },
//         __typename: 'TriviaEdge',
//       },
//     ],
//     __typename: 'TriviaConnection',
//   },
//   goofsTotal: { total: 0, __typename: 'GoofConnection' },
//   goofs: { edges: [], __typename: 'GoofConnection' },
//   quotesTotal: { total: 0, __typename: 'TitleQuoteConnection' },
//   quotes: { edges: [], __typename: 'TitleQuoteConnection' },
//   crazyCredits: { edges: [], __typename: 'CrazyCreditConnection' },
//   alternateVersions: {
//     total: 0,
//     edges: [],
//     __typename: 'AlternateVersionConnection',
//   },
//   connections: { edges: [], __typename: 'TitleConnectionConnection' },
//   soundtrack: { edges: [], __typename: 'SoundtrackConnection' },
//   iframeAddReviewLink: {
//     url: 'https://contribute.imdb.com/review/tt19465630/add?bus=imdb&return_url=https%3A%2F%2Fwww.imdb.com%2Fclose_me&site=web',
//     __typename: 'ContributionLink',
//   },
//   topQuestions: {
//     total: 15,
//     edges: [
//       {
//         node: {
//           attributeId: 'run-time',
//           question: {
//             plainText: 'How long is Sniper. The White Raven?',
//             __typename: 'Markdown',
//           },
//           __typename: 'AlexaQuestion',
//         },
//         __typename: 'AlexaQuestionEdge',
//       },
//     ],
//     __typename: 'AlexaQuestionConnection',
//   },
//   faqs: { total: 0, edges: [], __typename: 'FaqConnection' },
//   detailsExternalLinks: {
//     edges: [
//       {
//         node: {
//           url: 'https://wellgousa.com/films/sniper-white-raven',
//           label: 'official site',
//           externalLinkRegion: null,
//           __typename: 'ExternalLink',
//         },
//         __typename: 'ExternalLinkEdge',
//       },
//       {
//         node: {
//           url: 'http://www.wellgousa.com/films/sniper-the-white-raven',
//           label: 'US Distributor Company Site - film page',
//           externalLinkRegion: null,
//           __typename: 'ExternalLink',
//         },
//         __typename: 'ExternalLinkEdge',
//       },
//     ],
//     total: 3,
//     __typename: 'ExternalLinkConnection',
//   },
//   spokenLanguages: {
//     spokenLanguages: [
//       { id: 'uk', text: 'Ukrainian', __typename: 'SpokenLanguage' },
//       { id: 'ru', text: 'Russian', __typename: 'SpokenLanguage' },
//     ],
//     __typename: 'SpokenLanguages',
//   },
//   akas: {
//     edges: [
//       {
//         node: {
//           text: '\u0421\u043d\u0430\u0439\u043f\u0435\u0440. \u0411\u0456\u043b\u0438\u0439 \u0432\u043e\u0440\u043e\u043d',
//           __typename: 'Aka',
//         },
//         __typename: 'AkaEdge',
//       },
//     ],
//     __typename: 'AkaConnection',
//   },
//   filmingLocations: {
//     edges: [],
//     total: 0,
//     __typename: 'FilmingLocationConnection',
//   },
//   companies: { total: 9, __typename: 'CompanyCreditConnection' },
//   productionBudget: {
//     budget: { amount: 997800, currency: 'EUR', __typename: 'Money' },
//     __typename: 'ProductionBudget',
//   },
//   lifetimeGross: {
//     total: { amount: 881, currency: 'USD', __typename: 'Money' },
//     __typename: 'BoxOfficeGross',
//   },
//   openingWeekendGross: {
//     gross: {
//       total: { amount: 881, currency: 'USD', __typename: 'Money' },
//       __typename: 'BoxOfficeGross',
//     },
//     weekendEndDate: '2022-07-03',
//     __typename: 'OpeningWeekendGross',
//   },
//   worldwideGross: {
//     total: { amount: 6105, currency: 'USD', __typename: 'Money' },
//     __typename: 'BoxOfficeGross',
//   },
//   technicalSpecifications: {
//     soundMixes: { items: [], __typename: 'SoundMixes' },
//     aspectRatios: {
//       items: [
//         { aspectRatio: '2.39:1', attributes: [], __typename: 'AspectRatio' },
//       ],
//       __typename: 'AspectRatios',
//     },
//     colorations: {
//       items: [
//         {
//           conceptId: 'color',
//           text: 'Color',
//           attributes: [],
//           __typename: 'Coloration',
//         },
//       ],
//       __typename: 'Colorations',
//     },
//     __typename: 'TechnicalSpecifications',
//   },
//   contributionQuestions: {
//     contributionLink: {
//       url: 'https://contribute.imdb.com/answers',
//       __typename: 'ContributionQuestionsLink',
//     },
//     edges: [
//       {
//         node: {
//           entity: {
//             primaryImage: {
//               url: 'https://m.media-amazon.com/images/M/MV5BNWMwOTgyNmMtYWNlYS00NGIyLTllOWYtZTVlNzU3N2ViZWQ5XkEyXkFqcGdeQXVyMzk3OTUyMDY@._V1_.jpg',
//               width: 1181,
//               height: 1772,
//               caption: {
//                 plainText: 'Pavlo Aldoshyn in Sniper. The White Raven (2022)',
//                 __typename: 'Markdown',
//               },
//               __typename: 'Image',
//             },
//             __typename: 'Title',
//           },
//           questionId: 'tt19465630.plot_outline.fr-CA',
//           questionText: {
//             plainText:
//               'What is the Canadian French language plot outline for Sniper. The White Raven (2022)?',
//             __typename: 'Markdown',
//           },
//           contributionLink: {
//             url: 'https://contribute.imdb.com/answers?pinnedQuestion=tt19465630.plot_outline.fr-CA',
//             __typename: 'ContributionQuestionsLink',
//           },
//           __typename: 'Question',
//         },
//         __typename: 'QuestionEdge',
//       },
//     ],
//     __typename: 'QuestionConnection',
//   },
// };
const sampleFromTestingFn = [
  {
    id: 'tt19465630',
    productionStatus: {
      currentProductionStage: {
        id: 'released',
        text: 'Released',
        __typename: 'ProductionStage',
      },
      productionStatusHistory: [
        {
          status: {
            id: 'released',
            text: 'Released',
            __typename: 'ProductionStatus',
          },
          __typename: 'ProductionStatusHistory',
        },
      ],
      restriction: null,
      __typename: 'ProductionStatusDetails',
    },
    canHaveEpisodes: false,
    series: null,
    titleText: { text: 'Sniper. The White Raven', __typename: 'TitleText' },
    titleType: { id: 'movie', canHaveEpisodes: false, __typename: 'TitleType' },
    originalTitleText: {
      text: 'Sniper. The White Raven',
      __typename: 'TitleText',
    },
    certificate: { rating: 'R', __typename: 'Certificate' },
    releaseYear: { year: 2022, __typename: 'YearRange' },
    releaseDate: {
      day: 24,
      month: 8,
      year: 2022,
      country: {
        id: 'UA',
        text: 'Ukraine',
        __typename: 'LocalizedDisplayableCountry',
      },
      __typename: 'ReleaseDate',
    },
    runtime: { seconds: 6660, __typename: 'Runtime' },
    canRate: { isRatable: true, __typename: 'CanRate' },
    ratingsSummary: { topRanking: null, __typename: 'RatingsSummary' },
    meterRanking: {
      currentRank: 2519,
      rankChange: {
        changeDirection: 'UP',
        difference: 1534,
        __typename: 'MeterRankChange',
      },
      __typename: 'TitleMeterRanking',
    },
    primaryImage: { id: 'rm1439244033', __typename: 'Image' },
    images: {
      total: 7,
      edges: [
        {
          node: { id: 'rm2361990913', __typename: 'Image' },
          __typename: 'ImageEdge',
        },
      ],
      __typename: 'ImageConnection',
    },
    videos: { total: 3, __typename: 'TitleRelatedVideosConnection' },
    primaryVideos: {
      edges: [
        {
          node: {
            id: 'vi787071513',
            createdDate: '2022-06-06T17:09:03.553Z',
            isMature: false,
            runtime: { value: 129, __typename: 'VideoRuntime' },
            name: {
              value: 'Official Trailer',
              language: 'uk',
              __typename: 'LocalizedString',
            },
            description: {
              value:
                'After suffering a tragedy at the hand of invading soldiers in Donbas, an Ukrainian physics teacher seeks revenge. He sets his sights on an elite Russian sniper whose elimination could change the tide of the conflict.',
              language: 'uk',
              __typename: 'LocalizedString',
            },
            timedTextTracks: [],
            recommendedTimedTextTrack: null,
            thumbnail: {
              url: 'https://m.media-amazon.com/images/M/MV5BMjYyNDMwN2MtNTAyZS00NDBkLWI5ZTktMzA3ZGU5NDRlMWY4XkEyXkFqcGdeQWRpZWdtb25n._V1_.jpg',
              height: 1080,
              width: 1920,
              __typename: 'Thumbnail',
            },
            primaryTitle: {
              id: 'tt19465630',
              titleText: {
                text: 'Sniper. The White Raven',
                __typename: 'TitleText',
              },
              originalTitleText: {
                text: 'Sniper. The White Raven',
                __typename: 'TitleText',
              },
              releaseYear: { year: 2022, __typename: 'YearRange' },
              __typename: 'Title',
            },
            playbackURLs: [
              {
                displayName: {
                  value: '480p',
                  language: 'en-US',
                  __typename: 'LocalizedString',
                },
                videoMimeType: 'MP4',
                videoDefinition: 'DEF_480p',
                url: 'https://imdb-video.media-imdb.com/vi787071513/1434659607842-pgv4ql-1654535344437.mp4?Expires=1704594378&Signature=pk9oLzJ7nmRPWziOoPqahnfl1pneZBj~QozltPVrlatPp1zzkQ2j0i1rWC4-R6PIrfFhTzAyEyY2pXlpFo4EP98U4sfDGct12M5U7w6TvG11CmYxuXEZ8uooIjR64ZDAL0L2shne8V8soqSDobNTUhECPhMcB3F6XXQ9SC7dqTWxVVyOW6~SJMZod~OhdNX73dTCkrIZeZU7wKBoanFva-xofPCEzIlRWbyFckbH6tgMCBM6VEyIUT0bn-xnLuklPEGqNpaZCJGjDTYCcxaDJ5GmtXuHwfOa6rMadZS0lCbKedV-t-w9HrZj8lwcbdLWHEPpVveO9hs4RGbSyKd8qA__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
                __typename: 'PlaybackURL',
              },
              {
                displayName: {
                  value: 'SD',
                  language: 'en-US',
                  __typename: 'LocalizedString',
                },
                videoMimeType: 'MP4',
                videoDefinition: 'DEF_SD',
                url: 'https://imdb-video.media-imdb.com/vi787071513/1434659454657-dx9ykf-1654535344437.mp4?Expires=1704594378&Signature=AYZnXpjVl7gGYNhWeblMyFJstwdwT3eRC4GdfG70XlNfcGldz3Wxyvi0Box6~WgXkPGeO828~whVObwKZ27alF3BcgVlOWyUxzq5lnUmxR0vKqxt4gm0S8TtYVRPwwuq6xyvyDipCrH-LSxg~5nkou4jNsjvZh0siyHi~mUJ-CDVypapq0vNwBsyXvInoRiqqVHW~rc-0mk3Sur8GWVjCdHSYfN32EjZk4zxrWEMUeoFGxuNafykXfBhv89O-6AKnS5brV~5lBBzpmn-tL0PctWZiVDFHbrQ1g4ilipeMNeckqOGgz4GE19i0CnWPY~ySiVGNFJfb13Qe6M~eakugA__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
                __typename: 'PlaybackURL',
              },
            ],
            contentType: {
              id: 'amzn1.imdb.video.contenttype.trailer',
              displayName: { value: 'Trailer', __typename: 'LocalizedString' },
              __typename: 'VideoContentType',
            },
            previewURLs: [
              {
                displayName: {
                  value: 'AUTO',
                  language: 'en-US',
                  __typename: 'LocalizedString',
                },
                videoMimeType: 'M3U8',
                videoDefinition: 'DEF_AUTO',
                url: 'https://imdb-video.media-imdb.com/vi787071513/hls-preview-79353ff1-9750-49d0-8f07-f8d72a396b4b.m3u8?Expires=1704594378&Signature=FAjZQw6fU-60FSeAODxL1nuetmYdE1u1EdJ9Ke5r4TZPx-ZGdO8cwok-IQwlMz3b4zuFTgDB32nHJBLJm6QoGhC6fKiAMJP0i7CdULOERNz2f-IniRzLyD4eKgb5hYEfc6f2St28XjLfumHICcGK5RwrlKnHwviX~VgSHozUkzFnnly9-yX3YEeMKQ44rDMYV5Il2jAzi3qAA9FIZt7F6T2bj2opNm0hItS8n4aAolU-80wXtmobZWLOELBdp6NJvGcsgKmutxjClb2c6TOXhE~wOvCA0CSepGd1d7nLkRhqrsUR1gEZMON5M8FXvKRrM81~58D~XYCBqfL6k5RCIg__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
                __typename: 'PlaybackURL',
              },
            ],
            __typename: 'Video',
          },
          __typename: 'VideoEdge',
        },
        {
          node: {
            id: 'vi1334755865',
            createdDate: '2022-05-17T15:34:59.035Z',
            isMature: false,
            runtime: { value: 137, __typename: 'VideoRuntime' },
            name: {
              value: 'Teaser Trailer',
              language: 'uk',
              __typename: 'LocalizedString',
            },
            description: {
              value:
                "Mykola is an eccentric pacifist who wants to be useful to humanity. When the war begins at Donbass, Mykola's naive world is collapsing as the militants kill his pregnant wife and burn his home to the ground.",
              language: 'uk',
              __typename: 'LocalizedString',
            },
            timedTextTracks: [],
            recommendedTimedTextTrack: null,
            thumbnail: {
              url: 'https://m.media-amazon.com/images/M/MV5BYjcyZThmYmUtZTFjMC00YzU5LWFkYzItNGNiNjUzMWJhYTJkXkEyXkFqcGdeQWRpZWdtb25n._V1_.jpg',
              height: 1080,
              width: 1920,
              __typename: 'Thumbnail',
            },
            primaryTitle: {
              id: 'tt19465630',
              titleText: {
                text: 'Sniper. The White Raven',
                __typename: 'TitleText',
              },
              originalTitleText: {
                text: 'Sniper. The White Raven',
                __typename: 'TitleText',
              },
              releaseYear: { year: 2022, __typename: 'YearRange' },
              __typename: 'Title',
            },
            playbackURLs: [
              {
                displayName: {
                  value: '480p',
                  language: 'en-US',
                  __typename: 'LocalizedString',
                },
                videoMimeType: 'MP4',
                videoDefinition: 'DEF_480p',
                url: 'https://imdb-video.media-imdb.com/vi1334755865/1434659607842-pgv4ql-1652801699420.mp4?Expires=1704594378&Signature=FR569ZnbklrWDAqaMAsKcARJ~36uYBmYKid5iS~RvuftTBiTCXyCWVFDEyGg4BgnJxbNQGWU8k0EKG-SXeTl6cWsh0yrsoBVASekGpG6lll-lugWN4iujn6dPRNinxC~IcXkGD55GV9SKrUWsxOw9FqBEpll1Vr1a~ZOpsnCRXqrtAlBMUl2lskUDXzQTohViIPsKbhwI8Vv6qMu0CLGqITzcdDqJ9dkA0vyDyxU2xDwh7eMnlzmtz~EPIntyNHoHZkIUMG9kiDvFH0BvXB1tsFAnPhaUXoasQoW2tC-3b8FmsGwlBgoUrQhojpq~NLgvV-6u6QmGcWivo4tXDVEyw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
                __typename: 'PlaybackURL',
              },
              {
                displayName: {
                  value: 'SD',
                  language: 'en-US',
                  __typename: 'LocalizedString',
                },
                videoMimeType: 'MP4',
                videoDefinition: 'DEF_SD',
                url: 'https://imdb-video.media-imdb.com/vi1334755865/1434659454657-dx9ykf-1652801699420.mp4?Expires=1704594378&Signature=bnrJMp2eaobQQ2iV~T-liA4muWWwLMhERyrmd99GBSJdpuOcDqbo9Vn6lR56YgWbNlRKwvNUAPl1HkP~jP3jOoo7bwdg6Te4t-uwSxYIHMjrdJTr0Rrhfb7ecPmOqk7vsAH87afPsuJccPwiIKlP4uAi~HwUcH91mFl2SzJ5Jh-kNhOD8s1dhQ5FpZvZkuAwqecMvcNm-pn1BuEMtCEgyWYByd6Dpln8OF1cFiAJuOOoSbodTqGffvoK6YSBxJwg2ttcjXM342KRv34AKk0KpVgG9iNaZGD3-DBBmPRknxiOC-mv9l~MTz2kyzrR2~2lcGHlLhuuWfguCfORSHKPDQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
                __typename: 'PlaybackURL',
              },
            ],
            contentType: {
              id: 'amzn1.imdb.video.contenttype.trailer',
              displayName: { value: 'Trailer', __typename: 'LocalizedString' },
              __typename: 'VideoContentType',
            },
            previewURLs: [
              {
                displayName: {
                  value: 'AUTO',
                  language: 'en-US',
                  __typename: 'LocalizedString',
                },
                videoMimeType: 'M3U8',
                videoDefinition: 'DEF_AUTO',
                url: 'https://imdb-video.media-imdb.com/vi1334755865/hls-preview-a6117403-2798-4aea-87a8-ca26d1b444e7.m3u8?Expires=1704594378&Signature=m6HWwCHE8051mY53lnERHSzIdMq-OK~sLLgol6mQVeQXbzMNRtCzfWrEWNV0vSRTvdSsHEjWMmOqd1P-wi4r~q~xA2cKcVdJlyssqmwLNXIHYxuJkV1qfsMV77F08djeCmQEK9ipru30TvMSWu8GceQwCIS22Yz2bPNjQ5NgAXmRdAa6DSjGIrhymAsTEU3QbYCvLPDn94FKeskY1TYkmojficXWWzM6cZ1IWvbXNwUp3QdSmCTb~NAVQPF9cAfBmczK1tGr5Rysbpo9A0kqUV-S3f14Xp1G7hdhOBTsxz3wRvgdzvj5d8B49Qo-f9l05TGch1G04zoHm7HR1eoz-A__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
                __typename: 'PlaybackURL',
              },
            ],
            __typename: 'Video',
          },
          __typename: 'VideoEdge',
        },
      ],
      __typename: 'VideoConnection',
    },
    externalLinks: { total: 28, __typename: 'ExternalLinkConnection' },
    metacritic: {
      metascore: { score: 54, __typename: 'Metascore' },
      __typename: 'Metacritic',
    },
    keywords: {
      total: 43,
      edges: [
        {
          node: {
            text: 'russian occupation of ukraine',
            __typename: 'TitleKeyword',
          },
          __typename: 'TitleKeywordEdge',
        },
        {
          node: { text: 'loss of wife', __typename: 'TitleKeyword' },
          __typename: 'TitleKeywordEdge',
        },
        {
          node: {
            text: 'husband wife relationship',
            __typename: 'TitleKeyword',
          },
          __typename: 'TitleKeywordEdge',
        },
        {
          node: {
            text: 'ukrainian russian relations',
            __typename: 'TitleKeyword',
          },
          __typename: 'TitleKeywordEdge',
        },
        {
          node: { text: 'eastern europe', __typename: 'TitleKeyword' },
          __typename: 'TitleKeywordEdge',
        },
      ],
      __typename: 'TitleKeywordConnection',
    },
    genres: {
      genres: [
        { text: 'Drama', id: 'Drama', __typename: 'Genre' },
        { text: 'War', id: 'War', __typename: 'Genre' },
      ],
      __typename: 'Genres',
    },
    plot: {
      plotText: {
        plainText:
          'After suffering a tragedy at the hand of invading soldiers in Donbas, an Ukrainian physics teacher seeks revenge. He sets his sights on an elite Russian sniper whose elimination could change the tide of the conflict.',
        __typename: 'Markdown',
      },
      language: { id: 'en-US', __typename: 'DisplayableLanguage' },
      __typename: 'Plot',
    },
    plotContributionLink: {
      url: 'https://contribute.imdb.com/updates?update=tt19465630:outlines.add.1.locale~en-US',
      __typename: 'ContributionLink',
    },
    credits: { total: 68, __typename: 'CreditConnection' },
    principalCredits: [
      {
        totalCredits: 1,
        category: {
          text: 'Director',
          id: 'director',
          __typename: 'CreditCategory',
        },
        credits: [
          {
            name: {
              nameText: { text: 'Marian Bushan', __typename: 'NameText' },
              id: 'nm11595610',
              __typename: 'Name',
            },
            attributes: null,
            __typename: 'Crew',
          },
        ],
        __typename: 'PrincipalCreditsForCategory',
      },
      {
        totalCredits: 2,
        category: {
          text: 'Writers',
          id: 'writer',
          __typename: 'CreditCategory',
        },
        credits: [
          {
            name: {
              nameText: { text: 'Marian Bushan', __typename: 'NameText' },
              id: 'nm11595610',
              __typename: 'Name',
            },
            attributes: null,
            __typename: 'Crew',
          },
          {
            name: {
              nameText: { text: 'Mykola Voronin', __typename: 'NameText' },
              id: 'nm13887614',
              __typename: 'Name',
            },
            attributes: null,
            __typename: 'Crew',
          },
        ],
        __typename: 'PrincipalCreditsForCategory',
      },
      {
        totalCredits: 32,
        category: { text: 'Stars', id: 'cast', __typename: 'CreditCategory' },
        credits: [
          {
            name: {
              nameText: { text: 'Pavlo Aldoshyn', __typename: 'NameText' },
              id: 'nm3838884',
              __typename: 'Name',
            },
            attributes: null,
            __typename: 'Cast',
          },
          {
            name: {
              nameText: { text: 'Maryna Koshkina', __typename: 'NameText' },
              id: 'nm9582810',
              __typename: 'Name',
            },
            attributes: null,
            __typename: 'Cast',
          },
          {
            name: {
              nameText: { text: 'Andrey Mostrenko', __typename: 'NameText' },
              id: 'nm5643878',
              __typename: 'Name',
            },
            attributes: null,
            __typename: 'Cast',
          },
        ],
        __typename: 'PrincipalCreditsForCategory',
      },
    ],
    reviews: { total: 51, __typename: 'ReviewsConnection' },
    criticReviewsTotal: { total: 22, __typename: 'ExternalLinkConnection' },
    triviaTotal: { total: 1, __typename: 'TriviaConnection' },
    engagementStatistics: {
      watchlistStatistics: {
        displayableCount: {
          text: 'Added by 9.9K users',
          __typename: 'LocalizedDisplayableCount',
        },
        __typename: 'WatchlistStatistics',
      },
      __typename: 'EngagementStatistics',
    },
    subNavCredits: { total: 68, __typename: 'CreditConnection' },
    subNavReviews: { total: 51, __typename: 'ReviewsConnection' },
    subNavTrivia: { total: 1, __typename: 'TriviaConnection' },
    subNavFaqs: { total: 0, __typename: 'FaqConnection' },
    subNavTopQuestions: { total: 15, __typename: 'AlexaQuestionConnection' },
    titleGenres: {
      genres: [
        {
          genre: { text: 'Drama', __typename: 'GenreItem' },
          __typename: 'TitleGenre',
        },
        {
          genre: { text: 'War', __typename: 'GenreItem' },
          __typename: 'TitleGenre',
        },
      ],
      __typename: 'TitleGenres',
    },
    meta: {
      canonicalId: 'tt19465630',
      publicationStatus: 'PUBLISHED',
      __typename: 'TitleMeta',
    },
    castPageTitle: {
      edges: [
        {
          node: {
            name: {
              nameText: { text: 'Pavlo Aldoshyn', __typename: 'NameText' },
              __typename: 'Name',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              nameText: { text: 'Maryna Koshkina', __typename: 'NameText' },
              __typename: 'Name',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              nameText: { text: 'Andrey Mostrenko', __typename: 'NameText' },
              __typename: 'Name',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              nameText: { text: 'Roman Semysal', __typename: 'NameText' },
              __typename: 'Name',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
      ],
      __typename: 'CreditConnection',
    },
    creatorsPageTitle: [],
    directorsPageTitle: [
      {
        credits: [
          {
            name: {
              nameText: { text: 'Marian Bushan', __typename: 'NameText' },
              __typename: 'Name',
            },
            __typename: 'Crew',
          },
        ],
        __typename: 'PrincipalCreditsForCategory',
      },
    ],
    countriesOfOrigin: {
      countries: [{ id: 'UA', text: 'Ukraine', __typename: 'CountryOfOrigin' }],
      __typename: 'CountriesOfOrigin',
    },
    production: {
      edges: [
        {
          node: {
            company: {
              id: 'co0750475',
              companyText: { text: 'UM Group', __typename: 'CompanyText' },
              __typename: 'Company',
            },
            __typename: 'CompanyCredit',
          },
          __typename: 'CompanyCreditEdge',
        },
      ],
      __typename: 'CompanyCreditConnection',
    },
    featuredReviews: {
      edges: [
        {
          node: {
            id: 'rw8387911',
            author: {
              nickName: 'nhmbwngrt',
              userId: 'ur155200617',
              __typename: 'UserProfile',
            },
            summary: {
              originalText: 'Unfortunately very real',
              __typename: 'ReviewSummary',
            },
            text: {
              originalText: {
                plaidHtml:
                  'I see a lot of 1 star ratings but all this are from russians watching this movie.<br/><br/>So I had to give 10 stars but in fact its 7-8 star movie. Definetely watchable and good spent time.',
                __typename: 'Markdown',
              },
              __typename: 'ReviewText',
            },
            authorRating: 10,
            submissionDate: '2022-07-31',
            helpfulness: {
              upVotes: 53,
              downVotes: 37,
              __typename: 'ReviewHelpfulness',
            },
            __typename: 'Review',
          },
          __typename: 'ReviewEdge',
        },
      ],
      __typename: 'ReviewsConnection',
    },
    __typename: 'Title',
    wins: { total: 0, __typename: 'AwardNominationConnection' },
    nominations: { total: 3, __typename: 'AwardNominationConnection' },
    prestigiousAwardSummary: null,
    episodes: null,
    videoStrip: {
      edges: [
        {
          node: {
            id: 'vi787071513',
            contentType: {
              displayName: { value: 'Trailer', __typename: 'LocalizedString' },
              __typename: 'VideoContentType',
            },
            name: { value: 'Official Trailer', __typename: 'LocalizedString' },
            runtime: { value: 129, __typename: 'VideoRuntime' },
            thumbnail: {
              height: 1080,
              url: 'https://m.media-amazon.com/images/M/MV5BMjYyNDMwN2MtNTAyZS00NDBkLWI5ZTktMzA3ZGU5NDRlMWY4XkEyXkFqcGdeQWRpZWdtb25n._V1_.jpg',
              width: 1920,
              __typename: 'Thumbnail',
            },
            __typename: 'Video',
          },
          __typename: 'VideoEdge',
        },
        {
          node: {
            id: 'vi1334755865',
            contentType: {
              displayName: { value: 'Trailer', __typename: 'LocalizedString' },
              __typename: 'VideoContentType',
            },
            name: { value: 'Teaser Trailer', __typename: 'LocalizedString' },
            runtime: { value: 137, __typename: 'VideoRuntime' },
            thumbnail: {
              height: 1080,
              url: 'https://m.media-amazon.com/images/M/MV5BYjcyZThmYmUtZTFjMC00YzU5LWFkYzItNGNiNjUzMWJhYTJkXkEyXkFqcGdeQWRpZWdtb25n._V1_.jpg',
              width: 1920,
              __typename: 'Thumbnail',
            },
            __typename: 'Video',
          },
          __typename: 'VideoEdge',
        },
        {
          node: {
            id: 'vi2515386905',
            contentType: {
              displayName: { value: 'Trailer', __typename: 'LocalizedString' },
              __typename: 'VideoContentType',
            },
            name: {
              value: 'Sniper. The White Raven',
              __typename: 'LocalizedString',
            },
            runtime: { value: 129, __typename: 'VideoRuntime' },
            thumbnail: {
              height: 1080,
              url: 'https://m.media-amazon.com/images/M/MV5BYzQyZGJmNDEtYmU1MS00MGQ3LWE4MjEtMjc1ZDVmOTU0ZjY0XkEyXkFqcGdeQVRoaXJkUGFydHlJbmdlc3Rpb25Xb3JrZmxvdw@@._V1_.jpg',
              width: 1920,
              __typename: 'Thumbnail',
            },
            __typename: 'Video',
          },
          __typename: 'VideoEdge',
        },
      ],
      __typename: 'VideoConnection',
    },
    titleMainImages: {
      total: 7,
      edges: [
        {
          node: {
            id: 'rm2361990913',
            url: 'https://m.media-amazon.com/images/M/MV5BNzU4YTZhNGItYWU2MS00MDU5LWFkMTUtZDVmNDM2N2NlNjk0XkEyXkFqcGdeQXVyMzk3OTUyMDY@._V1_.jpg',
            caption: {
              plainText: 'Sniper. The White Raven (2022)',
              __typename: 'Markdown',
            },
            height: 791,
            width: 1815,
            __typename: 'Image',
          },
          __typename: 'ImageEdge',
        },
        {
          node: {
            id: 'rm3167297281',
            url: 'https://m.media-amazon.com/images/M/MV5BZmQ3ZWI3ZjQtZDhiOC00ZGMyLWE3NGItNzk0OGNkOGZlOTE0XkEyXkFqcGdeQXVyMzk3OTUyMDY@._V1_.jpg',
            caption: {
              plainText: 'Pavlo Aldoshyn in Sniper. The White Raven (2022)',
              __typename: 'Markdown',
            },
            height: 795,
            width: 1821,
            __typename: 'Image',
          },
          __typename: 'ImageEdge',
        },
        {
          node: {
            id: 'rm2697535233',
            url: 'https://m.media-amazon.com/images/M/MV5BY2MwNDkxZTgtNjI1Ni00NmUxLWI0ZTctN2I5ZmFiZTA5MjY5XkEyXkFqcGdeQXVyMzk3OTUyMDY@._V1_.jpg',
            caption: {
              plainText: 'Sniper. The White Raven (2022)',
              __typename: 'Markdown',
            },
            height: 791,
            width: 1811,
            __typename: 'Image',
          },
          __typename: 'ImageEdge',
        },
        {
          node: {
            id: 'rm1489575681',
            url: 'https://m.media-amazon.com/images/M/MV5BZTk0OGI3ZDEtZmFhOS00NGYxLWI0YWQtYTg0YjFkMGExZDE1XkEyXkFqcGdeQXVyMzk3OTUyMDY@._V1_.jpg',
            caption: {
              plainText: 'Sniper. The White Raven (2022)',
              __typename: 'Markdown',
            },
            height: 793,
            width: 1817,
            __typename: 'Image',
          },
          __typename: 'ImageEdge',
        },
        {
          node: {
            id: 'rm356781569',
            url: 'https://m.media-amazon.com/images/M/MV5BYzRiMmFlN2UtMmM3ZS00NTJiLTk0N2UtZmExNzkyZWQ5YjhlXkEyXkFqcGdeQXVyMTE5MTg5NDIw._V1_.jpg',
            caption: {
              plainText: 'Pavlo Aldoshyn in Sniper. The White Raven (2022)',
              __typename: 'Markdown',
            },
            height: 3000,
            width: 2000,
            __typename: 'Image',
          },
          __typename: 'ImageEdge',
        },
        {
          node: {
            id: 'rm1026951169',
            url: 'https://m.media-amazon.com/images/M/MV5BMDRiODE1MDctMTU5Yy00OGJkLTljNzAtNGRkOTYwYmFhNTJjXkEyXkFqcGdeQXVyMTE5MTg5NDIw._V1_.jpg',
            caption: {
              plainText: 'Pavlo Aldoshyn in Sniper. The White Raven (2022)',
              __typename: 'Markdown',
            },
            height: 1772,
            width: 1181,
            __typename: 'Image',
          },
          __typename: 'ImageEdge',
        },
        {
          node: {
            id: 'rm1439244033',
            url: 'https://m.media-amazon.com/images/M/MV5BNWMwOTgyNmMtYWNlYS00NGIyLTllOWYtZTVlNzU3N2ViZWQ5XkEyXkFqcGdeQXVyMzk3OTUyMDY@._V1_.jpg',
            caption: {
              plainText: 'Pavlo Aldoshyn in Sniper. The White Raven (2022)',
              __typename: 'Markdown',
            },
            height: 1772,
            width: 1181,
            __typename: 'Image',
          },
          __typename: 'ImageEdge',
        },
      ],
      __typename: 'ImageConnection',
    },
    imageUploadLink: {
      url: 'https://contribute.imdb.com/image/tt19465630/add?bus=imdb&return_url=https%3A%2F%2Fwww.imdb.com%2Fclose_me&site=web',
      __typename: 'ContributionLink',
    },
    cast: {
      edges: [
        {
          node: {
            name: {
              id: 'nm3838884',
              nameText: { text: 'Pavlo Aldoshyn', __typename: 'NameText' },
              primaryImage: null,
              __typename: 'Name',
            },
            attributes: null,
            category: { id: 'actor', __typename: 'CreditCategory' },
            characters: [{ name: 'Mykola', __typename: 'Character' }],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm9582810',
              nameText: { text: 'Maryna Koshkina', __typename: 'NameText' },
              primaryImage: {
                url: 'https://m.media-amazon.com/images/M/MV5BYTM1MGRkMzgtMTFmZS00NjU4LWIwOGYtNjhmODY0MWJmMzE4XkEyXkFqcGdeQXVyMTc4MzI2NQ@@._V1_.jpg',
                width: 1280,
                height: 720,
                __typename: 'Image',
              },
              __typename: 'Name',
            },
            attributes: null,
            category: { id: 'actress', __typename: 'CreditCategory' },
            characters: [{ name: 'Nastya', __typename: 'Character' }],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm5643878',
              nameText: { text: 'Andrey Mostrenko', __typename: 'NameText' },
              primaryImage: null,
              __typename: 'Name',
            },
            attributes: [
              {
                text: 'as Andriy Mostrenko',
                __typename: 'CreditedAsCreditAttribute',
              },
            ],
            category: { id: 'actor', __typename: 'CreditCategory' },
            characters: [{ name: 'Cap', __typename: 'Character' }],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm9457418',
              nameText: { text: 'Roman Semysal', __typename: 'NameText' },
              primaryImage: null,
              __typename: 'Name',
            },
            attributes: null,
            category: { id: 'actor', __typename: 'CreditCategory' },
            characters: [
              { name: 'Brigade commander', __typename: 'Character' },
            ],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm0236618',
              nameText: { text: 'Oleg Drach', __typename: 'NameText' },
              primaryImage: {
                url: 'https://m.media-amazon.com/images/M/MV5BYzE0Y2UwZjgtYjE0OC00OGNjLThlMWQtNWU0MDNlNmNjZTVmXkEyXkFqcGdeQXVyMTMzOTU3MDcz._V1_.jpg',
                width: 261,
                height: 420,
                __typename: 'Image',
              },
              __typename: 'Name',
            },
            attributes: null,
            category: { id: 'actor', __typename: 'CreditCategory' },
            characters: [{ name: 'Syeryy', __typename: 'Character' }],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm7424662',
              nameText: { text: 'Roman Yasinovskiy', __typename: 'NameText' },
              primaryImage: {
                url: 'https://m.media-amazon.com/images/M/MV5BN2M0NmFiZmQtMTZlZi00MWNiLTlhMjAtMjA4NWNmNjc2MThlXkEyXkFqcGdeQXVyNjg3MTIwODI@._V1_.jpg',
                width: 2048,
                height: 1281,
                __typename: 'Image',
              },
              __typename: 'Name',
            },
            attributes: null,
            category: { id: 'actor', __typename: 'CreditCategory' },
            characters: [{ name: 'Klym', __typename: 'Character' }],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm9236420',
              nameText: { text: 'Oleg Shulga', __typename: 'NameText' },
              primaryImage: {
                url: 'https://m.media-amazon.com/images/M/MV5BZWM5NTdhMDAtYmRiNC00NWY3LWFhN2UtZmQ4N2IxZmQyZjIxXkEyXkFqcGdeQXVyNTc0NjY1ODk@._V1_.jpg',
                width: 960,
                height: 960,
                __typename: 'Image',
              },
              __typename: 'Name',
            },
            attributes: null,
            category: { id: 'actor', __typename: 'CreditCategory' },
            characters: [{ name: 'Dunay', __typename: 'Character' }],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm9201438',
              nameText: { text: 'Vadim Lyalko', __typename: 'NameText' },
              primaryImage: null,
              __typename: 'Name',
            },
            attributes: [
              {
                text: 'as Vadym Lyalko',
                __typename: 'CreditedAsCreditAttribute',
              },
            ],
            category: { id: 'actor', __typename: 'CreditCategory' },
            characters: [
              { name: 'Commander of the GRU (Buryy)', __typename: 'Character' },
            ],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm8247168',
              nameText: { text: 'Vadim Kurilko', __typename: 'NameText' },
              primaryImage: {
                url: 'https://m.media-amazon.com/images/M/MV5BZGQyY2M0ZTItNzJlMy00YWViLTkxNGUtYTZkMzk2YzcwOTUzXkEyXkFqcGdeQXVyNjg3MTIwODI@._V1_.jpg',
                width: 540,
                height: 435,
                __typename: 'Image',
              },
              __typename: 'Name',
            },
            attributes: [
              {
                text: 'as Vadym Kurylko',
                __typename: 'CreditedAsCreditAttribute',
              },
            ],
            category: { id: 'actor', __typename: 'CreditCategory' },
            characters: [{ name: 'Hyurza', __typename: 'Character' }],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm12115530',
              nameText: { text: 'Vladyslav Dmytrenko', __typename: 'NameText' },
              primaryImage: null,
              __typename: 'Name',
            },
            attributes: null,
            category: { id: 'actor', __typename: 'CreditCategory' },
            characters: [{ name: 'Malysh', __typename: 'Character' }],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm10823253',
              nameText: { text: 'Eugen Volosheniuk', __typename: 'NameText' },
              primaryImage: null,
              __typename: 'Name',
            },
            attributes: [
              {
                text: 'as Yevhen Voloshenyuk',
                __typename: 'CreditedAsCreditAttribute',
              },
            ],
            category: { id: 'actor', __typename: 'CreditCategory' },
            characters: [{ name: 'Batyanya', __typename: 'Character' }],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm11383417',
              nameText: { text: 'Oleksandr Bykov', __typename: 'NameText' },
              primaryImage: null,
              __typename: 'Name',
            },
            attributes: null,
            category: { id: 'actor', __typename: 'CreditCategory' },
            characters: [{ name: 'Thin', __typename: 'Character' }],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm15108485',
              nameText: { text: 'Serhiy Artemenko', __typename: 'NameText' },
              primaryImage: null,
              __typename: 'Name',
            },
            attributes: null,
            category: { id: 'actor', __typename: 'CreditCategory' },
            characters: [{ name: 'Volunteer', __typename: 'Character' }],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm11348671',
              nameText: { text: 'Egor Kozlov', __typename: 'NameText' },
              primaryImage: null,
              __typename: 'Name',
            },
            attributes: null,
            category: { id: 'actor', __typename: 'CreditCategory' },
            characters: [{ name: 'Ivan', __typename: 'Character' }],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm10801200',
              nameText: { text: 'Zachary Shadrin', __typename: 'NameText' },
              primaryImage: {
                url: 'https://m.media-amazon.com/images/M/MV5BODI1ZGMzODgtNzIyZC00ZjE1LWE4YmMtOGFiYTg2YTg5OWUyXkEyXkFqcGdeQXVyMTA0OTE1OTMx._V1_.jpg',
                width: 1334,
                height: 2000,
                __typename: 'Image',
              },
              __typename: 'Name',
            },
            attributes: [
              {
                text: 'as Zakhar Shadrin',
                __typename: 'CreditedAsCreditAttribute',
              },
            ],
            category: { id: 'actor', __typename: 'CreditCategory' },
            characters: [{ name: 'Taras', __typename: 'Character' }],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm15108486',
              nameText: { text: 'Olena Chervonenko', __typename: 'NameText' },
              primaryImage: null,
              __typename: 'Name',
            },
            attributes: null,
            category: { id: 'actress', __typename: 'CreditCategory' },
            characters: [{ name: 'Journalist', __typename: 'Character' }],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm4920987',
              nameText: { text: 'Demyan Radzivilyuk', __typename: 'NameText' },
              primaryImage: {
                url: 'https://m.media-amazon.com/images/M/MV5BYjcyYWIyMGUtODdjNi00MjhhLWI3YTgtYTdkYWJkZTZmM2ZjXkEyXkFqcGdeQXVyMTY3NTY5OTcx._V1_.jpg',
                width: 577,
                height: 849,
                __typename: 'Image',
              },
              __typename: 'Name',
            },
            attributes: null,
            category: { id: 'actor', __typename: 'CreditCategory' },
            characters: [{ name: 'Operator', __typename: 'Character' }],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm14091106',
              nameText: { text: 'Alina Karpenko', __typename: 'NameText' },
              primaryImage: null,
              __typename: 'Name',
            },
            attributes: null,
            category: { id: 'actor', __typename: 'CreditCategory' },
            characters: [{ name: 'News anchor', __typename: 'Character' }],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
      ],
      __typename: 'CreditConnection',
    },
    creators: [],
    directors: [
      {
        totalCredits: 1,
        category: { text: 'Director', __typename: 'CreditCategory' },
        credits: [
          {
            name: {
              id: 'nm11595610',
              nameText: { text: 'Marian Bushan', __typename: 'NameText' },
              __typename: 'Name',
            },
            attributes: null,
            __typename: 'Crew',
          },
        ],
        __typename: 'PrincipalCreditsForCategory',
      },
    ],
    writers: [
      {
        totalCredits: 2,
        category: { text: 'Writers', __typename: 'CreditCategory' },
        credits: [
          {
            name: {
              id: 'nm11595610',
              nameText: { text: 'Marian Bushan', __typename: 'NameText' },
              __typename: 'Name',
            },
            attributes: null,
            __typename: 'Crew',
          },
          {
            name: {
              id: 'nm13887614',
              nameText: { text: 'Mykola Voronin', __typename: 'NameText' },
              __typename: 'Name',
            },
            attributes: null,
            __typename: 'Crew',
          },
        ],
        __typename: 'PrincipalCreditsForCategory',
      },
    ],
    isAdult: false,
    moreLikeThisTitles: {
      edges: [
        {
          node: {
            id: 'tt7691572',
            titleText: {
              text: 'Cyborgs: Heroes Never Die',
              __typename: 'TitleText',
            },
            titleType: {
              id: 'movie',
              text: 'Movie',
              canHaveEpisodes: false,
              displayableProperty: {
                value: { plainText: '', __typename: 'Markdown' },
                __typename: 'DisplayableTitleTypeProperty',
              },
              __typename: 'TitleType',
            },
            originalTitleText: {
              text: 'Kiborgy. Heroyi ne vmyrayut',
              __typename: 'TitleText',
            },
            primaryImage: {
              id: 'rm3089784576',
              width: 1000,
              height: 1500,
              url: 'https://m.media-amazon.com/images/M/MV5BYTUyMWNkYWUtMTg1ZS00MjJiLWE2ZjgtYjJkYTJmMmEzNWI0XkEyXkFqcGdeQXVyNTEzNDIxOTg@._V1_.jpg',
              caption: {
                plainText:
                  'Vyacheslav Dovzhenko, Andrey Isaenko, Roman Yasinovskiy, Viktor Zhdanov, and Makar Tikhomirov in Cyborgs: Heroes Never Die (2017)',
                __typename: 'Markdown',
              },
              __typename: 'Image',
            },
            releaseYear: { year: 2017, endYear: null, __typename: 'YearRange' },
            ratingsSummary: {
              aggregateRating: 7.5,
              voteCount: 7637,
              __typename: 'RatingsSummary',
            },
            runtime: { seconds: 6720, __typename: 'Runtime' },
            certificate: { rating: 'TV-14', __typename: 'Certificate' },
            canRate: { isRatable: true, __typename: 'CanRate' },
            titleGenres: {
              genres: [
                {
                  genre: { text: 'Action', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'Drama', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'War', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
              ],
              __typename: 'TitleGenres',
            },
            canHaveEpisodes: false,
            __typename: 'Title',
          },
          __typename: 'MoreLikeThisEdge',
        },
        {
          node: {
            id: 'tt8268302',
            titleText: {
              text: 'I Work at the Cemetery',
              __typename: 'TitleText',
            },
            titleType: {
              id: 'movie',
              text: 'Movie',
              canHaveEpisodes: false,
              displayableProperty: {
                value: { plainText: '', __typename: 'Markdown' },
                __typename: 'DisplayableTitleTypeProperty',
              },
              __typename: 'TitleType',
            },
            originalTitleText: {
              text: 'Ya pratsyuyu na tsvyntari',
              __typename: 'TitleText',
            },
            primaryImage: {
              id: 'rm439794177',
              width: 1200,
              height: 1691,
              url: 'https://m.media-amazon.com/images/M/MV5BNjJkOWQwNTAtZjQ4Zi00ZTYxLTg1OGMtNTk3Njg5YTY5YmQ0XkEyXkFqcGdeQXVyNDAwMzY0OTk@._V1_.jpg',
              caption: {
                plainText: 'Vitaliy Saliy in I Work at the Cemetery (2021)',
                __typename: 'Markdown',
              },
              __typename: 'Image',
            },
            releaseYear: { year: 2021, endYear: null, __typename: 'YearRange' },
            ratingsSummary: {
              aggregateRating: 7.4,
              voteCount: 1396,
              __typename: 'RatingsSummary',
            },
            runtime: { seconds: 6000, __typename: 'Runtime' },
            certificate: { rating: 'Not Rated', __typename: 'Certificate' },
            canRate: { isRatable: true, __typename: 'CanRate' },
            titleGenres: {
              genres: [
                {
                  genre: { text: 'Comedy', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'Crime', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'Drama', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
              ],
              __typename: 'TitleGenres',
            },
            canHaveEpisodes: false,
            __typename: 'Title',
          },
          __typename: 'MoreLikeThisEdge',
        },
        {
          node: {
            id: 'tt11386020',
            titleText: { text: 'Black Raven', __typename: 'TitleText' },
            titleType: {
              id: 'movie',
              text: 'Movie',
              canHaveEpisodes: false,
              displayableProperty: {
                value: { plainText: '', __typename: 'Markdown' },
                __typename: 'DisplayableTitleTypeProperty',
              },
              __typename: 'TitleType',
            },
            originalTitleText: {
              text: 'Chornyy Voron',
              __typename: 'TitleText',
            },
            primaryImage: {
              id: 'rm3018752513',
              width: 600,
              height: 900,
              url: 'https://m.media-amazon.com/images/M/MV5BMzc4NDViNTgtOGU3MC00NjcwLTk5MDktZTFjZDIwZWM1ZDA0XkEyXkFqcGdeQXVyMjk1NzAxNg@@._V1_.jpg',
              caption: {
                plainText: 'Black Raven (2019)',
                __typename: 'Markdown',
              },
              __typename: 'Image',
            },
            releaseYear: { year: 2019, endYear: null, __typename: 'YearRange' },
            ratingsSummary: {
              aggregateRating: 7.3,
              voteCount: 583,
              __typename: 'RatingsSummary',
            },
            runtime: { seconds: 6600, __typename: 'Runtime' },
            certificate: null,
            canRate: { isRatable: true, __typename: 'CanRate' },
            titleGenres: {
              genres: [
                {
                  genre: { text: 'Drama', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'History', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'War', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
              ],
              __typename: 'TitleGenres',
            },
            canHaveEpisodes: false,
            __typename: 'Title',
          },
          __typename: 'MoreLikeThisEdge',
        },
        {
          node: {
            id: 'tt5761544',
            titleText: { text: 'Kandahar', __typename: 'TitleText' },
            titleType: {
              id: 'movie',
              text: 'Movie',
              canHaveEpisodes: false,
              displayableProperty: {
                value: { plainText: '', __typename: 'Markdown' },
                __typename: 'DisplayableTitleTypeProperty',
              },
              __typename: 'TitleType',
            },
            originalTitleText: { text: 'Kandahar', __typename: 'TitleText' },
            primaryImage: {
              id: 'rm487861761',
              width: 810,
              height: 1200,
              url: 'https://m.media-amazon.com/images/M/MV5BMjNiNDg2OWYtOGEzNy00M2E5LTgxZjItNzVmN2VmNTg3MzBhXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg',
              caption: {
                plainText: 'Gerard Butler in Kandahar (2023)',
                __typename: 'Markdown',
              },
              __typename: 'Image',
            },
            releaseYear: { year: 2023, endYear: null, __typename: 'YearRange' },
            ratingsSummary: {
              aggregateRating: 6.1,
              voteCount: 29153,
              __typename: 'RatingsSummary',
            },
            runtime: { seconds: 7140, __typename: 'Runtime' },
            certificate: { rating: 'R', __typename: 'Certificate' },
            canRate: { isRatable: true, __typename: 'CanRate' },
            titleGenres: {
              genres: [
                {
                  genre: { text: 'Action', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'Thriller', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
              ],
              __typename: 'TitleGenres',
            },
            canHaveEpisodes: false,
            __typename: 'Title',
          },
          __typename: 'MoreLikeThisEdge',
        },
        {
          node: {
            id: 'tt26225074',
            titleText: { text: 'Myrnyi-21', __typename: 'TitleText' },
            titleType: {
              id: 'movie',
              text: 'Movie',
              canHaveEpisodes: false,
              displayableProperty: {
                value: { plainText: '', __typename: 'Markdown' },
                __typename: 'DisplayableTitleTypeProperty',
              },
              __typename: 'TitleType',
            },
            originalTitleText: { text: 'Myrnyi-21', __typename: 'TitleText' },
            primaryImage: {
              id: 'rm2983014401',
              width: 600,
              height: 900,
              url: 'https://m.media-amazon.com/images/M/MV5BZGU3NTY1MDMtYWM3Zi00YWE0LWFjMTgtNjgwMjc0MmZjMTg4XkEyXkFqcGdeQXVyMjk1NzAxNg@@._V1_.jpg',
              caption: {
                plainText:
                  'Evgeniy Lamakh, Mariia Shtofa, Pavlo Li, Aleksey Tritenko, Andrey Saminin, and Andrey Mostrenko in Myrnyi-21 (2023)',
                __typename: 'Markdown',
              },
              __typename: 'Image',
            },
            releaseYear: { year: 2023, endYear: null, __typename: 'YearRange' },
            ratingsSummary: {
              aggregateRating: 7.5,
              voteCount: 368,
              __typename: 'RatingsSummary',
            },
            runtime: { seconds: 7020, __typename: 'Runtime' },
            certificate: null,
            canRate: { isRatable: true, __typename: 'CanRate' },
            titleGenres: {
              genres: [
                {
                  genre: { text: 'War', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
              ],
              __typename: 'TitleGenres',
            },
            canHaveEpisodes: false,
            __typename: 'Title',
          },
          __typename: 'MoreLikeThisEdge',
        },
        {
          node: {
            id: 'tt8205656',
            titleText: { text: 'U311 Cherkasy', __typename: 'TitleText' },
            titleType: {
              id: 'movie',
              text: 'Movie',
              canHaveEpisodes: false,
              displayableProperty: {
                value: { plainText: '', __typename: 'Markdown' },
                __typename: 'DisplayableTitleTypeProperty',
              },
              __typename: 'TitleType',
            },
            originalTitleText: { text: 'Cherkasy', __typename: 'TitleText' },
            primaryImage: {
              id: 'rm799080705',
              width: 1131,
              height: 1600,
              url: 'https://m.media-amazon.com/images/M/MV5BZGNhYjk4MzItZjhiMC00YWM0LWIwODQtZjBlYjBiNThkNTZlXkEyXkFqcGdeQXVyMTA1OTMyMjUw._V1_.jpg',
              caption: {
                plainText: 'U311 Cherkasy (2019)',
                __typename: 'Markdown',
              },
              __typename: 'Image',
            },
            releaseYear: { year: 2019, endYear: null, __typename: 'YearRange' },
            ratingsSummary: {
              aggregateRating: 6.6,
              voteCount: 1178,
              __typename: 'RatingsSummary',
            },
            runtime: { seconds: 6120, __typename: 'Runtime' },
            certificate: null,
            canRate: { isRatable: true, __typename: 'CanRate' },
            titleGenres: {
              genres: [
                {
                  genre: { text: 'Drama', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'History', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'War', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
              ],
              __typename: 'TitleGenres',
            },
            canHaveEpisodes: false,
            __typename: 'Title',
          },
          __typename: 'MoreLikeThisEdge',
        },
        {
          node: {
            id: 'tt17024450',
            titleText: { text: 'The Equalizer 3', __typename: 'TitleText' },
            titleType: {
              id: 'movie',
              text: 'Movie',
              canHaveEpisodes: false,
              displayableProperty: {
                value: { plainText: '', __typename: 'Markdown' },
                __typename: 'DisplayableTitleTypeProperty',
              },
              __typename: 'TitleType',
            },
            originalTitleText: {
              text: 'The Equalizer 3',
              __typename: 'TitleText',
            },
            primaryImage: {
              id: 'rm3479252737',
              width: 1080,
              height: 1350,
              url: 'https://m.media-amazon.com/images/M/MV5BODdiMzM2YjctZmU3ZS00MzUwLWJiYTMtMmI2NzIyMTQyOTQ1XkEyXkFqcGdeQXVyODY5NzkyMjA@._V1_.jpg',
              caption: {
                plainText: 'Denzel Washington in The Equalizer 3 (2023)',
                __typename: 'Markdown',
              },
              __typename: 'Image',
            },
            releaseYear: { year: 2023, endYear: null, __typename: 'YearRange' },
            ratingsSummary: {
              aggregateRating: 6.8,
              voteCount: 84846,
              __typename: 'RatingsSummary',
            },
            runtime: { seconds: 6540, __typename: 'Runtime' },
            certificate: { rating: 'R', __typename: 'Certificate' },
            canRate: { isRatable: true, __typename: 'CanRate' },
            titleGenres: {
              genres: [
                {
                  genre: { text: 'Action', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'Crime', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'Thriller', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
              ],
              __typename: 'TitleGenres',
            },
            canHaveEpisodes: false,
            __typename: 'Title',
          },
          __typename: 'MoreLikeThisEdge',
        },
        {
          node: {
            id: 'tt21222434',
            titleText: {
              text: 'Sniper: Rogue Mission',
              __typename: 'TitleText',
            },
            titleType: {
              id: 'movie',
              text: 'Movie',
              canHaveEpisodes: false,
              displayableProperty: {
                value: { plainText: '', __typename: 'Markdown' },
                __typename: 'DisplayableTitleTypeProperty',
              },
              __typename: 'TitleType',
            },
            originalTitleText: {
              text: 'Sniper: Rogue Mission',
              __typename: 'TitleText',
            },
            primaryImage: {
              id: 'rm1993804289',
              width: 1544,
              height: 2192,
              url: 'https://m.media-amazon.com/images/M/MV5BNjkxMzQwMzgtMzU0Yy00NGIzLWFiNjUtYmQ2MzVmMzJkN2JmXkEyXkFqcGdeQXVyNTg4MDc4Mg@@._V1_.jpg',
              caption: {
                plainText:
                  'Dennis Haysbert, Ryan Robbins, Chad Michael Collins, and Sayaka Akimoto in Sniper: Rogue Mission (2022)',
                __typename: 'Markdown',
              },
              __typename: 'Image',
            },
            releaseYear: { year: 2022, endYear: null, __typename: 'YearRange' },
            ratingsSummary: {
              aggregateRating: 4.6,
              voteCount: 1578,
              __typename: 'RatingsSummary',
            },
            runtime: { seconds: 5760, __typename: 'Runtime' },
            certificate: { rating: 'R', __typename: 'Certificate' },
            canRate: { isRatable: true, __typename: 'CanRate' },
            titleGenres: {
              genres: [
                {
                  genre: { text: 'Action', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'Thriller', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
              ],
              __typename: 'TitleGenres',
            },
            canHaveEpisodes: false,
            __typename: 'Title',
          },
          __typename: 'MoreLikeThisEdge',
        },
        {
          node: {
            id: 'tt7876510',
            titleText: {
              text: 'My Thoughts Are Silent',
              __typename: 'TitleText',
            },
            titleType: {
              id: 'movie',
              text: 'Movie',
              canHaveEpisodes: false,
              displayableProperty: {
                value: { plainText: '', __typename: 'Markdown' },
                __typename: 'DisplayableTitleTypeProperty',
              },
              __typename: 'TitleType',
            },
            originalTitleText: {
              text: 'Moyi dumky tykhi',
              __typename: 'TitleText',
            },
            primaryImage: {
              id: 'rm78351361',
              width: 1984,
              height: 2835,
              url: 'https://m.media-amazon.com/images/M/MV5BNzcxMzFmYzYtMjU0Mi00YTQzLWIwYzItN2NmZmY3NzRiNWMyXkEyXkFqcGdeQXVyMjk1NzAxNg@@._V1_.jpg',
              caption: {
                plainText:
                  'Andriy Lidagovskiy and Irma Vitovska in My Thoughts Are Silent (2019)',
                __typename: 'Markdown',
              },
              __typename: 'Image',
            },
            releaseYear: { year: 2019, endYear: null, __typename: 'YearRange' },
            ratingsSummary: {
              aggregateRating: 7.8,
              voteCount: 3823,
              __typename: 'RatingsSummary',
            },
            runtime: { seconds: 6240, __typename: 'Runtime' },
            certificate: null,
            canRate: { isRatable: true, __typename: 'CanRate' },
            titleGenres: {
              genres: [
                {
                  genre: { text: 'Comedy', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'Drama', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
              ],
              __typename: 'TitleGenres',
            },
            canHaveEpisodes: false,
            __typename: 'Title',
          },
          __typename: 'MoreLikeThisEdge',
        },
        {
          node: {
            id: 'tt6349302',
            titleText: {
              text: 'Sniper: Ultimate Kill',
              __typename: 'TitleText',
            },
            titleType: {
              id: 'movie',
              text: 'Movie',
              canHaveEpisodes: false,
              displayableProperty: {
                value: { plainText: '', __typename: 'Markdown' },
                __typename: 'DisplayableTitleTypeProperty',
              },
              __typename: 'TitleType',
            },
            originalTitleText: {
              text: 'Sniper: Ultimate Kill',
              __typename: 'TitleText',
            },
            primaryImage: {
              id: 'rm4087882240',
              width: 393,
              height: 521,
              url: 'https://m.media-amazon.com/images/M/MV5BYjVmYWRmYjgtODEyNS00ZTgwLTg5NDYtMDcyNzQ3ZGUyOGUyXkEyXkFqcGdeQXVyOTg4MDYyNw@@._V1_.jpg',
              caption: {
                plainText:
                  'Tom Berenger, Billy Zane, Chad Michael Collins, and Danay Garcia in Sniper: Ultimate Kill (2017)',
                __typename: 'Markdown',
              },
              __typename: 'Image',
            },
            releaseYear: { year: 2017, endYear: null, __typename: 'YearRange' },
            ratingsSummary: {
              aggregateRating: 5.6,
              voteCount: 5996,
              __typename: 'RatingsSummary',
            },
            runtime: { seconds: 5400, __typename: 'Runtime' },
            certificate: { rating: 'R', __typename: 'Certificate' },
            canRate: { isRatable: true, __typename: 'CanRate' },
            titleGenres: {
              genres: [
                {
                  genre: { text: 'Action', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'Drama', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'Thriller', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
              ],
              __typename: 'TitleGenres',
            },
            canHaveEpisodes: false,
            __typename: 'Title',
          },
          __typename: 'MoreLikeThisEdge',
        },
        {
          node: {
            id: 'tt10276554',
            titleText: { text: 'Beshoot', __typename: 'TitleText' },
            titleType: {
              id: 'movie',
              text: 'Movie',
              canHaveEpisodes: false,
              displayableProperty: {
                value: { plainText: '', __typename: 'Markdown' },
                __typename: 'DisplayableTitleTypeProperty',
              },
              __typename: 'TitleType',
            },
            originalTitleText: { text: 'Beshoot', __typename: 'TitleText' },
            primaryImage: {
              id: 'rm4260934145',
              width: 501,
              height: 709,
              url: 'https://m.media-amazon.com/images/M/MV5BOGZhZWZhY2ItNjM5My00YmJiLTk0MjAtNzkwYjUxNjlkMGQzXkEyXkFqcGdeQXVyODg1MTc3MTM@._V1_.jpg',
              caption: { plainText: 'Beshoot (2019)', __typename: 'Markdown' },
              __typename: 'Image',
            },
            releaseYear: { year: 2019, endYear: null, __typename: 'YearRange' },
            ratingsSummary: {
              aggregateRating: 7.5,
              voteCount: 592,
              __typename: 'RatingsSummary',
            },
            runtime: { seconds: 7200, __typename: 'Runtime' },
            certificate: null,
            canRate: { isRatable: true, __typename: 'CanRate' },
            titleGenres: {
              genres: [
                {
                  genre: { text: 'Action', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'Drama', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'War', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
              ],
              __typename: 'TitleGenres',
            },
            canHaveEpisodes: false,
            __typename: 'Title',
          },
          __typename: 'MoreLikeThisEdge',
        },
        {
          node: {
            id: 'tt10330046',
            titleText: { text: 'Censored', __typename: 'TitleText' },
            titleType: {
              id: 'movie',
              text: 'Movie',
              canHaveEpisodes: false,
              displayableProperty: {
                value: { plainText: '', __typename: 'Markdown' },
                __typename: 'DisplayableTitleTypeProperty',
              },
              __typename: 'TitleType',
            },
            originalTitleText: { text: 'Zaboronenyy', __typename: 'TitleText' },
            primaryImage: {
              id: 'rm973182209',
              width: 600,
              height: 900,
              url: 'https://m.media-amazon.com/images/M/MV5BMGRkYWVlNGQtYTM4ZC00MmFmLWI0YTMtYmU4MTgzNWUzNDVlXkEyXkFqcGdeQXVyMjk1NzAxNg@@._V1_.jpg',
              caption: { plainText: 'Censored (2019)', __typename: 'Markdown' },
              __typename: 'Image',
            },
            releaseYear: { year: 2019, endYear: null, __typename: 'YearRange' },
            ratingsSummary: {
              aggregateRating: 7.4,
              voteCount: 834,
              __typename: 'RatingsSummary',
            },
            runtime: { seconds: 6000, __typename: 'Runtime' },
            certificate: null,
            canRate: { isRatable: true, __typename: 'CanRate' },
            titleGenres: {
              genres: [
                {
                  genre: { text: 'Biography', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'Drama', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'History', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
              ],
              __typename: 'TitleGenres',
            },
            canHaveEpisodes: false,
            __typename: 'Title',
          },
          __typename: 'MoreLikeThisEdge',
        },
      ],
      __typename: 'MoreLikeThisConnection',
    },
    trivia: {
      edges: [
        {
          node: {
            text: {
              plaidHtml:
                'This gritty and evocative film follows a physics teacher in the Donbas region who suffers a family tragedy at the hands of invading Russian troops. The ex-pacifist joins the army as an unconventional sniper determined to gain revenge and defend the future of his country.<br/><br/>It was created with support from the Ukrainian State Film Agency, was co-written by Mykola Voronin - the real-life sniper whose story is portrayed - and features about 100 members of the Ukrainian armed forces and national guard. Even aside from those career military personnel, several of the main cast members are currently fighting on the front lines.',
              __typename: 'Markdown',
            },
            trademark: null,
            relatedNames: null,
            __typename: 'TitleTrivia',
          },
          __typename: 'TriviaEdge',
        },
      ],
      __typename: 'TriviaConnection',
    },
    goofsTotal: { total: 0, __typename: 'GoofConnection' },
    goofs: { edges: [], __typename: 'GoofConnection' },
    quotesTotal: { total: 0, __typename: 'TitleQuoteConnection' },
    quotes: { edges: [], __typename: 'TitleQuoteConnection' },
    crazyCredits: { edges: [], __typename: 'CrazyCreditConnection' },
    alternateVersions: {
      total: 0,
      edges: [],
      __typename: 'AlternateVersionConnection',
    },
    connections: { edges: [], __typename: 'TitleConnectionConnection' },
    soundtrack: { edges: [], __typename: 'SoundtrackConnection' },
    iframeAddReviewLink: {
      url: 'https://contribute.imdb.com/review/tt19465630/add?bus=imdb&return_url=https%3A%2F%2Fwww.imdb.com%2Fclose_me&site=web',
      __typename: 'ContributionLink',
    },
    topQuestions: {
      total: 15,
      edges: [
        {
          node: {
            attributeId: 'run-time',
            question: {
              plainText: 'How long is Sniper. The White Raven?',
              __typename: 'Markdown',
            },
            __typename: 'AlexaQuestion',
          },
          __typename: 'AlexaQuestionEdge',
        },
      ],
      __typename: 'AlexaQuestionConnection',
    },
    faqs: { total: 0, edges: [], __typename: 'FaqConnection' },
    detailsExternalLinks: {
      edges: [
        {
          node: {
            url: 'https://wellgousa.com/films/sniper-white-raven',
            label: 'official site',
            externalLinkRegion: null,
            __typename: 'ExternalLink',
          },
          __typename: 'ExternalLinkEdge',
        },
        {
          node: {
            url: 'http://www.wellgousa.com/films/sniper-the-white-raven',
            label: 'US Distributor Company Site - film page',
            externalLinkRegion: null,
            __typename: 'ExternalLink',
          },
          __typename: 'ExternalLinkEdge',
        },
      ],
      total: 3,
      __typename: 'ExternalLinkConnection',
    },
    spokenLanguages: {
      spokenLanguages: [
        { id: 'uk', text: 'Ukrainian', __typename: 'SpokenLanguage' },
        { id: 'ru', text: 'Russian', __typename: 'SpokenLanguage' },
      ],
      __typename: 'SpokenLanguages',
    },
    akas: {
      edges: [
        {
          node: { text: 'Снайпер. Білий ворон', __typename: 'Aka' },
          __typename: 'AkaEdge',
        },
      ],
      __typename: 'AkaConnection',
    },
    filmingLocations: {
      edges: [],
      total: 0,
      __typename: 'FilmingLocationConnection',
    },
    companies: { total: 9, __typename: 'CompanyCreditConnection' },
    productionBudget: {
      budget: { amount: 997800, currency: 'EUR', __typename: 'Money' },
      __typename: 'ProductionBudget',
    },
    lifetimeGross: {
      total: { amount: 881, currency: 'USD', __typename: 'Money' },
      __typename: 'BoxOfficeGross',
    },
    openingWeekendGross: {
      gross: {
        total: { amount: 881, currency: 'USD', __typename: 'Money' },
        __typename: 'BoxOfficeGross',
      },
      weekendEndDate: '2022-07-03',
      __typename: 'OpeningWeekendGross',
    },
    worldwideGross: {
      total: { amount: 6105, currency: 'USD', __typename: 'Money' },
      __typename: 'BoxOfficeGross',
    },
    technicalSpecifications: {
      soundMixes: { items: [], __typename: 'SoundMixes' },
      aspectRatios: {
        items: [
          { aspectRatio: '2.39:1', attributes: [], __typename: 'AspectRatio' },
        ],
        __typename: 'AspectRatios',
      },
      colorations: {
        items: [
          {
            conceptId: 'color',
            text: 'Color',
            attributes: [],
            __typename: 'Coloration',
          },
        ],
        __typename: 'Colorations',
      },
      __typename: 'TechnicalSpecifications',
    },
    contributionQuestions: {
      contributionLink: {
        url: 'https://contribute.imdb.com/answers',
        __typename: 'ContributionQuestionsLink',
      },
      edges: [
        {
          node: {
            entity: {
              primaryImage: {
                url: 'https://m.media-amazon.com/images/M/MV5BNWMwOTgyNmMtYWNlYS00NGIyLTllOWYtZTVlNzU3N2ViZWQ5XkEyXkFqcGdeQXVyMzk3OTUyMDY@._V1_.jpg',
                width: 1181,
                height: 1772,
                caption: {
                  plainText: 'Pavlo Aldoshyn in Sniper. The White Raven (2022)',
                  __typename: 'Markdown',
                },
                __typename: 'Image',
              },
              __typename: 'Title',
            },
            questionId: 'tt19465630.plot_outline.fr-CA',
            questionText: {
              plainText:
                'What is the Canadian French language plot outline for Sniper. The White Raven (2022)?',
              __typename: 'Markdown',
            },
            contributionLink: {
              url: 'https://contribute.imdb.com/answers?pinnedQuestion=tt19465630.plot_outline.fr-CA',
              __typename: 'ContributionQuestionsLink',
            },
            __typename: 'Question',
          },
          __typename: 'QuestionEdge',
        },
      ],
      __typename: 'QuestionConnection',
    },
  },
  {
    id: 'tt19465630',
    productionStatus: {
      currentProductionStage: {
        id: 'released',
        text: 'Released',
        __typename: 'ProductionStage',
      },
      productionStatusHistory: [
        {
          status: {
            id: 'released',
            text: 'Released',
            __typename: 'ProductionStatus',
          },
          __typename: 'ProductionStatusHistory',
        },
      ],
      restriction: null,
      __typename: 'ProductionStatusDetails',
    },
    canHaveEpisodes: false,
    series: null,
    titleText: { text: 'Sniper. The White Raven', __typename: 'TitleText' },
    titleType: { id: 'movie', canHaveEpisodes: false, __typename: 'TitleType' },
    originalTitleText: {
      text: 'Sniper. The White Raven',
      __typename: 'TitleText',
    },
    certificate: { rating: 'R', __typename: 'Certificate' },
    releaseYear: { year: 2022, __typename: 'YearRange' },
    releaseDate: {
      day: 24,
      month: 8,
      year: 2022,
      country: {
        id: 'UA',
        text: 'Ukraine',
        __typename: 'LocalizedDisplayableCountry',
      },
      __typename: 'ReleaseDate',
    },
    runtime: { seconds: 6660, __typename: 'Runtime' },
    canRate: { isRatable: true, __typename: 'CanRate' },
    ratingsSummary: { topRanking: null, __typename: 'RatingsSummary' },
    meterRanking: {
      currentRank: 2519,
      rankChange: {
        changeDirection: 'UP',
        difference: 1534,
        __typename: 'MeterRankChange',
      },
      __typename: 'TitleMeterRanking',
    },
    primaryImage: { id: 'rm1439244033', __typename: 'Image' },
    images: {
      total: 7,
      edges: [
        {
          node: { id: 'rm2361990913', __typename: 'Image' },
          __typename: 'ImageEdge',
        },
      ],
      __typename: 'ImageConnection',
    },
    videos: { total: 3, __typename: 'TitleRelatedVideosConnection' },
    primaryVideos: {
      edges: [
        {
          node: {
            id: 'vi787071513',
            createdDate: '2022-06-06T17:09:03.553Z',
            isMature: false,
            runtime: { value: 129, __typename: 'VideoRuntime' },
            name: {
              value: 'Official Trailer',
              language: 'uk',
              __typename: 'LocalizedString',
            },
            description: {
              value:
                'After suffering a tragedy at the hand of invading soldiers in Donbas, an Ukrainian physics teacher seeks revenge. He sets his sights on an elite Russian sniper whose elimination could change the tide of the conflict.',
              language: 'uk',
              __typename: 'LocalizedString',
            },
            timedTextTracks: [],
            recommendedTimedTextTrack: null,
            thumbnail: {
              url: 'https://m.media-amazon.com/images/M/MV5BMjYyNDMwN2MtNTAyZS00NDBkLWI5ZTktMzA3ZGU5NDRlMWY4XkEyXkFqcGdeQWRpZWdtb25n._V1_.jpg',
              height: 1080,
              width: 1920,
              __typename: 'Thumbnail',
            },
            primaryTitle: {
              id: 'tt19465630',
              titleText: {
                text: 'Sniper. The White Raven',
                __typename: 'TitleText',
              },
              originalTitleText: {
                text: 'Sniper. The White Raven',
                __typename: 'TitleText',
              },
              releaseYear: { year: 2022, __typename: 'YearRange' },
              __typename: 'Title',
            },
            playbackURLs: [
              {
                displayName: {
                  value: '480p',
                  language: 'en-US',
                  __typename: 'LocalizedString',
                },
                videoMimeType: 'MP4',
                videoDefinition: 'DEF_480p',
                url: 'https://imdb-video.media-imdb.com/vi787071513/1434659607842-pgv4ql-1654535344437.mp4?Expires=1704594378&Signature=pk9oLzJ7nmRPWziOoPqahnfl1pneZBj~QozltPVrlatPp1zzkQ2j0i1rWC4-R6PIrfFhTzAyEyY2pXlpFo4EP98U4sfDGct12M5U7w6TvG11CmYxuXEZ8uooIjR64ZDAL0L2shne8V8soqSDobNTUhECPhMcB3F6XXQ9SC7dqTWxVVyOW6~SJMZod~OhdNX73dTCkrIZeZU7wKBoanFva-xofPCEzIlRWbyFckbH6tgMCBM6VEyIUT0bn-xnLuklPEGqNpaZCJGjDTYCcxaDJ5GmtXuHwfOa6rMadZS0lCbKedV-t-w9HrZj8lwcbdLWHEPpVveO9hs4RGbSyKd8qA__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
                __typename: 'PlaybackURL',
              },
              {
                displayName: {
                  value: 'SD',
                  language: 'en-US',
                  __typename: 'LocalizedString',
                },
                videoMimeType: 'MP4',
                videoDefinition: 'DEF_SD',
                url: 'https://imdb-video.media-imdb.com/vi787071513/1434659454657-dx9ykf-1654535344437.mp4?Expires=1704594378&Signature=AYZnXpjVl7gGYNhWeblMyFJstwdwT3eRC4GdfG70XlNfcGldz3Wxyvi0Box6~WgXkPGeO828~whVObwKZ27alF3BcgVlOWyUxzq5lnUmxR0vKqxt4gm0S8TtYVRPwwuq6xyvyDipCrH-LSxg~5nkou4jNsjvZh0siyHi~mUJ-CDVypapq0vNwBsyXvInoRiqqVHW~rc-0mk3Sur8GWVjCdHSYfN32EjZk4zxrWEMUeoFGxuNafykXfBhv89O-6AKnS5brV~5lBBzpmn-tL0PctWZiVDFHbrQ1g4ilipeMNeckqOGgz4GE19i0CnWPY~ySiVGNFJfb13Qe6M~eakugA__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
                __typename: 'PlaybackURL',
              },
            ],
            contentType: {
              id: 'amzn1.imdb.video.contenttype.trailer',
              displayName: { value: 'Trailer', __typename: 'LocalizedString' },
              __typename: 'VideoContentType',
            },
            previewURLs: [
              {
                displayName: {
                  value: 'AUTO',
                  language: 'en-US',
                  __typename: 'LocalizedString',
                },
                videoMimeType: 'M3U8',
                videoDefinition: 'DEF_AUTO',
                url: 'https://imdb-video.media-imdb.com/vi787071513/hls-preview-79353ff1-9750-49d0-8f07-f8d72a396b4b.m3u8?Expires=1704594378&Signature=FAjZQw6fU-60FSeAODxL1nuetmYdE1u1EdJ9Ke5r4TZPx-ZGdO8cwok-IQwlMz3b4zuFTgDB32nHJBLJm6QoGhC6fKiAMJP0i7CdULOERNz2f-IniRzLyD4eKgb5hYEfc6f2St28XjLfumHICcGK5RwrlKnHwviX~VgSHozUkzFnnly9-yX3YEeMKQ44rDMYV5Il2jAzi3qAA9FIZt7F6T2bj2opNm0hItS8n4aAolU-80wXtmobZWLOELBdp6NJvGcsgKmutxjClb2c6TOXhE~wOvCA0CSepGd1d7nLkRhqrsUR1gEZMON5M8FXvKRrM81~58D~XYCBqfL6k5RCIg__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
                __typename: 'PlaybackURL',
              },
            ],
            __typename: 'Video',
          },
          __typename: 'VideoEdge',
        },
        {
          node: {
            id: 'vi1334755865',
            createdDate: '2022-05-17T15:34:59.035Z',
            isMature: false,
            runtime: { value: 137, __typename: 'VideoRuntime' },
            name: {
              value: 'Teaser Trailer',
              language: 'uk',
              __typename: 'LocalizedString',
            },
            description: {
              value:
                "Mykola is an eccentric pacifist who wants to be useful to humanity. When the war begins at Donbass, Mykola's naive world is collapsing as the militants kill his pregnant wife and burn his home to the ground.",
              language: 'uk',
              __typename: 'LocalizedString',
            },
            timedTextTracks: [],
            recommendedTimedTextTrack: null,
            thumbnail: {
              url: 'https://m.media-amazon.com/images/M/MV5BYjcyZThmYmUtZTFjMC00YzU5LWFkYzItNGNiNjUzMWJhYTJkXkEyXkFqcGdeQWRpZWdtb25n._V1_.jpg',
              height: 1080,
              width: 1920,
              __typename: 'Thumbnail',
            },
            primaryTitle: {
              id: 'tt19465630',
              titleText: {
                text: 'Sniper. The White Raven',
                __typename: 'TitleText',
              },
              originalTitleText: {
                text: 'Sniper. The White Raven',
                __typename: 'TitleText',
              },
              releaseYear: { year: 2022, __typename: 'YearRange' },
              __typename: 'Title',
            },
            playbackURLs: [
              {
                displayName: {
                  value: '480p',
                  language: 'en-US',
                  __typename: 'LocalizedString',
                },
                videoMimeType: 'MP4',
                videoDefinition: 'DEF_480p',
                url: 'https://imdb-video.media-imdb.com/vi1334755865/1434659607842-pgv4ql-1652801699420.mp4?Expires=1704594378&Signature=FR569ZnbklrWDAqaMAsKcARJ~36uYBmYKid5iS~RvuftTBiTCXyCWVFDEyGg4BgnJxbNQGWU8k0EKG-SXeTl6cWsh0yrsoBVASekGpG6lll-lugWN4iujn6dPRNinxC~IcXkGD55GV9SKrUWsxOw9FqBEpll1Vr1a~ZOpsnCRXqrtAlBMUl2lskUDXzQTohViIPsKbhwI8Vv6qMu0CLGqITzcdDqJ9dkA0vyDyxU2xDwh7eMnlzmtz~EPIntyNHoHZkIUMG9kiDvFH0BvXB1tsFAnPhaUXoasQoW2tC-3b8FmsGwlBgoUrQhojpq~NLgvV-6u6QmGcWivo4tXDVEyw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
                __typename: 'PlaybackURL',
              },
              {
                displayName: {
                  value: 'SD',
                  language: 'en-US',
                  __typename: 'LocalizedString',
                },
                videoMimeType: 'MP4',
                videoDefinition: 'DEF_SD',
                url: 'https://imdb-video.media-imdb.com/vi1334755865/1434659454657-dx9ykf-1652801699420.mp4?Expires=1704594378&Signature=bnrJMp2eaobQQ2iV~T-liA4muWWwLMhERyrmd99GBSJdpuOcDqbo9Vn6lR56YgWbNlRKwvNUAPl1HkP~jP3jOoo7bwdg6Te4t-uwSxYIHMjrdJTr0Rrhfb7ecPmOqk7vsAH87afPsuJccPwiIKlP4uAi~HwUcH91mFl2SzJ5Jh-kNhOD8s1dhQ5FpZvZkuAwqecMvcNm-pn1BuEMtCEgyWYByd6Dpln8OF1cFiAJuOOoSbodTqGffvoK6YSBxJwg2ttcjXM342KRv34AKk0KpVgG9iNaZGD3-DBBmPRknxiOC-mv9l~MTz2kyzrR2~2lcGHlLhuuWfguCfORSHKPDQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
                __typename: 'PlaybackURL',
              },
            ],
            contentType: {
              id: 'amzn1.imdb.video.contenttype.trailer',
              displayName: { value: 'Trailer', __typename: 'LocalizedString' },
              __typename: 'VideoContentType',
            },
            previewURLs: [
              {
                displayName: {
                  value: 'AUTO',
                  language: 'en-US',
                  __typename: 'LocalizedString',
                },
                videoMimeType: 'M3U8',
                videoDefinition: 'DEF_AUTO',
                url: 'https://imdb-video.media-imdb.com/vi1334755865/hls-preview-a6117403-2798-4aea-87a8-ca26d1b444e7.m3u8?Expires=1704594378&Signature=m6HWwCHE8051mY53lnERHSzIdMq-OK~sLLgol6mQVeQXbzMNRtCzfWrEWNV0vSRTvdSsHEjWMmOqd1P-wi4r~q~xA2cKcVdJlyssqmwLNXIHYxuJkV1qfsMV77F08djeCmQEK9ipru30TvMSWu8GceQwCIS22Yz2bPNjQ5NgAXmRdAa6DSjGIrhymAsTEU3QbYCvLPDn94FKeskY1TYkmojficXWWzM6cZ1IWvbXNwUp3QdSmCTb~NAVQPF9cAfBmczK1tGr5Rysbpo9A0kqUV-S3f14Xp1G7hdhOBTsxz3wRvgdzvj5d8B49Qo-f9l05TGch1G04zoHm7HR1eoz-A__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
                __typename: 'PlaybackURL',
              },
            ],
            __typename: 'Video',
          },
          __typename: 'VideoEdge',
        },
      ],
      __typename: 'VideoConnection',
    },
    externalLinks: { total: 28, __typename: 'ExternalLinkConnection' },
    metacritic: {
      metascore: { score: 54, __typename: 'Metascore' },
      __typename: 'Metacritic',
    },
    keywords: {
      total: 43,
      edges: [
        {
          node: {
            text: 'russian occupation of ukraine',
            __typename: 'TitleKeyword',
          },
          __typename: 'TitleKeywordEdge',
        },
        {
          node: { text: 'loss of wife', __typename: 'TitleKeyword' },
          __typename: 'TitleKeywordEdge',
        },
        {
          node: {
            text: 'husband wife relationship',
            __typename: 'TitleKeyword',
          },
          __typename: 'TitleKeywordEdge',
        },
        {
          node: {
            text: 'ukrainian russian relations',
            __typename: 'TitleKeyword',
          },
          __typename: 'TitleKeywordEdge',
        },
        {
          node: { text: 'eastern europe', __typename: 'TitleKeyword' },
          __typename: 'TitleKeywordEdge',
        },
      ],
      __typename: 'TitleKeywordConnection',
    },
    genres: {
      genres: [
        { text: 'Drama', id: 'Drama', __typename: 'Genre' },
        { text: 'War', id: 'War', __typename: 'Genre' },
      ],
      __typename: 'Genres',
    },
    plot: {
      plotText: {
        plainText:
          'After suffering a tragedy at the hand of invading soldiers in Donbas, an Ukrainian physics teacher seeks revenge. He sets his sights on an elite Russian sniper whose elimination could change the tide of the conflict.',
        __typename: 'Markdown',
      },
      language: { id: 'en-US', __typename: 'DisplayableLanguage' },
      __typename: 'Plot',
    },
    plotContributionLink: {
      url: 'https://contribute.imdb.com/updates?update=tt19465630:outlines.add.1.locale~en-US',
      __typename: 'ContributionLink',
    },
    credits: { total: 68, __typename: 'CreditConnection' },
    principalCredits: [
      {
        totalCredits: 1,
        category: {
          text: 'Director',
          id: 'director',
          __typename: 'CreditCategory',
        },
        credits: [
          {
            name: {
              nameText: { text: 'Marian Bushan', __typename: 'NameText' },
              id: 'nm11595610',
              __typename: 'Name',
            },
            attributes: null,
            __typename: 'Crew',
          },
        ],
        __typename: 'PrincipalCreditsForCategory',
      },
      {
        totalCredits: 2,
        category: {
          text: 'Writers',
          id: 'writer',
          __typename: 'CreditCategory',
        },
        credits: [
          {
            name: {
              nameText: { text: 'Marian Bushan', __typename: 'NameText' },
              id: 'nm11595610',
              __typename: 'Name',
            },
            attributes: null,
            __typename: 'Crew',
          },
          {
            name: {
              nameText: { text: 'Mykola Voronin', __typename: 'NameText' },
              id: 'nm13887614',
              __typename: 'Name',
            },
            attributes: null,
            __typename: 'Crew',
          },
        ],
        __typename: 'PrincipalCreditsForCategory',
      },
      {
        totalCredits: 32,
        category: { text: 'Stars', id: 'cast', __typename: 'CreditCategory' },
        credits: [
          {
            name: {
              nameText: { text: 'Pavlo Aldoshyn', __typename: 'NameText' },
              id: 'nm3838884',
              __typename: 'Name',
            },
            attributes: null,
            __typename: 'Cast',
          },
          {
            name: {
              nameText: { text: 'Maryna Koshkina', __typename: 'NameText' },
              id: 'nm9582810',
              __typename: 'Name',
            },
            attributes: null,
            __typename: 'Cast',
          },
          {
            name: {
              nameText: { text: 'Andrey Mostrenko', __typename: 'NameText' },
              id: 'nm5643878',
              __typename: 'Name',
            },
            attributes: null,
            __typename: 'Cast',
          },
        ],
        __typename: 'PrincipalCreditsForCategory',
      },
    ],
    reviews: { total: 51, __typename: 'ReviewsConnection' },
    criticReviewsTotal: { total: 22, __typename: 'ExternalLinkConnection' },
    triviaTotal: { total: 1, __typename: 'TriviaConnection' },
    engagementStatistics: {
      watchlistStatistics: {
        displayableCount: {
          text: 'Added by 9.9K users',
          __typename: 'LocalizedDisplayableCount',
        },
        __typename: 'WatchlistStatistics',
      },
      __typename: 'EngagementStatistics',
    },
    subNavCredits: { total: 68, __typename: 'CreditConnection' },
    subNavReviews: { total: 51, __typename: 'ReviewsConnection' },
    subNavTrivia: { total: 1, __typename: 'TriviaConnection' },
    subNavFaqs: { total: 0, __typename: 'FaqConnection' },
    subNavTopQuestions: { total: 15, __typename: 'AlexaQuestionConnection' },
    titleGenres: {
      genres: [
        {
          genre: { text: 'Drama', __typename: 'GenreItem' },
          __typename: 'TitleGenre',
        },
        {
          genre: { text: 'War', __typename: 'GenreItem' },
          __typename: 'TitleGenre',
        },
      ],
      __typename: 'TitleGenres',
    },
    meta: {
      canonicalId: 'tt19465630',
      publicationStatus: 'PUBLISHED',
      __typename: 'TitleMeta',
    },
    castPageTitle: {
      edges: [
        {
          node: {
            name: {
              nameText: { text: 'Pavlo Aldoshyn', __typename: 'NameText' },
              __typename: 'Name',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              nameText: { text: 'Maryna Koshkina', __typename: 'NameText' },
              __typename: 'Name',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              nameText: { text: 'Andrey Mostrenko', __typename: 'NameText' },
              __typename: 'Name',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              nameText: { text: 'Roman Semysal', __typename: 'NameText' },
              __typename: 'Name',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
      ],
      __typename: 'CreditConnection',
    },
    creatorsPageTitle: [],
    directorsPageTitle: [
      {
        credits: [
          {
            name: {
              nameText: { text: 'Marian Bushan', __typename: 'NameText' },
              __typename: 'Name',
            },
            __typename: 'Crew',
          },
        ],
        __typename: 'PrincipalCreditsForCategory',
      },
    ],
    countriesOfOrigin: {
      countries: [{ id: 'UA', text: 'Ukraine', __typename: 'CountryOfOrigin' }],
      __typename: 'CountriesOfOrigin',
    },
    production: {
      edges: [
        {
          node: {
            company: {
              id: 'co0750475',
              companyText: { text: 'UM Group', __typename: 'CompanyText' },
              __typename: 'Company',
            },
            __typename: 'CompanyCredit',
          },
          __typename: 'CompanyCreditEdge',
        },
      ],
      __typename: 'CompanyCreditConnection',
    },
    featuredReviews: {
      edges: [
        {
          node: {
            id: 'rw8387911',
            author: {
              nickName: 'nhmbwngrt',
              userId: 'ur155200617',
              __typename: 'UserProfile',
            },
            summary: {
              originalText: 'Unfortunately very real',
              __typename: 'ReviewSummary',
            },
            text: {
              originalText: {
                plaidHtml:
                  'I see a lot of 1 star ratings but all this are from russians watching this movie.<br/><br/>So I had to give 10 stars but in fact its 7-8 star movie. Definetely watchable and good spent time.',
                __typename: 'Markdown',
              },
              __typename: 'ReviewText',
            },
            authorRating: 10,
            submissionDate: '2022-07-31',
            helpfulness: {
              upVotes: 53,
              downVotes: 37,
              __typename: 'ReviewHelpfulness',
            },
            __typename: 'Review',
          },
          __typename: 'ReviewEdge',
        },
      ],
      __typename: 'ReviewsConnection',
    },
    __typename: 'Title',
    wins: { total: 0, __typename: 'AwardNominationConnection' },
    nominations: { total: 3, __typename: 'AwardNominationConnection' },
    prestigiousAwardSummary: null,
    episodes: null,
    videoStrip: {
      edges: [
        {
          node: {
            id: 'vi787071513',
            contentType: {
              displayName: { value: 'Trailer', __typename: 'LocalizedString' },
              __typename: 'VideoContentType',
            },
            name: { value: 'Official Trailer', __typename: 'LocalizedString' },
            runtime: { value: 129, __typename: 'VideoRuntime' },
            thumbnail: {
              height: 1080,
              url: 'https://m.media-amazon.com/images/M/MV5BMjYyNDMwN2MtNTAyZS00NDBkLWI5ZTktMzA3ZGU5NDRlMWY4XkEyXkFqcGdeQWRpZWdtb25n._V1_.jpg',
              width: 1920,
              __typename: 'Thumbnail',
            },
            __typename: 'Video',
          },
          __typename: 'VideoEdge',
        },
        {
          node: {
            id: 'vi1334755865',
            contentType: {
              displayName: { value: 'Trailer', __typename: 'LocalizedString' },
              __typename: 'VideoContentType',
            },
            name: { value: 'Teaser Trailer', __typename: 'LocalizedString' },
            runtime: { value: 137, __typename: 'VideoRuntime' },
            thumbnail: {
              height: 1080,
              url: 'https://m.media-amazon.com/images/M/MV5BYjcyZThmYmUtZTFjMC00YzU5LWFkYzItNGNiNjUzMWJhYTJkXkEyXkFqcGdeQWRpZWdtb25n._V1_.jpg',
              width: 1920,
              __typename: 'Thumbnail',
            },
            __typename: 'Video',
          },
          __typename: 'VideoEdge',
        },
        {
          node: {
            id: 'vi2515386905',
            contentType: {
              displayName: { value: 'Trailer', __typename: 'LocalizedString' },
              __typename: 'VideoContentType',
            },
            name: {
              value: 'Sniper. The White Raven',
              __typename: 'LocalizedString',
            },
            runtime: { value: 129, __typename: 'VideoRuntime' },
            thumbnail: {
              height: 1080,
              url: 'https://m.media-amazon.com/images/M/MV5BYzQyZGJmNDEtYmU1MS00MGQ3LWE4MjEtMjc1ZDVmOTU0ZjY0XkEyXkFqcGdeQVRoaXJkUGFydHlJbmdlc3Rpb25Xb3JrZmxvdw@@._V1_.jpg',
              width: 1920,
              __typename: 'Thumbnail',
            },
            __typename: 'Video',
          },
          __typename: 'VideoEdge',
        },
      ],
      __typename: 'VideoConnection',
    },
    titleMainImages: {
      total: 7,
      edges: [
        {
          node: {
            id: 'rm2361990913',
            url: 'https://m.media-amazon.com/images/M/MV5BNzU4YTZhNGItYWU2MS00MDU5LWFkMTUtZDVmNDM2N2NlNjk0XkEyXkFqcGdeQXVyMzk3OTUyMDY@._V1_.jpg',
            caption: {
              plainText: 'Sniper. The White Raven (2022)',
              __typename: 'Markdown',
            },
            height: 791,
            width: 1815,
            __typename: 'Image',
          },
          __typename: 'ImageEdge',
        },
        {
          node: {
            id: 'rm3167297281',
            url: 'https://m.media-amazon.com/images/M/MV5BZmQ3ZWI3ZjQtZDhiOC00ZGMyLWE3NGItNzk0OGNkOGZlOTE0XkEyXkFqcGdeQXVyMzk3OTUyMDY@._V1_.jpg',
            caption: {
              plainText: 'Pavlo Aldoshyn in Sniper. The White Raven (2022)',
              __typename: 'Markdown',
            },
            height: 795,
            width: 1821,
            __typename: 'Image',
          },
          __typename: 'ImageEdge',
        },
        {
          node: {
            id: 'rm2697535233',
            url: 'https://m.media-amazon.com/images/M/MV5BY2MwNDkxZTgtNjI1Ni00NmUxLWI0ZTctN2I5ZmFiZTA5MjY5XkEyXkFqcGdeQXVyMzk3OTUyMDY@._V1_.jpg',
            caption: {
              plainText: 'Sniper. The White Raven (2022)',
              __typename: 'Markdown',
            },
            height: 791,
            width: 1811,
            __typename: 'Image',
          },
          __typename: 'ImageEdge',
        },
        {
          node: {
            id: 'rm1489575681',
            url: 'https://m.media-amazon.com/images/M/MV5BZTk0OGI3ZDEtZmFhOS00NGYxLWI0YWQtYTg0YjFkMGExZDE1XkEyXkFqcGdeQXVyMzk3OTUyMDY@._V1_.jpg',
            caption: {
              plainText: 'Sniper. The White Raven (2022)',
              __typename: 'Markdown',
            },
            height: 793,
            width: 1817,
            __typename: 'Image',
          },
          __typename: 'ImageEdge',
        },
        {
          node: {
            id: 'rm356781569',
            url: 'https://m.media-amazon.com/images/M/MV5BYzRiMmFlN2UtMmM3ZS00NTJiLTk0N2UtZmExNzkyZWQ5YjhlXkEyXkFqcGdeQXVyMTE5MTg5NDIw._V1_.jpg',
            caption: {
              plainText: 'Pavlo Aldoshyn in Sniper. The White Raven (2022)',
              __typename: 'Markdown',
            },
            height: 3000,
            width: 2000,
            __typename: 'Image',
          },
          __typename: 'ImageEdge',
        },
        {
          node: {
            id: 'rm1026951169',
            url: 'https://m.media-amazon.com/images/M/MV5BMDRiODE1MDctMTU5Yy00OGJkLTljNzAtNGRkOTYwYmFhNTJjXkEyXkFqcGdeQXVyMTE5MTg5NDIw._V1_.jpg',
            caption: {
              plainText: 'Pavlo Aldoshyn in Sniper. The White Raven (2022)',
              __typename: 'Markdown',
            },
            height: 1772,
            width: 1181,
            __typename: 'Image',
          },
          __typename: 'ImageEdge',
        },
        {
          node: {
            id: 'rm1439244033',
            url: 'https://m.media-amazon.com/images/M/MV5BNWMwOTgyNmMtYWNlYS00NGIyLTllOWYtZTVlNzU3N2ViZWQ5XkEyXkFqcGdeQXVyMzk3OTUyMDY@._V1_.jpg',
            caption: {
              plainText: 'Pavlo Aldoshyn in Sniper. The White Raven (2022)',
              __typename: 'Markdown',
            },
            height: 1772,
            width: 1181,
            __typename: 'Image',
          },
          __typename: 'ImageEdge',
        },
      ],
      __typename: 'ImageConnection',
    },
    imageUploadLink: {
      url: 'https://contribute.imdb.com/image/tt19465630/add?bus=imdb&return_url=https%3A%2F%2Fwww.imdb.com%2Fclose_me&site=web',
      __typename: 'ContributionLink',
    },
    cast: {
      edges: [
        {
          node: {
            name: {
              id: 'nm3838884',
              nameText: { text: 'Pavlo Aldoshyn', __typename: 'NameText' },
              primaryImage: null,
              __typename: 'Name',
            },
            attributes: null,
            category: { id: 'actor', __typename: 'CreditCategory' },
            characters: [{ name: 'Mykola', __typename: 'Character' }],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm9582810',
              nameText: { text: 'Maryna Koshkina', __typename: 'NameText' },
              primaryImage: {
                url: 'https://m.media-amazon.com/images/M/MV5BYTM1MGRkMzgtMTFmZS00NjU4LWIwOGYtNjhmODY0MWJmMzE4XkEyXkFqcGdeQXVyMTc4MzI2NQ@@._V1_.jpg',
                width: 1280,
                height: 720,
                __typename: 'Image',
              },
              __typename: 'Name',
            },
            attributes: null,
            category: { id: 'actress', __typename: 'CreditCategory' },
            characters: [{ name: 'Nastya', __typename: 'Character' }],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm5643878',
              nameText: { text: 'Andrey Mostrenko', __typename: 'NameText' },
              primaryImage: null,
              __typename: 'Name',
            },
            attributes: [
              {
                text: 'as Andriy Mostrenko',
                __typename: 'CreditedAsCreditAttribute',
              },
            ],
            category: { id: 'actor', __typename: 'CreditCategory' },
            characters: [{ name: 'Cap', __typename: 'Character' }],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm9457418',
              nameText: { text: 'Roman Semysal', __typename: 'NameText' },
              primaryImage: null,
              __typename: 'Name',
            },
            attributes: null,
            category: { id: 'actor', __typename: 'CreditCategory' },
            characters: [
              { name: 'Brigade commander', __typename: 'Character' },
            ],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm0236618',
              nameText: { text: 'Oleg Drach', __typename: 'NameText' },
              primaryImage: {
                url: 'https://m.media-amazon.com/images/M/MV5BYzE0Y2UwZjgtYjE0OC00OGNjLThlMWQtNWU0MDNlNmNjZTVmXkEyXkFqcGdeQXVyMTMzOTU3MDcz._V1_.jpg',
                width: 261,
                height: 420,
                __typename: 'Image',
              },
              __typename: 'Name',
            },
            attributes: null,
            category: { id: 'actor', __typename: 'CreditCategory' },
            characters: [{ name: 'Syeryy', __typename: 'Character' }],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm7424662',
              nameText: { text: 'Roman Yasinovskiy', __typename: 'NameText' },
              primaryImage: {
                url: 'https://m.media-amazon.com/images/M/MV5BN2M0NmFiZmQtMTZlZi00MWNiLTlhMjAtMjA4NWNmNjc2MThlXkEyXkFqcGdeQXVyNjg3MTIwODI@._V1_.jpg',
                width: 2048,
                height: 1281,
                __typename: 'Image',
              },
              __typename: 'Name',
            },
            attributes: null,
            category: { id: 'actor', __typename: 'CreditCategory' },
            characters: [{ name: 'Klym', __typename: 'Character' }],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm9236420',
              nameText: { text: 'Oleg Shulga', __typename: 'NameText' },
              primaryImage: {
                url: 'https://m.media-amazon.com/images/M/MV5BZWM5NTdhMDAtYmRiNC00NWY3LWFhN2UtZmQ4N2IxZmQyZjIxXkEyXkFqcGdeQXVyNTc0NjY1ODk@._V1_.jpg',
                width: 960,
                height: 960,
                __typename: 'Image',
              },
              __typename: 'Name',
            },
            attributes: null,
            category: { id: 'actor', __typename: 'CreditCategory' },
            characters: [{ name: 'Dunay', __typename: 'Character' }],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm9201438',
              nameText: { text: 'Vadim Lyalko', __typename: 'NameText' },
              primaryImage: null,
              __typename: 'Name',
            },
            attributes: [
              {
                text: 'as Vadym Lyalko',
                __typename: 'CreditedAsCreditAttribute',
              },
            ],
            category: { id: 'actor', __typename: 'CreditCategory' },
            characters: [
              { name: 'Commander of the GRU (Buryy)', __typename: 'Character' },
            ],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm8247168',
              nameText: { text: 'Vadim Kurilko', __typename: 'NameText' },
              primaryImage: {
                url: 'https://m.media-amazon.com/images/M/MV5BZGQyY2M0ZTItNzJlMy00YWViLTkxNGUtYTZkMzk2YzcwOTUzXkEyXkFqcGdeQXVyNjg3MTIwODI@._V1_.jpg',
                width: 540,
                height: 435,
                __typename: 'Image',
              },
              __typename: 'Name',
            },
            attributes: [
              {
                text: 'as Vadym Kurylko',
                __typename: 'CreditedAsCreditAttribute',
              },
            ],
            category: { id: 'actor', __typename: 'CreditCategory' },
            characters: [{ name: 'Hyurza', __typename: 'Character' }],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm12115530',
              nameText: { text: 'Vladyslav Dmytrenko', __typename: 'NameText' },
              primaryImage: null,
              __typename: 'Name',
            },
            attributes: null,
            category: { id: 'actor', __typename: 'CreditCategory' },
            characters: [{ name: 'Malysh', __typename: 'Character' }],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm10823253',
              nameText: { text: 'Eugen Volosheniuk', __typename: 'NameText' },
              primaryImage: null,
              __typename: 'Name',
            },
            attributes: [
              {
                text: 'as Yevhen Voloshenyuk',
                __typename: 'CreditedAsCreditAttribute',
              },
            ],
            category: { id: 'actor', __typename: 'CreditCategory' },
            characters: [{ name: 'Batyanya', __typename: 'Character' }],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm11383417',
              nameText: { text: 'Oleksandr Bykov', __typename: 'NameText' },
              primaryImage: null,
              __typename: 'Name',
            },
            attributes: null,
            category: { id: 'actor', __typename: 'CreditCategory' },
            characters: [{ name: 'Thin', __typename: 'Character' }],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm15108485',
              nameText: { text: 'Serhiy Artemenko', __typename: 'NameText' },
              primaryImage: null,
              __typename: 'Name',
            },
            attributes: null,
            category: { id: 'actor', __typename: 'CreditCategory' },
            characters: [{ name: 'Volunteer', __typename: 'Character' }],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm11348671',
              nameText: { text: 'Egor Kozlov', __typename: 'NameText' },
              primaryImage: null,
              __typename: 'Name',
            },
            attributes: null,
            category: { id: 'actor', __typename: 'CreditCategory' },
            characters: [{ name: 'Ivan', __typename: 'Character' }],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm10801200',
              nameText: { text: 'Zachary Shadrin', __typename: 'NameText' },
              primaryImage: {
                url: 'https://m.media-amazon.com/images/M/MV5BODI1ZGMzODgtNzIyZC00ZjE1LWE4YmMtOGFiYTg2YTg5OWUyXkEyXkFqcGdeQXVyMTA0OTE1OTMx._V1_.jpg',
                width: 1334,
                height: 2000,
                __typename: 'Image',
              },
              __typename: 'Name',
            },
            attributes: [
              {
                text: 'as Zakhar Shadrin',
                __typename: 'CreditedAsCreditAttribute',
              },
            ],
            category: { id: 'actor', __typename: 'CreditCategory' },
            characters: [{ name: 'Taras', __typename: 'Character' }],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm15108486',
              nameText: { text: 'Olena Chervonenko', __typename: 'NameText' },
              primaryImage: null,
              __typename: 'Name',
            },
            attributes: null,
            category: { id: 'actress', __typename: 'CreditCategory' },
            characters: [{ name: 'Journalist', __typename: 'Character' }],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm4920987',
              nameText: { text: 'Demyan Radzivilyuk', __typename: 'NameText' },
              primaryImage: {
                url: 'https://m.media-amazon.com/images/M/MV5BYjcyYWIyMGUtODdjNi00MjhhLWI3YTgtYTdkYWJkZTZmM2ZjXkEyXkFqcGdeQXVyMTY3NTY5OTcx._V1_.jpg',
                width: 577,
                height: 849,
                __typename: 'Image',
              },
              __typename: 'Name',
            },
            attributes: null,
            category: { id: 'actor', __typename: 'CreditCategory' },
            characters: [{ name: 'Operator', __typename: 'Character' }],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm14091106',
              nameText: { text: 'Alina Karpenko', __typename: 'NameText' },
              primaryImage: null,
              __typename: 'Name',
            },
            attributes: null,
            category: { id: 'actor', __typename: 'CreditCategory' },
            characters: [{ name: 'News anchor', __typename: 'Character' }],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
      ],
      __typename: 'CreditConnection',
    },
    creators: [],
    directors: [
      {
        totalCredits: 1,
        category: { text: 'Director', __typename: 'CreditCategory' },
        credits: [
          {
            name: {
              id: 'nm11595610',
              nameText: { text: 'Marian Bushan', __typename: 'NameText' },
              __typename: 'Name',
            },
            attributes: null,
            __typename: 'Crew',
          },
        ],
        __typename: 'PrincipalCreditsForCategory',
      },
    ],
    writers: [
      {
        totalCredits: 2,
        category: { text: 'Writers', __typename: 'CreditCategory' },
        credits: [
          {
            name: {
              id: 'nm11595610',
              nameText: { text: 'Marian Bushan', __typename: 'NameText' },
              __typename: 'Name',
            },
            attributes: null,
            __typename: 'Crew',
          },
          {
            name: {
              id: 'nm13887614',
              nameText: { text: 'Mykola Voronin', __typename: 'NameText' },
              __typename: 'Name',
            },
            attributes: null,
            __typename: 'Crew',
          },
        ],
        __typename: 'PrincipalCreditsForCategory',
      },
    ],
    isAdult: false,
    moreLikeThisTitles: {
      edges: [
        {
          node: {
            id: 'tt7691572',
            titleText: {
              text: 'Cyborgs: Heroes Never Die',
              __typename: 'TitleText',
            },
            titleType: {
              id: 'movie',
              text: 'Movie',
              canHaveEpisodes: false,
              displayableProperty: {
                value: { plainText: '', __typename: 'Markdown' },
                __typename: 'DisplayableTitleTypeProperty',
              },
              __typename: 'TitleType',
            },
            originalTitleText: {
              text: 'Kiborgy. Heroyi ne vmyrayut',
              __typename: 'TitleText',
            },
            primaryImage: {
              id: 'rm3089784576',
              width: 1000,
              height: 1500,
              url: 'https://m.media-amazon.com/images/M/MV5BYTUyMWNkYWUtMTg1ZS00MjJiLWE2ZjgtYjJkYTJmMmEzNWI0XkEyXkFqcGdeQXVyNTEzNDIxOTg@._V1_.jpg',
              caption: {
                plainText:
                  'Vyacheslav Dovzhenko, Andrey Isaenko, Roman Yasinovskiy, Viktor Zhdanov, and Makar Tikhomirov in Cyborgs: Heroes Never Die (2017)',
                __typename: 'Markdown',
              },
              __typename: 'Image',
            },
            releaseYear: { year: 2017, endYear: null, __typename: 'YearRange' },
            ratingsSummary: {
              aggregateRating: 7.5,
              voteCount: 7637,
              __typename: 'RatingsSummary',
            },
            runtime: { seconds: 6720, __typename: 'Runtime' },
            certificate: { rating: 'TV-14', __typename: 'Certificate' },
            canRate: { isRatable: true, __typename: 'CanRate' },
            titleGenres: {
              genres: [
                {
                  genre: { text: 'Action', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'Drama', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'War', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
              ],
              __typename: 'TitleGenres',
            },
            canHaveEpisodes: false,
            __typename: 'Title',
          },
          __typename: 'MoreLikeThisEdge',
        },
        {
          node: {
            id: 'tt8268302',
            titleText: {
              text: 'I Work at the Cemetery',
              __typename: 'TitleText',
            },
            titleType: {
              id: 'movie',
              text: 'Movie',
              canHaveEpisodes: false,
              displayableProperty: {
                value: { plainText: '', __typename: 'Markdown' },
                __typename: 'DisplayableTitleTypeProperty',
              },
              __typename: 'TitleType',
            },
            originalTitleText: {
              text: 'Ya pratsyuyu na tsvyntari',
              __typename: 'TitleText',
            },
            primaryImage: {
              id: 'rm439794177',
              width: 1200,
              height: 1691,
              url: 'https://m.media-amazon.com/images/M/MV5BNjJkOWQwNTAtZjQ4Zi00ZTYxLTg1OGMtNTk3Njg5YTY5YmQ0XkEyXkFqcGdeQXVyNDAwMzY0OTk@._V1_.jpg',
              caption: {
                plainText: 'Vitaliy Saliy in I Work at the Cemetery (2021)',
                __typename: 'Markdown',
              },
              __typename: 'Image',
            },
            releaseYear: { year: 2021, endYear: null, __typename: 'YearRange' },
            ratingsSummary: {
              aggregateRating: 7.4,
              voteCount: 1396,
              __typename: 'RatingsSummary',
            },
            runtime: { seconds: 6000, __typename: 'Runtime' },
            certificate: { rating: 'Not Rated', __typename: 'Certificate' },
            canRate: { isRatable: true, __typename: 'CanRate' },
            titleGenres: {
              genres: [
                {
                  genre: { text: 'Comedy', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'Crime', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'Drama', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
              ],
              __typename: 'TitleGenres',
            },
            canHaveEpisodes: false,
            __typename: 'Title',
          },
          __typename: 'MoreLikeThisEdge',
        },
        {
          node: {
            id: 'tt11386020',
            titleText: { text: 'Black Raven', __typename: 'TitleText' },
            titleType: {
              id: 'movie',
              text: 'Movie',
              canHaveEpisodes: false,
              displayableProperty: {
                value: { plainText: '', __typename: 'Markdown' },
                __typename: 'DisplayableTitleTypeProperty',
              },
              __typename: 'TitleType',
            },
            originalTitleText: {
              text: 'Chornyy Voron',
              __typename: 'TitleText',
            },
            primaryImage: {
              id: 'rm3018752513',
              width: 600,
              height: 900,
              url: 'https://m.media-amazon.com/images/M/MV5BMzc4NDViNTgtOGU3MC00NjcwLTk5MDktZTFjZDIwZWM1ZDA0XkEyXkFqcGdeQXVyMjk1NzAxNg@@._V1_.jpg',
              caption: {
                plainText: 'Black Raven (2019)',
                __typename: 'Markdown',
              },
              __typename: 'Image',
            },
            releaseYear: { year: 2019, endYear: null, __typename: 'YearRange' },
            ratingsSummary: {
              aggregateRating: 7.3,
              voteCount: 583,
              __typename: 'RatingsSummary',
            },
            runtime: { seconds: 6600, __typename: 'Runtime' },
            certificate: null,
            canRate: { isRatable: true, __typename: 'CanRate' },
            titleGenres: {
              genres: [
                {
                  genre: { text: 'Drama', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'History', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'War', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
              ],
              __typename: 'TitleGenres',
            },
            canHaveEpisodes: false,
            __typename: 'Title',
          },
          __typename: 'MoreLikeThisEdge',
        },
        {
          node: {
            id: 'tt5761544',
            titleText: { text: 'Kandahar', __typename: 'TitleText' },
            titleType: {
              id: 'movie',
              text: 'Movie',
              canHaveEpisodes: false,
              displayableProperty: {
                value: { plainText: '', __typename: 'Markdown' },
                __typename: 'DisplayableTitleTypeProperty',
              },
              __typename: 'TitleType',
            },
            originalTitleText: { text: 'Kandahar', __typename: 'TitleText' },
            primaryImage: {
              id: 'rm487861761',
              width: 810,
              height: 1200,
              url: 'https://m.media-amazon.com/images/M/MV5BMjNiNDg2OWYtOGEzNy00M2E5LTgxZjItNzVmN2VmNTg3MzBhXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg',
              caption: {
                plainText: 'Gerard Butler in Kandahar (2023)',
                __typename: 'Markdown',
              },
              __typename: 'Image',
            },
            releaseYear: { year: 2023, endYear: null, __typename: 'YearRange' },
            ratingsSummary: {
              aggregateRating: 6.1,
              voteCount: 29153,
              __typename: 'RatingsSummary',
            },
            runtime: { seconds: 7140, __typename: 'Runtime' },
            certificate: { rating: 'R', __typename: 'Certificate' },
            canRate: { isRatable: true, __typename: 'CanRate' },
            titleGenres: {
              genres: [
                {
                  genre: { text: 'Action', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'Thriller', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
              ],
              __typename: 'TitleGenres',
            },
            canHaveEpisodes: false,
            __typename: 'Title',
          },
          __typename: 'MoreLikeThisEdge',
        },
        {
          node: {
            id: 'tt26225074',
            titleText: { text: 'Myrnyi-21', __typename: 'TitleText' },
            titleType: {
              id: 'movie',
              text: 'Movie',
              canHaveEpisodes: false,
              displayableProperty: {
                value: { plainText: '', __typename: 'Markdown' },
                __typename: 'DisplayableTitleTypeProperty',
              },
              __typename: 'TitleType',
            },
            originalTitleText: { text: 'Myrnyi-21', __typename: 'TitleText' },
            primaryImage: {
              id: 'rm2983014401',
              width: 600,
              height: 900,
              url: 'https://m.media-amazon.com/images/M/MV5BZGU3NTY1MDMtYWM3Zi00YWE0LWFjMTgtNjgwMjc0MmZjMTg4XkEyXkFqcGdeQXVyMjk1NzAxNg@@._V1_.jpg',
              caption: {
                plainText:
                  'Evgeniy Lamakh, Mariia Shtofa, Pavlo Li, Aleksey Tritenko, Andrey Saminin, and Andrey Mostrenko in Myrnyi-21 (2023)',
                __typename: 'Markdown',
              },
              __typename: 'Image',
            },
            releaseYear: { year: 2023, endYear: null, __typename: 'YearRange' },
            ratingsSummary: {
              aggregateRating: 7.5,
              voteCount: 368,
              __typename: 'RatingsSummary',
            },
            runtime: { seconds: 7020, __typename: 'Runtime' },
            certificate: null,
            canRate: { isRatable: true, __typename: 'CanRate' },
            titleGenres: {
              genres: [
                {
                  genre: { text: 'War', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
              ],
              __typename: 'TitleGenres',
            },
            canHaveEpisodes: false,
            __typename: 'Title',
          },
          __typename: 'MoreLikeThisEdge',
        },
        {
          node: {
            id: 'tt8205656',
            titleText: { text: 'U311 Cherkasy', __typename: 'TitleText' },
            titleType: {
              id: 'movie',
              text: 'Movie',
              canHaveEpisodes: false,
              displayableProperty: {
                value: { plainText: '', __typename: 'Markdown' },
                __typename: 'DisplayableTitleTypeProperty',
              },
              __typename: 'TitleType',
            },
            originalTitleText: { text: 'Cherkasy', __typename: 'TitleText' },
            primaryImage: {
              id: 'rm799080705',
              width: 1131,
              height: 1600,
              url: 'https://m.media-amazon.com/images/M/MV5BZGNhYjk4MzItZjhiMC00YWM0LWIwODQtZjBlYjBiNThkNTZlXkEyXkFqcGdeQXVyMTA1OTMyMjUw._V1_.jpg',
              caption: {
                plainText: 'U311 Cherkasy (2019)',
                __typename: 'Markdown',
              },
              __typename: 'Image',
            },
            releaseYear: { year: 2019, endYear: null, __typename: 'YearRange' },
            ratingsSummary: {
              aggregateRating: 6.6,
              voteCount: 1178,
              __typename: 'RatingsSummary',
            },
            runtime: { seconds: 6120, __typename: 'Runtime' },
            certificate: null,
            canRate: { isRatable: true, __typename: 'CanRate' },
            titleGenres: {
              genres: [
                {
                  genre: { text: 'Drama', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'History', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'War', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
              ],
              __typename: 'TitleGenres',
            },
            canHaveEpisodes: false,
            __typename: 'Title',
          },
          __typename: 'MoreLikeThisEdge',
        },
        {
          node: {
            id: 'tt17024450',
            titleText: { text: 'The Equalizer 3', __typename: 'TitleText' },
            titleType: {
              id: 'movie',
              text: 'Movie',
              canHaveEpisodes: false,
              displayableProperty: {
                value: { plainText: '', __typename: 'Markdown' },
                __typename: 'DisplayableTitleTypeProperty',
              },
              __typename: 'TitleType',
            },
            originalTitleText: {
              text: 'The Equalizer 3',
              __typename: 'TitleText',
            },
            primaryImage: {
              id: 'rm3479252737',
              width: 1080,
              height: 1350,
              url: 'https://m.media-amazon.com/images/M/MV5BODdiMzM2YjctZmU3ZS00MzUwLWJiYTMtMmI2NzIyMTQyOTQ1XkEyXkFqcGdeQXVyODY5NzkyMjA@._V1_.jpg',
              caption: {
                plainText: 'Denzel Washington in The Equalizer 3 (2023)',
                __typename: 'Markdown',
              },
              __typename: 'Image',
            },
            releaseYear: { year: 2023, endYear: null, __typename: 'YearRange' },
            ratingsSummary: {
              aggregateRating: 6.8,
              voteCount: 84846,
              __typename: 'RatingsSummary',
            },
            runtime: { seconds: 6540, __typename: 'Runtime' },
            certificate: { rating: 'R', __typename: 'Certificate' },
            canRate: { isRatable: true, __typename: 'CanRate' },
            titleGenres: {
              genres: [
                {
                  genre: { text: 'Action', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'Crime', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'Thriller', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
              ],
              __typename: 'TitleGenres',
            },
            canHaveEpisodes: false,
            __typename: 'Title',
          },
          __typename: 'MoreLikeThisEdge',
        },
        {
          node: {
            id: 'tt21222434',
            titleText: {
              text: 'Sniper: Rogue Mission',
              __typename: 'TitleText',
            },
            titleType: {
              id: 'movie',
              text: 'Movie',
              canHaveEpisodes: false,
              displayableProperty: {
                value: { plainText: '', __typename: 'Markdown' },
                __typename: 'DisplayableTitleTypeProperty',
              },
              __typename: 'TitleType',
            },
            originalTitleText: {
              text: 'Sniper: Rogue Mission',
              __typename: 'TitleText',
            },
            primaryImage: {
              id: 'rm1993804289',
              width: 1544,
              height: 2192,
              url: 'https://m.media-amazon.com/images/M/MV5BNjkxMzQwMzgtMzU0Yy00NGIzLWFiNjUtYmQ2MzVmMzJkN2JmXkEyXkFqcGdeQXVyNTg4MDc4Mg@@._V1_.jpg',
              caption: {
                plainText:
                  'Dennis Haysbert, Ryan Robbins, Chad Michael Collins, and Sayaka Akimoto in Sniper: Rogue Mission (2022)',
                __typename: 'Markdown',
              },
              __typename: 'Image',
            },
            releaseYear: { year: 2022, endYear: null, __typename: 'YearRange' },
            ratingsSummary: {
              aggregateRating: 4.6,
              voteCount: 1578,
              __typename: 'RatingsSummary',
            },
            runtime: { seconds: 5760, __typename: 'Runtime' },
            certificate: { rating: 'R', __typename: 'Certificate' },
            canRate: { isRatable: true, __typename: 'CanRate' },
            titleGenres: {
              genres: [
                {
                  genre: { text: 'Action', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'Thriller', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
              ],
              __typename: 'TitleGenres',
            },
            canHaveEpisodes: false,
            __typename: 'Title',
          },
          __typename: 'MoreLikeThisEdge',
        },
        {
          node: {
            id: 'tt7876510',
            titleText: {
              text: 'My Thoughts Are Silent',
              __typename: 'TitleText',
            },
            titleType: {
              id: 'movie',
              text: 'Movie',
              canHaveEpisodes: false,
              displayableProperty: {
                value: { plainText: '', __typename: 'Markdown' },
                __typename: 'DisplayableTitleTypeProperty',
              },
              __typename: 'TitleType',
            },
            originalTitleText: {
              text: 'Moyi dumky tykhi',
              __typename: 'TitleText',
            },
            primaryImage: {
              id: 'rm78351361',
              width: 1984,
              height: 2835,
              url: 'https://m.media-amazon.com/images/M/MV5BNzcxMzFmYzYtMjU0Mi00YTQzLWIwYzItN2NmZmY3NzRiNWMyXkEyXkFqcGdeQXVyMjk1NzAxNg@@._V1_.jpg',
              caption: {
                plainText:
                  'Andriy Lidagovskiy and Irma Vitovska in My Thoughts Are Silent (2019)',
                __typename: 'Markdown',
              },
              __typename: 'Image',
            },
            releaseYear: { year: 2019, endYear: null, __typename: 'YearRange' },
            ratingsSummary: {
              aggregateRating: 7.8,
              voteCount: 3823,
              __typename: 'RatingsSummary',
            },
            runtime: { seconds: 6240, __typename: 'Runtime' },
            certificate: null,
            canRate: { isRatable: true, __typename: 'CanRate' },
            titleGenres: {
              genres: [
                {
                  genre: { text: 'Comedy', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'Drama', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
              ],
              __typename: 'TitleGenres',
            },
            canHaveEpisodes: false,
            __typename: 'Title',
          },
          __typename: 'MoreLikeThisEdge',
        },
        {
          node: {
            id: 'tt6349302',
            titleText: {
              text: 'Sniper: Ultimate Kill',
              __typename: 'TitleText',
            },
            titleType: {
              id: 'movie',
              text: 'Movie',
              canHaveEpisodes: false,
              displayableProperty: {
                value: { plainText: '', __typename: 'Markdown' },
                __typename: 'DisplayableTitleTypeProperty',
              },
              __typename: 'TitleType',
            },
            originalTitleText: {
              text: 'Sniper: Ultimate Kill',
              __typename: 'TitleText',
            },
            primaryImage: {
              id: 'rm4087882240',
              width: 393,
              height: 521,
              url: 'https://m.media-amazon.com/images/M/MV5BYjVmYWRmYjgtODEyNS00ZTgwLTg5NDYtMDcyNzQ3ZGUyOGUyXkEyXkFqcGdeQXVyOTg4MDYyNw@@._V1_.jpg',
              caption: {
                plainText:
                  'Tom Berenger, Billy Zane, Chad Michael Collins, and Danay Garcia in Sniper: Ultimate Kill (2017)',
                __typename: 'Markdown',
              },
              __typename: 'Image',
            },
            releaseYear: { year: 2017, endYear: null, __typename: 'YearRange' },
            ratingsSummary: {
              aggregateRating: 5.6,
              voteCount: 5996,
              __typename: 'RatingsSummary',
            },
            runtime: { seconds: 5400, __typename: 'Runtime' },
            certificate: { rating: 'R', __typename: 'Certificate' },
            canRate: { isRatable: true, __typename: 'CanRate' },
            titleGenres: {
              genres: [
                {
                  genre: { text: 'Action', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'Drama', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'Thriller', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
              ],
              __typename: 'TitleGenres',
            },
            canHaveEpisodes: false,
            __typename: 'Title',
          },
          __typename: 'MoreLikeThisEdge',
        },
        {
          node: {
            id: 'tt10276554',
            titleText: { text: 'Beshoot', __typename: 'TitleText' },
            titleType: {
              id: 'movie',
              text: 'Movie',
              canHaveEpisodes: false,
              displayableProperty: {
                value: { plainText: '', __typename: 'Markdown' },
                __typename: 'DisplayableTitleTypeProperty',
              },
              __typename: 'TitleType',
            },
            originalTitleText: { text: 'Beshoot', __typename: 'TitleText' },
            primaryImage: {
              id: 'rm4260934145',
              width: 501,
              height: 709,
              url: 'https://m.media-amazon.com/images/M/MV5BOGZhZWZhY2ItNjM5My00YmJiLTk0MjAtNzkwYjUxNjlkMGQzXkEyXkFqcGdeQXVyODg1MTc3MTM@._V1_.jpg',
              caption: { plainText: 'Beshoot (2019)', __typename: 'Markdown' },
              __typename: 'Image',
            },
            releaseYear: { year: 2019, endYear: null, __typename: 'YearRange' },
            ratingsSummary: {
              aggregateRating: 7.5,
              voteCount: 592,
              __typename: 'RatingsSummary',
            },
            runtime: { seconds: 7200, __typename: 'Runtime' },
            certificate: null,
            canRate: { isRatable: true, __typename: 'CanRate' },
            titleGenres: {
              genres: [
                {
                  genre: { text: 'Action', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'Drama', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'War', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
              ],
              __typename: 'TitleGenres',
            },
            canHaveEpisodes: false,
            __typename: 'Title',
          },
          __typename: 'MoreLikeThisEdge',
        },
        {
          node: {
            id: 'tt10330046',
            titleText: { text: 'Censored', __typename: 'TitleText' },
            titleType: {
              id: 'movie',
              text: 'Movie',
              canHaveEpisodes: false,
              displayableProperty: {
                value: { plainText: '', __typename: 'Markdown' },
                __typename: 'DisplayableTitleTypeProperty',
              },
              __typename: 'TitleType',
            },
            originalTitleText: { text: 'Zaboronenyy', __typename: 'TitleText' },
            primaryImage: {
              id: 'rm973182209',
              width: 600,
              height: 900,
              url: 'https://m.media-amazon.com/images/M/MV5BMGRkYWVlNGQtYTM4ZC00MmFmLWI0YTMtYmU4MTgzNWUzNDVlXkEyXkFqcGdeQXVyMjk1NzAxNg@@._V1_.jpg',
              caption: { plainText: 'Censored (2019)', __typename: 'Markdown' },
              __typename: 'Image',
            },
            releaseYear: { year: 2019, endYear: null, __typename: 'YearRange' },
            ratingsSummary: {
              aggregateRating: 7.4,
              voteCount: 834,
              __typename: 'RatingsSummary',
            },
            runtime: { seconds: 6000, __typename: 'Runtime' },
            certificate: null,
            canRate: { isRatable: true, __typename: 'CanRate' },
            titleGenres: {
              genres: [
                {
                  genre: { text: 'Biography', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'Drama', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'History', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
              ],
              __typename: 'TitleGenres',
            },
            canHaveEpisodes: false,
            __typename: 'Title',
          },
          __typename: 'MoreLikeThisEdge',
        },
      ],
      __typename: 'MoreLikeThisConnection',
    },
    trivia: {
      edges: [
        {
          node: {
            text: {
              plaidHtml:
                'This gritty and evocative film follows a physics teacher in the Donbas region who suffers a family tragedy at the hands of invading Russian troops. The ex-pacifist joins the army as an unconventional sniper determined to gain revenge and defend the future of his country.<br/><br/>It was created with support from the Ukrainian State Film Agency, was co-written by Mykola Voronin - the real-life sniper whose story is portrayed - and features about 100 members of the Ukrainian armed forces and national guard. Even aside from those career military personnel, several of the main cast members are currently fighting on the front lines.',
              __typename: 'Markdown',
            },
            trademark: null,
            relatedNames: null,
            __typename: 'TitleTrivia',
          },
          __typename: 'TriviaEdge',
        },
      ],
      __typename: 'TriviaConnection',
    },
    goofsTotal: { total: 0, __typename: 'GoofConnection' },
    goofs: { edges: [], __typename: 'GoofConnection' },
    quotesTotal: { total: 0, __typename: 'TitleQuoteConnection' },
    quotes: { edges: [], __typename: 'TitleQuoteConnection' },
    crazyCredits: { edges: [], __typename: 'CrazyCreditConnection' },
    alternateVersions: {
      total: 0,
      edges: [],
      __typename: 'AlternateVersionConnection',
    },
    connections: { edges: [], __typename: 'TitleConnectionConnection' },
    soundtrack: { edges: [], __typename: 'SoundtrackConnection' },
    iframeAddReviewLink: {
      url: 'https://contribute.imdb.com/review/tt19465630/add?bus=imdb&return_url=https%3A%2F%2Fwww.imdb.com%2Fclose_me&site=web',
      __typename: 'ContributionLink',
    },
    topQuestions: {
      total: 15,
      edges: [
        {
          node: {
            attributeId: 'run-time',
            question: {
              plainText: 'How long is Sniper. The White Raven?',
              __typename: 'Markdown',
            },
            __typename: 'AlexaQuestion',
          },
          __typename: 'AlexaQuestionEdge',
        },
      ],
      __typename: 'AlexaQuestionConnection',
    },
    faqs: { total: 0, edges: [], __typename: 'FaqConnection' },
    detailsExternalLinks: {
      edges: [
        {
          node: {
            url: 'https://wellgousa.com/films/sniper-white-raven',
            label: 'official site',
            externalLinkRegion: null,
            __typename: 'ExternalLink',
          },
          __typename: 'ExternalLinkEdge',
        },
        {
          node: {
            url: 'http://www.wellgousa.com/films/sniper-the-white-raven',
            label: 'US Distributor Company Site - film page',
            externalLinkRegion: null,
            __typename: 'ExternalLink',
          },
          __typename: 'ExternalLinkEdge',
        },
      ],
      total: 3,
      __typename: 'ExternalLinkConnection',
    },
    spokenLanguages: {
      spokenLanguages: [
        { id: 'uk', text: 'Ukrainian', __typename: 'SpokenLanguage' },
        { id: 'ru', text: 'Russian', __typename: 'SpokenLanguage' },
      ],
      __typename: 'SpokenLanguages',
    },
    akas: {
      edges: [
        {
          node: { text: 'Снайпер. Білий ворон', __typename: 'Aka' },
          __typename: 'AkaEdge',
        },
      ],
      __typename: 'AkaConnection',
    },
    filmingLocations: {
      edges: [],
      total: 0,
      __typename: 'FilmingLocationConnection',
    },
    companies: { total: 9, __typename: 'CompanyCreditConnection' },
    productionBudget: {
      budget: { amount: 997800, currency: 'EUR', __typename: 'Money' },
      __typename: 'ProductionBudget',
    },
    lifetimeGross: {
      total: { amount: 881, currency: 'USD', __typename: 'Money' },
      __typename: 'BoxOfficeGross',
    },
    openingWeekendGross: {
      gross: {
        total: { amount: 881, currency: 'USD', __typename: 'Money' },
        __typename: 'BoxOfficeGross',
      },
      weekendEndDate: '2022-07-03',
      __typename: 'OpeningWeekendGross',
    },
    worldwideGross: {
      total: { amount: 6105, currency: 'USD', __typename: 'Money' },
      __typename: 'BoxOfficeGross',
    },
    technicalSpecifications: {
      soundMixes: { items: [], __typename: 'SoundMixes' },
      aspectRatios: {
        items: [
          { aspectRatio: '2.39:1', attributes: [], __typename: 'AspectRatio' },
        ],
        __typename: 'AspectRatios',
      },
      colorations: {
        items: [
          {
            conceptId: 'color',
            text: 'Color',
            attributes: [],
            __typename: 'Coloration',
          },
        ],
        __typename: 'Colorations',
      },
      __typename: 'TechnicalSpecifications',
    },
    contributionQuestions: {
      contributionLink: {
        url: 'https://contribute.imdb.com/answers',
        __typename: 'ContributionQuestionsLink',
      },
      edges: [
        {
          node: {
            entity: {
              primaryImage: {
                url: 'https://m.media-amazon.com/images/M/MV5BNWMwOTgyNmMtYWNlYS00NGIyLTllOWYtZTVlNzU3N2ViZWQ5XkEyXkFqcGdeQXVyMzk3OTUyMDY@._V1_.jpg',
                width: 1181,
                height: 1772,
                caption: {
                  plainText: 'Pavlo Aldoshyn in Sniper. The White Raven (2022)',
                  __typename: 'Markdown',
                },
                __typename: 'Image',
              },
              __typename: 'Title',
            },
            questionId: 'tt19465630.plot_outline.fr-CA',
            questionText: {
              plainText:
                'What is the Canadian French language plot outline for Sniper. The White Raven (2022)?',
              __typename: 'Markdown',
            },
            contributionLink: {
              url: 'https://contribute.imdb.com/answers?pinnedQuestion=tt19465630.plot_outline.fr-CA',
              __typename: 'ContributionQuestionsLink',
            },
            __typename: 'Question',
          },
          __typename: 'QuestionEdge',
        },
      ],
      __typename: 'QuestionConnection',
    },
  },
  {
    id: 'tt19783714',
    productionStatus: {
      currentProductionStage: {
        id: 'released',
        text: 'Released',
        __typename: 'ProductionStage',
      },
      productionStatusHistory: [
        {
          status: {
            id: 'post_production',
            text: 'Post-production',
            __typename: 'ProductionStatus',
          },
          __typename: 'ProductionStatusHistory',
        },
        {
          status: {
            id: 'completed',
            text: 'Completed',
            __typename: 'ProductionStatus',
          },
          __typename: 'ProductionStatusHistory',
        },
        {
          status: {
            id: 'released',
            text: 'Released',
            __typename: 'ProductionStatus',
          },
          __typename: 'ProductionStatusHistory',
        },
      ],
      restriction: null,
      __typename: 'ProductionStatusDetails',
    },
    canHaveEpisodes: false,
    series: null,
    titleText: { text: 'Luxembourg, Luxembourg', __typename: 'TitleText' },
    titleType: { id: 'movie', canHaveEpisodes: false, __typename: 'TitleType' },
    originalTitleText: {
      text: 'Luxembourg, Luxembourg',
      __typename: 'TitleText',
    },
    certificate: null,
    releaseYear: { year: 2022, __typename: 'YearRange' },
    releaseDate: {
      day: 13,
      month: 4,
      year: 2023,
      country: {
        id: 'UA',
        text: 'Ukraine',
        __typename: 'LocalizedDisplayableCountry',
      },
      __typename: 'ReleaseDate',
    },
    runtime: { seconds: 6300, __typename: 'Runtime' },
    canRate: { isRatable: true, __typename: 'CanRate' },
    ratingsSummary: { topRanking: null, __typename: 'RatingsSummary' },
    meterRanking: null,
    primaryImage: { id: 'rm832113921', __typename: 'Image' },
    images: {
      total: 3,
      edges: [
        {
          node: { id: 'rm628426753', __typename: 'Image' },
          __typename: 'ImageEdge',
        },
      ],
      __typename: 'ImageConnection',
    },
    videos: { total: 0, __typename: 'TitleRelatedVideosConnection' },
    primaryVideos: { edges: [], __typename: 'VideoConnection' },
    externalLinks: { total: 12, __typename: 'ExternalLinkConnection' },
    metacritic: null,
    keywords: { total: 0, edges: [], __typename: 'TitleKeywordConnection' },
    genres: {
      genres: [{ text: 'Comedy', id: 'Comedy', __typename: 'Genre' }],
      __typename: 'Genres',
    },
    plot: {
      plotText: {
        plainText:
          'Mykola and Vasya go in search of their father, who left them when they were children, after they come to know that he is dying in Luxembourg. Kolya considers him a hero, while Vasya thinks he is a scoundrel.',
        __typename: 'Markdown',
      },
      language: { id: 'en-US', __typename: 'DisplayableLanguage' },
      __typename: 'Plot',
    },
    plotContributionLink: {
      url: 'https://contribute.imdb.com/updates?update=tt19783714:outlines.add.1.locale~en-US',
      __typename: 'ContributionLink',
    },
    credits: { total: 489, __typename: 'CreditConnection' },
    principalCredits: [
      {
        totalCredits: 1,
        category: {
          text: 'Director',
          id: 'director',
          __typename: 'CreditCategory',
        },
        credits: [
          {
            name: {
              nameText: { text: 'Antonio Lukich', __typename: 'NameText' },
              id: 'nm9557050',
              __typename: 'Name',
            },
            attributes: null,
            __typename: 'Crew',
          },
        ],
        __typename: 'PrincipalCreditsForCategory',
      },
      {
        totalCredits: 1,
        category: {
          text: 'Writer',
          id: 'writer',
          __typename: 'CreditCategory',
        },
        credits: [
          {
            name: {
              nameText: { text: 'Antonio Lukich', __typename: 'NameText' },
              id: 'nm9557050',
              __typename: 'Name',
            },
            attributes: null,
            __typename: 'Crew',
          },
        ],
        __typename: 'PrincipalCreditsForCategory',
      },
      {
        totalCredits: 376,
        category: { text: 'Stars', id: 'cast', __typename: 'CreditCategory' },
        credits: [
          {
            name: {
              nameText: { text: 'Amil Nasirov', __typename: 'NameText' },
              id: 'nm13883829',
              __typename: 'Name',
            },
            attributes: null,
            __typename: 'Cast',
          },
          {
            name: {
              nameText: { text: 'Ramil Nasirov', __typename: 'NameText' },
              id: 'nm13883830',
              __typename: 'Name',
            },
            attributes: null,
            __typename: 'Cast',
          },
          {
            name: {
              nameText: { text: 'Nataliya Gnitiy', __typename: 'NameText' },
              id: 'nm11375283',
              __typename: 'Name',
            },
            attributes: null,
            __typename: 'Cast',
          },
        ],
        __typename: 'PrincipalCreditsForCategory',
      },
    ],
    reviews: { total: 7, __typename: 'ReviewsConnection' },
    criticReviewsTotal: { total: 7, __typename: 'ExternalLinkConnection' },
    triviaTotal: { total: 1, __typename: 'TriviaConnection' },
    engagementStatistics: {
      watchlistStatistics: {
        displayableCount: {
          text: 'Added by 2.0K users',
          __typename: 'LocalizedDisplayableCount',
        },
        __typename: 'WatchlistStatistics',
      },
      __typename: 'EngagementStatistics',
    },
    subNavCredits: { total: 489, __typename: 'CreditConnection' },
    subNavReviews: { total: 7, __typename: 'ReviewsConnection' },
    subNavTrivia: { total: 1, __typename: 'TriviaConnection' },
    subNavFaqs: { total: 0, __typename: 'FaqConnection' },
    subNavTopQuestions: { total: 15, __typename: 'AlexaQuestionConnection' },
    titleGenres: {
      genres: [
        {
          genre: { text: 'Comedy', __typename: 'GenreItem' },
          __typename: 'TitleGenre',
        },
      ],
      __typename: 'TitleGenres',
    },
    meta: {
      canonicalId: 'tt19783714',
      publicationStatus: 'PUBLISHED',
      __typename: 'TitleMeta',
    },
    castPageTitle: {
      edges: [
        {
          node: {
            name: {
              nameText: { text: 'Amil Nasirov', __typename: 'NameText' },
              __typename: 'Name',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              nameText: { text: 'Ramil Nasirov', __typename: 'NameText' },
              __typename: 'Name',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              nameText: { text: 'Nataliya Gnitiy', __typename: 'NameText' },
              __typename: 'Name',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              nameText: { text: 'Lyudmyla Sachenko', __typename: 'NameText' },
              __typename: 'Name',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
      ],
      __typename: 'CreditConnection',
    },
    creatorsPageTitle: [],
    directorsPageTitle: [
      {
        credits: [
          {
            name: {
              nameText: { text: 'Antonio Lukich', __typename: 'NameText' },
              __typename: 'Name',
            },
            __typename: 'Crew',
          },
        ],
        __typename: 'PrincipalCreditsForCategory',
      },
    ],
    countriesOfOrigin: {
      countries: [{ id: 'UA', text: 'Ukraine', __typename: 'CountryOfOrigin' }],
      __typename: 'CountriesOfOrigin',
    },
    production: {
      edges: [
        {
          node: {
            company: {
              id: 'co0816309',
              companyText: { text: 'ForeFilms', __typename: 'CompanyText' },
              __typename: 'Company',
            },
            __typename: 'CompanyCredit',
          },
          __typename: 'CompanyCreditEdge',
        },
      ],
      __typename: 'CompanyCreditConnection',
    },
    featuredReviews: {
      edges: [
        {
          node: {
            id: 'rw9154737',
            author: {
              nickName: 'nastya_fomina',
              userId: 'ur49562057',
              __typename: 'UserProfile',
            },
            summary: {
              originalText: 'A hint to understanding Ukrainian soul',
              __typename: 'ReviewSummary',
            },
            text: {
              originalText: {
                plaidHtml:
                  'Reall gem! I believe this is a type of a movie you need to watch a few times to fully understand it. At the beginning of the story it seems to be a simple comedy that makes you laugh all the time but as the story evolves it gets more and more complex. And when the final credits start, you might start questioning yourself if you really understood the main idea of the film, storyline and main characters per se.<br/><br/>As movie is mostly based in Ukraine it will also give you a hint to understanding Ukrainians and their everyday life, some traditions, culture, but at the same time won&#39;t come across as something totally &#39;exotic&#39; or something you can&#39;t relate to.',
                __typename: 'Markdown',
              },
              __typename: 'ReviewText',
            },
            authorRating: 9,
            submissionDate: '2023-06-29',
            helpfulness: {
              upVotes: 6,
              downVotes: 3,
              __typename: 'ReviewHelpfulness',
            },
            __typename: 'Review',
          },
          __typename: 'ReviewEdge',
        },
      ],
      __typename: 'ReviewsConnection',
    },
    __typename: 'Title',
    wins: { total: 4, __typename: 'AwardNominationConnection' },
    nominations: { total: 13, __typename: 'AwardNominationConnection' },
    prestigiousAwardSummary: null,
    episodes: null,
    videoStrip: { edges: [], __typename: 'VideoConnection' },
    titleMainImages: {
      total: 3,
      edges: [
        {
          node: {
            id: 'rm628426753',
            url: 'https://m.media-amazon.com/images/M/MV5BZjM1ODAyYzQtNWU0Yi00YjE4LTg5OWMtZjAxNmFjMmY1NTM1XkEyXkFqcGdeQXVyMjk1NzAxNg@@._V1_.jpg',
            caption: {
              plainText:
                'Amil Nasirov and Ramil Nasirov in Luxembourg, Luxembourg (2022)',
              __typename: 'Markdown',
            },
            height: 720,
            width: 1280,
            __typename: 'Image',
          },
          __typename: 'ImageEdge',
        },
        {
          node: {
            id: 'rm4003080193',
            url: 'https://m.media-amazon.com/images/M/MV5BZWNmNWFjZTUtYTQ0YS00NmZlLWFlMzYtOTZjOWVhODkzMTgzXkEyXkFqcGdeQXVyNzI1MTM3Njg@._V1_.jpg',
            caption: {
              plainText:
                'Amil Nasirov and Ramil Nasirov in Luxembourg, Luxembourg (2022)',
              __typename: 'Markdown',
            },
            height: 4967,
            width: 3508,
            __typename: 'Image',
          },
          __typename: 'ImageEdge',
        },
        {
          node: {
            id: 'rm832113921',
            url: 'https://m.media-amazon.com/images/M/MV5BNDQ4OTM2YmUtMWM1MC00OTc2LWJiMmQtMzE2ZjczMzlmNTcxXkEyXkFqcGdeQXVyMjk1NzAxNg@@._V1_.jpg',
            caption: {
              plainText: 'Luxembourg, Luxembourg (2022)',
              __typename: 'Markdown',
            },
            height: 1280,
            width: 904,
            __typename: 'Image',
          },
          __typename: 'ImageEdge',
        },
      ],
      __typename: 'ImageConnection',
    },
    imageUploadLink: {
      url: 'https://contribute.imdb.com/image/tt19783714/add?bus=imdb&return_url=https%3A%2F%2Fwww.imdb.com%2Fclose_me&site=web',
      __typename: 'ContributionLink',
    },
    cast: {
      edges: [
        {
          node: {
            name: {
              id: 'nm13883829',
              nameText: { text: 'Amil Nasirov', __typename: 'NameText' },
              primaryImage: null,
              __typename: 'Name',
            },
            attributes: null,
            category: { id: 'actor', __typename: 'CreditCategory' },
            characters: [{ name: 'Kolya', __typename: 'Character' }],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm13883830',
              nameText: { text: 'Ramil Nasirov', __typename: 'NameText' },
              primaryImage: null,
              __typename: 'Name',
            },
            attributes: null,
            category: { id: 'actor', __typename: 'CreditCategory' },
            characters: [{ name: 'Vasya', __typename: 'Character' }],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm11375283',
              nameText: { text: 'Nataliya Gnitiy', __typename: 'NameText' },
              primaryImage: null,
              __typename: 'Name',
            },
            attributes: null,
            category: { id: 'actress', __typename: 'CreditCategory' },
            characters: [{ name: 'Mama', __typename: 'Character' }],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm6071892',
              nameText: { text: 'Lyudmyla Sachenko', __typename: 'NameText' },
              primaryImage: null,
              __typename: 'Name',
            },
            attributes: null,
            category: { id: 'actress', __typename: 'CreditCategory' },
            characters: [{ name: 'Larysa Petrivna', __typename: 'Character' }],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm14143592',
              nameText: { text: 'Viktor Drapikovsky', __typename: 'NameText' },
              primaryImage: null,
              __typename: 'Name',
            },
            attributes: null,
            category: { id: 'actor', __typename: 'CreditCategory' },
            characters: [{ name: 'Dyadya Lyosha', __typename: 'Character' }],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm14143593',
              nameText: { text: 'Doris Maidanyuk', __typename: 'NameText' },
              primaryImage: null,
              __typename: 'Name',
            },
            attributes: null,
            category: { id: 'actress', __typename: 'CreditCategory' },
            characters: [{ name: 'Assistant consul', __typename: 'Character' }],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm11749637',
              nameText: { text: 'Karina Cherchevych', __typename: 'NameText' },
              primaryImage: null,
              __typename: 'Name',
            },
            attributes: null,
            category: { id: 'actress', __typename: 'CreditCategory' },
            characters: [{ name: 'Masha', __typename: 'Character' }],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm2432008',
              nameText: { text: 'Kseniya Mishina', __typename: 'NameText' },
              primaryImage: {
                url: 'https://m.media-amazon.com/images/M/MV5BYTIwNzY2YWUtNTMxZS00NjFmLThiZDktNmI1MGI3NzVjMmExXkEyXkFqcGdeQXVyMTY3NTY5OTcx._V1_.jpg',
                width: 567,
                height: 833,
                __typename: 'Image',
              },
              __typename: 'Name',
            },
            attributes: null,
            category: { id: 'actress', __typename: 'CreditCategory' },
            characters: [{ name: "Masha's sister", __typename: 'Character' }],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm11786879',
              nameText: { text: 'Alex Avvakumov', __typename: 'NameText' },
              primaryImage: null,
              __typename: 'Name',
            },
            attributes: [
              {
                text: 'as Oleksandr Avvakumov',
                __typename: 'CreditedAsCreditAttribute',
              },
            ],
            category: { id: 'actor', __typename: 'CreditCategory' },
            characters: [
              { name: "Masha's sister's beloved", __typename: 'Character' },
            ],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm6941057',
              nameText: { text: 'Wolodymyr Holosnyak', __typename: 'NameText' },
              primaryImage: null,
              __typename: 'Name',
            },
            attributes: null,
            category: { id: 'actor', __typename: 'CreditCategory' },
            characters: [{ name: 'Father-in-law', __typename: 'Character' }],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm14992133',
              nameText: { text: 'Oksana Bandura', __typename: 'NameText' },
              primaryImage: null,
              __typename: 'Name',
            },
            attributes: null,
            category: { id: 'actress', __typename: 'CreditCategory' },
            characters: [{ name: 'Mother-in-law', __typename: 'Character' }],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm3643518',
              nameText: { text: 'Sergey Yaryy', __typename: 'NameText' },
              primaryImage: null,
              __typename: 'Name',
            },
            attributes: [
              {
                text: 'as Serhiy Yaryy-Bulka',
                __typename: 'CreditedAsCreditAttribute',
              },
            ],
            category: { id: 'actor', __typename: 'CreditCategory' },
            characters: [
              {
                name: 'Head of the investigative department',
                __typename: 'Character',
              },
            ],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm14143594',
              nameText: { text: 'Katerina Onipko', __typename: 'NameText' },
              primaryImage: null,
              __typename: 'Name',
            },
            attributes: null,
            category: { id: 'actor', __typename: 'CreditCategory' },
            characters: [{ name: 'Nurse Mariya', __typename: 'Character' }],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm14992134',
              nameText: { text: 'Oleh Nevolnik', __typename: 'NameText' },
              primaryImage: null,
              __typename: 'Name',
            },
            attributes: null,
            category: { id: 'actor', __typename: 'CreditCategory' },
            characters: [{ name: "Vasya's partner", __typename: 'Character' }],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm14031519',
              nameText: { text: 'Adrian Suleiman', __typename: 'NameText' },
              primaryImage: null,
              __typename: 'Name',
            },
            attributes: null,
            category: { id: 'actor', __typename: 'CreditCategory' },
            characters: [{ name: '7 year old Kolya', __typename: 'Character' }],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm14031520',
              nameText: { text: 'Damian Suleiman', __typename: 'NameText' },
              primaryImage: null,
              __typename: 'Name',
            },
            attributes: null,
            category: { id: 'actor', __typename: 'CreditCategory' },
            characters: [{ name: '7 year old Vasya', __typename: 'Character' }],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm14992135',
              nameText: { text: 'Kira Leshchenko', __typename: 'NameText' },
              primaryImage: null,
              __typename: 'Name',
            },
            attributes: null,
            category: { id: 'actress', __typename: 'CreditCategory' },
            characters: [{ name: "Vasya's daughter", __typename: 'Character' }],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm14992136',
              nameText: { text: 'Karina Reznichenko', __typename: 'NameText' },
              primaryImage: null,
              __typename: 'Name',
            },
            attributes: null,
            category: { id: 'actress', __typename: 'CreditCategory' },
            characters: [
              { name: 'Supermarket guard', __typename: 'Character' },
            ],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
      ],
      __typename: 'CreditConnection',
    },
    creators: [],
    directors: [
      {
        totalCredits: 1,
        category: { text: 'Director', __typename: 'CreditCategory' },
        credits: [
          {
            name: {
              id: 'nm9557050',
              nameText: { text: 'Antonio Lukich', __typename: 'NameText' },
              __typename: 'Name',
            },
            attributes: null,
            __typename: 'Crew',
          },
        ],
        __typename: 'PrincipalCreditsForCategory',
      },
    ],
    writers: [
      {
        totalCredits: 1,
        category: { text: 'Writer', __typename: 'CreditCategory' },
        credits: [
          {
            name: {
              id: 'nm9557050',
              nameText: { text: 'Antonio Lukich', __typename: 'NameText' },
              __typename: 'Name',
            },
            attributes: null,
            __typename: 'Crew',
          },
        ],
        __typename: 'PrincipalCreditsForCategory',
      },
    ],
    isAdult: false,
    moreLikeThisTitles: {
      edges: [
        {
          node: {
            id: 'tt7876510',
            titleText: {
              text: 'My Thoughts Are Silent',
              __typename: 'TitleText',
            },
            titleType: {
              id: 'movie',
              text: 'Movie',
              canHaveEpisodes: false,
              displayableProperty: {
                value: { plainText: '', __typename: 'Markdown' },
                __typename: 'DisplayableTitleTypeProperty',
              },
              __typename: 'TitleType',
            },
            originalTitleText: {
              text: 'Moyi dumky tykhi',
              __typename: 'TitleText',
            },
            primaryImage: {
              id: 'rm78351361',
              width: 1984,
              height: 2835,
              url: 'https://m.media-amazon.com/images/M/MV5BNzcxMzFmYzYtMjU0Mi00YTQzLWIwYzItN2NmZmY3NzRiNWMyXkEyXkFqcGdeQXVyMjk1NzAxNg@@._V1_.jpg',
              caption: {
                plainText:
                  'Andriy Lidagovskiy and Irma Vitovska in My Thoughts Are Silent (2019)',
                __typename: 'Markdown',
              },
              __typename: 'Image',
            },
            releaseYear: { year: 2019, endYear: null, __typename: 'YearRange' },
            ratingsSummary: {
              aggregateRating: 7.8,
              voteCount: 3823,
              __typename: 'RatingsSummary',
            },
            runtime: { seconds: 6240, __typename: 'Runtime' },
            certificate: null,
            canRate: { isRatable: true, __typename: 'CanRate' },
            titleGenres: {
              genres: [
                {
                  genre: { text: 'Comedy', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'Drama', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
              ],
              __typename: 'TitleGenres',
            },
            canHaveEpisodes: false,
            __typename: 'Title',
          },
          __typename: 'MoreLikeThisEdge',
        },
        {
          node: {
            id: 'tt9455468',
            titleText: { text: 'Pamfir', __typename: 'TitleText' },
            titleType: {
              id: 'movie',
              text: 'Movie',
              canHaveEpisodes: false,
              displayableProperty: {
                value: { plainText: '', __typename: 'Markdown' },
                __typename: 'DisplayableTitleTypeProperty',
              },
              __typename: 'TitleType',
            },
            originalTitleText: { text: 'Pamfir', __typename: 'TitleText' },
            primaryImage: {
              id: 'rm2142054401',
              width: 1687,
              height: 2500,
              url: 'https://m.media-amazon.com/images/M/MV5BOTBjNTk4ZDctNGQ2MS00NThkLTg3MjktNzIyOGRmMzZiYjBmXkEyXkFqcGdeQXVyMTYyOTE4MzUx._V1_.jpg',
              caption: { plainText: 'Pamfir (2022)', __typename: 'Markdown' },
              __typename: 'Image',
            },
            releaseYear: { year: 2022, endYear: null, __typename: 'YearRange' },
            ratingsSummary: {
              aggregateRating: 7.5,
              voteCount: 2935,
              __typename: 'RatingsSummary',
            },
            runtime: { seconds: 6420, __typename: 'Runtime' },
            certificate: null,
            canRate: { isRatable: true, __typename: 'CanRate' },
            titleGenres: {
              genres: [
                {
                  genre: { text: 'Action', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'Drama', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'Thriller', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
              ],
              __typename: 'TitleGenres',
            },
            canHaveEpisodes: false,
            __typename: 'Title',
          },
          __typename: 'MoreLikeThisEdge',
        },
        {
          node: {
            id: 'tt8268302',
            titleText: {
              text: 'I Work at the Cemetery',
              __typename: 'TitleText',
            },
            titleType: {
              id: 'movie',
              text: 'Movie',
              canHaveEpisodes: false,
              displayableProperty: {
                value: { plainText: '', __typename: 'Markdown' },
                __typename: 'DisplayableTitleTypeProperty',
              },
              __typename: 'TitleType',
            },
            originalTitleText: {
              text: 'Ya pratsyuyu na tsvyntari',
              __typename: 'TitleText',
            },
            primaryImage: {
              id: 'rm439794177',
              width: 1200,
              height: 1691,
              url: 'https://m.media-amazon.com/images/M/MV5BNjJkOWQwNTAtZjQ4Zi00ZTYxLTg1OGMtNTk3Njg5YTY5YmQ0XkEyXkFqcGdeQXVyNDAwMzY0OTk@._V1_.jpg',
              caption: {
                plainText: 'Vitaliy Saliy in I Work at the Cemetery (2021)',
                __typename: 'Markdown',
              },
              __typename: 'Image',
            },
            releaseYear: { year: 2021, endYear: null, __typename: 'YearRange' },
            ratingsSummary: {
              aggregateRating: 7.4,
              voteCount: 1396,
              __typename: 'RatingsSummary',
            },
            runtime: { seconds: 6000, __typename: 'Runtime' },
            certificate: { rating: 'Not Rated', __typename: 'Certificate' },
            canRate: { isRatable: true, __typename: 'CanRate' },
            titleGenres: {
              genres: [
                {
                  genre: { text: 'Comedy', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'Crime', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'Drama', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
              ],
              __typename: 'TitleGenres',
            },
            canHaveEpisodes: false,
            __typename: 'Title',
          },
          __typename: 'MoreLikeThisEdge',
        },
        {
          node: {
            id: 'tt12115998',
            titleText: {
              text: 'To Catch the Kaidash',
              __typename: 'TitleText',
            },
            titleType: {
              id: 'tvSeries',
              text: 'TV Series',
              canHaveEpisodes: true,
              displayableProperty: {
                value: { plainText: 'TV Series', __typename: 'Markdown' },
                __typename: 'DisplayableTitleTypeProperty',
              },
              __typename: 'TitleType',
            },
            originalTitleText: {
              text: 'Spiymaty Kaydasha',
              __typename: 'TitleText',
            },
            primaryImage: {
              id: 'rm708817409',
              width: 780,
              height: 1080,
              url: 'https://m.media-amazon.com/images/M/MV5BOWNlNmY3NzgtMTQyYy00YTljLWEyZTItY2ZmNDBmZTE3ZmUyXkEyXkFqcGdeQXVyNjQzMTU4ODI@._V1_.jpg',
              caption: {
                plainText:
                  'Taras Tsimbalyuk, Hryhorii Baklanov, Antonina Khyzhnyak, Daryna Fedyna, Irina Mak, and Viktor Zhdanov in To Catch the Kaidash (2020)',
                __typename: 'Markdown',
              },
              __typename: 'Image',
            },
            releaseYear: { year: 2020, endYear: 2020, __typename: 'YearRange' },
            ratingsSummary: {
              aggregateRating: 8.9,
              voteCount: 903,
              __typename: 'RatingsSummary',
            },
            runtime: { seconds: 2820, __typename: 'Runtime' },
            certificate: null,
            canRate: { isRatable: true, __typename: 'CanRate' },
            titleGenres: {
              genres: [
                {
                  genre: { text: 'Comedy', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'Drama', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
              ],
              __typename: 'TitleGenres',
            },
            canHaveEpisodes: true,
            __typename: 'Title',
          },
          __typename: 'MoreLikeThisEdge',
        },
        {
          node: {
            id: 'tt21833376',
            titleText: { text: 'Dovbush', __typename: 'TitleText' },
            titleType: {
              id: 'movie',
              text: 'Movie',
              canHaveEpisodes: false,
              displayableProperty: {
                value: { plainText: '', __typename: 'Markdown' },
                __typename: 'DisplayableTitleTypeProperty',
              },
              __typename: 'TitleType',
            },
            originalTitleText: { text: 'Dovbush', __typename: 'TitleText' },
            primaryImage: {
              id: 'rm2020498177',
              width: 2000,
              height: 2842,
              url: 'https://m.media-amazon.com/images/M/MV5BNzBkMDc5YzItMDg1Yi00MWVkLThjYzItNzQ5NjQzMTZiZTZmXkEyXkFqcGdeQXVyNzI1MTM3Njg@._V1_.jpg',
              caption: { plainText: 'Dovbush (2023)', __typename: 'Markdown' },
              __typename: 'Image',
            },
            releaseYear: { year: 2023, endYear: null, __typename: 'YearRange' },
            ratingsSummary: {
              aggregateRating: 7.9,
              voteCount: 1368,
              __typename: 'RatingsSummary',
            },
            runtime: { seconds: 7440, __typename: 'Runtime' },
            certificate: null,
            canRate: { isRatable: true, __typename: 'CanRate' },
            titleGenres: {
              genres: [
                {
                  genre: { text: 'Action', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'Adventure', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'Drama', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
              ],
              __typename: 'TitleGenres',
            },
            canHaveEpisodes: false,
            __typename: 'Title',
          },
          __typename: 'MoreLikeThisEdge',
        },
        {
          node: {
            id: 'tt14028890',
            titleText: { text: 'Stop-Zemlia', __typename: 'TitleText' },
            titleType: {
              id: 'movie',
              text: 'Movie',
              canHaveEpisodes: false,
              displayableProperty: {
                value: { plainText: '', __typename: 'Markdown' },
                __typename: 'DisplayableTitleTypeProperty',
              },
              __typename: 'TitleType',
            },
            originalTitleText: { text: 'Stop-Zemlia', __typename: 'TitleText' },
            primaryImage: {
              id: 'rm1501743617',
              width: 620,
              height: 774,
              url: 'https://m.media-amazon.com/images/M/MV5BM2Y3NjJhZGEtZjAyOC00MmMyLTkzYTUtMTQwNTU5OTIxYTRiXkEyXkFqcGdeQXVyMjk1NzAxNg@@._V1_.jpg',
              caption: {
                plainText: 'Stop-Zemlia (2021)',
                __typename: 'Markdown',
              },
              __typename: 'Image',
            },
            releaseYear: { year: 2021, endYear: null, __typename: 'YearRange' },
            ratingsSummary: {
              aggregateRating: 7.2,
              voteCount: 1561,
              __typename: 'RatingsSummary',
            },
            runtime: { seconds: 7320, __typename: 'Runtime' },
            certificate: null,
            canRate: { isRatable: true, __typename: 'CanRate' },
            titleGenres: {
              genres: [
                {
                  genre: { text: 'Drama', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
              ],
              __typename: 'TitleGenres',
            },
            canHaveEpisodes: false,
            __typename: 'Title',
          },
          __typename: 'MoreLikeThisEdge',
        },
        {
          node: {
            id: 'tt3781118',
            titleText: { text: 'Rhino', __typename: 'TitleText' },
            titleType: {
              id: 'movie',
              text: 'Movie',
              canHaveEpisodes: false,
              displayableProperty: {
                value: { plainText: '', __typename: 'Markdown' },
                __typename: 'DisplayableTitleTypeProperty',
              },
              __typename: 'TitleType',
            },
            originalTitleText: { text: 'Nosorih', __typename: 'TitleText' },
            primaryImage: {
              id: 'rm1665725185',
              width: 1331,
              height: 1875,
              url: 'https://m.media-amazon.com/images/M/MV5BMDQ1ZWIxNDQtNTdhNS00MDk1LWI1MzYtZjRmY2JjMDBhNTc4XkEyXkFqcGdeQXVyMjk1NzAxNg@@._V1_.jpg',
              caption: { plainText: 'Rhino (2021)', __typename: 'Markdown' },
              __typename: 'Image',
            },
            releaseYear: { year: 2021, endYear: null, __typename: 'YearRange' },
            ratingsSummary: {
              aggregateRating: 6.6,
              voteCount: 1900,
              __typename: 'RatingsSummary',
            },
            runtime: { seconds: 6060, __typename: 'Runtime' },
            certificate: null,
            canRate: { isRatable: true, __typename: 'CanRate' },
            titleGenres: {
              genres: [
                {
                  genre: { text: 'Action', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'Crime', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'Drama', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
              ],
              __typename: 'TitleGenres',
            },
            canHaveEpisodes: false,
            __typename: 'Title',
          },
          __typename: 'MoreLikeThisEdge',
        },
        {
          node: {
            id: 'tt26225074',
            titleText: { text: 'Myrnyi-21', __typename: 'TitleText' },
            titleType: {
              id: 'movie',
              text: 'Movie',
              canHaveEpisodes: false,
              displayableProperty: {
                value: { plainText: '', __typename: 'Markdown' },
                __typename: 'DisplayableTitleTypeProperty',
              },
              __typename: 'TitleType',
            },
            originalTitleText: { text: 'Myrnyi-21', __typename: 'TitleText' },
            primaryImage: {
              id: 'rm2983014401',
              width: 600,
              height: 900,
              url: 'https://m.media-amazon.com/images/M/MV5BZGU3NTY1MDMtYWM3Zi00YWE0LWFjMTgtNjgwMjc0MmZjMTg4XkEyXkFqcGdeQXVyMjk1NzAxNg@@._V1_.jpg',
              caption: {
                plainText:
                  'Evgeniy Lamakh, Mariia Shtofa, Pavlo Li, Aleksey Tritenko, Andrey Saminin, and Andrey Mostrenko in Myrnyi-21 (2023)',
                __typename: 'Markdown',
              },
              __typename: 'Image',
            },
            releaseYear: { year: 2023, endYear: null, __typename: 'YearRange' },
            ratingsSummary: {
              aggregateRating: 7.5,
              voteCount: 368,
              __typename: 'RatingsSummary',
            },
            runtime: { seconds: 7020, __typename: 'Runtime' },
            certificate: null,
            canRate: { isRatable: true, __typename: 'CanRate' },
            titleGenres: {
              genres: [
                {
                  genre: { text: 'War', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
              ],
              __typename: 'TitleGenres',
            },
            canHaveEpisodes: false,
            __typename: 'Title',
          },
          __typename: 'MoreLikeThisEdge',
        },
        {
          node: {
            id: 'tt5890460',
            titleText: { text: 'The Wild Fields', __typename: 'TitleText' },
            titleType: {
              id: 'movie',
              text: 'Movie',
              canHaveEpisodes: false,
              displayableProperty: {
                value: { plainText: '', __typename: 'Markdown' },
                __typename: 'DisplayableTitleTypeProperty',
              },
              __typename: 'TitleType',
            },
            originalTitleText: { text: 'Dyke pole', __typename: 'TitleText' },
            primaryImage: {
              id: 'rm2177396736',
              width: 620,
              height: 886,
              url: 'https://m.media-amazon.com/images/M/MV5BOGI0YWQxNjYtMzc1NC00YjdjLWJiMTAtMTE1MWRmZjY0ODg2XkEyXkFqcGdeQXVyMjk1NzAxNg@@._V1_.jpg',
              caption: {
                plainText: 'The Wild Fields (2018)',
                __typename: 'Markdown',
              },
              __typename: 'Image',
            },
            releaseYear: { year: 2018, endYear: null, __typename: 'YearRange' },
            ratingsSummary: {
              aggregateRating: 7.2,
              voteCount: 958,
              __typename: 'RatingsSummary',
            },
            runtime: { seconds: 7200, __typename: 'Runtime' },
            certificate: null,
            canRate: { isRatable: true, __typename: 'CanRate' },
            titleGenres: {
              genres: [
                {
                  genre: { text: 'Adventure', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'Comedy', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'Drama', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
              ],
              __typename: 'TitleGenres',
            },
            canHaveEpisodes: false,
            __typename: 'Title',
          },
          __typename: 'MoreLikeThisEdge',
        },
        {
          node: {
            id: 'tt3037582',
            titleText: { text: 'The Guide', __typename: 'TitleText' },
            titleType: {
              id: 'movie',
              text: 'Movie',
              canHaveEpisodes: false,
              displayableProperty: {
                value: { plainText: '', __typename: 'Markdown' },
                __typename: 'DisplayableTitleTypeProperty',
              },
              __typename: 'TitleType',
            },
            originalTitleText: { text: 'Povodyr', __typename: 'TitleText' },
            primaryImage: {
              id: 'rm3310945024',
              width: 502,
              height: 715,
              url: 'https://m.media-amazon.com/images/M/MV5BNjI4YmZjMjMtOTAzNi00MzNkLTg0NjEtYjljZjJhNDIwYWNhXkEyXkFqcGdeQXVyNjg3MTIwODI@._V1_.jpg',
              caption: {
                plainText: 'Anton Sviatoslav Greene in The Guide (2014)',
                __typename: 'Markdown',
              },
              __typename: 'Image',
            },
            releaseYear: { year: 2014, endYear: null, __typename: 'YearRange' },
            ratingsSummary: {
              aggregateRating: 7.7,
              voteCount: 3387,
              __typename: 'RatingsSummary',
            },
            runtime: { seconds: 7320, __typename: 'Runtime' },
            certificate: null,
            canRate: { isRatable: true, __typename: 'CanRate' },
            titleGenres: {
              genres: [
                {
                  genre: { text: 'Drama', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'History', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
              ],
              __typename: 'TitleGenres',
            },
            canHaveEpisodes: false,
            __typename: 'Title',
          },
          __typename: 'MoreLikeThisEdge',
        },
        {
          node: {
            id: 'tt7691572',
            titleText: {
              text: 'Cyborgs: Heroes Never Die',
              __typename: 'TitleText',
            },
            titleType: {
              id: 'movie',
              text: 'Movie',
              canHaveEpisodes: false,
              displayableProperty: {
                value: { plainText: '', __typename: 'Markdown' },
                __typename: 'DisplayableTitleTypeProperty',
              },
              __typename: 'TitleType',
            },
            originalTitleText: {
              text: 'Kiborgy. Heroyi ne vmyrayut',
              __typename: 'TitleText',
            },
            primaryImage: {
              id: 'rm3089784576',
              width: 1000,
              height: 1500,
              url: 'https://m.media-amazon.com/images/M/MV5BYTUyMWNkYWUtMTg1ZS00MjJiLWE2ZjgtYjJkYTJmMmEzNWI0XkEyXkFqcGdeQXVyNTEzNDIxOTg@._V1_.jpg',
              caption: {
                plainText:
                  'Vyacheslav Dovzhenko, Andrey Isaenko, Roman Yasinovskiy, Viktor Zhdanov, and Makar Tikhomirov in Cyborgs: Heroes Never Die (2017)',
                __typename: 'Markdown',
              },
              __typename: 'Image',
            },
            releaseYear: { year: 2017, endYear: null, __typename: 'YearRange' },
            ratingsSummary: {
              aggregateRating: 7.5,
              voteCount: 7637,
              __typename: 'RatingsSummary',
            },
            runtime: { seconds: 6720, __typename: 'Runtime' },
            certificate: { rating: 'TV-14', __typename: 'Certificate' },
            canRate: { isRatable: true, __typename: 'CanRate' },
            titleGenres: {
              genres: [
                {
                  genre: { text: 'Action', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'Drama', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'War', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
              ],
              __typename: 'TitleGenres',
            },
            canHaveEpisodes: false,
            __typename: 'Title',
          },
          __typename: 'MoreLikeThisEdge',
        },
        {
          node: {
            id: 'tt8332658',
            titleText: { text: 'Carol of the Bells', __typename: 'TitleText' },
            titleType: {
              id: 'movie',
              text: 'Movie',
              canHaveEpisodes: false,
              displayableProperty: {
                value: { plainText: '', __typename: 'Markdown' },
                __typename: 'DisplayableTitleTypeProperty',
              },
              __typename: 'TitleType',
            },
            originalTitleText: { text: 'Shchedryk', __typename: 'TitleText' },
            primaryImage: {
              id: 'rm1853817345',
              width: 3603,
              height: 4803,
              url: 'https://m.media-amazon.com/images/M/MV5BY2QzMWUzMzktMjQwOS00N2I3LThlMjMtM2Y2YTQxMTRlZmRhXkEyXkFqcGdeQXVyNTUxOTYwMzU@._V1_.jpg',
              caption: {
                plainText: 'Carol of the Bells (2022)',
                __typename: 'Markdown',
              },
              __typename: 'Image',
            },
            releaseYear: { year: 2022, endYear: null, __typename: 'YearRange' },
            ratingsSummary: {
              aggregateRating: 8,
              voteCount: 912,
              __typename: 'RatingsSummary',
            },
            runtime: { seconds: 7320, __typename: 'Runtime' },
            certificate: null,
            canRate: { isRatable: true, __typename: 'CanRate' },
            titleGenres: {
              genres: [
                {
                  genre: { text: 'Drama', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'History', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
              ],
              __typename: 'TitleGenres',
            },
            canHaveEpisodes: false,
            __typename: 'Title',
          },
          __typename: 'MoreLikeThisEdge',
        },
      ],
      __typename: 'MoreLikeThisConnection',
    },
    trivia: {
      edges: [
        {
          node: {
            text: {
              plaidHtml:
                'The film was submitted to the Non-English Language Film category for the 80th Golden Globe Awards (2023).',
              __typename: 'Markdown',
            },
            trademark: null,
            relatedNames: null,
            __typename: 'TitleTrivia',
          },
          __typename: 'TriviaEdge',
        },
      ],
      __typename: 'TriviaConnection',
    },
    goofsTotal: { total: 0, __typename: 'GoofConnection' },
    goofs: { edges: [], __typename: 'GoofConnection' },
    quotesTotal: { total: 0, __typename: 'TitleQuoteConnection' },
    quotes: { edges: [], __typename: 'TitleQuoteConnection' },
    crazyCredits: { edges: [], __typename: 'CrazyCreditConnection' },
    alternateVersions: {
      total: 0,
      edges: [],
      __typename: 'AlternateVersionConnection',
    },
    connections: {
      edges: [
        {
          node: {
            associatedTitle: {
              id: 'tt22085522',
              releaseYear: { year: 2022, __typename: 'YearRange' },
              titleText: {
                text: 'Episode dated 16 September 2022',
                __typename: 'TitleText',
              },
              originalTitleText: {
                text: 'Episode dated 16 September 2022',
                __typename: 'TitleText',
              },
              series: {
                series: {
                  titleText: {
                    text: 'CBC News: Toronto',
                    __typename: 'TitleText',
                  },
                  originalTitleText: {
                    text: 'CBC News: Toronto',
                    __typename: 'TitleText',
                  },
                  __typename: 'Title',
                },
                __typename: 'Series',
              },
              __typename: 'Title',
            },
            category: {
              text: 'Featured in',
              __typename: 'TitleConnectionCategory',
            },
            __typename: 'TitleConnection',
          },
          __typename: 'TitleConnectionEdge',
        },
      ],
      __typename: 'TitleConnectionConnection',
    },
    soundtrack: { edges: [], __typename: 'SoundtrackConnection' },
    iframeAddReviewLink: {
      url: 'https://contribute.imdb.com/review/tt19783714/add?bus=imdb&return_url=https%3A%2F%2Fwww.imdb.com%2Fclose_me&site=web',
      __typename: 'ContributionLink',
    },
    topQuestions: {
      total: 15,
      edges: [
        {
          node: {
            attributeId: 'run-time',
            question: {
              plainText: 'How long is Luxembourg, Luxembourg?',
              __typename: 'Markdown',
            },
            __typename: 'AlexaQuestion',
          },
          __typename: 'AlexaQuestionEdge',
        },
      ],
      __typename: 'AlexaQuestionConnection',
    },
    faqs: { total: 0, edges: [], __typename: 'FaqConnection' },
    detailsExternalLinks: {
      edges: [],
      total: 0,
      __typename: 'ExternalLinkConnection',
    },
    spokenLanguages: {
      spokenLanguages: [
        { id: 'uk', text: 'Ukrainian', __typename: 'SpokenLanguage' },
        { id: 'de', text: 'German', __typename: 'SpokenLanguage' },
      ],
      __typename: 'SpokenLanguages',
    },
    akas: {
      edges: [
        {
          node: { text: 'Люксембург, Люксембург', __typename: 'Aka' },
          __typename: 'AkaEdge',
        },
      ],
      __typename: 'AkaConnection',
    },
    filmingLocations: {
      edges: [
        {
          node: {
            text: 'Kyiv, Ukraine',
            location: 'Kyiv, Ukraine',
            attributes: [],
            __typename: 'FilmingLocation',
          },
          __typename: 'FilmingLocationEdge',
        },
      ],
      total: 3,
      __typename: 'FilmingLocationConnection',
    },
    companies: { total: 3, __typename: 'CompanyCreditConnection' },
    productionBudget: null,
    lifetimeGross: null,
    openingWeekendGross: null,
    worldwideGross: {
      total: { amount: 632420, currency: 'USD', __typename: 'Money' },
      __typename: 'BoxOfficeGross',
    },
    technicalSpecifications: {
      soundMixes: { items: [], __typename: 'SoundMixes' },
      aspectRatios: {
        items: [
          {
            aspectRatio: '1.85 : 1',
            attributes: [],
            __typename: 'AspectRatio',
          },
        ],
        __typename: 'AspectRatios',
      },
      colorations: {
        items: [
          {
            conceptId: 'color',
            text: 'Color',
            attributes: [],
            __typename: 'Coloration',
          },
        ],
        __typename: 'Colorations',
      },
      __typename: 'TechnicalSpecifications',
    },
    contributionQuestions: {
      contributionLink: {
        url: 'https://contribute.imdb.com/answers',
        __typename: 'ContributionQuestionsLink',
      },
      edges: [
        {
          node: {
            entity: {
              primaryImage: {
                url: 'https://m.media-amazon.com/images/M/MV5BNDQ4OTM2YmUtMWM1MC00OTc2LWJiMmQtMzE2ZjczMzlmNTcxXkEyXkFqcGdeQXVyMjk1NzAxNg@@._V1_.jpg',
                width: 904,
                height: 1280,
                caption: {
                  plainText: 'Luxembourg, Luxembourg (2022)',
                  __typename: 'Markdown',
                },
                __typename: 'Image',
              },
              __typename: 'Title',
            },
            questionId: 'tt19783714.title_aka.IN.en-US',
            questionText: {
              plainText:
                'By what name was Luxembourg, Luxembourg (2022) officially released in India in English?',
              __typename: 'Markdown',
            },
            contributionLink: {
              url: 'https://contribute.imdb.com/answers?pinnedQuestion=tt19783714.title_aka.IN.en-US',
              __typename: 'ContributionQuestionsLink',
            },
            __typename: 'Question',
          },
          __typename: 'QuestionEdge',
        },
      ],
      __typename: 'QuestionConnection',
    },
  },
];
