const header = '<h1>Twitter is going great!</h1><p>... and definitely does not develop features primarily to stroke Elon Musk\'s delicate ego';
const footer = 'This has been a product of the Today in Tabs Reader\'s Union';
const entries = [
  {
  id: 'verified1',
  categories: ['actual deliverables'],
  color: 'twitterblue',
    faicon: 'poop',
  datetime: '2022-11-09 14:41',
  title: 'Verified accounts: now featuring Ambiguity!',
    image: {
    link: 'https://twitter.com/TylerGlaiel/status/1590474705504718848',
    src: 'https://pbs.twimg.com/media/FhKAKSLUYAEcwwI?format=png&name=900x900',
    alt: 'Valve software\'s Twitter profile with the blue checkmark highlighted, with information about the Verified account provided as "this account is verified because it\'s subscribed to Twitter Blue." with a link to learn more, pointing to the link used by this timeline entry. ',
    caption: 'Screenshot credit: Tyler Glaiel',
    },
  body: 'Content designers at Twitter are crying while updating the microcopy to help you understand whether a blue checkmark means an account is verified because it\'s paying Elon Musk money for Twitter Blue, or because their identity has actually been verified. The tech writers at Twitter joined them in sadness while struggling to explain what the blue checkmark means. Despite persistent efforts to use "now" in technical documentation, they are now forced to describe that "Until now, Twitter used the blue checkmark to indicate active, notable, and authentic accounts of public interest that Twitter had independently verified based on certain requirements." and that going forward, "the blue checkmark may mean two different things: either that an account was verified under the previous verification criteria (active, notable, and authentic), or that the account has an active subscription to Twitter’s new Twitter Blue subscription service, which was made available on iOS in the US, Canada, Australia New Zealand and the UK on November 9, 2022. Accounts that receive the blue checkmark as part of a Twitter Blue subscription will not undergo review to confirm that they meet the active, notable and authentic criteria that was used in the previous process". But of course.',
    links: [
      {
      href: 'https://help.twitter.com/en/managing-your-account/about-twitter-verified-accounts',
      linkText: 'What does the blue checkmark mean?',
      },
    ],
  },
];

// Page details
const pageTitle = 'Twitter is Going Great'; // The title of the page that shows in the browser tab
const pageDescription = 'How is Twitter doing? The answer is revealed'; // The description of the page for search engines
const pageAuthor = 'Chirper'; // Your name

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
