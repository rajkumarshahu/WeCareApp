class Patient {
    constructor(id, careProviderId, title, imageUrl, diagnosis, age, status) {
        this.id = id;
        this.careProviderId = careProviderId;
        this.title = title;
        this.imageUrl = imageUrl;
        this.diagnosis = diagnosis;
        this.age = age;
        this.status = status;
    }
}

export default Patient;