import { useEffect, useState } from "react";

function NoResult({searchTerm}) {

    const [message, setMessage] = useState(searchTerm);

    /*
     useEffect(() => {
        setMessage(searchTerm)
      });
*/
    return (
        < div>
           <p>Sorry, nothing could be found under: {message} </p>
        </div>
    )
}

export default NoResult;