import Meta from "@/components/common/Meta";
import CheapTicketsHome from "@/components/home/CheapTickets.Home";
import FeaturedDestinationHome from "@/components/home/FeaturedDestination.Home";
import FlightRoutesHome from "@/components/home/FlightRoutes.Home";
import HeaderHome from "@/components/home/Header.Home";
import OffersHome from "@/components/home/Offers.Home";
import SpecialOfferHome from "@/components/home/SpecialOffer.Home";
import FrontLayout from "@/components/layouts/Front.Layout";

export default function Home() {
  return (
    <>
      <Meta title="Home" />
      <HeaderHome />
      <FeaturedDestinationHome />
      <OffersHome />
      <FlightRoutesHome />
      <SpecialOfferHome />
      <CheapTicketsHome />
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <FrontLayout navTheme={"dark homeNav"}>{page}</FrontLayout>;
};
