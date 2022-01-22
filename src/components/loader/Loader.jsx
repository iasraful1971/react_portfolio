import GridLoader from "react-spinners/GridLoader";
import './Loader.css';

const Loader = ({loading}) => {

    return (
        <div className="loader-container">
                    
             <GridLoader  color={"#36D7B7"} loading={loading}  size={15} margin={2} />

        
        </div>
    );
};

export default Loader;