class Patient {
    constructor(id, careProviderId, title, imageUrl, diagnosis, age, description,bodyTemperature, pulseRate, respirationRate, systolicBP, diastolicBP, o2sat,  isCritical, ) {
        this.id = id;
        this.careProviderId = careProviderId;
        this.title = title;
        this.imageUrl = imageUrl;
        this.diagnosis = diagnosis;
        this.age = age;
        this.description = description;
        this.bodyTemperature = bodyTemperature;
        this.pulseRate = pulseRate;
        this.respirationRate = respirationRate;
        this.systolicBP = systolicBP;
        this.diastolicBP = diastolicBP;
        this.o2sat = o2sat;
        this.isCritical = isCritical;
    }
}

export default Patient;