
import { Theme } from '@emotion/react';
import { FormControl, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent, useTheme } from '@mui/material';
import React from 'react';
import ButtonBox from '../Button/Button';
import Head from 'next/head';
import { DefaultInput } from '../Input/Input';

export function SearchBox() {

    return (
        <div className="bg-white items-center justify-between w-full flex rounded-full shadow-lg p-1 mb-5 sticky" >
            <div>
                <div className="p-2 mr-1 rounded-full hover:bg-gray-100 cursor-pointer">
                    <svg className="h-6 w-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
            <input className="font-bold uppercase rounded-full w-full py-2 pl-4 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs" type="text" placeholder="Search" />
            <div className="bg-red-500 p-2 hover:bg-red-700 cursor-pointer mx-2 rounded-full">
                <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
            </div>
        </div>
    )
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'casablanca',
    'rabat',
    'sale',
    'fes',
    'tanger',
    'meknes'

];


export function MultipleSelect() {
    const [personName, setPersonName] = React.useState<string[]>([]);

    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div>
            <Select
                className='font-bold uppercase w-full text-gray-700 bg-gray-50 leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs'
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput />}
                MenuProps={MenuProps}
            >
                {names.map((name) => (
                    <MenuItem
                        key={name}
                        value={name}
                    >
                        {name}
                    </MenuItem>
                ))}
            </Select>
        </div>
    );
}


export function BigSearch() {

    return (
        <div className='flex flex-col px-9'>
            <h1 className="text-xl font-bold mb-4 text-stone-600 flex gap-2">
                <p className={`text-xl font-bold text-green-500`}>SEARCH</p>HERE
            </h1>
            <div className="flex flex-col h-520 justify-center">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        <div className="flex flex-col">
                            <DefaultInput Label='GYM' placeHolder='search for your Gym' />
                        </div>

                        <div className="flex flex-col">
                            <label className="font-medium text-sm text-stone-600">LOCATION</label>
                            <div className='mt-2 block w-full rounded-md border-gray-300 shadow focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50'>
                                <MultipleSelect />
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <label className="font-medium text-sm text-stone-600">Published Date</label>
                            <input
                                type="date"
                                className="mt-2 font-bold py-4 uppercase w-full text-gray-700 bg-gray-50 border-gray-300 shadow leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="font-medium text-sm text-stone-600">Status</label>

                            <select
                                className="mt-2 block py-4 w-full rounded-md border-gray-300 shadow focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50 font-bold uppercase text-gray-700 bg-gray-50 leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs"
                            >
                                <option>Active</option>
                                <option>Pending</option>
                                <option>Deleted</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid md:flex grid-cols-2 justify-end space-x-4 w-full mt-6">
                        <ButtonBox field='Search' href='/' />
                    </div>
                </div>
            </div>
        </div>
    )
}