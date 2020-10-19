class Patient {
    constructor(id, careProviderId, title, imageUrl, diagnosis, age, description,  isCritical) {
        this.id = id;
        this.careProviderId = careProviderId;
        this.title = title;
        this.imageUrl = imageUrl;
        this.diagnosis = diagnosis;
        this.age = age;
        this.description = description;
        this.isCritical = isCritical;
    }
}

export default Patient;