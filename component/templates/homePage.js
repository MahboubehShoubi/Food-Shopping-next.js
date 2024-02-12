import Banner from "../modules/Banner";
import Attributes from "../modules/Attributes";
import Definition from "../modules/Definition";
import Companies from "../modules/Companies";
import Instruction from "../modules/Instruction";
import Guide from "../modules/Guide";
import Restrictions from "../modules/Restrictions";

const homePage = () => {
    return (
        <>
        <Banner />
        <Attributes />
        <Definition />
        <Companies />
        <Instruction />
        <Guide />
        <Restrictions />
        </>
    );
};

export default homePage;