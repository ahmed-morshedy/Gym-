function Why() {
  const lists = [
    {
      title: "Affordable Memberships",
      body: "Enjoy budget-friendly membership options without compromising on quality equipment or facilities, making fitness accessible to everyone",
    },
    {
      title: "emojione-monotone:money-bag",
      body: "Access cutting-edge gym equipment and technology designed to optimize your workouts and help you achieve your fitness goals effectively",
    },
    {
      title: "Supportive Community",
      body: "Join a welcoming and encouraging environment where members and staff alike are dedicated to supporting each other's fitness journeys, fostering motivation and accountability",
    },
  ];

  return (
    <div
      className="bg-black10 flex flex-col justify-center items-center p-10"
      id="pricing"
    >
      <h2 className="text-3xl font-bold">Why to choose us</h2>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 mt-10 ">
        {lists.map((list) => {
          return (
            <div
              key={list.title}
              className="px-5 py-14 bg-white rounded-lg shadow-xl "
            >
              <img src="/money-bag.png" alt="money-bag" />
              <p className="font-bold py-3">{list.title}</p>
              <p>{list.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Why;
