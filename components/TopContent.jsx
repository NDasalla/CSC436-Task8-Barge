import Image from "next/image";
import { getCurrentUser } from "../utils/data";

const { name, email, avatar } = getCurrentUser();

const TopContent = () => {
  return (
    <div className="grid justify-center justify-items-center p-14">
      <Image
        src={avatar}
        className="rounded-full"
        alt="Profile Picture"
        height="145"
        width="145"
      />
      <h1 className="h1 ">{name}</h1>
      {/* <p className="h2">{email}</p> */}
    </div>
  );
};

export default TopContent;
