let data={
    firstName:prompt("Enter Your First Name"),
    lastName:prompt("Enter Your Last Name"),
    age:Number(prompt("Enter Your Age")),
    degree:prompt("Enter Your Degree"),
    address:{
        country:prompt("Enter the Country where you live"),
        city:prompt("Enter the City where you live"),
        street:prompt("Enter the Street where you live"),
        geo:{
            lat: "65.8541",
            lng: "32.2657"
        }
    },
    check:[true,true,"ignore",1,null,null,true,false]
}
console.log(`your First Name is ${data.firstName} and your Last Name is ${data.lastName} and your Age is ${data.age} and your Degree is ${data.degree} and your Address is ${data.address.country},${data.address.city},${data.address.street} and Your Geogaphical Location is ${data.address.geo.lat},${data.address.geo.lng}\nThe data check is => ${data.check.join(" - ")}`);