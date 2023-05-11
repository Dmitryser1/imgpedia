import {Link} from 'react-router-dom';

const Error_page = () => {
    return (
      <div className="error_page">
        <h2>Error 404</h2>
        <p>Page not found</p>
        <Link to="/">Back to home</Link>
      </div>
    )
  }
  export default Error_page;
