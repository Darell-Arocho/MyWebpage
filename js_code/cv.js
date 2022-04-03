class CV{

    // All private variables have a # in front of them
    // The rest are public
    // This is the private section
    #name;
    #phoneNum;
    #email;
    #institution;
    #degree;
    #gpa;

    

    // Everything below the private variables is public
    // This is the public section
    constructor(){
        this.#name = "Darell Arocho León";
        this.#phoneNum = "787-932-2887";
        this.#email = "darell.arocho@upr.edu";
        this.#institution = "University of Puerto Rico - Mayagüez";
        this.#degree = "Bachelor's of Computer Science";
        this.#gpa = 3.81;
    }

    summary(){
        console.log("I am a motivated and responsible Computer Science student from Puerto Rico seeking to learn as\n");
        console.log("much as possible from my field of study and be able to tackle interesting and complex challenges\n");
        console.log("during my career.\n");
        console.log("Some of my interests include computer designs, software development and graphical design.\n");
    }

    education(){
        console.log("Institution: " + this.#institution + "\n");
        console.log("Degree: " + this.#degree + "\n");
        console.log("GPA: " + this.#gpa + "\n");
    }

    projects(){
        console.log("Discord Bot\n");
        console.log("- Developed a Discord Bot using Python\n");
        console.log("Investigation for Methodology on Evolutionary Algorithms\n");
        console.log("- Developed a Methodology as part of my college course MATE4990 where we proved\n");
        console.log(" that Evolutionary Algorithms can be used to predict eye colors in newborns with at least\n");
        console.log(" a 90% accuracy rating.");
    }

    courses(){
        console.log("- COMP 3010: Intro to Prog I");
        console.log("- COMP 3110: Intro to Prog II");
        console.log("- COMP 4016: Computer Organization");
        console.log("- MATE 3171/3172: Precalculus I & II");
        console.log("- MATE 3031/3032/3063: Calculus I, II & III");
        console.log("- MATE 3181: Discrete Mathematics");
        console.log("- MATE 4031: Linear Algebra");
        console.log("- ESMA 3016: Statistical Data Analysis");
    }

    // Getters
    get gtName(){
        return this.#name;
    }

    get gtPhone(){
        return this.#phoneNum;
    }

    get gtEmail(){
        return this.#email;
    }

    get gtInst(){
        return this.#institution;
    }

    get gtDegree(){
        return this.#degree;
    }

    get gtGPA(){
        return this.#gpa;
    }
}