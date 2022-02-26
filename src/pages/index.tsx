import type { NextPage } from "next";
import Link from "next/link";
import {
  FaChartBar,
  FaDiscord,
  FaGamepad,
  FaGhost,
  FaGlobe,
  FaNetworkWired,
  FaPen,
  FaPeopleArrows,
  FaRocket,
} from "react-icons/fa";
import { Alert } from "../components/Alert";
import { Cards } from "../components/Cards/Cards";
import { ImageCarousel } from "../components/ImageCarousel";
import { Introduction } from "../components/Introduction";
import { Jumbotron } from "../components/Jumbotron";
import { Locations } from "../components/Locations";
import { ShowcaseImage } from "../components/ShowcaseImage";
import { ShowcaseImageHorizontal } from "../components/ShowcaseImageHorizontal";
import { ShowcaseMisc } from "../components/ShowcaseMisc";
import { Stats } from "../components/Stats";
import { StepsRow } from "../components/Steps/StepsRow";
import { WhoAreWe } from "../components/WhoAreWe";

const Index: NextPage = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <Jumbotron />
        <Introduction />
        <div className="my-24 mx-10 max-w-5xl">
          <ShowcaseImage
            imageSource="/img/people.png"
            description={`NomadDAO is a limited NFT collection where the token is a membership to a community of Digital Nomads across the world

Sometimes as digital Nomad You feel lonely & Borded. But don’t worry, with NomadDAO you can have friends from wherever you are :)`}
            title={() => (
              <h2 className="text-4xl font-bold mt-4 mb-8 text-typography-primary">
                What is <span className="text-primary">NomadDAO</span>
              </h2>
            )}
            afterDescriptionComponent={() => (
              <Link href="https://discordapp.com">
                <a className="mt-5 bg-discord text-white font-semibold w-full max-w-xl py-2 text-center rounded flex flex-row justify-center items-center">
                  <FaDiscord className="text-white mr-2" /> Join Discord
                </a>
              </Link>
            )}
          />
        </div>
        <Locations />
        <div className="my-14">
          <Stats
            data={[
              {
                icon: () => (
                  <div className="bg-discord rounded-full p-2">
                    <FaDiscord size={30} className="text-white" />
                  </div>
                ),
                title: "100,000+",
                subtitle: "Discord Members",
              },
              {
                icon: () => (
                  <div className="bg-opensea rounded-full p-2">
                    <img
                      src="https://storage.googleapis.com/opensea-static/Logomark/Logomark-Blue.svg"
                      width={30}
                      height={30}
                    />
                  </div>
                ),
                title: "1,000+",
                subtitle: "NFTs to be launched",
              },
            ]}
          />
        </div>
        <div className="my-24 mx-10 max-w-5xl">
          <ShowcaseImage
            imageSource="/img/girl1.png"
            description={`The Specs belongs to 7 Continents: Asia, Europe, North America, South America, Africa, Australia, Antartica

Each character is uniquely generated over XX different traits, including landmark in te background, accessories, face, hair styles, and more.

All of them are stored as ERC-721 token in the Ethereum blockchain and hosted in IPFS.

Each NomadDAO can be bought for 0.05 ETH`}
            title="The Specs"
          />
        </div>
        <div className="py-16 max-w-5xl mx-10">
          <h3 className="text-center mb-8 text-3xl font-bold text-typography-primary">
            The Benefits
          </h3>
          <Cards
            cardsData={[
              {
                title: "Biggest Crypto Nomad Community",
                icon: () => (
                  <FaPeopleArrows className="text-primary" size={30} />
                ),
              },
              {
                title: "Expand Your Network",
                icon: () => (
                  <FaNetworkWired className="text-primary" size={30} />
                ),
              },
              {
                title: "Own Full Commercial Rights",
                icon: () => <FaPen className="text-primary" size={30} />,
              },
              {
                title: "2000+ Provably Rare Nomad Characters",
                icon: () => <FaGhost className="text-primary" size={30} />,
              },
              {
                title: "Grow Your Characters Through Involvement",
                icon: () => <FaChartBar className="text-primary" size={30} />,
              },
              {
                title: "Explore Nomad Metaverses",
                icon: () => <FaGlobe className="text-primary" size={30} />,
              },
            ]}
          />
        </div>
        <div className="bg-secondary flex justify-center w-full py-16">
          <div className="max-w-5xl mx-10">
            <h2 className="text-center mb-4 text-3xl font-bold text-typography-primary">
              Roadmap
            </h2>
            <p className="text-center text-typography-primary mb-12">
              {`This roadmap outlines our goals and where we want to take NomadDAO. We have a lot of ideas and concepts that we are working on. It may evolve over time and hopefully become even better!`}
            </p>
            <StepsRow
              steps={[
                {
                  title: "Launch 1",
                  description:
                    "5000 NFT of Midgardian base class: Warrior, Cleric, Archer, Thief, Mage",
                  icon: () => <FaRocket className="text-primary" size={35} />,
                },
                {
                  title: "Launch 2",
                  description:
                    "10000 NFT of 2nd evolution of the base Contients: United State, Russia, Singapore, South Africa, Indonesia, Spain, France, etc",
                  icon: () => <FaRocket className="text-primary" size={35} />,
                },
                {
                  title: "Launch Games?",
                  description:
                    "We work hard with the community to launch any projects or initiatives that is of interest to the community. Be it meetups, products, services, or maybe even Private Villa every city!",
                  icon: () => <FaGamepad className="text-primary" size={35} />,
                },
              ]}
            />
          </div>
        </div>
        <div className="py-16 max-w-5xl mx-10">
          <WhoAreWe />
        </div>
      </div>
    </>
  );
};

export default Index;
