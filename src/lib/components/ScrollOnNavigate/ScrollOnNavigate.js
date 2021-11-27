import { withRouter } from 'react-router-dom';
import { useEffect } from "react";

const ScrollToTopFunction = ({ history }) => {
    useEffect(() => {
      const unlisten = history.listen(() => {
        window.scrollTo(0, 0);
      });
      return () => {
        unlisten();
      }
    }, [history]);

    return (null);
}
const ScrollOnNavigate = withRouter(ScrollToTopFunction);

export default ScrollOnNavigate;