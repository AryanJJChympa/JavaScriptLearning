(function Aryan(){
    //Named IFFE
    console.log("Aryan Connected");
})()

( (name)=>{
    //IFFE
    console.log(`Aryan Connected Two ${name}`);
} )('Aryan')