import React, { useState } from "react";

export default toggle => {
    const [favsMode, setFavsMode] = useState(false);
    return [favsMode, setFavsMode];
}