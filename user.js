class User {

    constructor(email, nom, prenom, age) {
        this.email = email;
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }

    static validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    isValid(){
        if(typeof(this.nom) === "string" && typeof(this.prenom) === "string" && typeof(this.age) === "number" && this.age >= 13 && typeof(this.email) === "string" && User.validateEmail(this.email)){
            return true
        }
        else{
            return false
        }
    }
}

module.exports = { User }