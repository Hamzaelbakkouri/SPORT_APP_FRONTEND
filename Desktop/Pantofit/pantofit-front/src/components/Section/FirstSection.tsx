import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import GoTo from '../Button/GoTo';

type SalleData = {
    id: number;
    image: string;
    placeName: string;
    Description: string;
}

const Salles: SalleData[] = [
    {
        id: 1, image: 'https://static.yabiladi.com/files/articles/33f576109f0e0fabe62cf1f079fc652120230411182531.jpg', placeName: 'Salle1', Description: 'check all the Gyms into Rabat'
    },
    {
        id: 2, image: 'https://i.natgeofe.com/n/8db4f899-9179-4174-9516-70491944fe9a/city-evening-casablanca-morocco_2x1.jpg', placeName: 'Salle2', Description: 'check all the Gyms into Casablanca'
    },
    {
        id: 3, image: 'https://static.menara.ma/content/uploads/2020/07/ville-de-tanger.jpg', placeName: 'Salle3', Description: 'check all the Gyms into Tanger'
    },
    {
        id: 4, image: 'https://static.menara.ma/content/uploads/2020/07/ville-de-tanger.jpg', placeName: 'Salle3', Description: 'check all the Gyms into Tanger'
    },
    {
        id: 5, image: 'https://static.menara.ma/content/uploads/2020/07/ville-de-tanger.jpg', placeName: 'Salle5', Description: 'check all the Gyms into Tanger'
    },
    {
        id: 6, image: 'https://static.menara.ma/content/uploads/2020/07/ville-de-tanger.jpg', placeName: 'Salle6', Description: 'check all the Gyms into Tanger'
    },
    {
        id: 7, image: 'https://static.menara.ma/content/uploads/2020/07/ville-de-tanger.jpg', placeName: 'Salle7', Description: 'check all the Gyms into Tanger'
    },
]

export default function ImageAvatars() {
    const overFlowref = React.useRef(null);
    const Cardref = React.useRef(null);
    const [showController, setShowController] = React.useState();
    const [OverflowWidth, setOverflowWidth] = React.useState(0);
    const [windowWidth, setWindowWidth] = React.useState(0)
    const [index, setIndex] = React.useState(1)

    const OverFlowController = (controller: 'next' | 'back') => {
        // console.log(controller);
        const CardWidth = Cardref.current.offsetWidth || 0
        // console.log(CardWidth * index - 1)
        overFlowref.current.scrollTo({ left: controller === 'next' ? CardWidth * index : (CardWidth * (index - 1)), behavior: 'smooth' })
        controller === 'next' ?
            setIndex(v => v + 1) :
            setIndex(v => v - 1)
    }

    React.useEffect(() => {
        if (overFlowref.current) {
            setOverflowWidth(overFlowref.current.scrollWidth);
        }
        if (window) {
            setWindowWidth(window?.innerWidth);
        }
    }, []);

    return (
        <div className='flex items-center p-4'>
            {OverflowWidth > windowWidth ? (
                <div className='' onClick={() => OverFlowController('back')}>
                    <GoTo to="Back" />
                </div>
            ) : null}

            <div className='flex py-10 items-center mt-5 overflow-x-scroll w-screen scrollbar-hidden snap-x' ref={overFlowref}>
                {Salles.map((items) => (
                    <div key={items.id} ref={Cardref} className='flex flex-col justify-center items-center min-w-[300px] snap-center z-10 '>
                        <Avatar
                            alt="..."
                            src={items.image}
                            sx={{ width: 75, height: 75 }}
                            className={`border-r-8 border-primary-500`}
                        />
                        <p className={`text-4xl font-semibold text-primary-500 `}>{items.placeName}</p>
                        <p className="text-2xl text-center font-semibold text-gray-900 w-40">{items.Description}</p>
                    </div>
                ))}
            </div>
            {
                OverflowWidth > windowWidth ? (
                    <div onClick={() => OverFlowController('next')}>
                        <GoTo to="next" />
                    </div>
                ) : null
            }
        </div >
    );
}


