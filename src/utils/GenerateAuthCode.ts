export class GenerateAuthCode {

    private generate() {
        return Math.random().toString(36).toUpperCase().slice(2, 8)
    }

    get getCode() {
        return this.generate()
    }
}