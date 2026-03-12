
export const Crafters = () => {

    interface Crafter {
        name: string;
        creations: number;
    }

    const crafterArray: Crafter[] = [
        { name: "Ztarz", creations: 10 },
        { name: "Adrachn", creations: 20 },
        { name: "Keyoke", creations: 5 },
        { name: "Zukie", creations: 12 },
    ];

    return (
        <>
            <h1>Crafters</h1>
            
            <div>
                {crafterArray.map((item, index) => {
                    if (item.name === "Adrachn") {
                        return <div key={index}> {item.name}, Creations: {item.creations}</div>;
                    }
                    return null; // Alternatively, you can use 'filter()' before 'map()' to omit this check.
                })}
            </div>
        </>
        
    )
}