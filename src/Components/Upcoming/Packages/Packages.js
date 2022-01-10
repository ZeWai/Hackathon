// import { useState } from 'react';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';

import PackageCard from "./PackageCard/PackageCard";

export default function Packages(props) {
    const cards = props.flowers.map(flower => (
        <div className="col-4">
            <PackageCard
                {...flower}
            />
        </div>

    ))

    return (
        <div className="row">
            {cards}
        </div>
    );
}