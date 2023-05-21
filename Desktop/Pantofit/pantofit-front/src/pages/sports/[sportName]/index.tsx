import { useRouter } from 'next/router';
import React from 'react'

const City = () => {
    const { query, isReady } = useRouter();
    const { sportName }: any = query;
    return (
        <div>
            {sportName}
        </div>
    )
}

export default City;
