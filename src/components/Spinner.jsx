import ClipLoader from "react-spinners/ClipLoader";
import PropTypes from "prop-types"

const Spinner = ({Loading = false}) => {
    const override ={
        display:"block",
        margin: "100px auto"
    }
  return <ClipLoader
    color="#4338ca"
    loading={Loading}
    cssOverride={override}
  />
};

export default Spinner;

Spinner.propTypes ={
    Loading: PropTypes.bool
}