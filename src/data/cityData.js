const cityData = [
  {
    name: 'Detroit',
    population: '670,031',
    incorporationYear: '1815',
    region: 'Southeast Michigan',
    classification: 'Urban',
    incomeLevel: 'Below State Average',
    imageUrl: 'images/detroit-small.jpg',
    imageSrcSet: `
      images/detroit-small.jpg 1x,
      images/detroit-medium.jpg 2x,
      images/detroit-large.jpg 3x
    `,
    citation: {
      author: 'Wikipedia',
      year: '2024',
      title: 'Detroit',
      websiteName: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Detroit'
    }
  },
  {
    name: 'Grand Rapids',
    population: '200,217',
    incorporationYear: '1850',
    region: 'Western Michigan',
    classification: 'Urban',
    incomeLevel: 'Above State Average',
    imageUrl: 'images/grandrapids-small.jpg',
    imageSrcSet: `
      images/grandrapids-small.jpg 1x,
      images/grandrapids-medium.jpg 2x,
      images/grandrapids-large.jpg 3x
    `,
    citation: {
      author: 'Wikipedia',
      year: '2024',
      title: 'Grand Rapids, Michigan',
      websiteName: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Grand_Rapids,_Michigan'
    }
  },
  {
    name: 'Lansing(Capital)',
    population: '118,427',
    incorporationYear: '1859',
    region: 'Central Michigan',
    classification: 'Urban',
    incomeLevel: 'At State Average',
    imageUrl: 'images/lansing-small.jpg',
    imageSrcSet: `
      images/lansing-small.jpg 1x,
      images/lansing-medium.jpg 2x,
      images/lansing-large.jpg 3x
    `,
    citation: {
      author: 'Wikipedia',
      year: '2024',
      title: 'Lansing, Michigan',
      websiteName: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Lansing,_Michigan'
    }
  }
];

export default cityData;
