const laptop= function(brand, model, batteryPercentage){
    this.brand=brand;
    this.model=model;
    this.batteryPercentage=batteryPercentage;
}

laptop.prototype.useSoftware=function()
{
    if (this.batteryPercentage >= 15)
    {
        this.batteryPercentage=this.batteryPercentage-15;
    }
    else
    {
        this.batteryPercentage=0;
    }
    console.log(`The new battery percentage is ${this.batteryPercentage}%`);
}

laptop.prototype.useSoftware=function()
{
    if (this.batteryPercentage >= 15)
    {
        this.batteryPercentage=this.batteryPercentage-15;
    }
    else
    {
        this.batteryPercentage=0;
    }
    console.log(`The new battery percentage is ${this.batteryPercentage}%`);
}


laptop.prototype.charge=function()
{
    if (this.batteryPercentage >= 100)
    {
        console.log(`Battery already full charged`)
    }
    else
    {
        this.batteryPercentage=this.batteryPercentage+25;
        if(this.batteryPercentage > 100)
        {
            this.batteryPercentage=100;
        }
        console.log(`The new battery percentage is ${this.batteryPercentage}%`);

    }
}
