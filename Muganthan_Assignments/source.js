const SUCCESS = 1;
const ERR_INVALID = 0;
const ERR_ALREADYFILLED = 2;
const ERR_DRAINEDFULLY = 3

class Bottle {
    constructor(capacity,temperature,material) {
        this.capacity = capacity;
        this.temperature = temperature;
        this.material = material;
        this.currentVolume = 0;
    }

    getCapacity() {
        return this.capacity;
    }
    setCapacity(capacity) {
        this.capacity = capacity;
    }

    getTemperature() {
        return this.temperature;
    }

    setTemperature(temperature) {
        this.temperature = temperature;
    }

    getMaterial() {
        return this.material;
    }
    setMaterial(material) {
        this.material = material;
    }

    fill(flow) {
        if (flow <= 0 || this.capacity <= 0) {
            return ERR_INVALID 
        }

         if (this.currentVolume === this.capacity) {
            return ERR_ALREADYFILLED;
        }

        const newVolume = this.currentVolume + flow;
        if (newVolume > this.capacity) {
            this.currentVolume = this.capacity;
            return ERR_ALREADYFILLED;
        } else {
            this.currentVolume = newVolume;
            return SUCCESS;
        }

    }

    drain(level){
        if (level <=0 || this.capacity <= 0) {
            return ERR_INVALID;
        }
        if (level <= this.currentVolume) {
            this.currentVolume -= level;
            return SUCCESS
        }
        else {
            this.currentVolume = 0;
        }

        if (this.currentVolume === 0) {
            return ERR_DRAINEDFULLY;
        }
        
    }
}




module.exports = Bottle