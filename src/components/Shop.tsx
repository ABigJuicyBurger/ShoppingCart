import {state, useEffect, useState} from "react";

// define proptypes for states
// type ShopProps = {
//     loading = boolean;
//     error = string;
//     data = string;
// }


export default function Shop() {
    const [loading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    async function getShoppingItems() {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const fetchedData = await response.json();
            console.log(fetchedData);
            setData(fetchedData);
        }
        catch(err) {
            setError("failed to fetch data");
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getShoppingItems();
    }, [])

    return (
        <div>
            <h1>Our AI Companions</h1>
        </div>
    )
}