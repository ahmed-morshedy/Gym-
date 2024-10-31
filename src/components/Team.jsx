function Team() {
  const team = [
    { name: "Siddhant Yadav", role: "Gym owner", photo: "/Frame.png" },
    { name: "Aryan Singh", role: "Gym trainer", photo: "/3-2.jpg" },
    { name: "Kartik Rai", role: "Gym trainer", photo: "/Faseeh.jpg" },
  ];

  return (
    <div className="bg-black10 p-10 flex flex-col items-center">
      <h2 className="text-3xl font-bold  mb-8">Meet our team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
        {team.map((item) => (
          <div
            key={item.name}
            className="border-2 border-slate-300 shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={item.photo || "/default-photo.png"}
              alt={`${item.name} - ${item.role}`}
              className="w-full h-80 object-cover"
            />
            <div className="flex flex-col justify-center items-center bg-white py-6">
              <h3 className="text-xl font-bold">{item.name}</h3>
              <span>{item.role}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
