import { useRouter } from 'next/router';
import React from 'react'

const SallePage = () => {
    const { query, isReady } = useRouter();
    const { salleName }: any = query;
    return (
        <div>
            {salleName}
        </div>
    )
}

export default SallePage;
