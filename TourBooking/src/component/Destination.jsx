import "./DestinationStyle.css"
import DestinationData from "./DestinationData"
import SidiBou1 from "../assets/SidiBou1.jpg"
import SidiBou2 from "../assets/SidiBou3.jpg"
import Sahara1 from "../assets/Sahara1.jpg"
import Sahara2 from "../assets/Sahara2.jpg"
import Ruine1 from "../assets/ruine1.jpg"
import Ruine2 from "../assets/ruine2.jpg"


export default function Destination(){
    return(
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Tours give you the opportunity to see a lot, within a time frame.</p>
            <DestinationData
            cName='first-des'
            heading="Sidi Bou Said"
            text="Perched on a cliff overlooking the Mediterranean Sea, Sidi Bou Said is a postcard-perfect village where time seems to slow down. Known for its iconic blue-and-white architecture, cobblestone streets, and bougainvillea-covered walls, this coastal gem captures the heart of every traveler. Stroll through art-filled alleys, sip mint tea at the legendary Café des Délices, and admire breathtaking sea views from every corner. With its blend of Andalusian charm, artistic soul, and peaceful atmosphere, Sidi Bou Said offers a dreamy escape just minutes from the bustling city of Tunis."
            img1={SidiBou1}
            img2={SidiBou2}
            />
            <DestinationData
            cName='first-des-reverse'
            heading="Tunisian Sahara"
            text="Vast, golden, and breathtakingly serene, the Tunisian Sahara offers an unforgettable journey into nature’s most majestic desert landscape. From the sweeping dunes of Douz and the salt flats of Chott El Jerid to the hidden oases and ancient Berber villages, every corner of the desert tells a story of adventure and tradition. Let the silence of the dunes awaken your senses as you ride a camel beneath a glowing sunset or spend a night under a blanket of stars in a traditional desert camp. Whether you're drawn by the raw beauty, the unique culture, or the deep history, the Tunisian Sahara invites you to disconnect from the modern world and connect with something truly timeless."
            img1={Sahara1}
            img2={Sahara2}
            />
                        <DestinationData
            cName='first-des'
            heading="El Jem Amphitheater"
            text="Rising proudly from the heart of El Jem, this colossal amphitheater is one of the best-preserved Roman ruins in the world — a true testament to Tunisia's ancient grandeur. Built in the 3rd century, the El Jem Amphitheater once held up to 35,000 spectators for thrilling gladiator games and public spectacles. Today, its towering arches, underground chambers, and open arena echo with history and awe. As you walk through the stone corridors and stand where emperors once sat, you’re transported back to the glory of Imperial Rome — right in the heart of North Africa."
            img1={Ruine1}
            img2={Ruine2}
            />
        </div>
    )
}