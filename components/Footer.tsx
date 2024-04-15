import { siteConfig } from "@/config/site";
import { Mail } from "lucide-react";
import { Icons } from "./icons";

const Footer = () => {
  return (
    <footer>
      <div className="mb-6 mt-14 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <a href={siteConfig.links.personalSite} target="_blank">
            Made By {siteConfig.author}
          </a>
          <a target="_blank" rel="noreferrer" href={siteConfig.links.github}>
            <span className="sr-only">GitHub</span>
            <Icons.gitHub className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
