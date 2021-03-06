import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
  faMediumM,
  faDev,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const links = [
  {
    id: "GitHub",
    address: "https://github.com/emcpow2",
    icon: faGithub,
  },
  {
    id: "LinkedIn",
    address: "https://www.linkedin.com/in/emcpow2/",
    icon: faLinkedinIn,
  },
  {
    id: "E-Mail",
    address: "mailto:eduard.iskandarov@yandex.ru",
    icon: faEnvelope,
  },
  {
    id: "Twitter",
    address: "https://twitter.com/emcpow2",
    icon: faTwitter,
  },
  {
    id: "Medium",
    address: "https://medium.com/@emcpow2",
    icon: faMediumM,
  },
  {
    id: "Dev.to",
    address: "https://dev.to/emcpow2",
    icon: faDev,
  },
];

const SocialLinks = () => {
  const listItems = links.map((item) => (
    <div className="h-6 w-6 my-6 sm:h-7 sm:w-7 sm:mx-6">
      <a
        href={item.address}
        target="_blank"
        className="text-yellow-600 hover:underline text-xl"
      >
        <FontAwesomeIcon icon={item.icon} />
      </a>
    </div>
  ));

  return (
    <div className="flex flex-row justify-around sm:justify-center">
      {listItems}
    </div>
  );
};
export default SocialLinks;
