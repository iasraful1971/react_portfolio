import { RingLoader } from "react-spinners";
import './Loader.css';
const Loader = ({loading}) => {

    return (
        <div className="loader-container">
                    
             <RingLoader className="load"
            color={"#36D7B7"} loading={loading}  size={60} margin={2} />

        
        </div>
    );
};

export default Loader;