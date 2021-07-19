const items = [
    {
        id: 1,
        name: "White Fish", 
        price: 20,
        perishable: true,
        unitsPerPackage: 10, 
    },
    {
        id: 2,
        name: "Dried Mangoes", 
        price: 15.50,
        perishable: false,
        unitsPerPackage: 80, 
    },{
        id: 3,
        name: "Captain Crunch", 
        price: 6,
        perishable: false,
        unitsPerPackage: 1, 
    },
    {
        id: 4,
        name: "milk", 
        price: 6.5,
        perishable: true,
        unitsPerPackage: 1, 
    },
]

const addItem = (itemName) => {
    let newItem = {}
    const lastIndex = items.length - 1 
    const currentLastItem = items[lastIndex]
    const maxId = currentLastItem.id
    const idForNewItem = maxId + 1

        newItem.id = idForNewItem
        newItem.name = itemName
        newItem.price = Math.round(Math.random()*(16-4)+4)
        newItem.perishable = true
        newItem.unitsPerPackage = 12
        newItem.dateCreated = new Date()

    items.push(newItem)

}

addItem("eggs")
addItem("beer")
addItem("bread")
addItem("bacon")
addItem("juice")

// console.log(items);

for (const item of items) {
    if (item.price > 8) {
    console.log(item)
    }
};