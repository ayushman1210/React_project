import React, { useEffect, useState } from 'react'
import axios from "axios";
const Meals = () => {
    const [item, setitem] = useState([]);
    useEffect(() => {
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian")
            .then((res) => setitem(res.data.meals))
            .catch((e) => console.log(e))
    }, [])

    const itemlist = item.map(({ strMeal, strMealThumb, idMeal }) => (
        <section className="card" key={idMeal}>
            <img src={strMealThumb} alt={strMeal} />
            <section className="content">
                <p>{strMeal}</p>
                <p>{idMeal}</p>
            </section>
        </section>
    ));

    return <div className='items-container'>{itemlist}</div>
}
export default Meals