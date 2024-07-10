import MisiMSN from "../assets/images/VisiMisiImg/misi.svg"
import LayananMSN from "../assets/images/VisiMisiImg/layanan.svg"
import VisiMSN from "../assets/images/VisiMisiImg/visi.svg"

const visionMission = [
    {
        id: 1,
        title: "Mission",
        icon: <img src={MisiMSN} alt="misi MSN PRODUCTION" />,
        description:
            "Become a private company that is reliable in providing services and trade in accordance with its KBLI.",
    },
    {
        id: 2,
        title: "Service",
        icon: <img src={LayananMSN} alt="layanan MSN PRODUCTION" />,
        description:
            "Earn consumer loyalty, provide them with memorable experiences by creating mutually beneficial relationships.",
    },
    {
        id: 3,
        title: "Vision",
        icon: <img src={VisiMSN} alt="visi MSN PRODUCTION" />,
        description:
            "In carrying out its duties, Mulia Sejati Nusantara Production always maintains professionalism, honesty, togetherness, order and occupational health so that quality work is produced.",
    },
];

export default visionMission;
