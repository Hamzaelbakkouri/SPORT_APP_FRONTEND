
export const filterByName = (array: any[], name: string) => {
    return (array.filter((item: { name: string; }) => item.name === name))
};
