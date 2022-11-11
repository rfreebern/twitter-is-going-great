const header = 'Twitter is Going Great!';
const footer = 'Documenting the busiest period of Twitter updates since 2007.';
const entries = [
  {
    id: '1',
    categories: ['Twitter Blue'],
    color: 'blue',
    faicon: 'dog',
    datetime: '2022-11-09 14:41',
    title: 'Verified accounts: now featuring Ambiguity!',
    image: {
      link: 'https://twitter.com/TylerGlaiel/status/1590474705504718848',
      src: 'https://pbs.twimg.com/media/FhKAKSLUYAEcwwI?format=png&name=900x900',
      alt: "Valve software's Twitter profile with the blue checkmark highlighted, with information about the Verified account provided as 'this account is verified because it's subscribed to Twitter Blue.' with a link to learn more, pointing to the link used by this timeline entry.",
      caption: 'Screenshot credit: Tyler Glaiel',
    },
    body: "Content designers at Twitter are crying while updating the microcopy to help you understand whether a blue checkmark means an account is verified because it's paying Elon Musk money for Twitter Blue, or because their identity has actually been verified. The tech writers at Twitter joined them in sadness while struggling to explain what the blue checkmark means.",
    links: [
      {
        href: 'https://help.twitter.com/en/managing-your-account/about-twitter-verified-accounts',
        linkText: 'What does the blue checkmark mean? on the Twitter documentation site',
      },
    ],
  },
  {
    id: '2',
    categories: ['Robot Uprising'],
    color: 'blue',
    faicon: 'dog',
    datetime: '2022-11-09 21:46',
    title: 'Verified accounts: now featuring Ambiguity!',
    image: {
      link: 'https://twitter.com/mmasnick/status/1590581600072667136',
      src: 'https://tweet2image.vercel.app/1590581600072667136.jpg?lang=en&tz=-5',
      alt: "Screenshot of Elon tweet admitting that some proportion of users are bots",
      caption: '',
    },
    body: "Content designers at Twitter are crying while updating the microcopy to help you understand whether a blue checkmark means an account is verified because it's paying Elon Musk money for Twitter Blue, or because their identity has actually been verified. The tech writers at Twitter joined them in sadness while struggling to explain what the blue checkmark means.",
    links: [
      {
        href: 'https://twitter.com/mmasnick/status/1590581600072667136',
        linkText: 'Source Tweet by Mike Masnick',
      },
    ],
  },
  {
    id: '3',
    categories: ['No one minding the store'],
    color: 'blue',
    faicon: 'dog',
    datetime: '2022-11-10 06:41',
    title: 'CISO Resigns',
    image: {
      link: 'https://twitter.com/LeaKissner/status/1590706305102381058',
      src: 'https://tweet2image.vercel.app/1590706305102381058.jpg?lang=en&tz=-5',
      alt: "Screenshot of tweet from Lea Kissner announcing her resignation.",
      caption: '',
    },
    body: "In a tweet, Chief Information Security Officer Lea Kissner announces she is quitting Twitter.",
    links: [
      {
        href: 'https://twitter.com/LeaKissner/status/1590706305102381058',
        linkText: 'Source Tweet by Lea Kissner',
      },
    ],
  },
  {
    id: '4',
    categories: ['No one minding the store'],
    color: 'blue',
    faicon: 'dog',
    datetime: '2022-11-10 07:13',
    title: 'Mutual Non-Compliance Pact',
    image: {
      link: '',
      src: '',
      alt: '',
      caption: '',
    },
    body: "Casey Newton: According to messages shared in Twitter Slack, Twitter\u2019s CISO, chief privacy officer, and chief compliance officer all resigned last night.\n\nAn employee says it will be up to engineers to \u201cself-certify compliance with FTC requirements and other laws.\u201d",
    links: [
      {
        href: 'https://twitter.com/CaseyNewton/status/1590724257608134657',
        linkText: 'Source Tweet by Casey Newton',
      },
    ],
  },
  {
    id: '6',
    categories: ['No one minding the store'],
    color: 'blue',
    faicon: 'dog',
    datetime: '2022-11-10 08:52',
    title: 'Legal Compliance Who?',
    image: {
      link: '',
      src: '',
      alt: '',
      caption: '',
    },
    body: "Faced with the impossibility of complying with the FTC data privacy agreement, Twitter's compliance executives quit.",
    links: [
      {
        href: 'https://www.theverge.com/2022/11/10/23451198/twitter-ftc-elon-musk-lawyer-changes-fine-warning',
        linkText: 'Elon Musk is putting Twitter at risk of billions in fines, warns company lawyer',
      },
    ],
  },
  {
    id: '7',
    categories: ['Twitter Blue'],
    color: 'blue',
    faicon: 'dog',
    datetime: '2022-11-09 18:29',
    title: '@elon__rnusk announces Twitter Gold',
    image: {
      link: '',
      src: '',
      alt: '',
      caption: '',
    },
    body: "A blue-check Elon Musk parody account announces \"Twitter Gold\" to win Grimes back.",
    links: [
      {
        href: 'https://twitter.com/joshuaphilll/status/1590532150792974336?',
        linkText: 'Source Tweet by @JoshuaPHilll',
      },
    ],
  },
  {
    id: '8',
    categories: ['Twitter Blue'],
    color: 'blue',
    faicon: 'dog',
    datetime: '2022-11-10 07:13',
    title: 'Like a train crash filled with glitter',
    image: {
      link: '',
      src: '',
      alt: '',
      caption: '',
    },
    body: 'Verified Tony Blair commiserates with Verified George Bush',
    links: [
      {
        href: 'https://twitter.com/misterratt/status/1590632287544438784',
        linkText: 'Source Tweet by matt ratt',
      },
    ],
  },
  {
    id: '9',
    categories: ['Twitter Blue'],
    color: 'blue',
    faicon: 'dog',
    datetime: '2022-11-10 7:29',
    title: 'Musk chortles at Twitter Blue disasters',
    image: {
      link: '',
      src: '',
      alt: '',
      caption: '',
    },
    body: 'Elon takes the time to tweet emoji laughter in response to a Tweet that says "A verified Mario gave everyone the middle finger and President Biden is talking about sucking his own penis."',
    links: [
      {
        href: 'https://twitter.com/HelenKennedy/status/1590728262623563777?',
        linkText: 'Source Tweet by Helen Kennedy',
      },
    ],
  },
  {
    id: '10',
    categories: ['Twitter Blue'],
    color: 'blue',
    faicon: 'dog',
    datetime: '2022-11-09 10:45',
    title: 'Double Trouble',
    image: {
      link: '',
      src: '',
      alt: '',
      caption: '',
    },
    body: 'There are two Twitter Blues, one more expensive than the other.',
    links: [
      {
        href: 'https://twitter.com/wongmjane/status/1590415250205323264',
        linkText: 'Source Tweet by Jane Manchun Wong',
      },
    ],
  },
  {
    id: '11',
    categories: ['Twitter Blue'],
    color: 'blue',
    faicon: 'dog',
    datetime: '2022-11-10 14:20',
    title: 'Banana Republic!',
    image: {
      link: '',
      src: '',
      alt: '',
      caption: '',
    },
    body: 'A pair of verified Chiquita accounts discuss overthrowing South American governments. As one does.',
    links: [
      {
        href: 'https://twitter.com/dieworkwear/status/1590831852658790400',
        linkText: 'Source Tweet by derek guy',
      },
    ],
  },
  {
    id: '12',
    categories: ['Twitter Blue'],
    color: 'blue',
    faicon: 'dog',
    datetime: '2022-11-10 15:45',
    title: 'Tesla Fake stays up for several hours',
    image: {
      link: '',
      src: 'https://tweet2image.vercel.app/1590853204346306560.jpg?lang=en&tz=5',
      alt: 'A screenshot of a tweet from @teslareal asking how long do u think we have left as a company be honest',
      caption: '',
    },
    body: 'A fake yet verified Tesla Twitter account tweeted "how long do u think we have left as a company be honest".',
    links: [
      {
        href: 'https://twitter.com/TesIaReal/status/1590853204346306560',
        linkText: 'Source Tweet by @TeslaReal',
      },
    ],
  },
  {
    id: '13',
    categories: ['Twitter Blue'],
    color: 'blue',
    faicon: 'dog',
    datetime: '2022-11-10 20:51',
    title: 'Parody accounts now need to say parody in their name',
    image: {
      link: '',
      src: '',
      alt: '',
      caption: '',
    },
    body: "Elon, making yet another product decision by tweeting through it, may at some point figure this out. But will it be before Twitter goes bankrupt?",
    links: [
      {
        href: 'https://twitter.com/elonmusk/status/1590884973535711232',
        linkText: 'Source Tweet by Elon himself',
      },
    ],
  },
  {
    id: '14',
    categories: ['Bye-Bye'],
    color: 'blue',
    faicon: 'dog',
    datetime: '2022-11-09 15:48',
    title: 'Captain Sully is leaving',
    image: {
      link: '',
      src: '',
      alt: '',
      caption: '',
    },
    body: 'Sometimes it sinks. Captain Sully tweeted out that he is taking a step back from Twitter for now.',
    links: [
      {
        href: 'https://twitter.com/Captsully/status/1590446178881392640',
        linkText: 'Source Tweet by Sully Sullenberger',
      },
    ],
  },
  {
    id: '15',
    categories: ['Robot Uprising', 'Twitter Blue'],
    color: 'blue',
    faicon: 'robot',
    datetime: '2022-11-10 15:31',
    title: 'GANs take over',
    image: {
      link: '',
      src: 'https://pbs.twimg.com/media/FhPTWHdXgAAGYZO?format=jpg&name=medium',
      alt: 'collage of the profiles of 13 Twitter accounts with GAN-generated faces and blue checkmarks',
      caption: '',
    },
    body: 'When you want your bots to be somewhat more legitimate than eggs, you generate them faces!',
    links: [
      {
        href: 'https://twitter.com/conspirator0/status/1590849672574558208?s=20&t=zVLQTBUlmPgMvJqX6TkH_g',
        linkText: 'Source Tweet by Conspirador Norteño',
      },
    ],
  },
];

