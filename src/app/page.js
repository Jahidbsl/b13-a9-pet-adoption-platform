import Banner from "@/components/banner/Banner";
import Featured from "@/components/featured/Featured";
import WhyAdoptPage from "@/components/Static/Why";
import SuccessStories from "@/components/Static/SuccessStories";
import PetCareTips from "@/components/Static/PetCareTips";
import PetCareEssentials from "@/components/Static/PetCareEssentials";
import WhyChooseUs from "@/components/Static/WhyChooseUs";


export default function Home() {
  return (
    <div className="">
   
     <Banner/>
     <Featured/>
     <WhyAdoptPage/>
     <SuccessStories/>
     <PetCareTips/>
     <PetCareEssentials/>
     <WhyChooseUs/>
    </div>
  );
}
