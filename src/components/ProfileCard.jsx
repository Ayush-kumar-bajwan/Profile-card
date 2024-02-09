import React from "react";

const ProfileCard = ({ userData }) => {
  if (!userData) {
    return <div>Loading...</div>;
  }
  const { name, gender, picture, phone } = userData[0];
  return (
    <div className=" relative bg-blue-400 w-[700px] h-[300px] flex  items-center justify-evenly text-2xl rounded-2xl overflow-hidden ">
      <div className="absolute top-[-200px] right-[-200px] bg-blue-700 w-80 h-80 rounded-full z-10"></div>
      <div className="absolute top-[-194px] right-[-194px] bg-white w-80 h-80 rounded-full"></div>
      <div>
        <div className="w-[9.6rem] h-[9.6rem] rounded-full overflow-hidden bg-white flex items-center justify-center">
          <div className=" w-36 h-36 rounded-full overflow-hidden bg-white">
            <img
              src={
                picture.large !== null
                  ? picture.large
                  : "https://via.placeholder.com/144"
              }
              alt={name.first}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className=" leading-10">
        <div className="flex gap-4 text-black text-3xl font-semibold">
          <div>{name.first}</div>
          <div >{name.last}</div>
        </div>
        <div className="font-medium">Gender: <span className="text-gray-800 font-normal">{gender}</span></div>
        <div className="font-medium">Phone: <span className="text-gray-800 font-normal">+{phone}</span></div>
      </div>
    </div>
  );
};

export default ProfileCard;