// Page details
const pageTitle = 'Twitter is Going Great!'; // The title of the page that shows in the browser tab
const pageDescription = ' Every day in every way, TWitter is getting better and better.'; // The description of the page for search engines
const pageAuthor = 'Volunteers from the Today in Tabs Discord'; // Your name

// DON'T EDIT BELOW THIS LINE! --------------------------------------------------------------------
const getFilters = (entries) => {
  const filters = new Set();
  for (var i = 0; i < entries.length; i++) {
    var entry = entries[i];
    if (Object.prototype.hasOwnProperty.call(entry, 'categories')) {
      for (var j = 0; j < entry.categories.length; j++) {
        filters.add(entry.categories[j]);
      }
    }
  }
  var filtersArray = [...filters];
  filtersArray.sort();
  return filtersArray;
};

const addCategoriesStringsToEntries = (entries) => {
  for (const entry of entries) {
    if (Object.prototype.hasOwnProperty.call(entry, 'categories')) {
      entry.categoriesString = entry.categories.join(',');
    }
  }
  return entries;
};

module.exports = {
  header,
  footer,
  entries: addCategoriesStringsToEntries(entries),
  filters: getFilters(entries),
  head: {
    title: pageTitle,
    description: pageDescription,
    author: pageAuthor,
  },
};
