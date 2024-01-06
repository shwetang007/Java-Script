function makeClass() {
    class Thermostat {
    constructor (temp) {
    this. temp5/9 (temp-32);
    }
    get temperature (){
    return this._temp;
    }
        return Thermostat;
    }
    const Thermostat = makeClass();
    const thermos = new Thermostat (76);
     let temp =thermos.temperature; thermos.temperature = 26;
    temp = thermos.temperature;

    console.log(temp);
}