var input = [
  {
    tickets: 6,
    chapters: [
      {
        tickets: 0,
        chapters: [
          {
            tickets: 1,
            chapters: [],
          },
          {
            tickets: 1,
            chapters: [],
          },
        ],
      },
      {
        tickets: 0,
        chapters: [],
      },
      {
        tickets: 4,
        chapters: [],
      },
    ],
  },
  {
    tickets: 0,
    chapters: [
      {
        tickets: 4,
        chapters: [],
      },
      {
        tickets: 0,
        chapters: [
          {
            tickets: 5,
            chapters: [
              {
                tickets: 2,
                chapters: [],
              },
            ],
          },
        ],
      },
      {
        tickets: 3,
        chapters: [],
      },
    ],
  },
];
//function for calculating total number of tickets in one chapter
function CalculateTickets(chapter) {
  let totalTickets = chapter.tickets;

  //going through each chapter in input
  for (const subchapter of chapter.chapters) {
    //recursively calling the CalculateTickets function for each subchapter
    totalTickets += CalculateTickets(subchapter);
  }
  chapter.total = totalTickets;
  return totalTickets;
}

// calling CalculateTickets for each elemt of the input
input.forEach((chapter) => CalculateTickets(chapter));

//formatting back to JSON string
console.log(JSON.stringify(input, null, 2));
