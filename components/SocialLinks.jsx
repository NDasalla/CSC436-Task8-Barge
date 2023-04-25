import Image from "next/image";
import facebook from "../images/facebook.svg";
import twitter from "../images/twitter.svg";
import { getSocialLinks } from "../utils/data";

const socialLinksData = getSocialLinks();

const SocialLinks = () => {
  return (
    <div className="flex justify-center items-center space-x-5">
      {socialLinksData.map((link) => {
        switch (link.title) {
          default:
            return <p>Error: Link</p>;
          case "Facebook":
            return (
              <a href={link.url}>
                {" "}
                <Image
                  src={facebook}
                  alt={"Facebook"}
                  height="46"
                  width="46"
                />{" "}
              </a>
            );
          case "Twitter":
            return (
              <a href={link.url}>
                {" "}
                <Image
                  src={twitter}
                  alt={"Twitter"}
                  height="46"
                  width="46"
                />{" "}
              </a>
            );
          //   case "Instagram":
          //     return (
          //       <a href={link.url}>
          //         {" "}
          //         <Image
          //           src={instagram}
          //           alt={"Instagram"}
          //           height="46"
          //           width="46"
          //         />{" "}
          //       </a>
          //     );
          //   case "Snapchat":
          //     return (
          //       <a href={link.url}>
          //         {" "}
          //         <Image
          //           src={snapchat}
          //           alt={"Snapchat"}
          //           height="46"
          //           width="46"
          //         />{" "}
          //       </a>
          //     );
        }
      })}
    </div>
  );
};

export default SocialLinks;
