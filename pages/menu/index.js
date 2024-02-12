import MenuPage from "../../component/templates/MenuPage";

const Menu = ({data}) => {
    return (
        <div>
            <MenuPage data={data}/>
        </div>
    );
};

export default Menu;

export async function getStaticProps() {
    const res = await fetch("http://localhost:4000/data")
    const data = await res.json();

    return{
        props : { data } ,
        revalidate:3600 ,
    }
}