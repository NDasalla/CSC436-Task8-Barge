import { getLinksLinks } from "../utils/data";

const nonSocialLinksData = getLinksLinks();

const NonSocialLinks = () => {
  return (
    <div className="grid gap-8 justify-items-center justify-center p-14">
      {nonSocialLinksData.map((link) => {
        return (
          <a className="" href={link.url} key={link.id}>
            <button className="button max-w-fit">
              <p>{link.title}</p>
            </button>
          </a>
        );
      })}
    </div>
  );
};

export default NonSocialLinks;
