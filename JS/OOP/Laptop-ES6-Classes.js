class laptop{
    constructor(brand, model, batteryPercentage)
    {
        this.brand=brand;
        this.model=model;
        this.batteryPercentage=batteryPercentage;
    }

    useSoftware() {
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
    charge()
    {
        if (this.batteryPercentage = 100)
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

}
