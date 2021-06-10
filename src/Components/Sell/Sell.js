import React, { useEffect, useState } from 'react';
import DateTimePicker from 'react-datetime-picker';



const Sell = () => {

    const [value, onChange] = useState(new Date());


    const [item, setItem] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [discount, setDiscount] = useState('');
    const [netamount, setNetamount] = useState('');
    const [totalPrice, setTotalPrice] = useState('');



    const handleChange = (event) => {
        setItem(event.target.value);
    };

    const handleQuantity = (event) => {
        setQuantity(event.target.value);

    }
    const handlePrice = (event) => {
        setPrice(event.target.value);
        handleTotal(quantity, price);
        // setTotalPrice(handleTotalPrice(quantity, price));
    }
    const handleDiscount = (event) => {
        setDiscount(event.target.value);
        handleTotalPrice(quantity, price, discount);

    }

    const handleTotal = (quantity, price) => {
        const netPrice = quantity * price;
        setTotalPrice(netPrice);
    }

    const handleTotalPrice = (quantity, price, discount = 0) => {
        const netPrice = (quantity * price) - discount;
        setNetamount(netPrice);
    }

    const handleDelete = () => {

    }
    useEffect(() => {

    }, [quantity])

    return (

        <div className="row d-flex">
            <div className="col-md-8">
                <div className="col-md-12">
                    <div>
                        <select id="cars" onChange={handleChange}>
                            <option value="" selected>Item</option>
                            <option value="Pepci">Pepci</option>
                            <option value="Carrot">Carrot</option>
                            <option value="Chips">Chips</option>
                            <option value="Mum">Mum</option>
                        </select>

                        <DateTimePicker
                            onChange={onChange}
                            value={value}
                        />
                    </div>
                </div>

                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">SL</th>
                            <th scope="col">Item name</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                            <th scope="col">Discount</th>
                            <th scope="col">Net Amount</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>{item}</td>
                            <td><input onBlur={handleQuantity} type="number" /></td>
                            <td><input onBlur={handlePrice} type="number" /></td>
                            <td><input onBlur={handleDiscount} type="number" /></td>
                            <td>{netamount}</td>
                            <td><button onclick={handleDelete}>Delete</button></td>
                            <td></td>
                        </tr>

                    </tbody>
                </table>
            </div>
            <div className="col-md-4">
                <p><small>Total Quantity</small></p>
                <p><small>Total Price : {totalPrice}</small></p>
                <p><small>Total Discount : {discount}</small></p>
                <p><small>Pending Amount : {netamount}</small></p>
                <p><small>Net Amount : {netamount}</small></p>
                <p><small>Discount(%)</small></p>
                <p><small>Discount (Taka)</small></p>
                <p><small>Others Coast</small></p>
                <p><small>Paid Amount</small></p>
            </div>
        </div>
    );
};

export default Sell;