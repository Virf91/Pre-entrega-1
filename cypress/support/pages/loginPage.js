export class LoginPage {
constructor(){
    this.userInput = '#user';
    this.passInput = '#pass';
    this.loginButton = '#submitForm';
}

    escribirUsuario(usuario){
        cy.get(this.userInput).type(usuario)
    };

    esscribirContraseña(password){
        cy.get(this.passInput).type(password)
    };

    clickButtonSubmit(){
        cy.get(this.loginButton).click()
    };
}