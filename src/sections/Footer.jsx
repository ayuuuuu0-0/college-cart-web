import { Button } from "../components/Button";
import { socials } from "../constants";

export const Footer = () => {
  return (
    <footer id="about">
      <div className="container relative z-2 py-28 text-center">
        <div>
          <h3 className="h3 max-md:h5 max-w-680 max-lg:max-w-md mb-7 text-p4 mx-auto">
            Liked my work? Checkout my Portfolio from the link below.
          </h3>
          <p className="body-1 max-lg:max-w-sm mb-6 mx-auto">
            Reach out to me for freelance projects.
          </p>

          <a href="https://ayushranjan.tech">
            <Button icon="/images/zap.svg">Link to Portfolio</Button>
          </a>

          <div className="flex mt-16 flex-col justify-center items-center">
            <p className="body-1 max-lg:max-w-sm mb-6">
              &copy; 2024 Ayush Ranjan. All rights reserved.
            </p>
          </div>
          <ul className="flex justify-center gap-3 max-md:mt-10">
            {socials.map(({ id, url, icon, title }) => (
              <li key={id}>
                <a href={url} className="social-icon">
                  <img
                    src={icon}
                    alt={title}
                    className="size-3/3 object-contain"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
