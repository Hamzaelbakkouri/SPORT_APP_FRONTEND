import { useRouter } from 'next/router';
import React from 'react'

const City = () => {
    const { query, isReady } = useRouter();
    const { cityName }: any = query;
    return (
        <div>
            daba mn hadi ghadi teqder te3ref achmn city kayqeleb 3Liha howa ;; got me ? yuppp
            {cityName}
        </div>
    )
}

export default City;
