const scores = [
    {
      marks: 32,
      name: "Yvette Merritt"
    },
    {
      marks: 57,
      name: "Lillian Ellis"
    },
    {
      marks: 22,
      name: "Mccall Carter"
    },
    {
      marks: 21,
      name: "Pate Collier"
    },
    {
      marks: 91,
      name: "Debra Beard"
    },
    {
      marks: 75,
      name: "Nettie Hancock"
    },
    {
      marks: 20,
      name: "Hatfield Hodge"
    }
  ];

  // task.1 find the average mark

  const sum = scores.reduce((sum , curr) => sum + curr.marks , 0);
  const average = sum / scores.length;
  console.log(average.toFixed(2));

  //task.2 find the topper name

   const allMarks = scores.map((score) =>score.marks);
   const highestMark = Math.max(... allMarks);
   console.log(allMarks , highestMark);
   const topper = scores.filter((score) => score.marks ===highestMark);
   console.log(topper);