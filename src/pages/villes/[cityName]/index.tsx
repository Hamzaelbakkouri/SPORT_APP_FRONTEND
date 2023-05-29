import { useRouter } from 'next/router';
import React from 'react'

const City = () => {
    const { query, isReady } = useRouter();
    const { cityName }: any = query;
    return (
        <div>
            {cityName}
        </div>
    )
}

export default City;
